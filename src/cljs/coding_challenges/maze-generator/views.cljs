(ns coding-challenges.maze-generator.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.maze-generator.cell :as cell]
           [com.rpl.specter :as sp
            :refer [putval ALL transform FIRST select-one select
                    setval collect-one pred keypath]]))

(def w 600)
(def h 600)

(defn update-val [p f]
 [p (sp/terminal f)])

(defn multi [f]
 (fn [& pairs]
  (apply sp/multi-path
        (map (partial apply f)
             (partition 2 pairs)))))

(def multi-update-val (multi update-val))

(defn assoc-val [p v]
 [p (sp/terminal-val v)])

(def multi-assoc-val (multi assoc-val))

(defn setup []
 (->> {:w 40}
      (sp/multi-transform*
       (multi-update-val
        [(collect-one :w) :cols] (comp
                                  q/floor
                                  (partial / (q/width))
                                  identity)
        [(collect-one :w) :rows] (comp
                                  q/floor
                                  (partial / (q/height))
                                  identity)
        [(collect-one :cols)
         (collect-one :rows) :grid]
        (comp
         (fn [grid-of-cells]
          (transform
           [FIRST FIRST]
           (fn [first-cell]
            (assoc
             first-cell
             :current true
             :visited true))
           grid-of-cells))
         (fn [cols rows]
          (let [empty-grid
                (vec
                 (repeatedly
                  cols
                  (partial
                   vec
                   (repeat
                    rows nil))))]
           (reduce
            #(%2 %1)
            empty-grid
            (for [i (range cols)
                  j (range rows)]
             #(setval (cell/path i j)
                      (cell/make i j) %))))))))))

(defn remove-wall [current-path current-wall
                   next-path next-wall
                   grid]
 (->> grid
      (sp/multi-transform*
       (multi-update-val
        current-path (partial
                       cell/remove-wall current-wall)
        next-path (partial
                    cell/remove-wall next-wall)))))

(defn remove-walls [{ci :i
                     cj :j}
                    {ni :i
                     nj :j}
                    grid]
 (let [x (- ci ni)
       y (- cj nj)
       current-path (cell/path ci cj)
       next-path (cell/path ni nj)]
  (cond->>
   grid
   (= x 1)
   (remove-wall current-path :left
                next-path :right)
   (= x -1)
   (remove-wall current-path :right
                next-path :left)
   (= y 1)
   (remove-wall current-path :top
                next-path :bottom)
   (= y -1)
   (remove-wall current-path :bottom
                next-path :top))))

(def current-cell-path
 (sp/comp-paths ALL ALL (pred :current)))

(defn update* [{grid :grid
                stack :stack
                :as sketch}]
 (let [{ci :i
        cj :j
        :as current}
       (sp/compiled-select-one current-cell-path grid)
       previous-current-path (cell/path ci cj)
       {ni :i
        nj :j
        :as nxt}
       (cell/check-neighbors grid current)
       next-current-path (cell/path ni nj)]
    (cond
     nxt
     (->> sketch
          (sp/multi-transform*
           (sp/multi-path
            [:grid
             (sp/multi-path
              (assoc-val
               [current-cell-path :current] false)
              [next-current-path
               (multi-assoc-val
                :current true
                :visited true)]
              [(collect-one
                previous-current-path)
               (collect-one
                next-current-path)
               (sp/terminal
                remove-walls)])]
            (update-val
             :stack #(conj % previous-current-path)))))
     (seq stack)
     (->> sketch
          (sp/multi-transform*
           (sp/multi-path
            [:grid
             (multi-assoc-val
              [current-cell-path :current] false
              [(peek stack) :current] true)]
            (update-val
             :stack pop))))
     :else sketch)))

(defn draw [{grid :grid
             w :w
             :as sketch}]
 (q/background 51)
 (doseq [cell (flatten grid)]
  (cell/draw w cell))
 (cell/highlight w (sp/compiled-select-one
                    current-cell-path grid)))

(q/defsketch maze-generator-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "maze-generator"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:maze-generator :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Maze generator demo"
         :level :level1]
        [:canvas#maze-generator {:width w :height h}]])]))
   :component-did-mount maze-generator-sketch}))

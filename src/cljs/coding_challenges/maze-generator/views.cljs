(ns coding-challenges.maze-generator.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.maze-generator.cell :as cell]
           [com.rpl.specter :as sp
            :refer [ALL FIRST select-one collect-one pred multi-path]]
           [coding-challenges.util :refer [mt u a cond->mt cond-mt
                                           PASS]]))

(def w 600)
(def h 600)

(defn setup []
 (u {:w 40}
    [(collect-one :w) :cols] #(->> % (/ (q/width)) q/floor)
    [(collect-one :w) :rows] #(->> % (/ (q/height)) q/floor)
    [(collect-one :cols)
     (collect-one :rows) :grid]
    (comp
     (fn [grid-of-cells]
      (mt grid-of-cells
          [FIRST FIRST
           (a
            :current true
            :visited true)]))
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
         #(a %
             (cell/path i j) (cell/make i j)))))))))

(defn remove-wall [previous-current-path previous-wall
                   next-current-path next-wall]
 (u
  [previous-current-path :walls] #(disj % previous-wall)
  [next-current-path :walls] #(disj % next-wall)))

(defn remove-walls [{ci :i
                     cj :j}
                    {ni :i
                     nj :j}
                    grid]
 (let [x (- ci ni)
       y (- cj nj)
       previous-current-path (cell/path ci cj)
       next-current-path (cell/path ni nj)]
  (cond->mt
   grid
   (= x 1)
   (remove-wall previous-current-path :left
                next-current-path :right)
   (= x -1)
   (remove-wall previous-current-path :right
                next-current-path :left)
   (= y 1)
   (remove-wall previous-current-path :top
                next-current-path :bottom)
   (= y -1)
   (remove-wall previous-current-path :bottom
                next-current-path :top))))

(def current-path
 (sp/comp-paths ALL ALL (pred :current)))

(defn update* [{grid :grid
                stack :stack
                :as sketch}]
 (let [{ci :i
        cj :j
        :as current}
       (sp/compiled-select-one current-path grid)
       previous-current-path (cell/path ci cj)
       {ni :i
        nj :j
        :as nxt}
       (cell/check-neighbors grid current)
       next-current-path (cell/path ni nj)]
  (cond-mt
   sketch
   nxt
   (multi-path
    [:grid
     (multi-path
      (a
       [current-path :current] false)
      [next-current-path
       (a
        :current true
        :visited true)]
      (u
       [(collect-one
         previous-current-path)
        (collect-one
         next-current-path)] remove-walls))]
    (u
     :stack #(conj % previous-current-path)))
   (seq stack)
   (multi-path
    [:grid
     (a
      [current-path :current] false
      [(peek stack) :current] true)]
    (u
     :stack pop))
   :else PASS)))

(defn draw [{grid :grid
             w :w
             :as sketch}]
 (q/background 51)
 (doseq [cell (flatten grid)]
  (cell/draw w cell))
 (cell/highlight w (sp/compiled-select-one
                    current-path grid)))

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

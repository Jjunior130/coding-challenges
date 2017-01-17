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

(let [g (vec
         (repeatedly
          5
          #(vec
            (repeat
             5
             nil))))]
 (reduce
  #(%2 %1)
  g
  (for [i (range 5)
        j (range 5)]
   #(assoc-in %
     [i
      j]
     (cell/make i j)))))

(defn setup []
 (->> {:w 40}
      (transform [(collect-one :w) :cols]
                 #(q/floor (/ (q/width) %1)))
      (transform [(collect-one :w) :rows]
                 #(q/floor (/ (q/height) %1)))
      (transform [(collect-one :cols)
                  (collect-one :rows)
                  :grid]
                 (fn [cols rows grid]
                  (let [g (vec
                           (repeatedly
                            cols
                            #(vec
                              (repeat
                               rows nil))))]
                   (->> (reduce
                         #(%2 %1)
                         g
                         (for [i (range cols)
                               j (range rows)]
                          #(setval [(keypath i)
                                    (keypath j)]
                                   (cell/make i j) %)))
                        (setval [(keypath 0)
                                 (keypath 0)
                                 :visited]
                                true)
                        (setval [(keypath 0)
                                 (keypath 0)
                                 :current]
                                true)))))))

(defn update* [sketch]
 sketch)

(defn draw [{grid :grid
             w :w
             :as sketch}]
 (q/background 51)
 (doseq [cell (flatten grid)]
  (cell/draw w cell))
 (cell/highlight w (select-one [ALL ALL (pred :current)] grid)))


(defn remove-walls [{ci :i
                     cj :j}
                    {ni :i
                     nj :j}
                    sketch]
 (let [x (- ci ni)
       y (- cj nj)]
  (->> sketch
       (transform [:grid (keypath ci)
                         (keypath cj)]
                  (fn [current]
                   (cond->>
                    current
                    (= x 1)
                    (cell/remove-wall :left)
                    (= x -1)
                    (cell/remove-wall :right)
                    (= y 1)
                    (cell/remove-wall :top)
                    (= y -1)
                    (cell/remove-wall :bottom))))
       (transform [:grid (keypath ni)
                         (keypath nj)]
                  (fn [nxt]
                   (cond->>
                    nxt
                    (= x 1)
                    (cell/remove-wall :right)
                    (= x -1)
                    (cell/remove-wall :left)
                    (= y 1)
                    (cell/remove-wall :bottom)
                    (= y -1)
                    (cell/remove-wall :top)))))))

(defn key-pressed [{cols :cols
                    grid :grid
                    stack :stack
                    :as sketch}
                   event]
 (let [{ci :i
        cj :j
        :as current}
       (->> grid
            (select-one [ALL ALL (pred :current)]))
       {ni :i
        nj :j
        :as nxt}
       (cell/check-neighbors cols grid current)]
  (cond
   nxt
   (->> sketch
        (remove-walls current nxt)
        (setval [:grid ALL ALL (pred :current) :current] false)
        (transform [(collect-one :grid (keypath ci)
                                       (keypath cj))
                    :stack]
                   (fn [current stack]
                    (conj stack current)))
        (transform [:grid (keypath ni)
                          (keypath nj)]
                   #(assoc %
                     :current true
                     :visited true)))
   (seq stack)
   (let [{si :i
          sj :j} (peek stack)]
    (->> sketch
         (setval [:grid ALL ALL (pred :current) :current] false)
         (setval [:grid (keypath si)
                        (keypath sj) :current] true)
         (transform :stack pop)))
   :else sketch)))

(q/defsketch maze-generator-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-pressed key-pressed
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


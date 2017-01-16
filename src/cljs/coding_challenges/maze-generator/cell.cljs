(ns coding-challenges.maze-generator.cell
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [ALL transform setval
                    collect-one putval]]))

(defn make [i j]
 {:type 'Cell
  :i i
  :j j
  :visited false
  :walls #{:top :right :bottom :left}})

(defn check-neighbors [cols
                       grid
                       {i :i
                        j :j
                        :as cell}]
 (let [index
       (fn [i j]
        (+ (* cols j) i))
       {top-visited? :visited
        :as top} (grid (index i (- j 1)) nil)
       {right-visited? :visited
        :as right} (grid (index (+ i 1) j) nil)
       {bottom-visited? :visited
        :as bottom} (grid (index i (+ j 1)) nil)
       {left-visited? :visited
        :as left} (grid (index (- i 1) j) nil)
       neighbors (cond->
                  []
                  (and top (not top-visited?))
                  (conj top)
                  (and right (not right-visited?))
                  (conj right)
                  (and bottom (not bottom-visited?))
                  (conj bottom)
                  (and left (not left-visited?))
                  (conj left))]
  (when (pos? (count neighbors))
   (rand-nth neighbors))))

(defn update* [cell])

(defn highlight [w {i :i
                    j :j
                    :as cell}]
 (q/no-stroke)
 (q/fill 0 0 255 100)
 (let [x (* i w)
       y (* j w)]
  (q/rect x y w w)))

(defn draw [w
            {i :i
             j :j
             walls :walls
             visited? :visited
             :as cell}]
 (q/stroke 255)
 (let [x (* i w)
       y (* j w)]
  (when (walls :top)
   (q/line x y (+ x w) y))
  (when (walls :right)
   (q/line (+ x w) y (+ x w) (+ y w)))
  (when (walls :bottom)
   (q/line (+ x w) (+ y w) x (+ y w)))
  (when (walls :left)
   (q/line x (+ y w) x y))
  (when visited?
   (q/no-stroke)
   (q/fill 255 0 255 100)
   (q/rect x y w w))))



(ns coding-challenges.maze-generator.cell
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [ALL transform setval select-one
                    collect-one putval keypath]]))

(defn make [i j]
 {:type 'Cell
  :i i
  :j j
  :walls #{:top :right :bottom :left}})

(defn path [i j]
 [(keypath i)
  (keypath j)])

(defn check-neighbors [grid
                       {i :i
                        j :j
                        :as cell}]
 (->> grid
      (transform
       [(collect-one (path i (dec j)))
        (collect-one (path (inc i) j))
        (collect-one (path i (inc j)))
        (collect-one (path (dec i) j))]
       (fn [{top-visited? :visited
             :as top}
            {right-visited? :visited
             :as right}
            {bottom-visited? :visited
             :as bottom}
            {left-visited? :visited
             :as left}]
        (let [neighbors
              (cond->
               []
               (and top (not top-visited?))
               (conj top)
               (and right (not right-visited?))
               (conj right)
               (and bottom (not bottom-visited?))
               (conj bottom)
               (and left (not left-visited?))
               (conj left))]
         (when (seq neighbors)
          (rand-nth neighbors)))))))

(defn remove-wall [wall cell]
 (transform :walls #(disj % wall) cell))

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
   (q/line x y
           (+ x w) y))
  (when (walls :right)
   (q/line (+ x w) y
           (+ x w) (+ y w)))
  (when (walls :bottom)
   (q/line (+ x w) (+ y w)
           x (+ y w)))
  (when (walls :left)
   (q/line x (+ y w)
           x y))
  (when visited?
   (q/no-stroke)
   (q/fill 255 0 255 100)
   (q/rect x y w w))))

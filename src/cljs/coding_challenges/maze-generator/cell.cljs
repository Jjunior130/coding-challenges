(ns coding-challenges.maze-generator.cell
 (:require [quil.core :as q :include-macros true]
           [coding-challenges.util :refer [u a cond->mt]]
           [com.rpl.specter :as sp
            :refer [ALL select-one STAY
                    collect-one keypath]]))

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
 (u grid
    [(collect-one (path      i (dec j)))
     (collect-one (path (inc i)     j))
     (collect-one (path      i (inc j)))
     (collect-one (path (dec i)     j))]
    (fn [{top-visited? :visited
          :as top}
         {right-visited? :visited
          :as right}
         {bottom-visited? :visited
          :as bottom}
         {left-visited? :visited
          :as left}]
     (let [neighbors
           (cond->mt
            []
            (and top (not top-visited?))
            (a END [top])
            (and right (not right-visited?))
            (a END [right])
            (and bottom (not bottom-visited?))
            (a END [bottom])
            (and left (not left-visited?))
            (a END [left]))]
      (when (seq neighbors)
       (rand-nth neighbors))))))

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

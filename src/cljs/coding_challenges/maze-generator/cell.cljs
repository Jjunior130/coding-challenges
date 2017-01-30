(ns coding-challenges.maze-generator.cell
 (:require [quil.core :as q :include-macros true]))

(defrecord Cell [i j walls]
 IFn
 (-invoke [this k]
          (k this))
 (-invoke [this grid k v]
          (update
           grid i (fn [row]
                   (update
                    row j (fn [cell]
                           (if (fn? v)
                            (update cell k v)
                            (assoc cell k v))))))))
(defn make [i j]
 (Cell. i j #{:top :right :bottom :left}))

(defn index [grid i j]
 ((grid i (constantly nil)) j nil))

(defn check-neighbors [grid
                       {i :i
                        j :j}]
 (let [top    (index grid      i (dec j))
       right  (index grid (inc i)     j)
       bottom (index grid      i (inc j))
       left   (index grid (dec i)     j)
       neighbors
       (cond->
        []
        (and top (not (top :visited)))
        (conj top)
        (and right (not (right :visited)))
        (conj right)
        (and bottom (not (bottom :visited)))
        (conj bottom)
        (and left (not (left :visited)))
        (conj left))]
  (when (seq neighbors)
   (rand-nth neighbors))))

(defn update* [cell])

(defn highlight [w {i :i
                    j :j}]
 (q/no-stroke)
 (q/fill 0 0 255 100)
 (let [x (* i w)
       y (* j w)]
  (q/rect x y w w)))

(defn draw [w
            {i :i
             j :j
             walls :walls
             visited? :visited}]
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

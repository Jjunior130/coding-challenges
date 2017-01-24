(ns coding-challenges.menger-sponge-fractal.box
 (:require [quil.core :as q :include-macros true]))

(defn make [x y z r]
 {:type 'Box
  :pos {:x x :y y
        :z z}
  :r r})

(defn generate [{r :r
                 {x :x
                  y :y
                  z :z} :pos
                 :as box}]
 (for [nx (range -1 2)
       ny (range -1 2)
       nz (range -1 2)
       :let [sum (apply + (map Math/abs [nx ny nz]))
             new-r (/ r 3)]
       :when (> sum 1)]
  (make (+ (* nx new-r) x)
        (+ (* ny new-r) y)
        (+ (* nz new-r) z)
        new-r)))

(defn draw [{r :r
             {x :x
              y :y
              z :z} :pos
             :as box}]
 (q/push-matrix)
 (q/translate x y z)
 (q/no-stroke)
 (q/box r)
 (q/pop-matrix))


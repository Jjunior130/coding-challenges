(ns coding-challenges.menger-sponge-fractal.box
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]))

(defn make [x y z r]
 {:type 'Box
  :pos {:x x :y y
        :z z}
  :r r})

(defn generate [box]
 (for [x (range -1 2)
       y (range -1 2)
       z (range -1 2)
       :let [sum (apply + (map Math/abs [x y z]))
             new-r (/ (:r box) 3)]
       :when (> sum 1)]
  (make (+ (* x new-r 2) (-> box :pos :x))
        (+ (* y new-r 2) (-> box :pos :y))
        (+ (* z new-r 2) (-> box :pos :z))
        new-r)))

(defn draw [box]
 (q/push-matrix)
 (q/translate (-> box :pos :x)
              (-> box :pos :y)
              (-> box :pos :z))
 (q/stroke 255)
 (q/no-stroke)
 (q/no-fill)
 (q/box (:r box) (:r box) (:r box))
 (q/pop-matrix))


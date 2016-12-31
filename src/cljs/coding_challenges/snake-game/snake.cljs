(ns coding-challenges.snake-game.snake
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn make
 ([]
  (make 0 0 1 0))
 ([x y xv yv]
  {:type 'Snake
   :x x
   :y y
   :xspeed xv
   :yspeed yv}))

(defn update [w h scl food snake]
 (->> snake
      (transform [(collect-one :xspeed) :x]
                 (comp #(q/constrain % 0 (- w scl))
                       #(+ (* %1 scl) %2)))
      (transform [(collect-one :yspeed) :y]
                 (comp #(q/constrain % 0 (- h scl))
                       #(+ (* %1 scl) %2)))))


(defn draw [scl snake]
 (q/fill 255)
 (q/rect (:x snake) (:y snake) scl scl))

(defn dir [x y snake]
 (->> snake
      (setval :xspeed x)
      (setval :yspeed y)))


(ns coding-challenges.snake-game.snake
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn make [x y xv yv]
 {:type 'Snake
  :x (or x 0)
  :y (or y 0)
  :xspeed (or xv 1)
  :yspeed (or yv 0)})

(defn update [snake]
 (->> snake
      (transform [(collect-one :xspeed) :x] +)
      (transform [(collect-one :yspeed) :y] +)))

(defn draw [snake]
 (q/fill 255)
 (q/rect (:x snake) (:y snake) 10 10))

(defn dir [x y snake]
 (->> snake
      (setval :xspeed x)
      (setval :yspeed y)))


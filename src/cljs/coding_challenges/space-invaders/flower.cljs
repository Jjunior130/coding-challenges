(ns coding-challenges.space-invaders.flower
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make [x y]
 {:type 'Flower
  :x x
  :y y
  :r 30
  :xdir 1})

(defn update* [flower])

(defn draw [flower])


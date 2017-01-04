(ns coding-challenges.space-invaders.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make [x y]
 {:type 'Drop
  :x x
  :y y
  :r 8})

(defn move [y]
 (- y 1))

(defn update* [d]
 (->> d
      (transform :y move)))

(defn draw [d]
 (q/fill 150 0 255)
 (q/ellipse (:x d) (:y d) 8 8))

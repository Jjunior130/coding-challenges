(ns coding-challenges.space-invaders.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make [x y]
 {:type 'Drop
  :x x
  :y y
  :r 16})

(defn move [d]
 (->> d
      (transform :y #(- % 5))))

(defn hits? [d flower]
 (< (q/dist (:x d) (:y d)
            (:x flower) (:y flower))
    (+ (:r d) (:r flower))))

(defn update* [d]
 (move d))

(defn draw [d]
 (q/fill 150 0 255)
 (q/ellipse (:x d) (:y d)
            (:r d) (:r d)))

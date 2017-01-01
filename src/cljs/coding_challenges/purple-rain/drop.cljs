(ns coding-challenges.purple-rain.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one putval]]))

(defn make [w]
 {:x (rand w)
  :y (- (rand 100) 199)
  :yspeed (+ 4 (rand 6))
  :len (+ 10 (rand 10))})

(defn fall [yspeed y]
 (+ yspeed y))

(defn update [h d]
 (->> d
      (transform [(collect-one :yspeed) :y]
                 (comp
                  #(if (> % h)
                    (- (rand 100) 199)
                    %)
                  fall))))

(defn draw [d]
 (q/stroke 138 43 226)
 (q/line (:x d) (:y d)
         (:x d) (+ (:len d) (:y d))))


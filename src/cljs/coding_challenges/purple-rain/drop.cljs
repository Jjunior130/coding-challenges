(ns coding-challenges.purple-rain.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make [w]
 (->> {:x (rand w)
       :y (- (rand 100) 199)
       :z (rand 20)}
      (transform [(collect-one :z)
                  :len]
                 #(q/map-range %1 0 20 10 20))
      (transform [(collect-one :z)
                  :yspeed]
                 #(q/map-range %1 0 20 1 20))))

(defn fall [yspeed y]
 (+ yspeed y))

(defn update* [h d]
 (->> d
      (transform [(collect-one :yspeed) :y]
                 (comp
                  #(if (> % h)
                    (- (rand 100) 199)
                    %)
                  fall))
      (transform [(collect-one :y)
                  (collect-one :z)
                  :yspeed]
                 (fn [y z yspeed]
                  (let [grav (q/map-range z 0 20 0 0.2)]
                   (cond
                    (> y h)
                    (+ grav yspeed)
                    :else (q/map-range z 0 20 4 10)))))))

(defn draw [d]
 (let [thick (q/map-range (:z d) 0 20 1 3)]
  (q/stroke-weight thick))
 (q/stroke 138 43 226)
 (q/line (:x d) (:y d)
         (:x d) (+ (:len d) (:y d))))


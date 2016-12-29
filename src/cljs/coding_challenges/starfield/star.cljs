(ns coding-challenges.starfield.star
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn new [w h]
 {:type 'Star
  :x (- (rand (* 2 w)) w)
  :y (- (rand (* 2 h)) h)
  :z (rand w)})

(defn draw [w h star]
 (q/fill 255)
 (q/no-stroke)
 (let [sx (* w (/ (:x star) (:z star)))
       sy (* h (/ (:y star) (:z star)))
       r (- 16 (* 16 (/ (:z star) w)))]
  (q/ellipse sx sy r r)))

(defn update [w h speed star]
 (let [u (->> star
              (transform :z #(- % speed)))]
  (if (< (:z u) 1)
   (->> u
        (setval :z w)
        (setval :x (- (rand (* 2 w)) w))
        (setval :y (- (rand (* 2 h)) h))
        (setval :pz (:z u)))
   u)))

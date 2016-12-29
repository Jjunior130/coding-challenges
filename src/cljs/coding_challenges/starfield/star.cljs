(ns coding-challenges.starfield.star
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn new [w h]
 {:type 'Star
  :x (- (rand (* 2 w)) w)
  :y (- (rand (* 2 h)) h)
  :z (rand w)})

(defn update [w h speed star]
 (let [u (->> star
              (transform [(collect-one :z) :pz] #(identity %1))
              (transform :z #(- % speed)))]
  (if (< (:z u) 1)
   (->> u
        (setval :z w)
        (setval :x (- (rand (* 2 w)) w))
        (setval :y (- (rand (* 2 h)) h))
        (transform [(collect-one :z) :pz] #(identity %1)))
   u)))

(defn draw [w h star]
 (q/fill 255)
 (q/no-stroke)
 (let [sx (q/map-range (/ (:x star) (:z star)) 0 1 0 w)
       sy (q/map-range (/ (:y star) (:z star)) 0 1 0 h)
       r (q/map-range (:z star) 0 w 16 0)
       px (q/map-range (/ (:x star) (:pz star)) 0 1 0 w)
       py (q/map-range (/ (:y star) (:pz star)) 0 1 0 h)]
  (q/ellipse sx sy r r)
  (q/stroke 255)
  (q/line px py sx sy)))

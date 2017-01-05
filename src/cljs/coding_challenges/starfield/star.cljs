(ns coding-challenges.starfield.star
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn make [w h]
 {:type 'Star
  :x (- (rand (* 2 w)) w)
  :y (- (rand (* 2 h)) h)
  :z (rand w)})

(defn move-forward [speed star]
 (->> star
      (transform [(collect-one :z) :pz] #(identity %1))
      (transform :z #(- % speed))))

(defn update* [w h speed star]
 (as-> (move-forward speed star) $
       (if (< (:z $) 1)
        (make w h)
        $)))

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

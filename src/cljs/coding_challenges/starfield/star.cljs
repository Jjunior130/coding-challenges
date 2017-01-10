(ns coding-challenges.starfield.star
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(defn make []
 {:type 'Star
  :x (q/random (- (q/width)) (q/width))
  :y (q/random (- (q/height)) (q/height))
  :z (q/random (q/width))})

(defn move-forward [speed star]
 (->> star
      (transform [(collect-one :z) :pz] #(identity %1))
      (transform :z #(- % speed))))

(defn update* [speed star]
 (as-> (move-forward speed star) $
       (if (< (:z $) 1)
        (make)
        $)))

(defn draw [star]
 (q/fill 255)
 (q/no-stroke)
 (let [sx (q/map-range (/ (:x star) (:z star)) 0 1 0 (q/width))
       sy (q/map-range (/ (:y star) (:z star)) 0 1 0 (q/height))
       r (q/map-range (:z star) 0 (q/width) 16 0)
       px (q/map-range (/ (:x star) (:pz star)) 0 1 0 (q/width))
       py (q/map-range (/ (:y star) (:pz star)) 0 1 0 (q/height))]
  (q/ellipse sx sy r r)
  (q/stroke 255)
  (q/line px py sx sy)))

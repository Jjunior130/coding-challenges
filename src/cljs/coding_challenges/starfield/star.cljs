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
      (transform [(collect-one :z) :pz] identity)
      (transform :z #(- % speed))))

(defn reset? [{z :z
               :as star}]
 (cond->
  star
  (< z 1)
  (->> (setval :z (q/width))
       (setval :x (q/random (- (q/width))
                            (q/width)))
       (setval :y (q/random (- (q/height))
                            (q/height)))
       (transform [(collect-one :z) :pz]
                  identity))))

(defn update* [speed star]
 (->> star
      (move-forward speed)
      reset?))

(defn draw [{x :x
             y :y
             z :z
             pz :pz
             :as star}]
 (q/fill 255)
 (q/no-stroke)
 (let [sx (q/map-range (/ x z) 0 1 0 (q/width))
       sy (q/map-range (/ y  z) 0 1 0 (q/height))
       r (q/map-range z 0 (q/width) 16 0)
       px (q/map-range (/ x  pz) 0 1 0 (q/width))
       py (q/map-range (/ y  pz) 0 1 0 (q/height))]
  (q/ellipse sx sy r r)
  (q/stroke 255)
  (q/line px py sx sy)))

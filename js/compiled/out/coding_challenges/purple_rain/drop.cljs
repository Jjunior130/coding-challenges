(ns coding-challenges.purple-rain.drop
 (:require [quil.core :as q :include-macros true]))

(defn make []
 (let [z (q/random 20)]
  {:x (q/random (q/width))
   :y (q/random -200 -100)
   :z z
   :len (q/map-range z 0 20 10 20)
   :yspeed (q/map-range z 0 20 1 20)}))

(defn fall [{yspeed :yspeed
             z :z
             :as d}]
 (let [grav (q/map-range z 0 20 0 0.2)]
  (-> d
     (update :y (partial + yspeed))
     (assoc :yspeed (+ grav yspeed)))))

(defn loop-edge [{z :z
                  :as d}]
 (assoc d
  :y (q/random -200 -100)
  :yspeed (q/map-range z 0 20 4 10)))

(defn update* [{y :y
                :as d}]
 (if (> y (q/height))
  (-> d loop-edge fall)
  (-> d fall)))

(defn draw [{x :x
             y :y
             z :z
             len :len
             :as d}]
 (let [thick (q/map-range z 0 20 1 3)]
  (q/stroke-weight thick))
 (q/stroke 138 43 226)
 (q/line x y
         x (+ len y)))


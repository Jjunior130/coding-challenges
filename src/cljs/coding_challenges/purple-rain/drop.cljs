(ns coding-challenges.purple-rain.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [view ALL transform multi-path
                    setval collect-one putval]]
           [coding-challenges.util
            :refer [mt u a cond->mt cond-mt PASS]]))

(defn make []
 (u {:x (q/random (q/width))
     :y (q/random -200 -100)
     :z (q/random 20)}
    [(collect-one :z) :len] #(q/map-range %1 0 20 10 20)
    [(collect-one :z) :yspeed] #(q/map-range %1 0 20 1 20)))

(def fall
 (u
  [(collect-one :yspeed) :y] +
  [(collect-one :z (view #(q/map-range % 0 20 0 0.2)))
   :yspeed] (fn [grav yspeed]
             (+ grav yspeed))))

(def loop-edge
 (u
  :y #(q/random -200 -100)
  [(collect-one :z) :yspeed] #(q/map-range %1 0 20 4 10)))

(defn update* [{y :y
                :as d}]
 (cond->mt
  d
  (> y (q/height)) loop-edge
  :always fall))

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


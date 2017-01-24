(ns coding-challenges.space-invaders.ship
 (:require [quil.core :as q :include-macros true]))

(defn make []
 {:type 'Ship
  :x (/ (q/width) 2)
  :xdir 0})

(defn move [{xdir :xdir
             :as ship}]
 (update ship
         :x (partial + (* 5 xdir))))

(defn update* [ship]
 (move ship))

(defn draw [{x :x
             :as ship}]
 (q/fill 255)
 (q/rect-mode :center)
 (q/rect x (- (q/height) 20) 20 60))

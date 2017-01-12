(ns coding-challenges.space-invaders.ship
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [view ALL transform setval
                    collect-one putval]]))

(defn make []
 {:type 'Ship
  :x (/ (q/width) 2)
  :xdir 0})

(defn move [ship]
 (->> ship
      (transform [(collect-one :xdir)
                  :x]
                 (fn [xdir x]
                  (+ x (* 5 xdir))))))

(defn update* [ship]
 (move ship))

(defn draw [{x :x
             :as ship}]
 (q/fill 255)
 (q/rect-mode :center)
 (q/rect x (- (q/height) 20) 20 60))

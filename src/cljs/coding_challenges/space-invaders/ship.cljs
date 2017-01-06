(ns coding-challenges.space-invaders.ship
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make [w]
 {:type 'Ship
  :x (/ w 2)
  :xdir 0})

(defn move [vel ship]
 (->> ship
      (transform :x (partial + (* 5 vel)))))

(defn update* [ship]
 (case (:xdir ship)
  -1 (move -1 ship)
  0 ship
  1 (move 1 ship)))

(defn draw [h ship]
 (q/fill 255)
 (q/rect-mode :center)
 (q/rect (:x ship) (- h 20) 20 60))

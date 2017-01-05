(ns coding-challenges.space-invaders.flower
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]
           [coding-challenges.space-invaders.drop :refer [hits?]]))

(defn make [x y]
 {:type 'Flower
  :x x
  :y y
  :r 30
  :xdir 1})

(defn grow [flower]
 (->> flower
      (transform :r (partial + 2))))

(defn update* [drops flower]
 (if (some #(hits? % flower) drops)
  (grow flower)
  flower))

(defn draw [flower]
 (q/fill 255 0 200)
 (q/ellipse (:x flower) (:y flower)
            (* 2 (:r flower)) (* 2 (:r flower))))


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

(defn move [flower]
 (->> flower
      (transform [(collect-one :xdir)
                  :x]
                 +)))

(defn shift-down [flower]
 (->> flower
      (transform [(collect-one :r)
                  :y] +)
      (transform :xdir (partial * -1))))

(defn update* [edge? drops flower]
 (cond->> flower
          (some #(hits? % flower) drops) grow
          edge? shift-down
          :always move))

(defn draw [{x :x
             y :y
             r :r
             :as flower}]
 (q/fill 255 0 200)
 (q/ellipse x y
            (* 2 r) (* 2 r)))


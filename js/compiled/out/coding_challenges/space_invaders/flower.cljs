(ns coding-challenges.space-invaders.flower
 (:require [quil.core :as q :include-macros true]
           [coding-challenges.space-invaders.drop :refer [hits?]]))

(defn make [x y]
 {:type 'Flower
  :x x
  :y y
  :r 30
  :xdir 1})

(defn grow [flower]
 (update flower
         :r (partial + 2)))

(defn move [{xdir :xdir
             :as flower}]
 (update flower
         :x (partial + xdir)))

(defn shift-down [{r :r
                   :as flower}]
 (-> flower
     (update :y (partial + r))
     (update :xdir (partial * -1))))

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


(ns coding-challenges.space-invaders.drop
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [view ALL transform setval
                    collect-one putval]]))

(defn make [x y]
 {:type 'Drop
  :x x
  :y y
  :r 16})

(defn move-up [d]
 (->> d
      (transform :y #(- % 5))))

(defn hits? [{dx :x
              dy :y
              dr :r
              :as d}
             {fx :x
              fy :y
              fr :r
              :as flower}]
 (< (q/dist dx dy
            fx fy)
    (+ dr fr)))

(defn update* [d]
 (move-up d))

(defn draw [{dx :x
             dy :y
             dr :r
             :as d}]
 (q/fill 150 0 255)
 (q/ellipse dx dy
            dr dr))

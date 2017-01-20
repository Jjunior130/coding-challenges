(ns coding-challenges.mitosis.cell
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [view ALL transform setval
                    collect-one putval]]
           [coding-challenges.util :refer [mt u a cond->mt cond-mt
                                           PASS]]))

(defn make
 ([]
  (make {:x (q/random (q/width))
         :y (q/random (q/height))}
        60
        (q/color (q/random 100 255)
                 0
                 (q/random 100 255)
                 100)))
 ([pos r c]
  {:type 'Cell
   :pos pos
   :r r
   :c c}))

(defn clicked? [{mx :x
                 my :y
                 :as click-pos}
                {{cx :x
                  cy :y} :pos
                 cr :r
                 :as cell}]
 (< (q/dist cx cy mx my)
    cr))

(defn mitosis [{pos :pos
                r :r
                c :c
                :as cell}]
 [(make pos (* 0.8 r) c)
  (make pos (* 0.8 r) c)])

(defn move [n]
 (let [vel {:x (q/random (- n) n)
            :y (q/random (- n) n)}]
  (u
   :pos (partial merge-with + vel))))

(defn update* [cell]
 (mt cell
     (move 5)))

(defn draw [{{x :x
              y :y} :pos
             color :c
             r :r
             :as cell}]
 (q/no-stroke)
 (q/fill color)
 (q/ellipse x y
            r r))

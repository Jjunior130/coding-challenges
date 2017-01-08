(ns coding-challenges.mitosis.cell
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [view ALL transform setval collect-one putval]]))

(defn make
 ([w h]
  (make {:x (q/random w)
         :y (q/random h)}
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
                 :as cell}]
 (< (q/dist cx cy mx my)
    (:r cell)))

(defn mitosis [{pos :pos
                r :r
                c :c
                :as cell}]
 [(make pos (* 0.8 r) c)
  (make pos (* 0.8 r) c)])

(defn move [n cell]
 (let [vel {:x (q/random (- n) n)
            :y (q/random (- n) n)}]
  (->> cell
       (transform :pos (partial merge-with + vel)))))

(defn update* [cell]
 (move 5 cell))

(defn draw [cell]
 (q/no-stroke)
 (q/fill (:c cell))
 (q/ellipse (-> cell :pos :x)
            (-> cell :pos :y)
            (:r cell)
            (:r cell)))


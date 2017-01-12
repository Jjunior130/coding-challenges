(ns coding-challenges.snake-game.snake
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp
            :refer [ALL transform setval
                    collect-one putval]]))

(defn make
 ([]
  (make 0 0 1 0))
 ([x y xv yv]
  {:type 'Snake
   :x x
   :y y
   :xspeed xv
   :yspeed yv
   :tail []}))

(defn eat? [{fx :x
             fy :y
             :as food}
            {sx :x
             sy :y
             :as snake}]
 (< (q/dist sx sy
            fx fy)
    1))

(defn death? [tail x y]
 ((set tail) {:x x :y y}))

(defn update-tail [scl food snake]
 (->> snake
      (transform [(collect-one :x)
                  (collect-one :y)
                  (collect-one :xspeed)
                  (collect-one :yspeed)
                  :tail]
                 (fn [sx sy sxv syv tail]
                  (cond
                   (death? tail sx sy)
                   (empty tail)
                   (eat? food {:x (+ (* sxv scl) sx)
                               :y (+ (* syv scl) sy)})
                   (conj tail {:x sx
                               :y sy})
                   (seq tail)
                   (subvec (conj tail {:x sx
                                       :y sy})
                           1)
                   :else tail)))))

(defn move-forward [scl snake]
 (->> snake
      (transform [(collect-one :xspeed) :x]
                 (comp #(q/constrain % 0 (- (q/width) scl))
                       #(+ (* %1 scl) %2)))
      (transform [(collect-one :yspeed) :y]
                 (comp #(q/constrain % 0 (- (q/height) scl))
                       #(+ (* %1 scl) %2)))))

(defn update* [scl food snake]
 (->> snake
      (update-tail scl food)
      (move-forward scl)))

(defn draw [scl {sx :x
                 sy :y
                 :as snake}]
 (q/fill 255)
 (q/rect sx sy scl scl)
 (doseq [{y :y x :x} (:tail snake)]
  (q/fill 155) ; distinguish head from tail
  (q/rect x y scl scl)))

(defn dir [x y snake]
 (->> snake
      (setval :xspeed x)
      (setval :yspeed y)))


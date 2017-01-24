(ns coding-challenges.snake-game.snake
 (:require [quil.core :as q :include-macros true]))

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

(defn update-tail [scl food {sx :x
                             sy :y
                             sxv :xspeed
                             syv :yspeed
                             :as snake}]
 (-> snake
     (update :tail (fn [tail]
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

(defn move-forward [scl {xspeed :xspeed
                         yspeed :yspeed
                         :as snake}]
 (-> snake
     (update :x (comp #(q/constrain % 0 (- (q/width) scl))
                      (partial + (* xspeed scl))))
     (update :y (comp #(q/constrain % 0 (- (q/height) scl))
                      (partial + (* yspeed scl))))))

(defn update* [scl food snake]
 (->> snake
      (update-tail scl food)
      (move-forward scl)))

(defn draw [scl {sx :x
                 sy :y
                 tail :tail
                 :as snake}]
 (q/fill 255)
 (q/rect sx sy scl scl)
 (doseq [{y :y x :x} tail]
  (q/fill 155) ; distinguish head from tail
  (q/rect x y scl scl)))

(defn dir [x y snake]
 (-> snake
     (assoc :xspeed x)
     (assoc :yspeed y)))


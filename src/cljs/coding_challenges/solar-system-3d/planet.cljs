(ns coding-challenges.solar-system-3d.planet
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one putval]]))

(defn random-coordinate [distance]
 (let [theta (Math/acos (q/random -1 1))
       phi (Math/atan (q/random -1 1))
       x (* distance
            (Math/sin theta)
            (Math/cos phi))
       y (* distance
            (Math/sin theta)
            (Math/sin phi))
       z (* distance
            (Math/cos phi))]
  {:x x
   :y y
   :z z}))

(defn make [r d o]
 (->> {:type 'Planet
       :radius r
       :distance d
       :angle (rand q/TWO-PI)
       :orbit-speed o}
      (transform [(collect-one :distance) :v]
                 random-coordinate)))

(defn spawn-moons [total level planet]
 (->> planet
      (setval :planets
              (repeatedly total
                          (fn []
                           (cond->>
                            (let [r (/ (:radius planet)
                                       (* level 2))]
                              (make
                               r
                               (q/random (+ (:radius planet) r)
                                         (* 2 (+ (:radius planet) r)))
                               (q/random -0.1 0.1)))
                            (< level 3)
                            (spawn-moons (rand-int 4) (inc level))))))))

(defn orbit [planet]
 (->> planet
      (transform [(collect-one :orbit-speed)
                  :angle] +)
      (transform [:planets ALL]
                 orbit)))

(defn update* [planet]
 (orbit planet))

(defn cross [{x1 :x
              y1 :y
              z1 :z}
             {x2 :x
              y2 :y
              z2 :z}]
 {:x (- (* y1 z2) (* z1 y2))
  :y (- (* z1 x2) (* x1 z2))
  :z (- (* x1 y2) (* y1 x2))})

(defn draw [{angle :angle
             radius :radius
             planets :planets
             v :v
             :as planet}]
 (q/push-matrix)
 (q/no-stroke)
 (q/fill 255)
 (let [v2 {:x 1 :y 0 :z 1}
       {x :x
        y :y
        z :z
        :as p} (cross v v2)]
  (q/rotate angle x y z))
 (q/translate (-> v :x)
              (-> v :y)
              (-> v :z))
 (q/sphere radius)
 (doseq [p planets]
  (draw p))
 (q/pop-matrix))



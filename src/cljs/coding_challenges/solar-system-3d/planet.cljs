(ns coding-challenges.solar-system-3d.planet
 (:require [quil.core :as q :include-macros true]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one putval]]))

(defn make [r d o]
 {:type 'Planet
  :radius r
  :distance d
  :angle (rand q/TWO-PI)
  :orbit-speed o})

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

(defn draw [planet]
 (q/push-matrix)
 (q/no-stroke)
 (q/fill 255)
 (q/rotate (:angle planet))
 (q/translate (:distance planet) 0)
 (q/sphere (:radius planet))
 #_(q/ellipse 0 0
              (* (:radius planet) 2)
              (* (:radius planet) 2))
 (doseq [p (:planets planet)]
  (draw p))
 (q/pop-matrix))



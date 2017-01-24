(ns coding-challenges.solar-system.planet
 (:require [quil.core :as q :include-macros true]))

(defn make [r d o]
 {:type 'Planet
  :radius r
  :distance d
  :angle (rand q/TWO-PI)
  :orbit-speed o})

(defn spawn-moons [total level {radius :radius
                                :as planet}]
 (assoc planet
  :planets (loop [i (int total)
                  planets []]
            (if (zero? i)
             planets
             (recur (dec i)
                    (conj planets
                          (cond->>
                           (make
                            (/ radius
                               (* level 2))
                            (/ (q/random 50 150) level)
                            (q/random -0.1 0.1))
                           (< level 3)
                           (spawn-moons (rand-int 4)
                                        (inc level)))))))))

(defn orbit [{orbit-speed :orbit-speed
              :as planet}]
 (-> planet
     (update :angle (partial + orbit-speed))
     (update :planets
             (fn [planets]
              (loop [i (count planets)
                     planets planets
                     orbited-planets []]
               (if (zero? i)
                orbited-planets
                (recur (dec i) (pop planets)
                       (conj orbited-planets
                             (orbit (peek planets))))))))))

(defn update* [planet]
 (orbit planet))

(defn draw [{angle :angle
             distance :distance
             radius :radius
             planets :planets
             :as planet}]
 (q/push-matrix)
 (q/fill 255 100)
 (q/rotate angle)
 (q/translate distance 0)
 (q/ellipse 0 0
            (* radius 2)
            (* radius 2))
 (doseq [p planets]
  (draw p))
 (q/pop-matrix))



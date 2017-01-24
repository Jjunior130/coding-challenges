(ns coding-challenges.solar-system-3d.planet
 (:require [quil.core :as q :include-macros true]))

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
 {:type 'Planet
  :radius r
  :distance d
  :angle (rand q/TWO-PI)
  :orbit-speed o
  :v (random-coordinate d)})

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
                           (let [r (/ radius
                                      (* level 2))
                                 x (+ radius r)]
                            (make
                             r
                             (q/random x
                                       (* 2 x))
                             (q/random -0.1 0.1)))
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
             {vx :x
              vy :y
              vz :z
              :as v} :v
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
 (q/translate vx vy vz)
 (q/sphere radius)
 (doseq [p planets]
  (draw p))
 (q/pop-matrix))



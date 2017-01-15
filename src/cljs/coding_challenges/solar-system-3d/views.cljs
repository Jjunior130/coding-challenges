(ns coding-challenges.solar-system-3d.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.solar-system-3d.planet :as planet]
           [com.rpl.specter :as sp
            :refer [putval ALL transform
                    setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
 (->> (planet/make 50 0 0)
      (planet/spawn-moons 5 1)))

(defn update* [sun]
 (planet/update* sun))

(defn draw [sun]
 (q/background 0)
 (q/lights)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw sun))

(q/defsketch solar-system-3d-sketch
             :setup  setup
             :update update*
             :draw   draw
             :renderer :p3d
             :host "solar-system-3d"
             :no-start true
             :middleware [m/fun-mode m/navigation-3d]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:solar-system :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Solar system 3D demo"
         :level :level1]
        [:canvas#solar-system-3d {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :planet
                 :label "Planet"}]
         :model code
         :on-change
         #(rf/dispatch
           [:setval [[:solar-system :code] %]])]
        (case code
         :sketch
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(def w 600)
(def h 600)

(defn setup []
 (->> (planet/make 50 0 0)
      (planet/spawn-moons 5 1)))

(defn update* [sun]
 (planet/update* sun))

(defn draw [sun]
 (q/background 0)
 (q/lights)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw sun))"]]
           [:pre
            [:code.java
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/dncudkelNxw

import peasy.*;
Planet sun;

PeasyCam cam;

void setup() {
  size(600, 600, P3D);
  cam = new PeasyCam(this, 500);
  sun = new Planet(50, 0, 0);
  sun.spawnMoons(4, 1);
}

void draw() {
  background(0);
  lights();
  sun.show();
  sun.orbit();
}
"]]]]
         :planet
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn random-coordinate [distance]
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
                          #(cond->>
                            (let [r (/ (:radius planet)
                                       (* level 2))
                                  x (+ (:radius planet) r)]
                             (make
                              r
                              (q/random x
                                        (* 2 x))
                              (q/random -0.1 0.1)))
                            (< level 3)
                            (spawn-moons (rand-int 4)
                                         (inc level)))))))

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
 (q/pop-matrix))"]]
           [:pre
            [:code.java
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/dncudkelNxw

class Planet {
  float radius;
  float distance;
  Planet[] planets;
  float angle;
  float orbitspeed;
  PVector v;

  PShape globe;

  Planet(float r, float d, float o) {

    v = PVector.random3D();

    radius = r;
    distance = d;
    v.mult(distance);
    angle = random(TWO_PI);
    orbitspeed = o;
  }

  void orbit() {
    angle = angle + orbitspeed;
    if (planets != null) {
      for (int i = 0; i < planets.length; i++) {
        planets[i].orbit();
      }
    }
  }

  void spawnMoons(int total, int level) {
    planets = new Planet[total];
    for (int i = 0; i < planets.length; i++) {
      float r = radius/(level*2);
      float d = random((radius + r), (radius+r)*2);
      float o = random(-0.1, 0.1);
      planets[i] = new Planet(r, d, o);
      if (level < 2) {
        int num = int(random(0, 3));
        planets[i].spawnMoons(num, level+1);
      }
    }
  }

  void show() {
    pushMatrix();
    noStroke();
    PVector v2 = new PVector(1, 0, 1);
    PVector p = v.cross(v2);
    rotate(angle, p.x, p.y, p.z);
    stroke(255);
    //line(0, 0, 0, v.x, v.y, v.z);
    //line(0, 0, 0, p.x, p.y, p.z);

    translate(v.x, v.y, v.z);
    noStroke();
    fill(255);
    sphere(radius);
    //ellipse(0, 0, radius*2, radius*2);
    if (planets != null) {
      for (int i = 0; i < planets.length; i++) {
        planets[i].show();
      }
    }
    popMatrix();
  }
}
"]]]])])]))
   :component-did-mount solar-system-3d-sketch}))




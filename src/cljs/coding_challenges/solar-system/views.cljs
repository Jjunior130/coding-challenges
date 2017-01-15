(ns coding-challenges.solar-system.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.solar-system.planet :as planet]
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
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw sun))

(q/defsketch solar-system-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "solar-system"
             :no-start true
             :middleware [m/fun-mode]
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
         :label "Solar system demo"
         :level :level1]
        [:canvas#solar-system {:width w :height h}]
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
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw sun))"]]
           [:pre
            [:code.java
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/l8SiJ-RmeHU

Planet sun;

void setup() {
  size(600, 600);
  sun = new Planet(50, 0, 0);
  sun.spawnMoons(5, 1);
}

void draw() {
  background(0);
  translate(width/2, height/2);
  sun.show();
  sun.orbit();
}
"]]]]
         :planet
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make [r d o]
 {:type 'Planet
  :radius r
  :distance d
  :angle (rand q/TWO-PI)
  :orbit-speed o})

(defn spawn-moons [total level {radius :radius
                                :as planet}]
 (->> planet
      (setval :planets
              (repeatedly total
                          (fn []
                           (cond->>
                             (make
                              (/ radius
                                 (* level 2))
                              (/ (q/random 50 150) level)
                              (q/random -0.1 0.1))
                             (< level 3)
                             (spawn-moons (rand-int 4)
                                          (inc level))))))))

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
 (q/fill 255 100)
 (q/rotate (:angle planet))
 (q/translate (:distance planet) 0)
 (q/ellipse 0 0
            (* (:radius planet) 2)
            (* (:radius planet) 2))
 (doseq [p (:planets planet)]
  (draw p))
 (q/pop-matrix))"]]
           [:pre
            [:code.java
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/l8SiJ-RmeHU

class Planet {
  float radius;
  float distance;
  Planet[] planets;
  float angle;
  float orbitspeed;

  Planet(float r, float d, float o) {
    radius = r;
    distance = d;
    angle = random(TWO_PI);
    orbitspeed = o;
    //println(angle);
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
      float d = random(50, 150);
      float o = random(-0.1, 0.1);
      planets[i] = new Planet(r, d/level, o);
      if (level < 3) {
        int num = int(random(0,4));
        planets[i].spawnMoons(num, level+1);
      }
    }
  }

  void show() {
    pushMatrix();
    fill(255, 100);
    rotate(angle);
    translate(distance, 0);
    ellipse(0, 0, radius*2, radius*2);
    if (planets != null) {
      for (int i = 0; i < planets.length; i++) {
        planets[i].show();
      }
    }
    popMatrix();
  }
}
"]]]])])]))
   :component-did-mount solar-system-sketch}))




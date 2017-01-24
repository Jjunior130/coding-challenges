(ns coding-challenges.solar-system.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.solar-system.planet :as planet]))

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
         #(do
           (rf/dispatch
            [:setval [[:solar-system :code] %]])
           (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
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
            [:code.processing
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
 (q/pop-matrix))"]]
           [:pre
            [:code.processing
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




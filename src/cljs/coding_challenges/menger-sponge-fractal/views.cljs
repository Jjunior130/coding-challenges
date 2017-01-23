(ns coding-challenges.menger-sponge-fractal.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [re-frame.core :as rf]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.menger-sponge-fractal.box :as box]
           [com.rpl.specter :as sp
            :refer [ALL transform setval collect-one]]
           [coding-challenges.util :refer [mt u a cond->mt cond-mt
                                           PASS]]))

(def w 400)
(def h 400)

(defn setup []
 {:sponge [(box/make 0 0 0 200)]})

(defn update* [sketch]
 (update sketch
         :angle (partial + 0.01)))

(defn draw [{angle :angle
             sponge :sponge
             :as sketch}]
 (q/background 51)
 (q/lights)
 (q/translate (/ (q/width) 2) (/ (q/height) 2))
 (q/rotate-x angle)
 (q/rotate-y (* 0.4 angle))
 (q/rotate-z (* 0.1 angle))
 (doseq [b sponge]
  (box/draw b)))

(defn mouse-clicked [sketch event]
 (u sketch
    :sponge (partial mapcat box/generate)))

(q/defsketch menger-sponge-fractal-sketch
             :setup  setup
             :update update*
             :draw   draw
             :mouse-clicked mouse-clicked
             :renderer :p3d
             :host "menger-sponge-fractal"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:menger-sponge-fractal :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Menger sponge fractal demo"
         :level :level1]
        [:canvas#menger-sponge-fractal {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :box
                 :label "Box"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
              [:setval [[:menger-sponge-fractal :code] %]])
           (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
        (case code
         :sketch
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(def w 400)
(def h 400)

(defn setup []
 {:sponge [(box/make 0 0 0 200)]})

(defn rotate [sketch]
 (->> sketch
      (transform :angle (partial + 0.01))))

(defn update* [sketch]
 (rotate sketch))

(defn draw [sketch]
 (q/background 51)
 (q/lights)
 (q/translate (/ (q/width) 2) (/ (q/height) 2))
 (q/rotate-x (:angle sketch))
 (q/rotate-y (* 0.4 (:angle sketch)))
 (q/rotate-z (* 0.1 (:angle sketch)))
 (doseq [b (:sponge sketch)]
  (box/draw b)))

(defn mouse-clicked [sketch event]
 (->> sketch
      (transform :sponge (partial mapcat box/generate))))"]]
           [:pre
            [:code.javascript
             "
// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for this video: https://youtu.be/LG8ZK-rRkXo

float a = 0;

ArrayList<Box> sponge;
void setup() {
  size(400, 400, P3D);

  // An array of Box objects
  sponge = new ArrayList<Box>();

  // Star with one
  Box b = new Box(0, 0, 0, 200);
  sponge.add(b);
}
void mousePressed() {
  // Generate the next set of boxes
  ArrayList<Box> next = new ArrayList<Box>();
  for (Box b : sponge) {
    ArrayList<Box> newBoxes = b.generate();
    next.addAll(newBoxes);
  }
  sponge = next;
}

void draw() {
  background(51);
  stroke(255);
  noFill();
  lights();
  translate(width/2, height/2);
  rotateX(a);
  rotateY(a*0.4);
  rotateZ(a*0.1);
  // Show what you've got!
  for (Box b : sponge) {
    b.show();
  }
  a += 0.01;
}"]]]]
         :box
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make [x y z r]
 {:type 'Box
  :pos {:x x :y y
        :z z}
  :r r})

(defn generate [box]
 (for [x (range -1 2)
       y (range -1 2)
       z (range -1 2)
       :let [sum (apply + (map Math/abs [x y z]))
             new-r (/ (:r box) 3)]
       :when (> sum 1)]
  (make (+ (* x new-r) (-> box :pos :x))
        (+ (* y new-r) (-> box :pos :y))
        (+ (* z new-r) (-> box :pos :z))
        new-r)))

(defn draw [box]
 (q/push-matrix)
 (q/translate
  (-> box :pos :x)
  (-> box :pos :y)
  (-> box :pos :z))
 (q/no-stroke)
 (q/box (:r box))
 (q/pop-matrix))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for this video: https://youtu.be/LG8ZK-rRkXo

class Box {
  PVector pos;
  float r;

  Box(float x, float y, float z, float r_) {
    pos = new PVector(x, y, z);
    r = r_;
  }

  ArrayList<Box> generate() {
    ArrayList<Box> boxes = new ArrayList<Box>();
    for (int x = -1; x < 2; x++) {
      for (int y = -1; y < 2; y++) {
        for (int z = -1; z < 2; z++) {
          int sum = abs(x) + abs(y) + abs(z);
          float newR = r/3;
          if (sum > 1) {
            Box b = new Box(pos.x+x*newR, pos.y+ y*newR, pos.z+z*newR, newR);
            boxes.add(b);
          }
        }
      }
    }
    return boxes;
  }

  void show() {
    pushMatrix();
    translate(pos.x, pos.y, pos.z);
    noStroke();
    fill(255);
    box(r);
    popMatrix();
  }
}"]]]])])]))
   :component-did-mount menger-sponge-fractal-sketch}))


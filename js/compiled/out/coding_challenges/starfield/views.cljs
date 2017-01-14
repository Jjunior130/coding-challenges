(ns coding-challenges.starfield.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.starfield.star :as star]
           [com.rpl.specter :as sp
            :refer [ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
  {:stars (repeatedly 800 star/make)})

(defn get-speed-from-mouse [sketch]
 (->> sketch
      (setval
       :speed (/ (q/mouse-x) 12))))

(defn update-stars [sketch]
 (->> sketch
      (transform
       [(collect-one :speed) :stars ALL]
       star/update*)))

(defn update* [sketch]
 (->> sketch
      get-speed-from-mouse
      update-stars))

(defn draw [sketch]
 (q/background 0)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (doseq [star (:stars sketch)]
  (star/draw star)))

(q/defsketch starfield-sketch
  :setup  setup
  :update update*
  :draw   draw
  :host "starfield"
  :no-start true
  :middleware [m/fun-mode]
  :size [w h])

(defn view []
  (reagent/create-class
   {:reagent-render
    (let [code
          (rf/subscribe
           [:select-one [:starfield :tab]])]
     (fn []
      [:div
       [rc/title
        :label "Starfield"
        :level :level1] [:br]
       [:canvas#starfield {:width w :height h}] [:br]
       [rc/v-box
        :children
        (let [code (or @code :sketch)]
         [[rc/horizontal-tabs
           :tabs [{:id :sketch
                   :label "Sketch"}
                  {:id :star
                   :label "Star"}]
           :model code
           :on-change
           #(rf/dispatch
             [:setval [[:starfield :tab] %]])]
          (case code
           :sketch
           [rc/h-box
            :children
            [[:pre
              [:code.clojure
               "(def w 600)
(def h 600)

(defn setup []
  {:stars (repeatedly 800 star/make)})

(defn get-speed-from-mouse [sketch]
 (->> sketch
      (setval
       :speed (/ (q/mouse-x) 12))))

(defn update-stars [sketch]
 (->> sketch
      (transform
       [(collect-one :speed) :stars ALL]
       star/update*)))

(defn update* [sketch]
 (->> sketch
      get-speed-from-mouse
      update-stars))

(defn draw [sketch]
 (q/background 0)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (doseq [star (:stars sketch)]
  (star/draw star)))"]]
             [:pre
              [:code.javascript
               "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/17WoOqgXsRM

var stars = []

var speed;

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
"]]]]
           :star
           [rc/h-box
            :children
            [[:pre
              [:code.clj
               "(defn make []
 {:type 'Star
  :x (q/random (- (q/width)) (q/width))
  :y (q/random (- (q/height)) (q/height))
  :z (q/random (q/width))})

(defn move-forward [speed star]
 (->> star
      (transform [(collect-one :z) :pz] identity)
      (transform :z #(- % speed))))

(defn reset? [{z :z
               :as star}]
 (cond->
  star
  (< z 1)
  (->> (setval :z (q/width))
       (setval :x (q/random (- (q/width))
                            (q/width)))
       (setval :y (q/random (- (q/height))
                            (q/height)))
       (transform [(collect-one :z) :pz]
                  identity))))

(defn update* [speed star]
 (->> star
      (move-forward speed)
      reset?))

(defn draw [{x :x
             y :y
             z :z
             pz :pz
             :as star}]
 (q/fill 255)
 (q/no-stroke)
 (let [sx (q/map-range (/ x z) 0 1 0 (q/width))
       sy (q/map-range (/ y  z) 0 1 0 (q/height))
       r (q/map-range z 0 (q/width) 16 0)
       px (q/map-range (/ x  pz) 0 1 0 (q/width))
       py (q/map-range (/ y  pz) 0 1 0 (q/height))]
  (q/ellipse sx sy r r)
  (q/stroke 255)
  (q/line px py sx sy)))"]]
             [:pre
              [:code.javascript
               "// Daniel Shiffman
// Code for: https://youtu.be/17WoOqgXsRM

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}"]]]])])]]))

    :component-did-mount starfield-sketch}))

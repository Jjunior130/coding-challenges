(ns coding-challenges.starfield.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.starfield.star :as star]))

(def w 600)
(def h 600)

(defn setup []
  {:stars (repeatedly 800 star/make)})

(defn get-speed-from-mouse [sketch]
 (assoc sketch
  :speed (/ (q/mouse-x) 12)))

(defn update-stars [{speed :speed
                     :as sketch}]
 (update sketch
         :stars
         #(loop [i (count %)
                 stars (vec %)
                 updated-stars []]
           (if (zero? i)
            updated-stars
            (recur (dec i) (pop stars)
                   (conj updated-stars
                         (star/update* speed (peek stars))))))))

(defn update* [sketch]
 (->> sketch
      get-speed-from-mouse
      update-stars))

(defn draw [{stars :stars
             :as sketch}]
 (q/background 0)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (doseq [star stars]
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
    (let [code-nav [:starfield :code]
          code
          (rf/subscribe
           [:select-one code-nav])]
     (fn []
      [rc/v-box
       :align :center
       :children
       (let [code (or @code :sketch)]
        [[rc/title
          :label "Starfield"
          :level :level1]
         [:canvas#starfield {:width w :height h}]
         [rc/horizontal-tabs
          :tabs [{:id :sketch
                  :label "Sketch"}
                 {:id :star
                  :label "Star"}]
          :model code
          :on-change
          #(do
            (rf/dispatch
             [:setval [code-nav %]])
            (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
         (case code
          :sketch
          [rc/h-box
           :children
           [[:pre
             [:code.clojure.hljs
              "(def w 600)
(def h 600)

(defn setup []
  {:stars (repeatedly 800 star/make)})

(defn get-speed-from-mouse [sketch]
 (assoc sketch
  :speed (/ (q/mouse-x) 12)))

(defn update-stars [{speed :speed
                     :as sketch}]
 (update sketch
         :stars
         #(loop [i (count %)
                 stars (vec %)
                 updated-stars []]
           (if (zero? i)
            updated-stars
            (recur (dec i) (pop stars)
                   (conj updated-stars
                         (star/update* speed (peek stars))))))))

(defn update* [sketch]
 (->> sketch
      get-speed-from-mouse
      update-stars))

(defn draw [{stars :stars
             :as sketch}]
 (q/background 0)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (doseq [star stars]
  (star/draw star)))"]]
            [:pre
             [:code.javascript.hljs
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

(defn move-forward [speed {z :z
                           :as star}]
 (-> star
     (assoc :pz z)
     (update :z #(- % speed))))

(defn reset? [{z :z
               :as star}]
 (let [nz (q/width)]
  (cond->
   star
   (< z 1)
   (assoc
    :z nz
    :x (q/random (- (q/width)) (q/width))
    :y (q/random (- (q/height)) (q/height))
    :pz nz))))

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
}"]]]])])]))

    :component-did-mount starfield-sketch}))

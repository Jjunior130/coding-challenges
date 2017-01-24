(ns coding-challenges.purple-rain.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.purple-rain.drop :as d]))

(def w 640)
(def h 360)

(defn setup []
 (loop [i (int 500)
        drops []]
  (if (zero? i)
   drops
   (recur (dec i) (conj drops (d/make))))))

(defn update* [drops]
 (loop [i (count drops)
        drops drops
        updated-drops []]
  (if (zero? i)
   updated-drops
   (recur (dec i) (pop drops)
          (conj updated-drops
                (d/update* (peek drops)))))))

(defn draw [drops]
 (q/background 230 230 250)
 (doseq [d drops]
  (d/draw d)))

(q/defsketch purple-rain-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "purple-rain"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:purple-rain :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Purple rain demo"
         :level :level1]
        [:canvas#purple-rain {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :drop
                 :label "Drop"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
              [:setval [[:purple-rain :code] %]])
           (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
        (case code
         :sketch
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(def w 640)
(def h 360)

(defn setup []
 (loop [i (int 500)
        drops []]
  (if (zero? i)
   drops
   (recur (dec i) (conj drops (d/make))))))

(defn update* [drops]
 (loop [i (count drops)
        drops drops
        updated-drops []]
  (if (zero? i)
   updated-drops
   (recur (dec i) (pop drops)
          (conj updated-drops
                (d/update* (peek drops)))))))

(defn draw [drops]
 (q/background 230 230 250)
 (doseq [d drops]
  (d/draw d)))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var drops = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}"]]]]
         :drop
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make []
 (let [z (q/random 20)]
  {:x (q/random (q/width))
   :y (q/random -200 -100)
   :z z
   :len (q/map-range z 0 20 10 20)
   :yspeed (q/map-range z 0 20 1 20)}))

(defn fall [{yspeed :yspeed
             z :z
             :as d}]
 (let [grav (q/map-range z 0 20 0 0.2)]
  (-> d
     (update :y (partial + yspeed))
     (assoc :yspeed (+ grav yspeed)))))

(defn loop-edge [{z :z
                  :as d}]
 (assoc d
  :y (q/random -200 -100)
  :yspeed (q/map-range z 0 20 4 10)))

(defn update* [{y :y
                :as d}]
 (if (> y (q/height))
  (-> d loop-edge fall)
  (-> d fall)))

(defn draw [{x :x
             y :y
             z :z
             len :len
             :as d}]
 (let [thick (q/map-range z 0 20 1 3)]
  (q/stroke-weight thick))
 (q/stroke 138 43 226)
 (q/line x y
         x (+ len y)))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
"]]]])])]))
   :component-did-mount purple-rain-sketch}))

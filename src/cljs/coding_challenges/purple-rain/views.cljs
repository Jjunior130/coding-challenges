(ns coding-challenges.purple-rain.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.purple-rain.drop :as d]
           [com.rpl.specter :as sp
            :refer [putval ALL transform
                    setval collect-one]]))

(def w 640)
(def h 360)

(defn setup []
 {:drops (repeatedly 500 d/make)})

(defn update* [sketch]
 (->> sketch
      (transform [:drops
                  ALL]
                 d/update*)))

(defn draw [sketch]
 (q/background 230 230 250)
 (doseq [d (:drops sketch)]
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
 {:drops (repeatedly 500 d/make)})

(defn update* [sketch]
 (->> sketch
      (transform [:drops
                  ALL]
                 d/update*)))

(defn draw [sketch]
 (q/background 230 230 250)
 (doseq [d (:drops sketch)]
  (d/draw d)))
"]]
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
 (->> {:x (q/random (q/width))
       :y (q/random -200 -100)
       :z (q/random 20)}
      (transform [(collect-one :z)
                  :len]
                 #(q/map-range %1 0 20 10 20))
      (transform [(collect-one :z)
                  :yspeed]
                 #(q/map-range %1 0 20 1 20))))

(defn fall [d]
 (->> d
      (transform [(collect-one :yspeed) :y] +)
      (transform [(collect-one :z (view #(q/map-range % 0 20 0 0.2)))
                  :yspeed]
                 (fn [grav yspeed]
                  (+ grav yspeed)))))

(defn loop-edge [d]
 (->> d
      (setval :y (q/random -200 -100))
      (transform [(collect-one :z)
                  :yspeed]
                 #(q/map-range %1 0 20 4 10))))

(defn update* [{y :y
                :as d}]
 (cond->>
  d
  (> y (q/height)) loop-edge
  :always fall))

(defn draw [d]
 (let [thick (q/map-range (:z d) 0 20 1 3)]
  (q/stroke-weight thick))
 (q/stroke 138 43 226)
 (q/line (:x d) (:y d)
         (:x d) (+ (:len d) (:y d))))
"]]
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

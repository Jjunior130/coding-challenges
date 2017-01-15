(ns coding-challenges.space-invaders.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.space-invaders.flower :as flower]
           [coding-challenges.space-invaders.ship :as ship]
           [coding-challenges.space-invaders.drop :as d
            :refer [hits?]]
           [com.rpl.specter :as sp
            :refer [putval ALL transform setval
                    collect-one collect]]))

(def w 600)
(def h 400)

(defn setup []
 {:ship (ship/make)
  :flowers (for [i (range 6)]
            (flower/make (+ (* i 80) 80)
                         60))})

(defn update-drops [sketch]
 (->> sketch
      (transform [(collect-one :flowers)
                  :drops]
                 (fn [flowers drops]
                  (->> (remove #(some (partial hits? %) flowers)
                               drops)
                       (transform ALL d/update*))))))

(defn horizontal-edge? [{x :x}]
 ((some-fn (partial > 0)
          (partial < (q/width)))
  x))

(defn update-flowers [sketch]
 (->> sketch
      (transform [(collect-one :drops)
                  :flowers]
                 (fn [drops flowers]
                  (if (some horizontal-edge?
                            flowers)
                   (transform ALL (partial flower/update* true drops)
                              flowers)
                   (transform ALL (partial flower/update* false drops)
                              flowers))))))

(defn update-ship [sketch]
 (->> sketch
      (transform :ship ship/update*)))

(defn update* [sketch]
 (->> sketch
      update-drops
      update-flowers
      update-ship))

(defn draw [{ship :ship
             drops :drops
             flowers :flowers
             :as sketch}]
 (q/background 51)
 (ship/draw ship)
 (doseq [d drops]
  (d/draw d))
 (doseq [flower flowers]
  (flower/draw flower)))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond->> sketch
   (any-of (keyword " "))
   (transform [(collect-one :ship)
               :drops]
              (fn [{x :x
                    :as ship} drops]
               (conj drops
                     (d/make x (q/height)))))
   (any-of :left :a)
   (setval [:ship :xdir] -1)
   (any-of :right :d)
   (setval [:ship :xdir] 1))))

(defn key-released [sketch]
 (->> sketch
      (setval [:ship :xdir] 0)))

(q/defsketch space-invaders-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-typed key-pressed
             :key-released key-released
             :host "space-invaders"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:space-invaders :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Space invaders demo"
         :level :level1]
        [:canvas#space-invaders {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :drop
                 :label "Drop"}
                {:id :flower
                 :label "Flower"}
                {:id :ship
                 :label "Ship"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
            [:setval [[:space-invaders :code] %]])
           (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
        (case code
         :sketch
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(def w 600)
(def h 400)

(defn setup []
 {:ship (ship/make)
  :flowers (for [i (range 6)]
            (flower/make (+ (* i 80) 80)
                         60))})

(defn update-drops [sketch]
 (->> sketch
      (transform [(collect-one :flowers)
                  :drops]
                 (fn [flowers drops]
                  (->> (remove #(some (partial hits? %) flowers)
                               drops)
                       (transform ALL d/update*))))))

(defn horizontal-edge? [{x :x}]
 ((some-fn (partial > 0)
          (partial < (q/width)))
  x))

(defn update-flowers [sketch]
 (->> sketch
      (transform [(collect-one :drops)
                  :flowers]
                 (fn [drops flowers]
                  (if (some horizontal-edge?
                            flowers)
                   (transform ALL (partial flower/update* true drops)
                              flowers)
                   (transform ALL (partial flower/update* false drops)
                              flowers))))))

(defn update-ship [sketch]
 (->> sketch
      (transform :ship ship/update*)))

(defn update* [sketch]
 (->> sketch
      update-drops
      update-flowers
      update-ship))

(defn draw [{ship :ship
             drops :drops
             flowers :flowers
             :as sketch}]
 (q/background 51)
 (ship/draw ship)
 (doseq [d drops]
  (d/draw d))
 (doseq [flower flowers]
  (flower/draw flower)))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond
   (any-of (keyword \" \"))
   (->> sketch
        (transform [(collect-one :ship)
                    :drops]
                   (fn [{x :x
                         :as ship} drops]
                    (conj drops
                          (d/make x (q/height))))))
   (any-of :left :a)
   (->> sketch
        (setval [:ship :xdir] -1))
   (any-of :right :d)
   (->> sketch
        (setval [:ship :xdir] 1))
   :else sketch)))

(defn key-released [sketch]
 (->> sketch
      (setval [:ship :xdir] 0)))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80+80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].grow();
        drops[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }

  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
"]]]]
         :drop
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make [x y]
 {:type 'Drop
  :x x
  :y y
  :r 16})

(defn move-up [d]
 (->> d
      (transform :y #(- % 5))))

(defn hits? [{dx :x
              dy :y
              dr :r
              :as d}
             {fx :x
              fy :y
              fr :r
              :as flower}]
 (< (q/dist dx dy
            fx fy)
    (+ dr fr)))

(defn update* [d]
 (move-up d))

(defn draw [{dx :x
             dy :y
             dr :r
             :as d}]
 (q/fill 150 0 255)
 (q/ellipse dx dy
            dr dr))
"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }

}
"]]]]
         :flower
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make [x y]
 {:type 'Flower
  :x x
  :y y
  :r 30
  :xdir 1})

(defn grow [flower]
 (->> flower
      (transform :r (partial + 2))))

(defn move [flower]
 (->> flower
      (transform [(collect-one :xdir)
                  :x]
                 +)))

(defn shift-down [flower]
 (->> flower
      (transform [(collect-one :r)
                  :y] +)
      (transform :xdir (partial * -1))))

(defn update* [edge? drops flower]
 (cond->> flower
          (some #(hits? % flower) drops) grow
          edge? shift-down
          :always move))

(defn draw [{x :x
             y :y
             r :r
             :as flower}]
 (q/fill 255 0 200)
 (q/ellipse x y
            (* 2 r) (* 2 r)))
"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;

  this.grow = function() {
    this.r = this.r + 2;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
"]]]]
         :ship
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make []
 {:type 'Ship
  :x (/ (q/width) 2)
  :xdir 0})

(defn move [ship]
 (->> ship
      (transform [(collect-one :xdir)
                  :x]
                 (fn [xdir x]
                  (+ x (* 5 xdir))))))

(defn update* [ship]
 (move ship))

(defn draw [{x :x
             :as ship}]
 (q/fill 255)
 (q/rect-mode :center)
 (q/rect x (- (q/height) 20) 20 60))
"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/biN3v3ef-Y0

function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
"]]]])])]))
   :component-did-mount space-invaders-sketch}))

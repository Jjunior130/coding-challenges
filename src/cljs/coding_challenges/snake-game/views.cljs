(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake
            :as snake :refer [eat?]]
           [com.rpl.specter :as sp
            :refer [putval ALL transform
                    setval collect-one]]))

(def w 600)
(def h 600)

(defn pick-location [scl]
 (let [cols (q/floor (/ (q/width) scl))
       rows (q/floor (/ (q/height) scl))]
  {:type 'Food
   :x (* scl (rand-int cols))
   :y (* scl (rand-int rows))}))

(defn setup []
 (q/frame-rate 8)
 (->> {:snake (snake/make)
       :scale 20}
      (transform [(collect-one :scale)
                  :food]
                 pick-location)))

(defn update-snake [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :food)
                  :snake]
                 snake/update*)))

(defn update-food [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :snake)
                  :food]
                 (fn [scl snake food]
                  (if (eat? food snake)
                   (pick-location scl)
                   food)))))

(defn update* [sketch]
 (->> sketch
      update-snake
      update-food))

(defn draw [{food :food
             snake :snake
             scl :scale
             :as sketch}]
 (q/background 51)
 (snake/draw scl snake)

 (q/fill 255 0 100)
 (q/rect (-> food :x)
         (-> food :y)
         scl
         scl))

(defn turn-snake?
 "Change direction only if next position doesn't result in death."
 [nxd nyd sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake]
                 (fn [scl snake]
                  (let [{x :x
                         y :y
                         xv :xspeed
                         yv :yspeed
                         :as nsd} (snake/dir nxd nyd snake)
                        nsxp (+ x (* scl xv))
                        nsyp (+ y (* scl yv))
                        death?
                        (or (snake/death?
                             (:tail nsd)
                             nsxp
                             nsyp)
                            (not (<= 0 nsxp (- (q/width) scl)))
                            (not (<= 0 nsyp (- (q/height) scl))))]
                   (if-not death?
                    nsd
                    snake))))))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond
   (any-of :up :w)
   (->> sketch
        (turn-snake? 0 -1))
   (any-of :down :s)
   (->> sketch
        (turn-snake? 0 1))
   (any-of :left :a)
   (->> sketch
        (turn-snake? -1 0))
   (any-of :right :d)
   (->> sketch
        (turn-snake? 1 0))
   :else sketch)))

(defn increase-snake-tail [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake
                  (collect-one :x)
                  (collect-one :y)
                  (collect-one :xspeed)
                  (collect-one :yspeed)
                  :tail]
                 (fn [scl sx sy sxv syv tail]
                  (conj tail {:x (- sx (* scl sxv))
                              :y (- sy (* scl syv))})))))

(defn mouse-clicked [sketch event]
 (->> sketch
      increase-snake-tail))

(q/defsketch snake-game-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-pressed key-pressed
             :mouse-clicked mouse-clicked
             :host "snake-game"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:snake-game :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Snake game demo"
         :level :level1]
        [:canvas#snake-game {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :snake
                 :label "Snake"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
            [:setval [[:snake-game :code] %]])
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

(defn pick-location [scl]
 (let [cols (q/floor (/ (q/width) scl))
       rows (q/floor (/ (q/height) scl))]
  {:type 'Food
   :x (* scl (rand-int cols))
   :y (* scl (rand-int rows))}))

(defn setup []
 (q/frame-rate 8)
 (->> {:snake (snake/make)
       :scale 20}
      (transform [(collect-one :scale)
                  :food]
                 pick-location)))

(defn update-snake [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :food)
                  :snake]
                 snake/update*)))

(defn update-food [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :snake)
                  :food]
                 (fn [scl snake food]
                  (if (eat? food snake)
                   (pick-location scl)
                   food)))))

(defn update* [sketch]
 (->> sketch
      update-snake
      update-food))

(defn draw [{food :food
             snake :snake
             scl :scale
             :as sketch}]
 (q/background 51)
 (snake/draw scl snake)

 (q/fill 255 0 100)
 (q/rect (-> food :x)
         (-> food :y)
         scl
         scl))

(defn turn-snake?
 \"Change direction only if next position doesn't result in death.\"
 [nxd nyd sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake]
                 (fn [scl snake]
                  (let [{x :x
                         y :y
                         xv :xspeed
                         yv :yspeed
                         :as nsd} (snake/dir nxd nyd snake)
                        nsxp (+ x (* scl xv))
                        nsyp (+ y (* scl yv))
                        death?
                        (or (snake/death?
                             (:tail nsd)
                             nsxp
                             nsyp)
                            (not (<= 0 nsxp (- (q/width) scl)))
                            (not (<= 0 nsyp (- (q/height) scl))))]
                   (if-not death?
                    nsd
                    snake))))))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond
   (any-of :up :w)
   (->> sketch
        (turn-snake? 0 -1))
   (any-of :down :s)
   (->> sketch
        (turn-snake? 0 1))
   (any-of :left :a)
   (->> sketch
        (turn-snake? -1 0))
   (any-of :right :d)
   (->> sketch
        (turn-snake? 1 0))
   :else sketch)))

(defn increase-snake-tail [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake
                  (collect-one :x)
                  (collect-one :y)
                  (collect-one :xspeed)
                  (collect-one :yspeed)
                  :tail]
                 (fn [scl sx sy sxv syv tail]
                  (conj tail {:x (- sx (* scl sxv))
                              :y (- sy (* scl syv))})))))

(defn mouse-clicked [sketch event]
 (->> sketch
      increase-snake-tail))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}"]]]]
         :snake
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make
 ([]
  (make 0 0 1 0))
 ([x y xv yv]
  {:type 'Snake
   :x x
   :y y
   :xspeed xv
   :yspeed yv
   :tail []}))

(defn eat? [{fx :x
             fy :y
             :as food}
            {sx :x
             sy :y
             :as snake}]
 (< (q/dist sx sy
            fx fy)
    1))

(defn death? [tail x y]
 ((set tail) {:x x :y y}))

(defn update-tail [scl food snake]
 (->> snake
      (transform [(collect-one :x)
                  (collect-one :y)
                  (collect-one :xspeed)
                  (collect-one :yspeed)
                  :tail]
                 (fn [sx sy sxv syv tail]
                  (cond
                   (death? tail sx sy)
                   (empty tail)
                   (eat? food {:x (+ (* sxv scl) sx)
                               :y (+ (* syv scl) sy)})
                   (conj tail {:x sx
                               :y sy})
                   (seq tail)
                   (subvec (conj tail {:x sx
                                       :y sy})
                           1)
                   :else tail)))))

(defn move-forward [scl snake]
 (->> snake
      (transform [(collect-one :xspeed) :x]
                 (comp #(q/constrain % 0 (- (q/width) scl))
                       #(+ (* %1 scl) %2)))
      (transform [(collect-one :yspeed) :y]
                 (comp #(q/constrain % 0 (- (q/height) scl))
                       #(+ (* %1 scl) %2)))))

(defn update* [scl food snake]
 (->> snake
      (update-tail scl food)
      (move-forward scl)))

(defn draw [scl {sx :x
                 sy :y
                 :as snake}]
 (q/fill 255)
 (q/rect sx sy scl scl)
 (doseq [{y :y x :x} (:tail snake)]
  (q/fill 155) ; distinguish head from tail
  (q/rect x y scl scl)))

(defn dir [x y snake]
 (->> snake
      (setval :xspeed x)
      (setval :yspeed y)))
"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/AaGK-fj-BAM

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}"]]]])])]))
   :component-did-mount snake-game-sketch}))


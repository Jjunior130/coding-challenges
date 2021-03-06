(ns coding-challenges.mitosis.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.mitosis.cell :as cell]))

(def w 700)
(def h 700)

(defn setup []
 (vec
  (loop [i (int 2)
         cells []]
   (if (zero? i)
    cells
    (recur (dec i) (conj cells (cell/make)))))))

(defn update* [cells]
 (vec
  (loop [i (count cells)
         updated-cells []
         cells (vec cells)]
   (if (zero? i)
    updated-cells
    (recur (dec i) (conj updated-cells
                         (cell/update* (peek cells)))
           (pop cells))))))

(defn draw [cells]
 (q/background 200)
 (doseq [cell cells]
  (cell/draw cell)))

(defn mouse-pressed [cells event]
 (loop [i (count cells)
        non-clicked-cells []
        cells (vec cells)]
  (if (zero? i)
   (concat non-clicked-cells cells)
   (let [cc (peek cells)]
    (if (cell/clicked? event cc)
     (concat non-clicked-cells
             (cell/mitosis cc)
             (pop cells))
     (recur (dec i) (conj non-clicked-cells cc)
            (pop cells)))))))

(q/defsketch mitosis-sketch
             :setup  setup
             :update update*
             :draw   draw
             :mouse-pressed mouse-pressed
             :host "mitosis"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:mitosis :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Mitosis demo"
         :level :level1]
        [:canvas#mitosis {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :cell
                 :label "Cell"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
              [:setval [[:mitosis :code] %]])
           (doseq [x (-> js/document (.querySelectorAll "code"))]
             (js/hljs.highlightBlock x)))]
        (case code
         :sketch
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(def w 700)
(def h 700)

(defn setup []
 (vec
  (loop [i (int 2)
         cells []]
   (if (zero? i)
    cells
    (recur (dec i) (conj cells (cell/make)))))))

(defn update* [cells]
 (vec
  (loop [i (count cells)
         updated-cells []
         cells (vec cells)]
   (if (zero? i)
    updated-cells
    (recur (dec i) (conj updated-cells
                         (cell/update* (peek cells)))
           (pop cells))))))

(defn draw [cells]
 (q/background 200)
 (doseq [cell cells]
  (cell/draw cell)))

(defn mouse-pressed [cells event]
 (loop [i (count cells)
        non-clicked-cells []
        cells (vec cells)]
  (if (zero? i)
   (concat non-clicked-cells cells)
   (let [cc (peek cells)]
    (if (cell/clicked? event cc)
     (concat non-clicked-cells
             (cell/mitosis cc)
             (pop cells))
     (recur (dec i) (conj non-clicked-cells cc)
            (pop cells)))))))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/jxGS3fKPKJAvar cells = [];

var cells = [];

function setup() {
  createCanvas(700, 700);
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
 background(200);
 for (var i = 0; i < cells.length; i++) {
   cells[i].move();
   cells[i].show();
 }
}

function mousePressed() {
  for (var i = cells.length-1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}
"]]]]
         :cell
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defn make
 ([]
  (make {:x (q/random (q/width))
         :y (q/random (q/height))}
        60
        (q/color (q/random 100 255)
                 0
                 (q/random 100 255)
                 100)))
 ([pos r c]
  {:type 'Cell
   :pos pos
   :r r
   :c c}))

(defn clicked? [{mx :x
                 my :y
                 :as click-pos}
                {{cx :x
                  cy :y} :pos
                 cr :r
                 :as cell}]
 (< (q/dist cx cy mx my)
    cr))

(defn mitosis [{pos :pos
                r :r
                c :c
                :as cell}]
 [(make pos (* 0.8 r) c)
  (make pos (* 0.8 r) c)])

(defn move [n cell]
 (let [vel {:x (q/random (- n) n)
            :y (q/random (- n) n)}]
  (update cell
          :pos (partial merge-with + vel))))

(defn update* [cell]
 (move 5 cell))

(defn draw [{{x :x
              y :y} :pos
             color :c
             r :r
             :as cell}]
 (q/no-stroke)
 (q/fill color)
 (q/ellipse x y
            r r))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/jxGS3fKPKJA

function Cell(pos, r, c) {

  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 60;
  this.c = c || color(random(100, 255), 0, random(100, 255), 100);

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  this.mitosis = function() {
    //this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r*0.8, this.c);
    return cell;
  }

  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

}
"]]]])])]))
   :component-did-mount mitosis-sketch}))



(ns coding-challenges.maze-generator.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.maze-generator.cell :as cell]))

(def w 600)
(def h 600)

(defrecord Sketch [w grid current stack]
 IFn
 (-invoke [this k v & kvs]
          (apply assoc this k v kvs)))

(defn setup []
 (let [w 40
       cols (q/floor (/ (q/width) w))
       rows (q/floor (/ (q/height) w))
       grid-of-cells
       (loop [i (int 0)
              rs (transient [])]
        (if (< i rows)
         (recur
          (inc i)
          (conj!
           rs (loop [j (int 0)
                     cells (transient [])]
               (if (< j cols)
                (recur
                 (inc j) (conj!
                          cells (cell/make i j)))
                (persistent! cells)))))
         (persistent! rs)))
       current ((grid-of-cells 0) 0)
       grid (current grid-of-cells :visited true)]
  (Sketch. w grid current [])))

(defn remove-walls [grid
                    previous-current previous-wall
                    next-current next-wall]
 (-> grid
     (previous-current :walls #(disj % previous-wall))
     (next-current :walls #(disj % next-wall))))

(defn remove-wall [grid
                   {ci :i
                    cj :j
                    :as previous-current}
                   {ni :i
                    nj :j
                    :as next-current}]
 (let [x (- ci ni)
       y (- cj nj)]
  (cond-> grid
   (= x 1)
   (remove-walls previous-current :left
                 next-current :right)
   (= x -1)
   (remove-walls previous-current :right
                 next-current :left)
   (= y 1)
   (remove-walls previous-current :top
                 next-current :bottom)
   (= y -1)
   (remove-walls previous-current :bottom
                 next-current :top))))

(defn update* [{grid :grid
                stack :stack
                previous-current :current
                :as sketch}]
 (let [{ni :i
        nj :j
        :as next-current}
       (cell/check-neighbors grid previous-current)]
  (if next-current
   (sketch
    :grid (-> grid
              (next-current :visited true)
              (remove-wall previous-current next-current))
    :stack (conj stack previous-current)
    :current next-current)
   (if-let [cs (peek stack)]
    (sketch
     :stack (pop stack)
     :current cs)
    sketch))))

(defn draw [{grid :grid
             w :w
             current :current
             :as sketch}]
 (q/background 51)
 (doseq [cells grid]
  (doseq [cell cells]
   (cell/draw w cell)))
 (cell/highlight w current))

(q/defsketch maze-generator-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "maze-generator"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:maze-generator :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Maze generator demo"
         :level :level1]
        [:canvas#maze-generator {:width w :height h}]
        [rc/horizontal-tabs
         :tabs [{:id :sketch
                 :label "Sketch"}
                {:id :cell
                 :label "Cell"}]
         :model code
         :on-change
         #(do
           (rf/dispatch
            [:setval [[:maze-generator :code] %]])
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

(defrecord Sketch [w grid current stack]
 IFn
 (-invoke [this k v & kvs]
          (apply assoc this k v kvs)))

(defn setup []
 (let [w 40
       cols (q/floor (/ (q/width) w))
       rows (q/floor (/ (q/height) w))
       grid-of-cells
       (loop [i (int 0)
              rs (transient [])]
        (if (< i rows)
         (recur
          (inc i)
          (conj!
           rs (loop [j (int 0)
                     cells (transient [])]
               (if (< j cols)
                (recur
                 (inc j) (conj!
                          cells (cell/make i j)))
                (persistent! cells)))))
         (persistent! rs)))
       current ((grid-of-cells 0) 0)
       grid (current grid-of-cells :visited true)]
  (Sketch. w grid current [])))

(defn remove-walls [grid
                    previous-current previous-wall
                    next-current next-wall]
 (-> grid
     (previous-current :walls #(disj % previous-wall))
     (next-current :walls #(disj % next-wall))))

(defn remove-wall [grid
                   {ci :i
                    cj :j
                    :as previous-current}
                   {ni :i
                    nj :j
                    :as next-current}]
 (let [x (- ci ni)
       y (- cj nj)]
  (cond-> grid
   (= x 1)
   (remove-walls previous-current :left
                 next-current :right)
   (= x -1)
   (remove-walls previous-current :right
                 next-current :left)
   (= y 1)
   (remove-walls previous-current :top
                 next-current :bottom)
   (= y -1)
   (remove-walls previous-current :bottom
                 next-current :top))))

(defn update* [{grid :grid
                stack :stack
                previous-current :current
                :as sketch}]
 (let [{ni :i
        nj :j
        :as next-current}
       (cell/check-neighbors grid previous-current)]
  (if next-current
   (sketch
    :grid (-> grid
              (next-current :visited true)
              (remove-wall previous-current next-current))
    :stack (conj stack previous-current)
    :current next-current)
   (if-let [cs (peek stack)]
    (sketch
     :stack (pop stack)
     :current cs)
    sketch))))

(defn draw [{grid :grid
             w :w
             current :current
             :as sketch}]
 (q/background 51)
 (doseq [cells grid]
  (doseq [cell cells]
   (cell/draw w cell)))
 (cell/highlight w current))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Videos
// https://youtu.be/HyK_Q5rrcr4
// https://youtu.be/D8UgRyRnvXU
// https://youtu.be/8Ju_uxJ9v44
// https://youtu.be/_p5IH0L63wo

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

var cols, rows;
var w = 20;
var grid = [];

var current;

var stack = [];

function setup() {
  createCanvas(600, 600);
  cols = floor(width/w);
  rows = floor(height/w);
  //frameRate(5);

  for (var   j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];


}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}"]]]]
         :cell
         [rc/h-box
          :children
          [[:pre
            [:code.clojure
             "(defrecord Cell [i j walls]
 IFn
 (-invoke [this k]
          (k this))
 (-invoke [this grid k v]
          (update
           grid i (fn [row]
                   (update
                    row j (fn [cell]
                           (if (fn? v)
                            (update cell k v)
                            (assoc cell k v))))))))
(defn make [i j]
 (Cell. i j #{:top :right :bottom :left}))

(defn index [grid i j]
 ((grid i (constantly nil)) j nil))

(defn check-neighbors [grid
                       {i :i
                        j :j}]
 (let [top    (index grid      i (dec j))
       right  (index grid (inc i)     j)
       bottom (index grid      i (inc j))
       left   (index grid (dec i)     j)
       neighbors
       (cond->
        []
        (and top (not (top :visited)))
        (conj top)
        (and right (not (right :visited)))
        (conj right)
        (and bottom (not (bottom :visited)))
        (conj bottom)
        (and left (not (left :visited)))
        (conj left))]
  (when (seq neighbors)
   (rand-nth neighbors))))

(defn update* [cell])

(defn highlight [w {i :i
                    j :j}]
 (q/no-stroke)
 (q/fill 0 0 255 100)
 (let [x (* i w)
       y (* j w)]
  (q/rect x y w w)))

(defn draw [w
            {i :i
             j :j
             walls :walls
             visited? :visited}]
 (q/stroke 255)
 (let [x (* i w)
       y (* j w)]
  (when (walls :top)
   (q/line x y
           (+ x w) y))
  (when (walls :right)
   (q/line (+ x w) y
           (+ x w) (+ y w)))
  (when (walls :bottom)
   (q/line (+ x w) (+ y w)
           x (+ y w)))
  (when (walls :left)
   (q/line x (+ y w)
           x y))
  (when visited?
   (q/no-stroke)
   (q/fill 255 0 255 100)
   (q/rect x y w w))))"]]
           [:pre
            [:code.javascript
             "// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Videos
// https://youtu.be/HyK_Q5rrcr4
// https://youtu.be/D8UgRyRnvXU
// https://youtu.be/8Ju_uxJ9v44
// https://youtu.be/_p5IH0L63wo

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function() {
    var neighbors = [];

    var top    = grid[index(i, j -1)];
    var right  = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left   = grid[index(i-1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }


  }
  this.highlight = function() {
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);

  }

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    if (this.walls[0]) {
      line(x    , y    , x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y    , x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x    , y + w);
    }
    if (this.walls[3]) {
      line(x    , y + w, x    , y);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
}"]]]])])]))
   :component-did-mount maze-generator-sketch}))

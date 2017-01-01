(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake :as snake :refer [eat?]]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn pick-location [w h scl]
 (let [cols (q/floor (/ w scl))
       rows (q/floor (/ h scl))]
  {:type 'Food
   :x (* scl (rand-int cols))
   :y (* scl (rand-int rows))}))

(defn setup []
 (q/frame-rate 10)
 (->> {:snake (snake/make)
       :scale 20}
      (transform [(collect-one :scale)
                  :food]
                 (partial pick-location w h))))

(defn update* [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :food)
                  :snake]
                 (partial snake/update w h))
      (transform [(collect-one :scale)
                  (collect-one :snake)
                  :food]
                 (fn [scl snake food]
                  (if (eat? food snake)
                   (pick-location w h scl)
                   food)))))

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

(defn turn
 "Change direction only if next position doesn't result in death."
 [nxd nyd scl w h snake]
 (let [nsd (snake/dir nxd nyd snake)
       nsxp (+ (:x nsd) (* scl (:xspeed nsd)))
       nsyp (+ (:y nsd) (* scl (:yspeed nsd)))
       death?
       (or (snake/death?
            (:tail nsd)
            nsxp
            nsyp)
           (not (<= 0 nsxp (- w scl)))
           (not (<= 0 nsyp (- h scl))))]
  (if-not death?
   nsd
   snake)))

(defn key-pressed [sketch event]
 (case (:key event)
  :up
  (->> sketch
       (transform [(collect-one :scale)
                   (putval w)
                   (putval h)
                   :snake]
                  (partial turn 0 -1)))
  :down
  (->> sketch
       (transform [(collect-one :scale)
                   (putval w)
                   (putval h)
                   :snake]
                  (partial turn 0 1)))
  :left
  (->> sketch
       (transform [(collect-one :scale)
                   (putval w)
                   (putval h)
                   :snake]
                  (partial turn -1 0)))
  :right
  (->> sketch
       (transform [(collect-one :scale)
                   (putval w)
                   (putval h)
                   :snake]
                  (partial turn 1 0)))
  sketch))

(defn mouse-clicked [sketch event]
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
   (fn []
    [:div
     [rc/title
      :label "Snake game demo"
      :level :level1] [:br]
     [:canvas#snake-game {:width w :height h}]])
   :component-did-mount snake-game-sketch}))


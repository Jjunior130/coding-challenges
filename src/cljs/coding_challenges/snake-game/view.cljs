(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake :as snake]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

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
 {:snake (snake/make)
  :food (pick-location w h 20)
  :scale 20})

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
                  (let [d (q/dist (:x snake) (:y snake)
                                  (:x food) (:y food))]
                   (if (< d 1)
                    (pick-location w h scl)
                    food))))))

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

(defn key-pressed [sketch event]
 (case (:key event)
  :up (->> sketch (transform :snake (partial snake/dir 0 -1)))
  :down (->> sketch (transform :snake (partial snake/dir 0 1)))
  :left (->> sketch (transform :snake (partial snake/dir -1 0)))
  :right (->> sketch (transform :snake (partial snake/dir 1 0)))
  sketch))

(q/defsketch snake-game-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-pressed key-pressed
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


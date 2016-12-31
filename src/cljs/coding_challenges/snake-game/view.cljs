(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake :as snake]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
 {:snake (snake/make)})

(defn update* [sketch]
 (->> sketch
      (transform :snake snake/update)))

(defn draw [sketch]
 (q/background 51)
 (-> sketch :snake snake/draw))

(defn key-pressed [sketch event]
 (case (:key event)
  :up (->> sketch (transform :snake (partial snake/dir 0 -1)))
  :down (->> sketch (transform :snake (partial snake/dir 0 1)))
  :left (->> sketch (transform :snake (partial snake/dir -1 0)))
  :right (->> sketch (transform :snake (partial snake/dir 1 0)))))

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


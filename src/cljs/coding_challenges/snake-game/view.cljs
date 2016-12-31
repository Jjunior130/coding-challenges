(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake :as snake]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup [])

(defn update* [sketch])

(defn draw [sketch])

(q/defsketch snake-game-sketch
             :setup  setup
             :update update*
             :draw   draw
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


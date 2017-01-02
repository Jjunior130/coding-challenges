(ns coding-challenges.space-invaders.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.space-invaders.flower :as flower]
           [coding-challenges.space-invaders.ship :as ship]
           [coding-challenges.space-invaders.drop :as d]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 640)
(def h 360)

(defn setup [])

(defn update* [sketch])

(defn draw [sketch])

(q/defsketch space-invaders-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "space-invaders"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Space invaders demo"
      :level :level1] [:br]
     [:canvas#space-invaders {:width w :height h}]])
   :component-did-mount space-invaders-sketch}))

(ns coding-challenges.purple-rain.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.purple-rain.drop :as d]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup [])

(defn update* [sketch])

(defn draw [sketch])

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
   (fn []
    [:div
     [rc/title
      :label "Purple rain demo"
      :level :level1] [:br]
     [:canvas#purple-rain {:width w :height h}]])
   :component-did-mount purple-rain-sketch}))

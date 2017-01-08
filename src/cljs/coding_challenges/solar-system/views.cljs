(ns coding-challenges.solar-system.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.solar-system.planet :as planet]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup [])

(defn update* [sketch])

(defn draw [sketch])

(q/defsketch solar-system-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-pressed key-pressed
             :mouse-clicked mouse-clicked
             :host "solar-system"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Solar system demo"
      :level :level1] [:br]
     [:canvas#solar-system {:width w :height h}]])
   :component-did-mount solar-system-sketch}))




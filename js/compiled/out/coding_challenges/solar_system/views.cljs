(ns coding-challenges.solar-system.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.solar-system.planet :as planet]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
 (->> (planet/make 50 0 0)
      (planet/spawn-moons 5 1)))

(defn update* [sun]
 (planet/update* sun))

(defn draw [sun]
 (q/background 0)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw sun))

(q/defsketch solar-system-sketch
             :setup  setup
             :update update*
             :draw   draw
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




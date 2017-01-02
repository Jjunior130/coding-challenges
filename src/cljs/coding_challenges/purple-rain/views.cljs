(ns coding-challenges.purple-rain.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.purple-rain.drop :as d]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 640)
(def h 360)

(defn setup []
 {:drops (repeatedly 500 (partial d/make w))})

(defn update* [sketch]
 (->> sketch
      (transform [:drops
                  (putval h)
                  ALL]
                 d/update*)))

(defn draw [sketch]
 (q/background 230 230 250)
 (doseq [d (:drops sketch)]
  (d/draw d)))

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

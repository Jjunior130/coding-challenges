(ns coding-challenges.mitosis.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.mitosis.cell :as cell]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one collect]]))

(def w 700)
(def h 700)

(defn setup []
 {:cells (repeatedly 2 (partial cell/make w h))})

(defn update* [sketch]
 (->> sketch
      (transform [:cells ALL]
                 cell/update*)))

(defn draw [{cells :cells
             :as sketch}]
 (q/background 200)
 (doseq [cell cells]
  (cell/draw cell)))

(defn mouse-pressed [sketch event]
 (->> sketch
      (transform [:cells ALL (partial cell/clicked? event)]
                 cell/mitosis)
      (transform [:cells] flatten)))

(q/defsketch mitosis-sketch
             :setup  setup
             :update update*
             :draw   draw
             :mouse-pressed mouse-pressed
             :host "mitosis"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Mitosis demo"
      :level :level1] [:br]
     [:canvas#mitosis {:width w :height h}]])
   :component-did-mount mitosis-sketch}))



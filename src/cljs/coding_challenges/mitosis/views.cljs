(ns coding-challenges.mitosis.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.mitosis.cell :as cell]
           [com.rpl.specter :as sp
            :refer [putval ALL transform
                    setval collect-one collect]]))

(def w 700)
(def h 700)

(defn setup []
 (repeatedly 2 cell/make))

(defn update* [cells]
 (->> cells
      (transform ALL
                 cell/update*)))

(defn draw [cells]
 (q/background 200)
 (doseq [cell cells]
  (cell/draw cell)))

(defn mouse-pressed [cells event]
 (->> cells
      (transform [ALL (partial cell/clicked? event)]
                 cell/mitosis)
      flatten))

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



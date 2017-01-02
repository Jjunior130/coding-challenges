(ns coding-challenges.starfield.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.starfield.star :as star]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
  {:stars (repeatedly 800 #(star/new w h))})

(defn update* [state]
 (->> state
      (setval
       :speed (/ (q/mouse-x) 12))
      (transform
       [(collect-one :speed) :stars ALL]
       (partial star/update* w h))))

(defn draw [state]
 (q/background 0)
 (q/translate (/ w 2) (/ h 2))
 (doseq [star (:stars state)]
  (star/draw w h star)))

(q/defsketch starfield-sketch
  :setup  setup
  :update update*
  :draw   draw
  :host "starfield"
  :no-start true
  :middleware [m/fun-mode]
  :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Starfield"
      :level :level1] [:br]
     [:canvas#starfield {:width w :height h}]])
   :component-did-mount starfield-sketch}))

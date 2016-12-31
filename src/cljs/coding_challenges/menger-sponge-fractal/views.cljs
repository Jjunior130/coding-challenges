(ns coding-challenges.menger-sponge-fractal.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.menger-sponge-fractal.box :as box]
           [com.rpl.specter :as sp :refer [ALL transform setval collect-one]]))

(def w 400)
(def h 400)

(defn setup []
 {:sponge [(box/make 0 0 0 200)]})

(defn update* [sketch]
 (->> sketch
      (transform :angle (partial + 0.01))))

(defn draw [sketch]
 (q/background 51)
 (q/lights)
 (q/translate (/ w 2) (/ h 2))
 (q/rotate-x (:angle sketch))
 (q/rotate-y (* 0.4 (:angle sketch)))
 (q/rotate-z (* 0.1 (:angle sketch)))
 (doseq [b (:sponge sketch)]
  (box/draw b)))

(defn mouse-clicked [sketch event]
 (->> sketch
      (transform :sponge (partial mapcat box/generate))))

(q/defsketch menger-sponge-fractal-sketch
             :setup  setup
             :update update*
             :draw   draw
             :mouse-clicked mouse-clicked
             :renderer :p3d
             :host "menger-sponge-fractal"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Menger sponge fractal demo"
      :level :level1] [:br]
     [:canvas#menger-sponge-fractal {:width w :height h}]])
   :component-did-mount menger-sponge-fractal-sketch}))


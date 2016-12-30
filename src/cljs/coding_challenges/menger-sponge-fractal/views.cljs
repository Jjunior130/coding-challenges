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
  {:sponge [(box/make 0 0 0 200)]
   :angle 0})

(defn update* [state]
 (transform
  :angle (partial + 0.01)
  (if (and (not (:clicked? state)) (q/mouse-button))
   (let [v (->> state
                (transform :sponge (comp flatten (partial map box/generate)))
                (setval :clicked? true))]
    (println v)
    v)
   (if-not (q/mouse-button)
    (setval :clicked? false state)
    state))))

(defn draw [state]
 (q/background 51)
 ;#_(q/rotate-x (:angle state))
 (q/rotate-y (* 0.4 (:angle state)))
 (q/rotate-z (* 0.1 (:angle state)))
 (doseq [b (:sponge state)]
  (box/draw b)))

(q/defsketch menger-sponge-fractal-sketch
             :setup  setup
             :update update*
             :draw   draw
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
      :label "Menger sponge fractal sketch"
      :level :level1] [:br]
     [:canvas#menger-sponge-fractal {:width w :height h}]])
   :component-did-mount menger-sponge-fractal-sketch}))


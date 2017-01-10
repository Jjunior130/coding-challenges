(ns coding-challenges.solar-system-3d-texture.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.solar-system-3d-texture.planet :as planet]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
 {:img (q/load-image "sun.jpg")
  :sun (->> (planet/make 50 0 0)
          (planet/spawn-moons 5 1))})

(defn update* [sketch]
 (->> sketch
      (transform :sun planet/update*)))

(defn draw [{sun :sun
             img :img
             :as sketch}]
 (q/background 0)
 (q/lights)
 (q/translate (/ (q/width) 2)
              (/ (q/height) 2))
 (planet/draw img sun))

(q/defsketch solar-system-3d-texture-sketch
             :setup  setup
             :update update*
             :draw   draw
             :renderer :p3d
             :host "solar-system-3d-texture"
             :no-start true
             :middleware [m/fun-mode m/navigation-3d]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Solar system 3D texture demo"
      :level :level1] [:br]
     [:canvas#solar-system-3d-texture {:width w :height h}]])
   :component-did-mount solar-system-3d-texture-sketch}))




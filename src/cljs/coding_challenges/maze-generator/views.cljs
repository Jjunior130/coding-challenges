(ns coding-challenges.maze-generator.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-frame.core :as rf]
           [re-com.core :as rc]
           [coding-challenges.maze-generator.cell :as cell]
           [com.rpl.specter :as sp
            :refer [putval ALL transform FIRST
                    setval collect-one]]))

(def w 600)
(def h 600)

(defn setup []
 (->> {:w 40}
      (transform [(collect-one :w) :cols]
                 #(q/floor (/ (q/width) %1)))
      (transform [(collect-one :w) :rows]
                 #(q/floor (/ (q/height) %1)))
      (transform [(collect-one :cols)
                  (collect-one :rows)
                  :grid]
                 (fn [cols rows grid]
                  (->> (for [i (range cols)
                             j (range rows)]
                        (cell/make i j))
                       (setval [FIRST :visited] true))))
      (transform [(collect-one :grid FIRST)
                  :current]
                 identity)))

(defn update* [{grid :grid
                :as sketch}]
 sketch)

(defn draw [{grid :grid
             w :w
             current :current
             :as sketch}]
 (q/background 51)
 (doseq [cell grid]
  (cell/draw w cell))
 (cell/highlight w current))

(q/defsketch maze-generator-sketch
             :setup  setup
             :update update*
             :draw   draw
             :host "maze-generator"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (let [code (rf/subscribe
               [:select-one [:maze-generator :code]])]
    (fn []
     [rc/v-box
      :align :center
      :children
      (let [code (or @code :sketch)]
       [[rc/title
         :label "Maze generator demo"
         :level :level1]
        [:canvas#maze-generator {:width w :height h}]])]))
   :component-did-mount maze-generator-sketch}))


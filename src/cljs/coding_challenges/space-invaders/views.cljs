(ns coding-challenges.space-invaders.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.space-invaders.flower :as flower]
           [coding-challenges.space-invaders.ship :as ship]
           [coding-challenges.space-invaders.drop :as d :refer [hits?]]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one collect]]))

(def w 600)
(def h 400)

(defn setup []
 {:ship (ship/make w)
  :flowers (for [i (range 6)]
            (flower/make (+ (* i 80) 80)
                         60))})

(defn update* [sketch]
 (->> sketch
      (transform [(collect-one :flowers)
                  :drops]
                 (fn [flowers drops]
                  (->> (remove #(some (partial hits? %) flowers) drops)
                       (transform ALL d/update*))))
      (transform [(collect-one :drops)
                  :flowers]
                 (fn [drops flowers]
                  (if (some (comp
                             (some-fn (partial > 0)
                                     (partial < w))
                             :x)
                            flowers)
                   (transform ALL (partial flower/update* true drops)
                              flowers)
                   (transform ALL (partial flower/update* false drops)
                              flowers))))
      (transform :ship ship/update*)))

(defn draw [sketch]
 (q/background 51)
 (ship/draw h (:ship sketch))
 (doseq [d (:drops sketch)]
  (d/draw d))
 (doseq [flower (:flowers sketch)]
  (flower/draw flower)))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond
   (any-of (keyword " "))
   (->> sketch
        (transform [(collect-one :ship)
                    :drops]
                   (fn [ship drops]
                    (conj drops (d/make (:x ship) h)))))
   (any-of :left :a)
   (->> sketch
        (setval [:ship :xdir] -1))
   (any-of :right :d)
   (->> sketch
        (setval [:ship :xdir] 1))
   :else sketch)))

(defn key-released [sketch]
 (->> sketch
      (setval [:ship :xdir] 0)))

(q/defsketch space-invaders-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-typed key-pressed
             :key-released key-released
             :host "space-invaders"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Space invaders demo"
      :level :level1] [:br]
     [:canvas#space-invaders {:width w :height h}]])
   :component-did-mount space-invaders-sketch}))

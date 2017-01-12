(ns coding-challenges.snake-game.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.snake-game.snake
            :as snake :refer [eat?]]
           [com.rpl.specter :as sp
            :refer [putval ALL transform
                    setval collect-one]]))

(def w 600)
(def h 600)

(defn pick-location [scl]
 (let [cols (q/floor (/ (q/width) scl))
       rows (q/floor (/ (q/height) scl))]
  {:type 'Food
   :x (* scl (rand-int cols))
   :y (* scl (rand-int rows))}))

(defn setup []
 (q/frame-rate 8)
 (->> {:snake (snake/make)
       :scale 20}
      (transform [(collect-one :scale)
                  :food]
                 pick-location)))

(defn update-snake [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :food)
                  :snake]
                 snake/update*)))

(defn update-food [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  (collect-one :snake)
                  :food]
                 (fn [scl snake food]
                  (if (eat? food snake)
                   (pick-location scl)
                   food)))))

(defn update* [sketch]
 (->> sketch
      update-snake
      update-food))

(defn draw [{food :food
             snake :snake
             scl :scale
             :as sketch}]
 (q/background 51)
 (snake/draw scl snake)

 (q/fill 255 0 100)
 (q/rect (-> food :x)
         (-> food :y)
         scl
         scl))

(defn turn-snake?
 "Change direction only if next position doesn't result in death."
 [nxd nyd sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake]
                 (fn [scl snake]
                  (let [{x :x
                         y :y
                         xv :xspeed
                         yv :yspeed
                         :as nsd} (snake/dir nxd nyd snake)
                        nsxp (+ x (* scl xv))
                        nsyp (+ y (* scl yv))
                        death?
                        (or (snake/death?
                             (:tail nsd)
                             nsxp
                             nsyp)
                            (not (<= 0 nsxp (- (q/width) scl)))
                            (not (<= 0 nsyp (- (q/height) scl))))]
                   (if-not death?
                    nsd
                    snake))))))

(defn key-pressed [sketch event]
 (letfn [(any-of
          [& ks]
          (some (partial = (:key event))
                ks))]
  (cond
   (any-of :up :w)
   (->> sketch
        (turn-snake? 0 -1))
   (any-of :down :s)
   (->> sketch
        (turn-snake? 0 1))
   (any-of :left :a)
   (->> sketch
        (turn-snake? -1 0))
   (any-of :right :d)
   (->> sketch
        (turn-snake? 1 0))
   :else sketch)))

(defn increase-snake-tail [sketch]
 (->> sketch
      (transform [(collect-one :scale)
                  :snake
                  (collect-one :x)
                  (collect-one :y)
                  (collect-one :xspeed)
                  (collect-one :yspeed)
                  :tail]
                 (fn [scl sx sy sxv syv tail]
                  (conj tail {:x (- sx (* scl sxv))
                              :y (- sy (* scl syv))})))))

(defn mouse-clicked [sketch event]
 (->> sketch
      increase-snake-tail))

(q/defsketch snake-game-sketch
             :setup  setup
             :update update*
             :draw   draw
             :key-pressed key-pressed
             :mouse-clicked mouse-clicked
             :host "snake-game"
             :no-start true
             :middleware [m/fun-mode]
             :size [w h])

(defn view []
 (reagent/create-class
  {:reagent-render
   (fn []
    [:div
     [rc/title
      :label "Snake game demo"
      :level :level1] [:br]
     [:canvas#snake-game {:width w :height h}]])
   :component-did-mount snake-game-sketch}))


(ns coding-challenges.views
 (:require [re-frame.core :as rf]
           [re-com.core :as rc]
           [reagent.core :as reagent]
           [coding-challenges.socket :as socket]
           [coding-challenges.starfield.views :as starfield]
           [coding-challenges.menger-sponge-fractal.views :as menger-sponge-fractal]
           [coding-challenges.purple-rain.views :as purple-rain]
           [coding-challenges.snake-game.views :as snake-game]
           [coding-challenges.space-invaders.views :as space-invaders]
           [coding-challenges.mitosis.views :as mitosis]
           [coding-challenges.solar-system.views :as solar-system]
           [coding-challenges.solar-system-3d.views :as solar-system-3d]))

;; (defonce p
;;  (js/setInterval #(rf/dispatch [:server/ping]) 3500))

;; (defn ping []
;;  (let [p (rf/subscribe [:select-one [:server :ping]])]
;;   (fn []
;;    [:div {:style {:font-size "3em"}}
;;     "Client to server: " (first @p) "ms"
;;     [:br]
;;     "Server to client: " (last @p) "ms"])))

;; home

(defn home-title []
 [rc/title
  :label "Coding challenges"
  :level :level1])

(defn link-to-about-page []
  [rc/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn link-to-starfield []
 [rc/hyperlink-href
   :label "Starfield demo"
   :href "#/starfield"])

(defn link-to-menger-sponge-fractal []
 [rc/hyperlink-href
   :label "Menger sponge fractal demo"
   :href "#/menger-sponge-fractal"])

(defn link-to-snake-game []
 [rc/hyperlink-href
   :label "Snake game demo"
   :href "#/snake-game"])

(defn link-to-purple-rain []
 [rc/hyperlink-href
  :label "Purple rain demo"
  :href "#/purple-rain"])

(defn link-to-space-invaders []
 [rc/hyperlink-href
  :label "Space invaders demo"
  :href "#/space-invaders"])

(defn link-to-mitosis []
 [rc/hyperlink-href
  :label "Mitosis demo"
  :href "#/mitosis"])

(defn link-to-solar-system []
 [rc/hyperlink-href
  :label "Solar system demo"
  :href "#/solar-system"])

(defn link-to-solar-system-3d []
 [rc/hyperlink-href
  :label "Solar system 3D demo"
  :href "#/solar-system-3d"])

(defn home-panel []
  [rc/v-box
   :gap "1em"
   :children [[home-title]
              [link-to-starfield]
              [link-to-menger-sponge-fractal]
              [link-to-snake-game]
              [link-to-purple-rain]
              [link-to-space-invaders]
              [link-to-mitosis]
              [link-to-solar-system]
              [link-to-solar-system-3d]
              [link-to-about-page]]])

;; about

(defn about-title []
  [rc/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [rc/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [rc/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])

(defn starfield-panel []
 [:div
  [link-to-home-page]
  [:br]
  [starfield/view]])

(defn menger-sponge-fractal-panel []
 [:div
  [link-to-home-page]
  [:br]
  [menger-sponge-fractal/view]])

(defn snake-game-panel []
 [:div
  [link-to-home-page]
  [:br]
  [snake-game/view]])

(defn purple-rain-panel []
 [:div
  [link-to-home-page]
  [:br]
  [purple-rain/view]])

(defn space-invaders-panel []
 [:div
  [link-to-home-page]
  [:br]
  [space-invaders/view]])

(defn mitosis-panel []
 [:div
  [link-to-home-page]
  [:br]
  [mitosis/view]])

(defn solar-system-panel []
 [:div
  [link-to-home-page]
  [:br]
  [solar-system/view]])

(defn solar-system-3d-panel []
 [:div
  [link-to-home-page]
  [:br]
  [solar-system-3d/view]])

;; main

(defn- panels [panel-name]
 (case panel-name
  :home-panel [home-panel]
  :about-panel [about-panel]
  :starfield-panel [starfield-panel]
  :menger-sponge-fractal-panel [menger-sponge-fractal-panel]
  :snake-game-panel [snake-game-panel]
  :purple-rain-panel [purple-rain-panel]
  :space-invaders-panel [space-invaders-panel]
  :mitosis-panel [mitosis-panel]
  :solar-system-panel [solar-system-panel]
  :solar-system-3d-panel [solar-system-3d-panel]
  [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (rf/subscribe [:active-panel])]
   (reagent/create-class
    {:component-will-mount socket/event-loop
     :reagent-render
     (fn []
      [panels @active-panel])})))

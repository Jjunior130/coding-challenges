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
              [com.rpl.specter :as sp :refer [ALL]]))

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
  :label "Space invader demo"
  :href "#/space-invader"])

(defn home-panel []
  [rc/v-box
   :gap "1em"
   :children [[home-title]
              [link-to-starfield]
              [link-to-menger-sponge-fractal]
              [link-to-snake-game]
              [link-to-purple-rain]
              [link-to-space-invaders]
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
  [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (rf/subscribe [:active-panel])]
   (reagent/create-class
    {:component-will-mount socket/event-loop
     :reagent-render
     (fn []
        [rc/v-box
         :height "100%"
         :children [[panels @active-panel]]])})))

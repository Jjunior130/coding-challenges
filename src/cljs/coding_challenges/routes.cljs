(ns coding-challenges.routes
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.History)
    (:require [secretary.core :as secretary]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [re-frame.core :as rf]))

(defn hook-browser-navigation! []
 (doto (History.)
  (events/listen
   EventType/NAVIGATE
   (fn [event]
    (secretary/dispatch! (.-token event))))
  (.setEnabled true)))

(defn app-routes []
 (secretary/set-config! :prefix "#")
 ;; --------------------
 ;; define routes here
 (defroute "/" []
  (rf/dispatch [:set-active-panel :home-panel]))

 (defroute "/starfield" []
  (rf/dispatch [:set-active-panel :starfield-panel]))

 (defroute "/menger-sponge-fractal" []
  (rf/dispatch [:set-active-panel :menger-sponge-fractal-panel]))

 (defroute "/about" []
  (rf/dispatch [:set-active-panel :about-panel]))


 ;; --------------------
 (hook-browser-navigation!))

(ns coding-challenges.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [re-frisk.core :refer [enable-re-frisk!]]
              [coding-challenges.events]
              [coding-challenges.subs]
              [coding-challenges.routes :as routes]
              [coding-challenges.views :as views]
              [coding-challenges.config :as config]))

(extend-type js/NodeList
  ISeqable
  (-seq [array] (array-seq array 0)))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (enable-re-frisk!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))

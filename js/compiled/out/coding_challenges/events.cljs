(ns coding-challenges.events
    (:require [re-frame.core :as rf]
              [coding-challenges.db :as db]
              [coding-challenges.socket :refer [chsk-send!]]
              [com.rpl.specter :refer [transform setval]]))

(rf/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(rf/reg-event-db
 :setval
 (fn [db [_ [nav v]]]
  (setval nav v db)))

(rf/reg-event-db
 :transform
 (fn [db [_ [nav f]]]
   (transform nav f db)))

(rf/reg-event-db
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

;; to server

(rf/reg-event-db
 :server/ping
 (fn [db _]
  (chsk-send! [:server/ping (.getTime (js/Date.))])
  db))

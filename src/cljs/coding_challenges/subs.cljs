(ns coding-challenges.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as rf]
              [com.rpl.specter :as sp :refer [select select-one]]))

(rf/reg-sub
 :select
 (fn [db [_ nav]]
  (select nav db)))

(rf/reg-sub
 :select-one
 (fn [db [_ nav]]
  (select-one nav db)))

(rf/reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))

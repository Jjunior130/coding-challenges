(ns coding-challenges.mitosis.views
 (:require [quil.core :as q :include-macros true]
           [quil.middleware :as m]
           [reagent.core :as reagent]
           [re-com.core :as rc]
           [coding-challenges.mitosis.cell :as cell]
           [com.rpl.specter :as sp :refer [putval ALL transform setval collect-one collect]]))

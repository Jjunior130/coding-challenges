(ns coding-challenges.util
 (:require [com.rpl.specter :as sp
            :refer [terminal terminal-val multi-transform*
                    multi-path]]))

(defn update-val [p f]
 [p (terminal f)])

(defn multi [f]
 (fn this [& args]
  (if (even? (count args))
   (let [pairs (partition 2 args)]
    (apply multi-path
           (map (partial apply f)
                pairs)))
   (let [structure (first args)
         pairs (rest args)]
    (multi-transform* (apply this pairs) structure)))))

(def u (multi update-val))

(defn assoc-val [p v]
 [p (terminal-val v)])

(def a (multi assoc-val))


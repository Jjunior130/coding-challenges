(ns coding-challenges.util
 (:require [com.rpl.specter :as sp
            :refer [terminal terminal-val multi-transform*
                    multi-path STAY]]))

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

(def u
 "Applies fn to the navigated value(s).

Even args call:
 Must be called inside a com.rpl.specter/multi-transform.
 Takes path<=>fn pairs as arguments.
 Returns a path.
Odd args call:
 Takes a structure as first argument and path<=>fn pairs as rest.
 Returns the transformation of structure."
 (multi update-val))

(defn assoc-val [p v]
 [p (terminal-val v)])

(def a
 "Replace the navigated value(s) with the given value(s).

Even args call:
 Must be called inside a com.rpl.specter/multi-transform.
 Takes path<=>value pairs as arguments.
 Returns a path.
Odd args call:
 Takes a structure as first argument and path<=>value pairs as rest.
 Returns the transformation of structure."
 (multi assoc-val))

(defn mt
 "Transform structure based on the given paths."
 [structure & paths]
 (multi-transform* (apply multi-path paths) structure))

(defn cond->mt
 "Transform structure based on the given paths whose condition is truthy.

Acts like cond->>; Doesn't short circuit on first false."
 [structure & pairs]
 (let [pairs (partition 2 pairs)]
  (reduce
   (fn [structure [condition path]]
    (if condition
     (mt structure path)
     structure))
   structure
   pairs)))

(defn cond-mt
 "Transform structure based on the first given paths whose condition is truthy.

Acts like cond; Short circuit after first true."
 [structure & pairs]
 (let [pairs (partition 2 pairs)
       [condition path] (first
                         (drop-while (comp
                                      false?
                                      boolean
                                      first)
                                     pairs))]
  (when condition
   (mt structure path))))

(def PASS (u STAY identity))

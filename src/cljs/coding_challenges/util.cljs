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

(def u
 "Applies fn to the navigated values.

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
 "Replace the navigated value with the given value.

Even args call:
 Must be called inside a com.rpl.specter/multi-transform.
 Takes path<=>value pairs as arguments.
 Returns a path.
Odd args call:
 Takes a structure as first argument and path<=>value pairs as rest.
 Returns the transformation of structure."
 (multi assoc-val))


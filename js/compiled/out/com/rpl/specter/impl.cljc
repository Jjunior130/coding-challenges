(ns com.rpl.specter.impl
  #?(:cljs (:require-macros
            [com.rpl.specter.util-macros
             :refer [doseqres mk-comp-navs mk-late-fn mk-late-fn-records]]))

  (:use [com.rpl.specter.protocols :only
          [select* transform* collect-val RichNavigator]]
        #?(:clj [com.rpl.specter.util-macros :only [doseqres mk-comp-navs]]))

  (:require [com.rpl.specter.protocols :as p]
            #?(:clj [clojure.pprint :as pp] :cljs [cljs.pprint :as pp])
            [clojure.string :as s]
            [clojure.walk :as walk]
            #?(:clj [riddley.walk :as riddley]))

  #?(:clj (:import [com.rpl.specter Util MutableCell])))


(def NONE ::NONE)

(defn spy [e]
  (println "SPY:")
  (println (pr-str e))
  e)

(defn- smart-str* [o]
  (if (coll? o)
    (pr-str o)
    (str o)))

(defn smart-str [& elems]
  (apply str (map smart-str* elems)))

(defn fast-constantly [v]
  (fn ([] v)
      ([a1] v)
      ([a1 a2] v)
      ([a1 a2 a3] v)
      ([a1 a2 a3 a4] v)
      ([a1 a2 a3 a4 a5] v)
      ([a1 a2 a3 a4 a5 a6] v)
      ([a1 a2 a3 a4 a5 a6 a7] v)
      ([a1 a2 a3 a4 a5 a6 a7 a8] v)
      ([a1 a2 a3 a4 a5 a6 a7 a8 a9] v)
      ([a1 a2 a3 a4 a5 a6 a7 a8 a9 a10] v)
      ([a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 & r] v)))


#?(:clj
   (defmacro throw* [etype & args]
     `(throw (new ~etype (smart-str ~@args)))))

#?(
   :clj
   (defmacro throw-illegal [& args]
     `(throw* IllegalArgumentException ~@args))


   :cljs
   (defn throw-illegal [& args]
     (throw (js/Error. (apply str args)))))


;; need to get the expansion function like this so that
;; this code compiles in a clojure environment where cljs.analyzer
;; namespace does not exist
#?(
   :clj
   (defn cljs-analyzer-macroexpand-1 []
     (eval 'cljs.analyzer/macroexpand-1))

;; this version is for bootstrap cljs
   :cljs
   (defn cljs-analyzer-macroexpand-1 []
     ^:cljs.analyzer/no-resolve cljs.analyzer/macroexpand-1))


#?(
   :clj
   (defn clj-macroexpand-all [form]
     (riddley/macroexpand-all form))

   :cljs
   (defn clj-macroexpand-all [form]
     (throw-illegal "not implemented")))


#?(
   :clj
   (defn intern* [ns name val] (intern ns name val))

   :cljs
   (defn intern* [ns name val]
     (throw-illegal "intern not supported in ClojureScript")))

#?(
   :clj
   (defmacro fast-object-array [i]
     `(com.rpl.specter.Util/makeObjectArray ~i)))


(defn benchmark [iters afn]
  (time
   (dotimes [_ iters]
     (afn))))

#?(
   :clj
   (defmacro exec-select* [this & args]
     (let [platform (if (contains? &env :locals) :cljs :clj)
           hinted (with-meta (gensym) {:tag 'com.rpl.specter.protocols.RichNavigator})]
       (if (= platform :cljs)
         `(p/select* ~this ~@args)
         `(let [~hinted ~this]
            (.select* ~hinted ~@args)))))
   :cljs
   (defn exec-select* [this vals structure next-fn]
     (p/select* ^not-native this vals structure next-fn)))


#?(
   :clj
   (defmacro exec-transform* [this & args]
     (let [platform (if (contains? &env :locals) :cljs :clj)
           hinted (with-meta (gensym) {:tag 'com.rpl.specter.protocols.RichNavigator})]
       (if (= platform :cljs)
         `(p/transform* ~this ~@args)
         `(let [~hinted ~this]
            (.transform* ~hinted ~@args)))))

   :cljs
   (defn exec-transform* [this vals structure next-fn]
     (p/transform* ^not-native this vals structure next-fn)))

(defprotocol PathComposer
  (do-comp-paths [paths]))

(defn rich-nav? [n]
  #?(:clj (instance? com.rpl.specter.protocols.RichNavigator n)
     :cljs (satisfies? RichNavigator n)))

(defn comp-paths* [p]
  (if (rich-nav? p) p (do-comp-paths p)))

(defn- coerce-object [this]
  (cond (rich-nav? this) this
        (satisfies? p/ImplicitNav this) (p/implicit-nav this)
        :else (throw-illegal "Not a navigator: " this " " (pr-str (type this)))))


(defprotocol CoercePath
  (coerce-path [this]))

(extend-protocol CoercePath
  nil ; needs its own coercer because it doesn't count as an Object
  (coerce-path [this]
    (coerce-object this))

  #?(:clj java.util.List :cljs cljs.core/PersistentVector)
  (coerce-path [this]
    (do-comp-paths this))

  #?(:cljs cljs.core/IndexedSeq)
  #?(:cljs (coerce-path [this]
            (coerce-path (vec this))))
  #?(:cljs cljs.core/EmptyList)
  #?(:cljs (coerce-path [this]
            (coerce-path (vec this))))
  #?(:cljs cljs.core/List)
  #?(:cljs (coerce-path [this]
            (coerce-path (vec this))))
  #?(:cljs cljs.core/LazySeq)
  #?(:cljs (coerce-path [this]
            (coerce-path (vec this))))
  #?(:cljs cljs.core/Subvec)
  #?(:cljs (coerce-path [this]
            (coerce-path (vec this))))

  #?(:clj Object :cljs default)
  (coerce-path [this]
    (coerce-object this)))

(def STAY*
  (reify RichNavigator
    (select* [this vals structure next-fn]
      (next-fn vals structure))
    (transform* [this vals structure next-fn]
      (next-fn vals structure))))

(defn combine-two-navs [nav1 nav2]
  (reify RichNavigator
    (select* [this vals structure next-fn]
      (exec-select* nav1 vals structure
        (fn [vals-next structure-next]
          (exec-select* nav2 vals-next structure-next next-fn))))
    (transform* [this vals structure next-fn]
      (exec-transform* nav1 vals structure
        (fn [vals-next structure-next]
          (exec-transform* nav2 vals-next structure-next next-fn))))))

(extend-protocol PathComposer
  nil
  (do-comp-paths [o]
    (coerce-path o))
  #?(:clj Object :cljs default)
  (do-comp-paths [o]
    (coerce-path o))
  #?(:clj java.util.List :cljs cljs.core/PersistentVector)
  (do-comp-paths [navigators]
    (let [coerced (map coerce-path navigators)]
      (cond (empty? coerced)
            STAY*

            (= 1 (count coerced))
            (first coerced)

            :else
            (reduce combine-two-navs coerced)))))

;; cell implementation idea taken from prismatic schema library
#?(:cljs
   (defprotocol PMutableCell
     (set_cell [cell x])))


#?(:cljs
   (deftype MutableCell [^:volatile-mutable q]
     PMutableCell
     (set_cell [this x] (set! q x))))


#?(
   :clj
   (defn mutable-cell
     ([] (mutable-cell nil))
     ([v] (MutableCell. v)))

   :cljs
   (defn mutable-cell
     ([] (mutable-cell nil))
     ([init] (MutableCell. init))))


#?(
   :clj
   (defn set-cell! [^MutableCell c v]
     (.set c v))

   :cljs
   (defn set-cell! [cell val]
     (set_cell cell val)))


#?(
   :clj
   (defn get-cell [^MutableCell c]
     (.get c))


   :cljs
   (defn get-cell [cell]
     (.-q cell)))




(defn update-cell! [cell afn]
  (let [ret (afn (get-cell cell))]
    (set-cell! cell ret)
    ret))

#?(
   :clj
   (defmacro compiled-traverse* [path result-fn structure]
     `(exec-select*
       ~path
       []
       ~structure
       (fn [vals# structure#]
        (if (identical? vals# [])
          (~result-fn structure#)
          (~result-fn (conj vals# structure#))))))

   :cljs
   (defn compiled-traverse* [path result-fn structure]
     (exec-select*
      path
      []
      structure
      (fn [vals structure]
       (if (identical? vals [])
         (result-fn structure)
         (result-fn (conj vals structure)))))))




(defn do-compiled-traverse [apath structure]
  (reify #?(:clj clojure.lang.IReduce :cljs cljs.core/IReduce)
    (#?(:clj reduce :cljs -reduce)
      [this afn]
      (#?(:clj .reduce :cljs -reduce) this afn (afn)))
    (#?(:clj reduce :cljs -reduce)
      [this afn start]
      (let [cell (mutable-cell start)]
        (compiled-traverse*
          apath
          (fn [elem]
            (let [curr (get-cell cell)]
              (set-cell! cell (afn curr elem))))
          structure)
        (get-cell cell)))))


(defn compiled-select* [path structure]
  (let [res (mutable-cell (transient []))
        result-fn (fn [structure]
                    (let [curr (get-cell res)]
                      (set-cell! res (conj! curr structure))))]
    (compiled-traverse* path result-fn structure)
    (persistent! (get-cell res))))


(defn compiled-select-one* [path structure]
  (let [res (mutable-cell NONE)
        result-fn (fn [structure]
                    (let [curr (get-cell res)]
                      (if (identical? curr NONE)
                        (set-cell! res structure)
                        (throw-illegal "More than one element found in structure: " structure))))]

    (compiled-traverse* path result-fn structure)
    (let [ret (get-cell res)]
      (if (identical? ret NONE)
        nil
        ret))))


(defn compiled-select-one!* [path structure]
  (let [res (mutable-cell NONE)
        result-fn (fn [structure]
                    (let [curr (get-cell res)]
                      (if (identical? curr NONE)
                        (set-cell! res structure)
                        (throw-illegal "More than one element found in structure: " structure))))]
    (compiled-traverse* path result-fn structure)
    (let [ret (get-cell res)]
      (if (identical? NONE ret)
        (throw-illegal "Found no elements for select-one! on " structure))
      ret)))


(defn compiled-select-first* [path structure]
  (let [res (mutable-cell NONE)
        result-fn (fn [structure]
                    (let [curr (get-cell res)]
                      (if (identical? curr NONE)
                        (set-cell! res structure))))]
    (compiled-traverse* path result-fn structure)
    (let [ret (get-cell res)]
      (if (identical? ret NONE)
        nil
        ret))))


(defn compiled-select-any* [path structure]
  (compiled-traverse* path identity structure))

(defn compiled-selected-any?* [path structure]
  (not= NONE (compiled-select-any* path structure)))

(defn terminal* [afn vals structure]
  (if (identical? vals [])
    (afn structure)
    (apply afn (conj vals structure))))

;;TODO: could inline cache the transform-fn, or even have a different one
;;if know there are no vals at the end
(defn compiled-transform* [nav transform-fn structure]
  (exec-transform* nav [] structure
    (fn [vals structure]
      (terminal* transform-fn vals structure))))

(defn fn-invocation? [f]
  (or #?(:clj  (instance? clojure.lang.Cons f))
      #?(:clj  (instance? clojure.lang.LazySeq f))
      #?(:cljs (instance? cljs.core.LazySeq f))
      (list? f)))

(defrecord LocalSym
  [val sym])

(defrecord VarUse
  [val var sym])

(defrecord SpecialFormUse
  [val code])

(defrecord FnInvocation
  ;; op and params elems can be any of the above
  [op params code])

(defrecord DynamicVal
  [code])

(defrecord DynamicPath
  [path])

(defrecord DynamicFunction
  [op params])

(defn dynamic-param? [o]
  (contains? #{DynamicPath DynamicVal DynamicFunction} (type o)))

(defn static-path? [path]
  (if (sequential? path)
    (every? static-path? path)
    (-> path dynamic-param? not)))

(defn late-path [path]
  (if (static-path? path)
    (comp-paths* path)
    (com.rpl.specter.impl/->DynamicPath path)))



(defrecord CachedPathInfo
  [dynamic? precompiled])


(defn filter-select [afn structure next-fn]
  (if (afn structure)
    (next-fn structure)
    NONE))

(defn filter-transform [afn structure next-fn]
  (if (afn structure)
    (next-fn structure)
    structure))

(defn ^:direct-nav pred* [afn]
  (reify RichNavigator
    (select* [this vals structure next-fn]
      (if (afn structure)
        (next-fn vals structure)
        NONE))
    (transform* [this vals structure next-fn]
      (if (afn structure)
        (next-fn vals structure)
        structure))))

(defn ^:direct-nav collected?* [afn]
  (reify RichNavigator
    (select* [this vals structure next-fn]
      (if (afn vals)
        (next-fn vals structure)
        NONE))
    (transform* [this vals structure next-fn]
      (if (afn vals)
        (next-fn vals structure)
        structure))))

(defn ^:direct-nav cell-nav [cell]
  (reify RichNavigator
    (select* [this vals structure next-fn]
      (exec-select* (get-cell cell) vals structure next-fn))
    (transform* [this vals structure next-fn]
      (exec-transform* (get-cell cell) vals structure next-fn))))

(defn local-declarepath []
  (let [cell (mutable-cell nil)]
    (vary-meta (cell-nav cell) assoc ::cell cell)))

(defn providepath* [declared compiled-path]
  (let [cell (-> declared meta ::cell)]
    (set-cell! cell compiled-path)))



(defn- gensyms [amt]
  (vec (repeatedly amt gensym)))

(mk-comp-navs)

(defn srange-transform* [structure start end next-fn]
  (let [structurev (vec structure)
        newpart (next-fn (-> structurev (subvec start end)))
        res (concat (subvec structurev 0 start)
                    newpart
                    (subvec structurev end (count structure)))]
    (if (vector? structure)
      (vec res)
      res)))

(defn- matching-indices [aseq p]
  (keep-indexed (fn [i e] (if (p e) i)) aseq))

(defn matching-ranges [aseq p]
  (first
    (reduce
      (fn [[ranges curr-start curr-last :as curr] i]
        (cond
          (nil? curr-start)
          [ranges i i]

          (= i (inc curr-last))
          [ranges curr-start i]

          :else
          [(conj ranges [curr-start (inc curr-last)]) i i]))

      [[] nil nil]
      (concat (matching-indices aseq p) [-1]))))

(defn continuous-subseqs-transform* [pred structure next-fn]
  (reduce
    (fn [structure [s e]]
      (srange-transform* structure s e next-fn))
    structure
    (reverse (matching-ranges structure pred))))

(defn codewalk-until [pred on-match-fn structure]
  (if (pred structure)
    (on-match-fn structure)
    (let [ret (walk/walk (partial codewalk-until pred on-match-fn) identity structure)]
      (if (and (fn-invocation? structure) (fn-invocation? ret))
        (with-meta ret (meta structure))
        ret))))


#?(:clj
   (do
    (def ^:dynamic *tmp-closure*)
    (defn closed-code [closure body]
      (let [lv (mapcat #(vector % `(*tmp-closure* '~%))
                       (keys closure))]
        (binding [*tmp-closure* closure]
          (eval `(let [~@lv] ~body)))))


    (let [embeddable? (some-fn number?
                               symbol?
                               keyword?
                               string?
                               char?
                               list?
                               vector?
                               set?
                               #(and (map? %) (not (record? %)))
                               nil?
                               #(instance? clojure.lang.Cons %)
                               #(instance? clojure.lang.LazySeq %))]
      (defn eval+
        "Automatically extracts non-evalable stuff into a closure and then evals"
        [form]
        (let [replacements (mutable-cell {})
              new-form (codewalk-until
                         #(-> % embeddable? not)
                         (fn [o]
                           (let [s (gensym)]
                             (update-cell! replacements #(assoc % s o))
                             s))
                         form)
              closure (get-cell replacements)]
          (closed-code closure new-form))))))

(defn coerce-nav [o]
  (cond #?(:clj (instance? com.rpl.specter.protocols.RichNavigator o)
           :cljs (satisfies? RichNavigator o))
        o

        (sequential? o)
        (comp-paths* o)

        :else
        (p/implicit-nav o)))


(defn dynamic-var? [v]
  (-> v meta :dynamic))

;; original-obj stuff is done to avoid using functions with metadata on them
;; clojure's implementation of function metadata causes the function to do an
;; apply for every invocation
(defn direct-nav-obj [o]
  (vary-meta o merge {:direct-nav true :original-obj o}))

(defn maybe-direct-nav [obj direct-nav?]
  (if direct-nav?
    (direct-nav-obj obj)
    obj))

(defn original-obj [o]
  (let [orig (-> o meta :original-obj)]
    (if orig
      (recur orig)
      o)))

(defn direct-nav? [o]
  (-> o meta :direct-nav))

(defn all-static? [params]
  (every? (complement dynamic-param?) params))

(defn late-resolved-fn [afn]
  (fn [& args]
    (if (all-static? args)
      (apply afn args)
      (->DynamicFunction afn args)
      )))

(defn- magic-precompilation* [o]
  (cond (sequential? o)
        (if (or (list? o) (seq? o))
          (map magic-precompilation* o)
          (into (empty o) (map magic-precompilation* o)))

        (instance? VarUse o)
        (if (dynamic-var? (:var o))
          (->DynamicVal (maybe-direct-nav
                         (:sym o)
                         (or (-> o :var direct-nav?)
                             (-> o :sym direct-nav?))))
          (maybe-direct-nav
            (:val o)
            (or (-> o :var direct-nav?)
                (-> o :sym direct-nav?)
                (-> o :val direct-nav?))))

        (instance? LocalSym o)
        (->DynamicVal (:sym o))

        (instance? SpecialFormUse o)
        (->DynamicVal (:code o))

        (instance? FnInvocation o)
        (let [op (magic-precompilation* (:op o))
              params (doall (map magic-precompilation* (:params o)))]
          (if (or (-> op meta :dynamicnav)
                  (all-static? (conj params op)))
            (magic-precompilation* (apply op params))
            (->DynamicFunction op params)))

        :else
        ;; this handles dynamicval as well
        o))

(defn static-combine
  ([o] (static-combine o true))
  ([o nav-pos?]
   (cond (sequential? o)
         (do
           (if-not nav-pos?
             ;; should never happen...
             (throw-illegal "Cannot statically combine sequential when not in nav pos"))
           (let [res (continuous-subseqs-transform*
                       rich-nav?
                       (doall (map static-combine (flatten o)))
                       (fn [s] [(comp-paths* s)]))]
             (if (= 1 (count res))
               (first res)
               res)))

         (instance? DynamicFunction o)
         (->DynamicFunction
          (static-combine (:op o) false)
          (doall (map #(static-combine % false) (:params o))))

         (instance? DynamicPath o)
         (->DynamicPath (static-combine (:path o)))

         (instance? DynamicVal o)
         o

         :else
         (if nav-pos?
          (coerce-nav o)
          o))))


#?(:cljs
   (do
     (defprotocol LateResolve
       (late-resolve [this dynamic-params]))

     ;; one of the "possible params"
     (defrecord LocalParam [idx]
       LateResolve
       (late-resolve [this dynamic-params]
         (nth dynamic-params idx)))

     ;; statically precomputed
     (defrecord StaticParam [val]
       LateResolve
       (late-resolve [this dynamic-params]
         val))

     (mk-late-fn-records)
     (mk-late-fn)))

#?(:clj
   (defn static-fn-code [afn args]
     `(~afn ~@args))

   :cljs
   (defn static-fn-code [afn args]
     (late-fn (->StaticParam afn) args)))

#?(:clj
   (defn dynamic-fn-code [afn args]
     `(~afn ~@args))

   :cljs
   (defn dynamic-fn-code [afn args]
     (late-fn afn args)))

#?(:clj
   (defn dynamic-val-code [code possible-params]
     code)

   :cljs
   (defn dynamic-val-code [code possible-params]
     (let [[i] (keep-indexed (fn [i v] (if (= v code) i)) possible-params)]
       (if (nil? i)
         (throw-illegal "Could not find " code " in possible params " possible-params))
       (maybe-direct-nav
        (->LocalParam i)
        (direct-nav? code)))))

#?(:clj
   (defn static-val-code [o]
     o)

   :cljs
   (defn static-val-code [o]
     (maybe-direct-nav
      (->StaticParam o)
      (direct-nav? o))))


(declare resolve-nav-code)

(defn resolve-arg-code [o possible-params]
  (cond (instance? DynamicFunction o)
        (let [op (resolve-arg-code (:op o) possible-params)
              params (map #(resolve-arg-code % possible-params) (:params o))]
          (maybe-direct-nav
            (dynamic-fn-code (original-obj op) params)
            (direct-nav? (:op o))))

        (instance? DynamicVal o)
        (dynamic-val-code (:code o) possible-params)

        (instance? DynamicPath o)
        (resolve-nav-code o possible-params)

        :else
        (static-val-code o)))

(defn resolve-nav-code [o possible-params]
  (cond
    (instance? DynamicPath o)
    (let [path (:path o)]
      (if (sequential? path)
        (let [resolved (vec (map #(resolve-nav-code % possible-params) path))]
          (cond (empty? resolved) (static-val-code STAY*)
                (= 1 (count resolved)) (first resolved)
                :else (static-fn-code comp-navs resolved)))
        (resolve-nav-code path possible-params)))

    (instance? DynamicVal o)
    (let [code (:code o)
          d (dynamic-val-code code possible-params)]
      (cond (direct-nav? code)
            d

            (or (set? code) (and (fn-invocation? code) (= 'fn* (first code))))
            (static-fn-code pred* [d])

            :else
            (static-fn-code coerce-nav [d])))

    (instance? DynamicFunction o)
    (let [res (resolve-arg-code o possible-params)]
      (if (direct-nav? res) res (static-fn-code coerce-nav [res])))

    :else
    (static-val-code (coerce-nav o))))

(defn used-locals [locals-set form]
  (let [used-locals-cell (mutable-cell [])]
    (walk/postwalk
     (fn [e]
       (if (contains? locals-set e)
         (update-cell! used-locals-cell #(conj % e))
         e))
     form)
    (get-cell used-locals-cell)))

(def ^:dynamic *DEBUG-INLINE-CACHING* false)

#?(:cljs
   (defn mk-fn-name-strs [o]
     (walk/postwalk
      (fn [e]
        (if (fn? e) (re-find #" .*" (pr-str e)) e))
      o)))

#?(:clj
   (defn mk-dynamic-path-maker [resolved-code ns-str used-locals-list possible-param]
     (let [code `(fn [~@used-locals-list] ~resolved-code)
           ns (find-ns (symbol ns-str))]
      (when *DEBUG-INLINE-CACHING*
        (println "Produced code:")
        (pp/pprint code)
        (println))
      (binding [*ns* ns] (eval+ code))))

   :cljs
   (defn mk-dynamic-path-maker [resolved-code ns-str used-locals-list possible-params]
     (when *DEBUG-INLINE-CACHING*
       (println "Possible params:")
       (println possible-params)
       (println "\nProduced dynamic object:")
       (pp/pprint (mk-fn-name-strs resolved-code))
       (println))
     (fn [dynamic-params]
       (late-resolve resolved-code dynamic-params))))


;; TODO: could have a global flag about whether or not to compile and cache static
;; portions, or whether to compile everything together on each invocation (so that
;; it can be redefined in repl
;; could have three levels:
;; 1. NO-COERCION (never allow coerce-nav at runtime)
;; 2. REGULAR (allow coerce-nav at runtime, cache static parts together)
;; 3. REDEFINABLE-VARS (don't cache static parts together)
(defn magic-precompilation [path ns-str used-locals-list possible-params]
  (let [magic-path (-> path magic-precompilation* static-combine)]
    (when *DEBUG-INLINE-CACHING*
      (println "Inline caching debug information")
      (println "--------------------------------")
      (println "Input path:" path "\n")
      (println "Processed path:" magic-path "\n"))
    (if (rich-nav? magic-path)
      (do
        (when *DEBUG-INLINE-CACHING*
          (println "Static result:" magic-path))
        (->CachedPathInfo false magic-path))
      (let [maker (mk-dynamic-path-maker
                   (resolve-nav-code (->DynamicPath magic-path) possible-params)
                   ns-str
                   used-locals-list
                   possible-params)]
        (->CachedPathInfo true maker)))))



(defn compiled-setval* [path val structure]
  (compiled-transform* path (fast-constantly val) structure))

(defn compiled-replace-in*
  [path transform-fn structure & {:keys [merge-fn] :or {merge-fn concat}}]
  (let [state (mutable-cell nil)]
    [(compiled-transform* path
             (fn [& args]
               (let [res (apply transform-fn args)]
                 (if res
                   (let [[ret user-ret] res]
                     (->> user-ret
                          (merge-fn (get-cell state))
                          (set-cell! state))
                     ret)
                   (last args))))
             structure)
     (get-cell state)]))


(defn- multi-transform-error-fn [& nav]
  (throw-illegal
    "All navigation in multi-transform must end in 'terminal' "
    "navigators. Instead navigated to: " nav))

(defn compiled-multi-transform* [path structure]
  (compiled-transform* path multi-transform-error-fn structure))

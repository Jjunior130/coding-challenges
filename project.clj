(defproject coding-challenges "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [re-frame "0.9.1"]
                 [re-frisk "0.3.2"]
                 [org.clojure/core.async "0.2.391"]
                 [re-com "0.8.3"]
                 [secretary "1.2.3"]
                 [com.taoensso/sente "1.11.0"]
                 [com.rpl/specter "0.13.1"]
                 [quil "2.5.0"]
                 [compojure "1.4.0"]
                 [http-kit "2.1.19"]
                 [ring-cors "0.1.7"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-devel "1.4.0"]
                 [jetty/javax.servlet "5.1.12"]
                 [danlentz/clj-uuid "0.1.6"]]


  :plugins [[lein-cljsbuild "1.1.5"]]

  :hooks [leiningen.cljsbuild]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.8.2"]]

    :plugins      [[lein-figwheel "0.5.7"]]}}


  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "coding-challenges.core/mount-root"}
     :compiler     {:main                 coding-challenges.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}}}


    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            coding-challenges.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]})






// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('coding_challenges.starfield.star');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.starfield.views.w = (600);
coding_challenges.starfield.views.h = (600);
coding_challenges.starfield.views.setup = (function coding_challenges$starfield$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stars","stars",-556837771),cljs.core.repeatedly.call(null,(800),coding_challenges.starfield.star.make)], null);
});
coding_challenges.starfield.views.get_speed_from_mouse = (function coding_challenges$starfield$views$get_speed_from_mouse(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__32754__auto__ = coding_challenges.starfield.views.pathcache39231;
var info__32754__auto____$1 = (((info__32754__auto__ == null))?(function (){var info39232 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.views.pathcache39231 = info39232;

return info39232;
})():info__32754__auto__);
var precompiled39233 = info__32754__auto____$1.precompiled;
var dynamic_QMARK___32755__auto__ = info__32754__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___32755__auto__)){
return precompiled39233.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled39233;
}
})(),(quil.core.mouse_x.call(null) / (12)),sketch);
});
coding_challenges.starfield.views.update_stars = (function coding_challenges$starfield$views$update_stars(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__32754__auto__ = coding_challenges.starfield.views.pathcache39237;
var info__32754__auto____$1 = (((info__32754__auto__ == null))?(function (){var info39238 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"speed","speed",1257663751))),new cljs.core.Keyword(null,"stars","stars",-556837771),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.starfield.views.pathcache39237 = info39238;

return info39238;
})():info__32754__auto__);
var precompiled39239 = info__32754__auto____$1.precompiled;
var dynamic_QMARK___32755__auto__ = info__32754__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___32755__auto__)){
return precompiled39239.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.ALL], null));
} else {
return precompiled39239;
}
})(),coding_challenges.starfield.star.update_STAR_,sketch);
});
coding_challenges.starfield.views.update_STAR_ = (function coding_challenges$starfield$views$update_STAR_(sketch){
return coding_challenges.starfield.views.update_stars.call(null,coding_challenges.starfield.views.get_speed_from_mouse.call(null,sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(sketch){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__39244 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__39245 = null;
var count__39246 = (0);
var i__39247 = (0);
while(true){
if((i__39247 < count__39246)){
var star = cljs.core._nth.call(null,chunk__39245,i__39247);
coding_challenges.starfield.star.draw.call(null,star);

var G__39248 = seq__39244;
var G__39249 = chunk__39245;
var G__39250 = count__39246;
var G__39251 = (i__39247 + (1));
seq__39244 = G__39248;
chunk__39245 = G__39249;
count__39246 = G__39250;
i__39247 = G__39251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39244);
if(temp__4657__auto__){
var seq__39244__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39244__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__39244__$1);
var G__39252 = cljs.core.chunk_rest.call(null,seq__39244__$1);
var G__39253 = c__25857__auto__;
var G__39254 = cljs.core.count.call(null,c__25857__auto__);
var G__39255 = (0);
seq__39244 = G__39252;
chunk__39245 = G__39253;
count__39246 = G__39254;
i__39247 = G__39255;
continue;
} else {
var star = cljs.core.first.call(null,seq__39244__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__39256 = cljs.core.next.call(null,seq__39244__$1);
var G__39257 = null;
var G__39258 = (0);
var G__39259 = (0);
seq__39244 = G__39256;
chunk__39245 = G__39257;
count__39246 = G__39258;
i__39247 = G__39259;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.starfield.views.starfield_sketch = (function coding_challenges$starfield$views$starfield_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"starfield",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.update_STAR_))?(function() { 
var G__39260__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__39260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39261__i = 0, G__39261__a = new Array(arguments.length -  0);
while (G__39261__i < G__39261__a.length) {G__39261__a[G__39261__i] = arguments[G__39261__i + 0]; ++G__39261__i;}
  args = new cljs.core.IndexedSeq(G__39261__a,0);
} 
return G__39260__delegate.call(this,args);};
G__39260.cljs$lang$maxFixedArity = 0;
G__39260.cljs$lang$applyTo = (function (arglist__39262){
var args = cljs.core.seq(arglist__39262);
return G__39260__delegate(args);
});
G__39260.cljs$core$IFn$_invoke$arity$variadic = G__39260__delegate;
return G__39260;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__39263__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__39263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39264__i = 0, G__39264__a = new Array(arguments.length -  0);
while (G__39264__i < G__39264__a.length) {G__39264__a[G__39264__i] = arguments[G__39264__i + 0]; ++G__39264__i;}
  args = new cljs.core.IndexedSeq(G__39264__a,0);
} 
return G__39263__delegate.call(this,args);};
G__39263.cljs$lang$maxFixedArity = 0;
G__39263.cljs$lang$applyTo = (function (arglist__39265){
var args = cljs.core.seq(arglist__39265);
return G__39263__delegate(args);
});
G__39263.cljs$core$IFn$_invoke$arity$variadic = G__39263__delegate;
return G__39263;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__39266__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__39266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39267__i = 0, G__39267__a = new Array(arguments.length -  0);
while (G__39267__i < G__39267__a.length) {G__39267__a[G__39267__i] = arguments[G__39267__i + 0]; ++G__39267__i;}
  args = new cljs.core.IndexedSeq(G__39267__a,0);
} 
return G__39266__delegate.call(this,args);};
G__39266.cljs$lang$maxFixedArity = 0;
G__39266.cljs$lang$applyTo = (function (arglist__39268){
var args = cljs.core.seq(arglist__39268);
return G__39266__delegate(args);
});
G__39266.cljs$core$IFn$_invoke$arity$variadic = G__39266__delegate;
return G__39266;
})()
:coding_challenges.starfield.views.draw));
});
goog.exportSymbol('coding_challenges.starfield.views.starfield_sketch', coding_challenges.starfield.views.starfield_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33343__33344__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33343__33344__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.starfield.views.starfield_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"starfield"], null));
}
coding_challenges.starfield.views.view = (function coding_challenges$starfield$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starfield","starfield",1173311741),new cljs.core.Keyword(null,"tab","tab",-559583621)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Starfield",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#starfield","canvas#starfield",140287124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.starfield.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.starfield.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"label","label",1718410804),"Star"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__39269_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starfield","starfield",1173311741),new cljs.core.Keyword(null,"tab","tab",-559583621)], null),p1__39269_SHARP_], null)], null));
});})(code__$1,code))
], null),(function (){var G__39271 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__39271) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n  {:stars (repeatedly 800 star/make)})\n\n(defn get-speed-from-mouse [sketch]\n (->> sketch\n      (setval\n       :speed (/ (q/mouse-x) 12))))\n\n(defn update-stars [sketch]\n (->> sketch\n      (transform\n       [(collect-one :speed) :stars ALL]\n       star/update*)))\n\n(defn update* [sketch]\n (->> sketch\n      get-speed-from-mouse\n      update-stars))\n\n(defn draw [sketch]\n (q/background 0)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (doseq [star (:stars sketch)]\n  (star/draw star)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/17WoOqgXsRM\n\nvar stars = []\n\nvar speed;\n\nfunction setup() {\n  createCanvas(600, 600);\n  for (var i = 0; i < 800; i++) {\n    stars[i] = new Star();\n  }\n}\n\nfunction draw() {\n  speed = map(mouseX, 0, width, 0, 50);\n  background(0);\n  translate(width / 2, height / 2);\n  for (var i = 0; i < stars.length; i++) {\n    stars[i].update();\n    stars[i].show();\n  }\n}\n"], null)], null)], null)], null);

break;
case "star":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj","code.clj",266818419),"(defn make []\n {:type 'Star\n  :x (q/random (- (q/width)) (q/width))\n  :y (q/random (- (q/height)) (q/height))\n  :z (q/random (q/width))})\n\n(defn move-forward [speed star]\n (->> star\n      (transform [(collect-one :z) :pz] identity)\n      (transform :z #(- % speed))))\n\n(defn reset? [{z :z\n               :as star}]\n (cond->\n  star\n  (< z 1)\n  (->> (setval :z (q/width))\n       (setval :x (q/random (- (q/width))\n                            (q/width)))\n       (setval :y (q/random (- (q/height))\n                            (q/height)))\n       (transform [(collect-one :z) :pz]\n                  identity))))\n\n(defn update* [speed star]\n (->> star\n      (move-forward speed)\n      reset?))\n\n(defn draw [{x :x\n             y :y\n             z :z\n             pz :pz\n             :as star}]\n (q/fill 255)\n (q/no-stroke)\n (let [sx (q/map-range (/ x z) 0 1 0 (q/width))\n       sy (q/map-range (/ y  z) 0 1 0 (q/height))\n       r (q/map-range z 0 (q/width) 16 0)\n       px (q/map-range (/ x  pz) 0 1 0 (q/width))\n       py (q/map-range (/ y  pz) 0 1 0 (q/height))]\n  (q/ellipse sx sy r r)\n  (q/stroke 255)\n  (q/line px py sx sy)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// Code for: https://youtu.be/17WoOqgXsRM\n\nfunction Star() {\n  this.x = random(-width, width);\n  this.y = random(-height, height);\n  this.z = random(width);\n  this.pz = this.z;\n\n  this.update = function() {\n    this.z = this.z - speed;\n    if (this.z < 1) {\n      this.z = width;\n      this.x = random(-width, width);\n      this.y = random(-height, height);\n      this.pz = this.z;\n    }\n  }\n\n  this.show = function() {\n    fill(255);\n    noStroke();\n\n    var sx = map(this.x / this.z, 0, 1, 0, width);\n    var sy = map(this.y / this.z, 0, 1, 0, height);\n\n    var r = map(this.z, 0, width, 16, 0);\n    ellipse(sx, sy, r, r);\n\n    var px = map(this.x / this.pz, 0, 1, 0, width);\n    var py = map(this.y / this.pz, 0, 1, 0, height);\n\n    this.pz = this.z;\n\n    stroke(255);\n    line(px, py, sx, sy);\n\n  }\n}"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.starfield.views.starfield_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484446905034
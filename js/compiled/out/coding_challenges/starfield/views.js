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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.views.pathcache34997;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34998 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.views.pathcache34997 = info34998;

return info34998;
})():info__12233__auto__);
var precompiled34999 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34999.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34999;
}
})(),(quil.core.mouse_x.call(null) / (12)),sketch);
});
coding_challenges.starfield.views.update_stars = (function coding_challenges$starfield$views$update_stars(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.views.pathcache35003;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35004 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"speed","speed",1257663751))),new cljs.core.Keyword(null,"stars","stars",-556837771),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.starfield.views.pathcache35003 = info35004;

return info35004;
})():info__12233__auto__);
var precompiled35005 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35005.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.ALL], null));
} else {
return precompiled35005;
}
})(),coding_challenges.starfield.star.update_STAR_,sketch);
});
coding_challenges.starfield.views.update_STAR_ = (function coding_challenges$starfield$views$update_STAR_(sketch){
return coding_challenges.starfield.views.update_stars.call(null,coding_challenges.starfield.views.get_speed_from_mouse.call(null,sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(sketch){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__35010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__35011 = null;
var count__35012 = (0);
var i__35013 = (0);
while(true){
if((i__35013 < count__35012)){
var star = cljs.core._nth.call(null,chunk__35011,i__35013);
coding_challenges.starfield.star.draw.call(null,star);

var G__35014 = seq__35010;
var G__35015 = chunk__35011;
var G__35016 = count__35012;
var G__35017 = (i__35013 + (1));
seq__35010 = G__35014;
chunk__35011 = G__35015;
count__35012 = G__35016;
i__35013 = G__35017;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35010);
if(temp__4657__auto__){
var seq__35010__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35010__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35010__$1);
var G__35018 = cljs.core.chunk_rest.call(null,seq__35010__$1);
var G__35019 = c__7220__auto__;
var G__35020 = cljs.core.count.call(null,c__7220__auto__);
var G__35021 = (0);
seq__35010 = G__35018;
chunk__35011 = G__35019;
count__35012 = G__35020;
i__35013 = G__35021;
continue;
} else {
var star = cljs.core.first.call(null,seq__35010__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__35022 = cljs.core.next.call(null,seq__35010__$1);
var G__35023 = null;
var G__35024 = (0);
var G__35025 = (0);
seq__35010 = G__35022;
chunk__35011 = G__35023;
count__35012 = G__35024;
i__35013 = G__35025;
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
var G__35026__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__35026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35027__i = 0, G__35027__a = new Array(arguments.length -  0);
while (G__35027__i < G__35027__a.length) {G__35027__a[G__35027__i] = arguments[G__35027__i + 0]; ++G__35027__i;}
  args = new cljs.core.IndexedSeq(G__35027__a,0);
} 
return G__35026__delegate.call(this,args);};
G__35026.cljs$lang$maxFixedArity = 0;
G__35026.cljs$lang$applyTo = (function (arglist__35028){
var args = cljs.core.seq(arglist__35028);
return G__35026__delegate(args);
});
G__35026.cljs$core$IFn$_invoke$arity$variadic = G__35026__delegate;
return G__35026;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__35029__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__35029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35030__i = 0, G__35030__a = new Array(arguments.length -  0);
while (G__35030__i < G__35030__a.length) {G__35030__a[G__35030__i] = arguments[G__35030__i + 0]; ++G__35030__i;}
  args = new cljs.core.IndexedSeq(G__35030__a,0);
} 
return G__35029__delegate.call(this,args);};
G__35029.cljs$lang$maxFixedArity = 0;
G__35029.cljs$lang$applyTo = (function (arglist__35031){
var args = cljs.core.seq(arglist__35031);
return G__35029__delegate(args);
});
G__35029.cljs$core$IFn$_invoke$arity$variadic = G__35029__delegate;
return G__35029;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__35032__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__35032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35033__i = 0, G__35033__a = new Array(arguments.length -  0);
while (G__35033__i < G__35033__a.length) {G__35033__a[G__35033__i] = arguments[G__35033__i + 0]; ++G__35033__i;}
  args = new cljs.core.IndexedSeq(G__35033__a,0);
} 
return G__35032__delegate.call(this,args);};
G__35032.cljs$lang$maxFixedArity = 0;
G__35032.cljs$lang$applyTo = (function (arglist__35034){
var args = cljs.core.seq(arglist__35034);
return G__35032__delegate(args);
});
G__35032.cljs$core$IFn$_invoke$arity$variadic = G__35032__delegate;
return G__35032;
})()
:coding_challenges.starfield.views.draw));
});
goog.exportSymbol('coding_challenges.starfield.views.starfield_sketch', coding_challenges.starfield.views.starfield_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.starfield.views.starfield_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"starfield"], null));
}
coding_challenges.starfield.views.view = (function coding_challenges$starfield$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code_nav = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starfield","starfield",1173311741),new cljs.core.Keyword(null,"code","code",1586293142)], null);
var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),code_nav], null));
return ((function (code_nav,code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Starfield",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#starfield","canvas#starfield",140287124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.starfield.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.starfield.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"label","label",1718410804),"Star"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code_nav,code){
return (function (p1__35035_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code_nav,p1__35035_SHARP_], null)], null));

var seq__35041 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35042 = null;
var count__35043 = (0);
var i__35044 = (0);
while(true){
if((i__35044 < count__35043)){
var x = cljs.core._nth.call(null,chunk__35042,i__35044);
hljs.highlightBlock(x);

var G__35046 = seq__35041;
var G__35047 = chunk__35042;
var G__35048 = count__35043;
var G__35049 = (i__35044 + (1));
seq__35041 = G__35046;
chunk__35042 = G__35047;
count__35043 = G__35048;
i__35044 = G__35049;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35041);
if(temp__4657__auto__){
var seq__35041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35041__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35041__$1);
var G__35050 = cljs.core.chunk_rest.call(null,seq__35041__$1);
var G__35051 = c__7220__auto__;
var G__35052 = cljs.core.count.call(null,c__7220__auto__);
var G__35053 = (0);
seq__35041 = G__35050;
chunk__35042 = G__35051;
count__35043 = G__35052;
i__35044 = G__35053;
continue;
} else {
var x = cljs.core.first.call(null,seq__35041__$1);
hljs.highlightBlock(x);

var G__35054 = cljs.core.next.call(null,seq__35041__$1);
var G__35055 = null;
var G__35056 = (0);
var G__35057 = (0);
seq__35041 = G__35054;
chunk__35042 = G__35055;
count__35043 = G__35056;
i__35044 = G__35057;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code_nav,code))
], null),(function (){var G__35045 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35045) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure.hljs","code.clojure.hljs",2060278911),"(def w 600)\n(def h 600)\n\n(defn setup []\n  {:stars (repeatedly 800 star/make)})\n\n(defn get-speed-from-mouse [sketch]\n (->> sketch\n      (setval\n       :speed (/ (q/mouse-x) 12))))\n\n(defn update-stars [sketch]\n (->> sketch\n      (transform\n       [(collect-one :speed) :stars ALL]\n       star/update*)))\n\n(defn update* [sketch]\n (->> sketch\n      get-speed-from-mouse\n      update-stars))\n\n(defn draw [sketch]\n (q/background 0)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (doseq [star (:stars sketch)]\n  (star/draw star)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript.hljs","code.javascript.hljs",-1479294525),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/17WoOqgXsRM\n\nvar stars = []\n\nvar speed;\n\nfunction setup() {\n  createCanvas(600, 600);\n  for (var i = 0; i < 800; i++) {\n    stars[i] = new Star();\n  }\n}\n\nfunction draw() {\n  speed = map(mouseX, 0, width, 0, 50);\n  background(0);\n  translate(width / 2, height / 2);\n  for (var i = 0; i < stars.length; i++) {\n    stars[i].update();\n    stars[i].show();\n  }\n}\n"], null)], null)], null)], null);

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
;})(code_nav,code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.starfield.views.starfield_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484780663223
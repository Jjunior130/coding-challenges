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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.starfield.views.pathcache40733;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40734 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.views.pathcache40733 = info40734;

return info40734;
})():info__34163__auto__);
var precompiled40735 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40735.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled40735;
}
})(),(quil.core.mouse_x.call(null) / (12)),sketch);
});
coding_challenges.starfield.views.update_stars = (function coding_challenges$starfield$views$update_stars(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.starfield.views.pathcache40739;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40740 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"speed","speed",1257663751))),new cljs.core.Keyword(null,"stars","stars",-556837771),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.starfield.views.pathcache40739 = info40740;

return info40740;
})():info__34163__auto__);
var precompiled40741 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40741.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.ALL], null));
} else {
return precompiled40741;
}
})(),coding_challenges.starfield.star.update_STAR_,sketch);
});
coding_challenges.starfield.views.update_STAR_ = (function coding_challenges$starfield$views$update_STAR_(sketch){
return coding_challenges.starfield.views.update_stars.call(null,coding_challenges.starfield.views.get_speed_from_mouse.call(null,sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(sketch){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__40746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__40747 = null;
var count__40748 = (0);
var i__40749 = (0);
while(true){
if((i__40749 < count__40748)){
var star = cljs.core._nth.call(null,chunk__40747,i__40749);
coding_challenges.starfield.star.draw.call(null,star);

var G__40750 = seq__40746;
var G__40751 = chunk__40747;
var G__40752 = count__40748;
var G__40753 = (i__40749 + (1));
seq__40746 = G__40750;
chunk__40747 = G__40751;
count__40748 = G__40752;
i__40749 = G__40753;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40746);
if(temp__4657__auto__){
var seq__40746__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40746__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__40746__$1);
var G__40754 = cljs.core.chunk_rest.call(null,seq__40746__$1);
var G__40755 = c__25857__auto__;
var G__40756 = cljs.core.count.call(null,c__25857__auto__);
var G__40757 = (0);
seq__40746 = G__40754;
chunk__40747 = G__40755;
count__40748 = G__40756;
i__40749 = G__40757;
continue;
} else {
var star = cljs.core.first.call(null,seq__40746__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__40758 = cljs.core.next.call(null,seq__40746__$1);
var G__40759 = null;
var G__40760 = (0);
var G__40761 = (0);
seq__40746 = G__40758;
chunk__40747 = G__40759;
count__40748 = G__40760;
i__40749 = G__40761;
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
var G__40762__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__40762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40763__i = 0, G__40763__a = new Array(arguments.length -  0);
while (G__40763__i < G__40763__a.length) {G__40763__a[G__40763__i] = arguments[G__40763__i + 0]; ++G__40763__i;}
  args = new cljs.core.IndexedSeq(G__40763__a,0);
} 
return G__40762__delegate.call(this,args);};
G__40762.cljs$lang$maxFixedArity = 0;
G__40762.cljs$lang$applyTo = (function (arglist__40764){
var args = cljs.core.seq(arglist__40764);
return G__40762__delegate(args);
});
G__40762.cljs$core$IFn$_invoke$arity$variadic = G__40762__delegate;
return G__40762;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__40765__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__40765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40766__i = 0, G__40766__a = new Array(arguments.length -  0);
while (G__40766__i < G__40766__a.length) {G__40766__a[G__40766__i] = arguments[G__40766__i + 0]; ++G__40766__i;}
  args = new cljs.core.IndexedSeq(G__40766__a,0);
} 
return G__40765__delegate.call(this,args);};
G__40765.cljs$lang$maxFixedArity = 0;
G__40765.cljs$lang$applyTo = (function (arglist__40767){
var args = cljs.core.seq(arglist__40767);
return G__40765__delegate(args);
});
G__40765.cljs$core$IFn$_invoke$arity$variadic = G__40765__delegate;
return G__40765;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__40768__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__40768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40769__i = 0, G__40769__a = new Array(arguments.length -  0);
while (G__40769__i < G__40769__a.length) {G__40769__a[G__40769__i] = arguments[G__40769__i + 0]; ++G__40769__i;}
  args = new cljs.core.IndexedSeq(G__40769__a,0);
} 
return G__40768__delegate.call(this,args);};
G__40768.cljs$lang$maxFixedArity = 0;
G__40768.cljs$lang$applyTo = (function (arglist__40770){
var args = cljs.core.seq(arglist__40770);
return G__40768__delegate(args);
});
G__40768.cljs$core$IFn$_invoke$arity$variadic = G__40768__delegate;
return G__40768;
})()
:coding_challenges.starfield.views.draw));
});
goog.exportSymbol('coding_challenges.starfield.views.starfield_sketch', coding_challenges.starfield.views.starfield_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__34782__34783__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__34782__34783__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.starfield.views.starfield_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"starfield"], null));
}
coding_challenges.starfield.views.view = (function coding_challenges$starfield$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code_nav = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starfield","starfield",1173311741),new cljs.core.Keyword(null,"code","code",1586293142)], null);
var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),code_nav], null));
return ((function (code_nav,code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Starfield",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#starfield","canvas#starfield",140287124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.starfield.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.starfield.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"label","label",1718410804),"Star"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code_nav,code){
return (function (p1__40771_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code_nav,p1__40771_SHARP_], null)], null));

var seq__40777 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__40778 = null;
var count__40779 = (0);
var i__40780 = (0);
while(true){
if((i__40780 < count__40779)){
var x = cljs.core._nth.call(null,chunk__40778,i__40780);
hljs.highlightBlock(x);

var G__40782 = seq__40777;
var G__40783 = chunk__40778;
var G__40784 = count__40779;
var G__40785 = (i__40780 + (1));
seq__40777 = G__40782;
chunk__40778 = G__40783;
count__40779 = G__40784;
i__40780 = G__40785;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40777);
if(temp__4657__auto__){
var seq__40777__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40777__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__40777__$1);
var G__40786 = cljs.core.chunk_rest.call(null,seq__40777__$1);
var G__40787 = c__25857__auto__;
var G__40788 = cljs.core.count.call(null,c__25857__auto__);
var G__40789 = (0);
seq__40777 = G__40786;
chunk__40778 = G__40787;
count__40779 = G__40788;
i__40780 = G__40789;
continue;
} else {
var x = cljs.core.first.call(null,seq__40777__$1);
hljs.highlightBlock(x);

var G__40790 = cljs.core.next.call(null,seq__40777__$1);
var G__40791 = null;
var G__40792 = (0);
var G__40793 = (0);
seq__40777 = G__40790;
chunk__40778 = G__40791;
count__40779 = G__40792;
i__40780 = G__40793;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code_nav,code))
], null),(function (){var G__40781 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__40781) {
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

//# sourceMappingURL=views.js.map?rel=1484466211446
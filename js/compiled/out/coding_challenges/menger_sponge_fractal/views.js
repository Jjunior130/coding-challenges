// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
goog.require('coding_challenges.menger_sponge_fractal.box');
coding_challenges.menger_sponge_fractal.views.w = (400);
coding_challenges.menger_sponge_fractal.views.h = (400);
coding_challenges.menger_sponge_fractal.views.setup = (function coding_challenges$menger_sponge_fractal$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.box.make.call(null,(0),(0),(0),(200))], null)], null);
});
coding_challenges.menger_sponge_fractal.views.rotate = (function coding_challenges$menger_sponge_fractal$views$rotate(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache33218;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33219 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache33218 = info33219;

return info33219;
})():info__11521__auto__);
var precompiled33220 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33220.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled33220;
}
})(),cljs.core.partial.call(null,cljs.core._PLUS_,0.01),sketch);
});
coding_challenges.menger_sponge_fractal.views.update_STAR_ = (function coding_challenges$menger_sponge_fractal$views$update_STAR_(sketch){
return coding_challenges.menger_sponge_fractal.views.rotate.call(null,sketch);
});
coding_challenges.menger_sponge_fractal.views.draw = (function coding_challenges$menger_sponge_fractal$views$draw(sketch){
quil.core.background.call(null,(51));

quil.core.lights.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

quil.core.rotate_x.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch));

quil.core.rotate_y.call(null,(0.4 * new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch)));

quil.core.rotate_z.call(null,(0.1 * new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch)));

var seq__33225 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sponge","sponge",-1746197022).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__33226 = null;
var count__33227 = (0);
var i__33228 = (0);
while(true){
if((i__33228 < count__33227)){
var b = cljs.core._nth.call(null,chunk__33226,i__33228);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__33229 = seq__33225;
var G__33230 = chunk__33226;
var G__33231 = count__33227;
var G__33232 = (i__33228 + (1));
seq__33225 = G__33229;
chunk__33226 = G__33230;
count__33227 = G__33231;
i__33228 = G__33232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33225);
if(temp__4657__auto__){
var seq__33225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33225__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__33225__$1);
var G__33233 = cljs.core.chunk_rest.call(null,seq__33225__$1);
var G__33234 = c__7220__auto__;
var G__33235 = cljs.core.count.call(null,c__7220__auto__);
var G__33236 = (0);
seq__33225 = G__33233;
chunk__33226 = G__33234;
count__33227 = G__33235;
i__33228 = G__33236;
continue;
} else {
var b = cljs.core.first.call(null,seq__33225__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__33237 = cljs.core.next.call(null,seq__33225__$1);
var G__33238 = null;
var G__33239 = (0);
var G__33240 = (0);
seq__33225 = G__33237;
chunk__33226 = G__33238;
count__33227 = G__33239;
i__33228 = G__33240;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.menger_sponge_fractal.views.mouse_clicked = (function coding_challenges$menger_sponge_fractal$views$mouse_clicked(sketch,event){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache33244;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33245 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache33244 = info33245;

return info33245;
})():info__11521__auto__);
var precompiled33246 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33246.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled33246;
}
})(),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate),sketch);
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__33247__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__33247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33248__i = 0, G__33248__a = new Array(arguments.length -  0);
while (G__33248__i < G__33248__a.length) {G__33248__a[G__33248__i] = arguments[G__33248__i + 0]; ++G__33248__i;}
  args = new cljs.core.IndexedSeq(G__33248__a,0);
} 
return G__33247__delegate.call(this,args);};
G__33247.cljs$lang$maxFixedArity = 0;
G__33247.cljs$lang$applyTo = (function (arglist__33249){
var args = cljs.core.seq(arglist__33249);
return G__33247__delegate(args);
});
G__33247.cljs$core$IFn$_invoke$arity$variadic = G__33247__delegate;
return G__33247;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__33250__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__33250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33251__i = 0, G__33251__a = new Array(arguments.length -  0);
while (G__33251__i < G__33251__a.length) {G__33251__a[G__33251__i] = arguments[G__33251__i + 0]; ++G__33251__i;}
  args = new cljs.core.IndexedSeq(G__33251__a,0);
} 
return G__33250__delegate.call(this,args);};
G__33250.cljs$lang$maxFixedArity = 0;
G__33250.cljs$lang$applyTo = (function (arglist__33252){
var args = cljs.core.seq(arglist__33252);
return G__33250__delegate(args);
});
G__33250.cljs$core$IFn$_invoke$arity$variadic = G__33250__delegate;
return G__33250;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__33253__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__33253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33254__i = 0, G__33254__a = new Array(arguments.length -  0);
while (G__33254__i < G__33254__a.length) {G__33254__a[G__33254__i] = arguments[G__33254__i + 0]; ++G__33254__i;}
  args = new cljs.core.IndexedSeq(G__33254__a,0);
} 
return G__33253__delegate.call(this,args);};
G__33253.cljs$lang$maxFixedArity = 0;
G__33253.cljs$lang$applyTo = (function (arglist__33255){
var args = cljs.core.seq(arglist__33255);
return G__33253__delegate(args);
});
G__33253.cljs$core$IFn$_invoke$arity$variadic = G__33253__delegate;
return G__33253;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__33256__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__33256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33257__i = 0, G__33257__a = new Array(arguments.length -  0);
while (G__33257__i < G__33257__a.length) {G__33257__a[G__33257__i] = arguments[G__33257__i + 0]; ++G__33257__i;}
  args = new cljs.core.IndexedSeq(G__33257__a,0);
} 
return G__33256__delegate.call(this,args);};
G__33256.cljs$lang$maxFixedArity = 0;
G__33256.cljs$lang$applyTo = (function (arglist__33258){
var args = cljs.core.seq(arglist__33258);
return G__33256__delegate(args);
});
G__33256.cljs$core$IFn$_invoke$arity$variadic = G__33256__delegate;
return G__33256;
})()
:coding_challenges.menger_sponge_fractal.views.draw));
});
goog.exportSymbol('coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch', coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12874__12875__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__12874__12875__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"menger-sponge-fractal"], null));
}
coding_challenges.menger_sponge_fractal.views.view = (function coding_challenges$menger_sponge_fractal$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menger-sponge-fractal","menger-sponge-fractal",1603819267),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Menger sponge fractal demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#menger-sponge-fractal","canvas#menger-sponge-fractal",-1655139916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.menger_sponge_fractal.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.menger_sponge_fractal.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"label","label",1718410804),"Box"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__33259_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menger-sponge-fractal","menger-sponge-fractal",1603819267),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__33259_SHARP_], null)], null));

var seq__33265 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__33266 = null;
var count__33267 = (0);
var i__33268 = (0);
while(true){
if((i__33268 < count__33267)){
var x = cljs.core._nth.call(null,chunk__33266,i__33268);
hljs.highlightBlock(x);

var G__33270 = seq__33265;
var G__33271 = chunk__33266;
var G__33272 = count__33267;
var G__33273 = (i__33268 + (1));
seq__33265 = G__33270;
chunk__33266 = G__33271;
count__33267 = G__33272;
i__33268 = G__33273;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33265);
if(temp__4657__auto__){
var seq__33265__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33265__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__33265__$1);
var G__33274 = cljs.core.chunk_rest.call(null,seq__33265__$1);
var G__33275 = c__7220__auto__;
var G__33276 = cljs.core.count.call(null,c__7220__auto__);
var G__33277 = (0);
seq__33265 = G__33274;
chunk__33266 = G__33275;
count__33267 = G__33276;
i__33268 = G__33277;
continue;
} else {
var x = cljs.core.first.call(null,seq__33265__$1);
hljs.highlightBlock(x);

var G__33278 = cljs.core.next.call(null,seq__33265__$1);
var G__33279 = null;
var G__33280 = (0);
var G__33281 = (0);
seq__33265 = G__33278;
chunk__33266 = G__33279;
count__33267 = G__33280;
i__33268 = G__33281;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__33269 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__33269) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 400)\n(def h 400)\n\n(defn setup []\n {:sponge [(box/make 0 0 0 200)]})\n\n(defn rotate [sketch]\n (->> sketch\n      (transform :angle (partial + 0.01))))\n\n(defn update* [sketch]\n (rotate sketch))\n\n(defn draw [sketch]\n (q/background 51)\n (q/lights)\n (q/translate (/ (q/width) 2) (/ (q/height) 2))\n (q/rotate-x (:angle sketch))\n (q/rotate-y (* 0.4 (:angle sketch)))\n (q/rotate-z (* 0.1 (:angle sketch)))\n (doseq [b (:sponge sketch)]\n  (box/draw b)))\n\n(defn mouse-clicked [sketch event]\n (->> sketch\n      (transform :sponge (partial mapcat box/generate))))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"\n// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for this video: https://youtu.be/LG8ZK-rRkXo\n\nfloat a = 0;\n\nArrayList<Box> sponge;\nvoid setup() {\n  size(400, 400, P3D);\n\n  // An array of Box objects\n  sponge = new ArrayList<Box>();\n\n  // Star with one\n  Box b = new Box(0, 0, 0, 200);\n  sponge.add(b);\n}\nvoid mousePressed() {\n  // Generate the next set of boxes\n  ArrayList<Box> next = new ArrayList<Box>();\n  for (Box b : sponge) {\n    ArrayList<Box> newBoxes = b.generate();\n    next.addAll(newBoxes);\n  }\n  sponge = next;\n}\n\nvoid draw() {\n  background(51);\n  stroke(255);\n  noFill();\n  lights();\n  translate(width/2, height/2);\n  rotateX(a);\n  rotateY(a*0.4);\n  rotateZ(a*0.1);\n  // Show what you've got!\n  for (Box b : sponge) {\n    b.show();\n  }\n  a += 0.01;\n}"], null)], null)], null)], null);

break;
case "box":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [x y z r]\n {:type 'Box\n  :pos {:x x :y y\n        :z z}\n  :r r})\n\n(defn generate [box]\n (for [x (range -1 2)\n       y (range -1 2)\n       z (range -1 2)\n       :let [sum (apply + (map Math/abs [x y z]))\n             new-r (/ (:r box) 3)]\n       :when (> sum 1)]\n  (make (+ (* x new-r) (-> box :pos :x))\n        (+ (* y new-r) (-> box :pos :y))\n        (+ (* z new-r) (-> box :pos :z))\n        new-r)))\n\n(defn draw [box]\n (q/push-matrix)\n (q/translate\n  (-> box :pos :x)\n  (-> box :pos :y)\n  (-> box :pos :z))\n (q/no-stroke)\n (q/box (:r box))\n (q/pop-matrix))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for this video: https://youtu.be/LG8ZK-rRkXo\n\nclass Box {\n  PVector pos;\n  float r;\n\n  Box(float x, float y, float z, float r_) {\n    pos = new PVector(x, y, z);\n    r = r_;\n  }\n\n  ArrayList<Box> generate() {\n    ArrayList<Box> boxes = new ArrayList<Box>();\n    for (int x = -1; x < 2; x++) {\n      for (int y = -1; y < 2; y++) {\n        for (int z = -1; z < 2; z++) {\n          int sum = abs(x) + abs(y) + abs(z);\n          float newR = r/3;\n          if (sum > 1) {\n            Box b = new Box(pos.x+x*newR, pos.y+ y*newR, pos.z+z*newR, newR);\n            boxes.add(b);\n          }\n        }\n      }\n    }\n    return boxes;\n  }\n\n  void show() {\n    pushMatrix();\n    translate(pos.x, pos.y, pos.z);\n    noStroke();\n    fill(255);\n    box(r);\n    popMatrix();\n  }\n}"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484702590873
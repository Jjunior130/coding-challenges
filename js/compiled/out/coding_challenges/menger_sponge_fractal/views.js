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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache49786;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info49787 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache49786 = info49787;

return info49787;
})():info__28666__auto__);
var precompiled49788 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled49788.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled49788;
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

var seq__49793 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sponge","sponge",-1746197022).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__49794 = null;
var count__49795 = (0);
var i__49796 = (0);
while(true){
if((i__49796 < count__49795)){
var b = cljs.core._nth.call(null,chunk__49794,i__49796);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__49797 = seq__49793;
var G__49798 = chunk__49794;
var G__49799 = count__49795;
var G__49800 = (i__49796 + (1));
seq__49793 = G__49797;
chunk__49794 = G__49798;
count__49795 = G__49799;
i__49796 = G__49800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49793);
if(temp__4657__auto__){
var seq__49793__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49793__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__49793__$1);
var G__49801 = cljs.core.chunk_rest.call(null,seq__49793__$1);
var G__49802 = c__25857__auto__;
var G__49803 = cljs.core.count.call(null,c__25857__auto__);
var G__49804 = (0);
seq__49793 = G__49801;
chunk__49794 = G__49802;
count__49795 = G__49803;
i__49796 = G__49804;
continue;
} else {
var b = cljs.core.first.call(null,seq__49793__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__49805 = cljs.core.next.call(null,seq__49793__$1);
var G__49806 = null;
var G__49807 = (0);
var G__49808 = (0);
seq__49793 = G__49805;
chunk__49794 = G__49806;
count__49795 = G__49807;
i__49796 = G__49808;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache49812;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info49813 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache49812 = info49813;

return info49813;
})():info__28666__auto__);
var precompiled49814 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled49814.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled49814;
}
})(),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate),sketch);
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__49815__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__49815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49816__i = 0, G__49816__a = new Array(arguments.length -  0);
while (G__49816__i < G__49816__a.length) {G__49816__a[G__49816__i] = arguments[G__49816__i + 0]; ++G__49816__i;}
  args = new cljs.core.IndexedSeq(G__49816__a,0);
} 
return G__49815__delegate.call(this,args);};
G__49815.cljs$lang$maxFixedArity = 0;
G__49815.cljs$lang$applyTo = (function (arglist__49817){
var args = cljs.core.seq(arglist__49817);
return G__49815__delegate(args);
});
G__49815.cljs$core$IFn$_invoke$arity$variadic = G__49815__delegate;
return G__49815;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__49818__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__49818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49819__i = 0, G__49819__a = new Array(arguments.length -  0);
while (G__49819__i < G__49819__a.length) {G__49819__a[G__49819__i] = arguments[G__49819__i + 0]; ++G__49819__i;}
  args = new cljs.core.IndexedSeq(G__49819__a,0);
} 
return G__49818__delegate.call(this,args);};
G__49818.cljs$lang$maxFixedArity = 0;
G__49818.cljs$lang$applyTo = (function (arglist__49820){
var args = cljs.core.seq(arglist__49820);
return G__49818__delegate(args);
});
G__49818.cljs$core$IFn$_invoke$arity$variadic = G__49818__delegate;
return G__49818;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__49821__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__49821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49822__i = 0, G__49822__a = new Array(arguments.length -  0);
while (G__49822__i < G__49822__a.length) {G__49822__a[G__49822__i] = arguments[G__49822__i + 0]; ++G__49822__i;}
  args = new cljs.core.IndexedSeq(G__49822__a,0);
} 
return G__49821__delegate.call(this,args);};
G__49821.cljs$lang$maxFixedArity = 0;
G__49821.cljs$lang$applyTo = (function (arglist__49823){
var args = cljs.core.seq(arglist__49823);
return G__49821__delegate(args);
});
G__49821.cljs$core$IFn$_invoke$arity$variadic = G__49821__delegate;
return G__49821;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__49824__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__49824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49825__i = 0, G__49825__a = new Array(arguments.length -  0);
while (G__49825__i < G__49825__a.length) {G__49825__a[G__49825__i] = arguments[G__49825__i + 0]; ++G__49825__i;}
  args = new cljs.core.IndexedSeq(G__49825__a,0);
} 
return G__49824__delegate.call(this,args);};
G__49824.cljs$lang$maxFixedArity = 0;
G__49824.cljs$lang$applyTo = (function (arglist__49826){
var args = cljs.core.seq(arglist__49826);
return G__49824__delegate(args);
});
G__49824.cljs$core$IFn$_invoke$arity$variadic = G__49824__delegate;
return G__49824;
})()
:coding_challenges.menger_sponge_fractal.views.draw));
});
goog.exportSymbol('coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch', coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29726__29727__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29726__29727__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"menger-sponge-fractal"], null));
}
coding_challenges.menger_sponge_fractal.views.view = (function coding_challenges$menger_sponge_fractal$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menger-sponge-fractal","menger-sponge-fractal",1603819267),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Menger sponge fractal demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#menger-sponge-fractal","canvas#menger-sponge-fractal",-1655139916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.menger_sponge_fractal.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.menger_sponge_fractal.views.h], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"label","label",1718410804),"Box"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__49827_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menger-sponge-fractal","menger-sponge-fractal",1603819267),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__49827_SHARP_], null)], null));
});})(code__$1,code))
], null),(function (){var G__49829 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__49829) {
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
})()], null)], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484371499803
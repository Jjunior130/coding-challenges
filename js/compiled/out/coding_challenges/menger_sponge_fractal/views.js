// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.views');
goog.require('cljs.core');
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
coding_challenges.menger_sponge_fractal.views.update_STAR_ = (function coding_challenges$menger_sponge_fractal$views$update_STAR_(sketch){
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.partial.call(null,cljs.core._PLUS_,0.01));
});
coding_challenges.menger_sponge_fractal.views.draw = (function coding_challenges$menger_sponge_fractal$views$draw(p__35524){
var map__35531 = p__35524;
var map__35531__$1 = ((((!((map__35531 == null)))?((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531):map__35531);
var sketch = map__35531__$1;
var angle = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var sponge = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"sponge","sponge",-1746197022));
quil.core.background.call(null,(51));

quil.core.lights.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

quil.core.rotate_x.call(null,angle);

quil.core.rotate_y.call(null,(0.4 * angle));

quil.core.rotate_z.call(null,(0.1 * angle));

var seq__35533 = cljs.core.seq.call(null,sponge);
var chunk__35534 = null;
var count__35535 = (0);
var i__35536 = (0);
while(true){
if((i__35536 < count__35535)){
var b = cljs.core._nth.call(null,chunk__35534,i__35536);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__35537 = seq__35533;
var G__35538 = chunk__35534;
var G__35539 = count__35535;
var G__35540 = (i__35536 + (1));
seq__35533 = G__35537;
chunk__35534 = G__35538;
count__35535 = G__35539;
i__35536 = G__35540;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35533);
if(temp__4657__auto__){
var seq__35533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35533__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35533__$1);
var G__35541 = cljs.core.chunk_rest.call(null,seq__35533__$1);
var G__35542 = c__7220__auto__;
var G__35543 = cljs.core.count.call(null,c__7220__auto__);
var G__35544 = (0);
seq__35533 = G__35541;
chunk__35534 = G__35542;
count__35535 = G__35543;
i__35536 = G__35544;
continue;
} else {
var b = cljs.core.first.call(null,seq__35533__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__35545 = cljs.core.next.call(null,seq__35533__$1);
var G__35546 = null;
var G__35547 = (0);
var G__35548 = (0);
seq__35533 = G__35545;
chunk__35534 = G__35546;
count__35535 = G__35547;
i__35536 = G__35548;
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
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"sponge","sponge",-1746197022),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate));
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__35549__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__35549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35550__i = 0, G__35550__a = new Array(arguments.length -  0);
while (G__35550__i < G__35550__a.length) {G__35550__a[G__35550__i] = arguments[G__35550__i + 0]; ++G__35550__i;}
  args = new cljs.core.IndexedSeq(G__35550__a,0);
} 
return G__35549__delegate.call(this,args);};
G__35549.cljs$lang$maxFixedArity = 0;
G__35549.cljs$lang$applyTo = (function (arglist__35551){
var args = cljs.core.seq(arglist__35551);
return G__35549__delegate(args);
});
G__35549.cljs$core$IFn$_invoke$arity$variadic = G__35549__delegate;
return G__35549;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__35552__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__35552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35553__i = 0, G__35553__a = new Array(arguments.length -  0);
while (G__35553__i < G__35553__a.length) {G__35553__a[G__35553__i] = arguments[G__35553__i + 0]; ++G__35553__i;}
  args = new cljs.core.IndexedSeq(G__35553__a,0);
} 
return G__35552__delegate.call(this,args);};
G__35552.cljs$lang$maxFixedArity = 0;
G__35552.cljs$lang$applyTo = (function (arglist__35554){
var args = cljs.core.seq(arglist__35554);
return G__35552__delegate(args);
});
G__35552.cljs$core$IFn$_invoke$arity$variadic = G__35552__delegate;
return G__35552;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__35555__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__35555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35556__i = 0, G__35556__a = new Array(arguments.length -  0);
while (G__35556__i < G__35556__a.length) {G__35556__a[G__35556__i] = arguments[G__35556__i + 0]; ++G__35556__i;}
  args = new cljs.core.IndexedSeq(G__35556__a,0);
} 
return G__35555__delegate.call(this,args);};
G__35555.cljs$lang$maxFixedArity = 0;
G__35555.cljs$lang$applyTo = (function (arglist__35557){
var args = cljs.core.seq(arglist__35557);
return G__35555__delegate(args);
});
G__35555.cljs$core$IFn$_invoke$arity$variadic = G__35555__delegate;
return G__35555;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__35558__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__35558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35559__i = 0, G__35559__a = new Array(arguments.length -  0);
while (G__35559__i < G__35559__a.length) {G__35559__a[G__35559__i] = arguments[G__35559__i + 0]; ++G__35559__i;}
  args = new cljs.core.IndexedSeq(G__35559__a,0);
} 
return G__35558__delegate.call(this,args);};
G__35558.cljs$lang$maxFixedArity = 0;
G__35558.cljs$lang$applyTo = (function (arglist__35560){
var args = cljs.core.seq(arglist__35560);
return G__35558__delegate(args);
});
G__35558.cljs$core$IFn$_invoke$arity$variadic = G__35558__delegate;
return G__35558;
})()
:coding_challenges.menger_sponge_fractal.views.draw));
});
goog.exportSymbol('coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch', coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
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
return (function (p1__35561_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menger-sponge-fractal","menger-sponge-fractal",1603819267),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35561_SHARP_], null)], null));

var seq__35567 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35568 = null;
var count__35569 = (0);
var i__35570 = (0);
while(true){
if((i__35570 < count__35569)){
var x = cljs.core._nth.call(null,chunk__35568,i__35570);
hljs.highlightBlock(x);

var G__35572 = seq__35567;
var G__35573 = chunk__35568;
var G__35574 = count__35569;
var G__35575 = (i__35570 + (1));
seq__35567 = G__35572;
chunk__35568 = G__35573;
count__35569 = G__35574;
i__35570 = G__35575;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35567);
if(temp__4657__auto__){
var seq__35567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35567__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35567__$1);
var G__35576 = cljs.core.chunk_rest.call(null,seq__35567__$1);
var G__35577 = c__7220__auto__;
var G__35578 = cljs.core.count.call(null,c__7220__auto__);
var G__35579 = (0);
seq__35567 = G__35576;
chunk__35568 = G__35577;
count__35569 = G__35578;
i__35570 = G__35579;
continue;
} else {
var x = cljs.core.first.call(null,seq__35567__$1);
hljs.highlightBlock(x);

var G__35580 = cljs.core.next.call(null,seq__35567__$1);
var G__35581 = null;
var G__35582 = (0);
var G__35583 = (0);
seq__35567 = G__35580;
chunk__35568 = G__35581;
count__35569 = G__35582;
i__35570 = G__35583;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35571 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35571) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 400)\n(def h 400)\n\n(defn setup []\n {:sponge [(box/make 0 0 0 200)]})\n\n(defn update* [sketch]\n (update sketch\n         :angle (partial + 0.01)))\n\n(defn draw [{angle :angle\n             sponge :sponge\n             :as sketch}]\n (q/background 51)\n (q/lights)\n (q/translate (/ (q/width) 2) (/ (q/height) 2))\n (q/rotate-x angle)\n (q/rotate-y (* 0.4 angle))\n (q/rotate-z (* 0.1 angle))\n (doseq [b sponge]\n  (box/draw b)))\n\n(defn mouse-clicked [sketch event]\n (update sketch\n         :sponge (partial mapcat box/generate)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"\n// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for this video: https://youtu.be/LG8ZK-rRkXo\n\nfloat a = 0;\n\nArrayList<Box> sponge;\nvoid setup() {\n  size(400, 400, P3D);\n\n  // An array of Box objects\n  sponge = new ArrayList<Box>();\n\n  // Star with one\n  Box b = new Box(0, 0, 0, 200);\n  sponge.add(b);\n}\nvoid mousePressed() {\n  // Generate the next set of boxes\n  ArrayList<Box> next = new ArrayList<Box>();\n  for (Box b : sponge) {\n    ArrayList<Box> newBoxes = b.generate();\n    next.addAll(newBoxes);\n  }\n  sponge = next;\n}\n\nvoid draw() {\n  background(51);\n  stroke(255);\n  noFill();\n  lights();\n  translate(width/2, height/2);\n  rotateX(a);\n  rotateY(a*0.4);\n  rotateZ(a*0.1);\n  // Show what you've got!\n  for (Box b : sponge) {\n    b.show();\n  }\n  a += 0.01;\n}"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1485242679789
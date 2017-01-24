// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.purple_rain.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('coding_challenges.purple_rain.drop');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.purple_rain.views.w = (640);
coding_challenges.purple_rain.views.h = (360);
coding_challenges.purple_rain.views.setup = (function coding_challenges$purple_rain$views$setup(){
var i = ((500) | (0));
var drops = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return drops;
} else {
var G__34990 = (i - (1));
var G__34991 = cljs.core.conj.call(null,drops,coding_challenges.purple_rain.drop.make.call(null));
i = G__34990;
drops = G__34991;
continue;
}
break;
}
});
coding_challenges.purple_rain.views.update_STAR_ = (function coding_challenges$purple_rain$views$update_STAR_(drops){
var i = cljs.core.count.call(null,drops);
var drops__$1 = drops;
var updated_drops = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return updated_drops;
} else {
var G__34992 = (i - (1));
var G__34993 = cljs.core.pop.call(null,drops__$1);
var G__34994 = cljs.core.conj.call(null,updated_drops,coding_challenges.purple_rain.drop.update_STAR_.call(null,cljs.core.peek.call(null,drops__$1)));
i = G__34992;
drops__$1 = G__34993;
updated_drops = G__34994;
continue;
}
break;
}
});
coding_challenges.purple_rain.views.draw = (function coding_challenges$purple_rain$views$draw(drops){
quil.core.background.call(null,(230),(230),(250));

var seq__34999 = cljs.core.seq.call(null,drops);
var chunk__35000 = null;
var count__35001 = (0);
var i__35002 = (0);
while(true){
if((i__35002 < count__35001)){
var d = cljs.core._nth.call(null,chunk__35000,i__35002);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__35003 = seq__34999;
var G__35004 = chunk__35000;
var G__35005 = count__35001;
var G__35006 = (i__35002 + (1));
seq__34999 = G__35003;
chunk__35000 = G__35004;
count__35001 = G__35005;
i__35002 = G__35006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34999);
if(temp__4657__auto__){
var seq__34999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34999__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34999__$1);
var G__35007 = cljs.core.chunk_rest.call(null,seq__34999__$1);
var G__35008 = c__7220__auto__;
var G__35009 = cljs.core.count.call(null,c__7220__auto__);
var G__35010 = (0);
seq__34999 = G__35007;
chunk__35000 = G__35008;
count__35001 = G__35009;
i__35002 = G__35010;
continue;
} else {
var d = cljs.core.first.call(null,seq__34999__$1);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__35011 = cljs.core.next.call(null,seq__34999__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34999 = G__35011;
chunk__35000 = G__35012;
count__35001 = G__35013;
i__35002 = G__35014;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.purple_rain.views.purple_rain_sketch = (function coding_challenges$purple_rain$views$purple_rain_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"purple-rain",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.update_STAR_))?(function() { 
var G__35015__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.update_STAR_,args);
};
var G__35015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35016__i = 0, G__35016__a = new Array(arguments.length -  0);
while (G__35016__i < G__35016__a.length) {G__35016__a[G__35016__i] = arguments[G__35016__i + 0]; ++G__35016__i;}
  args = new cljs.core.IndexedSeq(G__35016__a,0);
} 
return G__35015__delegate.call(this,args);};
G__35015.cljs$lang$maxFixedArity = 0;
G__35015.cljs$lang$applyTo = (function (arglist__35017){
var args = cljs.core.seq(arglist__35017);
return G__35015__delegate(args);
});
G__35015.cljs$core$IFn$_invoke$arity$variadic = G__35015__delegate;
return G__35015;
})()
:coding_challenges.purple_rain.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.purple_rain.views.w,coding_challenges.purple_rain.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.setup))?(function() { 
var G__35018__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.setup,args);
};
var G__35018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35019__i = 0, G__35019__a = new Array(arguments.length -  0);
while (G__35019__i < G__35019__a.length) {G__35019__a[G__35019__i] = arguments[G__35019__i + 0]; ++G__35019__i;}
  args = new cljs.core.IndexedSeq(G__35019__a,0);
} 
return G__35018__delegate.call(this,args);};
G__35018.cljs$lang$maxFixedArity = 0;
G__35018.cljs$lang$applyTo = (function (arglist__35020){
var args = cljs.core.seq(arglist__35020);
return G__35018__delegate(args);
});
G__35018.cljs$core$IFn$_invoke$arity$variadic = G__35018__delegate;
return G__35018;
})()
:coding_challenges.purple_rain.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.draw))?(function() { 
var G__35021__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.draw,args);
};
var G__35021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35022__i = 0, G__35022__a = new Array(arguments.length -  0);
while (G__35022__i < G__35022__a.length) {G__35022__a[G__35022__i] = arguments[G__35022__i + 0]; ++G__35022__i;}
  args = new cljs.core.IndexedSeq(G__35022__a,0);
} 
return G__35021__delegate.call(this,args);};
G__35021.cljs$lang$maxFixedArity = 0;
G__35021.cljs$lang$applyTo = (function (arglist__35023){
var args = cljs.core.seq(arglist__35023);
return G__35021__delegate(args);
});
G__35021.cljs$core$IFn$_invoke$arity$variadic = G__35021__delegate;
return G__35021;
})()
:coding_challenges.purple_rain.views.draw));
});
goog.exportSymbol('coding_challenges.purple_rain.views.purple_rain_sketch', coding_challenges.purple_rain.views.purple_rain_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.purple_rain.views.purple_rain_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"purple-rain"], null));
}
coding_challenges.purple_rain.views.view = (function coding_challenges$purple_rain$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple-rain","purple-rain",1933494285),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Purple rain demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#purple-rain","canvas#purple-rain",-1404009718),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.purple_rain.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.purple_rain.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"label","label",1718410804),"Drop"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__35024_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple-rain","purple-rain",1933494285),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35024_SHARP_], null)], null));

var seq__35030 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35031 = null;
var count__35032 = (0);
var i__35033 = (0);
while(true){
if((i__35033 < count__35032)){
var x = cljs.core._nth.call(null,chunk__35031,i__35033);
hljs.highlightBlock(x);

var G__35035 = seq__35030;
var G__35036 = chunk__35031;
var G__35037 = count__35032;
var G__35038 = (i__35033 + (1));
seq__35030 = G__35035;
chunk__35031 = G__35036;
count__35032 = G__35037;
i__35033 = G__35038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35030);
if(temp__4657__auto__){
var seq__35030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35030__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35030__$1);
var G__35039 = cljs.core.chunk_rest.call(null,seq__35030__$1);
var G__35040 = c__7220__auto__;
var G__35041 = cljs.core.count.call(null,c__7220__auto__);
var G__35042 = (0);
seq__35030 = G__35039;
chunk__35031 = G__35040;
count__35032 = G__35041;
i__35033 = G__35042;
continue;
} else {
var x = cljs.core.first.call(null,seq__35030__$1);
hljs.highlightBlock(x);

var G__35043 = cljs.core.next.call(null,seq__35030__$1);
var G__35044 = null;
var G__35045 = (0);
var G__35046 = (0);
seq__35030 = G__35043;
chunk__35031 = G__35044;
count__35032 = G__35045;
i__35033 = G__35046;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35034 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35034) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 640)\n(def h 360)\n\n(defn setup []\n (loop [i (int 500)\n        drops []]\n  (if (zero? i)\n   drops\n   (recur (dec i) (conj drops (d/make))))))\n\n(defn update* [drops]\n (loop [i (count drops)\n        drops drops\n        updated-drops []]\n  (if (zero? i)\n   updated-drops\n   (recur (dec i) (pop drops)\n          (conj updated-drops\n                (d/update* (peek drops)))))))\n\n(defn draw [drops]\n (q/background 230 230 250)\n (doseq [d drops]\n  (d/draw d)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/KkyIDI6rQJI\n\n// Purple Rain\n// (138, 43, 226)\n// (230, 230, 250) // background\n\nvar drops = [];\n\nfunction setup() {\n  createCanvas(640, 360);\n  for (var i = 0; i < 500; i++) {\n    drops[i] = new Drop();\n  }\n}\n\nfunction draw() {\n  background(230, 230, 250);\n  for (var i = 0; i < drops.length; i++) {\n    drops[i].fall();\n    drops[i].show();\n  }\n}"], null)], null)], null)], null);

break;
case "drop":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make []\n (let [z (q/random 20)]\n  {:x (q/random (q/width))\n   :y (q/random -200 -100)\n   :z z\n   :len (q/map-range z 0 20 10 20)\n   :yspeed (q/map-range z 0 20 1 20)}))\n\n(defn fall [{yspeed :yspeed\n             z :z\n             :as d}]\n (let [grav (q/map-range z 0 20 0 0.2)]\n  (-> d\n     (update :y (partial + yspeed))\n     (assoc :yspeed (+ grav yspeed)))))\n\n(defn loop-edge [{z :z\n                  :as d}]\n (assoc d\n  :y (q/random -200 -100)\n  :yspeed (q/map-range z 0 20 4 10)))\n\n(defn update* [{y :y\n                :as d}]\n (if (> y (q/height))\n  (-> d loop-edge fall)\n  (-> d fall)))\n\n(defn draw [{x :x\n             y :y\n             z :z\n             len :len\n             :as d}]\n (let [thick (q/map-range z 0 20 1 3)]\n  (q/stroke-weight thick))\n (q/stroke 138 43 226)\n (q/line x y\n         x (+ len y)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/KkyIDI6rQJI\n\n\nfunction Drop() {\n  this.x = random(width);\n  this.y = random(-500, -50);\n  this.z = random(0, 20);\n  this.len = map(this.z, 0, 20, 10, 20);\n  this.yspeed = map(this.z, 0, 20, 1, 20);\n\n  this.fall = function() {\n    this.y = this.y + this.yspeed;\n    var grav = map(this.z, 0, 20, 0, 0.2);\n    this.yspeed = this.yspeed + grav;\n\n    if (this.y > height) {\n      this.y = random(-200, -100);\n      this.yspeed = map(this.z, 0, 20, 4, 10);\n    }\n  }\n\n  this.show = function() {\n    var thick = map(this.z, 0, 20, 1, 3);\n    strokeWeight(thick);\n    stroke(138, 43, 226);\n    line(this.x, this.y, this.x, this.y+this.len);\n  }\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.purple_rain.views.purple_rain_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1485243282051
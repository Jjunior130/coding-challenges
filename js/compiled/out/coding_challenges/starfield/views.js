// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.views');
goog.require('cljs.core');
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
return cljs.core.assoc.call(null,sketch,new cljs.core.Keyword(null,"speed","speed",1257663751),(quil.core.mouse_x.call(null) / (12)));
});
coding_challenges.starfield.views.update_stars = (function coding_challenges$starfield$views$update_stars(p__34922){
var map__34925 = p__34922;
var map__34925__$1 = ((((!((map__34925 == null)))?((((map__34925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34925):map__34925);
var sketch = map__34925__$1;
var speed = cljs.core.get.call(null,map__34925__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"stars","stars",-556837771),((function (map__34925,map__34925__$1,sketch,speed){
return (function (p1__34921_SHARP_){
var i = cljs.core.count.call(null,p1__34921_SHARP_);
var stars = cljs.core.vec.call(null,p1__34921_SHARP_);
var updated_stars = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return updated_stars;
} else {
var G__34927 = (i - (1));
var G__34928 = cljs.core.pop.call(null,stars);
var G__34929 = cljs.core.conj.call(null,updated_stars,coding_challenges.starfield.star.update_STAR_.call(null,speed,cljs.core.peek.call(null,stars)));
i = G__34927;
stars = G__34928;
updated_stars = G__34929;
continue;
}
break;
}
});})(map__34925,map__34925__$1,sketch,speed))
);
});
coding_challenges.starfield.views.update_STAR_ = (function coding_challenges$starfield$views$update_STAR_(sketch){
return coding_challenges.starfield.views.update_stars.call(null,coding_challenges.starfield.views.get_speed_from_mouse.call(null,sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(p__34930){
var map__34937 = p__34930;
var map__34937__$1 = ((((!((map__34937 == null)))?((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34937):map__34937);
var sketch = map__34937__$1;
var stars = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__34939 = cljs.core.seq.call(null,stars);
var chunk__34940 = null;
var count__34941 = (0);
var i__34942 = (0);
while(true){
if((i__34942 < count__34941)){
var star = cljs.core._nth.call(null,chunk__34940,i__34942);
coding_challenges.starfield.star.draw.call(null,star);

var G__34943 = seq__34939;
var G__34944 = chunk__34940;
var G__34945 = count__34941;
var G__34946 = (i__34942 + (1));
seq__34939 = G__34943;
chunk__34940 = G__34944;
count__34941 = G__34945;
i__34942 = G__34946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34939);
if(temp__4657__auto__){
var seq__34939__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34939__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34939__$1);
var G__34947 = cljs.core.chunk_rest.call(null,seq__34939__$1);
var G__34948 = c__7220__auto__;
var G__34949 = cljs.core.count.call(null,c__7220__auto__);
var G__34950 = (0);
seq__34939 = G__34947;
chunk__34940 = G__34948;
count__34941 = G__34949;
i__34942 = G__34950;
continue;
} else {
var star = cljs.core.first.call(null,seq__34939__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__34951 = cljs.core.next.call(null,seq__34939__$1);
var G__34952 = null;
var G__34953 = (0);
var G__34954 = (0);
seq__34939 = G__34951;
chunk__34940 = G__34952;
count__34941 = G__34953;
i__34942 = G__34954;
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
var G__34955__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__34955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34956__i = 0, G__34956__a = new Array(arguments.length -  0);
while (G__34956__i < G__34956__a.length) {G__34956__a[G__34956__i] = arguments[G__34956__i + 0]; ++G__34956__i;}
  args = new cljs.core.IndexedSeq(G__34956__a,0);
} 
return G__34955__delegate.call(this,args);};
G__34955.cljs$lang$maxFixedArity = 0;
G__34955.cljs$lang$applyTo = (function (arglist__34957){
var args = cljs.core.seq(arglist__34957);
return G__34955__delegate(args);
});
G__34955.cljs$core$IFn$_invoke$arity$variadic = G__34955__delegate;
return G__34955;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__34958__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__34958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34959__i = 0, G__34959__a = new Array(arguments.length -  0);
while (G__34959__i < G__34959__a.length) {G__34959__a[G__34959__i] = arguments[G__34959__i + 0]; ++G__34959__i;}
  args = new cljs.core.IndexedSeq(G__34959__a,0);
} 
return G__34958__delegate.call(this,args);};
G__34958.cljs$lang$maxFixedArity = 0;
G__34958.cljs$lang$applyTo = (function (arglist__34960){
var args = cljs.core.seq(arglist__34960);
return G__34958__delegate(args);
});
G__34958.cljs$core$IFn$_invoke$arity$variadic = G__34958__delegate;
return G__34958;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__34961__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__34961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34962__i = 0, G__34962__a = new Array(arguments.length -  0);
while (G__34962__i < G__34962__a.length) {G__34962__a[G__34962__i] = arguments[G__34962__i + 0]; ++G__34962__i;}
  args = new cljs.core.IndexedSeq(G__34962__a,0);
} 
return G__34961__delegate.call(this,args);};
G__34961.cljs$lang$maxFixedArity = 0;
G__34961.cljs$lang$applyTo = (function (arglist__34963){
var args = cljs.core.seq(arglist__34963);
return G__34961__delegate(args);
});
G__34961.cljs$core$IFn$_invoke$arity$variadic = G__34961__delegate;
return G__34961;
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
return (function (p1__34964_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code_nav,p1__34964_SHARP_], null)], null));

var seq__34970 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__34971 = null;
var count__34972 = (0);
var i__34973 = (0);
while(true){
if((i__34973 < count__34972)){
var x = cljs.core._nth.call(null,chunk__34971,i__34973);
hljs.highlightBlock(x);

var G__34975 = seq__34970;
var G__34976 = chunk__34971;
var G__34977 = count__34972;
var G__34978 = (i__34973 + (1));
seq__34970 = G__34975;
chunk__34971 = G__34976;
count__34972 = G__34977;
i__34973 = G__34978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34970);
if(temp__4657__auto__){
var seq__34970__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34970__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34970__$1);
var G__34979 = cljs.core.chunk_rest.call(null,seq__34970__$1);
var G__34980 = c__7220__auto__;
var G__34981 = cljs.core.count.call(null,c__7220__auto__);
var G__34982 = (0);
seq__34970 = G__34979;
chunk__34971 = G__34980;
count__34972 = G__34981;
i__34973 = G__34982;
continue;
} else {
var x = cljs.core.first.call(null,seq__34970__$1);
hljs.highlightBlock(x);

var G__34983 = cljs.core.next.call(null,seq__34970__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34970 = G__34983;
chunk__34971 = G__34984;
count__34972 = G__34985;
i__34973 = G__34986;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code_nav,code))
], null),(function (){var G__34974 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__34974) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure.hljs","code.clojure.hljs",2060278911),"(def w 600)\n(def h 600)\n\n(defn setup []\n  {:stars (repeatedly 800 star/make)})\n\n(defn get-speed-from-mouse [sketch]\n (assoc sketch\n  :speed (/ (q/mouse-x) 12)))\n\n(defn update-stars [{speed :speed\n                     :as sketch}]\n (update sketch\n         :stars\n         #(loop [i (count %)\n                 stars (vec %)\n                 updated-stars []]\n           (if (zero? i)\n            updated-stars\n            (recur (dec i) (pop stars)\n                   (conj updated-stars\n                         (star/update* speed (peek stars))))))))\n\n(defn update* [sketch]\n (->> sketch\n      get-speed-from-mouse\n      update-stars))\n\n(defn draw [{stars :stars\n             :as sketch}]\n (q/background 0)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (doseq [star stars]\n  (star/draw star)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript.hljs","code.javascript.hljs",-1479294525),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/17WoOqgXsRM\n\nvar stars = []\n\nvar speed;\n\nfunction setup() {\n  createCanvas(600, 600);\n  for (var i = 0; i < 800; i++) {\n    stars[i] = new Star();\n  }\n}\n\nfunction draw() {\n  speed = map(mouseX, 0, width, 0, 50);\n  background(0);\n  translate(width / 2, height / 2);\n  for (var i = 0; i < stars.length; i++) {\n    stars[i].update();\n    stars[i].show();\n  }\n}\n"], null)], null)], null)], null);

break;
case "star":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj","code.clj",266818419),"(defn make []\n {:type 'Star\n  :x (q/random (- (q/width)) (q/width))\n  :y (q/random (- (q/height)) (q/height))\n  :z (q/random (q/width))})\n\n(defn move-forward [speed {z :z\n                           :as star}]\n (-> star\n     (assoc :pz z)\n     (update :z #(- % speed))))\n\n(defn reset? [{z :z\n               :as star}]\n (let [nz (q/width)]\n  (cond->\n   star\n   (< z 1)\n   (assoc\n    :z nz\n    :x (q/random (- (q/width)) (q/width))\n    :y (q/random (- (q/height)) (q/height))\n    :pz nz))))\n\n(defn update* [speed star]\n (->> star\n      (move-forward speed)\n      reset?))\n\n(defn draw [{x :x\n             y :y\n             z :z\n             pz :pz\n             :as star}]\n (q/fill 255)\n (q/no-stroke)\n (let [sx (q/map-range (/ x z) 0 1 0 (q/width))\n       sy (q/map-range (/ y  z) 0 1 0 (q/height))\n       r (q/map-range z 0 (q/width) 16 0)\n       px (q/map-range (/ x  pz) 0 1 0 (q/width))\n       py (q/map-range (/ y  pz) 0 1 0 (q/height))]\n  (q/ellipse sx sy r r)\n  (q/stroke 255)\n  (q/line px py sx sy)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// Code for: https://youtu.be/17WoOqgXsRM\n\nfunction Star() {\n  this.x = random(-width, width);\n  this.y = random(-height, height);\n  this.z = random(width);\n  this.pz = this.z;\n\n  this.update = function() {\n    this.z = this.z - speed;\n    if (this.z < 1) {\n      this.z = width;\n      this.x = random(-width, width);\n      this.y = random(-height, height);\n      this.pz = this.z;\n    }\n  }\n\n  this.show = function() {\n    fill(255);\n    noStroke();\n\n    var sx = map(this.x / this.z, 0, 1, 0, width);\n    var sy = map(this.y / this.z, 0, 1, 0, height);\n\n    var r = map(this.z, 0, width, 16, 0);\n    ellipse(sx, sy, r, r);\n\n    var px = map(this.x / this.pz, 0, 1, 0, width);\n    var py = map(this.y / this.pz, 0, 1, 0, height);\n\n    this.pz = this.z;\n\n    stroke(255);\n    line(px, py, sx, sy);\n\n  }\n}"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1485242678867
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
goog.require('coding_challenges.solar_system.planet');
coding_challenges.solar_system.views.w = (600);
coding_challenges.solar_system.views.h = (600);
coding_challenges.solar_system.views.setup = (function coding_challenges$solar_system$views$setup(){
return coding_challenges.solar_system.planet.spawn_moons.call(null,(5),(1),coding_challenges.solar_system.planet.make.call(null,(50),(0),(0)));
});
coding_challenges.solar_system.views.update_STAR_ = (function coding_challenges$solar_system$views$update_STAR_(sun){
return coding_challenges.solar_system.planet.update_STAR_.call(null,sun);
});
coding_challenges.solar_system.views.draw = (function coding_challenges$solar_system$views$draw(sun){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

return coding_challenges.solar_system.planet.draw.call(null,sun);
});
coding_challenges.solar_system.views.solar_system_sketch = (function coding_challenges$solar_system$views$solar_system_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.update_STAR_))?(function() { 
var G__35448__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.update_STAR_,args);
};
var G__35448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35449__i = 0, G__35449__a = new Array(arguments.length -  0);
while (G__35449__i < G__35449__a.length) {G__35449__a[G__35449__i] = arguments[G__35449__i + 0]; ++G__35449__i;}
  args = new cljs.core.IndexedSeq(G__35449__a,0);
} 
return G__35448__delegate.call(this,args);};
G__35448.cljs$lang$maxFixedArity = 0;
G__35448.cljs$lang$applyTo = (function (arglist__35450){
var args = cljs.core.seq(arglist__35450);
return G__35448__delegate(args);
});
G__35448.cljs$core$IFn$_invoke$arity$variadic = G__35448__delegate;
return G__35448;
})()
:coding_challenges.solar_system.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system.views.w,coding_challenges.solar_system.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.setup))?(function() { 
var G__35451__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.setup,args);
};
var G__35451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35452__i = 0, G__35452__a = new Array(arguments.length -  0);
while (G__35452__i < G__35452__a.length) {G__35452__a[G__35452__i] = arguments[G__35452__i + 0]; ++G__35452__i;}
  args = new cljs.core.IndexedSeq(G__35452__a,0);
} 
return G__35451__delegate.call(this,args);};
G__35451.cljs$lang$maxFixedArity = 0;
G__35451.cljs$lang$applyTo = (function (arglist__35453){
var args = cljs.core.seq(arglist__35453);
return G__35451__delegate(args);
});
G__35451.cljs$core$IFn$_invoke$arity$variadic = G__35451__delegate;
return G__35451;
})()
:coding_challenges.solar_system.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.draw))?(function() { 
var G__35454__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.draw,args);
};
var G__35454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35455__i = 0, G__35455__a = new Array(arguments.length -  0);
while (G__35455__i < G__35455__a.length) {G__35455__a[G__35455__i] = arguments[G__35455__i + 0]; ++G__35455__i;}
  args = new cljs.core.IndexedSeq(G__35455__a,0);
} 
return G__35454__delegate.call(this,args);};
G__35454.cljs$lang$maxFixedArity = 0;
G__35454.cljs$lang$applyTo = (function (arglist__35456){
var args = cljs.core.seq(arglist__35456);
return G__35454__delegate(args);
});
G__35454.cljs$core$IFn$_invoke$arity$variadic = G__35454__delegate;
return G__35454;
})()
:coding_challenges.solar_system.views.draw));
});
goog.exportSymbol('coding_challenges.solar_system.views.solar_system_sketch', coding_challenges.solar_system.views.solar_system_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.solar_system.views.solar_system_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
coding_challenges.solar_system.views.view = (function coding_challenges$solar_system$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solar-system","solar-system",477042371),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Solar system demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#solar-system","canvas#solar-system",-1480263093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.solar_system.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.solar_system.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"planet","planet",276671984),new cljs.core.Keyword(null,"label","label",1718410804),"Planet"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__35457_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solar-system","solar-system",477042371),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35457_SHARP_], null)], null));

var seq__35463 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35464 = null;
var count__35465 = (0);
var i__35466 = (0);
while(true){
if((i__35466 < count__35465)){
var x = cljs.core._nth.call(null,chunk__35464,i__35466);
hljs.highlightBlock(x);

var G__35468 = seq__35463;
var G__35469 = chunk__35464;
var G__35470 = count__35465;
var G__35471 = (i__35466 + (1));
seq__35463 = G__35468;
chunk__35464 = G__35469;
count__35465 = G__35470;
i__35466 = G__35471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35463);
if(temp__4657__auto__){
var seq__35463__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35463__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35463__$1);
var G__35472 = cljs.core.chunk_rest.call(null,seq__35463__$1);
var G__35473 = c__7220__auto__;
var G__35474 = cljs.core.count.call(null,c__7220__auto__);
var G__35475 = (0);
seq__35463 = G__35472;
chunk__35464 = G__35473;
count__35465 = G__35474;
i__35466 = G__35475;
continue;
} else {
var x = cljs.core.first.call(null,seq__35463__$1);
hljs.highlightBlock(x);

var G__35476 = cljs.core.next.call(null,seq__35463__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__35463 = G__35476;
chunk__35464 = G__35477;
count__35465 = G__35478;
i__35466 = G__35479;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35467 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35467) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n (->> (planet/make 50 0 0)\n      (planet/spawn-moons 5 1)))\n\n(defn update* [sun]\n (planet/update* sun))\n\n(defn draw [sun]\n (q/background 0)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (planet/draw sun))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.processing","code.processing",-1574067531),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/l8SiJ-RmeHU\n\nPlanet sun;\n\nvoid setup() {\n  size(600, 600);\n  sun = new Planet(50, 0, 0);\n  sun.spawnMoons(5, 1);\n}\n\nvoid draw() {\n  background(0);\n  translate(width/2, height/2);\n  sun.show();\n  sun.orbit();\n}\n"], null)], null)], null)], null);

break;
case "planet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [r d o]\n {:type 'Planet\n  :radius r\n  :distance d\n  :angle (rand q/TWO-PI)\n  :orbit-speed o})\n\n(defn spawn-moons [total level {radius :radius\n                                :as planet}]\n (assoc planet\n  :planets (loop [i (int total)\n                  planets []]\n            (if (zero? i)\n             planets\n             (recur (dec i)\n                    (conj planets\n                          (cond->>\n                           (make\n                            (/ radius\n                               (* level 2))\n                            (/ (q/random 50 150) level)\n                            (q/random -0.1 0.1))\n                           (< level 3)\n                           (spawn-moons (rand-int 4)\n                                        (inc level)))))))))\n\n(defn orbit [{orbit-speed :orbit-speed\n              :as planet}]\n (-> planet\n     (update :angle (partial + orbit-speed))\n     (update :planets\n             (fn [planets]\n              (loop [i (count planets)\n                     planets planets\n                     orbited-planets []]\n               (if (zero? i)\n                orbited-planets\n                (recur (dec i) (pop planets)\n                       (conj orbited-planets\n                             (orbit (peek planets))))))))))\n\n(defn update* [planet]\n (orbit planet))\n\n(defn draw [{angle :angle\n             distance :distance\n             radius :radius\n             planets :planets\n             :as planet}]\n (q/push-matrix)\n (q/fill 255 100)\n (q/rotate angle)\n (q/translate distance 0)\n (q/ellipse 0 0\n            (* radius 2)\n            (* radius 2))\n (doseq [p planets]\n  (draw p))\n (q/pop-matrix))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.processing","code.processing",-1574067531),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/l8SiJ-RmeHU\n\nclass Planet {\n  float radius;\n  float distance;\n  Planet[] planets;\n  float angle;\n  float orbitspeed;\n\n  Planet(float r, float d, float o) {\n    radius = r;\n    distance = d;\n    angle = random(TWO_PI);\n    orbitspeed = o;\n    //println(angle);\n  }\n\n  void orbit() {\n    angle = angle + orbitspeed;\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].orbit();\n      }\n    }\n  }\n\n  void spawnMoons(int total, int level) {\n    planets = new Planet[total];\n    for (int i = 0; i < planets.length; i++) {\n      float r = radius/(level*2);\n      float d = random(50, 150);\n      float o = random(-0.1, 0.1);\n      planets[i] = new Planet(r, d/level, o);\n      if (level < 3) {\n        int num = int(random(0,4));\n        planets[i].spawnMoons(num, level+1);\n      }\n    }\n  }\n\n  void show() {\n    pushMatrix();\n    fill(255, 100);\n    rotate(angle);\n    translate(distance, 0);\n    ellipse(0, 0, radius*2, radius*2);\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].show();\n      }\n    }\n    popMatrix();\n  }\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.solar_system.views.solar_system_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1485243282819
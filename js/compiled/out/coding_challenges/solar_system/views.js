// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
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
var G__33157__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.update_STAR_,args);
};
var G__33157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33158__i = 0, G__33158__a = new Array(arguments.length -  0);
while (G__33158__i < G__33158__a.length) {G__33158__a[G__33158__i] = arguments[G__33158__i + 0]; ++G__33158__i;}
  args = new cljs.core.IndexedSeq(G__33158__a,0);
} 
return G__33157__delegate.call(this,args);};
G__33157.cljs$lang$maxFixedArity = 0;
G__33157.cljs$lang$applyTo = (function (arglist__33159){
var args = cljs.core.seq(arglist__33159);
return G__33157__delegate(args);
});
G__33157.cljs$core$IFn$_invoke$arity$variadic = G__33157__delegate;
return G__33157;
})()
:coding_challenges.solar_system.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system.views.w,coding_challenges.solar_system.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.setup))?(function() { 
var G__33160__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.setup,args);
};
var G__33160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33161__i = 0, G__33161__a = new Array(arguments.length -  0);
while (G__33161__i < G__33161__a.length) {G__33161__a[G__33161__i] = arguments[G__33161__i + 0]; ++G__33161__i;}
  args = new cljs.core.IndexedSeq(G__33161__a,0);
} 
return G__33160__delegate.call(this,args);};
G__33160.cljs$lang$maxFixedArity = 0;
G__33160.cljs$lang$applyTo = (function (arglist__33162){
var args = cljs.core.seq(arglist__33162);
return G__33160__delegate(args);
});
G__33160.cljs$core$IFn$_invoke$arity$variadic = G__33160__delegate;
return G__33160;
})()
:coding_challenges.solar_system.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.draw))?(function() { 
var G__33163__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.draw,args);
};
var G__33163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33164__i = 0, G__33164__a = new Array(arguments.length -  0);
while (G__33164__i < G__33164__a.length) {G__33164__a[G__33164__i] = arguments[G__33164__i + 0]; ++G__33164__i;}
  args = new cljs.core.IndexedSeq(G__33164__a,0);
} 
return G__33163__delegate.call(this,args);};
G__33163.cljs$lang$maxFixedArity = 0;
G__33163.cljs$lang$applyTo = (function (arglist__33165){
var args = cljs.core.seq(arglist__33165);
return G__33163__delegate(args);
});
G__33163.cljs$core$IFn$_invoke$arity$variadic = G__33163__delegate;
return G__33163;
})()
:coding_challenges.solar_system.views.draw));
});
goog.exportSymbol('coding_challenges.solar_system.views.solar_system_sketch', coding_challenges.solar_system.views.solar_system_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12874__12875__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__12874__12875__auto__);
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
return (function (p1__33166_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solar-system","solar-system",477042371),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__33166_SHARP_], null)], null));

var seq__33172 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__33173 = null;
var count__33174 = (0);
var i__33175 = (0);
while(true){
if((i__33175 < count__33174)){
var x = cljs.core._nth.call(null,chunk__33173,i__33175);
hljs.highlightBlock(x);

var G__33177 = seq__33172;
var G__33178 = chunk__33173;
var G__33179 = count__33174;
var G__33180 = (i__33175 + (1));
seq__33172 = G__33177;
chunk__33173 = G__33178;
count__33174 = G__33179;
i__33175 = G__33180;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33172);
if(temp__4657__auto__){
var seq__33172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33172__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__33172__$1);
var G__33181 = cljs.core.chunk_rest.call(null,seq__33172__$1);
var G__33182 = c__7220__auto__;
var G__33183 = cljs.core.count.call(null,c__7220__auto__);
var G__33184 = (0);
seq__33172 = G__33181;
chunk__33173 = G__33182;
count__33174 = G__33183;
i__33175 = G__33184;
continue;
} else {
var x = cljs.core.first.call(null,seq__33172__$1);
hljs.highlightBlock(x);

var G__33185 = cljs.core.next.call(null,seq__33172__$1);
var G__33186 = null;
var G__33187 = (0);
var G__33188 = (0);
seq__33172 = G__33185;
chunk__33173 = G__33186;
count__33174 = G__33187;
i__33175 = G__33188;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__33176 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__33176) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n (->> (planet/make 50 0 0)\n      (planet/spawn-moons 5 1)))\n\n(defn update* [sun]\n (planet/update* sun))\n\n(defn draw [sun]\n (q/background 0)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (planet/draw sun))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.processing","code.processing",-1574067531),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/l8SiJ-RmeHU\n\nPlanet sun;\n\nvoid setup() {\n  size(600, 600);\n  sun = new Planet(50, 0, 0);\n  sun.spawnMoons(5, 1);\n}\n\nvoid draw() {\n  background(0);\n  translate(width/2, height/2);\n  sun.show();\n  sun.orbit();\n}\n"], null)], null)], null)], null);

break;
case "planet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [r d o]\n {:type 'Planet\n  :radius r\n  :distance d\n  :angle (rand q/TWO-PI)\n  :orbit-speed o})\n\n(defn spawn-moons [total level {radius :radius\n                                :as planet}]\n (->> planet\n      (setval :planets\n              (repeatedly total\n                          (fn []\n                           (cond->>\n                             (make\n                              (/ radius\n                                 (* level 2))\n                              (/ (q/random 50 150) level)\n                              (q/random -0.1 0.1))\n                             (< level 3)\n                             (spawn-moons (rand-int 4)\n                                          (inc level))))))))\n\n(defn orbit [planet]\n (->> planet\n      (transform [(collect-one :orbit-speed)\n                  :angle] +)\n      (transform [:planets ALL]\n                 orbit)))\n\n(defn update* [planet]\n (orbit planet))\n\n(defn draw [planet]\n (q/push-matrix)\n (q/fill 255 100)\n (q/rotate (:angle planet))\n (q/translate (:distance planet) 0)\n (q/ellipse 0 0\n            (* (:radius planet) 2)\n            (* (:radius planet) 2))\n (doseq [p (:planets planet)]\n  (draw p))\n (q/pop-matrix))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.processing","code.processing",-1574067531),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/l8SiJ-RmeHU\n\nclass Planet {\n  float radius;\n  float distance;\n  Planet[] planets;\n  float angle;\n  float orbitspeed;\n\n  Planet(float r, float d, float o) {\n    radius = r;\n    distance = d;\n    angle = random(TWO_PI);\n    orbitspeed = o;\n    //println(angle);\n  }\n\n  void orbit() {\n    angle = angle + orbitspeed;\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].orbit();\n      }\n    }\n  }\n\n  void spawnMoons(int total, int level) {\n    planets = new Planet[total];\n    for (int i = 0; i < planets.length; i++) {\n      float r = radius/(level*2);\n      float d = random(50, 150);\n      float o = random(-0.1, 0.1);\n      planets[i] = new Planet(r, d/level, o);\n      if (level < 3) {\n        int num = int(random(0,4));\n        planets[i].spawnMoons(num, level+1);\n      }\n    }\n  }\n\n  void show() {\n    pushMatrix();\n    fill(255, 100);\n    rotate(angle);\n    translate(distance, 0);\n    ellipse(0, 0, radius*2, radius*2);\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].show();\n      }\n    }\n    popMatrix();\n  }\n}\n"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1484702590586
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
goog.require('coding_challenges.solar_system_3d.planet');
coding_challenges.solar_system_3d.views.w = (600);
coding_challenges.solar_system_3d.views.h = (600);
coding_challenges.solar_system_3d.views.setup = (function coding_challenges$solar_system_3d$views$setup(){
return coding_challenges.solar_system_3d.planet.spawn_moons.call(null,(5),(1),coding_challenges.solar_system_3d.planet.make.call(null,(50),(0),(0)));
});
coding_challenges.solar_system_3d.views.update_STAR_ = (function coding_challenges$solar_system_3d$views$update_STAR_(sun){
return coding_challenges.solar_system_3d.planet.update_STAR_.call(null,sun);
});
coding_challenges.solar_system_3d.views.draw = (function coding_challenges$solar_system_3d$views$draw(sun){
quil.core.background.call(null,(0));

quil.core.lights.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

return coding_challenges.solar_system_3d.planet.draw.call(null,sun);
});
coding_challenges.solar_system_3d.views.solar_system_3d_sketch = (function coding_challenges$solar_system_3d$views$solar_system_3d_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system-3d",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d.views.update_STAR_))?(function() { 
var G__39370__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.update_STAR_,args);
};
var G__39370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39371__i = 0, G__39371__a = new Array(arguments.length -  0);
while (G__39371__i < G__39371__a.length) {G__39371__a[G__39371__i] = arguments[G__39371__i + 0]; ++G__39371__i;}
  args = new cljs.core.IndexedSeq(G__39371__a,0);
} 
return G__39370__delegate.call(this,args);};
G__39370.cljs$lang$maxFixedArity = 0;
G__39370.cljs$lang$applyTo = (function (arglist__39372){
var args = cljs.core.seq(arglist__39372);
return G__39370__delegate(args);
});
G__39370.cljs$core$IFn$_invoke$arity$variadic = G__39370__delegate;
return G__39370;
})()
:coding_challenges.solar_system_3d.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system_3d.views.w,coding_challenges.solar_system_3d.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d.views.setup))?(function() { 
var G__39373__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.setup,args);
};
var G__39373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39374__i = 0, G__39374__a = new Array(arguments.length -  0);
while (G__39374__i < G__39374__a.length) {G__39374__a[G__39374__i] = arguments[G__39374__i + 0]; ++G__39374__i;}
  args = new cljs.core.IndexedSeq(G__39374__a,0);
} 
return G__39373__delegate.call(this,args);};
G__39373.cljs$lang$maxFixedArity = 0;
G__39373.cljs$lang$applyTo = (function (arglist__39375){
var args = cljs.core.seq(arglist__39375);
return G__39373__delegate(args);
});
G__39373.cljs$core$IFn$_invoke$arity$variadic = G__39373__delegate;
return G__39373;
})()
:coding_challenges.solar_system_3d.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_3d], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d.views.draw))?(function() { 
var G__39376__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.draw,args);
};
var G__39376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39377__i = 0, G__39377__a = new Array(arguments.length -  0);
while (G__39377__i < G__39377__a.length) {G__39377__a[G__39377__i] = arguments[G__39377__i + 0]; ++G__39377__i;}
  args = new cljs.core.IndexedSeq(G__39377__a,0);
} 
return G__39376__delegate.call(this,args);};
G__39376.cljs$lang$maxFixedArity = 0;
G__39376.cljs$lang$applyTo = (function (arglist__39378){
var args = cljs.core.seq(arglist__39378);
return G__39376__delegate(args);
});
G__39376.cljs$core$IFn$_invoke$arity$variadic = G__39376__delegate;
return G__39376;
})()
:coding_challenges.solar_system_3d.views.draw));
});
goog.exportSymbol('coding_challenges.solar_system_3d.views.solar_system_3d_sketch', coding_challenges.solar_system_3d.views.solar_system_3d_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33343__33344__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33343__33344__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.solar_system_3d.views.solar_system_3d_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system-3d"], null));
}
coding_challenges.solar_system_3d.views.view = (function coding_challenges$solar_system_3d$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solar-system","solar-system",477042371),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Solar system 3D demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#solar-system-3d","canvas#solar-system-3d",-2076799385),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.solar_system_3d.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.solar_system_3d.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"planet","planet",276671984),new cljs.core.Keyword(null,"label","label",1718410804),"Planet"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__39379_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solar-system","solar-system",477042371),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__39379_SHARP_], null)], null));
});})(code__$1,code))
], null),(function (){var G__39381 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__39381) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n (->> (planet/make 50 0 0)\n      (planet/spawn-moons 5 1)))\n\n(defn update* [sun]\n (planet/update* sun))\n\n(defn draw [sun]\n (q/background 0)\n (q/lights)\n (q/translate (/ (q/width) 2)\n              (/ (q/height) 2))\n (planet/draw sun))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.java","code.java",890802862),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/dncudkelNxw\n\nimport peasy.*;\nPlanet sun;\n\nPeasyCam cam;\n\nvoid setup() {\n  size(600, 600, P3D);\n  cam = new PeasyCam(this, 500);\n  sun = new Planet(50, 0, 0);\n  sun.spawnMoons(4, 1);\n}\n\nvoid draw() {\n  background(0);\n  lights();\n  sun.show();\n  sun.orbit();\n}\n"], null)], null)], null)], null);

break;
case "planet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn random-coordinate [distance]\n (let [theta (Math/acos (q/random -1 1))\n       phi (Math/atan (q/random -1 1))\n       x (* distance\n            (Math/sin theta)\n            (Math/cos phi))\n       y (* distance\n            (Math/sin theta)\n            (Math/sin phi))\n       z (* distance\n            (Math/cos phi))]\n  {:x x\n   :y y\n   :z z}))\n\n(defn make [r d o]\n (->> {:type 'Planet\n       :radius r\n       :distance d\n       :angle (rand q/TWO-PI)\n       :orbit-speed o}\n      (transform [(collect-one :distance) :v]\n                 random-coordinate)))\n\n(defn spawn-moons [total level planet]\n (->> planet\n      (setval :planets\n              (repeatedly total\n                          #(cond->>\n                            (let [r (/ (:radius planet)\n                                       (* level 2))\n                                  x (+ (:radius planet) r)]\n                             (make\n                              r\n                              (q/random x\n                                        (* 2 x))\n                              (q/random -0.1 0.1)))\n                            (< level 3)\n                            (spawn-moons (rand-int 4)\n                                         (inc level)))))))\n\n(defn orbit [planet]\n (->> planet\n      (transform [(collect-one :orbit-speed)\n                  :angle] +)\n      (transform [:planets ALL]\n                 orbit)))\n\n(defn update* [planet]\n (orbit planet))\n\n(defn cross [{x1 :x\n              y1 :y\n              z1 :z}\n             {x2 :x\n              y2 :y\n              z2 :z}]\n {:x (- (* y1 z2) (* z1 y2))\n  :y (- (* z1 x2) (* x1 z2))\n  :z (- (* x1 y2) (* y1 x2))})\n\n(defn draw [{angle :angle\n             radius :radius\n             planets :planets\n             v :v\n             :as planet}]\n (q/push-matrix)\n (q/no-stroke)\n (q/fill 255)\n (let [v2 {:x 1 :y 0 :z 1}\n       {x :x\n        y :y\n        z :z\n        :as p} (cross v v2)]\n  (q/rotate angle x y z))\n (q/translate (-> v :x)\n              (-> v :y)\n              (-> v :z))\n (q/sphere radius)\n (doseq [p planets]\n  (draw p))\n (q/pop-matrix))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.java","code.java",890802862),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/dncudkelNxw\n\nclass Planet {\n  float radius;\n  float distance;\n  Planet[] planets;\n  float angle;\n  float orbitspeed;\n  PVector v;\n\n  PShape globe;\n\n  Planet(float r, float d, float o) {\n\n    v = PVector.random3D();\n\n    radius = r;\n    distance = d;\n    v.mult(distance);\n    angle = random(TWO_PI);\n    orbitspeed = o;\n  }\n\n  void orbit() {\n    angle = angle + orbitspeed;\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].orbit();\n      }\n    }\n  }\n\n  void spawnMoons(int total, int level) {\n    planets = new Planet[total];\n    for (int i = 0; i < planets.length; i++) {\n      float r = radius/(level*2);\n      float d = random((radius + r), (radius+r)*2);\n      float o = random(-0.1, 0.1);\n      planets[i] = new Planet(r, d, o);\n      if (level < 2) {\n        int num = int(random(0, 3));\n        planets[i].spawnMoons(num, level+1);\n      }\n    }\n  }\n\n  void show() {\n    pushMatrix();\n    noStroke();\n    PVector v2 = new PVector(1, 0, 1);\n    PVector p = v.cross(v2);\n    rotate(angle, p.x, p.y, p.z);\n    stroke(255);\n    //line(0, 0, 0, v.x, v.y, v.z);\n    //line(0, 0, 0, p.x, p.y, p.z);\n\n    translate(v.x, v.y, v.z);\n    noStroke();\n    fill(255);\n    sphere(radius);\n    //ellipse(0, 0, radius*2, radius*2);\n    if (planets != null) {\n      for (int i = 0; i < planets.length; i++) {\n        planets[i].show();\n      }\n    }\n    popMatrix();\n  }\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.solar_system_3d.views.solar_system_3d_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484447053070
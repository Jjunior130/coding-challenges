// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.purple_rain.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('coding_challenges.purple_rain.drop');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.purple_rain.views.w = (640);
coding_challenges.purple_rain.views.h = (360);
coding_challenges.purple_rain.views.setup = (function coding_challenges$purple_rain$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drops","drops",-1558072608),cljs.core.repeatedly.call(null,(500),coding_challenges.purple_rain.drop.make)], null);
});
coding_challenges.purple_rain.views.update_STAR_ = (function coding_challenges$purple_rain$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.purple_rain.views.pathcache35064;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35065 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.purple-rain.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.purple_rain.views.pathcache35064 = info35065;

return info35065;
})():info__12233__auto__);
var precompiled35066 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35066.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled35066;
}
})(),coding_challenges.purple_rain.drop.update_STAR_,sketch);
});
coding_challenges.purple_rain.views.draw = (function coding_challenges$purple_rain$views$draw(sketch){
quil.core.background.call(null,(230),(230),(250));

var seq__35071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"drops","drops",-1558072608).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__35072 = null;
var count__35073 = (0);
var i__35074 = (0);
while(true){
if((i__35074 < count__35073)){
var d = cljs.core._nth.call(null,chunk__35072,i__35074);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__35075 = seq__35071;
var G__35076 = chunk__35072;
var G__35077 = count__35073;
var G__35078 = (i__35074 + (1));
seq__35071 = G__35075;
chunk__35072 = G__35076;
count__35073 = G__35077;
i__35074 = G__35078;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35071);
if(temp__4657__auto__){
var seq__35071__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35071__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35071__$1);
var G__35079 = cljs.core.chunk_rest.call(null,seq__35071__$1);
var G__35080 = c__7220__auto__;
var G__35081 = cljs.core.count.call(null,c__7220__auto__);
var G__35082 = (0);
seq__35071 = G__35079;
chunk__35072 = G__35080;
count__35073 = G__35081;
i__35074 = G__35082;
continue;
} else {
var d = cljs.core.first.call(null,seq__35071__$1);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__35083 = cljs.core.next.call(null,seq__35071__$1);
var G__35084 = null;
var G__35085 = (0);
var G__35086 = (0);
seq__35071 = G__35083;
chunk__35072 = G__35084;
count__35073 = G__35085;
i__35074 = G__35086;
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
var G__35087__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.update_STAR_,args);
};
var G__35087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35088__i = 0, G__35088__a = new Array(arguments.length -  0);
while (G__35088__i < G__35088__a.length) {G__35088__a[G__35088__i] = arguments[G__35088__i + 0]; ++G__35088__i;}
  args = new cljs.core.IndexedSeq(G__35088__a,0);
} 
return G__35087__delegate.call(this,args);};
G__35087.cljs$lang$maxFixedArity = 0;
G__35087.cljs$lang$applyTo = (function (arglist__35089){
var args = cljs.core.seq(arglist__35089);
return G__35087__delegate(args);
});
G__35087.cljs$core$IFn$_invoke$arity$variadic = G__35087__delegate;
return G__35087;
})()
:coding_challenges.purple_rain.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.purple_rain.views.w,coding_challenges.purple_rain.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.setup))?(function() { 
var G__35090__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.setup,args);
};
var G__35090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35091__i = 0, G__35091__a = new Array(arguments.length -  0);
while (G__35091__i < G__35091__a.length) {G__35091__a[G__35091__i] = arguments[G__35091__i + 0]; ++G__35091__i;}
  args = new cljs.core.IndexedSeq(G__35091__a,0);
} 
return G__35090__delegate.call(this,args);};
G__35090.cljs$lang$maxFixedArity = 0;
G__35090.cljs$lang$applyTo = (function (arglist__35092){
var args = cljs.core.seq(arglist__35092);
return G__35090__delegate(args);
});
G__35090.cljs$core$IFn$_invoke$arity$variadic = G__35090__delegate;
return G__35090;
})()
:coding_challenges.purple_rain.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.draw))?(function() { 
var G__35093__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.draw,args);
};
var G__35093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35094__i = 0, G__35094__a = new Array(arguments.length -  0);
while (G__35094__i < G__35094__a.length) {G__35094__a[G__35094__i] = arguments[G__35094__i + 0]; ++G__35094__i;}
  args = new cljs.core.IndexedSeq(G__35094__a,0);
} 
return G__35093__delegate.call(this,args);};
G__35093.cljs$lang$maxFixedArity = 0;
G__35093.cljs$lang$applyTo = (function (arglist__35095){
var args = cljs.core.seq(arglist__35095);
return G__35093__delegate(args);
});
G__35093.cljs$core$IFn$_invoke$arity$variadic = G__35093__delegate;
return G__35093;
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
return (function (p1__35096_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple-rain","purple-rain",1933494285),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35096_SHARP_], null)], null));

var seq__35102 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35103 = null;
var count__35104 = (0);
var i__35105 = (0);
while(true){
if((i__35105 < count__35104)){
var x = cljs.core._nth.call(null,chunk__35103,i__35105);
hljs.highlightBlock(x);

var G__35107 = seq__35102;
var G__35108 = chunk__35103;
var G__35109 = count__35104;
var G__35110 = (i__35105 + (1));
seq__35102 = G__35107;
chunk__35103 = G__35108;
count__35104 = G__35109;
i__35105 = G__35110;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35102);
if(temp__4657__auto__){
var seq__35102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35102__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35102__$1);
var G__35111 = cljs.core.chunk_rest.call(null,seq__35102__$1);
var G__35112 = c__7220__auto__;
var G__35113 = cljs.core.count.call(null,c__7220__auto__);
var G__35114 = (0);
seq__35102 = G__35111;
chunk__35103 = G__35112;
count__35104 = G__35113;
i__35105 = G__35114;
continue;
} else {
var x = cljs.core.first.call(null,seq__35102__$1);
hljs.highlightBlock(x);

var G__35115 = cljs.core.next.call(null,seq__35102__$1);
var G__35116 = null;
var G__35117 = (0);
var G__35118 = (0);
seq__35102 = G__35115;
chunk__35103 = G__35116;
count__35104 = G__35117;
i__35105 = G__35118;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35106 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35106) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 640)\n(def h 360)\n\n(defn setup []\n {:drops (repeatedly 500 d/make)})\n\n(defn update* [sketch]\n (->> sketch\n      (transform [:drops\n                  ALL]\n                 d/update*)))\n\n(defn draw [sketch]\n (q/background 230 230 250)\n (doseq [d (:drops sketch)]\n  (d/draw d)))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/KkyIDI6rQJI\n\n// Purple Rain\n// (138, 43, 226)\n// (230, 230, 250) // background\n\nvar drops = [];\n\nfunction setup() {\n  createCanvas(640, 360);\n  for (var i = 0; i < 500; i++) {\n    drops[i] = new Drop();\n  }\n}\n\nfunction draw() {\n  background(230, 230, 250);\n  for (var i = 0; i < drops.length; i++) {\n    drops[i].fall();\n    drops[i].show();\n  }\n}"], null)], null)], null)], null);

break;
case "drop":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make []\n (->> {:x (q/random (q/width))\n       :y (q/random -200 -100)\n       :z (q/random 20)}\n      (transform [(collect-one :z)\n                  :len]\n                 #(q/map-range %1 0 20 10 20))\n      (transform [(collect-one :z)\n                  :yspeed]\n                 #(q/map-range %1 0 20 1 20))))\n\n(defn fall [d]\n (->> d\n      (transform [(collect-one :yspeed) :y] +)\n      (transform [(collect-one :z (view #(q/map-range % 0 20 0 0.2)))\n                  :yspeed]\n                 (fn [grav yspeed]\n                  (+ grav yspeed)))))\n\n(defn loop-edge [d]\n (->> d\n      (setval :y (q/random -200 -100))\n      (transform [(collect-one :z)\n                  :yspeed]\n                 #(q/map-range %1 0 20 4 10))))\n\n(defn update* [{y :y\n                :as d}]\n (cond->>\n  d\n  (> y (q/height)) loop-edge\n  :always fall))\n\n(defn draw [d]\n (let [thick (q/map-range (:z d) 0 20 1 3)]\n  (q/stroke-weight thick))\n (q/stroke 138 43 226)\n (q/line (:x d) (:y d)\n         (:x d) (+ (:len d) (:y d))))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/KkyIDI6rQJI\n\n\nfunction Drop() {\n  this.x = random(width);\n  this.y = random(-500, -50);\n  this.z = random(0, 20);\n  this.len = map(this.z, 0, 20, 10, 20);\n  this.yspeed = map(this.z, 0, 20, 1, 20);\n\n  this.fall = function() {\n    this.y = this.y + this.yspeed;\n    var grav = map(this.z, 0, 20, 0, 0.2);\n    this.yspeed = this.yspeed + grav;\n\n    if (this.y > height) {\n      this.y = random(-200, -100);\n      this.yspeed = map(this.z, 0, 20, 4, 10);\n    }\n  }\n\n  this.show = function() {\n    var thick = map(this.z, 0, 20, 1, 3);\n    strokeWeight(thick);\n    stroke(138, 43, 226);\n    line(this.x, this.y, this.x, this.y+this.len);\n  }\n}\n"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1484780663328
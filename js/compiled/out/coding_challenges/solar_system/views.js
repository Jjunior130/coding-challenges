// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
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
var G__35248__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.update_STAR_,args);
};
var G__35248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35249__i = 0, G__35249__a = new Array(arguments.length -  0);
while (G__35249__i < G__35249__a.length) {G__35249__a[G__35249__i] = arguments[G__35249__i + 0]; ++G__35249__i;}
  args = new cljs.core.IndexedSeq(G__35249__a,0);
} 
return G__35248__delegate.call(this,args);};
G__35248.cljs$lang$maxFixedArity = 0;
G__35248.cljs$lang$applyTo = (function (arglist__35250){
var args = cljs.core.seq(arglist__35250);
return G__35248__delegate(args);
});
G__35248.cljs$core$IFn$_invoke$arity$variadic = G__35248__delegate;
return G__35248;
})()
:coding_challenges.solar_system.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system.views.w,coding_challenges.solar_system.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.setup))?(function() { 
var G__35251__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.setup,args);
};
var G__35251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35252__i = 0, G__35252__a = new Array(arguments.length -  0);
while (G__35252__i < G__35252__a.length) {G__35252__a[G__35252__i] = arguments[G__35252__i + 0]; ++G__35252__i;}
  args = new cljs.core.IndexedSeq(G__35252__a,0);
} 
return G__35251__delegate.call(this,args);};
G__35251.cljs$lang$maxFixedArity = 0;
G__35251.cljs$lang$applyTo = (function (arglist__35253){
var args = cljs.core.seq(arglist__35253);
return G__35251__delegate(args);
});
G__35251.cljs$core$IFn$_invoke$arity$variadic = G__35251__delegate;
return G__35251;
})()
:coding_challenges.solar_system.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system.views.draw))?(function() { 
var G__35254__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system.views.draw,args);
};
var G__35254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35255__i = 0, G__35255__a = new Array(arguments.length -  0);
while (G__35255__i < G__35255__a.length) {G__35255__a[G__35255__i] = arguments[G__35255__i + 0]; ++G__35255__i;}
  args = new cljs.core.IndexedSeq(G__35255__a,0);
} 
return G__35254__delegate.call(this,args);};
G__35254.cljs$lang$maxFixedArity = 0;
G__35254.cljs$lang$applyTo = (function (arglist__35256){
var args = cljs.core.seq(arglist__35256);
return G__35254__delegate(args);
});
G__35254.cljs$core$IFn$_invoke$arity$variadic = G__35254__delegate;
return G__35254;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Solar system demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#solar-system","canvas#solar-system",-1480263093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.solar_system.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.solar_system.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.solar_system.views.solar_system_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484163017497
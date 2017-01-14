// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
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
var G__61699__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.update_STAR_,args);
};
var G__61699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61700__i = 0, G__61700__a = new Array(arguments.length -  0);
while (G__61700__i < G__61700__a.length) {G__61700__a[G__61700__i] = arguments[G__61700__i + 0]; ++G__61700__i;}
  args = new cljs.core.IndexedSeq(G__61700__a,0);
} 
return G__61699__delegate.call(this,args);};
G__61699.cljs$lang$maxFixedArity = 0;
G__61699.cljs$lang$applyTo = (function (arglist__61701){
var args = cljs.core.seq(arglist__61701);
return G__61699__delegate(args);
});
G__61699.cljs$core$IFn$_invoke$arity$variadic = G__61699__delegate;
return G__61699;
})()
:coding_challenges.solar_system_3d.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system_3d.views.w,coding_challenges.solar_system_3d.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d.views.setup))?(function() { 
var G__61702__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.setup,args);
};
var G__61702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61703__i = 0, G__61703__a = new Array(arguments.length -  0);
while (G__61703__i < G__61703__a.length) {G__61703__a[G__61703__i] = arguments[G__61703__i + 0]; ++G__61703__i;}
  args = new cljs.core.IndexedSeq(G__61703__a,0);
} 
return G__61702__delegate.call(this,args);};
G__61702.cljs$lang$maxFixedArity = 0;
G__61702.cljs$lang$applyTo = (function (arglist__61704){
var args = cljs.core.seq(arglist__61704);
return G__61702__delegate(args);
});
G__61702.cljs$core$IFn$_invoke$arity$variadic = G__61702__delegate;
return G__61702;
})()
:coding_challenges.solar_system_3d.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_3d], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d.views.draw))?(function() { 
var G__61705__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d.views.draw,args);
};
var G__61705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61706__i = 0, G__61706__a = new Array(arguments.length -  0);
while (G__61706__i < G__61706__a.length) {G__61706__a[G__61706__i] = arguments[G__61706__i + 0]; ++G__61706__i;}
  args = new cljs.core.IndexedSeq(G__61706__a,0);
} 
return G__61705__delegate.call(this,args);};
G__61705.cljs$lang$maxFixedArity = 0;
G__61705.cljs$lang$applyTo = (function (arglist__61707){
var args = cljs.core.seq(arglist__61707);
return G__61705__delegate(args);
});
G__61705.cljs$core$IFn$_invoke$arity$variadic = G__61705__delegate;
return G__61705;
})()
:coding_challenges.solar_system_3d.views.draw));
});
goog.exportSymbol('coding_challenges.solar_system_3d.views.solar_system_3d_sketch', coding_challenges.solar_system_3d.views.solar_system_3d_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.solar_system_3d.views.solar_system_3d_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system-3d"], null));
}
coding_challenges.solar_system_3d.views.view = (function coding_challenges$solar_system_3d$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Solar system 3D demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#solar-system-3d","canvas#solar-system-3d",-2076799385),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.solar_system_3d.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.solar_system_3d.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.solar_system_3d.views.solar_system_3d_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484333402319
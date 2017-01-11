// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d_texture.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('coding_challenges.solar_system_3d_texture.planet');
coding_challenges.solar_system_3d_texture.views.w = (600);
coding_challenges.solar_system_3d_texture.views.h = (600);
coding_challenges.solar_system_3d_texture.views.setup = (function coding_challenges$solar_system_3d_texture$views$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),quil.core.load_image.call(null,"sun.jpg"),new cljs.core.Keyword(null,"sun","sun",-916295498),coding_challenges.solar_system_3d_texture.planet.spawn_moons.call(null,(5),(1),coding_challenges.solar_system_3d_texture.planet.make.call(null,(50),(0),(0)))], null);
});
coding_challenges.solar_system_3d_texture.views.update_STAR_ = (function coding_challenges$solar_system_3d_texture$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d_texture.views.pathcache141574;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141575 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sun","sun",-916295498)], null),"coding-challenges.solar-system-3d-texture.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system_3d_texture.views.pathcache141574 = info141575;

return info141575;
})():info__30860__auto__);
var precompiled141576 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141576.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141576;
}
})(),coding_challenges.solar_system_3d_texture.planet.update_STAR_,sketch);
});
coding_challenges.solar_system_3d_texture.views.draw = (function coding_challenges$solar_system_3d_texture$views$draw(p__141577){
var map__141580 = p__141577;
var map__141580__$1 = ((((!((map__141580 == null)))?((((map__141580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__141580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__141580):map__141580);
var sketch = map__141580__$1;
var sun = cljs.core.get.call(null,map__141580__$1,new cljs.core.Keyword(null,"sun","sun",-916295498));
var img = cljs.core.get.call(null,map__141580__$1,new cljs.core.Keyword(null,"img","img",1442687358));
quil.core.background.call(null,(0));

quil.core.lights.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

return coding_challenges.solar_system_3d_texture.planet.draw.call(null,img,sun);
});
coding_challenges.solar_system_3d_texture.views.solar_system_3d_texture_sketch = (function coding_challenges$solar_system_3d_texture$views$solar_system_3d_texture_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system-3d-texture",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d_texture.views.update_STAR_))?(function() { 
var G__141582__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d_texture.views.update_STAR_,args);
};
var G__141582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141583__i = 0, G__141583__a = new Array(arguments.length -  0);
while (G__141583__i < G__141583__a.length) {G__141583__a[G__141583__i] = arguments[G__141583__i + 0]; ++G__141583__i;}
  args = new cljs.core.IndexedSeq(G__141583__a,0);
} 
return G__141582__delegate.call(this,args);};
G__141582.cljs$lang$maxFixedArity = 0;
G__141582.cljs$lang$applyTo = (function (arglist__141584){
var args = cljs.core.seq(arglist__141584);
return G__141582__delegate(args);
});
G__141582.cljs$core$IFn$_invoke$arity$variadic = G__141582__delegate;
return G__141582;
})()
:coding_challenges.solar_system_3d_texture.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.solar_system_3d_texture.views.w,coding_challenges.solar_system_3d_texture.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d_texture.views.setup))?(function() { 
var G__141585__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d_texture.views.setup,args);
};
var G__141585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141586__i = 0, G__141586__a = new Array(arguments.length -  0);
while (G__141586__i < G__141586__a.length) {G__141586__a[G__141586__i] = arguments[G__141586__i + 0]; ++G__141586__i;}
  args = new cljs.core.IndexedSeq(G__141586__a,0);
} 
return G__141585__delegate.call(this,args);};
G__141585.cljs$lang$maxFixedArity = 0;
G__141585.cljs$lang$applyTo = (function (arglist__141587){
var args = cljs.core.seq(arglist__141587);
return G__141585__delegate(args);
});
G__141585.cljs$core$IFn$_invoke$arity$variadic = G__141585__delegate;
return G__141585;
})()
:coding_challenges.solar_system_3d_texture.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_3d], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.solar_system_3d_texture.views.draw))?(function() { 
var G__141588__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.solar_system_3d_texture.views.draw,args);
};
var G__141588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141589__i = 0, G__141589__a = new Array(arguments.length -  0);
while (G__141589__i < G__141589__a.length) {G__141589__a[G__141589__i] = arguments[G__141589__i + 0]; ++G__141589__i;}
  args = new cljs.core.IndexedSeq(G__141589__a,0);
} 
return G__141588__delegate.call(this,args);};
G__141588.cljs$lang$maxFixedArity = 0;
G__141588.cljs$lang$applyTo = (function (arglist__141590){
var args = cljs.core.seq(arglist__141590);
return G__141588__delegate(args);
});
G__141588.cljs$core$IFn$_invoke$arity$variadic = G__141588__delegate;
return G__141588;
})()
:coding_challenges.solar_system_3d_texture.views.draw));
});
goog.exportSymbol('coding_challenges.solar_system_3d_texture.views.solar_system_3d_texture_sketch', coding_challenges.solar_system_3d_texture.views.solar_system_3d_texture_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.solar_system_3d_texture.views.solar_system_3d_texture_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system-3d-texture"], null));
}
coding_challenges.solar_system_3d_texture.views.view = (function coding_challenges$solar_system_3d_texture$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Solar system 3D texture demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#solar-system-3d-texture","canvas#solar-system-3d-texture",448203283),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.solar_system_3d_texture.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.solar_system_3d_texture.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.solar_system_3d_texture.views.solar_system_3d_texture_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484099823935
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('coding_challenges.menger_sponge_fractal.box');
coding_challenges.menger_sponge_fractal.views.w = (400);
coding_challenges.menger_sponge_fractal.views.h = (400);
coding_challenges.menger_sponge_fractal.views.setup = (function coding_challenges$menger_sponge_fractal$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.box.make.call(null,(0),(0),(0),(200))], null)], null);
});
coding_challenges.menger_sponge_fractal.views.rotate = (function coding_challenges$menger_sponge_fractal$views$rotate(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache35285;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35286 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache35285 = info35286;

return info35286;
})():info__12233__auto__);
var precompiled35287 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35287.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35287;
}
})(),cljs.core.partial.call(null,cljs.core._PLUS_,0.01),sketch);
});
coding_challenges.menger_sponge_fractal.views.update_STAR_ = (function coding_challenges$menger_sponge_fractal$views$update_STAR_(sketch){
return coding_challenges.menger_sponge_fractal.views.rotate.call(null,sketch);
});
coding_challenges.menger_sponge_fractal.views.draw = (function coding_challenges$menger_sponge_fractal$views$draw(sketch){
quil.core.background.call(null,(51));

quil.core.lights.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

quil.core.rotate_x.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch));

quil.core.rotate_y.call(null,(0.4 * new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch)));

quil.core.rotate_z.call(null,(0.1 * new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(sketch)));

var seq__35292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sponge","sponge",-1746197022).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__35293 = null;
var count__35294 = (0);
var i__35295 = (0);
while(true){
if((i__35295 < count__35294)){
var b = cljs.core._nth.call(null,chunk__35293,i__35295);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__35296 = seq__35292;
var G__35297 = chunk__35293;
var G__35298 = count__35294;
var G__35299 = (i__35295 + (1));
seq__35292 = G__35296;
chunk__35293 = G__35297;
count__35294 = G__35298;
i__35295 = G__35299;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35292);
if(temp__4657__auto__){
var seq__35292__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35292__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35292__$1);
var G__35300 = cljs.core.chunk_rest.call(null,seq__35292__$1);
var G__35301 = c__7220__auto__;
var G__35302 = cljs.core.count.call(null,c__7220__auto__);
var G__35303 = (0);
seq__35292 = G__35300;
chunk__35293 = G__35301;
count__35294 = G__35302;
i__35295 = G__35303;
continue;
} else {
var b = cljs.core.first.call(null,seq__35292__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__35304 = cljs.core.next.call(null,seq__35292__$1);
var G__35305 = null;
var G__35306 = (0);
var G__35307 = (0);
seq__35292 = G__35304;
chunk__35293 = G__35305;
count__35294 = G__35306;
i__35295 = G__35307;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache35311;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35312 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache35311 = info35312;

return info35312;
})():info__12233__auto__);
var precompiled35313 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35313.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35313;
}
})(),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate),sketch);
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__35314__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__35314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35315__i = 0, G__35315__a = new Array(arguments.length -  0);
while (G__35315__i < G__35315__a.length) {G__35315__a[G__35315__i] = arguments[G__35315__i + 0]; ++G__35315__i;}
  args = new cljs.core.IndexedSeq(G__35315__a,0);
} 
return G__35314__delegate.call(this,args);};
G__35314.cljs$lang$maxFixedArity = 0;
G__35314.cljs$lang$applyTo = (function (arglist__35316){
var args = cljs.core.seq(arglist__35316);
return G__35314__delegate(args);
});
G__35314.cljs$core$IFn$_invoke$arity$variadic = G__35314__delegate;
return G__35314;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__35317__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__35317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35318__i = 0, G__35318__a = new Array(arguments.length -  0);
while (G__35318__i < G__35318__a.length) {G__35318__a[G__35318__i] = arguments[G__35318__i + 0]; ++G__35318__i;}
  args = new cljs.core.IndexedSeq(G__35318__a,0);
} 
return G__35317__delegate.call(this,args);};
G__35317.cljs$lang$maxFixedArity = 0;
G__35317.cljs$lang$applyTo = (function (arglist__35319){
var args = cljs.core.seq(arglist__35319);
return G__35317__delegate(args);
});
G__35317.cljs$core$IFn$_invoke$arity$variadic = G__35317__delegate;
return G__35317;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__35320__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__35320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35321__i = 0, G__35321__a = new Array(arguments.length -  0);
while (G__35321__i < G__35321__a.length) {G__35321__a[G__35321__i] = arguments[G__35321__i + 0]; ++G__35321__i;}
  args = new cljs.core.IndexedSeq(G__35321__a,0);
} 
return G__35320__delegate.call(this,args);};
G__35320.cljs$lang$maxFixedArity = 0;
G__35320.cljs$lang$applyTo = (function (arglist__35322){
var args = cljs.core.seq(arglist__35322);
return G__35320__delegate(args);
});
G__35320.cljs$core$IFn$_invoke$arity$variadic = G__35320__delegate;
return G__35320;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__35323__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__35323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35324__i = 0, G__35324__a = new Array(arguments.length -  0);
while (G__35324__i < G__35324__a.length) {G__35324__a[G__35324__i] = arguments[G__35324__i + 0]; ++G__35324__i;}
  args = new cljs.core.IndexedSeq(G__35324__a,0);
} 
return G__35323__delegate.call(this,args);};
G__35323.cljs$lang$maxFixedArity = 0;
G__35323.cljs$lang$applyTo = (function (arglist__35325){
var args = cljs.core.seq(arglist__35325);
return G__35323__delegate(args);
});
G__35323.cljs$core$IFn$_invoke$arity$variadic = G__35323__delegate;
return G__35323;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Menger sponge fractal demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#menger-sponge-fractal","canvas#menger-sponge-fractal",-1655139916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.menger_sponge_fractal.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.menger_sponge_fractal.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484115256615
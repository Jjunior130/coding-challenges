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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache62158;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62159 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache62158 = info62159;

return info62159;
})():info__30860__auto__);
var precompiled62160 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62160.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled62160;
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

var seq__62165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sponge","sponge",-1746197022).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__62166 = null;
var count__62167 = (0);
var i__62168 = (0);
while(true){
if((i__62168 < count__62167)){
var b = cljs.core._nth.call(null,chunk__62166,i__62168);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__62169 = seq__62165;
var G__62170 = chunk__62166;
var G__62171 = count__62167;
var G__62172 = (i__62168 + (1));
seq__62165 = G__62169;
chunk__62166 = G__62170;
count__62167 = G__62171;
i__62168 = G__62172;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62165);
if(temp__4657__auto__){
var seq__62165__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62165__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__62165__$1);
var G__62173 = cljs.core.chunk_rest.call(null,seq__62165__$1);
var G__62174 = c__25857__auto__;
var G__62175 = cljs.core.count.call(null,c__25857__auto__);
var G__62176 = (0);
seq__62165 = G__62173;
chunk__62166 = G__62174;
count__62167 = G__62175;
i__62168 = G__62176;
continue;
} else {
var b = cljs.core.first.call(null,seq__62165__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__62177 = cljs.core.next.call(null,seq__62165__$1);
var G__62178 = null;
var G__62179 = (0);
var G__62180 = (0);
seq__62165 = G__62177;
chunk__62166 = G__62178;
count__62167 = G__62179;
i__62168 = G__62180;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache62184;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62185 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache62184 = info62185;

return info62185;
})():info__30860__auto__);
var precompiled62186 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62186.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled62186;
}
})(),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate),sketch);
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__62187__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__62187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62188__i = 0, G__62188__a = new Array(arguments.length -  0);
while (G__62188__i < G__62188__a.length) {G__62188__a[G__62188__i] = arguments[G__62188__i + 0]; ++G__62188__i;}
  args = new cljs.core.IndexedSeq(G__62188__a,0);
} 
return G__62187__delegate.call(this,args);};
G__62187.cljs$lang$maxFixedArity = 0;
G__62187.cljs$lang$applyTo = (function (arglist__62189){
var args = cljs.core.seq(arglist__62189);
return G__62187__delegate(args);
});
G__62187.cljs$core$IFn$_invoke$arity$variadic = G__62187__delegate;
return G__62187;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__62190__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__62190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62191__i = 0, G__62191__a = new Array(arguments.length -  0);
while (G__62191__i < G__62191__a.length) {G__62191__a[G__62191__i] = arguments[G__62191__i + 0]; ++G__62191__i;}
  args = new cljs.core.IndexedSeq(G__62191__a,0);
} 
return G__62190__delegate.call(this,args);};
G__62190.cljs$lang$maxFixedArity = 0;
G__62190.cljs$lang$applyTo = (function (arglist__62192){
var args = cljs.core.seq(arglist__62192);
return G__62190__delegate(args);
});
G__62190.cljs$core$IFn$_invoke$arity$variadic = G__62190__delegate;
return G__62190;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__62193__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__62193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62194__i = 0, G__62194__a = new Array(arguments.length -  0);
while (G__62194__i < G__62194__a.length) {G__62194__a[G__62194__i] = arguments[G__62194__i + 0]; ++G__62194__i;}
  args = new cljs.core.IndexedSeq(G__62194__a,0);
} 
return G__62193__delegate.call(this,args);};
G__62193.cljs$lang$maxFixedArity = 0;
G__62193.cljs$lang$applyTo = (function (arglist__62195){
var args = cljs.core.seq(arglist__62195);
return G__62193__delegate(args);
});
G__62193.cljs$core$IFn$_invoke$arity$variadic = G__62193__delegate;
return G__62193;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__62196__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__62196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62197__i = 0, G__62197__a = new Array(arguments.length -  0);
while (G__62197__i < G__62197__a.length) {G__62197__a[G__62197__i] = arguments[G__62197__i + 0]; ++G__62197__i;}
  args = new cljs.core.IndexedSeq(G__62197__a,0);
} 
return G__62196__delegate.call(this,args);};
G__62196.cljs$lang$maxFixedArity = 0;
G__62196.cljs$lang$applyTo = (function (arglist__62198){
var args = cljs.core.seq(arglist__62198);
return G__62196__delegate(args);
});
G__62196.cljs$core$IFn$_invoke$arity$variadic = G__62196__delegate;
return G__62196;
})()
:coding_challenges.menger_sponge_fractal.views.draw));
});
goog.exportSymbol('coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch', coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"menger-sponge-fractal"], null));
}
coding_challenges.menger_sponge_fractal.views.view = (function coding_challenges$menger_sponge_fractal$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Menger sponge fractal demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#menger-sponge-fractal","canvas#menger-sponge-fractal",-1655139916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.menger_sponge_fractal.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.menger_sponge_fractal.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484333403238
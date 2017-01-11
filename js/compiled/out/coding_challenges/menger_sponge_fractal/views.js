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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache141681;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141682 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache141681 = info141682;

return info141682;
})():info__30860__auto__);
var precompiled141683 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141683.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141683;
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

var seq__141688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sponge","sponge",-1746197022).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__141689 = null;
var count__141690 = (0);
var i__141691 = (0);
while(true){
if((i__141691 < count__141690)){
var b = cljs.core._nth.call(null,chunk__141689,i__141691);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__141692 = seq__141688;
var G__141693 = chunk__141689;
var G__141694 = count__141690;
var G__141695 = (i__141691 + (1));
seq__141688 = G__141692;
chunk__141689 = G__141693;
count__141690 = G__141694;
i__141691 = G__141695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__141688);
if(temp__4657__auto__){
var seq__141688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141688__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__141688__$1);
var G__141696 = cljs.core.chunk_rest.call(null,seq__141688__$1);
var G__141697 = c__25857__auto__;
var G__141698 = cljs.core.count.call(null,c__25857__auto__);
var G__141699 = (0);
seq__141688 = G__141696;
chunk__141689 = G__141697;
count__141690 = G__141698;
i__141691 = G__141699;
continue;
} else {
var b = cljs.core.first.call(null,seq__141688__$1);
coding_challenges.menger_sponge_fractal.box.draw.call(null,b);

var G__141700 = cljs.core.next.call(null,seq__141688__$1);
var G__141701 = null;
var G__141702 = (0);
var G__141703 = (0);
seq__141688 = G__141700;
chunk__141689 = G__141701;
count__141690 = G__141702;
i__141691 = G__141703;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.menger_sponge_fractal.views.pathcache141707;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141708 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sponge","sponge",-1746197022)], null),"coding-challenges.menger-sponge-fractal.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.menger_sponge_fractal.views.pathcache141707 = info141708;

return info141708;
})():info__30860__auto__);
var precompiled141709 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141709.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141709;
}
})(),cljs.core.partial.call(null,cljs.core.mapcat,coding_challenges.menger_sponge_fractal.box.generate),sketch);
});
coding_challenges.menger_sponge_fractal.views.menger_sponge_fractal_sketch = (function coding_challenges$menger_sponge_fractal$views$menger_sponge_fractal_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked))?(function() { 
var G__141710__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.mouse_clicked,args);
};
var G__141710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141711__i = 0, G__141711__a = new Array(arguments.length -  0);
while (G__141711__i < G__141711__a.length) {G__141711__a[G__141711__i] = arguments[G__141711__i + 0]; ++G__141711__i;}
  args = new cljs.core.IndexedSeq(G__141711__a,0);
} 
return G__141710__delegate.call(this,args);};
G__141710.cljs$lang$maxFixedArity = 0;
G__141710.cljs$lang$applyTo = (function (arglist__141712){
var args = cljs.core.seq(arglist__141712);
return G__141710__delegate(args);
});
G__141710.cljs$core$IFn$_invoke$arity$variadic = G__141710__delegate;
return G__141710;
})()
:coding_challenges.menger_sponge_fractal.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_))?(function() { 
var G__141713__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.update_STAR_,args);
};
var G__141713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141714__i = 0, G__141714__a = new Array(arguments.length -  0);
while (G__141714__i < G__141714__a.length) {G__141714__a[G__141714__i] = arguments[G__141714__i + 0]; ++G__141714__i;}
  args = new cljs.core.IndexedSeq(G__141714__a,0);
} 
return G__141713__delegate.call(this,args);};
G__141713.cljs$lang$maxFixedArity = 0;
G__141713.cljs$lang$applyTo = (function (arglist__141715){
var args = cljs.core.seq(arglist__141715);
return G__141713__delegate(args);
});
G__141713.cljs$core$IFn$_invoke$arity$variadic = G__141713__delegate;
return G__141713;
})()
:coding_challenges.menger_sponge_fractal.views.update_STAR_),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.menger_sponge_fractal.views.w,coding_challenges.menger_sponge_fractal.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.setup))?(function() { 
var G__141716__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.setup,args);
};
var G__141716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141717__i = 0, G__141717__a = new Array(arguments.length -  0);
while (G__141717__i < G__141717__a.length) {G__141717__a[G__141717__i] = arguments[G__141717__i + 0]; ++G__141717__i;}
  args = new cljs.core.IndexedSeq(G__141717__a,0);
} 
return G__141716__delegate.call(this,args);};
G__141716.cljs$lang$maxFixedArity = 0;
G__141716.cljs$lang$applyTo = (function (arglist__141718){
var args = cljs.core.seq(arglist__141718);
return G__141716__delegate(args);
});
G__141716.cljs$core$IFn$_invoke$arity$variadic = G__141716__delegate;
return G__141716;
})()
:coding_challenges.menger_sponge_fractal.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"menger-sponge-fractal",new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.menger_sponge_fractal.views.draw))?(function() { 
var G__141719__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.menger_sponge_fractal.views.draw,args);
};
var G__141719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141720__i = 0, G__141720__a = new Array(arguments.length -  0);
while (G__141720__i < G__141720__a.length) {G__141720__a[G__141720__i] = arguments[G__141720__i + 0]; ++G__141720__i;}
  args = new cljs.core.IndexedSeq(G__141720__a,0);
} 
return G__141719__delegate.call(this,args);};
G__141719.cljs$lang$maxFixedArity = 0;
G__141719.cljs$lang$applyTo = (function (arglist__141721){
var args = cljs.core.seq(arglist__141721);
return G__141719__delegate(args);
});
G__141719.cljs$core$IFn$_invoke$arity$variadic = G__141719__delegate;
return G__141719;
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

//# sourceMappingURL=views.js.map?rel=1484099824238
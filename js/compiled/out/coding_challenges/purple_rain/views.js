// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.purple_rain.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('coding_challenges.purple_rain.drop');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('quil.middleware');
coding_challenges.purple_rain.views.w = (640);
coding_challenges.purple_rain.views.h = (360);
coding_challenges.purple_rain.views.setup = (function coding_challenges$purple_rain$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drops","drops",-1558072608),cljs.core.repeatedly.call(null,(500),coding_challenges.purple_rain.drop.make)], null);
});
coding_challenges.purple_rain.views.update_STAR_ = (function coding_challenges$purple_rain$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.purple_rain.views.pathcache141267;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141268 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.purple-rain.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.purple_rain.views.pathcache141267 = info141268;

return info141268;
})():info__30860__auto__);
var precompiled141269 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141269.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141269;
}
})(),coding_challenges.purple_rain.drop.update_STAR_,sketch);
});
coding_challenges.purple_rain.views.draw = (function coding_challenges$purple_rain$views$draw(sketch){
quil.core.background.call(null,(230),(230),(250));

var seq__141274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"drops","drops",-1558072608).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__141275 = null;
var count__141276 = (0);
var i__141277 = (0);
while(true){
if((i__141277 < count__141276)){
var d = cljs.core._nth.call(null,chunk__141275,i__141277);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__141278 = seq__141274;
var G__141279 = chunk__141275;
var G__141280 = count__141276;
var G__141281 = (i__141277 + (1));
seq__141274 = G__141278;
chunk__141275 = G__141279;
count__141276 = G__141280;
i__141277 = G__141281;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__141274);
if(temp__4657__auto__){
var seq__141274__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141274__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__141274__$1);
var G__141282 = cljs.core.chunk_rest.call(null,seq__141274__$1);
var G__141283 = c__25857__auto__;
var G__141284 = cljs.core.count.call(null,c__25857__auto__);
var G__141285 = (0);
seq__141274 = G__141282;
chunk__141275 = G__141283;
count__141276 = G__141284;
i__141277 = G__141285;
continue;
} else {
var d = cljs.core.first.call(null,seq__141274__$1);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__141286 = cljs.core.next.call(null,seq__141274__$1);
var G__141287 = null;
var G__141288 = (0);
var G__141289 = (0);
seq__141274 = G__141286;
chunk__141275 = G__141287;
count__141276 = G__141288;
i__141277 = G__141289;
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
var G__141290__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.update_STAR_,args);
};
var G__141290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141291__i = 0, G__141291__a = new Array(arguments.length -  0);
while (G__141291__i < G__141291__a.length) {G__141291__a[G__141291__i] = arguments[G__141291__i + 0]; ++G__141291__i;}
  args = new cljs.core.IndexedSeq(G__141291__a,0);
} 
return G__141290__delegate.call(this,args);};
G__141290.cljs$lang$maxFixedArity = 0;
G__141290.cljs$lang$applyTo = (function (arglist__141292){
var args = cljs.core.seq(arglist__141292);
return G__141290__delegate(args);
});
G__141290.cljs$core$IFn$_invoke$arity$variadic = G__141290__delegate;
return G__141290;
})()
:coding_challenges.purple_rain.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.purple_rain.views.w,coding_challenges.purple_rain.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.setup))?(function() { 
var G__141293__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.setup,args);
};
var G__141293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141294__i = 0, G__141294__a = new Array(arguments.length -  0);
while (G__141294__i < G__141294__a.length) {G__141294__a[G__141294__i] = arguments[G__141294__i + 0]; ++G__141294__i;}
  args = new cljs.core.IndexedSeq(G__141294__a,0);
} 
return G__141293__delegate.call(this,args);};
G__141293.cljs$lang$maxFixedArity = 0;
G__141293.cljs$lang$applyTo = (function (arglist__141295){
var args = cljs.core.seq(arglist__141295);
return G__141293__delegate(args);
});
G__141293.cljs$core$IFn$_invoke$arity$variadic = G__141293__delegate;
return G__141293;
})()
:coding_challenges.purple_rain.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.draw))?(function() { 
var G__141296__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.draw,args);
};
var G__141296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141297__i = 0, G__141297__a = new Array(arguments.length -  0);
while (G__141297__i < G__141297__a.length) {G__141297__a[G__141297__i] = arguments[G__141297__i + 0]; ++G__141297__i;}
  args = new cljs.core.IndexedSeq(G__141297__a,0);
} 
return G__141296__delegate.call(this,args);};
G__141296.cljs$lang$maxFixedArity = 0;
G__141296.cljs$lang$applyTo = (function (arglist__141298){
var args = cljs.core.seq(arglist__141298);
return G__141296__delegate(args);
});
G__141296.cljs$core$IFn$_invoke$arity$variadic = G__141296__delegate;
return G__141296;
})()
:coding_challenges.purple_rain.views.draw));
});
goog.exportSymbol('coding_challenges.purple_rain.views.purple_rain_sketch', coding_challenges.purple_rain.views.purple_rain_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.purple_rain.views.purple_rain_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"purple-rain"], null));
}
coding_challenges.purple_rain.views.view = (function coding_challenges$purple_rain$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Purple rain demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#purple-rain","canvas#purple-rain",-1404009718),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.purple_rain.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.purple_rain.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.purple_rain.views.purple_rain_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484099823450
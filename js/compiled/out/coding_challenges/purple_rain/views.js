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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.purple_rain.views.pathcache34976;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34977 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.purple-rain.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.purple_rain.views.pathcache34976 = info34977;

return info34977;
})():info__12233__auto__);
var precompiled34978 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34978.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled34978;
}
})(),coding_challenges.purple_rain.drop.update_STAR_,sketch);
});
coding_challenges.purple_rain.views.draw = (function coding_challenges$purple_rain$views$draw(sketch){
quil.core.background.call(null,(230),(230),(250));

var seq__34983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"drops","drops",-1558072608).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__34984 = null;
var count__34985 = (0);
var i__34986 = (0);
while(true){
if((i__34986 < count__34985)){
var d = cljs.core._nth.call(null,chunk__34984,i__34986);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__34987 = seq__34983;
var G__34988 = chunk__34984;
var G__34989 = count__34985;
var G__34990 = (i__34986 + (1));
seq__34983 = G__34987;
chunk__34984 = G__34988;
count__34985 = G__34989;
i__34986 = G__34990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34983);
if(temp__4657__auto__){
var seq__34983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34983__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34983__$1);
var G__34991 = cljs.core.chunk_rest.call(null,seq__34983__$1);
var G__34992 = c__7220__auto__;
var G__34993 = cljs.core.count.call(null,c__7220__auto__);
var G__34994 = (0);
seq__34983 = G__34991;
chunk__34984 = G__34992;
count__34985 = G__34993;
i__34986 = G__34994;
continue;
} else {
var d = cljs.core.first.call(null,seq__34983__$1);
coding_challenges.purple_rain.drop.draw.call(null,d);

var G__34995 = cljs.core.next.call(null,seq__34983__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34983 = G__34995;
chunk__34984 = G__34996;
count__34985 = G__34997;
i__34986 = G__34998;
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
var G__34999__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.update_STAR_,args);
};
var G__34999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35000__i = 0, G__35000__a = new Array(arguments.length -  0);
while (G__35000__i < G__35000__a.length) {G__35000__a[G__35000__i] = arguments[G__35000__i + 0]; ++G__35000__i;}
  args = new cljs.core.IndexedSeq(G__35000__a,0);
} 
return G__34999__delegate.call(this,args);};
G__34999.cljs$lang$maxFixedArity = 0;
G__34999.cljs$lang$applyTo = (function (arglist__35001){
var args = cljs.core.seq(arglist__35001);
return G__34999__delegate(args);
});
G__34999.cljs$core$IFn$_invoke$arity$variadic = G__34999__delegate;
return G__34999;
})()
:coding_challenges.purple_rain.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.purple_rain.views.w,coding_challenges.purple_rain.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.setup))?(function() { 
var G__35002__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.setup,args);
};
var G__35002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35003__i = 0, G__35003__a = new Array(arguments.length -  0);
while (G__35003__i < G__35003__a.length) {G__35003__a[G__35003__i] = arguments[G__35003__i + 0]; ++G__35003__i;}
  args = new cljs.core.IndexedSeq(G__35003__a,0);
} 
return G__35002__delegate.call(this,args);};
G__35002.cljs$lang$maxFixedArity = 0;
G__35002.cljs$lang$applyTo = (function (arglist__35004){
var args = cljs.core.seq(arglist__35004);
return G__35002__delegate(args);
});
G__35002.cljs$core$IFn$_invoke$arity$variadic = G__35002__delegate;
return G__35002;
})()
:coding_challenges.purple_rain.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.purple_rain.views.draw))?(function() { 
var G__35005__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.purple_rain.views.draw,args);
};
var G__35005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35006__i = 0, G__35006__a = new Array(arguments.length -  0);
while (G__35006__i < G__35006__a.length) {G__35006__a[G__35006__i] = arguments[G__35006__i + 0]; ++G__35006__i;}
  args = new cljs.core.IndexedSeq(G__35006__a,0);
} 
return G__35005__delegate.call(this,args);};
G__35005.cljs$lang$maxFixedArity = 0;
G__35005.cljs$lang$applyTo = (function (arglist__35007){
var args = cljs.core.seq(arglist__35007);
return G__35005__delegate(args);
});
G__35005.cljs$core$IFn$_invoke$arity$variadic = G__35005__delegate;
return G__35005;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Purple rain demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#purple-rain","canvas#purple-rain",-1404009718),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.purple_rain.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.purple_rain.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.purple_rain.views.purple_rain_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484115256021
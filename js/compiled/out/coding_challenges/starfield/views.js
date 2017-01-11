// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('coding_challenges.starfield.star');
goog.require('quil.core');
goog.require('quil.middleware');
coding_challenges.starfield.views.w = (600);
coding_challenges.starfield.views.h = (600);
coding_challenges.starfield.views.setup = (function coding_challenges$starfield$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stars","stars",-556837771),cljs.core.repeatedly.call(null,(800),coding_challenges.starfield.star.make)], null);
});
coding_challenges.starfield.views.update_STAR_ = (function coding_challenges$starfield$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.views.pathcache10771;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10772 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"speed","speed",1257663751))),new cljs.core.Keyword(null,"stars","stars",-556837771),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.starfield.views.pathcache10771 = info10772;

return info10772;
})():info__9403__auto__);
var precompiled10773 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10773.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.ALL], null));
} else {
return precompiled10773;
}
})(),coding_challenges.starfield.star.update_STAR_,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.views.pathcache10774;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10775 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.views.pathcache10774 = info10775;

return info10775;
})():info__9403__auto__);
var precompiled10776 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10776.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled10776;
}
})(),(quil.core.mouse_x.call(null) / (12)),sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(sketch){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__10781 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__10782 = null;
var count__10783 = (0);
var i__10784 = (0);
while(true){
if((i__10784 < count__10783)){
var star = cljs.core._nth.call(null,chunk__10782,i__10784);
coding_challenges.starfield.star.draw.call(null,star);

var G__10785 = seq__10781;
var G__10786 = chunk__10782;
var G__10787 = count__10783;
var G__10788 = (i__10784 + (1));
seq__10781 = G__10785;
chunk__10782 = G__10786;
count__10783 = G__10787;
i__10784 = G__10788;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10781);
if(temp__4657__auto__){
var seq__10781__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10781__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__10781__$1);
var G__10789 = cljs.core.chunk_rest.call(null,seq__10781__$1);
var G__10790 = c__7220__auto__;
var G__10791 = cljs.core.count.call(null,c__7220__auto__);
var G__10792 = (0);
seq__10781 = G__10789;
chunk__10782 = G__10790;
count__10783 = G__10791;
i__10784 = G__10792;
continue;
} else {
var star = cljs.core.first.call(null,seq__10781__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__10793 = cljs.core.next.call(null,seq__10781__$1);
var G__10794 = null;
var G__10795 = (0);
var G__10796 = (0);
seq__10781 = G__10793;
chunk__10782 = G__10794;
count__10783 = G__10795;
i__10784 = G__10796;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.starfield.views.starfield_sketch = (function coding_challenges$starfield$views$starfield_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"starfield",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.update_STAR_))?(function() { 
var G__10797__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__10797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10798__i = 0, G__10798__a = new Array(arguments.length -  0);
while (G__10798__i < G__10798__a.length) {G__10798__a[G__10798__i] = arguments[G__10798__i + 0]; ++G__10798__i;}
  args = new cljs.core.IndexedSeq(G__10798__a,0);
} 
return G__10797__delegate.call(this,args);};
G__10797.cljs$lang$maxFixedArity = 0;
G__10797.cljs$lang$applyTo = (function (arglist__10799){
var args = cljs.core.seq(arglist__10799);
return G__10797__delegate(args);
});
G__10797.cljs$core$IFn$_invoke$arity$variadic = G__10797__delegate;
return G__10797;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__10800__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__10800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10801__i = 0, G__10801__a = new Array(arguments.length -  0);
while (G__10801__i < G__10801__a.length) {G__10801__a[G__10801__i] = arguments[G__10801__i + 0]; ++G__10801__i;}
  args = new cljs.core.IndexedSeq(G__10801__a,0);
} 
return G__10800__delegate.call(this,args);};
G__10800.cljs$lang$maxFixedArity = 0;
G__10800.cljs$lang$applyTo = (function (arglist__10802){
var args = cljs.core.seq(arglist__10802);
return G__10800__delegate(args);
});
G__10800.cljs$core$IFn$_invoke$arity$variadic = G__10800__delegate;
return G__10800;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__10803__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__10803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10804__i = 0, G__10804__a = new Array(arguments.length -  0);
while (G__10804__i < G__10804__a.length) {G__10804__a[G__10804__i] = arguments[G__10804__i + 0]; ++G__10804__i;}
  args = new cljs.core.IndexedSeq(G__10804__a,0);
} 
return G__10803__delegate.call(this,args);};
G__10803.cljs$lang$maxFixedArity = 0;
G__10803.cljs$lang$applyTo = (function (arglist__10805){
var args = cljs.core.seq(arglist__10805);
return G__10803__delegate(args);
});
G__10803.cljs$core$IFn$_invoke$arity$variadic = G__10803__delegate;
return G__10803;
})()
:coding_challenges.starfield.views.draw));
});
goog.exportSymbol('coding_challenges.starfield.views.starfield_sketch', coding_challenges.starfield.views.starfield_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9992__9993__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__9992__9993__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.starfield.views.starfield_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"starfield"], null));
}
coding_challenges.starfield.views.view = (function coding_challenges$starfield$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Starfield",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#starfield","canvas#starfield",140287124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.starfield.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.starfield.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.starfield.views.starfield_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484109691550
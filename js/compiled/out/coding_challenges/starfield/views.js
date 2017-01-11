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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.views.pathcache34936;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34937 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"speed","speed",1257663751))),new cljs.core.Keyword(null,"stars","stars",-556837771),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.starfield.views.pathcache34936 = info34937;

return info34937;
})():info__12233__auto__);
var precompiled34938 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34938.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.ALL], null));
} else {
return precompiled34938;
}
})(),coding_challenges.starfield.star.update_STAR_,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.views.pathcache34939;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34940 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed","speed",1257663751)], null),"coding-challenges.starfield.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.views.pathcache34939 = info34940;

return info34940;
})():info__12233__auto__);
var precompiled34941 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34941.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34941;
}
})(),(quil.core.mouse_x.call(null) / (12)),sketch));
});
coding_challenges.starfield.views.draw = (function coding_challenges$starfield$views$draw(sketch){
quil.core.background.call(null,(0));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__34946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__34947 = null;
var count__34948 = (0);
var i__34949 = (0);
while(true){
if((i__34949 < count__34948)){
var star = cljs.core._nth.call(null,chunk__34947,i__34949);
coding_challenges.starfield.star.draw.call(null,star);

var G__34950 = seq__34946;
var G__34951 = chunk__34947;
var G__34952 = count__34948;
var G__34953 = (i__34949 + (1));
seq__34946 = G__34950;
chunk__34947 = G__34951;
count__34948 = G__34952;
i__34949 = G__34953;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34946);
if(temp__4657__auto__){
var seq__34946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34946__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34946__$1);
var G__34954 = cljs.core.chunk_rest.call(null,seq__34946__$1);
var G__34955 = c__7220__auto__;
var G__34956 = cljs.core.count.call(null,c__7220__auto__);
var G__34957 = (0);
seq__34946 = G__34954;
chunk__34947 = G__34955;
count__34948 = G__34956;
i__34949 = G__34957;
continue;
} else {
var star = cljs.core.first.call(null,seq__34946__$1);
coding_challenges.starfield.star.draw.call(null,star);

var G__34958 = cljs.core.next.call(null,seq__34946__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34946 = G__34958;
chunk__34947 = G__34959;
count__34948 = G__34960;
i__34949 = G__34961;
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
var G__34962__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.update_STAR_,args);
};
var G__34962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34963__i = 0, G__34963__a = new Array(arguments.length -  0);
while (G__34963__i < G__34963__a.length) {G__34963__a[G__34963__i] = arguments[G__34963__i + 0]; ++G__34963__i;}
  args = new cljs.core.IndexedSeq(G__34963__a,0);
} 
return G__34962__delegate.call(this,args);};
G__34962.cljs$lang$maxFixedArity = 0;
G__34962.cljs$lang$applyTo = (function (arglist__34964){
var args = cljs.core.seq(arglist__34964);
return G__34962__delegate(args);
});
G__34962.cljs$core$IFn$_invoke$arity$variadic = G__34962__delegate;
return G__34962;
})()
:coding_challenges.starfield.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.starfield.views.w,coding_challenges.starfield.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.setup))?(function() { 
var G__34965__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.setup,args);
};
var G__34965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34966__i = 0, G__34966__a = new Array(arguments.length -  0);
while (G__34966__i < G__34966__a.length) {G__34966__a[G__34966__i] = arguments[G__34966__i + 0]; ++G__34966__i;}
  args = new cljs.core.IndexedSeq(G__34966__a,0);
} 
return G__34965__delegate.call(this,args);};
G__34965.cljs$lang$maxFixedArity = 0;
G__34965.cljs$lang$applyTo = (function (arglist__34967){
var args = cljs.core.seq(arglist__34967);
return G__34965__delegate(args);
});
G__34965.cljs$core$IFn$_invoke$arity$variadic = G__34965__delegate;
return G__34965;
})()
:coding_challenges.starfield.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.starfield.views.draw))?(function() { 
var G__34968__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.starfield.views.draw,args);
};
var G__34968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34969__i = 0, G__34969__a = new Array(arguments.length -  0);
while (G__34969__i < G__34969__a.length) {G__34969__a[G__34969__i] = arguments[G__34969__i + 0]; ++G__34969__i;}
  args = new cljs.core.IndexedSeq(G__34969__a,0);
} 
return G__34968__delegate.call(this,args);};
G__34968.cljs$lang$maxFixedArity = 0;
G__34968.cljs$lang$applyTo = (function (arglist__34970){
var args = cljs.core.seq(arglist__34970);
return G__34968__delegate(args);
});
G__34968.cljs$core$IFn$_invoke$arity$variadic = G__34968__delegate;
return G__34968;
})()
:coding_challenges.starfield.views.draw));
});
goog.exportSymbol('coding_challenges.starfield.views.starfield_sketch', coding_challenges.starfield.views.starfield_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.starfield.views.starfield_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"starfield"], null));
}
coding_challenges.starfield.views.view = (function coding_challenges$starfield$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Starfield",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#starfield","canvas#starfield",140287124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.starfield.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.starfield.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.starfield.views.starfield_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484163016987
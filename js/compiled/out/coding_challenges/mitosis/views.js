// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('coding_challenges.mitosis.cell');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('quil.middleware');
coding_challenges.mitosis.views.w = (700);
coding_challenges.mitosis.views.h = (700);
coding_challenges.mitosis.views.setup = (function coding_challenges$mitosis$views$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.repeatedly.call(null,(2),coding_challenges.mitosis.cell.make)], null);
});
coding_challenges.mitosis.views.update_STAR_ = (function coding_challenges$mitosis$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.views.pathcache34782;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34783 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.mitosis.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.mitosis.views.pathcache34782 = info34783;

return info34783;
})():info__12233__auto__);
var precompiled34784 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34784.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled34784;
}
})(),coding_challenges.mitosis.cell.update_STAR_,sketch);
});
coding_challenges.mitosis.views.draw = (function coding_challenges$mitosis$views$draw(p__34785){
var map__34792 = p__34785;
var map__34792__$1 = ((((!((map__34792 == null)))?((((map__34792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34792):map__34792);
var sketch = map__34792__$1;
var cells = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
quil.core.background.call(null,(200));

var seq__34794 = cljs.core.seq.call(null,cells);
var chunk__34795 = null;
var count__34796 = (0);
var i__34797 = (0);
while(true){
if((i__34797 < count__34796)){
var cell = cljs.core._nth.call(null,chunk__34795,i__34797);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34798 = seq__34794;
var G__34799 = chunk__34795;
var G__34800 = count__34796;
var G__34801 = (i__34797 + (1));
seq__34794 = G__34798;
chunk__34795 = G__34799;
count__34796 = G__34800;
i__34797 = G__34801;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34794);
if(temp__4657__auto__){
var seq__34794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34794__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34794__$1);
var G__34802 = cljs.core.chunk_rest.call(null,seq__34794__$1);
var G__34803 = c__7220__auto__;
var G__34804 = cljs.core.count.call(null,c__7220__auto__);
var G__34805 = (0);
seq__34794 = G__34802;
chunk__34795 = G__34803;
count__34796 = G__34804;
i__34797 = G__34805;
continue;
} else {
var cell = cljs.core.first.call(null,seq__34794__$1);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34806 = cljs.core.next.call(null,seq__34794__$1);
var G__34807 = null;
var G__34808 = (0);
var G__34809 = (0);
seq__34794 = G__34806;
chunk__34795 = G__34807;
count__34796 = G__34808;
i__34797 = G__34809;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.mitosis.views.mouse_pressed = (function coding_challenges$mitosis$views$mouse_pressed(sketch,event){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.views.pathcache34816;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34817 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822)], null)], null),"coding-challenges.mitosis.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.mitosis.views.pathcache34816 = info34817;

return info34817;
})():info__12233__auto__);
var precompiled34818 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34818.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34818;
}
})(),cljs.core.flatten,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.views.pathcache34819;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34820 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.partial,new cljs.core.Var(function(){return cljs.core.partial;},new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),"cljs/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(4),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(4078),(4078),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Takes a function f and fewer than the normal arguments to f, and\n  returns a fn that takes a variable number of additional args. When\n  called, the returned function calls f with args + additional args.",(cljs.core.truth_(cljs.core.partial)?cljs.core.partial.cljs$lang$test:null)])),new cljs.core.Symbol(null,"partial","partial",1881673272,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,coding_challenges.mitosis.cell.clicked_QMARK_,new cljs.core.Var(function(){return coding_challenges.mitosis.cell.clicked_QMARK_;},new cljs.core.Symbol("coding-challenges.mitosis.cell","clicked?","coding-challenges.mitosis.cell/clicked?",-889143373,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coding-challenges.mitosis.cell","coding-challenges.mitosis.cell",-1108999067,null),new cljs.core.Symbol(null,"clicked?","clicked?",489862904,null),"D:\\Programming\\Projects\\Clojure\\coding-challenges\\src\\cljs\\coding_challenges\\mitosis\\cell.cljs",15,1,20,20,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"click-pos","click-pos",953721841,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], true, false)], null)),null,(cljs.core.truth_(coding_challenges.mitosis.cell.clicked_QMARK_)?coding_challenges.mitosis.cell.clicked_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,event,new cljs.core.Symbol(null,"event","event",1941966969,null))], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)))], null)], null),"coding-challenges.mitosis.views",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null));
coding_challenges.mitosis.views.pathcache34819 = info34820;

return info34820;
})():info__12233__auto__);
var precompiled34821 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34821.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,cljs.core.partial,coding_challenges.mitosis.cell.clicked_QMARK_,event], null));
} else {
return precompiled34821;
}
})(),coding_challenges.mitosis.cell.mitosis,sketch));
});
coding_challenges.mitosis.views.mitosis_sketch = (function coding_challenges$mitosis$views$mitosis_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mitosis",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.update_STAR_))?(function() { 
var G__34822__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.update_STAR_,args);
};
var G__34822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34823__i = 0, G__34823__a = new Array(arguments.length -  0);
while (G__34823__i < G__34823__a.length) {G__34823__a[G__34823__i] = arguments[G__34823__i + 0]; ++G__34823__i;}
  args = new cljs.core.IndexedSeq(G__34823__a,0);
} 
return G__34822__delegate.call(this,args);};
G__34822.cljs$lang$maxFixedArity = 0;
G__34822.cljs$lang$applyTo = (function (arglist__34824){
var args = cljs.core.seq(arglist__34824);
return G__34822__delegate(args);
});
G__34822.cljs$core$IFn$_invoke$arity$variadic = G__34822__delegate;
return G__34822;
})()
:coding_challenges.mitosis.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.views.w,coding_challenges.mitosis.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.setup))?(function() { 
var G__34825__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.setup,args);
};
var G__34825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34826__i = 0, G__34826__a = new Array(arguments.length -  0);
while (G__34826__i < G__34826__a.length) {G__34826__a[G__34826__i] = arguments[G__34826__i + 0]; ++G__34826__i;}
  args = new cljs.core.IndexedSeq(G__34826__a,0);
} 
return G__34825__delegate.call(this,args);};
G__34825.cljs$lang$maxFixedArity = 0;
G__34825.cljs$lang$applyTo = (function (arglist__34827){
var args = cljs.core.seq(arglist__34827);
return G__34825__delegate(args);
});
G__34825.cljs$core$IFn$_invoke$arity$variadic = G__34825__delegate;
return G__34825;
})()
:coding_challenges.mitosis.views.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.mouse_pressed))?(function() { 
var G__34828__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.mouse_pressed,args);
};
var G__34828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34829__i = 0, G__34829__a = new Array(arguments.length -  0);
while (G__34829__i < G__34829__a.length) {G__34829__a[G__34829__i] = arguments[G__34829__i + 0]; ++G__34829__i;}
  args = new cljs.core.IndexedSeq(G__34829__a,0);
} 
return G__34828__delegate.call(this,args);};
G__34828.cljs$lang$maxFixedArity = 0;
G__34828.cljs$lang$applyTo = (function (arglist__34830){
var args = cljs.core.seq(arglist__34830);
return G__34828__delegate(args);
});
G__34828.cljs$core$IFn$_invoke$arity$variadic = G__34828__delegate;
return G__34828;
})()
:coding_challenges.mitosis.views.mouse_pressed),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.draw))?(function() { 
var G__34831__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.draw,args);
};
var G__34831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34832__i = 0, G__34832__a = new Array(arguments.length -  0);
while (G__34832__i < G__34832__a.length) {G__34832__a[G__34832__i] = arguments[G__34832__i + 0]; ++G__34832__i;}
  args = new cljs.core.IndexedSeq(G__34832__a,0);
} 
return G__34831__delegate.call(this,args);};
G__34831.cljs$lang$maxFixedArity = 0;
G__34831.cljs$lang$applyTo = (function (arglist__34833){
var args = cljs.core.seq(arglist__34833);
return G__34831__delegate(args);
});
G__34831.cljs$core$IFn$_invoke$arity$variadic = G__34831__delegate;
return G__34831;
})()
:coding_challenges.mitosis.views.draw));
});
goog.exportSymbol('coding_challenges.mitosis.views.mitosis_sketch', coding_challenges.mitosis.views.mitosis_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.mitosis.views.mitosis_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mitosis"], null));
}
coding_challenges.mitosis.views.view = (function coding_challenges$mitosis$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Mitosis demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#mitosis","canvas#mitosis",695045055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.mitosis.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.mitosis.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.mitosis.views.mitosis_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484163016739
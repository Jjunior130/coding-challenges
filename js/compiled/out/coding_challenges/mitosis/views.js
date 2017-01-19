// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('coding_challenges.mitosis.cell');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.mitosis.views.w = (700);
coding_challenges.mitosis.views.h = (700);
coding_challenges.mitosis.views.setup = (function coding_challenges$mitosis$views$setup(){
return cljs.core.repeatedly.call(null,(2),coding_challenges.mitosis.cell.make);
});
coding_challenges.mitosis.views.update_STAR_ = (function coding_challenges$mitosis$views$update_STAR_(cells){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.views.pathcache34809;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34810 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.mitosis.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.mitosis.views.pathcache34809 = info34810;

return info34810;
})():info__12233__auto__);
var precompiled34811 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34811.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled34811;
}
})(),coding_challenges.mitosis.cell.update_STAR_,cells);
});
coding_challenges.mitosis.views.draw = (function coding_challenges$mitosis$views$draw(cells){
quil.core.background.call(null,(200));

var seq__34816 = cljs.core.seq.call(null,cells);
var chunk__34817 = null;
var count__34818 = (0);
var i__34819 = (0);
while(true){
if((i__34819 < count__34818)){
var cell = cljs.core._nth.call(null,chunk__34817,i__34819);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34820 = seq__34816;
var G__34821 = chunk__34817;
var G__34822 = count__34818;
var G__34823 = (i__34819 + (1));
seq__34816 = G__34820;
chunk__34817 = G__34821;
count__34818 = G__34822;
i__34819 = G__34823;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34816);
if(temp__4657__auto__){
var seq__34816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34816__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34816__$1);
var G__34824 = cljs.core.chunk_rest.call(null,seq__34816__$1);
var G__34825 = c__7220__auto__;
var G__34826 = cljs.core.count.call(null,c__7220__auto__);
var G__34827 = (0);
seq__34816 = G__34824;
chunk__34817 = G__34825;
count__34818 = G__34826;
i__34819 = G__34827;
continue;
} else {
var cell = cljs.core.first.call(null,seq__34816__$1);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34828 = cljs.core.next.call(null,seq__34816__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34816 = G__34828;
chunk__34817 = G__34829;
count__34818 = G__34830;
i__34819 = G__34831;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.mitosis.views.mouse_pressed = (function coding_challenges$mitosis$views$mouse_pressed(cells,event){
return cljs.core.flatten.call(null,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.views.pathcache34835;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34836 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.partial,new cljs.core.Var(function(){return cljs.core.partial;},new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),"cljs/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(4),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(4078),(4078),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Takes a function f and fewer than the normal arguments to f, and\n  returns a fn that takes a variable number of additional args. When\n  called, the returned function calls f with args + additional args.",(cljs.core.truth_(cljs.core.partial)?cljs.core.partial.cljs$lang$test:null)])),new cljs.core.Symbol(null,"partial","partial",1881673272,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,coding_challenges.mitosis.cell.clicked_QMARK_,new cljs.core.Var(function(){return coding_challenges.mitosis.cell.clicked_QMARK_;},new cljs.core.Symbol("coding-challenges.mitosis.cell","clicked?","coding-challenges.mitosis.cell/clicked?",-889143373,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coding-challenges.mitosis.cell","coding-challenges.mitosis.cell",-1108999067,null),new cljs.core.Symbol(null,"clicked?","clicked?",489862904,null),"D:\\Programming\\Projects\\Clojure\\coding-challenges\\src\\cljs\\coding_challenges\\mitosis\\cell.cljs",15,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"click-pos","click-pos",953721841,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Symbol(null,"cr","cr",621502674,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], true, false)], null)),null,(cljs.core.truth_(coding_challenges.mitosis.cell.clicked_QMARK_)?coding_challenges.mitosis.cell.clicked_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,event,new cljs.core.Symbol(null,"event","event",1941966969,null))], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)))], null)], null),"coding-challenges.mitosis.views",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null));
coding_challenges.mitosis.views.pathcache34835 = info34836;

return info34836;
})():info__12233__auto__);
var precompiled34837 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34837.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,cljs.core.partial,coding_challenges.mitosis.cell.clicked_QMARK_,event], null));
} else {
return precompiled34837;
}
})(),coding_challenges.mitosis.cell.mitosis,cells));
});
coding_challenges.mitosis.views.mitosis_sketch = (function coding_challenges$mitosis$views$mitosis_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mitosis",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.update_STAR_))?(function() { 
var G__34838__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.update_STAR_,args);
};
var G__34838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34839__i = 0, G__34839__a = new Array(arguments.length -  0);
while (G__34839__i < G__34839__a.length) {G__34839__a[G__34839__i] = arguments[G__34839__i + 0]; ++G__34839__i;}
  args = new cljs.core.IndexedSeq(G__34839__a,0);
} 
return G__34838__delegate.call(this,args);};
G__34838.cljs$lang$maxFixedArity = 0;
G__34838.cljs$lang$applyTo = (function (arglist__34840){
var args = cljs.core.seq(arglist__34840);
return G__34838__delegate(args);
});
G__34838.cljs$core$IFn$_invoke$arity$variadic = G__34838__delegate;
return G__34838;
})()
:coding_challenges.mitosis.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.views.w,coding_challenges.mitosis.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.setup))?(function() { 
var G__34841__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.setup,args);
};
var G__34841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34842__i = 0, G__34842__a = new Array(arguments.length -  0);
while (G__34842__i < G__34842__a.length) {G__34842__a[G__34842__i] = arguments[G__34842__i + 0]; ++G__34842__i;}
  args = new cljs.core.IndexedSeq(G__34842__a,0);
} 
return G__34841__delegate.call(this,args);};
G__34841.cljs$lang$maxFixedArity = 0;
G__34841.cljs$lang$applyTo = (function (arglist__34843){
var args = cljs.core.seq(arglist__34843);
return G__34841__delegate(args);
});
G__34841.cljs$core$IFn$_invoke$arity$variadic = G__34841__delegate;
return G__34841;
})()
:coding_challenges.mitosis.views.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.mouse_pressed))?(function() { 
var G__34844__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.mouse_pressed,args);
};
var G__34844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34845__i = 0, G__34845__a = new Array(arguments.length -  0);
while (G__34845__i < G__34845__a.length) {G__34845__a[G__34845__i] = arguments[G__34845__i + 0]; ++G__34845__i;}
  args = new cljs.core.IndexedSeq(G__34845__a,0);
} 
return G__34844__delegate.call(this,args);};
G__34844.cljs$lang$maxFixedArity = 0;
G__34844.cljs$lang$applyTo = (function (arglist__34846){
var args = cljs.core.seq(arglist__34846);
return G__34844__delegate(args);
});
G__34844.cljs$core$IFn$_invoke$arity$variadic = G__34844__delegate;
return G__34844;
})()
:coding_challenges.mitosis.views.mouse_pressed),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.draw))?(function() { 
var G__34847__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.draw,args);
};
var G__34847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34848__i = 0, G__34848__a = new Array(arguments.length -  0);
while (G__34848__i < G__34848__a.length) {G__34848__a[G__34848__i] = arguments[G__34848__i + 0]; ++G__34848__i;}
  args = new cljs.core.IndexedSeq(G__34848__a,0);
} 
return G__34847__delegate.call(this,args);};
G__34847.cljs$lang$maxFixedArity = 0;
G__34847.cljs$lang$applyTo = (function (arglist__34849){
var args = cljs.core.seq(arglist__34849);
return G__34847__delegate(args);
});
G__34847.cljs$core$IFn$_invoke$arity$variadic = G__34847__delegate;
return G__34847;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Mitosis demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#mitosis","canvas#mitosis",695045055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.mitosis.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.mitosis.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"label","label",1718410804),"Cell"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__34850_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__34850_SHARP_], null)], null));

var seq__34856 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__34857 = null;
var count__34858 = (0);
var i__34859 = (0);
while(true){
if((i__34859 < count__34858)){
var x = cljs.core._nth.call(null,chunk__34857,i__34859);
hljs.highlightBlock(x);

var G__34861 = seq__34856;
var G__34862 = chunk__34857;
var G__34863 = count__34858;
var G__34864 = (i__34859 + (1));
seq__34856 = G__34861;
chunk__34857 = G__34862;
count__34858 = G__34863;
i__34859 = G__34864;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34856);
if(temp__4657__auto__){
var seq__34856__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34856__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34856__$1);
var G__34865 = cljs.core.chunk_rest.call(null,seq__34856__$1);
var G__34866 = c__7220__auto__;
var G__34867 = cljs.core.count.call(null,c__7220__auto__);
var G__34868 = (0);
seq__34856 = G__34865;
chunk__34857 = G__34866;
count__34858 = G__34867;
i__34859 = G__34868;
continue;
} else {
var x = cljs.core.first.call(null,seq__34856__$1);
hljs.highlightBlock(x);

var G__34869 = cljs.core.next.call(null,seq__34856__$1);
var G__34870 = null;
var G__34871 = (0);
var G__34872 = (0);
seq__34856 = G__34869;
chunk__34857 = G__34870;
count__34858 = G__34871;
i__34859 = G__34872;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__34860 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__34860) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 700)\n(def h 700)\n\n(defn setup []\n (repeatedly 2 cell/make))\n\n(defn update* [cells]\n (->> cells\n      (transform ALL\n                 cell/update*)))\n\n(defn draw [cells]\n (q/background 200)\n (doseq [cell cells]\n  (cell/draw cell)))\n\n(defn mouse-pressed [cells event]\n (->> cells\n      (transform [ALL (partial cell/clicked? event)]\n                 cell/mitosis)\n      flatten))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/jxGS3fKPKJAvar cells = [];\n\nvar cells = [];\n\nfunction setup() {\n  createCanvas(700, 700);\n  cells.push(new Cell());\n  cells.push(new Cell());\n}\n\nfunction draw() {\n background(200);\n for (var i = 0; i < cells.length; i++) {\n   cells[i].move();\n   cells[i].show();\n }\n}\n\nfunction mousePressed() {\n  for (var i = cells.length-1; i >= 0; i--) {\n    if (cells[i].clicked(mouseX, mouseY)) {\n      cells.push(cells[i].mitosis());\n      cells.push(cells[i].mitosis());\n      cells.splice(i, 1);\n    }\n  }\n}\n"], null)], null)], null)], null);

break;
case "cell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make\n ([]\n  (make {:x (q/random (q/width))\n         :y (q/random (q/height))}\n        60\n        (q/color (q/random 100 255)\n                 0\n                 (q/random 100 255)\n                 100)))\n ([pos r c]\n  {:type 'Cell\n   :pos pos\n   :r r\n   :c c}))\n\n(defn clicked? [{mx :x\n                 my :y\n                 :as click-pos}\n                {{cx :x\n                  cy :y} :pos\n                 cr :r\n                 :as cell}]\n (< (q/dist cx cy mx my)\n    cr))\n\n(defn mitosis [{pos :pos\n                r :r\n                c :c\n                :as cell}]\n [(make pos (* 0.8 r) c)\n  (make pos (* 0.8 r) c)])\n\n(defn move [n cell]\n (let [vel {:x (q/random (- n) n)\n            :y (q/random (- n) n)}]\n  (->> cell\n       (transform :pos\n                  (partial merge-with + vel)))))\n\n(defn update* [cell]\n (move 5 cell))\n\n(defn draw [{{x :x\n              y :y} :pos\n             color :c\n             r :r\n             :as cell}]\n (q/no-stroke)\n (q/fill color)\n (q/ellipse x y\n            r r))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/jxGS3fKPKJA\n\nfunction Cell(pos, r, c) {\n\n  if (pos) {\n    this.pos = pos.copy();\n  } else {\n    this.pos = createVector(random(width), random(height));\n  }\n\n  this.r = r || 60;\n  this.c = c || color(random(100, 255), 0, random(100, 255), 100);\n\n  this.clicked = function(x, y) {\n    var d = dist(this.pos.x, this.pos.y, x, y);\n    if (d < this.r) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.mitosis = function() {\n    //this.pos.x += random(-this.r, this.r);\n    var cell = new Cell(this.pos, this.r*0.8, this.c);\n    return cell;\n  }\n\n  this.move = function() {\n    var vel = p5.Vector.random2D();\n    this.pos.add(vel);\n  }\n\n  this.show = function() {\n    noStroke();\n    fill(this.c);\n    ellipse(this.pos.x, this.pos.y, this.r, this.r)\n  }\n\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.mitosis.views.mitosis_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484780662939
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.mitosis.views.pathcache41280;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info41281 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.mitosis.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.mitosis.views.pathcache41280 = info41281;

return info41281;
})():info__34163__auto__);
var precompiled41282 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled41282.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled41282;
}
})(),coding_challenges.mitosis.cell.update_STAR_,cells);
});
coding_challenges.mitosis.views.draw = (function coding_challenges$mitosis$views$draw(cells){
quil.core.background.call(null,(200));

var seq__41287 = cljs.core.seq.call(null,cells);
var chunk__41288 = null;
var count__41289 = (0);
var i__41290 = (0);
while(true){
if((i__41290 < count__41289)){
var cell = cljs.core._nth.call(null,chunk__41288,i__41290);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__41291 = seq__41287;
var G__41292 = chunk__41288;
var G__41293 = count__41289;
var G__41294 = (i__41290 + (1));
seq__41287 = G__41291;
chunk__41288 = G__41292;
count__41289 = G__41293;
i__41290 = G__41294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41287);
if(temp__4657__auto__){
var seq__41287__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41287__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__41287__$1);
var G__41295 = cljs.core.chunk_rest.call(null,seq__41287__$1);
var G__41296 = c__25857__auto__;
var G__41297 = cljs.core.count.call(null,c__25857__auto__);
var G__41298 = (0);
seq__41287 = G__41295;
chunk__41288 = G__41296;
count__41289 = G__41297;
i__41290 = G__41298;
continue;
} else {
var cell = cljs.core.first.call(null,seq__41287__$1);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__41299 = cljs.core.next.call(null,seq__41287__$1);
var G__41300 = null;
var G__41301 = (0);
var G__41302 = (0);
seq__41287 = G__41299;
chunk__41288 = G__41300;
count__41289 = G__41301;
i__41290 = G__41302;
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
return cljs.core.flatten.call(null,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.mitosis.views.pathcache41306;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info41307 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.partial,new cljs.core.Var(function(){return cljs.core.partial;},new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),"cljs/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(4),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(4078),(4078),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Takes a function f and fewer than the normal arguments to f, and\n  returns a fn that takes a variable number of additional args. When\n  called, the returned function calls f with args + additional args.",(cljs.core.truth_(cljs.core.partial)?cljs.core.partial.cljs$lang$test:null)])),new cljs.core.Symbol(null,"partial","partial",1881673272,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,coding_challenges.mitosis.cell.clicked_QMARK_,new cljs.core.Var(function(){return coding_challenges.mitosis.cell.clicked_QMARK_;},new cljs.core.Symbol("coding-challenges.mitosis.cell","clicked?","coding-challenges.mitosis.cell/clicked?",-889143373,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coding-challenges.mitosis.cell","coding-challenges.mitosis.cell",-1108999067,null),new cljs.core.Symbol(null,"clicked?","clicked?",489862904,null),"D:\\Programming\\Projects\\Clojure\\coding-challenges\\src\\cljs\\coding_challenges\\mitosis\\cell.cljs",(15),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"click-pos","click-pos",953721841,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Symbol(null,"cr","cr",621502674,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], true, false)], null)),null,(cljs.core.truth_(coding_challenges.mitosis.cell.clicked_QMARK_)?coding_challenges.mitosis.cell.clicked_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,event,new cljs.core.Symbol(null,"event","event",1941966969,null))], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)))], null)], null),"coding-challenges.mitosis.views",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol("cell","clicked?","cell/clicked?",490803102,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null));
coding_challenges.mitosis.views.pathcache41306 = info41307;

return info41307;
})():info__34163__auto__);
var precompiled41308 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled41308.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,cljs.core.partial,coding_challenges.mitosis.cell.clicked_QMARK_,event], null));
} else {
return precompiled41308;
}
})(),coding_challenges.mitosis.cell.mitosis,cells));
});
coding_challenges.mitosis.views.mitosis_sketch = (function coding_challenges$mitosis$views$mitosis_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mitosis",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.update_STAR_))?(function() { 
var G__41309__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.update_STAR_,args);
};
var G__41309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41310__i = 0, G__41310__a = new Array(arguments.length -  0);
while (G__41310__i < G__41310__a.length) {G__41310__a[G__41310__i] = arguments[G__41310__i + 0]; ++G__41310__i;}
  args = new cljs.core.IndexedSeq(G__41310__a,0);
} 
return G__41309__delegate.call(this,args);};
G__41309.cljs$lang$maxFixedArity = 0;
G__41309.cljs$lang$applyTo = (function (arglist__41311){
var args = cljs.core.seq(arglist__41311);
return G__41309__delegate(args);
});
G__41309.cljs$core$IFn$_invoke$arity$variadic = G__41309__delegate;
return G__41309;
})()
:coding_challenges.mitosis.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.views.w,coding_challenges.mitosis.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.setup))?(function() { 
var G__41312__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.setup,args);
};
var G__41312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41313__i = 0, G__41313__a = new Array(arguments.length -  0);
while (G__41313__i < G__41313__a.length) {G__41313__a[G__41313__i] = arguments[G__41313__i + 0]; ++G__41313__i;}
  args = new cljs.core.IndexedSeq(G__41313__a,0);
} 
return G__41312__delegate.call(this,args);};
G__41312.cljs$lang$maxFixedArity = 0;
G__41312.cljs$lang$applyTo = (function (arglist__41314){
var args = cljs.core.seq(arglist__41314);
return G__41312__delegate(args);
});
G__41312.cljs$core$IFn$_invoke$arity$variadic = G__41312__delegate;
return G__41312;
})()
:coding_challenges.mitosis.views.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.mouse_pressed))?(function() { 
var G__41315__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.mouse_pressed,args);
};
var G__41315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41316__i = 0, G__41316__a = new Array(arguments.length -  0);
while (G__41316__i < G__41316__a.length) {G__41316__a[G__41316__i] = arguments[G__41316__i + 0]; ++G__41316__i;}
  args = new cljs.core.IndexedSeq(G__41316__a,0);
} 
return G__41315__delegate.call(this,args);};
G__41315.cljs$lang$maxFixedArity = 0;
G__41315.cljs$lang$applyTo = (function (arglist__41317){
var args = cljs.core.seq(arglist__41317);
return G__41315__delegate(args);
});
G__41315.cljs$core$IFn$_invoke$arity$variadic = G__41315__delegate;
return G__41315;
})()
:coding_challenges.mitosis.views.mouse_pressed),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.draw))?(function() { 
var G__41318__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.draw,args);
};
var G__41318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41319__i = 0, G__41319__a = new Array(arguments.length -  0);
while (G__41319__i < G__41319__a.length) {G__41319__a[G__41319__i] = arguments[G__41319__i + 0]; ++G__41319__i;}
  args = new cljs.core.IndexedSeq(G__41319__a,0);
} 
return G__41318__delegate.call(this,args);};
G__41318.cljs$lang$maxFixedArity = 0;
G__41318.cljs$lang$applyTo = (function (arglist__41320){
var args = cljs.core.seq(arglist__41320);
return G__41318__delegate(args);
});
G__41318.cljs$core$IFn$_invoke$arity$variadic = G__41318__delegate;
return G__41318;
})()
:coding_challenges.mitosis.views.draw));
});
goog.exportSymbol('coding_challenges.mitosis.views.mitosis_sketch', coding_challenges.mitosis.views.mitosis_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__34782__34783__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__34782__34783__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.mitosis.views.mitosis_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mitosis"], null));
}
coding_challenges.mitosis.views.view = (function coding_challenges$mitosis$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Mitosis demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#mitosis","canvas#mitosis",695045055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.mitosis.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.mitosis.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"label","label",1718410804),"Cell"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__41321_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__41321_SHARP_], null)], null));

var seq__41327 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__41328 = null;
var count__41329 = (0);
var i__41330 = (0);
while(true){
if((i__41330 < count__41329)){
var x = cljs.core._nth.call(null,chunk__41328,i__41330);
hljs.highlightBlock(x);

var G__41332 = seq__41327;
var G__41333 = chunk__41328;
var G__41334 = count__41329;
var G__41335 = (i__41330 + (1));
seq__41327 = G__41332;
chunk__41328 = G__41333;
count__41329 = G__41334;
i__41330 = G__41335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41327);
if(temp__4657__auto__){
var seq__41327__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41327__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__41327__$1);
var G__41336 = cljs.core.chunk_rest.call(null,seq__41327__$1);
var G__41337 = c__25857__auto__;
var G__41338 = cljs.core.count.call(null,c__25857__auto__);
var G__41339 = (0);
seq__41327 = G__41336;
chunk__41328 = G__41337;
count__41329 = G__41338;
i__41330 = G__41339;
continue;
} else {
var x = cljs.core.first.call(null,seq__41327__$1);
hljs.highlightBlock(x);

var G__41340 = cljs.core.next.call(null,seq__41327__$1);
var G__41341 = null;
var G__41342 = (0);
var G__41343 = (0);
seq__41327 = G__41340;
chunk__41328 = G__41341;
count__41329 = G__41342;
i__41330 = G__41343;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__41331 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__41331) {
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

//# sourceMappingURL=views.js.map?rel=1484466582643
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.purple_rain.drop');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.purple_rain.drop.make = (function coding_challenges$purple_rain$drop$make(){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16026;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16027 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.purple_rain.drop.pathcache16026 = info16027;

return info16027;
})():info__12243__auto__);
var precompiled16028 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16028.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled16028;
}
})(),(function (p1__16019_SHARP_){
return quil.core.map_range.call(null,p1__16019_SHARP_,(0),(20),(1),(20));
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16029;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16030 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"len","len",1423657078)], null)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.purple_rain.drop.pathcache16029 = info16030;

return info16030;
})():info__12243__auto__);
var precompiled16031 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16031.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled16031;
}
})(),(function (p1__16018_SHARP_){
return quil.core.map_range.call(null,p1__16018_SHARP_,(0),(20),(10),(20));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(-200),(-100)),new cljs.core.Keyword(null,"z","z",-789527183),quil.core.random.call(null,(20))], null)));
});
coding_challenges.purple_rain.drop.fall = (function coding_challenges$purple_rain$drop$fall(d){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16039;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16040 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.view,new cljs.core.Var(function(){return com.rpl.specter.view;},new cljs.core.Symbol("com.rpl.specter","view","com.rpl.specter/view",542493804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",7,1,776,778,cljs.core.List.EMPTY,"Navigates to result of running `afn` on the currently navigated value.",(cljs.core.truth_(com.rpl.specter.view)?com.rpl.specter.view.cljs$lang$test:null)])),new cljs.core.Symbol(null,"view","view",-1406440955,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,((function (info__12243__auto__){
return (function (p1__16032_SHARP_){
return quil.core.map_range.call(null,p1__16032_SHARP_,(0),(20),(0),0.2);
});})(info__12243__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null)], null),cljs.core.list(new cljs.core.Symbol("q","map-range","q/map-range",-18111684,null),new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null),(0),(20),(0),0.2)))], null),cljs.core.list(new cljs.core.Symbol(null,"view","view",-1406440955,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null)], null),cljs.core.list(new cljs.core.Symbol("q","map-range","q/map-range",-18111684,null),new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null),(0),(20),(0),0.2))))], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183),cljs.core.list(new cljs.core.Symbol(null,"view","view",-1406440955,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null)], null),cljs.core.list(new cljs.core.Symbol("q","map-range","q/map-range",-18111684,null),new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null),(0),(20),(0),0.2))))),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null)], null),cljs.core.list(new cljs.core.Symbol("q","map-range","q/map-range",-18111684,null),new cljs.core.Symbol(null,"p1__16032#","p1__16032#",-190622297,null),(0),(20),(0),0.2))], null));
coding_challenges.purple_rain.drop.pathcache16039 = info16040;

return info16040;
})():info__12243__auto__);
var precompiled16041 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16041.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.view,((function (info__12243__auto__,info__12243__auto____$1,precompiled16041,dynamic_QMARK___12244__auto__){
return (function (p1__16032_SHARP_){
return quil.core.map_range.call(null,p1__16032_SHARP_,(0),(20),(0),0.2);
});})(info__12243__auto__,info__12243__auto____$1,precompiled16041,dynamic_QMARK___12244__auto__))
], null));
} else {
return precompiled16041;
}
})(),(function (grav,yspeed){
return (grav + yspeed);
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16042;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16043 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.purple_rain.drop.pathcache16042 = info16043;

return info16043;
})():info__12243__auto__);
var precompiled16044 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16044.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled16044;
}
})(),cljs.core._PLUS_,d));
});
coding_challenges.purple_rain.drop.loop_edge = (function coding_challenges$purple_rain$drop$loop_edge(d){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16052;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16053 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.purple_rain.drop.pathcache16052 = info16053;

return info16053;
})():info__12243__auto__);
var precompiled16054 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16054.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled16054;
}
})(),(function (p1__16045_SHARP_){
return quil.core.map_range.call(null,p1__16045_SHARP_,(0),(20),(4),(10));
}),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.purple_rain.drop.pathcache16055;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info16056 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.purple-rain.drop",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.purple_rain.drop.pathcache16055 = info16056;

return info16056;
})():info__12243__auto__);
var precompiled16057 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled16057.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled16057;
}
})(),quil.core.random.call(null,(-200),(-100)),d));
});
coding_challenges.purple_rain.drop.update_STAR_ = (function coding_challenges$purple_rain$drop$update_STAR_(p__16058){
var map__16062 = p__16058;
var map__16062__$1 = ((((!((map__16062 == null)))?((((map__16062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16062):map__16062);
var d = map__16062__$1;
var y = cljs.core.get.call(null,map__16062__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__16064 = d;
var G__16064__$1 = (((y > quil.core.height.call(null)))?coding_challenges.purple_rain.drop.loop_edge.call(null,G__16064):G__16064);
return coding_challenges.purple_rain.drop.fall.call(null,G__16064__$1);

});
coding_challenges.purple_rain.drop.draw = (function coding_challenges$purple_rain$drop$draw(d){
var thick_16065 = quil.core.map_range.call(null,new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(d),(0),(20),(1),(3));
quil.core.stroke_weight.call(null,thick_16065);

quil.core.stroke.call(null,(138),(43),(226));

return quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d),(new cljs.core.Keyword(null,"len","len",1423657078).cljs$core$IFn$_invoke$arity$1(d) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d)));
});

//# sourceMappingURL=drop.js.map?rel=1484456804691
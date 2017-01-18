// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.star');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.starfield.star.make = (function coding_challenges$starfield$star$make(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Star","Star",-296264218,null),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),new cljs.core.Keyword(null,"z","z",-789527183),quil.core.random.call(null,quil.core.width.call(null))], null);
});
coding_challenges.starfield.star.move_forward = (function coding_challenges$starfield$star$move_forward(speed,star){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32042;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32043 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache32042 = info32043;

return info32043;
})():info__11521__auto__);
var precompiled32044 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32044.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled32044;
}
})(),(function (p1__32035_SHARP_){
return (p1__32035_SHARP_ - speed);
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32045;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32046 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache32045 = info32046;

return info32046;
})():info__11521__auto__);
var precompiled32047 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32047.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled32047;
}
})(),cljs.core.identity,star));
});
coding_challenges.starfield.star.reset_QMARK_ = (function coding_challenges$starfield$star$reset_QMARK_(p__32048){
var map__32064 = p__32048;
var map__32064__$1 = ((((!((map__32064 == null)))?((((map__32064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32064):map__32064);
var star = map__32064__$1;
var z = cljs.core.get.call(null,map__32064__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var G__32066 = star;
if((z < (1))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32067;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32068 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache32067 = info32068;

return info32068;
})():info__11521__auto__);
var precompiled32069 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32069.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled32069;
}
})(),cljs.core.identity,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32070;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32071 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache32070 = info32071;

return info32071;
})():info__11521__auto__);
var precompiled32072 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32072.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled32072;
}
})(),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32073;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32074 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache32073 = info32074;

return info32074;
})():info__11521__auto__);
var precompiled32075 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32075.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled32075;
}
})(),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.starfield.star.pathcache32076;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32077 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache32076 = info32077;

return info32077;
})():info__11521__auto__);
var precompiled32078 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32078.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled32078;
}
})(),quil.core.width.call(null),G__32066))));
} else {
return G__32066;
}
});
coding_challenges.starfield.star.update_STAR_ = (function coding_challenges$starfield$star$update_STAR_(speed,star){
return coding_challenges.starfield.star.reset_QMARK_.call(null,coding_challenges.starfield.star.move_forward.call(null,speed,star));
});
coding_challenges.starfield.star.draw = (function coding_challenges$starfield$star$draw(p__32079){
var map__32082 = p__32079;
var map__32082__$1 = ((((!((map__32082 == null)))?((((map__32082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32082):map__32082);
var star = map__32082__$1;
var x = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var pz = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"pz","pz",-1707640674));
quil.core.fill.call(null,(255));

quil.core.no_stroke.call(null);

var sx = quil.core.map_range.call(null,(x / z),(0),(1),(0),quil.core.width.call(null));
var sy = quil.core.map_range.call(null,(y / z),(0),(1),(0),quil.core.height.call(null));
var r = quil.core.map_range.call(null,z,(0),quil.core.width.call(null),(16),(0));
var px = quil.core.map_range.call(null,(x / pz),(0),(1),(0),quil.core.width.call(null));
var py = quil.core.map_range.call(null,(y / pz),(0),(1),(0),quil.core.height.call(null));
quil.core.ellipse.call(null,sx,sy,r,r);

quil.core.stroke.call(null,(255));

return quil.core.line.call(null,px,py,sx,sy);
});

//# sourceMappingURL=star.js.map?rel=1484702587878
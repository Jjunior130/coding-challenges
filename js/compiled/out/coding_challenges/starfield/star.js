// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.star');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.starfield.star.make = (function coding_challenges$starfield$star$make(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Star","Star",-296264218,null),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),new cljs.core.Keyword(null,"z","z",-789527183),quil.core.random.call(null,quil.core.width.call(null))], null);
});
coding_challenges.starfield.star.move_forward = (function coding_challenges$starfield$star$move_forward(speed,star){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61717;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61718 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache61717 = info61718;

return info61718;
})():info__30860__auto__);
var precompiled61719 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61719.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61719;
}
})(),(function (p1__61710_SHARP_){
return (p1__61710_SHARP_ - speed);
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61720;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61721 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache61720 = info61721;

return info61721;
})():info__30860__auto__);
var precompiled61722 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61722.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61722;
}
})(),cljs.core.identity,star));
});
coding_challenges.starfield.star.reset_QMARK_ = (function coding_challenges$starfield$star$reset_QMARK_(p__61723){
var map__61739 = p__61723;
var map__61739__$1 = ((((!((map__61739 == null)))?((((map__61739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61739):map__61739);
var star = map__61739__$1;
var z = cljs.core.get.call(null,map__61739__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var G__61741 = star;
if((z < (1))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61742;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61743 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache61742 = info61743;

return info61743;
})():info__30860__auto__);
var precompiled61744 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61744.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61744;
}
})(),cljs.core.identity,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61745;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61746 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache61745 = info61746;

return info61746;
})():info__30860__auto__);
var precompiled61747 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61747.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61747;
}
})(),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61748;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61749 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache61748 = info61749;

return info61749;
})():info__30860__auto__);
var precompiled61750 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61750.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61750;
}
})(),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.starfield.star.pathcache61751;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61752 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache61751 = info61752;

return info61752;
})():info__30860__auto__);
var precompiled61753 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61753.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61753;
}
})(),quil.core.width.call(null),G__61741))));
} else {
return G__61741;
}
});
coding_challenges.starfield.star.update_STAR_ = (function coding_challenges$starfield$star$update_STAR_(speed,star){
return coding_challenges.starfield.star.reset_QMARK_.call(null,coding_challenges.starfield.star.move_forward.call(null,speed,star));
});
coding_challenges.starfield.star.draw = (function coding_challenges$starfield$star$draw(p__61754){
var map__61757 = p__61754;
var map__61757__$1 = ((((!((map__61757 == null)))?((((map__61757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61757):map__61757);
var star = map__61757__$1;
var x = cljs.core.get.call(null,map__61757__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__61757__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__61757__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var pz = cljs.core.get.call(null,map__61757__$1,new cljs.core.Keyword(null,"pz","pz",-1707640674));
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

//# sourceMappingURL=star.js.map?rel=1484333402400
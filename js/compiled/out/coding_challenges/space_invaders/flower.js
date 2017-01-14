// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.flower');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
goog.require('coding_challenges.space_invaders.drop');
coding_challenges.space_invaders.flower.make = (function coding_challenges$space_invaders$flower$make(x,y){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Flower","Flower",837987027,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(30),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(1)], null);
});
coding_challenges.space_invaders.flower.grow = (function coding_challenges$space_invaders$flower$grow(flower){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.flower.pathcache61872;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61873 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),"coding-challenges.space-invaders.flower",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.flower.pathcache61872 = info61873;

return info61873;
})():info__30860__auto__);
var precompiled61874 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61874.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61874;
}
})(),cljs.core.partial.call(null,cljs.core._PLUS_,(2)),flower);
});
coding_challenges.space_invaders.flower.move = (function coding_challenges$space_invaders$flower$move(flower){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.flower.pathcache61878;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61879 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xdir","xdir",1180076178))),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),"coding-challenges.space-invaders.flower",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.flower.pathcache61878 = info61879;

return info61879;
})():info__30860__auto__);
var precompiled61880 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61880.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61880;
}
})(),cljs.core._PLUS_,flower);
});
coding_challenges.space_invaders.flower.shift_down = (function coding_challenges$space_invaders$flower$shift_down(flower){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.flower.pathcache61887;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61888 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null),"coding-challenges.space-invaders.flower",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.flower.pathcache61887 = info61888;

return info61888;
})():info__30860__auto__);
var precompiled61889 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61889.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61889;
}
})(),cljs.core.partial.call(null,cljs.core._STAR_,(-1)),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.flower.pathcache61890;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61891 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"r","r",-471384190))),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),"coding-challenges.space-invaders.flower",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.flower.pathcache61890 = info61891;

return info61891;
})():info__30860__auto__);
var precompiled61892 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61892.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61892;
}
})(),cljs.core._PLUS_,flower));
});
coding_challenges.space_invaders.flower.update_STAR_ = (function coding_challenges$space_invaders$flower$update_STAR_(edge_QMARK_,drops,flower){
var G__61895 = flower;
var G__61895__$1 = (cljs.core.truth_(cljs.core.some.call(null,((function (G__61895){
return (function (p1__61893_SHARP_){
return coding_challenges.space_invaders.drop.hits_QMARK_.call(null,p1__61893_SHARP_,flower);
});})(G__61895))
,drops))?coding_challenges.space_invaders.flower.grow.call(null,G__61895):G__61895);
var G__61895__$2 = (cljs.core.truth_(edge_QMARK_)?coding_challenges.space_invaders.flower.shift_down.call(null,G__61895__$1):G__61895__$1);
return coding_challenges.space_invaders.flower.move.call(null,G__61895__$2);

});
coding_challenges.space_invaders.flower.draw = (function coding_challenges$space_invaders$flower$draw(p__61896){
var map__61899 = p__61896;
var map__61899__$1 = ((((!((map__61899 == null)))?((((map__61899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61899):map__61899);
var flower = map__61899__$1;
var x = cljs.core.get.call(null,map__61899__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__61899__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__61899__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.fill.call(null,(255),(0),(200));

return quil.core.ellipse.call(null,x,y,((2) * r),((2) * r));
});

//# sourceMappingURL=flower.js.map?rel=1484333402695
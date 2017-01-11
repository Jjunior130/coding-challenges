// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.star');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('com.rpl.specter');
coding_challenges.starfield.star.make = (function coding_challenges$starfield$star$make(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Star","Star",-296264218,null),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),new cljs.core.Keyword(null,"z","z",-789527183),quil.core.random.call(null,quil.core.width.call(null))], null);
});
coding_challenges.starfield.star.move_forward = (function coding_challenges$starfield$star$move_forward(speed,star){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34713;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34714 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache34713 = info34714;

return info34714;
})():info__12233__auto__);
var precompiled34715 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34715.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34715;
}
})(),(function (p1__34706_SHARP_){
return (p1__34706_SHARP_ - speed);
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34716;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34717 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache34716 = info34717;

return info34717;
})():info__12233__auto__);
var precompiled34718 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34718.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled34718;
}
})(),(function (p1__34705_SHARP_){
return cljs.core.identity.call(null,p1__34705_SHARP_);
}),star));
});
coding_challenges.starfield.star.update_STAR_ = (function coding_challenges$starfield$star$update_STAR_(speed,star){
var $ = coding_challenges.starfield.star.move_forward.call(null,speed,star);
if((new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1($) < (1))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34731;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34732 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache34731 = info34732;

return info34732;
})():info__12233__auto__);
var precompiled34733 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34733.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled34733;
}
})(),cljs.core.identity,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34734;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34735 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache34734 = info34735;

return info34735;
})():info__12233__auto__);
var precompiled34736 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34736.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34736;
}
})(),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34737;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34738 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache34737 = info34738;

return info34738;
})():info__12233__auto__);
var precompiled34739 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34739.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34739;
}
})(),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.starfield.star.pathcache34740;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34741 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache34740 = info34741;

return info34741;
})():info__12233__auto__);
var precompiled34742 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34742.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34742;
}
})(),quil.core.width.call(null),$))));
} else {
return $;
}
});
coding_challenges.starfield.star.draw = (function coding_challenges$starfield$star$draw(star){
quil.core.fill.call(null,(255));

quil.core.no_stroke.call(null);

var sx = quil.core.map_range.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star) / new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(star)),(0),(1),(0),quil.core.width.call(null));
var sy = quil.core.map_range.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star) / new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(star)),(0),(1),(0),quil.core.height.call(null));
var r = quil.core.map_range.call(null,new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(star),(0),quil.core.width.call(null),(16),(0));
var px = quil.core.map_range.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star) / new cljs.core.Keyword(null,"pz","pz",-1707640674).cljs$core$IFn$_invoke$arity$1(star)),(0),(1),(0),quil.core.width.call(null));
var py = quil.core.map_range.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star) / new cljs.core.Keyword(null,"pz","pz",-1707640674).cljs$core$IFn$_invoke$arity$1(star)),(0),(1),(0),quil.core.height.call(null));
quil.core.ellipse.call(null,sx,sy,r,r);

quil.core.stroke.call(null,(255));

return quil.core.line.call(null,px,py,sx,sy);
});

//# sourceMappingURL=star.js.map?rel=1484115255581
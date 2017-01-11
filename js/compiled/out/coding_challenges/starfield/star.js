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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10462;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10463 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache10462 = info10463;

return info10463;
})():info__9403__auto__);
var precompiled10464 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10464.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled10464;
}
})(),(function (p1__10455_SHARP_){
return (p1__10455_SHARP_ - speed);
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10465;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10466 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache10465 = info10466;

return info10466;
})():info__9403__auto__);
var precompiled10467 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10467.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled10467;
}
})(),(function (p1__10454_SHARP_){
return cljs.core.identity.call(null,p1__10454_SHARP_);
}),star));
});
coding_challenges.starfield.star.update_STAR_ = (function coding_challenges$starfield$star$update_STAR_(speed,star){
var $ = coding_challenges.starfield.star.move_forward.call(null,speed,star);
if((new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1($) < (1))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10480;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10481 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"z","z",-789527183))),new cljs.core.Keyword(null,"pz","pz",-1707640674)], null)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.starfield.star.pathcache10480 = info10481;

return info10481;
})():info__9403__auto__);
var precompiled10482 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10482.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled10482;
}
})(),cljs.core.identity,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10483;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10484 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache10483 = info10484;

return info10484;
})():info__9403__auto__);
var precompiled10485 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10485.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled10485;
}
})(),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10486;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10487 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache10486 = info10487;

return info10487;
})():info__9403__auto__);
var precompiled10488 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10488.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled10488;
}
})(),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__9403__auto__ = coding_challenges.starfield.star.pathcache10489;
var info__9403__auto____$1 = (((info__9403__auto__ == null))?(function (){var info10490 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null),"coding-challenges.starfield.star",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.starfield.star.pathcache10489 = info10490;

return info10490;
})():info__9403__auto__);
var precompiled10491 = info__9403__auto____$1.precompiled;
var dynamic_QMARK___9404__auto__ = info__9403__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___9404__auto__)){
return precompiled10491.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled10491;
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

//# sourceMappingURL=star.js.map?rel=1484109689014
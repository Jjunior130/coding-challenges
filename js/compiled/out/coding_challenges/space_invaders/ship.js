// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.ship');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.space_invaders.ship.make = (function coding_challenges$space_invaders$ship$make(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Ship","Ship",-691517831,null),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(0)], null);
});
coding_challenges.space_invaders.ship.move = (function coding_challenges$space_invaders$ship$move(ship){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.ship.pathcache35103;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35104 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xdir","xdir",1180076178))),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),"coding-challenges.space-invaders.ship",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.ship.pathcache35103 = info35104;

return info35104;
})():info__12233__auto__);
var precompiled35105 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35105.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35105;
}
})(),(function (xdir,x){
return (x + ((5) * xdir));
}),ship);
});
coding_challenges.space_invaders.ship.update_STAR_ = (function coding_challenges$space_invaders$ship$update_STAR_(ship){
return coding_challenges.space_invaders.ship.move.call(null,ship);
});
coding_challenges.space_invaders.ship.draw = (function coding_challenges$space_invaders$ship$draw(p__35106){
var map__35109 = p__35106;
var map__35109__$1 = ((((!((map__35109 == null)))?((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var ship = map__35109__$1;
var x = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(255));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.rect.call(null,x,(quil.core.height.call(null) - (20)),(20),(60));
});

//# sourceMappingURL=ship.js.map?rel=1484441674471
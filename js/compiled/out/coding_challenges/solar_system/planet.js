// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.planet');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.solar_system.planet.make = (function coding_challenges$solar_system$planet$make(r,d,o){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null);
});
coding_challenges.solar_system.planet.spawn_moons = (function coding_challenges$solar_system$planet$spawn_moons(total,level,p__35271){
var map__35278 = p__35271;
var map__35278__$1 = ((((!((map__35278 == null)))?((((map__35278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35278):map__35278);
var planet = map__35278__$1;
var radius = cljs.core.get.call(null,map__35278__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.solar_system.planet.pathcache35280;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35281 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system.planet.pathcache35280 = info35281;

return info35281;
})():info__12233__auto__);
var precompiled35282 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35282.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35282;
}
})(),cljs.core.repeatedly.call(null,total,((function (map__35278,map__35278__$1,planet,radius){
return (function (){
var G__35283 = coding_challenges.solar_system.planet.make.call(null,(radius / (level * (2))),(quil.core.random.call(null,(50),(150)) / level),quil.core.random.call(null,-0.1,0.1));
if((level < (3))){
return coding_challenges$solar_system$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__35283);
} else {
return G__35283;
}
});})(map__35278,map__35278__$1,planet,radius))
),planet);
});
coding_challenges.solar_system.planet.orbit = (function coding_challenges$solar_system$planet$orbit(planet){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.solar_system.planet.pathcache35290;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35291 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.solar_system.planet.pathcache35290 = info35291;

return info35291;
})():info__12233__auto__);
var precompiled35292 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35292.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled35292;
}
})(),coding_challenges$solar_system$planet$orbit,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.solar_system.planet.pathcache35293;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35294 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250))),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system.planet.pathcache35293 = info35294;

return info35294;
})():info__12233__auto__);
var precompiled35295 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35295.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35295;
}
})(),cljs.core._PLUS_,planet));
});
coding_challenges.solar_system.planet.update_STAR_ = (function coding_challenges$solar_system$planet$update_STAR_(planet){
return coding_challenges.solar_system.planet.orbit.call(null,planet);
});
coding_challenges.solar_system.planet.draw = (function coding_challenges$solar_system$planet$draw(planet){
quil.core.push_matrix.call(null);

quil.core.fill.call(null,(255),(100));

quil.core.rotate.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(planet));

quil.core.translate.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(planet),(0));

quil.core.ellipse.call(null,(0),(0),(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) * (2)),(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) * (2)));

var seq__35300_35304 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(planet));
var chunk__35301_35305 = null;
var count__35302_35306 = (0);
var i__35303_35307 = (0);
while(true){
if((i__35303_35307 < count__35302_35306)){
var p_35308 = cljs.core._nth.call(null,chunk__35301_35305,i__35303_35307);
coding_challenges$solar_system$planet$draw.call(null,p_35308);

var G__35309 = seq__35300_35304;
var G__35310 = chunk__35301_35305;
var G__35311 = count__35302_35306;
var G__35312 = (i__35303_35307 + (1));
seq__35300_35304 = G__35309;
chunk__35301_35305 = G__35310;
count__35302_35306 = G__35311;
i__35303_35307 = G__35312;
continue;
} else {
var temp__4657__auto___35313 = cljs.core.seq.call(null,seq__35300_35304);
if(temp__4657__auto___35313){
var seq__35300_35314__$1 = temp__4657__auto___35313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35300_35314__$1)){
var c__7220__auto___35315 = cljs.core.chunk_first.call(null,seq__35300_35314__$1);
var G__35316 = cljs.core.chunk_rest.call(null,seq__35300_35314__$1);
var G__35317 = c__7220__auto___35315;
var G__35318 = cljs.core.count.call(null,c__7220__auto___35315);
var G__35319 = (0);
seq__35300_35304 = G__35316;
chunk__35301_35305 = G__35317;
count__35302_35306 = G__35318;
i__35303_35307 = G__35319;
continue;
} else {
var p_35320 = cljs.core.first.call(null,seq__35300_35314__$1);
coding_challenges$solar_system$planet$draw.call(null,p_35320);

var G__35321 = cljs.core.next.call(null,seq__35300_35314__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__35300_35304 = G__35321;
chunk__35301_35305 = G__35322;
count__35302_35306 = G__35323;
i__35303_35307 = G__35324;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1484441674732
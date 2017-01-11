// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.planet');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.solar_system.planet.make = (function coding_challenges$solar_system$planet$make(r,d,o){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null);
});
coding_challenges.solar_system.planet.spawn_moons = (function coding_challenges$solar_system$planet$spawn_moons(total,level,planet){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system.planet.pathcache141597;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141598 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system.planet.pathcache141597 = info141598;

return info141598;
})():info__30860__auto__);
var precompiled141599 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141599.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141599;
}
})(),cljs.core.repeatedly.call(null,total,(function (){
var G__141600 = coding_challenges.solar_system.planet.make.call(null,(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) / (level * (2))),(quil.core.random.call(null,(50),(150)) / level),quil.core.random.call(null,-0.1,0.1));
if((level < (3))){
return coding_challenges$solar_system$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__141600);
} else {
return G__141600;
}
})),planet);
});
coding_challenges.solar_system.planet.orbit = (function coding_challenges$solar_system$planet$orbit(planet){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system.planet.pathcache141607;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141608 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.solar_system.planet.pathcache141607 = info141608;

return info141608;
})():info__30860__auto__);
var precompiled141609 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141609.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141609;
}
})(),coding_challenges$solar_system$planet$orbit,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system.planet.pathcache141610;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141611 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250))),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),"coding-challenges.solar-system.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system.planet.pathcache141610 = info141611;

return info141611;
})():info__30860__auto__);
var precompiled141612 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141612.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141612;
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

var seq__141617_141621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(planet));
var chunk__141618_141622 = null;
var count__141619_141623 = (0);
var i__141620_141624 = (0);
while(true){
if((i__141620_141624 < count__141619_141623)){
var p_141625 = cljs.core._nth.call(null,chunk__141618_141622,i__141620_141624);
coding_challenges$solar_system$planet$draw.call(null,p_141625);

var G__141626 = seq__141617_141621;
var G__141627 = chunk__141618_141622;
var G__141628 = count__141619_141623;
var G__141629 = (i__141620_141624 + (1));
seq__141617_141621 = G__141626;
chunk__141618_141622 = G__141627;
count__141619_141623 = G__141628;
i__141620_141624 = G__141629;
continue;
} else {
var temp__4657__auto___141630 = cljs.core.seq.call(null,seq__141617_141621);
if(temp__4657__auto___141630){
var seq__141617_141631__$1 = temp__4657__auto___141630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141617_141631__$1)){
var c__25857__auto___141632 = cljs.core.chunk_first.call(null,seq__141617_141631__$1);
var G__141633 = cljs.core.chunk_rest.call(null,seq__141617_141631__$1);
var G__141634 = c__25857__auto___141632;
var G__141635 = cljs.core.count.call(null,c__25857__auto___141632);
var G__141636 = (0);
seq__141617_141621 = G__141633;
chunk__141618_141622 = G__141634;
count__141619_141623 = G__141635;
i__141620_141624 = G__141636;
continue;
} else {
var p_141637 = cljs.core.first.call(null,seq__141617_141631__$1);
coding_challenges$solar_system$planet$draw.call(null,p_141637);

var G__141638 = cljs.core.next.call(null,seq__141617_141631__$1);
var G__141639 = null;
var G__141640 = (0);
var G__141641 = (0);
seq__141617_141621 = G__141638;
chunk__141618_141622 = G__141639;
count__141619_141623 = G__141640;
i__141620_141624 = G__141641;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1484099824011
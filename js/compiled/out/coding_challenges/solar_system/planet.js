// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system.planet');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.solar_system.planet.make = (function coding_challenges$solar_system$planet$make(r,d,o){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null);
});
coding_challenges.solar_system.planet.spawn_moons = (function coding_challenges$solar_system$planet$spawn_moons(total,level,p__35395){
var map__35399 = p__35395;
var map__35399__$1 = ((((!((map__35399 == null)))?((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35399):map__35399);
var planet = map__35399__$1;
var radius = cljs.core.get.call(null,map__35399__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return cljs.core.assoc.call(null,planet,new cljs.core.Keyword(null,"planets","planets",1711765443),(function (){var i = (total | (0));
var planets = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return planets;
} else {
var G__35402 = (i - (1));
var G__35403 = cljs.core.conj.call(null,planets,(function (){var G__35401 = coding_challenges.solar_system.planet.make.call(null,(radius / (level * (2))),(quil.core.random.call(null,(50),(150)) / level),quil.core.random.call(null,-0.1,0.1));
if((level < (3))){
return coding_challenges$solar_system$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__35401);
} else {
return G__35401;
}
})());
i = G__35402;
planets = G__35403;
continue;
}
break;
}
})());
});
coding_challenges.solar_system.planet.orbit = (function coding_challenges$solar_system$planet$orbit(p__35404){
var map__35407 = p__35404;
var map__35407__$1 = ((((!((map__35407 == null)))?((((map__35407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35407):map__35407);
var planet = map__35407__$1;
var orbit_speed = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250));
return cljs.core.update.call(null,cljs.core.update.call(null,planet,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.partial.call(null,cljs.core._PLUS_,orbit_speed)),new cljs.core.Keyword(null,"planets","planets",1711765443),((function (map__35407,map__35407__$1,planet,orbit_speed){
return (function (planets){
var i = cljs.core.count.call(null,planets);
var planets__$1 = planets;
var orbited_planets = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return orbited_planets;
} else {
var G__35409 = (i - (1));
var G__35410 = cljs.core.pop.call(null,planets__$1);
var G__35411 = cljs.core.conj.call(null,orbited_planets,coding_challenges$solar_system$planet$orbit.call(null,cljs.core.peek.call(null,planets__$1)));
i = G__35409;
planets__$1 = G__35410;
orbited_planets = G__35411;
continue;
}
break;
}
});})(map__35407,map__35407__$1,planet,orbit_speed))
);
});
coding_challenges.solar_system.planet.update_STAR_ = (function coding_challenges$solar_system$planet$update_STAR_(planet){
return coding_challenges.solar_system.planet.orbit.call(null,planet);
});
coding_challenges.solar_system.planet.draw = (function coding_challenges$solar_system$planet$draw(p__35412){
var map__35419 = p__35412;
var map__35419__$1 = ((((!((map__35419 == null)))?((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35419):map__35419);
var planet = map__35419__$1;
var angle = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var distance = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var radius = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var planets = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
quil.core.push_matrix.call(null);

quil.core.fill.call(null,(255),(100));

quil.core.rotate.call(null,angle);

quil.core.translate.call(null,distance,(0));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

var seq__35421_35425 = cljs.core.seq.call(null,planets);
var chunk__35422_35426 = null;
var count__35423_35427 = (0);
var i__35424_35428 = (0);
while(true){
if((i__35424_35428 < count__35423_35427)){
var p_35429 = cljs.core._nth.call(null,chunk__35422_35426,i__35424_35428);
coding_challenges$solar_system$planet$draw.call(null,p_35429);

var G__35430 = seq__35421_35425;
var G__35431 = chunk__35422_35426;
var G__35432 = count__35423_35427;
var G__35433 = (i__35424_35428 + (1));
seq__35421_35425 = G__35430;
chunk__35422_35426 = G__35431;
count__35423_35427 = G__35432;
i__35424_35428 = G__35433;
continue;
} else {
var temp__4657__auto___35434 = cljs.core.seq.call(null,seq__35421_35425);
if(temp__4657__auto___35434){
var seq__35421_35435__$1 = temp__4657__auto___35434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35421_35435__$1)){
var c__7220__auto___35436 = cljs.core.chunk_first.call(null,seq__35421_35435__$1);
var G__35437 = cljs.core.chunk_rest.call(null,seq__35421_35435__$1);
var G__35438 = c__7220__auto___35436;
var G__35439 = cljs.core.count.call(null,c__7220__auto___35436);
var G__35440 = (0);
seq__35421_35425 = G__35437;
chunk__35422_35426 = G__35438;
count__35423_35427 = G__35439;
i__35424_35428 = G__35440;
continue;
} else {
var p_35441 = cljs.core.first.call(null,seq__35421_35435__$1);
coding_challenges$solar_system$planet$draw.call(null,p_35441);

var G__35442 = cljs.core.next.call(null,seq__35421_35435__$1);
var G__35443 = null;
var G__35444 = (0);
var G__35445 = (0);
seq__35421_35425 = G__35442;
chunk__35422_35426 = G__35443;
count__35423_35427 = G__35444;
i__35424_35428 = G__35445;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1485242679539
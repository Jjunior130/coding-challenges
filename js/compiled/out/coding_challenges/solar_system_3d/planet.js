// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d.planet');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.solar_system_3d.planet.random_coordinate = (function coding_challenges$solar_system_3d$planet$random_coordinate(distance){
var theta = Math.acos(quil.core.random.call(null,(-1),(1)));
var phi = Math.atan(quil.core.random.call(null,(-1),(1)));
var x = ((distance * Math.sin(theta)) * Math.cos(phi));
var y = ((distance * Math.sin(theta)) * Math.sin(phi));
var z = (distance * Math.cos(phi));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null);
});
coding_challenges.solar_system_3d.planet.make = (function coding_challenges$solar_system_3d$planet$make(r,d,o){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d.planet.pathcache61619;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61620 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"distance","distance",-1671893894))),new cljs.core.Keyword(null,"v","v",21465059)], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d.planet.pathcache61619 = info61620;

return info61620;
})():info__30860__auto__);
var precompiled61621 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61621.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61621;
}
})(),coding_challenges.solar_system_3d.planet.random_coordinate,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null));
});
coding_challenges.solar_system_3d.planet.spawn_moons = (function coding_challenges$solar_system_3d$planet$spawn_moons(total,level,planet){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d.planet.pathcache61626;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61627 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system_3d.planet.pathcache61626 = info61627;

return info61627;
})():info__30860__auto__);
var precompiled61628 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61628.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61628;
}
})(),cljs.core.repeatedly.call(null,total,(function (){
var G__61629 = (function (){var r = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) / (level * (2)));
var x = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) + r);
return coding_challenges.solar_system_3d.planet.make.call(null,r,quil.core.random.call(null,x,((2) * x)),quil.core.random.call(null,-0.1,0.1));
})();
if((level < (3))){
return coding_challenges$solar_system_3d$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__61629);
} else {
return G__61629;
}
})),planet);
});
coding_challenges.solar_system_3d.planet.orbit = (function coding_challenges$solar_system_3d$planet$orbit(planet){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d.planet.pathcache61636;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61637 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.solar_system_3d.planet.pathcache61636 = info61637;

return info61637;
})():info__30860__auto__);
var precompiled61638 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61638.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled61638;
}
})(),coding_challenges$solar_system_3d$planet$orbit,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d.planet.pathcache61639;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61640 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250))),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d.planet.pathcache61639 = info61640;

return info61640;
})():info__30860__auto__);
var precompiled61641 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61641.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61641;
}
})(),cljs.core._PLUS_,planet));
});
coding_challenges.solar_system_3d.planet.update_STAR_ = (function coding_challenges$solar_system_3d$planet$update_STAR_(planet){
return coding_challenges.solar_system_3d.planet.orbit.call(null,planet);
});
coding_challenges.solar_system_3d.planet.cross = (function coding_challenges$solar_system_3d$planet$cross(p__61642,p__61643){
var map__61648 = p__61642;
var map__61648__$1 = ((((!((map__61648 == null)))?((((map__61648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61648):map__61648);
var x1 = cljs.core.get.call(null,map__61648__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__61648__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z1 = cljs.core.get.call(null,map__61648__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var map__61649 = p__61643;
var map__61649__$1 = ((((!((map__61649 == null)))?((((map__61649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61649):map__61649);
var x2 = cljs.core.get.call(null,map__61649__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__61649__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z2 = cljs.core.get.call(null,map__61649__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((y1 * z2) - (z1 * y2)),new cljs.core.Keyword(null,"y","y",-1757859776),((z1 * x2) - (x1 * z2)),new cljs.core.Keyword(null,"z","z",-789527183),((x1 * y2) - (y1 * x2))], null);
});
coding_challenges.solar_system_3d.planet.draw = (function coding_challenges$solar_system_3d$planet$draw(p__61652){
var map__61661 = p__61652;
var map__61661__$1 = ((((!((map__61661 == null)))?((((map__61661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61661):map__61661);
var planet = map__61661__$1;
var angle = cljs.core.get.call(null,map__61661__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var radius = cljs.core.get.call(null,map__61661__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var planets = cljs.core.get.call(null,map__61661__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var v = cljs.core.get.call(null,map__61661__$1,new cljs.core.Keyword(null,"v","v",21465059));
quil.core.push_matrix.call(null);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var v2_61669 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null);
var map__61663_61670 = coding_challenges.solar_system_3d.planet.cross.call(null,v,v2_61669);
var map__61663_61671__$1 = ((((!((map__61663_61670 == null)))?((((map__61663_61670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61663_61670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61663_61670):map__61663_61670);
var p_61672 = map__61663_61671__$1;
var x_61673 = cljs.core.get.call(null,map__61663_61671__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_61674 = cljs.core.get.call(null,map__61663_61671__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z_61675 = cljs.core.get.call(null,map__61663_61671__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.rotate.call(null,angle,x_61673,y_61674,z_61675);

quil.core.translate.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v));

quil.core.sphere.call(null,radius);

var seq__61665_61676 = cljs.core.seq.call(null,planets);
var chunk__61666_61677 = null;
var count__61667_61678 = (0);
var i__61668_61679 = (0);
while(true){
if((i__61668_61679 < count__61667_61678)){
var p_61680 = cljs.core._nth.call(null,chunk__61666_61677,i__61668_61679);
coding_challenges$solar_system_3d$planet$draw.call(null,p_61680);

var G__61681 = seq__61665_61676;
var G__61682 = chunk__61666_61677;
var G__61683 = count__61667_61678;
var G__61684 = (i__61668_61679 + (1));
seq__61665_61676 = G__61681;
chunk__61666_61677 = G__61682;
count__61667_61678 = G__61683;
i__61668_61679 = G__61684;
continue;
} else {
var temp__4657__auto___61685 = cljs.core.seq.call(null,seq__61665_61676);
if(temp__4657__auto___61685){
var seq__61665_61686__$1 = temp__4657__auto___61685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61665_61686__$1)){
var c__25857__auto___61687 = cljs.core.chunk_first.call(null,seq__61665_61686__$1);
var G__61688 = cljs.core.chunk_rest.call(null,seq__61665_61686__$1);
var G__61689 = c__25857__auto___61687;
var G__61690 = cljs.core.count.call(null,c__25857__auto___61687);
var G__61691 = (0);
seq__61665_61676 = G__61688;
chunk__61666_61677 = G__61689;
count__61667_61678 = G__61690;
i__61668_61679 = G__61691;
continue;
} else {
var p_61692 = cljs.core.first.call(null,seq__61665_61686__$1);
coding_challenges$solar_system_3d$planet$draw.call(null,p_61692);

var G__61693 = cljs.core.next.call(null,seq__61665_61686__$1);
var G__61694 = null;
var G__61695 = (0);
var G__61696 = (0);
seq__61665_61676 = G__61693;
chunk__61666_61677 = G__61694;
count__61667_61678 = G__61695;
i__61668_61679 = G__61696;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1484333402273
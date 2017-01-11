// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d_texture.planet');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.solar_system_3d_texture.planet.make = (function coding_challenges$solar_system_3d_texture$planet$make(r,d,o){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d_texture.planet.pathcache141491;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141492 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"distance","distance",-1671893894))),new cljs.core.Keyword(null,"v","v",21465059)], null)], null),"coding-challenges.solar-system-3d-texture.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d_texture.planet.pathcache141491 = info141492;

return info141492;
})():info__30860__auto__);
var precompiled141493 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141493.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141493;
}
})(),(function (d__$1,_){
var theta = Math.acos(quil.core.random.call(null,(-1),(1)));
var phi = Math.atan(quil.core.random.call(null,(-1),(1)));
var x = ((d__$1 * Math.sin(theta)) * Math.cos(phi));
var y = ((d__$1 * Math.sin(theta)) * Math.sin(phi));
var z = (d__$1 * Math.cos(phi));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null);
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null));
});
coding_challenges.solar_system_3d_texture.planet.spawn_moons = (function coding_challenges$solar_system_3d_texture$planet$spawn_moons(total,level,planet){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d_texture.planet.pathcache141498;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141499 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),"coding-challenges.solar-system-3d-texture.planet",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system_3d_texture.planet.pathcache141498 = info141499;

return info141499;
})():info__30860__auto__);
var precompiled141500 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141500.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141500;
}
})(),cljs.core.repeatedly.call(null,total,(function (){
var G__141501 = (function (){var r = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) / (level * (2)));
return coding_challenges.solar_system_3d_texture.planet.make.call(null,r,quil.core.random.call(null,(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) + r),((2) * (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) + r))),quil.core.random.call(null,-0.1,0.1));
})();
if((level < (3))){
return coding_challenges$solar_system_3d_texture$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__141501);
} else {
return G__141501;
}
})),planet);
});
coding_challenges.solar_system_3d_texture.planet.orbit = (function coding_challenges$solar_system_3d_texture$planet$orbit(planet){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d_texture.planet.pathcache141508;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141509 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.solar-system-3d-texture.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.solar_system_3d_texture.planet.pathcache141508 = info141509;

return info141509;
})():info__30860__auto__);
var precompiled141510 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141510.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141510;
}
})(),coding_challenges$solar_system_3d_texture$planet$orbit,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.solar_system_3d_texture.planet.pathcache141511;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141512 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250))),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),"coding-challenges.solar-system-3d-texture.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d_texture.planet.pathcache141511 = info141512;

return info141512;
})():info__30860__auto__);
var precompiled141513 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141513.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141513;
}
})(),cljs.core._PLUS_,planet));
});
coding_challenges.solar_system_3d_texture.planet.update_STAR_ = (function coding_challenges$solar_system_3d_texture$planet$update_STAR_(planet){
return coding_challenges.solar_system_3d_texture.planet.orbit.call(null,planet);
});
coding_challenges.solar_system_3d_texture.planet.cross = (function coding_challenges$solar_system_3d_texture$planet$cross(p__141514,p__141515){
var map__141520 = p__141514;
var map__141520__$1 = ((((!((map__141520 == null)))?((((map__141520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__141520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__141520):map__141520);
var x1 = cljs.core.get.call(null,map__141520__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__141520__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z1 = cljs.core.get.call(null,map__141520__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var map__141521 = p__141515;
var map__141521__$1 = ((((!((map__141521 == null)))?((((map__141521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__141521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__141521):map__141521);
var x2 = cljs.core.get.call(null,map__141521__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__141521__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z2 = cljs.core.get.call(null,map__141521__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((y1 * z2) - (z1 * y2)),new cljs.core.Keyword(null,"y","y",-1757859776),((z1 * x2) - (x1 * z2)),new cljs.core.Keyword(null,"z","z",-789527183),((x1 * y2) - (y1 * x2))], null);
});
coding_challenges.solar_system_3d_texture.planet.draw = (function coding_challenges$solar_system_3d_texture$planet$draw(img,p__141524){
var map__141533 = p__141524;
var map__141533__$1 = ((((!((map__141533 == null)))?((((map__141533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__141533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__141533):map__141533);
var planet = map__141533__$1;
var angle = cljs.core.get.call(null,map__141533__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var radius = cljs.core.get.call(null,map__141533__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var planets = cljs.core.get.call(null,map__141533__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var v = cljs.core.get.call(null,map__141533__$1,new cljs.core.Keyword(null,"v","v",21465059));
var globe = cljs.core.get.call(null,map__141533__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
quil.core.push_matrix.call(null);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var v2_141541 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null);
var map__141535_141542 = coding_challenges.solar_system_3d_texture.planet.cross.call(null,v,v2_141541);
var map__141535_141543__$1 = ((((!((map__141535_141542 == null)))?((((map__141535_141542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__141535_141542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__141535_141542):map__141535_141542);
var p_141544 = map__141535_141543__$1;
var x_141545 = cljs.core.get.call(null,map__141535_141543__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_141546 = cljs.core.get.call(null,map__141535_141543__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z_141547 = cljs.core.get.call(null,map__141535_141543__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.rotate.call(null,angle,x_141545,y_141546,z_141547);

quil.core.translate.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v));

quil.core.sphere.call(null,radius);

var seq__141537_141548 = cljs.core.seq.call(null,planets);
var chunk__141538_141549 = null;
var count__141539_141550 = (0);
var i__141540_141551 = (0);
while(true){
if((i__141540_141551 < count__141539_141550)){
var p_141552 = cljs.core._nth.call(null,chunk__141538_141549,i__141540_141551);
coding_challenges$solar_system_3d_texture$planet$draw.call(null,img,p_141552);

var G__141553 = seq__141537_141548;
var G__141554 = chunk__141538_141549;
var G__141555 = count__141539_141550;
var G__141556 = (i__141540_141551 + (1));
seq__141537_141548 = G__141553;
chunk__141538_141549 = G__141554;
count__141539_141550 = G__141555;
i__141540_141551 = G__141556;
continue;
} else {
var temp__4657__auto___141557 = cljs.core.seq.call(null,seq__141537_141548);
if(temp__4657__auto___141557){
var seq__141537_141558__$1 = temp__4657__auto___141557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141537_141558__$1)){
var c__25857__auto___141559 = cljs.core.chunk_first.call(null,seq__141537_141558__$1);
var G__141560 = cljs.core.chunk_rest.call(null,seq__141537_141558__$1);
var G__141561 = c__25857__auto___141559;
var G__141562 = cljs.core.count.call(null,c__25857__auto___141559);
var G__141563 = (0);
seq__141537_141548 = G__141560;
chunk__141538_141549 = G__141561;
count__141539_141550 = G__141562;
i__141540_141551 = G__141563;
continue;
} else {
var p_141564 = cljs.core.first.call(null,seq__141537_141558__$1);
coding_challenges$solar_system_3d_texture$planet$draw.call(null,img,p_141564);

var G__141565 = cljs.core.next.call(null,seq__141537_141558__$1);
var G__141566 = null;
var G__141567 = (0);
var G__141568 = (0);
seq__141537_141548 = G__141565;
chunk__141538_141549 = G__141566;
count__141539_141550 = G__141567;
i__141540_141551 = G__141568;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1484099823872
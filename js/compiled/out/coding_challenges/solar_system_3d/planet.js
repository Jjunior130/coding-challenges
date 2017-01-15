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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.solar_system_3d.planet.pathcache34869;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info34870 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"distance","distance",-1671893894))),new cljs.core.Keyword(null,"v","v",21465059)], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d.planet.pathcache34869 = info34870;

return info34870;
})():info__12243__auto__);
var precompiled34871 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled34871.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled34871;
}
})(),coding_challenges.solar_system_3d.planet.random_coordinate,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o], null));
});
coding_challenges.solar_system_3d.planet.spawn_moons = (function coding_challenges$solar_system_3d$planet$spawn_moons(total,level,planet){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.solar_system_3d.planet.pathcache34876;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info34877 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.solar_system_3d.planet.pathcache34876 = info34877;

return info34877;
})():info__12243__auto__);
var precompiled34878 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled34878.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34878;
}
})(),cljs.core.repeatedly.call(null,total,(function (){
var G__34879 = (function (){var r = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) / (level * (2)));
var x = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(planet) + r);
return coding_challenges.solar_system_3d.planet.make.call(null,r,quil.core.random.call(null,x,((2) * x)),quil.core.random.call(null,-0.1,0.1));
})();
if((level < (3))){
return coding_challenges$solar_system_3d$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__34879);
} else {
return G__34879;
}
})),planet);
});
coding_challenges.solar_system_3d.planet.orbit = (function coding_challenges$solar_system_3d$planet$orbit(planet){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.solar_system_3d.planet.pathcache34886;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info34887 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.solar_system_3d.planet.pathcache34886 = info34887;

return info34887;
})():info__12243__auto__);
var precompiled34888 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled34888.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled34888;
}
})(),coding_challenges$solar_system_3d$planet$orbit,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.solar_system_3d.planet.pathcache34889;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info34890 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250))),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),"coding-challenges.solar-system-3d.planet",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.solar_system_3d.planet.pathcache34889 = info34890;

return info34890;
})():info__12243__auto__);
var precompiled34891 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled34891.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled34891;
}
})(),cljs.core._PLUS_,planet));
});
coding_challenges.solar_system_3d.planet.update_STAR_ = (function coding_challenges$solar_system_3d$planet$update_STAR_(planet){
return coding_challenges.solar_system_3d.planet.orbit.call(null,planet);
});
coding_challenges.solar_system_3d.planet.cross = (function coding_challenges$solar_system_3d$planet$cross(p__34892,p__34893){
var map__34898 = p__34892;
var map__34898__$1 = ((((!((map__34898 == null)))?((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var x1 = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z1 = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var map__34899 = p__34893;
var map__34899__$1 = ((((!((map__34899 == null)))?((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var x2 = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z2 = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((y1 * z2) - (z1 * y2)),new cljs.core.Keyword(null,"y","y",-1757859776),((z1 * x2) - (x1 * z2)),new cljs.core.Keyword(null,"z","z",-789527183),((x1 * y2) - (y1 * x2))], null);
});
coding_challenges.solar_system_3d.planet.draw = (function coding_challenges$solar_system_3d$planet$draw(p__34902){
var map__34911 = p__34902;
var map__34911__$1 = ((((!((map__34911 == null)))?((((map__34911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34911):map__34911);
var planet = map__34911__$1;
var angle = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var radius = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var planets = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var v = cljs.core.get.call(null,map__34911__$1,new cljs.core.Keyword(null,"v","v",21465059));
quil.core.push_matrix.call(null);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var v2_34919 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null);
var map__34913_34920 = coding_challenges.solar_system_3d.planet.cross.call(null,v,v2_34919);
var map__34913_34921__$1 = ((((!((map__34913_34920 == null)))?((((map__34913_34920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34913_34920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913_34920):map__34913_34920);
var p_34922 = map__34913_34921__$1;
var x_34923 = cljs.core.get.call(null,map__34913_34921__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_34924 = cljs.core.get.call(null,map__34913_34921__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z_34925 = cljs.core.get.call(null,map__34913_34921__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.rotate.call(null,angle,x_34923,y_34924,z_34925);

quil.core.translate.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v));

quil.core.sphere.call(null,radius);

var seq__34915_34926 = cljs.core.seq.call(null,planets);
var chunk__34916_34927 = null;
var count__34917_34928 = (0);
var i__34918_34929 = (0);
while(true){
if((i__34918_34929 < count__34917_34928)){
var p_34930 = cljs.core._nth.call(null,chunk__34916_34927,i__34918_34929);
coding_challenges$solar_system_3d$planet$draw.call(null,p_34930);

var G__34931 = seq__34915_34926;
var G__34932 = chunk__34916_34927;
var G__34933 = count__34917_34928;
var G__34934 = (i__34918_34929 + (1));
seq__34915_34926 = G__34931;
chunk__34916_34927 = G__34932;
count__34917_34928 = G__34933;
i__34918_34929 = G__34934;
continue;
} else {
var temp__4657__auto___34935 = cljs.core.seq.call(null,seq__34915_34926);
if(temp__4657__auto___34935){
var seq__34915_34936__$1 = temp__4657__auto___34935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34915_34936__$1)){
var c__7230__auto___34937 = cljs.core.chunk_first.call(null,seq__34915_34936__$1);
var G__34938 = cljs.core.chunk_rest.call(null,seq__34915_34936__$1);
var G__34939 = c__7230__auto___34937;
var G__34940 = cljs.core.count.call(null,c__7230__auto___34937);
var G__34941 = (0);
seq__34915_34926 = G__34938;
chunk__34916_34927 = G__34939;
count__34917_34928 = G__34940;
i__34918_34929 = G__34941;
continue;
} else {
var p_34942 = cljs.core.first.call(null,seq__34915_34936__$1);
coding_challenges$solar_system_3d$planet$draw.call(null,p_34942);

var G__34943 = cljs.core.next.call(null,seq__34915_34936__$1);
var G__34944 = null;
var G__34945 = (0);
var G__34946 = (0);
seq__34915_34926 = G__34943;
chunk__34916_34927 = G__34944;
count__34917_34928 = G__34945;
i__34918_34929 = G__34946;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1484456850973
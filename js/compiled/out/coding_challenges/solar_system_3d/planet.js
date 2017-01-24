// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.solar_system_3d.planet');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.solar_system_3d.planet.random_coordinate = (function coding_challenges$solar_system_3d$planet$random_coordinate(distance){
var theta = Math.acos(quil.core.random.call(null,(-1),(1)));
var phi = Math.atan(quil.core.random.call(null,(-1),(1)));
var x = ((distance * Math.sin(theta)) * Math.cos(phi));
var y = ((distance * Math.sin(theta)) * Math.sin(phi));
var z = (distance * Math.cos(phi));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null);
});
coding_challenges.solar_system_3d.planet.make = (function coding_challenges$solar_system_3d$planet$make(r,d,o){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Planet","Planet",-493187497,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"distance","distance",-1671893894),d,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250),o,new cljs.core.Keyword(null,"v","v",21465059),coding_challenges.solar_system_3d.planet.random_coordinate.call(null,d)], null);
});
coding_challenges.solar_system_3d.planet.spawn_moons = (function coding_challenges$solar_system_3d$planet$spawn_moons(total,level,p__34808){
var map__34812 = p__34808;
var map__34812__$1 = ((((!((map__34812 == null)))?((((map__34812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34812):map__34812);
var planet = map__34812__$1;
var radius = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return cljs.core.assoc.call(null,planet,new cljs.core.Keyword(null,"planets","planets",1711765443),(function (){var i = (total | (0));
var planets = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return planets;
} else {
var G__34815 = (i - (1));
var G__34816 = cljs.core.conj.call(null,planets,(function (){var G__34814 = (function (){var r = (radius / (level * (2)));
var x = (radius + r);
return coding_challenges.solar_system_3d.planet.make.call(null,r,quil.core.random.call(null,x,((2) * x)),quil.core.random.call(null,-0.1,0.1));
})();
if((level < (3))){
return coding_challenges$solar_system_3d$planet$spawn_moons.call(null,cljs.core.rand_int.call(null,(4)),(level + (1)),G__34814);
} else {
return G__34814;
}
})());
i = G__34815;
planets = G__34816;
continue;
}
break;
}
})());
});
coding_challenges.solar_system_3d.planet.orbit = (function coding_challenges$solar_system_3d$planet$orbit(p__34817){
var map__34820 = p__34817;
var map__34820__$1 = ((((!((map__34820 == null)))?((((map__34820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34820):map__34820);
var planet = map__34820__$1;
var orbit_speed = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"orbit-speed","orbit-speed",-995833250));
return cljs.core.update.call(null,cljs.core.update.call(null,planet,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.partial.call(null,cljs.core._PLUS_,orbit_speed)),new cljs.core.Keyword(null,"planets","planets",1711765443),((function (map__34820,map__34820__$1,planet,orbit_speed){
return (function (planets){
var i = cljs.core.count.call(null,planets);
var planets__$1 = planets;
var orbited_planets = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return orbited_planets;
} else {
var G__34822 = (i - (1));
var G__34823 = cljs.core.pop.call(null,planets__$1);
var G__34824 = cljs.core.conj.call(null,orbited_planets,coding_challenges$solar_system_3d$planet$orbit.call(null,cljs.core.peek.call(null,planets__$1)));
i = G__34822;
planets__$1 = G__34823;
orbited_planets = G__34824;
continue;
}
break;
}
});})(map__34820,map__34820__$1,planet,orbit_speed))
);
});
coding_challenges.solar_system_3d.planet.update_STAR_ = (function coding_challenges$solar_system_3d$planet$update_STAR_(planet){
return coding_challenges.solar_system_3d.planet.orbit.call(null,planet);
});
coding_challenges.solar_system_3d.planet.cross = (function coding_challenges$solar_system_3d$planet$cross(p__34825,p__34826){
var map__34831 = p__34825;
var map__34831__$1 = ((((!((map__34831 == null)))?((((map__34831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34831):map__34831);
var x1 = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z1 = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var map__34832 = p__34826;
var map__34832__$1 = ((((!((map__34832 == null)))?((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var x2 = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z2 = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((y1 * z2) - (z1 * y2)),new cljs.core.Keyword(null,"y","y",-1757859776),((z1 * x2) - (x1 * z2)),new cljs.core.Keyword(null,"z","z",-789527183),((x1 * y2) - (y1 * x2))], null);
});
coding_challenges.solar_system_3d.planet.draw = (function coding_challenges$solar_system_3d$planet$draw(p__34835){
var map__34846 = p__34835;
var map__34846__$1 = ((((!((map__34846 == null)))?((((map__34846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34846):map__34846);
var planet = map__34846__$1;
var angle = cljs.core.get.call(null,map__34846__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var radius = cljs.core.get.call(null,map__34846__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var planets = cljs.core.get.call(null,map__34846__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var map__34847 = cljs.core.get.call(null,map__34846__$1,new cljs.core.Keyword(null,"v","v",21465059));
var map__34847__$1 = ((((!((map__34847 == null)))?((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34847):map__34847);
var v = map__34847__$1;
var vx = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var vy = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vz = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.push_matrix.call(null);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var v2_34856 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null);
var map__34850_34857 = coding_challenges.solar_system_3d.planet.cross.call(null,v,v2_34856);
var map__34850_34858__$1 = ((((!((map__34850_34857 == null)))?((((map__34850_34857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34850_34857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34850_34857):map__34850_34857);
var p_34859 = map__34850_34858__$1;
var x_34860 = cljs.core.get.call(null,map__34850_34858__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_34861 = cljs.core.get.call(null,map__34850_34858__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z_34862 = cljs.core.get.call(null,map__34850_34858__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.rotate.call(null,angle,x_34860,y_34861,z_34862);

quil.core.translate.call(null,vx,vy,vz);

quil.core.sphere.call(null,radius);

var seq__34852_34863 = cljs.core.seq.call(null,planets);
var chunk__34853_34864 = null;
var count__34854_34865 = (0);
var i__34855_34866 = (0);
while(true){
if((i__34855_34866 < count__34854_34865)){
var p_34867 = cljs.core._nth.call(null,chunk__34853_34864,i__34855_34866);
coding_challenges$solar_system_3d$planet$draw.call(null,p_34867);

var G__34868 = seq__34852_34863;
var G__34869 = chunk__34853_34864;
var G__34870 = count__34854_34865;
var G__34871 = (i__34855_34866 + (1));
seq__34852_34863 = G__34868;
chunk__34853_34864 = G__34869;
count__34854_34865 = G__34870;
i__34855_34866 = G__34871;
continue;
} else {
var temp__4657__auto___34872 = cljs.core.seq.call(null,seq__34852_34863);
if(temp__4657__auto___34872){
var seq__34852_34873__$1 = temp__4657__auto___34872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34852_34873__$1)){
var c__7220__auto___34874 = cljs.core.chunk_first.call(null,seq__34852_34873__$1);
var G__34875 = cljs.core.chunk_rest.call(null,seq__34852_34873__$1);
var G__34876 = c__7220__auto___34874;
var G__34877 = cljs.core.count.call(null,c__7220__auto___34874);
var G__34878 = (0);
seq__34852_34863 = G__34875;
chunk__34853_34864 = G__34876;
count__34854_34865 = G__34877;
i__34855_34866 = G__34878;
continue;
} else {
var p_34879 = cljs.core.first.call(null,seq__34852_34873__$1);
coding_challenges$solar_system_3d$planet$draw.call(null,p_34879);

var G__34880 = cljs.core.next.call(null,seq__34852_34873__$1);
var G__34881 = null;
var G__34882 = (0);
var G__34883 = (0);
seq__34852_34863 = G__34880;
chunk__34853_34864 = G__34881;
count__34854_34865 = G__34882;
i__34855_34866 = G__34883;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=planet.js.map?rel=1485242678726
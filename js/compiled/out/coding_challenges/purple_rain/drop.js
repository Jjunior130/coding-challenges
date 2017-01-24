// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.purple_rain.drop');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.purple_rain.drop.make = (function coding_challenges$purple_rain$drop$make(){
var z = quil.core.random.call(null,(20));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(-200),(-100)),new cljs.core.Keyword(null,"z","z",-789527183),z,new cljs.core.Keyword(null,"len","len",1423657078),quil.core.map_range.call(null,z,(0),(20),(10),(20)),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),quil.core.map_range.call(null,z,(0),(20),(1),(20))], null);
});
coding_challenges.purple_rain.drop.fall = (function coding_challenges$purple_rain$drop$fall(p__16008){
var map__16011 = p__16008;
var map__16011__$1 = ((((!((map__16011 == null)))?((((map__16011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16011):map__16011);
var d = map__16011__$1;
var yspeed = cljs.core.get.call(null,map__16011__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
var z = cljs.core.get.call(null,map__16011__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var grav = quil.core.map_range.call(null,z,(0),(20),(0),0.2);
return cljs.core.assoc.call(null,cljs.core.update.call(null,d,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.partial.call(null,cljs.core._PLUS_,yspeed)),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),(grav + yspeed));
});
coding_challenges.purple_rain.drop.loop_edge = (function coding_challenges$purple_rain$drop$loop_edge(p__16013){
var map__16016 = p__16013;
var map__16016__$1 = ((((!((map__16016 == null)))?((((map__16016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16016):map__16016);
var d = map__16016__$1;
var z = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(-200),(-100)),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),quil.core.map_range.call(null,z,(0),(20),(4),(10)));
});
coding_challenges.purple_rain.drop.update_STAR_ = (function coding_challenges$purple_rain$drop$update_STAR_(p__16018){
var map__16021 = p__16018;
var map__16021__$1 = ((((!((map__16021 == null)))?((((map__16021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16021):map__16021);
var d = map__16021__$1;
var y = cljs.core.get.call(null,map__16021__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if((y > quil.core.height.call(null))){
return coding_challenges.purple_rain.drop.fall.call(null,coding_challenges.purple_rain.drop.loop_edge.call(null,d));
} else {
return coding_challenges.purple_rain.drop.fall.call(null,d);
}
});
coding_challenges.purple_rain.drop.draw = (function coding_challenges$purple_rain$drop$draw(p__16023){
var map__16026 = p__16023;
var map__16026__$1 = ((((!((map__16026 == null)))?((((map__16026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16026):map__16026);
var d = map__16026__$1;
var x = cljs.core.get.call(null,map__16026__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__16026__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__16026__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var len = cljs.core.get.call(null,map__16026__$1,new cljs.core.Keyword(null,"len","len",1423657078));
var thick_16028 = quil.core.map_range.call(null,z,(0),(20),(1),(3));
quil.core.stroke_weight.call(null,thick_16028);

quil.core.stroke.call(null,(138),(43),(226));

return quil.core.line.call(null,x,y,x,(len + y));
});

//# sourceMappingURL=drop.js.map?rel=1485243260102
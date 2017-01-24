// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.starfield.star');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.starfield.star.make = (function coding_challenges$starfield$star$make(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Star","Star",-296264218,null),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),new cljs.core.Keyword(null,"z","z",-789527183),quil.core.random.call(null,quil.core.width.call(null))], null);
});
coding_challenges.starfield.star.move_forward = (function coding_challenges$starfield$star$move_forward(speed,p__34584){
var map__34587 = p__34584;
var map__34587__$1 = ((((!((map__34587 == null)))?((((map__34587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34587):map__34587);
var star = map__34587__$1;
var z = cljs.core.get.call(null,map__34587__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.update.call(null,cljs.core.assoc.call(null,star,new cljs.core.Keyword(null,"pz","pz",-1707640674),z),new cljs.core.Keyword(null,"z","z",-789527183),((function (map__34587,map__34587__$1,star,z){
return (function (p1__34583_SHARP_){
return (p1__34583_SHARP_ - speed);
});})(map__34587,map__34587__$1,star,z))
);
});
coding_challenges.starfield.star.reset_QMARK_ = (function coding_challenges$starfield$star$reset_QMARK_(p__34589){
var map__34593 = p__34589;
var map__34593__$1 = ((((!((map__34593 == null)))?((((map__34593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34593):map__34593);
var star = map__34593__$1;
var z = cljs.core.get.call(null,map__34593__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var nz = quil.core.width.call(null);
var G__34595 = star;
if((z < (1))){
return cljs.core.assoc.call(null,G__34595,new cljs.core.Keyword(null,"z","z",-789527183),nz,new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- quil.core.width.call(null)),quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- quil.core.height.call(null)),quil.core.height.call(null)),new cljs.core.Keyword(null,"pz","pz",-1707640674),nz);
} else {
return G__34595;
}
});
coding_challenges.starfield.star.update_STAR_ = (function coding_challenges$starfield$star$update_STAR_(speed,star){
return coding_challenges.starfield.star.reset_QMARK_.call(null,coding_challenges.starfield.star.move_forward.call(null,speed,star));
});
coding_challenges.starfield.star.draw = (function coding_challenges$starfield$star$draw(p__34596){
var map__34599 = p__34596;
var map__34599__$1 = ((((!((map__34599 == null)))?((((map__34599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34599):map__34599);
var star = map__34599__$1;
var x = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var pz = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"pz","pz",-1707640674));
quil.core.fill.call(null,(255));

quil.core.no_stroke.call(null);

var sx = quil.core.map_range.call(null,(x / z),(0),(1),(0),quil.core.width.call(null));
var sy = quil.core.map_range.call(null,(y / z),(0),(1),(0),quil.core.height.call(null));
var r = quil.core.map_range.call(null,z,(0),quil.core.width.call(null),(16),(0));
var px = quil.core.map_range.call(null,(x / pz),(0),(1),(0),quil.core.width.call(null));
var py = quil.core.map_range.call(null,(y / pz),(0),(1),(0),quil.core.height.call(null));
quil.core.ellipse.call(null,sx,sy,r,r);

quil.core.stroke.call(null,(255));

return quil.core.line.call(null,px,py,sx,sy);
});

//# sourceMappingURL=star.js.map?rel=1485242678247
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.flower');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('coding_challenges.space_invaders.drop');
coding_challenges.space_invaders.flower.make = (function coding_challenges$space_invaders$flower$make(x,y){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Flower","Flower",837987027,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(30),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(1)], null);
});
coding_challenges.space_invaders.flower.grow = (function coding_challenges$space_invaders$flower$grow(flower){
return cljs.core.update.call(null,flower,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.partial.call(null,cljs.core._PLUS_,(2)));
});
coding_challenges.space_invaders.flower.move = (function coding_challenges$space_invaders$flower$move(p__35233){
var map__35236 = p__35233;
var map__35236__$1 = ((((!((map__35236 == null)))?((((map__35236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236):map__35236);
var flower = map__35236__$1;
var xdir = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"xdir","xdir",1180076178));
return cljs.core.update.call(null,flower,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.partial.call(null,cljs.core._PLUS_,xdir));
});
coding_challenges.space_invaders.flower.shift_down = (function coding_challenges$space_invaders$flower$shift_down(p__35238){
var map__35241 = p__35238;
var map__35241__$1 = ((((!((map__35241 == null)))?((((map__35241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35241):map__35241);
var flower = map__35241__$1;
var r = cljs.core.get.call(null,map__35241__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return cljs.core.update.call(null,cljs.core.update.call(null,flower,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.partial.call(null,cljs.core._PLUS_,r)),new cljs.core.Keyword(null,"xdir","xdir",1180076178),cljs.core.partial.call(null,cljs.core._STAR_,(-1)));
});
coding_challenges.space_invaders.flower.update_STAR_ = (function coding_challenges$space_invaders$flower$update_STAR_(edge_QMARK_,drops,flower){
var G__35245 = flower;
var G__35245__$1 = (cljs.core.truth_(cljs.core.some.call(null,((function (G__35245){
return (function (p1__35243_SHARP_){
return coding_challenges.space_invaders.drop.hits_QMARK_.call(null,p1__35243_SHARP_,flower);
});})(G__35245))
,drops))?coding_challenges.space_invaders.flower.grow.call(null,G__35245):G__35245);
var G__35245__$2 = (cljs.core.truth_(edge_QMARK_)?coding_challenges.space_invaders.flower.shift_down.call(null,G__35245__$1):G__35245__$1);
return coding_challenges.space_invaders.flower.move.call(null,G__35245__$2);

});
coding_challenges.space_invaders.flower.draw = (function coding_challenges$space_invaders$flower$draw(p__35246){
var map__35249 = p__35246;
var map__35249__$1 = ((((!((map__35249 == null)))?((((map__35249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35249):map__35249);
var flower = map__35249__$1;
var x = cljs.core.get.call(null,map__35249__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35249__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__35249__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.fill.call(null,(255),(0),(200));

return quil.core.ellipse.call(null,x,y,((2) * r),((2) * r));
});

//# sourceMappingURL=flower.js.map?rel=1485243282449
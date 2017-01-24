// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.drop');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.space_invaders.drop.make = (function coding_challenges$space_invaders$drop$make(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Drop","Drop",1805403890,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(16)], null);
});
coding_challenges.space_invaders.drop.move_up = (function coding_challenges$space_invaders$drop$move_up(d){
return cljs.core.update.call(null,d,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__35215_SHARP_){
return (p1__35215_SHARP_ - (5));
}));
});
coding_challenges.space_invaders.drop.hits_QMARK_ = (function coding_challenges$space_invaders$drop$hits_QMARK_(p__35216,p__35217){
var map__35222 = p__35216;
var map__35222__$1 = ((((!((map__35222 == null)))?((((map__35222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35222):map__35222);
var d = map__35222__$1;
var dx = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dr = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__35223 = p__35217;
var map__35223__$1 = ((((!((map__35223 == null)))?((((map__35223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35223):map__35223);
var flower = map__35223__$1;
var fx = cljs.core.get.call(null,map__35223__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__35223__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fr = cljs.core.get.call(null,map__35223__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (quil.core.dist.call(null,dx,dy,fx,fy) < (dr + fr));
});
coding_challenges.space_invaders.drop.update_STAR_ = (function coding_challenges$space_invaders$drop$update_STAR_(d){
return coding_challenges.space_invaders.drop.move_up.call(null,d);
});
coding_challenges.space_invaders.drop.draw = (function coding_challenges$space_invaders$drop$draw(p__35226){
var map__35229 = p__35226;
var map__35229__$1 = ((((!((map__35229 == null)))?((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var d = map__35229__$1;
var dx = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dr = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.fill.call(null,(150),(0),(255));

return quil.core.ellipse.call(null,dx,dy,dr,dr);
});

//# sourceMappingURL=drop.js.map?rel=1485242679255
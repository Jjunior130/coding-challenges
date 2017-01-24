// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.ship');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.space_invaders.ship.make = (function coding_challenges$space_invaders$ship$make(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Ship","Ship",-691517831,null),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(0)], null);
});
coding_challenges.space_invaders.ship.move = (function coding_challenges$space_invaders$ship$move(p__35253){
var map__35256 = p__35253;
var map__35256__$1 = ((((!((map__35256 == null)))?((((map__35256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35256):map__35256);
var ship = map__35256__$1;
var xdir = cljs.core.get.call(null,map__35256__$1,new cljs.core.Keyword(null,"xdir","xdir",1180076178));
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.partial.call(null,cljs.core._PLUS_,((5) * xdir)));
});
coding_challenges.space_invaders.ship.update_STAR_ = (function coding_challenges$space_invaders$ship$update_STAR_(ship){
return coding_challenges.space_invaders.ship.move.call(null,ship);
});
coding_challenges.space_invaders.ship.draw = (function coding_challenges$space_invaders$ship$draw(p__35258){
var map__35261 = p__35258;
var map__35261__$1 = ((((!((map__35261 == null)))?((((map__35261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35261):map__35261);
var ship = map__35261__$1;
var x = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(255));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.rect.call(null,x,(quil.core.height.call(null) - (20)),(20),(60));
});

//# sourceMappingURL=ship.js.map?rel=1485243282479
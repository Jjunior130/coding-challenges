// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.ship');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.space_invaders.ship.make = (function coding_challenges$space_invaders$ship$make(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Ship","Ship",-691517831,null),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(0)], null);
});
coding_challenges.space_invaders.ship.move = (function coding_challenges$space_invaders$ship$move(vel,ship){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.ship.pathcache141342;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141343 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"coding-challenges.space-invaders.ship",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.ship.pathcache141342 = info141343;

return info141343;
})():info__30860__auto__);
var precompiled141344 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141344.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141344;
}
})(),cljs.core.partial.call(null,cljs.core._PLUS_,((5) * vel)),ship);
});
coding_challenges.space_invaders.ship.update_STAR_ = (function coding_challenges$space_invaders$ship$update_STAR_(ship){
var G__141346 = new cljs.core.Keyword(null,"xdir","xdir",1180076178).cljs$core$IFn$_invoke$arity$1(ship);
switch (G__141346) {
case (-1):
return coding_challenges.space_invaders.ship.move.call(null,(-1),ship);

break;
case (0):
return ship;

break;
case (1):
return coding_challenges.space_invaders.ship.move.call(null,(1),ship);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"xdir","xdir",1180076178).cljs$core$IFn$_invoke$arity$1(ship))].join('')));

}
});
coding_challenges.space_invaders.ship.draw = (function coding_challenges$space_invaders$ship$draw(ship){
quil.core.fill.call(null,(255));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),(quil.core.height.call(null) - (20)),(20),(60));
});

//# sourceMappingURL=ship.js.map?rel=1484099823571
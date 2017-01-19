// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.drop');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.space_invaders.drop.make = (function coding_challenges$space_invaders$drop$make(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Drop","Drop",1805403890,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(16)], null);
});
coding_challenges.space_invaders.drop.move_up = (function coding_challenges$space_invaders$drop$move_up(d){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.drop.pathcache45397;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45398 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.space-invaders.drop",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.drop.pathcache45397 = info45398;

return info45398;
})():info__28666__auto__);
var precompiled45399 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45399.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45399;
}
})(),(function (p1__45393_SHARP_){
return (p1__45393_SHARP_ - (5));
}),d);
});
coding_challenges.space_invaders.drop.hits_QMARK_ = (function coding_challenges$space_invaders$drop$hits_QMARK_(p__45400,p__45401){
var map__45406 = p__45400;
var map__45406__$1 = ((((!((map__45406 == null)))?((((map__45406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45406):map__45406);
var d = map__45406__$1;
var dx = cljs.core.get.call(null,map__45406__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__45406__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dr = cljs.core.get.call(null,map__45406__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__45407 = p__45401;
var map__45407__$1 = ((((!((map__45407 == null)))?((((map__45407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45407):map__45407);
var flower = map__45407__$1;
var fx = cljs.core.get.call(null,map__45407__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__45407__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fr = cljs.core.get.call(null,map__45407__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (quil.core.dist.call(null,dx,dy,fx,fy) < (dr + fr));
});
coding_challenges.space_invaders.drop.update_STAR_ = (function coding_challenges$space_invaders$drop$update_STAR_(d){
return coding_challenges.space_invaders.drop.move_up.call(null,d);
});
coding_challenges.space_invaders.drop.draw = (function coding_challenges$space_invaders$drop$draw(p__45410){
var map__45413 = p__45410;
var map__45413__$1 = ((((!((map__45413 == null)))?((((map__45413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45413):map__45413);
var d = map__45413__$1;
var dx = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dr = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.fill.call(null,(150),(0),(255));

return quil.core.ellipse.call(null,dx,dy,dr,dr);
});

//# sourceMappingURL=drop.js.map?rel=1484782598300
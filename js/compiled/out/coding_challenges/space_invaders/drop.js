// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.drop');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.space_invaders.drop.make = (function coding_challenges$space_invaders$drop$make(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Drop","Drop",1805403890,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(16)], null);
});
coding_challenges.space_invaders.drop.move = (function coding_challenges$space_invaders$drop$move(d){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.drop.pathcache141305;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141306 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),"coding-challenges.space-invaders.drop",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.drop.pathcache141305 = info141306;

return info141306;
})():info__30860__auto__);
var precompiled141307 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141307.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141307;
}
})(),(function (p1__141301_SHARP_){
return (p1__141301_SHARP_ - (5));
}),d);
});
coding_challenges.space_invaders.drop.hits_QMARK_ = (function coding_challenges$space_invaders$drop$hits_QMARK_(d,flower){
return (quil.core.dist.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(flower),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(flower)) < (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(d) + new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(flower)));
});
coding_challenges.space_invaders.drop.update_STAR_ = (function coding_challenges$space_invaders$drop$update_STAR_(d){
return coding_challenges.space_invaders.drop.move.call(null,d);
});
coding_challenges.space_invaders.drop.draw = (function coding_challenges$space_invaders$drop$draw(d){
quil.core.fill.call(null,(150),(0),(255));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(d));
});

//# sourceMappingURL=drop.js.map?rel=1484099823483
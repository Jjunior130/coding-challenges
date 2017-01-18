// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.rpl.specter');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (db,p__29021){
var vec__29022 = p__29021;
var _ = cljs.core.nth.call(null,vec__29022,(0),null);
var nav = cljs.core.nth.call(null,vec__29022,(1),null);
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__28040__auto__ = coding_challenges.subs.pathcache29025;
var info__28040__auto____$1 = (((info__28040__auto__ == null))?(function (){var info29026 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29025 = info29026;

return info29026;
})():info__28040__auto__);
var precompiled29027 = info__28040__auto____$1.precompiled;
var dynamic_QMARK___28041__auto__ = info__28040__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28041__auto__)){
return precompiled29027.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29027;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select-one","select-one",1322686564),(function (db,p__29028){
var vec__29029 = p__29028;
var _ = cljs.core.nth.call(null,vec__29029,(0),null);
var nav = cljs.core.nth.call(null,vec__29029,(1),null);
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__28040__auto__ = coding_challenges.subs.pathcache29032;
var info__28040__auto____$1 = (((info__28040__auto__ == null))?(function (){var info29033 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29032 = info29033;

return info29033;
})():info__28040__auto__);
var precompiled29034 = info__28040__auto____$1.precompiled;
var dynamic_QMARK___28041__auto__ = info__28040__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28041__auto__)){
return precompiled29034.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29034;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1484702556970
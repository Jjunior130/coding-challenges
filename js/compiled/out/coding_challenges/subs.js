// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.rpl.specter');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (db,p__29680){
var vec__29681 = p__29680;
var _ = cljs.core.nth.call(null,vec__29681,(0),null);
var nav = cljs.core.nth.call(null,vec__29681,(1),null);
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.subs.pathcache29684;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info29685 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29684 = info29685;

return info29685;
})():info__28666__auto__);
var precompiled29686 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled29686.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29686;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select-one","select-one",1322686564),(function (db,p__29687){
var vec__29688 = p__29687;
var _ = cljs.core.nth.call(null,vec__29688,(0),null);
var nav = cljs.core.nth.call(null,vec__29688,(1),null);
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.subs.pathcache29691;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info29692 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29691 = info29692;

return info29692;
})():info__28666__auto__);
var precompiled29693 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled29693.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29693;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1484162994148
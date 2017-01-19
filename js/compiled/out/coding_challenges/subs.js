// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.rpl.specter');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (db,p__29681){
var vec__29682 = p__29681;
var _ = cljs.core.nth.call(null,vec__29682,(0),null);
var nav = cljs.core.nth.call(null,vec__29682,(1),null);
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.subs.pathcache29685;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info29686 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29685 = info29686;

return info29686;
})():info__28666__auto__);
var precompiled29687 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled29687.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29687;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select-one","select-one",1322686564),(function (db,p__29688){
var vec__29689 = p__29688;
var _ = cljs.core.nth.call(null,vec__29689,(0),null);
var nav = cljs.core.nth.call(null,vec__29689,(1),null);
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.subs.pathcache29692;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info29693 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache29692 = info29693;

return info29693;
})():info__28666__auto__);
var precompiled29694 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled29694.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled29694;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1484780634717
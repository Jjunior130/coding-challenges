// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.rpl.specter');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (db,p__14196){
var vec__14197 = p__14196;
var _ = cljs.core.nth.call(null,vec__14197,(0),null);
var nav = cljs.core.nth.call(null,vec__14197,(1),null);
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.subs.pathcache14200;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info14201 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache14200 = info14201;

return info14201;
})():info__12243__auto__);
var precompiled14202 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled14202.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled14202;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select-one","select-one",1322686564),(function (db,p__14203){
var vec__14204 = p__14203;
var _ = cljs.core.nth.call(null,vec__14204,(0),null);
var nav = cljs.core.nth.call(null,vec__14204,(1),null);
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__12243__auto__ = coding_challenges.subs.pathcache14207;
var info__12243__auto____$1 = (((info__12243__auto__ == null))?(function (){var info14208 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache14207 = info14208;

return info14208;
})():info__12243__auto__);
var precompiled14209 = info__12243__auto____$1.precompiled;
var dynamic_QMARK___12244__auto__ = info__12243__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12244__auto__)){
return precompiled14209.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled14209;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1484456795188
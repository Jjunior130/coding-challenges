// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.rpl.specter');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (db,p__52787){
var vec__52788 = p__52787;
var _ = cljs.core.nth.call(null,vec__52788,(0),null);
var nav = cljs.core.nth.call(null,vec__52788,(1),null);
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.subs.pathcache52791;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info52792 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache52791 = info52792;

return info52792;
})():info__30860__auto__);
var precompiled52793 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled52793.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled52793;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"select-one","select-one",1322686564),(function (db,p__52794){
var vec__52795 = p__52794;
var _ = cljs.core.nth.call(null,vec__52795,(0),null);
var nav = cljs.core.nth.call(null,vec__52795,(1),null);
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.subs.pathcache52798;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info52799 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.subs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.subs.pathcache52798 = info52799;

return info52799;
})():info__30860__auto__);
var precompiled52800 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled52800.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled52800;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1484333383179
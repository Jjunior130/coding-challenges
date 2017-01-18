// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('coding_challenges.db');
goog.require('coding_challenges.socket');
goog.require('com.rpl.specter');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return coding_challenges.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"setval","setval",-2073686367),(function (db,p__33460){
var vec__33461 = p__33460;
var _ = cljs.core.nth.call(null,vec__33461,(0),null);
var vec__33464 = cljs.core.nth.call(null,vec__33461,(1),null);
var nav = cljs.core.nth.call(null,vec__33464,(0),null);
var v = cljs.core.nth.call(null,vec__33464,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.events.pathcache33467;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33468 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache33467 = info33468;

return info33468;
})():info__11521__auto__);
var precompiled33469 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33469.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled33469;
}
})(),v,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (db,p__33470){
var vec__33471 = p__33470;
var _ = cljs.core.nth.call(null,vec__33471,(0),null);
var vec__33474 = cljs.core.nth.call(null,vec__33471,(1),null);
var nav = cljs.core.nth.call(null,vec__33474,(0),null);
var f = cljs.core.nth.call(null,vec__33474,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.events.pathcache33477;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33478 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache33477 = info33478;

return info33478;
})():info__11521__auto__);
var precompiled33479 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33479.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled33479;
}
})(),f,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__33480){
var vec__33481 = p__33480;
var _ = cljs.core.nth.call(null,vec__33481,(0),null);
var active_panel = cljs.core.nth.call(null,vec__33481,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("server","ping","server/ping",-966122781),(function (db,_){
coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","ping","server/ping",-966122781),(new Date()).getTime()], null));

return db;
}));

//# sourceMappingURL=events.js.map?rel=1484702591516
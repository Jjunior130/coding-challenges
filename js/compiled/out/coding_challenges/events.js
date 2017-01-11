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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"setval","setval",-2073686367),(function (db,p__35480){
var vec__35481 = p__35480;
var _ = cljs.core.nth.call(null,vec__35481,(0),null);
var vec__35484 = cljs.core.nth.call(null,vec__35481,(1),null);
var nav = cljs.core.nth.call(null,vec__35484,(0),null);
var v = cljs.core.nth.call(null,vec__35484,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.events.pathcache35487;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35488 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache35487 = info35488;

return info35488;
})():info__12233__auto__);
var precompiled35489 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35489.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled35489;
}
})(),v,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (db,p__35490){
var vec__35491 = p__35490;
var _ = cljs.core.nth.call(null,vec__35491,(0),null);
var vec__35494 = cljs.core.nth.call(null,vec__35491,(1),null);
var nav = cljs.core.nth.call(null,vec__35494,(0),null);
var f = cljs.core.nth.call(null,vec__35494,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.events.pathcache35497;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35498 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache35497 = info35498;

return info35498;
})():info__12233__auto__);
var precompiled35499 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35499.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled35499;
}
})(),f,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__35500){
var vec__35501 = p__35500;
var _ = cljs.core.nth.call(null,vec__35501,(0),null);
var active_panel = cljs.core.nth.call(null,vec__35501,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("server","ping","server/ping",-966122781),(function (db,_){
coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","ping","server/ping",-966122781),(new Date()).getTime()], null));

return db;
}));

//# sourceMappingURL=events.js.map?rel=1484163018109
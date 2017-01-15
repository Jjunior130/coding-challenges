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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"setval","setval",-2073686367),(function (db,p__35296){
var vec__35297 = p__35296;
var _ = cljs.core.nth.call(null,vec__35297,(0),null);
var vec__35300 = cljs.core.nth.call(null,vec__35297,(1),null);
var nav = cljs.core.nth.call(null,vec__35300,(0),null);
var v = cljs.core.nth.call(null,vec__35300,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.events.pathcache35303;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info35304 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache35303 = info35304;

return info35304;
})():info__34163__auto__);
var precompiled35305 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled35305.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled35305;
}
})(),v,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (db,p__35306){
var vec__35307 = p__35306;
var _ = cljs.core.nth.call(null,vec__35307,(0),null);
var vec__35310 = cljs.core.nth.call(null,vec__35307,(1),null);
var nav = cljs.core.nth.call(null,vec__35310,(0),null);
var f = cljs.core.nth.call(null,vec__35310,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.events.pathcache35313;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info35314 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache35313 = info35314;

return info35314;
})():info__34163__auto__);
var precompiled35315 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled35315.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled35315;
}
})(),f,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__35316){
var vec__35317 = p__35316;
var _ = cljs.core.nth.call(null,vec__35317,(0),null);
var active_panel = cljs.core.nth.call(null,vec__35317,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("server","ping","server/ping",-966122781),(function (db,_){
coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","ping","server/ping",-966122781),(new Date()).getTime()], null));

return db;
}));

//# sourceMappingURL=events.js.map?rel=1484456855685
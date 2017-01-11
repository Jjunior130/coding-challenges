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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"setval","setval",-2073686367),(function (db,p__141876){
var vec__141877 = p__141876;
var _ = cljs.core.nth.call(null,vec__141877,(0),null);
var vec__141880 = cljs.core.nth.call(null,vec__141877,(1),null);
var nav = cljs.core.nth.call(null,vec__141880,(0),null);
var v = cljs.core.nth.call(null,vec__141880,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.events.pathcache141883;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141884 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache141883 = info141884;

return info141884;
})():info__30860__auto__);
var precompiled141885 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141885.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled141885;
}
})(),v,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (db,p__141886){
var vec__141887 = p__141886;
var _ = cljs.core.nth.call(null,vec__141887,(0),null);
var vec__141890 = cljs.core.nth.call(null,vec__141887,(1),null);
var nav = cljs.core.nth.call(null,vec__141890,(0),null);
var f = cljs.core.nth.call(null,vec__141890,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.events.pathcache141893;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141894 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache141893 = info141894;

return info141894;
})():info__30860__auto__);
var precompiled141895 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141895.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled141895;
}
})(),f,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__141896){
var vec__141897 = p__141896;
var _ = cljs.core.nth.call(null,vec__141897,(0),null);
var active_panel = cljs.core.nth.call(null,vec__141897,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("server","ping","server/ping",-966122781),(function (db,_){
coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","ping","server/ping",-966122781),(new Date()).getTime()], null));

return db;
}));

//# sourceMappingURL=events.js.map?rel=1484099824687
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"setval","setval",-2073686367),(function (db,p__46005){
var vec__46006 = p__46005;
var _ = cljs.core.nth.call(null,vec__46006,(0),null);
var vec__46009 = cljs.core.nth.call(null,vec__46006,(1),null);
var nav = cljs.core.nth.call(null,vec__46009,(0),null);
var v = cljs.core.nth.call(null,vec__46009,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.events.pathcache46012;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info46013 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache46012 = info46013;

return info46013;
})():info__28666__auto__);
var precompiled46014 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled46014.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled46014;
}
})(),v,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (db,p__46015){
var vec__46016 = p__46015;
var _ = cljs.core.nth.call(null,vec__46016,(0),null);
var vec__46019 = cljs.core.nth.call(null,vec__46016,(1),null);
var nav = cljs.core.nth.call(null,vec__46019,(0),null);
var f = cljs.core.nth.call(null,vec__46019,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.events.pathcache46022;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info46023 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,nav,new cljs.core.Symbol(null,"nav","nav",-1934895292,null))], null),"coding-challenges.events",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null));
coding_challenges.events.pathcache46022 = info46023;

return info46023;
})():info__28666__auto__);
var precompiled46024 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled46024.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav], null));
} else {
return precompiled46024;
}
})(),f,db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__46025){
var vec__46026 = p__46025;
var _ = cljs.core.nth.call(null,vec__46026,(0),null);
var active_panel = cljs.core.nth.call(null,vec__46026,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("server","ping","server/ping",-966122781),(function (db,_){
coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","ping","server/ping",-966122781),(new Date()).getTime()], null));

return db;
}));

//# sourceMappingURL=events.js.map?rel=1484782599601
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__139542_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__139542_SHARP_)].join('');
})], null));
}
var map__139543_139545 = coding_challenges.socket.sente_socket;
var map__139543_139546__$1 = ((((!((map__139543_139545 == null)))?((((map__139543_139545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__139543_139545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__139543_139545):map__139543_139545);
var chsk_139547 = cljs.core.get.call(null,map__139543_139546__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_139548 = cljs.core.get.call(null,map__139543_139546__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_139549 = cljs.core.get.call(null,map__139543_139546__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_139550 = cljs.core.get.call(null,map__139543_139546__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_139547;

coding_challenges.socket.ch_chsk = ch_recv_139548;

coding_challenges.socket.chsk_send_BANG_ = send_fn_139549;

coding_challenges.socket.chsk_state = state_139550;
if(typeof coding_challenges.socket.handle_event !== 'undefined'){
} else {
/**
 * Handle events based on the event Id.
 */
coding_challenges.socket.handle_event = (function (){var method_table__25971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"coding-challenges.socket","handle-event"),((function (method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__,hierarchy__25975__auto__){
return (function (p__139551){
var vec__139552 = p__139551;
var ev_id = cljs.core.nth.call(null,vec__139552,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__139552,(1),null);
return ev_id;
});})(method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__,hierarchy__25975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25975__auto__,method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__139555){
var vec__139556 = p__139555;
var _ = cljs.core.nth.call(null,vec__139556,(0),null);
var st = cljs.core.nth.call(null,vec__139556,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__139559){
var vec__139560 = p__139559;
var _ = cljs.core.nth.call(null,vec__139560,(0),null);
var vec__139563 = cljs.core.nth.call(null,vec__139560,(1),null);
var srts = cljs.core.nth.call(null,vec__139563,(0),null);
var csp = cljs.core.nth.call(null,vec__139563,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__139566){
var vec__139567 = p__139566;
var _ = cljs.core.nth.call(null,vec__139567,(0),null);
var cns = cljs.core.nth.call(null,vec__139567,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__139570){
var vec__139571 = p__139570;
var _ = cljs.core.nth.call(null,vec__139571,(0),null);
var msg = cljs.core.nth.call(null,vec__139571,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","reply","test/reply",1080809065),msg], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (event){
return cljs.core.println.call(null,"UNKNOW EVENT",event);
}));
/**
 * Ping the server.
 */
coding_challenges.socket.test_session = (function coding_challenges$socket$test_session(){
return coding_challenges.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session","status","session/status",289111609)], null));
});
/**
 * Handle inbound events.
 */
coding_challenges.socket.event_loop = (function coding_challenges$socket$event_loop(){
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_139660){
var state_val_139661 = (state_139660[(1)]);
if((state_val_139661 === (1))){
var state_139660__$1 = state_139660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139660__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_139661 === (2))){
var inst_139635 = (state_139660[(2)]);
var inst_139636 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_139635);
var inst_139637 = cljs.core.nth.call(null,inst_139636,(0),null);
var inst_139638 = cljs.core.nth.call(null,inst_139636,(1),null);
var inst_139639 = inst_139636;
var state_139660__$1 = (function (){var statearr_139662 = state_139660;
(statearr_139662[(7)] = inst_139639);

(statearr_139662[(8)] = inst_139637);

(statearr_139662[(9)] = inst_139638);

return statearr_139662;
})();
var statearr_139663_139680 = state_139660__$1;
(statearr_139663_139680[(2)] = null);

(statearr_139663_139680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139661 === (3))){
var inst_139639 = (state_139660[(7)]);
var inst_139644 = cljs.core.nth.call(null,inst_139639,(0),null);
var inst_139645 = cljs.core.nth.call(null,inst_139639,(1),null);
var inst_139646 = cljs.core.println.call(null,"-",inst_139644);
var state_139660__$1 = (function (){var statearr_139664 = state_139660;
(statearr_139664[(10)] = inst_139645);

(statearr_139664[(11)] = inst_139646);

return statearr_139664;
})();
var G__139665_139681 = (((inst_139644 instanceof cljs.core.Keyword))?inst_139644.fqn:null);
switch (G__139665_139681) {
case "chsk/recv":
var statearr_139666_139683 = state_139660__$1;
(statearr_139666_139683[(1)] = (6));


break;
default:
var statearr_139667_139684 = state_139660__$1;
(statearr_139667_139684[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139661 === (4))){
var inst_139658 = (state_139660[(2)]);
var state_139660__$1 = state_139660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139660__$1,inst_139658);
} else {
if((state_val_139661 === (5))){
var inst_139652 = (state_139660[(2)]);
var state_139660__$1 = (function (){var statearr_139668 = state_139660;
(statearr_139668[(12)] = inst_139652);

return statearr_139668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139660__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_139661 === (6))){
var inst_139645 = (state_139660[(10)]);
var inst_139647 = coding_challenges.socket.handle_event.call(null,inst_139645);
var state_139660__$1 = state_139660;
var statearr_139669_139685 = state_139660__$1;
(statearr_139669_139685[(2)] = inst_139647);

(statearr_139669_139685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139661 === (7))){
var inst_139649 = coding_challenges.socket.test_session.call(null);
var state_139660__$1 = state_139660;
var statearr_139670_139686 = state_139660__$1;
(statearr_139670_139686[(2)] = inst_139649);

(statearr_139670_139686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_139661 === (8))){
var inst_139654 = (state_139660[(2)]);
var inst_139655 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_139654);
var inst_139639 = inst_139655;
var state_139660__$1 = (function (){var statearr_139671 = state_139660;
(statearr_139671[(7)] = inst_139639);

return statearr_139671;
})();
var statearr_139672_139687 = state_139660__$1;
(statearr_139672_139687[(2)] = null);

(statearr_139672_139687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__33288__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__33288__auto____0 = (function (){
var statearr_139676 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_139676[(0)] = coding_challenges$socket$event_loop_$_state_machine__33288__auto__);

(statearr_139676[(1)] = (1));

return statearr_139676;
});
var coding_challenges$socket$event_loop_$_state_machine__33288__auto____1 = (function (state_139660){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_139660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e139677){if((e139677 instanceof Object)){
var ex__33291__auto__ = e139677;
var statearr_139678_139688 = state_139660;
(statearr_139678_139688[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e139677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__139689 = state_139660;
state_139660 = G__139689;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__33288__auto__ = function(state_139660){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__33288__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__33288__auto____1.call(this,state_139660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__33288__auto____0;
coding_challenges$socket$event_loop_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__33288__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_139679 = f__33353__auto__.call(null);
(statearr_139679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_139679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484099817686
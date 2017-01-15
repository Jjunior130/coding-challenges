// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__32238_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__32238_SHARP_)].join('');
})], null));
}
var map__32239_32241 = coding_challenges.socket.sente_socket;
var map__32239_32242__$1 = ((((!((map__32239_32241 == null)))?((((map__32239_32241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32239_32241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239_32241):map__32239_32241);
var chsk_32243 = cljs.core.get.call(null,map__32239_32242__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_32244 = cljs.core.get.call(null,map__32239_32242__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_32245 = cljs.core.get.call(null,map__32239_32242__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_32246 = cljs.core.get.call(null,map__32239_32242__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_32243;

coding_challenges.socket.ch_chsk = ch_recv_32244;

coding_challenges.socket.chsk_send_BANG_ = send_fn_32245;

coding_challenges.socket.chsk_state = state_32246;
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
return (function (p__32247){
var vec__32248 = p__32247;
var ev_id = cljs.core.nth.call(null,vec__32248,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__32248,(1),null);
return ev_id;
});})(method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__,hierarchy__25975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25975__auto__,method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__32251){
var vec__32252 = p__32251;
var _ = cljs.core.nth.call(null,vec__32252,(0),null);
var st = cljs.core.nth.call(null,vec__32252,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__32255){
var vec__32256 = p__32255;
var _ = cljs.core.nth.call(null,vec__32256,(0),null);
var vec__32259 = cljs.core.nth.call(null,vec__32256,(1),null);
var srts = cljs.core.nth.call(null,vec__32259,(0),null);
var csp = cljs.core.nth.call(null,vec__32259,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__32262){
var vec__32263 = p__32262;
var _ = cljs.core.nth.call(null,vec__32263,(0),null);
var cns = cljs.core.nth.call(null,vec__32263,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__32266){
var vec__32267 = p__32266;
var _ = cljs.core.nth.call(null,vec__32267,(0),null);
var msg = cljs.core.nth.call(null,vec__32267,(1),null);
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__){
return (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (1))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_32357 === (2))){
var inst_32331 = (state_32356[(2)]);
var inst_32332 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_32331);
var inst_32333 = cljs.core.nth.call(null,inst_32332,(0),null);
var inst_32334 = cljs.core.nth.call(null,inst_32332,(1),null);
var inst_32335 = inst_32332;
var state_32356__$1 = (function (){var statearr_32358 = state_32356;
(statearr_32358[(7)] = inst_32335);

(statearr_32358[(8)] = inst_32333);

(statearr_32358[(9)] = inst_32334);

return statearr_32358;
})();
var statearr_32359_32376 = state_32356__$1;
(statearr_32359_32376[(2)] = null);

(statearr_32359_32376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (3))){
var inst_32335 = (state_32356[(7)]);
var inst_32340 = cljs.core.nth.call(null,inst_32335,(0),null);
var inst_32341 = cljs.core.nth.call(null,inst_32335,(1),null);
var inst_32342 = cljs.core.println.call(null,"-",inst_32340);
var state_32356__$1 = (function (){var statearr_32360 = state_32356;
(statearr_32360[(10)] = inst_32341);

(statearr_32360[(11)] = inst_32342);

return statearr_32360;
})();
var G__32361_32377 = (((inst_32340 instanceof cljs.core.Keyword))?inst_32340.fqn:null);
switch (G__32361_32377) {
case "chsk/recv":
var statearr_32362_32379 = state_32356__$1;
(statearr_32362_32379[(1)] = (6));


break;
default:
var statearr_32363_32380 = state_32356__$1;
(statearr_32363_32380[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (4))){
var inst_32354 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32356__$1,inst_32354);
} else {
if((state_val_32357 === (5))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = (function (){var statearr_32364 = state_32356;
(statearr_32364[(12)] = inst_32348);

return statearr_32364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_32357 === (6))){
var inst_32341 = (state_32356[(10)]);
var inst_32343 = coding_challenges.socket.handle_event.call(null,inst_32341);
var state_32356__$1 = state_32356;
var statearr_32365_32381 = state_32356__$1;
(statearr_32365_32381[(2)] = inst_32343);

(statearr_32365_32381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (7))){
var inst_32345 = coding_challenges.socket.test_session.call(null);
var state_32356__$1 = state_32356;
var statearr_32366_32382 = state_32356__$1;
(statearr_32366_32382[(2)] = inst_32345);

(statearr_32366_32382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (8))){
var inst_32350 = (state_32356[(2)]);
var inst_32351 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_32350);
var inst_32335 = inst_32351;
var state_32356__$1 = (function (){var statearr_32367 = state_32356;
(statearr_32367[(7)] = inst_32335);

return statearr_32367;
})();
var statearr_32368_32383 = state_32356__$1;
(statearr_32368_32383[(2)] = null);

(statearr_32368_32383[(1)] = (3));


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
});})(c__29132__auto__))
;
return ((function (switch__29111__auto__,c__29132__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__29112__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__29112__auto____0 = (function (){
var statearr_32372 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32372[(0)] = coding_challenges$socket$event_loop_$_state_machine__29112__auto__);

(statearr_32372[(1)] = (1));

return statearr_32372;
});
var coding_challenges$socket$event_loop_$_state_machine__29112__auto____1 = (function (state_32356){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_32356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e32373){if((e32373 instanceof Object)){
var ex__29115__auto__ = e32373;
var statearr_32374_32384 = state_32356;
(statearr_32374_32384[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_32356;
state_32356 = G__32385;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__29112__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__29112__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__29112__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__29112__auto____0;
coding_challenges$socket$event_loop_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__29112__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__))
})();
var state__29134__auto__ = (function (){var statearr_32375 = f__29133__auto__.call(null);
(statearr_32375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_32375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__))
);

return c__29132__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484456850852
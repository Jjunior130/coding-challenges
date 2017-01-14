// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__33228_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__33228_SHARP_)].join('');
})], null));
}
var map__33229_33231 = coding_challenges.socket.sente_socket;
var map__33229_33232__$1 = ((((!((map__33229_33231 == null)))?((((map__33229_33231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33229_33231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229_33231):map__33229_33231);
var chsk_33233 = cljs.core.get.call(null,map__33229_33232__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_33234 = cljs.core.get.call(null,map__33229_33232__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_33235 = cljs.core.get.call(null,map__33229_33232__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_33236 = cljs.core.get.call(null,map__33229_33232__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_33233;

coding_challenges.socket.ch_chsk = ch_recv_33234;

coding_challenges.socket.chsk_send_BANG_ = send_fn_33235;

coding_challenges.socket.chsk_state = state_33236;
if(typeof coding_challenges.socket.handle_event !== 'undefined'){
} else {
/**
 * Handle events based on the event Id.
 */
coding_challenges.socket.handle_event = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"coding-challenges.socket","handle-event"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function (p__33237){
var vec__33238 = p__33237;
var ev_id = cljs.core.nth.call(null,vec__33238,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__33238,(1),null);
return ev_id;
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__33241){
var vec__33242 = p__33241;
var _ = cljs.core.nth.call(null,vec__33242,(0),null);
var st = cljs.core.nth.call(null,vec__33242,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__33245){
var vec__33246 = p__33245;
var _ = cljs.core.nth.call(null,vec__33246,(0),null);
var vec__33249 = cljs.core.nth.call(null,vec__33246,(1),null);
var srts = cljs.core.nth.call(null,vec__33249,(0),null);
var csp = cljs.core.nth.call(null,vec__33249,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__33252){
var vec__33253 = p__33252;
var _ = cljs.core.nth.call(null,vec__33253,(0),null);
var cns = cljs.core.nth.call(null,vec__33253,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__33256){
var vec__33257 = p__33256;
var _ = cljs.core.nth.call(null,vec__33257,(0),null);
var msg = cljs.core.nth.call(null,vec__33257,(1),null);
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
var c__17391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto__){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto__){
return (function (state_33346){
var state_val_33347 = (state_33346[(1)]);
if((state_val_33347 === (1))){
var state_33346__$1 = state_33346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33346__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33347 === (2))){
var inst_33321 = (state_33346[(2)]);
var inst_33322 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33321);
var inst_33323 = cljs.core.nth.call(null,inst_33322,(0),null);
var inst_33324 = cljs.core.nth.call(null,inst_33322,(1),null);
var inst_33325 = inst_33322;
var state_33346__$1 = (function (){var statearr_33348 = state_33346;
(statearr_33348[(7)] = inst_33325);

(statearr_33348[(8)] = inst_33323);

(statearr_33348[(9)] = inst_33324);

return statearr_33348;
})();
var statearr_33349_33366 = state_33346__$1;
(statearr_33349_33366[(2)] = null);

(statearr_33349_33366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33347 === (3))){
var inst_33325 = (state_33346[(7)]);
var inst_33330 = cljs.core.nth.call(null,inst_33325,(0),null);
var inst_33331 = cljs.core.nth.call(null,inst_33325,(1),null);
var inst_33332 = cljs.core.println.call(null,"-",inst_33330);
var state_33346__$1 = (function (){var statearr_33350 = state_33346;
(statearr_33350[(10)] = inst_33332);

(statearr_33350[(11)] = inst_33331);

return statearr_33350;
})();
var G__33351_33367 = (((inst_33330 instanceof cljs.core.Keyword))?inst_33330.fqn:null);
switch (G__33351_33367) {
case "chsk/recv":
var statearr_33352_33369 = state_33346__$1;
(statearr_33352_33369[(1)] = (6));


break;
default:
var statearr_33353_33370 = state_33346__$1;
(statearr_33353_33370[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33347 === (4))){
var inst_33344 = (state_33346[(2)]);
var state_33346__$1 = state_33346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33346__$1,inst_33344);
} else {
if((state_val_33347 === (5))){
var inst_33338 = (state_33346[(2)]);
var state_33346__$1 = (function (){var statearr_33354 = state_33346;
(statearr_33354[(12)] = inst_33338);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33346__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33347 === (6))){
var inst_33331 = (state_33346[(11)]);
var inst_33333 = coding_challenges.socket.handle_event.call(null,inst_33331);
var state_33346__$1 = state_33346;
var statearr_33355_33371 = state_33346__$1;
(statearr_33355_33371[(2)] = inst_33333);

(statearr_33355_33371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33347 === (7))){
var inst_33335 = coding_challenges.socket.test_session.call(null);
var state_33346__$1 = state_33346;
var statearr_33356_33372 = state_33346__$1;
(statearr_33356_33372[(2)] = inst_33335);

(statearr_33356_33372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33347 === (8))){
var inst_33340 = (state_33346[(2)]);
var inst_33341 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33340);
var inst_33325 = inst_33341;
var state_33346__$1 = (function (){var statearr_33357 = state_33346;
(statearr_33357[(7)] = inst_33325);

return statearr_33357;
})();
var statearr_33358_33373 = state_33346__$1;
(statearr_33358_33373[(2)] = null);

(statearr_33358_33373[(1)] = (3));


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
});})(c__17391__auto__))
;
return ((function (switch__17279__auto__,c__17391__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__17280__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__17280__auto____0 = (function (){
var statearr_33362 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33362[(0)] = coding_challenges$socket$event_loop_$_state_machine__17280__auto__);

(statearr_33362[(1)] = (1));

return statearr_33362;
});
var coding_challenges$socket$event_loop_$_state_machine__17280__auto____1 = (function (state_33346){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_33346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e33363){if((e33363 instanceof Object)){
var ex__17283__auto__ = e33363;
var statearr_33364_33374 = state_33346;
(statearr_33364_33374[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33375 = state_33346;
state_33346 = G__33375;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__17280__auto__ = function(state_33346){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__17280__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__17280__auto____1.call(this,state_33346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__17280__auto____0;
coding_challenges$socket$event_loop_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__17280__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto__))
})();
var state__17393__auto__ = (function (){var statearr_33365 = f__17392__auto__.call(null);
(statearr_33365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto__);

return statearr_33365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto__))
);

return c__17391__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484366725606
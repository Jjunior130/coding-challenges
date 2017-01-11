// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__33221_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__33221_SHARP_)].join('');
})], null));
}
var map__33222_33224 = coding_challenges.socket.sente_socket;
var map__33222_33225__$1 = ((((!((map__33222_33224 == null)))?((((map__33222_33224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33222_33224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33222_33224):map__33222_33224);
var chsk_33226 = cljs.core.get.call(null,map__33222_33225__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_33227 = cljs.core.get.call(null,map__33222_33225__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_33228 = cljs.core.get.call(null,map__33222_33225__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_33229 = cljs.core.get.call(null,map__33222_33225__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_33226;

coding_challenges.socket.ch_chsk = ch_recv_33227;

coding_challenges.socket.chsk_send_BANG_ = send_fn_33228;

coding_challenges.socket.chsk_state = state_33229;
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
return (function (p__33230){
var vec__33231 = p__33230;
var ev_id = cljs.core.nth.call(null,vec__33231,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__33231,(1),null);
return ev_id;
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__33234){
var vec__33235 = p__33234;
var _ = cljs.core.nth.call(null,vec__33235,(0),null);
var st = cljs.core.nth.call(null,vec__33235,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__33238){
var vec__33239 = p__33238;
var _ = cljs.core.nth.call(null,vec__33239,(0),null);
var vec__33242 = cljs.core.nth.call(null,vec__33239,(1),null);
var srts = cljs.core.nth.call(null,vec__33242,(0),null);
var csp = cljs.core.nth.call(null,vec__33242,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__33245){
var vec__33246 = p__33245;
var _ = cljs.core.nth.call(null,vec__33246,(0),null);
var cns = cljs.core.nth.call(null,vec__33246,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__33249){
var vec__33250 = p__33249;
var _ = cljs.core.nth.call(null,vec__33250,(0),null);
var msg = cljs.core.nth.call(null,vec__33250,(1),null);
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
var c__17384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto__){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto__){
return (function (state_33339){
var state_val_33340 = (state_33339[(1)]);
if((state_val_33340 === (1))){
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33339__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33340 === (2))){
var inst_33314 = (state_33339[(2)]);
var inst_33315 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33314);
var inst_33316 = cljs.core.nth.call(null,inst_33315,(0),null);
var inst_33317 = cljs.core.nth.call(null,inst_33315,(1),null);
var inst_33318 = inst_33315;
var state_33339__$1 = (function (){var statearr_33341 = state_33339;
(statearr_33341[(7)] = inst_33317);

(statearr_33341[(8)] = inst_33318);

(statearr_33341[(9)] = inst_33316);

return statearr_33341;
})();
var statearr_33342_33359 = state_33339__$1;
(statearr_33342_33359[(2)] = null);

(statearr_33342_33359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (3))){
var inst_33318 = (state_33339[(8)]);
var inst_33323 = cljs.core.nth.call(null,inst_33318,(0),null);
var inst_33324 = cljs.core.nth.call(null,inst_33318,(1),null);
var inst_33325 = cljs.core.println.call(null,"-",inst_33323);
var state_33339__$1 = (function (){var statearr_33343 = state_33339;
(statearr_33343[(10)] = inst_33325);

(statearr_33343[(11)] = inst_33324);

return statearr_33343;
})();
var G__33344_33360 = (((inst_33323 instanceof cljs.core.Keyword))?inst_33323.fqn:null);
switch (G__33344_33360) {
case "chsk/recv":
var statearr_33345_33362 = state_33339__$1;
(statearr_33345_33362[(1)] = (6));


break;
default:
var statearr_33346_33363 = state_33339__$1;
(statearr_33346_33363[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (4))){
var inst_33337 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33339__$1,inst_33337);
} else {
if((state_val_33340 === (5))){
var inst_33331 = (state_33339[(2)]);
var state_33339__$1 = (function (){var statearr_33347 = state_33339;
(statearr_33347[(12)] = inst_33331);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33339__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33340 === (6))){
var inst_33324 = (state_33339[(11)]);
var inst_33326 = coding_challenges.socket.handle_event.call(null,inst_33324);
var state_33339__$1 = state_33339;
var statearr_33348_33364 = state_33339__$1;
(statearr_33348_33364[(2)] = inst_33326);

(statearr_33348_33364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (7))){
var inst_33328 = coding_challenges.socket.test_session.call(null);
var state_33339__$1 = state_33339;
var statearr_33349_33365 = state_33339__$1;
(statearr_33349_33365[(2)] = inst_33328);

(statearr_33349_33365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (8))){
var inst_33333 = (state_33339[(2)]);
var inst_33334 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33333);
var inst_33318 = inst_33334;
var state_33339__$1 = (function (){var statearr_33350 = state_33339;
(statearr_33350[(8)] = inst_33318);

return statearr_33350;
})();
var statearr_33351_33366 = state_33339__$1;
(statearr_33351_33366[(2)] = null);

(statearr_33351_33366[(1)] = (3));


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
});})(c__17384__auto__))
;
return ((function (switch__17272__auto__,c__17384__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__17273__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__17273__auto____0 = (function (){
var statearr_33355 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33355[(0)] = coding_challenges$socket$event_loop_$_state_machine__17273__auto__);

(statearr_33355[(1)] = (1));

return statearr_33355;
});
var coding_challenges$socket$event_loop_$_state_machine__17273__auto____1 = (function (state_33339){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_33339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e33356){if((e33356 instanceof Object)){
var ex__17276__auto__ = e33356;
var statearr_33357_33367 = state_33339;
(statearr_33357_33367[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33368 = state_33339;
state_33339 = G__33368;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__17273__auto__ = function(state_33339){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__17273__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__17273__auto____1.call(this,state_33339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__17273__auto____0;
coding_challenges$socket$event_loop_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__17273__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto__))
})();
var state__17386__auto__ = (function (){var statearr_33358 = f__17385__auto__.call(null);
(statearr_33358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto__);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto__))
);

return c__17384__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484115250882
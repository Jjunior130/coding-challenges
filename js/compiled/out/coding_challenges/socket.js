// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__33201_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__33201_SHARP_)].join('');
})], null));
}
var map__33202_33204 = coding_challenges.socket.sente_socket;
var map__33202_33205__$1 = ((((!((map__33202_33204 == null)))?((((map__33202_33204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33202_33204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202_33204):map__33202_33204);
var chsk_33206 = cljs.core.get.call(null,map__33202_33205__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_33207 = cljs.core.get.call(null,map__33202_33205__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_33208 = cljs.core.get.call(null,map__33202_33205__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_33209 = cljs.core.get.call(null,map__33202_33205__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_33206;

coding_challenges.socket.ch_chsk = ch_recv_33207;

coding_challenges.socket.chsk_send_BANG_ = send_fn_33208;

coding_challenges.socket.chsk_state = state_33209;
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
return (function (p__33210){
var vec__33211 = p__33210;
var ev_id = cljs.core.nth.call(null,vec__33211,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__33211,(1),null);
return ev_id;
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__33214){
var vec__33215 = p__33214;
var _ = cljs.core.nth.call(null,vec__33215,(0),null);
var st = cljs.core.nth.call(null,vec__33215,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__33218){
var vec__33219 = p__33218;
var _ = cljs.core.nth.call(null,vec__33219,(0),null);
var vec__33222 = cljs.core.nth.call(null,vec__33219,(1),null);
var srts = cljs.core.nth.call(null,vec__33222,(0),null);
var csp = cljs.core.nth.call(null,vec__33222,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__33225){
var vec__33226 = p__33225;
var _ = cljs.core.nth.call(null,vec__33226,(0),null);
var cns = cljs.core.nth.call(null,vec__33226,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__33229){
var vec__33230 = p__33229;
var _ = cljs.core.nth.call(null,vec__33230,(0),null);
var msg = cljs.core.nth.call(null,vec__33230,(1),null);
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
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__){
return (function (state_33319){
var state_val_33320 = (state_33319[(1)]);
if((state_val_33320 === (1))){
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33319__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33320 === (2))){
var inst_33294 = (state_33319[(2)]);
var inst_33295 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33294);
var inst_33296 = cljs.core.nth.call(null,inst_33295,(0),null);
var inst_33297 = cljs.core.nth.call(null,inst_33295,(1),null);
var inst_33298 = inst_33295;
var state_33319__$1 = (function (){var statearr_33321 = state_33319;
(statearr_33321[(7)] = inst_33298);

(statearr_33321[(8)] = inst_33297);

(statearr_33321[(9)] = inst_33296);

return statearr_33321;
})();
var statearr_33322_33339 = state_33319__$1;
(statearr_33322_33339[(2)] = null);

(statearr_33322_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (3))){
var inst_33298 = (state_33319[(7)]);
var inst_33303 = cljs.core.nth.call(null,inst_33298,(0),null);
var inst_33304 = cljs.core.nth.call(null,inst_33298,(1),null);
var inst_33305 = cljs.core.println.call(null,"-",inst_33303);
var state_33319__$1 = (function (){var statearr_33323 = state_33319;
(statearr_33323[(10)] = inst_33305);

(statearr_33323[(11)] = inst_33304);

return statearr_33323;
})();
var G__33324_33340 = (((inst_33303 instanceof cljs.core.Keyword))?inst_33303.fqn:null);
switch (G__33324_33340) {
case "chsk/recv":
var statearr_33325_33342 = state_33319__$1;
(statearr_33325_33342[(1)] = (6));


break;
default:
var statearr_33326_33343 = state_33319__$1;
(statearr_33326_33343[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (4))){
var inst_33317 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33319__$1,inst_33317);
} else {
if((state_val_33320 === (5))){
var inst_33311 = (state_33319[(2)]);
var state_33319__$1 = (function (){var statearr_33327 = state_33319;
(statearr_33327[(12)] = inst_33311);

return statearr_33327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33319__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_33320 === (6))){
var inst_33304 = (state_33319[(11)]);
var inst_33306 = coding_challenges.socket.handle_event.call(null,inst_33304);
var state_33319__$1 = state_33319;
var statearr_33328_33344 = state_33319__$1;
(statearr_33328_33344[(2)] = inst_33306);

(statearr_33328_33344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (7))){
var inst_33308 = coding_challenges.socket.test_session.call(null);
var state_33319__$1 = state_33319;
var statearr_33329_33345 = state_33319__$1;
(statearr_33329_33345[(2)] = inst_33308);

(statearr_33329_33345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (8))){
var inst_33313 = (state_33319[(2)]);
var inst_33314 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_33313);
var inst_33298 = inst_33314;
var state_33319__$1 = (function (){var statearr_33330 = state_33319;
(statearr_33330[(7)] = inst_33298);

return statearr_33330;
})();
var statearr_33331_33346 = state_33319__$1;
(statearr_33331_33346[(2)] = null);

(statearr_33331_33346[(1)] = (3));


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
});})(c__17364__auto__))
;
return ((function (switch__17252__auto__,c__17364__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__17253__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__17253__auto____0 = (function (){
var statearr_33335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33335[(0)] = coding_challenges$socket$event_loop_$_state_machine__17253__auto__);

(statearr_33335[(1)] = (1));

return statearr_33335;
});
var coding_challenges$socket$event_loop_$_state_machine__17253__auto____1 = (function (state_33319){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_33319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e33336){if((e33336 instanceof Object)){
var ex__17256__auto__ = e33336;
var statearr_33337_33347 = state_33319;
(statearr_33337_33347[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33348 = state_33319;
state_33319 = G__33348;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__17253__auto__ = function(state_33319){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__17253__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__17253__auto____1.call(this,state_33319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__17253__auto____0;
coding_challenges$socket$event_loop_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__17253__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__))
})();
var state__17366__auto__ = (function (){var statearr_33338 = f__17365__auto__.call(null);
(statearr_33338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__))
);

return c__17364__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1485243276351
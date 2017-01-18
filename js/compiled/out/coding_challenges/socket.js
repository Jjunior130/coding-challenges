// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__30719_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__30719_SHARP_)].join('');
})], null));
}
var map__30720_30722 = coding_challenges.socket.sente_socket;
var map__30720_30723__$1 = ((((!((map__30720_30722 == null)))?((((map__30720_30722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30720_30722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30720_30722):map__30720_30722);
var chsk_30724 = cljs.core.get.call(null,map__30720_30723__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_30725 = cljs.core.get.call(null,map__30720_30723__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_30726 = cljs.core.get.call(null,map__30720_30723__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_30727 = cljs.core.get.call(null,map__30720_30723__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_30724;

coding_challenges.socket.ch_chsk = ch_recv_30725;

coding_challenges.socket.chsk_send_BANG_ = send_fn_30726;

coding_challenges.socket.chsk_state = state_30727;
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
return (function (p__30728){
var vec__30729 = p__30728;
var ev_id = cljs.core.nth.call(null,vec__30729,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__30729,(1),null);
return ev_id;
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__30732){
var vec__30733 = p__30732;
var _ = cljs.core.nth.call(null,vec__30733,(0),null);
var st = cljs.core.nth.call(null,vec__30733,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__30736){
var vec__30737 = p__30736;
var _ = cljs.core.nth.call(null,vec__30737,(0),null);
var vec__30740 = cljs.core.nth.call(null,vec__30737,(1),null);
var srts = cljs.core.nth.call(null,vec__30740,(0),null);
var csp = cljs.core.nth.call(null,vec__30740,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__30743){
var vec__30744 = p__30743;
var _ = cljs.core.nth.call(null,vec__30744,(0),null);
var cns = cljs.core.nth.call(null,vec__30744,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__30747){
var vec__30748 = p__30747;
var _ = cljs.core.nth.call(null,vec__30748,(0),null);
var msg = cljs.core.nth.call(null,vec__30748,(1),null);
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
var c__15296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15296__auto__){
return (function (){
var f__15297__auto__ = (function (){var switch__15275__auto__ = ((function (c__15296__auto__){
return (function (state_30837){
var state_val_30838 = (state_30837[(1)]);
if((state_val_30838 === (1))){
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30837__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_30838 === (2))){
var inst_30812 = (state_30837[(2)]);
var inst_30813 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_30812);
var inst_30814 = cljs.core.nth.call(null,inst_30813,(0),null);
var inst_30815 = cljs.core.nth.call(null,inst_30813,(1),null);
var inst_30816 = inst_30813;
var state_30837__$1 = (function (){var statearr_30839 = state_30837;
(statearr_30839[(7)] = inst_30814);

(statearr_30839[(8)] = inst_30816);

(statearr_30839[(9)] = inst_30815);

return statearr_30839;
})();
var statearr_30840_30857 = state_30837__$1;
(statearr_30840_30857[(2)] = null);

(statearr_30840_30857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (3))){
var inst_30816 = (state_30837[(8)]);
var inst_30821 = cljs.core.nth.call(null,inst_30816,(0),null);
var inst_30822 = cljs.core.nth.call(null,inst_30816,(1),null);
var inst_30823 = cljs.core.println.call(null,"-",inst_30821);
var state_30837__$1 = (function (){var statearr_30841 = state_30837;
(statearr_30841[(10)] = inst_30823);

(statearr_30841[(11)] = inst_30822);

return statearr_30841;
})();
var G__30842_30858 = (((inst_30821 instanceof cljs.core.Keyword))?inst_30821.fqn:null);
switch (G__30842_30858) {
case "chsk/recv":
var statearr_30843_30860 = state_30837__$1;
(statearr_30843_30860[(1)] = (6));


break;
default:
var statearr_30844_30861 = state_30837__$1;
(statearr_30844_30861[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (4))){
var inst_30835 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30837__$1,inst_30835);
} else {
if((state_val_30838 === (5))){
var inst_30829 = (state_30837[(2)]);
var state_30837__$1 = (function (){var statearr_30845 = state_30837;
(statearr_30845[(12)] = inst_30829);

return statearr_30845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30837__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_30838 === (6))){
var inst_30822 = (state_30837[(11)]);
var inst_30824 = coding_challenges.socket.handle_event.call(null,inst_30822);
var state_30837__$1 = state_30837;
var statearr_30846_30862 = state_30837__$1;
(statearr_30846_30862[(2)] = inst_30824);

(statearr_30846_30862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (7))){
var inst_30826 = coding_challenges.socket.test_session.call(null);
var state_30837__$1 = state_30837;
var statearr_30847_30863 = state_30837__$1;
(statearr_30847_30863[(2)] = inst_30826);

(statearr_30847_30863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (8))){
var inst_30831 = (state_30837[(2)]);
var inst_30832 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_30831);
var inst_30816 = inst_30832;
var state_30837__$1 = (function (){var statearr_30848 = state_30837;
(statearr_30848[(8)] = inst_30816);

return statearr_30848;
})();
var statearr_30849_30864 = state_30837__$1;
(statearr_30849_30864[(2)] = null);

(statearr_30849_30864[(1)] = (3));


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
});})(c__15296__auto__))
;
return ((function (switch__15275__auto__,c__15296__auto__){
return (function() {
var coding_challenges$socket$event_loop_$_state_machine__15276__auto__ = null;
var coding_challenges$socket$event_loop_$_state_machine__15276__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = coding_challenges$socket$event_loop_$_state_machine__15276__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var coding_challenges$socket$event_loop_$_state_machine__15276__auto____1 = (function (state_30837){
while(true){
var ret_value__15277__auto__ = (function (){try{while(true){
var result__15278__auto__ = switch__15275__auto__.call(null,state_30837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15278__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__15279__auto__ = e30854;
var statearr_30855_30865 = state_30837;
(statearr_30855_30865[(5)] = ex__15279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30866 = state_30837;
state_30837 = G__30866;
continue;
} else {
return ret_value__15277__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__15276__auto__ = function(state_30837){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__15276__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__15276__auto____1.call(this,state_30837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__15276__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__15276__auto____0;
coding_challenges$socket$event_loop_$_state_machine__15276__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__15276__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__15276__auto__;
})()
;})(switch__15275__auto__,c__15296__auto__))
})();
var state__15298__auto__ = (function (){var statearr_30856 = f__15297__auto__.call(null);
(statearr_30856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15296__auto__);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15298__auto__);
});})(c__15296__auto__))
);

return c__15296__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484702581706
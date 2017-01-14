// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.socket');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
if(typeof coding_challenges.socket.sente_socket !== 'undefined'){
} else {
coding_challenges.socket.sente_socket = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),(function (p1__60073_SHARP_){
return [cljs.core.str("ws://localhost:3001"),cljs.core.str(p1__60073_SHARP_)].join('');
})], null));
}
var map__60074_60076 = coding_challenges.socket.sente_socket;
var map__60074_60077__$1 = ((((!((map__60074_60076 == null)))?((((map__60074_60076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60074_60076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60074_60076):map__60074_60076);
var chsk_60078 = cljs.core.get.call(null,map__60074_60077__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_60079 = cljs.core.get.call(null,map__60074_60077__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_60080 = cljs.core.get.call(null,map__60074_60077__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_60081 = cljs.core.get.call(null,map__60074_60077__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
coding_challenges.socket.chsk = chsk_60078;

coding_challenges.socket.ch_chsk = ch_recv_60079;

coding_challenges.socket.chsk_send_BANG_ = send_fn_60080;

coding_challenges.socket.chsk_state = state_60081;
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
return (function (p__60082){
var vec__60083 = p__60082;
var ev_id = cljs.core.nth.call(null,vec__60083,(0),null);
var ev_arg = cljs.core.nth.call(null,vec__60083,(1),null);
return ev_id;
});})(method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__,hierarchy__25975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25975__auto__,method_table__25971__auto__,prefer_table__25972__auto__,method_cache__25973__auto__,cached_hierarchy__25974__auto__));
})();
}
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","server-state","client/server-state",-535614260),(function (p__60086){
var vec__60087 = p__60086;
var _ = cljs.core.nth.call(null,vec__60087,(0),null);
var st = cljs.core.nth.call(null,vec__60087,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-state","server-state",-1360780897),st], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","ping","client/ping",-315005109),(function (p__60090){
var vec__60091 = p__60090;
var _ = cljs.core.nth.call(null,vec__60091,(0),null);
var vec__60094 = cljs.core.nth.call(null,vec__60091,(1),null);
var srts = cljs.core.nth.call(null,vec__60094,(0),null);
var csp = cljs.core.nth.call(null,vec__60094,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [csp,((new Date()).getTime() - srts)], null)], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("client","connections","client/connections",-706255568),(function (p__60097){
var vec__60098 = p__60097;
var _ = cljs.core.nth.call(null,vec__60098,(0),null);
var cns = cljs.core.nth.call(null,vec__60098,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null),cns], null)], null));
}));
cljs.core._add_method.call(null,coding_challenges.socket.handle_event,new cljs.core.Keyword("test","reply","test/reply",1080809065),(function (p__60101){
var vec__60102 = p__60101;
var _ = cljs.core.nth.call(null,vec__60102,(0),null);
var msg = cljs.core.nth.call(null,vec__60102,(1),null);
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
return (function (state_60191){
var state_val_60192 = (state_60191[(1)]);
if((state_val_60192 === (1))){
var state_60191__$1 = state_60191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60191__$1,(2),coding_challenges.socket.ch_chsk);
} else {
if((state_val_60192 === (2))){
var inst_60166 = (state_60191[(2)]);
var inst_60167 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_60166);
var inst_60168 = cljs.core.nth.call(null,inst_60167,(0),null);
var inst_60169 = cljs.core.nth.call(null,inst_60167,(1),null);
var inst_60170 = inst_60167;
var state_60191__$1 = (function (){var statearr_60193 = state_60191;
(statearr_60193[(7)] = inst_60169);

(statearr_60193[(8)] = inst_60168);

(statearr_60193[(9)] = inst_60170);

return statearr_60193;
})();
var statearr_60194_60211 = state_60191__$1;
(statearr_60194_60211[(2)] = null);

(statearr_60194_60211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60192 === (3))){
var inst_60170 = (state_60191[(9)]);
var inst_60175 = cljs.core.nth.call(null,inst_60170,(0),null);
var inst_60176 = cljs.core.nth.call(null,inst_60170,(1),null);
var inst_60177 = cljs.core.println.call(null,"-",inst_60175);
var state_60191__$1 = (function (){var statearr_60195 = state_60191;
(statearr_60195[(10)] = inst_60177);

(statearr_60195[(11)] = inst_60176);

return statearr_60195;
})();
var G__60196_60212 = (((inst_60175 instanceof cljs.core.Keyword))?inst_60175.fqn:null);
switch (G__60196_60212) {
case "chsk/recv":
var statearr_60197_60214 = state_60191__$1;
(statearr_60197_60214[(1)] = (6));


break;
default:
var statearr_60198_60215 = state_60191__$1;
(statearr_60198_60215[(1)] = (7));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60192 === (4))){
var inst_60189 = (state_60191[(2)]);
var state_60191__$1 = state_60191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60191__$1,inst_60189);
} else {
if((state_val_60192 === (5))){
var inst_60183 = (state_60191[(2)]);
var state_60191__$1 = (function (){var statearr_60199 = state_60191;
(statearr_60199[(12)] = inst_60183);

return statearr_60199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60191__$1,(8),coding_challenges.socket.ch_chsk);
} else {
if((state_val_60192 === (6))){
var inst_60176 = (state_60191[(11)]);
var inst_60178 = coding_challenges.socket.handle_event.call(null,inst_60176);
var state_60191__$1 = state_60191;
var statearr_60200_60216 = state_60191__$1;
(statearr_60200_60216[(2)] = inst_60178);

(statearr_60200_60216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60192 === (7))){
var inst_60180 = coding_challenges.socket.test_session.call(null);
var state_60191__$1 = state_60191;
var statearr_60201_60217 = state_60191__$1;
(statearr_60201_60217[(2)] = inst_60180);

(statearr_60201_60217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60192 === (8))){
var inst_60185 = (state_60191[(2)]);
var inst_60186 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_60185);
var inst_60170 = inst_60186;
var state_60191__$1 = (function (){var statearr_60202 = state_60191;
(statearr_60202[(9)] = inst_60170);

return statearr_60202;
})();
var statearr_60203_60218 = state_60191__$1;
(statearr_60203_60218[(2)] = null);

(statearr_60203_60218[(1)] = (3));


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
var statearr_60207 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60207[(0)] = coding_challenges$socket$event_loop_$_state_machine__33288__auto__);

(statearr_60207[(1)] = (1));

return statearr_60207;
});
var coding_challenges$socket$event_loop_$_state_machine__33288__auto____1 = (function (state_60191){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_60191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e60208){if((e60208 instanceof Object)){
var ex__33291__auto__ = e60208;
var statearr_60209_60219 = state_60191;
(statearr_60209_60219[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60220 = state_60191;
state_60191 = G__60220;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
coding_challenges$socket$event_loop_$_state_machine__33288__auto__ = function(state_60191){
switch(arguments.length){
case 0:
return coding_challenges$socket$event_loop_$_state_machine__33288__auto____0.call(this);
case 1:
return coding_challenges$socket$event_loop_$_state_machine__33288__auto____1.call(this,state_60191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coding_challenges$socket$event_loop_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = coding_challenges$socket$event_loop_$_state_machine__33288__auto____0;
coding_challenges$socket$event_loop_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = coding_challenges$socket$event_loop_$_state_machine__33288__auto____1;
return coding_challenges$socket$event_loop_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_60210 = f__33353__auto__.call(null);
(statearr_60210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_60210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
});

//# sourceMappingURL=socket.js.map?rel=1484333396174
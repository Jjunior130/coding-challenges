// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__13482_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__13482_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___13483 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___13483)){
var not_i_13484 = temp__4657__auto___13483;
if(cljs.core.fn_QMARK_.call(null,not_i_13484)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_13484);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_13484);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_13499 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13500 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13457__auto___13513 = re_frame.interop.now.call(null);
var duration__13458__auto___13514 = (end__13457__auto___13513 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__13501_13515 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13502_13516 = null;
var count__13503_13517 = (0);
var i__13504_13518 = (0);
while(true){
if((i__13504_13518 < count__13503_13517)){
var vec__13505_13519 = cljs.core._nth.call(null,chunk__13502_13516,i__13504_13518);
var k__13459__auto___13520 = cljs.core.nth.call(null,vec__13505_13519,(0),null);
var cb__13460__auto___13521 = cljs.core.nth.call(null,vec__13505_13519,(1),null);
try{cb__13460__auto___13521.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13458__auto___13514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13508){if((e13508 instanceof java.lang.Exception)){
var e__13461__auto___13522 = e13508;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13459__auto___13520,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13461__auto___13522);
} else {
throw e13508;

}
}
var G__13523 = seq__13501_13515;
var G__13524 = chunk__13502_13516;
var G__13525 = count__13503_13517;
var G__13526 = (i__13504_13518 + (1));
seq__13501_13515 = G__13523;
chunk__13502_13516 = G__13524;
count__13503_13517 = G__13525;
i__13504_13518 = G__13526;
continue;
} else {
var temp__4657__auto___13527 = cljs.core.seq.call(null,seq__13501_13515);
if(temp__4657__auto___13527){
var seq__13501_13528__$1 = temp__4657__auto___13527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13501_13528__$1)){
var c__7230__auto___13529 = cljs.core.chunk_first.call(null,seq__13501_13528__$1);
var G__13530 = cljs.core.chunk_rest.call(null,seq__13501_13528__$1);
var G__13531 = c__7230__auto___13529;
var G__13532 = cljs.core.count.call(null,c__7230__auto___13529);
var G__13533 = (0);
seq__13501_13515 = G__13530;
chunk__13502_13516 = G__13531;
count__13503_13517 = G__13532;
i__13504_13518 = G__13533;
continue;
} else {
var vec__13509_13534 = cljs.core.first.call(null,seq__13501_13528__$1);
var k__13459__auto___13535 = cljs.core.nth.call(null,vec__13509_13534,(0),null);
var cb__13460__auto___13536 = cljs.core.nth.call(null,vec__13509_13534,(1),null);
try{cb__13460__auto___13536.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13458__auto___13514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13512){if((e13512 instanceof java.lang.Exception)){
var e__13461__auto___13537 = e13512;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13459__auto___13535,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13461__auto___13537);
} else {
throw e13512;

}
}
var G__13538 = cljs.core.next.call(null,seq__13501_13528__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13501_13515 = G__13538;
chunk__13502_13516 = G__13539;
count__13503_13517 = G__13540;
i__13504_13518 = G__13541;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13500;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_13499;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1484702544842
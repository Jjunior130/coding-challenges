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
var make_chain = (function (p1__13472_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__13472_SHARP_));
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

var temp__4657__auto___13473 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___13473)){
var not_i_13474 = temp__4657__auto___13473;
if(cljs.core.fn_QMARK_.call(null,not_i_13474)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_13474);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_13474);
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
var _STAR_handling_STAR_13489 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13490 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___13503 = re_frame.interop.now.call(null);
var duration__13448__auto___13504 = (end__13447__auto___13503 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__13491_13505 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13492_13506 = null;
var count__13493_13507 = (0);
var i__13494_13508 = (0);
while(true){
if((i__13494_13508 < count__13493_13507)){
var vec__13495_13509 = cljs.core._nth.call(null,chunk__13492_13506,i__13494_13508);
var k__13449__auto___13510 = cljs.core.nth.call(null,vec__13495_13509,(0),null);
var cb__13450__auto___13511 = cljs.core.nth.call(null,vec__13495_13509,(1),null);
try{cb__13450__auto___13511.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13504,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13498){if((e13498 instanceof java.lang.Exception)){
var e__13451__auto___13512 = e13498;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13510,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13512);
} else {
throw e13498;

}
}
var G__13513 = seq__13491_13505;
var G__13514 = chunk__13492_13506;
var G__13515 = count__13493_13507;
var G__13516 = (i__13494_13508 + (1));
seq__13491_13505 = G__13513;
chunk__13492_13506 = G__13514;
count__13493_13507 = G__13515;
i__13494_13508 = G__13516;
continue;
} else {
var temp__4657__auto___13517 = cljs.core.seq.call(null,seq__13491_13505);
if(temp__4657__auto___13517){
var seq__13491_13518__$1 = temp__4657__auto___13517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13491_13518__$1)){
var c__7220__auto___13519 = cljs.core.chunk_first.call(null,seq__13491_13518__$1);
var G__13520 = cljs.core.chunk_rest.call(null,seq__13491_13518__$1);
var G__13521 = c__7220__auto___13519;
var G__13522 = cljs.core.count.call(null,c__7220__auto___13519);
var G__13523 = (0);
seq__13491_13505 = G__13520;
chunk__13492_13506 = G__13521;
count__13493_13507 = G__13522;
i__13494_13508 = G__13523;
continue;
} else {
var vec__13499_13524 = cljs.core.first.call(null,seq__13491_13518__$1);
var k__13449__auto___13525 = cljs.core.nth.call(null,vec__13499_13524,(0),null);
var cb__13450__auto___13526 = cljs.core.nth.call(null,vec__13499_13524,(1),null);
try{cb__13450__auto___13526.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13504,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13502){if((e13502 instanceof java.lang.Exception)){
var e__13451__auto___13527 = e13502;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13525,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13527);
} else {
throw e13502;

}
}
var G__13528 = cljs.core.next.call(null,seq__13491_13518__$1);
var G__13529 = null;
var G__13530 = (0);
var G__13531 = (0);
seq__13491_13505 = G__13528;
chunk__13492_13506 = G__13529;
count__13493_13507 = G__13530;
i__13494_13508 = G__13531;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13490;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_13489;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1484162989368
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
var make_chain = (function (p1__131549_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__131549_SHARP_));
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

var temp__4657__auto___131550 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___131550)){
var not_i_131551 = temp__4657__auto___131550;
if(cljs.core.fn_QMARK_.call(null,not_i_131551)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_131551);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_131551);
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
var _STAR_handling_STAR_131566 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_131567 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32048__auto___131580 = re_frame.interop.now.call(null);
var duration__32049__auto___131581 = (end__32048__auto___131580 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__131568_131582 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__131569_131583 = null;
var count__131570_131584 = (0);
var i__131571_131585 = (0);
while(true){
if((i__131571_131585 < count__131570_131584)){
var vec__131572_131586 = cljs.core._nth.call(null,chunk__131569_131583,i__131571_131585);
var k__32050__auto___131587 = cljs.core.nth.call(null,vec__131572_131586,(0),null);
var cb__32051__auto___131588 = cljs.core.nth.call(null,vec__131572_131586,(1),null);
try{cb__32051__auto___131588.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32049__auto___131581,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e131575){if((e131575 instanceof java.lang.Exception)){
var e__32052__auto___131589 = e131575;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32050__auto___131587,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32052__auto___131589);
} else {
throw e131575;

}
}
var G__131590 = seq__131568_131582;
var G__131591 = chunk__131569_131583;
var G__131592 = count__131570_131584;
var G__131593 = (i__131571_131585 + (1));
seq__131568_131582 = G__131590;
chunk__131569_131583 = G__131591;
count__131570_131584 = G__131592;
i__131571_131585 = G__131593;
continue;
} else {
var temp__4657__auto___131594 = cljs.core.seq.call(null,seq__131568_131582);
if(temp__4657__auto___131594){
var seq__131568_131595__$1 = temp__4657__auto___131594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131568_131595__$1)){
var c__25857__auto___131596 = cljs.core.chunk_first.call(null,seq__131568_131595__$1);
var G__131597 = cljs.core.chunk_rest.call(null,seq__131568_131595__$1);
var G__131598 = c__25857__auto___131596;
var G__131599 = cljs.core.count.call(null,c__25857__auto___131596);
var G__131600 = (0);
seq__131568_131582 = G__131597;
chunk__131569_131583 = G__131598;
count__131570_131584 = G__131599;
i__131571_131585 = G__131600;
continue;
} else {
var vec__131576_131601 = cljs.core.first.call(null,seq__131568_131595__$1);
var k__32050__auto___131602 = cljs.core.nth.call(null,vec__131576_131601,(0),null);
var cb__32051__auto___131603 = cljs.core.nth.call(null,vec__131576_131601,(1),null);
try{cb__32051__auto___131603.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32049__auto___131581,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e131579){if((e131579 instanceof java.lang.Exception)){
var e__32052__auto___131604 = e131579;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32050__auto___131602,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32052__auto___131604);
} else {
throw e131579;

}
}
var G__131605 = cljs.core.next.call(null,seq__131568_131595__$1);
var G__131606 = null;
var G__131607 = (0);
var G__131608 = (0);
seq__131568_131582 = G__131605;
chunk__131569_131583 = G__131606;
count__131570_131584 = G__131607;
i__131571_131585 = G__131608;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_131567;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_131566;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1484099804223
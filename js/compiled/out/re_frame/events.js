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
var make_chain = (function (p1__52073_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__52073_SHARP_));
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

var temp__4657__auto___52074 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___52074)){
var not_i_52075 = temp__4657__auto___52074;
if(cljs.core.fn_QMARK_.call(null,not_i_52075)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_52075);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_52075);
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
var _STAR_handling_STAR_52090 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_52091 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32048__auto___52104 = re_frame.interop.now.call(null);
var duration__32049__auto___52105 = (end__32048__auto___52104 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__52092_52106 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__52093_52107 = null;
var count__52094_52108 = (0);
var i__52095_52109 = (0);
while(true){
if((i__52095_52109 < count__52094_52108)){
var vec__52096_52110 = cljs.core._nth.call(null,chunk__52093_52107,i__52095_52109);
var k__32050__auto___52111 = cljs.core.nth.call(null,vec__52096_52110,(0),null);
var cb__32051__auto___52112 = cljs.core.nth.call(null,vec__52096_52110,(1),null);
try{cb__32051__auto___52112.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32049__auto___52105,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52099){if((e52099 instanceof java.lang.Exception)){
var e__32052__auto___52113 = e52099;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32050__auto___52111,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32052__auto___52113);
} else {
throw e52099;

}
}
var G__52114 = seq__52092_52106;
var G__52115 = chunk__52093_52107;
var G__52116 = count__52094_52108;
var G__52117 = (i__52095_52109 + (1));
seq__52092_52106 = G__52114;
chunk__52093_52107 = G__52115;
count__52094_52108 = G__52116;
i__52095_52109 = G__52117;
continue;
} else {
var temp__4657__auto___52118 = cljs.core.seq.call(null,seq__52092_52106);
if(temp__4657__auto___52118){
var seq__52092_52119__$1 = temp__4657__auto___52118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52092_52119__$1)){
var c__25857__auto___52120 = cljs.core.chunk_first.call(null,seq__52092_52119__$1);
var G__52121 = cljs.core.chunk_rest.call(null,seq__52092_52119__$1);
var G__52122 = c__25857__auto___52120;
var G__52123 = cljs.core.count.call(null,c__25857__auto___52120);
var G__52124 = (0);
seq__52092_52106 = G__52121;
chunk__52093_52107 = G__52122;
count__52094_52108 = G__52123;
i__52095_52109 = G__52124;
continue;
} else {
var vec__52100_52125 = cljs.core.first.call(null,seq__52092_52119__$1);
var k__32050__auto___52126 = cljs.core.nth.call(null,vec__52100_52125,(0),null);
var cb__32051__auto___52127 = cljs.core.nth.call(null,vec__52100_52125,(1),null);
try{cb__32051__auto___52127.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32049__auto___52105,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52103){if((e52103 instanceof java.lang.Exception)){
var e__32052__auto___52128 = e52103;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32050__auto___52126,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32052__auto___52128);
} else {
throw e52103;

}
}
var G__52129 = cljs.core.next.call(null,seq__52092_52119__$1);
var G__52130 = null;
var G__52131 = (0);
var G__52132 = (0);
seq__52092_52106 = G__52129;
chunk__52093_52107 = G__52130;
count__52094_52108 = G__52131;
i__52095_52109 = G__52132;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_52091;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_52090;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1484333382234
// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.subs');
goog.require('clojure.set');
goog.require('re_frame.cofx');
goog.require('re_frame.interceptor');
goog.require('re_frame.fx');
goog.require('re_frame.events');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.std_interceptors');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
/**
 * Associate a given `query id` with a given subscription handler function `handler-fn`
 * which is expected to take two arguments: app-db and query vector, and return
 * a `reaction`.
 * 
 *   This is a low level, advanced function.  You should probably be using reg-sub
 *   instead.
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattening).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args14117 = [];
var len__7484__auto___14120 = arguments.length;
var i__7485__auto___14121 = (0);
while(true){
if((i__7485__auto___14121 < len__7484__auto___14120)){
args14117.push((arguments[i__7485__auto___14121]));

var G__14122 = (i__7485__auto___14121 + (1));
i__7485__auto___14121 = G__14122;
continue;
} else {
}
break;
}

var G__14119 = args14117.length;
switch (G__14119) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14117.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.call(null,id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor.call(null,db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args14124 = [];
var len__7484__auto___14127 = arguments.length;
var i__7485__auto___14128 = (0);
while(true){
if((i__7485__auto___14128 < len__7484__auto___14127)){
args14124.push((arguments[i__7485__auto___14128]));

var G__14129 = (i__7485__auto___14128 + (1));
i__7485__auto___14128 = G__14129;
continue;
} else {
}
break;
}

var G__14126 = args14124.length;
switch (G__14126) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14124.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.call(null,id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args14131 = [];
var len__7484__auto___14134 = arguments.length;
var i__7485__auto___14135 = (0);
while(true){
if((i__7485__auto___14135 < len__7484__auto___14134)){
args14131.push((arguments[i__7485__auto___14135]));

var G__14136 = (i__7485__auto___14135 + (1));
i__7485__auto___14135 = G__14136;
continue;
} else {
}
break;
}

var G__14133 = args14131.length;
switch (G__14133) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14131.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_14146 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_14147 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var seq__14142_14148 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_14147,original_subs_14146));
var chunk__14143_14149 = null;
var count__14144_14150 = (0);
var i__14145_14151 = (0);
while(true){
if((i__14145_14151 < count__14144_14150)){
var sub_14152 = cljs.core._nth.call(null,chunk__14143_14149,i__14145_14151);
re_frame.interop.dispose_BANG_.call(null,sub_14152);

var G__14153 = seq__14142_14148;
var G__14154 = chunk__14143_14149;
var G__14155 = count__14144_14150;
var G__14156 = (i__14145_14151 + (1));
seq__14142_14148 = G__14153;
chunk__14143_14149 = G__14154;
count__14144_14150 = G__14155;
i__14145_14151 = G__14156;
continue;
} else {
var temp__4657__auto___14157 = cljs.core.seq.call(null,seq__14142_14148);
if(temp__4657__auto___14157){
var seq__14142_14158__$1 = temp__4657__auto___14157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14142_14158__$1)){
var c__7220__auto___14159 = cljs.core.chunk_first.call(null,seq__14142_14158__$1);
var G__14160 = cljs.core.chunk_rest.call(null,seq__14142_14158__$1);
var G__14161 = c__7220__auto___14159;
var G__14162 = cljs.core.count.call(null,c__7220__auto___14159);
var G__14163 = (0);
seq__14142_14148 = G__14160;
chunk__14143_14149 = G__14161;
count__14144_14150 = G__14162;
i__14145_14151 = G__14163;
continue;
} else {
var sub_14164 = cljs.core.first.call(null,seq__14142_14158__$1);
re_frame.interop.dispose_BANG_.call(null,sub_14164);

var G__14165 = cljs.core.next.call(null,seq__14142_14158__$1);
var G__14166 = null;
var G__14167 = (0);
var G__14168 = (0);
seq__14142_14148 = G__14165;
chunk__14143_14149 = G__14166;
count__14144_14150 = G__14167;
i__14145_14151 = G__14168;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args14169 = [];
var len__7484__auto___14172 = arguments.length;
var i__7485__auto___14173 = (0);
while(true){
if((i__7485__auto___14173 < len__7484__auto___14172)){
args14169.push((arguments[i__7485__auto___14173]));

var G__14174 = (i__7485__auto___14173 + (1));
i__7485__auto___14173 = G__14174;
continue;
} else {
}
break;
}

var G__14171 = args14169.length;
switch (G__14171) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14169.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.call(null,f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback.call(null,re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback.call(null,re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14177 = arguments.length;
var i__7485__auto___14178 = (0);
while(true){
if((i__7485__auto___14178 < len__7484__auto___14177)){
args__7491__auto__.push((arguments[i__7485__auto___14178]));

var G__14179 = (i__7485__auto___14178 + (1));
i__7485__auto___14178 = G__14179;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq14176){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14176));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14181 = arguments.length;
var i__7485__auto___14182 = (0);
while(true){
if((i__7485__auto___14182 < len__7484__auto___14181)){
args__7491__auto__.push((arguments[i__7485__auto___14182]));

var G__14183 = (i__7485__auto___14182 + (1));
i__7485__auto___14182 = G__14183;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq14180){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14180));
});


//# sourceMappingURL=core.js.map?rel=1485242656045
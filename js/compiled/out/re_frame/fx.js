// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__52217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52218 = null;
var count__52219 = (0);
var i__52220 = (0);
while(true){
if((i__52220 < count__52219)){
var vec__52221 = cljs.core._nth.call(null,chunk__52218,i__52220);
var effect_k = cljs.core.nth.call(null,vec__52221,(0),null);
var value = cljs.core.nth.call(null,vec__52221,(1),null);
var temp__4655__auto___52227 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___52227)){
var effect_fn_52228 = temp__4655__auto___52227;
effect_fn_52228.call(null,value);
} else {
}

var G__52229 = seq__52217;
var G__52230 = chunk__52218;
var G__52231 = count__52219;
var G__52232 = (i__52220 + (1));
seq__52217 = G__52229;
chunk__52218 = G__52230;
count__52219 = G__52231;
i__52220 = G__52232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52217);
if(temp__4657__auto__){
var seq__52217__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52217__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__52217__$1);
var G__52233 = cljs.core.chunk_rest.call(null,seq__52217__$1);
var G__52234 = c__25857__auto__;
var G__52235 = cljs.core.count.call(null,c__25857__auto__);
var G__52236 = (0);
seq__52217 = G__52233;
chunk__52218 = G__52234;
count__52219 = G__52235;
i__52220 = G__52236;
continue;
} else {
var vec__52224 = cljs.core.first.call(null,seq__52217__$1);
var effect_k = cljs.core.nth.call(null,vec__52224,(0),null);
var value = cljs.core.nth.call(null,vec__52224,(1),null);
var temp__4655__auto___52237 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___52237)){
var effect_fn_52238 = temp__4655__auto___52237;
effect_fn_52238.call(null,value);
} else {
}

var G__52239 = cljs.core.next.call(null,seq__52217__$1);
var G__52240 = null;
var G__52241 = (0);
var G__52242 = (0);
seq__52217 = G__52239;
chunk__52218 = G__52240;
count__52219 = G__52241;
i__52220 = G__52242;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52243 = cljs.core.seq.call(null,value);
var chunk__52244 = null;
var count__52245 = (0);
var i__52246 = (0);
while(true){
if((i__52246 < count__52245)){
var map__52247 = cljs.core._nth.call(null,chunk__52244,i__52246);
var map__52247__$1 = ((((!((map__52247 == null)))?((((map__52247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52247):map__52247);
var effect = map__52247__$1;
var ms = cljs.core.get.call(null,map__52247__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52247__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52243,chunk__52244,count__52245,i__52246,map__52247,map__52247__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52243,chunk__52244,count__52245,i__52246,map__52247,map__52247__$1,effect,ms,dispatch))
,ms);
}

var G__52251 = seq__52243;
var G__52252 = chunk__52244;
var G__52253 = count__52245;
var G__52254 = (i__52246 + (1));
seq__52243 = G__52251;
chunk__52244 = G__52252;
count__52245 = G__52253;
i__52246 = G__52254;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52243);
if(temp__4657__auto__){
var seq__52243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52243__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__52243__$1);
var G__52255 = cljs.core.chunk_rest.call(null,seq__52243__$1);
var G__52256 = c__25857__auto__;
var G__52257 = cljs.core.count.call(null,c__25857__auto__);
var G__52258 = (0);
seq__52243 = G__52255;
chunk__52244 = G__52256;
count__52245 = G__52257;
i__52246 = G__52258;
continue;
} else {
var map__52249 = cljs.core.first.call(null,seq__52243__$1);
var map__52249__$1 = ((((!((map__52249 == null)))?((((map__52249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52249):map__52249);
var effect = map__52249__$1;
var ms = cljs.core.get.call(null,map__52249__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__52249__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__52243,chunk__52244,count__52245,i__52246,map__52249,map__52249__$1,effect,ms,dispatch,seq__52243__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__52243,chunk__52244,count__52245,i__52246,map__52249,map__52249__$1,effect,ms,dispatch,seq__52243__$1,temp__4657__auto__))
,ms);
}

var G__52259 = cljs.core.next.call(null,seq__52243__$1);
var G__52260 = null;
var G__52261 = (0);
var G__52262 = (0);
seq__52243 = G__52259;
chunk__52244 = G__52260;
count__52245 = G__52261;
i__52246 = G__52262;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__52263 = cljs.core.seq.call(null,value);
var chunk__52264 = null;
var count__52265 = (0);
var i__52266 = (0);
while(true){
if((i__52266 < count__52265)){
var event = cljs.core._nth.call(null,chunk__52264,i__52266);
re_frame.router.dispatch.call(null,event);

var G__52267 = seq__52263;
var G__52268 = chunk__52264;
var G__52269 = count__52265;
var G__52270 = (i__52266 + (1));
seq__52263 = G__52267;
chunk__52264 = G__52268;
count__52265 = G__52269;
i__52266 = G__52270;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52263);
if(temp__4657__auto__){
var seq__52263__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52263__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__52263__$1);
var G__52271 = cljs.core.chunk_rest.call(null,seq__52263__$1);
var G__52272 = c__25857__auto__;
var G__52273 = cljs.core.count.call(null,c__25857__auto__);
var G__52274 = (0);
seq__52263 = G__52271;
chunk__52264 = G__52272;
count__52265 = G__52273;
i__52266 = G__52274;
continue;
} else {
var event = cljs.core.first.call(null,seq__52263__$1);
re_frame.router.dispatch.call(null,event);

var G__52275 = cljs.core.next.call(null,seq__52263__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__52263 = G__52275;
chunk__52264 = G__52276;
count__52265 = G__52277;
i__52266 = G__52278;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__52279 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__52280 = null;
var count__52281 = (0);
var i__52282 = (0);
while(true){
if((i__52282 < count__52281)){
var event = cljs.core._nth.call(null,chunk__52280,i__52282);
clear_event.call(null,event);

var G__52283 = seq__52279;
var G__52284 = chunk__52280;
var G__52285 = count__52281;
var G__52286 = (i__52282 + (1));
seq__52279 = G__52283;
chunk__52280 = G__52284;
count__52281 = G__52285;
i__52282 = G__52286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52279);
if(temp__4657__auto__){
var seq__52279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52279__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__52279__$1);
var G__52287 = cljs.core.chunk_rest.call(null,seq__52279__$1);
var G__52288 = c__25857__auto__;
var G__52289 = cljs.core.count.call(null,c__25857__auto__);
var G__52290 = (0);
seq__52279 = G__52287;
chunk__52280 = G__52288;
count__52281 = G__52289;
i__52282 = G__52290;
continue;
} else {
var event = cljs.core.first.call(null,seq__52279__$1);
clear_event.call(null,event);

var G__52291 = cljs.core.next.call(null,seq__52279__$1);
var G__52292 = null;
var G__52293 = (0);
var G__52294 = (0);
seq__52279 = G__52291;
chunk__52280 = G__52292;
count__52281 = G__52293;
i__52282 = G__52294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1484333382527
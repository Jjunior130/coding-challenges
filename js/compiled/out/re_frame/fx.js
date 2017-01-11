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
var seq__131693 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__131694 = null;
var count__131695 = (0);
var i__131696 = (0);
while(true){
if((i__131696 < count__131695)){
var vec__131697 = cljs.core._nth.call(null,chunk__131694,i__131696);
var effect_k = cljs.core.nth.call(null,vec__131697,(0),null);
var value = cljs.core.nth.call(null,vec__131697,(1),null);
var temp__4655__auto___131703 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___131703)){
var effect_fn_131704 = temp__4655__auto___131703;
effect_fn_131704.call(null,value);
} else {
}

var G__131705 = seq__131693;
var G__131706 = chunk__131694;
var G__131707 = count__131695;
var G__131708 = (i__131696 + (1));
seq__131693 = G__131705;
chunk__131694 = G__131706;
count__131695 = G__131707;
i__131696 = G__131708;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131693);
if(temp__4657__auto__){
var seq__131693__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131693__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__131693__$1);
var G__131709 = cljs.core.chunk_rest.call(null,seq__131693__$1);
var G__131710 = c__25857__auto__;
var G__131711 = cljs.core.count.call(null,c__25857__auto__);
var G__131712 = (0);
seq__131693 = G__131709;
chunk__131694 = G__131710;
count__131695 = G__131711;
i__131696 = G__131712;
continue;
} else {
var vec__131700 = cljs.core.first.call(null,seq__131693__$1);
var effect_k = cljs.core.nth.call(null,vec__131700,(0),null);
var value = cljs.core.nth.call(null,vec__131700,(1),null);
var temp__4655__auto___131713 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___131713)){
var effect_fn_131714 = temp__4655__auto___131713;
effect_fn_131714.call(null,value);
} else {
}

var G__131715 = cljs.core.next.call(null,seq__131693__$1);
var G__131716 = null;
var G__131717 = (0);
var G__131718 = (0);
seq__131693 = G__131715;
chunk__131694 = G__131716;
count__131695 = G__131717;
i__131696 = G__131718;
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
var seq__131719 = cljs.core.seq.call(null,value);
var chunk__131720 = null;
var count__131721 = (0);
var i__131722 = (0);
while(true){
if((i__131722 < count__131721)){
var map__131723 = cljs.core._nth.call(null,chunk__131720,i__131722);
var map__131723__$1 = ((((!((map__131723 == null)))?((((map__131723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131723):map__131723);
var effect = map__131723__$1;
var ms = cljs.core.get.call(null,map__131723__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__131723__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__131719,chunk__131720,count__131721,i__131722,map__131723,map__131723__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__131719,chunk__131720,count__131721,i__131722,map__131723,map__131723__$1,effect,ms,dispatch))
,ms);
}

var G__131727 = seq__131719;
var G__131728 = chunk__131720;
var G__131729 = count__131721;
var G__131730 = (i__131722 + (1));
seq__131719 = G__131727;
chunk__131720 = G__131728;
count__131721 = G__131729;
i__131722 = G__131730;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131719);
if(temp__4657__auto__){
var seq__131719__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131719__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__131719__$1);
var G__131731 = cljs.core.chunk_rest.call(null,seq__131719__$1);
var G__131732 = c__25857__auto__;
var G__131733 = cljs.core.count.call(null,c__25857__auto__);
var G__131734 = (0);
seq__131719 = G__131731;
chunk__131720 = G__131732;
count__131721 = G__131733;
i__131722 = G__131734;
continue;
} else {
var map__131725 = cljs.core.first.call(null,seq__131719__$1);
var map__131725__$1 = ((((!((map__131725 == null)))?((((map__131725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131725):map__131725);
var effect = map__131725__$1;
var ms = cljs.core.get.call(null,map__131725__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__131725__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__131719,chunk__131720,count__131721,i__131722,map__131725,map__131725__$1,effect,ms,dispatch,seq__131719__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__131719,chunk__131720,count__131721,i__131722,map__131725,map__131725__$1,effect,ms,dispatch,seq__131719__$1,temp__4657__auto__))
,ms);
}

var G__131735 = cljs.core.next.call(null,seq__131719__$1);
var G__131736 = null;
var G__131737 = (0);
var G__131738 = (0);
seq__131719 = G__131735;
chunk__131720 = G__131736;
count__131721 = G__131737;
i__131722 = G__131738;
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

var seq__131739 = cljs.core.seq.call(null,value);
var chunk__131740 = null;
var count__131741 = (0);
var i__131742 = (0);
while(true){
if((i__131742 < count__131741)){
var event = cljs.core._nth.call(null,chunk__131740,i__131742);
re_frame.router.dispatch.call(null,event);

var G__131743 = seq__131739;
var G__131744 = chunk__131740;
var G__131745 = count__131741;
var G__131746 = (i__131742 + (1));
seq__131739 = G__131743;
chunk__131740 = G__131744;
count__131741 = G__131745;
i__131742 = G__131746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131739);
if(temp__4657__auto__){
var seq__131739__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131739__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__131739__$1);
var G__131747 = cljs.core.chunk_rest.call(null,seq__131739__$1);
var G__131748 = c__25857__auto__;
var G__131749 = cljs.core.count.call(null,c__25857__auto__);
var G__131750 = (0);
seq__131739 = G__131747;
chunk__131740 = G__131748;
count__131741 = G__131749;
i__131742 = G__131750;
continue;
} else {
var event = cljs.core.first.call(null,seq__131739__$1);
re_frame.router.dispatch.call(null,event);

var G__131751 = cljs.core.next.call(null,seq__131739__$1);
var G__131752 = null;
var G__131753 = (0);
var G__131754 = (0);
seq__131739 = G__131751;
chunk__131740 = G__131752;
count__131741 = G__131753;
i__131742 = G__131754;
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
var seq__131755 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__131756 = null;
var count__131757 = (0);
var i__131758 = (0);
while(true){
if((i__131758 < count__131757)){
var event = cljs.core._nth.call(null,chunk__131756,i__131758);
clear_event.call(null,event);

var G__131759 = seq__131755;
var G__131760 = chunk__131756;
var G__131761 = count__131757;
var G__131762 = (i__131758 + (1));
seq__131755 = G__131759;
chunk__131756 = G__131760;
count__131757 = G__131761;
i__131758 = G__131762;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131755);
if(temp__4657__auto__){
var seq__131755__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131755__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__131755__$1);
var G__131763 = cljs.core.chunk_rest.call(null,seq__131755__$1);
var G__131764 = c__25857__auto__;
var G__131765 = cljs.core.count.call(null,c__25857__auto__);
var G__131766 = (0);
seq__131755 = G__131763;
chunk__131756 = G__131764;
count__131757 = G__131765;
i__131758 = G__131766;
continue;
} else {
var event = cljs.core.first.call(null,seq__131755__$1);
clear_event.call(null,event);

var G__131767 = cljs.core.next.call(null,seq__131755__$1);
var G__131768 = null;
var G__131769 = (0);
var G__131770 = (0);
seq__131755 = G__131767;
chunk__131756 = G__131768;
count__131757 = G__131769;
i__131758 = G__131770;
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

//# sourceMappingURL=fx.js.map?rel=1484099804487
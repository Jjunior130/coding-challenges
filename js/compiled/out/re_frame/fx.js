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
var seq__13626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13627 = null;
var count__13628 = (0);
var i__13629 = (0);
while(true){
if((i__13629 < count__13628)){
var vec__13630 = cljs.core._nth.call(null,chunk__13627,i__13629);
var effect_k = cljs.core.nth.call(null,vec__13630,(0),null);
var value = cljs.core.nth.call(null,vec__13630,(1),null);
var temp__4655__auto___13636 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___13636)){
var effect_fn_13637 = temp__4655__auto___13636;
effect_fn_13637.call(null,value);
} else {
}

var G__13638 = seq__13626;
var G__13639 = chunk__13627;
var G__13640 = count__13628;
var G__13641 = (i__13629 + (1));
seq__13626 = G__13638;
chunk__13627 = G__13639;
count__13628 = G__13640;
i__13629 = G__13641;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13626);
if(temp__4657__auto__){
var seq__13626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13626__$1)){
var c__7230__auto__ = cljs.core.chunk_first.call(null,seq__13626__$1);
var G__13642 = cljs.core.chunk_rest.call(null,seq__13626__$1);
var G__13643 = c__7230__auto__;
var G__13644 = cljs.core.count.call(null,c__7230__auto__);
var G__13645 = (0);
seq__13626 = G__13642;
chunk__13627 = G__13643;
count__13628 = G__13644;
i__13629 = G__13645;
continue;
} else {
var vec__13633 = cljs.core.first.call(null,seq__13626__$1);
var effect_k = cljs.core.nth.call(null,vec__13633,(0),null);
var value = cljs.core.nth.call(null,vec__13633,(1),null);
var temp__4655__auto___13646 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___13646)){
var effect_fn_13647 = temp__4655__auto___13646;
effect_fn_13647.call(null,value);
} else {
}

var G__13648 = cljs.core.next.call(null,seq__13626__$1);
var G__13649 = null;
var G__13650 = (0);
var G__13651 = (0);
seq__13626 = G__13648;
chunk__13627 = G__13649;
count__13628 = G__13650;
i__13629 = G__13651;
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
var seq__13652 = cljs.core.seq.call(null,value);
var chunk__13653 = null;
var count__13654 = (0);
var i__13655 = (0);
while(true){
if((i__13655 < count__13654)){
var map__13656 = cljs.core._nth.call(null,chunk__13653,i__13655);
var map__13656__$1 = ((((!((map__13656 == null)))?((((map__13656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13656):map__13656);
var effect = map__13656__$1;
var ms = cljs.core.get.call(null,map__13656__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13656__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13652,chunk__13653,count__13654,i__13655,map__13656,map__13656__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13652,chunk__13653,count__13654,i__13655,map__13656,map__13656__$1,effect,ms,dispatch))
,ms);
}

var G__13660 = seq__13652;
var G__13661 = chunk__13653;
var G__13662 = count__13654;
var G__13663 = (i__13655 + (1));
seq__13652 = G__13660;
chunk__13653 = G__13661;
count__13654 = G__13662;
i__13655 = G__13663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13652);
if(temp__4657__auto__){
var seq__13652__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13652__$1)){
var c__7230__auto__ = cljs.core.chunk_first.call(null,seq__13652__$1);
var G__13664 = cljs.core.chunk_rest.call(null,seq__13652__$1);
var G__13665 = c__7230__auto__;
var G__13666 = cljs.core.count.call(null,c__7230__auto__);
var G__13667 = (0);
seq__13652 = G__13664;
chunk__13653 = G__13665;
count__13654 = G__13666;
i__13655 = G__13667;
continue;
} else {
var map__13658 = cljs.core.first.call(null,seq__13652__$1);
var map__13658__$1 = ((((!((map__13658 == null)))?((((map__13658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13658):map__13658);
var effect = map__13658__$1;
var ms = cljs.core.get.call(null,map__13658__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13658__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13652,chunk__13653,count__13654,i__13655,map__13658,map__13658__$1,effect,ms,dispatch,seq__13652__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13652,chunk__13653,count__13654,i__13655,map__13658,map__13658__$1,effect,ms,dispatch,seq__13652__$1,temp__4657__auto__))
,ms);
}

var G__13668 = cljs.core.next.call(null,seq__13652__$1);
var G__13669 = null;
var G__13670 = (0);
var G__13671 = (0);
seq__13652 = G__13668;
chunk__13653 = G__13669;
count__13654 = G__13670;
i__13655 = G__13671;
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

var seq__13672 = cljs.core.seq.call(null,value);
var chunk__13673 = null;
var count__13674 = (0);
var i__13675 = (0);
while(true){
if((i__13675 < count__13674)){
var event = cljs.core._nth.call(null,chunk__13673,i__13675);
re_frame.router.dispatch.call(null,event);

var G__13676 = seq__13672;
var G__13677 = chunk__13673;
var G__13678 = count__13674;
var G__13679 = (i__13675 + (1));
seq__13672 = G__13676;
chunk__13673 = G__13677;
count__13674 = G__13678;
i__13675 = G__13679;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13672);
if(temp__4657__auto__){
var seq__13672__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13672__$1)){
var c__7230__auto__ = cljs.core.chunk_first.call(null,seq__13672__$1);
var G__13680 = cljs.core.chunk_rest.call(null,seq__13672__$1);
var G__13681 = c__7230__auto__;
var G__13682 = cljs.core.count.call(null,c__7230__auto__);
var G__13683 = (0);
seq__13672 = G__13680;
chunk__13673 = G__13681;
count__13674 = G__13682;
i__13675 = G__13683;
continue;
} else {
var event = cljs.core.first.call(null,seq__13672__$1);
re_frame.router.dispatch.call(null,event);

var G__13684 = cljs.core.next.call(null,seq__13672__$1);
var G__13685 = null;
var G__13686 = (0);
var G__13687 = (0);
seq__13672 = G__13684;
chunk__13673 = G__13685;
count__13674 = G__13686;
i__13675 = G__13687;
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
var seq__13688 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__13689 = null;
var count__13690 = (0);
var i__13691 = (0);
while(true){
if((i__13691 < count__13690)){
var event = cljs.core._nth.call(null,chunk__13689,i__13691);
clear_event.call(null,event);

var G__13692 = seq__13688;
var G__13693 = chunk__13689;
var G__13694 = count__13690;
var G__13695 = (i__13691 + (1));
seq__13688 = G__13692;
chunk__13689 = G__13693;
count__13690 = G__13694;
i__13691 = G__13695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13688);
if(temp__4657__auto__){
var seq__13688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13688__$1)){
var c__7230__auto__ = cljs.core.chunk_first.call(null,seq__13688__$1);
var G__13696 = cljs.core.chunk_rest.call(null,seq__13688__$1);
var G__13697 = c__7230__auto__;
var G__13698 = cljs.core.count.call(null,c__7230__auto__);
var G__13699 = (0);
seq__13688 = G__13696;
chunk__13689 = G__13697;
count__13690 = G__13698;
i__13691 = G__13699;
continue;
} else {
var event = cljs.core.first.call(null,seq__13688__$1);
clear_event.call(null,event);

var G__13700 = cljs.core.next.call(null,seq__13688__$1);
var G__13701 = null;
var G__13702 = (0);
var G__13703 = (0);
seq__13688 = G__13700;
chunk__13689 = G__13701;
count__13690 = G__13702;
i__13691 = G__13703;
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

//# sourceMappingURL=fx.js.map?rel=1484702545348
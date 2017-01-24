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
var seq__13616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13617 = null;
var count__13618 = (0);
var i__13619 = (0);
while(true){
if((i__13619 < count__13618)){
var vec__13620 = cljs.core._nth.call(null,chunk__13617,i__13619);
var effect_k = cljs.core.nth.call(null,vec__13620,(0),null);
var value = cljs.core.nth.call(null,vec__13620,(1),null);
var temp__4655__auto___13626 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___13626)){
var effect_fn_13627 = temp__4655__auto___13626;
effect_fn_13627.call(null,value);
} else {
}

var G__13628 = seq__13616;
var G__13629 = chunk__13617;
var G__13630 = count__13618;
var G__13631 = (i__13619 + (1));
seq__13616 = G__13628;
chunk__13617 = G__13629;
count__13618 = G__13630;
i__13619 = G__13631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13616);
if(temp__4657__auto__){
var seq__13616__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13616__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__13616__$1);
var G__13632 = cljs.core.chunk_rest.call(null,seq__13616__$1);
var G__13633 = c__7220__auto__;
var G__13634 = cljs.core.count.call(null,c__7220__auto__);
var G__13635 = (0);
seq__13616 = G__13632;
chunk__13617 = G__13633;
count__13618 = G__13634;
i__13619 = G__13635;
continue;
} else {
var vec__13623 = cljs.core.first.call(null,seq__13616__$1);
var effect_k = cljs.core.nth.call(null,vec__13623,(0),null);
var value = cljs.core.nth.call(null,vec__13623,(1),null);
var temp__4655__auto___13636 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___13636)){
var effect_fn_13637 = temp__4655__auto___13636;
effect_fn_13637.call(null,value);
} else {
}

var G__13638 = cljs.core.next.call(null,seq__13616__$1);
var G__13639 = null;
var G__13640 = (0);
var G__13641 = (0);
seq__13616 = G__13638;
chunk__13617 = G__13639;
count__13618 = G__13640;
i__13619 = G__13641;
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
var seq__13642 = cljs.core.seq.call(null,value);
var chunk__13643 = null;
var count__13644 = (0);
var i__13645 = (0);
while(true){
if((i__13645 < count__13644)){
var map__13646 = cljs.core._nth.call(null,chunk__13643,i__13645);
var map__13646__$1 = ((((!((map__13646 == null)))?((((map__13646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13646):map__13646);
var effect = map__13646__$1;
var ms = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13646__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13642,chunk__13643,count__13644,i__13645,map__13646,map__13646__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13642,chunk__13643,count__13644,i__13645,map__13646,map__13646__$1,effect,ms,dispatch))
,ms);
}

var G__13650 = seq__13642;
var G__13651 = chunk__13643;
var G__13652 = count__13644;
var G__13653 = (i__13645 + (1));
seq__13642 = G__13650;
chunk__13643 = G__13651;
count__13644 = G__13652;
i__13645 = G__13653;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13642);
if(temp__4657__auto__){
var seq__13642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13642__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__13642__$1);
var G__13654 = cljs.core.chunk_rest.call(null,seq__13642__$1);
var G__13655 = c__7220__auto__;
var G__13656 = cljs.core.count.call(null,c__7220__auto__);
var G__13657 = (0);
seq__13642 = G__13654;
chunk__13643 = G__13655;
count__13644 = G__13656;
i__13645 = G__13657;
continue;
} else {
var map__13648 = cljs.core.first.call(null,seq__13642__$1);
var map__13648__$1 = ((((!((map__13648 == null)))?((((map__13648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13648):map__13648);
var effect = map__13648__$1;
var ms = cljs.core.get.call(null,map__13648__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13648__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13642,chunk__13643,count__13644,i__13645,map__13648,map__13648__$1,effect,ms,dispatch,seq__13642__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13642,chunk__13643,count__13644,i__13645,map__13648,map__13648__$1,effect,ms,dispatch,seq__13642__$1,temp__4657__auto__))
,ms);
}

var G__13658 = cljs.core.next.call(null,seq__13642__$1);
var G__13659 = null;
var G__13660 = (0);
var G__13661 = (0);
seq__13642 = G__13658;
chunk__13643 = G__13659;
count__13644 = G__13660;
i__13645 = G__13661;
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

var seq__13662 = cljs.core.seq.call(null,value);
var chunk__13663 = null;
var count__13664 = (0);
var i__13665 = (0);
while(true){
if((i__13665 < count__13664)){
var event = cljs.core._nth.call(null,chunk__13663,i__13665);
re_frame.router.dispatch.call(null,event);

var G__13666 = seq__13662;
var G__13667 = chunk__13663;
var G__13668 = count__13664;
var G__13669 = (i__13665 + (1));
seq__13662 = G__13666;
chunk__13663 = G__13667;
count__13664 = G__13668;
i__13665 = G__13669;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13662);
if(temp__4657__auto__){
var seq__13662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13662__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__13662__$1);
var G__13670 = cljs.core.chunk_rest.call(null,seq__13662__$1);
var G__13671 = c__7220__auto__;
var G__13672 = cljs.core.count.call(null,c__7220__auto__);
var G__13673 = (0);
seq__13662 = G__13670;
chunk__13663 = G__13671;
count__13664 = G__13672;
i__13665 = G__13673;
continue;
} else {
var event = cljs.core.first.call(null,seq__13662__$1);
re_frame.router.dispatch.call(null,event);

var G__13674 = cljs.core.next.call(null,seq__13662__$1);
var G__13675 = null;
var G__13676 = (0);
var G__13677 = (0);
seq__13662 = G__13674;
chunk__13663 = G__13675;
count__13664 = G__13676;
i__13665 = G__13677;
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
var seq__13678 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__13679 = null;
var count__13680 = (0);
var i__13681 = (0);
while(true){
if((i__13681 < count__13680)){
var event = cljs.core._nth.call(null,chunk__13679,i__13681);
clear_event.call(null,event);

var G__13682 = seq__13678;
var G__13683 = chunk__13679;
var G__13684 = count__13680;
var G__13685 = (i__13681 + (1));
seq__13678 = G__13682;
chunk__13679 = G__13683;
count__13680 = G__13684;
i__13681 = G__13685;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13678);
if(temp__4657__auto__){
var seq__13678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13678__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__13678__$1);
var G__13686 = cljs.core.chunk_rest.call(null,seq__13678__$1);
var G__13687 = c__7220__auto__;
var G__13688 = cljs.core.count.call(null,c__7220__auto__);
var G__13689 = (0);
seq__13678 = G__13686;
chunk__13679 = G__13687;
count__13680 = G__13688;
i__13681 = G__13689;
continue;
} else {
var event = cljs.core.first.call(null,seq__13678__$1);
clear_event.call(null,event);

var G__13690 = cljs.core.next.call(null,seq__13678__$1);
var G__13691 = null;
var G__13692 = (0);
var G__13693 = (0);
seq__13678 = G__13690;
chunk__13679 = G__13691;
count__13680 = G__13692;
i__13681 = G__13693;
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

//# sourceMappingURL=fx.js.map?rel=1485242655200
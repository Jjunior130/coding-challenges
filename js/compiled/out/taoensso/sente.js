// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__31915 = x;
var ev_id = cljs.core.nth.call(null,vec__31915,(0),null);
var _ = cljs.core.nth.call(null,vec__31915,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__6397__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6397__auto__){
var and__6397__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__6397__auto____$1){
var map__31928 = x;
var map__31928__$1 = ((((!((map__31928 == null)))?((((map__31928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31928):map__31928);
var ch_recv = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__6397__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__6397__auto____$2){
var and__6397__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6397__auto____$3){
var and__6397__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__6397__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__6397__auto____$4;
}
} else {
return and__6397__auto____$3;
}
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6397__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6397__auto__){
var and__6397__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__6397__auto____$1){
var map__31940 = x;
var map__31940__$1 = ((((!((map__31940 == null)))?((((map__31940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31940):map__31940);
var ch_recv = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__6397__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__6397__auto____$2){
var and__6397__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6397__auto____$3){
var and__6397__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__6397__auto____$4){
var and__6397__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__6397__auto____$5){
var and__6397__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__6397__auto____$6){
var and__6397__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__6397__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__6397__auto____$7;
}
} else {
return and__6397__auto____$6;
}
} else {
return and__6397__auto____$5;
}
} else {
return and__6397__auto____$4;
}
} else {
return and__6397__auto____$3;
}
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__31942){
var map__31948 = p__31942;
var map__31948__$1 = ((((!((map__31948 == null)))?((((map__31948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31948):map__31948);
var ev_msg = map__31948__$1;
var event = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__31950 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__31950,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__31950,(1),null);
var valid_event = vec__31950;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__31950,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__31948,map__31948__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__31950,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__31948,map__31948__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,1647180603);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e31960){var t = e31960;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1357756534);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__31957 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__31957,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__31957,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__31957,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__31957,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,2019663888);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args31961 = [];
var len__7484__auto___31964 = arguments.length;
var i__7485__auto___31965 = (0);
while(true){
if((i__7485__auto___31965 < len__7484__auto___31964)){
args31961.push((arguments[i__7485__auto___31965]));

var G__31966 = (i__7485__auto___31965 + (1));
i__7485__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var G__31963 = args31961.length;
switch (G__31963) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31961.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1941636602);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,325449423);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__31968_SHARP_){
if(!((p1__31968_SHARP_ == null))){
if((false) || (p1__31968_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__31968_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__31968_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__31968_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31971){if((e31971 instanceof Error)){
var e = e31971;
return e;
} else {
throw e31971;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__31968#] (satisfies? interfaces/IPacker p1__31968#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___32279 = arguments.length;
var i__7485__auto___32280 = (0);
while(true){
if((i__7485__auto___32280 < len__7484__auto___32279)){
args__7491__auto__.push((arguments[i__7485__auto___32280]));

var G__32281 = (i__7485__auto___32280 + (1));
i__7485__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__31976){
var vec__31977 = p__31976;
var map__31980 = cljs.core.nth.call(null,vec__31977,(0),null);
var map__31980__$1 = ((((!((map__31980 == null)))?((((map__31980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31980):map__31980);
var recv_buf_or_n = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6409__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31982){if((e31982 instanceof Error)){
var e = e31982;
return e;
} else {
throw e31982;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31983){if((e31983 instanceof Error)){
var e = e31983;
return e;
} else {
throw e31983;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_32282 = (function (){try{if(((function (vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__31973_SHARP_){
if(!((p1__31973_SHARP_ == null))){
if((false) || (p1__31973_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__31973_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__31973_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__31973_SHARP_);
}
});})(vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31984){if((e31984 instanceof Error)){
var e = e31984;
return e;
} else {
throw e31984;

}
}})();
if((e_32282 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__31973#] (satisfies? interfaces/IServerChanAdapter p1__31973#)) web-server-ch-adapter)",web_server_ch_adapter,e_32282,null);
}

var max_ms_32283 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_32283)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_32283)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_32283], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6409__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__32284 = null;
var G__32284__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__31986 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__31986,(0),null);
var _udt = cljs.core.nth.call(null,vec__31986,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__32284__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__32284 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__32284__3.call(this,conn_type,uid,client_id);
case 4:
return G__32284__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32284.cljs$core$IFn$_invoke$arity$3 = G__32284__3;
G__32284.cljs$core$IFn$_invoke$arity$4 = G__32284__4;
return G__32284;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31989){if((e31989 instanceof Error)){
var e = e31989;
return e;
} else {
throw e31989;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__31990){
var map__31991 = p__31990;
var map__31991__$1 = ((((!((map__31991 == null)))?((((map__31991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);
var old_m = map__31991__$1;
var ws = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__31993 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__31993) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31994){if((e31994 instanceof Error)){
var e = e31994;
return e;
} else {
throw e31994;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__31995){
var map__31996 = p__31995;
var map__31996__$1 = ((((!((map__31996 == null)))?((((map__31996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31996):map__31996);
var old_m = map__31996__$1;
var ws = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__32286__delegate = function (user_id,ev,p__31998){
var vec__31999 = p__31998;
var map__32002 = cljs.core.nth.call(null,vec__31999,(0),null);
var map__32002__$1 = ((((!((map__32002 == null)))?((((map__32002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32002):map__32002);
var opts = map__32002__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_32287 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __32288 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_32287,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_32287,ev], null);
});})(uid_32287,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-219592629);
var __32289__$1 = (cljs.core.truth_(uid_32287)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __32290__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_32291 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__32292 = ((function (uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__32004 = cljs.core.get.call(null,m,uid_32287);
var ___$3 = cljs.core.nth.call(null,vec__32004,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__32004,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_32291)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_32287),cljs.core.get.call(null,m,uid_32287));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__32007 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__32007,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__32007,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__32007,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__32007,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-333138097);

var G__32010 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__32010) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_32287,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_32287,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_32287], null);
});})(uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1446829849);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__32011_32294 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_32287], null))));
var chunk__32012_32295 = null;
var count__32013_32296 = (0);
var i__32014_32297 = (0);
while(true){
if((i__32014_32297 < count__32013_32296)){
var vec__32015_32298 = cljs.core._nth.call(null,chunk__32012_32295,i__32014_32297);
var _QMARK_sch_32299 = cljs.core.nth.call(null,vec__32015_32298,(0),null);
var _udt_32300 = cljs.core.nth.call(null,vec__32015_32298,(1),null);
var temp__4657__auto___32301 = _QMARK_sch_32299;
if(cljs.core.truth_(temp__4657__auto___32301)){
var sch_32302 = temp__4657__auto___32301;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_32302);
} else {
}

var G__32303 = seq__32011_32294;
var G__32304 = chunk__32012_32295;
var G__32305 = count__32013_32296;
var G__32306 = (i__32014_32297 + (1));
seq__32011_32294 = G__32303;
chunk__32012_32295 = G__32304;
count__32013_32296 = G__32305;
i__32014_32297 = G__32306;
continue;
} else {
var temp__4657__auto___32307 = cljs.core.seq.call(null,seq__32011_32294);
if(temp__4657__auto___32307){
var seq__32011_32308__$1 = temp__4657__auto___32307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32011_32308__$1)){
var c__7220__auto___32309 = cljs.core.chunk_first.call(null,seq__32011_32308__$1);
var G__32310 = cljs.core.chunk_rest.call(null,seq__32011_32308__$1);
var G__32311 = c__7220__auto___32309;
var G__32312 = cljs.core.count.call(null,c__7220__auto___32309);
var G__32313 = (0);
seq__32011_32294 = G__32310;
chunk__32012_32295 = G__32311;
count__32013_32296 = G__32312;
i__32014_32297 = G__32313;
continue;
} else {
var vec__32018_32314 = cljs.core.first.call(null,seq__32011_32308__$1);
var _QMARK_sch_32315 = cljs.core.nth.call(null,vec__32018_32314,(0),null);
var _udt_32316 = cljs.core.nth.call(null,vec__32018_32314,(1),null);
var temp__4657__auto___32317__$1 = _QMARK_sch_32315;
if(cljs.core.truth_(temp__4657__auto___32317__$1)){
var sch_32318 = temp__4657__auto___32317__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_32318);
} else {
}

var G__32319 = cljs.core.next.call(null,seq__32011_32308__$1);
var G__32320 = null;
var G__32321 = (0);
var G__32322 = (0);
seq__32011_32294 = G__32319;
chunk__32012_32295 = G__32320;
count__32013_32296 = G__32321;
i__32014_32297 = G__32322;
continue;
}
} else {
}
}
break;
}

var seq__32021_32323 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_32287], null))));
var chunk__32022_32324 = null;
var count__32023_32325 = (0);
var i__32024_32326 = (0);
while(true){
if((i__32024_32326 < count__32023_32325)){
var vec__32025_32327 = cljs.core._nth.call(null,chunk__32022_32324,i__32024_32326);
var _QMARK_sch_32328 = cljs.core.nth.call(null,vec__32025_32327,(0),null);
var _udt_32329 = cljs.core.nth.call(null,vec__32025_32327,(1),null);
var temp__4657__auto___32330 = _QMARK_sch_32328;
if(cljs.core.truth_(temp__4657__auto___32330)){
var sch_32331 = temp__4657__auto___32330;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_32331);
} else {
}

var G__32332 = seq__32021_32323;
var G__32333 = chunk__32022_32324;
var G__32334 = count__32023_32325;
var G__32335 = (i__32024_32326 + (1));
seq__32021_32323 = G__32332;
chunk__32022_32324 = G__32333;
count__32023_32325 = G__32334;
i__32024_32326 = G__32335;
continue;
} else {
var temp__4657__auto___32336 = cljs.core.seq.call(null,seq__32021_32323);
if(temp__4657__auto___32336){
var seq__32021_32337__$1 = temp__4657__auto___32336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32021_32337__$1)){
var c__7220__auto___32338 = cljs.core.chunk_first.call(null,seq__32021_32337__$1);
var G__32339 = cljs.core.chunk_rest.call(null,seq__32021_32337__$1);
var G__32340 = c__7220__auto___32338;
var G__32341 = cljs.core.count.call(null,c__7220__auto___32338);
var G__32342 = (0);
seq__32021_32323 = G__32339;
chunk__32022_32324 = G__32340;
count__32023_32325 = G__32341;
i__32024_32326 = G__32342;
continue;
} else {
var vec__32028_32343 = cljs.core.first.call(null,seq__32021_32337__$1);
var _QMARK_sch_32344 = cljs.core.nth.call(null,vec__32028_32343,(0),null);
var _udt_32345 = cljs.core.nth.call(null,vec__32028_32343,(1),null);
var temp__4657__auto___32346__$1 = _QMARK_sch_32344;
if(cljs.core.truth_(temp__4657__auto___32346__$1)){
var sch_32347 = temp__4657__auto___32346__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_32347);
} else {
}

var G__32348 = cljs.core.next.call(null,seq__32021_32337__$1);
var G__32349 = null;
var G__32350 = (0);
var G__32351 = (0);
seq__32021_32323 = G__32348;
chunk__32022_32324 = G__32349;
count__32023_32325 = G__32350;
i__32024_32326 = G__32351;
continue;
}
} else {
}
}
break;
}
} else {
var seq__32031_32352 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__32032_32353 = null;
var count__32033_32354 = (0);
var i__32034_32355 = (0);
while(true){
if((i__32034_32355 < count__32033_32354)){
var conn_type_32356 = cljs.core._nth.call(null,chunk__32032_32353,i__32034_32355);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_32356,uid_32287], null),((function (seq__32031_32352,chunk__32032_32353,count__32033_32354,i__32034_32355,conn_type_32356,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_32291], true)], null);
} else {
var vec__32035 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__32035,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__32035,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_32291)], null);
}
});})(seq__32031_32352,chunk__32032_32353,count__32033_32354,i__32034_32355,conn_type_32356,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__32357 = seq__32031_32352;
var G__32358 = chunk__32032_32353;
var G__32359 = count__32033_32354;
var G__32360 = (i__32034_32355 + (1));
seq__32031_32352 = G__32357;
chunk__32032_32353 = G__32358;
count__32033_32354 = G__32359;
i__32034_32355 = G__32360;
continue;
} else {
var temp__4657__auto___32361 = cljs.core.seq.call(null,seq__32031_32352);
if(temp__4657__auto___32361){
var seq__32031_32362__$1 = temp__4657__auto___32361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32031_32362__$1)){
var c__7220__auto___32363 = cljs.core.chunk_first.call(null,seq__32031_32362__$1);
var G__32364 = cljs.core.chunk_rest.call(null,seq__32031_32362__$1);
var G__32365 = c__7220__auto___32363;
var G__32366 = cljs.core.count.call(null,c__7220__auto___32363);
var G__32367 = (0);
seq__32031_32352 = G__32364;
chunk__32032_32353 = G__32365;
count__32033_32354 = G__32366;
i__32034_32355 = G__32367;
continue;
} else {
var conn_type_32368 = cljs.core.first.call(null,seq__32031_32362__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_32368,uid_32287], null),((function (seq__32031_32352,chunk__32032_32353,count__32033_32354,i__32034_32355,conn_type_32368,seq__32031_32362__$1,temp__4657__auto___32361,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_32291], true)], null);
} else {
var vec__32038 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__32038,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__32038,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_32291)], null);
}
});})(seq__32031_32352,chunk__32032_32353,count__32033_32354,i__32034_32355,conn_type_32368,seq__32031_32362__$1,temp__4657__auto___32361,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__32369 = cljs.core.next.call(null,seq__32031_32362__$1);
var G__32370 = null;
var G__32371 = (0);
var G__32372 = (0);
seq__32031_32352 = G__32369;
chunk__32032_32353 = G__32370;
count__32033_32354 = G__32371;
i__32034_32355 = G__32372;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_32373 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_32374 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__17364__auto___32375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32045){
var state_val_32046 = (state_32045[(1)]);
if((state_val_32046 === (1))){
var state_32045__$1 = state_32045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32045__$1,(2),ws_timeout_32373);
} else {
if((state_val_32046 === (2))){
var inst_32042 = (state_32045[(2)]);
var inst_32043 = flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_32045__$1 = (function (){var statearr_32047 = state_32045;
(statearr_32047[(7)] = inst_32042);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32045__$1,inst_32043);
} else {
return null;
}
}
});})(c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32051 = [null,null,null,null,null,null,null,null];
(statearr_32051[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32051[(1)] = (1));

return statearr_32051;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32045){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32052){if((e32052 instanceof Object)){
var ex__17256__auto__ = e32052;
var statearr_32053_32376 = state_32045;
(statearr_32053_32376[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32377 = state_32045;
state_32045 = G__32377;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32045){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32054 = f__17365__auto__.call(null);
(statearr_32054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___32375);

return statearr_32054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___32375,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__17364__auto___32378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32059){
var state_val_32060 = (state_32059[(1)]);
if((state_val_32060 === (1))){
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32059__$1,(2),ajax_timeout_32374);
} else {
if((state_val_32060 === (2))){
var inst_32056 = (state_32059[(2)]);
var inst_32057 = flush_buffer_BANG__32292.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_32059__$1 = (function (){var statearr_32061 = state_32059;
(statearr_32061[(7)] = inst_32056);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32059__$1,inst_32057);
} else {
return null;
}
}
});})(c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32065 = [null,null,null,null,null,null,null,null];
(statearr_32065[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32065[(1)] = (1));

return statearr_32065;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32059){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32066){if((e32066 instanceof Object)){
var ex__17256__auto__ = e32066;
var statearr_32067_32379 = state_32059;
(statearr_32067_32379[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32380 = state_32059;
state_32059 = G__32380;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32059){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32068 = f__17365__auto__.call(null);
(statearr_32068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___32378);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___32378,ws_timeout_32373,ajax_timeout_32374,uid_32287,__32288,__32289__$1,__32290__$2,ev_uuid_32291,flush_buffer_BANG__32292,vec__31999,map__32002,map__32002__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__32286 = function (user_id,ev,var_args){
var p__31998 = null;
if (arguments.length > 2) {
var G__32381__i = 0, G__32381__a = new Array(arguments.length -  2);
while (G__32381__i < G__32381__a.length) {G__32381__a[G__32381__i] = arguments[G__32381__i + 2]; ++G__32381__i;}
  p__31998 = new cljs.core.IndexedSeq(G__32381__a,0);
} 
return G__32286__delegate.call(this,user_id,ev,p__31998);};
G__32286.cljs$lang$maxFixedArity = 2;
G__32286.cljs$lang$applyTo = (function (arglist__32382){
var user_id = cljs.core.first(arglist__32382);
arglist__32382 = cljs.core.next(arglist__32382);
var ev = cljs.core.first(arglist__32382);
var p__31998 = cljs.core.rest(arglist__32382);
return G__32286__delegate(user_id,ev,p__31998);
});
G__32286.cljs$core$IFn$_invoke$arity$variadic = G__32286__delegate;
return G__32286;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__32069 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__32069,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__32069,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1647549950);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32077){
var state_val_32078 = (state_32077[(1)]);
if((state_val_32078 === (1))){
var inst_32072 = cljs.core.async.timeout.call(null,ms);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32077__$1,(2),inst_32072);
} else {
if((state_val_32078 === (2))){
var inst_32074 = (state_32077[(2)]);
var inst_32075 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_32077__$1 = (function (){var statearr_32079 = state_32077;
(statearr_32079[(7)] = inst_32074);

return statearr_32079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32077__$1,inst_32075);
} else {
return null;
}
}
});})(c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32083 = [null,null,null,null,null,null,null,null];
(statearr_32083[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32083[(1)] = (1));

return statearr_32083;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32077){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32084){if((e32084 instanceof Object)){
var ex__17256__auto__ = e32084;
var statearr_32085_32383 = state_32077;
(statearr_32085_32383[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32384 = state_32077;
state_32077 = G__32384;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32077){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32086 = f__17365__auto__.call(null);
(statearr_32086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32069,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__17364__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,692440264);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-95313035);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2119873531);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (7))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32124_32385 = state_32122__$1;
(statearr_32124_32385[(2)] = inst_32118);

(statearr_32124_32385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (1))){
var inst_32087 = udt_open;
var state_32122__$1 = (function (){var statearr_32125 = state_32122;
(statearr_32125[(7)] = inst_32087);

return statearr_32125;
})();
var statearr_32126_32386 = state_32122__$1;
(statearr_32126_32386[(2)] = null);

(statearr_32126_32386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (4))){
var inst_32096 = (state_32122[(8)]);
var inst_32091 = (state_32122[(2)]);
var inst_32092 = cljs.core.deref.call(null,conns_);
var inst_32093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32094 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_32095 = (new cljs.core.PersistentVector(null,3,(5),inst_32093,inst_32094,null));
var inst_32096__$1 = cljs.core.get_in.call(null,inst_32092,inst_32095);
var state_32122__$1 = (function (){var statearr_32127 = state_32122;
(statearr_32127[(9)] = inst_32091);

(statearr_32127[(8)] = inst_32096__$1);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32096__$1)){
var statearr_32128_32387 = state_32122__$1;
(statearr_32128_32387[(1)] = (5));

} else {
var statearr_32129_32388 = state_32122__$1;
(statearr_32129_32388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (13))){
var inst_32102 = (state_32122[(10)]);
var inst_32111 = (state_32122[(2)]);
var inst_32087 = inst_32102;
var state_32122__$1 = (function (){var statearr_32130 = state_32122;
(statearr_32130[(7)] = inst_32087);

(statearr_32130[(11)] = inst_32111);

return statearr_32130;
})();
var statearr_32131_32389 = state_32122__$1;
(statearr_32131_32389[(2)] = null);

(statearr_32131_32389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var state_32122__$1 = state_32122;
var statearr_32132_32390 = state_32122__$1;
(statearr_32132_32390[(2)] = null);

(statearr_32132_32390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (3))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (12))){
var state_32122__$1 = state_32122;
var statearr_32133_32391 = state_32122__$1;
(statearr_32133_32391[(2)] = null);

(statearr_32133_32391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (2))){
var inst_32089 = cljs.core.async.timeout.call(null,ms);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32122__$1,(4),inst_32089);
} else {
if((state_val_32123 === (11))){
var inst_32107 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_32108 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_32107);
var state_32122__$1 = state_32122;
var statearr_32134_32392 = state_32122__$1;
(statearr_32134_32392[(2)] = inst_32108);

(statearr_32134_32392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (9))){
var state_32122__$1 = state_32122;
var statearr_32135_32393 = state_32122__$1;
(statearr_32135_32393[(2)] = null);

(statearr_32135_32393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (5))){
var inst_32096 = (state_32122[(8)]);
var inst_32101 = cljs.core.nth.call(null,inst_32096,(0),null);
var inst_32102 = cljs.core.nth.call(null,inst_32096,(1),null);
var inst_32103 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_32122__$1 = (function (){var statearr_32136 = state_32122;
(statearr_32136[(12)] = inst_32101);

(statearr_32136[(10)] = inst_32102);

return statearr_32136;
})();
if(cljs.core.truth_(inst_32103)){
var statearr_32137_32394 = state_32122__$1;
(statearr_32137_32394[(1)] = (8));

} else {
var statearr_32138_32395 = state_32122__$1;
(statearr_32138_32395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (10))){
var inst_32115 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32139_32396 = state_32122__$1;
(statearr_32139_32396[(2)] = inst_32115);

(statearr_32139_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (8))){
var inst_32087 = (state_32122[(7)]);
var inst_32102 = (state_32122[(10)]);
var inst_32105 = cljs.core._EQ_.call(null,inst_32102,inst_32087);
var state_32122__$1 = state_32122;
if(inst_32105){
var statearr_32140_32397 = state_32122__$1;
(statearr_32140_32397[(1)] = (11));

} else {
var statearr_32141_32398 = state_32122__$1;
(statearr_32141_32398[(1)] = (12));

}

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
}
}
}
}
}
});})(c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32145 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32145[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32145[(1)] = (1));

return statearr_32145;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32122){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32146){if((e32146 instanceof Object)){
var ex__17256__auto__ = e32146;
var statearr_32147_32399 = state_32122;
(statearr_32147_32399[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32400 = state_32122;
state_32122 = G__32400;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32148 = f__17365__auto__.call(null);
(statearr_32148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_32148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__17364__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1694071601);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32174){
var state_val_32175 = (state_32174[(1)]);
if((state_val_32175 === (1))){
var inst_32149 = cljs.core.async.timeout.call(null,ms);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32174__$1,(2),inst_32149);
} else {
if((state_val_32175 === (2))){
var inst_32156 = (state_32174[(7)]);
var inst_32151 = (state_32174[(2)]);
var inst_32152 = cljs.core.deref.call(null,conns_);
var inst_32153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32154 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_32155 = (new cljs.core.PersistentVector(null,3,(5),inst_32153,inst_32154,null));
var inst_32156__$1 = cljs.core.get_in.call(null,inst_32152,inst_32155);
var state_32174__$1 = (function (){var statearr_32176 = state_32174;
(statearr_32176[(7)] = inst_32156__$1);

(statearr_32176[(8)] = inst_32151);

return statearr_32176;
})();
if(cljs.core.truth_(inst_32156__$1)){
var statearr_32177_32401 = state_32174__$1;
(statearr_32177_32401[(1)] = (3));

} else {
var statearr_32178_32402 = state_32174__$1;
(statearr_32178_32402[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (3))){
var inst_32156 = (state_32174[(7)]);
var inst_32161 = cljs.core.nth.call(null,inst_32156,(0),null);
var inst_32162 = cljs.core.nth.call(null,inst_32156,(1),null);
var inst_32163 = cljs.core._EQ_.call(null,inst_32162,udt_open);
var state_32174__$1 = (function (){var statearr_32179 = state_32174;
(statearr_32179[(9)] = inst_32161);

return statearr_32179;
})();
if(inst_32163){
var statearr_32180_32403 = state_32174__$1;
(statearr_32180_32403[(1)] = (6));

} else {
var statearr_32181_32404 = state_32174__$1;
(statearr_32181_32404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (4))){
var state_32174__$1 = state_32174;
var statearr_32182_32405 = state_32174__$1;
(statearr_32182_32405[(2)] = null);

(statearr_32182_32405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (5))){
var inst_32172 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32174__$1,inst_32172);
} else {
if((state_val_32175 === (6))){
var inst_32165 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_32166 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_32165);
var state_32174__$1 = state_32174;
var statearr_32183_32406 = state_32174__$1;
(statearr_32183_32406[(2)] = inst_32166);

(statearr_32183_32406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (7))){
var state_32174__$1 = state_32174;
var statearr_32184_32407 = state_32174__$1;
(statearr_32184_32407[(2)] = null);

(statearr_32184_32407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (8))){
var inst_32169 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
var statearr_32185_32408 = state_32174__$1;
(statearr_32185_32408[(2)] = inst_32169);

(statearr_32185_32408[(1)] = (5));


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
});})(c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32174){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32190){if((e32190 instanceof Object)){
var ex__17256__auto__ = e32190;
var statearr_32191_32409 = state_32174;
(statearr_32191_32409[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32410 = state_32174;
state_32174 = G__32410;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32174){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32192 = f__17365__auto__.call(null);
(statearr_32192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_32192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__17364__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__32193 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__32193,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__32193,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__32193,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__32193,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__32193,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,415462451);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__32193,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,141105927);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32247){
var state_val_32248 = (state_32247[(1)]);
if((state_val_32248 === (7))){
var state_32247__$1 = state_32247;
var statearr_32249_32411 = state_32247__$1;
(statearr_32249_32411[(2)] = null);

(statearr_32249_32411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (1))){
var inst_32196 = cljs.core.async.timeout.call(null,(5000));
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32247__$1,(2),inst_32196);
} else {
if((state_val_32248 === (4))){
var state_32247__$1 = state_32247;
var statearr_32250_32412 = state_32247__$1;
(statearr_32250_32412[(2)] = null);

(statearr_32250_32412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (13))){
var state_32247__$1 = state_32247;
var statearr_32251_32413 = state_32247__$1;
(statearr_32251_32413[(2)] = null);

(statearr_32251_32413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (6))){
var inst_32224 = (state_32247[(7)]);
var inst_32208 = (state_32247[(8)]);
var inst_32207 = (state_32247[(9)]);
var inst_32206 = (state_32247[(10)]);
var inst_32219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32220 = [conn_type,uid,client_id];
var inst_32221 = (new cljs.core.PersistentVector(null,3,(5),inst_32219,inst_32220,null));
var inst_32223 = (function (){var vec__32199 = inst_32206;
var __QMARK_sch = inst_32207;
var udt_t1 = inst_32208;
return ((function (vec__32199,__QMARK_sch,udt_t1,inst_32224,inst_32208,inst_32207,inst_32206,inst_32219,inst_32220,inst_32221,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__32222){
var vec__32252 = p__32222;
var _sch = cljs.core.nth.call(null,vec__32252,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__32252,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__32199,__QMARK_sch,udt_t1,inst_32224,inst_32208,inst_32207,inst_32206,inst_32219,inst_32220,inst_32221,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_32224__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_32221,inst_32223);
var state_32247__$1 = (function (){var statearr_32255 = state_32247;
(statearr_32255[(7)] = inst_32224__$1);

return statearr_32255;
})();
if(cljs.core.truth_(inst_32224__$1)){
var statearr_32256_32414 = state_32247__$1;
(statearr_32256_32414[(1)] = (9));

} else {
var statearr_32257_32415 = state_32247__$1;
(statearr_32257_32415[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (3))){
var inst_32208 = (state_32247[(8)]);
var inst_32207 = (state_32247[(9)]);
var inst_32206 = (state_32247[(10)]);
var inst_32211 = (function (){var vec__32199 = inst_32206;
var __QMARK_sch = inst_32207;
var udt_t1 = inst_32208;
return ((function (vec__32199,__QMARK_sch,udt_t1,inst_32208,inst_32207,inst_32206,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__32199,__QMARK_sch,udt_t1,inst_32208,inst_32207,inst_32206,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_32212 = (new cljs.core.Delay(inst_32211,null));
var inst_32213 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_32212,null,768201078);
var state_32247__$1 = state_32247;
var statearr_32258_32416 = state_32247__$1;
(statearr_32258_32416[(2)] = inst_32213);

(statearr_32258_32416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (12))){
var inst_32233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32234 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_32235 = (new cljs.core.PersistentVector(null,2,(5),inst_32233,inst_32234,null));
var inst_32236 = receive_event_msg_BANG_.call(null,inst_32235);
var state_32247__$1 = state_32247;
var statearr_32259_32417 = state_32247__$1;
(statearr_32259_32417[(2)] = inst_32236);

(statearr_32259_32417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (2))){
var inst_32206 = (state_32247[(10)]);
var inst_32198 = (state_32247[(2)]);
var inst_32202 = cljs.core.deref.call(null,conns_);
var inst_32203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32204 = [conn_type,uid,client_id];
var inst_32205 = (new cljs.core.PersistentVector(null,3,(5),inst_32203,inst_32204,null));
var inst_32206__$1 = cljs.core.get_in.call(null,inst_32202,inst_32205);
var inst_32207 = cljs.core.nth.call(null,inst_32206__$1,(0),null);
var inst_32208 = cljs.core.nth.call(null,inst_32206__$1,(1),null);
var inst_32209 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_32247__$1 = (function (){var statearr_32260 = state_32247;
(statearr_32260[(8)] = inst_32208);

(statearr_32260[(9)] = inst_32207);

(statearr_32260[(10)] = inst_32206__$1);

(statearr_32260[(11)] = inst_32198);

return statearr_32260;
})();
if(cljs.core.truth_(inst_32209)){
var statearr_32261_32418 = state_32247__$1;
(statearr_32261_32418[(1)] = (3));

} else {
var statearr_32262_32419 = state_32247__$1;
(statearr_32262_32419[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (11))){
var inst_32242 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32263_32420 = state_32247__$1;
(statearr_32263_32420[(2)] = inst_32242);

(statearr_32263_32420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (9))){
var inst_32224 = (state_32247[(7)]);
var inst_32208 = (state_32247[(8)]);
var inst_32207 = (state_32247[(9)]);
var inst_32206 = (state_32247[(10)]);
var inst_32226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32227 = [conn_type,uid];
var inst_32228 = (new cljs.core.PersistentVector(null,2,(5),inst_32226,inst_32227,null));
var inst_32229 = (function (){var vec__32199 = inst_32206;
var __QMARK_sch = inst_32207;
var udt_t1 = inst_32208;
var disconnect_QMARK_ = inst_32224;
return ((function (vec__32199,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_32224,inst_32208,inst_32207,inst_32206,inst_32226,inst_32227,inst_32228,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__32199,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_32224,inst_32208,inst_32207,inst_32206,inst_32226,inst_32227,inst_32228,state_val_32248,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_32230 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_32228,inst_32229);
var inst_32231 = upd_connected_uid_BANG_.call(null,uid);
var state_32247__$1 = (function (){var statearr_32264 = state_32247;
(statearr_32264[(12)] = inst_32230);

return statearr_32264;
})();
if(cljs.core.truth_(inst_32231)){
var statearr_32265_32421 = state_32247__$1;
(statearr_32265_32421[(1)] = (12));

} else {
var statearr_32266_32422 = state_32247__$1;
(statearr_32266_32422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (5))){
var inst_32208 = (state_32247[(8)]);
var inst_32216 = (state_32247[(2)]);
var inst_32217 = cljs.core._EQ_.call(null,inst_32208,udt_close);
var state_32247__$1 = (function (){var statearr_32267 = state_32247;
(statearr_32267[(13)] = inst_32216);

return statearr_32267;
})();
if(inst_32217){
var statearr_32268_32423 = state_32247__$1;
(statearr_32268_32423[(1)] = (6));

} else {
var statearr_32269_32424 = state_32247__$1;
(statearr_32269_32424[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (14))){
var inst_32239 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32270_32425 = state_32247__$1;
(statearr_32270_32425[(2)] = inst_32239);

(statearr_32270_32425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (10))){
var state_32247__$1 = state_32247;
var statearr_32271_32426 = state_32247__$1;
(statearr_32271_32426[(2)] = null);

(statearr_32271_32426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (8))){
var inst_32245 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32247__$1,inst_32245);
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
}
}
}
}
}
}
});})(c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__17252__auto__,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32247){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32276){if((e32276 instanceof Object)){
var ex__17256__auto__ = e32276;
var statearr_32277_32427 = state_32247;
(statearr_32277_32427[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_32247;
state_32247 = G__32428;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32247){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__17366__auto__ = (function (){var statearr_32278 = f__17365__auto__.call(null);
(statearr_32278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_32278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__17364__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2037948621);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__31977,map__31980,map__31980__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq31974){
var G__31975 = cljs.core.first.call(null,seq31974);
var seq31974__$1 = cljs.core.next.call(null,seq31974);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31975,seq31974__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1907480558);

var seq__32445 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__32446 = null;
var count__32447 = (0);
var i__32448 = (0);
while(true){
if((i__32448 < count__32447)){
var vec__32449 = cljs.core._nth.call(null,chunk__32446,i__32448);
var client_id = cljs.core.nth.call(null,vec__32449,(0),null);
var vec__32452 = cljs.core.nth.call(null,vec__32449,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__32452,(0),null);
var _udt = cljs.core.nth.call(null,vec__32452,(1),null);
var temp__4657__auto___32461 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___32461)){
var sch_32462 = temp__4657__auto___32461;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_32462,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__32463 = seq__32445;
var G__32464 = chunk__32446;
var G__32465 = count__32447;
var G__32466 = (i__32448 + (1));
seq__32445 = G__32463;
chunk__32446 = G__32464;
count__32447 = G__32465;
i__32448 = G__32466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32445);
if(temp__4657__auto__){
var seq__32445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32445__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__32445__$1);
var G__32467 = cljs.core.chunk_rest.call(null,seq__32445__$1);
var G__32468 = c__7220__auto__;
var G__32469 = cljs.core.count.call(null,c__7220__auto__);
var G__32470 = (0);
seq__32445 = G__32467;
chunk__32446 = G__32468;
count__32447 = G__32469;
i__32448 = G__32470;
continue;
} else {
var vec__32455 = cljs.core.first.call(null,seq__32445__$1);
var client_id = cljs.core.nth.call(null,vec__32455,(0),null);
var vec__32458 = cljs.core.nth.call(null,vec__32455,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__32458,(0),null);
var _udt = cljs.core.nth.call(null,vec__32458,(1),null);
var temp__4657__auto___32471__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___32471__$1)){
var sch_32472 = temp__4657__auto___32471__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_32472,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__32473 = cljs.core.next.call(null,seq__32445__$1);
var G__32474 = null;
var G__32475 = (0);
var G__32476 = (0);
seq__32445 = G__32473;
chunk__32446 = G__32474;
count__32447 = G__32475;
i__32448 = G__32476;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,334228453);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_32607){
var state_val_32608 = (state_32607[(1)]);
if((state_val_32608 === (7))){
var inst_32562 = (state_32607[(7)]);
var inst_32563 = (state_32607[(8)]);
var inst_32569 = (state_32607[(9)]);
var inst_32579 = (function (){var n = inst_32562;
var client_ids_satisfied = inst_32563;
var _QMARK_pulled = inst_32569;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_32562,inst_32563,inst_32569,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__32578){
var vec__32609 = p__32578;
var _QMARK_sch = cljs.core.nth.call(null,vec__32609,(0),null);
var _udt = cljs.core.nth.call(null,vec__32609,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_32562,inst_32563,inst_32569,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_32580 = cljs.core.PersistentHashSet.EMPTY;
var inst_32581 = cljs.core.reduce_kv.call(null,inst_32579,inst_32580,inst_32569);
var state_32607__$1 = state_32607;
var statearr_32612_32645 = state_32607__$1;
(statearr_32612_32645[(2)] = inst_32581);

(statearr_32612_32645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (1))){
var inst_32561 = cljs.core.PersistentHashSet.EMPTY;
var inst_32562 = (0);
var inst_32563 = inst_32561;
var state_32607__$1 = (function (){var statearr_32613 = state_32607;
(statearr_32613[(7)] = inst_32562);

(statearr_32613[(8)] = inst_32563);

return statearr_32613;
})();
var statearr_32614_32646 = state_32607__$1;
(statearr_32614_32646[(2)] = null);

(statearr_32614_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (4))){
var state_32607__$1 = state_32607;
var statearr_32615_32647 = state_32607__$1;
(statearr_32615_32647[(2)] = true);

(statearr_32615_32647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (15))){
var inst_32600 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32616_32648 = state_32607__$1;
(statearr_32616_32648[(2)] = inst_32600);

(statearr_32616_32648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (13))){
var inst_32586 = (state_32607[(10)]);
var inst_32591 = cljs.core.rand_int.call(null,inst_32586);
var inst_32592 = (inst_32586 + inst_32591);
var inst_32593 = cljs.core.async.timeout.call(null,inst_32592);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32607__$1,(16),inst_32593);
} else {
if((state_val_32608 === (6))){
var inst_32569 = (state_32607[(9)]);
var inst_32576 = (state_32607[(2)]);
var state_32607__$1 = (function (){var statearr_32617 = state_32607;
(statearr_32617[(11)] = inst_32576);

return statearr_32617;
})();
if(cljs.core.truth_(inst_32569)){
var statearr_32618_32649 = state_32607__$1;
(statearr_32618_32649[(1)] = (7));

} else {
var statearr_32619_32650 = state_32607__$1;
(statearr_32619_32650[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (3))){
var inst_32605 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32607__$1,inst_32605);
} else {
if((state_val_32608 === (12))){
var inst_32603 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32620_32651 = state_32607__$1;
(statearr_32620_32651[(2)] = inst_32603);

(statearr_32620_32651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (2))){
var inst_32562 = (state_32607[(7)]);
var inst_32563 = (state_32607[(8)]);
var inst_32569 = (state_32607[(9)]);
var inst_32565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32566 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_32567 = (new cljs.core.PersistentVector(null,2,(5),inst_32565,inst_32566,null));
var inst_32568 = (function (){var n = inst_32562;
var client_ids_satisfied = inst_32563;
return ((function (n,client_ids_satisfied,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__32621 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__32621,(0),null);
var udt = cljs.core.nth.call(null,vec__32621,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_32569__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_32567,inst_32568);
var inst_32570 = (function (){var n = inst_32562;
var client_ids_satisfied = inst_32563;
var _QMARK_pulled = inst_32569__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,inst_32568,inst_32569__$1,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__6409__auto__ = (x == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_32562,inst_32563,inst_32569,inst_32565,inst_32566,inst_32567,inst_32568,inst_32569__$1,state_val_32608,c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_32571 = inst_32570.call(null,inst_32569__$1);
var state_32607__$1 = (function (){var statearr_32624 = state_32607;
(statearr_32624[(9)] = inst_32569__$1);

return statearr_32624;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32625_32652 = state_32607__$1;
(statearr_32625_32652[(1)] = (4));

} else {
var statearr_32626_32653 = state_32607__$1;
(statearr_32626_32653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (11))){
var state_32607__$1 = state_32607;
var statearr_32627_32654 = state_32607__$1;
(statearr_32627_32654[(2)] = null);

(statearr_32627_32654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (9))){
var inst_32562 = (state_32607[(7)]);
var inst_32563 = (state_32607[(8)]);
var inst_32586 = (state_32607[(10)]);
var inst_32584 = (state_32607[(2)]);
var inst_32585 = cljs.core.into.call(null,inst_32563,inst_32584);
var inst_32586__$1 = cljs.core.get.call(null,ms_backoffs,inst_32562);
var state_32607__$1 = (function (){var statearr_32628 = state_32607;
(statearr_32628[(10)] = inst_32586__$1);

(statearr_32628[(12)] = inst_32585);

return statearr_32628;
})();
if(cljs.core.truth_(inst_32586__$1)){
var statearr_32629_32655 = state_32607__$1;
(statearr_32629_32655[(1)] = (10));

} else {
var statearr_32630_32656 = state_32607__$1;
(statearr_32630_32656[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (5))){
var inst_32569 = (state_32607[(9)]);
var inst_32574 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_32569,null,null);
var state_32607__$1 = state_32607;
var statearr_32631_32657 = state_32607__$1;
(statearr_32631_32657[(2)] = inst_32574);

(statearr_32631_32657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (14))){
var state_32607__$1 = state_32607;
var statearr_32632_32658 = state_32607__$1;
(statearr_32632_32658[(2)] = null);

(statearr_32632_32658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (16))){
var inst_32562 = (state_32607[(7)]);
var inst_32585 = (state_32607[(12)]);
var inst_32595 = (state_32607[(2)]);
var inst_32596 = (inst_32562 + (1));
var inst_32562__$1 = inst_32596;
var inst_32563 = inst_32585;
var state_32607__$1 = (function (){var statearr_32633 = state_32607;
(statearr_32633[(7)] = inst_32562__$1);

(statearr_32633[(8)] = inst_32563);

(statearr_32633[(13)] = inst_32595);

return statearr_32633;
})();
var statearr_32634_32659 = state_32607__$1;
(statearr_32634_32659[(2)] = null);

(statearr_32634_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (10))){
var inst_32585 = (state_32607[(12)]);
var inst_32588 = cljs.core.complement.call(null,inst_32585);
var inst_32589 = taoensso.encore.rsome.call(null,inst_32588,client_ids_unsatisfied);
var state_32607__$1 = state_32607;
if(cljs.core.truth_(inst_32589)){
var statearr_32635_32660 = state_32607__$1;
(statearr_32635_32660[(1)] = (13));

} else {
var statearr_32636_32661 = state_32607__$1;
(statearr_32636_32661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (8))){
var state_32607__$1 = state_32607;
var statearr_32637_32662 = state_32607__$1;
(statearr_32637_32662[(2)] = null);

(statearr_32637_32662[(1)] = (9));


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
}
}
}
}
}
}
}
}
});})(c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__17252__auto__,c__17364__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____0 = (function (){
var statearr_32641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32641[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__);

(statearr_32641[(1)] = (1));

return statearr_32641;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____1 = (function (state_32607){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32642){if((e32642 instanceof Object)){
var ex__17256__auto__ = e32642;
var statearr_32643_32663 = state_32607;
(statearr_32643_32663[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32664 = state_32607;
state_32607 = G__32664;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__ = function(state_32607){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____1.call(this,state_32607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__17366__auto__ = (function (){var statearr_32644 = f__17365__auto__.call(null);
(statearr_32644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__17364__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__7072__auto__ = (((chsk == null))?null:chsk);
var m__7073__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,chsk);
} else {
var m__7073__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__7072__auto__ = (((chsk == null))?null:chsk);
var m__7073__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,chsk,reason);
} else {
var m__7073__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__7072__auto__ = (((chsk == null))?null:chsk);
var m__7073__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,chsk);
} else {
var m__7073__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__7072__auto__ = (((chsk == null))?null:chsk);
var m__7073__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,chsk,ev,opts);
} else {
var m__7073__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args32665 = [];
var len__7484__auto___32668 = arguments.length;
var i__7485__auto___32669 = (0);
while(true){
if((i__7485__auto___32669 < len__7484__auto___32668)){
args32665.push((arguments[i__7485__auto___32669]));

var G__32670 = (i__7485__auto___32669 + (1));
i__7485__auto___32669 = G__32670;
continue;
} else {
}
break;
}

var G__32667 = args32665.length;
switch (G__32667) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32665.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-1780224091);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,856306301);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__32675 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__32675,(0),null);
var new_state = cljs.core.nth.call(null,vec__32675,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_32682 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32680){if((e32680 instanceof Error)){
var e = e32680;
return e;
} else {
throw e32680;

}
}})();
if((e_32682 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_32682,null);
}

var e_32683 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32681){if((e32681 instanceof Error)){
var e = e32681;
return e;
} else {
throw e32681;

}
}})();
if((e_32683 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_32683,null);
}

if(cljs.core.truth_((function (){var or__6409__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_32692 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32688){if((e32688 instanceof Error)){
var e = e32688;
return e;
} else {
throw e32688;

}
}})();
if((e_32692 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_32692,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__32689 = ev;
var ev_id = cljs.core.nth.call(null,vec__32689,(0),null);
var _ = cljs.core.nth.call(null,vec__32689,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__32689,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__32689,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,956877791);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__32703 = cljs.core.seq.call(null,buffered_evs);
var chunk__32704 = null;
var count__32705 = (0);
var i__32706 = (0);
while(true){
if((i__32706 < count__32705)){
var ev = cljs.core._nth.call(null,chunk__32704,i__32706);
taoensso.sente.assert_event.call(null,ev);

var vec__32707_32713 = ev;
var id_32714 = cljs.core.nth.call(null,vec__32707_32713,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_32714),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__32715 = seq__32703;
var G__32716 = chunk__32704;
var G__32717 = count__32705;
var G__32718 = (i__32706 + (1));
seq__32703 = G__32715;
chunk__32704 = G__32716;
count__32705 = G__32717;
i__32706 = G__32718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32703);
if(temp__4657__auto__){
var seq__32703__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32703__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__32703__$1);
var G__32719 = cljs.core.chunk_rest.call(null,seq__32703__$1);
var G__32720 = c__7220__auto__;
var G__32721 = cljs.core.count.call(null,c__7220__auto__);
var G__32722 = (0);
seq__32703 = G__32719;
chunk__32704 = G__32720;
count__32705 = G__32721;
i__32706 = G__32722;
continue;
} else {
var ev = cljs.core.first.call(null,seq__32703__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__32710_32723 = ev;
var id_32724 = cljs.core.nth.call(null,vec__32710_32723,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_32724),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__32725 = cljs.core.next.call(null,seq__32703__$1);
var G__32726 = null;
var G__32727 = (0);
var G__32728 = (0);
seq__32703 = G__32725;
chunk__32704 = G__32726;
count__32705 = G__32727;
i__32706 = G__32728;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__6397__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__6397__auto__){
var vec__32738 = x;
var x1 = cljs.core.nth.call(null,vec__32738,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__6397__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_32762 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32752){if((e32752 instanceof Error)){
var e = e32752;
return e;
} else {
throw e32752;

}
}})();
if((e_32762 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_32762,null);
}

var e_32763 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32753){if((e32753 instanceof Error)){
var e = e32753;
return e;
} else {
throw e32753;

}
}})();
if((e_32763 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_32763,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1775823892);

var vec__32754 = clj;
var _ = cljs.core.nth.call(null,vec__32754,(0),null);
var vec__32757 = cljs.core.nth.call(null,vec__32754,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__32757,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__32757,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__32757,(2),null);
var map__32760 = chsk;
var map__32760__$1 = ((((!((map__32760 == null)))?((((map__32760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32760):map__32760);
var chs = cljs.core.get.call(null,map__32760__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__32760__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__32754,_,vec__32757,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__32760,map__32760__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__32754,_,vec__32757,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__32760,map__32760__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-307007745);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__32754,_,vec__32757,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__32760,map__32760__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__32741_SHARP_){
return cljs.core.merge.call(null,p1__32741_SHARP_,new_state);
});})(vec__32754,_,vec__32757,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__32760,map__32760__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__6397__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return typeof require !== 'undefined';
} else {
return and__6397__auto__;
}
})())){
try{return require("websocket");
}catch (e32764){var e = e32764;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k32771,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__32773 = (((k32771 instanceof cljs.core.Keyword))?k32771.fqn:null);
switch (G__32773) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32771,else__7034__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32770){
var self__ = this;
var G__32770__$1 = this;
return (new cljs.core.RecordIter((0),G__32770__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__32770){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__32774 = cljs.core.keyword_identical_QMARK_;
var expr__32775 = k__7039__auto__;
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__32775))){
return (new taoensso.sente.ChWebSocket(G__32770,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__32770,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__32770,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__32770,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__32770,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__32770,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__32770,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__32770,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__32770,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__32770,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__32770,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__32770,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__32770,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32774.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__32775))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__32770,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__32770),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__32770){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__32770,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__32765_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__32765_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__32777 = opts;
var map__32777__$1 = ((((!((map__32777 == null)))?((((map__32777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32777):map__32777);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__32777__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__32777__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__32777__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___32868 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___32868)){
var cb_uuid_32869 = temp__4657__auto___32868;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_32869], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32779){if((e32779 instanceof Error)){
var e = e32779;
return e;
} else {
throw e32779;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___32870__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___32870__$1)){
var timeout_ms_32871 = temp__4657__auto___32870__$1;
var c__17364__auto___32872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_32790){
var state_val_32791 = (state_32790[(1)]);
if((state_val_32791 === (1))){
var inst_32780 = cljs.core.async.timeout.call(null,timeout_ms_32871);
var state_32790__$1 = state_32790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32790__$1,(2),inst_32780);
} else {
if((state_val_32791 === (2))){
var inst_32783 = (state_32790[(7)]);
var inst_32782 = (state_32790[(2)]);
var inst_32783__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_32790__$1 = (function (){var statearr_32792 = state_32790;
(statearr_32792[(8)] = inst_32782);

(statearr_32792[(7)] = inst_32783__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32783__$1)){
var statearr_32793_32873 = state_32790__$1;
(statearr_32793_32873[(1)] = (3));

} else {
var statearr_32794_32874 = state_32790__$1;
(statearr_32794_32874[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (3))){
var inst_32783 = (state_32790[(7)]);
var inst_32785 = inst_32783.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_32790__$1 = state_32790;
var statearr_32795_32875 = state_32790__$1;
(statearr_32795_32875[(2)] = inst_32785);

(statearr_32795_32875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (4))){
var state_32790__$1 = state_32790;
var statearr_32796_32876 = state_32790__$1;
(statearr_32796_32876[(2)] = null);

(statearr_32796_32876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32791 === (5))){
var inst_32788 = (state_32790[(2)]);
var state_32790__$1 = state_32790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32790__$1,inst_32788);
} else {
return null;
}
}
}
}
}
});})(c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__17252__auto__,c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32800 = [null,null,null,null,null,null,null,null,null];
(statearr_32800[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32800[(1)] = (1));

return statearr_32800;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32790){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32801){if((e32801 instanceof Object)){
var ex__17256__auto__ = e32801;
var statearr_32802_32877 = state_32790;
(statearr_32802_32877[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32878 = state_32790;
state_32790 = G__32878;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32790){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__17366__auto__ = (function (){var statearr_32803 = f__17365__auto__.call(null);
(statearr_32803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___32872);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___32872,timeout_ms_32871,temp__4657__auto___32870__$1,cb_uuid_32869,temp__4657__auto___32868,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e32804){var e = e32804;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__32777,map__32777__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,241148394);

var temp__4657__auto___32879 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___32879)){
var cb_uuid_32880 = temp__4657__auto___32879;
var cb_fn_STAR__32881 = (function (){var or__6409__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_32880);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32805){if((e32805 instanceof Error)){
var e__$1 = e32805;
return e__$1;
} else {
throw e32805;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__32881.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6409__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-53340336);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__32766_SHARP_){
return cljs.core.assoc.call(null,p1__32766_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e32812){var e = e32812;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1377493497);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__32813 = _QMARK_socket;
(G__32813["onerror"] = ((function (G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e32814){var _ = e32814;
return ws_ev;
}})()], null);
});})(G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1471478676);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__32767_SHARP_){
return cljs.core.assoc.call(null,p1__32767_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__32813["onmessage"] = ((function (G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__32815 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__32815,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__32815,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__6409__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6409__auto____$1,or__6409__auto__,ppstr,vec__32815,clj,_QMARK_cb_uuid,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6409__auto____$1,or__6409__auto__,ppstr,vec__32815,clj,_QMARK_cb_uuid,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-609883453);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__32813["onclose"] = ((function (G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,38230845);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__32768_SHARP_){
return cljs.core.assoc.call(null,p1__32768_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__32769_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__32769_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__32813,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__32813;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___32882__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___32882__$1)){
var ms_32883 = temp__4657__auto___32882__$1;
var c__17364__auto___32884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_32845){
var state_val_32846 = (state_32845[(1)]);
if((state_val_32846 === (7))){
var inst_32841 = (state_32845[(2)]);
var state_32845__$1 = state_32845;
var statearr_32847_32885 = state_32845__$1;
(statearr_32847_32885[(2)] = inst_32841);

(statearr_32847_32885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (1))){
var state_32845__$1 = state_32845;
var statearr_32848_32886 = state_32845__$1;
(statearr_32848_32886[(2)] = null);

(statearr_32848_32886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (4))){
var inst_32822 = (state_32845[(2)]);
var inst_32823 = have_handle_QMARK_.call(null);
var state_32845__$1 = (function (){var statearr_32849 = state_32845;
(statearr_32849[(7)] = inst_32822);

return statearr_32849;
})();
if(cljs.core.truth_(inst_32823)){
var statearr_32850_32887 = state_32845__$1;
(statearr_32850_32887[(1)] = (5));

} else {
var statearr_32851_32888 = state_32845__$1;
(statearr_32851_32888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (6))){
var state_32845__$1 = state_32845;
var statearr_32852_32889 = state_32845__$1;
(statearr_32852_32889[(2)] = null);

(statearr_32852_32889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (3))){
var inst_32843 = (state_32845[(2)]);
var state_32845__$1 = state_32845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32845__$1,inst_32843);
} else {
if((state_val_32846 === (2))){
var inst_32819 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_32820 = cljs.core.async.timeout.call(null,ms_32883);
var state_32845__$1 = (function (){var statearr_32853 = state_32845;
(statearr_32853[(8)] = inst_32819);

return statearr_32853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32845__$1,(4),inst_32820);
} else {
if((state_val_32846 === (9))){
var state_32845__$1 = state_32845;
var statearr_32854_32890 = state_32845__$1;
(statearr_32854_32890[(2)] = null);

(statearr_32854_32890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (5))){
var inst_32819 = (state_32845[(8)]);
var inst_32825 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_32826 = cljs.core._EQ_.call(null,inst_32819,inst_32825);
var state_32845__$1 = state_32845;
if(inst_32826){
var statearr_32855_32891 = state_32845__$1;
(statearr_32855_32891[(1)] = (8));

} else {
var statearr_32856_32892 = state_32845__$1;
(statearr_32856_32892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (10))){
var inst_32837 = (state_32845[(2)]);
var state_32845__$1 = (function (){var statearr_32857 = state_32845;
(statearr_32857[(9)] = inst_32837);

return statearr_32857;
})();
var statearr_32858_32893 = state_32845__$1;
(statearr_32858_32893[(2)] = null);

(statearr_32858_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (8))){
var inst_32828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32829 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_32830 = (new cljs.core.PersistentVector(null,1,(5),inst_32828,inst_32829,null));
var inst_32831 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_32832 = [true];
var inst_32833 = cljs.core.PersistentHashMap.fromArrays(inst_32831,inst_32832);
var inst_32834 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_32830,inst_32833);
var state_32845__$1 = state_32845;
var statearr_32859_32894 = state_32845__$1;
(statearr_32859_32894[(2)] = inst_32834);

(statearr_32859_32894[(1)] = (10));


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
}
}
});})(c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__17252__auto__,c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__17253__auto__ = null;
var taoensso$sente$state_machine__17253__auto____0 = (function (){
var statearr_32863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32863[(0)] = taoensso$sente$state_machine__17253__auto__);

(statearr_32863[(1)] = (1));

return statearr_32863;
});
var taoensso$sente$state_machine__17253__auto____1 = (function (state_32845){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_32845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e32864){if((e32864 instanceof Object)){
var ex__17256__auto__ = e32864;
var statearr_32865_32895 = state_32845;
(statearr_32865_32895[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32896 = state_32845;
state_32845 = G__32896;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$state_machine__17253__auto__ = function(state_32845){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17253__auto____1.call(this,state_32845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17253__auto____0;
taoensso$sente$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17253__auto____1;
return taoensso$sente$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__17366__auto__ = (function (){var statearr_32866 = f__17365__auto__.call(null);
(statearr_32866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___32884);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___32884,ms_32883,temp__4657__auto___32882__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__32772){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__32772),null,cljs.core.dissoc.call(null,G__32772,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k32904,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__32906 = (((k32904 instanceof cljs.core.Keyword))?k32904.fqn:null);
switch (G__32906) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32904,else__7034__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32903){
var self__ = this;
var G__32903__$1 = this;
return (new cljs.core.RecordIter((0),G__32903__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__32903){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__32907 = cljs.core.keyword_identical_QMARK_;
var expr__32908 = k__7039__auto__;
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(G__32903,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__32903,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__32903,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__32903,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__32903,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__32903,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__32903,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__32903,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__32903,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__32903,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32907.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__32908))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__32903,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__32903),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__32903){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__32903,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__32897_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__32897_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__32910 = opts;
var map__32910__$1 = ((((!((map__32910 == null)))?((((map__32910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32910):map__32910);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__32910__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__32910__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__32910__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__6409__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__32912){
var map__32918 = p__32912;
var map__32918__$1 = ((((!((map__32918 == null)))?((((map__32918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32918):map__32918);
var _QMARK_error = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__32898_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__32898_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__32920 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__32920,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32920,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__32920,resp_clj,___$1,map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__32920,resp_clj,___$1,map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-848774826);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__32920,resp_clj,___$1,map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__32899_SHARP_){
return cljs.core.assoc.call(null,p1__32899_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__32920,resp_clj,___$1,map__32918,map__32918__$1,_QMARK_error,_QMARK_content,csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__32910,map__32910__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-662739666);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1941939799);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__32900_SHARP_){
return cljs.core.assoc.call(null,p1__32900_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__6409__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__32934){
var map__32940 = p__32934;
var map__32940__$1 = ((((!((map__32940 == null)))?((((map__32940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32940):map__32940);
var _QMARK_error = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__32940,map__32940__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__32901_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__32901_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__32940,map__32940__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__32942 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__32942,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__32942,clj,handshake_QMARK_,map__32940,map__32940__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__32902_SHARP_){
return cljs.core.assoc.call(null,p1__32902_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__32942,clj,handshake_QMARK_,map__32940,map__32940__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__6409__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__32905){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__32905),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__32905),null,cljs.core.dissoc.call(null,G__32905,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k32947,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__32949 = (((k32947 instanceof cljs.core.Keyword))?k32947.fqn:null);
switch (G__32949) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32947,else__7034__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32946){
var self__ = this;
var G__32946__$1 = this;
return (new cljs.core.RecordIter((0),G__32946__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__32946){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__32950 = cljs.core.keyword_identical_QMARK_;
var expr__32951 = k__7039__auto__;
if(cljs.core.truth_(pred__32950.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__32951))){
return (new taoensso.sente.ChAutoSocket(G__32946,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32950.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__32951))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__32946,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32950.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__32951))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__32946,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32950.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__32951))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__32946,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__32946),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__32946){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__32946,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__32953 = opts;
var map__32953__$1 = ((((!((map__32953 == null)))?((((map__32953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);
var _QMARK_cb = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___32956 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___32956,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___32956,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___32956,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___32956,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1632909889);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___32956,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__6409__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__32948){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__32948),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__32948),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__32948),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__32948),null,cljs.core.dissoc.call(null,G__32948,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__32961 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__32961) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32962){if((e32962 instanceof Error)){
var e = e32962;
return e;
} else {
throw e32962;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__32963 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32963) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__32964 = protocol__$2;
switch (G__32964) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___32985 = arguments.length;
var i__7485__auto___32986 = (0);
while(true){
if((i__7485__auto___32986 < len__7484__auto___32985)){
args__7491__auto__.push((arguments[i__7485__auto___32986]));

var G__32987 = (i__7485__auto___32986 + (1));
i__7485__auto___32986 = G__32987;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__32970){
var vec__32971 = p__32970;
var map__32974 = cljs.core.nth.call(null,vec__32971,(0),null);
var map__32974__$1 = ((((!((map__32974 == null)))?((((map__32974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32974):map__32974);
var opts = map__32974__$1;
var ajax_opts = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__6409__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__32971,(1),null);
var e_32988 = (function (){try{if(((function (vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32976){if((e32976 instanceof Error)){
var e = e32976;
return e;
} else {
throw e32976;

}
}})();
if((e_32988 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_32988,null);
}

var e_32989 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32977){if((e32977 instanceof Error)){
var e = e32977;
return e;
} else {
throw e32977;

}
}})();
if((e_32989 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_32989,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-571031515);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-610846002);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__32978 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__6409__auto__ = path;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__6409__auto__ = protocol;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__6409__auto__ = host;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__32978,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__32978,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__32978,ws_url,ajax_url,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__32978,ws_url,ajax_url,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__32981 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32981) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__32978,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__32982 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__32982,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__32982,(1),null);
var ev__$1 = vec__32982;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__32978,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__32978,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__32978,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__32971,map__32974,map__32974__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1551723263);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq32968){
var G__32969 = cljs.core.first.call(null,seq32968);
var seq32968__$1 = cljs.core.next.call(null,seq32968);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32969,seq32968__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__33070 = opts;
var map__33070__$1 = ((((!((map__33070 == null)))?((((map__33070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__17364__auto___33149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_33116){
var state_val_33117 = (state_33116[(1)]);
if((state_val_33117 === (7))){
var inst_33112 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
var statearr_33118_33150 = state_33116__$1;
(statearr_33118_33150[(2)] = inst_33112);

(statearr_33118_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (1))){
var state_33116__$1 = state_33116;
var statearr_33119_33151 = state_33116__$1;
(statearr_33119_33151[(2)] = null);

(statearr_33119_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (4))){
var inst_33083 = (state_33116[(7)]);
var inst_33082 = (state_33116[(8)]);
var inst_33080 = (state_33116[(9)]);
var inst_33080__$1 = (state_33116[(2)]);
var inst_33081 = cljs.core.nth.call(null,inst_33080__$1,(0),null);
var inst_33082__$1 = cljs.core.nth.call(null,inst_33080__$1,(1),null);
var inst_33083__$1 = cljs.core._EQ_.call(null,inst_33082__$1,ch_ctrl);
var state_33116__$1 = (function (){var statearr_33120 = state_33116;
(statearr_33120[(7)] = inst_33083__$1);

(statearr_33120[(10)] = inst_33081);

(statearr_33120[(8)] = inst_33082__$1);

(statearr_33120[(9)] = inst_33080__$1);

return statearr_33120;
})();
if(inst_33083__$1){
var statearr_33121_33152 = state_33116__$1;
(statearr_33121_33152[(1)] = (5));

} else {
var statearr_33122_33153 = state_33116__$1;
(statearr_33122_33153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (15))){
var inst_33081 = (state_33116[(10)]);
var state_33116__$1 = state_33116;
var statearr_33123_33154 = state_33116__$1;
(statearr_33123_33154[(2)] = inst_33081);

(statearr_33123_33154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (13))){
var inst_33098 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
var statearr_33124_33155 = state_33116__$1;
(statearr_33124_33155[(2)] = inst_33098);

(statearr_33124_33155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (6))){
var inst_33081 = (state_33116[(10)]);
var inst_33088 = (inst_33081 == null);
var inst_33089 = cljs.core.not.call(null,inst_33088);
var state_33116__$1 = state_33116;
if(inst_33089){
var statearr_33125_33156 = state_33116__$1;
(statearr_33125_33156[(1)] = (8));

} else {
var statearr_33126_33157 = state_33116__$1;
(statearr_33126_33157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (3))){
var inst_33114 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33116__$1,inst_33114);
} else {
if((state_val_33117 === (12))){
var state_33116__$1 = state_33116;
var statearr_33127_33158 = state_33116__$1;
(statearr_33127_33158[(2)] = false);

(statearr_33127_33158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (2))){
var inst_33076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33077 = [ch_recv,ch_ctrl];
var inst_33078 = (new cljs.core.PersistentVector(null,2,(5),inst_33076,inst_33077,null));
var state_33116__$1 = state_33116;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33116__$1,(4),inst_33078);
} else {
if((state_val_33117 === (11))){
var state_33116__$1 = state_33116;
var statearr_33128_33159 = state_33116__$1;
(statearr_33128_33159[(2)] = true);

(statearr_33128_33159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (9))){
var state_33116__$1 = state_33116;
var statearr_33129_33160 = state_33116__$1;
(statearr_33129_33160[(2)] = false);

(statearr_33129_33160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (5))){
var state_33116__$1 = state_33116;
var statearr_33130_33161 = state_33116__$1;
(statearr_33130_33161[(2)] = null);

(statearr_33130_33161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (14))){
var inst_33081 = (state_33116[(10)]);
var inst_33103 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33081);
var state_33116__$1 = state_33116;
var statearr_33131_33162 = state_33116__$1;
(statearr_33131_33162[(2)] = inst_33103);

(statearr_33131_33162[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (16))){
var inst_33083 = (state_33116[(7)]);
var inst_33081 = (state_33116[(10)]);
var inst_33082 = (state_33116[(8)]);
var inst_33080 = (state_33116[(9)]);
var inst_33106 = (state_33116[(2)]);
var inst_33107 = cljs.core.get.call(null,inst_33106,new cljs.core.Keyword(null,"event","event",301435442));
var inst_33108 = (function (){var vec__33073 = inst_33080;
var v = inst_33081;
var p = inst_33082;
var stop_QMARK_ = inst_33083;
var map__33086 = inst_33106;
var event_msg = inst_33106;
var event = inst_33107;
return ((function (vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1984962590);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33134){if((e33134 instanceof Error)){
var e = e33134;
return e;
} else {
throw e33134;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33135){if((e33135 instanceof Error)){
var e = e33135;
return e;
} else {
throw e33135;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e33132){if((e33132 instanceof Error)){
var e1 = e33132;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1556255635);
}
}catch (e33133){if((e33133 instanceof Error)){
var e2 = e33133;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3903097075099123462.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1542215416);
} else {
throw e33133;

}
}} else {
throw e33132;

}
}});
;})(vec__33073,v,p,stop_QMARK_,map__33086,event_msg,event,inst_33083,inst_33081,inst_33082,inst_33080,inst_33106,inst_33107,state_val_33117,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_33109 = execute1.call(null,inst_33108);
var state_33116__$1 = (function (){var statearr_33136 = state_33116;
(statearr_33136[(11)] = inst_33109);

return statearr_33136;
})();
var statearr_33137_33163 = state_33116__$1;
(statearr_33137_33163[(2)] = null);

(statearr_33137_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (10))){
var inst_33101 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
if(cljs.core.truth_(inst_33101)){
var statearr_33138_33164 = state_33116__$1;
(statearr_33138_33164[(1)] = (14));

} else {
var statearr_33139_33165 = state_33116__$1;
(statearr_33139_33165[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (8))){
var inst_33081 = (state_33116[(10)]);
var inst_33091 = inst_33081.cljs$lang$protocol_mask$partition0$;
var inst_33092 = (inst_33091 & (64));
var inst_33093 = inst_33081.cljs$core$ISeq$;
var inst_33094 = (inst_33092) || (inst_33093);
var state_33116__$1 = state_33116;
if(cljs.core.truth_(inst_33094)){
var statearr_33140_33166 = state_33116__$1;
(statearr_33140_33166[(1)] = (11));

} else {
var statearr_33141_33167 = state_33116__$1;
(statearr_33141_33167[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
});})(c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__17252__auto__,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____0 = (function (){
var statearr_33145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33145[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__);

(statearr_33145[(1)] = (1));

return statearr_33145;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____1 = (function (state_33116){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_33116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e33146){if((e33146 instanceof Object)){
var ex__17256__auto__ = e33146;
var statearr_33147_33168 = state_33116;
(statearr_33147_33168[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_33116;
state_33116 = G__33169;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__ = function(state_33116){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____1.call(this,state_33116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__17366__auto__ = (function (){var statearr_33148 = f__17365__auto__.call(null);
(statearr_33148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___33149);

return statearr_33148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___33149,map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__33070,map__33070__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33179 = arguments.length;
var i__7485__auto___33180 = (0);
while(true){
if((i__7485__auto___33180 < len__7484__auto___33179)){
args__7491__auto__.push((arguments[i__7485__auto___33180]));

var G__33181 = (i__7485__auto___33180 + (1));
i__7485__auto___33180 = G__33181;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__33173){
var vec__33174 = p__33173;
var map__33177 = cljs.core.nth.call(null,vec__33174,(0),null);
var map__33177__$1 = ((((!((map__33177 == null)))?((((map__33177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33177):map__33177);
var opts = map__33177__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__33177__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__33177__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__33177__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq33170){
var G__33171 = cljs.core.first.call(null,seq33170);
var seq33170__$1 = cljs.core.next.call(null,seq33170);
var G__33172 = cljs.core.first.call(null,seq33170__$1);
var seq33170__$2 = cljs.core.next.call(null,seq33170__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33171,G__33172,seq33170__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33191 = arguments.length;
var i__7485__auto___33192 = (0);
while(true){
if((i__7485__auto___33192 < len__7484__auto___33191)){
args__7491__auto__.push((arguments[i__7485__auto___33192]));

var G__33193 = (i__7485__auto___33192 + (1));
i__7485__auto___33192 = G__33193;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__33185){
var vec__33186 = p__33185;
var map__33189 = cljs.core.nth.call(null,vec__33186,(0),null);
var map__33189__$1 = ((((!((map__33189 == null)))?((((map__33189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33189):map__33189);
var opts = map__33189__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__33189__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__33189__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq33182){
var G__33183 = cljs.core.first.call(null,seq33182);
var seq33182__$1 = cljs.core.next.call(null,seq33182);
var G__33184 = cljs.core.first.call(null,seq33182__$1);
var seq33182__$2 = cljs.core.next.call(null,seq33182__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33183,G__33184,seq33182__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__33194,websocket_QMARK_){
var map__33197 = p__33194;
var map__33197__$1 = ((((!((map__33197 == null)))?((((map__33197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33197):map__33197);
var location = map__33197__$1;
var protocol = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6409__auto__ = path;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1485243276139
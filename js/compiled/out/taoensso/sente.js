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
var vec__30717 = x;
var ev_id = cljs.core.nth.call(null,vec__30717,(0),null);
var _ = cljs.core.nth.call(null,vec__30717,(1),null);
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
var and__25034__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25034__auto__){
var and__25034__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__25034__auto____$1){
var map__30730 = x;
var map__30730__$1 = ((((!((map__30730 == null)))?((((map__30730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);
var ch_recv = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25034__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__25034__auto____$2){
var and__25034__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25034__auto____$3){
var and__25034__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__25034__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25034__auto____$4;
}
} else {
return and__25034__auto____$3;
}
} else {
return and__25034__auto____$2;
}
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25034__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25034__auto__){
var and__25034__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__25034__auto____$1){
var map__30742 = x;
var map__30742__$1 = ((((!((map__30742 == null)))?((((map__30742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30742):map__30742);
var ch_recv = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25034__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__25034__auto____$2){
var and__25034__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25034__auto____$3){
var and__25034__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__25034__auto____$4){
var and__25034__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25034__auto____$5){
var and__25034__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__25034__auto____$6){
var and__25034__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25034__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25034__auto____$7;
}
} else {
return and__25034__auto____$6;
}
} else {
return and__25034__auto____$5;
}
} else {
return and__25034__auto____$4;
}
} else {
return and__25034__auto____$3;
}
} else {
return and__25034__auto____$2;
}
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__30744){
var map__30750 = p__30744;
var map__30750__$1 = ((((!((map__30750 == null)))?((((map__30750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30750):map__30750);
var ev_msg = map__30750__$1;
var event = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__30752 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__30752,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__30752,(1),null);
var valid_event = vec__30752;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30752,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__30750,map__30750__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__30752,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__30750,map__30750__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,923392613);
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
}catch (e30762){var t = e30762;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,1958321629);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__30759 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__30759,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30759,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__30759,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__30759,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,173837857);

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
var args30763 = [];
var len__26121__auto___30766 = arguments.length;
var i__26122__auto___30767 = (0);
while(true){
if((i__26122__auto___30767 < len__26121__auto___30766)){
args30763.push((arguments[i__26122__auto___30767]));

var G__30768 = (i__26122__auto___30767 + (1));
i__26122__auto___30767 = G__30768;
continue;
} else {
}
break;
}

var G__30765 = args30763.length;
switch (G__30765) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30763.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1286806020);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,79856636);

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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__30770_SHARP_){
if(!((p1__30770_SHARP_ == null))){
if((false) || (p1__30770_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__30770_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__30770_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__30770_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30773){if((e30773 instanceof Error)){
var e = e30773;
return e;
} else {
throw e30773;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__30770#] (satisfies? interfaces/IPacker p1__30770#)) x)",x,e,null);
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
var args__26128__auto__ = [];
var len__26121__auto___31081 = arguments.length;
var i__26122__auto___31082 = (0);
while(true){
if((i__26122__auto___31082 < len__26121__auto___31081)){
args__26128__auto__.push((arguments[i__26122__auto___31082]));

var G__31083 = (i__26122__auto___31082 + (1));
i__26122__auto___31082 = G__31083;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__30778){
var vec__30779 = p__30778;
var map__30782 = cljs.core.nth.call(null,vec__30779,(0),null);
var map__30782__$1 = ((((!((map__30782 == null)))?((((map__30782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30782):map__30782);
var recv_buf_or_n = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25046__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30784){if((e30784 instanceof Error)){
var e = e30784;
return e;
} else {
throw e30784;

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
}catch (e30785){if((e30785 instanceof Error)){
var e = e30785;
return e;
} else {
throw e30785;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_31084 = (function (){try{if(((function (vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__30775_SHARP_){
if(!((p1__30775_SHARP_ == null))){
if((false) || (p1__30775_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__30775_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__30775_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__30775_SHARP_);
}
});})(vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30786){if((e30786 instanceof Error)){
var e = e30786;
return e;
} else {
throw e30786;

}
}})();
if((e_31084 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__30775#] (satisfies? interfaces/IServerChanAdapter p1__30775#)) web-server-ch-adapter)",web_server_ch_adapter,e_31084,null);
}

var max_ms_31085 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_31085)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_31085)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_31085], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25046__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__31086 = null;
var G__31086__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__30788 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__30788,(0),null);
var _udt = cljs.core.nth.call(null,vec__30788,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__31086__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__31086 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__31086__3.call(this,conn_type,uid,client_id);
case 4:
return G__31086__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31086.cljs$core$IFn$_invoke$arity$3 = G__31086__3;
G__31086.cljs$core$IFn$_invoke$arity$4 = G__31086__4;
return G__31086;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30791){if((e30791 instanceof Error)){
var e = e30791;
return e;
} else {
throw e30791;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__30792){
var map__30793 = p__30792;
var map__30793__$1 = ((((!((map__30793 == null)))?((((map__30793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30793):map__30793);
var old_m = map__30793__$1;
var ws = cljs.core.get.call(null,map__30793__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__30793__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__30793__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__30795 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__30795) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30796){if((e30796 instanceof Error)){
var e = e30796;
return e;
} else {
throw e30796;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__30797){
var map__30798 = p__30797;
var map__30798__$1 = ((((!((map__30798 == null)))?((((map__30798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30798):map__30798);
var old_m = map__30798__$1;
var ws = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__31088__delegate = function (user_id,ev,p__30800){
var vec__30801 = p__30800;
var map__30804 = cljs.core.nth.call(null,vec__30801,(0),null);
var map__30804__$1 = ((((!((map__30804 == null)))?((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var opts = map__30804__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_31089 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __31090 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_31089,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_31089,ev], null);
});})(uid_31089,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,890345543);
var __31091__$1 = (cljs.core.truth_(uid_31089)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __31092__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_31093 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__31094 = ((function (uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__30806 = cljs.core.get.call(null,m,uid_31089);
var ___$3 = cljs.core.nth.call(null,vec__30806,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__30806,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_31093)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_31089),cljs.core.get.call(null,m,uid_31089));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__30809 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__30809,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__30809,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__30809,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__30809,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1636184933);

var G__30812 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__30812) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_31089,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_31089,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_31089], null);
});})(uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1870805568);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__30813_31096 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_31089], null))));
var chunk__30814_31097 = null;
var count__30815_31098 = (0);
var i__30816_31099 = (0);
while(true){
if((i__30816_31099 < count__30815_31098)){
var vec__30817_31100 = cljs.core._nth.call(null,chunk__30814_31097,i__30816_31099);
var _QMARK_sch_31101 = cljs.core.nth.call(null,vec__30817_31100,(0),null);
var _udt_31102 = cljs.core.nth.call(null,vec__30817_31100,(1),null);
var temp__4657__auto___31103 = _QMARK_sch_31101;
if(cljs.core.truth_(temp__4657__auto___31103)){
var sch_31104 = temp__4657__auto___31103;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_31104);
} else {
}

var G__31105 = seq__30813_31096;
var G__31106 = chunk__30814_31097;
var G__31107 = count__30815_31098;
var G__31108 = (i__30816_31099 + (1));
seq__30813_31096 = G__31105;
chunk__30814_31097 = G__31106;
count__30815_31098 = G__31107;
i__30816_31099 = G__31108;
continue;
} else {
var temp__4657__auto___31109 = cljs.core.seq.call(null,seq__30813_31096);
if(temp__4657__auto___31109){
var seq__30813_31110__$1 = temp__4657__auto___31109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30813_31110__$1)){
var c__25857__auto___31111 = cljs.core.chunk_first.call(null,seq__30813_31110__$1);
var G__31112 = cljs.core.chunk_rest.call(null,seq__30813_31110__$1);
var G__31113 = c__25857__auto___31111;
var G__31114 = cljs.core.count.call(null,c__25857__auto___31111);
var G__31115 = (0);
seq__30813_31096 = G__31112;
chunk__30814_31097 = G__31113;
count__30815_31098 = G__31114;
i__30816_31099 = G__31115;
continue;
} else {
var vec__30820_31116 = cljs.core.first.call(null,seq__30813_31110__$1);
var _QMARK_sch_31117 = cljs.core.nth.call(null,vec__30820_31116,(0),null);
var _udt_31118 = cljs.core.nth.call(null,vec__30820_31116,(1),null);
var temp__4657__auto___31119__$1 = _QMARK_sch_31117;
if(cljs.core.truth_(temp__4657__auto___31119__$1)){
var sch_31120 = temp__4657__auto___31119__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_31120);
} else {
}

var G__31121 = cljs.core.next.call(null,seq__30813_31110__$1);
var G__31122 = null;
var G__31123 = (0);
var G__31124 = (0);
seq__30813_31096 = G__31121;
chunk__30814_31097 = G__31122;
count__30815_31098 = G__31123;
i__30816_31099 = G__31124;
continue;
}
} else {
}
}
break;
}

var seq__30823_31125 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_31089], null))));
var chunk__30824_31126 = null;
var count__30825_31127 = (0);
var i__30826_31128 = (0);
while(true){
if((i__30826_31128 < count__30825_31127)){
var vec__30827_31129 = cljs.core._nth.call(null,chunk__30824_31126,i__30826_31128);
var _QMARK_sch_31130 = cljs.core.nth.call(null,vec__30827_31129,(0),null);
var _udt_31131 = cljs.core.nth.call(null,vec__30827_31129,(1),null);
var temp__4657__auto___31132 = _QMARK_sch_31130;
if(cljs.core.truth_(temp__4657__auto___31132)){
var sch_31133 = temp__4657__auto___31132;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_31133);
} else {
}

var G__31134 = seq__30823_31125;
var G__31135 = chunk__30824_31126;
var G__31136 = count__30825_31127;
var G__31137 = (i__30826_31128 + (1));
seq__30823_31125 = G__31134;
chunk__30824_31126 = G__31135;
count__30825_31127 = G__31136;
i__30826_31128 = G__31137;
continue;
} else {
var temp__4657__auto___31138 = cljs.core.seq.call(null,seq__30823_31125);
if(temp__4657__auto___31138){
var seq__30823_31139__$1 = temp__4657__auto___31138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30823_31139__$1)){
var c__25857__auto___31140 = cljs.core.chunk_first.call(null,seq__30823_31139__$1);
var G__31141 = cljs.core.chunk_rest.call(null,seq__30823_31139__$1);
var G__31142 = c__25857__auto___31140;
var G__31143 = cljs.core.count.call(null,c__25857__auto___31140);
var G__31144 = (0);
seq__30823_31125 = G__31141;
chunk__30824_31126 = G__31142;
count__30825_31127 = G__31143;
i__30826_31128 = G__31144;
continue;
} else {
var vec__30830_31145 = cljs.core.first.call(null,seq__30823_31139__$1);
var _QMARK_sch_31146 = cljs.core.nth.call(null,vec__30830_31145,(0),null);
var _udt_31147 = cljs.core.nth.call(null,vec__30830_31145,(1),null);
var temp__4657__auto___31148__$1 = _QMARK_sch_31146;
if(cljs.core.truth_(temp__4657__auto___31148__$1)){
var sch_31149 = temp__4657__auto___31148__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_31149);
} else {
}

var G__31150 = cljs.core.next.call(null,seq__30823_31139__$1);
var G__31151 = null;
var G__31152 = (0);
var G__31153 = (0);
seq__30823_31125 = G__31150;
chunk__30824_31126 = G__31151;
count__30825_31127 = G__31152;
i__30826_31128 = G__31153;
continue;
}
} else {
}
}
break;
}
} else {
var seq__30833_31154 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__30834_31155 = null;
var count__30835_31156 = (0);
var i__30836_31157 = (0);
while(true){
if((i__30836_31157 < count__30835_31156)){
var conn_type_31158 = cljs.core._nth.call(null,chunk__30834_31155,i__30836_31157);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_31158,uid_31089], null),((function (seq__30833_31154,chunk__30834_31155,count__30835_31156,i__30836_31157,conn_type_31158,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_31093], true)], null);
} else {
var vec__30837 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__30837,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__30837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_31093)], null);
}
});})(seq__30833_31154,chunk__30834_31155,count__30835_31156,i__30836_31157,conn_type_31158,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__31159 = seq__30833_31154;
var G__31160 = chunk__30834_31155;
var G__31161 = count__30835_31156;
var G__31162 = (i__30836_31157 + (1));
seq__30833_31154 = G__31159;
chunk__30834_31155 = G__31160;
count__30835_31156 = G__31161;
i__30836_31157 = G__31162;
continue;
} else {
var temp__4657__auto___31163 = cljs.core.seq.call(null,seq__30833_31154);
if(temp__4657__auto___31163){
var seq__30833_31164__$1 = temp__4657__auto___31163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30833_31164__$1)){
var c__25857__auto___31165 = cljs.core.chunk_first.call(null,seq__30833_31164__$1);
var G__31166 = cljs.core.chunk_rest.call(null,seq__30833_31164__$1);
var G__31167 = c__25857__auto___31165;
var G__31168 = cljs.core.count.call(null,c__25857__auto___31165);
var G__31169 = (0);
seq__30833_31154 = G__31166;
chunk__30834_31155 = G__31167;
count__30835_31156 = G__31168;
i__30836_31157 = G__31169;
continue;
} else {
var conn_type_31170 = cljs.core.first.call(null,seq__30833_31164__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_31170,uid_31089], null),((function (seq__30833_31154,chunk__30834_31155,count__30835_31156,i__30836_31157,conn_type_31170,seq__30833_31164__$1,temp__4657__auto___31163,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_31093], true)], null);
} else {
var vec__30840 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__30840,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__30840,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_31093)], null);
}
});})(seq__30833_31154,chunk__30834_31155,count__30835_31156,i__30836_31157,conn_type_31170,seq__30833_31164__$1,temp__4657__auto___31163,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__31171 = cljs.core.next.call(null,seq__30833_31164__$1);
var G__31172 = null;
var G__31173 = (0);
var G__31174 = (0);
seq__30833_31154 = G__31171;
chunk__30834_31155 = G__31172;
count__30835_31156 = G__31173;
i__30836_31157 = G__31174;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_31175 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_31176 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__29132__auto___31177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_30847){
var state_val_30848 = (state_30847[(1)]);
if((state_val_30848 === (1))){
var state_30847__$1 = state_30847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30847__$1,(2),ws_timeout_31175);
} else {
if((state_val_30848 === (2))){
var inst_30844 = (state_30847[(2)]);
var inst_30845 = flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_30847__$1 = (function (){var statearr_30849 = state_30847;
(statearr_30849[(7)] = inst_30844);

return statearr_30849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30847__$1,inst_30845);
} else {
return null;
}
}
});})(c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_30847){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_30847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__29115__auto__ = e30854;
var statearr_30855_31178 = state_30847;
(statearr_30855_31178[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31179 = state_30847;
state_30847 = G__31179;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_30847){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_30847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_30856 = f__29133__auto__.call(null);
(statearr_30856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___31177);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___31177,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29132__auto___31180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_30861){
var state_val_30862 = (state_30861[(1)]);
if((state_val_30862 === (1))){
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(2),ajax_timeout_31176);
} else {
if((state_val_30862 === (2))){
var inst_30858 = (state_30861[(2)]);
var inst_30859 = flush_buffer_BANG__31094.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_30861__$1 = (function (){var statearr_30863 = state_30861;
(statearr_30863[(7)] = inst_30858);

return statearr_30863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30861__$1,inst_30859);
} else {
return null;
}
}
});})(c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_30867 = [null,null,null,null,null,null,null,null];
(statearr_30867[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_30867[(1)] = (1));

return statearr_30867;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_30861){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_30861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e30868){if((e30868 instanceof Object)){
var ex__29115__auto__ = e30868;
var statearr_30869_31181 = state_30861;
(statearr_30869_31181[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31182 = state_30861;
state_30861 = G__31182;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_30861){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_30861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_30870 = f__29133__auto__.call(null);
(statearr_30870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___31180);

return statearr_30870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___31180,ws_timeout_31175,ajax_timeout_31176,uid_31089,__31090,__31091__$1,__31092__$2,ev_uuid_31093,flush_buffer_BANG__31094,vec__30801,map__30804,map__30804__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__31088 = function (user_id,ev,var_args){
var p__30800 = null;
if (arguments.length > 2) {
var G__31183__i = 0, G__31183__a = new Array(arguments.length -  2);
while (G__31183__i < G__31183__a.length) {G__31183__a[G__31183__i] = arguments[G__31183__i + 2]; ++G__31183__i;}
  p__30800 = new cljs.core.IndexedSeq(G__31183__a,0);
} 
return G__31088__delegate.call(this,user_id,ev,p__30800);};
G__31088.cljs$lang$maxFixedArity = 2;
G__31088.cljs$lang$applyTo = (function (arglist__31184){
var user_id = cljs.core.first(arglist__31184);
arglist__31184 = cljs.core.next(arglist__31184);
var ev = cljs.core.first(arglist__31184);
var p__30800 = cljs.core.rest(arglist__31184);
return G__31088__delegate(user_id,ev,p__30800);
});
G__31088.cljs$core$IFn$_invoke$arity$variadic = G__31088__delegate;
return G__31088;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__30871 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__30871,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__30871,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-680998792);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_30879){
var state_val_30880 = (state_30879[(1)]);
if((state_val_30880 === (1))){
var inst_30874 = cljs.core.async.timeout.call(null,ms);
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30879__$1,(2),inst_30874);
} else {
if((state_val_30880 === (2))){
var inst_30876 = (state_30879[(2)]);
var inst_30877 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_30879__$1 = (function (){var statearr_30881 = state_30879;
(statearr_30881[(7)] = inst_30876);

return statearr_30881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30879__$1,inst_30877);
} else {
return null;
}
}
});})(c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_30885 = [null,null,null,null,null,null,null,null];
(statearr_30885[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_30885[(1)] = (1));

return statearr_30885;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_30879){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_30879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e30886){if((e30886 instanceof Object)){
var ex__29115__auto__ = e30886;
var statearr_30887_31185 = state_30879;
(statearr_30887_31185[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31186 = state_30879;
state_30879 = G__31186;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_30879){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_30879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_30888 = f__29133__auto__.call(null);
(statearr_30888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_30888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__30871,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29132__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1491827919);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-875698119);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-520502214);
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_30924){
var state_val_30925 = (state_30924[(1)]);
if((state_val_30925 === (7))){
var inst_30920 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30926_31187 = state_30924__$1;
(statearr_30926_31187[(2)] = inst_30920);

(statearr_30926_31187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (1))){
var inst_30889 = udt_open;
var state_30924__$1 = (function (){var statearr_30927 = state_30924;
(statearr_30927[(7)] = inst_30889);

return statearr_30927;
})();
var statearr_30928_31188 = state_30924__$1;
(statearr_30928_31188[(2)] = null);

(statearr_30928_31188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (4))){
var inst_30898 = (state_30924[(8)]);
var inst_30893 = (state_30924[(2)]);
var inst_30894 = cljs.core.deref.call(null,conns_);
var inst_30895 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30896 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_30897 = (new cljs.core.PersistentVector(null,3,(5),inst_30895,inst_30896,null));
var inst_30898__$1 = cljs.core.get_in.call(null,inst_30894,inst_30897);
var state_30924__$1 = (function (){var statearr_30929 = state_30924;
(statearr_30929[(8)] = inst_30898__$1);

(statearr_30929[(9)] = inst_30893);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30898__$1)){
var statearr_30930_31189 = state_30924__$1;
(statearr_30930_31189[(1)] = (5));

} else {
var statearr_30931_31190 = state_30924__$1;
(statearr_30931_31190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (13))){
var inst_30904 = (state_30924[(10)]);
var inst_30913 = (state_30924[(2)]);
var inst_30889 = inst_30904;
var state_30924__$1 = (function (){var statearr_30932 = state_30924;
(statearr_30932[(7)] = inst_30889);

(statearr_30932[(11)] = inst_30913);

return statearr_30932;
})();
var statearr_30933_31191 = state_30924__$1;
(statearr_30933_31191[(2)] = null);

(statearr_30933_31191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (6))){
var state_30924__$1 = state_30924;
var statearr_30934_31192 = state_30924__$1;
(statearr_30934_31192[(2)] = null);

(statearr_30934_31192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (3))){
var inst_30922 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30924__$1,inst_30922);
} else {
if((state_val_30925 === (12))){
var state_30924__$1 = state_30924;
var statearr_30935_31193 = state_30924__$1;
(statearr_30935_31193[(2)] = null);

(statearr_30935_31193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (2))){
var inst_30891 = cljs.core.async.timeout.call(null,ms);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30924__$1,(4),inst_30891);
} else {
if((state_val_30925 === (11))){
var inst_30909 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_30910 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_30909);
var state_30924__$1 = state_30924;
var statearr_30936_31194 = state_30924__$1;
(statearr_30936_31194[(2)] = inst_30910);

(statearr_30936_31194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (9))){
var state_30924__$1 = state_30924;
var statearr_30937_31195 = state_30924__$1;
(statearr_30937_31195[(2)] = null);

(statearr_30937_31195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (5))){
var inst_30898 = (state_30924[(8)]);
var inst_30903 = cljs.core.nth.call(null,inst_30898,(0),null);
var inst_30904 = cljs.core.nth.call(null,inst_30898,(1),null);
var inst_30905 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_30924__$1 = (function (){var statearr_30938 = state_30924;
(statearr_30938[(10)] = inst_30904);

(statearr_30938[(12)] = inst_30903);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30905)){
var statearr_30939_31196 = state_30924__$1;
(statearr_30939_31196[(1)] = (8));

} else {
var statearr_30940_31197 = state_30924__$1;
(statearr_30940_31197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (10))){
var inst_30917 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30941_31198 = state_30924__$1;
(statearr_30941_31198[(2)] = inst_30917);

(statearr_30941_31198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (8))){
var inst_30889 = (state_30924[(7)]);
var inst_30904 = (state_30924[(10)]);
var inst_30907 = cljs.core._EQ_.call(null,inst_30904,inst_30889);
var state_30924__$1 = state_30924;
if(inst_30907){
var statearr_30942_31199 = state_30924__$1;
(statearr_30942_31199[(1)] = (11));

} else {
var statearr_30943_31200 = state_30924__$1;
(statearr_30943_31200[(1)] = (12));

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
});})(c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_30924){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_30924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e30948){if((e30948 instanceof Object)){
var ex__29115__auto__ = e30948;
var statearr_30949_31201 = state_30924;
(statearr_30949_31201[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31202 = state_30924;
state_30924 = G__31202;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_30924){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_30924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_30950 = f__29133__auto__.call(null);
(statearr_30950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29132__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1088251559);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__25046__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_30976){
var state_val_30977 = (state_30976[(1)]);
if((state_val_30977 === (1))){
var inst_30951 = cljs.core.async.timeout.call(null,ms);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30976__$1,(2),inst_30951);
} else {
if((state_val_30977 === (2))){
var inst_30958 = (state_30976[(7)]);
var inst_30953 = (state_30976[(2)]);
var inst_30954 = cljs.core.deref.call(null,conns_);
var inst_30955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30956 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_30957 = (new cljs.core.PersistentVector(null,3,(5),inst_30955,inst_30956,null));
var inst_30958__$1 = cljs.core.get_in.call(null,inst_30954,inst_30957);
var state_30976__$1 = (function (){var statearr_30978 = state_30976;
(statearr_30978[(8)] = inst_30953);

(statearr_30978[(7)] = inst_30958__$1);

return statearr_30978;
})();
if(cljs.core.truth_(inst_30958__$1)){
var statearr_30979_31203 = state_30976__$1;
(statearr_30979_31203[(1)] = (3));

} else {
var statearr_30980_31204 = state_30976__$1;
(statearr_30980_31204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (3))){
var inst_30958 = (state_30976[(7)]);
var inst_30963 = cljs.core.nth.call(null,inst_30958,(0),null);
var inst_30964 = cljs.core.nth.call(null,inst_30958,(1),null);
var inst_30965 = cljs.core._EQ_.call(null,inst_30964,udt_open);
var state_30976__$1 = (function (){var statearr_30981 = state_30976;
(statearr_30981[(9)] = inst_30963);

return statearr_30981;
})();
if(inst_30965){
var statearr_30982_31205 = state_30976__$1;
(statearr_30982_31205[(1)] = (6));

} else {
var statearr_30983_31206 = state_30976__$1;
(statearr_30983_31206[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (4))){
var state_30976__$1 = state_30976;
var statearr_30984_31207 = state_30976__$1;
(statearr_30984_31207[(2)] = null);

(statearr_30984_31207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (5))){
var inst_30974 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30976__$1,inst_30974);
} else {
if((state_val_30977 === (6))){
var inst_30967 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_30968 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_30967);
var state_30976__$1 = state_30976;
var statearr_30985_31208 = state_30976__$1;
(statearr_30985_31208[(2)] = inst_30968);

(statearr_30985_31208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (7))){
var state_30976__$1 = state_30976;
var statearr_30986_31209 = state_30976__$1;
(statearr_30986_31209[(2)] = null);

(statearr_30986_31209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (8))){
var inst_30971 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_30987_31210 = state_30976__$1;
(statearr_30987_31210[(2)] = inst_30971);

(statearr_30987_31210[(1)] = (5));


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
});})(c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_30991 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30991[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_30991[(1)] = (1));

return statearr_30991;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_30976){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_30976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e30992){if((e30992 instanceof Object)){
var ex__29115__auto__ = e30992;
var statearr_30993_31211 = state_30976;
(statearr_30993_31211[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31212 = state_30976;
state_30976 = G__31212;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_30976){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_30976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_30994 = f__29133__auto__.call(null);
(statearr_30994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_30994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29132__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__30995 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__30995,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30995,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__30995,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30995,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__30995,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,329502573);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__30995,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1113392542);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_31049){
var state_val_31050 = (state_31049[(1)]);
if((state_val_31050 === (7))){
var state_31049__$1 = state_31049;
var statearr_31051_31213 = state_31049__$1;
(statearr_31051_31213[(2)] = null);

(statearr_31051_31213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (1))){
var inst_30998 = cljs.core.async.timeout.call(null,(5000));
var state_31049__$1 = state_31049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31049__$1,(2),inst_30998);
} else {
if((state_val_31050 === (4))){
var state_31049__$1 = state_31049;
var statearr_31052_31214 = state_31049__$1;
(statearr_31052_31214[(2)] = null);

(statearr_31052_31214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (13))){
var state_31049__$1 = state_31049;
var statearr_31053_31215 = state_31049__$1;
(statearr_31053_31215[(2)] = null);

(statearr_31053_31215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (6))){
var inst_31010 = (state_31049[(7)]);
var inst_31026 = (state_31049[(8)]);
var inst_31008 = (state_31049[(9)]);
var inst_31009 = (state_31049[(10)]);
var inst_31021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31022 = [conn_type,uid,client_id];
var inst_31023 = (new cljs.core.PersistentVector(null,3,(5),inst_31021,inst_31022,null));
var inst_31025 = (function (){var vec__31001 = inst_31008;
var __QMARK_sch = inst_31009;
var udt_t1 = inst_31010;
return ((function (vec__31001,__QMARK_sch,udt_t1,inst_31010,inst_31026,inst_31008,inst_31009,inst_31021,inst_31022,inst_31023,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__31024){
var vec__31054 = p__31024;
var _sch = cljs.core.nth.call(null,vec__31054,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__31054,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__31001,__QMARK_sch,udt_t1,inst_31010,inst_31026,inst_31008,inst_31009,inst_31021,inst_31022,inst_31023,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_31026__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_31023,inst_31025);
var state_31049__$1 = (function (){var statearr_31057 = state_31049;
(statearr_31057[(8)] = inst_31026__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_31026__$1)){
var statearr_31058_31216 = state_31049__$1;
(statearr_31058_31216[(1)] = (9));

} else {
var statearr_31059_31217 = state_31049__$1;
(statearr_31059_31217[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (3))){
var inst_31010 = (state_31049[(7)]);
var inst_31008 = (state_31049[(9)]);
var inst_31009 = (state_31049[(10)]);
var inst_31013 = (function (){var vec__31001 = inst_31008;
var __QMARK_sch = inst_31009;
var udt_t1 = inst_31010;
return ((function (vec__31001,__QMARK_sch,udt_t1,inst_31010,inst_31008,inst_31009,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__31001,__QMARK_sch,udt_t1,inst_31010,inst_31008,inst_31009,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_31014 = (new cljs.core.Delay(inst_31013,null));
var inst_31015 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31014,null,-574471297);
var state_31049__$1 = state_31049;
var statearr_31060_31218 = state_31049__$1;
(statearr_31060_31218[(2)] = inst_31015);

(statearr_31060_31218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (12))){
var inst_31035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31036 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_31037 = (new cljs.core.PersistentVector(null,2,(5),inst_31035,inst_31036,null));
var inst_31038 = receive_event_msg_BANG_.call(null,inst_31037);
var state_31049__$1 = state_31049;
var statearr_31061_31219 = state_31049__$1;
(statearr_31061_31219[(2)] = inst_31038);

(statearr_31061_31219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (2))){
var inst_31008 = (state_31049[(9)]);
var inst_31000 = (state_31049[(2)]);
var inst_31004 = cljs.core.deref.call(null,conns_);
var inst_31005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31006 = [conn_type,uid,client_id];
var inst_31007 = (new cljs.core.PersistentVector(null,3,(5),inst_31005,inst_31006,null));
var inst_31008__$1 = cljs.core.get_in.call(null,inst_31004,inst_31007);
var inst_31009 = cljs.core.nth.call(null,inst_31008__$1,(0),null);
var inst_31010 = cljs.core.nth.call(null,inst_31008__$1,(1),null);
var inst_31011 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_31049__$1 = (function (){var statearr_31062 = state_31049;
(statearr_31062[(7)] = inst_31010);

(statearr_31062[(11)] = inst_31000);

(statearr_31062[(9)] = inst_31008__$1);

(statearr_31062[(10)] = inst_31009);

return statearr_31062;
})();
if(cljs.core.truth_(inst_31011)){
var statearr_31063_31220 = state_31049__$1;
(statearr_31063_31220[(1)] = (3));

} else {
var statearr_31064_31221 = state_31049__$1;
(statearr_31064_31221[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (11))){
var inst_31044 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
var statearr_31065_31222 = state_31049__$1;
(statearr_31065_31222[(2)] = inst_31044);

(statearr_31065_31222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (9))){
var inst_31010 = (state_31049[(7)]);
var inst_31026 = (state_31049[(8)]);
var inst_31008 = (state_31049[(9)]);
var inst_31009 = (state_31049[(10)]);
var inst_31028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31029 = [conn_type,uid];
var inst_31030 = (new cljs.core.PersistentVector(null,2,(5),inst_31028,inst_31029,null));
var inst_31031 = (function (){var vec__31001 = inst_31008;
var __QMARK_sch = inst_31009;
var udt_t1 = inst_31010;
var disconnect_QMARK_ = inst_31026;
return ((function (vec__31001,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_31010,inst_31026,inst_31008,inst_31009,inst_31028,inst_31029,inst_31030,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__31001,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_31010,inst_31026,inst_31008,inst_31009,inst_31028,inst_31029,inst_31030,state_val_31050,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_31032 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_31030,inst_31031);
var inst_31033 = upd_connected_uid_BANG_.call(null,uid);
var state_31049__$1 = (function (){var statearr_31066 = state_31049;
(statearr_31066[(12)] = inst_31032);

return statearr_31066;
})();
if(cljs.core.truth_(inst_31033)){
var statearr_31067_31223 = state_31049__$1;
(statearr_31067_31223[(1)] = (12));

} else {
var statearr_31068_31224 = state_31049__$1;
(statearr_31068_31224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (5))){
var inst_31010 = (state_31049[(7)]);
var inst_31018 = (state_31049[(2)]);
var inst_31019 = cljs.core._EQ_.call(null,inst_31010,udt_close);
var state_31049__$1 = (function (){var statearr_31069 = state_31049;
(statearr_31069[(13)] = inst_31018);

return statearr_31069;
})();
if(inst_31019){
var statearr_31070_31225 = state_31049__$1;
(statearr_31070_31225[(1)] = (6));

} else {
var statearr_31071_31226 = state_31049__$1;
(statearr_31071_31226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (14))){
var inst_31041 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
var statearr_31072_31227 = state_31049__$1;
(statearr_31072_31227[(2)] = inst_31041);

(statearr_31072_31227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (10))){
var state_31049__$1 = state_31049;
var statearr_31073_31228 = state_31049__$1;
(statearr_31073_31228[(2)] = null);

(statearr_31073_31228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31050 === (8))){
var inst_31047 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31049__$1,inst_31047);
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
});})(c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29111__auto__,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31077[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_31049){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_31049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e31078){if((e31078 instanceof Object)){
var ex__29115__auto__ = e31078;
var statearr_31079_31229 = state_31049;
(statearr_31079_31229[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31230 = state_31049;
state_31049 = G__31230;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_31049){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_31049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29134__auto__ = (function (){var statearr_31080 = f__29133__auto__.call(null);
(statearr_31080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29132__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,627764818);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__30779,map__30782,map__30782__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq30776){
var G__30777 = cljs.core.first.call(null,seq30776);
var seq30776__$1 = cljs.core.next.call(null,seq30776);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30777,seq30776__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1118787045);

var seq__31247 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__31248 = null;
var count__31249 = (0);
var i__31250 = (0);
while(true){
if((i__31250 < count__31249)){
var vec__31251 = cljs.core._nth.call(null,chunk__31248,i__31250);
var client_id = cljs.core.nth.call(null,vec__31251,(0),null);
var vec__31254 = cljs.core.nth.call(null,vec__31251,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__31254,(0),null);
var _udt = cljs.core.nth.call(null,vec__31254,(1),null);
var temp__4657__auto___31263 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___31263)){
var sch_31264 = temp__4657__auto___31263;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_31264,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__31265 = seq__31247;
var G__31266 = chunk__31248;
var G__31267 = count__31249;
var G__31268 = (i__31250 + (1));
seq__31247 = G__31265;
chunk__31248 = G__31266;
count__31249 = G__31267;
i__31250 = G__31268;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31247);
if(temp__4657__auto__){
var seq__31247__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31247__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__31247__$1);
var G__31269 = cljs.core.chunk_rest.call(null,seq__31247__$1);
var G__31270 = c__25857__auto__;
var G__31271 = cljs.core.count.call(null,c__25857__auto__);
var G__31272 = (0);
seq__31247 = G__31269;
chunk__31248 = G__31270;
count__31249 = G__31271;
i__31250 = G__31272;
continue;
} else {
var vec__31257 = cljs.core.first.call(null,seq__31247__$1);
var client_id = cljs.core.nth.call(null,vec__31257,(0),null);
var vec__31260 = cljs.core.nth.call(null,vec__31257,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__31260,(0),null);
var _udt = cljs.core.nth.call(null,vec__31260,(1),null);
var temp__4657__auto___31273__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___31273__$1)){
var sch_31274 = temp__4657__auto___31273__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_31274,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__31275 = cljs.core.next.call(null,seq__31247__$1);
var G__31276 = null;
var G__31277 = (0);
var G__31278 = (0);
seq__31247 = G__31275;
chunk__31248 = G__31276;
count__31249 = G__31277;
i__31250 = G__31278;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1422325376);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_31409){
var state_val_31410 = (state_31409[(1)]);
if((state_val_31410 === (7))){
var inst_31371 = (state_31409[(7)]);
var inst_31365 = (state_31409[(8)]);
var inst_31364 = (state_31409[(9)]);
var inst_31381 = (function (){var n = inst_31364;
var client_ids_satisfied = inst_31365;
var _QMARK_pulled = inst_31371;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_31371,inst_31365,inst_31364,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__31380){
var vec__31411 = p__31380;
var _QMARK_sch = cljs.core.nth.call(null,vec__31411,(0),null);
var _udt = cljs.core.nth.call(null,vec__31411,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_31371,inst_31365,inst_31364,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_31382 = cljs.core.PersistentHashSet.EMPTY;
var inst_31383 = cljs.core.reduce_kv.call(null,inst_31381,inst_31382,inst_31371);
var state_31409__$1 = state_31409;
var statearr_31414_31447 = state_31409__$1;
(statearr_31414_31447[(2)] = inst_31383);

(statearr_31414_31447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (1))){
var inst_31363 = cljs.core.PersistentHashSet.EMPTY;
var inst_31364 = (0);
var inst_31365 = inst_31363;
var state_31409__$1 = (function (){var statearr_31415 = state_31409;
(statearr_31415[(8)] = inst_31365);

(statearr_31415[(9)] = inst_31364);

return statearr_31415;
})();
var statearr_31416_31448 = state_31409__$1;
(statearr_31416_31448[(2)] = null);

(statearr_31416_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (4))){
var state_31409__$1 = state_31409;
var statearr_31417_31449 = state_31409__$1;
(statearr_31417_31449[(2)] = true);

(statearr_31417_31449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (15))){
var inst_31402 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
var statearr_31418_31450 = state_31409__$1;
(statearr_31418_31450[(2)] = inst_31402);

(statearr_31418_31450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (13))){
var inst_31388 = (state_31409[(10)]);
var inst_31393 = cljs.core.rand_int.call(null,inst_31388);
var inst_31394 = (inst_31388 + inst_31393);
var inst_31395 = cljs.core.async.timeout.call(null,inst_31394);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31409__$1,(16),inst_31395);
} else {
if((state_val_31410 === (6))){
var inst_31371 = (state_31409[(7)]);
var inst_31378 = (state_31409[(2)]);
var state_31409__$1 = (function (){var statearr_31419 = state_31409;
(statearr_31419[(11)] = inst_31378);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31420_31451 = state_31409__$1;
(statearr_31420_31451[(1)] = (7));

} else {
var statearr_31421_31452 = state_31409__$1;
(statearr_31421_31452[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (3))){
var inst_31407 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31409__$1,inst_31407);
} else {
if((state_val_31410 === (12))){
var inst_31405 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
var statearr_31422_31453 = state_31409__$1;
(statearr_31422_31453[(2)] = inst_31405);

(statearr_31422_31453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (2))){
var inst_31371 = (state_31409[(7)]);
var inst_31365 = (state_31409[(8)]);
var inst_31364 = (state_31409[(9)]);
var inst_31367 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31368 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_31369 = (new cljs.core.PersistentVector(null,2,(5),inst_31367,inst_31368,null));
var inst_31370 = (function (){var n = inst_31364;
var client_ids_satisfied = inst_31365;
return ((function (n,client_ids_satisfied,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__31423 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__31423,(0),null);
var udt = cljs.core.nth.call(null,vec__31423,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_31371__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_31369,inst_31370);
var inst_31372 = (function (){var n = inst_31364;
var client_ids_satisfied = inst_31365;
var _QMARK_pulled = inst_31371__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,inst_31370,inst_31371__$1,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__25046__auto__ = (x == null);
if(or__25046__auto__){
return or__25046__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_31371,inst_31365,inst_31364,inst_31367,inst_31368,inst_31369,inst_31370,inst_31371__$1,state_val_31410,c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_31373 = inst_31372.call(null,inst_31371__$1);
var state_31409__$1 = (function (){var statearr_31426 = state_31409;
(statearr_31426[(7)] = inst_31371__$1);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31373)){
var statearr_31427_31454 = state_31409__$1;
(statearr_31427_31454[(1)] = (4));

} else {
var statearr_31428_31455 = state_31409__$1;
(statearr_31428_31455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (11))){
var state_31409__$1 = state_31409;
var statearr_31429_31456 = state_31409__$1;
(statearr_31429_31456[(2)] = null);

(statearr_31429_31456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (9))){
var inst_31365 = (state_31409[(8)]);
var inst_31364 = (state_31409[(9)]);
var inst_31388 = (state_31409[(10)]);
var inst_31386 = (state_31409[(2)]);
var inst_31387 = cljs.core.into.call(null,inst_31365,inst_31386);
var inst_31388__$1 = cljs.core.get.call(null,ms_backoffs,inst_31364);
var state_31409__$1 = (function (){var statearr_31430 = state_31409;
(statearr_31430[(12)] = inst_31387);

(statearr_31430[(10)] = inst_31388__$1);

return statearr_31430;
})();
if(cljs.core.truth_(inst_31388__$1)){
var statearr_31431_31457 = state_31409__$1;
(statearr_31431_31457[(1)] = (10));

} else {
var statearr_31432_31458 = state_31409__$1;
(statearr_31432_31458[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (5))){
var inst_31371 = (state_31409[(7)]);
var inst_31376 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_31371,null,null);
var state_31409__$1 = state_31409;
var statearr_31433_31459 = state_31409__$1;
(statearr_31433_31459[(2)] = inst_31376);

(statearr_31433_31459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (14))){
var state_31409__$1 = state_31409;
var statearr_31434_31460 = state_31409__$1;
(statearr_31434_31460[(2)] = null);

(statearr_31434_31460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (16))){
var inst_31387 = (state_31409[(12)]);
var inst_31364 = (state_31409[(9)]);
var inst_31397 = (state_31409[(2)]);
var inst_31398 = (inst_31364 + (1));
var inst_31364__$1 = inst_31398;
var inst_31365 = inst_31387;
var state_31409__$1 = (function (){var statearr_31435 = state_31409;
(statearr_31435[(8)] = inst_31365);

(statearr_31435[(13)] = inst_31397);

(statearr_31435[(9)] = inst_31364__$1);

return statearr_31435;
})();
var statearr_31436_31461 = state_31409__$1;
(statearr_31436_31461[(2)] = null);

(statearr_31436_31461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (10))){
var inst_31387 = (state_31409[(12)]);
var inst_31390 = cljs.core.complement.call(null,inst_31387);
var inst_31391 = taoensso.encore.rsome.call(null,inst_31390,client_ids_unsatisfied);
var state_31409__$1 = state_31409;
if(cljs.core.truth_(inst_31391)){
var statearr_31437_31462 = state_31409__$1;
(statearr_31437_31462[(1)] = (13));

} else {
var statearr_31438_31463 = state_31409__$1;
(statearr_31438_31463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (8))){
var state_31409__$1 = state_31409;
var statearr_31439_31464 = state_31409__$1;
(statearr_31439_31464[(2)] = null);

(statearr_31439_31464[(1)] = (9));


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
});})(c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__29111__auto__,c__29132__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____0 = (function (){
var statearr_31443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31443[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__);

(statearr_31443[(1)] = (1));

return statearr_31443;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____1 = (function (state_31409){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_31409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e31444){if((e31444 instanceof Object)){
var ex__29115__auto__ = e31444;
var statearr_31445_31465 = state_31409;
(statearr_31445_31465[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31466 = state_31409;
state_31409 = G__31466;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__ = function(state_31409){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____1.call(this,state_31409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__29134__auto__ = (function (){var statearr_31446 = f__29133__auto__.call(null);
(statearr_31446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__29132__auto__;
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
var x__25709__auto__ = (((chsk == null))?null:chsk);
var m__25710__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,chsk);
} else {
var m__25710__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,chsk);
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
var x__25709__auto__ = (((chsk == null))?null:chsk);
var m__25710__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,chsk,reason);
} else {
var m__25710__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,chsk,reason);
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
var x__25709__auto__ = (((chsk == null))?null:chsk);
var m__25710__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,chsk);
} else {
var m__25710__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,chsk);
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
var x__25709__auto__ = (((chsk == null))?null:chsk);
var m__25710__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,chsk,ev,opts);
} else {
var m__25710__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,chsk,ev,opts);
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
var args31467 = [];
var len__26121__auto___31470 = arguments.length;
var i__26122__auto___31471 = (0);
while(true){
if((i__26122__auto___31471 < len__26121__auto___31470)){
args31467.push((arguments[i__26122__auto___31471]));

var G__31472 = (i__26122__auto___31471 + (1));
i__26122__auto___31471 = G__31472;
continue;
} else {
}
break;
}

var G__31469 = args31467.length;
switch (G__31469) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31467.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1348545710);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1413346586);

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
var vec__31477 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__31477,(0),null);
var new_state = cljs.core.nth.call(null,vec__31477,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_31484 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31482){if((e31482 instanceof Error)){
var e = e31482;
return e;
} else {
throw e31482;

}
}})();
if((e_31484 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_31484,null);
}

var e_31485 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31483){if((e31483 instanceof Error)){
var e = e31483;
return e;
} else {
throw e31483;

}
}})();
if((e_31485 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_31485,null);
}

if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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
var e_31494 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31490){if((e31490 instanceof Error)){
var e = e31490;
return e;
} else {
throw e31490;

}
}})();
if((e_31494 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_31494,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__31491 = ev;
var ev_id = cljs.core.nth.call(null,vec__31491,(0),null);
var _ = cljs.core.nth.call(null,vec__31491,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__31491,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__31491,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-639487368);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__31505 = cljs.core.seq.call(null,buffered_evs);
var chunk__31506 = null;
var count__31507 = (0);
var i__31508 = (0);
while(true){
if((i__31508 < count__31507)){
var ev = cljs.core._nth.call(null,chunk__31506,i__31508);
taoensso.sente.assert_event.call(null,ev);

var vec__31509_31515 = ev;
var id_31516 = cljs.core.nth.call(null,vec__31509_31515,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_31516),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__31517 = seq__31505;
var G__31518 = chunk__31506;
var G__31519 = count__31507;
var G__31520 = (i__31508 + (1));
seq__31505 = G__31517;
chunk__31506 = G__31518;
count__31507 = G__31519;
i__31508 = G__31520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31505);
if(temp__4657__auto__){
var seq__31505__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31505__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__31505__$1);
var G__31521 = cljs.core.chunk_rest.call(null,seq__31505__$1);
var G__31522 = c__25857__auto__;
var G__31523 = cljs.core.count.call(null,c__25857__auto__);
var G__31524 = (0);
seq__31505 = G__31521;
chunk__31506 = G__31522;
count__31507 = G__31523;
i__31508 = G__31524;
continue;
} else {
var ev = cljs.core.first.call(null,seq__31505__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__31512_31525 = ev;
var id_31526 = cljs.core.nth.call(null,vec__31512_31525,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_31526),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__31527 = cljs.core.next.call(null,seq__31505__$1);
var G__31528 = null;
var G__31529 = (0);
var G__31530 = (0);
seq__31505 = G__31527;
chunk__31506 = G__31528;
count__31507 = G__31529;
i__31508 = G__31530;
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
var and__25034__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__25034__auto__){
var vec__31540 = x;
var x1 = cljs.core.nth.call(null,vec__31540,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__25034__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_31564 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31554){if((e31554 instanceof Error)){
var e = e31554;
return e;
} else {
throw e31554;

}
}})();
if((e_31564 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_31564,null);
}

var e_31565 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31555){if((e31555 instanceof Error)){
var e = e31555;
return e;
} else {
throw e31555;

}
}})();
if((e_31565 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_31565,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-63312669);

var vec__31556 = clj;
var _ = cljs.core.nth.call(null,vec__31556,(0),null);
var vec__31559 = cljs.core.nth.call(null,vec__31556,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__31559,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__31559,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__31559,(2),null);
var map__31562 = chsk;
var map__31562__$1 = ((((!((map__31562 == null)))?((((map__31562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31562):map__31562);
var chs = cljs.core.get.call(null,map__31562__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__31562__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__31556,_,vec__31559,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__31562,map__31562__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__31556,_,vec__31559,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__31562,map__31562__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,608242199);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__31556,_,vec__31559,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__31562,map__31562__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__31543_SHARP_){
return cljs.core.merge.call(null,p1__31543_SHARP_,new_state);
});})(vec__31556,_,vec__31559,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__31562,map__31562__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
if(cljs.core.truth_((function (){var and__25034__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__25034__auto__)){
return typeof require !== 'undefined';
} else {
return and__25034__auto__;
}
})())){
try{return require("websocket");
}catch (e31566){var e = e31566;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k31573,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__31575 = (((k31573 instanceof cljs.core.Keyword))?k31573.fqn:null);
switch (G__31575) {
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
return cljs.core.get.call(null,self__.__extmap,k31573,else__25671__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31572){
var self__ = this;
var G__31572__$1 = this;
return (new cljs.core.RecordIter((0),G__31572__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__31572){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__31576 = cljs.core.keyword_identical_QMARK_;
var expr__31577 = k__25676__auto__;
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31577))){
return (new taoensso.sente.ChWebSocket(G__31572,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__31572,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__31572,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__31572,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__31572,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__31572,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__31572,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__31572,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__31572,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__31572,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__31572,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__31572,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__31572,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31576.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__31577))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__31572,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__31572),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__31572){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__31572,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__31567_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__31567_SHARP_,reason);
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
var map__31579 = opts;
var map__31579__$1 = ((((!((map__31579 == null)))?((((map__31579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31579):map__31579);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__31579__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__31579__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__31579__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___31670 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___31670)){
var cb_uuid_31671 = temp__4657__auto___31670;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_31671], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31581){if((e31581 instanceof Error)){
var e = e31581;
return e;
} else {
throw e31581;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___31672__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___31672__$1)){
var timeout_ms_31673 = temp__4657__auto___31672__$1;
var c__29132__auto___31674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_31592){
var state_val_31593 = (state_31592[(1)]);
if((state_val_31593 === (1))){
var inst_31582 = cljs.core.async.timeout.call(null,timeout_ms_31673);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31592__$1,(2),inst_31582);
} else {
if((state_val_31593 === (2))){
var inst_31585 = (state_31592[(7)]);
var inst_31584 = (state_31592[(2)]);
var inst_31585__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_31592__$1 = (function (){var statearr_31594 = state_31592;
(statearr_31594[(8)] = inst_31584);

(statearr_31594[(7)] = inst_31585__$1);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31585__$1)){
var statearr_31595_31675 = state_31592__$1;
(statearr_31595_31675[(1)] = (3));

} else {
var statearr_31596_31676 = state_31592__$1;
(statearr_31596_31676[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (3))){
var inst_31585 = (state_31592[(7)]);
var inst_31587 = inst_31585.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_31592__$1 = state_31592;
var statearr_31597_31677 = state_31592__$1;
(statearr_31597_31677[(2)] = inst_31587);

(statearr_31597_31677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (4))){
var state_31592__$1 = state_31592;
var statearr_31598_31678 = state_31592__$1;
(statearr_31598_31678[(2)] = null);

(statearr_31598_31678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (5))){
var inst_31590 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31592__$1,inst_31590);
} else {
return null;
}
}
}
}
}
});})(c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__29111__auto__,c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_31602 = [null,null,null,null,null,null,null,null,null];
(statearr_31602[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_31602[(1)] = (1));

return statearr_31602;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_31592){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_31592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e31603){if((e31603 instanceof Object)){
var ex__29115__auto__ = e31603;
var statearr_31604_31679 = state_31592;
(statearr_31604_31679[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31680 = state_31592;
state_31592 = G__31680;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_31592){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_31592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__29134__auto__ = (function (){var statearr_31605 = f__29133__auto__.call(null);
(statearr_31605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___31674);

return statearr_31605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___31674,timeout_ms_31673,temp__4657__auto___31672__$1,cb_uuid_31671,temp__4657__auto___31670,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e31606){var e = e31606;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__31579,map__31579__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-76479095);

var temp__4657__auto___31681 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___31681)){
var cb_uuid_31682 = temp__4657__auto___31681;
var cb_fn_STAR__31683 = (function (){var or__25046__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_31682);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31607){if((e31607 instanceof Error)){
var e__$1 = e31607;
return e__$1;
} else {
throw e31607;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__31683.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__25046__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,145959640);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__31568_SHARP_){
return cljs.core.assoc.call(null,p1__31568_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e31614){var e = e31614;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1971501554);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__31615 = _QMARK_socket;
(G__31615["onerror"] = ((function (G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e31616){var _ = e31616;
return ws_ev;
}})()], null);
});})(G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2135096546);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__31569_SHARP_){
return cljs.core.assoc.call(null,p1__31569_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__31615["onmessage"] = ((function (G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__31617 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__31617,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__31617,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__25046__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25046__auto____$1,or__25046__auto__,ppstr,vec__31617,clj,_QMARK_cb_uuid,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25046__auto____$1,or__25046__auto__,ppstr,vec__31617,clj,_QMARK_cb_uuid,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2095047503);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__31615["onclose"] = ((function (G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1864448660);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__31570_SHARP_){
return cljs.core.assoc.call(null,p1__31570_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__31571_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__31571_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__31615,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__31615;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___31684__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___31684__$1)){
var ms_31685 = temp__4657__auto___31684__$1;
var c__29132__auto___31686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_31647){
var state_val_31648 = (state_31647[(1)]);
if((state_val_31648 === (7))){
var inst_31643 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
var statearr_31649_31687 = state_31647__$1;
(statearr_31649_31687[(2)] = inst_31643);

(statearr_31649_31687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (1))){
var state_31647__$1 = state_31647;
var statearr_31650_31688 = state_31647__$1;
(statearr_31650_31688[(2)] = null);

(statearr_31650_31688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (4))){
var inst_31624 = (state_31647[(2)]);
var inst_31625 = have_handle_QMARK_.call(null);
var state_31647__$1 = (function (){var statearr_31651 = state_31647;
(statearr_31651[(7)] = inst_31624);

return statearr_31651;
})();
if(cljs.core.truth_(inst_31625)){
var statearr_31652_31689 = state_31647__$1;
(statearr_31652_31689[(1)] = (5));

} else {
var statearr_31653_31690 = state_31647__$1;
(statearr_31653_31690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (6))){
var state_31647__$1 = state_31647;
var statearr_31654_31691 = state_31647__$1;
(statearr_31654_31691[(2)] = null);

(statearr_31654_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (3))){
var inst_31645 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31647__$1,inst_31645);
} else {
if((state_val_31648 === (2))){
var inst_31621 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_31622 = cljs.core.async.timeout.call(null,ms_31685);
var state_31647__$1 = (function (){var statearr_31655 = state_31647;
(statearr_31655[(8)] = inst_31621);

return statearr_31655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31647__$1,(4),inst_31622);
} else {
if((state_val_31648 === (9))){
var state_31647__$1 = state_31647;
var statearr_31656_31692 = state_31647__$1;
(statearr_31656_31692[(2)] = null);

(statearr_31656_31692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (5))){
var inst_31621 = (state_31647[(8)]);
var inst_31627 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_31628 = cljs.core._EQ_.call(null,inst_31621,inst_31627);
var state_31647__$1 = state_31647;
if(inst_31628){
var statearr_31657_31693 = state_31647__$1;
(statearr_31657_31693[(1)] = (8));

} else {
var statearr_31658_31694 = state_31647__$1;
(statearr_31658_31694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (10))){
var inst_31639 = (state_31647[(2)]);
var state_31647__$1 = (function (){var statearr_31659 = state_31647;
(statearr_31659[(9)] = inst_31639);

return statearr_31659;
})();
var statearr_31660_31695 = state_31647__$1;
(statearr_31660_31695[(2)] = null);

(statearr_31660_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (8))){
var inst_31630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31631 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_31632 = (new cljs.core.PersistentVector(null,1,(5),inst_31630,inst_31631,null));
var inst_31633 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_31634 = [true];
var inst_31635 = cljs.core.PersistentHashMap.fromArrays(inst_31633,inst_31634);
var inst_31636 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_31632,inst_31635);
var state_31647__$1 = state_31647;
var statearr_31661_31696 = state_31647__$1;
(statearr_31661_31696[(2)] = inst_31636);

(statearr_31661_31696[(1)] = (10));


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
});})(c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__29111__auto__,c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__29112__auto__ = null;
var taoensso$sente$state_machine__29112__auto____0 = (function (){
var statearr_31665 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31665[(0)] = taoensso$sente$state_machine__29112__auto__);

(statearr_31665[(1)] = (1));

return statearr_31665;
});
var taoensso$sente$state_machine__29112__auto____1 = (function (state_31647){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_31647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e31666){if((e31666 instanceof Object)){
var ex__29115__auto__ = e31666;
var statearr_31667_31697 = state_31647;
(statearr_31667_31697[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31698 = state_31647;
state_31647 = G__31698;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$state_machine__29112__auto__ = function(state_31647){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29112__auto____1.call(this,state_31647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29112__auto____0;
taoensso$sente$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29112__auto____1;
return taoensso$sente$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__29134__auto__ = (function (){var statearr_31668 = f__29133__auto__.call(null);
(statearr_31668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___31686);

return statearr_31668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___31686,ms_31685,temp__4657__auto___31684__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__31574){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__31574),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__31574),null,cljs.core.dissoc.call(null,G__31574,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k31706,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__31708 = (((k31706 instanceof cljs.core.Keyword))?k31706.fqn:null);
switch (G__31708) {
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
return cljs.core.get.call(null,self__.__extmap,k31706,else__25671__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31705){
var self__ = this;
var G__31705__$1 = this;
return (new cljs.core.RecordIter((0),G__31705__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__31705){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__31709 = cljs.core.keyword_identical_QMARK_;
var expr__31710 = k__25676__auto__;
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(G__31705,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__31705,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__31705,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__31705,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__31705,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__31705,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__31705,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__31705,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__31705,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__31705,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31709.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__31710))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__31705,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__31705),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__31705){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__31705,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__31699_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__31699_SHARP_,reason);
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
var map__31712 = opts;
var map__31712__$1 = ((((!((map__31712 == null)))?((((map__31712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31712):map__31712);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__25046__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__31714){
var map__31720 = p__31714;
var map__31720__$1 = ((((!((map__31720 == null)))?((((map__31720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31720):map__31720);
var _QMARK_error = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__31700_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__31700_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__31722 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__31722,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31722,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__31722,resp_clj,___$1,map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__31722,resp_clj,___$1,map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,585273750);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__31722,resp_clj,___$1,map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__31701_SHARP_){
return cljs.core.assoc.call(null,p1__31701_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__31722,resp_clj,___$1,map__31720,map__31720__$1,_QMARK_error,_QMARK_content,csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__31712,map__31712__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-580038255);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1935294887);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__31702_SHARP_){
return cljs.core.assoc.call(null,p1__31702_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__25046__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__31736){
var map__31742 = p__31736;
var map__31742__$1 = ((((!((map__31742 == null)))?((((map__31742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31742):map__31742);
var _QMARK_error = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__31742,map__31742__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__31703_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__31703_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__31742,map__31742__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__31744 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__31744,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__31744,clj,handshake_QMARK_,map__31742,map__31742__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__31704_SHARP_){
return cljs.core.assoc.call(null,p1__31704_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__31744,clj,handshake_QMARK_,map__31742,map__31742__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__25046__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__31707){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__31707),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__31707),null,cljs.core.dissoc.call(null,G__31707,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k31749,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__31751 = (((k31749 instanceof cljs.core.Keyword))?k31749.fqn:null);
switch (G__31751) {
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
return cljs.core.get.call(null,self__.__extmap,k31749,else__25671__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31748){
var self__ = this;
var G__31748__$1 = this;
return (new cljs.core.RecordIter((0),G__31748__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__31748){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__31752 = cljs.core.keyword_identical_QMARK_;
var expr__31753 = k__25676__auto__;
if(cljs.core.truth_(pred__31752.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__31753))){
return (new taoensso.sente.ChAutoSocket(G__31748,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31752.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__31753))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__31748,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31752.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__31753))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__31748,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31752.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__31753))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__31748,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__31748),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__31748){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__31748,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
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
var map__31755 = opts;
var map__31755__$1 = ((((!((map__31755 == null)))?((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31755):map__31755);
var _QMARK_cb = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___31758 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___31758,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___31758,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___31758,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___31758,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1700215210);

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
});})(downgraded_QMARK___31758,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__25046__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__31750){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__31750),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__31750),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31750),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__31750),null,cljs.core.dissoc.call(null,G__31750,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__31763 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__31763) {
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
}catch (e31764){if((e31764 instanceof Error)){
var e = e31764;
return e;
} else {
throw e31764;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__31765 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31765) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__31766 = protocol__$2;
switch (G__31766) {
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
var args__26128__auto__ = [];
var len__26121__auto___31787 = arguments.length;
var i__26122__auto___31788 = (0);
while(true){
if((i__26122__auto___31788 < len__26121__auto___31787)){
args__26128__auto__.push((arguments[i__26122__auto___31788]));

var G__31789 = (i__26122__auto___31788 + (1));
i__26122__auto___31788 = G__31789;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__31772){
var vec__31773 = p__31772;
var map__31776 = cljs.core.nth.call(null,vec__31773,(0),null);
var map__31776__$1 = ((((!((map__31776 == null)))?((((map__31776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31776):map__31776);
var opts = map__31776__$1;
var ajax_opts = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25046__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__31776__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__31773,(1),null);
var e_31790 = (function (){try{if(((function (vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31778){if((e31778 instanceof Error)){
var e = e31778;
return e;
} else {
throw e31778;

}
}})();
if((e_31790 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_31790,null);
}

var e_31791 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31779){if((e31779 instanceof Error)){
var e = e31779;
return e;
} else {
throw e31779;

}
}})();
if((e_31791 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_31791,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-271551813);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-2061228221);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__31780 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__25046__auto__ = path;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__25046__auto__ = protocol;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__25046__auto__ = host;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__31780,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__31780,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__31780,ws_url,ajax_url,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__31780,ws_url,ajax_url,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__31783 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31783) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__31780,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__31784 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__31784,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__31784,(1),null);
var ev__$1 = vec__31784;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__31780,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__31780,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__31780,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__31773,map__31776,map__31776__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1331761047);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq31770){
var G__31771 = cljs.core.first.call(null,seq31770);
var seq31770__$1 = cljs.core.next.call(null,seq31770);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31771,seq31770__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__31872 = opts;
var map__31872__$1 = ((((!((map__31872 == null)))?((((map__31872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31872):map__31872);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__29132__auto___31951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_31918){
var state_val_31919 = (state_31918[(1)]);
if((state_val_31919 === (7))){
var inst_31914 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31920_31952 = state_31918__$1;
(statearr_31920_31952[(2)] = inst_31914);

(statearr_31920_31952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (1))){
var state_31918__$1 = state_31918;
var statearr_31921_31953 = state_31918__$1;
(statearr_31921_31953[(2)] = null);

(statearr_31921_31953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (4))){
var inst_31885 = (state_31918[(7)]);
var inst_31884 = (state_31918[(8)]);
var inst_31882 = (state_31918[(9)]);
var inst_31882__$1 = (state_31918[(2)]);
var inst_31883 = cljs.core.nth.call(null,inst_31882__$1,(0),null);
var inst_31884__$1 = cljs.core.nth.call(null,inst_31882__$1,(1),null);
var inst_31885__$1 = cljs.core._EQ_.call(null,inst_31884__$1,ch_ctrl);
var state_31918__$1 = (function (){var statearr_31922 = state_31918;
(statearr_31922[(10)] = inst_31883);

(statearr_31922[(7)] = inst_31885__$1);

(statearr_31922[(8)] = inst_31884__$1);

(statearr_31922[(9)] = inst_31882__$1);

return statearr_31922;
})();
if(inst_31885__$1){
var statearr_31923_31954 = state_31918__$1;
(statearr_31923_31954[(1)] = (5));

} else {
var statearr_31924_31955 = state_31918__$1;
(statearr_31924_31955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (15))){
var inst_31883 = (state_31918[(10)]);
var state_31918__$1 = state_31918;
var statearr_31925_31956 = state_31918__$1;
(statearr_31925_31956[(2)] = inst_31883);

(statearr_31925_31956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (13))){
var inst_31900 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31926_31957 = state_31918__$1;
(statearr_31926_31957[(2)] = inst_31900);

(statearr_31926_31957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (6))){
var inst_31883 = (state_31918[(10)]);
var inst_31890 = (inst_31883 == null);
var inst_31891 = cljs.core.not.call(null,inst_31890);
var state_31918__$1 = state_31918;
if(inst_31891){
var statearr_31927_31958 = state_31918__$1;
(statearr_31927_31958[(1)] = (8));

} else {
var statearr_31928_31959 = state_31918__$1;
(statearr_31928_31959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (3))){
var inst_31916 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31918__$1,inst_31916);
} else {
if((state_val_31919 === (12))){
var state_31918__$1 = state_31918;
var statearr_31929_31960 = state_31918__$1;
(statearr_31929_31960[(2)] = false);

(statearr_31929_31960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (2))){
var inst_31878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31879 = [ch_recv,ch_ctrl];
var inst_31880 = (new cljs.core.PersistentVector(null,2,(5),inst_31878,inst_31879,null));
var state_31918__$1 = state_31918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31918__$1,(4),inst_31880);
} else {
if((state_val_31919 === (11))){
var state_31918__$1 = state_31918;
var statearr_31930_31961 = state_31918__$1;
(statearr_31930_31961[(2)] = true);

(statearr_31930_31961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (9))){
var state_31918__$1 = state_31918;
var statearr_31931_31962 = state_31918__$1;
(statearr_31931_31962[(2)] = false);

(statearr_31931_31962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (5))){
var state_31918__$1 = state_31918;
var statearr_31932_31963 = state_31918__$1;
(statearr_31932_31963[(2)] = null);

(statearr_31932_31963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (14))){
var inst_31883 = (state_31918[(10)]);
var inst_31905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31883);
var state_31918__$1 = state_31918;
var statearr_31933_31964 = state_31918__$1;
(statearr_31933_31964[(2)] = inst_31905);

(statearr_31933_31964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (16))){
var inst_31883 = (state_31918[(10)]);
var inst_31885 = (state_31918[(7)]);
var inst_31884 = (state_31918[(8)]);
var inst_31882 = (state_31918[(9)]);
var inst_31908 = (state_31918[(2)]);
var inst_31909 = cljs.core.get.call(null,inst_31908,new cljs.core.Keyword(null,"event","event",301435442));
var inst_31910 = (function (){var vec__31875 = inst_31882;
var v = inst_31883;
var p = inst_31884;
var stop_QMARK_ = inst_31885;
var map__31888 = inst_31908;
var event_msg = inst_31908;
var event = inst_31909;
return ((function (vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1178135545);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31936){if((e31936 instanceof Error)){
var e = e31936;
return e;
} else {
throw e31936;

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
}catch (e31937){if((e31937 instanceof Error)){
var e = e31937;
return e;
} else {
throw e31937;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e31934){if((e31934 instanceof Error)){
var e1 = e31934;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,391302249);
}
}catch (e31935){if((e31935 instanceof Error)){
var e2 = e31935;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3539944493055852656.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1382080232);
} else {
throw e31935;

}
}} else {
throw e31934;

}
}});
;})(vec__31875,v,p,stop_QMARK_,map__31888,event_msg,event,inst_31883,inst_31885,inst_31884,inst_31882,inst_31908,inst_31909,state_val_31919,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_31911 = execute1.call(null,inst_31910);
var state_31918__$1 = (function (){var statearr_31938 = state_31918;
(statearr_31938[(11)] = inst_31911);

return statearr_31938;
})();
var statearr_31939_31965 = state_31918__$1;
(statearr_31939_31965[(2)] = null);

(statearr_31939_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (10))){
var inst_31903 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31903)){
var statearr_31940_31966 = state_31918__$1;
(statearr_31940_31966[(1)] = (14));

} else {
var statearr_31941_31967 = state_31918__$1;
(statearr_31941_31967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (8))){
var inst_31883 = (state_31918[(10)]);
var inst_31893 = inst_31883.cljs$lang$protocol_mask$partition0$;
var inst_31894 = (inst_31893 & (64));
var inst_31895 = inst_31883.cljs$core$ISeq$;
var inst_31896 = (inst_31894) || (inst_31895);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31896)){
var statearr_31942_31968 = state_31918__$1;
(statearr_31942_31968[(1)] = (11));

} else {
var statearr_31943_31969 = state_31918__$1;
(statearr_31943_31969[(1)] = (12));

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
});})(c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__29111__auto__,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____0 = (function (){
var statearr_31947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31947[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__);

(statearr_31947[(1)] = (1));

return statearr_31947;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____1 = (function (state_31918){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_31918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e31948){if((e31948 instanceof Object)){
var ex__29115__auto__ = e31948;
var statearr_31949_31970 = state_31918;
(statearr_31949_31970[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31971 = state_31918;
state_31918 = G__31971;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__ = function(state_31918){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____1.call(this,state_31918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__29134__auto__ = (function (){var statearr_31950 = f__29133__auto__.call(null);
(statearr_31950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___31951);

return statearr_31950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___31951,map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__31872,map__31872__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__26128__auto__ = [];
var len__26121__auto___31981 = arguments.length;
var i__26122__auto___31982 = (0);
while(true){
if((i__26122__auto___31982 < len__26121__auto___31981)){
args__26128__auto__.push((arguments[i__26122__auto___31982]));

var G__31983 = (i__26122__auto___31982 + (1));
i__26122__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__31975){
var vec__31976 = p__31975;
var map__31979 = cljs.core.nth.call(null,vec__31976,(0),null);
var map__31979__$1 = ((((!((map__31979 == null)))?((((map__31979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31979):map__31979);
var opts = map__31979__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq31972){
var G__31973 = cljs.core.first.call(null,seq31972);
var seq31972__$1 = cljs.core.next.call(null,seq31972);
var G__31974 = cljs.core.first.call(null,seq31972__$1);
var seq31972__$2 = cljs.core.next.call(null,seq31972__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31973,G__31974,seq31972__$2);
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
var args__26128__auto__ = [];
var len__26121__auto___31993 = arguments.length;
var i__26122__auto___31994 = (0);
while(true){
if((i__26122__auto___31994 < len__26121__auto___31993)){
args__26128__auto__.push((arguments[i__26122__auto___31994]));

var G__31995 = (i__26122__auto___31994 + (1));
i__26122__auto___31994 = G__31995;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__31987){
var vec__31988 = p__31987;
var map__31991 = cljs.core.nth.call(null,vec__31988,(0),null);
var map__31991__$1 = ((((!((map__31991 == null)))?((((map__31991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);
var opts = map__31991__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq31984){
var G__31985 = cljs.core.first.call(null,seq31984);
var seq31984__$1 = cljs.core.next.call(null,seq31984);
var G__31986 = cljs.core.first.call(null,seq31984__$1);
var seq31984__$2 = cljs.core.next.call(null,seq31984__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31985,G__31986,seq31984__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__31996,websocket_QMARK_){
var map__31999 = p__31996;
var map__31999__$1 = ((((!((map__31999 == null)))?((((map__31999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31999):map__31999);
var location = map__31999__$1;
var protocol = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25046__auto__ = path;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1484456849241
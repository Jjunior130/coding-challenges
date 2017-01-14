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
var vec__58787 = x;
var ev_id = cljs.core.nth.call(null,vec__58787,(0),null);
var _ = cljs.core.nth.call(null,vec__58787,(1),null);
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
var map__58800 = x;
var map__58800__$1 = ((((!((map__58800 == null)))?((((map__58800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58800):map__58800);
var ch_recv = cljs.core.get.call(null,map__58800__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__58800__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__58800__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__58800__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
var map__58812 = x;
var map__58812__$1 = ((((!((map__58812 == null)))?((((map__58812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58812):map__58812);
var ch_recv = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__58814){
var map__58820 = p__58814;
var map__58820__$1 = ((((!((map__58820 == null)))?((((map__58820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58820):map__58820);
var ev_msg = map__58820__$1;
var event = cljs.core.get.call(null,map__58820__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__58820__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__58822 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__58822,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__58822,(1),null);
var valid_event = vec__58822;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__58822,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__58820,map__58820__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__58822,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__58820,map__58820__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-718235980);
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
}catch (e58832){var t = e58832;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,2049708947);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__58829 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__58829,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__58829,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__58829,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__58829,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,334976795);

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
var args58833 = [];
var len__26121__auto___58836 = arguments.length;
var i__26122__auto___58837 = (0);
while(true){
if((i__26122__auto___58837 < len__26121__auto___58836)){
args58833.push((arguments[i__26122__auto___58837]));

var G__58838 = (i__26122__auto___58837 + (1));
i__26122__auto___58837 = G__58838;
continue;
} else {
}
break;
}

var G__58835 = args58833.length;
switch (G__58835) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58833.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1790598011);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-216337515);

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
var e = (function (){try{if((function (p1__58840_SHARP_){
if(!((p1__58840_SHARP_ == null))){
if((false) || (p1__58840_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__58840_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__58840_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__58840_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e58843){if((e58843 instanceof Error)){
var e = e58843;
return e;
} else {
throw e58843;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__58840#] (satisfies? interfaces/IPacker p1__58840#)) x)",x,e,null);
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
var len__26121__auto___59151 = arguments.length;
var i__26122__auto___59152 = (0);
while(true){
if((i__26122__auto___59152 < len__26121__auto___59151)){
args__26128__auto__.push((arguments[i__26122__auto___59152]));

var G__59153 = (i__26122__auto___59152 + (1));
i__26122__auto___59152 = G__59153;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__58848){
var vec__58849 = p__58848;
var map__58852 = cljs.core.nth.call(null,vec__58849,(0),null);
var map__58852__$1 = ((((!((map__58852 == null)))?((((map__58852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58852):map__58852);
var recv_buf_or_n = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
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
});})(vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__58852__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e58854){if((e58854 instanceof Error)){
var e = e58854;
return e;
} else {
throw e58854;

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
}catch (e58855){if((e58855 instanceof Error)){
var e = e58855;
return e;
} else {
throw e58855;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_59154 = (function (){try{if(((function (vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__58845_SHARP_){
if(!((p1__58845_SHARP_ == null))){
if((false) || (p1__58845_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__58845_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__58845_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__58845_SHARP_);
}
});})(vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e58856){if((e58856 instanceof Error)){
var e = e58856;
return e;
} else {
throw e58856;

}
}})();
if((e_59154 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__58845#] (satisfies? interfaces/IServerChanAdapter p1__58845#)) web-server-ch-adapter)",web_server_ch_adapter,e_59154,null);
}

var max_ms_59155 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_59155)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_59155)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_59155], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25046__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__59156 = null;
var G__59156__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__58858 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__58858,(0),null);
var _udt = cljs.core.nth.call(null,vec__58858,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__59156__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__59156 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__59156__3.call(this,conn_type,uid,client_id);
case 4:
return G__59156__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59156.cljs$core$IFn$_invoke$arity$3 = G__59156__3;
G__59156.cljs$core$IFn$_invoke$arity$4 = G__59156__4;
return G__59156;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e58861){if((e58861 instanceof Error)){
var e = e58861;
return e;
} else {
throw e58861;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__58862){
var map__58863 = p__58862;
var map__58863__$1 = ((((!((map__58863 == null)))?((((map__58863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58863):map__58863);
var old_m = map__58863__$1;
var ws = cljs.core.get.call(null,map__58863__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__58863__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__58863__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__58865 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__58865) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e58866){if((e58866 instanceof Error)){
var e = e58866;
return e;
} else {
throw e58866;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__58867){
var map__58868 = p__58867;
var map__58868__$1 = ((((!((map__58868 == null)))?((((map__58868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58868):map__58868);
var old_m = map__58868__$1;
var ws = cljs.core.get.call(null,map__58868__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__58868__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__58868__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__59158__delegate = function (user_id,ev,p__58870){
var vec__58871 = p__58870;
var map__58874 = cljs.core.nth.call(null,vec__58871,(0),null);
var map__58874__$1 = ((((!((map__58874 == null)))?((((map__58874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58874):map__58874);
var opts = map__58874__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__58874__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_59159 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __59160 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_59159,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_59159,ev], null);
});})(uid_59159,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1621102680);
var __59161__$1 = (cljs.core.truth_(uid_59159)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __59162__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_59163 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__59164 = ((function (uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__58876 = cljs.core.get.call(null,m,uid_59159);
var ___$3 = cljs.core.nth.call(null,vec__58876,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__58876,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_59163)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_59159),cljs.core.get.call(null,m,uid_59159));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__58879 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__58879,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__58879,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__58879,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__58879,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1612835706);

var G__58882 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__58882) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_59159,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_59159,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_59159], null);
});})(uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-400976834);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__58883_59166 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_59159], null))));
var chunk__58884_59167 = null;
var count__58885_59168 = (0);
var i__58886_59169 = (0);
while(true){
if((i__58886_59169 < count__58885_59168)){
var vec__58887_59170 = cljs.core._nth.call(null,chunk__58884_59167,i__58886_59169);
var _QMARK_sch_59171 = cljs.core.nth.call(null,vec__58887_59170,(0),null);
var _udt_59172 = cljs.core.nth.call(null,vec__58887_59170,(1),null);
var temp__4657__auto___59173 = _QMARK_sch_59171;
if(cljs.core.truth_(temp__4657__auto___59173)){
var sch_59174 = temp__4657__auto___59173;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_59174);
} else {
}

var G__59175 = seq__58883_59166;
var G__59176 = chunk__58884_59167;
var G__59177 = count__58885_59168;
var G__59178 = (i__58886_59169 + (1));
seq__58883_59166 = G__59175;
chunk__58884_59167 = G__59176;
count__58885_59168 = G__59177;
i__58886_59169 = G__59178;
continue;
} else {
var temp__4657__auto___59179 = cljs.core.seq.call(null,seq__58883_59166);
if(temp__4657__auto___59179){
var seq__58883_59180__$1 = temp__4657__auto___59179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58883_59180__$1)){
var c__25857__auto___59181 = cljs.core.chunk_first.call(null,seq__58883_59180__$1);
var G__59182 = cljs.core.chunk_rest.call(null,seq__58883_59180__$1);
var G__59183 = c__25857__auto___59181;
var G__59184 = cljs.core.count.call(null,c__25857__auto___59181);
var G__59185 = (0);
seq__58883_59166 = G__59182;
chunk__58884_59167 = G__59183;
count__58885_59168 = G__59184;
i__58886_59169 = G__59185;
continue;
} else {
var vec__58890_59186 = cljs.core.first.call(null,seq__58883_59180__$1);
var _QMARK_sch_59187 = cljs.core.nth.call(null,vec__58890_59186,(0),null);
var _udt_59188 = cljs.core.nth.call(null,vec__58890_59186,(1),null);
var temp__4657__auto___59189__$1 = _QMARK_sch_59187;
if(cljs.core.truth_(temp__4657__auto___59189__$1)){
var sch_59190 = temp__4657__auto___59189__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_59190);
} else {
}

var G__59191 = cljs.core.next.call(null,seq__58883_59180__$1);
var G__59192 = null;
var G__59193 = (0);
var G__59194 = (0);
seq__58883_59166 = G__59191;
chunk__58884_59167 = G__59192;
count__58885_59168 = G__59193;
i__58886_59169 = G__59194;
continue;
}
} else {
}
}
break;
}

var seq__58893_59195 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_59159], null))));
var chunk__58894_59196 = null;
var count__58895_59197 = (0);
var i__58896_59198 = (0);
while(true){
if((i__58896_59198 < count__58895_59197)){
var vec__58897_59199 = cljs.core._nth.call(null,chunk__58894_59196,i__58896_59198);
var _QMARK_sch_59200 = cljs.core.nth.call(null,vec__58897_59199,(0),null);
var _udt_59201 = cljs.core.nth.call(null,vec__58897_59199,(1),null);
var temp__4657__auto___59202 = _QMARK_sch_59200;
if(cljs.core.truth_(temp__4657__auto___59202)){
var sch_59203 = temp__4657__auto___59202;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_59203);
} else {
}

var G__59204 = seq__58893_59195;
var G__59205 = chunk__58894_59196;
var G__59206 = count__58895_59197;
var G__59207 = (i__58896_59198 + (1));
seq__58893_59195 = G__59204;
chunk__58894_59196 = G__59205;
count__58895_59197 = G__59206;
i__58896_59198 = G__59207;
continue;
} else {
var temp__4657__auto___59208 = cljs.core.seq.call(null,seq__58893_59195);
if(temp__4657__auto___59208){
var seq__58893_59209__$1 = temp__4657__auto___59208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58893_59209__$1)){
var c__25857__auto___59210 = cljs.core.chunk_first.call(null,seq__58893_59209__$1);
var G__59211 = cljs.core.chunk_rest.call(null,seq__58893_59209__$1);
var G__59212 = c__25857__auto___59210;
var G__59213 = cljs.core.count.call(null,c__25857__auto___59210);
var G__59214 = (0);
seq__58893_59195 = G__59211;
chunk__58894_59196 = G__59212;
count__58895_59197 = G__59213;
i__58896_59198 = G__59214;
continue;
} else {
var vec__58900_59215 = cljs.core.first.call(null,seq__58893_59209__$1);
var _QMARK_sch_59216 = cljs.core.nth.call(null,vec__58900_59215,(0),null);
var _udt_59217 = cljs.core.nth.call(null,vec__58900_59215,(1),null);
var temp__4657__auto___59218__$1 = _QMARK_sch_59216;
if(cljs.core.truth_(temp__4657__auto___59218__$1)){
var sch_59219 = temp__4657__auto___59218__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_59219);
} else {
}

var G__59220 = cljs.core.next.call(null,seq__58893_59209__$1);
var G__59221 = null;
var G__59222 = (0);
var G__59223 = (0);
seq__58893_59195 = G__59220;
chunk__58894_59196 = G__59221;
count__58895_59197 = G__59222;
i__58896_59198 = G__59223;
continue;
}
} else {
}
}
break;
}
} else {
var seq__58903_59224 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__58904_59225 = null;
var count__58905_59226 = (0);
var i__58906_59227 = (0);
while(true){
if((i__58906_59227 < count__58905_59226)){
var conn_type_59228 = cljs.core._nth.call(null,chunk__58904_59225,i__58906_59227);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_59228,uid_59159], null),((function (seq__58903_59224,chunk__58904_59225,count__58905_59226,i__58906_59227,conn_type_59228,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_59163], true)], null);
} else {
var vec__58907 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__58907,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__58907,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_59163)], null);
}
});})(seq__58903_59224,chunk__58904_59225,count__58905_59226,i__58906_59227,conn_type_59228,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__59229 = seq__58903_59224;
var G__59230 = chunk__58904_59225;
var G__59231 = count__58905_59226;
var G__59232 = (i__58906_59227 + (1));
seq__58903_59224 = G__59229;
chunk__58904_59225 = G__59230;
count__58905_59226 = G__59231;
i__58906_59227 = G__59232;
continue;
} else {
var temp__4657__auto___59233 = cljs.core.seq.call(null,seq__58903_59224);
if(temp__4657__auto___59233){
var seq__58903_59234__$1 = temp__4657__auto___59233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58903_59234__$1)){
var c__25857__auto___59235 = cljs.core.chunk_first.call(null,seq__58903_59234__$1);
var G__59236 = cljs.core.chunk_rest.call(null,seq__58903_59234__$1);
var G__59237 = c__25857__auto___59235;
var G__59238 = cljs.core.count.call(null,c__25857__auto___59235);
var G__59239 = (0);
seq__58903_59224 = G__59236;
chunk__58904_59225 = G__59237;
count__58905_59226 = G__59238;
i__58906_59227 = G__59239;
continue;
} else {
var conn_type_59240 = cljs.core.first.call(null,seq__58903_59234__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_59240,uid_59159], null),((function (seq__58903_59224,chunk__58904_59225,count__58905_59226,i__58906_59227,conn_type_59240,seq__58903_59234__$1,temp__4657__auto___59233,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_59163], true)], null);
} else {
var vec__58910 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__58910,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__58910,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_59163)], null);
}
});})(seq__58903_59224,chunk__58904_59225,count__58905_59226,i__58906_59227,conn_type_59240,seq__58903_59234__$1,temp__4657__auto___59233,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__59241 = cljs.core.next.call(null,seq__58903_59234__$1);
var G__59242 = null;
var G__59243 = (0);
var G__59244 = (0);
seq__58903_59224 = G__59241;
chunk__58904_59225 = G__59242;
count__58905_59226 = G__59243;
i__58906_59227 = G__59244;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_59245 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_59246 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__33352__auto___59247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_58917){
var state_val_58918 = (state_58917[(1)]);
if((state_val_58918 === (1))){
var state_58917__$1 = state_58917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58917__$1,(2),ws_timeout_59245);
} else {
if((state_val_58918 === (2))){
var inst_58914 = (state_58917[(2)]);
var inst_58915 = flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_58917__$1 = (function (){var statearr_58919 = state_58917;
(statearr_58919[(7)] = inst_58914);

return statearr_58919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58917__$1,inst_58915);
} else {
return null;
}
}
});})(c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_58923 = [null,null,null,null,null,null,null,null];
(statearr_58923[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_58923[(1)] = (1));

return statearr_58923;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_58917){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_58917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e58924){if((e58924 instanceof Object)){
var ex__33291__auto__ = e58924;
var statearr_58925_59248 = state_58917;
(statearr_58925_59248[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59249 = state_58917;
state_58917 = G__59249;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_58917){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_58917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_58926 = f__33353__auto__.call(null);
(statearr_58926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___59247);

return statearr_58926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___59247,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__33352__auto___59250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_58931){
var state_val_58932 = (state_58931[(1)]);
if((state_val_58932 === (1))){
var state_58931__$1 = state_58931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58931__$1,(2),ajax_timeout_59246);
} else {
if((state_val_58932 === (2))){
var inst_58928 = (state_58931[(2)]);
var inst_58929 = flush_buffer_BANG__59164.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_58931__$1 = (function (){var statearr_58933 = state_58931;
(statearr_58933[(7)] = inst_58928);

return statearr_58933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58931__$1,inst_58929);
} else {
return null;
}
}
});})(c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_58937 = [null,null,null,null,null,null,null,null];
(statearr_58937[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_58937[(1)] = (1));

return statearr_58937;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_58931){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_58931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e58938){if((e58938 instanceof Object)){
var ex__33291__auto__ = e58938;
var statearr_58939_59251 = state_58931;
(statearr_58939_59251[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59252 = state_58931;
state_58931 = G__59252;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_58931){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_58931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_58940 = f__33353__auto__.call(null);
(statearr_58940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___59250);

return statearr_58940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___59250,ws_timeout_59245,ajax_timeout_59246,uid_59159,__59160,__59161__$1,__59162__$2,ev_uuid_59163,flush_buffer_BANG__59164,vec__58871,map__58874,map__58874__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__59158 = function (user_id,ev,var_args){
var p__58870 = null;
if (arguments.length > 2) {
var G__59253__i = 0, G__59253__a = new Array(arguments.length -  2);
while (G__59253__i < G__59253__a.length) {G__59253__a[G__59253__i] = arguments[G__59253__i + 2]; ++G__59253__i;}
  p__58870 = new cljs.core.IndexedSeq(G__59253__a,0);
} 
return G__59158__delegate.call(this,user_id,ev,p__58870);};
G__59158.cljs$lang$maxFixedArity = 2;
G__59158.cljs$lang$applyTo = (function (arglist__59254){
var user_id = cljs.core.first(arglist__59254);
arglist__59254 = cljs.core.next(arglist__59254);
var ev = cljs.core.first(arglist__59254);
var p__58870 = cljs.core.rest(arglist__59254);
return G__59158__delegate(user_id,ev,p__58870);
});
G__59158.cljs$core$IFn$_invoke$arity$variadic = G__59158__delegate;
return G__59158;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__58941 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__58941,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__58941,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1530637410);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_58949){
var state_val_58950 = (state_58949[(1)]);
if((state_val_58950 === (1))){
var inst_58944 = cljs.core.async.timeout.call(null,ms);
var state_58949__$1 = state_58949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58949__$1,(2),inst_58944);
} else {
if((state_val_58950 === (2))){
var inst_58946 = (state_58949[(2)]);
var inst_58947 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_58949__$1 = (function (){var statearr_58951 = state_58949;
(statearr_58951[(7)] = inst_58946);

return statearr_58951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58949__$1,inst_58947);
} else {
return null;
}
}
});})(c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_58955 = [null,null,null,null,null,null,null,null];
(statearr_58955[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_58955[(1)] = (1));

return statearr_58955;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_58949){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_58949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e58956){if((e58956 instanceof Object)){
var ex__33291__auto__ = e58956;
var statearr_58957_59255 = state_58949;
(statearr_58957_59255[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59256 = state_58949;
state_58949 = G__59256;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_58949){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_58949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_58958 = f__33353__auto__.call(null);
(statearr_58958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_58958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__58941,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33352__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,389152200);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1734250697);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,873372399);
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_58994){
var state_val_58995 = (state_58994[(1)]);
if((state_val_58995 === (7))){
var inst_58990 = (state_58994[(2)]);
var state_58994__$1 = state_58994;
var statearr_58996_59257 = state_58994__$1;
(statearr_58996_59257[(2)] = inst_58990);

(statearr_58996_59257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (1))){
var inst_58959 = udt_open;
var state_58994__$1 = (function (){var statearr_58997 = state_58994;
(statearr_58997[(7)] = inst_58959);

return statearr_58997;
})();
var statearr_58998_59258 = state_58994__$1;
(statearr_58998_59258[(2)] = null);

(statearr_58998_59258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (4))){
var inst_58968 = (state_58994[(8)]);
var inst_58963 = (state_58994[(2)]);
var inst_58964 = cljs.core.deref.call(null,conns_);
var inst_58965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58966 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_58967 = (new cljs.core.PersistentVector(null,3,(5),inst_58965,inst_58966,null));
var inst_58968__$1 = cljs.core.get_in.call(null,inst_58964,inst_58967);
var state_58994__$1 = (function (){var statearr_58999 = state_58994;
(statearr_58999[(9)] = inst_58963);

(statearr_58999[(8)] = inst_58968__$1);

return statearr_58999;
})();
if(cljs.core.truth_(inst_58968__$1)){
var statearr_59000_59259 = state_58994__$1;
(statearr_59000_59259[(1)] = (5));

} else {
var statearr_59001_59260 = state_58994__$1;
(statearr_59001_59260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (13))){
var inst_58974 = (state_58994[(10)]);
var inst_58983 = (state_58994[(2)]);
var inst_58959 = inst_58974;
var state_58994__$1 = (function (){var statearr_59002 = state_58994;
(statearr_59002[(11)] = inst_58983);

(statearr_59002[(7)] = inst_58959);

return statearr_59002;
})();
var statearr_59003_59261 = state_58994__$1;
(statearr_59003_59261[(2)] = null);

(statearr_59003_59261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (6))){
var state_58994__$1 = state_58994;
var statearr_59004_59262 = state_58994__$1;
(statearr_59004_59262[(2)] = null);

(statearr_59004_59262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (3))){
var inst_58992 = (state_58994[(2)]);
var state_58994__$1 = state_58994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58994__$1,inst_58992);
} else {
if((state_val_58995 === (12))){
var state_58994__$1 = state_58994;
var statearr_59005_59263 = state_58994__$1;
(statearr_59005_59263[(2)] = null);

(statearr_59005_59263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (2))){
var inst_58961 = cljs.core.async.timeout.call(null,ms);
var state_58994__$1 = state_58994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58994__$1,(4),inst_58961);
} else {
if((state_val_58995 === (11))){
var inst_58979 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_58980 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_58979);
var state_58994__$1 = state_58994;
var statearr_59006_59264 = state_58994__$1;
(statearr_59006_59264[(2)] = inst_58980);

(statearr_59006_59264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (9))){
var state_58994__$1 = state_58994;
var statearr_59007_59265 = state_58994__$1;
(statearr_59007_59265[(2)] = null);

(statearr_59007_59265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (5))){
var inst_58968 = (state_58994[(8)]);
var inst_58973 = cljs.core.nth.call(null,inst_58968,(0),null);
var inst_58974 = cljs.core.nth.call(null,inst_58968,(1),null);
var inst_58975 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_58994__$1 = (function (){var statearr_59008 = state_58994;
(statearr_59008[(10)] = inst_58974);

(statearr_59008[(12)] = inst_58973);

return statearr_59008;
})();
if(cljs.core.truth_(inst_58975)){
var statearr_59009_59266 = state_58994__$1;
(statearr_59009_59266[(1)] = (8));

} else {
var statearr_59010_59267 = state_58994__$1;
(statearr_59010_59267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (10))){
var inst_58987 = (state_58994[(2)]);
var state_58994__$1 = state_58994;
var statearr_59011_59268 = state_58994__$1;
(statearr_59011_59268[(2)] = inst_58987);

(statearr_59011_59268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58995 === (8))){
var inst_58959 = (state_58994[(7)]);
var inst_58974 = (state_58994[(10)]);
var inst_58977 = cljs.core._EQ_.call(null,inst_58974,inst_58959);
var state_58994__$1 = state_58994;
if(inst_58977){
var statearr_59012_59269 = state_58994__$1;
(statearr_59012_59269[(1)] = (11));

} else {
var statearr_59013_59270 = state_58994__$1;
(statearr_59013_59270[(1)] = (12));

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
});})(c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_59017 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59017[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_59017[(1)] = (1));

return statearr_59017;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_58994){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_58994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59018){if((e59018 instanceof Object)){
var ex__33291__auto__ = e59018;
var statearr_59019_59271 = state_58994;
(statearr_59019_59271[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59272 = state_58994;
state_58994 = G__59272;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_58994){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_58994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_59020 = f__33353__auto__.call(null);
(statearr_59020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_59020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33352__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1201135656);
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59046){
var state_val_59047 = (state_59046[(1)]);
if((state_val_59047 === (1))){
var inst_59021 = cljs.core.async.timeout.call(null,ms);
var state_59046__$1 = state_59046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59046__$1,(2),inst_59021);
} else {
if((state_val_59047 === (2))){
var inst_59028 = (state_59046[(7)]);
var inst_59023 = (state_59046[(2)]);
var inst_59024 = cljs.core.deref.call(null,conns_);
var inst_59025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59026 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_59027 = (new cljs.core.PersistentVector(null,3,(5),inst_59025,inst_59026,null));
var inst_59028__$1 = cljs.core.get_in.call(null,inst_59024,inst_59027);
var state_59046__$1 = (function (){var statearr_59048 = state_59046;
(statearr_59048[(8)] = inst_59023);

(statearr_59048[(7)] = inst_59028__$1);

return statearr_59048;
})();
if(cljs.core.truth_(inst_59028__$1)){
var statearr_59049_59273 = state_59046__$1;
(statearr_59049_59273[(1)] = (3));

} else {
var statearr_59050_59274 = state_59046__$1;
(statearr_59050_59274[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59047 === (3))){
var inst_59028 = (state_59046[(7)]);
var inst_59033 = cljs.core.nth.call(null,inst_59028,(0),null);
var inst_59034 = cljs.core.nth.call(null,inst_59028,(1),null);
var inst_59035 = cljs.core._EQ_.call(null,inst_59034,udt_open);
var state_59046__$1 = (function (){var statearr_59051 = state_59046;
(statearr_59051[(9)] = inst_59033);

return statearr_59051;
})();
if(inst_59035){
var statearr_59052_59275 = state_59046__$1;
(statearr_59052_59275[(1)] = (6));

} else {
var statearr_59053_59276 = state_59046__$1;
(statearr_59053_59276[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59047 === (4))){
var state_59046__$1 = state_59046;
var statearr_59054_59277 = state_59046__$1;
(statearr_59054_59277[(2)] = null);

(statearr_59054_59277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59047 === (5))){
var inst_59044 = (state_59046[(2)]);
var state_59046__$1 = state_59046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59046__$1,inst_59044);
} else {
if((state_val_59047 === (6))){
var inst_59037 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_59038 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_59037);
var state_59046__$1 = state_59046;
var statearr_59055_59278 = state_59046__$1;
(statearr_59055_59278[(2)] = inst_59038);

(statearr_59055_59278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59047 === (7))){
var state_59046__$1 = state_59046;
var statearr_59056_59279 = state_59046__$1;
(statearr_59056_59279[(2)] = null);

(statearr_59056_59279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59047 === (8))){
var inst_59041 = (state_59046[(2)]);
var state_59046__$1 = state_59046;
var statearr_59057_59280 = state_59046__$1;
(statearr_59057_59280[(2)] = inst_59041);

(statearr_59057_59280[(1)] = (5));


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
});})(c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_59061 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59061[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_59061[(1)] = (1));

return statearr_59061;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_59046){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59062){if((e59062 instanceof Object)){
var ex__33291__auto__ = e59062;
var statearr_59063_59281 = state_59046;
(statearr_59063_59281[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59282 = state_59046;
state_59046 = G__59282;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_59046){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_59046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_59064 = f__33353__auto__.call(null);
(statearr_59064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_59064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33352__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__59065 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__59065,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__59065,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__59065,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59065,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__59065,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1526065766);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__59065,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1085873545);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59119){
var state_val_59120 = (state_59119[(1)]);
if((state_val_59120 === (7))){
var state_59119__$1 = state_59119;
var statearr_59121_59283 = state_59119__$1;
(statearr_59121_59283[(2)] = null);

(statearr_59121_59283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (1))){
var inst_59068 = cljs.core.async.timeout.call(null,(5000));
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59119__$1,(2),inst_59068);
} else {
if((state_val_59120 === (4))){
var state_59119__$1 = state_59119;
var statearr_59122_59284 = state_59119__$1;
(statearr_59122_59284[(2)] = null);

(statearr_59122_59284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (13))){
var state_59119__$1 = state_59119;
var statearr_59123_59285 = state_59119__$1;
(statearr_59123_59285[(2)] = null);

(statearr_59123_59285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (6))){
var inst_59096 = (state_59119[(7)]);
var inst_59080 = (state_59119[(8)]);
var inst_59079 = (state_59119[(9)]);
var inst_59078 = (state_59119[(10)]);
var inst_59091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59092 = [conn_type,uid,client_id];
var inst_59093 = (new cljs.core.PersistentVector(null,3,(5),inst_59091,inst_59092,null));
var inst_59095 = (function (){var vec__59071 = inst_59078;
var __QMARK_sch = inst_59079;
var udt_t1 = inst_59080;
return ((function (vec__59071,__QMARK_sch,udt_t1,inst_59096,inst_59080,inst_59079,inst_59078,inst_59091,inst_59092,inst_59093,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__59094){
var vec__59124 = p__59094;
var _sch = cljs.core.nth.call(null,vec__59124,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__59124,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__59071,__QMARK_sch,udt_t1,inst_59096,inst_59080,inst_59079,inst_59078,inst_59091,inst_59092,inst_59093,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_59096__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_59093,inst_59095);
var state_59119__$1 = (function (){var statearr_59127 = state_59119;
(statearr_59127[(7)] = inst_59096__$1);

return statearr_59127;
})();
if(cljs.core.truth_(inst_59096__$1)){
var statearr_59128_59286 = state_59119__$1;
(statearr_59128_59286[(1)] = (9));

} else {
var statearr_59129_59287 = state_59119__$1;
(statearr_59129_59287[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (3))){
var inst_59080 = (state_59119[(8)]);
var inst_59079 = (state_59119[(9)]);
var inst_59078 = (state_59119[(10)]);
var inst_59083 = (function (){var vec__59071 = inst_59078;
var __QMARK_sch = inst_59079;
var udt_t1 = inst_59080;
return ((function (vec__59071,__QMARK_sch,udt_t1,inst_59080,inst_59079,inst_59078,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__59071,__QMARK_sch,udt_t1,inst_59080,inst_59079,inst_59078,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_59084 = (new cljs.core.Delay(inst_59083,null));
var inst_59085 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_59084,null,-1035888398);
var state_59119__$1 = state_59119;
var statearr_59130_59288 = state_59119__$1;
(statearr_59130_59288[(2)] = inst_59085);

(statearr_59130_59288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (12))){
var inst_59105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59106 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_59107 = (new cljs.core.PersistentVector(null,2,(5),inst_59105,inst_59106,null));
var inst_59108 = receive_event_msg_BANG_.call(null,inst_59107);
var state_59119__$1 = state_59119;
var statearr_59131_59289 = state_59119__$1;
(statearr_59131_59289[(2)] = inst_59108);

(statearr_59131_59289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (2))){
var inst_59078 = (state_59119[(10)]);
var inst_59070 = (state_59119[(2)]);
var inst_59074 = cljs.core.deref.call(null,conns_);
var inst_59075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59076 = [conn_type,uid,client_id];
var inst_59077 = (new cljs.core.PersistentVector(null,3,(5),inst_59075,inst_59076,null));
var inst_59078__$1 = cljs.core.get_in.call(null,inst_59074,inst_59077);
var inst_59079 = cljs.core.nth.call(null,inst_59078__$1,(0),null);
var inst_59080 = cljs.core.nth.call(null,inst_59078__$1,(1),null);
var inst_59081 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_59119__$1 = (function (){var statearr_59132 = state_59119;
(statearr_59132[(8)] = inst_59080);

(statearr_59132[(9)] = inst_59079);

(statearr_59132[(10)] = inst_59078__$1);

(statearr_59132[(11)] = inst_59070);

return statearr_59132;
})();
if(cljs.core.truth_(inst_59081)){
var statearr_59133_59290 = state_59119__$1;
(statearr_59133_59290[(1)] = (3));

} else {
var statearr_59134_59291 = state_59119__$1;
(statearr_59134_59291[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (11))){
var inst_59114 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
var statearr_59135_59292 = state_59119__$1;
(statearr_59135_59292[(2)] = inst_59114);

(statearr_59135_59292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (9))){
var inst_59096 = (state_59119[(7)]);
var inst_59080 = (state_59119[(8)]);
var inst_59079 = (state_59119[(9)]);
var inst_59078 = (state_59119[(10)]);
var inst_59098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59099 = [conn_type,uid];
var inst_59100 = (new cljs.core.PersistentVector(null,2,(5),inst_59098,inst_59099,null));
var inst_59101 = (function (){var vec__59071 = inst_59078;
var __QMARK_sch = inst_59079;
var udt_t1 = inst_59080;
var disconnect_QMARK_ = inst_59096;
return ((function (vec__59071,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_59096,inst_59080,inst_59079,inst_59078,inst_59098,inst_59099,inst_59100,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__59071,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_59096,inst_59080,inst_59079,inst_59078,inst_59098,inst_59099,inst_59100,state_val_59120,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_59102 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_59100,inst_59101);
var inst_59103 = upd_connected_uid_BANG_.call(null,uid);
var state_59119__$1 = (function (){var statearr_59136 = state_59119;
(statearr_59136[(12)] = inst_59102);

return statearr_59136;
})();
if(cljs.core.truth_(inst_59103)){
var statearr_59137_59293 = state_59119__$1;
(statearr_59137_59293[(1)] = (12));

} else {
var statearr_59138_59294 = state_59119__$1;
(statearr_59138_59294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (5))){
var inst_59080 = (state_59119[(8)]);
var inst_59088 = (state_59119[(2)]);
var inst_59089 = cljs.core._EQ_.call(null,inst_59080,udt_close);
var state_59119__$1 = (function (){var statearr_59139 = state_59119;
(statearr_59139[(13)] = inst_59088);

return statearr_59139;
})();
if(inst_59089){
var statearr_59140_59295 = state_59119__$1;
(statearr_59140_59295[(1)] = (6));

} else {
var statearr_59141_59296 = state_59119__$1;
(statearr_59141_59296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (14))){
var inst_59111 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
var statearr_59142_59297 = state_59119__$1;
(statearr_59142_59297[(2)] = inst_59111);

(statearr_59142_59297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (10))){
var state_59119__$1 = state_59119;
var statearr_59143_59298 = state_59119__$1;
(statearr_59143_59298[(2)] = null);

(statearr_59143_59298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59120 === (8))){
var inst_59117 = (state_59119[(2)]);
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59119__$1,inst_59117);
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
});})(c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33287__auto__,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_59147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59147[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_59147[(1)] = (1));

return statearr_59147;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_59119){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59148){if((e59148 instanceof Object)){
var ex__33291__auto__ = e59148;
var statearr_59149_59299 = state_59119;
(statearr_59149_59299[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59300 = state_59119;
state_59119 = G__59300;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_59119){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_59119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33354__auto__ = (function (){var statearr_59150 = f__33353__auto__.call(null);
(statearr_59150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_59150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33352__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-328237878);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__58849,map__58852,map__58852__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq58846){
var G__58847 = cljs.core.first.call(null,seq58846);
var seq58846__$1 = cljs.core.next.call(null,seq58846);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58847,seq58846__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,761742061);

var seq__59317 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__59318 = null;
var count__59319 = (0);
var i__59320 = (0);
while(true){
if((i__59320 < count__59319)){
var vec__59321 = cljs.core._nth.call(null,chunk__59318,i__59320);
var client_id = cljs.core.nth.call(null,vec__59321,(0),null);
var vec__59324 = cljs.core.nth.call(null,vec__59321,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__59324,(0),null);
var _udt = cljs.core.nth.call(null,vec__59324,(1),null);
var temp__4657__auto___59333 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___59333)){
var sch_59334 = temp__4657__auto___59333;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_59334,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__59335 = seq__59317;
var G__59336 = chunk__59318;
var G__59337 = count__59319;
var G__59338 = (i__59320 + (1));
seq__59317 = G__59335;
chunk__59318 = G__59336;
count__59319 = G__59337;
i__59320 = G__59338;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59317);
if(temp__4657__auto__){
var seq__59317__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59317__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__59317__$1);
var G__59339 = cljs.core.chunk_rest.call(null,seq__59317__$1);
var G__59340 = c__25857__auto__;
var G__59341 = cljs.core.count.call(null,c__25857__auto__);
var G__59342 = (0);
seq__59317 = G__59339;
chunk__59318 = G__59340;
count__59319 = G__59341;
i__59320 = G__59342;
continue;
} else {
var vec__59327 = cljs.core.first.call(null,seq__59317__$1);
var client_id = cljs.core.nth.call(null,vec__59327,(0),null);
var vec__59330 = cljs.core.nth.call(null,vec__59327,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__59330,(0),null);
var _udt = cljs.core.nth.call(null,vec__59330,(1),null);
var temp__4657__auto___59343__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___59343__$1)){
var sch_59344 = temp__4657__auto___59343__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_59344,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__59345 = cljs.core.next.call(null,seq__59317__$1);
var G__59346 = null;
var G__59347 = (0);
var G__59348 = (0);
seq__59317 = G__59345;
chunk__59318 = G__59346;
count__59319 = G__59347;
i__59320 = G__59348;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,717230956);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_59479){
var state_val_59480 = (state_59479[(1)]);
if((state_val_59480 === (7))){
var inst_59441 = (state_59479[(7)]);
var inst_59435 = (state_59479[(8)]);
var inst_59434 = (state_59479[(9)]);
var inst_59451 = (function (){var n = inst_59434;
var client_ids_satisfied = inst_59435;
var _QMARK_pulled = inst_59441;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_59441,inst_59435,inst_59434,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__59450){
var vec__59481 = p__59450;
var _QMARK_sch = cljs.core.nth.call(null,vec__59481,(0),null);
var _udt = cljs.core.nth.call(null,vec__59481,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_59441,inst_59435,inst_59434,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_59452 = cljs.core.PersistentHashSet.EMPTY;
var inst_59453 = cljs.core.reduce_kv.call(null,inst_59451,inst_59452,inst_59441);
var state_59479__$1 = state_59479;
var statearr_59484_59517 = state_59479__$1;
(statearr_59484_59517[(2)] = inst_59453);

(statearr_59484_59517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (1))){
var inst_59433 = cljs.core.PersistentHashSet.EMPTY;
var inst_59434 = (0);
var inst_59435 = inst_59433;
var state_59479__$1 = (function (){var statearr_59485 = state_59479;
(statearr_59485[(8)] = inst_59435);

(statearr_59485[(9)] = inst_59434);

return statearr_59485;
})();
var statearr_59486_59518 = state_59479__$1;
(statearr_59486_59518[(2)] = null);

(statearr_59486_59518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (4))){
var state_59479__$1 = state_59479;
var statearr_59487_59519 = state_59479__$1;
(statearr_59487_59519[(2)] = true);

(statearr_59487_59519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (15))){
var inst_59472 = (state_59479[(2)]);
var state_59479__$1 = state_59479;
var statearr_59488_59520 = state_59479__$1;
(statearr_59488_59520[(2)] = inst_59472);

(statearr_59488_59520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (13))){
var inst_59458 = (state_59479[(10)]);
var inst_59463 = cljs.core.rand_int.call(null,inst_59458);
var inst_59464 = (inst_59458 + inst_59463);
var inst_59465 = cljs.core.async.timeout.call(null,inst_59464);
var state_59479__$1 = state_59479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59479__$1,(16),inst_59465);
} else {
if((state_val_59480 === (6))){
var inst_59441 = (state_59479[(7)]);
var inst_59448 = (state_59479[(2)]);
var state_59479__$1 = (function (){var statearr_59489 = state_59479;
(statearr_59489[(11)] = inst_59448);

return statearr_59489;
})();
if(cljs.core.truth_(inst_59441)){
var statearr_59490_59521 = state_59479__$1;
(statearr_59490_59521[(1)] = (7));

} else {
var statearr_59491_59522 = state_59479__$1;
(statearr_59491_59522[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (3))){
var inst_59477 = (state_59479[(2)]);
var state_59479__$1 = state_59479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59479__$1,inst_59477);
} else {
if((state_val_59480 === (12))){
var inst_59475 = (state_59479[(2)]);
var state_59479__$1 = state_59479;
var statearr_59492_59523 = state_59479__$1;
(statearr_59492_59523[(2)] = inst_59475);

(statearr_59492_59523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (2))){
var inst_59441 = (state_59479[(7)]);
var inst_59435 = (state_59479[(8)]);
var inst_59434 = (state_59479[(9)]);
var inst_59437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59438 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_59439 = (new cljs.core.PersistentVector(null,2,(5),inst_59437,inst_59438,null));
var inst_59440 = (function (){var n = inst_59434;
var client_ids_satisfied = inst_59435;
return ((function (n,client_ids_satisfied,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__59493 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__59493,(0),null);
var udt = cljs.core.nth.call(null,vec__59493,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_59441__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_59439,inst_59440);
var inst_59442 = (function (){var n = inst_59434;
var client_ids_satisfied = inst_59435;
var _QMARK_pulled = inst_59441__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,inst_59440,inst_59441__$1,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__25046__auto__ = (x == null);
if(or__25046__auto__){
return or__25046__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_59441,inst_59435,inst_59434,inst_59437,inst_59438,inst_59439,inst_59440,inst_59441__$1,state_val_59480,c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_59443 = inst_59442.call(null,inst_59441__$1);
var state_59479__$1 = (function (){var statearr_59496 = state_59479;
(statearr_59496[(7)] = inst_59441__$1);

return statearr_59496;
})();
if(cljs.core.truth_(inst_59443)){
var statearr_59497_59524 = state_59479__$1;
(statearr_59497_59524[(1)] = (4));

} else {
var statearr_59498_59525 = state_59479__$1;
(statearr_59498_59525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (11))){
var state_59479__$1 = state_59479;
var statearr_59499_59526 = state_59479__$1;
(statearr_59499_59526[(2)] = null);

(statearr_59499_59526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (9))){
var inst_59458 = (state_59479[(10)]);
var inst_59435 = (state_59479[(8)]);
var inst_59434 = (state_59479[(9)]);
var inst_59456 = (state_59479[(2)]);
var inst_59457 = cljs.core.into.call(null,inst_59435,inst_59456);
var inst_59458__$1 = cljs.core.get.call(null,ms_backoffs,inst_59434);
var state_59479__$1 = (function (){var statearr_59500 = state_59479;
(statearr_59500[(12)] = inst_59457);

(statearr_59500[(10)] = inst_59458__$1);

return statearr_59500;
})();
if(cljs.core.truth_(inst_59458__$1)){
var statearr_59501_59527 = state_59479__$1;
(statearr_59501_59527[(1)] = (10));

} else {
var statearr_59502_59528 = state_59479__$1;
(statearr_59502_59528[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (5))){
var inst_59441 = (state_59479[(7)]);
var inst_59446 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_59441,null,null);
var state_59479__$1 = state_59479;
var statearr_59503_59529 = state_59479__$1;
(statearr_59503_59529[(2)] = inst_59446);

(statearr_59503_59529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (14))){
var state_59479__$1 = state_59479;
var statearr_59504_59530 = state_59479__$1;
(statearr_59504_59530[(2)] = null);

(statearr_59504_59530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (16))){
var inst_59457 = (state_59479[(12)]);
var inst_59434 = (state_59479[(9)]);
var inst_59467 = (state_59479[(2)]);
var inst_59468 = (inst_59434 + (1));
var inst_59434__$1 = inst_59468;
var inst_59435 = inst_59457;
var state_59479__$1 = (function (){var statearr_59505 = state_59479;
(statearr_59505[(13)] = inst_59467);

(statearr_59505[(8)] = inst_59435);

(statearr_59505[(9)] = inst_59434__$1);

return statearr_59505;
})();
var statearr_59506_59531 = state_59479__$1;
(statearr_59506_59531[(2)] = null);

(statearr_59506_59531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (10))){
var inst_59457 = (state_59479[(12)]);
var inst_59460 = cljs.core.complement.call(null,inst_59457);
var inst_59461 = taoensso.encore.rsome.call(null,inst_59460,client_ids_unsatisfied);
var state_59479__$1 = state_59479;
if(cljs.core.truth_(inst_59461)){
var statearr_59507_59532 = state_59479__$1;
(statearr_59507_59532[(1)] = (13));

} else {
var statearr_59508_59533 = state_59479__$1;
(statearr_59508_59533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59480 === (8))){
var state_59479__$1 = state_59479;
var statearr_59509_59534 = state_59479__$1;
(statearr_59509_59534[(2)] = null);

(statearr_59509_59534[(1)] = (9));


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
});})(c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__33287__auto__,c__33352__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____0 = (function (){
var statearr_59513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59513[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__);

(statearr_59513[(1)] = (1));

return statearr_59513;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____1 = (function (state_59479){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59514){if((e59514 instanceof Object)){
var ex__33291__auto__ = e59514;
var statearr_59515_59535 = state_59479;
(statearr_59515_59535[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59536 = state_59479;
state_59479 = G__59536;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__ = function(state_59479){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____1.call(this,state_59479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__33354__auto__ = (function (){var statearr_59516 = f__33353__auto__.call(null);
(statearr_59516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_59516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__33352__auto__;
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
var args59537 = [];
var len__26121__auto___59540 = arguments.length;
var i__26122__auto___59541 = (0);
while(true){
if((i__26122__auto___59541 < len__26121__auto___59540)){
args59537.push((arguments[i__26122__auto___59541]));

var G__59542 = (i__26122__auto___59541 + (1));
i__26122__auto___59541 = G__59542;
continue;
} else {
}
break;
}

var G__59539 = args59537.length;
switch (G__59539) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59537.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-933389578);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1931758350);

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
var vec__59547 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__59547,(0),null);
var new_state = cljs.core.nth.call(null,vec__59547,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_59554 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59552){if((e59552 instanceof Error)){
var e = e59552;
return e;
} else {
throw e59552;

}
}})();
if((e_59554 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_59554,null);
}

var e_59555 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59553){if((e59553 instanceof Error)){
var e = e59553;
return e;
} else {
throw e59553;

}
}})();
if((e_59555 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_59555,null);
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
var e_59564 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59560){if((e59560 instanceof Error)){
var e = e59560;
return e;
} else {
throw e59560;

}
}})();
if((e_59564 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_59564,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__59561 = ev;
var ev_id = cljs.core.nth.call(null,vec__59561,(0),null);
var _ = cljs.core.nth.call(null,vec__59561,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__59561,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__59561,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1476238124);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__59575 = cljs.core.seq.call(null,buffered_evs);
var chunk__59576 = null;
var count__59577 = (0);
var i__59578 = (0);
while(true){
if((i__59578 < count__59577)){
var ev = cljs.core._nth.call(null,chunk__59576,i__59578);
taoensso.sente.assert_event.call(null,ev);

var vec__59579_59585 = ev;
var id_59586 = cljs.core.nth.call(null,vec__59579_59585,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_59586),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__59587 = seq__59575;
var G__59588 = chunk__59576;
var G__59589 = count__59577;
var G__59590 = (i__59578 + (1));
seq__59575 = G__59587;
chunk__59576 = G__59588;
count__59577 = G__59589;
i__59578 = G__59590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59575);
if(temp__4657__auto__){
var seq__59575__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59575__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__59575__$1);
var G__59591 = cljs.core.chunk_rest.call(null,seq__59575__$1);
var G__59592 = c__25857__auto__;
var G__59593 = cljs.core.count.call(null,c__25857__auto__);
var G__59594 = (0);
seq__59575 = G__59591;
chunk__59576 = G__59592;
count__59577 = G__59593;
i__59578 = G__59594;
continue;
} else {
var ev = cljs.core.first.call(null,seq__59575__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__59582_59595 = ev;
var id_59596 = cljs.core.nth.call(null,vec__59582_59595,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_59596),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__59597 = cljs.core.next.call(null,seq__59575__$1);
var G__59598 = null;
var G__59599 = (0);
var G__59600 = (0);
seq__59575 = G__59597;
chunk__59576 = G__59598;
count__59577 = G__59599;
i__59578 = G__59600;
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
var vec__59610 = x;
var x1 = cljs.core.nth.call(null,vec__59610,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__25034__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_59634 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59624){if((e59624 instanceof Error)){
var e = e59624;
return e;
} else {
throw e59624;

}
}})();
if((e_59634 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_59634,null);
}

var e_59635 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59625){if((e59625 instanceof Error)){
var e = e59625;
return e;
} else {
throw e59625;

}
}})();
if((e_59635 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_59635,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-726151334);

var vec__59626 = clj;
var _ = cljs.core.nth.call(null,vec__59626,(0),null);
var vec__59629 = cljs.core.nth.call(null,vec__59626,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__59629,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__59629,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__59629,(2),null);
var map__59632 = chsk;
var map__59632__$1 = ((((!((map__59632 == null)))?((((map__59632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59632):map__59632);
var chs = cljs.core.get.call(null,map__59632__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__59632__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59626,_,vec__59629,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__59632,map__59632__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__59626,_,vec__59629,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__59632,map__59632__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-542049586);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__59626,_,vec__59629,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__59632,map__59632__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__59613_SHARP_){
return cljs.core.merge.call(null,p1__59613_SHARP_,new_state);
});})(vec__59626,_,vec__59629,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__59632,map__59632__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e59636){var e = e59636;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k59643,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__59645 = (((k59643 instanceof cljs.core.Keyword))?k59643.fqn:null);
switch (G__59645) {
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
return cljs.core.get.call(null,self__.__extmap,k59643,else__25671__auto__);

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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59642){
var self__ = this;
var G__59642__$1 = this;
return (new cljs.core.RecordIter((0),G__59642__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__59642){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__59646 = cljs.core.keyword_identical_QMARK_;
var expr__59647 = k__25676__auto__;
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__59647))){
return (new taoensso.sente.ChWebSocket(G__59642,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__59642,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__59642,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__59642,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__59642,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__59642,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__59642,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__59642,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__59642,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__59642,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__59642,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__59642,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__59642,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59646.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__59647))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__59642,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__59642),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__59642){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__59642,self__.__extmap,self__.__hash));
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
return (function (p1__59637_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__59637_SHARP_,reason);
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
var map__59649 = opts;
var map__59649__$1 = ((((!((map__59649 == null)))?((((map__59649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59649):map__59649);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__59649__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__59649__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__59649__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___59740 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___59740)){
var cb_uuid_59741 = temp__4657__auto___59740;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_59741], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59651){if((e59651 instanceof Error)){
var e = e59651;
return e;
} else {
throw e59651;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___59742__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___59742__$1)){
var timeout_ms_59743 = temp__4657__auto___59742__$1;
var c__33352__auto___59744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_59662){
var state_val_59663 = (state_59662[(1)]);
if((state_val_59663 === (1))){
var inst_59652 = cljs.core.async.timeout.call(null,timeout_ms_59743);
var state_59662__$1 = state_59662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59662__$1,(2),inst_59652);
} else {
if((state_val_59663 === (2))){
var inst_59655 = (state_59662[(7)]);
var inst_59654 = (state_59662[(2)]);
var inst_59655__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_59662__$1 = (function (){var statearr_59664 = state_59662;
(statearr_59664[(8)] = inst_59654);

(statearr_59664[(7)] = inst_59655__$1);

return statearr_59664;
})();
if(cljs.core.truth_(inst_59655__$1)){
var statearr_59665_59745 = state_59662__$1;
(statearr_59665_59745[(1)] = (3));

} else {
var statearr_59666_59746 = state_59662__$1;
(statearr_59666_59746[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59663 === (3))){
var inst_59655 = (state_59662[(7)]);
var inst_59657 = inst_59655.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_59662__$1 = state_59662;
var statearr_59667_59747 = state_59662__$1;
(statearr_59667_59747[(2)] = inst_59657);

(statearr_59667_59747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59663 === (4))){
var state_59662__$1 = state_59662;
var statearr_59668_59748 = state_59662__$1;
(statearr_59668_59748[(2)] = null);

(statearr_59668_59748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59663 === (5))){
var inst_59660 = (state_59662[(2)]);
var state_59662__$1 = state_59662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59662__$1,inst_59660);
} else {
return null;
}
}
}
}
}
});})(c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__33287__auto__,c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_59672 = [null,null,null,null,null,null,null,null,null];
(statearr_59672[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_59672[(1)] = (1));

return statearr_59672;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_59662){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59673){if((e59673 instanceof Object)){
var ex__33291__auto__ = e59673;
var statearr_59674_59749 = state_59662;
(statearr_59674_59749[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59750 = state_59662;
state_59662 = G__59750;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_59662){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_59662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__33354__auto__ = (function (){var statearr_59675 = f__33353__auto__.call(null);
(statearr_59675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___59744);

return statearr_59675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___59744,timeout_ms_59743,temp__4657__auto___59742__$1,cb_uuid_59741,temp__4657__auto___59740,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e59676){var e = e59676;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__59649,map__59649__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1063037488);

var temp__4657__auto___59751 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___59751)){
var cb_uuid_59752 = temp__4657__auto___59751;
var cb_fn_STAR__59753 = (function (){var or__25046__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_59752);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59677){if((e59677 instanceof Error)){
var e__$1 = e59677;
return e__$1;
} else {
throw e59677;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__59753.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1379432308);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__59638_SHARP_){
return cljs.core.assoc.call(null,p1__59638_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e59684){var e = e59684;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-931371377);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__59685 = _QMARK_socket;
(G__59685["onerror"] = ((function (G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e59686){var _ = e59686;
return ws_ev;
}})()], null);
});})(G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1551333719);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__59639_SHARP_){
return cljs.core.assoc.call(null,p1__59639_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__59685["onmessage"] = ((function (G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__59687 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__59687,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__59687,(1),null);
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
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25046__auto____$1,or__25046__auto__,ppstr,vec__59687,clj,_QMARK_cb_uuid,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25046__auto____$1,or__25046__auto__,ppstr,vec__59687,clj,_QMARK_cb_uuid,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-949702172);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__59685["onclose"] = ((function (G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,666303616);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__59640_SHARP_){
return cljs.core.assoc.call(null,p1__59640_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__59641_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__59641_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__59685,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__59685;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___59754__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___59754__$1)){
var ms_59755 = temp__4657__auto___59754__$1;
var c__33352__auto___59756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_59717){
var state_val_59718 = (state_59717[(1)]);
if((state_val_59718 === (7))){
var inst_59713 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59719_59757 = state_59717__$1;
(statearr_59719_59757[(2)] = inst_59713);

(statearr_59719_59757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (1))){
var state_59717__$1 = state_59717;
var statearr_59720_59758 = state_59717__$1;
(statearr_59720_59758[(2)] = null);

(statearr_59720_59758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (4))){
var inst_59694 = (state_59717[(2)]);
var inst_59695 = have_handle_QMARK_.call(null);
var state_59717__$1 = (function (){var statearr_59721 = state_59717;
(statearr_59721[(7)] = inst_59694);

return statearr_59721;
})();
if(cljs.core.truth_(inst_59695)){
var statearr_59722_59759 = state_59717__$1;
(statearr_59722_59759[(1)] = (5));

} else {
var statearr_59723_59760 = state_59717__$1;
(statearr_59723_59760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (6))){
var state_59717__$1 = state_59717;
var statearr_59724_59761 = state_59717__$1;
(statearr_59724_59761[(2)] = null);

(statearr_59724_59761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (3))){
var inst_59715 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59717__$1,inst_59715);
} else {
if((state_val_59718 === (2))){
var inst_59691 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_59692 = cljs.core.async.timeout.call(null,ms_59755);
var state_59717__$1 = (function (){var statearr_59725 = state_59717;
(statearr_59725[(8)] = inst_59691);

return statearr_59725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59717__$1,(4),inst_59692);
} else {
if((state_val_59718 === (9))){
var state_59717__$1 = state_59717;
var statearr_59726_59762 = state_59717__$1;
(statearr_59726_59762[(2)] = null);

(statearr_59726_59762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (5))){
var inst_59691 = (state_59717[(8)]);
var inst_59697 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_59698 = cljs.core._EQ_.call(null,inst_59691,inst_59697);
var state_59717__$1 = state_59717;
if(inst_59698){
var statearr_59727_59763 = state_59717__$1;
(statearr_59727_59763[(1)] = (8));

} else {
var statearr_59728_59764 = state_59717__$1;
(statearr_59728_59764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (10))){
var inst_59709 = (state_59717[(2)]);
var state_59717__$1 = (function (){var statearr_59729 = state_59717;
(statearr_59729[(9)] = inst_59709);

return statearr_59729;
})();
var statearr_59730_59765 = state_59717__$1;
(statearr_59730_59765[(2)] = null);

(statearr_59730_59765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (8))){
var inst_59700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59701 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_59702 = (new cljs.core.PersistentVector(null,1,(5),inst_59700,inst_59701,null));
var inst_59703 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_59704 = [true];
var inst_59705 = cljs.core.PersistentHashMap.fromArrays(inst_59703,inst_59704);
var inst_59706 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_59702,inst_59705);
var state_59717__$1 = state_59717;
var statearr_59731_59766 = state_59717__$1;
(statearr_59731_59766[(2)] = inst_59706);

(statearr_59731_59766[(1)] = (10));


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
});})(c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__33287__auto__,c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__33288__auto__ = null;
var taoensso$sente$state_machine__33288__auto____0 = (function (){
var statearr_59735 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59735[(0)] = taoensso$sente$state_machine__33288__auto__);

(statearr_59735[(1)] = (1));

return statearr_59735;
});
var taoensso$sente$state_machine__33288__auto____1 = (function (state_59717){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e59736){if((e59736 instanceof Object)){
var ex__33291__auto__ = e59736;
var statearr_59737_59767 = state_59717;
(statearr_59737_59767[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59768 = state_59717;
state_59717 = G__59768;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$state_machine__33288__auto__ = function(state_59717){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33288__auto____1.call(this,state_59717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33288__auto____0;
taoensso$sente$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33288__auto____1;
return taoensso$sente$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__33354__auto__ = (function (){var statearr_59738 = f__33353__auto__.call(null);
(statearr_59738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___59756);

return statearr_59738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___59756,ms_59755,temp__4657__auto___59754__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__59644){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__59644),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__59644),null,cljs.core.dissoc.call(null,G__59644,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k59776,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__59778 = (((k59776 instanceof cljs.core.Keyword))?k59776.fqn:null);
switch (G__59778) {
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
return cljs.core.get.call(null,self__.__extmap,k59776,else__25671__auto__);

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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59775){
var self__ = this;
var G__59775__$1 = this;
return (new cljs.core.RecordIter((0),G__59775__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__59775){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__59779 = cljs.core.keyword_identical_QMARK_;
var expr__59780 = k__25676__auto__;
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(G__59775,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__59775,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__59775,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__59775,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__59775,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__59775,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__59775,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__59775,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__59775,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__59775,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59779.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__59780))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__59775,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__59775),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__59775){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__59775,self__.__extmap,self__.__hash));
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
return (function (p1__59769_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__59769_SHARP_,reason);
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
var map__59782 = opts;
var map__59782__$1 = ((((!((map__59782 == null)))?((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59782):map__59782);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__59782__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__59782__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__59782__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
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
})()], null)),((function (csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__59784){
var map__59790 = p__59784;
var map__59790__$1 = ((((!((map__59790 == null)))?((((map__59790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59790):map__59790);
var _QMARK_error = cljs.core.get.call(null,map__59790__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__59790__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__59770_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__59770_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__59792 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__59792,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__59792,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__59792,resp_clj,___$1,map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__59792,resp_clj,___$1,map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1312846850);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__59792,resp_clj,___$1,map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__59771_SHARP_){
return cljs.core.assoc.call(null,p1__59771_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__59792,resp_clj,___$1,map__59790,map__59790__$1,_QMARK_error,_QMARK_content,csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__59782,map__59782__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1779358445);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-645279670);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__59772_SHARP_){
return cljs.core.assoc.call(null,p1__59772_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__59806){
var map__59812 = p__59806;
var map__59812__$1 = ((((!((map__59812 == null)))?((((map__59812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59812):map__59812);
var _QMARK_error = cljs.core.get.call(null,map__59812__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__59812__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__59812,map__59812__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__59773_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__59773_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__59812,map__59812__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__59814 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__59814,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__59814,clj,handshake_QMARK_,map__59812,map__59812__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__59774_SHARP_){
return cljs.core.assoc.call(null,p1__59774_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__59814,clj,handshake_QMARK_,map__59812,map__59812__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__59777){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__59777),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__59777),null,cljs.core.dissoc.call(null,G__59777,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k59819,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__59821 = (((k59819 instanceof cljs.core.Keyword))?k59819.fqn:null);
switch (G__59821) {
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
return cljs.core.get.call(null,self__.__extmap,k59819,else__25671__auto__);

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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59818){
var self__ = this;
var G__59818__$1 = this;
return (new cljs.core.RecordIter((0),G__59818__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__59818){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__59822 = cljs.core.keyword_identical_QMARK_;
var expr__59823 = k__25676__auto__;
if(cljs.core.truth_(pred__59822.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__59823))){
return (new taoensso.sente.ChAutoSocket(G__59818,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59822.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__59823))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__59818,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59822.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__59823))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__59818,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59822.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__59823))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__59818,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__59818),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__59818){
var self__ = this;
var this__25667__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__59818,self__.__extmap,self__.__hash));
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
var map__59825 = opts;
var map__59825__$1 = ((((!((map__59825 == null)))?((((map__59825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59825):map__59825);
var _QMARK_cb = cljs.core.get.call(null,map__59825__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___59828 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___59828,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___59828,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___59828,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___59828,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-629635578);

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
});})(downgraded_QMARK___59828,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__59820){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__59820),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__59820),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__59820),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__59820),null,cljs.core.dissoc.call(null,G__59820,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__59833 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__59833) {
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
}catch (e59834){if((e59834 instanceof Error)){
var e = e59834;
return e;
} else {
throw e59834;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__59835 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59835) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__59836 = protocol__$2;
switch (G__59836) {
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
var len__26121__auto___59857 = arguments.length;
var i__26122__auto___59858 = (0);
while(true){
if((i__26122__auto___59858 < len__26121__auto___59857)){
args__26128__auto__.push((arguments[i__26122__auto___59858]));

var G__59859 = (i__26122__auto___59858 + (1));
i__26122__auto___59858 = G__59859;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__59842){
var vec__59843 = p__59842;
var map__59846 = cljs.core.nth.call(null,vec__59843,(0),null);
var map__59846__$1 = ((((!((map__59846 == null)))?((((map__59846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59846):map__59846);
var opts = map__59846__$1;
var ajax_opts = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25046__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__59843,(1),null);
var e_59860 = (function (){try{if(((function (vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59848){if((e59848 instanceof Error)){
var e = e59848;
return e;
} else {
throw e59848;

}
}})();
if((e_59860 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_59860,null);
}

var e_59861 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e59849){if((e59849 instanceof Error)){
var e = e59849;
return e;
} else {
throw e59849;

}
}})();
if((e_59861 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_59861,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1327729158);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1253659335);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__59850 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
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
var ws_url = cljs.core.nth.call(null,vec__59850,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__59850,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__59850,ws_url,ajax_url,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__59850,ws_url,ajax_url,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__59853 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59853) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__59850,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__59854 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__59854,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__59854,(1),null);
var ev__$1 = vec__59854;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__59850,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__59850,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__59850,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__59843,map__59846,map__59846__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,129008179);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq59840){
var G__59841 = cljs.core.first.call(null,seq59840);
var seq59840__$1 = cljs.core.next.call(null,seq59840);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59841,seq59840__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__59942 = opts;
var map__59942__$1 = ((((!((map__59942 == null)))?((((map__59942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59942):map__59942);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__59942__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__59942__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__59942__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__33352__auto___60021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_59988){
var state_val_59989 = (state_59988[(1)]);
if((state_val_59989 === (7))){
var inst_59984 = (state_59988[(2)]);
var state_59988__$1 = state_59988;
var statearr_59990_60022 = state_59988__$1;
(statearr_59990_60022[(2)] = inst_59984);

(statearr_59990_60022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (1))){
var state_59988__$1 = state_59988;
var statearr_59991_60023 = state_59988__$1;
(statearr_59991_60023[(2)] = null);

(statearr_59991_60023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (4))){
var inst_59955 = (state_59988[(7)]);
var inst_59954 = (state_59988[(8)]);
var inst_59952 = (state_59988[(9)]);
var inst_59952__$1 = (state_59988[(2)]);
var inst_59953 = cljs.core.nth.call(null,inst_59952__$1,(0),null);
var inst_59954__$1 = cljs.core.nth.call(null,inst_59952__$1,(1),null);
var inst_59955__$1 = cljs.core._EQ_.call(null,inst_59954__$1,ch_ctrl);
var state_59988__$1 = (function (){var statearr_59992 = state_59988;
(statearr_59992[(7)] = inst_59955__$1);

(statearr_59992[(8)] = inst_59954__$1);

(statearr_59992[(10)] = inst_59953);

(statearr_59992[(9)] = inst_59952__$1);

return statearr_59992;
})();
if(inst_59955__$1){
var statearr_59993_60024 = state_59988__$1;
(statearr_59993_60024[(1)] = (5));

} else {
var statearr_59994_60025 = state_59988__$1;
(statearr_59994_60025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (15))){
var inst_59953 = (state_59988[(10)]);
var state_59988__$1 = state_59988;
var statearr_59995_60026 = state_59988__$1;
(statearr_59995_60026[(2)] = inst_59953);

(statearr_59995_60026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (13))){
var inst_59970 = (state_59988[(2)]);
var state_59988__$1 = state_59988;
var statearr_59996_60027 = state_59988__$1;
(statearr_59996_60027[(2)] = inst_59970);

(statearr_59996_60027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (6))){
var inst_59953 = (state_59988[(10)]);
var inst_59960 = (inst_59953 == null);
var inst_59961 = cljs.core.not.call(null,inst_59960);
var state_59988__$1 = state_59988;
if(inst_59961){
var statearr_59997_60028 = state_59988__$1;
(statearr_59997_60028[(1)] = (8));

} else {
var statearr_59998_60029 = state_59988__$1;
(statearr_59998_60029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (3))){
var inst_59986 = (state_59988[(2)]);
var state_59988__$1 = state_59988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59988__$1,inst_59986);
} else {
if((state_val_59989 === (12))){
var state_59988__$1 = state_59988;
var statearr_59999_60030 = state_59988__$1;
(statearr_59999_60030[(2)] = false);

(statearr_59999_60030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (2))){
var inst_59948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59949 = [ch_recv,ch_ctrl];
var inst_59950 = (new cljs.core.PersistentVector(null,2,(5),inst_59948,inst_59949,null));
var state_59988__$1 = state_59988;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59988__$1,(4),inst_59950);
} else {
if((state_val_59989 === (11))){
var state_59988__$1 = state_59988;
var statearr_60000_60031 = state_59988__$1;
(statearr_60000_60031[(2)] = true);

(statearr_60000_60031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (9))){
var state_59988__$1 = state_59988;
var statearr_60001_60032 = state_59988__$1;
(statearr_60001_60032[(2)] = false);

(statearr_60001_60032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (5))){
var state_59988__$1 = state_59988;
var statearr_60002_60033 = state_59988__$1;
(statearr_60002_60033[(2)] = null);

(statearr_60002_60033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (14))){
var inst_59953 = (state_59988[(10)]);
var inst_59975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59953);
var state_59988__$1 = state_59988;
var statearr_60003_60034 = state_59988__$1;
(statearr_60003_60034[(2)] = inst_59975);

(statearr_60003_60034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (16))){
var inst_59955 = (state_59988[(7)]);
var inst_59954 = (state_59988[(8)]);
var inst_59953 = (state_59988[(10)]);
var inst_59952 = (state_59988[(9)]);
var inst_59978 = (state_59988[(2)]);
var inst_59979 = cljs.core.get.call(null,inst_59978,new cljs.core.Keyword(null,"event","event",301435442));
var inst_59980 = (function (){var vec__59945 = inst_59952;
var v = inst_59953;
var p = inst_59954;
var stop_QMARK_ = inst_59955;
var map__59958 = inst_59978;
var event_msg = inst_59978;
var event = inst_59979;
return ((function (vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1543787270);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60006){if((e60006 instanceof Error)){
var e = e60006;
return e;
} else {
throw e60006;

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
}catch (e60007){if((e60007 instanceof Error)){
var e = e60007;
return e;
} else {
throw e60007;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e60004){if((e60004 instanceof Error)){
var e1 = e60004;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-193087115);
}
}catch (e60005){if((e60005 instanceof Error)){
var e2 = e60005;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\Junior\\AppData\\Local\\Temp\\form-init3831199991581595130.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1199372411);
} else {
throw e60005;

}
}} else {
throw e60004;

}
}});
;})(vec__59945,v,p,stop_QMARK_,map__59958,event_msg,event,inst_59955,inst_59954,inst_59953,inst_59952,inst_59978,inst_59979,state_val_59989,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_59981 = execute1.call(null,inst_59980);
var state_59988__$1 = (function (){var statearr_60008 = state_59988;
(statearr_60008[(11)] = inst_59981);

return statearr_60008;
})();
var statearr_60009_60035 = state_59988__$1;
(statearr_60009_60035[(2)] = null);

(statearr_60009_60035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (10))){
var inst_59973 = (state_59988[(2)]);
var state_59988__$1 = state_59988;
if(cljs.core.truth_(inst_59973)){
var statearr_60010_60036 = state_59988__$1;
(statearr_60010_60036[(1)] = (14));

} else {
var statearr_60011_60037 = state_59988__$1;
(statearr_60011_60037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59989 === (8))){
var inst_59953 = (state_59988[(10)]);
var inst_59963 = inst_59953.cljs$lang$protocol_mask$partition0$;
var inst_59964 = (inst_59963 & (64));
var inst_59965 = inst_59953.cljs$core$ISeq$;
var inst_59966 = (inst_59964) || (inst_59965);
var state_59988__$1 = state_59988;
if(cljs.core.truth_(inst_59966)){
var statearr_60012_60038 = state_59988__$1;
(statearr_60012_60038[(1)] = (11));

} else {
var statearr_60013_60039 = state_59988__$1;
(statearr_60013_60039[(1)] = (12));

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
});})(c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__33287__auto__,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____0 = (function (){
var statearr_60017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60017[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__);

(statearr_60017[(1)] = (1));

return statearr_60017;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____1 = (function (state_59988){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_59988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e60018){if((e60018 instanceof Object)){
var ex__33291__auto__ = e60018;
var statearr_60019_60040 = state_59988;
(statearr_60019_60040[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60041 = state_59988;
state_59988 = G__60041;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__ = function(state_59988){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____1.call(this,state_59988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__33354__auto__ = (function (){var statearr_60020 = f__33353__auto__.call(null);
(statearr_60020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___60021);

return statearr_60020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___60021,map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__59942,map__59942__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__26121__auto___60051 = arguments.length;
var i__26122__auto___60052 = (0);
while(true){
if((i__26122__auto___60052 < len__26121__auto___60051)){
args__26128__auto__.push((arguments[i__26122__auto___60052]));

var G__60053 = (i__26122__auto___60052 + (1));
i__26122__auto___60052 = G__60053;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__60045){
var vec__60046 = p__60045;
var map__60049 = cljs.core.nth.call(null,vec__60046,(0),null);
var map__60049__$1 = ((((!((map__60049 == null)))?((((map__60049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60049):map__60049);
var opts = map__60049__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__60049__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__60049__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__60049__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq60042){
var G__60043 = cljs.core.first.call(null,seq60042);
var seq60042__$1 = cljs.core.next.call(null,seq60042);
var G__60044 = cljs.core.first.call(null,seq60042__$1);
var seq60042__$2 = cljs.core.next.call(null,seq60042__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60043,G__60044,seq60042__$2);
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
var len__26121__auto___60063 = arguments.length;
var i__26122__auto___60064 = (0);
while(true){
if((i__26122__auto___60064 < len__26121__auto___60063)){
args__26128__auto__.push((arguments[i__26122__auto___60064]));

var G__60065 = (i__26122__auto___60064 + (1));
i__26122__auto___60064 = G__60065;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__60057){
var vec__60058 = p__60057;
var map__60061 = cljs.core.nth.call(null,vec__60058,(0),null);
var map__60061__$1 = ((((!((map__60061 == null)))?((((map__60061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60061):map__60061);
var opts = map__60061__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__60061__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__60061__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq60054){
var G__60055 = cljs.core.first.call(null,seq60054);
var seq60054__$1 = cljs.core.next.call(null,seq60054);
var G__60056 = cljs.core.first.call(null,seq60054__$1);
var seq60054__$2 = cljs.core.next.call(null,seq60054__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60055,G__60056,seq60054__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__60066,websocket_QMARK_){
var map__60069 = p__60066;
var map__60069__$1 = ((((!((map__60069 == null)))?((((map__60069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60069):map__60069);
var location = map__60069__$1;
var protocol = cljs.core.get.call(null,map__60069__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__60069__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__60069__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25046__auto__ = path;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1484333395966
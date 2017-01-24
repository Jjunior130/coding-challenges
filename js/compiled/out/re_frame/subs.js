// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__13783_13793 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__13784_13794 = null;
var count__13785_13795 = (0);
var i__13786_13796 = (0);
while(true){
if((i__13786_13796 < count__13785_13795)){
var vec__13787_13797 = cljs.core._nth.call(null,chunk__13784_13794,i__13786_13796);
var k_13798 = cljs.core.nth.call(null,vec__13787_13797,(0),null);
var rxn_13799 = cljs.core.nth.call(null,vec__13787_13797,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_13799);

var G__13800 = seq__13783_13793;
var G__13801 = chunk__13784_13794;
var G__13802 = count__13785_13795;
var G__13803 = (i__13786_13796 + (1));
seq__13783_13793 = G__13800;
chunk__13784_13794 = G__13801;
count__13785_13795 = G__13802;
i__13786_13796 = G__13803;
continue;
} else {
var temp__4657__auto___13804 = cljs.core.seq.call(null,seq__13783_13793);
if(temp__4657__auto___13804){
var seq__13783_13805__$1 = temp__4657__auto___13804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13783_13805__$1)){
var c__7220__auto___13806 = cljs.core.chunk_first.call(null,seq__13783_13805__$1);
var G__13807 = cljs.core.chunk_rest.call(null,seq__13783_13805__$1);
var G__13808 = c__7220__auto___13806;
var G__13809 = cljs.core.count.call(null,c__7220__auto___13806);
var G__13810 = (0);
seq__13783_13793 = G__13807;
chunk__13784_13794 = G__13808;
count__13785_13795 = G__13809;
i__13786_13796 = G__13810;
continue;
} else {
var vec__13790_13811 = cljs.core.first.call(null,seq__13783_13805__$1);
var k_13812 = cljs.core.nth.call(null,vec__13790_13811,(0),null);
var rxn_13813 = cljs.core.nth.call(null,vec__13790_13811,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_13813);

var G__13814 = cljs.core.next.call(null,seq__13783_13805__$1);
var G__13815 = null;
var G__13816 = (0);
var G__13817 = (0);
seq__13783_13793 = G__13814;
chunk__13784_13794 = G__13815;
count__13785_13795 = G__13816;
i__13786_13796 = G__13817;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13831 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___13844 = re_frame.interop.now.call(null);
var duration__13448__auto___13845 = (end__13447__auto___13844 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__13832_13846 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13833_13847 = null;
var count__13834_13848 = (0);
var i__13835_13849 = (0);
while(true){
if((i__13835_13849 < count__13834_13848)){
var vec__13836_13850 = cljs.core._nth.call(null,chunk__13833_13847,i__13835_13849);
var k__13449__auto___13851 = cljs.core.nth.call(null,vec__13836_13850,(0),null);
var cb__13450__auto___13852 = cljs.core.nth.call(null,vec__13836_13850,(1),null);
try{cb__13450__auto___13852.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13845,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13839){if((e13839 instanceof java.lang.Exception)){
var e__13451__auto___13853 = e13839;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13851,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13853);
} else {
throw e13839;

}
}
var G__13854 = seq__13832_13846;
var G__13855 = chunk__13833_13847;
var G__13856 = count__13834_13848;
var G__13857 = (i__13835_13849 + (1));
seq__13832_13846 = G__13854;
chunk__13833_13847 = G__13855;
count__13834_13848 = G__13856;
i__13835_13849 = G__13857;
continue;
} else {
var temp__4657__auto___13858 = cljs.core.seq.call(null,seq__13832_13846);
if(temp__4657__auto___13858){
var seq__13832_13859__$1 = temp__4657__auto___13858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13832_13859__$1)){
var c__7220__auto___13860 = cljs.core.chunk_first.call(null,seq__13832_13859__$1);
var G__13861 = cljs.core.chunk_rest.call(null,seq__13832_13859__$1);
var G__13862 = c__7220__auto___13860;
var G__13863 = cljs.core.count.call(null,c__7220__auto___13860);
var G__13864 = (0);
seq__13832_13846 = G__13861;
chunk__13833_13847 = G__13862;
count__13834_13848 = G__13863;
i__13835_13849 = G__13864;
continue;
} else {
var vec__13840_13865 = cljs.core.first.call(null,seq__13832_13859__$1);
var k__13449__auto___13866 = cljs.core.nth.call(null,vec__13840_13865,(0),null);
var cb__13450__auto___13867 = cljs.core.nth.call(null,vec__13840_13865,(1),null);
try{cb__13450__auto___13867.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13845,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13843){if((e13843 instanceof java.lang.Exception)){
var e__13451__auto___13868 = e13843;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13866,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13868);
} else {
throw e13843;

}
}
var G__13869 = cljs.core.next.call(null,seq__13832_13859__$1);
var G__13870 = null;
var G__13871 = (0);
var G__13872 = (0);
seq__13832_13846 = G__13869;
chunk__13833_13847 = G__13870;
count__13834_13848 = G__13871;
i__13835_13849 = G__13872;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13831;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13873 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13873;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args13874 = [];
var len__7484__auto___13877 = arguments.length;
var i__7485__auto___13878 = (0);
while(true){
if((i__7485__auto___13878 < len__7484__auto___13877)){
args13874.push((arguments[i__7485__auto___13878]));

var G__13879 = (i__7485__auto___13878 + (1));
i__7485__auto___13878 = G__13879;
continue;
} else {
}
break;
}

var G__13876 = args13874.length;
switch (G__13876) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13874.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args13881 = [];
var len__7484__auto___13910 = arguments.length;
var i__7485__auto___13911 = (0);
while(true){
if((i__7485__auto___13911 < len__7484__auto___13910)){
args13881.push((arguments[i__7485__auto___13911]));

var G__13912 = (i__7485__auto___13911 + (1));
i__7485__auto___13911 = G__13912;
continue;
} else {
}
break;
}

var G__13883 = args13881.length;
switch (G__13883) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13881.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13884 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13914 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13914;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13915 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13915;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13916 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13916;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___13917 = re_frame.interop.now.call(null);
var duration__13448__auto___13918 = (end__13447__auto___13917 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__13885_13919 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13886_13920 = null;
var count__13887_13921 = (0);
var i__13888_13922 = (0);
while(true){
if((i__13888_13922 < count__13887_13921)){
var vec__13889_13923 = cljs.core._nth.call(null,chunk__13886_13920,i__13888_13922);
var k__13449__auto___13924 = cljs.core.nth.call(null,vec__13889_13923,(0),null);
var cb__13450__auto___13925 = cljs.core.nth.call(null,vec__13889_13923,(1),null);
try{cb__13450__auto___13925.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13918,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13892){if((e13892 instanceof java.lang.Exception)){
var e__13451__auto___13926 = e13892;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13924,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13926);
} else {
throw e13892;

}
}
var G__13927 = seq__13885_13919;
var G__13928 = chunk__13886_13920;
var G__13929 = count__13887_13921;
var G__13930 = (i__13888_13922 + (1));
seq__13885_13919 = G__13927;
chunk__13886_13920 = G__13928;
count__13887_13921 = G__13929;
i__13888_13922 = G__13930;
continue;
} else {
var temp__4657__auto___13931 = cljs.core.seq.call(null,seq__13885_13919);
if(temp__4657__auto___13931){
var seq__13885_13932__$1 = temp__4657__auto___13931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13885_13932__$1)){
var c__7220__auto___13933 = cljs.core.chunk_first.call(null,seq__13885_13932__$1);
var G__13934 = cljs.core.chunk_rest.call(null,seq__13885_13932__$1);
var G__13935 = c__7220__auto___13933;
var G__13936 = cljs.core.count.call(null,c__7220__auto___13933);
var G__13937 = (0);
seq__13885_13919 = G__13934;
chunk__13886_13920 = G__13935;
count__13887_13921 = G__13936;
i__13888_13922 = G__13937;
continue;
} else {
var vec__13893_13938 = cljs.core.first.call(null,seq__13885_13932__$1);
var k__13449__auto___13939 = cljs.core.nth.call(null,vec__13893_13938,(0),null);
var cb__13450__auto___13940 = cljs.core.nth.call(null,vec__13893_13938,(1),null);
try{cb__13450__auto___13940.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13918,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13896){if((e13896 instanceof java.lang.Exception)){
var e__13451__auto___13941 = e13896;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13939,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13941);
} else {
throw e13896;

}
}
var G__13942 = cljs.core.next.call(null,seq__13885_13932__$1);
var G__13943 = null;
var G__13944 = (0);
var G__13945 = (0);
seq__13885_13919 = G__13942;
chunk__13886_13920 = G__13943;
count__13887_13921 = G__13944;
i__13888_13922 = G__13945;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13884;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13946 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13946;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13947 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13947;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13948 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13948;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13897 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13949 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13949;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13950 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13950;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___13951 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___13951)){
var not_reactive_13952 = temp__4657__auto___13951;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_13952);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13953 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13953;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_13897))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___13954 = re_frame.interop.now.call(null);
var duration__13448__auto___13955 = (end__13447__auto___13954 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__13898_13956 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13899_13957 = null;
var count__13900_13958 = (0);
var i__13901_13959 = (0);
while(true){
if((i__13901_13959 < count__13900_13958)){
var vec__13902_13960 = cljs.core._nth.call(null,chunk__13899_13957,i__13901_13959);
var k__13449__auto___13961 = cljs.core.nth.call(null,vec__13902_13960,(0),null);
var cb__13450__auto___13962 = cljs.core.nth.call(null,vec__13902_13960,(1),null);
try{cb__13450__auto___13962.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13955,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13905){if((e13905 instanceof java.lang.Exception)){
var e__13451__auto___13963 = e13905;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13961,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13963);
} else {
throw e13905;

}
}
var G__13964 = seq__13898_13956;
var G__13965 = chunk__13899_13957;
var G__13966 = count__13900_13958;
var G__13967 = (i__13901_13959 + (1));
seq__13898_13956 = G__13964;
chunk__13899_13957 = G__13965;
count__13900_13958 = G__13966;
i__13901_13959 = G__13967;
continue;
} else {
var temp__4657__auto___13968 = cljs.core.seq.call(null,seq__13898_13956);
if(temp__4657__auto___13968){
var seq__13898_13969__$1 = temp__4657__auto___13968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13898_13969__$1)){
var c__7220__auto___13970 = cljs.core.chunk_first.call(null,seq__13898_13969__$1);
var G__13971 = cljs.core.chunk_rest.call(null,seq__13898_13969__$1);
var G__13972 = c__7220__auto___13970;
var G__13973 = cljs.core.count.call(null,c__7220__auto___13970);
var G__13974 = (0);
seq__13898_13956 = G__13971;
chunk__13899_13957 = G__13972;
count__13900_13958 = G__13973;
i__13901_13959 = G__13974;
continue;
} else {
var vec__13906_13975 = cljs.core.first.call(null,seq__13898_13969__$1);
var k__13449__auto___13976 = cljs.core.nth.call(null,vec__13906_13975,(0),null);
var cb__13450__auto___13977 = cljs.core.nth.call(null,vec__13906_13975,(1),null);
try{cb__13450__auto___13977.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___13955,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e13909){if((e13909 instanceof java.lang.Exception)){
var e__13451__auto___13978 = e13909;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___13976,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___13978);
} else {
throw e13909;

}
}
var G__13979 = cljs.core.next.call(null,seq__13898_13969__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13898_13956 = G__13979;
chunk__13899_13957 = G__13980;
count__13900_13958 = G__13981;
i__13901_13959 = G__13982;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13897;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13983 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13983;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13984 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13984;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___13985 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___13985)){
var not_reactive_13986 = temp__4657__auto___13985;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_13986);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13987 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13987;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__13992){
var vec__13993 = p__13992;
var k = cljs.core.nth.call(null,vec__13993,(0),null);
var v = cljs.core.nth.call(null,vec__13993,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13464__auto___13996 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13464__auto___13996;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14052 = arguments.length;
var i__7485__auto___14053 = (0);
while(true){
if((i__7485__auto___14053 < len__7484__auto___14052)){
args__7491__auto__.push((arguments[i__7485__auto___14053]));

var G__14054 = (i__7485__auto___14053 + (1));
i__7485__auto___14053 = G__14054;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__13999 = cljs.core.count.call(null,input_args);
switch (G__13999) {
case (0):
return ((function (G__13999,computation_fn,input_args,err_header){
return (function() {
var G__14056 = null;
var G__14056__1 = (function (_){
return re_frame.db.app_db;
});
var G__14056__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__14056 = function(_,___$1){
switch(arguments.length){
case 1:
return G__14056__1.call(this,_);
case 2:
return G__14056__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14056.cljs$core$IFn$_invoke$arity$1 = G__14056__1;
G__14056.cljs$core$IFn$_invoke$arity$2 = G__14056__2;
return G__14056;
})()
;})(G__13999,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__13999,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__13999,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__13999,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__13999,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14026 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___14057 = re_frame.interop.now.call(null);
var duration__13448__auto___14058 = (end__13447__auto___14057 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14027_14059 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__14028_14060 = null;
var count__14029_14061 = (0);
var i__14030_14062 = (0);
while(true){
if((i__14030_14062 < count__14029_14061)){
var vec__14031_14063 = cljs.core._nth.call(null,chunk__14028_14060,i__14030_14062);
var k__13449__auto___14064 = cljs.core.nth.call(null,vec__14031_14063,(0),null);
var cb__13450__auto___14065 = cljs.core.nth.call(null,vec__14031_14063,(1),null);
try{cb__13450__auto___14065.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___14058,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14034){if((e14034 instanceof java.lang.Exception)){
var e__13451__auto___14066 = e14034;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___14064,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___14066);
} else {
throw e14034;

}
}
var G__14067 = seq__14027_14059;
var G__14068 = chunk__14028_14060;
var G__14069 = count__14029_14061;
var G__14070 = (i__14030_14062 + (1));
seq__14027_14059 = G__14067;
chunk__14028_14060 = G__14068;
count__14029_14061 = G__14069;
i__14030_14062 = G__14070;
continue;
} else {
var temp__4657__auto___14071 = cljs.core.seq.call(null,seq__14027_14059);
if(temp__4657__auto___14071){
var seq__14027_14072__$1 = temp__4657__auto___14071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14027_14072__$1)){
var c__7220__auto___14073 = cljs.core.chunk_first.call(null,seq__14027_14072__$1);
var G__14074 = cljs.core.chunk_rest.call(null,seq__14027_14072__$1);
var G__14075 = c__7220__auto___14073;
var G__14076 = cljs.core.count.call(null,c__7220__auto___14073);
var G__14077 = (0);
seq__14027_14059 = G__14074;
chunk__14028_14060 = G__14075;
count__14029_14061 = G__14076;
i__14030_14062 = G__14077;
continue;
} else {
var vec__14035_14078 = cljs.core.first.call(null,seq__14027_14072__$1);
var k__13449__auto___14079 = cljs.core.nth.call(null,vec__14035_14078,(0),null);
var cb__13450__auto___14080 = cljs.core.nth.call(null,vec__14035_14078,(1),null);
try{cb__13450__auto___14080.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___14058,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14038){if((e14038 instanceof java.lang.Exception)){
var e__13451__auto___14081 = e14038;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___14079,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___14081);
} else {
throw e14038;

}
}
var G__14082 = cljs.core.next.call(null,seq__14027_14072__$1);
var G__14083 = null;
var G__14084 = (0);
var G__14085 = (0);
seq__14027_14059 = G__14082;
chunk__14028_14060 = G__14083;
count__14029_14061 = G__14084;
i__14030_14062 = G__14085;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14026;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14039 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13447__auto___14086 = re_frame.interop.now.call(null);
var duration__13448__auto___14087 = (end__13447__auto___14086 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14040_14088 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__14041_14089 = null;
var count__14042_14090 = (0);
var i__14043_14091 = (0);
while(true){
if((i__14043_14091 < count__14042_14090)){
var vec__14044_14092 = cljs.core._nth.call(null,chunk__14041_14089,i__14043_14091);
var k__13449__auto___14093 = cljs.core.nth.call(null,vec__14044_14092,(0),null);
var cb__13450__auto___14094 = cljs.core.nth.call(null,vec__14044_14092,(1),null);
try{cb__13450__auto___14094.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___14087,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14047){if((e14047 instanceof java.lang.Exception)){
var e__13451__auto___14095 = e14047;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___14093,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___14095);
} else {
throw e14047;

}
}
var G__14096 = seq__14040_14088;
var G__14097 = chunk__14041_14089;
var G__14098 = count__14042_14090;
var G__14099 = (i__14043_14091 + (1));
seq__14040_14088 = G__14096;
chunk__14041_14089 = G__14097;
count__14042_14090 = G__14098;
i__14043_14091 = G__14099;
continue;
} else {
var temp__4657__auto___14100 = cljs.core.seq.call(null,seq__14040_14088);
if(temp__4657__auto___14100){
var seq__14040_14101__$1 = temp__4657__auto___14100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14040_14101__$1)){
var c__7220__auto___14102 = cljs.core.chunk_first.call(null,seq__14040_14101__$1);
var G__14103 = cljs.core.chunk_rest.call(null,seq__14040_14101__$1);
var G__14104 = c__7220__auto___14102;
var G__14105 = cljs.core.count.call(null,c__7220__auto___14102);
var G__14106 = (0);
seq__14040_14088 = G__14103;
chunk__14041_14089 = G__14104;
count__14042_14090 = G__14105;
i__14043_14091 = G__14106;
continue;
} else {
var vec__14048_14107 = cljs.core.first.call(null,seq__14040_14101__$1);
var k__13449__auto___14108 = cljs.core.nth.call(null,vec__14048_14107,(0),null);
var cb__13450__auto___14109 = cljs.core.nth.call(null,vec__14048_14107,(1),null);
try{cb__13450__auto___14109.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13448__auto___14087,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14051){if((e14051 instanceof java.lang.Exception)){
var e__13451__auto___14110 = e14051;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13449__auto___14108,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__13451__auto___14110);
} else {
throw e14051;

}
}
var G__14111 = cljs.core.next.call(null,seq__14040_14101__$1);
var G__14112 = null;
var G__14113 = (0);
var G__14114 = (0);
seq__14040_14088 = G__14111;
chunk__14041_14089 = G__14112;
count__14042_14090 = G__14113;
i__14043_14091 = G__14114;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14039;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq13997){
var G__13998 = cljs.core.first.call(null,seq13997);
var seq13997__$1 = cljs.core.next.call(null,seq13997);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__13998,seq13997__$1);
});


//# sourceMappingURL=subs.js.map?rel=1485242655813
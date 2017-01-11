// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('re_frame.registrar');
goog.require('re_frisk.data');
goog.require('re_frame.core');
goog.require('re_frisk.help');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first.call(null,value).call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.call(null,cntx,new cljs.core.Keyword(null,"event","event",301435442),value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

window.onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___35516 = arguments.length;
var i__7485__auto___35517 = (0);
while(true){
if((i__7485__auto___35517 < len__7484__auto___35516)){
args__7491__auto__.push((arguments[i__7485__auto___35517]));

var G__35518 = (i__7485__auto___35517 + (1));
i__7485__auto___35517 = G__35518;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
var prefs = cljs.core.first.call(null,params);
var event = reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs){
return (function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,a)],[(function (){var intc = cljs.core.map.call(null,((function (prefs){
return (function (p1__35508_SHARP_,p2__35509_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),(((cljs.core._EQ_.call(null,p2__35509_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.call(null,p2__35509_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))], true, false),(cljs.core.truth_(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(((cljs.core._EQ_.call(null,p2__35509_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),(((cljs.core._EQ_.call(null,p2__35509_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35508_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null));
});})(prefs))
,cljs.core.second.call(null,a),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.second.call(null,a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str(cljs.core.count.call(null,intc)),cljs.core.str(" interceptors")].join('')],[intc]);
})()]);
});})(prefs))
,cljs.core.filter.call(null,((function (prefs){
return (function (p1__35510_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.key.call(null,p1__35510_SHARP_),new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246));
});})(prefs))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs))
)))));
});})(prefs))
);
var sub = reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs,event){
return (function (p1__35511_SHARP_){
var k = cljs.core.first.call(null,p1__35511_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))]);
});})(prefs,event))
,cljs.core.filter.call(null,((function (prefs,event){
return (function (p1__35512_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__35512_SHARP_),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709));
});})(prefs,event))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs,event))
)))));
});})(prefs,event))
);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (prefs,event,sub){
return (function (db,_){
return db;
});})(prefs,event,sub))
);

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.PersistentArrayMap.fromArray([cljs.core.count.call(null,cljs.core.deref.call(null,event)),event], true, false),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.PersistentArrayMap.fromArray([cljs.core.count.call(null,cljs.core.deref.call(null,sub)),sub], true, false),new cljs.core.Keyword(null,"fx","fx",-1237829572),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__35513_SHARP_){
if(cljs.core.truth_(p1__35513_SHARP_.call(null,re_frisk.help.fx))){
return cljs.core.PersistentArrayMap.fromArray([p1__35513_SHARP_,p1__35513_SHARP_.call(null,re_frisk.help.fx)], true, false);
} else {
return p1__35513_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
),new cljs.core.Keyword(null,"cofx","cofx",2013202907),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__35514_SHARP_){
if(cljs.core.truth_(p1__35514_SHARP_.call(null,re_frisk.help.cofx))){
return cljs.core.PersistentArrayMap.fromArray([p1__35514_SHARP_,p1__35514_SHARP_.call(null,re_frisk.help.cofx)], true, false);
} else {
return p1__35514_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
)], null),new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),prefs);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(prefs),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),prefs);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq35515){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35515));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___35520 = arguments.length;
var i__7485__auto___35521 = (0);
while(true){
if((i__7485__auto___35521 < len__7484__auto___35520)){
args__7491__auto__.push((arguments[i__7485__auto___35521]));

var G__35522 = (i__7485__auto___35521 + (1));
i__7485__auto___35521 = G__35522;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq35519){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35519));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__35523_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__35523_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35523_SHARP_], null))]);
}),subs)));

var seq__35528 = cljs.core.seq.call(null,subs);
var chunk__35529 = null;
var count__35530 = (0);
var i__35531 = (0);
while(true){
if((i__35531 < count__35530)){
var s = cljs.core._nth.call(null,chunk__35529,i__35531);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__35532 = seq__35528;
var G__35533 = chunk__35529;
var G__35534 = count__35530;
var G__35535 = (i__35531 + (1));
seq__35528 = G__35532;
chunk__35529 = G__35533;
count__35530 = G__35534;
i__35531 = G__35535;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35528);
if(temp__4657__auto__){
var seq__35528__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35528__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35528__$1);
var G__35536 = cljs.core.chunk_rest.call(null,seq__35528__$1);
var G__35537 = c__7220__auto__;
var G__35538 = cljs.core.count.call(null,c__7220__auto__);
var G__35539 = (0);
seq__35528 = G__35536;
chunk__35529 = G__35537;
count__35530 = G__35538;
i__35531 = G__35539;
continue;
} else {
var s = cljs.core.first.call(null,seq__35528__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__35540 = cljs.core.next.call(null,seq__35528__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35528 = G__35540;
chunk__35529 = G__35541;
count__35530 = G__35542;
i__35531 = G__35543;
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
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (db,p__35544){
var vec__35545 = p__35544;
var _ = cljs.core.nth.call(null,vec__35545,(0),null);
var value = cljs.core.nth.call(null,vec__35545,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1484163018273
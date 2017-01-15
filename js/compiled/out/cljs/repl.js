// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36242){
var map__36267 = p__36242;
var map__36267__$1 = ((((!((map__36267 == null)))?((((map__36267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36267):map__36267);
var m = map__36267__$1;
var n = cljs.core.get.call(null,map__36267__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36269_36291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36270_36292 = null;
var count__36271_36293 = (0);
var i__36272_36294 = (0);
while(true){
if((i__36272_36294 < count__36271_36293)){
var f_36295 = cljs.core._nth.call(null,chunk__36270_36292,i__36272_36294);
cljs.core.println.call(null,"  ",f_36295);

var G__36296 = seq__36269_36291;
var G__36297 = chunk__36270_36292;
var G__36298 = count__36271_36293;
var G__36299 = (i__36272_36294 + (1));
seq__36269_36291 = G__36296;
chunk__36270_36292 = G__36297;
count__36271_36293 = G__36298;
i__36272_36294 = G__36299;
continue;
} else {
var temp__4657__auto___36300 = cljs.core.seq.call(null,seq__36269_36291);
if(temp__4657__auto___36300){
var seq__36269_36301__$1 = temp__4657__auto___36300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36269_36301__$1)){
var c__25857__auto___36302 = cljs.core.chunk_first.call(null,seq__36269_36301__$1);
var G__36303 = cljs.core.chunk_rest.call(null,seq__36269_36301__$1);
var G__36304 = c__25857__auto___36302;
var G__36305 = cljs.core.count.call(null,c__25857__auto___36302);
var G__36306 = (0);
seq__36269_36291 = G__36303;
chunk__36270_36292 = G__36304;
count__36271_36293 = G__36305;
i__36272_36294 = G__36306;
continue;
} else {
var f_36307 = cljs.core.first.call(null,seq__36269_36301__$1);
cljs.core.println.call(null,"  ",f_36307);

var G__36308 = cljs.core.next.call(null,seq__36269_36301__$1);
var G__36309 = null;
var G__36310 = (0);
var G__36311 = (0);
seq__36269_36291 = G__36308;
chunk__36270_36292 = G__36309;
count__36271_36293 = G__36310;
i__36272_36294 = G__36311;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36312 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36312);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36312)))?cljs.core.second.call(null,arglists_36312):arglists_36312));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36273_36313 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36274_36314 = null;
var count__36275_36315 = (0);
var i__36276_36316 = (0);
while(true){
if((i__36276_36316 < count__36275_36315)){
var vec__36277_36317 = cljs.core._nth.call(null,chunk__36274_36314,i__36276_36316);
var name_36318 = cljs.core.nth.call(null,vec__36277_36317,(0),null);
var map__36280_36319 = cljs.core.nth.call(null,vec__36277_36317,(1),null);
var map__36280_36320__$1 = ((((!((map__36280_36319 == null)))?((((map__36280_36319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36280_36319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36280_36319):map__36280_36319);
var doc_36321 = cljs.core.get.call(null,map__36280_36320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36322 = cljs.core.get.call(null,map__36280_36320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36318);

cljs.core.println.call(null," ",arglists_36322);

if(cljs.core.truth_(doc_36321)){
cljs.core.println.call(null," ",doc_36321);
} else {
}

var G__36323 = seq__36273_36313;
var G__36324 = chunk__36274_36314;
var G__36325 = count__36275_36315;
var G__36326 = (i__36276_36316 + (1));
seq__36273_36313 = G__36323;
chunk__36274_36314 = G__36324;
count__36275_36315 = G__36325;
i__36276_36316 = G__36326;
continue;
} else {
var temp__4657__auto___36327 = cljs.core.seq.call(null,seq__36273_36313);
if(temp__4657__auto___36327){
var seq__36273_36328__$1 = temp__4657__auto___36327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36273_36328__$1)){
var c__25857__auto___36329 = cljs.core.chunk_first.call(null,seq__36273_36328__$1);
var G__36330 = cljs.core.chunk_rest.call(null,seq__36273_36328__$1);
var G__36331 = c__25857__auto___36329;
var G__36332 = cljs.core.count.call(null,c__25857__auto___36329);
var G__36333 = (0);
seq__36273_36313 = G__36330;
chunk__36274_36314 = G__36331;
count__36275_36315 = G__36332;
i__36276_36316 = G__36333;
continue;
} else {
var vec__36282_36334 = cljs.core.first.call(null,seq__36273_36328__$1);
var name_36335 = cljs.core.nth.call(null,vec__36282_36334,(0),null);
var map__36285_36336 = cljs.core.nth.call(null,vec__36282_36334,(1),null);
var map__36285_36337__$1 = ((((!((map__36285_36336 == null)))?((((map__36285_36336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36285_36336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36285_36336):map__36285_36336);
var doc_36338 = cljs.core.get.call(null,map__36285_36337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36339 = cljs.core.get.call(null,map__36285_36337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36335);

cljs.core.println.call(null," ",arglists_36339);

if(cljs.core.truth_(doc_36338)){
cljs.core.println.call(null," ",doc_36338);
} else {
}

var G__36340 = cljs.core.next.call(null,seq__36273_36328__$1);
var G__36341 = null;
var G__36342 = (0);
var G__36343 = (0);
seq__36273_36313 = G__36340;
chunk__36274_36314 = G__36341;
count__36275_36315 = G__36342;
i__36276_36316 = G__36343;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36287 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36288 = null;
var count__36289 = (0);
var i__36290 = (0);
while(true){
if((i__36290 < count__36289)){
var role = cljs.core._nth.call(null,chunk__36288,i__36290);
var temp__4657__auto___36344__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36344__$1)){
var spec_36345 = temp__4657__auto___36344__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36345));
} else {
}

var G__36346 = seq__36287;
var G__36347 = chunk__36288;
var G__36348 = count__36289;
var G__36349 = (i__36290 + (1));
seq__36287 = G__36346;
chunk__36288 = G__36347;
count__36289 = G__36348;
i__36290 = G__36349;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36287);
if(temp__4657__auto____$1){
var seq__36287__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36287__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__36287__$1);
var G__36350 = cljs.core.chunk_rest.call(null,seq__36287__$1);
var G__36351 = c__25857__auto__;
var G__36352 = cljs.core.count.call(null,c__25857__auto__);
var G__36353 = (0);
seq__36287 = G__36350;
chunk__36288 = G__36351;
count__36289 = G__36352;
i__36290 = G__36353;
continue;
} else {
var role = cljs.core.first.call(null,seq__36287__$1);
var temp__4657__auto___36354__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36354__$2)){
var spec_36355 = temp__4657__auto___36354__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36355));
} else {
}

var G__36356 = cljs.core.next.call(null,seq__36287__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__36287 = G__36356;
chunk__36288 = G__36357;
count__36289 = G__36358;
i__36290 = G__36359;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484443196881
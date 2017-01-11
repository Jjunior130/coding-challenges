// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__144343){
var map__144368 = p__144343;
var map__144368__$1 = ((((!((map__144368 == null)))?((((map__144368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144368):map__144368);
var m = map__144368__$1;
var n = cljs.core.get.call(null,map__144368__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__144368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__144370_144392 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__144371_144393 = null;
var count__144372_144394 = (0);
var i__144373_144395 = (0);
while(true){
if((i__144373_144395 < count__144372_144394)){
var f_144396 = cljs.core._nth.call(null,chunk__144371_144393,i__144373_144395);
cljs.core.println.call(null,"  ",f_144396);

var G__144397 = seq__144370_144392;
var G__144398 = chunk__144371_144393;
var G__144399 = count__144372_144394;
var G__144400 = (i__144373_144395 + (1));
seq__144370_144392 = G__144397;
chunk__144371_144393 = G__144398;
count__144372_144394 = G__144399;
i__144373_144395 = G__144400;
continue;
} else {
var temp__4657__auto___144401 = cljs.core.seq.call(null,seq__144370_144392);
if(temp__4657__auto___144401){
var seq__144370_144402__$1 = temp__4657__auto___144401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144370_144402__$1)){
var c__25857__auto___144403 = cljs.core.chunk_first.call(null,seq__144370_144402__$1);
var G__144404 = cljs.core.chunk_rest.call(null,seq__144370_144402__$1);
var G__144405 = c__25857__auto___144403;
var G__144406 = cljs.core.count.call(null,c__25857__auto___144403);
var G__144407 = (0);
seq__144370_144392 = G__144404;
chunk__144371_144393 = G__144405;
count__144372_144394 = G__144406;
i__144373_144395 = G__144407;
continue;
} else {
var f_144408 = cljs.core.first.call(null,seq__144370_144402__$1);
cljs.core.println.call(null,"  ",f_144408);

var G__144409 = cljs.core.next.call(null,seq__144370_144402__$1);
var G__144410 = null;
var G__144411 = (0);
var G__144412 = (0);
seq__144370_144392 = G__144409;
chunk__144371_144393 = G__144410;
count__144372_144394 = G__144411;
i__144373_144395 = G__144412;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_144413 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_144413);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_144413)))?cljs.core.second.call(null,arglists_144413):arglists_144413));
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
var seq__144374_144414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__144375_144415 = null;
var count__144376_144416 = (0);
var i__144377_144417 = (0);
while(true){
if((i__144377_144417 < count__144376_144416)){
var vec__144378_144418 = cljs.core._nth.call(null,chunk__144375_144415,i__144377_144417);
var name_144419 = cljs.core.nth.call(null,vec__144378_144418,(0),null);
var map__144381_144420 = cljs.core.nth.call(null,vec__144378_144418,(1),null);
var map__144381_144421__$1 = ((((!((map__144381_144420 == null)))?((((map__144381_144420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144381_144420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144381_144420):map__144381_144420);
var doc_144422 = cljs.core.get.call(null,map__144381_144421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_144423 = cljs.core.get.call(null,map__144381_144421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_144419);

cljs.core.println.call(null," ",arglists_144423);

if(cljs.core.truth_(doc_144422)){
cljs.core.println.call(null," ",doc_144422);
} else {
}

var G__144424 = seq__144374_144414;
var G__144425 = chunk__144375_144415;
var G__144426 = count__144376_144416;
var G__144427 = (i__144377_144417 + (1));
seq__144374_144414 = G__144424;
chunk__144375_144415 = G__144425;
count__144376_144416 = G__144426;
i__144377_144417 = G__144427;
continue;
} else {
var temp__4657__auto___144428 = cljs.core.seq.call(null,seq__144374_144414);
if(temp__4657__auto___144428){
var seq__144374_144429__$1 = temp__4657__auto___144428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144374_144429__$1)){
var c__25857__auto___144430 = cljs.core.chunk_first.call(null,seq__144374_144429__$1);
var G__144431 = cljs.core.chunk_rest.call(null,seq__144374_144429__$1);
var G__144432 = c__25857__auto___144430;
var G__144433 = cljs.core.count.call(null,c__25857__auto___144430);
var G__144434 = (0);
seq__144374_144414 = G__144431;
chunk__144375_144415 = G__144432;
count__144376_144416 = G__144433;
i__144377_144417 = G__144434;
continue;
} else {
var vec__144383_144435 = cljs.core.first.call(null,seq__144374_144429__$1);
var name_144436 = cljs.core.nth.call(null,vec__144383_144435,(0),null);
var map__144386_144437 = cljs.core.nth.call(null,vec__144383_144435,(1),null);
var map__144386_144438__$1 = ((((!((map__144386_144437 == null)))?((((map__144386_144437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144386_144437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144386_144437):map__144386_144437);
var doc_144439 = cljs.core.get.call(null,map__144386_144438__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_144440 = cljs.core.get.call(null,map__144386_144438__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_144436);

cljs.core.println.call(null," ",arglists_144440);

if(cljs.core.truth_(doc_144439)){
cljs.core.println.call(null," ",doc_144439);
} else {
}

var G__144441 = cljs.core.next.call(null,seq__144374_144429__$1);
var G__144442 = null;
var G__144443 = (0);
var G__144444 = (0);
seq__144374_144414 = G__144441;
chunk__144375_144415 = G__144442;
count__144376_144416 = G__144443;
i__144377_144417 = G__144444;
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

var seq__144388 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__144389 = null;
var count__144390 = (0);
var i__144391 = (0);
while(true){
if((i__144391 < count__144390)){
var role = cljs.core._nth.call(null,chunk__144389,i__144391);
var temp__4657__auto___144445__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___144445__$1)){
var spec_144446 = temp__4657__auto___144445__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_144446));
} else {
}

var G__144447 = seq__144388;
var G__144448 = chunk__144389;
var G__144449 = count__144390;
var G__144450 = (i__144391 + (1));
seq__144388 = G__144447;
chunk__144389 = G__144448;
count__144390 = G__144449;
i__144391 = G__144450;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__144388);
if(temp__4657__auto____$1){
var seq__144388__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144388__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__144388__$1);
var G__144451 = cljs.core.chunk_rest.call(null,seq__144388__$1);
var G__144452 = c__25857__auto__;
var G__144453 = cljs.core.count.call(null,c__25857__auto__);
var G__144454 = (0);
seq__144388 = G__144451;
chunk__144389 = G__144452;
count__144390 = G__144453;
i__144391 = G__144454;
continue;
} else {
var role = cljs.core.first.call(null,seq__144388__$1);
var temp__4657__auto___144455__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___144455__$2)){
var spec_144456 = temp__4657__auto___144455__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_144456));
} else {
}

var G__144457 = cljs.core.next.call(null,seq__144388__$1);
var G__144458 = null;
var G__144459 = (0);
var G__144460 = (0);
seq__144388 = G__144457;
chunk__144389 = G__144458;
count__144390 = G__144459;
i__144391 = G__144460;
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

//# sourceMappingURL=repl.js.map?rel=1484099829324
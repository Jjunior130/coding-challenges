// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45550){
var map__45575 = p__45550;
var map__45575__$1 = ((((!((map__45575 == null)))?((((map__45575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45575):map__45575);
var m = map__45575__$1;
var n = cljs.core.get.call(null,map__45575__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45577_45599 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45578_45600 = null;
var count__45579_45601 = (0);
var i__45580_45602 = (0);
while(true){
if((i__45580_45602 < count__45579_45601)){
var f_45603 = cljs.core._nth.call(null,chunk__45578_45600,i__45580_45602);
cljs.core.println.call(null,"  ",f_45603);

var G__45604 = seq__45577_45599;
var G__45605 = chunk__45578_45600;
var G__45606 = count__45579_45601;
var G__45607 = (i__45580_45602 + (1));
seq__45577_45599 = G__45604;
chunk__45578_45600 = G__45605;
count__45579_45601 = G__45606;
i__45580_45602 = G__45607;
continue;
} else {
var temp__4657__auto___45608 = cljs.core.seq.call(null,seq__45577_45599);
if(temp__4657__auto___45608){
var seq__45577_45609__$1 = temp__4657__auto___45608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45577_45609__$1)){
var c__25857__auto___45610 = cljs.core.chunk_first.call(null,seq__45577_45609__$1);
var G__45611 = cljs.core.chunk_rest.call(null,seq__45577_45609__$1);
var G__45612 = c__25857__auto___45610;
var G__45613 = cljs.core.count.call(null,c__25857__auto___45610);
var G__45614 = (0);
seq__45577_45599 = G__45611;
chunk__45578_45600 = G__45612;
count__45579_45601 = G__45613;
i__45580_45602 = G__45614;
continue;
} else {
var f_45615 = cljs.core.first.call(null,seq__45577_45609__$1);
cljs.core.println.call(null,"  ",f_45615);

var G__45616 = cljs.core.next.call(null,seq__45577_45609__$1);
var G__45617 = null;
var G__45618 = (0);
var G__45619 = (0);
seq__45577_45599 = G__45616;
chunk__45578_45600 = G__45617;
count__45579_45601 = G__45618;
i__45580_45602 = G__45619;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45620 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45620);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45620)))?cljs.core.second.call(null,arglists_45620):arglists_45620));
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
var seq__45581_45621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45582_45622 = null;
var count__45583_45623 = (0);
var i__45584_45624 = (0);
while(true){
if((i__45584_45624 < count__45583_45623)){
var vec__45585_45625 = cljs.core._nth.call(null,chunk__45582_45622,i__45584_45624);
var name_45626 = cljs.core.nth.call(null,vec__45585_45625,(0),null);
var map__45588_45627 = cljs.core.nth.call(null,vec__45585_45625,(1),null);
var map__45588_45628__$1 = ((((!((map__45588_45627 == null)))?((((map__45588_45627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45588_45627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45588_45627):map__45588_45627);
var doc_45629 = cljs.core.get.call(null,map__45588_45628__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45630 = cljs.core.get.call(null,map__45588_45628__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45626);

cljs.core.println.call(null," ",arglists_45630);

if(cljs.core.truth_(doc_45629)){
cljs.core.println.call(null," ",doc_45629);
} else {
}

var G__45631 = seq__45581_45621;
var G__45632 = chunk__45582_45622;
var G__45633 = count__45583_45623;
var G__45634 = (i__45584_45624 + (1));
seq__45581_45621 = G__45631;
chunk__45582_45622 = G__45632;
count__45583_45623 = G__45633;
i__45584_45624 = G__45634;
continue;
} else {
var temp__4657__auto___45635 = cljs.core.seq.call(null,seq__45581_45621);
if(temp__4657__auto___45635){
var seq__45581_45636__$1 = temp__4657__auto___45635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45581_45636__$1)){
var c__25857__auto___45637 = cljs.core.chunk_first.call(null,seq__45581_45636__$1);
var G__45638 = cljs.core.chunk_rest.call(null,seq__45581_45636__$1);
var G__45639 = c__25857__auto___45637;
var G__45640 = cljs.core.count.call(null,c__25857__auto___45637);
var G__45641 = (0);
seq__45581_45621 = G__45638;
chunk__45582_45622 = G__45639;
count__45583_45623 = G__45640;
i__45584_45624 = G__45641;
continue;
} else {
var vec__45590_45642 = cljs.core.first.call(null,seq__45581_45636__$1);
var name_45643 = cljs.core.nth.call(null,vec__45590_45642,(0),null);
var map__45593_45644 = cljs.core.nth.call(null,vec__45590_45642,(1),null);
var map__45593_45645__$1 = ((((!((map__45593_45644 == null)))?((((map__45593_45644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45593_45644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45593_45644):map__45593_45644);
var doc_45646 = cljs.core.get.call(null,map__45593_45645__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45647 = cljs.core.get.call(null,map__45593_45645__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45643);

cljs.core.println.call(null," ",arglists_45647);

if(cljs.core.truth_(doc_45646)){
cljs.core.println.call(null," ",doc_45646);
} else {
}

var G__45648 = cljs.core.next.call(null,seq__45581_45636__$1);
var G__45649 = null;
var G__45650 = (0);
var G__45651 = (0);
seq__45581_45621 = G__45648;
chunk__45582_45622 = G__45649;
count__45583_45623 = G__45650;
i__45584_45624 = G__45651;
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

var seq__45595 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45596 = null;
var count__45597 = (0);
var i__45598 = (0);
while(true){
if((i__45598 < count__45597)){
var role = cljs.core._nth.call(null,chunk__45596,i__45598);
var temp__4657__auto___45652__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45652__$1)){
var spec_45653 = temp__4657__auto___45652__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45653));
} else {
}

var G__45654 = seq__45595;
var G__45655 = chunk__45596;
var G__45656 = count__45597;
var G__45657 = (i__45598 + (1));
seq__45595 = G__45654;
chunk__45596 = G__45655;
count__45597 = G__45656;
i__45598 = G__45657;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__45595);
if(temp__4657__auto____$1){
var seq__45595__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45595__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45595__$1);
var G__45658 = cljs.core.chunk_rest.call(null,seq__45595__$1);
var G__45659 = c__25857__auto__;
var G__45660 = cljs.core.count.call(null,c__25857__auto__);
var G__45661 = (0);
seq__45595 = G__45658;
chunk__45596 = G__45659;
count__45597 = G__45660;
i__45598 = G__45661;
continue;
} else {
var role = cljs.core.first.call(null,seq__45595__$1);
var temp__4657__auto___45662__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45662__$2)){
var spec_45663 = temp__4657__auto___45662__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45663));
} else {
}

var G__45664 = cljs.core.next.call(null,seq__45595__$1);
var G__45665 = null;
var G__45666 = (0);
var G__45667 = (0);
seq__45595 = G__45664;
chunk__45596 = G__45665;
count__45597 = G__45666;
i__45598 = G__45667;
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

//# sourceMappingURL=repl.js.map?rel=1484366735921
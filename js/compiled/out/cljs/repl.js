// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44011){
var map__44036 = p__44011;
var map__44036__$1 = ((((!((map__44036 == null)))?((((map__44036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44036):map__44036);
var m = map__44036__$1;
var n = cljs.core.get.call(null,map__44036__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44038_44060 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44039_44061 = null;
var count__44040_44062 = (0);
var i__44041_44063 = (0);
while(true){
if((i__44041_44063 < count__44040_44062)){
var f_44064 = cljs.core._nth.call(null,chunk__44039_44061,i__44041_44063);
cljs.core.println.call(null,"  ",f_44064);

var G__44065 = seq__44038_44060;
var G__44066 = chunk__44039_44061;
var G__44067 = count__44040_44062;
var G__44068 = (i__44041_44063 + (1));
seq__44038_44060 = G__44065;
chunk__44039_44061 = G__44066;
count__44040_44062 = G__44067;
i__44041_44063 = G__44068;
continue;
} else {
var temp__4657__auto___44069 = cljs.core.seq.call(null,seq__44038_44060);
if(temp__4657__auto___44069){
var seq__44038_44070__$1 = temp__4657__auto___44069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44038_44070__$1)){
var c__25857__auto___44071 = cljs.core.chunk_first.call(null,seq__44038_44070__$1);
var G__44072 = cljs.core.chunk_rest.call(null,seq__44038_44070__$1);
var G__44073 = c__25857__auto___44071;
var G__44074 = cljs.core.count.call(null,c__25857__auto___44071);
var G__44075 = (0);
seq__44038_44060 = G__44072;
chunk__44039_44061 = G__44073;
count__44040_44062 = G__44074;
i__44041_44063 = G__44075;
continue;
} else {
var f_44076 = cljs.core.first.call(null,seq__44038_44070__$1);
cljs.core.println.call(null,"  ",f_44076);

var G__44077 = cljs.core.next.call(null,seq__44038_44070__$1);
var G__44078 = null;
var G__44079 = (0);
var G__44080 = (0);
seq__44038_44060 = G__44077;
chunk__44039_44061 = G__44078;
count__44040_44062 = G__44079;
i__44041_44063 = G__44080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44081 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44081);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44081)))?cljs.core.second.call(null,arglists_44081):arglists_44081));
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
var seq__44042_44082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44043_44083 = null;
var count__44044_44084 = (0);
var i__44045_44085 = (0);
while(true){
if((i__44045_44085 < count__44044_44084)){
var vec__44046_44086 = cljs.core._nth.call(null,chunk__44043_44083,i__44045_44085);
var name_44087 = cljs.core.nth.call(null,vec__44046_44086,(0),null);
var map__44049_44088 = cljs.core.nth.call(null,vec__44046_44086,(1),null);
var map__44049_44089__$1 = ((((!((map__44049_44088 == null)))?((((map__44049_44088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44049_44088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44049_44088):map__44049_44088);
var doc_44090 = cljs.core.get.call(null,map__44049_44089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44091 = cljs.core.get.call(null,map__44049_44089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44087);

cljs.core.println.call(null," ",arglists_44091);

if(cljs.core.truth_(doc_44090)){
cljs.core.println.call(null," ",doc_44090);
} else {
}

var G__44092 = seq__44042_44082;
var G__44093 = chunk__44043_44083;
var G__44094 = count__44044_44084;
var G__44095 = (i__44045_44085 + (1));
seq__44042_44082 = G__44092;
chunk__44043_44083 = G__44093;
count__44044_44084 = G__44094;
i__44045_44085 = G__44095;
continue;
} else {
var temp__4657__auto___44096 = cljs.core.seq.call(null,seq__44042_44082);
if(temp__4657__auto___44096){
var seq__44042_44097__$1 = temp__4657__auto___44096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44042_44097__$1)){
var c__25857__auto___44098 = cljs.core.chunk_first.call(null,seq__44042_44097__$1);
var G__44099 = cljs.core.chunk_rest.call(null,seq__44042_44097__$1);
var G__44100 = c__25857__auto___44098;
var G__44101 = cljs.core.count.call(null,c__25857__auto___44098);
var G__44102 = (0);
seq__44042_44082 = G__44099;
chunk__44043_44083 = G__44100;
count__44044_44084 = G__44101;
i__44045_44085 = G__44102;
continue;
} else {
var vec__44051_44103 = cljs.core.first.call(null,seq__44042_44097__$1);
var name_44104 = cljs.core.nth.call(null,vec__44051_44103,(0),null);
var map__44054_44105 = cljs.core.nth.call(null,vec__44051_44103,(1),null);
var map__44054_44106__$1 = ((((!((map__44054_44105 == null)))?((((map__44054_44105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44054_44105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44054_44105):map__44054_44105);
var doc_44107 = cljs.core.get.call(null,map__44054_44106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44108 = cljs.core.get.call(null,map__44054_44106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44104);

cljs.core.println.call(null," ",arglists_44108);

if(cljs.core.truth_(doc_44107)){
cljs.core.println.call(null," ",doc_44107);
} else {
}

var G__44109 = cljs.core.next.call(null,seq__44042_44097__$1);
var G__44110 = null;
var G__44111 = (0);
var G__44112 = (0);
seq__44042_44082 = G__44109;
chunk__44043_44083 = G__44110;
count__44044_44084 = G__44111;
i__44045_44085 = G__44112;
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

var seq__44056 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44057 = null;
var count__44058 = (0);
var i__44059 = (0);
while(true){
if((i__44059 < count__44058)){
var role = cljs.core._nth.call(null,chunk__44057,i__44059);
var temp__4657__auto___44113__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44113__$1)){
var spec_44114 = temp__4657__auto___44113__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44114));
} else {
}

var G__44115 = seq__44056;
var G__44116 = chunk__44057;
var G__44117 = count__44058;
var G__44118 = (i__44059 + (1));
seq__44056 = G__44115;
chunk__44057 = G__44116;
count__44058 = G__44117;
i__44059 = G__44118;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__44056);
if(temp__4657__auto____$1){
var seq__44056__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44056__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__44056__$1);
var G__44119 = cljs.core.chunk_rest.call(null,seq__44056__$1);
var G__44120 = c__25857__auto__;
var G__44121 = cljs.core.count.call(null,c__25857__auto__);
var G__44122 = (0);
seq__44056 = G__44119;
chunk__44057 = G__44120;
count__44058 = G__44121;
i__44059 = G__44122;
continue;
} else {
var role = cljs.core.first.call(null,seq__44056__$1);
var temp__4657__auto___44123__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44123__$2)){
var spec_44124 = temp__4657__auto___44123__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44124));
} else {
}

var G__44125 = cljs.core.next.call(null,seq__44056__$1);
var G__44126 = null;
var G__44127 = (0);
var G__44128 = (0);
seq__44056 = G__44125;
chunk__44057 = G__44126;
count__44058 = G__44127;
i__44059 = G__44128;
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

//# sourceMappingURL=repl.js.map?rel=1484780663944
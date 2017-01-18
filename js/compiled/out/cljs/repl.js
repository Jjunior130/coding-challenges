// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44885){
var map__44910 = p__44885;
var map__44910__$1 = ((((!((map__44910 == null)))?((((map__44910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44910):map__44910);
var m = map__44910__$1;
var n = cljs.core.get.call(null,map__44910__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44912_44934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44913_44935 = null;
var count__44914_44936 = (0);
var i__44915_44937 = (0);
while(true){
if((i__44915_44937 < count__44914_44936)){
var f_44938 = cljs.core._nth.call(null,chunk__44913_44935,i__44915_44937);
cljs.core.println.call(null,"  ",f_44938);

var G__44939 = seq__44912_44934;
var G__44940 = chunk__44913_44935;
var G__44941 = count__44914_44936;
var G__44942 = (i__44915_44937 + (1));
seq__44912_44934 = G__44939;
chunk__44913_44935 = G__44940;
count__44914_44936 = G__44941;
i__44915_44937 = G__44942;
continue;
} else {
var temp__4657__auto___44943 = cljs.core.seq.call(null,seq__44912_44934);
if(temp__4657__auto___44943){
var seq__44912_44944__$1 = temp__4657__auto___44943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44912_44944__$1)){
var c__25857__auto___44945 = cljs.core.chunk_first.call(null,seq__44912_44944__$1);
var G__44946 = cljs.core.chunk_rest.call(null,seq__44912_44944__$1);
var G__44947 = c__25857__auto___44945;
var G__44948 = cljs.core.count.call(null,c__25857__auto___44945);
var G__44949 = (0);
seq__44912_44934 = G__44946;
chunk__44913_44935 = G__44947;
count__44914_44936 = G__44948;
i__44915_44937 = G__44949;
continue;
} else {
var f_44950 = cljs.core.first.call(null,seq__44912_44944__$1);
cljs.core.println.call(null,"  ",f_44950);

var G__44951 = cljs.core.next.call(null,seq__44912_44944__$1);
var G__44952 = null;
var G__44953 = (0);
var G__44954 = (0);
seq__44912_44934 = G__44951;
chunk__44913_44935 = G__44952;
count__44914_44936 = G__44953;
i__44915_44937 = G__44954;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44955 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44955);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44955)))?cljs.core.second.call(null,arglists_44955):arglists_44955));
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
var seq__44916_44956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44917_44957 = null;
var count__44918_44958 = (0);
var i__44919_44959 = (0);
while(true){
if((i__44919_44959 < count__44918_44958)){
var vec__44920_44960 = cljs.core._nth.call(null,chunk__44917_44957,i__44919_44959);
var name_44961 = cljs.core.nth.call(null,vec__44920_44960,(0),null);
var map__44923_44962 = cljs.core.nth.call(null,vec__44920_44960,(1),null);
var map__44923_44963__$1 = ((((!((map__44923_44962 == null)))?((((map__44923_44962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44923_44962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44923_44962):map__44923_44962);
var doc_44964 = cljs.core.get.call(null,map__44923_44963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44965 = cljs.core.get.call(null,map__44923_44963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44961);

cljs.core.println.call(null," ",arglists_44965);

if(cljs.core.truth_(doc_44964)){
cljs.core.println.call(null," ",doc_44964);
} else {
}

var G__44966 = seq__44916_44956;
var G__44967 = chunk__44917_44957;
var G__44968 = count__44918_44958;
var G__44969 = (i__44919_44959 + (1));
seq__44916_44956 = G__44966;
chunk__44917_44957 = G__44967;
count__44918_44958 = G__44968;
i__44919_44959 = G__44969;
continue;
} else {
var temp__4657__auto___44970 = cljs.core.seq.call(null,seq__44916_44956);
if(temp__4657__auto___44970){
var seq__44916_44971__$1 = temp__4657__auto___44970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44916_44971__$1)){
var c__25857__auto___44972 = cljs.core.chunk_first.call(null,seq__44916_44971__$1);
var G__44973 = cljs.core.chunk_rest.call(null,seq__44916_44971__$1);
var G__44974 = c__25857__auto___44972;
var G__44975 = cljs.core.count.call(null,c__25857__auto___44972);
var G__44976 = (0);
seq__44916_44956 = G__44973;
chunk__44917_44957 = G__44974;
count__44918_44958 = G__44975;
i__44919_44959 = G__44976;
continue;
} else {
var vec__44925_44977 = cljs.core.first.call(null,seq__44916_44971__$1);
var name_44978 = cljs.core.nth.call(null,vec__44925_44977,(0),null);
var map__44928_44979 = cljs.core.nth.call(null,vec__44925_44977,(1),null);
var map__44928_44980__$1 = ((((!((map__44928_44979 == null)))?((((map__44928_44979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44928_44979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44928_44979):map__44928_44979);
var doc_44981 = cljs.core.get.call(null,map__44928_44980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44982 = cljs.core.get.call(null,map__44928_44980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44978);

cljs.core.println.call(null," ",arglists_44982);

if(cljs.core.truth_(doc_44981)){
cljs.core.println.call(null," ",doc_44981);
} else {
}

var G__44983 = cljs.core.next.call(null,seq__44916_44971__$1);
var G__44984 = null;
var G__44985 = (0);
var G__44986 = (0);
seq__44916_44956 = G__44983;
chunk__44917_44957 = G__44984;
count__44918_44958 = G__44985;
i__44919_44959 = G__44986;
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

var seq__44930 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44931 = null;
var count__44932 = (0);
var i__44933 = (0);
while(true){
if((i__44933 < count__44932)){
var role = cljs.core._nth.call(null,chunk__44931,i__44933);
var temp__4657__auto___44987__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44987__$1)){
var spec_44988 = temp__4657__auto___44987__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44988));
} else {
}

var G__44989 = seq__44930;
var G__44990 = chunk__44931;
var G__44991 = count__44932;
var G__44992 = (i__44933 + (1));
seq__44930 = G__44989;
chunk__44931 = G__44990;
count__44932 = G__44991;
i__44933 = G__44992;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__44930);
if(temp__4657__auto____$1){
var seq__44930__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44930__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__44930__$1);
var G__44993 = cljs.core.chunk_rest.call(null,seq__44930__$1);
var G__44994 = c__25857__auto__;
var G__44995 = cljs.core.count.call(null,c__25857__auto__);
var G__44996 = (0);
seq__44930 = G__44993;
chunk__44931 = G__44994;
count__44932 = G__44995;
i__44933 = G__44996;
continue;
} else {
var role = cljs.core.first.call(null,seq__44930__$1);
var temp__4657__auto___44997__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44997__$2)){
var spec_44998 = temp__4657__auto___44997__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44998));
} else {
}

var G__44999 = cljs.core.next.call(null,seq__44930__$1);
var G__45000 = null;
var G__45001 = (0);
var G__45002 = (0);
seq__44930 = G__44999;
chunk__44931 = G__45000;
count__44932 = G__45001;
i__44933 = G__45002;
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

//# sourceMappingURL=repl.js.map?rel=1484702594059
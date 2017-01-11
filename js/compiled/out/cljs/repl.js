// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45832){
var map__45857 = p__45832;
var map__45857__$1 = ((((!((map__45857 == null)))?((((map__45857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45857):map__45857);
var m = map__45857__$1;
var n = cljs.core.get.call(null,map__45857__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45859_45881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45860_45882 = null;
var count__45861_45883 = (0);
var i__45862_45884 = (0);
while(true){
if((i__45862_45884 < count__45861_45883)){
var f_45885 = cljs.core._nth.call(null,chunk__45860_45882,i__45862_45884);
cljs.core.println.call(null,"  ",f_45885);

var G__45886 = seq__45859_45881;
var G__45887 = chunk__45860_45882;
var G__45888 = count__45861_45883;
var G__45889 = (i__45862_45884 + (1));
seq__45859_45881 = G__45886;
chunk__45860_45882 = G__45887;
count__45861_45883 = G__45888;
i__45862_45884 = G__45889;
continue;
} else {
var temp__4657__auto___45890 = cljs.core.seq.call(null,seq__45859_45881);
if(temp__4657__auto___45890){
var seq__45859_45891__$1 = temp__4657__auto___45890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45859_45891__$1)){
var c__25857__auto___45892 = cljs.core.chunk_first.call(null,seq__45859_45891__$1);
var G__45893 = cljs.core.chunk_rest.call(null,seq__45859_45891__$1);
var G__45894 = c__25857__auto___45892;
var G__45895 = cljs.core.count.call(null,c__25857__auto___45892);
var G__45896 = (0);
seq__45859_45881 = G__45893;
chunk__45860_45882 = G__45894;
count__45861_45883 = G__45895;
i__45862_45884 = G__45896;
continue;
} else {
var f_45897 = cljs.core.first.call(null,seq__45859_45891__$1);
cljs.core.println.call(null,"  ",f_45897);

var G__45898 = cljs.core.next.call(null,seq__45859_45891__$1);
var G__45899 = null;
var G__45900 = (0);
var G__45901 = (0);
seq__45859_45881 = G__45898;
chunk__45860_45882 = G__45899;
count__45861_45883 = G__45900;
i__45862_45884 = G__45901;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45902 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45902);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45902)))?cljs.core.second.call(null,arglists_45902):arglists_45902));
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
var seq__45863_45903 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45864_45904 = null;
var count__45865_45905 = (0);
var i__45866_45906 = (0);
while(true){
if((i__45866_45906 < count__45865_45905)){
var vec__45867_45907 = cljs.core._nth.call(null,chunk__45864_45904,i__45866_45906);
var name_45908 = cljs.core.nth.call(null,vec__45867_45907,(0),null);
var map__45870_45909 = cljs.core.nth.call(null,vec__45867_45907,(1),null);
var map__45870_45910__$1 = ((((!((map__45870_45909 == null)))?((((map__45870_45909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45870_45909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45870_45909):map__45870_45909);
var doc_45911 = cljs.core.get.call(null,map__45870_45910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45912 = cljs.core.get.call(null,map__45870_45910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45908);

cljs.core.println.call(null," ",arglists_45912);

if(cljs.core.truth_(doc_45911)){
cljs.core.println.call(null," ",doc_45911);
} else {
}

var G__45913 = seq__45863_45903;
var G__45914 = chunk__45864_45904;
var G__45915 = count__45865_45905;
var G__45916 = (i__45866_45906 + (1));
seq__45863_45903 = G__45913;
chunk__45864_45904 = G__45914;
count__45865_45905 = G__45915;
i__45866_45906 = G__45916;
continue;
} else {
var temp__4657__auto___45917 = cljs.core.seq.call(null,seq__45863_45903);
if(temp__4657__auto___45917){
var seq__45863_45918__$1 = temp__4657__auto___45917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45863_45918__$1)){
var c__25857__auto___45919 = cljs.core.chunk_first.call(null,seq__45863_45918__$1);
var G__45920 = cljs.core.chunk_rest.call(null,seq__45863_45918__$1);
var G__45921 = c__25857__auto___45919;
var G__45922 = cljs.core.count.call(null,c__25857__auto___45919);
var G__45923 = (0);
seq__45863_45903 = G__45920;
chunk__45864_45904 = G__45921;
count__45865_45905 = G__45922;
i__45866_45906 = G__45923;
continue;
} else {
var vec__45872_45924 = cljs.core.first.call(null,seq__45863_45918__$1);
var name_45925 = cljs.core.nth.call(null,vec__45872_45924,(0),null);
var map__45875_45926 = cljs.core.nth.call(null,vec__45872_45924,(1),null);
var map__45875_45927__$1 = ((((!((map__45875_45926 == null)))?((((map__45875_45926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45875_45926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45875_45926):map__45875_45926);
var doc_45928 = cljs.core.get.call(null,map__45875_45927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45929 = cljs.core.get.call(null,map__45875_45927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45925);

cljs.core.println.call(null," ",arglists_45929);

if(cljs.core.truth_(doc_45928)){
cljs.core.println.call(null," ",doc_45928);
} else {
}

var G__45930 = cljs.core.next.call(null,seq__45863_45918__$1);
var G__45931 = null;
var G__45932 = (0);
var G__45933 = (0);
seq__45863_45903 = G__45930;
chunk__45864_45904 = G__45931;
count__45865_45905 = G__45932;
i__45866_45906 = G__45933;
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

var seq__45877 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45878 = null;
var count__45879 = (0);
var i__45880 = (0);
while(true){
if((i__45880 < count__45879)){
var role = cljs.core._nth.call(null,chunk__45878,i__45880);
var temp__4657__auto___45934__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45934__$1)){
var spec_45935 = temp__4657__auto___45934__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45935));
} else {
}

var G__45936 = seq__45877;
var G__45937 = chunk__45878;
var G__45938 = count__45879;
var G__45939 = (i__45880 + (1));
seq__45877 = G__45936;
chunk__45878 = G__45937;
count__45879 = G__45938;
i__45880 = G__45939;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__45877);
if(temp__4657__auto____$1){
var seq__45877__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45877__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45877__$1);
var G__45940 = cljs.core.chunk_rest.call(null,seq__45877__$1);
var G__45941 = c__25857__auto__;
var G__45942 = cljs.core.count.call(null,c__25857__auto__);
var G__45943 = (0);
seq__45877 = G__45940;
chunk__45878 = G__45941;
count__45879 = G__45942;
i__45880 = G__45943;
continue;
} else {
var role = cljs.core.first.call(null,seq__45877__$1);
var temp__4657__auto___45944__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___45944__$2)){
var spec_45945 = temp__4657__auto___45944__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_45945));
} else {
}

var G__45946 = cljs.core.next.call(null,seq__45877__$1);
var G__45947 = null;
var G__45948 = (0);
var G__45949 = (0);
seq__45877 = G__45946;
chunk__45878 = G__45947;
count__45879 = G__45948;
i__45880 = G__45949;
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

//# sourceMappingURL=repl.js.map?rel=1484163020665
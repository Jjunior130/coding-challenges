// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64810){
var map__64835 = p__64810;
var map__64835__$1 = ((((!((map__64835 == null)))?((((map__64835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64835):map__64835);
var m = map__64835__$1;
var n = cljs.core.get.call(null,map__64835__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__64835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__64837_64859 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64838_64860 = null;
var count__64839_64861 = (0);
var i__64840_64862 = (0);
while(true){
if((i__64840_64862 < count__64839_64861)){
var f_64863 = cljs.core._nth.call(null,chunk__64838_64860,i__64840_64862);
cljs.core.println.call(null,"  ",f_64863);

var G__64864 = seq__64837_64859;
var G__64865 = chunk__64838_64860;
var G__64866 = count__64839_64861;
var G__64867 = (i__64840_64862 + (1));
seq__64837_64859 = G__64864;
chunk__64838_64860 = G__64865;
count__64839_64861 = G__64866;
i__64840_64862 = G__64867;
continue;
} else {
var temp__4657__auto___64868 = cljs.core.seq.call(null,seq__64837_64859);
if(temp__4657__auto___64868){
var seq__64837_64869__$1 = temp__4657__auto___64868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64837_64869__$1)){
var c__25857__auto___64870 = cljs.core.chunk_first.call(null,seq__64837_64869__$1);
var G__64871 = cljs.core.chunk_rest.call(null,seq__64837_64869__$1);
var G__64872 = c__25857__auto___64870;
var G__64873 = cljs.core.count.call(null,c__25857__auto___64870);
var G__64874 = (0);
seq__64837_64859 = G__64871;
chunk__64838_64860 = G__64872;
count__64839_64861 = G__64873;
i__64840_64862 = G__64874;
continue;
} else {
var f_64875 = cljs.core.first.call(null,seq__64837_64869__$1);
cljs.core.println.call(null,"  ",f_64875);

var G__64876 = cljs.core.next.call(null,seq__64837_64869__$1);
var G__64877 = null;
var G__64878 = (0);
var G__64879 = (0);
seq__64837_64859 = G__64876;
chunk__64838_64860 = G__64877;
count__64839_64861 = G__64878;
i__64840_64862 = G__64879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64880 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_64880);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_64880)))?cljs.core.second.call(null,arglists_64880):arglists_64880));
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
var seq__64841_64881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64842_64882 = null;
var count__64843_64883 = (0);
var i__64844_64884 = (0);
while(true){
if((i__64844_64884 < count__64843_64883)){
var vec__64845_64885 = cljs.core._nth.call(null,chunk__64842_64882,i__64844_64884);
var name_64886 = cljs.core.nth.call(null,vec__64845_64885,(0),null);
var map__64848_64887 = cljs.core.nth.call(null,vec__64845_64885,(1),null);
var map__64848_64888__$1 = ((((!((map__64848_64887 == null)))?((((map__64848_64887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64848_64887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64848_64887):map__64848_64887);
var doc_64889 = cljs.core.get.call(null,map__64848_64888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64890 = cljs.core.get.call(null,map__64848_64888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64886);

cljs.core.println.call(null," ",arglists_64890);

if(cljs.core.truth_(doc_64889)){
cljs.core.println.call(null," ",doc_64889);
} else {
}

var G__64891 = seq__64841_64881;
var G__64892 = chunk__64842_64882;
var G__64893 = count__64843_64883;
var G__64894 = (i__64844_64884 + (1));
seq__64841_64881 = G__64891;
chunk__64842_64882 = G__64892;
count__64843_64883 = G__64893;
i__64844_64884 = G__64894;
continue;
} else {
var temp__4657__auto___64895 = cljs.core.seq.call(null,seq__64841_64881);
if(temp__4657__auto___64895){
var seq__64841_64896__$1 = temp__4657__auto___64895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64841_64896__$1)){
var c__25857__auto___64897 = cljs.core.chunk_first.call(null,seq__64841_64896__$1);
var G__64898 = cljs.core.chunk_rest.call(null,seq__64841_64896__$1);
var G__64899 = c__25857__auto___64897;
var G__64900 = cljs.core.count.call(null,c__25857__auto___64897);
var G__64901 = (0);
seq__64841_64881 = G__64898;
chunk__64842_64882 = G__64899;
count__64843_64883 = G__64900;
i__64844_64884 = G__64901;
continue;
} else {
var vec__64850_64902 = cljs.core.first.call(null,seq__64841_64896__$1);
var name_64903 = cljs.core.nth.call(null,vec__64850_64902,(0),null);
var map__64853_64904 = cljs.core.nth.call(null,vec__64850_64902,(1),null);
var map__64853_64905__$1 = ((((!((map__64853_64904 == null)))?((((map__64853_64904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64853_64904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64853_64904):map__64853_64904);
var doc_64906 = cljs.core.get.call(null,map__64853_64905__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64907 = cljs.core.get.call(null,map__64853_64905__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64903);

cljs.core.println.call(null," ",arglists_64907);

if(cljs.core.truth_(doc_64906)){
cljs.core.println.call(null," ",doc_64906);
} else {
}

var G__64908 = cljs.core.next.call(null,seq__64841_64896__$1);
var G__64909 = null;
var G__64910 = (0);
var G__64911 = (0);
seq__64841_64881 = G__64908;
chunk__64842_64882 = G__64909;
count__64843_64883 = G__64910;
i__64844_64884 = G__64911;
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

var seq__64855 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64856 = null;
var count__64857 = (0);
var i__64858 = (0);
while(true){
if((i__64858 < count__64857)){
var role = cljs.core._nth.call(null,chunk__64856,i__64858);
var temp__4657__auto___64912__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___64912__$1)){
var spec_64913 = temp__4657__auto___64912__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_64913));
} else {
}

var G__64914 = seq__64855;
var G__64915 = chunk__64856;
var G__64916 = count__64857;
var G__64917 = (i__64858 + (1));
seq__64855 = G__64914;
chunk__64856 = G__64915;
count__64857 = G__64916;
i__64858 = G__64917;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__64855);
if(temp__4657__auto____$1){
var seq__64855__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64855__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__64855__$1);
var G__64918 = cljs.core.chunk_rest.call(null,seq__64855__$1);
var G__64919 = c__25857__auto__;
var G__64920 = cljs.core.count.call(null,c__25857__auto__);
var G__64921 = (0);
seq__64855 = G__64918;
chunk__64856 = G__64919;
count__64857 = G__64920;
i__64858 = G__64921;
continue;
} else {
var role = cljs.core.first.call(null,seq__64855__$1);
var temp__4657__auto___64922__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___64922__$2)){
var spec_64923 = temp__4657__auto___64922__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_64923));
} else {
}

var G__64924 = cljs.core.next.call(null,seq__64855__$1);
var G__64925 = null;
var G__64926 = (0);
var G__64927 = (0);
seq__64855 = G__64924;
chunk__64856 = G__64925;
count__64857 = G__64926;
i__64858 = G__64927;
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

//# sourceMappingURL=repl.js.map?rel=1484333408502
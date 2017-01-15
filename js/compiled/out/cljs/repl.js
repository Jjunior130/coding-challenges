// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37754){
var map__37779 = p__37754;
var map__37779__$1 = ((((!((map__37779 == null)))?((((map__37779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37779):map__37779);
var m = map__37779__$1;
var n = cljs.core.get.call(null,map__37779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37781_37803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37782_37804 = null;
var count__37783_37805 = (0);
var i__37784_37806 = (0);
while(true){
if((i__37784_37806 < count__37783_37805)){
var f_37807 = cljs.core._nth.call(null,chunk__37782_37804,i__37784_37806);
cljs.core.println.call(null,"  ",f_37807);

var G__37808 = seq__37781_37803;
var G__37809 = chunk__37782_37804;
var G__37810 = count__37783_37805;
var G__37811 = (i__37784_37806 + (1));
seq__37781_37803 = G__37808;
chunk__37782_37804 = G__37809;
count__37783_37805 = G__37810;
i__37784_37806 = G__37811;
continue;
} else {
var temp__4657__auto___37812 = cljs.core.seq.call(null,seq__37781_37803);
if(temp__4657__auto___37812){
var seq__37781_37813__$1 = temp__4657__auto___37812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37781_37813__$1)){
var c__25857__auto___37814 = cljs.core.chunk_first.call(null,seq__37781_37813__$1);
var G__37815 = cljs.core.chunk_rest.call(null,seq__37781_37813__$1);
var G__37816 = c__25857__auto___37814;
var G__37817 = cljs.core.count.call(null,c__25857__auto___37814);
var G__37818 = (0);
seq__37781_37803 = G__37815;
chunk__37782_37804 = G__37816;
count__37783_37805 = G__37817;
i__37784_37806 = G__37818;
continue;
} else {
var f_37819 = cljs.core.first.call(null,seq__37781_37813__$1);
cljs.core.println.call(null,"  ",f_37819);

var G__37820 = cljs.core.next.call(null,seq__37781_37813__$1);
var G__37821 = null;
var G__37822 = (0);
var G__37823 = (0);
seq__37781_37803 = G__37820;
chunk__37782_37804 = G__37821;
count__37783_37805 = G__37822;
i__37784_37806 = G__37823;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37824 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37824);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37824)))?cljs.core.second.call(null,arglists_37824):arglists_37824));
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
var seq__37785_37825 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37786_37826 = null;
var count__37787_37827 = (0);
var i__37788_37828 = (0);
while(true){
if((i__37788_37828 < count__37787_37827)){
var vec__37789_37829 = cljs.core._nth.call(null,chunk__37786_37826,i__37788_37828);
var name_37830 = cljs.core.nth.call(null,vec__37789_37829,(0),null);
var map__37792_37831 = cljs.core.nth.call(null,vec__37789_37829,(1),null);
var map__37792_37832__$1 = ((((!((map__37792_37831 == null)))?((((map__37792_37831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37792_37831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37792_37831):map__37792_37831);
var doc_37833 = cljs.core.get.call(null,map__37792_37832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37834 = cljs.core.get.call(null,map__37792_37832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37830);

cljs.core.println.call(null," ",arglists_37834);

if(cljs.core.truth_(doc_37833)){
cljs.core.println.call(null," ",doc_37833);
} else {
}

var G__37835 = seq__37785_37825;
var G__37836 = chunk__37786_37826;
var G__37837 = count__37787_37827;
var G__37838 = (i__37788_37828 + (1));
seq__37785_37825 = G__37835;
chunk__37786_37826 = G__37836;
count__37787_37827 = G__37837;
i__37788_37828 = G__37838;
continue;
} else {
var temp__4657__auto___37839 = cljs.core.seq.call(null,seq__37785_37825);
if(temp__4657__auto___37839){
var seq__37785_37840__$1 = temp__4657__auto___37839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37785_37840__$1)){
var c__25857__auto___37841 = cljs.core.chunk_first.call(null,seq__37785_37840__$1);
var G__37842 = cljs.core.chunk_rest.call(null,seq__37785_37840__$1);
var G__37843 = c__25857__auto___37841;
var G__37844 = cljs.core.count.call(null,c__25857__auto___37841);
var G__37845 = (0);
seq__37785_37825 = G__37842;
chunk__37786_37826 = G__37843;
count__37787_37827 = G__37844;
i__37788_37828 = G__37845;
continue;
} else {
var vec__37794_37846 = cljs.core.first.call(null,seq__37785_37840__$1);
var name_37847 = cljs.core.nth.call(null,vec__37794_37846,(0),null);
var map__37797_37848 = cljs.core.nth.call(null,vec__37794_37846,(1),null);
var map__37797_37849__$1 = ((((!((map__37797_37848 == null)))?((((map__37797_37848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37797_37848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37797_37848):map__37797_37848);
var doc_37850 = cljs.core.get.call(null,map__37797_37849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37851 = cljs.core.get.call(null,map__37797_37849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37847);

cljs.core.println.call(null," ",arglists_37851);

if(cljs.core.truth_(doc_37850)){
cljs.core.println.call(null," ",doc_37850);
} else {
}

var G__37852 = cljs.core.next.call(null,seq__37785_37840__$1);
var G__37853 = null;
var G__37854 = (0);
var G__37855 = (0);
seq__37785_37825 = G__37852;
chunk__37786_37826 = G__37853;
count__37787_37827 = G__37854;
i__37788_37828 = G__37855;
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

var seq__37799 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37800 = null;
var count__37801 = (0);
var i__37802 = (0);
while(true){
if((i__37802 < count__37801)){
var role = cljs.core._nth.call(null,chunk__37800,i__37802);
var temp__4657__auto___37856__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37856__$1)){
var spec_37857 = temp__4657__auto___37856__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37857));
} else {
}

var G__37858 = seq__37799;
var G__37859 = chunk__37800;
var G__37860 = count__37801;
var G__37861 = (i__37802 + (1));
seq__37799 = G__37858;
chunk__37800 = G__37859;
count__37801 = G__37860;
i__37802 = G__37861;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37799);
if(temp__4657__auto____$1){
var seq__37799__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37799__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__37799__$1);
var G__37862 = cljs.core.chunk_rest.call(null,seq__37799__$1);
var G__37863 = c__25857__auto__;
var G__37864 = cljs.core.count.call(null,c__25857__auto__);
var G__37865 = (0);
seq__37799 = G__37862;
chunk__37800 = G__37863;
count__37801 = G__37864;
i__37802 = G__37865;
continue;
} else {
var role = cljs.core.first.call(null,seq__37799__$1);
var temp__4657__auto___37866__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37866__$2)){
var spec_37867 = temp__4657__auto___37866__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37867));
} else {
}

var G__37868 = cljs.core.next.call(null,seq__37799__$1);
var G__37869 = null;
var G__37870 = (0);
var G__37871 = (0);
seq__37799 = G__37868;
chunk__37800 = G__37869;
count__37801 = G__37870;
i__37802 = G__37871;
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

//# sourceMappingURL=repl.js.map?rel=1484456863047
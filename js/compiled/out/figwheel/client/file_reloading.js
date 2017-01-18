// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25046__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25046__auto__){
return or__25046__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25046__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42533_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42533_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42538 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42539 = null;
var count__42540 = (0);
var i__42541 = (0);
while(true){
if((i__42541 < count__42540)){
var n = cljs.core._nth.call(null,chunk__42539,i__42541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42542 = seq__42538;
var G__42543 = chunk__42539;
var G__42544 = count__42540;
var G__42545 = (i__42541 + (1));
seq__42538 = G__42542;
chunk__42539 = G__42543;
count__42540 = G__42544;
i__42541 = G__42545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42538);
if(temp__4657__auto__){
var seq__42538__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42538__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__42538__$1);
var G__42546 = cljs.core.chunk_rest.call(null,seq__42538__$1);
var G__42547 = c__25857__auto__;
var G__42548 = cljs.core.count.call(null,c__25857__auto__);
var G__42549 = (0);
seq__42538 = G__42546;
chunk__42539 = G__42547;
count__42540 = G__42548;
i__42541 = G__42549;
continue;
} else {
var n = cljs.core.first.call(null,seq__42538__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42550 = cljs.core.next.call(null,seq__42538__$1);
var G__42551 = null;
var G__42552 = (0);
var G__42553 = (0);
seq__42538 = G__42550;
chunk__42539 = G__42551;
count__42540 = G__42552;
i__42541 = G__42553;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42604_42615 = cljs.core.seq.call(null,deps);
var chunk__42605_42616 = null;
var count__42606_42617 = (0);
var i__42607_42618 = (0);
while(true){
if((i__42607_42618 < count__42606_42617)){
var dep_42619 = cljs.core._nth.call(null,chunk__42605_42616,i__42607_42618);
topo_sort_helper_STAR_.call(null,dep_42619,(depth + (1)),state);

var G__42620 = seq__42604_42615;
var G__42621 = chunk__42605_42616;
var G__42622 = count__42606_42617;
var G__42623 = (i__42607_42618 + (1));
seq__42604_42615 = G__42620;
chunk__42605_42616 = G__42621;
count__42606_42617 = G__42622;
i__42607_42618 = G__42623;
continue;
} else {
var temp__4657__auto___42624 = cljs.core.seq.call(null,seq__42604_42615);
if(temp__4657__auto___42624){
var seq__42604_42625__$1 = temp__4657__auto___42624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42604_42625__$1)){
var c__25857__auto___42626 = cljs.core.chunk_first.call(null,seq__42604_42625__$1);
var G__42627 = cljs.core.chunk_rest.call(null,seq__42604_42625__$1);
var G__42628 = c__25857__auto___42626;
var G__42629 = cljs.core.count.call(null,c__25857__auto___42626);
var G__42630 = (0);
seq__42604_42615 = G__42627;
chunk__42605_42616 = G__42628;
count__42606_42617 = G__42629;
i__42607_42618 = G__42630;
continue;
} else {
var dep_42631 = cljs.core.first.call(null,seq__42604_42625__$1);
topo_sort_helper_STAR_.call(null,dep_42631,(depth + (1)),state);

var G__42632 = cljs.core.next.call(null,seq__42604_42625__$1);
var G__42633 = null;
var G__42634 = (0);
var G__42635 = (0);
seq__42604_42615 = G__42632;
chunk__42605_42616 = G__42633;
count__42606_42617 = G__42634;
i__42607_42618 = G__42635;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42608){
var vec__42612 = p__42608;
var seq__42613 = cljs.core.seq.call(null,vec__42612);
var first__42614 = cljs.core.first.call(null,seq__42613);
var seq__42613__$1 = cljs.core.next.call(null,seq__42613);
var x = first__42614;
var xs = seq__42613__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42612,seq__42613,first__42614,seq__42613__$1,x,xs,get_deps__$1){
return (function (p1__42554_SHARP_){
return clojure.set.difference.call(null,p1__42554_SHARP_,x);
});})(vec__42612,seq__42613,first__42614,seq__42613__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42648 = cljs.core.seq.call(null,provides);
var chunk__42649 = null;
var count__42650 = (0);
var i__42651 = (0);
while(true){
if((i__42651 < count__42650)){
var prov = cljs.core._nth.call(null,chunk__42649,i__42651);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42652_42660 = cljs.core.seq.call(null,requires);
var chunk__42653_42661 = null;
var count__42654_42662 = (0);
var i__42655_42663 = (0);
while(true){
if((i__42655_42663 < count__42654_42662)){
var req_42664 = cljs.core._nth.call(null,chunk__42653_42661,i__42655_42663);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42664,prov);

var G__42665 = seq__42652_42660;
var G__42666 = chunk__42653_42661;
var G__42667 = count__42654_42662;
var G__42668 = (i__42655_42663 + (1));
seq__42652_42660 = G__42665;
chunk__42653_42661 = G__42666;
count__42654_42662 = G__42667;
i__42655_42663 = G__42668;
continue;
} else {
var temp__4657__auto___42669 = cljs.core.seq.call(null,seq__42652_42660);
if(temp__4657__auto___42669){
var seq__42652_42670__$1 = temp__4657__auto___42669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42652_42670__$1)){
var c__25857__auto___42671 = cljs.core.chunk_first.call(null,seq__42652_42670__$1);
var G__42672 = cljs.core.chunk_rest.call(null,seq__42652_42670__$1);
var G__42673 = c__25857__auto___42671;
var G__42674 = cljs.core.count.call(null,c__25857__auto___42671);
var G__42675 = (0);
seq__42652_42660 = G__42672;
chunk__42653_42661 = G__42673;
count__42654_42662 = G__42674;
i__42655_42663 = G__42675;
continue;
} else {
var req_42676 = cljs.core.first.call(null,seq__42652_42670__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42676,prov);

var G__42677 = cljs.core.next.call(null,seq__42652_42670__$1);
var G__42678 = null;
var G__42679 = (0);
var G__42680 = (0);
seq__42652_42660 = G__42677;
chunk__42653_42661 = G__42678;
count__42654_42662 = G__42679;
i__42655_42663 = G__42680;
continue;
}
} else {
}
}
break;
}

var G__42681 = seq__42648;
var G__42682 = chunk__42649;
var G__42683 = count__42650;
var G__42684 = (i__42651 + (1));
seq__42648 = G__42681;
chunk__42649 = G__42682;
count__42650 = G__42683;
i__42651 = G__42684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42648);
if(temp__4657__auto__){
var seq__42648__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42648__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__42648__$1);
var G__42685 = cljs.core.chunk_rest.call(null,seq__42648__$1);
var G__42686 = c__25857__auto__;
var G__42687 = cljs.core.count.call(null,c__25857__auto__);
var G__42688 = (0);
seq__42648 = G__42685;
chunk__42649 = G__42686;
count__42650 = G__42687;
i__42651 = G__42688;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42648__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42656_42689 = cljs.core.seq.call(null,requires);
var chunk__42657_42690 = null;
var count__42658_42691 = (0);
var i__42659_42692 = (0);
while(true){
if((i__42659_42692 < count__42658_42691)){
var req_42693 = cljs.core._nth.call(null,chunk__42657_42690,i__42659_42692);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42693,prov);

var G__42694 = seq__42656_42689;
var G__42695 = chunk__42657_42690;
var G__42696 = count__42658_42691;
var G__42697 = (i__42659_42692 + (1));
seq__42656_42689 = G__42694;
chunk__42657_42690 = G__42695;
count__42658_42691 = G__42696;
i__42659_42692 = G__42697;
continue;
} else {
var temp__4657__auto___42698__$1 = cljs.core.seq.call(null,seq__42656_42689);
if(temp__4657__auto___42698__$1){
var seq__42656_42699__$1 = temp__4657__auto___42698__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42656_42699__$1)){
var c__25857__auto___42700 = cljs.core.chunk_first.call(null,seq__42656_42699__$1);
var G__42701 = cljs.core.chunk_rest.call(null,seq__42656_42699__$1);
var G__42702 = c__25857__auto___42700;
var G__42703 = cljs.core.count.call(null,c__25857__auto___42700);
var G__42704 = (0);
seq__42656_42689 = G__42701;
chunk__42657_42690 = G__42702;
count__42658_42691 = G__42703;
i__42659_42692 = G__42704;
continue;
} else {
var req_42705 = cljs.core.first.call(null,seq__42656_42699__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42705,prov);

var G__42706 = cljs.core.next.call(null,seq__42656_42699__$1);
var G__42707 = null;
var G__42708 = (0);
var G__42709 = (0);
seq__42656_42689 = G__42706;
chunk__42657_42690 = G__42707;
count__42658_42691 = G__42708;
i__42659_42692 = G__42709;
continue;
}
} else {
}
}
break;
}

var G__42710 = cljs.core.next.call(null,seq__42648__$1);
var G__42711 = null;
var G__42712 = (0);
var G__42713 = (0);
seq__42648 = G__42710;
chunk__42649 = G__42711;
count__42650 = G__42712;
i__42651 = G__42713;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42718_42722 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42719_42723 = null;
var count__42720_42724 = (0);
var i__42721_42725 = (0);
while(true){
if((i__42721_42725 < count__42720_42724)){
var ns_42726 = cljs.core._nth.call(null,chunk__42719_42723,i__42721_42725);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42726);

var G__42727 = seq__42718_42722;
var G__42728 = chunk__42719_42723;
var G__42729 = count__42720_42724;
var G__42730 = (i__42721_42725 + (1));
seq__42718_42722 = G__42727;
chunk__42719_42723 = G__42728;
count__42720_42724 = G__42729;
i__42721_42725 = G__42730;
continue;
} else {
var temp__4657__auto___42731 = cljs.core.seq.call(null,seq__42718_42722);
if(temp__4657__auto___42731){
var seq__42718_42732__$1 = temp__4657__auto___42731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42718_42732__$1)){
var c__25857__auto___42733 = cljs.core.chunk_first.call(null,seq__42718_42732__$1);
var G__42734 = cljs.core.chunk_rest.call(null,seq__42718_42732__$1);
var G__42735 = c__25857__auto___42733;
var G__42736 = cljs.core.count.call(null,c__25857__auto___42733);
var G__42737 = (0);
seq__42718_42722 = G__42734;
chunk__42719_42723 = G__42735;
count__42720_42724 = G__42736;
i__42721_42725 = G__42737;
continue;
} else {
var ns_42738 = cljs.core.first.call(null,seq__42718_42732__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42738);

var G__42739 = cljs.core.next.call(null,seq__42718_42732__$1);
var G__42740 = null;
var G__42741 = (0);
var G__42742 = (0);
seq__42718_42722 = G__42739;
chunk__42719_42723 = G__42740;
count__42720_42724 = G__42741;
i__42721_42725 = G__42742;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25046__auto__ = goog.require__;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42743__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42744__i = 0, G__42744__a = new Array(arguments.length -  0);
while (G__42744__i < G__42744__a.length) {G__42744__a[G__42744__i] = arguments[G__42744__i + 0]; ++G__42744__i;}
  args = new cljs.core.IndexedSeq(G__42744__a,0);
} 
return G__42743__delegate.call(this,args);};
G__42743.cljs$lang$maxFixedArity = 0;
G__42743.cljs$lang$applyTo = (function (arglist__42745){
var args = cljs.core.seq(arglist__42745);
return G__42743__delegate(args);
});
G__42743.cljs$core$IFn$_invoke$arity$variadic = G__42743__delegate;
return G__42743;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42747 = cljs.core._EQ_;
var expr__42748 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42747.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42748))){
var path_parts = ((function (pred__42747,expr__42748){
return (function (p1__42746_SHARP_){
return clojure.string.split.call(null,p1__42746_SHARP_,/[\/\\]/);
});})(pred__42747,expr__42748))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42747,expr__42748){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42750){if((e42750 instanceof Error)){
var e = e42750;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42750;

}
}})());
});
;})(path_parts,sep,root,pred__42747,expr__42748))
} else {
if(cljs.core.truth_(pred__42747.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42748))){
return ((function (pred__42747,expr__42748){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__42747,expr__42748){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42747,expr__42748))
);

return deferred.addErrback(((function (deferred,pred__42747,expr__42748){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42747,expr__42748))
);
});
;})(pred__42747,expr__42748))
} else {
return ((function (pred__42747,expr__42748){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42747,expr__42748))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42751,callback){
var map__42754 = p__42751;
var map__42754__$1 = ((((!((map__42754 == null)))?((((map__42754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42754):map__42754);
var file_msg = map__42754__$1;
var request_url = cljs.core.get.call(null,map__42754__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42754,map__42754__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42754,map__42754__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__){
return (function (state_42778){
var state_val_42779 = (state_42778[(1)]);
if((state_val_42779 === (7))){
var inst_42774 = (state_42778[(2)]);
var state_42778__$1 = state_42778;
var statearr_42780_42800 = state_42778__$1;
(statearr_42780_42800[(2)] = inst_42774);

(statearr_42780_42800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (1))){
var state_42778__$1 = state_42778;
var statearr_42781_42801 = state_42778__$1;
(statearr_42781_42801[(2)] = null);

(statearr_42781_42801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (4))){
var inst_42758 = (state_42778[(7)]);
var inst_42758__$1 = (state_42778[(2)]);
var state_42778__$1 = (function (){var statearr_42782 = state_42778;
(statearr_42782[(7)] = inst_42758__$1);

return statearr_42782;
})();
if(cljs.core.truth_(inst_42758__$1)){
var statearr_42783_42802 = state_42778__$1;
(statearr_42783_42802[(1)] = (5));

} else {
var statearr_42784_42803 = state_42778__$1;
(statearr_42784_42803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (6))){
var state_42778__$1 = state_42778;
var statearr_42785_42804 = state_42778__$1;
(statearr_42785_42804[(2)] = null);

(statearr_42785_42804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (3))){
var inst_42776 = (state_42778[(2)]);
var state_42778__$1 = state_42778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42778__$1,inst_42776);
} else {
if((state_val_42779 === (2))){
var state_42778__$1 = state_42778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42778__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42779 === (11))){
var inst_42770 = (state_42778[(2)]);
var state_42778__$1 = (function (){var statearr_42786 = state_42778;
(statearr_42786[(8)] = inst_42770);

return statearr_42786;
})();
var statearr_42787_42805 = state_42778__$1;
(statearr_42787_42805[(2)] = null);

(statearr_42787_42805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (9))){
var inst_42762 = (state_42778[(9)]);
var inst_42764 = (state_42778[(10)]);
var inst_42766 = inst_42764.call(null,inst_42762);
var state_42778__$1 = state_42778;
var statearr_42788_42806 = state_42778__$1;
(statearr_42788_42806[(2)] = inst_42766);

(statearr_42788_42806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (5))){
var inst_42758 = (state_42778[(7)]);
var inst_42760 = figwheel.client.file_reloading.blocking_load.call(null,inst_42758);
var state_42778__$1 = state_42778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42778__$1,(8),inst_42760);
} else {
if((state_val_42779 === (10))){
var inst_42762 = (state_42778[(9)]);
var inst_42768 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42762);
var state_42778__$1 = state_42778;
var statearr_42789_42807 = state_42778__$1;
(statearr_42789_42807[(2)] = inst_42768);

(statearr_42789_42807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42779 === (8))){
var inst_42764 = (state_42778[(10)]);
var inst_42758 = (state_42778[(7)]);
var inst_42762 = (state_42778[(2)]);
var inst_42763 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42764__$1 = cljs.core.get.call(null,inst_42763,inst_42758);
var state_42778__$1 = (function (){var statearr_42790 = state_42778;
(statearr_42790[(9)] = inst_42762);

(statearr_42790[(10)] = inst_42764__$1);

return statearr_42790;
})();
if(cljs.core.truth_(inst_42764__$1)){
var statearr_42791_42808 = state_42778__$1;
(statearr_42791_42808[(1)] = (9));

} else {
var statearr_42792_42809 = state_42778__$1;
(statearr_42792_42809[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30460__auto__ = null;
var figwheel$client$file_reloading$state_machine__30460__auto____0 = (function (){
var statearr_42796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42796[(0)] = figwheel$client$file_reloading$state_machine__30460__auto__);

(statearr_42796[(1)] = (1));

return statearr_42796;
});
var figwheel$client$file_reloading$state_machine__30460__auto____1 = (function (state_42778){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_42778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e42797){if((e42797 instanceof Object)){
var ex__30463__auto__ = e42797;
var statearr_42798_42810 = state_42778;
(statearr_42798_42810[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42811 = state_42778;
state_42778 = G__42811;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30460__auto__ = function(state_42778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30460__auto____1.call(this,state_42778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30460__auto____0;
figwheel$client$file_reloading$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30460__auto____1;
return figwheel$client$file_reloading$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__))
})();
var state__30482__auto__ = (function (){var statearr_42799 = f__30481__auto__.call(null);
(statearr_42799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_42799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__))
);

return c__30480__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42812,callback){
var map__42815 = p__42812;
var map__42815__$1 = ((((!((map__42815 == null)))?((((map__42815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42815):map__42815);
var file_msg = map__42815__$1;
var namespace = cljs.core.get.call(null,map__42815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42815,map__42815__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42815,map__42815__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42817){
var map__42820 = p__42817;
var map__42820__$1 = ((((!((map__42820 == null)))?((((map__42820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42820):map__42820);
var file_msg = map__42820__$1;
var namespace = cljs.core.get.call(null,map__42820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25034__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25034__auto__){
var or__25046__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25034__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42822,callback){
var map__42825 = p__42822;
var map__42825__$1 = ((((!((map__42825 == null)))?((((map__42825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42825):map__42825);
var file_msg = map__42825__$1;
var request_url = cljs.core.get.call(null,map__42825__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30480__auto___42929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___42929,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___42929,out){
return (function (state_42911){
var state_val_42912 = (state_42911[(1)]);
if((state_val_42912 === (1))){
var inst_42885 = cljs.core.seq.call(null,files);
var inst_42886 = cljs.core.first.call(null,inst_42885);
var inst_42887 = cljs.core.next.call(null,inst_42885);
var inst_42888 = files;
var state_42911__$1 = (function (){var statearr_42913 = state_42911;
(statearr_42913[(7)] = inst_42886);

(statearr_42913[(8)] = inst_42887);

(statearr_42913[(9)] = inst_42888);

return statearr_42913;
})();
var statearr_42914_42930 = state_42911__$1;
(statearr_42914_42930[(2)] = null);

(statearr_42914_42930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (2))){
var inst_42894 = (state_42911[(10)]);
var inst_42888 = (state_42911[(9)]);
var inst_42893 = cljs.core.seq.call(null,inst_42888);
var inst_42894__$1 = cljs.core.first.call(null,inst_42893);
var inst_42895 = cljs.core.next.call(null,inst_42893);
var inst_42896 = (inst_42894__$1 == null);
var inst_42897 = cljs.core.not.call(null,inst_42896);
var state_42911__$1 = (function (){var statearr_42915 = state_42911;
(statearr_42915[(11)] = inst_42895);

(statearr_42915[(10)] = inst_42894__$1);

return statearr_42915;
})();
if(inst_42897){
var statearr_42916_42931 = state_42911__$1;
(statearr_42916_42931[(1)] = (4));

} else {
var statearr_42917_42932 = state_42911__$1;
(statearr_42917_42932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (3))){
var inst_42909 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42911__$1,inst_42909);
} else {
if((state_val_42912 === (4))){
var inst_42894 = (state_42911[(10)]);
var inst_42899 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42894);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42911__$1,(7),inst_42899);
} else {
if((state_val_42912 === (5))){
var inst_42905 = cljs.core.async.close_BANG_.call(null,out);
var state_42911__$1 = state_42911;
var statearr_42918_42933 = state_42911__$1;
(statearr_42918_42933[(2)] = inst_42905);

(statearr_42918_42933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (6))){
var inst_42907 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42919_42934 = state_42911__$1;
(statearr_42919_42934[(2)] = inst_42907);

(statearr_42919_42934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (7))){
var inst_42895 = (state_42911[(11)]);
var inst_42901 = (state_42911[(2)]);
var inst_42902 = cljs.core.async.put_BANG_.call(null,out,inst_42901);
var inst_42888 = inst_42895;
var state_42911__$1 = (function (){var statearr_42920 = state_42911;
(statearr_42920[(12)] = inst_42902);

(statearr_42920[(9)] = inst_42888);

return statearr_42920;
})();
var statearr_42921_42935 = state_42911__$1;
(statearr_42921_42935[(2)] = null);

(statearr_42921_42935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30480__auto___42929,out))
;
return ((function (switch__30459__auto__,c__30480__auto___42929,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____0 = (function (){
var statearr_42925 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42925[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__);

(statearr_42925[(1)] = (1));

return statearr_42925;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____1 = (function (state_42911){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_42911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e42926){if((e42926 instanceof Object)){
var ex__30463__auto__ = e42926;
var statearr_42927_42936 = state_42911;
(statearr_42927_42936[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42937 = state_42911;
state_42911 = G__42937;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__ = function(state_42911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____1.call(this,state_42911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___42929,out))
})();
var state__30482__auto__ = (function (){var statearr_42928 = f__30481__auto__.call(null);
(statearr_42928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___42929);

return statearr_42928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___42929,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42938,opts){
var map__42942 = p__42938;
var map__42942__$1 = ((((!((map__42942 == null)))?((((map__42942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42942):map__42942);
var eval_body__$1 = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25034__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25034__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25034__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42944){var e = e42944;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42945_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42945_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42954){
var vec__42955 = p__42954;
var k = cljs.core.nth.call(null,vec__42955,(0),null);
var v = cljs.core.nth.call(null,vec__42955,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42958){
var vec__42959 = p__42958;
var k = cljs.core.nth.call(null,vec__42959,(0),null);
var v = cljs.core.nth.call(null,vec__42959,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42965,p__42966){
var map__43213 = p__42965;
var map__43213__$1 = ((((!((map__43213 == null)))?((((map__43213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43213):map__43213);
var opts = map__43213__$1;
var before_jsload = cljs.core.get.call(null,map__43213__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43213__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43213__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43214 = p__42966;
var map__43214__$1 = ((((!((map__43214 == null)))?((((map__43214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43214):map__43214);
var msg = map__43214__$1;
var files = cljs.core.get.call(null,map__43214__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43214__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43214__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43367){
var state_val_43368 = (state_43367[(1)]);
if((state_val_43368 === (7))){
var inst_43228 = (state_43367[(7)]);
var inst_43230 = (state_43367[(8)]);
var inst_43231 = (state_43367[(9)]);
var inst_43229 = (state_43367[(10)]);
var inst_43236 = cljs.core._nth.call(null,inst_43229,inst_43231);
var inst_43237 = figwheel.client.file_reloading.eval_body.call(null,inst_43236,opts);
var inst_43238 = (inst_43231 + (1));
var tmp43369 = inst_43228;
var tmp43370 = inst_43230;
var tmp43371 = inst_43229;
var inst_43228__$1 = tmp43369;
var inst_43229__$1 = tmp43371;
var inst_43230__$1 = tmp43370;
var inst_43231__$1 = inst_43238;
var state_43367__$1 = (function (){var statearr_43372 = state_43367;
(statearr_43372[(7)] = inst_43228__$1);

(statearr_43372[(11)] = inst_43237);

(statearr_43372[(8)] = inst_43230__$1);

(statearr_43372[(9)] = inst_43231__$1);

(statearr_43372[(10)] = inst_43229__$1);

return statearr_43372;
})();
var statearr_43373_43459 = state_43367__$1;
(statearr_43373_43459[(2)] = null);

(statearr_43373_43459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (20))){
var inst_43271 = (state_43367[(12)]);
var inst_43279 = figwheel.client.file_reloading.sort_files.call(null,inst_43271);
var state_43367__$1 = state_43367;
var statearr_43374_43460 = state_43367__$1;
(statearr_43374_43460[(2)] = inst_43279);

(statearr_43374_43460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (27))){
var state_43367__$1 = state_43367;
var statearr_43375_43461 = state_43367__$1;
(statearr_43375_43461[(2)] = null);

(statearr_43375_43461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (1))){
var inst_43220 = (state_43367[(13)]);
var inst_43217 = before_jsload.call(null,files);
var inst_43218 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43219 = (function (){return ((function (inst_43220,inst_43217,inst_43218,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42962_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42962_SHARP_);
});
;})(inst_43220,inst_43217,inst_43218,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43220__$1 = cljs.core.filter.call(null,inst_43219,files);
var inst_43221 = cljs.core.not_empty.call(null,inst_43220__$1);
var state_43367__$1 = (function (){var statearr_43376 = state_43367;
(statearr_43376[(14)] = inst_43217);

(statearr_43376[(15)] = inst_43218);

(statearr_43376[(13)] = inst_43220__$1);

return statearr_43376;
})();
if(cljs.core.truth_(inst_43221)){
var statearr_43377_43462 = state_43367__$1;
(statearr_43377_43462[(1)] = (2));

} else {
var statearr_43378_43463 = state_43367__$1;
(statearr_43378_43463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (24))){
var state_43367__$1 = state_43367;
var statearr_43379_43464 = state_43367__$1;
(statearr_43379_43464[(2)] = null);

(statearr_43379_43464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (39))){
var inst_43321 = (state_43367[(16)]);
var state_43367__$1 = state_43367;
var statearr_43380_43465 = state_43367__$1;
(statearr_43380_43465[(2)] = inst_43321);

(statearr_43380_43465[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (46))){
var inst_43362 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43381_43466 = state_43367__$1;
(statearr_43381_43466[(2)] = inst_43362);

(statearr_43381_43466[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (4))){
var inst_43265 = (state_43367[(2)]);
var inst_43266 = cljs.core.List.EMPTY;
var inst_43267 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43266);
var inst_43268 = (function (){return ((function (inst_43265,inst_43266,inst_43267,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42963_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42963_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42963_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_43265,inst_43266,inst_43267,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43269 = cljs.core.filter.call(null,inst_43268,files);
var inst_43270 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43271 = cljs.core.concat.call(null,inst_43269,inst_43270);
var state_43367__$1 = (function (){var statearr_43382 = state_43367;
(statearr_43382[(17)] = inst_43267);

(statearr_43382[(18)] = inst_43265);

(statearr_43382[(12)] = inst_43271);

return statearr_43382;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43383_43467 = state_43367__$1;
(statearr_43383_43467[(1)] = (16));

} else {
var statearr_43384_43468 = state_43367__$1;
(statearr_43384_43468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (15))){
var inst_43255 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43385_43469 = state_43367__$1;
(statearr_43385_43469[(2)] = inst_43255);

(statearr_43385_43469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (21))){
var inst_43281 = (state_43367[(19)]);
var inst_43281__$1 = (state_43367[(2)]);
var inst_43282 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43281__$1);
var state_43367__$1 = (function (){var statearr_43386 = state_43367;
(statearr_43386[(19)] = inst_43281__$1);

return statearr_43386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43367__$1,(22),inst_43282);
} else {
if((state_val_43368 === (31))){
var inst_43365 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43367__$1,inst_43365);
} else {
if((state_val_43368 === (32))){
var inst_43321 = (state_43367[(16)]);
var inst_43326 = inst_43321.cljs$lang$protocol_mask$partition0$;
var inst_43327 = (inst_43326 & (64));
var inst_43328 = inst_43321.cljs$core$ISeq$;
var inst_43329 = (inst_43327) || (inst_43328);
var state_43367__$1 = state_43367;
if(cljs.core.truth_(inst_43329)){
var statearr_43387_43470 = state_43367__$1;
(statearr_43387_43470[(1)] = (35));

} else {
var statearr_43388_43471 = state_43367__$1;
(statearr_43388_43471[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (40))){
var inst_43342 = (state_43367[(20)]);
var inst_43341 = (state_43367[(2)]);
var inst_43342__$1 = cljs.core.get.call(null,inst_43341,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43343 = cljs.core.get.call(null,inst_43341,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43344 = cljs.core.not_empty.call(null,inst_43342__$1);
var state_43367__$1 = (function (){var statearr_43389 = state_43367;
(statearr_43389[(21)] = inst_43343);

(statearr_43389[(20)] = inst_43342__$1);

return statearr_43389;
})();
if(cljs.core.truth_(inst_43344)){
var statearr_43390_43472 = state_43367__$1;
(statearr_43390_43472[(1)] = (41));

} else {
var statearr_43391_43473 = state_43367__$1;
(statearr_43391_43473[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (33))){
var state_43367__$1 = state_43367;
var statearr_43392_43474 = state_43367__$1;
(statearr_43392_43474[(2)] = false);

(statearr_43392_43474[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (13))){
var inst_43241 = (state_43367[(22)]);
var inst_43245 = cljs.core.chunk_first.call(null,inst_43241);
var inst_43246 = cljs.core.chunk_rest.call(null,inst_43241);
var inst_43247 = cljs.core.count.call(null,inst_43245);
var inst_43228 = inst_43246;
var inst_43229 = inst_43245;
var inst_43230 = inst_43247;
var inst_43231 = (0);
var state_43367__$1 = (function (){var statearr_43393 = state_43367;
(statearr_43393[(7)] = inst_43228);

(statearr_43393[(8)] = inst_43230);

(statearr_43393[(9)] = inst_43231);

(statearr_43393[(10)] = inst_43229);

return statearr_43393;
})();
var statearr_43394_43475 = state_43367__$1;
(statearr_43394_43475[(2)] = null);

(statearr_43394_43475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (22))){
var inst_43284 = (state_43367[(23)]);
var inst_43285 = (state_43367[(24)]);
var inst_43281 = (state_43367[(19)]);
var inst_43289 = (state_43367[(25)]);
var inst_43284__$1 = (state_43367[(2)]);
var inst_43285__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43284__$1);
var inst_43286 = (function (){var all_files = inst_43281;
var res_SINGLEQUOTE_ = inst_43284__$1;
var res = inst_43285__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43284,inst_43285,inst_43281,inst_43289,inst_43284__$1,inst_43285__$1,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42964_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42964_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43284,inst_43285,inst_43281,inst_43289,inst_43284__$1,inst_43285__$1,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43287 = cljs.core.filter.call(null,inst_43286,inst_43284__$1);
var inst_43288 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43289__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43288);
var inst_43290 = cljs.core.not_empty.call(null,inst_43289__$1);
var state_43367__$1 = (function (){var statearr_43395 = state_43367;
(statearr_43395[(23)] = inst_43284__$1);

(statearr_43395[(24)] = inst_43285__$1);

(statearr_43395[(25)] = inst_43289__$1);

(statearr_43395[(26)] = inst_43287);

return statearr_43395;
})();
if(cljs.core.truth_(inst_43290)){
var statearr_43396_43476 = state_43367__$1;
(statearr_43396_43476[(1)] = (23));

} else {
var statearr_43397_43477 = state_43367__$1;
(statearr_43397_43477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (36))){
var state_43367__$1 = state_43367;
var statearr_43398_43478 = state_43367__$1;
(statearr_43398_43478[(2)] = false);

(statearr_43398_43478[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (41))){
var inst_43342 = (state_43367[(20)]);
var inst_43346 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43347 = cljs.core.map.call(null,inst_43346,inst_43342);
var inst_43348 = cljs.core.pr_str.call(null,inst_43347);
var inst_43349 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43348)].join('');
var inst_43350 = figwheel.client.utils.log.call(null,inst_43349);
var state_43367__$1 = state_43367;
var statearr_43399_43479 = state_43367__$1;
(statearr_43399_43479[(2)] = inst_43350);

(statearr_43399_43479[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (43))){
var inst_43343 = (state_43367[(21)]);
var inst_43353 = (state_43367[(2)]);
var inst_43354 = cljs.core.not_empty.call(null,inst_43343);
var state_43367__$1 = (function (){var statearr_43400 = state_43367;
(statearr_43400[(27)] = inst_43353);

return statearr_43400;
})();
if(cljs.core.truth_(inst_43354)){
var statearr_43401_43480 = state_43367__$1;
(statearr_43401_43480[(1)] = (44));

} else {
var statearr_43402_43481 = state_43367__$1;
(statearr_43402_43481[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (29))){
var inst_43284 = (state_43367[(23)]);
var inst_43285 = (state_43367[(24)]);
var inst_43281 = (state_43367[(19)]);
var inst_43321 = (state_43367[(16)]);
var inst_43289 = (state_43367[(25)]);
var inst_43287 = (state_43367[(26)]);
var inst_43317 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43320 = (function (){var all_files = inst_43281;
var res_SINGLEQUOTE_ = inst_43284;
var res = inst_43285;
var files_not_loaded = inst_43287;
var dependencies_that_loaded = inst_43289;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43321,inst_43289,inst_43287,inst_43317,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43319){
var map__43403 = p__43319;
var map__43403__$1 = ((((!((map__43403 == null)))?((((map__43403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43403):map__43403);
var namespace = cljs.core.get.call(null,map__43403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43321,inst_43289,inst_43287,inst_43317,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43321__$1 = cljs.core.group_by.call(null,inst_43320,inst_43287);
var inst_43323 = (inst_43321__$1 == null);
var inst_43324 = cljs.core.not.call(null,inst_43323);
var state_43367__$1 = (function (){var statearr_43405 = state_43367;
(statearr_43405[(28)] = inst_43317);

(statearr_43405[(16)] = inst_43321__$1);

return statearr_43405;
})();
if(inst_43324){
var statearr_43406_43482 = state_43367__$1;
(statearr_43406_43482[(1)] = (32));

} else {
var statearr_43407_43483 = state_43367__$1;
(statearr_43407_43483[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (44))){
var inst_43343 = (state_43367[(21)]);
var inst_43356 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43343);
var inst_43357 = cljs.core.pr_str.call(null,inst_43356);
var inst_43358 = [cljs.core.str("not required: "),cljs.core.str(inst_43357)].join('');
var inst_43359 = figwheel.client.utils.log.call(null,inst_43358);
var state_43367__$1 = state_43367;
var statearr_43408_43484 = state_43367__$1;
(statearr_43408_43484[(2)] = inst_43359);

(statearr_43408_43484[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (6))){
var inst_43262 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43409_43485 = state_43367__$1;
(statearr_43409_43485[(2)] = inst_43262);

(statearr_43409_43485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (28))){
var inst_43287 = (state_43367[(26)]);
var inst_43314 = (state_43367[(2)]);
var inst_43315 = cljs.core.not_empty.call(null,inst_43287);
var state_43367__$1 = (function (){var statearr_43410 = state_43367;
(statearr_43410[(29)] = inst_43314);

return statearr_43410;
})();
if(cljs.core.truth_(inst_43315)){
var statearr_43411_43486 = state_43367__$1;
(statearr_43411_43486[(1)] = (29));

} else {
var statearr_43412_43487 = state_43367__$1;
(statearr_43412_43487[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (25))){
var inst_43285 = (state_43367[(24)]);
var inst_43301 = (state_43367[(2)]);
var inst_43302 = cljs.core.not_empty.call(null,inst_43285);
var state_43367__$1 = (function (){var statearr_43413 = state_43367;
(statearr_43413[(30)] = inst_43301);

return statearr_43413;
})();
if(cljs.core.truth_(inst_43302)){
var statearr_43414_43488 = state_43367__$1;
(statearr_43414_43488[(1)] = (26));

} else {
var statearr_43415_43489 = state_43367__$1;
(statearr_43415_43489[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (34))){
var inst_43336 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
if(cljs.core.truth_(inst_43336)){
var statearr_43416_43490 = state_43367__$1;
(statearr_43416_43490[(1)] = (38));

} else {
var statearr_43417_43491 = state_43367__$1;
(statearr_43417_43491[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (17))){
var state_43367__$1 = state_43367;
var statearr_43418_43492 = state_43367__$1;
(statearr_43418_43492[(2)] = recompile_dependents);

(statearr_43418_43492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (3))){
var state_43367__$1 = state_43367;
var statearr_43419_43493 = state_43367__$1;
(statearr_43419_43493[(2)] = null);

(statearr_43419_43493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (12))){
var inst_43258 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43420_43494 = state_43367__$1;
(statearr_43420_43494[(2)] = inst_43258);

(statearr_43420_43494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (2))){
var inst_43220 = (state_43367[(13)]);
var inst_43227 = cljs.core.seq.call(null,inst_43220);
var inst_43228 = inst_43227;
var inst_43229 = null;
var inst_43230 = (0);
var inst_43231 = (0);
var state_43367__$1 = (function (){var statearr_43421 = state_43367;
(statearr_43421[(7)] = inst_43228);

(statearr_43421[(8)] = inst_43230);

(statearr_43421[(9)] = inst_43231);

(statearr_43421[(10)] = inst_43229);

return statearr_43421;
})();
var statearr_43422_43495 = state_43367__$1;
(statearr_43422_43495[(2)] = null);

(statearr_43422_43495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (23))){
var inst_43284 = (state_43367[(23)]);
var inst_43285 = (state_43367[(24)]);
var inst_43281 = (state_43367[(19)]);
var inst_43289 = (state_43367[(25)]);
var inst_43287 = (state_43367[(26)]);
var inst_43292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43294 = (function (){var all_files = inst_43281;
var res_SINGLEQUOTE_ = inst_43284;
var res = inst_43285;
var files_not_loaded = inst_43287;
var dependencies_that_loaded = inst_43289;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43292,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43293){
var map__43423 = p__43293;
var map__43423__$1 = ((((!((map__43423 == null)))?((((map__43423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43423):map__43423);
var request_url = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43292,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43295 = cljs.core.reverse.call(null,inst_43289);
var inst_43296 = cljs.core.map.call(null,inst_43294,inst_43295);
var inst_43297 = cljs.core.pr_str.call(null,inst_43296);
var inst_43298 = figwheel.client.utils.log.call(null,inst_43297);
var state_43367__$1 = (function (){var statearr_43425 = state_43367;
(statearr_43425[(31)] = inst_43292);

return statearr_43425;
})();
var statearr_43426_43496 = state_43367__$1;
(statearr_43426_43496[(2)] = inst_43298);

(statearr_43426_43496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (35))){
var state_43367__$1 = state_43367;
var statearr_43427_43497 = state_43367__$1;
(statearr_43427_43497[(2)] = true);

(statearr_43427_43497[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (19))){
var inst_43271 = (state_43367[(12)]);
var inst_43277 = figwheel.client.file_reloading.expand_files.call(null,inst_43271);
var state_43367__$1 = state_43367;
var statearr_43428_43498 = state_43367__$1;
(statearr_43428_43498[(2)] = inst_43277);

(statearr_43428_43498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (11))){
var state_43367__$1 = state_43367;
var statearr_43429_43499 = state_43367__$1;
(statearr_43429_43499[(2)] = null);

(statearr_43429_43499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (9))){
var inst_43260 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43430_43500 = state_43367__$1;
(statearr_43430_43500[(2)] = inst_43260);

(statearr_43430_43500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (5))){
var inst_43230 = (state_43367[(8)]);
var inst_43231 = (state_43367[(9)]);
var inst_43233 = (inst_43231 < inst_43230);
var inst_43234 = inst_43233;
var state_43367__$1 = state_43367;
if(cljs.core.truth_(inst_43234)){
var statearr_43431_43501 = state_43367__$1;
(statearr_43431_43501[(1)] = (7));

} else {
var statearr_43432_43502 = state_43367__$1;
(statearr_43432_43502[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (14))){
var inst_43241 = (state_43367[(22)]);
var inst_43250 = cljs.core.first.call(null,inst_43241);
var inst_43251 = figwheel.client.file_reloading.eval_body.call(null,inst_43250,opts);
var inst_43252 = cljs.core.next.call(null,inst_43241);
var inst_43228 = inst_43252;
var inst_43229 = null;
var inst_43230 = (0);
var inst_43231 = (0);
var state_43367__$1 = (function (){var statearr_43433 = state_43367;
(statearr_43433[(7)] = inst_43228);

(statearr_43433[(32)] = inst_43251);

(statearr_43433[(8)] = inst_43230);

(statearr_43433[(9)] = inst_43231);

(statearr_43433[(10)] = inst_43229);

return statearr_43433;
})();
var statearr_43434_43503 = state_43367__$1;
(statearr_43434_43503[(2)] = null);

(statearr_43434_43503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (45))){
var state_43367__$1 = state_43367;
var statearr_43435_43504 = state_43367__$1;
(statearr_43435_43504[(2)] = null);

(statearr_43435_43504[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (26))){
var inst_43284 = (state_43367[(23)]);
var inst_43285 = (state_43367[(24)]);
var inst_43281 = (state_43367[(19)]);
var inst_43289 = (state_43367[(25)]);
var inst_43287 = (state_43367[(26)]);
var inst_43304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43306 = (function (){var all_files = inst_43281;
var res_SINGLEQUOTE_ = inst_43284;
var res = inst_43285;
var files_not_loaded = inst_43287;
var dependencies_that_loaded = inst_43289;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43304,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43305){
var map__43436 = p__43305;
var map__43436__$1 = ((((!((map__43436 == null)))?((((map__43436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43436):map__43436);
var namespace = cljs.core.get.call(null,map__43436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43304,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43307 = cljs.core.map.call(null,inst_43306,inst_43285);
var inst_43308 = cljs.core.pr_str.call(null,inst_43307);
var inst_43309 = figwheel.client.utils.log.call(null,inst_43308);
var inst_43310 = (function (){var all_files = inst_43281;
var res_SINGLEQUOTE_ = inst_43284;
var res = inst_43285;
var files_not_loaded = inst_43287;
var dependencies_that_loaded = inst_43289;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43304,inst_43306,inst_43307,inst_43308,inst_43309,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43284,inst_43285,inst_43281,inst_43289,inst_43287,inst_43304,inst_43306,inst_43307,inst_43308,inst_43309,state_val_43368,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43311 = setTimeout(inst_43310,(10));
var state_43367__$1 = (function (){var statearr_43438 = state_43367;
(statearr_43438[(33)] = inst_43309);

(statearr_43438[(34)] = inst_43304);

return statearr_43438;
})();
var statearr_43439_43505 = state_43367__$1;
(statearr_43439_43505[(2)] = inst_43311);

(statearr_43439_43505[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (16))){
var state_43367__$1 = state_43367;
var statearr_43440_43506 = state_43367__$1;
(statearr_43440_43506[(2)] = reload_dependents);

(statearr_43440_43506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (38))){
var inst_43321 = (state_43367[(16)]);
var inst_43338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43321);
var state_43367__$1 = state_43367;
var statearr_43441_43507 = state_43367__$1;
(statearr_43441_43507[(2)] = inst_43338);

(statearr_43441_43507[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (30))){
var state_43367__$1 = state_43367;
var statearr_43442_43508 = state_43367__$1;
(statearr_43442_43508[(2)] = null);

(statearr_43442_43508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (10))){
var inst_43241 = (state_43367[(22)]);
var inst_43243 = cljs.core.chunked_seq_QMARK_.call(null,inst_43241);
var state_43367__$1 = state_43367;
if(inst_43243){
var statearr_43443_43509 = state_43367__$1;
(statearr_43443_43509[(1)] = (13));

} else {
var statearr_43444_43510 = state_43367__$1;
(statearr_43444_43510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (18))){
var inst_43275 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
if(cljs.core.truth_(inst_43275)){
var statearr_43445_43511 = state_43367__$1;
(statearr_43445_43511[(1)] = (19));

} else {
var statearr_43446_43512 = state_43367__$1;
(statearr_43446_43512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (42))){
var state_43367__$1 = state_43367;
var statearr_43447_43513 = state_43367__$1;
(statearr_43447_43513[(2)] = null);

(statearr_43447_43513[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (37))){
var inst_43333 = (state_43367[(2)]);
var state_43367__$1 = state_43367;
var statearr_43448_43514 = state_43367__$1;
(statearr_43448_43514[(2)] = inst_43333);

(statearr_43448_43514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43368 === (8))){
var inst_43228 = (state_43367[(7)]);
var inst_43241 = (state_43367[(22)]);
var inst_43241__$1 = cljs.core.seq.call(null,inst_43228);
var state_43367__$1 = (function (){var statearr_43449 = state_43367;
(statearr_43449[(22)] = inst_43241__$1);

return statearr_43449;
})();
if(inst_43241__$1){
var statearr_43450_43515 = state_43367__$1;
(statearr_43450_43515[(1)] = (10));

} else {
var statearr_43451_43516 = state_43367__$1;
(statearr_43451_43516[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30459__auto__,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____0 = (function (){
var statearr_43455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43455[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__);

(statearr_43455[(1)] = (1));

return statearr_43455;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____1 = (function (state_43367){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_43367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e43456){if((e43456 instanceof Object)){
var ex__30463__auto__ = e43456;
var statearr_43457_43517 = state_43367;
(statearr_43457_43517[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43518 = state_43367;
state_43367 = G__43518;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__ = function(state_43367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____1.call(this,state_43367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30482__auto__ = (function (){var statearr_43458 = f__30481__auto__.call(null);
(statearr_43458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_43458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__,map__43213,map__43213__$1,opts,before_jsload,on_jsload,reload_dependents,map__43214,map__43214__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30480__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43521,link){
var map__43524 = p__43521;
var map__43524__$1 = ((((!((map__43524 == null)))?((((map__43524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43524):map__43524);
var file = cljs.core.get.call(null,map__43524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43524,map__43524__$1,file){
return (function (p1__43519_SHARP_,p2__43520_SHARP_){
if(cljs.core._EQ_.call(null,p1__43519_SHARP_,p2__43520_SHARP_)){
return p1__43519_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43524,map__43524__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43530){
var map__43531 = p__43530;
var map__43531__$1 = ((((!((map__43531 == null)))?((((map__43531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43531):map__43531);
var match_length = cljs.core.get.call(null,map__43531__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43531__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43526_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43526_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43533 = [];
var len__26121__auto___43536 = arguments.length;
var i__26122__auto___43537 = (0);
while(true){
if((i__26122__auto___43537 < len__26121__auto___43536)){
args43533.push((arguments[i__26122__auto___43537]));

var G__43538 = (i__26122__auto___43537 + (1));
i__26122__auto___43537 = G__43538;
continue;
} else {
}
break;
}

var G__43535 = args43533.length;
switch (G__43535) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43533.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43540_SHARP_,p2__43541_SHARP_){
return cljs.core.assoc.call(null,p1__43540_SHARP_,cljs.core.get.call(null,p2__43541_SHARP_,key),p2__43541_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43542){
var map__43545 = p__43542;
var map__43545__$1 = ((((!((map__43545 == null)))?((((map__43545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43545):map__43545);
var f_data = map__43545__$1;
var file = cljs.core.get.call(null,map__43545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43547,p__43548){
var map__43557 = p__43547;
var map__43557__$1 = ((((!((map__43557 == null)))?((((map__43557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43557):map__43557);
var opts = map__43557__$1;
var on_cssload = cljs.core.get.call(null,map__43557__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43558 = p__43548;
var map__43558__$1 = ((((!((map__43558 == null)))?((((map__43558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43558):map__43558);
var files_msg = map__43558__$1;
var files = cljs.core.get.call(null,map__43558__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43561_43565 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__43562_43566 = null;
var count__43563_43567 = (0);
var i__43564_43568 = (0);
while(true){
if((i__43564_43568 < count__43563_43567)){
var f_43569 = cljs.core._nth.call(null,chunk__43562_43566,i__43564_43568);
figwheel.client.file_reloading.reload_css_file.call(null,f_43569);

var G__43570 = seq__43561_43565;
var G__43571 = chunk__43562_43566;
var G__43572 = count__43563_43567;
var G__43573 = (i__43564_43568 + (1));
seq__43561_43565 = G__43570;
chunk__43562_43566 = G__43571;
count__43563_43567 = G__43572;
i__43564_43568 = G__43573;
continue;
} else {
var temp__4657__auto___43574 = cljs.core.seq.call(null,seq__43561_43565);
if(temp__4657__auto___43574){
var seq__43561_43575__$1 = temp__4657__auto___43574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43561_43575__$1)){
var c__25857__auto___43576 = cljs.core.chunk_first.call(null,seq__43561_43575__$1);
var G__43577 = cljs.core.chunk_rest.call(null,seq__43561_43575__$1);
var G__43578 = c__25857__auto___43576;
var G__43579 = cljs.core.count.call(null,c__25857__auto___43576);
var G__43580 = (0);
seq__43561_43565 = G__43577;
chunk__43562_43566 = G__43578;
count__43563_43567 = G__43579;
i__43564_43568 = G__43580;
continue;
} else {
var f_43581 = cljs.core.first.call(null,seq__43561_43575__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43581);

var G__43582 = cljs.core.next.call(null,seq__43561_43575__$1);
var G__43583 = null;
var G__43584 = (0);
var G__43585 = (0);
seq__43561_43565 = G__43582;
chunk__43562_43566 = G__43583;
count__43563_43567 = G__43584;
i__43564_43568 = G__43585;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43557,map__43557__$1,opts,on_cssload,map__43558,map__43558__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__43557,map__43557__$1,opts,on_cssload,map__43558,map__43558__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484702590378
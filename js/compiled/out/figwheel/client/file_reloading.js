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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43480_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43480_SHARP_));
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
var seq__43485 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43486 = null;
var count__43487 = (0);
var i__43488 = (0);
while(true){
if((i__43488 < count__43487)){
var n = cljs.core._nth.call(null,chunk__43486,i__43488);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43489 = seq__43485;
var G__43490 = chunk__43486;
var G__43491 = count__43487;
var G__43492 = (i__43488 + (1));
seq__43485 = G__43489;
chunk__43486 = G__43490;
count__43487 = G__43491;
i__43488 = G__43492;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43485);
if(temp__4657__auto__){
var seq__43485__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43485__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__43485__$1);
var G__43493 = cljs.core.chunk_rest.call(null,seq__43485__$1);
var G__43494 = c__25857__auto__;
var G__43495 = cljs.core.count.call(null,c__25857__auto__);
var G__43496 = (0);
seq__43485 = G__43493;
chunk__43486 = G__43494;
count__43487 = G__43495;
i__43488 = G__43496;
continue;
} else {
var n = cljs.core.first.call(null,seq__43485__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43497 = cljs.core.next.call(null,seq__43485__$1);
var G__43498 = null;
var G__43499 = (0);
var G__43500 = (0);
seq__43485 = G__43497;
chunk__43486 = G__43498;
count__43487 = G__43499;
i__43488 = G__43500;
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

var seq__43551_43562 = cljs.core.seq.call(null,deps);
var chunk__43552_43563 = null;
var count__43553_43564 = (0);
var i__43554_43565 = (0);
while(true){
if((i__43554_43565 < count__43553_43564)){
var dep_43566 = cljs.core._nth.call(null,chunk__43552_43563,i__43554_43565);
topo_sort_helper_STAR_.call(null,dep_43566,(depth + (1)),state);

var G__43567 = seq__43551_43562;
var G__43568 = chunk__43552_43563;
var G__43569 = count__43553_43564;
var G__43570 = (i__43554_43565 + (1));
seq__43551_43562 = G__43567;
chunk__43552_43563 = G__43568;
count__43553_43564 = G__43569;
i__43554_43565 = G__43570;
continue;
} else {
var temp__4657__auto___43571 = cljs.core.seq.call(null,seq__43551_43562);
if(temp__4657__auto___43571){
var seq__43551_43572__$1 = temp__4657__auto___43571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43551_43572__$1)){
var c__25857__auto___43573 = cljs.core.chunk_first.call(null,seq__43551_43572__$1);
var G__43574 = cljs.core.chunk_rest.call(null,seq__43551_43572__$1);
var G__43575 = c__25857__auto___43573;
var G__43576 = cljs.core.count.call(null,c__25857__auto___43573);
var G__43577 = (0);
seq__43551_43562 = G__43574;
chunk__43552_43563 = G__43575;
count__43553_43564 = G__43576;
i__43554_43565 = G__43577;
continue;
} else {
var dep_43578 = cljs.core.first.call(null,seq__43551_43572__$1);
topo_sort_helper_STAR_.call(null,dep_43578,(depth + (1)),state);

var G__43579 = cljs.core.next.call(null,seq__43551_43572__$1);
var G__43580 = null;
var G__43581 = (0);
var G__43582 = (0);
seq__43551_43562 = G__43579;
chunk__43552_43563 = G__43580;
count__43553_43564 = G__43581;
i__43554_43565 = G__43582;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__43555){
var vec__43559 = p__43555;
var seq__43560 = cljs.core.seq.call(null,vec__43559);
var first__43561 = cljs.core.first.call(null,seq__43560);
var seq__43560__$1 = cljs.core.next.call(null,seq__43560);
var x = first__43561;
var xs = seq__43560__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__43559,seq__43560,first__43561,seq__43560__$1,x,xs,get_deps__$1){
return (function (p1__43501_SHARP_){
return clojure.set.difference.call(null,p1__43501_SHARP_,x);
});})(vec__43559,seq__43560,first__43561,seq__43560__$1,x,xs,get_deps__$1))
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
var seq__43595 = cljs.core.seq.call(null,provides);
var chunk__43596 = null;
var count__43597 = (0);
var i__43598 = (0);
while(true){
if((i__43598 < count__43597)){
var prov = cljs.core._nth.call(null,chunk__43596,i__43598);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43599_43607 = cljs.core.seq.call(null,requires);
var chunk__43600_43608 = null;
var count__43601_43609 = (0);
var i__43602_43610 = (0);
while(true){
if((i__43602_43610 < count__43601_43609)){
var req_43611 = cljs.core._nth.call(null,chunk__43600_43608,i__43602_43610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43611,prov);

var G__43612 = seq__43599_43607;
var G__43613 = chunk__43600_43608;
var G__43614 = count__43601_43609;
var G__43615 = (i__43602_43610 + (1));
seq__43599_43607 = G__43612;
chunk__43600_43608 = G__43613;
count__43601_43609 = G__43614;
i__43602_43610 = G__43615;
continue;
} else {
var temp__4657__auto___43616 = cljs.core.seq.call(null,seq__43599_43607);
if(temp__4657__auto___43616){
var seq__43599_43617__$1 = temp__4657__auto___43616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43599_43617__$1)){
var c__25857__auto___43618 = cljs.core.chunk_first.call(null,seq__43599_43617__$1);
var G__43619 = cljs.core.chunk_rest.call(null,seq__43599_43617__$1);
var G__43620 = c__25857__auto___43618;
var G__43621 = cljs.core.count.call(null,c__25857__auto___43618);
var G__43622 = (0);
seq__43599_43607 = G__43619;
chunk__43600_43608 = G__43620;
count__43601_43609 = G__43621;
i__43602_43610 = G__43622;
continue;
} else {
var req_43623 = cljs.core.first.call(null,seq__43599_43617__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43623,prov);

var G__43624 = cljs.core.next.call(null,seq__43599_43617__$1);
var G__43625 = null;
var G__43626 = (0);
var G__43627 = (0);
seq__43599_43607 = G__43624;
chunk__43600_43608 = G__43625;
count__43601_43609 = G__43626;
i__43602_43610 = G__43627;
continue;
}
} else {
}
}
break;
}

var G__43628 = seq__43595;
var G__43629 = chunk__43596;
var G__43630 = count__43597;
var G__43631 = (i__43598 + (1));
seq__43595 = G__43628;
chunk__43596 = G__43629;
count__43597 = G__43630;
i__43598 = G__43631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43595);
if(temp__4657__auto__){
var seq__43595__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43595__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__43595__$1);
var G__43632 = cljs.core.chunk_rest.call(null,seq__43595__$1);
var G__43633 = c__25857__auto__;
var G__43634 = cljs.core.count.call(null,c__25857__auto__);
var G__43635 = (0);
seq__43595 = G__43632;
chunk__43596 = G__43633;
count__43597 = G__43634;
i__43598 = G__43635;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43595__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43603_43636 = cljs.core.seq.call(null,requires);
var chunk__43604_43637 = null;
var count__43605_43638 = (0);
var i__43606_43639 = (0);
while(true){
if((i__43606_43639 < count__43605_43638)){
var req_43640 = cljs.core._nth.call(null,chunk__43604_43637,i__43606_43639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43640,prov);

var G__43641 = seq__43603_43636;
var G__43642 = chunk__43604_43637;
var G__43643 = count__43605_43638;
var G__43644 = (i__43606_43639 + (1));
seq__43603_43636 = G__43641;
chunk__43604_43637 = G__43642;
count__43605_43638 = G__43643;
i__43606_43639 = G__43644;
continue;
} else {
var temp__4657__auto___43645__$1 = cljs.core.seq.call(null,seq__43603_43636);
if(temp__4657__auto___43645__$1){
var seq__43603_43646__$1 = temp__4657__auto___43645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43603_43646__$1)){
var c__25857__auto___43647 = cljs.core.chunk_first.call(null,seq__43603_43646__$1);
var G__43648 = cljs.core.chunk_rest.call(null,seq__43603_43646__$1);
var G__43649 = c__25857__auto___43647;
var G__43650 = cljs.core.count.call(null,c__25857__auto___43647);
var G__43651 = (0);
seq__43603_43636 = G__43648;
chunk__43604_43637 = G__43649;
count__43605_43638 = G__43650;
i__43606_43639 = G__43651;
continue;
} else {
var req_43652 = cljs.core.first.call(null,seq__43603_43646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43652,prov);

var G__43653 = cljs.core.next.call(null,seq__43603_43646__$1);
var G__43654 = null;
var G__43655 = (0);
var G__43656 = (0);
seq__43603_43636 = G__43653;
chunk__43604_43637 = G__43654;
count__43605_43638 = G__43655;
i__43606_43639 = G__43656;
continue;
}
} else {
}
}
break;
}

var G__43657 = cljs.core.next.call(null,seq__43595__$1);
var G__43658 = null;
var G__43659 = (0);
var G__43660 = (0);
seq__43595 = G__43657;
chunk__43596 = G__43658;
count__43597 = G__43659;
i__43598 = G__43660;
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
var seq__43665_43669 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43666_43670 = null;
var count__43667_43671 = (0);
var i__43668_43672 = (0);
while(true){
if((i__43668_43672 < count__43667_43671)){
var ns_43673 = cljs.core._nth.call(null,chunk__43666_43670,i__43668_43672);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43673);

var G__43674 = seq__43665_43669;
var G__43675 = chunk__43666_43670;
var G__43676 = count__43667_43671;
var G__43677 = (i__43668_43672 + (1));
seq__43665_43669 = G__43674;
chunk__43666_43670 = G__43675;
count__43667_43671 = G__43676;
i__43668_43672 = G__43677;
continue;
} else {
var temp__4657__auto___43678 = cljs.core.seq.call(null,seq__43665_43669);
if(temp__4657__auto___43678){
var seq__43665_43679__$1 = temp__4657__auto___43678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43665_43679__$1)){
var c__25857__auto___43680 = cljs.core.chunk_first.call(null,seq__43665_43679__$1);
var G__43681 = cljs.core.chunk_rest.call(null,seq__43665_43679__$1);
var G__43682 = c__25857__auto___43680;
var G__43683 = cljs.core.count.call(null,c__25857__auto___43680);
var G__43684 = (0);
seq__43665_43669 = G__43681;
chunk__43666_43670 = G__43682;
count__43667_43671 = G__43683;
i__43668_43672 = G__43684;
continue;
} else {
var ns_43685 = cljs.core.first.call(null,seq__43665_43679__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43685);

var G__43686 = cljs.core.next.call(null,seq__43665_43679__$1);
var G__43687 = null;
var G__43688 = (0);
var G__43689 = (0);
seq__43665_43669 = G__43686;
chunk__43666_43670 = G__43687;
count__43667_43671 = G__43688;
i__43668_43672 = G__43689;
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
var G__43690__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43691__i = 0, G__43691__a = new Array(arguments.length -  0);
while (G__43691__i < G__43691__a.length) {G__43691__a[G__43691__i] = arguments[G__43691__i + 0]; ++G__43691__i;}
  args = new cljs.core.IndexedSeq(G__43691__a,0);
} 
return G__43690__delegate.call(this,args);};
G__43690.cljs$lang$maxFixedArity = 0;
G__43690.cljs$lang$applyTo = (function (arglist__43692){
var args = cljs.core.seq(arglist__43692);
return G__43690__delegate(args);
});
G__43690.cljs$core$IFn$_invoke$arity$variadic = G__43690__delegate;
return G__43690;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43694 = cljs.core._EQ_;
var expr__43695 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43694.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43695))){
var path_parts = ((function (pred__43694,expr__43695){
return (function (p1__43693_SHARP_){
return clojure.string.split.call(null,p1__43693_SHARP_,/[\/\\]/);
});})(pred__43694,expr__43695))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__43694,expr__43695){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43697){if((e43697 instanceof Error)){
var e = e43697;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43697;

}
}})());
});
;})(path_parts,sep,root,pred__43694,expr__43695))
} else {
if(cljs.core.truth_(pred__43694.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43695))){
return ((function (pred__43694,expr__43695){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__43694,expr__43695){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43694,expr__43695))
);

return deferred.addErrback(((function (deferred,pred__43694,expr__43695){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43694,expr__43695))
);
});
;})(pred__43694,expr__43695))
} else {
return ((function (pred__43694,expr__43695){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43694,expr__43695))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43698,callback){
var map__43701 = p__43698;
var map__43701__$1 = ((((!((map__43701 == null)))?((((map__43701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43701):map__43701);
var file_msg = map__43701__$1;
var request_url = cljs.core.get.call(null,map__43701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43701,map__43701__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43701,map__43701__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__){
return (function (state_43725){
var state_val_43726 = (state_43725[(1)]);
if((state_val_43726 === (7))){
var inst_43721 = (state_43725[(2)]);
var state_43725__$1 = state_43725;
var statearr_43727_43747 = state_43725__$1;
(statearr_43727_43747[(2)] = inst_43721);

(statearr_43727_43747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (1))){
var state_43725__$1 = state_43725;
var statearr_43728_43748 = state_43725__$1;
(statearr_43728_43748[(2)] = null);

(statearr_43728_43748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (4))){
var inst_43705 = (state_43725[(7)]);
var inst_43705__$1 = (state_43725[(2)]);
var state_43725__$1 = (function (){var statearr_43729 = state_43725;
(statearr_43729[(7)] = inst_43705__$1);

return statearr_43729;
})();
if(cljs.core.truth_(inst_43705__$1)){
var statearr_43730_43749 = state_43725__$1;
(statearr_43730_43749[(1)] = (5));

} else {
var statearr_43731_43750 = state_43725__$1;
(statearr_43731_43750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (6))){
var state_43725__$1 = state_43725;
var statearr_43732_43751 = state_43725__$1;
(statearr_43732_43751[(2)] = null);

(statearr_43732_43751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (3))){
var inst_43723 = (state_43725[(2)]);
var state_43725__$1 = state_43725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43725__$1,inst_43723);
} else {
if((state_val_43726 === (2))){
var state_43725__$1 = state_43725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43725__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43726 === (11))){
var inst_43717 = (state_43725[(2)]);
var state_43725__$1 = (function (){var statearr_43733 = state_43725;
(statearr_43733[(8)] = inst_43717);

return statearr_43733;
})();
var statearr_43734_43752 = state_43725__$1;
(statearr_43734_43752[(2)] = null);

(statearr_43734_43752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (9))){
var inst_43709 = (state_43725[(9)]);
var inst_43711 = (state_43725[(10)]);
var inst_43713 = inst_43711.call(null,inst_43709);
var state_43725__$1 = state_43725;
var statearr_43735_43753 = state_43725__$1;
(statearr_43735_43753[(2)] = inst_43713);

(statearr_43735_43753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (5))){
var inst_43705 = (state_43725[(7)]);
var inst_43707 = figwheel.client.file_reloading.blocking_load.call(null,inst_43705);
var state_43725__$1 = state_43725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43725__$1,(8),inst_43707);
} else {
if((state_val_43726 === (10))){
var inst_43709 = (state_43725[(9)]);
var inst_43715 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43709);
var state_43725__$1 = state_43725;
var statearr_43736_43754 = state_43725__$1;
(statearr_43736_43754[(2)] = inst_43715);

(statearr_43736_43754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43726 === (8))){
var inst_43705 = (state_43725[(7)]);
var inst_43711 = (state_43725[(10)]);
var inst_43709 = (state_43725[(2)]);
var inst_43710 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43711__$1 = cljs.core.get.call(null,inst_43710,inst_43705);
var state_43725__$1 = (function (){var statearr_43737 = state_43725;
(statearr_43737[(9)] = inst_43709);

(statearr_43737[(10)] = inst_43711__$1);

return statearr_43737;
})();
if(cljs.core.truth_(inst_43711__$1)){
var statearr_43738_43755 = state_43725__$1;
(statearr_43738_43755[(1)] = (9));

} else {
var statearr_43739_43756 = state_43725__$1;
(statearr_43739_43756[(1)] = (10));

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
});})(c__31753__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31733__auto__ = null;
var figwheel$client$file_reloading$state_machine__31733__auto____0 = (function (){
var statearr_43743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43743[(0)] = figwheel$client$file_reloading$state_machine__31733__auto__);

(statearr_43743[(1)] = (1));

return statearr_43743;
});
var figwheel$client$file_reloading$state_machine__31733__auto____1 = (function (state_43725){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_43725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e43744){if((e43744 instanceof Object)){
var ex__31736__auto__ = e43744;
var statearr_43745_43757 = state_43725;
(statearr_43745_43757[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43758 = state_43725;
state_43725 = G__43758;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31733__auto__ = function(state_43725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31733__auto____1.call(this,state_43725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31733__auto____0;
figwheel$client$file_reloading$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31733__auto____1;
return figwheel$client$file_reloading$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__))
})();
var state__31755__auto__ = (function (){var statearr_43746 = f__31754__auto__.call(null);
(statearr_43746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_43746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__))
);

return c__31753__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43759,callback){
var map__43762 = p__43759;
var map__43762__$1 = ((((!((map__43762 == null)))?((((map__43762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43762):map__43762);
var file_msg = map__43762__$1;
var namespace = cljs.core.get.call(null,map__43762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43762,map__43762__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43762,map__43762__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43764){
var map__43767 = p__43764;
var map__43767__$1 = ((((!((map__43767 == null)))?((((map__43767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43767):map__43767);
var file_msg = map__43767__$1;
var namespace = cljs.core.get.call(null,map__43767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43769,callback){
var map__43772 = p__43769;
var map__43772__$1 = ((((!((map__43772 == null)))?((((map__43772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43772):map__43772);
var file_msg = map__43772__$1;
var request_url = cljs.core.get.call(null,map__43772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31753__auto___43876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___43876,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___43876,out){
return (function (state_43858){
var state_val_43859 = (state_43858[(1)]);
if((state_val_43859 === (1))){
var inst_43832 = cljs.core.seq.call(null,files);
var inst_43833 = cljs.core.first.call(null,inst_43832);
var inst_43834 = cljs.core.next.call(null,inst_43832);
var inst_43835 = files;
var state_43858__$1 = (function (){var statearr_43860 = state_43858;
(statearr_43860[(7)] = inst_43835);

(statearr_43860[(8)] = inst_43834);

(statearr_43860[(9)] = inst_43833);

return statearr_43860;
})();
var statearr_43861_43877 = state_43858__$1;
(statearr_43861_43877[(2)] = null);

(statearr_43861_43877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43859 === (2))){
var inst_43841 = (state_43858[(10)]);
var inst_43835 = (state_43858[(7)]);
var inst_43840 = cljs.core.seq.call(null,inst_43835);
var inst_43841__$1 = cljs.core.first.call(null,inst_43840);
var inst_43842 = cljs.core.next.call(null,inst_43840);
var inst_43843 = (inst_43841__$1 == null);
var inst_43844 = cljs.core.not.call(null,inst_43843);
var state_43858__$1 = (function (){var statearr_43862 = state_43858;
(statearr_43862[(11)] = inst_43842);

(statearr_43862[(10)] = inst_43841__$1);

return statearr_43862;
})();
if(inst_43844){
var statearr_43863_43878 = state_43858__$1;
(statearr_43863_43878[(1)] = (4));

} else {
var statearr_43864_43879 = state_43858__$1;
(statearr_43864_43879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43859 === (3))){
var inst_43856 = (state_43858[(2)]);
var state_43858__$1 = state_43858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43858__$1,inst_43856);
} else {
if((state_val_43859 === (4))){
var inst_43841 = (state_43858[(10)]);
var inst_43846 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43841);
var state_43858__$1 = state_43858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43858__$1,(7),inst_43846);
} else {
if((state_val_43859 === (5))){
var inst_43852 = cljs.core.async.close_BANG_.call(null,out);
var state_43858__$1 = state_43858;
var statearr_43865_43880 = state_43858__$1;
(statearr_43865_43880[(2)] = inst_43852);

(statearr_43865_43880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43859 === (6))){
var inst_43854 = (state_43858[(2)]);
var state_43858__$1 = state_43858;
var statearr_43866_43881 = state_43858__$1;
(statearr_43866_43881[(2)] = inst_43854);

(statearr_43866_43881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43859 === (7))){
var inst_43842 = (state_43858[(11)]);
var inst_43848 = (state_43858[(2)]);
var inst_43849 = cljs.core.async.put_BANG_.call(null,out,inst_43848);
var inst_43835 = inst_43842;
var state_43858__$1 = (function (){var statearr_43867 = state_43858;
(statearr_43867[(12)] = inst_43849);

(statearr_43867[(7)] = inst_43835);

return statearr_43867;
})();
var statearr_43868_43882 = state_43858__$1;
(statearr_43868_43882[(2)] = null);

(statearr_43868_43882[(1)] = (2));


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
});})(c__31753__auto___43876,out))
;
return ((function (switch__31732__auto__,c__31753__auto___43876,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____0 = (function (){
var statearr_43872 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43872[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__);

(statearr_43872[(1)] = (1));

return statearr_43872;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____1 = (function (state_43858){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_43858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e43873){if((e43873 instanceof Object)){
var ex__31736__auto__ = e43873;
var statearr_43874_43883 = state_43858;
(statearr_43874_43883[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43884 = state_43858;
state_43858 = G__43884;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__ = function(state_43858){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____1.call(this,state_43858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___43876,out))
})();
var state__31755__auto__ = (function (){var statearr_43875 = f__31754__auto__.call(null);
(statearr_43875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___43876);

return statearr_43875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___43876,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43885,opts){
var map__43889 = p__43885;
var map__43889__$1 = ((((!((map__43889 == null)))?((((map__43889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43889):map__43889);
var eval_body__$1 = cljs.core.get.call(null,map__43889__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e43891){var e = e43891;
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
return (function (p1__43892_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43892_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__43901){
var vec__43902 = p__43901;
var k = cljs.core.nth.call(null,vec__43902,(0),null);
var v = cljs.core.nth.call(null,vec__43902,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43905){
var vec__43906 = p__43905;
var k = cljs.core.nth.call(null,vec__43906,(0),null);
var v = cljs.core.nth.call(null,vec__43906,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43912,p__43913){
var map__44160 = p__43912;
var map__44160__$1 = ((((!((map__44160 == null)))?((((map__44160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44160):map__44160);
var opts = map__44160__$1;
var before_jsload = cljs.core.get.call(null,map__44160__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44160__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44160__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44161 = p__43913;
var map__44161__$1 = ((((!((map__44161 == null)))?((((map__44161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44161):map__44161);
var msg = map__44161__$1;
var files = cljs.core.get.call(null,map__44161__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44161__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44161__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44314){
var state_val_44315 = (state_44314[(1)]);
if((state_val_44315 === (7))){
var inst_44175 = (state_44314[(7)]);
var inst_44177 = (state_44314[(8)]);
var inst_44178 = (state_44314[(9)]);
var inst_44176 = (state_44314[(10)]);
var inst_44183 = cljs.core._nth.call(null,inst_44176,inst_44178);
var inst_44184 = figwheel.client.file_reloading.eval_body.call(null,inst_44183,opts);
var inst_44185 = (inst_44178 + (1));
var tmp44316 = inst_44175;
var tmp44317 = inst_44177;
var tmp44318 = inst_44176;
var inst_44175__$1 = tmp44316;
var inst_44176__$1 = tmp44318;
var inst_44177__$1 = tmp44317;
var inst_44178__$1 = inst_44185;
var state_44314__$1 = (function (){var statearr_44319 = state_44314;
(statearr_44319[(7)] = inst_44175__$1);

(statearr_44319[(8)] = inst_44177__$1);

(statearr_44319[(9)] = inst_44178__$1);

(statearr_44319[(11)] = inst_44184);

(statearr_44319[(10)] = inst_44176__$1);

return statearr_44319;
})();
var statearr_44320_44406 = state_44314__$1;
(statearr_44320_44406[(2)] = null);

(statearr_44320_44406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (20))){
var inst_44218 = (state_44314[(12)]);
var inst_44226 = figwheel.client.file_reloading.sort_files.call(null,inst_44218);
var state_44314__$1 = state_44314;
var statearr_44321_44407 = state_44314__$1;
(statearr_44321_44407[(2)] = inst_44226);

(statearr_44321_44407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (27))){
var state_44314__$1 = state_44314;
var statearr_44322_44408 = state_44314__$1;
(statearr_44322_44408[(2)] = null);

(statearr_44322_44408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (1))){
var inst_44167 = (state_44314[(13)]);
var inst_44164 = before_jsload.call(null,files);
var inst_44165 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44166 = (function (){return ((function (inst_44167,inst_44164,inst_44165,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43909_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43909_SHARP_);
});
;})(inst_44167,inst_44164,inst_44165,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44167__$1 = cljs.core.filter.call(null,inst_44166,files);
var inst_44168 = cljs.core.not_empty.call(null,inst_44167__$1);
var state_44314__$1 = (function (){var statearr_44323 = state_44314;
(statearr_44323[(13)] = inst_44167__$1);

(statearr_44323[(14)] = inst_44164);

(statearr_44323[(15)] = inst_44165);

return statearr_44323;
})();
if(cljs.core.truth_(inst_44168)){
var statearr_44324_44409 = state_44314__$1;
(statearr_44324_44409[(1)] = (2));

} else {
var statearr_44325_44410 = state_44314__$1;
(statearr_44325_44410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (24))){
var state_44314__$1 = state_44314;
var statearr_44326_44411 = state_44314__$1;
(statearr_44326_44411[(2)] = null);

(statearr_44326_44411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (39))){
var inst_44268 = (state_44314[(16)]);
var state_44314__$1 = state_44314;
var statearr_44327_44412 = state_44314__$1;
(statearr_44327_44412[(2)] = inst_44268);

(statearr_44327_44412[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (46))){
var inst_44309 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44328_44413 = state_44314__$1;
(statearr_44328_44413[(2)] = inst_44309);

(statearr_44328_44413[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (4))){
var inst_44212 = (state_44314[(2)]);
var inst_44213 = cljs.core.List.EMPTY;
var inst_44214 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44213);
var inst_44215 = (function (){return ((function (inst_44212,inst_44213,inst_44214,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43910_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43910_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43910_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_44212,inst_44213,inst_44214,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44216 = cljs.core.filter.call(null,inst_44215,files);
var inst_44217 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44218 = cljs.core.concat.call(null,inst_44216,inst_44217);
var state_44314__$1 = (function (){var statearr_44329 = state_44314;
(statearr_44329[(17)] = inst_44212);

(statearr_44329[(18)] = inst_44214);

(statearr_44329[(12)] = inst_44218);

return statearr_44329;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44330_44414 = state_44314__$1;
(statearr_44330_44414[(1)] = (16));

} else {
var statearr_44331_44415 = state_44314__$1;
(statearr_44331_44415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (15))){
var inst_44202 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44332_44416 = state_44314__$1;
(statearr_44332_44416[(2)] = inst_44202);

(statearr_44332_44416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (21))){
var inst_44228 = (state_44314[(19)]);
var inst_44228__$1 = (state_44314[(2)]);
var inst_44229 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44228__$1);
var state_44314__$1 = (function (){var statearr_44333 = state_44314;
(statearr_44333[(19)] = inst_44228__$1);

return statearr_44333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44314__$1,(22),inst_44229);
} else {
if((state_val_44315 === (31))){
var inst_44312 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44314__$1,inst_44312);
} else {
if((state_val_44315 === (32))){
var inst_44268 = (state_44314[(16)]);
var inst_44273 = inst_44268.cljs$lang$protocol_mask$partition0$;
var inst_44274 = (inst_44273 & (64));
var inst_44275 = inst_44268.cljs$core$ISeq$;
var inst_44276 = (inst_44274) || (inst_44275);
var state_44314__$1 = state_44314;
if(cljs.core.truth_(inst_44276)){
var statearr_44334_44417 = state_44314__$1;
(statearr_44334_44417[(1)] = (35));

} else {
var statearr_44335_44418 = state_44314__$1;
(statearr_44335_44418[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (40))){
var inst_44289 = (state_44314[(20)]);
var inst_44288 = (state_44314[(2)]);
var inst_44289__$1 = cljs.core.get.call(null,inst_44288,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44290 = cljs.core.get.call(null,inst_44288,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44291 = cljs.core.not_empty.call(null,inst_44289__$1);
var state_44314__$1 = (function (){var statearr_44336 = state_44314;
(statearr_44336[(20)] = inst_44289__$1);

(statearr_44336[(21)] = inst_44290);

return statearr_44336;
})();
if(cljs.core.truth_(inst_44291)){
var statearr_44337_44419 = state_44314__$1;
(statearr_44337_44419[(1)] = (41));

} else {
var statearr_44338_44420 = state_44314__$1;
(statearr_44338_44420[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (33))){
var state_44314__$1 = state_44314;
var statearr_44339_44421 = state_44314__$1;
(statearr_44339_44421[(2)] = false);

(statearr_44339_44421[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (13))){
var inst_44188 = (state_44314[(22)]);
var inst_44192 = cljs.core.chunk_first.call(null,inst_44188);
var inst_44193 = cljs.core.chunk_rest.call(null,inst_44188);
var inst_44194 = cljs.core.count.call(null,inst_44192);
var inst_44175 = inst_44193;
var inst_44176 = inst_44192;
var inst_44177 = inst_44194;
var inst_44178 = (0);
var state_44314__$1 = (function (){var statearr_44340 = state_44314;
(statearr_44340[(7)] = inst_44175);

(statearr_44340[(8)] = inst_44177);

(statearr_44340[(9)] = inst_44178);

(statearr_44340[(10)] = inst_44176);

return statearr_44340;
})();
var statearr_44341_44422 = state_44314__$1;
(statearr_44341_44422[(2)] = null);

(statearr_44341_44422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (22))){
var inst_44236 = (state_44314[(23)]);
var inst_44231 = (state_44314[(24)]);
var inst_44228 = (state_44314[(19)]);
var inst_44232 = (state_44314[(25)]);
var inst_44231__$1 = (state_44314[(2)]);
var inst_44232__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44231__$1);
var inst_44233 = (function (){var all_files = inst_44228;
var res_SINGLEQUOTE_ = inst_44231__$1;
var res = inst_44232__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44236,inst_44231,inst_44228,inst_44232,inst_44231__$1,inst_44232__$1,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43911_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43911_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44236,inst_44231,inst_44228,inst_44232,inst_44231__$1,inst_44232__$1,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44234 = cljs.core.filter.call(null,inst_44233,inst_44231__$1);
var inst_44235 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44236__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44235);
var inst_44237 = cljs.core.not_empty.call(null,inst_44236__$1);
var state_44314__$1 = (function (){var statearr_44342 = state_44314;
(statearr_44342[(23)] = inst_44236__$1);

(statearr_44342[(24)] = inst_44231__$1);

(statearr_44342[(25)] = inst_44232__$1);

(statearr_44342[(26)] = inst_44234);

return statearr_44342;
})();
if(cljs.core.truth_(inst_44237)){
var statearr_44343_44423 = state_44314__$1;
(statearr_44343_44423[(1)] = (23));

} else {
var statearr_44344_44424 = state_44314__$1;
(statearr_44344_44424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (36))){
var state_44314__$1 = state_44314;
var statearr_44345_44425 = state_44314__$1;
(statearr_44345_44425[(2)] = false);

(statearr_44345_44425[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (41))){
var inst_44289 = (state_44314[(20)]);
var inst_44293 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44294 = cljs.core.map.call(null,inst_44293,inst_44289);
var inst_44295 = cljs.core.pr_str.call(null,inst_44294);
var inst_44296 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44295)].join('');
var inst_44297 = figwheel.client.utils.log.call(null,inst_44296);
var state_44314__$1 = state_44314;
var statearr_44346_44426 = state_44314__$1;
(statearr_44346_44426[(2)] = inst_44297);

(statearr_44346_44426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (43))){
var inst_44290 = (state_44314[(21)]);
var inst_44300 = (state_44314[(2)]);
var inst_44301 = cljs.core.not_empty.call(null,inst_44290);
var state_44314__$1 = (function (){var statearr_44347 = state_44314;
(statearr_44347[(27)] = inst_44300);

return statearr_44347;
})();
if(cljs.core.truth_(inst_44301)){
var statearr_44348_44427 = state_44314__$1;
(statearr_44348_44427[(1)] = (44));

} else {
var statearr_44349_44428 = state_44314__$1;
(statearr_44349_44428[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (29))){
var inst_44236 = (state_44314[(23)]);
var inst_44231 = (state_44314[(24)]);
var inst_44268 = (state_44314[(16)]);
var inst_44228 = (state_44314[(19)]);
var inst_44232 = (state_44314[(25)]);
var inst_44234 = (state_44314[(26)]);
var inst_44264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44267 = (function (){var all_files = inst_44228;
var res_SINGLEQUOTE_ = inst_44231;
var res = inst_44232;
var files_not_loaded = inst_44234;
var dependencies_that_loaded = inst_44236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44268,inst_44228,inst_44232,inst_44234,inst_44264,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44266){
var map__44350 = p__44266;
var map__44350__$1 = ((((!((map__44350 == null)))?((((map__44350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44350):map__44350);
var namespace = cljs.core.get.call(null,map__44350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44268,inst_44228,inst_44232,inst_44234,inst_44264,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44268__$1 = cljs.core.group_by.call(null,inst_44267,inst_44234);
var inst_44270 = (inst_44268__$1 == null);
var inst_44271 = cljs.core.not.call(null,inst_44270);
var state_44314__$1 = (function (){var statearr_44352 = state_44314;
(statearr_44352[(28)] = inst_44264);

(statearr_44352[(16)] = inst_44268__$1);

return statearr_44352;
})();
if(inst_44271){
var statearr_44353_44429 = state_44314__$1;
(statearr_44353_44429[(1)] = (32));

} else {
var statearr_44354_44430 = state_44314__$1;
(statearr_44354_44430[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (44))){
var inst_44290 = (state_44314[(21)]);
var inst_44303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44290);
var inst_44304 = cljs.core.pr_str.call(null,inst_44303);
var inst_44305 = [cljs.core.str("not required: "),cljs.core.str(inst_44304)].join('');
var inst_44306 = figwheel.client.utils.log.call(null,inst_44305);
var state_44314__$1 = state_44314;
var statearr_44355_44431 = state_44314__$1;
(statearr_44355_44431[(2)] = inst_44306);

(statearr_44355_44431[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (6))){
var inst_44209 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44356_44432 = state_44314__$1;
(statearr_44356_44432[(2)] = inst_44209);

(statearr_44356_44432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (28))){
var inst_44234 = (state_44314[(26)]);
var inst_44261 = (state_44314[(2)]);
var inst_44262 = cljs.core.not_empty.call(null,inst_44234);
var state_44314__$1 = (function (){var statearr_44357 = state_44314;
(statearr_44357[(29)] = inst_44261);

return statearr_44357;
})();
if(cljs.core.truth_(inst_44262)){
var statearr_44358_44433 = state_44314__$1;
(statearr_44358_44433[(1)] = (29));

} else {
var statearr_44359_44434 = state_44314__$1;
(statearr_44359_44434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (25))){
var inst_44232 = (state_44314[(25)]);
var inst_44248 = (state_44314[(2)]);
var inst_44249 = cljs.core.not_empty.call(null,inst_44232);
var state_44314__$1 = (function (){var statearr_44360 = state_44314;
(statearr_44360[(30)] = inst_44248);

return statearr_44360;
})();
if(cljs.core.truth_(inst_44249)){
var statearr_44361_44435 = state_44314__$1;
(statearr_44361_44435[(1)] = (26));

} else {
var statearr_44362_44436 = state_44314__$1;
(statearr_44362_44436[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (34))){
var inst_44283 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
if(cljs.core.truth_(inst_44283)){
var statearr_44363_44437 = state_44314__$1;
(statearr_44363_44437[(1)] = (38));

} else {
var statearr_44364_44438 = state_44314__$1;
(statearr_44364_44438[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (17))){
var state_44314__$1 = state_44314;
var statearr_44365_44439 = state_44314__$1;
(statearr_44365_44439[(2)] = recompile_dependents);

(statearr_44365_44439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (3))){
var state_44314__$1 = state_44314;
var statearr_44366_44440 = state_44314__$1;
(statearr_44366_44440[(2)] = null);

(statearr_44366_44440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (12))){
var inst_44205 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44367_44441 = state_44314__$1;
(statearr_44367_44441[(2)] = inst_44205);

(statearr_44367_44441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (2))){
var inst_44167 = (state_44314[(13)]);
var inst_44174 = cljs.core.seq.call(null,inst_44167);
var inst_44175 = inst_44174;
var inst_44176 = null;
var inst_44177 = (0);
var inst_44178 = (0);
var state_44314__$1 = (function (){var statearr_44368 = state_44314;
(statearr_44368[(7)] = inst_44175);

(statearr_44368[(8)] = inst_44177);

(statearr_44368[(9)] = inst_44178);

(statearr_44368[(10)] = inst_44176);

return statearr_44368;
})();
var statearr_44369_44442 = state_44314__$1;
(statearr_44369_44442[(2)] = null);

(statearr_44369_44442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (23))){
var inst_44236 = (state_44314[(23)]);
var inst_44231 = (state_44314[(24)]);
var inst_44228 = (state_44314[(19)]);
var inst_44232 = (state_44314[(25)]);
var inst_44234 = (state_44314[(26)]);
var inst_44239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44241 = (function (){var all_files = inst_44228;
var res_SINGLEQUOTE_ = inst_44231;
var res = inst_44232;
var files_not_loaded = inst_44234;
var dependencies_that_loaded = inst_44236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44239,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44240){
var map__44370 = p__44240;
var map__44370__$1 = ((((!((map__44370 == null)))?((((map__44370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44370):map__44370);
var request_url = cljs.core.get.call(null,map__44370__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44239,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44242 = cljs.core.reverse.call(null,inst_44236);
var inst_44243 = cljs.core.map.call(null,inst_44241,inst_44242);
var inst_44244 = cljs.core.pr_str.call(null,inst_44243);
var inst_44245 = figwheel.client.utils.log.call(null,inst_44244);
var state_44314__$1 = (function (){var statearr_44372 = state_44314;
(statearr_44372[(31)] = inst_44239);

return statearr_44372;
})();
var statearr_44373_44443 = state_44314__$1;
(statearr_44373_44443[(2)] = inst_44245);

(statearr_44373_44443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (35))){
var state_44314__$1 = state_44314;
var statearr_44374_44444 = state_44314__$1;
(statearr_44374_44444[(2)] = true);

(statearr_44374_44444[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (19))){
var inst_44218 = (state_44314[(12)]);
var inst_44224 = figwheel.client.file_reloading.expand_files.call(null,inst_44218);
var state_44314__$1 = state_44314;
var statearr_44375_44445 = state_44314__$1;
(statearr_44375_44445[(2)] = inst_44224);

(statearr_44375_44445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (11))){
var state_44314__$1 = state_44314;
var statearr_44376_44446 = state_44314__$1;
(statearr_44376_44446[(2)] = null);

(statearr_44376_44446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (9))){
var inst_44207 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44377_44447 = state_44314__$1;
(statearr_44377_44447[(2)] = inst_44207);

(statearr_44377_44447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (5))){
var inst_44177 = (state_44314[(8)]);
var inst_44178 = (state_44314[(9)]);
var inst_44180 = (inst_44178 < inst_44177);
var inst_44181 = inst_44180;
var state_44314__$1 = state_44314;
if(cljs.core.truth_(inst_44181)){
var statearr_44378_44448 = state_44314__$1;
(statearr_44378_44448[(1)] = (7));

} else {
var statearr_44379_44449 = state_44314__$1;
(statearr_44379_44449[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (14))){
var inst_44188 = (state_44314[(22)]);
var inst_44197 = cljs.core.first.call(null,inst_44188);
var inst_44198 = figwheel.client.file_reloading.eval_body.call(null,inst_44197,opts);
var inst_44199 = cljs.core.next.call(null,inst_44188);
var inst_44175 = inst_44199;
var inst_44176 = null;
var inst_44177 = (0);
var inst_44178 = (0);
var state_44314__$1 = (function (){var statearr_44380 = state_44314;
(statearr_44380[(7)] = inst_44175);

(statearr_44380[(32)] = inst_44198);

(statearr_44380[(8)] = inst_44177);

(statearr_44380[(9)] = inst_44178);

(statearr_44380[(10)] = inst_44176);

return statearr_44380;
})();
var statearr_44381_44450 = state_44314__$1;
(statearr_44381_44450[(2)] = null);

(statearr_44381_44450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (45))){
var state_44314__$1 = state_44314;
var statearr_44382_44451 = state_44314__$1;
(statearr_44382_44451[(2)] = null);

(statearr_44382_44451[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (26))){
var inst_44236 = (state_44314[(23)]);
var inst_44231 = (state_44314[(24)]);
var inst_44228 = (state_44314[(19)]);
var inst_44232 = (state_44314[(25)]);
var inst_44234 = (state_44314[(26)]);
var inst_44251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44253 = (function (){var all_files = inst_44228;
var res_SINGLEQUOTE_ = inst_44231;
var res = inst_44232;
var files_not_loaded = inst_44234;
var dependencies_that_loaded = inst_44236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44251,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44252){
var map__44383 = p__44252;
var map__44383__$1 = ((((!((map__44383 == null)))?((((map__44383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44383):map__44383);
var namespace = cljs.core.get.call(null,map__44383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44383__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44251,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44254 = cljs.core.map.call(null,inst_44253,inst_44232);
var inst_44255 = cljs.core.pr_str.call(null,inst_44254);
var inst_44256 = figwheel.client.utils.log.call(null,inst_44255);
var inst_44257 = (function (){var all_files = inst_44228;
var res_SINGLEQUOTE_ = inst_44231;
var res = inst_44232;
var files_not_loaded = inst_44234;
var dependencies_that_loaded = inst_44236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44251,inst_44253,inst_44254,inst_44255,inst_44256,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44236,inst_44231,inst_44228,inst_44232,inst_44234,inst_44251,inst_44253,inst_44254,inst_44255,inst_44256,state_val_44315,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44258 = setTimeout(inst_44257,(10));
var state_44314__$1 = (function (){var statearr_44385 = state_44314;
(statearr_44385[(33)] = inst_44256);

(statearr_44385[(34)] = inst_44251);

return statearr_44385;
})();
var statearr_44386_44452 = state_44314__$1;
(statearr_44386_44452[(2)] = inst_44258);

(statearr_44386_44452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (16))){
var state_44314__$1 = state_44314;
var statearr_44387_44453 = state_44314__$1;
(statearr_44387_44453[(2)] = reload_dependents);

(statearr_44387_44453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (38))){
var inst_44268 = (state_44314[(16)]);
var inst_44285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44268);
var state_44314__$1 = state_44314;
var statearr_44388_44454 = state_44314__$1;
(statearr_44388_44454[(2)] = inst_44285);

(statearr_44388_44454[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (30))){
var state_44314__$1 = state_44314;
var statearr_44389_44455 = state_44314__$1;
(statearr_44389_44455[(2)] = null);

(statearr_44389_44455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (10))){
var inst_44188 = (state_44314[(22)]);
var inst_44190 = cljs.core.chunked_seq_QMARK_.call(null,inst_44188);
var state_44314__$1 = state_44314;
if(inst_44190){
var statearr_44390_44456 = state_44314__$1;
(statearr_44390_44456[(1)] = (13));

} else {
var statearr_44391_44457 = state_44314__$1;
(statearr_44391_44457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (18))){
var inst_44222 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
if(cljs.core.truth_(inst_44222)){
var statearr_44392_44458 = state_44314__$1;
(statearr_44392_44458[(1)] = (19));

} else {
var statearr_44393_44459 = state_44314__$1;
(statearr_44393_44459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (42))){
var state_44314__$1 = state_44314;
var statearr_44394_44460 = state_44314__$1;
(statearr_44394_44460[(2)] = null);

(statearr_44394_44460[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (37))){
var inst_44280 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44395_44461 = state_44314__$1;
(statearr_44395_44461[(2)] = inst_44280);

(statearr_44395_44461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (8))){
var inst_44188 = (state_44314[(22)]);
var inst_44175 = (state_44314[(7)]);
var inst_44188__$1 = cljs.core.seq.call(null,inst_44175);
var state_44314__$1 = (function (){var statearr_44396 = state_44314;
(statearr_44396[(22)] = inst_44188__$1);

return statearr_44396;
})();
if(inst_44188__$1){
var statearr_44397_44462 = state_44314__$1;
(statearr_44397_44462[(1)] = (10));

} else {
var statearr_44398_44463 = state_44314__$1;
(statearr_44398_44463[(1)] = (11));

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
});})(c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31732__auto__,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____0 = (function (){
var statearr_44402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44402[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__);

(statearr_44402[(1)] = (1));

return statearr_44402;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____1 = (function (state_44314){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_44314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e44403){if((e44403 instanceof Object)){
var ex__31736__auto__ = e44403;
var statearr_44404_44464 = state_44314;
(statearr_44404_44464[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44465 = state_44314;
state_44314 = G__44465;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__ = function(state_44314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____1.call(this,state_44314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31755__auto__ = (function (){var statearr_44405 = f__31754__auto__.call(null);
(statearr_44405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_44405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__,map__44160,map__44160__$1,opts,before_jsload,on_jsload,reload_dependents,map__44161,map__44161__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31753__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44468,link){
var map__44471 = p__44468;
var map__44471__$1 = ((((!((map__44471 == null)))?((((map__44471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44471):map__44471);
var file = cljs.core.get.call(null,map__44471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44471,map__44471__$1,file){
return (function (p1__44466_SHARP_,p2__44467_SHARP_){
if(cljs.core._EQ_.call(null,p1__44466_SHARP_,p2__44467_SHARP_)){
return p1__44466_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44471,map__44471__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44477){
var map__44478 = p__44477;
var map__44478__$1 = ((((!((map__44478 == null)))?((((map__44478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44478):map__44478);
var match_length = cljs.core.get.call(null,map__44478__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44478__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44473_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44473_SHARP_);
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
var args44480 = [];
var len__26121__auto___44483 = arguments.length;
var i__26122__auto___44484 = (0);
while(true){
if((i__26122__auto___44484 < len__26121__auto___44483)){
args44480.push((arguments[i__26122__auto___44484]));

var G__44485 = (i__26122__auto___44484 + (1));
i__26122__auto___44484 = G__44485;
continue;
} else {
}
break;
}

var G__44482 = args44480.length;
switch (G__44482) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44480.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44487_SHARP_,p2__44488_SHARP_){
return cljs.core.assoc.call(null,p1__44487_SHARP_,cljs.core.get.call(null,p2__44488_SHARP_,key),p2__44488_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__44489){
var map__44492 = p__44489;
var map__44492__$1 = ((((!((map__44492 == null)))?((((map__44492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44492):map__44492);
var f_data = map__44492__$1;
var file = cljs.core.get.call(null,map__44492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44494,p__44495){
var map__44504 = p__44494;
var map__44504__$1 = ((((!((map__44504 == null)))?((((map__44504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44504):map__44504);
var opts = map__44504__$1;
var on_cssload = cljs.core.get.call(null,map__44504__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44505 = p__44495;
var map__44505__$1 = ((((!((map__44505 == null)))?((((map__44505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44505):map__44505);
var files_msg = map__44505__$1;
var files = cljs.core.get.call(null,map__44505__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__44508_44512 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__44509_44513 = null;
var count__44510_44514 = (0);
var i__44511_44515 = (0);
while(true){
if((i__44511_44515 < count__44510_44514)){
var f_44516 = cljs.core._nth.call(null,chunk__44509_44513,i__44511_44515);
figwheel.client.file_reloading.reload_css_file.call(null,f_44516);

var G__44517 = seq__44508_44512;
var G__44518 = chunk__44509_44513;
var G__44519 = count__44510_44514;
var G__44520 = (i__44511_44515 + (1));
seq__44508_44512 = G__44517;
chunk__44509_44513 = G__44518;
count__44510_44514 = G__44519;
i__44511_44515 = G__44520;
continue;
} else {
var temp__4657__auto___44521 = cljs.core.seq.call(null,seq__44508_44512);
if(temp__4657__auto___44521){
var seq__44508_44522__$1 = temp__4657__auto___44521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44508_44522__$1)){
var c__25857__auto___44523 = cljs.core.chunk_first.call(null,seq__44508_44522__$1);
var G__44524 = cljs.core.chunk_rest.call(null,seq__44508_44522__$1);
var G__44525 = c__25857__auto___44523;
var G__44526 = cljs.core.count.call(null,c__25857__auto___44523);
var G__44527 = (0);
seq__44508_44512 = G__44524;
chunk__44509_44513 = G__44525;
count__44510_44514 = G__44526;
i__44511_44515 = G__44527;
continue;
} else {
var f_44528 = cljs.core.first.call(null,seq__44508_44522__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_44528);

var G__44529 = cljs.core.next.call(null,seq__44508_44522__$1);
var G__44530 = null;
var G__44531 = (0);
var G__44532 = (0);
seq__44508_44512 = G__44529;
chunk__44509_44513 = G__44530;
count__44510_44514 = G__44531;
i__44511_44515 = G__44532;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__44504,map__44504__$1,opts,on_cssload,map__44505,map__44505__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__44504,map__44504__$1,opts,on_cssload,map__44505,map__44505__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484163017492
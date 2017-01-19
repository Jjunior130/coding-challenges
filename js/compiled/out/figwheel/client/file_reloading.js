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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46454_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46454_SHARP_));
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
var seq__46459 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46460 = null;
var count__46461 = (0);
var i__46462 = (0);
while(true){
if((i__46462 < count__46461)){
var n = cljs.core._nth.call(null,chunk__46460,i__46462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46463 = seq__46459;
var G__46464 = chunk__46460;
var G__46465 = count__46461;
var G__46466 = (i__46462 + (1));
seq__46459 = G__46463;
chunk__46460 = G__46464;
count__46461 = G__46465;
i__46462 = G__46466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46459);
if(temp__4657__auto__){
var seq__46459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46459__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__46459__$1);
var G__46467 = cljs.core.chunk_rest.call(null,seq__46459__$1);
var G__46468 = c__25857__auto__;
var G__46469 = cljs.core.count.call(null,c__25857__auto__);
var G__46470 = (0);
seq__46459 = G__46467;
chunk__46460 = G__46468;
count__46461 = G__46469;
i__46462 = G__46470;
continue;
} else {
var n = cljs.core.first.call(null,seq__46459__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46471 = cljs.core.next.call(null,seq__46459__$1);
var G__46472 = null;
var G__46473 = (0);
var G__46474 = (0);
seq__46459 = G__46471;
chunk__46460 = G__46472;
count__46461 = G__46473;
i__46462 = G__46474;
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

var seq__46525_46536 = cljs.core.seq.call(null,deps);
var chunk__46526_46537 = null;
var count__46527_46538 = (0);
var i__46528_46539 = (0);
while(true){
if((i__46528_46539 < count__46527_46538)){
var dep_46540 = cljs.core._nth.call(null,chunk__46526_46537,i__46528_46539);
topo_sort_helper_STAR_.call(null,dep_46540,(depth + (1)),state);

var G__46541 = seq__46525_46536;
var G__46542 = chunk__46526_46537;
var G__46543 = count__46527_46538;
var G__46544 = (i__46528_46539 + (1));
seq__46525_46536 = G__46541;
chunk__46526_46537 = G__46542;
count__46527_46538 = G__46543;
i__46528_46539 = G__46544;
continue;
} else {
var temp__4657__auto___46545 = cljs.core.seq.call(null,seq__46525_46536);
if(temp__4657__auto___46545){
var seq__46525_46546__$1 = temp__4657__auto___46545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46525_46546__$1)){
var c__25857__auto___46547 = cljs.core.chunk_first.call(null,seq__46525_46546__$1);
var G__46548 = cljs.core.chunk_rest.call(null,seq__46525_46546__$1);
var G__46549 = c__25857__auto___46547;
var G__46550 = cljs.core.count.call(null,c__25857__auto___46547);
var G__46551 = (0);
seq__46525_46536 = G__46548;
chunk__46526_46537 = G__46549;
count__46527_46538 = G__46550;
i__46528_46539 = G__46551;
continue;
} else {
var dep_46552 = cljs.core.first.call(null,seq__46525_46546__$1);
topo_sort_helper_STAR_.call(null,dep_46552,(depth + (1)),state);

var G__46553 = cljs.core.next.call(null,seq__46525_46546__$1);
var G__46554 = null;
var G__46555 = (0);
var G__46556 = (0);
seq__46525_46536 = G__46553;
chunk__46526_46537 = G__46554;
count__46527_46538 = G__46555;
i__46528_46539 = G__46556;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46529){
var vec__46533 = p__46529;
var seq__46534 = cljs.core.seq.call(null,vec__46533);
var first__46535 = cljs.core.first.call(null,seq__46534);
var seq__46534__$1 = cljs.core.next.call(null,seq__46534);
var x = first__46535;
var xs = seq__46534__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46533,seq__46534,first__46535,seq__46534__$1,x,xs,get_deps__$1){
return (function (p1__46475_SHARP_){
return clojure.set.difference.call(null,p1__46475_SHARP_,x);
});})(vec__46533,seq__46534,first__46535,seq__46534__$1,x,xs,get_deps__$1))
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
var seq__46569 = cljs.core.seq.call(null,provides);
var chunk__46570 = null;
var count__46571 = (0);
var i__46572 = (0);
while(true){
if((i__46572 < count__46571)){
var prov = cljs.core._nth.call(null,chunk__46570,i__46572);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46573_46581 = cljs.core.seq.call(null,requires);
var chunk__46574_46582 = null;
var count__46575_46583 = (0);
var i__46576_46584 = (0);
while(true){
if((i__46576_46584 < count__46575_46583)){
var req_46585 = cljs.core._nth.call(null,chunk__46574_46582,i__46576_46584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46585,prov);

var G__46586 = seq__46573_46581;
var G__46587 = chunk__46574_46582;
var G__46588 = count__46575_46583;
var G__46589 = (i__46576_46584 + (1));
seq__46573_46581 = G__46586;
chunk__46574_46582 = G__46587;
count__46575_46583 = G__46588;
i__46576_46584 = G__46589;
continue;
} else {
var temp__4657__auto___46590 = cljs.core.seq.call(null,seq__46573_46581);
if(temp__4657__auto___46590){
var seq__46573_46591__$1 = temp__4657__auto___46590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46573_46591__$1)){
var c__25857__auto___46592 = cljs.core.chunk_first.call(null,seq__46573_46591__$1);
var G__46593 = cljs.core.chunk_rest.call(null,seq__46573_46591__$1);
var G__46594 = c__25857__auto___46592;
var G__46595 = cljs.core.count.call(null,c__25857__auto___46592);
var G__46596 = (0);
seq__46573_46581 = G__46593;
chunk__46574_46582 = G__46594;
count__46575_46583 = G__46595;
i__46576_46584 = G__46596;
continue;
} else {
var req_46597 = cljs.core.first.call(null,seq__46573_46591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46597,prov);

var G__46598 = cljs.core.next.call(null,seq__46573_46591__$1);
var G__46599 = null;
var G__46600 = (0);
var G__46601 = (0);
seq__46573_46581 = G__46598;
chunk__46574_46582 = G__46599;
count__46575_46583 = G__46600;
i__46576_46584 = G__46601;
continue;
}
} else {
}
}
break;
}

var G__46602 = seq__46569;
var G__46603 = chunk__46570;
var G__46604 = count__46571;
var G__46605 = (i__46572 + (1));
seq__46569 = G__46602;
chunk__46570 = G__46603;
count__46571 = G__46604;
i__46572 = G__46605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46569);
if(temp__4657__auto__){
var seq__46569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46569__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__46569__$1);
var G__46606 = cljs.core.chunk_rest.call(null,seq__46569__$1);
var G__46607 = c__25857__auto__;
var G__46608 = cljs.core.count.call(null,c__25857__auto__);
var G__46609 = (0);
seq__46569 = G__46606;
chunk__46570 = G__46607;
count__46571 = G__46608;
i__46572 = G__46609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46569__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46577_46610 = cljs.core.seq.call(null,requires);
var chunk__46578_46611 = null;
var count__46579_46612 = (0);
var i__46580_46613 = (0);
while(true){
if((i__46580_46613 < count__46579_46612)){
var req_46614 = cljs.core._nth.call(null,chunk__46578_46611,i__46580_46613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46614,prov);

var G__46615 = seq__46577_46610;
var G__46616 = chunk__46578_46611;
var G__46617 = count__46579_46612;
var G__46618 = (i__46580_46613 + (1));
seq__46577_46610 = G__46615;
chunk__46578_46611 = G__46616;
count__46579_46612 = G__46617;
i__46580_46613 = G__46618;
continue;
} else {
var temp__4657__auto___46619__$1 = cljs.core.seq.call(null,seq__46577_46610);
if(temp__4657__auto___46619__$1){
var seq__46577_46620__$1 = temp__4657__auto___46619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46577_46620__$1)){
var c__25857__auto___46621 = cljs.core.chunk_first.call(null,seq__46577_46620__$1);
var G__46622 = cljs.core.chunk_rest.call(null,seq__46577_46620__$1);
var G__46623 = c__25857__auto___46621;
var G__46624 = cljs.core.count.call(null,c__25857__auto___46621);
var G__46625 = (0);
seq__46577_46610 = G__46622;
chunk__46578_46611 = G__46623;
count__46579_46612 = G__46624;
i__46580_46613 = G__46625;
continue;
} else {
var req_46626 = cljs.core.first.call(null,seq__46577_46620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46626,prov);

var G__46627 = cljs.core.next.call(null,seq__46577_46620__$1);
var G__46628 = null;
var G__46629 = (0);
var G__46630 = (0);
seq__46577_46610 = G__46627;
chunk__46578_46611 = G__46628;
count__46579_46612 = G__46629;
i__46580_46613 = G__46630;
continue;
}
} else {
}
}
break;
}

var G__46631 = cljs.core.next.call(null,seq__46569__$1);
var G__46632 = null;
var G__46633 = (0);
var G__46634 = (0);
seq__46569 = G__46631;
chunk__46570 = G__46632;
count__46571 = G__46633;
i__46572 = G__46634;
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
var seq__46639_46643 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46640_46644 = null;
var count__46641_46645 = (0);
var i__46642_46646 = (0);
while(true){
if((i__46642_46646 < count__46641_46645)){
var ns_46647 = cljs.core._nth.call(null,chunk__46640_46644,i__46642_46646);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46647);

var G__46648 = seq__46639_46643;
var G__46649 = chunk__46640_46644;
var G__46650 = count__46641_46645;
var G__46651 = (i__46642_46646 + (1));
seq__46639_46643 = G__46648;
chunk__46640_46644 = G__46649;
count__46641_46645 = G__46650;
i__46642_46646 = G__46651;
continue;
} else {
var temp__4657__auto___46652 = cljs.core.seq.call(null,seq__46639_46643);
if(temp__4657__auto___46652){
var seq__46639_46653__$1 = temp__4657__auto___46652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46639_46653__$1)){
var c__25857__auto___46654 = cljs.core.chunk_first.call(null,seq__46639_46653__$1);
var G__46655 = cljs.core.chunk_rest.call(null,seq__46639_46653__$1);
var G__46656 = c__25857__auto___46654;
var G__46657 = cljs.core.count.call(null,c__25857__auto___46654);
var G__46658 = (0);
seq__46639_46643 = G__46655;
chunk__46640_46644 = G__46656;
count__46641_46645 = G__46657;
i__46642_46646 = G__46658;
continue;
} else {
var ns_46659 = cljs.core.first.call(null,seq__46639_46653__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46659);

var G__46660 = cljs.core.next.call(null,seq__46639_46653__$1);
var G__46661 = null;
var G__46662 = (0);
var G__46663 = (0);
seq__46639_46643 = G__46660;
chunk__46640_46644 = G__46661;
count__46641_46645 = G__46662;
i__46642_46646 = G__46663;
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
var G__46664__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46665__i = 0, G__46665__a = new Array(arguments.length -  0);
while (G__46665__i < G__46665__a.length) {G__46665__a[G__46665__i] = arguments[G__46665__i + 0]; ++G__46665__i;}
  args = new cljs.core.IndexedSeq(G__46665__a,0);
} 
return G__46664__delegate.call(this,args);};
G__46664.cljs$lang$maxFixedArity = 0;
G__46664.cljs$lang$applyTo = (function (arglist__46666){
var args = cljs.core.seq(arglist__46666);
return G__46664__delegate(args);
});
G__46664.cljs$core$IFn$_invoke$arity$variadic = G__46664__delegate;
return G__46664;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46668 = cljs.core._EQ_;
var expr__46669 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46668.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46669))){
var path_parts = ((function (pred__46668,expr__46669){
return (function (p1__46667_SHARP_){
return clojure.string.split.call(null,p1__46667_SHARP_,/[\/\\]/);
});})(pred__46668,expr__46669))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__46668,expr__46669){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46671){if((e46671 instanceof Error)){
var e = e46671;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46671;

}
}})());
});
;})(path_parts,sep,root,pred__46668,expr__46669))
} else {
if(cljs.core.truth_(pred__46668.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46669))){
return ((function (pred__46668,expr__46669){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__46668,expr__46669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__46668,expr__46669))
);

return deferred.addErrback(((function (deferred,pred__46668,expr__46669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__46668,expr__46669))
);
});
;})(pred__46668,expr__46669))
} else {
return ((function (pred__46668,expr__46669){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46668,expr__46669))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46672,callback){
var map__46675 = p__46672;
var map__46675__$1 = ((((!((map__46675 == null)))?((((map__46675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46675):map__46675);
var file_msg = map__46675__$1;
var request_url = cljs.core.get.call(null,map__46675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46675,map__46675__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46675,map__46675__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__){
return (function (state_46699){
var state_val_46700 = (state_46699[(1)]);
if((state_val_46700 === (7))){
var inst_46695 = (state_46699[(2)]);
var state_46699__$1 = state_46699;
var statearr_46701_46721 = state_46699__$1;
(statearr_46701_46721[(2)] = inst_46695);

(statearr_46701_46721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (1))){
var state_46699__$1 = state_46699;
var statearr_46702_46722 = state_46699__$1;
(statearr_46702_46722[(2)] = null);

(statearr_46702_46722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (4))){
var inst_46679 = (state_46699[(7)]);
var inst_46679__$1 = (state_46699[(2)]);
var state_46699__$1 = (function (){var statearr_46703 = state_46699;
(statearr_46703[(7)] = inst_46679__$1);

return statearr_46703;
})();
if(cljs.core.truth_(inst_46679__$1)){
var statearr_46704_46723 = state_46699__$1;
(statearr_46704_46723[(1)] = (5));

} else {
var statearr_46705_46724 = state_46699__$1;
(statearr_46705_46724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (6))){
var state_46699__$1 = state_46699;
var statearr_46706_46725 = state_46699__$1;
(statearr_46706_46725[(2)] = null);

(statearr_46706_46725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (3))){
var inst_46697 = (state_46699[(2)]);
var state_46699__$1 = state_46699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46699__$1,inst_46697);
} else {
if((state_val_46700 === (2))){
var state_46699__$1 = state_46699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46699__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46700 === (11))){
var inst_46691 = (state_46699[(2)]);
var state_46699__$1 = (function (){var statearr_46707 = state_46699;
(statearr_46707[(8)] = inst_46691);

return statearr_46707;
})();
var statearr_46708_46726 = state_46699__$1;
(statearr_46708_46726[(2)] = null);

(statearr_46708_46726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (9))){
var inst_46685 = (state_46699[(9)]);
var inst_46683 = (state_46699[(10)]);
var inst_46687 = inst_46685.call(null,inst_46683);
var state_46699__$1 = state_46699;
var statearr_46709_46727 = state_46699__$1;
(statearr_46709_46727[(2)] = inst_46687);

(statearr_46709_46727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (5))){
var inst_46679 = (state_46699[(7)]);
var inst_46681 = figwheel.client.file_reloading.blocking_load.call(null,inst_46679);
var state_46699__$1 = state_46699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46699__$1,(8),inst_46681);
} else {
if((state_val_46700 === (10))){
var inst_46683 = (state_46699[(10)]);
var inst_46689 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46683);
var state_46699__$1 = state_46699;
var statearr_46710_46728 = state_46699__$1;
(statearr_46710_46728[(2)] = inst_46689);

(statearr_46710_46728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46700 === (8))){
var inst_46685 = (state_46699[(9)]);
var inst_46679 = (state_46699[(7)]);
var inst_46683 = (state_46699[(2)]);
var inst_46684 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46685__$1 = cljs.core.get.call(null,inst_46684,inst_46679);
var state_46699__$1 = (function (){var statearr_46711 = state_46699;
(statearr_46711[(9)] = inst_46685__$1);

(statearr_46711[(10)] = inst_46683);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46685__$1)){
var statearr_46712_46729 = state_46699__$1;
(statearr_46712_46729[(1)] = (9));

} else {
var statearr_46713_46730 = state_46699__$1;
(statearr_46713_46730[(1)] = (10));

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
});})(c__31761__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31741__auto__ = null;
var figwheel$client$file_reloading$state_machine__31741__auto____0 = (function (){
var statearr_46717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46717[(0)] = figwheel$client$file_reloading$state_machine__31741__auto__);

(statearr_46717[(1)] = (1));

return statearr_46717;
});
var figwheel$client$file_reloading$state_machine__31741__auto____1 = (function (state_46699){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_46699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e46718){if((e46718 instanceof Object)){
var ex__31744__auto__ = e46718;
var statearr_46719_46731 = state_46699;
(statearr_46719_46731[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46732 = state_46699;
state_46699 = G__46732;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31741__auto__ = function(state_46699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31741__auto____1.call(this,state_46699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31741__auto____0;
figwheel$client$file_reloading$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31741__auto____1;
return figwheel$client$file_reloading$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__))
})();
var state__31763__auto__ = (function (){var statearr_46720 = f__31762__auto__.call(null);
(statearr_46720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_46720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__))
);

return c__31761__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46733,callback){
var map__46736 = p__46733;
var map__46736__$1 = ((((!((map__46736 == null)))?((((map__46736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46736):map__46736);
var file_msg = map__46736__$1;
var namespace = cljs.core.get.call(null,map__46736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46736,map__46736__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46736,map__46736__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46738){
var map__46741 = p__46738;
var map__46741__$1 = ((((!((map__46741 == null)))?((((map__46741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46741):map__46741);
var file_msg = map__46741__$1;
var namespace = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46743,callback){
var map__46746 = p__46743;
var map__46746__$1 = ((((!((map__46746 == null)))?((((map__46746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46746):map__46746);
var file_msg = map__46746__$1;
var request_url = cljs.core.get.call(null,map__46746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31761__auto___46850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___46850,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___46850,out){
return (function (state_46832){
var state_val_46833 = (state_46832[(1)]);
if((state_val_46833 === (1))){
var inst_46806 = cljs.core.seq.call(null,files);
var inst_46807 = cljs.core.first.call(null,inst_46806);
var inst_46808 = cljs.core.next.call(null,inst_46806);
var inst_46809 = files;
var state_46832__$1 = (function (){var statearr_46834 = state_46832;
(statearr_46834[(7)] = inst_46807);

(statearr_46834[(8)] = inst_46809);

(statearr_46834[(9)] = inst_46808);

return statearr_46834;
})();
var statearr_46835_46851 = state_46832__$1;
(statearr_46835_46851[(2)] = null);

(statearr_46835_46851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46833 === (2))){
var inst_46815 = (state_46832[(10)]);
var inst_46809 = (state_46832[(8)]);
var inst_46814 = cljs.core.seq.call(null,inst_46809);
var inst_46815__$1 = cljs.core.first.call(null,inst_46814);
var inst_46816 = cljs.core.next.call(null,inst_46814);
var inst_46817 = (inst_46815__$1 == null);
var inst_46818 = cljs.core.not.call(null,inst_46817);
var state_46832__$1 = (function (){var statearr_46836 = state_46832;
(statearr_46836[(11)] = inst_46816);

(statearr_46836[(10)] = inst_46815__$1);

return statearr_46836;
})();
if(inst_46818){
var statearr_46837_46852 = state_46832__$1;
(statearr_46837_46852[(1)] = (4));

} else {
var statearr_46838_46853 = state_46832__$1;
(statearr_46838_46853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46833 === (3))){
var inst_46830 = (state_46832[(2)]);
var state_46832__$1 = state_46832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46832__$1,inst_46830);
} else {
if((state_val_46833 === (4))){
var inst_46815 = (state_46832[(10)]);
var inst_46820 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46815);
var state_46832__$1 = state_46832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46832__$1,(7),inst_46820);
} else {
if((state_val_46833 === (5))){
var inst_46826 = cljs.core.async.close_BANG_.call(null,out);
var state_46832__$1 = state_46832;
var statearr_46839_46854 = state_46832__$1;
(statearr_46839_46854[(2)] = inst_46826);

(statearr_46839_46854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46833 === (6))){
var inst_46828 = (state_46832[(2)]);
var state_46832__$1 = state_46832;
var statearr_46840_46855 = state_46832__$1;
(statearr_46840_46855[(2)] = inst_46828);

(statearr_46840_46855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46833 === (7))){
var inst_46816 = (state_46832[(11)]);
var inst_46822 = (state_46832[(2)]);
var inst_46823 = cljs.core.async.put_BANG_.call(null,out,inst_46822);
var inst_46809 = inst_46816;
var state_46832__$1 = (function (){var statearr_46841 = state_46832;
(statearr_46841[(8)] = inst_46809);

(statearr_46841[(12)] = inst_46823);

return statearr_46841;
})();
var statearr_46842_46856 = state_46832__$1;
(statearr_46842_46856[(2)] = null);

(statearr_46842_46856[(1)] = (2));


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
});})(c__31761__auto___46850,out))
;
return ((function (switch__31740__auto__,c__31761__auto___46850,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____0 = (function (){
var statearr_46846 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46846[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__);

(statearr_46846[(1)] = (1));

return statearr_46846;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____1 = (function (state_46832){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_46832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e46847){if((e46847 instanceof Object)){
var ex__31744__auto__ = e46847;
var statearr_46848_46857 = state_46832;
(statearr_46848_46857[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46858 = state_46832;
state_46832 = G__46858;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__ = function(state_46832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____1.call(this,state_46832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___46850,out))
})();
var state__31763__auto__ = (function (){var statearr_46849 = f__31762__auto__.call(null);
(statearr_46849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___46850);

return statearr_46849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___46850,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46859,opts){
var map__46863 = p__46859;
var map__46863__$1 = ((((!((map__46863 == null)))?((((map__46863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46863):map__46863);
var eval_body__$1 = cljs.core.get.call(null,map__46863__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e46865){var e = e46865;
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
return (function (p1__46866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46866_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46875){
var vec__46876 = p__46875;
var k = cljs.core.nth.call(null,vec__46876,(0),null);
var v = cljs.core.nth.call(null,vec__46876,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46879){
var vec__46880 = p__46879;
var k = cljs.core.nth.call(null,vec__46880,(0),null);
var v = cljs.core.nth.call(null,vec__46880,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46886,p__46887){
var map__47134 = p__46886;
var map__47134__$1 = ((((!((map__47134 == null)))?((((map__47134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47134):map__47134);
var opts = map__47134__$1;
var before_jsload = cljs.core.get.call(null,map__47134__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47134__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47134__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47135 = p__46887;
var map__47135__$1 = ((((!((map__47135 == null)))?((((map__47135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47135):map__47135);
var msg = map__47135__$1;
var files = cljs.core.get.call(null,map__47135__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47135__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47135__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47288){
var state_val_47289 = (state_47288[(1)]);
if((state_val_47289 === (7))){
var inst_47149 = (state_47288[(7)]);
var inst_47152 = (state_47288[(8)]);
var inst_47150 = (state_47288[(9)]);
var inst_47151 = (state_47288[(10)]);
var inst_47157 = cljs.core._nth.call(null,inst_47150,inst_47152);
var inst_47158 = figwheel.client.file_reloading.eval_body.call(null,inst_47157,opts);
var inst_47159 = (inst_47152 + (1));
var tmp47290 = inst_47149;
var tmp47291 = inst_47150;
var tmp47292 = inst_47151;
var inst_47149__$1 = tmp47290;
var inst_47150__$1 = tmp47291;
var inst_47151__$1 = tmp47292;
var inst_47152__$1 = inst_47159;
var state_47288__$1 = (function (){var statearr_47293 = state_47288;
(statearr_47293[(7)] = inst_47149__$1);

(statearr_47293[(11)] = inst_47158);

(statearr_47293[(8)] = inst_47152__$1);

(statearr_47293[(9)] = inst_47150__$1);

(statearr_47293[(10)] = inst_47151__$1);

return statearr_47293;
})();
var statearr_47294_47380 = state_47288__$1;
(statearr_47294_47380[(2)] = null);

(statearr_47294_47380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (20))){
var inst_47192 = (state_47288[(12)]);
var inst_47200 = figwheel.client.file_reloading.sort_files.call(null,inst_47192);
var state_47288__$1 = state_47288;
var statearr_47295_47381 = state_47288__$1;
(statearr_47295_47381[(2)] = inst_47200);

(statearr_47295_47381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (27))){
var state_47288__$1 = state_47288;
var statearr_47296_47382 = state_47288__$1;
(statearr_47296_47382[(2)] = null);

(statearr_47296_47382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (1))){
var inst_47141 = (state_47288[(13)]);
var inst_47138 = before_jsload.call(null,files);
var inst_47139 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47140 = (function (){return ((function (inst_47141,inst_47138,inst_47139,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46883_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46883_SHARP_);
});
;})(inst_47141,inst_47138,inst_47139,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47141__$1 = cljs.core.filter.call(null,inst_47140,files);
var inst_47142 = cljs.core.not_empty.call(null,inst_47141__$1);
var state_47288__$1 = (function (){var statearr_47297 = state_47288;
(statearr_47297[(13)] = inst_47141__$1);

(statearr_47297[(14)] = inst_47139);

(statearr_47297[(15)] = inst_47138);

return statearr_47297;
})();
if(cljs.core.truth_(inst_47142)){
var statearr_47298_47383 = state_47288__$1;
(statearr_47298_47383[(1)] = (2));

} else {
var statearr_47299_47384 = state_47288__$1;
(statearr_47299_47384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (24))){
var state_47288__$1 = state_47288;
var statearr_47300_47385 = state_47288__$1;
(statearr_47300_47385[(2)] = null);

(statearr_47300_47385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (39))){
var inst_47242 = (state_47288[(16)]);
var state_47288__$1 = state_47288;
var statearr_47301_47386 = state_47288__$1;
(statearr_47301_47386[(2)] = inst_47242);

(statearr_47301_47386[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (46))){
var inst_47283 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47302_47387 = state_47288__$1;
(statearr_47302_47387[(2)] = inst_47283);

(statearr_47302_47387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (4))){
var inst_47186 = (state_47288[(2)]);
var inst_47187 = cljs.core.List.EMPTY;
var inst_47188 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47187);
var inst_47189 = (function (){return ((function (inst_47186,inst_47187,inst_47188,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46884_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46884_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46884_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_47186,inst_47187,inst_47188,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47190 = cljs.core.filter.call(null,inst_47189,files);
var inst_47191 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47192 = cljs.core.concat.call(null,inst_47190,inst_47191);
var state_47288__$1 = (function (){var statearr_47303 = state_47288;
(statearr_47303[(17)] = inst_47188);

(statearr_47303[(18)] = inst_47186);

(statearr_47303[(12)] = inst_47192);

return statearr_47303;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47304_47388 = state_47288__$1;
(statearr_47304_47388[(1)] = (16));

} else {
var statearr_47305_47389 = state_47288__$1;
(statearr_47305_47389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (15))){
var inst_47176 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47306_47390 = state_47288__$1;
(statearr_47306_47390[(2)] = inst_47176);

(statearr_47306_47390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (21))){
var inst_47202 = (state_47288[(19)]);
var inst_47202__$1 = (state_47288[(2)]);
var inst_47203 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47202__$1);
var state_47288__$1 = (function (){var statearr_47307 = state_47288;
(statearr_47307[(19)] = inst_47202__$1);

return statearr_47307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47288__$1,(22),inst_47203);
} else {
if((state_val_47289 === (31))){
var inst_47286 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47288__$1,inst_47286);
} else {
if((state_val_47289 === (32))){
var inst_47242 = (state_47288[(16)]);
var inst_47247 = inst_47242.cljs$lang$protocol_mask$partition0$;
var inst_47248 = (inst_47247 & (64));
var inst_47249 = inst_47242.cljs$core$ISeq$;
var inst_47250 = (inst_47248) || (inst_47249);
var state_47288__$1 = state_47288;
if(cljs.core.truth_(inst_47250)){
var statearr_47308_47391 = state_47288__$1;
(statearr_47308_47391[(1)] = (35));

} else {
var statearr_47309_47392 = state_47288__$1;
(statearr_47309_47392[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (40))){
var inst_47263 = (state_47288[(20)]);
var inst_47262 = (state_47288[(2)]);
var inst_47263__$1 = cljs.core.get.call(null,inst_47262,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47264 = cljs.core.get.call(null,inst_47262,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47265 = cljs.core.not_empty.call(null,inst_47263__$1);
var state_47288__$1 = (function (){var statearr_47310 = state_47288;
(statearr_47310[(21)] = inst_47264);

(statearr_47310[(20)] = inst_47263__$1);

return statearr_47310;
})();
if(cljs.core.truth_(inst_47265)){
var statearr_47311_47393 = state_47288__$1;
(statearr_47311_47393[(1)] = (41));

} else {
var statearr_47312_47394 = state_47288__$1;
(statearr_47312_47394[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (33))){
var state_47288__$1 = state_47288;
var statearr_47313_47395 = state_47288__$1;
(statearr_47313_47395[(2)] = false);

(statearr_47313_47395[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (13))){
var inst_47162 = (state_47288[(22)]);
var inst_47166 = cljs.core.chunk_first.call(null,inst_47162);
var inst_47167 = cljs.core.chunk_rest.call(null,inst_47162);
var inst_47168 = cljs.core.count.call(null,inst_47166);
var inst_47149 = inst_47167;
var inst_47150 = inst_47166;
var inst_47151 = inst_47168;
var inst_47152 = (0);
var state_47288__$1 = (function (){var statearr_47314 = state_47288;
(statearr_47314[(7)] = inst_47149);

(statearr_47314[(8)] = inst_47152);

(statearr_47314[(9)] = inst_47150);

(statearr_47314[(10)] = inst_47151);

return statearr_47314;
})();
var statearr_47315_47396 = state_47288__$1;
(statearr_47315_47396[(2)] = null);

(statearr_47315_47396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (22))){
var inst_47210 = (state_47288[(23)]);
var inst_47205 = (state_47288[(24)]);
var inst_47206 = (state_47288[(25)]);
var inst_47202 = (state_47288[(19)]);
var inst_47205__$1 = (state_47288[(2)]);
var inst_47206__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47205__$1);
var inst_47207 = (function (){var all_files = inst_47202;
var res_SINGLEQUOTE_ = inst_47205__$1;
var res = inst_47206__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47210,inst_47205,inst_47206,inst_47202,inst_47205__$1,inst_47206__$1,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46885_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46885_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47210,inst_47205,inst_47206,inst_47202,inst_47205__$1,inst_47206__$1,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47208 = cljs.core.filter.call(null,inst_47207,inst_47205__$1);
var inst_47209 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47209);
var inst_47211 = cljs.core.not_empty.call(null,inst_47210__$1);
var state_47288__$1 = (function (){var statearr_47316 = state_47288;
(statearr_47316[(23)] = inst_47210__$1);

(statearr_47316[(26)] = inst_47208);

(statearr_47316[(24)] = inst_47205__$1);

(statearr_47316[(25)] = inst_47206__$1);

return statearr_47316;
})();
if(cljs.core.truth_(inst_47211)){
var statearr_47317_47397 = state_47288__$1;
(statearr_47317_47397[(1)] = (23));

} else {
var statearr_47318_47398 = state_47288__$1;
(statearr_47318_47398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (36))){
var state_47288__$1 = state_47288;
var statearr_47319_47399 = state_47288__$1;
(statearr_47319_47399[(2)] = false);

(statearr_47319_47399[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (41))){
var inst_47263 = (state_47288[(20)]);
var inst_47267 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47268 = cljs.core.map.call(null,inst_47267,inst_47263);
var inst_47269 = cljs.core.pr_str.call(null,inst_47268);
var inst_47270 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_47269)].join('');
var inst_47271 = figwheel.client.utils.log.call(null,inst_47270);
var state_47288__$1 = state_47288;
var statearr_47320_47400 = state_47288__$1;
(statearr_47320_47400[(2)] = inst_47271);

(statearr_47320_47400[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (43))){
var inst_47264 = (state_47288[(21)]);
var inst_47274 = (state_47288[(2)]);
var inst_47275 = cljs.core.not_empty.call(null,inst_47264);
var state_47288__$1 = (function (){var statearr_47321 = state_47288;
(statearr_47321[(27)] = inst_47274);

return statearr_47321;
})();
if(cljs.core.truth_(inst_47275)){
var statearr_47322_47401 = state_47288__$1;
(statearr_47322_47401[(1)] = (44));

} else {
var statearr_47323_47402 = state_47288__$1;
(statearr_47323_47402[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (29))){
var inst_47210 = (state_47288[(23)]);
var inst_47208 = (state_47288[(26)]);
var inst_47205 = (state_47288[(24)]);
var inst_47206 = (state_47288[(25)]);
var inst_47242 = (state_47288[(16)]);
var inst_47202 = (state_47288[(19)]);
var inst_47238 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47241 = (function (){var all_files = inst_47202;
var res_SINGLEQUOTE_ = inst_47205;
var res = inst_47206;
var files_not_loaded = inst_47208;
var dependencies_that_loaded = inst_47210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47242,inst_47202,inst_47238,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47240){
var map__47324 = p__47240;
var map__47324__$1 = ((((!((map__47324 == null)))?((((map__47324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47324):map__47324);
var namespace = cljs.core.get.call(null,map__47324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47242,inst_47202,inst_47238,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47242__$1 = cljs.core.group_by.call(null,inst_47241,inst_47208);
var inst_47244 = (inst_47242__$1 == null);
var inst_47245 = cljs.core.not.call(null,inst_47244);
var state_47288__$1 = (function (){var statearr_47326 = state_47288;
(statearr_47326[(28)] = inst_47238);

(statearr_47326[(16)] = inst_47242__$1);

return statearr_47326;
})();
if(inst_47245){
var statearr_47327_47403 = state_47288__$1;
(statearr_47327_47403[(1)] = (32));

} else {
var statearr_47328_47404 = state_47288__$1;
(statearr_47328_47404[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (44))){
var inst_47264 = (state_47288[(21)]);
var inst_47277 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47264);
var inst_47278 = cljs.core.pr_str.call(null,inst_47277);
var inst_47279 = [cljs.core.str("not required: "),cljs.core.str(inst_47278)].join('');
var inst_47280 = figwheel.client.utils.log.call(null,inst_47279);
var state_47288__$1 = state_47288;
var statearr_47329_47405 = state_47288__$1;
(statearr_47329_47405[(2)] = inst_47280);

(statearr_47329_47405[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (6))){
var inst_47183 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47330_47406 = state_47288__$1;
(statearr_47330_47406[(2)] = inst_47183);

(statearr_47330_47406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (28))){
var inst_47208 = (state_47288[(26)]);
var inst_47235 = (state_47288[(2)]);
var inst_47236 = cljs.core.not_empty.call(null,inst_47208);
var state_47288__$1 = (function (){var statearr_47331 = state_47288;
(statearr_47331[(29)] = inst_47235);

return statearr_47331;
})();
if(cljs.core.truth_(inst_47236)){
var statearr_47332_47407 = state_47288__$1;
(statearr_47332_47407[(1)] = (29));

} else {
var statearr_47333_47408 = state_47288__$1;
(statearr_47333_47408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (25))){
var inst_47206 = (state_47288[(25)]);
var inst_47222 = (state_47288[(2)]);
var inst_47223 = cljs.core.not_empty.call(null,inst_47206);
var state_47288__$1 = (function (){var statearr_47334 = state_47288;
(statearr_47334[(30)] = inst_47222);

return statearr_47334;
})();
if(cljs.core.truth_(inst_47223)){
var statearr_47335_47409 = state_47288__$1;
(statearr_47335_47409[(1)] = (26));

} else {
var statearr_47336_47410 = state_47288__$1;
(statearr_47336_47410[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (34))){
var inst_47257 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
if(cljs.core.truth_(inst_47257)){
var statearr_47337_47411 = state_47288__$1;
(statearr_47337_47411[(1)] = (38));

} else {
var statearr_47338_47412 = state_47288__$1;
(statearr_47338_47412[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (17))){
var state_47288__$1 = state_47288;
var statearr_47339_47413 = state_47288__$1;
(statearr_47339_47413[(2)] = recompile_dependents);

(statearr_47339_47413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (3))){
var state_47288__$1 = state_47288;
var statearr_47340_47414 = state_47288__$1;
(statearr_47340_47414[(2)] = null);

(statearr_47340_47414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (12))){
var inst_47179 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47341_47415 = state_47288__$1;
(statearr_47341_47415[(2)] = inst_47179);

(statearr_47341_47415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (2))){
var inst_47141 = (state_47288[(13)]);
var inst_47148 = cljs.core.seq.call(null,inst_47141);
var inst_47149 = inst_47148;
var inst_47150 = null;
var inst_47151 = (0);
var inst_47152 = (0);
var state_47288__$1 = (function (){var statearr_47342 = state_47288;
(statearr_47342[(7)] = inst_47149);

(statearr_47342[(8)] = inst_47152);

(statearr_47342[(9)] = inst_47150);

(statearr_47342[(10)] = inst_47151);

return statearr_47342;
})();
var statearr_47343_47416 = state_47288__$1;
(statearr_47343_47416[(2)] = null);

(statearr_47343_47416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (23))){
var inst_47210 = (state_47288[(23)]);
var inst_47208 = (state_47288[(26)]);
var inst_47205 = (state_47288[(24)]);
var inst_47206 = (state_47288[(25)]);
var inst_47202 = (state_47288[(19)]);
var inst_47213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47215 = (function (){var all_files = inst_47202;
var res_SINGLEQUOTE_ = inst_47205;
var res = inst_47206;
var files_not_loaded = inst_47208;
var dependencies_that_loaded = inst_47210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47213,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47214){
var map__47344 = p__47214;
var map__47344__$1 = ((((!((map__47344 == null)))?((((map__47344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47344):map__47344);
var request_url = cljs.core.get.call(null,map__47344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47213,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47216 = cljs.core.reverse.call(null,inst_47210);
var inst_47217 = cljs.core.map.call(null,inst_47215,inst_47216);
var inst_47218 = cljs.core.pr_str.call(null,inst_47217);
var inst_47219 = figwheel.client.utils.log.call(null,inst_47218);
var state_47288__$1 = (function (){var statearr_47346 = state_47288;
(statearr_47346[(31)] = inst_47213);

return statearr_47346;
})();
var statearr_47347_47417 = state_47288__$1;
(statearr_47347_47417[(2)] = inst_47219);

(statearr_47347_47417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (35))){
var state_47288__$1 = state_47288;
var statearr_47348_47418 = state_47288__$1;
(statearr_47348_47418[(2)] = true);

(statearr_47348_47418[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (19))){
var inst_47192 = (state_47288[(12)]);
var inst_47198 = figwheel.client.file_reloading.expand_files.call(null,inst_47192);
var state_47288__$1 = state_47288;
var statearr_47349_47419 = state_47288__$1;
(statearr_47349_47419[(2)] = inst_47198);

(statearr_47349_47419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (11))){
var state_47288__$1 = state_47288;
var statearr_47350_47420 = state_47288__$1;
(statearr_47350_47420[(2)] = null);

(statearr_47350_47420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (9))){
var inst_47181 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47351_47421 = state_47288__$1;
(statearr_47351_47421[(2)] = inst_47181);

(statearr_47351_47421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (5))){
var inst_47152 = (state_47288[(8)]);
var inst_47151 = (state_47288[(10)]);
var inst_47154 = (inst_47152 < inst_47151);
var inst_47155 = inst_47154;
var state_47288__$1 = state_47288;
if(cljs.core.truth_(inst_47155)){
var statearr_47352_47422 = state_47288__$1;
(statearr_47352_47422[(1)] = (7));

} else {
var statearr_47353_47423 = state_47288__$1;
(statearr_47353_47423[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (14))){
var inst_47162 = (state_47288[(22)]);
var inst_47171 = cljs.core.first.call(null,inst_47162);
var inst_47172 = figwheel.client.file_reloading.eval_body.call(null,inst_47171,opts);
var inst_47173 = cljs.core.next.call(null,inst_47162);
var inst_47149 = inst_47173;
var inst_47150 = null;
var inst_47151 = (0);
var inst_47152 = (0);
var state_47288__$1 = (function (){var statearr_47354 = state_47288;
(statearr_47354[(32)] = inst_47172);

(statearr_47354[(7)] = inst_47149);

(statearr_47354[(8)] = inst_47152);

(statearr_47354[(9)] = inst_47150);

(statearr_47354[(10)] = inst_47151);

return statearr_47354;
})();
var statearr_47355_47424 = state_47288__$1;
(statearr_47355_47424[(2)] = null);

(statearr_47355_47424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (45))){
var state_47288__$1 = state_47288;
var statearr_47356_47425 = state_47288__$1;
(statearr_47356_47425[(2)] = null);

(statearr_47356_47425[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (26))){
var inst_47210 = (state_47288[(23)]);
var inst_47208 = (state_47288[(26)]);
var inst_47205 = (state_47288[(24)]);
var inst_47206 = (state_47288[(25)]);
var inst_47202 = (state_47288[(19)]);
var inst_47225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47227 = (function (){var all_files = inst_47202;
var res_SINGLEQUOTE_ = inst_47205;
var res = inst_47206;
var files_not_loaded = inst_47208;
var dependencies_that_loaded = inst_47210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47225,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47226){
var map__47357 = p__47226;
var map__47357__$1 = ((((!((map__47357 == null)))?((((map__47357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47357):map__47357);
var namespace = cljs.core.get.call(null,map__47357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47225,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47228 = cljs.core.map.call(null,inst_47227,inst_47206);
var inst_47229 = cljs.core.pr_str.call(null,inst_47228);
var inst_47230 = figwheel.client.utils.log.call(null,inst_47229);
var inst_47231 = (function (){var all_files = inst_47202;
var res_SINGLEQUOTE_ = inst_47205;
var res = inst_47206;
var files_not_loaded = inst_47208;
var dependencies_that_loaded = inst_47210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47225,inst_47227,inst_47228,inst_47229,inst_47230,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47210,inst_47208,inst_47205,inst_47206,inst_47202,inst_47225,inst_47227,inst_47228,inst_47229,inst_47230,state_val_47289,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47232 = setTimeout(inst_47231,(10));
var state_47288__$1 = (function (){var statearr_47359 = state_47288;
(statearr_47359[(33)] = inst_47230);

(statearr_47359[(34)] = inst_47225);

return statearr_47359;
})();
var statearr_47360_47426 = state_47288__$1;
(statearr_47360_47426[(2)] = inst_47232);

(statearr_47360_47426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (16))){
var state_47288__$1 = state_47288;
var statearr_47361_47427 = state_47288__$1;
(statearr_47361_47427[(2)] = reload_dependents);

(statearr_47361_47427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (38))){
var inst_47242 = (state_47288[(16)]);
var inst_47259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47242);
var state_47288__$1 = state_47288;
var statearr_47362_47428 = state_47288__$1;
(statearr_47362_47428[(2)] = inst_47259);

(statearr_47362_47428[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (30))){
var state_47288__$1 = state_47288;
var statearr_47363_47429 = state_47288__$1;
(statearr_47363_47429[(2)] = null);

(statearr_47363_47429[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (10))){
var inst_47162 = (state_47288[(22)]);
var inst_47164 = cljs.core.chunked_seq_QMARK_.call(null,inst_47162);
var state_47288__$1 = state_47288;
if(inst_47164){
var statearr_47364_47430 = state_47288__$1;
(statearr_47364_47430[(1)] = (13));

} else {
var statearr_47365_47431 = state_47288__$1;
(statearr_47365_47431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (18))){
var inst_47196 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
if(cljs.core.truth_(inst_47196)){
var statearr_47366_47432 = state_47288__$1;
(statearr_47366_47432[(1)] = (19));

} else {
var statearr_47367_47433 = state_47288__$1;
(statearr_47367_47433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (42))){
var state_47288__$1 = state_47288;
var statearr_47368_47434 = state_47288__$1;
(statearr_47368_47434[(2)] = null);

(statearr_47368_47434[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (37))){
var inst_47254 = (state_47288[(2)]);
var state_47288__$1 = state_47288;
var statearr_47369_47435 = state_47288__$1;
(statearr_47369_47435[(2)] = inst_47254);

(statearr_47369_47435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47289 === (8))){
var inst_47149 = (state_47288[(7)]);
var inst_47162 = (state_47288[(22)]);
var inst_47162__$1 = cljs.core.seq.call(null,inst_47149);
var state_47288__$1 = (function (){var statearr_47370 = state_47288;
(statearr_47370[(22)] = inst_47162__$1);

return statearr_47370;
})();
if(inst_47162__$1){
var statearr_47371_47436 = state_47288__$1;
(statearr_47371_47436[(1)] = (10));

} else {
var statearr_47372_47437 = state_47288__$1;
(statearr_47372_47437[(1)] = (11));

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
});})(c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31740__auto__,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____0 = (function (){
var statearr_47376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47376[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__);

(statearr_47376[(1)] = (1));

return statearr_47376;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____1 = (function (state_47288){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_47288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e47377){if((e47377 instanceof Object)){
var ex__31744__auto__ = e47377;
var statearr_47378_47438 = state_47288;
(statearr_47378_47438[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47439 = state_47288;
state_47288 = G__47439;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__ = function(state_47288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____1.call(this,state_47288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31763__auto__ = (function (){var statearr_47379 = f__31762__auto__.call(null);
(statearr_47379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_47379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__,map__47134,map__47134__$1,opts,before_jsload,on_jsload,reload_dependents,map__47135,map__47135__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31761__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47442,link){
var map__47445 = p__47442;
var map__47445__$1 = ((((!((map__47445 == null)))?((((map__47445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47445):map__47445);
var file = cljs.core.get.call(null,map__47445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__47445,map__47445__$1,file){
return (function (p1__47440_SHARP_,p2__47441_SHARP_){
if(cljs.core._EQ_.call(null,p1__47440_SHARP_,p2__47441_SHARP_)){
return p1__47440_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__47445,map__47445__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47451){
var map__47452 = p__47451;
var map__47452__$1 = ((((!((map__47452 == null)))?((((map__47452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47452):map__47452);
var match_length = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47447_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47447_SHARP_);
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
var args47454 = [];
var len__26121__auto___47457 = arguments.length;
var i__26122__auto___47458 = (0);
while(true){
if((i__26122__auto___47458 < len__26121__auto___47457)){
args47454.push((arguments[i__26122__auto___47458]));

var G__47459 = (i__26122__auto___47458 + (1));
i__26122__auto___47458 = G__47459;
continue;
} else {
}
break;
}

var G__47456 = args47454.length;
switch (G__47456) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47454.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47461_SHARP_,p2__47462_SHARP_){
return cljs.core.assoc.call(null,p1__47461_SHARP_,cljs.core.get.call(null,p2__47462_SHARP_,key),p2__47462_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__47463){
var map__47466 = p__47463;
var map__47466__$1 = ((((!((map__47466 == null)))?((((map__47466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47466):map__47466);
var f_data = map__47466__$1;
var file = cljs.core.get.call(null,map__47466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47468,p__47469){
var map__47478 = p__47468;
var map__47478__$1 = ((((!((map__47478 == null)))?((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47478):map__47478);
var opts = map__47478__$1;
var on_cssload = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47479 = p__47469;
var map__47479__$1 = ((((!((map__47479 == null)))?((((map__47479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47479):map__47479);
var files_msg = map__47479__$1;
var files = cljs.core.get.call(null,map__47479__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__47482_47486 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__47483_47487 = null;
var count__47484_47488 = (0);
var i__47485_47489 = (0);
while(true){
if((i__47485_47489 < count__47484_47488)){
var f_47490 = cljs.core._nth.call(null,chunk__47483_47487,i__47485_47489);
figwheel.client.file_reloading.reload_css_file.call(null,f_47490);

var G__47491 = seq__47482_47486;
var G__47492 = chunk__47483_47487;
var G__47493 = count__47484_47488;
var G__47494 = (i__47485_47489 + (1));
seq__47482_47486 = G__47491;
chunk__47483_47487 = G__47492;
count__47484_47488 = G__47493;
i__47485_47489 = G__47494;
continue;
} else {
var temp__4657__auto___47495 = cljs.core.seq.call(null,seq__47482_47486);
if(temp__4657__auto___47495){
var seq__47482_47496__$1 = temp__4657__auto___47495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47482_47496__$1)){
var c__25857__auto___47497 = cljs.core.chunk_first.call(null,seq__47482_47496__$1);
var G__47498 = cljs.core.chunk_rest.call(null,seq__47482_47496__$1);
var G__47499 = c__25857__auto___47497;
var G__47500 = cljs.core.count.call(null,c__25857__auto___47497);
var G__47501 = (0);
seq__47482_47486 = G__47498;
chunk__47483_47487 = G__47499;
count__47484_47488 = G__47500;
i__47485_47489 = G__47501;
continue;
} else {
var f_47502 = cljs.core.first.call(null,seq__47482_47496__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_47502);

var G__47503 = cljs.core.next.call(null,seq__47482_47496__$1);
var G__47504 = null;
var G__47505 = (0);
var G__47506 = (0);
seq__47482_47486 = G__47503;
chunk__47483_47487 = G__47504;
count__47484_47488 = G__47505;
i__47485_47489 = G__47506;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__47478,map__47478__$1,opts,on_cssload,map__47479,map__47479__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__47478,map__47478__$1,opts,on_cssload,map__47479,map__47479__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484782601591
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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35402_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35402_SHARP_));
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
var seq__35407 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35408 = null;
var count__35409 = (0);
var i__35410 = (0);
while(true){
if((i__35410 < count__35409)){
var n = cljs.core._nth.call(null,chunk__35408,i__35410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35411 = seq__35407;
var G__35412 = chunk__35408;
var G__35413 = count__35409;
var G__35414 = (i__35410 + (1));
seq__35407 = G__35411;
chunk__35408 = G__35412;
count__35409 = G__35413;
i__35410 = G__35414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35407);
if(temp__4657__auto__){
var seq__35407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35407__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__35407__$1);
var G__35415 = cljs.core.chunk_rest.call(null,seq__35407__$1);
var G__35416 = c__25857__auto__;
var G__35417 = cljs.core.count.call(null,c__25857__auto__);
var G__35418 = (0);
seq__35407 = G__35415;
chunk__35408 = G__35416;
count__35409 = G__35417;
i__35410 = G__35418;
continue;
} else {
var n = cljs.core.first.call(null,seq__35407__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35419 = cljs.core.next.call(null,seq__35407__$1);
var G__35420 = null;
var G__35421 = (0);
var G__35422 = (0);
seq__35407 = G__35419;
chunk__35408 = G__35420;
count__35409 = G__35421;
i__35410 = G__35422;
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

var seq__35473_35484 = cljs.core.seq.call(null,deps);
var chunk__35474_35485 = null;
var count__35475_35486 = (0);
var i__35476_35487 = (0);
while(true){
if((i__35476_35487 < count__35475_35486)){
var dep_35488 = cljs.core._nth.call(null,chunk__35474_35485,i__35476_35487);
topo_sort_helper_STAR_.call(null,dep_35488,(depth + (1)),state);

var G__35489 = seq__35473_35484;
var G__35490 = chunk__35474_35485;
var G__35491 = count__35475_35486;
var G__35492 = (i__35476_35487 + (1));
seq__35473_35484 = G__35489;
chunk__35474_35485 = G__35490;
count__35475_35486 = G__35491;
i__35476_35487 = G__35492;
continue;
} else {
var temp__4657__auto___35493 = cljs.core.seq.call(null,seq__35473_35484);
if(temp__4657__auto___35493){
var seq__35473_35494__$1 = temp__4657__auto___35493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35473_35494__$1)){
var c__25857__auto___35495 = cljs.core.chunk_first.call(null,seq__35473_35494__$1);
var G__35496 = cljs.core.chunk_rest.call(null,seq__35473_35494__$1);
var G__35497 = c__25857__auto___35495;
var G__35498 = cljs.core.count.call(null,c__25857__auto___35495);
var G__35499 = (0);
seq__35473_35484 = G__35496;
chunk__35474_35485 = G__35497;
count__35475_35486 = G__35498;
i__35476_35487 = G__35499;
continue;
} else {
var dep_35500 = cljs.core.first.call(null,seq__35473_35494__$1);
topo_sort_helper_STAR_.call(null,dep_35500,(depth + (1)),state);

var G__35501 = cljs.core.next.call(null,seq__35473_35494__$1);
var G__35502 = null;
var G__35503 = (0);
var G__35504 = (0);
seq__35473_35484 = G__35501;
chunk__35474_35485 = G__35502;
count__35475_35486 = G__35503;
i__35476_35487 = G__35504;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35477){
var vec__35481 = p__35477;
var seq__35482 = cljs.core.seq.call(null,vec__35481);
var first__35483 = cljs.core.first.call(null,seq__35482);
var seq__35482__$1 = cljs.core.next.call(null,seq__35482);
var x = first__35483;
var xs = seq__35482__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35481,seq__35482,first__35483,seq__35482__$1,x,xs,get_deps__$1){
return (function (p1__35423_SHARP_){
return clojure.set.difference.call(null,p1__35423_SHARP_,x);
});})(vec__35481,seq__35482,first__35483,seq__35482__$1,x,xs,get_deps__$1))
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
var seq__35517 = cljs.core.seq.call(null,provides);
var chunk__35518 = null;
var count__35519 = (0);
var i__35520 = (0);
while(true){
if((i__35520 < count__35519)){
var prov = cljs.core._nth.call(null,chunk__35518,i__35520);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35521_35529 = cljs.core.seq.call(null,requires);
var chunk__35522_35530 = null;
var count__35523_35531 = (0);
var i__35524_35532 = (0);
while(true){
if((i__35524_35532 < count__35523_35531)){
var req_35533 = cljs.core._nth.call(null,chunk__35522_35530,i__35524_35532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35533,prov);

var G__35534 = seq__35521_35529;
var G__35535 = chunk__35522_35530;
var G__35536 = count__35523_35531;
var G__35537 = (i__35524_35532 + (1));
seq__35521_35529 = G__35534;
chunk__35522_35530 = G__35535;
count__35523_35531 = G__35536;
i__35524_35532 = G__35537;
continue;
} else {
var temp__4657__auto___35538 = cljs.core.seq.call(null,seq__35521_35529);
if(temp__4657__auto___35538){
var seq__35521_35539__$1 = temp__4657__auto___35538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35521_35539__$1)){
var c__25857__auto___35540 = cljs.core.chunk_first.call(null,seq__35521_35539__$1);
var G__35541 = cljs.core.chunk_rest.call(null,seq__35521_35539__$1);
var G__35542 = c__25857__auto___35540;
var G__35543 = cljs.core.count.call(null,c__25857__auto___35540);
var G__35544 = (0);
seq__35521_35529 = G__35541;
chunk__35522_35530 = G__35542;
count__35523_35531 = G__35543;
i__35524_35532 = G__35544;
continue;
} else {
var req_35545 = cljs.core.first.call(null,seq__35521_35539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35545,prov);

var G__35546 = cljs.core.next.call(null,seq__35521_35539__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__35521_35529 = G__35546;
chunk__35522_35530 = G__35547;
count__35523_35531 = G__35548;
i__35524_35532 = G__35549;
continue;
}
} else {
}
}
break;
}

var G__35550 = seq__35517;
var G__35551 = chunk__35518;
var G__35552 = count__35519;
var G__35553 = (i__35520 + (1));
seq__35517 = G__35550;
chunk__35518 = G__35551;
count__35519 = G__35552;
i__35520 = G__35553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35517);
if(temp__4657__auto__){
var seq__35517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__35517__$1);
var G__35554 = cljs.core.chunk_rest.call(null,seq__35517__$1);
var G__35555 = c__25857__auto__;
var G__35556 = cljs.core.count.call(null,c__25857__auto__);
var G__35557 = (0);
seq__35517 = G__35554;
chunk__35518 = G__35555;
count__35519 = G__35556;
i__35520 = G__35557;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35517__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35525_35558 = cljs.core.seq.call(null,requires);
var chunk__35526_35559 = null;
var count__35527_35560 = (0);
var i__35528_35561 = (0);
while(true){
if((i__35528_35561 < count__35527_35560)){
var req_35562 = cljs.core._nth.call(null,chunk__35526_35559,i__35528_35561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35562,prov);

var G__35563 = seq__35525_35558;
var G__35564 = chunk__35526_35559;
var G__35565 = count__35527_35560;
var G__35566 = (i__35528_35561 + (1));
seq__35525_35558 = G__35563;
chunk__35526_35559 = G__35564;
count__35527_35560 = G__35565;
i__35528_35561 = G__35566;
continue;
} else {
var temp__4657__auto___35567__$1 = cljs.core.seq.call(null,seq__35525_35558);
if(temp__4657__auto___35567__$1){
var seq__35525_35568__$1 = temp__4657__auto___35567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35525_35568__$1)){
var c__25857__auto___35569 = cljs.core.chunk_first.call(null,seq__35525_35568__$1);
var G__35570 = cljs.core.chunk_rest.call(null,seq__35525_35568__$1);
var G__35571 = c__25857__auto___35569;
var G__35572 = cljs.core.count.call(null,c__25857__auto___35569);
var G__35573 = (0);
seq__35525_35558 = G__35570;
chunk__35526_35559 = G__35571;
count__35527_35560 = G__35572;
i__35528_35561 = G__35573;
continue;
} else {
var req_35574 = cljs.core.first.call(null,seq__35525_35568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35574,prov);

var G__35575 = cljs.core.next.call(null,seq__35525_35568__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__35525_35558 = G__35575;
chunk__35526_35559 = G__35576;
count__35527_35560 = G__35577;
i__35528_35561 = G__35578;
continue;
}
} else {
}
}
break;
}

var G__35579 = cljs.core.next.call(null,seq__35517__$1);
var G__35580 = null;
var G__35581 = (0);
var G__35582 = (0);
seq__35517 = G__35579;
chunk__35518 = G__35580;
count__35519 = G__35581;
i__35520 = G__35582;
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
var seq__35587_35591 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35588_35592 = null;
var count__35589_35593 = (0);
var i__35590_35594 = (0);
while(true){
if((i__35590_35594 < count__35589_35593)){
var ns_35595 = cljs.core._nth.call(null,chunk__35588_35592,i__35590_35594);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35595);

var G__35596 = seq__35587_35591;
var G__35597 = chunk__35588_35592;
var G__35598 = count__35589_35593;
var G__35599 = (i__35590_35594 + (1));
seq__35587_35591 = G__35596;
chunk__35588_35592 = G__35597;
count__35589_35593 = G__35598;
i__35590_35594 = G__35599;
continue;
} else {
var temp__4657__auto___35600 = cljs.core.seq.call(null,seq__35587_35591);
if(temp__4657__auto___35600){
var seq__35587_35601__$1 = temp__4657__auto___35600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35587_35601__$1)){
var c__25857__auto___35602 = cljs.core.chunk_first.call(null,seq__35587_35601__$1);
var G__35603 = cljs.core.chunk_rest.call(null,seq__35587_35601__$1);
var G__35604 = c__25857__auto___35602;
var G__35605 = cljs.core.count.call(null,c__25857__auto___35602);
var G__35606 = (0);
seq__35587_35591 = G__35603;
chunk__35588_35592 = G__35604;
count__35589_35593 = G__35605;
i__35590_35594 = G__35606;
continue;
} else {
var ns_35607 = cljs.core.first.call(null,seq__35587_35601__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35607);

var G__35608 = cljs.core.next.call(null,seq__35587_35601__$1);
var G__35609 = null;
var G__35610 = (0);
var G__35611 = (0);
seq__35587_35591 = G__35608;
chunk__35588_35592 = G__35609;
count__35589_35593 = G__35610;
i__35590_35594 = G__35611;
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
var G__35612__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35613__i = 0, G__35613__a = new Array(arguments.length -  0);
while (G__35613__i < G__35613__a.length) {G__35613__a[G__35613__i] = arguments[G__35613__i + 0]; ++G__35613__i;}
  args = new cljs.core.IndexedSeq(G__35613__a,0);
} 
return G__35612__delegate.call(this,args);};
G__35612.cljs$lang$maxFixedArity = 0;
G__35612.cljs$lang$applyTo = (function (arglist__35614){
var args = cljs.core.seq(arglist__35614);
return G__35612__delegate(args);
});
G__35612.cljs$core$IFn$_invoke$arity$variadic = G__35612__delegate;
return G__35612;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35616 = cljs.core._EQ_;
var expr__35617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35617))){
var path_parts = ((function (pred__35616,expr__35617){
return (function (p1__35615_SHARP_){
return clojure.string.split.call(null,p1__35615_SHARP_,/[\/\\]/);
});})(pred__35616,expr__35617))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35616,expr__35617){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35619){if((e35619 instanceof Error)){
var e = e35619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35619;

}
}})());
});
;})(path_parts,sep,root,pred__35616,expr__35617))
} else {
if(cljs.core.truth_(pred__35616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35617))){
return ((function (pred__35616,expr__35617){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35616,expr__35617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35616,expr__35617))
);

return deferred.addErrback(((function (deferred,pred__35616,expr__35617){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35616,expr__35617))
);
});
;})(pred__35616,expr__35617))
} else {
return ((function (pred__35616,expr__35617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35616,expr__35617))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35620,callback){
var map__35623 = p__35620;
var map__35623__$1 = ((((!((map__35623 == null)))?((((map__35623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35623):map__35623);
var file_msg = map__35623__$1;
var request_url = cljs.core.get.call(null,map__35623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35623,map__35623__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35623,map__35623__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__){
return (function (state_35647){
var state_val_35648 = (state_35647[(1)]);
if((state_val_35648 === (7))){
var inst_35643 = (state_35647[(2)]);
var state_35647__$1 = state_35647;
var statearr_35649_35669 = state_35647__$1;
(statearr_35649_35669[(2)] = inst_35643);

(statearr_35649_35669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (1))){
var state_35647__$1 = state_35647;
var statearr_35650_35670 = state_35647__$1;
(statearr_35650_35670[(2)] = null);

(statearr_35650_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (4))){
var inst_35627 = (state_35647[(7)]);
var inst_35627__$1 = (state_35647[(2)]);
var state_35647__$1 = (function (){var statearr_35651 = state_35647;
(statearr_35651[(7)] = inst_35627__$1);

return statearr_35651;
})();
if(cljs.core.truth_(inst_35627__$1)){
var statearr_35652_35671 = state_35647__$1;
(statearr_35652_35671[(1)] = (5));

} else {
var statearr_35653_35672 = state_35647__$1;
(statearr_35653_35672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (6))){
var state_35647__$1 = state_35647;
var statearr_35654_35673 = state_35647__$1;
(statearr_35654_35673[(2)] = null);

(statearr_35654_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (3))){
var inst_35645 = (state_35647[(2)]);
var state_35647__$1 = state_35647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35647__$1,inst_35645);
} else {
if((state_val_35648 === (2))){
var state_35647__$1 = state_35647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35647__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35648 === (11))){
var inst_35639 = (state_35647[(2)]);
var state_35647__$1 = (function (){var statearr_35655 = state_35647;
(statearr_35655[(8)] = inst_35639);

return statearr_35655;
})();
var statearr_35656_35674 = state_35647__$1;
(statearr_35656_35674[(2)] = null);

(statearr_35656_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (9))){
var inst_35631 = (state_35647[(9)]);
var inst_35633 = (state_35647[(10)]);
var inst_35635 = inst_35633.call(null,inst_35631);
var state_35647__$1 = state_35647;
var statearr_35657_35675 = state_35647__$1;
(statearr_35657_35675[(2)] = inst_35635);

(statearr_35657_35675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (5))){
var inst_35627 = (state_35647[(7)]);
var inst_35629 = figwheel.client.file_reloading.blocking_load.call(null,inst_35627);
var state_35647__$1 = state_35647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35647__$1,(8),inst_35629);
} else {
if((state_val_35648 === (10))){
var inst_35631 = (state_35647[(9)]);
var inst_35637 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35631);
var state_35647__$1 = state_35647;
var statearr_35658_35676 = state_35647__$1;
(statearr_35658_35676[(2)] = inst_35637);

(statearr_35658_35676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35648 === (8))){
var inst_35627 = (state_35647[(7)]);
var inst_35633 = (state_35647[(10)]);
var inst_35631 = (state_35647[(2)]);
var inst_35632 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35633__$1 = cljs.core.get.call(null,inst_35632,inst_35627);
var state_35647__$1 = (function (){var statearr_35659 = state_35647;
(statearr_35659[(9)] = inst_35631);

(statearr_35659[(10)] = inst_35633__$1);

return statearr_35659;
})();
if(cljs.core.truth_(inst_35633__$1)){
var statearr_35660_35677 = state_35647__$1;
(statearr_35660_35677[(1)] = (9));

} else {
var statearr_35661_35678 = state_35647__$1;
(statearr_35661_35678[(1)] = (10));

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
});})(c__29132__auto__))
;
return ((function (switch__29111__auto__,c__29132__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29112__auto__ = null;
var figwheel$client$file_reloading$state_machine__29112__auto____0 = (function (){
var statearr_35665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35665[(0)] = figwheel$client$file_reloading$state_machine__29112__auto__);

(statearr_35665[(1)] = (1));

return statearr_35665;
});
var figwheel$client$file_reloading$state_machine__29112__auto____1 = (function (state_35647){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_35647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e35666){if((e35666 instanceof Object)){
var ex__29115__auto__ = e35666;
var statearr_35667_35679 = state_35647;
(statearr_35667_35679[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35680 = state_35647;
state_35647 = G__35680;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29112__auto__ = function(state_35647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29112__auto____1.call(this,state_35647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29112__auto____0;
figwheel$client$file_reloading$state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29112__auto____1;
return figwheel$client$file_reloading$state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__))
})();
var state__29134__auto__ = (function (){var statearr_35668 = f__29133__auto__.call(null);
(statearr_35668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_35668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__))
);

return c__29132__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35681,callback){
var map__35684 = p__35681;
var map__35684__$1 = ((((!((map__35684 == null)))?((((map__35684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35684):map__35684);
var file_msg = map__35684__$1;
var namespace = cljs.core.get.call(null,map__35684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35684,map__35684__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35684,map__35684__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35686){
var map__35689 = p__35686;
var map__35689__$1 = ((((!((map__35689 == null)))?((((map__35689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35689):map__35689);
var file_msg = map__35689__$1;
var namespace = cljs.core.get.call(null,map__35689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35691,callback){
var map__35694 = p__35691;
var map__35694__$1 = ((((!((map__35694 == null)))?((((map__35694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35694):map__35694);
var file_msg = map__35694__$1;
var request_url = cljs.core.get.call(null,map__35694__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29132__auto___35798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___35798,out){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___35798,out){
return (function (state_35780){
var state_val_35781 = (state_35780[(1)]);
if((state_val_35781 === (1))){
var inst_35754 = cljs.core.seq.call(null,files);
var inst_35755 = cljs.core.first.call(null,inst_35754);
var inst_35756 = cljs.core.next.call(null,inst_35754);
var inst_35757 = files;
var state_35780__$1 = (function (){var statearr_35782 = state_35780;
(statearr_35782[(7)] = inst_35757);

(statearr_35782[(8)] = inst_35756);

(statearr_35782[(9)] = inst_35755);

return statearr_35782;
})();
var statearr_35783_35799 = state_35780__$1;
(statearr_35783_35799[(2)] = null);

(statearr_35783_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (2))){
var inst_35757 = (state_35780[(7)]);
var inst_35763 = (state_35780[(10)]);
var inst_35762 = cljs.core.seq.call(null,inst_35757);
var inst_35763__$1 = cljs.core.first.call(null,inst_35762);
var inst_35764 = cljs.core.next.call(null,inst_35762);
var inst_35765 = (inst_35763__$1 == null);
var inst_35766 = cljs.core.not.call(null,inst_35765);
var state_35780__$1 = (function (){var statearr_35784 = state_35780;
(statearr_35784[(11)] = inst_35764);

(statearr_35784[(10)] = inst_35763__$1);

return statearr_35784;
})();
if(inst_35766){
var statearr_35785_35800 = state_35780__$1;
(statearr_35785_35800[(1)] = (4));

} else {
var statearr_35786_35801 = state_35780__$1;
(statearr_35786_35801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (3))){
var inst_35778 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35780__$1,inst_35778);
} else {
if((state_val_35781 === (4))){
var inst_35763 = (state_35780[(10)]);
var inst_35768 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35763);
var state_35780__$1 = state_35780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35780__$1,(7),inst_35768);
} else {
if((state_val_35781 === (5))){
var inst_35774 = cljs.core.async.close_BANG_.call(null,out);
var state_35780__$1 = state_35780;
var statearr_35787_35802 = state_35780__$1;
(statearr_35787_35802[(2)] = inst_35774);

(statearr_35787_35802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (6))){
var inst_35776 = (state_35780[(2)]);
var state_35780__$1 = state_35780;
var statearr_35788_35803 = state_35780__$1;
(statearr_35788_35803[(2)] = inst_35776);

(statearr_35788_35803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35781 === (7))){
var inst_35764 = (state_35780[(11)]);
var inst_35770 = (state_35780[(2)]);
var inst_35771 = cljs.core.async.put_BANG_.call(null,out,inst_35770);
var inst_35757 = inst_35764;
var state_35780__$1 = (function (){var statearr_35789 = state_35780;
(statearr_35789[(12)] = inst_35771);

(statearr_35789[(7)] = inst_35757);

return statearr_35789;
})();
var statearr_35790_35804 = state_35780__$1;
(statearr_35790_35804[(2)] = null);

(statearr_35790_35804[(1)] = (2));


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
});})(c__29132__auto___35798,out))
;
return ((function (switch__29111__auto__,c__29132__auto___35798,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____0 = (function (){
var statearr_35794 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35794[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__);

(statearr_35794[(1)] = (1));

return statearr_35794;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____1 = (function (state_35780){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_35780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e35795){if((e35795 instanceof Object)){
var ex__29115__auto__ = e35795;
var statearr_35796_35805 = state_35780;
(statearr_35796_35805[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35806 = state_35780;
state_35780 = G__35806;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__ = function(state_35780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____1.call(this,state_35780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___35798,out))
})();
var state__29134__auto__ = (function (){var statearr_35797 = f__29133__auto__.call(null);
(statearr_35797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___35798);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___35798,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35807,opts){
var map__35811 = p__35807;
var map__35811__$1 = ((((!((map__35811 == null)))?((((map__35811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35811):map__35811);
var eval_body__$1 = cljs.core.get.call(null,map__35811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35813){var e = e35813;
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
return (function (p1__35814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35814_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35823){
var vec__35824 = p__35823;
var k = cljs.core.nth.call(null,vec__35824,(0),null);
var v = cljs.core.nth.call(null,vec__35824,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35827){
var vec__35828 = p__35827;
var k = cljs.core.nth.call(null,vec__35828,(0),null);
var v = cljs.core.nth.call(null,vec__35828,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35834,p__35835){
var map__36082 = p__35834;
var map__36082__$1 = ((((!((map__36082 == null)))?((((map__36082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36082):map__36082);
var opts = map__36082__$1;
var before_jsload = cljs.core.get.call(null,map__36082__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36082__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36083 = p__35835;
var map__36083__$1 = ((((!((map__36083 == null)))?((((map__36083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36083):map__36083);
var msg = map__36083__$1;
var files = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36097 = (state_36236[(7)]);
var inst_36099 = (state_36236[(8)]);
var inst_36100 = (state_36236[(9)]);
var inst_36098 = (state_36236[(10)]);
var inst_36105 = cljs.core._nth.call(null,inst_36098,inst_36100);
var inst_36106 = figwheel.client.file_reloading.eval_body.call(null,inst_36105,opts);
var inst_36107 = (inst_36100 + (1));
var tmp36238 = inst_36097;
var tmp36239 = inst_36099;
var tmp36240 = inst_36098;
var inst_36097__$1 = tmp36238;
var inst_36098__$1 = tmp36240;
var inst_36099__$1 = tmp36239;
var inst_36100__$1 = inst_36107;
var state_36236__$1 = (function (){var statearr_36241 = state_36236;
(statearr_36241[(7)] = inst_36097__$1);

(statearr_36241[(8)] = inst_36099__$1);

(statearr_36241[(9)] = inst_36100__$1);

(statearr_36241[(10)] = inst_36098__$1);

(statearr_36241[(11)] = inst_36106);

return statearr_36241;
})();
var statearr_36242_36328 = state_36236__$1;
(statearr_36242_36328[(2)] = null);

(statearr_36242_36328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (20))){
var inst_36140 = (state_36236[(12)]);
var inst_36148 = figwheel.client.file_reloading.sort_files.call(null,inst_36140);
var state_36236__$1 = state_36236;
var statearr_36243_36329 = state_36236__$1;
(statearr_36243_36329[(2)] = inst_36148);

(statearr_36243_36329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (27))){
var state_36236__$1 = state_36236;
var statearr_36244_36330 = state_36236__$1;
(statearr_36244_36330[(2)] = null);

(statearr_36244_36330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (1))){
var inst_36089 = (state_36236[(13)]);
var inst_36086 = before_jsload.call(null,files);
var inst_36087 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36088 = (function (){return ((function (inst_36089,inst_36086,inst_36087,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35831_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35831_SHARP_);
});
;})(inst_36089,inst_36086,inst_36087,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36089__$1 = cljs.core.filter.call(null,inst_36088,files);
var inst_36090 = cljs.core.not_empty.call(null,inst_36089__$1);
var state_36236__$1 = (function (){var statearr_36245 = state_36236;
(statearr_36245[(14)] = inst_36086);

(statearr_36245[(15)] = inst_36087);

(statearr_36245[(13)] = inst_36089__$1);

return statearr_36245;
})();
if(cljs.core.truth_(inst_36090)){
var statearr_36246_36331 = state_36236__$1;
(statearr_36246_36331[(1)] = (2));

} else {
var statearr_36247_36332 = state_36236__$1;
(statearr_36247_36332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (24))){
var state_36236__$1 = state_36236;
var statearr_36248_36333 = state_36236__$1;
(statearr_36248_36333[(2)] = null);

(statearr_36248_36333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (39))){
var inst_36190 = (state_36236[(16)]);
var state_36236__$1 = state_36236;
var statearr_36249_36334 = state_36236__$1;
(statearr_36249_36334[(2)] = inst_36190);

(statearr_36249_36334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (46))){
var inst_36231 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36250_36335 = state_36236__$1;
(statearr_36250_36335[(2)] = inst_36231);

(statearr_36250_36335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var inst_36134 = (state_36236[(2)]);
var inst_36135 = cljs.core.List.EMPTY;
var inst_36136 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36135);
var inst_36137 = (function (){return ((function (inst_36134,inst_36135,inst_36136,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35832_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35832_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35832_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_36134,inst_36135,inst_36136,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36138 = cljs.core.filter.call(null,inst_36137,files);
var inst_36139 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36140 = cljs.core.concat.call(null,inst_36138,inst_36139);
var state_36236__$1 = (function (){var statearr_36251 = state_36236;
(statearr_36251[(12)] = inst_36140);

(statearr_36251[(17)] = inst_36136);

(statearr_36251[(18)] = inst_36134);

return statearr_36251;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36252_36336 = state_36236__$1;
(statearr_36252_36336[(1)] = (16));

} else {
var statearr_36253_36337 = state_36236__$1;
(statearr_36253_36337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (15))){
var inst_36124 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36254_36338 = state_36236__$1;
(statearr_36254_36338[(2)] = inst_36124);

(statearr_36254_36338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (21))){
var inst_36150 = (state_36236[(19)]);
var inst_36150__$1 = (state_36236[(2)]);
var inst_36151 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36150__$1);
var state_36236__$1 = (function (){var statearr_36255 = state_36236;
(statearr_36255[(19)] = inst_36150__$1);

return statearr_36255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36236__$1,(22),inst_36151);
} else {
if((state_val_36237 === (31))){
var inst_36234 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (32))){
var inst_36190 = (state_36236[(16)]);
var inst_36195 = inst_36190.cljs$lang$protocol_mask$partition0$;
var inst_36196 = (inst_36195 & (64));
var inst_36197 = inst_36190.cljs$core$ISeq$;
var inst_36198 = (inst_36196) || (inst_36197);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36198)){
var statearr_36256_36339 = state_36236__$1;
(statearr_36256_36339[(1)] = (35));

} else {
var statearr_36257_36340 = state_36236__$1;
(statearr_36257_36340[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (40))){
var inst_36211 = (state_36236[(20)]);
var inst_36210 = (state_36236[(2)]);
var inst_36211__$1 = cljs.core.get.call(null,inst_36210,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36212 = cljs.core.get.call(null,inst_36210,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36213 = cljs.core.not_empty.call(null,inst_36211__$1);
var state_36236__$1 = (function (){var statearr_36258 = state_36236;
(statearr_36258[(21)] = inst_36212);

(statearr_36258[(20)] = inst_36211__$1);

return statearr_36258;
})();
if(cljs.core.truth_(inst_36213)){
var statearr_36259_36341 = state_36236__$1;
(statearr_36259_36341[(1)] = (41));

} else {
var statearr_36260_36342 = state_36236__$1;
(statearr_36260_36342[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (33))){
var state_36236__$1 = state_36236;
var statearr_36261_36343 = state_36236__$1;
(statearr_36261_36343[(2)] = false);

(statearr_36261_36343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (13))){
var inst_36110 = (state_36236[(22)]);
var inst_36114 = cljs.core.chunk_first.call(null,inst_36110);
var inst_36115 = cljs.core.chunk_rest.call(null,inst_36110);
var inst_36116 = cljs.core.count.call(null,inst_36114);
var inst_36097 = inst_36115;
var inst_36098 = inst_36114;
var inst_36099 = inst_36116;
var inst_36100 = (0);
var state_36236__$1 = (function (){var statearr_36262 = state_36236;
(statearr_36262[(7)] = inst_36097);

(statearr_36262[(8)] = inst_36099);

(statearr_36262[(9)] = inst_36100);

(statearr_36262[(10)] = inst_36098);

return statearr_36262;
})();
var statearr_36263_36344 = state_36236__$1;
(statearr_36263_36344[(2)] = null);

(statearr_36263_36344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (22))){
var inst_36158 = (state_36236[(23)]);
var inst_36150 = (state_36236[(19)]);
var inst_36153 = (state_36236[(24)]);
var inst_36154 = (state_36236[(25)]);
var inst_36153__$1 = (state_36236[(2)]);
var inst_36154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36153__$1);
var inst_36155 = (function (){var all_files = inst_36150;
var res_SINGLEQUOTE_ = inst_36153__$1;
var res = inst_36154__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36158,inst_36150,inst_36153,inst_36154,inst_36153__$1,inst_36154__$1,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35833_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35833_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36158,inst_36150,inst_36153,inst_36154,inst_36153__$1,inst_36154__$1,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36156 = cljs.core.filter.call(null,inst_36155,inst_36153__$1);
var inst_36157 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36158__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36157);
var inst_36159 = cljs.core.not_empty.call(null,inst_36158__$1);
var state_36236__$1 = (function (){var statearr_36264 = state_36236;
(statearr_36264[(23)] = inst_36158__$1);

(statearr_36264[(24)] = inst_36153__$1);

(statearr_36264[(26)] = inst_36156);

(statearr_36264[(25)] = inst_36154__$1);

return statearr_36264;
})();
if(cljs.core.truth_(inst_36159)){
var statearr_36265_36345 = state_36236__$1;
(statearr_36265_36345[(1)] = (23));

} else {
var statearr_36266_36346 = state_36236__$1;
(statearr_36266_36346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (36))){
var state_36236__$1 = state_36236;
var statearr_36267_36347 = state_36236__$1;
(statearr_36267_36347[(2)] = false);

(statearr_36267_36347[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (41))){
var inst_36211 = (state_36236[(20)]);
var inst_36215 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36216 = cljs.core.map.call(null,inst_36215,inst_36211);
var inst_36217 = cljs.core.pr_str.call(null,inst_36216);
var inst_36218 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36217)].join('');
var inst_36219 = figwheel.client.utils.log.call(null,inst_36218);
var state_36236__$1 = state_36236;
var statearr_36268_36348 = state_36236__$1;
(statearr_36268_36348[(2)] = inst_36219);

(statearr_36268_36348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (43))){
var inst_36212 = (state_36236[(21)]);
var inst_36222 = (state_36236[(2)]);
var inst_36223 = cljs.core.not_empty.call(null,inst_36212);
var state_36236__$1 = (function (){var statearr_36269 = state_36236;
(statearr_36269[(27)] = inst_36222);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36223)){
var statearr_36270_36349 = state_36236__$1;
(statearr_36270_36349[(1)] = (44));

} else {
var statearr_36271_36350 = state_36236__$1;
(statearr_36271_36350[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (29))){
var inst_36158 = (state_36236[(23)]);
var inst_36190 = (state_36236[(16)]);
var inst_36150 = (state_36236[(19)]);
var inst_36153 = (state_36236[(24)]);
var inst_36156 = (state_36236[(26)]);
var inst_36154 = (state_36236[(25)]);
var inst_36186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36189 = (function (){var all_files = inst_36150;
var res_SINGLEQUOTE_ = inst_36153;
var res = inst_36154;
var files_not_loaded = inst_36156;
var dependencies_that_loaded = inst_36158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36190,inst_36150,inst_36153,inst_36156,inst_36154,inst_36186,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36188){
var map__36272 = p__36188;
var map__36272__$1 = ((((!((map__36272 == null)))?((((map__36272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36272):map__36272);
var namespace = cljs.core.get.call(null,map__36272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36190,inst_36150,inst_36153,inst_36156,inst_36154,inst_36186,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36190__$1 = cljs.core.group_by.call(null,inst_36189,inst_36156);
var inst_36192 = (inst_36190__$1 == null);
var inst_36193 = cljs.core.not.call(null,inst_36192);
var state_36236__$1 = (function (){var statearr_36274 = state_36236;
(statearr_36274[(16)] = inst_36190__$1);

(statearr_36274[(28)] = inst_36186);

return statearr_36274;
})();
if(inst_36193){
var statearr_36275_36351 = state_36236__$1;
(statearr_36275_36351[(1)] = (32));

} else {
var statearr_36276_36352 = state_36236__$1;
(statearr_36276_36352[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (44))){
var inst_36212 = (state_36236[(21)]);
var inst_36225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36212);
var inst_36226 = cljs.core.pr_str.call(null,inst_36225);
var inst_36227 = [cljs.core.str("not required: "),cljs.core.str(inst_36226)].join('');
var inst_36228 = figwheel.client.utils.log.call(null,inst_36227);
var state_36236__$1 = state_36236;
var statearr_36277_36353 = state_36236__$1;
(statearr_36277_36353[(2)] = inst_36228);

(statearr_36277_36353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (6))){
var inst_36131 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36278_36354 = state_36236__$1;
(statearr_36278_36354[(2)] = inst_36131);

(statearr_36278_36354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (28))){
var inst_36156 = (state_36236[(26)]);
var inst_36183 = (state_36236[(2)]);
var inst_36184 = cljs.core.not_empty.call(null,inst_36156);
var state_36236__$1 = (function (){var statearr_36279 = state_36236;
(statearr_36279[(29)] = inst_36183);

return statearr_36279;
})();
if(cljs.core.truth_(inst_36184)){
var statearr_36280_36355 = state_36236__$1;
(statearr_36280_36355[(1)] = (29));

} else {
var statearr_36281_36356 = state_36236__$1;
(statearr_36281_36356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (25))){
var inst_36154 = (state_36236[(25)]);
var inst_36170 = (state_36236[(2)]);
var inst_36171 = cljs.core.not_empty.call(null,inst_36154);
var state_36236__$1 = (function (){var statearr_36282 = state_36236;
(statearr_36282[(30)] = inst_36170);

return statearr_36282;
})();
if(cljs.core.truth_(inst_36171)){
var statearr_36283_36357 = state_36236__$1;
(statearr_36283_36357[(1)] = (26));

} else {
var statearr_36284_36358 = state_36236__$1;
(statearr_36284_36358[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (34))){
var inst_36205 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36205)){
var statearr_36285_36359 = state_36236__$1;
(statearr_36285_36359[(1)] = (38));

} else {
var statearr_36286_36360 = state_36236__$1;
(statearr_36286_36360[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (17))){
var state_36236__$1 = state_36236;
var statearr_36287_36361 = state_36236__$1;
(statearr_36287_36361[(2)] = recompile_dependents);

(statearr_36287_36361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var state_36236__$1 = state_36236;
var statearr_36288_36362 = state_36236__$1;
(statearr_36288_36362[(2)] = null);

(statearr_36288_36362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (12))){
var inst_36127 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36289_36363 = state_36236__$1;
(statearr_36289_36363[(2)] = inst_36127);

(statearr_36289_36363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (2))){
var inst_36089 = (state_36236[(13)]);
var inst_36096 = cljs.core.seq.call(null,inst_36089);
var inst_36097 = inst_36096;
var inst_36098 = null;
var inst_36099 = (0);
var inst_36100 = (0);
var state_36236__$1 = (function (){var statearr_36290 = state_36236;
(statearr_36290[(7)] = inst_36097);

(statearr_36290[(8)] = inst_36099);

(statearr_36290[(9)] = inst_36100);

(statearr_36290[(10)] = inst_36098);

return statearr_36290;
})();
var statearr_36291_36364 = state_36236__$1;
(statearr_36291_36364[(2)] = null);

(statearr_36291_36364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (23))){
var inst_36158 = (state_36236[(23)]);
var inst_36150 = (state_36236[(19)]);
var inst_36153 = (state_36236[(24)]);
var inst_36156 = (state_36236[(26)]);
var inst_36154 = (state_36236[(25)]);
var inst_36161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36163 = (function (){var all_files = inst_36150;
var res_SINGLEQUOTE_ = inst_36153;
var res = inst_36154;
var files_not_loaded = inst_36156;
var dependencies_that_loaded = inst_36158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36161,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36162){
var map__36292 = p__36162;
var map__36292__$1 = ((((!((map__36292 == null)))?((((map__36292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36292):map__36292);
var request_url = cljs.core.get.call(null,map__36292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36161,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36164 = cljs.core.reverse.call(null,inst_36158);
var inst_36165 = cljs.core.map.call(null,inst_36163,inst_36164);
var inst_36166 = cljs.core.pr_str.call(null,inst_36165);
var inst_36167 = figwheel.client.utils.log.call(null,inst_36166);
var state_36236__$1 = (function (){var statearr_36294 = state_36236;
(statearr_36294[(31)] = inst_36161);

return statearr_36294;
})();
var statearr_36295_36365 = state_36236__$1;
(statearr_36295_36365[(2)] = inst_36167);

(statearr_36295_36365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (35))){
var state_36236__$1 = state_36236;
var statearr_36296_36366 = state_36236__$1;
(statearr_36296_36366[(2)] = true);

(statearr_36296_36366[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (19))){
var inst_36140 = (state_36236[(12)]);
var inst_36146 = figwheel.client.file_reloading.expand_files.call(null,inst_36140);
var state_36236__$1 = state_36236;
var statearr_36297_36367 = state_36236__$1;
(statearr_36297_36367[(2)] = inst_36146);

(statearr_36297_36367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (11))){
var state_36236__$1 = state_36236;
var statearr_36298_36368 = state_36236__$1;
(statearr_36298_36368[(2)] = null);

(statearr_36298_36368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (9))){
var inst_36129 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36299_36369 = state_36236__$1;
(statearr_36299_36369[(2)] = inst_36129);

(statearr_36299_36369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (5))){
var inst_36099 = (state_36236[(8)]);
var inst_36100 = (state_36236[(9)]);
var inst_36102 = (inst_36100 < inst_36099);
var inst_36103 = inst_36102;
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36103)){
var statearr_36300_36370 = state_36236__$1;
(statearr_36300_36370[(1)] = (7));

} else {
var statearr_36301_36371 = state_36236__$1;
(statearr_36301_36371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (14))){
var inst_36110 = (state_36236[(22)]);
var inst_36119 = cljs.core.first.call(null,inst_36110);
var inst_36120 = figwheel.client.file_reloading.eval_body.call(null,inst_36119,opts);
var inst_36121 = cljs.core.next.call(null,inst_36110);
var inst_36097 = inst_36121;
var inst_36098 = null;
var inst_36099 = (0);
var inst_36100 = (0);
var state_36236__$1 = (function (){var statearr_36302 = state_36236;
(statearr_36302[(7)] = inst_36097);

(statearr_36302[(8)] = inst_36099);

(statearr_36302[(32)] = inst_36120);

(statearr_36302[(9)] = inst_36100);

(statearr_36302[(10)] = inst_36098);

return statearr_36302;
})();
var statearr_36303_36372 = state_36236__$1;
(statearr_36303_36372[(2)] = null);

(statearr_36303_36372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (45))){
var state_36236__$1 = state_36236;
var statearr_36304_36373 = state_36236__$1;
(statearr_36304_36373[(2)] = null);

(statearr_36304_36373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (26))){
var inst_36158 = (state_36236[(23)]);
var inst_36150 = (state_36236[(19)]);
var inst_36153 = (state_36236[(24)]);
var inst_36156 = (state_36236[(26)]);
var inst_36154 = (state_36236[(25)]);
var inst_36173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36175 = (function (){var all_files = inst_36150;
var res_SINGLEQUOTE_ = inst_36153;
var res = inst_36154;
var files_not_loaded = inst_36156;
var dependencies_that_loaded = inst_36158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36173,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36174){
var map__36305 = p__36174;
var map__36305__$1 = ((((!((map__36305 == null)))?((((map__36305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36305):map__36305);
var namespace = cljs.core.get.call(null,map__36305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36305__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36173,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36176 = cljs.core.map.call(null,inst_36175,inst_36154);
var inst_36177 = cljs.core.pr_str.call(null,inst_36176);
var inst_36178 = figwheel.client.utils.log.call(null,inst_36177);
var inst_36179 = (function (){var all_files = inst_36150;
var res_SINGLEQUOTE_ = inst_36153;
var res = inst_36154;
var files_not_loaded = inst_36156;
var dependencies_that_loaded = inst_36158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36173,inst_36175,inst_36176,inst_36177,inst_36178,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36158,inst_36150,inst_36153,inst_36156,inst_36154,inst_36173,inst_36175,inst_36176,inst_36177,inst_36178,state_val_36237,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36180 = setTimeout(inst_36179,(10));
var state_36236__$1 = (function (){var statearr_36307 = state_36236;
(statearr_36307[(33)] = inst_36173);

(statearr_36307[(34)] = inst_36178);

return statearr_36307;
})();
var statearr_36308_36374 = state_36236__$1;
(statearr_36308_36374[(2)] = inst_36180);

(statearr_36308_36374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (16))){
var state_36236__$1 = state_36236;
var statearr_36309_36375 = state_36236__$1;
(statearr_36309_36375[(2)] = reload_dependents);

(statearr_36309_36375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (38))){
var inst_36190 = (state_36236[(16)]);
var inst_36207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36190);
var state_36236__$1 = state_36236;
var statearr_36310_36376 = state_36236__$1;
(statearr_36310_36376[(2)] = inst_36207);

(statearr_36310_36376[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (30))){
var state_36236__$1 = state_36236;
var statearr_36311_36377 = state_36236__$1;
(statearr_36311_36377[(2)] = null);

(statearr_36311_36377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36110 = (state_36236[(22)]);
var inst_36112 = cljs.core.chunked_seq_QMARK_.call(null,inst_36110);
var state_36236__$1 = state_36236;
if(inst_36112){
var statearr_36312_36378 = state_36236__$1;
(statearr_36312_36378[(1)] = (13));

} else {
var statearr_36313_36379 = state_36236__$1;
(statearr_36313_36379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (18))){
var inst_36144 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36144)){
var statearr_36314_36380 = state_36236__$1;
(statearr_36314_36380[(1)] = (19));

} else {
var statearr_36315_36381 = state_36236__$1;
(statearr_36315_36381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (42))){
var state_36236__$1 = state_36236;
var statearr_36316_36382 = state_36236__$1;
(statearr_36316_36382[(2)] = null);

(statearr_36316_36382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (37))){
var inst_36202 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36317_36383 = state_36236__$1;
(statearr_36317_36383[(2)] = inst_36202);

(statearr_36317_36383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36097 = (state_36236[(7)]);
var inst_36110 = (state_36236[(22)]);
var inst_36110__$1 = cljs.core.seq.call(null,inst_36097);
var state_36236__$1 = (function (){var statearr_36318 = state_36236;
(statearr_36318[(22)] = inst_36110__$1);

return statearr_36318;
})();
if(inst_36110__$1){
var statearr_36319_36384 = state_36236__$1;
(statearr_36319_36384[(1)] = (10));

} else {
var statearr_36320_36385 = state_36236__$1;
(statearr_36320_36385[(1)] = (11));

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
});})(c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29111__auto__,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____0 = (function (){
var statearr_36324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____1 = (function (state_36236){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_36236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__29115__auto__ = e36325;
var statearr_36326_36386 = state_36236;
(statearr_36326_36386[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36387 = state_36236;
state_36236 = G__36387;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29134__auto__ = (function (){var statearr_36327 = f__29133__auto__.call(null);
(statearr_36327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_36327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,map__36082,map__36082__$1,opts,before_jsload,on_jsload,reload_dependents,map__36083,map__36083__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29132__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36390,link){
var map__36393 = p__36390;
var map__36393__$1 = ((((!((map__36393 == null)))?((((map__36393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36393):map__36393);
var file = cljs.core.get.call(null,map__36393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36393,map__36393__$1,file){
return (function (p1__36388_SHARP_,p2__36389_SHARP_){
if(cljs.core._EQ_.call(null,p1__36388_SHARP_,p2__36389_SHARP_)){
return p1__36388_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36393,map__36393__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36399){
var map__36400 = p__36399;
var map__36400__$1 = ((((!((map__36400 == null)))?((((map__36400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36400):map__36400);
var match_length = cljs.core.get.call(null,map__36400__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36400__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36395_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36395_SHARP_);
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
var args36402 = [];
var len__26121__auto___36405 = arguments.length;
var i__26122__auto___36406 = (0);
while(true){
if((i__26122__auto___36406 < len__26121__auto___36405)){
args36402.push((arguments[i__26122__auto___36406]));

var G__36407 = (i__26122__auto___36406 + (1));
i__26122__auto___36406 = G__36407;
continue;
} else {
}
break;
}

var G__36404 = args36402.length;
switch (G__36404) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36402.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36409_SHARP_,p2__36410_SHARP_){
return cljs.core.assoc.call(null,p1__36409_SHARP_,cljs.core.get.call(null,p2__36410_SHARP_,key),p2__36410_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36411){
var map__36414 = p__36411;
var map__36414__$1 = ((((!((map__36414 == null)))?((((map__36414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36414):map__36414);
var f_data = map__36414__$1;
var file = cljs.core.get.call(null,map__36414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36416,p__36417){
var map__36426 = p__36416;
var map__36426__$1 = ((((!((map__36426 == null)))?((((map__36426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36426):map__36426);
var opts = map__36426__$1;
var on_cssload = cljs.core.get.call(null,map__36426__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36427 = p__36417;
var map__36427__$1 = ((((!((map__36427 == null)))?((((map__36427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36427):map__36427);
var files_msg = map__36427__$1;
var files = cljs.core.get.call(null,map__36427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36430_36434 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36431_36435 = null;
var count__36432_36436 = (0);
var i__36433_36437 = (0);
while(true){
if((i__36433_36437 < count__36432_36436)){
var f_36438 = cljs.core._nth.call(null,chunk__36431_36435,i__36433_36437);
figwheel.client.file_reloading.reload_css_file.call(null,f_36438);

var G__36439 = seq__36430_36434;
var G__36440 = chunk__36431_36435;
var G__36441 = count__36432_36436;
var G__36442 = (i__36433_36437 + (1));
seq__36430_36434 = G__36439;
chunk__36431_36435 = G__36440;
count__36432_36436 = G__36441;
i__36433_36437 = G__36442;
continue;
} else {
var temp__4657__auto___36443 = cljs.core.seq.call(null,seq__36430_36434);
if(temp__4657__auto___36443){
var seq__36430_36444__$1 = temp__4657__auto___36443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36430_36444__$1)){
var c__25857__auto___36445 = cljs.core.chunk_first.call(null,seq__36430_36444__$1);
var G__36446 = cljs.core.chunk_rest.call(null,seq__36430_36444__$1);
var G__36447 = c__25857__auto___36445;
var G__36448 = cljs.core.count.call(null,c__25857__auto___36445);
var G__36449 = (0);
seq__36430_36434 = G__36446;
chunk__36431_36435 = G__36447;
count__36432_36436 = G__36448;
i__36433_36437 = G__36449;
continue;
} else {
var f_36450 = cljs.core.first.call(null,seq__36430_36444__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36450);

var G__36451 = cljs.core.next.call(null,seq__36430_36444__$1);
var G__36452 = null;
var G__36453 = (0);
var G__36454 = (0);
seq__36430_36434 = G__36451;
chunk__36431_36435 = G__36452;
count__36432_36436 = G__36453;
i__36433_36437 = G__36454;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36426,map__36426__$1,opts,on_cssload,map__36427,map__36427__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36426,map__36426__$1,opts,on_cssload,map__36427,map__36427__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484456857982
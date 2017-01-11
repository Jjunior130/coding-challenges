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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__142274_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__142274_SHARP_));
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
var seq__142279 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__142280 = null;
var count__142281 = (0);
var i__142282 = (0);
while(true){
if((i__142282 < count__142281)){
var n = cljs.core._nth.call(null,chunk__142280,i__142282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__142283 = seq__142279;
var G__142284 = chunk__142280;
var G__142285 = count__142281;
var G__142286 = (i__142282 + (1));
seq__142279 = G__142283;
chunk__142280 = G__142284;
count__142281 = G__142285;
i__142282 = G__142286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__142279);
if(temp__4657__auto__){
var seq__142279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142279__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__142279__$1);
var G__142287 = cljs.core.chunk_rest.call(null,seq__142279__$1);
var G__142288 = c__25857__auto__;
var G__142289 = cljs.core.count.call(null,c__25857__auto__);
var G__142290 = (0);
seq__142279 = G__142287;
chunk__142280 = G__142288;
count__142281 = G__142289;
i__142282 = G__142290;
continue;
} else {
var n = cljs.core.first.call(null,seq__142279__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__142291 = cljs.core.next.call(null,seq__142279__$1);
var G__142292 = null;
var G__142293 = (0);
var G__142294 = (0);
seq__142279 = G__142291;
chunk__142280 = G__142292;
count__142281 = G__142293;
i__142282 = G__142294;
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

var seq__142345_142356 = cljs.core.seq.call(null,deps);
var chunk__142346_142357 = null;
var count__142347_142358 = (0);
var i__142348_142359 = (0);
while(true){
if((i__142348_142359 < count__142347_142358)){
var dep_142360 = cljs.core._nth.call(null,chunk__142346_142357,i__142348_142359);
topo_sort_helper_STAR_.call(null,dep_142360,(depth + (1)),state);

var G__142361 = seq__142345_142356;
var G__142362 = chunk__142346_142357;
var G__142363 = count__142347_142358;
var G__142364 = (i__142348_142359 + (1));
seq__142345_142356 = G__142361;
chunk__142346_142357 = G__142362;
count__142347_142358 = G__142363;
i__142348_142359 = G__142364;
continue;
} else {
var temp__4657__auto___142365 = cljs.core.seq.call(null,seq__142345_142356);
if(temp__4657__auto___142365){
var seq__142345_142366__$1 = temp__4657__auto___142365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142345_142366__$1)){
var c__25857__auto___142367 = cljs.core.chunk_first.call(null,seq__142345_142366__$1);
var G__142368 = cljs.core.chunk_rest.call(null,seq__142345_142366__$1);
var G__142369 = c__25857__auto___142367;
var G__142370 = cljs.core.count.call(null,c__25857__auto___142367);
var G__142371 = (0);
seq__142345_142356 = G__142368;
chunk__142346_142357 = G__142369;
count__142347_142358 = G__142370;
i__142348_142359 = G__142371;
continue;
} else {
var dep_142372 = cljs.core.first.call(null,seq__142345_142366__$1);
topo_sort_helper_STAR_.call(null,dep_142372,(depth + (1)),state);

var G__142373 = cljs.core.next.call(null,seq__142345_142366__$1);
var G__142374 = null;
var G__142375 = (0);
var G__142376 = (0);
seq__142345_142356 = G__142373;
chunk__142346_142357 = G__142374;
count__142347_142358 = G__142375;
i__142348_142359 = G__142376;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__142349){
var vec__142353 = p__142349;
var seq__142354 = cljs.core.seq.call(null,vec__142353);
var first__142355 = cljs.core.first.call(null,seq__142354);
var seq__142354__$1 = cljs.core.next.call(null,seq__142354);
var x = first__142355;
var xs = seq__142354__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__142353,seq__142354,first__142355,seq__142354__$1,x,xs,get_deps__$1){
return (function (p1__142295_SHARP_){
return clojure.set.difference.call(null,p1__142295_SHARP_,x);
});})(vec__142353,seq__142354,first__142355,seq__142354__$1,x,xs,get_deps__$1))
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
var seq__142389 = cljs.core.seq.call(null,provides);
var chunk__142390 = null;
var count__142391 = (0);
var i__142392 = (0);
while(true){
if((i__142392 < count__142391)){
var prov = cljs.core._nth.call(null,chunk__142390,i__142392);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__142393_142401 = cljs.core.seq.call(null,requires);
var chunk__142394_142402 = null;
var count__142395_142403 = (0);
var i__142396_142404 = (0);
while(true){
if((i__142396_142404 < count__142395_142403)){
var req_142405 = cljs.core._nth.call(null,chunk__142394_142402,i__142396_142404);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_142405,prov);

var G__142406 = seq__142393_142401;
var G__142407 = chunk__142394_142402;
var G__142408 = count__142395_142403;
var G__142409 = (i__142396_142404 + (1));
seq__142393_142401 = G__142406;
chunk__142394_142402 = G__142407;
count__142395_142403 = G__142408;
i__142396_142404 = G__142409;
continue;
} else {
var temp__4657__auto___142410 = cljs.core.seq.call(null,seq__142393_142401);
if(temp__4657__auto___142410){
var seq__142393_142411__$1 = temp__4657__auto___142410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142393_142411__$1)){
var c__25857__auto___142412 = cljs.core.chunk_first.call(null,seq__142393_142411__$1);
var G__142413 = cljs.core.chunk_rest.call(null,seq__142393_142411__$1);
var G__142414 = c__25857__auto___142412;
var G__142415 = cljs.core.count.call(null,c__25857__auto___142412);
var G__142416 = (0);
seq__142393_142401 = G__142413;
chunk__142394_142402 = G__142414;
count__142395_142403 = G__142415;
i__142396_142404 = G__142416;
continue;
} else {
var req_142417 = cljs.core.first.call(null,seq__142393_142411__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_142417,prov);

var G__142418 = cljs.core.next.call(null,seq__142393_142411__$1);
var G__142419 = null;
var G__142420 = (0);
var G__142421 = (0);
seq__142393_142401 = G__142418;
chunk__142394_142402 = G__142419;
count__142395_142403 = G__142420;
i__142396_142404 = G__142421;
continue;
}
} else {
}
}
break;
}

var G__142422 = seq__142389;
var G__142423 = chunk__142390;
var G__142424 = count__142391;
var G__142425 = (i__142392 + (1));
seq__142389 = G__142422;
chunk__142390 = G__142423;
count__142391 = G__142424;
i__142392 = G__142425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__142389);
if(temp__4657__auto__){
var seq__142389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142389__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__142389__$1);
var G__142426 = cljs.core.chunk_rest.call(null,seq__142389__$1);
var G__142427 = c__25857__auto__;
var G__142428 = cljs.core.count.call(null,c__25857__auto__);
var G__142429 = (0);
seq__142389 = G__142426;
chunk__142390 = G__142427;
count__142391 = G__142428;
i__142392 = G__142429;
continue;
} else {
var prov = cljs.core.first.call(null,seq__142389__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__142397_142430 = cljs.core.seq.call(null,requires);
var chunk__142398_142431 = null;
var count__142399_142432 = (0);
var i__142400_142433 = (0);
while(true){
if((i__142400_142433 < count__142399_142432)){
var req_142434 = cljs.core._nth.call(null,chunk__142398_142431,i__142400_142433);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_142434,prov);

var G__142435 = seq__142397_142430;
var G__142436 = chunk__142398_142431;
var G__142437 = count__142399_142432;
var G__142438 = (i__142400_142433 + (1));
seq__142397_142430 = G__142435;
chunk__142398_142431 = G__142436;
count__142399_142432 = G__142437;
i__142400_142433 = G__142438;
continue;
} else {
var temp__4657__auto___142439__$1 = cljs.core.seq.call(null,seq__142397_142430);
if(temp__4657__auto___142439__$1){
var seq__142397_142440__$1 = temp__4657__auto___142439__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142397_142440__$1)){
var c__25857__auto___142441 = cljs.core.chunk_first.call(null,seq__142397_142440__$1);
var G__142442 = cljs.core.chunk_rest.call(null,seq__142397_142440__$1);
var G__142443 = c__25857__auto___142441;
var G__142444 = cljs.core.count.call(null,c__25857__auto___142441);
var G__142445 = (0);
seq__142397_142430 = G__142442;
chunk__142398_142431 = G__142443;
count__142399_142432 = G__142444;
i__142400_142433 = G__142445;
continue;
} else {
var req_142446 = cljs.core.first.call(null,seq__142397_142440__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_142446,prov);

var G__142447 = cljs.core.next.call(null,seq__142397_142440__$1);
var G__142448 = null;
var G__142449 = (0);
var G__142450 = (0);
seq__142397_142430 = G__142447;
chunk__142398_142431 = G__142448;
count__142399_142432 = G__142449;
i__142400_142433 = G__142450;
continue;
}
} else {
}
}
break;
}

var G__142451 = cljs.core.next.call(null,seq__142389__$1);
var G__142452 = null;
var G__142453 = (0);
var G__142454 = (0);
seq__142389 = G__142451;
chunk__142390 = G__142452;
count__142391 = G__142453;
i__142392 = G__142454;
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
var seq__142459_142463 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__142460_142464 = null;
var count__142461_142465 = (0);
var i__142462_142466 = (0);
while(true){
if((i__142462_142466 < count__142461_142465)){
var ns_142467 = cljs.core._nth.call(null,chunk__142460_142464,i__142462_142466);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_142467);

var G__142468 = seq__142459_142463;
var G__142469 = chunk__142460_142464;
var G__142470 = count__142461_142465;
var G__142471 = (i__142462_142466 + (1));
seq__142459_142463 = G__142468;
chunk__142460_142464 = G__142469;
count__142461_142465 = G__142470;
i__142462_142466 = G__142471;
continue;
} else {
var temp__4657__auto___142472 = cljs.core.seq.call(null,seq__142459_142463);
if(temp__4657__auto___142472){
var seq__142459_142473__$1 = temp__4657__auto___142472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142459_142473__$1)){
var c__25857__auto___142474 = cljs.core.chunk_first.call(null,seq__142459_142473__$1);
var G__142475 = cljs.core.chunk_rest.call(null,seq__142459_142473__$1);
var G__142476 = c__25857__auto___142474;
var G__142477 = cljs.core.count.call(null,c__25857__auto___142474);
var G__142478 = (0);
seq__142459_142463 = G__142475;
chunk__142460_142464 = G__142476;
count__142461_142465 = G__142477;
i__142462_142466 = G__142478;
continue;
} else {
var ns_142479 = cljs.core.first.call(null,seq__142459_142473__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_142479);

var G__142480 = cljs.core.next.call(null,seq__142459_142473__$1);
var G__142481 = null;
var G__142482 = (0);
var G__142483 = (0);
seq__142459_142463 = G__142480;
chunk__142460_142464 = G__142481;
count__142461_142465 = G__142482;
i__142462_142466 = G__142483;
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
var G__142484__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__142484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142485__i = 0, G__142485__a = new Array(arguments.length -  0);
while (G__142485__i < G__142485__a.length) {G__142485__a[G__142485__i] = arguments[G__142485__i + 0]; ++G__142485__i;}
  args = new cljs.core.IndexedSeq(G__142485__a,0);
} 
return G__142484__delegate.call(this,args);};
G__142484.cljs$lang$maxFixedArity = 0;
G__142484.cljs$lang$applyTo = (function (arglist__142486){
var args = cljs.core.seq(arglist__142486);
return G__142484__delegate(args);
});
G__142484.cljs$core$IFn$_invoke$arity$variadic = G__142484__delegate;
return G__142484;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__142488 = cljs.core._EQ_;
var expr__142489 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__142488.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__142489))){
var path_parts = ((function (pred__142488,expr__142489){
return (function (p1__142487_SHARP_){
return clojure.string.split.call(null,p1__142487_SHARP_,/[\/\\]/);
});})(pred__142488,expr__142489))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__142488,expr__142489){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e142491){if((e142491 instanceof Error)){
var e = e142491;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e142491;

}
}})());
});
;})(path_parts,sep,root,pred__142488,expr__142489))
} else {
if(cljs.core.truth_(pred__142488.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__142489))){
return ((function (pred__142488,expr__142489){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__142488,expr__142489){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__142488,expr__142489))
);

return deferred.addErrback(((function (deferred,pred__142488,expr__142489){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__142488,expr__142489))
);
});
;})(pred__142488,expr__142489))
} else {
return ((function (pred__142488,expr__142489){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__142488,expr__142489))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__142492,callback){
var map__142495 = p__142492;
var map__142495__$1 = ((((!((map__142495 == null)))?((((map__142495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142495):map__142495);
var file_msg = map__142495__$1;
var request_url = cljs.core.get.call(null,map__142495__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__142495,map__142495__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__142495,map__142495__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_142519){
var state_val_142520 = (state_142519[(1)]);
if((state_val_142520 === (7))){
var inst_142515 = (state_142519[(2)]);
var state_142519__$1 = state_142519;
var statearr_142521_142541 = state_142519__$1;
(statearr_142521_142541[(2)] = inst_142515);

(statearr_142521_142541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (1))){
var state_142519__$1 = state_142519;
var statearr_142522_142542 = state_142519__$1;
(statearr_142522_142542[(2)] = null);

(statearr_142522_142542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (4))){
var inst_142499 = (state_142519[(7)]);
var inst_142499__$1 = (state_142519[(2)]);
var state_142519__$1 = (function (){var statearr_142523 = state_142519;
(statearr_142523[(7)] = inst_142499__$1);

return statearr_142523;
})();
if(cljs.core.truth_(inst_142499__$1)){
var statearr_142524_142543 = state_142519__$1;
(statearr_142524_142543[(1)] = (5));

} else {
var statearr_142525_142544 = state_142519__$1;
(statearr_142525_142544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (6))){
var state_142519__$1 = state_142519;
var statearr_142526_142545 = state_142519__$1;
(statearr_142526_142545[(2)] = null);

(statearr_142526_142545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (3))){
var inst_142517 = (state_142519[(2)]);
var state_142519__$1 = state_142519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142519__$1,inst_142517);
} else {
if((state_val_142520 === (2))){
var state_142519__$1 = state_142519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142519__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_142520 === (11))){
var inst_142511 = (state_142519[(2)]);
var state_142519__$1 = (function (){var statearr_142527 = state_142519;
(statearr_142527[(8)] = inst_142511);

return statearr_142527;
})();
var statearr_142528_142546 = state_142519__$1;
(statearr_142528_142546[(2)] = null);

(statearr_142528_142546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (9))){
var inst_142505 = (state_142519[(9)]);
var inst_142503 = (state_142519[(10)]);
var inst_142507 = inst_142505.call(null,inst_142503);
var state_142519__$1 = state_142519;
var statearr_142529_142547 = state_142519__$1;
(statearr_142529_142547[(2)] = inst_142507);

(statearr_142529_142547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (5))){
var inst_142499 = (state_142519[(7)]);
var inst_142501 = figwheel.client.file_reloading.blocking_load.call(null,inst_142499);
var state_142519__$1 = state_142519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142519__$1,(8),inst_142501);
} else {
if((state_val_142520 === (10))){
var inst_142503 = (state_142519[(10)]);
var inst_142509 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_142503);
var state_142519__$1 = state_142519;
var statearr_142530_142548 = state_142519__$1;
(statearr_142530_142548[(2)] = inst_142509);

(statearr_142530_142548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142520 === (8))){
var inst_142499 = (state_142519[(7)]);
var inst_142505 = (state_142519[(9)]);
var inst_142503 = (state_142519[(2)]);
var inst_142504 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_142505__$1 = cljs.core.get.call(null,inst_142504,inst_142499);
var state_142519__$1 = (function (){var statearr_142531 = state_142519;
(statearr_142531[(9)] = inst_142505__$1);

(statearr_142531[(10)] = inst_142503);

return statearr_142531;
})();
if(cljs.core.truth_(inst_142505__$1)){
var statearr_142532_142549 = state_142519__$1;
(statearr_142532_142549[(1)] = (9));

} else {
var statearr_142533_142550 = state_142519__$1;
(statearr_142533_142550[(1)] = (10));

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
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33288__auto__ = null;
var figwheel$client$file_reloading$state_machine__33288__auto____0 = (function (){
var statearr_142537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_142537[(0)] = figwheel$client$file_reloading$state_machine__33288__auto__);

(statearr_142537[(1)] = (1));

return statearr_142537;
});
var figwheel$client$file_reloading$state_machine__33288__auto____1 = (function (state_142519){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_142519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e142538){if((e142538 instanceof Object)){
var ex__33291__auto__ = e142538;
var statearr_142539_142551 = state_142519;
(statearr_142539_142551[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e142538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__142552 = state_142519;
state_142519 = G__142552;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33288__auto__ = function(state_142519){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33288__auto____1.call(this,state_142519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33288__auto____0;
figwheel$client$file_reloading$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33288__auto____1;
return figwheel$client$file_reloading$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_142540 = f__33353__auto__.call(null);
(statearr_142540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_142540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__142553,callback){
var map__142556 = p__142553;
var map__142556__$1 = ((((!((map__142556 == null)))?((((map__142556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142556):map__142556);
var file_msg = map__142556__$1;
var namespace = cljs.core.get.call(null,map__142556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__142556,map__142556__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__142556,map__142556__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__142558){
var map__142561 = p__142558;
var map__142561__$1 = ((((!((map__142561 == null)))?((((map__142561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142561):map__142561);
var file_msg = map__142561__$1;
var namespace = cljs.core.get.call(null,map__142561__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__142563,callback){
var map__142566 = p__142563;
var map__142566__$1 = ((((!((map__142566 == null)))?((((map__142566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142566):map__142566);
var file_msg = map__142566__$1;
var request_url = cljs.core.get.call(null,map__142566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__142566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33352__auto___142670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___142670,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___142670,out){
return (function (state_142652){
var state_val_142653 = (state_142652[(1)]);
if((state_val_142653 === (1))){
var inst_142626 = cljs.core.seq.call(null,files);
var inst_142627 = cljs.core.first.call(null,inst_142626);
var inst_142628 = cljs.core.next.call(null,inst_142626);
var inst_142629 = files;
var state_142652__$1 = (function (){var statearr_142654 = state_142652;
(statearr_142654[(7)] = inst_142628);

(statearr_142654[(8)] = inst_142629);

(statearr_142654[(9)] = inst_142627);

return statearr_142654;
})();
var statearr_142655_142671 = state_142652__$1;
(statearr_142655_142671[(2)] = null);

(statearr_142655_142671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142653 === (2))){
var inst_142629 = (state_142652[(8)]);
var inst_142635 = (state_142652[(10)]);
var inst_142634 = cljs.core.seq.call(null,inst_142629);
var inst_142635__$1 = cljs.core.first.call(null,inst_142634);
var inst_142636 = cljs.core.next.call(null,inst_142634);
var inst_142637 = (inst_142635__$1 == null);
var inst_142638 = cljs.core.not.call(null,inst_142637);
var state_142652__$1 = (function (){var statearr_142656 = state_142652;
(statearr_142656[(11)] = inst_142636);

(statearr_142656[(10)] = inst_142635__$1);

return statearr_142656;
})();
if(inst_142638){
var statearr_142657_142672 = state_142652__$1;
(statearr_142657_142672[(1)] = (4));

} else {
var statearr_142658_142673 = state_142652__$1;
(statearr_142658_142673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142653 === (3))){
var inst_142650 = (state_142652[(2)]);
var state_142652__$1 = state_142652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142652__$1,inst_142650);
} else {
if((state_val_142653 === (4))){
var inst_142635 = (state_142652[(10)]);
var inst_142640 = figwheel.client.file_reloading.reload_js_file.call(null,inst_142635);
var state_142652__$1 = state_142652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142652__$1,(7),inst_142640);
} else {
if((state_val_142653 === (5))){
var inst_142646 = cljs.core.async.close_BANG_.call(null,out);
var state_142652__$1 = state_142652;
var statearr_142659_142674 = state_142652__$1;
(statearr_142659_142674[(2)] = inst_142646);

(statearr_142659_142674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142653 === (6))){
var inst_142648 = (state_142652[(2)]);
var state_142652__$1 = state_142652;
var statearr_142660_142675 = state_142652__$1;
(statearr_142660_142675[(2)] = inst_142648);

(statearr_142660_142675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_142653 === (7))){
var inst_142636 = (state_142652[(11)]);
var inst_142642 = (state_142652[(2)]);
var inst_142643 = cljs.core.async.put_BANG_.call(null,out,inst_142642);
var inst_142629 = inst_142636;
var state_142652__$1 = (function (){var statearr_142661 = state_142652;
(statearr_142661[(12)] = inst_142643);

(statearr_142661[(8)] = inst_142629);

return statearr_142661;
})();
var statearr_142662_142676 = state_142652__$1;
(statearr_142662_142676[(2)] = null);

(statearr_142662_142676[(1)] = (2));


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
});})(c__33352__auto___142670,out))
;
return ((function (switch__33287__auto__,c__33352__auto___142670,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0 = (function (){
var statearr_142666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_142666[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__);

(statearr_142666[(1)] = (1));

return statearr_142666;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1 = (function (state_142652){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_142652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e142667){if((e142667 instanceof Object)){
var ex__33291__auto__ = e142667;
var statearr_142668_142677 = state_142652;
(statearr_142668_142677[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e142667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__142678 = state_142652;
state_142652 = G__142678;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__ = function(state_142652){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1.call(this,state_142652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___142670,out))
})();
var state__33354__auto__ = (function (){var statearr_142669 = f__33353__auto__.call(null);
(statearr_142669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___142670);

return statearr_142669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___142670,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__142679,opts){
var map__142683 = p__142679;
var map__142683__$1 = ((((!((map__142683 == null)))?((((map__142683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142683):map__142683);
var eval_body__$1 = cljs.core.get.call(null,map__142683__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__142683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e142685){var e = e142685;
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
return (function (p1__142686_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__142686_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__142695){
var vec__142696 = p__142695;
var k = cljs.core.nth.call(null,vec__142696,(0),null);
var v = cljs.core.nth.call(null,vec__142696,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__142699){
var vec__142700 = p__142699;
var k = cljs.core.nth.call(null,vec__142700,(0),null);
var v = cljs.core.nth.call(null,vec__142700,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__142706,p__142707){
var map__142954 = p__142706;
var map__142954__$1 = ((((!((map__142954 == null)))?((((map__142954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142954):map__142954);
var opts = map__142954__$1;
var before_jsload = cljs.core.get.call(null,map__142954__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__142954__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__142954__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__142955 = p__142707;
var map__142955__$1 = ((((!((map__142955 == null)))?((((map__142955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142955):map__142955);
var msg = map__142955__$1;
var files = cljs.core.get.call(null,map__142955__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__142955__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__142955__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_143108){
var state_val_143109 = (state_143108[(1)]);
if((state_val_143109 === (7))){
var inst_142970 = (state_143108[(7)]);
var inst_142971 = (state_143108[(8)]);
var inst_142972 = (state_143108[(9)]);
var inst_142969 = (state_143108[(10)]);
var inst_142977 = cljs.core._nth.call(null,inst_142970,inst_142972);
var inst_142978 = figwheel.client.file_reloading.eval_body.call(null,inst_142977,opts);
var inst_142979 = (inst_142972 + (1));
var tmp143110 = inst_142970;
var tmp143111 = inst_142971;
var tmp143112 = inst_142969;
var inst_142969__$1 = tmp143112;
var inst_142970__$1 = tmp143110;
var inst_142971__$1 = tmp143111;
var inst_142972__$1 = inst_142979;
var state_143108__$1 = (function (){var statearr_143113 = state_143108;
(statearr_143113[(7)] = inst_142970__$1);

(statearr_143113[(8)] = inst_142971__$1);

(statearr_143113[(9)] = inst_142972__$1);

(statearr_143113[(10)] = inst_142969__$1);

(statearr_143113[(11)] = inst_142978);

return statearr_143113;
})();
var statearr_143114_143200 = state_143108__$1;
(statearr_143114_143200[(2)] = null);

(statearr_143114_143200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (20))){
var inst_143012 = (state_143108[(12)]);
var inst_143020 = figwheel.client.file_reloading.sort_files.call(null,inst_143012);
var state_143108__$1 = state_143108;
var statearr_143115_143201 = state_143108__$1;
(statearr_143115_143201[(2)] = inst_143020);

(statearr_143115_143201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (27))){
var state_143108__$1 = state_143108;
var statearr_143116_143202 = state_143108__$1;
(statearr_143116_143202[(2)] = null);

(statearr_143116_143202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (1))){
var inst_142961 = (state_143108[(13)]);
var inst_142958 = before_jsload.call(null,files);
var inst_142959 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_142960 = (function (){return ((function (inst_142961,inst_142958,inst_142959,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__142703_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__142703_SHARP_);
});
;})(inst_142961,inst_142958,inst_142959,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_142961__$1 = cljs.core.filter.call(null,inst_142960,files);
var inst_142962 = cljs.core.not_empty.call(null,inst_142961__$1);
var state_143108__$1 = (function (){var statearr_143117 = state_143108;
(statearr_143117[(14)] = inst_142958);

(statearr_143117[(13)] = inst_142961__$1);

(statearr_143117[(15)] = inst_142959);

return statearr_143117;
})();
if(cljs.core.truth_(inst_142962)){
var statearr_143118_143203 = state_143108__$1;
(statearr_143118_143203[(1)] = (2));

} else {
var statearr_143119_143204 = state_143108__$1;
(statearr_143119_143204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (24))){
var state_143108__$1 = state_143108;
var statearr_143120_143205 = state_143108__$1;
(statearr_143120_143205[(2)] = null);

(statearr_143120_143205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (39))){
var inst_143062 = (state_143108[(16)]);
var state_143108__$1 = state_143108;
var statearr_143121_143206 = state_143108__$1;
(statearr_143121_143206[(2)] = inst_143062);

(statearr_143121_143206[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (46))){
var inst_143103 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143122_143207 = state_143108__$1;
(statearr_143122_143207[(2)] = inst_143103);

(statearr_143122_143207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (4))){
var inst_143006 = (state_143108[(2)]);
var inst_143007 = cljs.core.List.EMPTY;
var inst_143008 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_143007);
var inst_143009 = (function (){return ((function (inst_143006,inst_143007,inst_143008,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__142704_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__142704_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__142704_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_143006,inst_143007,inst_143008,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143010 = cljs.core.filter.call(null,inst_143009,files);
var inst_143011 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_143012 = cljs.core.concat.call(null,inst_143010,inst_143011);
var state_143108__$1 = (function (){var statearr_143123 = state_143108;
(statearr_143123[(12)] = inst_143012);

(statearr_143123[(17)] = inst_143006);

(statearr_143123[(18)] = inst_143008);

return statearr_143123;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_143124_143208 = state_143108__$1;
(statearr_143124_143208[(1)] = (16));

} else {
var statearr_143125_143209 = state_143108__$1;
(statearr_143125_143209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (15))){
var inst_142996 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143126_143210 = state_143108__$1;
(statearr_143126_143210[(2)] = inst_142996);

(statearr_143126_143210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (21))){
var inst_143022 = (state_143108[(19)]);
var inst_143022__$1 = (state_143108[(2)]);
var inst_143023 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_143022__$1);
var state_143108__$1 = (function (){var statearr_143127 = state_143108;
(statearr_143127[(19)] = inst_143022__$1);

return statearr_143127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143108__$1,(22),inst_143023);
} else {
if((state_val_143109 === (31))){
var inst_143106 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143108__$1,inst_143106);
} else {
if((state_val_143109 === (32))){
var inst_143062 = (state_143108[(16)]);
var inst_143067 = inst_143062.cljs$lang$protocol_mask$partition0$;
var inst_143068 = (inst_143067 & (64));
var inst_143069 = inst_143062.cljs$core$ISeq$;
var inst_143070 = (inst_143068) || (inst_143069);
var state_143108__$1 = state_143108;
if(cljs.core.truth_(inst_143070)){
var statearr_143128_143211 = state_143108__$1;
(statearr_143128_143211[(1)] = (35));

} else {
var statearr_143129_143212 = state_143108__$1;
(statearr_143129_143212[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (40))){
var inst_143083 = (state_143108[(20)]);
var inst_143082 = (state_143108[(2)]);
var inst_143083__$1 = cljs.core.get.call(null,inst_143082,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_143084 = cljs.core.get.call(null,inst_143082,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_143085 = cljs.core.not_empty.call(null,inst_143083__$1);
var state_143108__$1 = (function (){var statearr_143130 = state_143108;
(statearr_143130[(21)] = inst_143084);

(statearr_143130[(20)] = inst_143083__$1);

return statearr_143130;
})();
if(cljs.core.truth_(inst_143085)){
var statearr_143131_143213 = state_143108__$1;
(statearr_143131_143213[(1)] = (41));

} else {
var statearr_143132_143214 = state_143108__$1;
(statearr_143132_143214[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (33))){
var state_143108__$1 = state_143108;
var statearr_143133_143215 = state_143108__$1;
(statearr_143133_143215[(2)] = false);

(statearr_143133_143215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (13))){
var inst_142982 = (state_143108[(22)]);
var inst_142986 = cljs.core.chunk_first.call(null,inst_142982);
var inst_142987 = cljs.core.chunk_rest.call(null,inst_142982);
var inst_142988 = cljs.core.count.call(null,inst_142986);
var inst_142969 = inst_142987;
var inst_142970 = inst_142986;
var inst_142971 = inst_142988;
var inst_142972 = (0);
var state_143108__$1 = (function (){var statearr_143134 = state_143108;
(statearr_143134[(7)] = inst_142970);

(statearr_143134[(8)] = inst_142971);

(statearr_143134[(9)] = inst_142972);

(statearr_143134[(10)] = inst_142969);

return statearr_143134;
})();
var statearr_143135_143216 = state_143108__$1;
(statearr_143135_143216[(2)] = null);

(statearr_143135_143216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (22))){
var inst_143030 = (state_143108[(23)]);
var inst_143022 = (state_143108[(19)]);
var inst_143025 = (state_143108[(24)]);
var inst_143026 = (state_143108[(25)]);
var inst_143025__$1 = (state_143108[(2)]);
var inst_143026__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_143025__$1);
var inst_143027 = (function (){var all_files = inst_143022;
var res_SINGLEQUOTE_ = inst_143025__$1;
var res = inst_143026__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_143030,inst_143022,inst_143025,inst_143026,inst_143025__$1,inst_143026__$1,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__142705_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__142705_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_143030,inst_143022,inst_143025,inst_143026,inst_143025__$1,inst_143026__$1,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143028 = cljs.core.filter.call(null,inst_143027,inst_143025__$1);
var inst_143029 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_143030__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_143029);
var inst_143031 = cljs.core.not_empty.call(null,inst_143030__$1);
var state_143108__$1 = (function (){var statearr_143136 = state_143108;
(statearr_143136[(23)] = inst_143030__$1);

(statearr_143136[(26)] = inst_143028);

(statearr_143136[(24)] = inst_143025__$1);

(statearr_143136[(25)] = inst_143026__$1);

return statearr_143136;
})();
if(cljs.core.truth_(inst_143031)){
var statearr_143137_143217 = state_143108__$1;
(statearr_143137_143217[(1)] = (23));

} else {
var statearr_143138_143218 = state_143108__$1;
(statearr_143138_143218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (36))){
var state_143108__$1 = state_143108;
var statearr_143139_143219 = state_143108__$1;
(statearr_143139_143219[(2)] = false);

(statearr_143139_143219[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (41))){
var inst_143083 = (state_143108[(20)]);
var inst_143087 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_143088 = cljs.core.map.call(null,inst_143087,inst_143083);
var inst_143089 = cljs.core.pr_str.call(null,inst_143088);
var inst_143090 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_143089)].join('');
var inst_143091 = figwheel.client.utils.log.call(null,inst_143090);
var state_143108__$1 = state_143108;
var statearr_143140_143220 = state_143108__$1;
(statearr_143140_143220[(2)] = inst_143091);

(statearr_143140_143220[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (43))){
var inst_143084 = (state_143108[(21)]);
var inst_143094 = (state_143108[(2)]);
var inst_143095 = cljs.core.not_empty.call(null,inst_143084);
var state_143108__$1 = (function (){var statearr_143141 = state_143108;
(statearr_143141[(27)] = inst_143094);

return statearr_143141;
})();
if(cljs.core.truth_(inst_143095)){
var statearr_143142_143221 = state_143108__$1;
(statearr_143142_143221[(1)] = (44));

} else {
var statearr_143143_143222 = state_143108__$1;
(statearr_143143_143222[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (29))){
var inst_143030 = (state_143108[(23)]);
var inst_143028 = (state_143108[(26)]);
var inst_143022 = (state_143108[(19)]);
var inst_143062 = (state_143108[(16)]);
var inst_143025 = (state_143108[(24)]);
var inst_143026 = (state_143108[(25)]);
var inst_143058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_143061 = (function (){var all_files = inst_143022;
var res_SINGLEQUOTE_ = inst_143025;
var res = inst_143026;
var files_not_loaded = inst_143028;
var dependencies_that_loaded = inst_143030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143062,inst_143025,inst_143026,inst_143058,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__143060){
var map__143144 = p__143060;
var map__143144__$1 = ((((!((map__143144 == null)))?((((map__143144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143144):map__143144);
var namespace = cljs.core.get.call(null,map__143144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143062,inst_143025,inst_143026,inst_143058,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143062__$1 = cljs.core.group_by.call(null,inst_143061,inst_143028);
var inst_143064 = (inst_143062__$1 == null);
var inst_143065 = cljs.core.not.call(null,inst_143064);
var state_143108__$1 = (function (){var statearr_143146 = state_143108;
(statearr_143146[(16)] = inst_143062__$1);

(statearr_143146[(28)] = inst_143058);

return statearr_143146;
})();
if(inst_143065){
var statearr_143147_143223 = state_143108__$1;
(statearr_143147_143223[(1)] = (32));

} else {
var statearr_143148_143224 = state_143108__$1;
(statearr_143148_143224[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (44))){
var inst_143084 = (state_143108[(21)]);
var inst_143097 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_143084);
var inst_143098 = cljs.core.pr_str.call(null,inst_143097);
var inst_143099 = [cljs.core.str("not required: "),cljs.core.str(inst_143098)].join('');
var inst_143100 = figwheel.client.utils.log.call(null,inst_143099);
var state_143108__$1 = state_143108;
var statearr_143149_143225 = state_143108__$1;
(statearr_143149_143225[(2)] = inst_143100);

(statearr_143149_143225[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (6))){
var inst_143003 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143150_143226 = state_143108__$1;
(statearr_143150_143226[(2)] = inst_143003);

(statearr_143150_143226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (28))){
var inst_143028 = (state_143108[(26)]);
var inst_143055 = (state_143108[(2)]);
var inst_143056 = cljs.core.not_empty.call(null,inst_143028);
var state_143108__$1 = (function (){var statearr_143151 = state_143108;
(statearr_143151[(29)] = inst_143055);

return statearr_143151;
})();
if(cljs.core.truth_(inst_143056)){
var statearr_143152_143227 = state_143108__$1;
(statearr_143152_143227[(1)] = (29));

} else {
var statearr_143153_143228 = state_143108__$1;
(statearr_143153_143228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (25))){
var inst_143026 = (state_143108[(25)]);
var inst_143042 = (state_143108[(2)]);
var inst_143043 = cljs.core.not_empty.call(null,inst_143026);
var state_143108__$1 = (function (){var statearr_143154 = state_143108;
(statearr_143154[(30)] = inst_143042);

return statearr_143154;
})();
if(cljs.core.truth_(inst_143043)){
var statearr_143155_143229 = state_143108__$1;
(statearr_143155_143229[(1)] = (26));

} else {
var statearr_143156_143230 = state_143108__$1;
(statearr_143156_143230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (34))){
var inst_143077 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
if(cljs.core.truth_(inst_143077)){
var statearr_143157_143231 = state_143108__$1;
(statearr_143157_143231[(1)] = (38));

} else {
var statearr_143158_143232 = state_143108__$1;
(statearr_143158_143232[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (17))){
var state_143108__$1 = state_143108;
var statearr_143159_143233 = state_143108__$1;
(statearr_143159_143233[(2)] = recompile_dependents);

(statearr_143159_143233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (3))){
var state_143108__$1 = state_143108;
var statearr_143160_143234 = state_143108__$1;
(statearr_143160_143234[(2)] = null);

(statearr_143160_143234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (12))){
var inst_142999 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143161_143235 = state_143108__$1;
(statearr_143161_143235[(2)] = inst_142999);

(statearr_143161_143235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (2))){
var inst_142961 = (state_143108[(13)]);
var inst_142968 = cljs.core.seq.call(null,inst_142961);
var inst_142969 = inst_142968;
var inst_142970 = null;
var inst_142971 = (0);
var inst_142972 = (0);
var state_143108__$1 = (function (){var statearr_143162 = state_143108;
(statearr_143162[(7)] = inst_142970);

(statearr_143162[(8)] = inst_142971);

(statearr_143162[(9)] = inst_142972);

(statearr_143162[(10)] = inst_142969);

return statearr_143162;
})();
var statearr_143163_143236 = state_143108__$1;
(statearr_143163_143236[(2)] = null);

(statearr_143163_143236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (23))){
var inst_143030 = (state_143108[(23)]);
var inst_143028 = (state_143108[(26)]);
var inst_143022 = (state_143108[(19)]);
var inst_143025 = (state_143108[(24)]);
var inst_143026 = (state_143108[(25)]);
var inst_143033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_143035 = (function (){var all_files = inst_143022;
var res_SINGLEQUOTE_ = inst_143025;
var res = inst_143026;
var files_not_loaded = inst_143028;
var dependencies_that_loaded = inst_143030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143033,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__143034){
var map__143164 = p__143034;
var map__143164__$1 = ((((!((map__143164 == null)))?((((map__143164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143164):map__143164);
var request_url = cljs.core.get.call(null,map__143164__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143033,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143036 = cljs.core.reverse.call(null,inst_143030);
var inst_143037 = cljs.core.map.call(null,inst_143035,inst_143036);
var inst_143038 = cljs.core.pr_str.call(null,inst_143037);
var inst_143039 = figwheel.client.utils.log.call(null,inst_143038);
var state_143108__$1 = (function (){var statearr_143166 = state_143108;
(statearr_143166[(31)] = inst_143033);

return statearr_143166;
})();
var statearr_143167_143237 = state_143108__$1;
(statearr_143167_143237[(2)] = inst_143039);

(statearr_143167_143237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (35))){
var state_143108__$1 = state_143108;
var statearr_143168_143238 = state_143108__$1;
(statearr_143168_143238[(2)] = true);

(statearr_143168_143238[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (19))){
var inst_143012 = (state_143108[(12)]);
var inst_143018 = figwheel.client.file_reloading.expand_files.call(null,inst_143012);
var state_143108__$1 = state_143108;
var statearr_143169_143239 = state_143108__$1;
(statearr_143169_143239[(2)] = inst_143018);

(statearr_143169_143239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (11))){
var state_143108__$1 = state_143108;
var statearr_143170_143240 = state_143108__$1;
(statearr_143170_143240[(2)] = null);

(statearr_143170_143240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (9))){
var inst_143001 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143171_143241 = state_143108__$1;
(statearr_143171_143241[(2)] = inst_143001);

(statearr_143171_143241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (5))){
var inst_142971 = (state_143108[(8)]);
var inst_142972 = (state_143108[(9)]);
var inst_142974 = (inst_142972 < inst_142971);
var inst_142975 = inst_142974;
var state_143108__$1 = state_143108;
if(cljs.core.truth_(inst_142975)){
var statearr_143172_143242 = state_143108__$1;
(statearr_143172_143242[(1)] = (7));

} else {
var statearr_143173_143243 = state_143108__$1;
(statearr_143173_143243[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (14))){
var inst_142982 = (state_143108[(22)]);
var inst_142991 = cljs.core.first.call(null,inst_142982);
var inst_142992 = figwheel.client.file_reloading.eval_body.call(null,inst_142991,opts);
var inst_142993 = cljs.core.next.call(null,inst_142982);
var inst_142969 = inst_142993;
var inst_142970 = null;
var inst_142971 = (0);
var inst_142972 = (0);
var state_143108__$1 = (function (){var statearr_143174 = state_143108;
(statearr_143174[(7)] = inst_142970);

(statearr_143174[(8)] = inst_142971);

(statearr_143174[(9)] = inst_142972);

(statearr_143174[(10)] = inst_142969);

(statearr_143174[(32)] = inst_142992);

return statearr_143174;
})();
var statearr_143175_143244 = state_143108__$1;
(statearr_143175_143244[(2)] = null);

(statearr_143175_143244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (45))){
var state_143108__$1 = state_143108;
var statearr_143176_143245 = state_143108__$1;
(statearr_143176_143245[(2)] = null);

(statearr_143176_143245[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (26))){
var inst_143030 = (state_143108[(23)]);
var inst_143028 = (state_143108[(26)]);
var inst_143022 = (state_143108[(19)]);
var inst_143025 = (state_143108[(24)]);
var inst_143026 = (state_143108[(25)]);
var inst_143045 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_143047 = (function (){var all_files = inst_143022;
var res_SINGLEQUOTE_ = inst_143025;
var res = inst_143026;
var files_not_loaded = inst_143028;
var dependencies_that_loaded = inst_143030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143045,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__143046){
var map__143177 = p__143046;
var map__143177__$1 = ((((!((map__143177 == null)))?((((map__143177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143177):map__143177);
var namespace = cljs.core.get.call(null,map__143177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__143177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143045,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143048 = cljs.core.map.call(null,inst_143047,inst_143026);
var inst_143049 = cljs.core.pr_str.call(null,inst_143048);
var inst_143050 = figwheel.client.utils.log.call(null,inst_143049);
var inst_143051 = (function (){var all_files = inst_143022;
var res_SINGLEQUOTE_ = inst_143025;
var res = inst_143026;
var files_not_loaded = inst_143028;
var dependencies_that_loaded = inst_143030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143045,inst_143047,inst_143048,inst_143049,inst_143050,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_143030,inst_143028,inst_143022,inst_143025,inst_143026,inst_143045,inst_143047,inst_143048,inst_143049,inst_143050,state_val_143109,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_143052 = setTimeout(inst_143051,(10));
var state_143108__$1 = (function (){var statearr_143179 = state_143108;
(statearr_143179[(33)] = inst_143045);

(statearr_143179[(34)] = inst_143050);

return statearr_143179;
})();
var statearr_143180_143246 = state_143108__$1;
(statearr_143180_143246[(2)] = inst_143052);

(statearr_143180_143246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (16))){
var state_143108__$1 = state_143108;
var statearr_143181_143247 = state_143108__$1;
(statearr_143181_143247[(2)] = reload_dependents);

(statearr_143181_143247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (38))){
var inst_143062 = (state_143108[(16)]);
var inst_143079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_143062);
var state_143108__$1 = state_143108;
var statearr_143182_143248 = state_143108__$1;
(statearr_143182_143248[(2)] = inst_143079);

(statearr_143182_143248[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (30))){
var state_143108__$1 = state_143108;
var statearr_143183_143249 = state_143108__$1;
(statearr_143183_143249[(2)] = null);

(statearr_143183_143249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (10))){
var inst_142982 = (state_143108[(22)]);
var inst_142984 = cljs.core.chunked_seq_QMARK_.call(null,inst_142982);
var state_143108__$1 = state_143108;
if(inst_142984){
var statearr_143184_143250 = state_143108__$1;
(statearr_143184_143250[(1)] = (13));

} else {
var statearr_143185_143251 = state_143108__$1;
(statearr_143185_143251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (18))){
var inst_143016 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
if(cljs.core.truth_(inst_143016)){
var statearr_143186_143252 = state_143108__$1;
(statearr_143186_143252[(1)] = (19));

} else {
var statearr_143187_143253 = state_143108__$1;
(statearr_143187_143253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (42))){
var state_143108__$1 = state_143108;
var statearr_143188_143254 = state_143108__$1;
(statearr_143188_143254[(2)] = null);

(statearr_143188_143254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (37))){
var inst_143074 = (state_143108[(2)]);
var state_143108__$1 = state_143108;
var statearr_143189_143255 = state_143108__$1;
(statearr_143189_143255[(2)] = inst_143074);

(statearr_143189_143255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143109 === (8))){
var inst_142982 = (state_143108[(22)]);
var inst_142969 = (state_143108[(10)]);
var inst_142982__$1 = cljs.core.seq.call(null,inst_142969);
var state_143108__$1 = (function (){var statearr_143190 = state_143108;
(statearr_143190[(22)] = inst_142982__$1);

return statearr_143190;
})();
if(inst_142982__$1){
var statearr_143191_143256 = state_143108__$1;
(statearr_143191_143256[(1)] = (10));

} else {
var statearr_143192_143257 = state_143108__$1;
(statearr_143192_143257[(1)] = (11));

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
});})(c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33287__auto__,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0 = (function (){
var statearr_143196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_143196[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__);

(statearr_143196[(1)] = (1));

return statearr_143196;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1 = (function (state_143108){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_143108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e143197){if((e143197 instanceof Object)){
var ex__33291__auto__ = e143197;
var statearr_143198_143258 = state_143108;
(statearr_143198_143258[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143259 = state_143108;
state_143108 = G__143259;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__ = function(state_143108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1.call(this,state_143108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33354__auto__ = (function (){var statearr_143199 = f__33353__auto__.call(null);
(statearr_143199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_143199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,map__142954,map__142954__$1,opts,before_jsload,on_jsload,reload_dependents,map__142955,map__142955__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33352__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__143262,link){
var map__143265 = p__143262;
var map__143265__$1 = ((((!((map__143265 == null)))?((((map__143265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143265):map__143265);
var file = cljs.core.get.call(null,map__143265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__143265,map__143265__$1,file){
return (function (p1__143260_SHARP_,p2__143261_SHARP_){
if(cljs.core._EQ_.call(null,p1__143260_SHARP_,p2__143261_SHARP_)){
return p1__143260_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__143265,map__143265__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__143271){
var map__143272 = p__143271;
var map__143272__$1 = ((((!((map__143272 == null)))?((((map__143272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143272):map__143272);
var match_length = cljs.core.get.call(null,map__143272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__143272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__143267_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__143267_SHARP_);
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
var args143274 = [];
var len__26121__auto___143277 = arguments.length;
var i__26122__auto___143278 = (0);
while(true){
if((i__26122__auto___143278 < len__26121__auto___143277)){
args143274.push((arguments[i__26122__auto___143278]));

var G__143279 = (i__26122__auto___143278 + (1));
i__26122__auto___143278 = G__143279;
continue;
} else {
}
break;
}

var G__143276 = args143274.length;
switch (G__143276) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args143274.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__143281_SHARP_,p2__143282_SHARP_){
return cljs.core.assoc.call(null,p1__143281_SHARP_,cljs.core.get.call(null,p2__143282_SHARP_,key),p2__143282_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__143283){
var map__143286 = p__143283;
var map__143286__$1 = ((((!((map__143286 == null)))?((((map__143286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143286):map__143286);
var f_data = map__143286__$1;
var file = cljs.core.get.call(null,map__143286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__143288,p__143289){
var map__143298 = p__143288;
var map__143298__$1 = ((((!((map__143298 == null)))?((((map__143298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143298):map__143298);
var opts = map__143298__$1;
var on_cssload = cljs.core.get.call(null,map__143298__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__143299 = p__143289;
var map__143299__$1 = ((((!((map__143299 == null)))?((((map__143299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__143299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__143299):map__143299);
var files_msg = map__143299__$1;
var files = cljs.core.get.call(null,map__143299__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__143302_143306 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__143303_143307 = null;
var count__143304_143308 = (0);
var i__143305_143309 = (0);
while(true){
if((i__143305_143309 < count__143304_143308)){
var f_143310 = cljs.core._nth.call(null,chunk__143303_143307,i__143305_143309);
figwheel.client.file_reloading.reload_css_file.call(null,f_143310);

var G__143311 = seq__143302_143306;
var G__143312 = chunk__143303_143307;
var G__143313 = count__143304_143308;
var G__143314 = (i__143305_143309 + (1));
seq__143302_143306 = G__143311;
chunk__143303_143307 = G__143312;
count__143304_143308 = G__143313;
i__143305_143309 = G__143314;
continue;
} else {
var temp__4657__auto___143315 = cljs.core.seq.call(null,seq__143302_143306);
if(temp__4657__auto___143315){
var seq__143302_143316__$1 = temp__4657__auto___143315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__143302_143316__$1)){
var c__25857__auto___143317 = cljs.core.chunk_first.call(null,seq__143302_143316__$1);
var G__143318 = cljs.core.chunk_rest.call(null,seq__143302_143316__$1);
var G__143319 = c__25857__auto___143317;
var G__143320 = cljs.core.count.call(null,c__25857__auto___143317);
var G__143321 = (0);
seq__143302_143306 = G__143318;
chunk__143303_143307 = G__143319;
count__143304_143308 = G__143320;
i__143305_143309 = G__143321;
continue;
} else {
var f_143322 = cljs.core.first.call(null,seq__143302_143316__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_143322);

var G__143323 = cljs.core.next.call(null,seq__143302_143316__$1);
var G__143324 = null;
var G__143325 = (0);
var G__143326 = (0);
seq__143302_143306 = G__143323;
chunk__143303_143307 = G__143324;
count__143304_143308 = G__143325;
i__143305_143309 = G__143326;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__143298,map__143298__$1,opts,on_cssload,map__143299,map__143299__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__143298,map__143298__$1,opts,on_cssload,map__143299,map__143299__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484099826407
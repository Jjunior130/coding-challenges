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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43198_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43198_SHARP_));
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
var seq__43203 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43204 = null;
var count__43205 = (0);
var i__43206 = (0);
while(true){
if((i__43206 < count__43205)){
var n = cljs.core._nth.call(null,chunk__43204,i__43206);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43207 = seq__43203;
var G__43208 = chunk__43204;
var G__43209 = count__43205;
var G__43210 = (i__43206 + (1));
seq__43203 = G__43207;
chunk__43204 = G__43208;
count__43205 = G__43209;
i__43206 = G__43210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43203);
if(temp__4657__auto__){
var seq__43203__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43203__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__43203__$1);
var G__43211 = cljs.core.chunk_rest.call(null,seq__43203__$1);
var G__43212 = c__25857__auto__;
var G__43213 = cljs.core.count.call(null,c__25857__auto__);
var G__43214 = (0);
seq__43203 = G__43211;
chunk__43204 = G__43212;
count__43205 = G__43213;
i__43206 = G__43214;
continue;
} else {
var n = cljs.core.first.call(null,seq__43203__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43215 = cljs.core.next.call(null,seq__43203__$1);
var G__43216 = null;
var G__43217 = (0);
var G__43218 = (0);
seq__43203 = G__43215;
chunk__43204 = G__43216;
count__43205 = G__43217;
i__43206 = G__43218;
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

var seq__43269_43280 = cljs.core.seq.call(null,deps);
var chunk__43270_43281 = null;
var count__43271_43282 = (0);
var i__43272_43283 = (0);
while(true){
if((i__43272_43283 < count__43271_43282)){
var dep_43284 = cljs.core._nth.call(null,chunk__43270_43281,i__43272_43283);
topo_sort_helper_STAR_.call(null,dep_43284,(depth + (1)),state);

var G__43285 = seq__43269_43280;
var G__43286 = chunk__43270_43281;
var G__43287 = count__43271_43282;
var G__43288 = (i__43272_43283 + (1));
seq__43269_43280 = G__43285;
chunk__43270_43281 = G__43286;
count__43271_43282 = G__43287;
i__43272_43283 = G__43288;
continue;
} else {
var temp__4657__auto___43289 = cljs.core.seq.call(null,seq__43269_43280);
if(temp__4657__auto___43289){
var seq__43269_43290__$1 = temp__4657__auto___43289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43269_43290__$1)){
var c__25857__auto___43291 = cljs.core.chunk_first.call(null,seq__43269_43290__$1);
var G__43292 = cljs.core.chunk_rest.call(null,seq__43269_43290__$1);
var G__43293 = c__25857__auto___43291;
var G__43294 = cljs.core.count.call(null,c__25857__auto___43291);
var G__43295 = (0);
seq__43269_43280 = G__43292;
chunk__43270_43281 = G__43293;
count__43271_43282 = G__43294;
i__43272_43283 = G__43295;
continue;
} else {
var dep_43296 = cljs.core.first.call(null,seq__43269_43290__$1);
topo_sort_helper_STAR_.call(null,dep_43296,(depth + (1)),state);

var G__43297 = cljs.core.next.call(null,seq__43269_43290__$1);
var G__43298 = null;
var G__43299 = (0);
var G__43300 = (0);
seq__43269_43280 = G__43297;
chunk__43270_43281 = G__43298;
count__43271_43282 = G__43299;
i__43272_43283 = G__43300;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__43273){
var vec__43277 = p__43273;
var seq__43278 = cljs.core.seq.call(null,vec__43277);
var first__43279 = cljs.core.first.call(null,seq__43278);
var seq__43278__$1 = cljs.core.next.call(null,seq__43278);
var x = first__43279;
var xs = seq__43278__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__43277,seq__43278,first__43279,seq__43278__$1,x,xs,get_deps__$1){
return (function (p1__43219_SHARP_){
return clojure.set.difference.call(null,p1__43219_SHARP_,x);
});})(vec__43277,seq__43278,first__43279,seq__43278__$1,x,xs,get_deps__$1))
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
var seq__43313 = cljs.core.seq.call(null,provides);
var chunk__43314 = null;
var count__43315 = (0);
var i__43316 = (0);
while(true){
if((i__43316 < count__43315)){
var prov = cljs.core._nth.call(null,chunk__43314,i__43316);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43317_43325 = cljs.core.seq.call(null,requires);
var chunk__43318_43326 = null;
var count__43319_43327 = (0);
var i__43320_43328 = (0);
while(true){
if((i__43320_43328 < count__43319_43327)){
var req_43329 = cljs.core._nth.call(null,chunk__43318_43326,i__43320_43328);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43329,prov);

var G__43330 = seq__43317_43325;
var G__43331 = chunk__43318_43326;
var G__43332 = count__43319_43327;
var G__43333 = (i__43320_43328 + (1));
seq__43317_43325 = G__43330;
chunk__43318_43326 = G__43331;
count__43319_43327 = G__43332;
i__43320_43328 = G__43333;
continue;
} else {
var temp__4657__auto___43334 = cljs.core.seq.call(null,seq__43317_43325);
if(temp__4657__auto___43334){
var seq__43317_43335__$1 = temp__4657__auto___43334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43317_43335__$1)){
var c__25857__auto___43336 = cljs.core.chunk_first.call(null,seq__43317_43335__$1);
var G__43337 = cljs.core.chunk_rest.call(null,seq__43317_43335__$1);
var G__43338 = c__25857__auto___43336;
var G__43339 = cljs.core.count.call(null,c__25857__auto___43336);
var G__43340 = (0);
seq__43317_43325 = G__43337;
chunk__43318_43326 = G__43338;
count__43319_43327 = G__43339;
i__43320_43328 = G__43340;
continue;
} else {
var req_43341 = cljs.core.first.call(null,seq__43317_43335__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43341,prov);

var G__43342 = cljs.core.next.call(null,seq__43317_43335__$1);
var G__43343 = null;
var G__43344 = (0);
var G__43345 = (0);
seq__43317_43325 = G__43342;
chunk__43318_43326 = G__43343;
count__43319_43327 = G__43344;
i__43320_43328 = G__43345;
continue;
}
} else {
}
}
break;
}

var G__43346 = seq__43313;
var G__43347 = chunk__43314;
var G__43348 = count__43315;
var G__43349 = (i__43316 + (1));
seq__43313 = G__43346;
chunk__43314 = G__43347;
count__43315 = G__43348;
i__43316 = G__43349;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43313);
if(temp__4657__auto__){
var seq__43313__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43313__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__43313__$1);
var G__43350 = cljs.core.chunk_rest.call(null,seq__43313__$1);
var G__43351 = c__25857__auto__;
var G__43352 = cljs.core.count.call(null,c__25857__auto__);
var G__43353 = (0);
seq__43313 = G__43350;
chunk__43314 = G__43351;
count__43315 = G__43352;
i__43316 = G__43353;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43313__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43321_43354 = cljs.core.seq.call(null,requires);
var chunk__43322_43355 = null;
var count__43323_43356 = (0);
var i__43324_43357 = (0);
while(true){
if((i__43324_43357 < count__43323_43356)){
var req_43358 = cljs.core._nth.call(null,chunk__43322_43355,i__43324_43357);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43358,prov);

var G__43359 = seq__43321_43354;
var G__43360 = chunk__43322_43355;
var G__43361 = count__43323_43356;
var G__43362 = (i__43324_43357 + (1));
seq__43321_43354 = G__43359;
chunk__43322_43355 = G__43360;
count__43323_43356 = G__43361;
i__43324_43357 = G__43362;
continue;
} else {
var temp__4657__auto___43363__$1 = cljs.core.seq.call(null,seq__43321_43354);
if(temp__4657__auto___43363__$1){
var seq__43321_43364__$1 = temp__4657__auto___43363__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43321_43364__$1)){
var c__25857__auto___43365 = cljs.core.chunk_first.call(null,seq__43321_43364__$1);
var G__43366 = cljs.core.chunk_rest.call(null,seq__43321_43364__$1);
var G__43367 = c__25857__auto___43365;
var G__43368 = cljs.core.count.call(null,c__25857__auto___43365);
var G__43369 = (0);
seq__43321_43354 = G__43366;
chunk__43322_43355 = G__43367;
count__43323_43356 = G__43368;
i__43324_43357 = G__43369;
continue;
} else {
var req_43370 = cljs.core.first.call(null,seq__43321_43364__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43370,prov);

var G__43371 = cljs.core.next.call(null,seq__43321_43364__$1);
var G__43372 = null;
var G__43373 = (0);
var G__43374 = (0);
seq__43321_43354 = G__43371;
chunk__43322_43355 = G__43372;
count__43323_43356 = G__43373;
i__43324_43357 = G__43374;
continue;
}
} else {
}
}
break;
}

var G__43375 = cljs.core.next.call(null,seq__43313__$1);
var G__43376 = null;
var G__43377 = (0);
var G__43378 = (0);
seq__43313 = G__43375;
chunk__43314 = G__43376;
count__43315 = G__43377;
i__43316 = G__43378;
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
var seq__43383_43387 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43384_43388 = null;
var count__43385_43389 = (0);
var i__43386_43390 = (0);
while(true){
if((i__43386_43390 < count__43385_43389)){
var ns_43391 = cljs.core._nth.call(null,chunk__43384_43388,i__43386_43390);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43391);

var G__43392 = seq__43383_43387;
var G__43393 = chunk__43384_43388;
var G__43394 = count__43385_43389;
var G__43395 = (i__43386_43390 + (1));
seq__43383_43387 = G__43392;
chunk__43384_43388 = G__43393;
count__43385_43389 = G__43394;
i__43386_43390 = G__43395;
continue;
} else {
var temp__4657__auto___43396 = cljs.core.seq.call(null,seq__43383_43387);
if(temp__4657__auto___43396){
var seq__43383_43397__$1 = temp__4657__auto___43396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43383_43397__$1)){
var c__25857__auto___43398 = cljs.core.chunk_first.call(null,seq__43383_43397__$1);
var G__43399 = cljs.core.chunk_rest.call(null,seq__43383_43397__$1);
var G__43400 = c__25857__auto___43398;
var G__43401 = cljs.core.count.call(null,c__25857__auto___43398);
var G__43402 = (0);
seq__43383_43387 = G__43399;
chunk__43384_43388 = G__43400;
count__43385_43389 = G__43401;
i__43386_43390 = G__43402;
continue;
} else {
var ns_43403 = cljs.core.first.call(null,seq__43383_43397__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43403);

var G__43404 = cljs.core.next.call(null,seq__43383_43397__$1);
var G__43405 = null;
var G__43406 = (0);
var G__43407 = (0);
seq__43383_43387 = G__43404;
chunk__43384_43388 = G__43405;
count__43385_43389 = G__43406;
i__43386_43390 = G__43407;
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
var G__43408__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43409__i = 0, G__43409__a = new Array(arguments.length -  0);
while (G__43409__i < G__43409__a.length) {G__43409__a[G__43409__i] = arguments[G__43409__i + 0]; ++G__43409__i;}
  args = new cljs.core.IndexedSeq(G__43409__a,0);
} 
return G__43408__delegate.call(this,args);};
G__43408.cljs$lang$maxFixedArity = 0;
G__43408.cljs$lang$applyTo = (function (arglist__43410){
var args = cljs.core.seq(arglist__43410);
return G__43408__delegate(args);
});
G__43408.cljs$core$IFn$_invoke$arity$variadic = G__43408__delegate;
return G__43408;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43412 = cljs.core._EQ_;
var expr__43413 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43412.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43413))){
var path_parts = ((function (pred__43412,expr__43413){
return (function (p1__43411_SHARP_){
return clojure.string.split.call(null,p1__43411_SHARP_,/[\/\\]/);
});})(pred__43412,expr__43413))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__43412,expr__43413){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43415){if((e43415 instanceof Error)){
var e = e43415;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43415;

}
}})());
});
;})(path_parts,sep,root,pred__43412,expr__43413))
} else {
if(cljs.core.truth_(pred__43412.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43413))){
return ((function (pred__43412,expr__43413){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__43412,expr__43413){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43412,expr__43413))
);

return deferred.addErrback(((function (deferred,pred__43412,expr__43413){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43412,expr__43413))
);
});
;})(pred__43412,expr__43413))
} else {
return ((function (pred__43412,expr__43413){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43412,expr__43413))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43416,callback){
var map__43419 = p__43416;
var map__43419__$1 = ((((!((map__43419 == null)))?((((map__43419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43419):map__43419);
var file_msg = map__43419__$1;
var request_url = cljs.core.get.call(null,map__43419__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43419,map__43419__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43419,map__43419__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__){
return (function (state_43443){
var state_val_43444 = (state_43443[(1)]);
if((state_val_43444 === (7))){
var inst_43439 = (state_43443[(2)]);
var state_43443__$1 = state_43443;
var statearr_43445_43465 = state_43443__$1;
(statearr_43445_43465[(2)] = inst_43439);

(statearr_43445_43465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (1))){
var state_43443__$1 = state_43443;
var statearr_43446_43466 = state_43443__$1;
(statearr_43446_43466[(2)] = null);

(statearr_43446_43466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (4))){
var inst_43423 = (state_43443[(7)]);
var inst_43423__$1 = (state_43443[(2)]);
var state_43443__$1 = (function (){var statearr_43447 = state_43443;
(statearr_43447[(7)] = inst_43423__$1);

return statearr_43447;
})();
if(cljs.core.truth_(inst_43423__$1)){
var statearr_43448_43467 = state_43443__$1;
(statearr_43448_43467[(1)] = (5));

} else {
var statearr_43449_43468 = state_43443__$1;
(statearr_43449_43468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (6))){
var state_43443__$1 = state_43443;
var statearr_43450_43469 = state_43443__$1;
(statearr_43450_43469[(2)] = null);

(statearr_43450_43469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (3))){
var inst_43441 = (state_43443[(2)]);
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43443__$1,inst_43441);
} else {
if((state_val_43444 === (2))){
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43443__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43444 === (11))){
var inst_43435 = (state_43443[(2)]);
var state_43443__$1 = (function (){var statearr_43451 = state_43443;
(statearr_43451[(8)] = inst_43435);

return statearr_43451;
})();
var statearr_43452_43470 = state_43443__$1;
(statearr_43452_43470[(2)] = null);

(statearr_43452_43470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (9))){
var inst_43427 = (state_43443[(9)]);
var inst_43429 = (state_43443[(10)]);
var inst_43431 = inst_43429.call(null,inst_43427);
var state_43443__$1 = state_43443;
var statearr_43453_43471 = state_43443__$1;
(statearr_43453_43471[(2)] = inst_43431);

(statearr_43453_43471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (5))){
var inst_43423 = (state_43443[(7)]);
var inst_43425 = figwheel.client.file_reloading.blocking_load.call(null,inst_43423);
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43443__$1,(8),inst_43425);
} else {
if((state_val_43444 === (10))){
var inst_43427 = (state_43443[(9)]);
var inst_43433 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43427);
var state_43443__$1 = state_43443;
var statearr_43454_43472 = state_43443__$1;
(statearr_43454_43472[(2)] = inst_43433);

(statearr_43454_43472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (8))){
var inst_43423 = (state_43443[(7)]);
var inst_43429 = (state_43443[(10)]);
var inst_43427 = (state_43443[(2)]);
var inst_43428 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43429__$1 = cljs.core.get.call(null,inst_43428,inst_43423);
var state_43443__$1 = (function (){var statearr_43455 = state_43443;
(statearr_43455[(9)] = inst_43427);

(statearr_43455[(10)] = inst_43429__$1);

return statearr_43455;
})();
if(cljs.core.truth_(inst_43429__$1)){
var statearr_43456_43473 = state_43443__$1;
(statearr_43456_43473[(1)] = (9));

} else {
var statearr_43457_43474 = state_43443__$1;
(statearr_43457_43474[(1)] = (10));

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
});})(c__31183__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31119__auto__ = null;
var figwheel$client$file_reloading$state_machine__31119__auto____0 = (function (){
var statearr_43461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43461[(0)] = figwheel$client$file_reloading$state_machine__31119__auto__);

(statearr_43461[(1)] = (1));

return statearr_43461;
});
var figwheel$client$file_reloading$state_machine__31119__auto____1 = (function (state_43443){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_43443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e43462){if((e43462 instanceof Object)){
var ex__31122__auto__ = e43462;
var statearr_43463_43475 = state_43443;
(statearr_43463_43475[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43476 = state_43443;
state_43443 = G__43476;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31119__auto__ = function(state_43443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31119__auto____1.call(this,state_43443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31119__auto____0;
figwheel$client$file_reloading$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31119__auto____1;
return figwheel$client$file_reloading$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__))
})();
var state__31185__auto__ = (function (){var statearr_43464 = f__31184__auto__.call(null);
(statearr_43464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_43464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__))
);

return c__31183__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43477,callback){
var map__43480 = p__43477;
var map__43480__$1 = ((((!((map__43480 == null)))?((((map__43480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43480):map__43480);
var file_msg = map__43480__$1;
var namespace = cljs.core.get.call(null,map__43480__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43480,map__43480__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43480,map__43480__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43482){
var map__43485 = p__43482;
var map__43485__$1 = ((((!((map__43485 == null)))?((((map__43485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43485):map__43485);
var file_msg = map__43485__$1;
var namespace = cljs.core.get.call(null,map__43485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43487,callback){
var map__43490 = p__43487;
var map__43490__$1 = ((((!((map__43490 == null)))?((((map__43490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43490):map__43490);
var file_msg = map__43490__$1;
var request_url = cljs.core.get.call(null,map__43490__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31183__auto___43594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___43594,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___43594,out){
return (function (state_43576){
var state_val_43577 = (state_43576[(1)]);
if((state_val_43577 === (1))){
var inst_43550 = cljs.core.seq.call(null,files);
var inst_43551 = cljs.core.first.call(null,inst_43550);
var inst_43552 = cljs.core.next.call(null,inst_43550);
var inst_43553 = files;
var state_43576__$1 = (function (){var statearr_43578 = state_43576;
(statearr_43578[(7)] = inst_43551);

(statearr_43578[(8)] = inst_43552);

(statearr_43578[(9)] = inst_43553);

return statearr_43578;
})();
var statearr_43579_43595 = state_43576__$1;
(statearr_43579_43595[(2)] = null);

(statearr_43579_43595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (2))){
var inst_43553 = (state_43576[(9)]);
var inst_43559 = (state_43576[(10)]);
var inst_43558 = cljs.core.seq.call(null,inst_43553);
var inst_43559__$1 = cljs.core.first.call(null,inst_43558);
var inst_43560 = cljs.core.next.call(null,inst_43558);
var inst_43561 = (inst_43559__$1 == null);
var inst_43562 = cljs.core.not.call(null,inst_43561);
var state_43576__$1 = (function (){var statearr_43580 = state_43576;
(statearr_43580[(10)] = inst_43559__$1);

(statearr_43580[(11)] = inst_43560);

return statearr_43580;
})();
if(inst_43562){
var statearr_43581_43596 = state_43576__$1;
(statearr_43581_43596[(1)] = (4));

} else {
var statearr_43582_43597 = state_43576__$1;
(statearr_43582_43597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (3))){
var inst_43574 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43576__$1,inst_43574);
} else {
if((state_val_43577 === (4))){
var inst_43559 = (state_43576[(10)]);
var inst_43564 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43559);
var state_43576__$1 = state_43576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43576__$1,(7),inst_43564);
} else {
if((state_val_43577 === (5))){
var inst_43570 = cljs.core.async.close_BANG_.call(null,out);
var state_43576__$1 = state_43576;
var statearr_43583_43598 = state_43576__$1;
(statearr_43583_43598[(2)] = inst_43570);

(statearr_43583_43598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (6))){
var inst_43572 = (state_43576[(2)]);
var state_43576__$1 = state_43576;
var statearr_43584_43599 = state_43576__$1;
(statearr_43584_43599[(2)] = inst_43572);

(statearr_43584_43599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43577 === (7))){
var inst_43560 = (state_43576[(11)]);
var inst_43566 = (state_43576[(2)]);
var inst_43567 = cljs.core.async.put_BANG_.call(null,out,inst_43566);
var inst_43553 = inst_43560;
var state_43576__$1 = (function (){var statearr_43585 = state_43576;
(statearr_43585[(12)] = inst_43567);

(statearr_43585[(9)] = inst_43553);

return statearr_43585;
})();
var statearr_43586_43600 = state_43576__$1;
(statearr_43586_43600[(2)] = null);

(statearr_43586_43600[(1)] = (2));


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
});})(c__31183__auto___43594,out))
;
return ((function (switch__31118__auto__,c__31183__auto___43594,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____0 = (function (){
var statearr_43590 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43590[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__);

(statearr_43590[(1)] = (1));

return statearr_43590;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____1 = (function (state_43576){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_43576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e43591){if((e43591 instanceof Object)){
var ex__31122__auto__ = e43591;
var statearr_43592_43601 = state_43576;
(statearr_43592_43601[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43602 = state_43576;
state_43576 = G__43602;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__ = function(state_43576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____1.call(this,state_43576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___43594,out))
})();
var state__31185__auto__ = (function (){var statearr_43593 = f__31184__auto__.call(null);
(statearr_43593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___43594);

return statearr_43593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___43594,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43603,opts){
var map__43607 = p__43603;
var map__43607__$1 = ((((!((map__43607 == null)))?((((map__43607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43607):map__43607);
var eval_body__$1 = cljs.core.get.call(null,map__43607__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43607__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e43609){var e = e43609;
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
return (function (p1__43610_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43610_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__43619){
var vec__43620 = p__43619;
var k = cljs.core.nth.call(null,vec__43620,(0),null);
var v = cljs.core.nth.call(null,vec__43620,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43623){
var vec__43624 = p__43623;
var k = cljs.core.nth.call(null,vec__43624,(0),null);
var v = cljs.core.nth.call(null,vec__43624,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43630,p__43631){
var map__43878 = p__43630;
var map__43878__$1 = ((((!((map__43878 == null)))?((((map__43878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43878):map__43878);
var opts = map__43878__$1;
var before_jsload = cljs.core.get.call(null,map__43878__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43878__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43878__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43879 = p__43631;
var map__43879__$1 = ((((!((map__43879 == null)))?((((map__43879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43879):map__43879);
var msg = map__43879__$1;
var files = cljs.core.get.call(null,map__43879__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43879__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43879__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44032){
var state_val_44033 = (state_44032[(1)]);
if((state_val_44033 === (7))){
var inst_43895 = (state_44032[(7)]);
var inst_43896 = (state_44032[(8)]);
var inst_43893 = (state_44032[(9)]);
var inst_43894 = (state_44032[(10)]);
var inst_43901 = cljs.core._nth.call(null,inst_43894,inst_43896);
var inst_43902 = figwheel.client.file_reloading.eval_body.call(null,inst_43901,opts);
var inst_43903 = (inst_43896 + (1));
var tmp44034 = inst_43895;
var tmp44035 = inst_43893;
var tmp44036 = inst_43894;
var inst_43893__$1 = tmp44035;
var inst_43894__$1 = tmp44036;
var inst_43895__$1 = tmp44034;
var inst_43896__$1 = inst_43903;
var state_44032__$1 = (function (){var statearr_44037 = state_44032;
(statearr_44037[(7)] = inst_43895__$1);

(statearr_44037[(8)] = inst_43896__$1);

(statearr_44037[(9)] = inst_43893__$1);

(statearr_44037[(10)] = inst_43894__$1);

(statearr_44037[(11)] = inst_43902);

return statearr_44037;
})();
var statearr_44038_44124 = state_44032__$1;
(statearr_44038_44124[(2)] = null);

(statearr_44038_44124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (20))){
var inst_43936 = (state_44032[(12)]);
var inst_43944 = figwheel.client.file_reloading.sort_files.call(null,inst_43936);
var state_44032__$1 = state_44032;
var statearr_44039_44125 = state_44032__$1;
(statearr_44039_44125[(2)] = inst_43944);

(statearr_44039_44125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (27))){
var state_44032__$1 = state_44032;
var statearr_44040_44126 = state_44032__$1;
(statearr_44040_44126[(2)] = null);

(statearr_44040_44126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (1))){
var inst_43885 = (state_44032[(13)]);
var inst_43882 = before_jsload.call(null,files);
var inst_43883 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43884 = (function (){return ((function (inst_43885,inst_43882,inst_43883,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43627_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43627_SHARP_);
});
;})(inst_43885,inst_43882,inst_43883,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43885__$1 = cljs.core.filter.call(null,inst_43884,files);
var inst_43886 = cljs.core.not_empty.call(null,inst_43885__$1);
var state_44032__$1 = (function (){var statearr_44041 = state_44032;
(statearr_44041[(14)] = inst_43883);

(statearr_44041[(15)] = inst_43882);

(statearr_44041[(13)] = inst_43885__$1);

return statearr_44041;
})();
if(cljs.core.truth_(inst_43886)){
var statearr_44042_44127 = state_44032__$1;
(statearr_44042_44127[(1)] = (2));

} else {
var statearr_44043_44128 = state_44032__$1;
(statearr_44043_44128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (24))){
var state_44032__$1 = state_44032;
var statearr_44044_44129 = state_44032__$1;
(statearr_44044_44129[(2)] = null);

(statearr_44044_44129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (39))){
var inst_43986 = (state_44032[(16)]);
var state_44032__$1 = state_44032;
var statearr_44045_44130 = state_44032__$1;
(statearr_44045_44130[(2)] = inst_43986);

(statearr_44045_44130[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (46))){
var inst_44027 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44046_44131 = state_44032__$1;
(statearr_44046_44131[(2)] = inst_44027);

(statearr_44046_44131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (4))){
var inst_43930 = (state_44032[(2)]);
var inst_43931 = cljs.core.List.EMPTY;
var inst_43932 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43931);
var inst_43933 = (function (){return ((function (inst_43930,inst_43931,inst_43932,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43628_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43628_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43628_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_43930,inst_43931,inst_43932,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43934 = cljs.core.filter.call(null,inst_43933,files);
var inst_43935 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43936 = cljs.core.concat.call(null,inst_43934,inst_43935);
var state_44032__$1 = (function (){var statearr_44047 = state_44032;
(statearr_44047[(17)] = inst_43930);

(statearr_44047[(18)] = inst_43932);

(statearr_44047[(12)] = inst_43936);

return statearr_44047;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44048_44132 = state_44032__$1;
(statearr_44048_44132[(1)] = (16));

} else {
var statearr_44049_44133 = state_44032__$1;
(statearr_44049_44133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (15))){
var inst_43920 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44050_44134 = state_44032__$1;
(statearr_44050_44134[(2)] = inst_43920);

(statearr_44050_44134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (21))){
var inst_43946 = (state_44032[(19)]);
var inst_43946__$1 = (state_44032[(2)]);
var inst_43947 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43946__$1);
var state_44032__$1 = (function (){var statearr_44051 = state_44032;
(statearr_44051[(19)] = inst_43946__$1);

return statearr_44051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44032__$1,(22),inst_43947);
} else {
if((state_val_44033 === (31))){
var inst_44030 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44032__$1,inst_44030);
} else {
if((state_val_44033 === (32))){
var inst_43986 = (state_44032[(16)]);
var inst_43991 = inst_43986.cljs$lang$protocol_mask$partition0$;
var inst_43992 = (inst_43991 & (64));
var inst_43993 = inst_43986.cljs$core$ISeq$;
var inst_43994 = (inst_43992) || (inst_43993);
var state_44032__$1 = state_44032;
if(cljs.core.truth_(inst_43994)){
var statearr_44052_44135 = state_44032__$1;
(statearr_44052_44135[(1)] = (35));

} else {
var statearr_44053_44136 = state_44032__$1;
(statearr_44053_44136[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (40))){
var inst_44007 = (state_44032[(20)]);
var inst_44006 = (state_44032[(2)]);
var inst_44007__$1 = cljs.core.get.call(null,inst_44006,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44008 = cljs.core.get.call(null,inst_44006,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44009 = cljs.core.not_empty.call(null,inst_44007__$1);
var state_44032__$1 = (function (){var statearr_44054 = state_44032;
(statearr_44054[(21)] = inst_44008);

(statearr_44054[(20)] = inst_44007__$1);

return statearr_44054;
})();
if(cljs.core.truth_(inst_44009)){
var statearr_44055_44137 = state_44032__$1;
(statearr_44055_44137[(1)] = (41));

} else {
var statearr_44056_44138 = state_44032__$1;
(statearr_44056_44138[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (33))){
var state_44032__$1 = state_44032;
var statearr_44057_44139 = state_44032__$1;
(statearr_44057_44139[(2)] = false);

(statearr_44057_44139[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (13))){
var inst_43906 = (state_44032[(22)]);
var inst_43910 = cljs.core.chunk_first.call(null,inst_43906);
var inst_43911 = cljs.core.chunk_rest.call(null,inst_43906);
var inst_43912 = cljs.core.count.call(null,inst_43910);
var inst_43893 = inst_43911;
var inst_43894 = inst_43910;
var inst_43895 = inst_43912;
var inst_43896 = (0);
var state_44032__$1 = (function (){var statearr_44058 = state_44032;
(statearr_44058[(7)] = inst_43895);

(statearr_44058[(8)] = inst_43896);

(statearr_44058[(9)] = inst_43893);

(statearr_44058[(10)] = inst_43894);

return statearr_44058;
})();
var statearr_44059_44140 = state_44032__$1;
(statearr_44059_44140[(2)] = null);

(statearr_44059_44140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (22))){
var inst_43954 = (state_44032[(23)]);
var inst_43949 = (state_44032[(24)]);
var inst_43946 = (state_44032[(19)]);
var inst_43950 = (state_44032[(25)]);
var inst_43949__$1 = (state_44032[(2)]);
var inst_43950__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43949__$1);
var inst_43951 = (function (){var all_files = inst_43946;
var res_SINGLEQUOTE_ = inst_43949__$1;
var res = inst_43950__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43954,inst_43949,inst_43946,inst_43950,inst_43949__$1,inst_43950__$1,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43629_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43629_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43954,inst_43949,inst_43946,inst_43950,inst_43949__$1,inst_43950__$1,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43952 = cljs.core.filter.call(null,inst_43951,inst_43949__$1);
var inst_43953 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43954__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43953);
var inst_43955 = cljs.core.not_empty.call(null,inst_43954__$1);
var state_44032__$1 = (function (){var statearr_44060 = state_44032;
(statearr_44060[(23)] = inst_43954__$1);

(statearr_44060[(24)] = inst_43949__$1);

(statearr_44060[(26)] = inst_43952);

(statearr_44060[(25)] = inst_43950__$1);

return statearr_44060;
})();
if(cljs.core.truth_(inst_43955)){
var statearr_44061_44141 = state_44032__$1;
(statearr_44061_44141[(1)] = (23));

} else {
var statearr_44062_44142 = state_44032__$1;
(statearr_44062_44142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (36))){
var state_44032__$1 = state_44032;
var statearr_44063_44143 = state_44032__$1;
(statearr_44063_44143[(2)] = false);

(statearr_44063_44143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (41))){
var inst_44007 = (state_44032[(20)]);
var inst_44011 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44012 = cljs.core.map.call(null,inst_44011,inst_44007);
var inst_44013 = cljs.core.pr_str.call(null,inst_44012);
var inst_44014 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44013)].join('');
var inst_44015 = figwheel.client.utils.log.call(null,inst_44014);
var state_44032__$1 = state_44032;
var statearr_44064_44144 = state_44032__$1;
(statearr_44064_44144[(2)] = inst_44015);

(statearr_44064_44144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (43))){
var inst_44008 = (state_44032[(21)]);
var inst_44018 = (state_44032[(2)]);
var inst_44019 = cljs.core.not_empty.call(null,inst_44008);
var state_44032__$1 = (function (){var statearr_44065 = state_44032;
(statearr_44065[(27)] = inst_44018);

return statearr_44065;
})();
if(cljs.core.truth_(inst_44019)){
var statearr_44066_44145 = state_44032__$1;
(statearr_44066_44145[(1)] = (44));

} else {
var statearr_44067_44146 = state_44032__$1;
(statearr_44067_44146[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (29))){
var inst_43954 = (state_44032[(23)]);
var inst_43949 = (state_44032[(24)]);
var inst_43946 = (state_44032[(19)]);
var inst_43952 = (state_44032[(26)]);
var inst_43950 = (state_44032[(25)]);
var inst_43986 = (state_44032[(16)]);
var inst_43982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43985 = (function (){var all_files = inst_43946;
var res_SINGLEQUOTE_ = inst_43949;
var res = inst_43950;
var files_not_loaded = inst_43952;
var dependencies_that_loaded = inst_43954;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43986,inst_43982,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43984){
var map__44068 = p__43984;
var map__44068__$1 = ((((!((map__44068 == null)))?((((map__44068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44068):map__44068);
var namespace = cljs.core.get.call(null,map__44068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43986,inst_43982,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43986__$1 = cljs.core.group_by.call(null,inst_43985,inst_43952);
var inst_43988 = (inst_43986__$1 == null);
var inst_43989 = cljs.core.not.call(null,inst_43988);
var state_44032__$1 = (function (){var statearr_44070 = state_44032;
(statearr_44070[(28)] = inst_43982);

(statearr_44070[(16)] = inst_43986__$1);

return statearr_44070;
})();
if(inst_43989){
var statearr_44071_44147 = state_44032__$1;
(statearr_44071_44147[(1)] = (32));

} else {
var statearr_44072_44148 = state_44032__$1;
(statearr_44072_44148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (44))){
var inst_44008 = (state_44032[(21)]);
var inst_44021 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44008);
var inst_44022 = cljs.core.pr_str.call(null,inst_44021);
var inst_44023 = [cljs.core.str("not required: "),cljs.core.str(inst_44022)].join('');
var inst_44024 = figwheel.client.utils.log.call(null,inst_44023);
var state_44032__$1 = state_44032;
var statearr_44073_44149 = state_44032__$1;
(statearr_44073_44149[(2)] = inst_44024);

(statearr_44073_44149[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (6))){
var inst_43927 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44074_44150 = state_44032__$1;
(statearr_44074_44150[(2)] = inst_43927);

(statearr_44074_44150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (28))){
var inst_43952 = (state_44032[(26)]);
var inst_43979 = (state_44032[(2)]);
var inst_43980 = cljs.core.not_empty.call(null,inst_43952);
var state_44032__$1 = (function (){var statearr_44075 = state_44032;
(statearr_44075[(29)] = inst_43979);

return statearr_44075;
})();
if(cljs.core.truth_(inst_43980)){
var statearr_44076_44151 = state_44032__$1;
(statearr_44076_44151[(1)] = (29));

} else {
var statearr_44077_44152 = state_44032__$1;
(statearr_44077_44152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (25))){
var inst_43950 = (state_44032[(25)]);
var inst_43966 = (state_44032[(2)]);
var inst_43967 = cljs.core.not_empty.call(null,inst_43950);
var state_44032__$1 = (function (){var statearr_44078 = state_44032;
(statearr_44078[(30)] = inst_43966);

return statearr_44078;
})();
if(cljs.core.truth_(inst_43967)){
var statearr_44079_44153 = state_44032__$1;
(statearr_44079_44153[(1)] = (26));

} else {
var statearr_44080_44154 = state_44032__$1;
(statearr_44080_44154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (34))){
var inst_44001 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
if(cljs.core.truth_(inst_44001)){
var statearr_44081_44155 = state_44032__$1;
(statearr_44081_44155[(1)] = (38));

} else {
var statearr_44082_44156 = state_44032__$1;
(statearr_44082_44156[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (17))){
var state_44032__$1 = state_44032;
var statearr_44083_44157 = state_44032__$1;
(statearr_44083_44157[(2)] = recompile_dependents);

(statearr_44083_44157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (3))){
var state_44032__$1 = state_44032;
var statearr_44084_44158 = state_44032__$1;
(statearr_44084_44158[(2)] = null);

(statearr_44084_44158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (12))){
var inst_43923 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44085_44159 = state_44032__$1;
(statearr_44085_44159[(2)] = inst_43923);

(statearr_44085_44159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (2))){
var inst_43885 = (state_44032[(13)]);
var inst_43892 = cljs.core.seq.call(null,inst_43885);
var inst_43893 = inst_43892;
var inst_43894 = null;
var inst_43895 = (0);
var inst_43896 = (0);
var state_44032__$1 = (function (){var statearr_44086 = state_44032;
(statearr_44086[(7)] = inst_43895);

(statearr_44086[(8)] = inst_43896);

(statearr_44086[(9)] = inst_43893);

(statearr_44086[(10)] = inst_43894);

return statearr_44086;
})();
var statearr_44087_44160 = state_44032__$1;
(statearr_44087_44160[(2)] = null);

(statearr_44087_44160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (23))){
var inst_43954 = (state_44032[(23)]);
var inst_43949 = (state_44032[(24)]);
var inst_43946 = (state_44032[(19)]);
var inst_43952 = (state_44032[(26)]);
var inst_43950 = (state_44032[(25)]);
var inst_43957 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43959 = (function (){var all_files = inst_43946;
var res_SINGLEQUOTE_ = inst_43949;
var res = inst_43950;
var files_not_loaded = inst_43952;
var dependencies_that_loaded = inst_43954;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43957,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43958){
var map__44088 = p__43958;
var map__44088__$1 = ((((!((map__44088 == null)))?((((map__44088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44088):map__44088);
var request_url = cljs.core.get.call(null,map__44088__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43957,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43960 = cljs.core.reverse.call(null,inst_43954);
var inst_43961 = cljs.core.map.call(null,inst_43959,inst_43960);
var inst_43962 = cljs.core.pr_str.call(null,inst_43961);
var inst_43963 = figwheel.client.utils.log.call(null,inst_43962);
var state_44032__$1 = (function (){var statearr_44090 = state_44032;
(statearr_44090[(31)] = inst_43957);

return statearr_44090;
})();
var statearr_44091_44161 = state_44032__$1;
(statearr_44091_44161[(2)] = inst_43963);

(statearr_44091_44161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (35))){
var state_44032__$1 = state_44032;
var statearr_44092_44162 = state_44032__$1;
(statearr_44092_44162[(2)] = true);

(statearr_44092_44162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (19))){
var inst_43936 = (state_44032[(12)]);
var inst_43942 = figwheel.client.file_reloading.expand_files.call(null,inst_43936);
var state_44032__$1 = state_44032;
var statearr_44093_44163 = state_44032__$1;
(statearr_44093_44163[(2)] = inst_43942);

(statearr_44093_44163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (11))){
var state_44032__$1 = state_44032;
var statearr_44094_44164 = state_44032__$1;
(statearr_44094_44164[(2)] = null);

(statearr_44094_44164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (9))){
var inst_43925 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44095_44165 = state_44032__$1;
(statearr_44095_44165[(2)] = inst_43925);

(statearr_44095_44165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (5))){
var inst_43895 = (state_44032[(7)]);
var inst_43896 = (state_44032[(8)]);
var inst_43898 = (inst_43896 < inst_43895);
var inst_43899 = inst_43898;
var state_44032__$1 = state_44032;
if(cljs.core.truth_(inst_43899)){
var statearr_44096_44166 = state_44032__$1;
(statearr_44096_44166[(1)] = (7));

} else {
var statearr_44097_44167 = state_44032__$1;
(statearr_44097_44167[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (14))){
var inst_43906 = (state_44032[(22)]);
var inst_43915 = cljs.core.first.call(null,inst_43906);
var inst_43916 = figwheel.client.file_reloading.eval_body.call(null,inst_43915,opts);
var inst_43917 = cljs.core.next.call(null,inst_43906);
var inst_43893 = inst_43917;
var inst_43894 = null;
var inst_43895 = (0);
var inst_43896 = (0);
var state_44032__$1 = (function (){var statearr_44098 = state_44032;
(statearr_44098[(7)] = inst_43895);

(statearr_44098[(8)] = inst_43896);

(statearr_44098[(9)] = inst_43893);

(statearr_44098[(32)] = inst_43916);

(statearr_44098[(10)] = inst_43894);

return statearr_44098;
})();
var statearr_44099_44168 = state_44032__$1;
(statearr_44099_44168[(2)] = null);

(statearr_44099_44168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (45))){
var state_44032__$1 = state_44032;
var statearr_44100_44169 = state_44032__$1;
(statearr_44100_44169[(2)] = null);

(statearr_44100_44169[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (26))){
var inst_43954 = (state_44032[(23)]);
var inst_43949 = (state_44032[(24)]);
var inst_43946 = (state_44032[(19)]);
var inst_43952 = (state_44032[(26)]);
var inst_43950 = (state_44032[(25)]);
var inst_43969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43971 = (function (){var all_files = inst_43946;
var res_SINGLEQUOTE_ = inst_43949;
var res = inst_43950;
var files_not_loaded = inst_43952;
var dependencies_that_loaded = inst_43954;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43969,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43970){
var map__44101 = p__43970;
var map__44101__$1 = ((((!((map__44101 == null)))?((((map__44101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44101):map__44101);
var namespace = cljs.core.get.call(null,map__44101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43969,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43972 = cljs.core.map.call(null,inst_43971,inst_43950);
var inst_43973 = cljs.core.pr_str.call(null,inst_43972);
var inst_43974 = figwheel.client.utils.log.call(null,inst_43973);
var inst_43975 = (function (){var all_files = inst_43946;
var res_SINGLEQUOTE_ = inst_43949;
var res = inst_43950;
var files_not_loaded = inst_43952;
var dependencies_that_loaded = inst_43954;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43969,inst_43971,inst_43972,inst_43973,inst_43974,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43954,inst_43949,inst_43946,inst_43952,inst_43950,inst_43969,inst_43971,inst_43972,inst_43973,inst_43974,state_val_44033,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43976 = setTimeout(inst_43975,(10));
var state_44032__$1 = (function (){var statearr_44103 = state_44032;
(statearr_44103[(33)] = inst_43969);

(statearr_44103[(34)] = inst_43974);

return statearr_44103;
})();
var statearr_44104_44170 = state_44032__$1;
(statearr_44104_44170[(2)] = inst_43976);

(statearr_44104_44170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (16))){
var state_44032__$1 = state_44032;
var statearr_44105_44171 = state_44032__$1;
(statearr_44105_44171[(2)] = reload_dependents);

(statearr_44105_44171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (38))){
var inst_43986 = (state_44032[(16)]);
var inst_44003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43986);
var state_44032__$1 = state_44032;
var statearr_44106_44172 = state_44032__$1;
(statearr_44106_44172[(2)] = inst_44003);

(statearr_44106_44172[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (30))){
var state_44032__$1 = state_44032;
var statearr_44107_44173 = state_44032__$1;
(statearr_44107_44173[(2)] = null);

(statearr_44107_44173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (10))){
var inst_43906 = (state_44032[(22)]);
var inst_43908 = cljs.core.chunked_seq_QMARK_.call(null,inst_43906);
var state_44032__$1 = state_44032;
if(inst_43908){
var statearr_44108_44174 = state_44032__$1;
(statearr_44108_44174[(1)] = (13));

} else {
var statearr_44109_44175 = state_44032__$1;
(statearr_44109_44175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (18))){
var inst_43940 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
if(cljs.core.truth_(inst_43940)){
var statearr_44110_44176 = state_44032__$1;
(statearr_44110_44176[(1)] = (19));

} else {
var statearr_44111_44177 = state_44032__$1;
(statearr_44111_44177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (42))){
var state_44032__$1 = state_44032;
var statearr_44112_44178 = state_44032__$1;
(statearr_44112_44178[(2)] = null);

(statearr_44112_44178[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (37))){
var inst_43998 = (state_44032[(2)]);
var state_44032__$1 = state_44032;
var statearr_44113_44179 = state_44032__$1;
(statearr_44113_44179[(2)] = inst_43998);

(statearr_44113_44179[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44033 === (8))){
var inst_43893 = (state_44032[(9)]);
var inst_43906 = (state_44032[(22)]);
var inst_43906__$1 = cljs.core.seq.call(null,inst_43893);
var state_44032__$1 = (function (){var statearr_44114 = state_44032;
(statearr_44114[(22)] = inst_43906__$1);

return statearr_44114;
})();
if(inst_43906__$1){
var statearr_44115_44180 = state_44032__$1;
(statearr_44115_44180[(1)] = (10));

} else {
var statearr_44116_44181 = state_44032__$1;
(statearr_44116_44181[(1)] = (11));

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
});})(c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31118__auto__,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____0 = (function (){
var statearr_44120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44120[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__);

(statearr_44120[(1)] = (1));

return statearr_44120;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____1 = (function (state_44032){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_44032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e44121){if((e44121 instanceof Object)){
var ex__31122__auto__ = e44121;
var statearr_44122_44182 = state_44032;
(statearr_44122_44182[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44183 = state_44032;
state_44032 = G__44183;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__ = function(state_44032){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____1.call(this,state_44032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31185__auto__ = (function (){var statearr_44123 = f__31184__auto__.call(null);
(statearr_44123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_44123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__,map__43878,map__43878__$1,opts,before_jsload,on_jsload,reload_dependents,map__43879,map__43879__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31183__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44186,link){
var map__44189 = p__44186;
var map__44189__$1 = ((((!((map__44189 == null)))?((((map__44189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44189):map__44189);
var file = cljs.core.get.call(null,map__44189__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44189,map__44189__$1,file){
return (function (p1__44184_SHARP_,p2__44185_SHARP_){
if(cljs.core._EQ_.call(null,p1__44184_SHARP_,p2__44185_SHARP_)){
return p1__44184_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44189,map__44189__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44195){
var map__44196 = p__44195;
var map__44196__$1 = ((((!((map__44196 == null)))?((((map__44196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44196):map__44196);
var match_length = cljs.core.get.call(null,map__44196__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44196__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44191_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44191_SHARP_);
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
var args44198 = [];
var len__26121__auto___44201 = arguments.length;
var i__26122__auto___44202 = (0);
while(true){
if((i__26122__auto___44202 < len__26121__auto___44201)){
args44198.push((arguments[i__26122__auto___44202]));

var G__44203 = (i__26122__auto___44202 + (1));
i__26122__auto___44202 = G__44203;
continue;
} else {
}
break;
}

var G__44200 = args44198.length;
switch (G__44200) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44198.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44205_SHARP_,p2__44206_SHARP_){
return cljs.core.assoc.call(null,p1__44205_SHARP_,cljs.core.get.call(null,p2__44206_SHARP_,key),p2__44206_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__44207){
var map__44210 = p__44207;
var map__44210__$1 = ((((!((map__44210 == null)))?((((map__44210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44210):map__44210);
var f_data = map__44210__$1;
var file = cljs.core.get.call(null,map__44210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44212,p__44213){
var map__44222 = p__44212;
var map__44222__$1 = ((((!((map__44222 == null)))?((((map__44222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44222):map__44222);
var opts = map__44222__$1;
var on_cssload = cljs.core.get.call(null,map__44222__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44223 = p__44213;
var map__44223__$1 = ((((!((map__44223 == null)))?((((map__44223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44223):map__44223);
var files_msg = map__44223__$1;
var files = cljs.core.get.call(null,map__44223__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__44226_44230 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__44227_44231 = null;
var count__44228_44232 = (0);
var i__44229_44233 = (0);
while(true){
if((i__44229_44233 < count__44228_44232)){
var f_44234 = cljs.core._nth.call(null,chunk__44227_44231,i__44229_44233);
figwheel.client.file_reloading.reload_css_file.call(null,f_44234);

var G__44235 = seq__44226_44230;
var G__44236 = chunk__44227_44231;
var G__44237 = count__44228_44232;
var G__44238 = (i__44229_44233 + (1));
seq__44226_44230 = G__44235;
chunk__44227_44231 = G__44236;
count__44228_44232 = G__44237;
i__44229_44233 = G__44238;
continue;
} else {
var temp__4657__auto___44239 = cljs.core.seq.call(null,seq__44226_44230);
if(temp__4657__auto___44239){
var seq__44226_44240__$1 = temp__4657__auto___44239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44226_44240__$1)){
var c__25857__auto___44241 = cljs.core.chunk_first.call(null,seq__44226_44240__$1);
var G__44242 = cljs.core.chunk_rest.call(null,seq__44226_44240__$1);
var G__44243 = c__25857__auto___44241;
var G__44244 = cljs.core.count.call(null,c__25857__auto___44241);
var G__44245 = (0);
seq__44226_44230 = G__44242;
chunk__44227_44231 = G__44243;
count__44228_44232 = G__44244;
i__44229_44233 = G__44245;
continue;
} else {
var f_44246 = cljs.core.first.call(null,seq__44226_44240__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_44246);

var G__44247 = cljs.core.next.call(null,seq__44226_44240__$1);
var G__44248 = null;
var G__44249 = (0);
var G__44250 = (0);
seq__44226_44230 = G__44247;
chunk__44227_44231 = G__44248;
count__44228_44232 = G__44249;
i__44229_44233 = G__44250;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__44222,map__44222__$1,opts,on_cssload,map__44223,map__44223__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__44222,map__44222__$1,opts,on_cssload,map__44223,map__44223__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484366732620
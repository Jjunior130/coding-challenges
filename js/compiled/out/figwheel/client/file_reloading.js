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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33890_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33890_SHARP_));
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
var seq__33895 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33896 = null;
var count__33897 = (0);
var i__33898 = (0);
while(true){
if((i__33898 < count__33897)){
var n = cljs.core._nth.call(null,chunk__33896,i__33898);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33899 = seq__33895;
var G__33900 = chunk__33896;
var G__33901 = count__33897;
var G__33902 = (i__33898 + (1));
seq__33895 = G__33899;
chunk__33896 = G__33900;
count__33897 = G__33901;
i__33898 = G__33902;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33895);
if(temp__4657__auto__){
var seq__33895__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33895__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__33895__$1);
var G__33903 = cljs.core.chunk_rest.call(null,seq__33895__$1);
var G__33904 = c__25857__auto__;
var G__33905 = cljs.core.count.call(null,c__25857__auto__);
var G__33906 = (0);
seq__33895 = G__33903;
chunk__33896 = G__33904;
count__33897 = G__33905;
i__33898 = G__33906;
continue;
} else {
var n = cljs.core.first.call(null,seq__33895__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33907 = cljs.core.next.call(null,seq__33895__$1);
var G__33908 = null;
var G__33909 = (0);
var G__33910 = (0);
seq__33895 = G__33907;
chunk__33896 = G__33908;
count__33897 = G__33909;
i__33898 = G__33910;
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

var seq__33961_33972 = cljs.core.seq.call(null,deps);
var chunk__33962_33973 = null;
var count__33963_33974 = (0);
var i__33964_33975 = (0);
while(true){
if((i__33964_33975 < count__33963_33974)){
var dep_33976 = cljs.core._nth.call(null,chunk__33962_33973,i__33964_33975);
topo_sort_helper_STAR_.call(null,dep_33976,(depth + (1)),state);

var G__33977 = seq__33961_33972;
var G__33978 = chunk__33962_33973;
var G__33979 = count__33963_33974;
var G__33980 = (i__33964_33975 + (1));
seq__33961_33972 = G__33977;
chunk__33962_33973 = G__33978;
count__33963_33974 = G__33979;
i__33964_33975 = G__33980;
continue;
} else {
var temp__4657__auto___33981 = cljs.core.seq.call(null,seq__33961_33972);
if(temp__4657__auto___33981){
var seq__33961_33982__$1 = temp__4657__auto___33981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33961_33982__$1)){
var c__25857__auto___33983 = cljs.core.chunk_first.call(null,seq__33961_33982__$1);
var G__33984 = cljs.core.chunk_rest.call(null,seq__33961_33982__$1);
var G__33985 = c__25857__auto___33983;
var G__33986 = cljs.core.count.call(null,c__25857__auto___33983);
var G__33987 = (0);
seq__33961_33972 = G__33984;
chunk__33962_33973 = G__33985;
count__33963_33974 = G__33986;
i__33964_33975 = G__33987;
continue;
} else {
var dep_33988 = cljs.core.first.call(null,seq__33961_33982__$1);
topo_sort_helper_STAR_.call(null,dep_33988,(depth + (1)),state);

var G__33989 = cljs.core.next.call(null,seq__33961_33982__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33961_33972 = G__33989;
chunk__33962_33973 = G__33990;
count__33963_33974 = G__33991;
i__33964_33975 = G__33992;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33965){
var vec__33969 = p__33965;
var seq__33970 = cljs.core.seq.call(null,vec__33969);
var first__33971 = cljs.core.first.call(null,seq__33970);
var seq__33970__$1 = cljs.core.next.call(null,seq__33970);
var x = first__33971;
var xs = seq__33970__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33969,seq__33970,first__33971,seq__33970__$1,x,xs,get_deps__$1){
return (function (p1__33911_SHARP_){
return clojure.set.difference.call(null,p1__33911_SHARP_,x);
});})(vec__33969,seq__33970,first__33971,seq__33970__$1,x,xs,get_deps__$1))
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
var seq__34005 = cljs.core.seq.call(null,provides);
var chunk__34006 = null;
var count__34007 = (0);
var i__34008 = (0);
while(true){
if((i__34008 < count__34007)){
var prov = cljs.core._nth.call(null,chunk__34006,i__34008);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34009_34017 = cljs.core.seq.call(null,requires);
var chunk__34010_34018 = null;
var count__34011_34019 = (0);
var i__34012_34020 = (0);
while(true){
if((i__34012_34020 < count__34011_34019)){
var req_34021 = cljs.core._nth.call(null,chunk__34010_34018,i__34012_34020);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34021,prov);

var G__34022 = seq__34009_34017;
var G__34023 = chunk__34010_34018;
var G__34024 = count__34011_34019;
var G__34025 = (i__34012_34020 + (1));
seq__34009_34017 = G__34022;
chunk__34010_34018 = G__34023;
count__34011_34019 = G__34024;
i__34012_34020 = G__34025;
continue;
} else {
var temp__4657__auto___34026 = cljs.core.seq.call(null,seq__34009_34017);
if(temp__4657__auto___34026){
var seq__34009_34027__$1 = temp__4657__auto___34026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34009_34027__$1)){
var c__25857__auto___34028 = cljs.core.chunk_first.call(null,seq__34009_34027__$1);
var G__34029 = cljs.core.chunk_rest.call(null,seq__34009_34027__$1);
var G__34030 = c__25857__auto___34028;
var G__34031 = cljs.core.count.call(null,c__25857__auto___34028);
var G__34032 = (0);
seq__34009_34017 = G__34029;
chunk__34010_34018 = G__34030;
count__34011_34019 = G__34031;
i__34012_34020 = G__34032;
continue;
} else {
var req_34033 = cljs.core.first.call(null,seq__34009_34027__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34033,prov);

var G__34034 = cljs.core.next.call(null,seq__34009_34027__$1);
var G__34035 = null;
var G__34036 = (0);
var G__34037 = (0);
seq__34009_34017 = G__34034;
chunk__34010_34018 = G__34035;
count__34011_34019 = G__34036;
i__34012_34020 = G__34037;
continue;
}
} else {
}
}
break;
}

var G__34038 = seq__34005;
var G__34039 = chunk__34006;
var G__34040 = count__34007;
var G__34041 = (i__34008 + (1));
seq__34005 = G__34038;
chunk__34006 = G__34039;
count__34007 = G__34040;
i__34008 = G__34041;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34005);
if(temp__4657__auto__){
var seq__34005__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34005__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__34005__$1);
var G__34042 = cljs.core.chunk_rest.call(null,seq__34005__$1);
var G__34043 = c__25857__auto__;
var G__34044 = cljs.core.count.call(null,c__25857__auto__);
var G__34045 = (0);
seq__34005 = G__34042;
chunk__34006 = G__34043;
count__34007 = G__34044;
i__34008 = G__34045;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34005__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34013_34046 = cljs.core.seq.call(null,requires);
var chunk__34014_34047 = null;
var count__34015_34048 = (0);
var i__34016_34049 = (0);
while(true){
if((i__34016_34049 < count__34015_34048)){
var req_34050 = cljs.core._nth.call(null,chunk__34014_34047,i__34016_34049);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34050,prov);

var G__34051 = seq__34013_34046;
var G__34052 = chunk__34014_34047;
var G__34053 = count__34015_34048;
var G__34054 = (i__34016_34049 + (1));
seq__34013_34046 = G__34051;
chunk__34014_34047 = G__34052;
count__34015_34048 = G__34053;
i__34016_34049 = G__34054;
continue;
} else {
var temp__4657__auto___34055__$1 = cljs.core.seq.call(null,seq__34013_34046);
if(temp__4657__auto___34055__$1){
var seq__34013_34056__$1 = temp__4657__auto___34055__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34013_34056__$1)){
var c__25857__auto___34057 = cljs.core.chunk_first.call(null,seq__34013_34056__$1);
var G__34058 = cljs.core.chunk_rest.call(null,seq__34013_34056__$1);
var G__34059 = c__25857__auto___34057;
var G__34060 = cljs.core.count.call(null,c__25857__auto___34057);
var G__34061 = (0);
seq__34013_34046 = G__34058;
chunk__34014_34047 = G__34059;
count__34015_34048 = G__34060;
i__34016_34049 = G__34061;
continue;
} else {
var req_34062 = cljs.core.first.call(null,seq__34013_34056__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34062,prov);

var G__34063 = cljs.core.next.call(null,seq__34013_34056__$1);
var G__34064 = null;
var G__34065 = (0);
var G__34066 = (0);
seq__34013_34046 = G__34063;
chunk__34014_34047 = G__34064;
count__34015_34048 = G__34065;
i__34016_34049 = G__34066;
continue;
}
} else {
}
}
break;
}

var G__34067 = cljs.core.next.call(null,seq__34005__$1);
var G__34068 = null;
var G__34069 = (0);
var G__34070 = (0);
seq__34005 = G__34067;
chunk__34006 = G__34068;
count__34007 = G__34069;
i__34008 = G__34070;
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
var seq__34075_34079 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34076_34080 = null;
var count__34077_34081 = (0);
var i__34078_34082 = (0);
while(true){
if((i__34078_34082 < count__34077_34081)){
var ns_34083 = cljs.core._nth.call(null,chunk__34076_34080,i__34078_34082);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34083);

var G__34084 = seq__34075_34079;
var G__34085 = chunk__34076_34080;
var G__34086 = count__34077_34081;
var G__34087 = (i__34078_34082 + (1));
seq__34075_34079 = G__34084;
chunk__34076_34080 = G__34085;
count__34077_34081 = G__34086;
i__34078_34082 = G__34087;
continue;
} else {
var temp__4657__auto___34088 = cljs.core.seq.call(null,seq__34075_34079);
if(temp__4657__auto___34088){
var seq__34075_34089__$1 = temp__4657__auto___34088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34075_34089__$1)){
var c__25857__auto___34090 = cljs.core.chunk_first.call(null,seq__34075_34089__$1);
var G__34091 = cljs.core.chunk_rest.call(null,seq__34075_34089__$1);
var G__34092 = c__25857__auto___34090;
var G__34093 = cljs.core.count.call(null,c__25857__auto___34090);
var G__34094 = (0);
seq__34075_34079 = G__34091;
chunk__34076_34080 = G__34092;
count__34077_34081 = G__34093;
i__34078_34082 = G__34094;
continue;
} else {
var ns_34095 = cljs.core.first.call(null,seq__34075_34089__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34095);

var G__34096 = cljs.core.next.call(null,seq__34075_34089__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__34075_34079 = G__34096;
chunk__34076_34080 = G__34097;
count__34077_34081 = G__34098;
i__34078_34082 = G__34099;
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
var G__34100__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34101__i = 0, G__34101__a = new Array(arguments.length -  0);
while (G__34101__i < G__34101__a.length) {G__34101__a[G__34101__i] = arguments[G__34101__i + 0]; ++G__34101__i;}
  args = new cljs.core.IndexedSeq(G__34101__a,0);
} 
return G__34100__delegate.call(this,args);};
G__34100.cljs$lang$maxFixedArity = 0;
G__34100.cljs$lang$applyTo = (function (arglist__34102){
var args = cljs.core.seq(arglist__34102);
return G__34100__delegate(args);
});
G__34100.cljs$core$IFn$_invoke$arity$variadic = G__34100__delegate;
return G__34100;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34104 = cljs.core._EQ_;
var expr__34105 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34104.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34105))){
var path_parts = ((function (pred__34104,expr__34105){
return (function (p1__34103_SHARP_){
return clojure.string.split.call(null,p1__34103_SHARP_,/[\/\\]/);
});})(pred__34104,expr__34105))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34104,expr__34105){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34107){if((e34107 instanceof Error)){
var e = e34107;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34107;

}
}})());
});
;})(path_parts,sep,root,pred__34104,expr__34105))
} else {
if(cljs.core.truth_(pred__34104.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34105))){
return ((function (pred__34104,expr__34105){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34104,expr__34105){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34104,expr__34105))
);

return deferred.addErrback(((function (deferred,pred__34104,expr__34105){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34104,expr__34105))
);
});
;})(pred__34104,expr__34105))
} else {
return ((function (pred__34104,expr__34105){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34104,expr__34105))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34108,callback){
var map__34111 = p__34108;
var map__34111__$1 = ((((!((map__34111 == null)))?((((map__34111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34111):map__34111);
var file_msg = map__34111__$1;
var request_url = cljs.core.get.call(null,map__34111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34111,map__34111__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34111,map__34111__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto__){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto__){
return (function (state_34135){
var state_val_34136 = (state_34135[(1)]);
if((state_val_34136 === (7))){
var inst_34131 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34137_34157 = state_34135__$1;
(statearr_34137_34157[(2)] = inst_34131);

(statearr_34137_34157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (1))){
var state_34135__$1 = state_34135;
var statearr_34138_34158 = state_34135__$1;
(statearr_34138_34158[(2)] = null);

(statearr_34138_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (4))){
var inst_34115 = (state_34135[(7)]);
var inst_34115__$1 = (state_34135[(2)]);
var state_34135__$1 = (function (){var statearr_34139 = state_34135;
(statearr_34139[(7)] = inst_34115__$1);

return statearr_34139;
})();
if(cljs.core.truth_(inst_34115__$1)){
var statearr_34140_34159 = state_34135__$1;
(statearr_34140_34159[(1)] = (5));

} else {
var statearr_34141_34160 = state_34135__$1;
(statearr_34141_34160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (6))){
var state_34135__$1 = state_34135;
var statearr_34142_34161 = state_34135__$1;
(statearr_34142_34161[(2)] = null);

(statearr_34142_34161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (3))){
var inst_34133 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34135__$1,inst_34133);
} else {
if((state_val_34136 === (2))){
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34135__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34136 === (11))){
var inst_34127 = (state_34135[(2)]);
var state_34135__$1 = (function (){var statearr_34143 = state_34135;
(statearr_34143[(8)] = inst_34127);

return statearr_34143;
})();
var statearr_34144_34162 = state_34135__$1;
(statearr_34144_34162[(2)] = null);

(statearr_34144_34162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (9))){
var inst_34121 = (state_34135[(9)]);
var inst_34119 = (state_34135[(10)]);
var inst_34123 = inst_34121.call(null,inst_34119);
var state_34135__$1 = state_34135;
var statearr_34145_34163 = state_34135__$1;
(statearr_34145_34163[(2)] = inst_34123);

(statearr_34145_34163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (5))){
var inst_34115 = (state_34135[(7)]);
var inst_34117 = figwheel.client.file_reloading.blocking_load.call(null,inst_34115);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34135__$1,(8),inst_34117);
} else {
if((state_val_34136 === (10))){
var inst_34119 = (state_34135[(10)]);
var inst_34125 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34119);
var state_34135__$1 = state_34135;
var statearr_34146_34164 = state_34135__$1;
(statearr_34146_34164[(2)] = inst_34125);

(statearr_34146_34164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (8))){
var inst_34115 = (state_34135[(7)]);
var inst_34121 = (state_34135[(9)]);
var inst_34119 = (state_34135[(2)]);
var inst_34120 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34121__$1 = cljs.core.get.call(null,inst_34120,inst_34115);
var state_34135__$1 = (function (){var statearr_34147 = state_34135;
(statearr_34147[(9)] = inst_34121__$1);

(statearr_34147[(10)] = inst_34119);

return statearr_34147;
})();
if(cljs.core.truth_(inst_34121__$1)){
var statearr_34148_34165 = state_34135__$1;
(statearr_34148_34165[(1)] = (9));

} else {
var statearr_34149_34166 = state_34135__$1;
(statearr_34149_34166[(1)] = (10));

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
});})(c__27076__auto__))
;
return ((function (switch__27055__auto__,c__27076__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27056__auto__ = null;
var figwheel$client$file_reloading$state_machine__27056__auto____0 = (function (){
var statearr_34153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34153[(0)] = figwheel$client$file_reloading$state_machine__27056__auto__);

(statearr_34153[(1)] = (1));

return statearr_34153;
});
var figwheel$client$file_reloading$state_machine__27056__auto____1 = (function (state_34135){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_34135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e34154){if((e34154 instanceof Object)){
var ex__27059__auto__ = e34154;
var statearr_34155_34167 = state_34135;
(statearr_34155_34167[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34168 = state_34135;
state_34135 = G__34168;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27056__auto__ = function(state_34135){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27056__auto____1.call(this,state_34135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27056__auto____0;
figwheel$client$file_reloading$state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27056__auto____1;
return figwheel$client$file_reloading$state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto__))
})();
var state__27078__auto__ = (function (){var statearr_34156 = f__27077__auto__.call(null);
(statearr_34156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto__);

return statearr_34156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto__))
);

return c__27076__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34169,callback){
var map__34172 = p__34169;
var map__34172__$1 = ((((!((map__34172 == null)))?((((map__34172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34172):map__34172);
var file_msg = map__34172__$1;
var namespace = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34172,map__34172__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34172,map__34172__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34174){
var map__34177 = p__34174;
var map__34177__$1 = ((((!((map__34177 == null)))?((((map__34177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34177):map__34177);
var file_msg = map__34177__$1;
var namespace = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34179,callback){
var map__34182 = p__34179;
var map__34182__$1 = ((((!((map__34182 == null)))?((((map__34182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34182):map__34182);
var file_msg = map__34182__$1;
var request_url = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27076__auto___34286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto___34286,out){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto___34286,out){
return (function (state_34268){
var state_val_34269 = (state_34268[(1)]);
if((state_val_34269 === (1))){
var inst_34242 = cljs.core.seq.call(null,files);
var inst_34243 = cljs.core.first.call(null,inst_34242);
var inst_34244 = cljs.core.next.call(null,inst_34242);
var inst_34245 = files;
var state_34268__$1 = (function (){var statearr_34270 = state_34268;
(statearr_34270[(7)] = inst_34244);

(statearr_34270[(8)] = inst_34245);

(statearr_34270[(9)] = inst_34243);

return statearr_34270;
})();
var statearr_34271_34287 = state_34268__$1;
(statearr_34271_34287[(2)] = null);

(statearr_34271_34287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (2))){
var inst_34245 = (state_34268[(8)]);
var inst_34251 = (state_34268[(10)]);
var inst_34250 = cljs.core.seq.call(null,inst_34245);
var inst_34251__$1 = cljs.core.first.call(null,inst_34250);
var inst_34252 = cljs.core.next.call(null,inst_34250);
var inst_34253 = (inst_34251__$1 == null);
var inst_34254 = cljs.core.not.call(null,inst_34253);
var state_34268__$1 = (function (){var statearr_34272 = state_34268;
(statearr_34272[(10)] = inst_34251__$1);

(statearr_34272[(11)] = inst_34252);

return statearr_34272;
})();
if(inst_34254){
var statearr_34273_34288 = state_34268__$1;
(statearr_34273_34288[(1)] = (4));

} else {
var statearr_34274_34289 = state_34268__$1;
(statearr_34274_34289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (3))){
var inst_34266 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34268__$1,inst_34266);
} else {
if((state_val_34269 === (4))){
var inst_34251 = (state_34268[(10)]);
var inst_34256 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34251);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34268__$1,(7),inst_34256);
} else {
if((state_val_34269 === (5))){
var inst_34262 = cljs.core.async.close_BANG_.call(null,out);
var state_34268__$1 = state_34268;
var statearr_34275_34290 = state_34268__$1;
(statearr_34275_34290[(2)] = inst_34262);

(statearr_34275_34290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (6))){
var inst_34264 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34276_34291 = state_34268__$1;
(statearr_34276_34291[(2)] = inst_34264);

(statearr_34276_34291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (7))){
var inst_34252 = (state_34268[(11)]);
var inst_34258 = (state_34268[(2)]);
var inst_34259 = cljs.core.async.put_BANG_.call(null,out,inst_34258);
var inst_34245 = inst_34252;
var state_34268__$1 = (function (){var statearr_34277 = state_34268;
(statearr_34277[(12)] = inst_34259);

(statearr_34277[(8)] = inst_34245);

return statearr_34277;
})();
var statearr_34278_34292 = state_34268__$1;
(statearr_34278_34292[(2)] = null);

(statearr_34278_34292[(1)] = (2));


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
});})(c__27076__auto___34286,out))
;
return ((function (switch__27055__auto__,c__27076__auto___34286,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____0 = (function (){
var statearr_34282 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34282[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__);

(statearr_34282[(1)] = (1));

return statearr_34282;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____1 = (function (state_34268){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_34268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e34283){if((e34283 instanceof Object)){
var ex__27059__auto__ = e34283;
var statearr_34284_34293 = state_34268;
(statearr_34284_34293[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34294 = state_34268;
state_34268 = G__34294;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__ = function(state_34268){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____1.call(this,state_34268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto___34286,out))
})();
var state__27078__auto__ = (function (){var statearr_34285 = f__27077__auto__.call(null);
(statearr_34285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto___34286);

return statearr_34285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto___34286,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34295,opts){
var map__34299 = p__34295;
var map__34299__$1 = ((((!((map__34299 == null)))?((((map__34299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34299):map__34299);
var eval_body__$1 = cljs.core.get.call(null,map__34299__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34301){var e = e34301;
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
return (function (p1__34302_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34302_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34311){
var vec__34312 = p__34311;
var k = cljs.core.nth.call(null,vec__34312,(0),null);
var v = cljs.core.nth.call(null,vec__34312,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34315){
var vec__34316 = p__34315;
var k = cljs.core.nth.call(null,vec__34316,(0),null);
var v = cljs.core.nth.call(null,vec__34316,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34322,p__34323){
var map__34570 = p__34322;
var map__34570__$1 = ((((!((map__34570 == null)))?((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var opts = map__34570__$1;
var before_jsload = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34571 = p__34323;
var map__34571__$1 = ((((!((map__34571 == null)))?((((map__34571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34571):map__34571);
var msg = map__34571__$1;
var files = cljs.core.get.call(null,map__34571__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34571__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34571__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34588 = (state_34724[(7)]);
var inst_34586 = (state_34724[(8)]);
var inst_34585 = (state_34724[(9)]);
var inst_34587 = (state_34724[(10)]);
var inst_34593 = cljs.core._nth.call(null,inst_34586,inst_34588);
var inst_34594 = figwheel.client.file_reloading.eval_body.call(null,inst_34593,opts);
var inst_34595 = (inst_34588 + (1));
var tmp34726 = inst_34586;
var tmp34727 = inst_34585;
var tmp34728 = inst_34587;
var inst_34585__$1 = tmp34727;
var inst_34586__$1 = tmp34726;
var inst_34587__$1 = tmp34728;
var inst_34588__$1 = inst_34595;
var state_34724__$1 = (function (){var statearr_34729 = state_34724;
(statearr_34729[(7)] = inst_34588__$1);

(statearr_34729[(11)] = inst_34594);

(statearr_34729[(8)] = inst_34586__$1);

(statearr_34729[(9)] = inst_34585__$1);

(statearr_34729[(10)] = inst_34587__$1);

return statearr_34729;
})();
var statearr_34730_34816 = state_34724__$1;
(statearr_34730_34816[(2)] = null);

(statearr_34730_34816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (20))){
var inst_34628 = (state_34724[(12)]);
var inst_34636 = figwheel.client.file_reloading.sort_files.call(null,inst_34628);
var state_34724__$1 = state_34724;
var statearr_34731_34817 = state_34724__$1;
(statearr_34731_34817[(2)] = inst_34636);

(statearr_34731_34817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (27))){
var state_34724__$1 = state_34724;
var statearr_34732_34818 = state_34724__$1;
(statearr_34732_34818[(2)] = null);

(statearr_34732_34818[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (1))){
var inst_34577 = (state_34724[(13)]);
var inst_34574 = before_jsload.call(null,files);
var inst_34575 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34576 = (function (){return ((function (inst_34577,inst_34574,inst_34575,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34319_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34319_SHARP_);
});
;})(inst_34577,inst_34574,inst_34575,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34577__$1 = cljs.core.filter.call(null,inst_34576,files);
var inst_34578 = cljs.core.not_empty.call(null,inst_34577__$1);
var state_34724__$1 = (function (){var statearr_34733 = state_34724;
(statearr_34733[(14)] = inst_34574);

(statearr_34733[(13)] = inst_34577__$1);

(statearr_34733[(15)] = inst_34575);

return statearr_34733;
})();
if(cljs.core.truth_(inst_34578)){
var statearr_34734_34819 = state_34724__$1;
(statearr_34734_34819[(1)] = (2));

} else {
var statearr_34735_34820 = state_34724__$1;
(statearr_34735_34820[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (24))){
var state_34724__$1 = state_34724;
var statearr_34736_34821 = state_34724__$1;
(statearr_34736_34821[(2)] = null);

(statearr_34736_34821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (39))){
var inst_34678 = (state_34724[(16)]);
var state_34724__$1 = state_34724;
var statearr_34737_34822 = state_34724__$1;
(statearr_34737_34822[(2)] = inst_34678);

(statearr_34737_34822[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (46))){
var inst_34719 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34738_34823 = state_34724__$1;
(statearr_34738_34823[(2)] = inst_34719);

(statearr_34738_34823[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34622 = (state_34724[(2)]);
var inst_34623 = cljs.core.List.EMPTY;
var inst_34624 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34623);
var inst_34625 = (function (){return ((function (inst_34622,inst_34623,inst_34624,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34320_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34320_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34320_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_34622,inst_34623,inst_34624,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34626 = cljs.core.filter.call(null,inst_34625,files);
var inst_34627 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34628 = cljs.core.concat.call(null,inst_34626,inst_34627);
var state_34724__$1 = (function (){var statearr_34739 = state_34724;
(statearr_34739[(17)] = inst_34624);

(statearr_34739[(12)] = inst_34628);

(statearr_34739[(18)] = inst_34622);

return statearr_34739;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34740_34824 = state_34724__$1;
(statearr_34740_34824[(1)] = (16));

} else {
var statearr_34741_34825 = state_34724__$1;
(statearr_34741_34825[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (15))){
var inst_34612 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34742_34826 = state_34724__$1;
(statearr_34742_34826[(2)] = inst_34612);

(statearr_34742_34826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (21))){
var inst_34638 = (state_34724[(19)]);
var inst_34638__$1 = (state_34724[(2)]);
var inst_34639 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34638__$1);
var state_34724__$1 = (function (){var statearr_34743 = state_34724;
(statearr_34743[(19)] = inst_34638__$1);

return statearr_34743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34724__$1,(22),inst_34639);
} else {
if((state_val_34725 === (31))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (32))){
var inst_34678 = (state_34724[(16)]);
var inst_34683 = inst_34678.cljs$lang$protocol_mask$partition0$;
var inst_34684 = (inst_34683 & (64));
var inst_34685 = inst_34678.cljs$core$ISeq$;
var inst_34686 = (inst_34684) || (inst_34685);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34686)){
var statearr_34744_34827 = state_34724__$1;
(statearr_34744_34827[(1)] = (35));

} else {
var statearr_34745_34828 = state_34724__$1;
(statearr_34745_34828[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (40))){
var inst_34699 = (state_34724[(20)]);
var inst_34698 = (state_34724[(2)]);
var inst_34699__$1 = cljs.core.get.call(null,inst_34698,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34700 = cljs.core.get.call(null,inst_34698,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34701 = cljs.core.not_empty.call(null,inst_34699__$1);
var state_34724__$1 = (function (){var statearr_34746 = state_34724;
(statearr_34746[(21)] = inst_34700);

(statearr_34746[(20)] = inst_34699__$1);

return statearr_34746;
})();
if(cljs.core.truth_(inst_34701)){
var statearr_34747_34829 = state_34724__$1;
(statearr_34747_34829[(1)] = (41));

} else {
var statearr_34748_34830 = state_34724__$1;
(statearr_34748_34830[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (33))){
var state_34724__$1 = state_34724;
var statearr_34749_34831 = state_34724__$1;
(statearr_34749_34831[(2)] = false);

(statearr_34749_34831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (13))){
var inst_34598 = (state_34724[(22)]);
var inst_34602 = cljs.core.chunk_first.call(null,inst_34598);
var inst_34603 = cljs.core.chunk_rest.call(null,inst_34598);
var inst_34604 = cljs.core.count.call(null,inst_34602);
var inst_34585 = inst_34603;
var inst_34586 = inst_34602;
var inst_34587 = inst_34604;
var inst_34588 = (0);
var state_34724__$1 = (function (){var statearr_34750 = state_34724;
(statearr_34750[(7)] = inst_34588);

(statearr_34750[(8)] = inst_34586);

(statearr_34750[(9)] = inst_34585);

(statearr_34750[(10)] = inst_34587);

return statearr_34750;
})();
var statearr_34751_34832 = state_34724__$1;
(statearr_34751_34832[(2)] = null);

(statearr_34751_34832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (22))){
var inst_34646 = (state_34724[(23)]);
var inst_34642 = (state_34724[(24)]);
var inst_34638 = (state_34724[(19)]);
var inst_34641 = (state_34724[(25)]);
var inst_34641__$1 = (state_34724[(2)]);
var inst_34642__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34641__$1);
var inst_34643 = (function (){var all_files = inst_34638;
var res_SINGLEQUOTE_ = inst_34641__$1;
var res = inst_34642__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34646,inst_34642,inst_34638,inst_34641,inst_34641__$1,inst_34642__$1,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34321_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34321_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34646,inst_34642,inst_34638,inst_34641,inst_34641__$1,inst_34642__$1,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34644 = cljs.core.filter.call(null,inst_34643,inst_34641__$1);
var inst_34645 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34646__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34645);
var inst_34647 = cljs.core.not_empty.call(null,inst_34646__$1);
var state_34724__$1 = (function (){var statearr_34752 = state_34724;
(statearr_34752[(23)] = inst_34646__$1);

(statearr_34752[(24)] = inst_34642__$1);

(statearr_34752[(26)] = inst_34644);

(statearr_34752[(25)] = inst_34641__$1);

return statearr_34752;
})();
if(cljs.core.truth_(inst_34647)){
var statearr_34753_34833 = state_34724__$1;
(statearr_34753_34833[(1)] = (23));

} else {
var statearr_34754_34834 = state_34724__$1;
(statearr_34754_34834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (36))){
var state_34724__$1 = state_34724;
var statearr_34755_34835 = state_34724__$1;
(statearr_34755_34835[(2)] = false);

(statearr_34755_34835[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (41))){
var inst_34699 = (state_34724[(20)]);
var inst_34703 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34704 = cljs.core.map.call(null,inst_34703,inst_34699);
var inst_34705 = cljs.core.pr_str.call(null,inst_34704);
var inst_34706 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34705)].join('');
var inst_34707 = figwheel.client.utils.log.call(null,inst_34706);
var state_34724__$1 = state_34724;
var statearr_34756_34836 = state_34724__$1;
(statearr_34756_34836[(2)] = inst_34707);

(statearr_34756_34836[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (43))){
var inst_34700 = (state_34724[(21)]);
var inst_34710 = (state_34724[(2)]);
var inst_34711 = cljs.core.not_empty.call(null,inst_34700);
var state_34724__$1 = (function (){var statearr_34757 = state_34724;
(statearr_34757[(27)] = inst_34710);

return statearr_34757;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34758_34837 = state_34724__$1;
(statearr_34758_34837[(1)] = (44));

} else {
var statearr_34759_34838 = state_34724__$1;
(statearr_34759_34838[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (29))){
var inst_34646 = (state_34724[(23)]);
var inst_34678 = (state_34724[(16)]);
var inst_34642 = (state_34724[(24)]);
var inst_34638 = (state_34724[(19)]);
var inst_34644 = (state_34724[(26)]);
var inst_34641 = (state_34724[(25)]);
var inst_34674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34677 = (function (){var all_files = inst_34638;
var res_SINGLEQUOTE_ = inst_34641;
var res = inst_34642;
var files_not_loaded = inst_34644;
var dependencies_that_loaded = inst_34646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34678,inst_34642,inst_34638,inst_34644,inst_34641,inst_34674,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34676){
var map__34760 = p__34676;
var map__34760__$1 = ((((!((map__34760 == null)))?((((map__34760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34760):map__34760);
var namespace = cljs.core.get.call(null,map__34760__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34678,inst_34642,inst_34638,inst_34644,inst_34641,inst_34674,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34678__$1 = cljs.core.group_by.call(null,inst_34677,inst_34644);
var inst_34680 = (inst_34678__$1 == null);
var inst_34681 = cljs.core.not.call(null,inst_34680);
var state_34724__$1 = (function (){var statearr_34762 = state_34724;
(statearr_34762[(28)] = inst_34674);

(statearr_34762[(16)] = inst_34678__$1);

return statearr_34762;
})();
if(inst_34681){
var statearr_34763_34839 = state_34724__$1;
(statearr_34763_34839[(1)] = (32));

} else {
var statearr_34764_34840 = state_34724__$1;
(statearr_34764_34840[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (44))){
var inst_34700 = (state_34724[(21)]);
var inst_34713 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34700);
var inst_34714 = cljs.core.pr_str.call(null,inst_34713);
var inst_34715 = [cljs.core.str("not required: "),cljs.core.str(inst_34714)].join('');
var inst_34716 = figwheel.client.utils.log.call(null,inst_34715);
var state_34724__$1 = state_34724;
var statearr_34765_34841 = state_34724__$1;
(statearr_34765_34841[(2)] = inst_34716);

(statearr_34765_34841[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34619 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34766_34842 = state_34724__$1;
(statearr_34766_34842[(2)] = inst_34619);

(statearr_34766_34842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (28))){
var inst_34644 = (state_34724[(26)]);
var inst_34671 = (state_34724[(2)]);
var inst_34672 = cljs.core.not_empty.call(null,inst_34644);
var state_34724__$1 = (function (){var statearr_34767 = state_34724;
(statearr_34767[(29)] = inst_34671);

return statearr_34767;
})();
if(cljs.core.truth_(inst_34672)){
var statearr_34768_34843 = state_34724__$1;
(statearr_34768_34843[(1)] = (29));

} else {
var statearr_34769_34844 = state_34724__$1;
(statearr_34769_34844[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (25))){
var inst_34642 = (state_34724[(24)]);
var inst_34658 = (state_34724[(2)]);
var inst_34659 = cljs.core.not_empty.call(null,inst_34642);
var state_34724__$1 = (function (){var statearr_34770 = state_34724;
(statearr_34770[(30)] = inst_34658);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34659)){
var statearr_34771_34845 = state_34724__$1;
(statearr_34771_34845[(1)] = (26));

} else {
var statearr_34772_34846 = state_34724__$1;
(statearr_34772_34846[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (34))){
var inst_34693 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34693)){
var statearr_34773_34847 = state_34724__$1;
(statearr_34773_34847[(1)] = (38));

} else {
var statearr_34774_34848 = state_34724__$1;
(statearr_34774_34848[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (17))){
var state_34724__$1 = state_34724;
var statearr_34775_34849 = state_34724__$1;
(statearr_34775_34849[(2)] = recompile_dependents);

(statearr_34775_34849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var state_34724__$1 = state_34724;
var statearr_34776_34850 = state_34724__$1;
(statearr_34776_34850[(2)] = null);

(statearr_34776_34850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (12))){
var inst_34615 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34777_34851 = state_34724__$1;
(statearr_34777_34851[(2)] = inst_34615);

(statearr_34777_34851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (2))){
var inst_34577 = (state_34724[(13)]);
var inst_34584 = cljs.core.seq.call(null,inst_34577);
var inst_34585 = inst_34584;
var inst_34586 = null;
var inst_34587 = (0);
var inst_34588 = (0);
var state_34724__$1 = (function (){var statearr_34778 = state_34724;
(statearr_34778[(7)] = inst_34588);

(statearr_34778[(8)] = inst_34586);

(statearr_34778[(9)] = inst_34585);

(statearr_34778[(10)] = inst_34587);

return statearr_34778;
})();
var statearr_34779_34852 = state_34724__$1;
(statearr_34779_34852[(2)] = null);

(statearr_34779_34852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (23))){
var inst_34646 = (state_34724[(23)]);
var inst_34642 = (state_34724[(24)]);
var inst_34638 = (state_34724[(19)]);
var inst_34644 = (state_34724[(26)]);
var inst_34641 = (state_34724[(25)]);
var inst_34649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34651 = (function (){var all_files = inst_34638;
var res_SINGLEQUOTE_ = inst_34641;
var res = inst_34642;
var files_not_loaded = inst_34644;
var dependencies_that_loaded = inst_34646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34649,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34650){
var map__34780 = p__34650;
var map__34780__$1 = ((((!((map__34780 == null)))?((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34780):map__34780);
var request_url = cljs.core.get.call(null,map__34780__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34649,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34652 = cljs.core.reverse.call(null,inst_34646);
var inst_34653 = cljs.core.map.call(null,inst_34651,inst_34652);
var inst_34654 = cljs.core.pr_str.call(null,inst_34653);
var inst_34655 = figwheel.client.utils.log.call(null,inst_34654);
var state_34724__$1 = (function (){var statearr_34782 = state_34724;
(statearr_34782[(31)] = inst_34649);

return statearr_34782;
})();
var statearr_34783_34853 = state_34724__$1;
(statearr_34783_34853[(2)] = inst_34655);

(statearr_34783_34853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (35))){
var state_34724__$1 = state_34724;
var statearr_34784_34854 = state_34724__$1;
(statearr_34784_34854[(2)] = true);

(statearr_34784_34854[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (19))){
var inst_34628 = (state_34724[(12)]);
var inst_34634 = figwheel.client.file_reloading.expand_files.call(null,inst_34628);
var state_34724__$1 = state_34724;
var statearr_34785_34855 = state_34724__$1;
(statearr_34785_34855[(2)] = inst_34634);

(statearr_34785_34855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (11))){
var state_34724__$1 = state_34724;
var statearr_34786_34856 = state_34724__$1;
(statearr_34786_34856[(2)] = null);

(statearr_34786_34856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (9))){
var inst_34617 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34787_34857 = state_34724__$1;
(statearr_34787_34857[(2)] = inst_34617);

(statearr_34787_34857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34588 = (state_34724[(7)]);
var inst_34587 = (state_34724[(10)]);
var inst_34590 = (inst_34588 < inst_34587);
var inst_34591 = inst_34590;
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34591)){
var statearr_34788_34858 = state_34724__$1;
(statearr_34788_34858[(1)] = (7));

} else {
var statearr_34789_34859 = state_34724__$1;
(statearr_34789_34859[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (14))){
var inst_34598 = (state_34724[(22)]);
var inst_34607 = cljs.core.first.call(null,inst_34598);
var inst_34608 = figwheel.client.file_reloading.eval_body.call(null,inst_34607,opts);
var inst_34609 = cljs.core.next.call(null,inst_34598);
var inst_34585 = inst_34609;
var inst_34586 = null;
var inst_34587 = (0);
var inst_34588 = (0);
var state_34724__$1 = (function (){var statearr_34790 = state_34724;
(statearr_34790[(7)] = inst_34588);

(statearr_34790[(8)] = inst_34586);

(statearr_34790[(9)] = inst_34585);

(statearr_34790[(32)] = inst_34608);

(statearr_34790[(10)] = inst_34587);

return statearr_34790;
})();
var statearr_34791_34860 = state_34724__$1;
(statearr_34791_34860[(2)] = null);

(statearr_34791_34860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (45))){
var state_34724__$1 = state_34724;
var statearr_34792_34861 = state_34724__$1;
(statearr_34792_34861[(2)] = null);

(statearr_34792_34861[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (26))){
var inst_34646 = (state_34724[(23)]);
var inst_34642 = (state_34724[(24)]);
var inst_34638 = (state_34724[(19)]);
var inst_34644 = (state_34724[(26)]);
var inst_34641 = (state_34724[(25)]);
var inst_34661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34663 = (function (){var all_files = inst_34638;
var res_SINGLEQUOTE_ = inst_34641;
var res = inst_34642;
var files_not_loaded = inst_34644;
var dependencies_that_loaded = inst_34646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34661,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34662){
var map__34793 = p__34662;
var map__34793__$1 = ((((!((map__34793 == null)))?((((map__34793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34793):map__34793);
var namespace = cljs.core.get.call(null,map__34793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34661,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34664 = cljs.core.map.call(null,inst_34663,inst_34642);
var inst_34665 = cljs.core.pr_str.call(null,inst_34664);
var inst_34666 = figwheel.client.utils.log.call(null,inst_34665);
var inst_34667 = (function (){var all_files = inst_34638;
var res_SINGLEQUOTE_ = inst_34641;
var res = inst_34642;
var files_not_loaded = inst_34644;
var dependencies_that_loaded = inst_34646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34661,inst_34663,inst_34664,inst_34665,inst_34666,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34646,inst_34642,inst_34638,inst_34644,inst_34641,inst_34661,inst_34663,inst_34664,inst_34665,inst_34666,state_val_34725,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34668 = setTimeout(inst_34667,(10));
var state_34724__$1 = (function (){var statearr_34795 = state_34724;
(statearr_34795[(33)] = inst_34666);

(statearr_34795[(34)] = inst_34661);

return statearr_34795;
})();
var statearr_34796_34862 = state_34724__$1;
(statearr_34796_34862[(2)] = inst_34668);

(statearr_34796_34862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (16))){
var state_34724__$1 = state_34724;
var statearr_34797_34863 = state_34724__$1;
(statearr_34797_34863[(2)] = reload_dependents);

(statearr_34797_34863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (38))){
var inst_34678 = (state_34724[(16)]);
var inst_34695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34678);
var state_34724__$1 = state_34724;
var statearr_34798_34864 = state_34724__$1;
(statearr_34798_34864[(2)] = inst_34695);

(statearr_34798_34864[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (30))){
var state_34724__$1 = state_34724;
var statearr_34799_34865 = state_34724__$1;
(statearr_34799_34865[(2)] = null);

(statearr_34799_34865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34598 = (state_34724[(22)]);
var inst_34600 = cljs.core.chunked_seq_QMARK_.call(null,inst_34598);
var state_34724__$1 = state_34724;
if(inst_34600){
var statearr_34800_34866 = state_34724__$1;
(statearr_34800_34866[(1)] = (13));

} else {
var statearr_34801_34867 = state_34724__$1;
(statearr_34801_34867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (18))){
var inst_34632 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34632)){
var statearr_34802_34868 = state_34724__$1;
(statearr_34802_34868[(1)] = (19));

} else {
var statearr_34803_34869 = state_34724__$1;
(statearr_34803_34869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (42))){
var state_34724__$1 = state_34724;
var statearr_34804_34870 = state_34724__$1;
(statearr_34804_34870[(2)] = null);

(statearr_34804_34870[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (37))){
var inst_34690 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34805_34871 = state_34724__$1;
(statearr_34805_34871[(2)] = inst_34690);

(statearr_34805_34871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (8))){
var inst_34598 = (state_34724[(22)]);
var inst_34585 = (state_34724[(9)]);
var inst_34598__$1 = cljs.core.seq.call(null,inst_34585);
var state_34724__$1 = (function (){var statearr_34806 = state_34724;
(statearr_34806[(22)] = inst_34598__$1);

return statearr_34806;
})();
if(inst_34598__$1){
var statearr_34807_34872 = state_34724__$1;
(statearr_34807_34872[(1)] = (10));

} else {
var statearr_34808_34873 = state_34724__$1;
(statearr_34808_34873[(1)] = (11));

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
});})(c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27055__auto__,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____0 = (function (){
var statearr_34812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34812[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__);

(statearr_34812[(1)] = (1));

return statearr_34812;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____1 = (function (state_34724){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_34724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e34813){if((e34813 instanceof Object)){
var ex__27059__auto__ = e34813;
var statearr_34814_34874 = state_34724;
(statearr_34814_34874[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34724;
state_34724 = G__34875;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27078__auto__ = (function (){var statearr_34815 = f__27077__auto__.call(null);
(statearr_34815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto__);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto__,map__34570,map__34570__$1,opts,before_jsload,on_jsload,reload_dependents,map__34571,map__34571__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27076__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34878,link){
var map__34881 = p__34878;
var map__34881__$1 = ((((!((map__34881 == null)))?((((map__34881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34881):map__34881);
var file = cljs.core.get.call(null,map__34881__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34881,map__34881__$1,file){
return (function (p1__34876_SHARP_,p2__34877_SHARP_){
if(cljs.core._EQ_.call(null,p1__34876_SHARP_,p2__34877_SHARP_)){
return p1__34876_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34881,map__34881__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34887){
var map__34888 = p__34887;
var map__34888__$1 = ((((!((map__34888 == null)))?((((map__34888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34888):map__34888);
var match_length = cljs.core.get.call(null,map__34888__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34888__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34883_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34883_SHARP_);
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
var args34890 = [];
var len__26121__auto___34893 = arguments.length;
var i__26122__auto___34894 = (0);
while(true){
if((i__26122__auto___34894 < len__26121__auto___34893)){
args34890.push((arguments[i__26122__auto___34894]));

var G__34895 = (i__26122__auto___34894 + (1));
i__26122__auto___34894 = G__34895;
continue;
} else {
}
break;
}

var G__34892 = args34890.length;
switch (G__34892) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34890.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34897_SHARP_,p2__34898_SHARP_){
return cljs.core.assoc.call(null,p1__34897_SHARP_,cljs.core.get.call(null,p2__34898_SHARP_,key),p2__34898_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34899){
var map__34902 = p__34899;
var map__34902__$1 = ((((!((map__34902 == null)))?((((map__34902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34902):map__34902);
var f_data = map__34902__$1;
var file = cljs.core.get.call(null,map__34902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34904,p__34905){
var map__34914 = p__34904;
var map__34914__$1 = ((((!((map__34914 == null)))?((((map__34914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914):map__34914);
var opts = map__34914__$1;
var on_cssload = cljs.core.get.call(null,map__34914__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34915 = p__34905;
var map__34915__$1 = ((((!((map__34915 == null)))?((((map__34915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34915):map__34915);
var files_msg = map__34915__$1;
var files = cljs.core.get.call(null,map__34915__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34918_34922 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34919_34923 = null;
var count__34920_34924 = (0);
var i__34921_34925 = (0);
while(true){
if((i__34921_34925 < count__34920_34924)){
var f_34926 = cljs.core._nth.call(null,chunk__34919_34923,i__34921_34925);
figwheel.client.file_reloading.reload_css_file.call(null,f_34926);

var G__34927 = seq__34918_34922;
var G__34928 = chunk__34919_34923;
var G__34929 = count__34920_34924;
var G__34930 = (i__34921_34925 + (1));
seq__34918_34922 = G__34927;
chunk__34919_34923 = G__34928;
count__34920_34924 = G__34929;
i__34921_34925 = G__34930;
continue;
} else {
var temp__4657__auto___34931 = cljs.core.seq.call(null,seq__34918_34922);
if(temp__4657__auto___34931){
var seq__34918_34932__$1 = temp__4657__auto___34931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34918_34932__$1)){
var c__25857__auto___34933 = cljs.core.chunk_first.call(null,seq__34918_34932__$1);
var G__34934 = cljs.core.chunk_rest.call(null,seq__34918_34932__$1);
var G__34935 = c__25857__auto___34933;
var G__34936 = cljs.core.count.call(null,c__25857__auto___34933);
var G__34937 = (0);
seq__34918_34922 = G__34934;
chunk__34919_34923 = G__34935;
count__34920_34924 = G__34936;
i__34921_34925 = G__34937;
continue;
} else {
var f_34938 = cljs.core.first.call(null,seq__34918_34932__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34938);

var G__34939 = cljs.core.next.call(null,seq__34918_34932__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34918_34922 = G__34939;
chunk__34919_34923 = G__34940;
count__34920_34924 = G__34941;
i__34921_34925 = G__34942;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34914,map__34914__$1,opts,on_cssload,map__34915,map__34915__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34914,map__34914__$1,opts,on_cssload,map__34915,map__34915__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484443186272
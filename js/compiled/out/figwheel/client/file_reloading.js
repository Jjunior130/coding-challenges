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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__62741_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__62741_SHARP_));
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
var seq__62746 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__62747 = null;
var count__62748 = (0);
var i__62749 = (0);
while(true){
if((i__62749 < count__62748)){
var n = cljs.core._nth.call(null,chunk__62747,i__62749);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__62750 = seq__62746;
var G__62751 = chunk__62747;
var G__62752 = count__62748;
var G__62753 = (i__62749 + (1));
seq__62746 = G__62750;
chunk__62747 = G__62751;
count__62748 = G__62752;
i__62749 = G__62753;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62746);
if(temp__4657__auto__){
var seq__62746__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62746__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__62746__$1);
var G__62754 = cljs.core.chunk_rest.call(null,seq__62746__$1);
var G__62755 = c__25857__auto__;
var G__62756 = cljs.core.count.call(null,c__25857__auto__);
var G__62757 = (0);
seq__62746 = G__62754;
chunk__62747 = G__62755;
count__62748 = G__62756;
i__62749 = G__62757;
continue;
} else {
var n = cljs.core.first.call(null,seq__62746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__62758 = cljs.core.next.call(null,seq__62746__$1);
var G__62759 = null;
var G__62760 = (0);
var G__62761 = (0);
seq__62746 = G__62758;
chunk__62747 = G__62759;
count__62748 = G__62760;
i__62749 = G__62761;
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

var seq__62812_62823 = cljs.core.seq.call(null,deps);
var chunk__62813_62824 = null;
var count__62814_62825 = (0);
var i__62815_62826 = (0);
while(true){
if((i__62815_62826 < count__62814_62825)){
var dep_62827 = cljs.core._nth.call(null,chunk__62813_62824,i__62815_62826);
topo_sort_helper_STAR_.call(null,dep_62827,(depth + (1)),state);

var G__62828 = seq__62812_62823;
var G__62829 = chunk__62813_62824;
var G__62830 = count__62814_62825;
var G__62831 = (i__62815_62826 + (1));
seq__62812_62823 = G__62828;
chunk__62813_62824 = G__62829;
count__62814_62825 = G__62830;
i__62815_62826 = G__62831;
continue;
} else {
var temp__4657__auto___62832 = cljs.core.seq.call(null,seq__62812_62823);
if(temp__4657__auto___62832){
var seq__62812_62833__$1 = temp__4657__auto___62832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62812_62833__$1)){
var c__25857__auto___62834 = cljs.core.chunk_first.call(null,seq__62812_62833__$1);
var G__62835 = cljs.core.chunk_rest.call(null,seq__62812_62833__$1);
var G__62836 = c__25857__auto___62834;
var G__62837 = cljs.core.count.call(null,c__25857__auto___62834);
var G__62838 = (0);
seq__62812_62823 = G__62835;
chunk__62813_62824 = G__62836;
count__62814_62825 = G__62837;
i__62815_62826 = G__62838;
continue;
} else {
var dep_62839 = cljs.core.first.call(null,seq__62812_62833__$1);
topo_sort_helper_STAR_.call(null,dep_62839,(depth + (1)),state);

var G__62840 = cljs.core.next.call(null,seq__62812_62833__$1);
var G__62841 = null;
var G__62842 = (0);
var G__62843 = (0);
seq__62812_62823 = G__62840;
chunk__62813_62824 = G__62841;
count__62814_62825 = G__62842;
i__62815_62826 = G__62843;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__62816){
var vec__62820 = p__62816;
var seq__62821 = cljs.core.seq.call(null,vec__62820);
var first__62822 = cljs.core.first.call(null,seq__62821);
var seq__62821__$1 = cljs.core.next.call(null,seq__62821);
var x = first__62822;
var xs = seq__62821__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__62820,seq__62821,first__62822,seq__62821__$1,x,xs,get_deps__$1){
return (function (p1__62762_SHARP_){
return clojure.set.difference.call(null,p1__62762_SHARP_,x);
});})(vec__62820,seq__62821,first__62822,seq__62821__$1,x,xs,get_deps__$1))
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
var seq__62856 = cljs.core.seq.call(null,provides);
var chunk__62857 = null;
var count__62858 = (0);
var i__62859 = (0);
while(true){
if((i__62859 < count__62858)){
var prov = cljs.core._nth.call(null,chunk__62857,i__62859);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__62860_62868 = cljs.core.seq.call(null,requires);
var chunk__62861_62869 = null;
var count__62862_62870 = (0);
var i__62863_62871 = (0);
while(true){
if((i__62863_62871 < count__62862_62870)){
var req_62872 = cljs.core._nth.call(null,chunk__62861_62869,i__62863_62871);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62872,prov);

var G__62873 = seq__62860_62868;
var G__62874 = chunk__62861_62869;
var G__62875 = count__62862_62870;
var G__62876 = (i__62863_62871 + (1));
seq__62860_62868 = G__62873;
chunk__62861_62869 = G__62874;
count__62862_62870 = G__62875;
i__62863_62871 = G__62876;
continue;
} else {
var temp__4657__auto___62877 = cljs.core.seq.call(null,seq__62860_62868);
if(temp__4657__auto___62877){
var seq__62860_62878__$1 = temp__4657__auto___62877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62860_62878__$1)){
var c__25857__auto___62879 = cljs.core.chunk_first.call(null,seq__62860_62878__$1);
var G__62880 = cljs.core.chunk_rest.call(null,seq__62860_62878__$1);
var G__62881 = c__25857__auto___62879;
var G__62882 = cljs.core.count.call(null,c__25857__auto___62879);
var G__62883 = (0);
seq__62860_62868 = G__62880;
chunk__62861_62869 = G__62881;
count__62862_62870 = G__62882;
i__62863_62871 = G__62883;
continue;
} else {
var req_62884 = cljs.core.first.call(null,seq__62860_62878__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62884,prov);

var G__62885 = cljs.core.next.call(null,seq__62860_62878__$1);
var G__62886 = null;
var G__62887 = (0);
var G__62888 = (0);
seq__62860_62868 = G__62885;
chunk__62861_62869 = G__62886;
count__62862_62870 = G__62887;
i__62863_62871 = G__62888;
continue;
}
} else {
}
}
break;
}

var G__62889 = seq__62856;
var G__62890 = chunk__62857;
var G__62891 = count__62858;
var G__62892 = (i__62859 + (1));
seq__62856 = G__62889;
chunk__62857 = G__62890;
count__62858 = G__62891;
i__62859 = G__62892;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62856);
if(temp__4657__auto__){
var seq__62856__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62856__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__62856__$1);
var G__62893 = cljs.core.chunk_rest.call(null,seq__62856__$1);
var G__62894 = c__25857__auto__;
var G__62895 = cljs.core.count.call(null,c__25857__auto__);
var G__62896 = (0);
seq__62856 = G__62893;
chunk__62857 = G__62894;
count__62858 = G__62895;
i__62859 = G__62896;
continue;
} else {
var prov = cljs.core.first.call(null,seq__62856__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__62864_62897 = cljs.core.seq.call(null,requires);
var chunk__62865_62898 = null;
var count__62866_62899 = (0);
var i__62867_62900 = (0);
while(true){
if((i__62867_62900 < count__62866_62899)){
var req_62901 = cljs.core._nth.call(null,chunk__62865_62898,i__62867_62900);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62901,prov);

var G__62902 = seq__62864_62897;
var G__62903 = chunk__62865_62898;
var G__62904 = count__62866_62899;
var G__62905 = (i__62867_62900 + (1));
seq__62864_62897 = G__62902;
chunk__62865_62898 = G__62903;
count__62866_62899 = G__62904;
i__62867_62900 = G__62905;
continue;
} else {
var temp__4657__auto___62906__$1 = cljs.core.seq.call(null,seq__62864_62897);
if(temp__4657__auto___62906__$1){
var seq__62864_62907__$1 = temp__4657__auto___62906__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62864_62907__$1)){
var c__25857__auto___62908 = cljs.core.chunk_first.call(null,seq__62864_62907__$1);
var G__62909 = cljs.core.chunk_rest.call(null,seq__62864_62907__$1);
var G__62910 = c__25857__auto___62908;
var G__62911 = cljs.core.count.call(null,c__25857__auto___62908);
var G__62912 = (0);
seq__62864_62897 = G__62909;
chunk__62865_62898 = G__62910;
count__62866_62899 = G__62911;
i__62867_62900 = G__62912;
continue;
} else {
var req_62913 = cljs.core.first.call(null,seq__62864_62907__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62913,prov);

var G__62914 = cljs.core.next.call(null,seq__62864_62907__$1);
var G__62915 = null;
var G__62916 = (0);
var G__62917 = (0);
seq__62864_62897 = G__62914;
chunk__62865_62898 = G__62915;
count__62866_62899 = G__62916;
i__62867_62900 = G__62917;
continue;
}
} else {
}
}
break;
}

var G__62918 = cljs.core.next.call(null,seq__62856__$1);
var G__62919 = null;
var G__62920 = (0);
var G__62921 = (0);
seq__62856 = G__62918;
chunk__62857 = G__62919;
count__62858 = G__62920;
i__62859 = G__62921;
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
var seq__62926_62930 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__62927_62931 = null;
var count__62928_62932 = (0);
var i__62929_62933 = (0);
while(true){
if((i__62929_62933 < count__62928_62932)){
var ns_62934 = cljs.core._nth.call(null,chunk__62927_62931,i__62929_62933);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_62934);

var G__62935 = seq__62926_62930;
var G__62936 = chunk__62927_62931;
var G__62937 = count__62928_62932;
var G__62938 = (i__62929_62933 + (1));
seq__62926_62930 = G__62935;
chunk__62927_62931 = G__62936;
count__62928_62932 = G__62937;
i__62929_62933 = G__62938;
continue;
} else {
var temp__4657__auto___62939 = cljs.core.seq.call(null,seq__62926_62930);
if(temp__4657__auto___62939){
var seq__62926_62940__$1 = temp__4657__auto___62939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62926_62940__$1)){
var c__25857__auto___62941 = cljs.core.chunk_first.call(null,seq__62926_62940__$1);
var G__62942 = cljs.core.chunk_rest.call(null,seq__62926_62940__$1);
var G__62943 = c__25857__auto___62941;
var G__62944 = cljs.core.count.call(null,c__25857__auto___62941);
var G__62945 = (0);
seq__62926_62930 = G__62942;
chunk__62927_62931 = G__62943;
count__62928_62932 = G__62944;
i__62929_62933 = G__62945;
continue;
} else {
var ns_62946 = cljs.core.first.call(null,seq__62926_62940__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_62946);

var G__62947 = cljs.core.next.call(null,seq__62926_62940__$1);
var G__62948 = null;
var G__62949 = (0);
var G__62950 = (0);
seq__62926_62930 = G__62947;
chunk__62927_62931 = G__62948;
count__62928_62932 = G__62949;
i__62929_62933 = G__62950;
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
var G__62951__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__62951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62952__i = 0, G__62952__a = new Array(arguments.length -  0);
while (G__62952__i < G__62952__a.length) {G__62952__a[G__62952__i] = arguments[G__62952__i + 0]; ++G__62952__i;}
  args = new cljs.core.IndexedSeq(G__62952__a,0);
} 
return G__62951__delegate.call(this,args);};
G__62951.cljs$lang$maxFixedArity = 0;
G__62951.cljs$lang$applyTo = (function (arglist__62953){
var args = cljs.core.seq(arglist__62953);
return G__62951__delegate(args);
});
G__62951.cljs$core$IFn$_invoke$arity$variadic = G__62951__delegate;
return G__62951;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__62955 = cljs.core._EQ_;
var expr__62956 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__62955.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__62956))){
var path_parts = ((function (pred__62955,expr__62956){
return (function (p1__62954_SHARP_){
return clojure.string.split.call(null,p1__62954_SHARP_,/[\/\\]/);
});})(pred__62955,expr__62956))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__62955,expr__62956){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e62958){if((e62958 instanceof Error)){
var e = e62958;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e62958;

}
}})());
});
;})(path_parts,sep,root,pred__62955,expr__62956))
} else {
if(cljs.core.truth_(pred__62955.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__62956))){
return ((function (pred__62955,expr__62956){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__62955,expr__62956){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__62955,expr__62956))
);

return deferred.addErrback(((function (deferred,pred__62955,expr__62956){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__62955,expr__62956))
);
});
;})(pred__62955,expr__62956))
} else {
return ((function (pred__62955,expr__62956){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__62955,expr__62956))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__62959,callback){
var map__62962 = p__62959;
var map__62962__$1 = ((((!((map__62962 == null)))?((((map__62962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62962):map__62962);
var file_msg = map__62962__$1;
var request_url = cljs.core.get.call(null,map__62962__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__62962,map__62962__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__62962,map__62962__$1,file_msg,request_url))
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
return (function (state_62986){
var state_val_62987 = (state_62986[(1)]);
if((state_val_62987 === (7))){
var inst_62982 = (state_62986[(2)]);
var state_62986__$1 = state_62986;
var statearr_62988_63008 = state_62986__$1;
(statearr_62988_63008[(2)] = inst_62982);

(statearr_62988_63008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (1))){
var state_62986__$1 = state_62986;
var statearr_62989_63009 = state_62986__$1;
(statearr_62989_63009[(2)] = null);

(statearr_62989_63009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (4))){
var inst_62966 = (state_62986[(7)]);
var inst_62966__$1 = (state_62986[(2)]);
var state_62986__$1 = (function (){var statearr_62990 = state_62986;
(statearr_62990[(7)] = inst_62966__$1);

return statearr_62990;
})();
if(cljs.core.truth_(inst_62966__$1)){
var statearr_62991_63010 = state_62986__$1;
(statearr_62991_63010[(1)] = (5));

} else {
var statearr_62992_63011 = state_62986__$1;
(statearr_62992_63011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (6))){
var state_62986__$1 = state_62986;
var statearr_62993_63012 = state_62986__$1;
(statearr_62993_63012[(2)] = null);

(statearr_62993_63012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (3))){
var inst_62984 = (state_62986[(2)]);
var state_62986__$1 = state_62986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62986__$1,inst_62984);
} else {
if((state_val_62987 === (2))){
var state_62986__$1 = state_62986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62986__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_62987 === (11))){
var inst_62978 = (state_62986[(2)]);
var state_62986__$1 = (function (){var statearr_62994 = state_62986;
(statearr_62994[(8)] = inst_62978);

return statearr_62994;
})();
var statearr_62995_63013 = state_62986__$1;
(statearr_62995_63013[(2)] = null);

(statearr_62995_63013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (9))){
var inst_62972 = (state_62986[(9)]);
var inst_62970 = (state_62986[(10)]);
var inst_62974 = inst_62972.call(null,inst_62970);
var state_62986__$1 = state_62986;
var statearr_62996_63014 = state_62986__$1;
(statearr_62996_63014[(2)] = inst_62974);

(statearr_62996_63014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (5))){
var inst_62966 = (state_62986[(7)]);
var inst_62968 = figwheel.client.file_reloading.blocking_load.call(null,inst_62966);
var state_62986__$1 = state_62986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62986__$1,(8),inst_62968);
} else {
if((state_val_62987 === (10))){
var inst_62970 = (state_62986[(10)]);
var inst_62976 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_62970);
var state_62986__$1 = state_62986;
var statearr_62997_63015 = state_62986__$1;
(statearr_62997_63015[(2)] = inst_62976);

(statearr_62997_63015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62987 === (8))){
var inst_62972 = (state_62986[(9)]);
var inst_62966 = (state_62986[(7)]);
var inst_62970 = (state_62986[(2)]);
var inst_62971 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_62972__$1 = cljs.core.get.call(null,inst_62971,inst_62966);
var state_62986__$1 = (function (){var statearr_62998 = state_62986;
(statearr_62998[(9)] = inst_62972__$1);

(statearr_62998[(10)] = inst_62970);

return statearr_62998;
})();
if(cljs.core.truth_(inst_62972__$1)){
var statearr_62999_63016 = state_62986__$1;
(statearr_62999_63016[(1)] = (9));

} else {
var statearr_63000_63017 = state_62986__$1;
(statearr_63000_63017[(1)] = (10));

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
var statearr_63004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63004[(0)] = figwheel$client$file_reloading$state_machine__33288__auto__);

(statearr_63004[(1)] = (1));

return statearr_63004;
});
var figwheel$client$file_reloading$state_machine__33288__auto____1 = (function (state_62986){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_62986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e63005){if((e63005 instanceof Object)){
var ex__33291__auto__ = e63005;
var statearr_63006_63018 = state_62986;
(statearr_63006_63018[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63019 = state_62986;
state_62986 = G__63019;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33288__auto__ = function(state_62986){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33288__auto____1.call(this,state_62986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33288__auto____0;
figwheel$client$file_reloading$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33288__auto____1;
return figwheel$client$file_reloading$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_63007 = f__33353__auto__.call(null);
(statearr_63007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_63007;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__63020,callback){
var map__63023 = p__63020;
var map__63023__$1 = ((((!((map__63023 == null)))?((((map__63023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63023):map__63023);
var file_msg = map__63023__$1;
var namespace = cljs.core.get.call(null,map__63023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__63023,map__63023__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__63023,map__63023__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__63025){
var map__63028 = p__63025;
var map__63028__$1 = ((((!((map__63028 == null)))?((((map__63028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63028):map__63028);
var file_msg = map__63028__$1;
var namespace = cljs.core.get.call(null,map__63028__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__63030,callback){
var map__63033 = p__63030;
var map__63033__$1 = ((((!((map__63033 == null)))?((((map__63033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63033):map__63033);
var file_msg = map__63033__$1;
var request_url = cljs.core.get.call(null,map__63033__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__63033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33352__auto___63137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___63137,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___63137,out){
return (function (state_63119){
var state_val_63120 = (state_63119[(1)]);
if((state_val_63120 === (1))){
var inst_63093 = cljs.core.seq.call(null,files);
var inst_63094 = cljs.core.first.call(null,inst_63093);
var inst_63095 = cljs.core.next.call(null,inst_63093);
var inst_63096 = files;
var state_63119__$1 = (function (){var statearr_63121 = state_63119;
(statearr_63121[(7)] = inst_63095);

(statearr_63121[(8)] = inst_63094);

(statearr_63121[(9)] = inst_63096);

return statearr_63121;
})();
var statearr_63122_63138 = state_63119__$1;
(statearr_63122_63138[(2)] = null);

(statearr_63122_63138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63120 === (2))){
var inst_63102 = (state_63119[(10)]);
var inst_63096 = (state_63119[(9)]);
var inst_63101 = cljs.core.seq.call(null,inst_63096);
var inst_63102__$1 = cljs.core.first.call(null,inst_63101);
var inst_63103 = cljs.core.next.call(null,inst_63101);
var inst_63104 = (inst_63102__$1 == null);
var inst_63105 = cljs.core.not.call(null,inst_63104);
var state_63119__$1 = (function (){var statearr_63123 = state_63119;
(statearr_63123[(10)] = inst_63102__$1);

(statearr_63123[(11)] = inst_63103);

return statearr_63123;
})();
if(inst_63105){
var statearr_63124_63139 = state_63119__$1;
(statearr_63124_63139[(1)] = (4));

} else {
var statearr_63125_63140 = state_63119__$1;
(statearr_63125_63140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63120 === (3))){
var inst_63117 = (state_63119[(2)]);
var state_63119__$1 = state_63119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63119__$1,inst_63117);
} else {
if((state_val_63120 === (4))){
var inst_63102 = (state_63119[(10)]);
var inst_63107 = figwheel.client.file_reloading.reload_js_file.call(null,inst_63102);
var state_63119__$1 = state_63119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63119__$1,(7),inst_63107);
} else {
if((state_val_63120 === (5))){
var inst_63113 = cljs.core.async.close_BANG_.call(null,out);
var state_63119__$1 = state_63119;
var statearr_63126_63141 = state_63119__$1;
(statearr_63126_63141[(2)] = inst_63113);

(statearr_63126_63141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63120 === (6))){
var inst_63115 = (state_63119[(2)]);
var state_63119__$1 = state_63119;
var statearr_63127_63142 = state_63119__$1;
(statearr_63127_63142[(2)] = inst_63115);

(statearr_63127_63142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63120 === (7))){
var inst_63103 = (state_63119[(11)]);
var inst_63109 = (state_63119[(2)]);
var inst_63110 = cljs.core.async.put_BANG_.call(null,out,inst_63109);
var inst_63096 = inst_63103;
var state_63119__$1 = (function (){var statearr_63128 = state_63119;
(statearr_63128[(12)] = inst_63110);

(statearr_63128[(9)] = inst_63096);

return statearr_63128;
})();
var statearr_63129_63143 = state_63119__$1;
(statearr_63129_63143[(2)] = null);

(statearr_63129_63143[(1)] = (2));


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
});})(c__33352__auto___63137,out))
;
return ((function (switch__33287__auto__,c__33352__auto___63137,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0 = (function (){
var statearr_63133 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63133[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__);

(statearr_63133[(1)] = (1));

return statearr_63133;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1 = (function (state_63119){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_63119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e63134){if((e63134 instanceof Object)){
var ex__33291__auto__ = e63134;
var statearr_63135_63144 = state_63119;
(statearr_63135_63144[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63145 = state_63119;
state_63119 = G__63145;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__ = function(state_63119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1.call(this,state_63119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___63137,out))
})();
var state__33354__auto__ = (function (){var statearr_63136 = f__33353__auto__.call(null);
(statearr_63136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___63137);

return statearr_63136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___63137,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__63146,opts){
var map__63150 = p__63146;
var map__63150__$1 = ((((!((map__63150 == null)))?((((map__63150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63150):map__63150);
var eval_body__$1 = cljs.core.get.call(null,map__63150__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__63150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e63152){var e = e63152;
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
return (function (p1__63153_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63153_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__63162){
var vec__63163 = p__63162;
var k = cljs.core.nth.call(null,vec__63163,(0),null);
var v = cljs.core.nth.call(null,vec__63163,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__63166){
var vec__63167 = p__63166;
var k = cljs.core.nth.call(null,vec__63167,(0),null);
var v = cljs.core.nth.call(null,vec__63167,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__63173,p__63174){
var map__63421 = p__63173;
var map__63421__$1 = ((((!((map__63421 == null)))?((((map__63421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63421):map__63421);
var opts = map__63421__$1;
var before_jsload = cljs.core.get.call(null,map__63421__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__63421__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__63421__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__63422 = p__63174;
var map__63422__$1 = ((((!((map__63422 == null)))?((((map__63422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63422):map__63422);
var msg = map__63422__$1;
var files = cljs.core.get.call(null,map__63422__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__63422__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__63422__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_63575){
var state_val_63576 = (state_63575[(1)]);
if((state_val_63576 === (7))){
var inst_63437 = (state_63575[(7)]);
var inst_63438 = (state_63575[(8)]);
var inst_63439 = (state_63575[(9)]);
var inst_63436 = (state_63575[(10)]);
var inst_63444 = cljs.core._nth.call(null,inst_63437,inst_63439);
var inst_63445 = figwheel.client.file_reloading.eval_body.call(null,inst_63444,opts);
var inst_63446 = (inst_63439 + (1));
var tmp63577 = inst_63437;
var tmp63578 = inst_63438;
var tmp63579 = inst_63436;
var inst_63436__$1 = tmp63579;
var inst_63437__$1 = tmp63577;
var inst_63438__$1 = tmp63578;
var inst_63439__$1 = inst_63446;
var state_63575__$1 = (function (){var statearr_63580 = state_63575;
(statearr_63580[(11)] = inst_63445);

(statearr_63580[(7)] = inst_63437__$1);

(statearr_63580[(8)] = inst_63438__$1);

(statearr_63580[(9)] = inst_63439__$1);

(statearr_63580[(10)] = inst_63436__$1);

return statearr_63580;
})();
var statearr_63581_63667 = state_63575__$1;
(statearr_63581_63667[(2)] = null);

(statearr_63581_63667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (20))){
var inst_63479 = (state_63575[(12)]);
var inst_63487 = figwheel.client.file_reloading.sort_files.call(null,inst_63479);
var state_63575__$1 = state_63575;
var statearr_63582_63668 = state_63575__$1;
(statearr_63582_63668[(2)] = inst_63487);

(statearr_63582_63668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (27))){
var state_63575__$1 = state_63575;
var statearr_63583_63669 = state_63575__$1;
(statearr_63583_63669[(2)] = null);

(statearr_63583_63669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (1))){
var inst_63428 = (state_63575[(13)]);
var inst_63425 = before_jsload.call(null,files);
var inst_63426 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_63427 = (function (){return ((function (inst_63428,inst_63425,inst_63426,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63170_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63170_SHARP_);
});
;})(inst_63428,inst_63425,inst_63426,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63428__$1 = cljs.core.filter.call(null,inst_63427,files);
var inst_63429 = cljs.core.not_empty.call(null,inst_63428__$1);
var state_63575__$1 = (function (){var statearr_63584 = state_63575;
(statearr_63584[(14)] = inst_63426);

(statearr_63584[(15)] = inst_63425);

(statearr_63584[(13)] = inst_63428__$1);

return statearr_63584;
})();
if(cljs.core.truth_(inst_63429)){
var statearr_63585_63670 = state_63575__$1;
(statearr_63585_63670[(1)] = (2));

} else {
var statearr_63586_63671 = state_63575__$1;
(statearr_63586_63671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (24))){
var state_63575__$1 = state_63575;
var statearr_63587_63672 = state_63575__$1;
(statearr_63587_63672[(2)] = null);

(statearr_63587_63672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (39))){
var inst_63529 = (state_63575[(16)]);
var state_63575__$1 = state_63575;
var statearr_63588_63673 = state_63575__$1;
(statearr_63588_63673[(2)] = inst_63529);

(statearr_63588_63673[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (46))){
var inst_63570 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63589_63674 = state_63575__$1;
(statearr_63589_63674[(2)] = inst_63570);

(statearr_63589_63674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (4))){
var inst_63473 = (state_63575[(2)]);
var inst_63474 = cljs.core.List.EMPTY;
var inst_63475 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_63474);
var inst_63476 = (function (){return ((function (inst_63473,inst_63474,inst_63475,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63171_SHARP_){
var and__25034__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63171_SHARP_);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63171_SHARP_));
} else {
return and__25034__auto__;
}
});
;})(inst_63473,inst_63474,inst_63475,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63477 = cljs.core.filter.call(null,inst_63476,files);
var inst_63478 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_63479 = cljs.core.concat.call(null,inst_63477,inst_63478);
var state_63575__$1 = (function (){var statearr_63590 = state_63575;
(statearr_63590[(12)] = inst_63479);

(statearr_63590[(17)] = inst_63475);

(statearr_63590[(18)] = inst_63473);

return statearr_63590;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_63591_63675 = state_63575__$1;
(statearr_63591_63675[(1)] = (16));

} else {
var statearr_63592_63676 = state_63575__$1;
(statearr_63592_63676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (15))){
var inst_63463 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63593_63677 = state_63575__$1;
(statearr_63593_63677[(2)] = inst_63463);

(statearr_63593_63677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (21))){
var inst_63489 = (state_63575[(19)]);
var inst_63489__$1 = (state_63575[(2)]);
var inst_63490 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_63489__$1);
var state_63575__$1 = (function (){var statearr_63594 = state_63575;
(statearr_63594[(19)] = inst_63489__$1);

return statearr_63594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63575__$1,(22),inst_63490);
} else {
if((state_val_63576 === (31))){
var inst_63573 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63575__$1,inst_63573);
} else {
if((state_val_63576 === (32))){
var inst_63529 = (state_63575[(16)]);
var inst_63534 = inst_63529.cljs$lang$protocol_mask$partition0$;
var inst_63535 = (inst_63534 & (64));
var inst_63536 = inst_63529.cljs$core$ISeq$;
var inst_63537 = (inst_63535) || (inst_63536);
var state_63575__$1 = state_63575;
if(cljs.core.truth_(inst_63537)){
var statearr_63595_63678 = state_63575__$1;
(statearr_63595_63678[(1)] = (35));

} else {
var statearr_63596_63679 = state_63575__$1;
(statearr_63596_63679[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (40))){
var inst_63550 = (state_63575[(20)]);
var inst_63549 = (state_63575[(2)]);
var inst_63550__$1 = cljs.core.get.call(null,inst_63549,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_63551 = cljs.core.get.call(null,inst_63549,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_63552 = cljs.core.not_empty.call(null,inst_63550__$1);
var state_63575__$1 = (function (){var statearr_63597 = state_63575;
(statearr_63597[(20)] = inst_63550__$1);

(statearr_63597[(21)] = inst_63551);

return statearr_63597;
})();
if(cljs.core.truth_(inst_63552)){
var statearr_63598_63680 = state_63575__$1;
(statearr_63598_63680[(1)] = (41));

} else {
var statearr_63599_63681 = state_63575__$1;
(statearr_63599_63681[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (33))){
var state_63575__$1 = state_63575;
var statearr_63600_63682 = state_63575__$1;
(statearr_63600_63682[(2)] = false);

(statearr_63600_63682[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (13))){
var inst_63449 = (state_63575[(22)]);
var inst_63453 = cljs.core.chunk_first.call(null,inst_63449);
var inst_63454 = cljs.core.chunk_rest.call(null,inst_63449);
var inst_63455 = cljs.core.count.call(null,inst_63453);
var inst_63436 = inst_63454;
var inst_63437 = inst_63453;
var inst_63438 = inst_63455;
var inst_63439 = (0);
var state_63575__$1 = (function (){var statearr_63601 = state_63575;
(statearr_63601[(7)] = inst_63437);

(statearr_63601[(8)] = inst_63438);

(statearr_63601[(9)] = inst_63439);

(statearr_63601[(10)] = inst_63436);

return statearr_63601;
})();
var statearr_63602_63683 = state_63575__$1;
(statearr_63602_63683[(2)] = null);

(statearr_63602_63683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (22))){
var inst_63493 = (state_63575[(23)]);
var inst_63492 = (state_63575[(24)]);
var inst_63489 = (state_63575[(19)]);
var inst_63497 = (state_63575[(25)]);
var inst_63492__$1 = (state_63575[(2)]);
var inst_63493__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63492__$1);
var inst_63494 = (function (){var all_files = inst_63489;
var res_SINGLEQUOTE_ = inst_63492__$1;
var res = inst_63493__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_63493,inst_63492,inst_63489,inst_63497,inst_63492__$1,inst_63493__$1,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63172_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__63172_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_63493,inst_63492,inst_63489,inst_63497,inst_63492__$1,inst_63493__$1,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63495 = cljs.core.filter.call(null,inst_63494,inst_63492__$1);
var inst_63496 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_63497__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63496);
var inst_63498 = cljs.core.not_empty.call(null,inst_63497__$1);
var state_63575__$1 = (function (){var statearr_63603 = state_63575;
(statearr_63603[(23)] = inst_63493__$1);

(statearr_63603[(24)] = inst_63492__$1);

(statearr_63603[(26)] = inst_63495);

(statearr_63603[(25)] = inst_63497__$1);

return statearr_63603;
})();
if(cljs.core.truth_(inst_63498)){
var statearr_63604_63684 = state_63575__$1;
(statearr_63604_63684[(1)] = (23));

} else {
var statearr_63605_63685 = state_63575__$1;
(statearr_63605_63685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (36))){
var state_63575__$1 = state_63575;
var statearr_63606_63686 = state_63575__$1;
(statearr_63606_63686[(2)] = false);

(statearr_63606_63686[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (41))){
var inst_63550 = (state_63575[(20)]);
var inst_63554 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_63555 = cljs.core.map.call(null,inst_63554,inst_63550);
var inst_63556 = cljs.core.pr_str.call(null,inst_63555);
var inst_63557 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_63556)].join('');
var inst_63558 = figwheel.client.utils.log.call(null,inst_63557);
var state_63575__$1 = state_63575;
var statearr_63607_63687 = state_63575__$1;
(statearr_63607_63687[(2)] = inst_63558);

(statearr_63607_63687[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (43))){
var inst_63551 = (state_63575[(21)]);
var inst_63561 = (state_63575[(2)]);
var inst_63562 = cljs.core.not_empty.call(null,inst_63551);
var state_63575__$1 = (function (){var statearr_63608 = state_63575;
(statearr_63608[(27)] = inst_63561);

return statearr_63608;
})();
if(cljs.core.truth_(inst_63562)){
var statearr_63609_63688 = state_63575__$1;
(statearr_63609_63688[(1)] = (44));

} else {
var statearr_63610_63689 = state_63575__$1;
(statearr_63610_63689[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (29))){
var inst_63493 = (state_63575[(23)]);
var inst_63492 = (state_63575[(24)]);
var inst_63495 = (state_63575[(26)]);
var inst_63489 = (state_63575[(19)]);
var inst_63497 = (state_63575[(25)]);
var inst_63529 = (state_63575[(16)]);
var inst_63525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_63528 = (function (){var all_files = inst_63489;
var res_SINGLEQUOTE_ = inst_63492;
var res = inst_63493;
var files_not_loaded = inst_63495;
var dependencies_that_loaded = inst_63497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63529,inst_63525,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63527){
var map__63611 = p__63527;
var map__63611__$1 = ((((!((map__63611 == null)))?((((map__63611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63611):map__63611);
var namespace = cljs.core.get.call(null,map__63611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63529,inst_63525,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63529__$1 = cljs.core.group_by.call(null,inst_63528,inst_63495);
var inst_63531 = (inst_63529__$1 == null);
var inst_63532 = cljs.core.not.call(null,inst_63531);
var state_63575__$1 = (function (){var statearr_63613 = state_63575;
(statearr_63613[(28)] = inst_63525);

(statearr_63613[(16)] = inst_63529__$1);

return statearr_63613;
})();
if(inst_63532){
var statearr_63614_63690 = state_63575__$1;
(statearr_63614_63690[(1)] = (32));

} else {
var statearr_63615_63691 = state_63575__$1;
(statearr_63615_63691[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (44))){
var inst_63551 = (state_63575[(21)]);
var inst_63564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_63551);
var inst_63565 = cljs.core.pr_str.call(null,inst_63564);
var inst_63566 = [cljs.core.str("not required: "),cljs.core.str(inst_63565)].join('');
var inst_63567 = figwheel.client.utils.log.call(null,inst_63566);
var state_63575__$1 = state_63575;
var statearr_63616_63692 = state_63575__$1;
(statearr_63616_63692[(2)] = inst_63567);

(statearr_63616_63692[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (6))){
var inst_63470 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63617_63693 = state_63575__$1;
(statearr_63617_63693[(2)] = inst_63470);

(statearr_63617_63693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (28))){
var inst_63495 = (state_63575[(26)]);
var inst_63522 = (state_63575[(2)]);
var inst_63523 = cljs.core.not_empty.call(null,inst_63495);
var state_63575__$1 = (function (){var statearr_63618 = state_63575;
(statearr_63618[(29)] = inst_63522);

return statearr_63618;
})();
if(cljs.core.truth_(inst_63523)){
var statearr_63619_63694 = state_63575__$1;
(statearr_63619_63694[(1)] = (29));

} else {
var statearr_63620_63695 = state_63575__$1;
(statearr_63620_63695[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (25))){
var inst_63493 = (state_63575[(23)]);
var inst_63509 = (state_63575[(2)]);
var inst_63510 = cljs.core.not_empty.call(null,inst_63493);
var state_63575__$1 = (function (){var statearr_63621 = state_63575;
(statearr_63621[(30)] = inst_63509);

return statearr_63621;
})();
if(cljs.core.truth_(inst_63510)){
var statearr_63622_63696 = state_63575__$1;
(statearr_63622_63696[(1)] = (26));

} else {
var statearr_63623_63697 = state_63575__$1;
(statearr_63623_63697[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (34))){
var inst_63544 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
if(cljs.core.truth_(inst_63544)){
var statearr_63624_63698 = state_63575__$1;
(statearr_63624_63698[(1)] = (38));

} else {
var statearr_63625_63699 = state_63575__$1;
(statearr_63625_63699[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (17))){
var state_63575__$1 = state_63575;
var statearr_63626_63700 = state_63575__$1;
(statearr_63626_63700[(2)] = recompile_dependents);

(statearr_63626_63700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (3))){
var state_63575__$1 = state_63575;
var statearr_63627_63701 = state_63575__$1;
(statearr_63627_63701[(2)] = null);

(statearr_63627_63701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (12))){
var inst_63466 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63628_63702 = state_63575__$1;
(statearr_63628_63702[(2)] = inst_63466);

(statearr_63628_63702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (2))){
var inst_63428 = (state_63575[(13)]);
var inst_63435 = cljs.core.seq.call(null,inst_63428);
var inst_63436 = inst_63435;
var inst_63437 = null;
var inst_63438 = (0);
var inst_63439 = (0);
var state_63575__$1 = (function (){var statearr_63629 = state_63575;
(statearr_63629[(7)] = inst_63437);

(statearr_63629[(8)] = inst_63438);

(statearr_63629[(9)] = inst_63439);

(statearr_63629[(10)] = inst_63436);

return statearr_63629;
})();
var statearr_63630_63703 = state_63575__$1;
(statearr_63630_63703[(2)] = null);

(statearr_63630_63703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (23))){
var inst_63493 = (state_63575[(23)]);
var inst_63492 = (state_63575[(24)]);
var inst_63495 = (state_63575[(26)]);
var inst_63489 = (state_63575[(19)]);
var inst_63497 = (state_63575[(25)]);
var inst_63500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_63502 = (function (){var all_files = inst_63489;
var res_SINGLEQUOTE_ = inst_63492;
var res = inst_63493;
var files_not_loaded = inst_63495;
var dependencies_that_loaded = inst_63497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63500,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63501){
var map__63631 = p__63501;
var map__63631__$1 = ((((!((map__63631 == null)))?((((map__63631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63631):map__63631);
var request_url = cljs.core.get.call(null,map__63631__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63500,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63503 = cljs.core.reverse.call(null,inst_63497);
var inst_63504 = cljs.core.map.call(null,inst_63502,inst_63503);
var inst_63505 = cljs.core.pr_str.call(null,inst_63504);
var inst_63506 = figwheel.client.utils.log.call(null,inst_63505);
var state_63575__$1 = (function (){var statearr_63633 = state_63575;
(statearr_63633[(31)] = inst_63500);

return statearr_63633;
})();
var statearr_63634_63704 = state_63575__$1;
(statearr_63634_63704[(2)] = inst_63506);

(statearr_63634_63704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (35))){
var state_63575__$1 = state_63575;
var statearr_63635_63705 = state_63575__$1;
(statearr_63635_63705[(2)] = true);

(statearr_63635_63705[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (19))){
var inst_63479 = (state_63575[(12)]);
var inst_63485 = figwheel.client.file_reloading.expand_files.call(null,inst_63479);
var state_63575__$1 = state_63575;
var statearr_63636_63706 = state_63575__$1;
(statearr_63636_63706[(2)] = inst_63485);

(statearr_63636_63706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (11))){
var state_63575__$1 = state_63575;
var statearr_63637_63707 = state_63575__$1;
(statearr_63637_63707[(2)] = null);

(statearr_63637_63707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (9))){
var inst_63468 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63638_63708 = state_63575__$1;
(statearr_63638_63708[(2)] = inst_63468);

(statearr_63638_63708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (5))){
var inst_63438 = (state_63575[(8)]);
var inst_63439 = (state_63575[(9)]);
var inst_63441 = (inst_63439 < inst_63438);
var inst_63442 = inst_63441;
var state_63575__$1 = state_63575;
if(cljs.core.truth_(inst_63442)){
var statearr_63639_63709 = state_63575__$1;
(statearr_63639_63709[(1)] = (7));

} else {
var statearr_63640_63710 = state_63575__$1;
(statearr_63640_63710[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (14))){
var inst_63449 = (state_63575[(22)]);
var inst_63458 = cljs.core.first.call(null,inst_63449);
var inst_63459 = figwheel.client.file_reloading.eval_body.call(null,inst_63458,opts);
var inst_63460 = cljs.core.next.call(null,inst_63449);
var inst_63436 = inst_63460;
var inst_63437 = null;
var inst_63438 = (0);
var inst_63439 = (0);
var state_63575__$1 = (function (){var statearr_63641 = state_63575;
(statearr_63641[(7)] = inst_63437);

(statearr_63641[(32)] = inst_63459);

(statearr_63641[(8)] = inst_63438);

(statearr_63641[(9)] = inst_63439);

(statearr_63641[(10)] = inst_63436);

return statearr_63641;
})();
var statearr_63642_63711 = state_63575__$1;
(statearr_63642_63711[(2)] = null);

(statearr_63642_63711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (45))){
var state_63575__$1 = state_63575;
var statearr_63643_63712 = state_63575__$1;
(statearr_63643_63712[(2)] = null);

(statearr_63643_63712[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (26))){
var inst_63493 = (state_63575[(23)]);
var inst_63492 = (state_63575[(24)]);
var inst_63495 = (state_63575[(26)]);
var inst_63489 = (state_63575[(19)]);
var inst_63497 = (state_63575[(25)]);
var inst_63512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_63514 = (function (){var all_files = inst_63489;
var res_SINGLEQUOTE_ = inst_63492;
var res = inst_63493;
var files_not_loaded = inst_63495;
var dependencies_that_loaded = inst_63497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63512,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63513){
var map__63644 = p__63513;
var map__63644__$1 = ((((!((map__63644 == null)))?((((map__63644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63644):map__63644);
var namespace = cljs.core.get.call(null,map__63644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__63644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63512,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63515 = cljs.core.map.call(null,inst_63514,inst_63493);
var inst_63516 = cljs.core.pr_str.call(null,inst_63515);
var inst_63517 = figwheel.client.utils.log.call(null,inst_63516);
var inst_63518 = (function (){var all_files = inst_63489;
var res_SINGLEQUOTE_ = inst_63492;
var res = inst_63493;
var files_not_loaded = inst_63495;
var dependencies_that_loaded = inst_63497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63512,inst_63514,inst_63515,inst_63516,inst_63517,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63493,inst_63492,inst_63495,inst_63489,inst_63497,inst_63512,inst_63514,inst_63515,inst_63516,inst_63517,state_val_63576,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63519 = setTimeout(inst_63518,(10));
var state_63575__$1 = (function (){var statearr_63646 = state_63575;
(statearr_63646[(33)] = inst_63512);

(statearr_63646[(34)] = inst_63517);

return statearr_63646;
})();
var statearr_63647_63713 = state_63575__$1;
(statearr_63647_63713[(2)] = inst_63519);

(statearr_63647_63713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (16))){
var state_63575__$1 = state_63575;
var statearr_63648_63714 = state_63575__$1;
(statearr_63648_63714[(2)] = reload_dependents);

(statearr_63648_63714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (38))){
var inst_63529 = (state_63575[(16)]);
var inst_63546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63529);
var state_63575__$1 = state_63575;
var statearr_63649_63715 = state_63575__$1;
(statearr_63649_63715[(2)] = inst_63546);

(statearr_63649_63715[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (30))){
var state_63575__$1 = state_63575;
var statearr_63650_63716 = state_63575__$1;
(statearr_63650_63716[(2)] = null);

(statearr_63650_63716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (10))){
var inst_63449 = (state_63575[(22)]);
var inst_63451 = cljs.core.chunked_seq_QMARK_.call(null,inst_63449);
var state_63575__$1 = state_63575;
if(inst_63451){
var statearr_63651_63717 = state_63575__$1;
(statearr_63651_63717[(1)] = (13));

} else {
var statearr_63652_63718 = state_63575__$1;
(statearr_63652_63718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (18))){
var inst_63483 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
if(cljs.core.truth_(inst_63483)){
var statearr_63653_63719 = state_63575__$1;
(statearr_63653_63719[(1)] = (19));

} else {
var statearr_63654_63720 = state_63575__$1;
(statearr_63654_63720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (42))){
var state_63575__$1 = state_63575;
var statearr_63655_63721 = state_63575__$1;
(statearr_63655_63721[(2)] = null);

(statearr_63655_63721[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (37))){
var inst_63541 = (state_63575[(2)]);
var state_63575__$1 = state_63575;
var statearr_63656_63722 = state_63575__$1;
(statearr_63656_63722[(2)] = inst_63541);

(statearr_63656_63722[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (8))){
var inst_63449 = (state_63575[(22)]);
var inst_63436 = (state_63575[(10)]);
var inst_63449__$1 = cljs.core.seq.call(null,inst_63436);
var state_63575__$1 = (function (){var statearr_63657 = state_63575;
(statearr_63657[(22)] = inst_63449__$1);

return statearr_63657;
})();
if(inst_63449__$1){
var statearr_63658_63723 = state_63575__$1;
(statearr_63658_63723[(1)] = (10));

} else {
var statearr_63659_63724 = state_63575__$1;
(statearr_63659_63724[(1)] = (11));

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
});})(c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33287__auto__,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0 = (function (){
var statearr_63663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63663[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__);

(statearr_63663[(1)] = (1));

return statearr_63663;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1 = (function (state_63575){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_63575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e63664){if((e63664 instanceof Object)){
var ex__33291__auto__ = e63664;
var statearr_63665_63725 = state_63575;
(statearr_63665_63725[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63726 = state_63575;
state_63575 = G__63726;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__ = function(state_63575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1.call(this,state_63575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33354__auto__ = (function (){var statearr_63666 = f__33353__auto__.call(null);
(statearr_63666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_63666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,map__63421,map__63421__$1,opts,before_jsload,on_jsload,reload_dependents,map__63422,map__63422__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33352__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__63729,link){
var map__63732 = p__63729;
var map__63732__$1 = ((((!((map__63732 == null)))?((((map__63732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63732):map__63732);
var file = cljs.core.get.call(null,map__63732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__63732,map__63732__$1,file){
return (function (p1__63727_SHARP_,p2__63728_SHARP_){
if(cljs.core._EQ_.call(null,p1__63727_SHARP_,p2__63728_SHARP_)){
return p1__63727_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__63732,map__63732__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__63738){
var map__63739 = p__63738;
var map__63739__$1 = ((((!((map__63739 == null)))?((((map__63739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63739):map__63739);
var match_length = cljs.core.get.call(null,map__63739__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__63739__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__63734_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__63734_SHARP_);
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
var args63741 = [];
var len__26121__auto___63744 = arguments.length;
var i__26122__auto___63745 = (0);
while(true){
if((i__26122__auto___63745 < len__26121__auto___63744)){
args63741.push((arguments[i__26122__auto___63745]));

var G__63746 = (i__26122__auto___63745 + (1));
i__26122__auto___63745 = G__63746;
continue;
} else {
}
break;
}

var G__63743 = args63741.length;
switch (G__63743) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63741.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__63748_SHARP_,p2__63749_SHARP_){
return cljs.core.assoc.call(null,p1__63748_SHARP_,cljs.core.get.call(null,p2__63749_SHARP_,key),p2__63749_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__63750){
var map__63753 = p__63750;
var map__63753__$1 = ((((!((map__63753 == null)))?((((map__63753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63753):map__63753);
var f_data = map__63753__$1;
var file = cljs.core.get.call(null,map__63753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__63755,p__63756){
var map__63765 = p__63755;
var map__63765__$1 = ((((!((map__63765 == null)))?((((map__63765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63765):map__63765);
var opts = map__63765__$1;
var on_cssload = cljs.core.get.call(null,map__63765__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__63766 = p__63756;
var map__63766__$1 = ((((!((map__63766 == null)))?((((map__63766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63766):map__63766);
var files_msg = map__63766__$1;
var files = cljs.core.get.call(null,map__63766__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__63769_63773 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__63770_63774 = null;
var count__63771_63775 = (0);
var i__63772_63776 = (0);
while(true){
if((i__63772_63776 < count__63771_63775)){
var f_63777 = cljs.core._nth.call(null,chunk__63770_63774,i__63772_63776);
figwheel.client.file_reloading.reload_css_file.call(null,f_63777);

var G__63778 = seq__63769_63773;
var G__63779 = chunk__63770_63774;
var G__63780 = count__63771_63775;
var G__63781 = (i__63772_63776 + (1));
seq__63769_63773 = G__63778;
chunk__63770_63774 = G__63779;
count__63771_63775 = G__63780;
i__63772_63776 = G__63781;
continue;
} else {
var temp__4657__auto___63782 = cljs.core.seq.call(null,seq__63769_63773);
if(temp__4657__auto___63782){
var seq__63769_63783__$1 = temp__4657__auto___63782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63769_63783__$1)){
var c__25857__auto___63784 = cljs.core.chunk_first.call(null,seq__63769_63783__$1);
var G__63785 = cljs.core.chunk_rest.call(null,seq__63769_63783__$1);
var G__63786 = c__25857__auto___63784;
var G__63787 = cljs.core.count.call(null,c__25857__auto___63784);
var G__63788 = (0);
seq__63769_63773 = G__63785;
chunk__63770_63774 = G__63786;
count__63771_63775 = G__63787;
i__63772_63776 = G__63788;
continue;
} else {
var f_63789 = cljs.core.first.call(null,seq__63769_63783__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_63789);

var G__63790 = cljs.core.next.call(null,seq__63769_63783__$1);
var G__63791 = null;
var G__63792 = (0);
var G__63793 = (0);
seq__63769_63773 = G__63790;
chunk__63770_63774 = G__63791;
count__63771_63775 = G__63792;
i__63772_63776 = G__63793;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__63765,map__63765__$1,opts,on_cssload,map__63766,map__63766__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__63765,map__63765__$1,opts,on_cssload,map__63766,map__63766__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484333405429
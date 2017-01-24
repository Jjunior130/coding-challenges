// Compiled by ClojureScript 1.9.229 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12841 = arguments.length;
var i__7485__auto___12842 = (0);
while(true){
if((i__7485__auto___12842 < len__7484__auto___12841)){
args__7491__auto__.push((arguments[i__7485__auto___12842]));

var G__12843 = (i__7485__auto___12842 + (1));
i__7485__auto___12842 = G__12843;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq12840){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12840));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12851 = arguments.length;
var i__7485__auto___12852 = (0);
while(true){
if((i__7485__auto___12852 < len__7484__auto___12851)){
args__7491__auto__.push((arguments[i__7485__auto___12852]));

var G__12853 = (i__7485__auto___12852 + (1));
i__7485__auto___12852 = G__12853;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__12848){
var map__12849 = p__12848;
var map__12849__$1 = ((((!((map__12849 == null)))?((((map__12849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12849):map__12849);
var merge_fn = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq12844){
var G__12845 = cljs.core.first.call(null,seq12844);
var seq12844__$1 = cljs.core.next.call(null,seq12844);
var G__12846 = cljs.core.first.call(null,seq12844__$1);
var seq12844__$2 = cljs.core.next.call(null,seq12844__$1);
var G__12847 = cljs.core.first.call(null,seq12844__$2);
var seq12844__$3 = cljs.core.next.call(null,seq12844__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__12845,G__12846,G__12847,seq12844__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,((function (latenavfn){
return (function() { 
var G__12854__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__12854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12855__i = 0, G__12855__a = new Array(arguments.length -  0);
while (G__12855__i < G__12855__a.length) {G__12855__a[G__12855__i] = arguments[G__12855__i + 0]; ++G__12855__i;}
  args = new cljs.core.IndexedSeq(G__12855__a,0);
} 
return G__12854__delegate.call(this,args);};
G__12854.cljs$lang$maxFixedArity = 0;
G__12854.cljs$lang$applyTo = (function (arglist__12856){
var args = cljs.core.seq(arglist__12856);
return G__12854__delegate(args);
});
G__12854.cljs$core$IFn$_invoke$arity$variadic = G__12854__delegate;
return G__12854;
})()
;})(latenavfn))
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12857 = (function (meta12858){
this.meta12858 = meta12858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12859,meta12858__$1){
var self__ = this;
var _12859__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12857(meta12858__$1));
});

com.rpl.specter.t_com$rpl$specter12857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12859){
var self__ = this;
var _12859__$1 = this;
return self__.meta12858;
});

com.rpl.specter.t_com$rpl$specter12857.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12857.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter12857.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter12857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12858","meta12858",1895227439,null)], null);
});

com.rpl.specter.t_com$rpl$specter12857.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12857.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12857";

com.rpl.specter.t_com$rpl$specter12857.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12857");
});

com.rpl.specter.__GT_t_com$rpl$specter12857 = (function com$rpl$specter$__GT_t_com$rpl$specter12857(meta12858){
return (new com.rpl.specter.t_com$rpl$specter12857(meta12858));
});

}

return (new com.rpl.specter.t_com$rpl$specter12857(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter12860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12860 = (function (afn,meta12861){
this.afn = afn;
this.meta12861 = meta12861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12862,meta12861__$1){
var self__ = this;
var _12862__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12860(self__.afn,meta12861__$1));
});

com.rpl.specter.t_com$rpl$specter12860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12862){
var self__ = this;
var _12862__$1 = this;
return self__.meta12861;
});

com.rpl.specter.t_com$rpl$specter12860.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12860.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter12860.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter12860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12861","meta12861",-1760438806,null)], null);
});

com.rpl.specter.t_com$rpl$specter12860.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12860.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12860";

com.rpl.specter.t_com$rpl$specter12860.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12860");
});

com.rpl.specter.__GT_t_com$rpl$specter12860 = (function com$rpl$specter$__GT_t_com$rpl$specter12860(afn__$1,meta12861){
return (new com.rpl.specter.t_com$rpl$specter12860(afn__$1,meta12861));
});

}

return (new com.rpl.specter.t_com$rpl$specter12860(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12863 = (function (meta12864){
this.meta12864 = meta12864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12865,meta12864__$1){
var self__ = this;
var _12865__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12863(meta12864__$1));
});

com.rpl.specter.t_com$rpl$specter12863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12865){
var self__ = this;
var _12865__$1 = this;
return self__.meta12864;
});

com.rpl.specter.t_com$rpl$specter12863.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12863.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12863.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12864","meta12864",1434538478,null)], null);
});

com.rpl.specter.t_com$rpl$specter12863.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12863.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12863";

com.rpl.specter.t_com$rpl$specter12863.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12863");
});

com.rpl.specter.__GT_t_com$rpl$specter12863 = (function com$rpl$specter$__GT_t_com$rpl$specter12863(meta12864){
return (new com.rpl.specter.t_com$rpl$specter12863(meta12864));
});

}

return (new com.rpl.specter.t_com$rpl$specter12863(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__9840__auto__,v){
var ret__9841__auto__ = next_fn.call(null,v);
if((ret__9841__auto__ === com.rpl.specter.NONE)){
return curr__9840__auto__;
} else {
return ret__9841__auto__;
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12866 = (function (meta12867){
this.meta12867 = meta12867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12868,meta12867__$1){
var self__ = this;
var _12868__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12866(meta12867__$1));
});

com.rpl.specter.t_com$rpl$specter12866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12868){
var self__ = this;
var _12868__$1 = this;
return self__.meta12867;
});

com.rpl.specter.t_com$rpl$specter12866.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12866.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__11588__auto____$1){
return (function (curr__9840__auto__,v){
var ret__9841__auto__ = next_fn.call(null,v);
if((ret__9841__auto__ === com.rpl.specter.NONE)){
return curr__9840__auto__;
} else {
return ret__9841__auto__;
}
});})(next_fn,this__11588__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12866.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12867","meta12867",1008927537,null)], null);
});

com.rpl.specter.t_com$rpl$specter12866.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12866.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12866";

com.rpl.specter.t_com$rpl$specter12866.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12866");
});

com.rpl.specter.__GT_t_com$rpl$specter12866 = (function com$rpl$specter$__GT_t_com$rpl$specter12866(meta12867){
return (new com.rpl.specter.t_com$rpl$specter12866(meta12867));
});

}

return (new com.rpl.specter.t_com$rpl$specter12866(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12869 = (function (meta12870){
this.meta12870 = meta12870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12871,meta12870__$1){
var self__ = this;
var _12871__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12869(meta12870__$1));
});

com.rpl.specter.t_com$rpl$specter12869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12871){
var self__ = this;
var _12871__$1 = this;
return self__.meta12870;
});

com.rpl.specter.t_com$rpl$specter12869.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12869.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter12869.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter12869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12870","meta12870",220202806,null)], null);
});

com.rpl.specter.t_com$rpl$specter12869.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12869.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12869";

com.rpl.specter.t_com$rpl$specter12869.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12869");
});

com.rpl.specter.__GT_t_com$rpl$specter12869 = (function com$rpl$specter$__GT_t_com$rpl$specter12869(meta12870){
return (new com.rpl.specter.t_com$rpl$specter12869(meta12870));
});

}

return (new com.rpl.specter.t_com$rpl$specter12869(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_fn,end_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12872 = (function (start_fn,end_fn,meta12873){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta12873 = meta12873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12874,meta12873__$1){
var self__ = this;
var _12874__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12872(self__.start_fn,self__.end_fn,meta12873__$1));
});

com.rpl.specter.t_com$rpl$specter12872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12874){
var self__ = this;
var _12874__$1 = this;
return self__.meta12873;
});

com.rpl.specter.t_com$rpl$specter12872.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12872.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter12872.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter12872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta12873","meta12873",-462451747,null)], null);
});

com.rpl.specter.t_com$rpl$specter12872.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12872.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12872";

com.rpl.specter.t_com$rpl$specter12872.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12872");
});

com.rpl.specter.__GT_t_com$rpl$specter12872 = (function com$rpl$specter$__GT_t_com$rpl$specter12872(start_fn__$1,end_fn__$1,meta12873){
return (new com.rpl.specter.t_com$rpl$specter12872(start_fn__$1,end_fn__$1,meta12873));
});

}

return (new com.rpl.specter.t_com$rpl$specter12872(start_fn,end_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if(typeof com.rpl.specter.t_com$rpl$specter12875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12875 = (function (start,end,meta12876){
this.start = start;
this.end = end;
this.meta12876 = meta12876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12877,meta12876__$1){
var self__ = this;
var _12877__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12875(self__.start,self__.end,meta12876__$1));
});

com.rpl.specter.t_com$rpl$specter12875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12877){
var self__ = this;
var _12877__$1 = this;
return self__.meta12876;
});

com.rpl.specter.t_com$rpl$specter12875.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12875.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter12875.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter12875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta12876","meta12876",-1779486242,null)], null);
});

com.rpl.specter.t_com$rpl$specter12875.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12875.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12875";

com.rpl.specter.t_com$rpl$specter12875.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12875");
});

com.rpl.specter.__GT_t_com$rpl$specter12875 = (function com$rpl$specter$__GT_t_com$rpl$specter12875(start__$1,end__$1,meta12876){
return (new com.rpl.specter.t_com$rpl$specter12875(start__$1,end__$1,meta12876));
});

}

return (new com.rpl.specter.t_com$rpl$specter12875(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__9840__auto__,p__12882){
var vec__12883 = p__12882;
var s = cljs.core.nth.call(null,vec__12883,(0),null);
var e = cljs.core.nth.call(null,vec__12883,(1),null);
var ret__9841__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__9841__auto__ === com.rpl.specter.NONE)){
return curr__9840__auto__;
} else {
return ret__9841__auto__;
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if(typeof com.rpl.specter.t_com$rpl$specter12886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12886 = (function (pred,meta12887){
this.pred = pred;
this.meta12887 = meta12887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12888,meta12887__$1){
var self__ = this;
var _12888__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12886(self__.pred,meta12887__$1));
});

com.rpl.specter.t_com$rpl$specter12886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12888){
var self__ = this;
var _12888__$1 = this;
return self__.meta12887;
});

com.rpl.specter.t_com$rpl$specter12886.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12886.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__11588__auto____$1){
return (function (curr__9840__auto__,p__12889){
var vec__12890 = p__12889;
var s = cljs.core.nth.call(null,vec__12890,(0),null);
var e = cljs.core.nth.call(null,vec__12890,(1),null);
var ret__9841__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__9841__auto__ === com.rpl.specter.NONE)){
return curr__9840__auto__;
} else {
return ret__9841__auto__;
}
});})(next_fn,this__11588__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter12886.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta12887","meta12887",2082275676,null)], null);
});

com.rpl.specter.t_com$rpl$specter12886.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12886.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12886";

com.rpl.specter.t_com$rpl$specter12886.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12886");
});

com.rpl.specter.__GT_t_com$rpl$specter12886 = (function com$rpl$specter$__GT_t_com$rpl$specter12886(pred__$1,meta12887){
return (new com.rpl.specter.t_com$rpl$specter12886(pred__$1,meta12887));
});

}

return (new com.rpl.specter.t_com$rpl$specter12886(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12893 = (function (meta12894){
this.meta12894 = meta12894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12895,meta12894__$1){
var self__ = this;
var _12895__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12893(meta12894__$1));
});

com.rpl.specter.t_com$rpl$specter12893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12895){
var self__ = this;
var _12895__$1 = this;
return self__.meta12894;
});

com.rpl.specter.t_com$rpl$specter12893.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12893.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter12893.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter12893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12894","meta12894",-1160215924,null)], null);
});

com.rpl.specter.t_com$rpl$specter12893.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12893.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12893";

com.rpl.specter.t_com$rpl$specter12893.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12893");
});

com.rpl.specter.__GT_t_com$rpl$specter12893 = (function com$rpl$specter$__GT_t_com$rpl$specter12893(meta12894){
return (new com.rpl.specter.t_com$rpl$specter12893(meta12894));
});

}

return (new com.rpl.specter.t_com$rpl$specter12893(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12896 = (function (meta12897){
this.meta12897 = meta12897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12898,meta12897__$1){
var self__ = this;
var _12898__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12896(meta12897__$1));
});

com.rpl.specter.t_com$rpl$specter12896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12898){
var self__ = this;
var _12898__$1 = this;
return self__.meta12897;
});

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter12896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12897","meta12897",-128513739,null)], null);
});

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12896";

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12896");
});

com.rpl.specter.__GT_t_com$rpl$specter12896 = (function com$rpl$specter$__GT_t_com$rpl$specter12896(meta12897){
return (new com.rpl.specter.t_com$rpl$specter12896(meta12897));
});

}

return (new com.rpl.specter.t_com$rpl$specter12896(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if(typeof com.rpl.specter.t_com$rpl$specter12899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12899 = (function (aset,meta12900){
this.aset = aset;
this.meta12900 = meta12900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12901,meta12900__$1){
var self__ = this;
var _12901__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12899(self__.aset,meta12900__$1));
});

com.rpl.specter.t_com$rpl$specter12899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12901){
var self__ = this;
var _12901__$1 = this;
return self__.meta12900;
});

com.rpl.specter.t_com$rpl$specter12899.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12899.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter12899.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter12899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta12900","meta12900",917968256,null)], null);
});

com.rpl.specter.t_com$rpl$specter12899.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12899.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12899";

com.rpl.specter.t_com$rpl$specter12899.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12899");
});

com.rpl.specter.__GT_t_com$rpl$specter12899 = (function com$rpl$specter$__GT_t_com$rpl$specter12899(aset__$1,meta12900){
return (new com.rpl.specter.t_com$rpl$specter12899(aset__$1,meta12900));
});

}

return (new com.rpl.specter.t_com$rpl$specter12899(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if(typeof com.rpl.specter.t_com$rpl$specter12902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12902 = (function (m_keys,meta12903){
this.m_keys = m_keys;
this.meta12903 = meta12903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12904,meta12903__$1){
var self__ = this;
var _12904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12902(self__.m_keys,meta12903__$1));
});

com.rpl.specter.t_com$rpl$specter12902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12904){
var self__ = this;
var _12904__$1 = this;
return self__.meta12903;
});

com.rpl.specter.t_com$rpl$specter12902.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter12902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter12902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta12903","meta12903",-887702216,null)], null);
});

com.rpl.specter.t_com$rpl$specter12902.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12902";

com.rpl.specter.t_com$rpl$specter12902.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12902");
});

com.rpl.specter.__GT_t_com$rpl$specter12902 = (function com$rpl$specter$__GT_t_com$rpl$specter12902(m_keys__$1,meta12903){
return (new com.rpl.specter.t_com$rpl$specter12902(m_keys__$1,meta12903));
});

}

return (new com.rpl.specter.t_com$rpl$specter12902(m_keys,null));
}));


com.rpl.specter.walker_select_STAR_ = (function com$rpl$specter$walker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.walker_transform_STAR_ = (function com$rpl$specter$walker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_until.call(null,afn,next_fn,structure);
});

/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter12905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12905 = (function (afn,meta12906){
this.afn = afn;
this.meta12906 = meta12906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12907,meta12906__$1){
var self__ = this;
var _12907__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12905(self__.afn,meta12906__$1));
});

com.rpl.specter.t_com$rpl$specter12905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12907){
var self__ = this;
var _12907__$1 = this;
return self__.meta12906;
});

com.rpl.specter.t_com$rpl$specter12905.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12905.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12905.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12906","meta12906",-1963612624,null)], null);
});

com.rpl.specter.t_com$rpl$specter12905.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12905.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12905";

com.rpl.specter.t_com$rpl$specter12905.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12905");
});

com.rpl.specter.__GT_t_com$rpl$specter12905 = (function com$rpl$specter$__GT_t_com$rpl$specter12905(afn__$1,meta12906){
return (new com.rpl.specter.t_com$rpl$specter12905(afn__$1,meta12906));
});

}

return (new com.rpl.specter.t_com$rpl$specter12905(afn,null));
}));


com.rpl.specter.codewalker_select_STAR_ = (function com$rpl$specter$codewalker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.codewalker_transform_STAR_ = (function com$rpl$specter$codewalker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
});

/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter12908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12908 = (function (afn,meta12909){
this.afn = afn;
this.meta12909 = meta12909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12910,meta12909__$1){
var self__ = this;
var _12910__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12908(self__.afn,meta12909__$1));
});

com.rpl.specter.t_com$rpl$specter12908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12910){
var self__ = this;
var _12910__$1 = this;
return self__.meta12909;
});

com.rpl.specter.t_com$rpl$specter12908.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12908.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12908.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12909","meta12909",-1983603815,null)], null);
});

com.rpl.specter.t_com$rpl$specter12908.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12908.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12908";

com.rpl.specter.t_com$rpl$specter12908.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12908");
});

com.rpl.specter.__GT_t_com$rpl$specter12908 = (function com$rpl$specter$__GT_t_com$rpl$specter12908(afn__$1,meta12909){
return (new com.rpl.specter.t_com$rpl$specter12908(afn__$1,meta12909));
});

}

return (new com.rpl.specter.t_com$rpl$specter12908(afn,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,(function() { 
var G__12914__delegate = function (path){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12911 = (function (path,late,meta12912){
this.path = path;
this.late = late;
this.meta12912 = meta12912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12913,meta12912__$1){
var self__ = this;
var _12913__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12911(self__.path,self__.late,meta12912__$1));
});

com.rpl.specter.t_com$rpl$specter12911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12913){
var self__ = this;
var _12913__$1 = this;
return self__.meta12912;
});

com.rpl.specter.t_com$rpl$specter12911.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12911.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter12911.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__11588__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__11588__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter12911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12912","meta12912",525734563,null)], null);
});

com.rpl.specter.t_com$rpl$specter12911.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12911.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12911";

com.rpl.specter.t_com$rpl$specter12911.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12911");
});

com.rpl.specter.__GT_t_com$rpl$specter12911 = (function com$rpl$specter$__GT_t_com$rpl$specter12911(path__$1,late__$1,meta12912){
return (new com.rpl.specter.t_com$rpl$specter12911(path__$1,late__$1,meta12912));
});

}

return (new com.rpl.specter.t_com$rpl$specter12911(path,late,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
};
var G__12914 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12915__i = 0, G__12915__a = new Array(arguments.length -  0);
while (G__12915__i < G__12915__a.length) {G__12915__a[G__12915__i] = arguments[G__12915__i + 0]; ++G__12915__i;}
  path = new cljs.core.IndexedSeq(G__12915__a,0);
} 
return G__12914__delegate.call(this,path);};
G__12914.cljs$lang$maxFixedArity = 0;
G__12914.cljs$lang$applyTo = (function (arglist__12916){
var path = cljs.core.seq(arglist__12916);
return G__12914__delegate(path);
});
G__12914.cljs$core$IFn$_invoke$arity$variadic = G__12914__delegate;
return G__12914;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter12917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12917 = (function (afn,meta12918){
this.afn = afn;
this.meta12918 = meta12918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12919,meta12918__$1){
var self__ = this;
var _12919__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12917(self__.afn,meta12918__$1));
});

com.rpl.specter.t_com$rpl$specter12917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12919){
var self__ = this;
var _12919__$1 = this;
return self__.meta12918;
});

com.rpl.specter.t_com$rpl$specter12917.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12917.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12917.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12918","meta12918",1439166059,null)], null);
});

com.rpl.specter.t_com$rpl$specter12917.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12917.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12917";

com.rpl.specter.t_com$rpl$specter12917.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12917");
});

com.rpl.specter.__GT_t_com$rpl$specter12917 = (function com$rpl$specter$__GT_t_com$rpl$specter12917(afn__$1,meta12918){
return (new com.rpl.specter.t_com$rpl$specter12917(afn__$1,meta12918));
});

}

return (new com.rpl.specter.t_com$rpl$specter12917(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12920 = (function (parse_fn,unparse_fn,meta12921){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12922,meta12921__$1){
var self__ = this;
var _12922__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12920(self__.parse_fn,self__.unparse_fn,meta12921__$1));
});

com.rpl.specter.t_com$rpl$specter12920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12922){
var self__ = this;
var _12922__$1 = this;
return self__.meta12921;
});

com.rpl.specter.t_com$rpl$specter12920.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12920.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12920.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter12920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta12921","meta12921",-1158680424,null)], null);
});

com.rpl.specter.t_com$rpl$specter12920.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12920.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12920";

com.rpl.specter.t_com$rpl$specter12920.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12920");
});

com.rpl.specter.__GT_t_com$rpl$specter12920 = (function com$rpl$specter$__GT_t_com$rpl$specter12920(parse_fn__$1,unparse_fn__$1,meta12921){
return (new com.rpl.specter.t_com$rpl$specter12920(parse_fn__$1,unparse_fn__$1,meta12921));
});

}

return (new com.rpl.specter.t_com$rpl$specter12920(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12923 = (function (meta12924){
this.meta12924 = meta12924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12925,meta12924__$1){
var self__ = this;
var _12925__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12923(meta12924__$1));
});

com.rpl.specter.t_com$rpl$specter12923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12925){
var self__ = this;
var _12925__$1 = this;
return self__.meta12924;
});

com.rpl.specter.t_com$rpl$specter12923.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12923.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12923.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter12923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12924","meta12924",-576109674,null)], null);
});

com.rpl.specter.t_com$rpl$specter12923.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12923.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12923";

com.rpl.specter.t_com$rpl$specter12923.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12923");
});

com.rpl.specter.__GT_t_com$rpl$specter12923 = (function com$rpl$specter$__GT_t_com$rpl$specter12923(meta12924){
return (new com.rpl.specter.t_com$rpl$specter12923(meta12924));
});

}

return (new com.rpl.specter.t_com$rpl$specter12923(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__12931__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12928 = (function (path,temp__4655__auto__,late,meta12929){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta12929 = meta12929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12930,meta12929__$1){
var self__ = this;
var _12930__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12928(self__.path,self__.temp__4655__auto__,self__.late,meta12929__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12930){
var self__ = this;
var _12930__$1 = this;
return self__.meta12929;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12928.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12928.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1,temp__4655__auto__){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__11588__auto____$1,temp__4655__auto__){
return (function (p1__12926_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__12926_SHARP_);
});})(next_fn,this__11588__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12928.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1,temp__4655__auto__){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__11588__auto____$1,temp__4655__auto__){
return (function (p1__12927_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__12927_SHARP_);
});})(next_fn,this__11588__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12928.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12929","meta12929",-266623873,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12928.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12928.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12928";

com.rpl.specter.t_com$rpl$specter12928.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12928");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12928 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12928(path__$1,temp__4655__auto____$1,late__$1,meta12929){
return (new com.rpl.specter.t_com$rpl$specter12928(path__$1,temp__4655__auto____$1,late__$1,meta12929));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12928(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
}
};
var G__12931 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12932__i = 0, G__12932__a = new Array(arguments.length -  0);
while (G__12932__i < G__12932__a.length) {G__12932__a[G__12932__i] = arguments[G__12932__i + 0]; ++G__12932__i;}
  path = new cljs.core.IndexedSeq(G__12932__a,0);
} 
return G__12931__delegate.call(this,path);};
G__12931.cljs$lang$maxFixedArity = 0;
G__12931.cljs$lang$applyTo = (function (arglist__12933){
var path = cljs.core.seq(arglist__12933);
return G__12931__delegate(path);
});
G__12931.cljs$core$IFn$_invoke$arity$variadic = G__12931__delegate;
return G__12931;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__12939__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12936 = (function (path,temp__4655__auto__,late,meta12937){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta12937 = meta12937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12938,meta12937__$1){
var self__ = this;
var _12938__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12936(self__.path,self__.temp__4655__auto__,self__.late,meta12937__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12938){
var self__ = this;
var _12938__$1 = this;
return self__.meta12937;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12936.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12936.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1,temp__4655__auto__){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__11588__auto____$1,temp__4655__auto__){
return (function (p1__12934_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__12934_SHARP_);
});})(next_fn,this__11588__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12936.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1,temp__4655__auto__){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__11588__auto____$1,temp__4655__auto__){
return (function (p1__12935_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__12935_SHARP_);
});})(next_fn,this__11588__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12936.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12937","meta12937",-2144400777,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12936.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12936.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12936";

com.rpl.specter.t_com$rpl$specter12936.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12936");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12936 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12936(path__$1,temp__4655__auto____$1,late__$1,meta12937){
return (new com.rpl.specter.t_com$rpl$specter12936(path__$1,temp__4655__auto____$1,late__$1,meta12937));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12936(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
}
};
var G__12939 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12940__i = 0, G__12940__a = new Array(arguments.length -  0);
while (G__12940__i < G__12940__a.length) {G__12940__a[G__12940__i] = arguments[G__12940__i + 0]; ++G__12940__i;}
  path = new cljs.core.IndexedSeq(G__12940__a,0);
} 
return G__12939__delegate.call(this,path);};
G__12939.cljs$lang$maxFixedArity = 0;
G__12939.cljs$lang$applyTo = (function (arglist__12941){
var path = cljs.core.seq(arglist__12941);
return G__12939__delegate(path);
});
G__12939.cljs$core$IFn$_invoke$arity$variadic = G__12939__delegate;
return G__12939;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__12942__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__12942 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12943__i = 0, G__12943__a = new Array(arguments.length -  0);
while (G__12943__i < G__12943__a.length) {G__12943__a[G__12943__i] = arguments[G__12943__i + 0]; ++G__12943__i;}
  path = new cljs.core.IndexedSeq(G__12943__a,0);
} 
return G__12942__delegate.call(this,path);};
G__12942.cljs$lang$maxFixedArity = 0;
G__12942.cljs$lang$applyTo = (function (arglist__12944){
var path = cljs.core.seq(arglist__12944);
return G__12942__delegate(path);
});
G__12942.cljs$core$IFn$_invoke$arity$variadic = G__12942__delegate;
return G__12942;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12945 = (function (path,update_fn,late,late_fn,meta12946){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta12946 = meta12946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12947,meta12946__$1){
var self__ = this;
var _12947__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12945(self__.path,self__.update_fn,self__.late,self__.late_fn,meta12946__$1));
});

com.rpl.specter.t_com$rpl$specter12945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12947){
var self__ = this;
var _12947__$1 = this;
return self__.meta12946;
});

com.rpl.specter.t_com$rpl$specter12945.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12945.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter12945.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter12945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta12946","meta12946",1466192547,null)], null);
});

com.rpl.specter.t_com$rpl$specter12945.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12945.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12945";

com.rpl.specter.t_com$rpl$specter12945.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12945");
});

com.rpl.specter.__GT_t_com$rpl$specter12945 = (function com$rpl$specter$__GT_t_com$rpl$specter12945(path__$1,update_fn__$1,late__$1,late_fn__$1,meta12946){
return (new com.rpl.specter.t_com$rpl$specter12945(path__$1,update_fn__$1,late__$1,late_fn__$1,meta12946));
});

}

return (new com.rpl.specter.t_com$rpl$specter12945(path,update_fn,late,late_fn,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12948 = (function (path,reduce_fn,late,late_fn,meta12949){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta12949 = meta12949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12950,meta12949__$1){
var self__ = this;
var _12950__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12948(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta12949__$1));
});

com.rpl.specter.t_com$rpl$specter12948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12950){
var self__ = this;
var _12950__$1 = this;
return self__.meta12949;
});

com.rpl.specter.t_com$rpl$specter12948.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12948.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter12948.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter12948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta12949","meta12949",-1573856343,null)], null);
});

com.rpl.specter.t_com$rpl$specter12948.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12948.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12948";

com.rpl.specter.t_com$rpl$specter12948.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12948");
});

com.rpl.specter.__GT_t_com$rpl$specter12948 = (function com$rpl$specter$__GT_t_com$rpl$specter12948(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta12949){
return (new com.rpl.specter.t_com$rpl$specter12948(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta12949));
});

}

return (new com.rpl.specter.t_com$rpl$specter12948(path,reduce_fn,late,late_fn,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
});
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if(typeof com.rpl.specter.t_com$rpl$specter12951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12951 = (function (v,meta12952){
this.v = v;
this.meta12952 = meta12952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12953,meta12952__$1){
var self__ = this;
var _12953__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12951(self__.v,meta12952__$1));
});

com.rpl.specter.t_com$rpl$specter12951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12953){
var self__ = this;
var _12953__$1 = this;
return self__.meta12952;
});

com.rpl.specter.t_com$rpl$specter12951.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12951.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter12951.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter12951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta12952","meta12952",-582009987,null)], null);
});

com.rpl.specter.t_com$rpl$specter12951.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12951.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12951";

com.rpl.specter.t_com$rpl$specter12951.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12951");
});

com.rpl.specter.__GT_t_com$rpl$specter12951 = (function com$rpl$specter$__GT_t_com$rpl$specter12951(v__$1,meta12952){
return (new com.rpl.specter.t_com$rpl$specter12951(v__$1,meta12952));
});

}

return (new com.rpl.specter.t_com$rpl$specter12951(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12954 = (function (meta12955){
this.meta12955 = meta12955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12956,meta12955__$1){
var self__ = this;
var _12956__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12954(meta12955__$1));
});

com.rpl.specter.t_com$rpl$specter12954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12956){
var self__ = this;
var _12956__$1 = this;
return self__.meta12955;
});

com.rpl.specter.t_com$rpl$specter12954.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12954.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12954.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11588__auto__,vals__11589__auto__,structure,next_fn__11590__auto__){
var self__ = this;
var this__11588__auto____$1 = this;
var next_fn = ((function (this__11588__auto____$1){
return (function (s__11591__auto__){
return next_fn__11590__auto__.call(null,vals__11589__auto__,s__11591__auto__);
});})(this__11588__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter12954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12955","meta12955",-1463071323,null)], null);
});

com.rpl.specter.t_com$rpl$specter12954.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12954.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12954";

com.rpl.specter.t_com$rpl$specter12954.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12954");
});

com.rpl.specter.__GT_t_com$rpl$specter12954 = (function com$rpl$specter$__GT_t_com$rpl$specter12954(meta12955){
return (new com.rpl.specter.t_com$rpl$specter12954(meta12955));
});

}

return (new com.rpl.specter.t_com$rpl$specter12954(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__12960__delegate = function (path){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12957 = (function (path,late,meta12958){
this.path = path;
this.late = late;
this.meta12958 = meta12958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12959,meta12958__$1){
var self__ = this;
var _12959__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12957(self__.path,self__.late,meta12958__$1));
});

com.rpl.specter.t_com$rpl$specter12957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12959){
var self__ = this;
var _12959__$1 = this;
return self__.meta12958;
});

com.rpl.specter.t_com$rpl$specter12957.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12957.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12957.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12958","meta12958",880860667,null)], null);
});

com.rpl.specter.t_com$rpl$specter12957.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12957.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12957";

com.rpl.specter.t_com$rpl$specter12957.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12957");
});

com.rpl.specter.__GT_t_com$rpl$specter12957 = (function com$rpl$specter$__GT_t_com$rpl$specter12957(path__$1,late__$1,meta12958){
return (new com.rpl.specter.t_com$rpl$specter12957(path__$1,late__$1,meta12958));
});

}

return (new com.rpl.specter.t_com$rpl$specter12957(path,late,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
};
var G__12960 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12961__i = 0, G__12961__a = new Array(arguments.length -  0);
while (G__12961__i < G__12961__a.length) {G__12961__a[G__12961__i] = arguments[G__12961__i + 0]; ++G__12961__i;}
  path = new cljs.core.IndexedSeq(G__12961__a,0);
} 
return G__12960__delegate.call(this,path);};
G__12960.cljs$lang$maxFixedArity = 0;
G__12960.cljs$lang$applyTo = (function (arglist__12962){
var path = cljs.core.seq(arglist__12962);
return G__12960__delegate(path);
});
G__12960.cljs$core$IFn$_invoke$arity$variadic = G__12960__delegate;
return G__12960;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__12966__delegate = function (path){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12963 = (function (path,late,meta12964){
this.path = path;
this.late = late;
this.meta12964 = meta12964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12965,meta12964__$1){
var self__ = this;
var _12965__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12963(self__.path,self__.late,meta12964__$1));
});

com.rpl.specter.t_com$rpl$specter12963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12965){
var self__ = this;
var _12965__$1 = this;
return self__.meta12964;
});

com.rpl.specter.t_com$rpl$specter12963.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12963.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12963.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12964","meta12964",-1994495743,null)], null);
});

com.rpl.specter.t_com$rpl$specter12963.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12963.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12963";

com.rpl.specter.t_com$rpl$specter12963.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12963");
});

com.rpl.specter.__GT_t_com$rpl$specter12963 = (function com$rpl$specter$__GT_t_com$rpl$specter12963(path__$1,late__$1,meta12964){
return (new com.rpl.specter.t_com$rpl$specter12963(path__$1,late__$1,meta12964));
});

}

return (new com.rpl.specter.t_com$rpl$specter12963(path,late,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
};
var G__12966 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12967__i = 0, G__12967__a = new Array(arguments.length -  0);
while (G__12967__i < G__12967__a.length) {G__12967__a[G__12967__i] = arguments[G__12967__i + 0]; ++G__12967__i;}
  path = new cljs.core.IndexedSeq(G__12967__a,0);
} 
return G__12966__delegate.call(this,path);};
G__12966.cljs$lang$maxFixedArity = 0;
G__12966.cljs$lang$applyTo = (function (arglist__12968){
var path = cljs.core.seq(arglist__12968);
return G__12966__delegate(path);
});
G__12966.cljs$core$IFn$_invoke$arity$variadic = G__12966__delegate;
return G__12966;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if(typeof com.rpl.specter.t_com$rpl$specter12969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12969 = (function (val,meta12970){
this.val = val;
this.meta12970 = meta12970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12971,meta12970__$1){
var self__ = this;
var _12971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12969(self__.val,meta12970__$1));
});

com.rpl.specter.t_com$rpl$specter12969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12971){
var self__ = this;
var _12971__$1 = this;
return self__.meta12970;
});

com.rpl.specter.t_com$rpl$specter12969.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter12969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12223__auto__,vals__12224__auto__,structure,next_fn__12225__auto__){
var self__ = this;
var this__12223__auto____$1 = this;
return next_fn__12225__auto__.call(null,cljs.core.conj.call(null,vals__12224__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter12969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta12970","meta12970",1362005525,null)], null);
});

com.rpl.specter.t_com$rpl$specter12969.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12969";

com.rpl.specter.t_com$rpl$specter12969.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12969");
});

com.rpl.specter.__GT_t_com$rpl$specter12969 = (function com$rpl$specter$__GT_t_com$rpl$specter12969(val__$1,meta12970){
return (new com.rpl.specter.t_com$rpl$specter12969(val__$1,meta12970));
});

}

return (new com.rpl.specter.t_com$rpl$specter12969(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12972 = (function (meta12973){
this.meta12973 = meta12973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12974,meta12973__$1){
var self__ = this;
var _12974__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12972(meta12973__$1));
});

com.rpl.specter.t_com$rpl$specter12972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12974){
var self__ = this;
var _12974__$1 = this;
return self__.meta12973;
});

com.rpl.specter.t_com$rpl$specter12972.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12972.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter12972.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter12972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12973","meta12973",-234903380,null)], null);
});

com.rpl.specter.t_com$rpl$specter12972.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12972.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12972";

com.rpl.specter.t_com$rpl$specter12972.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12972");
});

com.rpl.specter.__GT_t_com$rpl$specter12972 = (function com$rpl$specter$__GT_t_com$rpl$specter12972(meta12973){
return (new com.rpl.specter.t_com$rpl$specter12972(meta12973));
});

}

return (new com.rpl.specter.t_com$rpl$specter12972(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__12983 = null;
var G__12983__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__12983__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter12977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12977 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta12978){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta12978 = meta12978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_12979,meta12978__$1){
var self__ = this;
var _12979__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12977(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta12978__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_12979){
var self__ = this;
var _12979__$1 = this;
return self__.meta12978;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12977.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12977.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12977.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12977.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta12978","meta12978",-173704706,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12977.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12977.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12977";

com.rpl.specter.t_com$rpl$specter12977.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12977");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12977 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12977(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta12978){
return (new com.rpl.specter.t_com$rpl$specter12977(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta12978));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12977(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
} else {
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter12980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12980 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta12981){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta12981 = meta12981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12982,meta12981__$1){
var self__ = this;
var _12982__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12980(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta12981__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12982){
var self__ = this;
var _12982__$1 = this;
return self__.meta12981;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12980.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12980.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__12975_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__12975_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12980.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__12976_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__12976_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12980.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta12981","meta12981",-1664757268,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12980.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12980.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12980";

com.rpl.specter.t_com$rpl$specter12980.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12980");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12980 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12980(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta12981){
return (new com.rpl.specter.t_com$rpl$specter12980(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta12981));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12980(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
}
});
G__12983 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__12983__2.call(this,cond_p,then_path);
case 3:
return G__12983__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12983.cljs$core$IFn$_invoke$arity$2 = G__12983__2;
G__12983.cljs$core$IFn$_invoke$arity$3 = G__12983__3;
return G__12983;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,(function() { 
var G__12988__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__12984){
var vec__12985 = p__12984;
var tester = cljs.core.nth.call(null,vec__12985,(0),null);
var apath = cljs.core.nth.call(null,vec__12985,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__12988 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__12989__i = 0, G__12989__a = new Array(arguments.length -  0);
while (G__12989__i < G__12989__a.length) {G__12989__a[G__12989__i] = arguments[G__12989__i + 0]; ++G__12989__i;}
  conds = new cljs.core.IndexedSeq(G__12989__a,0);
} 
return G__12988__delegate.call(this,conds);};
G__12988.cljs$lang$maxFixedArity = 0;
G__12988.cljs$lang$applyTo = (function (arglist__12990){
var conds = cljs.core.seq(arglist__12990);
return G__12988__delegate(conds);
});
G__12988.cljs$core$IFn$_invoke$arity$variadic = G__12988__delegate;
return G__12988;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__12998 = null;
var G__12998__0 = (function (){
return com.rpl.specter.STAY;
});
var G__12998__1 = (function (path){
return path;
});
var G__12998__2 = (function (path1,path2){
var builder__12226__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter12991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12991 = (function (path1,path2,late1,late2,meta12992){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta12992 = meta12992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12993,meta12992__$1){
var self__ = this;
var _12993__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12991(self__.path1,self__.path2,self__.late1,self__.late2,meta12992__$1));
});

com.rpl.specter.t_com$rpl$specter12991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12993){
var self__ = this;
var _12993__$1 = this;
return self__.meta12992;
});

com.rpl.specter.t_com$rpl$specter12991.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12991.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res2)){
return res1;
} else {
return res2;
}
});

com.rpl.specter.t_com$rpl$specter12991.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter12991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta12992","meta12992",-829734649,null)], null);
});

com.rpl.specter.t_com$rpl$specter12991.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12991.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12991";

com.rpl.specter.t_com$rpl$specter12991.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter/t_com$rpl$specter12991");
});

com.rpl.specter.__GT_t_com$rpl$specter12991 = (function com$rpl$specter$__GT_t_com$rpl$specter12991(path1__$1,path2__$1,late1__$1,late2__$1,meta12992){
return (new com.rpl.specter.t_com$rpl$specter12991(path1__$1,path2__$1,late1__$1,late2__$1,meta12992));
});

}

return (new com.rpl.specter.t_com$rpl$specter12991(path1,path2,late1,late2,null));
}));
var curr_params__12227__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12227__auto__)){
return cljs.core.apply.call(null,builder__12226__auto__,curr_params__12227__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12226__auto__,curr_params__12227__auto__);
}
});
var G__12998__3 = (function() { 
var G__12999__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__12999 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__13000__i = 0, G__13000__a = new Array(arguments.length -  2);
while (G__13000__i < G__13000__a.length) {G__13000__a[G__13000__i] = arguments[G__13000__i + 2]; ++G__13000__i;}
  paths = new cljs.core.IndexedSeq(G__13000__a,0);
} 
return G__12999__delegate.call(this,path1,path2,paths);};
G__12999.cljs$lang$maxFixedArity = 2;
G__12999.cljs$lang$applyTo = (function (arglist__13001){
var path1 = cljs.core.first(arglist__13001);
arglist__13001 = cljs.core.next(arglist__13001);
var path2 = cljs.core.first(arglist__13001);
var paths = cljs.core.rest(arglist__13001);
return G__12999__delegate(path1,path2,paths);
});
G__12999.cljs$core$IFn$_invoke$arity$variadic = G__12999__delegate;
return G__12999;
})()
;
G__12998 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__12998__0.call(this);
case 1:
return G__12998__1.call(this,path1);
case 2:
return G__12998__2.call(this,path1,path2);
default:
var G__13002 = null;
if (arguments.length > 2) {
var G__13003__i = 0, G__13003__a = new Array(arguments.length -  2);
while (G__13003__i < G__13003__a.length) {G__13003__a[G__13003__i] = arguments[G__13003__i + 2]; ++G__13003__i;}
G__13002 = new cljs.core.IndexedSeq(G__13003__a,0);
}
return G__12998__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__13002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12998.cljs$lang$maxFixedArity = 2;
G__12998.cljs$lang$applyTo = G__12998__3.cljs$lang$applyTo;
G__12998.cljs$core$IFn$_invoke$arity$0 = G__12998__0;
G__12998.cljs$core$IFn$_invoke$arity$1 = G__12998__1;
G__12998.cljs$core$IFn$_invoke$arity$2 = G__12998__2;
G__12998.cljs$core$IFn$_invoke$arity$variadic = G__12998__3.cljs$core$IFn$_invoke$arity$variadic;
return G__12998;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__13004__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__13004 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__13005__i = 0, G__13005__a = new Array(arguments.length -  0);
while (G__13005__i < G__13005__a.length) {G__13005__a[G__13005__i] = arguments[G__13005__i + 0]; ++G__13005__i;}
  path = new cljs.core.IndexedSeq(G__13005__a,0);
} 
return G__13004__delegate.call(this,path);};
G__13004.cljs$lang$maxFixedArity = 0;
G__13004.cljs$lang$applyTo = (function (arglist__13006){
var path = cljs.core.seq(arglist__13006);
return G__13004__delegate(path);
});
G__13004.cljs$core$IFn$_invoke$arity$variadic = G__13004__delegate;
return G__13004;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__13007__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__13007 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__13008__i = 0, G__13008__a = new Array(arguments.length -  0);
while (G__13008__i < G__13008__a.length) {G__13008__a[G__13008__i] = arguments[G__13008__i + 0]; ++G__13008__i;}
  path = new cljs.core.IndexedSeq(G__13008__a,0);
} 
return G__13007__delegate.call(this,path);};
G__13007.cljs$lang$maxFixedArity = 0;
G__13007.cljs$lang$applyTo = (function (arglist__13009){
var path = cljs.core.seq(arglist__13009);
return G__13007__delegate(path);
});
G__13007.cljs$core$IFn$_invoke$arity$variadic = G__13007__delegate;
return G__13007;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1485243253996
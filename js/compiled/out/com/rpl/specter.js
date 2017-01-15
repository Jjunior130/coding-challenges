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
var args__7501__auto__ = [];
var len__7494__auto___12851 = arguments.length;
var i__7495__auto___12852 = (0);
while(true){
if((i__7495__auto___12852 < len__7494__auto___12851)){
args__7501__auto__.push((arguments[i__7495__auto___12852]));

var G__12853 = (i__7495__auto___12852 + (1));
i__7495__auto___12852 = G__12853;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((0) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__7502__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq12850){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12850));
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
var args__7501__auto__ = [];
var len__7494__auto___12861 = arguments.length;
var i__7495__auto___12862 = (0);
while(true){
if((i__7495__auto___12862 < len__7494__auto___12861)){
args__7501__auto__.push((arguments[i__7495__auto___12862]));

var G__12863 = (i__7495__auto___12862 + (1));
i__7495__auto___12862 = G__12863;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((3) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7502__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__12858){
var map__12859 = p__12858;
var map__12859__$1 = ((((!((map__12859 == null)))?((((map__12859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12859):map__12859);
var merge_fn = cljs.core.get.call(null,map__12859__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq12854){
var G__12855 = cljs.core.first.call(null,seq12854);
var seq12854__$1 = cljs.core.next.call(null,seq12854);
var G__12856 = cljs.core.first.call(null,seq12854__$1);
var seq12854__$2 = cljs.core.next.call(null,seq12854__$1);
var G__12857 = cljs.core.first.call(null,seq12854__$2);
var seq12854__$3 = cljs.core.next.call(null,seq12854__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__12855,G__12856,G__12857,seq12854__$3);
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
var G__12864__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__12864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12865__i = 0, G__12865__a = new Array(arguments.length -  0);
while (G__12865__i < G__12865__a.length) {G__12865__a[G__12865__i] = arguments[G__12865__i + 0]; ++G__12865__i;}
  args = new cljs.core.IndexedSeq(G__12865__a,0);
} 
return G__12864__delegate.call(this,args);};
G__12864.cljs$lang$maxFixedArity = 0;
G__12864.cljs$lang$applyTo = (function (arglist__12866){
var args = cljs.core.seq(arglist__12866);
return G__12864__delegate(args);
});
G__12864.cljs$core$IFn$_invoke$arity$variadic = G__12864__delegate;
return G__12864;
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
if(typeof com.rpl.specter.t_com$rpl$specter12867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12867 = (function (meta12868){
this.meta12868 = meta12868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12869,meta12868__$1){
var self__ = this;
var _12869__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12867(meta12868__$1));
});

com.rpl.specter.t_com$rpl$specter12867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12869){
var self__ = this;
var _12869__$1 = this;
return self__.meta12868;
});

com.rpl.specter.t_com$rpl$specter12867.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12867.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter12867.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter12867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12868","meta12868",759689623,null)], null);
});

com.rpl.specter.t_com$rpl$specter12867.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12867.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12867";

com.rpl.specter.t_com$rpl$specter12867.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12867");
});

com.rpl.specter.__GT_t_com$rpl$specter12867 = (function com$rpl$specter$__GT_t_com$rpl$specter12867(meta12868){
return (new com.rpl.specter.t_com$rpl$specter12867(meta12868));
});

}

return (new com.rpl.specter.t_com$rpl$specter12867(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12870 = (function (afn,meta12871){
this.afn = afn;
this.meta12871 = meta12871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12872,meta12871__$1){
var self__ = this;
var _12872__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12870(self__.afn,meta12871__$1));
});

com.rpl.specter.t_com$rpl$specter12870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12872){
var self__ = this;
var _12872__$1 = this;
return self__.meta12871;
});

com.rpl.specter.t_com$rpl$specter12870.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12870.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter12870.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter12870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12871","meta12871",665662674,null)], null);
});

com.rpl.specter.t_com$rpl$specter12870.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12870.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12870";

com.rpl.specter.t_com$rpl$specter12870.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12870");
});

com.rpl.specter.__GT_t_com$rpl$specter12870 = (function com$rpl$specter$__GT_t_com$rpl$specter12870(afn__$1,meta12871){
return (new com.rpl.specter.t_com$rpl$specter12870(afn__$1,meta12871));
});

}

return (new com.rpl.specter.t_com$rpl$specter12870(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12873 = (function (meta12874){
this.meta12874 = meta12874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12875,meta12874__$1){
var self__ = this;
var _12875__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12873(meta12874__$1));
});

com.rpl.specter.t_com$rpl$specter12873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12875){
var self__ = this;
var _12875__$1 = this;
return self__.meta12874;
});

com.rpl.specter.t_com$rpl$specter12873.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12873.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12873.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12874","meta12874",-1631404961,null)], null);
});

com.rpl.specter.t_com$rpl$specter12873.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12873.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12873";

com.rpl.specter.t_com$rpl$specter12873.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12873");
});

com.rpl.specter.__GT_t_com$rpl$specter12873 = (function com$rpl$specter$__GT_t_com$rpl$specter12873(meta12874){
return (new com.rpl.specter.t_com$rpl$specter12873(meta12874));
});

}

return (new com.rpl.specter.t_com$rpl$specter12873(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__9850__auto__,v){
var ret__9851__auto__ = next_fn.call(null,v);
if((ret__9851__auto__ === com.rpl.specter.NONE)){
return curr__9850__auto__;
} else {
return ret__9851__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter12876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12876 = (function (meta12877){
this.meta12877 = meta12877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12878,meta12877__$1){
var self__ = this;
var _12878__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12876(meta12877__$1));
});

com.rpl.specter.t_com$rpl$specter12876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12878){
var self__ = this;
var _12878__$1 = this;
return self__.meta12877;
});

com.rpl.specter.t_com$rpl$specter12876.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12876.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__11598__auto____$1){
return (function (curr__9850__auto__,v){
var ret__9851__auto__ = next_fn.call(null,v);
if((ret__9851__auto__ === com.rpl.specter.NONE)){
return curr__9850__auto__;
} else {
return ret__9851__auto__;
}
});})(next_fn,this__11598__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12876.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12877","meta12877",663548965,null)], null);
});

com.rpl.specter.t_com$rpl$specter12876.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12876.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12876";

com.rpl.specter.t_com$rpl$specter12876.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12876");
});

com.rpl.specter.__GT_t_com$rpl$specter12876 = (function com$rpl$specter$__GT_t_com$rpl$specter12876(meta12877){
return (new com.rpl.specter.t_com$rpl$specter12876(meta12877));
});

}

return (new com.rpl.specter.t_com$rpl$specter12876(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12879 = (function (meta12880){
this.meta12880 = meta12880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12881,meta12880__$1){
var self__ = this;
var _12881__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12879(meta12880__$1));
});

com.rpl.specter.t_com$rpl$specter12879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12881){
var self__ = this;
var _12881__$1 = this;
return self__.meta12880;
});

com.rpl.specter.t_com$rpl$specter12879.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12879.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter12879.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter12879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12880","meta12880",-1341886757,null)], null);
});

com.rpl.specter.t_com$rpl$specter12879.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12879.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12879";

com.rpl.specter.t_com$rpl$specter12879.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12879");
});

com.rpl.specter.__GT_t_com$rpl$specter12879 = (function com$rpl$specter$__GT_t_com$rpl$specter12879(meta12880){
return (new com.rpl.specter.t_com$rpl$specter12879(meta12880));
});

}

return (new com.rpl.specter.t_com$rpl$specter12879(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12882 = (function (start_fn,end_fn,meta12883){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta12883 = meta12883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12884,meta12883__$1){
var self__ = this;
var _12884__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12882(self__.start_fn,self__.end_fn,meta12883__$1));
});

com.rpl.specter.t_com$rpl$specter12882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12884){
var self__ = this;
var _12884__$1 = this;
return self__.meta12883;
});

com.rpl.specter.t_com$rpl$specter12882.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12882.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter12882.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter12882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta12883","meta12883",-1136985665,null)], null);
});

com.rpl.specter.t_com$rpl$specter12882.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12882.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12882";

com.rpl.specter.t_com$rpl$specter12882.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12882");
});

com.rpl.specter.__GT_t_com$rpl$specter12882 = (function com$rpl$specter$__GT_t_com$rpl$specter12882(start_fn__$1,end_fn__$1,meta12883){
return (new com.rpl.specter.t_com$rpl$specter12882(start_fn__$1,end_fn__$1,meta12883));
});

}

return (new com.rpl.specter.t_com$rpl$specter12882(start_fn,end_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12885 = (function (start,end,meta12886){
this.start = start;
this.end = end;
this.meta12886 = meta12886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12887,meta12886__$1){
var self__ = this;
var _12887__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12885(self__.start,self__.end,meta12886__$1));
});

com.rpl.specter.t_com$rpl$specter12885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12887){
var self__ = this;
var _12887__$1 = this;
return self__.meta12886;
});

com.rpl.specter.t_com$rpl$specter12885.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12885.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter12885.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter12885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta12886","meta12886",-60525166,null)], null);
});

com.rpl.specter.t_com$rpl$specter12885.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12885.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12885";

com.rpl.specter.t_com$rpl$specter12885.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12885");
});

com.rpl.specter.__GT_t_com$rpl$specter12885 = (function com$rpl$specter$__GT_t_com$rpl$specter12885(start__$1,end__$1,meta12886){
return (new com.rpl.specter.t_com$rpl$specter12885(start__$1,end__$1,meta12886));
});

}

return (new com.rpl.specter.t_com$rpl$specter12885(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__9850__auto__,p__12892){
var vec__12893 = p__12892;
var s = cljs.core.nth.call(null,vec__12893,(0),null);
var e = cljs.core.nth.call(null,vec__12893,(1),null);
var ret__9851__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__9851__auto__ === com.rpl.specter.NONE)){
return curr__9850__auto__;
} else {
return ret__9851__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter12896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12896 = (function (pred,meta12897){
this.pred = pred;
this.meta12897 = meta12897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12898,meta12897__$1){
var self__ = this;
var _12898__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12896(self__.pred,meta12897__$1));
});

com.rpl.specter.t_com$rpl$specter12896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12898){
var self__ = this;
var _12898__$1 = this;
return self__.meta12897;
});

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__11598__auto____$1){
return (function (curr__9850__auto__,p__12899){
var vec__12900 = p__12899;
var s = cljs.core.nth.call(null,vec__12900,(0),null);
var e = cljs.core.nth.call(null,vec__12900,(1),null);
var ret__9851__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__9851__auto__ === com.rpl.specter.NONE)){
return curr__9850__auto__;
} else {
return ret__9851__auto__;
}
});})(next_fn,this__11598__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter12896.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter12896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta12897","meta12897",-128513739,null)], null);
});

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12896";

com.rpl.specter.t_com$rpl$specter12896.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12896");
});

com.rpl.specter.__GT_t_com$rpl$specter12896 = (function com$rpl$specter$__GT_t_com$rpl$specter12896(pred__$1,meta12897){
return (new com.rpl.specter.t_com$rpl$specter12896(pred__$1,meta12897));
});

}

return (new com.rpl.specter.t_com$rpl$specter12896(pred,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12903 = (function (meta12904){
this.meta12904 = meta12904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12905,meta12904__$1){
var self__ = this;
var _12905__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12903(meta12904__$1));
});

com.rpl.specter.t_com$rpl$specter12903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12905){
var self__ = this;
var _12905__$1 = this;
return self__.meta12904;
});

com.rpl.specter.t_com$rpl$specter12903.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12903.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter12903.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter12903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12904","meta12904",-886041067,null)], null);
});

com.rpl.specter.t_com$rpl$specter12903.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12903.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12903";

com.rpl.specter.t_com$rpl$specter12903.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12903");
});

com.rpl.specter.__GT_t_com$rpl$specter12903 = (function com$rpl$specter$__GT_t_com$rpl$specter12903(meta12904){
return (new com.rpl.specter.t_com$rpl$specter12903(meta12904));
});

}

return (new com.rpl.specter.t_com$rpl$specter12903(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12906 = (function (meta12907){
this.meta12907 = meta12907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12908,meta12907__$1){
var self__ = this;
var _12908__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12906(meta12907__$1));
});

com.rpl.specter.t_com$rpl$specter12906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12908){
var self__ = this;
var _12908__$1 = this;
return self__.meta12907;
});

com.rpl.specter.t_com$rpl$specter12906.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12906.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter12906.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter12906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12907","meta12907",1243157046,null)], null);
});

com.rpl.specter.t_com$rpl$specter12906.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12906.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12906";

com.rpl.specter.t_com$rpl$specter12906.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12906");
});

com.rpl.specter.__GT_t_com$rpl$specter12906 = (function com$rpl$specter$__GT_t_com$rpl$specter12906(meta12907){
return (new com.rpl.specter.t_com$rpl$specter12906(meta12907));
});

}

return (new com.rpl.specter.t_com$rpl$specter12906(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12909 = (function (aset,meta12910){
this.aset = aset;
this.meta12910 = meta12910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12911,meta12910__$1){
var self__ = this;
var _12911__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12909(self__.aset,meta12910__$1));
});

com.rpl.specter.t_com$rpl$specter12909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12911){
var self__ = this;
var _12911__$1 = this;
return self__.meta12910;
});

com.rpl.specter.t_com$rpl$specter12909.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12909.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter12909.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter12909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta12910","meta12910",-432155189,null)], null);
});

com.rpl.specter.t_com$rpl$specter12909.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12909.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12909";

com.rpl.specter.t_com$rpl$specter12909.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12909");
});

com.rpl.specter.__GT_t_com$rpl$specter12909 = (function com$rpl$specter$__GT_t_com$rpl$specter12909(aset__$1,meta12910){
return (new com.rpl.specter.t_com$rpl$specter12909(aset__$1,meta12910));
});

}

return (new com.rpl.specter.t_com$rpl$specter12909(aset,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12912 = (function (m_keys,meta12913){
this.m_keys = m_keys;
this.meta12913 = meta12913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12914,meta12913__$1){
var self__ = this;
var _12914__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12912(self__.m_keys,meta12913__$1));
});

com.rpl.specter.t_com$rpl$specter12912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12914){
var self__ = this;
var _12914__$1 = this;
return self__.meta12913;
});

com.rpl.specter.t_com$rpl$specter12912.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12912.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter12912.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter12912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta12913","meta12913",-906228401,null)], null);
});

com.rpl.specter.t_com$rpl$specter12912.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12912.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12912";

com.rpl.specter.t_com$rpl$specter12912.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12912");
});

com.rpl.specter.__GT_t_com$rpl$specter12912 = (function com$rpl$specter$__GT_t_com$rpl$specter12912(m_keys__$1,meta12913){
return (new com.rpl.specter.t_com$rpl$specter12912(m_keys__$1,meta12913));
});

}

return (new com.rpl.specter.t_com$rpl$specter12912(m_keys,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12915 = (function (afn,meta12916){
this.afn = afn;
this.meta12916 = meta12916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12917,meta12916__$1){
var self__ = this;
var _12917__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12915(self__.afn,meta12916__$1));
});

com.rpl.specter.t_com$rpl$specter12915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12917){
var self__ = this;
var _12917__$1 = this;
return self__.meta12916;
});

com.rpl.specter.t_com$rpl$specter12915.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12915.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12915.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12916","meta12916",1315520718,null)], null);
});

com.rpl.specter.t_com$rpl$specter12915.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12915.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12915";

com.rpl.specter.t_com$rpl$specter12915.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12915");
});

com.rpl.specter.__GT_t_com$rpl$specter12915 = (function com$rpl$specter$__GT_t_com$rpl$specter12915(afn__$1,meta12916){
return (new com.rpl.specter.t_com$rpl$specter12915(afn__$1,meta12916));
});

}

return (new com.rpl.specter.t_com$rpl$specter12915(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12918 = (function (afn,meta12919){
this.afn = afn;
this.meta12919 = meta12919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12920,meta12919__$1){
var self__ = this;
var _12920__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12918(self__.afn,meta12919__$1));
});

com.rpl.specter.t_com$rpl$specter12918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12920){
var self__ = this;
var _12920__$1 = this;
return self__.meta12919;
});

com.rpl.specter.t_com$rpl$specter12918.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12918.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12918.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter12918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12919","meta12919",1757239053,null)], null);
});

com.rpl.specter.t_com$rpl$specter12918.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12918.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12918";

com.rpl.specter.t_com$rpl$specter12918.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12918");
});

com.rpl.specter.__GT_t_com$rpl$specter12918 = (function com$rpl$specter$__GT_t_com$rpl$specter12918(afn__$1,meta12919){
return (new com.rpl.specter.t_com$rpl$specter12918(afn__$1,meta12919));
});

}

return (new com.rpl.specter.t_com$rpl$specter12918(afn,null));
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
var G__12924__delegate = function (path){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12921 = (function (path,late,meta12922){
this.path = path;
this.late = late;
this.meta12922 = meta12922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12923,meta12922__$1){
var self__ = this;
var _12923__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12921(self__.path,self__.late,meta12922__$1));
});

com.rpl.specter.t_com$rpl$specter12921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12923){
var self__ = this;
var _12923__$1 = this;
return self__.meta12922;
});

com.rpl.specter.t_com$rpl$specter12921.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12921.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter12921.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__11598__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__11598__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter12921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12922","meta12922",-854430492,null)], null);
});

com.rpl.specter.t_com$rpl$specter12921.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12921.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12921";

com.rpl.specter.t_com$rpl$specter12921.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12921");
});

com.rpl.specter.__GT_t_com$rpl$specter12921 = (function com$rpl$specter$__GT_t_com$rpl$specter12921(path__$1,late__$1,meta12922){
return (new com.rpl.specter.t_com$rpl$specter12921(path__$1,late__$1,meta12922));
});

}

return (new com.rpl.specter.t_com$rpl$specter12921(path,late,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
};
var G__12924 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12925__i = 0, G__12925__a = new Array(arguments.length -  0);
while (G__12925__i < G__12925__a.length) {G__12925__a[G__12925__i] = arguments[G__12925__i + 0]; ++G__12925__i;}
  path = new cljs.core.IndexedSeq(G__12925__a,0);
} 
return G__12924__delegate.call(this,path);};
G__12924.cljs$lang$maxFixedArity = 0;
G__12924.cljs$lang$applyTo = (function (arglist__12926){
var path = cljs.core.seq(arglist__12926);
return G__12924__delegate(path);
});
G__12924.cljs$core$IFn$_invoke$arity$variadic = G__12924__delegate;
return G__12924;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter12927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12927 = (function (afn,meta12928){
this.afn = afn;
this.meta12928 = meta12928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12929,meta12928__$1){
var self__ = this;
var _12929__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12927(self__.afn,meta12928__$1));
});

com.rpl.specter.t_com$rpl$specter12927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12929){
var self__ = this;
var _12929__$1 = this;
return self__.meta12928;
});

com.rpl.specter.t_com$rpl$specter12927.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12927.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12927.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12928","meta12928",-1054017104,null)], null);
});

com.rpl.specter.t_com$rpl$specter12927.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12927.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12927";

com.rpl.specter.t_com$rpl$specter12927.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12927");
});

com.rpl.specter.__GT_t_com$rpl$specter12927 = (function com$rpl$specter$__GT_t_com$rpl$specter12927(afn__$1,meta12928){
return (new com.rpl.specter.t_com$rpl$specter12927(afn__$1,meta12928));
});

}

return (new com.rpl.specter.t_com$rpl$specter12927(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12930 = (function (parse_fn,unparse_fn,meta12931){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta12931 = meta12931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12932,meta12931__$1){
var self__ = this;
var _12932__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12930(self__.parse_fn,self__.unparse_fn,meta12931__$1));
});

com.rpl.specter.t_com$rpl$specter12930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12932){
var self__ = this;
var _12932__$1 = this;
return self__.meta12931;
});

com.rpl.specter.t_com$rpl$specter12930.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12930.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12930.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter12930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta12931","meta12931",1097153815,null)], null);
});

com.rpl.specter.t_com$rpl$specter12930.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12930.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12930";

com.rpl.specter.t_com$rpl$specter12930.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12930");
});

com.rpl.specter.__GT_t_com$rpl$specter12930 = (function com$rpl$specter$__GT_t_com$rpl$specter12930(parse_fn__$1,unparse_fn__$1,meta12931){
return (new com.rpl.specter.t_com$rpl$specter12930(parse_fn__$1,unparse_fn__$1,meta12931));
});

}

return (new com.rpl.specter.t_com$rpl$specter12930(parse_fn,unparse_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12933 = (function (meta12934){
this.meta12934 = meta12934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12935,meta12934__$1){
var self__ = this;
var _12935__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12933(meta12934__$1));
});

com.rpl.specter.t_com$rpl$specter12933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12935){
var self__ = this;
var _12935__$1 = this;
return self__.meta12934;
});

com.rpl.specter.t_com$rpl$specter12933.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12933.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12933.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter12933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12934","meta12934",-279000484,null)], null);
});

com.rpl.specter.t_com$rpl$specter12933.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12933.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12933";

com.rpl.specter.t_com$rpl$specter12933.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12933");
});

com.rpl.specter.__GT_t_com$rpl$specter12933 = (function com$rpl$specter$__GT_t_com$rpl$specter12933(meta12934){
return (new com.rpl.specter.t_com$rpl$specter12933(meta12934));
});

}

return (new com.rpl.specter.t_com$rpl$specter12933(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__12941__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12938 = (function (path,temp__4655__auto__,late,meta12939){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta12939 = meta12939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12940,meta12939__$1){
var self__ = this;
var _12940__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12938(self__.path,self__.temp__4655__auto__,self__.late,meta12939__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12940){
var self__ = this;
var _12940__$1 = this;
return self__.meta12939;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12938.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12938.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1,temp__4655__auto__){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__11598__auto____$1,temp__4655__auto__){
return (function (p1__12936_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__12936_SHARP_);
});})(next_fn,this__11598__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12938.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1,temp__4655__auto__){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__11598__auto____$1,temp__4655__auto__){
return (function (p1__12937_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__12937_SHARP_);
});})(next_fn,this__11598__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12938.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12939","meta12939",-1202666778,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12938.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12938.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12938";

com.rpl.specter.t_com$rpl$specter12938.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12938");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12938 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12938(path__$1,temp__4655__auto____$1,late__$1,meta12939){
return (new com.rpl.specter.t_com$rpl$specter12938(path__$1,temp__4655__auto____$1,late__$1,meta12939));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12938(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
}
};
var G__12941 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12942__i = 0, G__12942__a = new Array(arguments.length -  0);
while (G__12942__i < G__12942__a.length) {G__12942__a[G__12942__i] = arguments[G__12942__i + 0]; ++G__12942__i;}
  path = new cljs.core.IndexedSeq(G__12942__a,0);
} 
return G__12941__delegate.call(this,path);};
G__12941.cljs$lang$maxFixedArity = 0;
G__12941.cljs$lang$applyTo = (function (arglist__12943){
var path = cljs.core.seq(arglist__12943);
return G__12941__delegate(path);
});
G__12941.cljs$core$IFn$_invoke$arity$variadic = G__12941__delegate;
return G__12941;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__12949__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12946 = (function (path,temp__4655__auto__,late,meta12947){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta12947 = meta12947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12948,meta12947__$1){
var self__ = this;
var _12948__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12946(self__.path,self__.temp__4655__auto__,self__.late,meta12947__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12948){
var self__ = this;
var _12948__$1 = this;
return self__.meta12947;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12946.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12946.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1,temp__4655__auto__){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__11598__auto____$1,temp__4655__auto__){
return (function (p1__12944_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__12944_SHARP_);
});})(next_fn,this__11598__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12946.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1,temp__4655__auto__){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__11598__auto____$1,temp__4655__auto__){
return (function (p1__12945_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__12945_SHARP_);
});})(next_fn,this__11598__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12946.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12947","meta12947",1038307721,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12946.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12946.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12946";

com.rpl.specter.t_com$rpl$specter12946.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12946");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12946 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12946(path__$1,temp__4655__auto____$1,late__$1,meta12947){
return (new com.rpl.specter.t_com$rpl$specter12946(path__$1,temp__4655__auto____$1,late__$1,meta12947));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12946(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
}
};
var G__12949 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12950__i = 0, G__12950__a = new Array(arguments.length -  0);
while (G__12950__i < G__12950__a.length) {G__12950__a[G__12950__i] = arguments[G__12950__i + 0]; ++G__12950__i;}
  path = new cljs.core.IndexedSeq(G__12950__a,0);
} 
return G__12949__delegate.call(this,path);};
G__12949.cljs$lang$maxFixedArity = 0;
G__12949.cljs$lang$applyTo = (function (arglist__12951){
var path = cljs.core.seq(arglist__12951);
return G__12949__delegate(path);
});
G__12949.cljs$core$IFn$_invoke$arity$variadic = G__12949__delegate;
return G__12949;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__12952__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__12952 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12953__i = 0, G__12953__a = new Array(arguments.length -  0);
while (G__12953__i < G__12953__a.length) {G__12953__a[G__12953__i] = arguments[G__12953__i + 0]; ++G__12953__i;}
  path = new cljs.core.IndexedSeq(G__12953__a,0);
} 
return G__12952__delegate.call(this,path);};
G__12952.cljs$lang$maxFixedArity = 0;
G__12952.cljs$lang$applyTo = (function (arglist__12954){
var path = cljs.core.seq(arglist__12954);
return G__12952__delegate(path);
});
G__12952.cljs$core$IFn$_invoke$arity$variadic = G__12952__delegate;
return G__12952;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12955 = (function (path,update_fn,late,late_fn,meta12956){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta12956 = meta12956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12957,meta12956__$1){
var self__ = this;
var _12957__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12955(self__.path,self__.update_fn,self__.late,self__.late_fn,meta12956__$1));
});

com.rpl.specter.t_com$rpl$specter12955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12957){
var self__ = this;
var _12957__$1 = this;
return self__.meta12956;
});

com.rpl.specter.t_com$rpl$specter12955.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12955.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter12955.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter12955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta12956","meta12956",-21104698,null)], null);
});

com.rpl.specter.t_com$rpl$specter12955.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12955.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12955";

com.rpl.specter.t_com$rpl$specter12955.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12955");
});

com.rpl.specter.__GT_t_com$rpl$specter12955 = (function com$rpl$specter$__GT_t_com$rpl$specter12955(path__$1,update_fn__$1,late__$1,late_fn__$1,meta12956){
return (new com.rpl.specter.t_com$rpl$specter12955(path__$1,update_fn__$1,late__$1,late_fn__$1,meta12956));
});

}

return (new com.rpl.specter.t_com$rpl$specter12955(path,update_fn,late,late_fn,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter12958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12958 = (function (path,reduce_fn,late,late_fn,meta12959){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta12959 = meta12959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12960,meta12959__$1){
var self__ = this;
var _12960__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12958(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta12959__$1));
});

com.rpl.specter.t_com$rpl$specter12958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12960){
var self__ = this;
var _12960__$1 = this;
return self__.meta12959;
});

com.rpl.specter.t_com$rpl$specter12958.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12958.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter12958.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter12958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta12959","meta12959",445025957,null)], null);
});

com.rpl.specter.t_com$rpl$specter12958.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12958.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12958";

com.rpl.specter.t_com$rpl$specter12958.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12958");
});

com.rpl.specter.__GT_t_com$rpl$specter12958 = (function com$rpl$specter$__GT_t_com$rpl$specter12958(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta12959){
return (new com.rpl.specter.t_com$rpl$specter12958(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta12959));
});

}

return (new com.rpl.specter.t_com$rpl$specter12958(path,reduce_fn,late,late_fn,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
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
if(typeof com.rpl.specter.t_com$rpl$specter12961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12961 = (function (v,meta12962){
this.v = v;
this.meta12962 = meta12962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12963,meta12962__$1){
var self__ = this;
var _12963__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12961(self__.v,meta12962__$1));
});

com.rpl.specter.t_com$rpl$specter12961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12963){
var self__ = this;
var _12963__$1 = this;
return self__.meta12962;
});

com.rpl.specter.t_com$rpl$specter12961.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12961.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter12961.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter12961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta12962","meta12962",-52013938,null)], null);
});

com.rpl.specter.t_com$rpl$specter12961.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12961.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12961";

com.rpl.specter.t_com$rpl$specter12961.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12961");
});

com.rpl.specter.__GT_t_com$rpl$specter12961 = (function com$rpl$specter$__GT_t_com$rpl$specter12961(v__$1,meta12962){
return (new com.rpl.specter.t_com$rpl$specter12961(v__$1,meta12962));
});

}

return (new com.rpl.specter.t_com$rpl$specter12961(v,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter12964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12964 = (function (meta12965){
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12966,meta12965__$1){
var self__ = this;
var _12966__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12964(meta12965__$1));
});

com.rpl.specter.t_com$rpl$specter12964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12966){
var self__ = this;
var _12966__$1 = this;
return self__.meta12965;
});

com.rpl.specter.t_com$rpl$specter12964.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12964.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter12964.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__11598__auto__,vals__11599__auto__,structure,next_fn__11600__auto__){
var self__ = this;
var this__11598__auto____$1 = this;
var next_fn = ((function (this__11598__auto____$1){
return (function (s__11601__auto__){
return next_fn__11600__auto__.call(null,vals__11599__auto__,s__11601__auto__);
});})(this__11598__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter12964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12965","meta12965",-265834439,null)], null);
});

com.rpl.specter.t_com$rpl$specter12964.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12964.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12964";

com.rpl.specter.t_com$rpl$specter12964.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12964");
});

com.rpl.specter.__GT_t_com$rpl$specter12964 = (function com$rpl$specter$__GT_t_com$rpl$specter12964(meta12965){
return (new com.rpl.specter.t_com$rpl$specter12964(meta12965));
});

}

return (new com.rpl.specter.t_com$rpl$specter12964(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__12970__delegate = function (path){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12967 = (function (path,late,meta12968){
this.path = path;
this.late = late;
this.meta12968 = meta12968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12969,meta12968__$1){
var self__ = this;
var _12969__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12967(self__.path,self__.late,meta12968__$1));
});

com.rpl.specter.t_com$rpl$specter12967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12969){
var self__ = this;
var _12969__$1 = this;
return self__.meta12968;
});

com.rpl.specter.t_com$rpl$specter12967.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12967.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12967.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12968","meta12968",-1245611301,null)], null);
});

com.rpl.specter.t_com$rpl$specter12967.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12967.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12967";

com.rpl.specter.t_com$rpl$specter12967.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12967");
});

com.rpl.specter.__GT_t_com$rpl$specter12967 = (function com$rpl$specter$__GT_t_com$rpl$specter12967(path__$1,late__$1,meta12968){
return (new com.rpl.specter.t_com$rpl$specter12967(path__$1,late__$1,meta12968));
});

}

return (new com.rpl.specter.t_com$rpl$specter12967(path,late,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
};
var G__12970 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12971__i = 0, G__12971__a = new Array(arguments.length -  0);
while (G__12971__i < G__12971__a.length) {G__12971__a[G__12971__i] = arguments[G__12971__i + 0]; ++G__12971__i;}
  path = new cljs.core.IndexedSeq(G__12971__a,0);
} 
return G__12970__delegate.call(this,path);};
G__12970.cljs$lang$maxFixedArity = 0;
G__12970.cljs$lang$applyTo = (function (arglist__12972){
var path = cljs.core.seq(arglist__12972);
return G__12970__delegate(path);
});
G__12970.cljs$core$IFn$_invoke$arity$variadic = G__12970__delegate;
return G__12970;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__12976__delegate = function (path){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter12973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12973 = (function (path,late,meta12974){
this.path = path;
this.late = late;
this.meta12974 = meta12974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12975,meta12974__$1){
var self__ = this;
var _12975__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12973(self__.path,self__.late,meta12974__$1));
});

com.rpl.specter.t_com$rpl$specter12973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12975){
var self__ = this;
var _12975__$1 = this;
return self__.meta12974;
});

com.rpl.specter.t_com$rpl$specter12973.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12973.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12973.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter12973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta12974","meta12974",1584524890,null)], null);
});

com.rpl.specter.t_com$rpl$specter12973.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12973.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12973";

com.rpl.specter.t_com$rpl$specter12973.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12973");
});

com.rpl.specter.__GT_t_com$rpl$specter12973 = (function com$rpl$specter$__GT_t_com$rpl$specter12973(path__$1,late__$1,meta12974){
return (new com.rpl.specter.t_com$rpl$specter12973(path__$1,late__$1,meta12974));
});

}

return (new com.rpl.specter.t_com$rpl$specter12973(path,late,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
};
var G__12976 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__12977__i = 0, G__12977__a = new Array(arguments.length -  0);
while (G__12977__i < G__12977__a.length) {G__12977__a[G__12977__i] = arguments[G__12977__i + 0]; ++G__12977__i;}
  path = new cljs.core.IndexedSeq(G__12977__a,0);
} 
return G__12976__delegate.call(this,path);};
G__12976.cljs$lang$maxFixedArity = 0;
G__12976.cljs$lang$applyTo = (function (arglist__12978){
var path = cljs.core.seq(arglist__12978);
return G__12976__delegate(path);
});
G__12976.cljs$core$IFn$_invoke$arity$variadic = G__12976__delegate;
return G__12976;
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
if(typeof com.rpl.specter.t_com$rpl$specter12979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12979 = (function (val,meta12980){
this.val = val;
this.meta12980 = meta12980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12981,meta12980__$1){
var self__ = this;
var _12981__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12979(self__.val,meta12980__$1));
});

com.rpl.specter.t_com$rpl$specter12979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12981){
var self__ = this;
var _12981__$1 = this;
return self__.meta12980;
});

com.rpl.specter.t_com$rpl$specter12979.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12979.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter12979.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__12233__auto__,vals__12234__auto__,structure,next_fn__12235__auto__){
var self__ = this;
var this__12233__auto____$1 = this;
return next_fn__12235__auto__.call(null,cljs.core.conj.call(null,vals__12234__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter12979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta12980","meta12980",841020149,null)], null);
});

com.rpl.specter.t_com$rpl$specter12979.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12979.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12979";

com.rpl.specter.t_com$rpl$specter12979.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12979");
});

com.rpl.specter.__GT_t_com$rpl$specter12979 = (function com$rpl$specter$__GT_t_com$rpl$specter12979(val__$1,meta12980){
return (new com.rpl.specter.t_com$rpl$specter12979(val__$1,meta12980));
});

}

return (new com.rpl.specter.t_com$rpl$specter12979(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter12982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12982 = (function (meta12983){
this.meta12983 = meta12983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12984,meta12983__$1){
var self__ = this;
var _12984__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12982(meta12983__$1));
});

com.rpl.specter.t_com$rpl$specter12982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12984){
var self__ = this;
var _12984__$1 = this;
return self__.meta12983;
});

com.rpl.specter.t_com$rpl$specter12982.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12982.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter12982.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter12982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12983","meta12983",1027955537,null)], null);
});

com.rpl.specter.t_com$rpl$specter12982.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12982.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12982";

com.rpl.specter.t_com$rpl$specter12982.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12982");
});

com.rpl.specter.__GT_t_com$rpl$specter12982 = (function com$rpl$specter$__GT_t_com$rpl$specter12982(meta12983){
return (new com.rpl.specter.t_com$rpl$specter12982(meta12983));
});

}

return (new com.rpl.specter.t_com$rpl$specter12982(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__12993 = null;
var G__12993__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__12993__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter12987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12987 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta12988){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta12988 = meta12988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_12989,meta12988__$1){
var self__ = this;
var _12989__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12987(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta12988__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_12989){
var self__ = this;
var _12989__$1 = this;
return self__.meta12988;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12987.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12987.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12987.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12987.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta12988","meta12988",845577180,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12987.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12987.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12987";

com.rpl.specter.t_com$rpl$specter12987.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12987");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12987 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12987(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta12988){
return (new com.rpl.specter.t_com$rpl$specter12987(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta12988));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12987(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
} else {
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter12990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter12990 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta12991){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta12991 = meta12991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter12990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_12992,meta12991__$1){
var self__ = this;
var _12992__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter12990(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta12991__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_12992){
var self__ = this;
var _12992__$1 = this;
return self__.meta12991;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12990.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter12990.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__12985_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__12985_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12990.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__12986_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__12986_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12990.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta12991","meta12991",716203565,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter12990.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter12990.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter12990";

com.rpl.specter.t_com$rpl$specter12990.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter12990");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter12990 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter12990(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta12991){
return (new com.rpl.specter.t_com$rpl$specter12990(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta12991));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter12990(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
}
});
G__12993 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__12993__2.call(this,cond_p,then_path);
case 3:
return G__12993__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12993.cljs$core$IFn$_invoke$arity$2 = G__12993__2;
G__12993.cljs$core$IFn$_invoke$arity$3 = G__12993__3;
return G__12993;
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
var G__12998__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__12994){
var vec__12995 = p__12994;
var tester = cljs.core.nth.call(null,vec__12995,(0),null);
var apath = cljs.core.nth.call(null,vec__12995,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__12998 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__12999__i = 0, G__12999__a = new Array(arguments.length -  0);
while (G__12999__i < G__12999__a.length) {G__12999__a[G__12999__i] = arguments[G__12999__i + 0]; ++G__12999__i;}
  conds = new cljs.core.IndexedSeq(G__12999__a,0);
} 
return G__12998__delegate.call(this,conds);};
G__12998.cljs$lang$maxFixedArity = 0;
G__12998.cljs$lang$applyTo = (function (arglist__13000){
var conds = cljs.core.seq(arglist__13000);
return G__12998__delegate(conds);
});
G__12998.cljs$core$IFn$_invoke$arity$variadic = G__12998__delegate;
return G__12998;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__13008 = null;
var G__13008__0 = (function (){
return com.rpl.specter.STAY;
});
var G__13008__1 = (function (path){
return path;
});
var G__13008__2 = (function (path1,path2){
var builder__12236__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter13001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter13001 = (function (path1,path2,late1,late2,meta13002){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta13002 = meta13002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter13001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13003,meta13002__$1){
var self__ = this;
var _13003__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter13001(self__.path1,self__.path2,self__.late1,self__.late2,meta13002__$1));
});

com.rpl.specter.t_com$rpl$specter13001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13003){
var self__ = this;
var _13003__$1 = this;
return self__.meta13002;
});

com.rpl.specter.t_com$rpl$specter13001.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter13001.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter13001.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter13001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta13002","meta13002",1850705786,null)], null);
});

com.rpl.specter.t_com$rpl$specter13001.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter13001.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter13001";

com.rpl.specter.t_com$rpl$specter13001.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter/t_com$rpl$specter13001");
});

com.rpl.specter.__GT_t_com$rpl$specter13001 = (function com$rpl$specter$__GT_t_com$rpl$specter13001(path1__$1,path2__$1,late1__$1,late2__$1,meta13002){
return (new com.rpl.specter.t_com$rpl$specter13001(path1__$1,path2__$1,late1__$1,late2__$1,meta13002));
});

}

return (new com.rpl.specter.t_com$rpl$specter13001(path1,path2,late1,late2,null));
}));
var curr_params__12237__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__12237__auto__)){
return cljs.core.apply.call(null,builder__12236__auto__,curr_params__12237__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__12236__auto__,curr_params__12237__auto__);
}
});
var G__13008__3 = (function() { 
var G__13009__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__13009 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__13010__i = 0, G__13010__a = new Array(arguments.length -  2);
while (G__13010__i < G__13010__a.length) {G__13010__a[G__13010__i] = arguments[G__13010__i + 2]; ++G__13010__i;}
  paths = new cljs.core.IndexedSeq(G__13010__a,0);
} 
return G__13009__delegate.call(this,path1,path2,paths);};
G__13009.cljs$lang$maxFixedArity = 2;
G__13009.cljs$lang$applyTo = (function (arglist__13011){
var path1 = cljs.core.first(arglist__13011);
arglist__13011 = cljs.core.next(arglist__13011);
var path2 = cljs.core.first(arglist__13011);
var paths = cljs.core.rest(arglist__13011);
return G__13009__delegate(path1,path2,paths);
});
G__13009.cljs$core$IFn$_invoke$arity$variadic = G__13009__delegate;
return G__13009;
})()
;
G__13008 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__13008__0.call(this);
case 1:
return G__13008__1.call(this,path1);
case 2:
return G__13008__2.call(this,path1,path2);
default:
var G__13012 = null;
if (arguments.length > 2) {
var G__13013__i = 0, G__13013__a = new Array(arguments.length -  2);
while (G__13013__i < G__13013__a.length) {G__13013__a[G__13013__i] = arguments[G__13013__i + 2]; ++G__13013__i;}
G__13012 = new cljs.core.IndexedSeq(G__13013__a,0);
}
return G__13008__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__13012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13008.cljs$lang$maxFixedArity = 2;
G__13008.cljs$lang$applyTo = G__13008__3.cljs$lang$applyTo;
G__13008.cljs$core$IFn$_invoke$arity$0 = G__13008__0;
G__13008.cljs$core$IFn$_invoke$arity$1 = G__13008__1;
G__13008.cljs$core$IFn$_invoke$arity$2 = G__13008__2;
G__13008.cljs$core$IFn$_invoke$arity$variadic = G__13008__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13008;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__13014__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__13014 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__13015__i = 0, G__13015__a = new Array(arguments.length -  0);
while (G__13015__i < G__13015__a.length) {G__13015__a[G__13015__i] = arguments[G__13015__i + 0]; ++G__13015__i;}
  path = new cljs.core.IndexedSeq(G__13015__a,0);
} 
return G__13014__delegate.call(this,path);};
G__13014.cljs$lang$maxFixedArity = 0;
G__13014.cljs$lang$applyTo = (function (arglist__13016){
var path = cljs.core.seq(arglist__13016);
return G__13014__delegate(path);
});
G__13014.cljs$core$IFn$_invoke$arity$variadic = G__13014__delegate;
return G__13014;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__13017__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__13017 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__13018__i = 0, G__13018__a = new Array(arguments.length -  0);
while (G__13018__i < G__13018__a.length) {G__13018__a[G__13018__i] = arguments[G__13018__i + 0]; ++G__13018__i;}
  path = new cljs.core.IndexedSeq(G__13018__a,0);
} 
return G__13017__delegate.call(this,path);};
G__13017.cljs$lang$maxFixedArity = 0;
G__13017.cljs$lang$applyTo = (function (arglist__13019){
var path = cljs.core.seq(arglist__13019);
return G__13017__delegate(path);
});
G__13017.cljs$core$IFn$_invoke$arity$variadic = G__13017__delegate;
return G__13017;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1484456790657
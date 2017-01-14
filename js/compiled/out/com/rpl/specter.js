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
var args__26128__auto__ = [];
var len__26121__auto___51823 = arguments.length;
var i__26122__auto___51824 = (0);
while(true){
if((i__26122__auto___51824 < len__26121__auto___51823)){
args__26128__auto__.push((arguments[i__26122__auto___51824]));

var G__51825 = (i__26122__auto___51824 + (1));
i__26122__auto___51824 = G__51825;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq51822){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51822));
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
var args__26128__auto__ = [];
var len__26121__auto___51833 = arguments.length;
var i__26122__auto___51834 = (0);
while(true){
if((i__26122__auto___51834 < len__26121__auto___51833)){
args__26128__auto__.push((arguments[i__26122__auto___51834]));

var G__51835 = (i__26122__auto___51834 + (1));
i__26122__auto___51834 = G__51835;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__51830){
var map__51831 = p__51830;
var map__51831__$1 = ((((!((map__51831 == null)))?((((map__51831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51831):map__51831);
var merge_fn = cljs.core.get.call(null,map__51831__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq51826){
var G__51827 = cljs.core.first.call(null,seq51826);
var seq51826__$1 = cljs.core.next.call(null,seq51826);
var G__51828 = cljs.core.first.call(null,seq51826__$1);
var seq51826__$2 = cljs.core.next.call(null,seq51826__$1);
var G__51829 = cljs.core.first.call(null,seq51826__$2);
var seq51826__$3 = cljs.core.next.call(null,seq51826__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51827,G__51828,G__51829,seq51826__$3);
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
var G__51836__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__51836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51837__i = 0, G__51837__a = new Array(arguments.length -  0);
while (G__51837__i < G__51837__a.length) {G__51837__a[G__51837__i] = arguments[G__51837__i + 0]; ++G__51837__i;}
  args = new cljs.core.IndexedSeq(G__51837__a,0);
} 
return G__51836__delegate.call(this,args);};
G__51836.cljs$lang$maxFixedArity = 0;
G__51836.cljs$lang$applyTo = (function (arglist__51838){
var args = cljs.core.seq(arglist__51838);
return G__51836__delegate(args);
});
G__51836.cljs$core$IFn$_invoke$arity$variadic = G__51836__delegate;
return G__51836;
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
if(typeof com.rpl.specter.t_com$rpl$specter51839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51839 = (function (meta51840){
this.meta51840 = meta51840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51841,meta51840__$1){
var self__ = this;
var _51841__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51839(meta51840__$1));
});

com.rpl.specter.t_com$rpl$specter51839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51841){
var self__ = this;
var _51841__$1 = this;
return self__.meta51840;
});

com.rpl.specter.t_com$rpl$specter51839.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51839.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter51839.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter51839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51840","meta51840",-193033189,null)], null);
});

com.rpl.specter.t_com$rpl$specter51839.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51839.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51839";

com.rpl.specter.t_com$rpl$specter51839.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51839");
});

com.rpl.specter.__GT_t_com$rpl$specter51839 = (function com$rpl$specter$__GT_t_com$rpl$specter51839(meta51840){
return (new com.rpl.specter.t_com$rpl$specter51839(meta51840));
});

}

return (new com.rpl.specter.t_com$rpl$specter51839(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51842 = (function (afn,meta51843){
this.afn = afn;
this.meta51843 = meta51843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51844,meta51843__$1){
var self__ = this;
var _51844__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51842(self__.afn,meta51843__$1));
});

com.rpl.specter.t_com$rpl$specter51842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51844){
var self__ = this;
var _51844__$1 = this;
return self__.meta51843;
});

com.rpl.specter.t_com$rpl$specter51842.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51842.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter51842.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter51842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51843","meta51843",-1403734162,null)], null);
});

com.rpl.specter.t_com$rpl$specter51842.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51842.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51842";

com.rpl.specter.t_com$rpl$specter51842.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51842");
});

com.rpl.specter.__GT_t_com$rpl$specter51842 = (function com$rpl$specter$__GT_t_com$rpl$specter51842(afn__$1,meta51843){
return (new com.rpl.specter.t_com$rpl$specter51842(afn__$1,meta51843));
});

}

return (new com.rpl.specter.t_com$rpl$specter51842(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51845 = (function (meta51846){
this.meta51846 = meta51846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51847,meta51846__$1){
var self__ = this;
var _51847__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51845(meta51846__$1));
});

com.rpl.specter.t_com$rpl$specter51845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51847){
var self__ = this;
var _51847__$1 = this;
return self__.meta51846;
});

com.rpl.specter.t_com$rpl$specter51845.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51845.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter51845.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter51845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51846","meta51846",-1121811451,null)], null);
});

com.rpl.specter.t_com$rpl$specter51845.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51845.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51845";

com.rpl.specter.t_com$rpl$specter51845.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51845");
});

com.rpl.specter.__GT_t_com$rpl$specter51845 = (function com$rpl$specter$__GT_t_com$rpl$specter51845(meta51846){
return (new com.rpl.specter.t_com$rpl$specter51845(meta51846));
});

}

return (new com.rpl.specter.t_com$rpl$specter51845(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__28538__auto__,v){
var ret__28539__auto__ = next_fn.call(null,v);
if((ret__28539__auto__ === com.rpl.specter.NONE)){
return curr__28538__auto__;
} else {
return ret__28539__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter51848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51848 = (function (meta51849){
this.meta51849 = meta51849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51850,meta51849__$1){
var self__ = this;
var _51850__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51848(meta51849__$1));
});

com.rpl.specter.t_com$rpl$specter51848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51850){
var self__ = this;
var _51850__$1 = this;
return self__.meta51849;
});

com.rpl.specter.t_com$rpl$specter51848.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51848.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__30215__auto____$1){
return (function (curr__28538__auto__,v){
var ret__28539__auto__ = next_fn.call(null,v);
if((ret__28539__auto__ === com.rpl.specter.NONE)){
return curr__28538__auto__;
} else {
return ret__28539__auto__;
}
});})(next_fn,this__30215__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51848.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter51848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51849","meta51849",-1198388077,null)], null);
});

com.rpl.specter.t_com$rpl$specter51848.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51848.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51848";

com.rpl.specter.t_com$rpl$specter51848.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51848");
});

com.rpl.specter.__GT_t_com$rpl$specter51848 = (function com$rpl$specter$__GT_t_com$rpl$specter51848(meta51849){
return (new com.rpl.specter.t_com$rpl$specter51848(meta51849));
});

}

return (new com.rpl.specter.t_com$rpl$specter51848(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter51851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51851 = (function (meta51852){
this.meta51852 = meta51852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51853,meta51852__$1){
var self__ = this;
var _51853__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51851(meta51852__$1));
});

com.rpl.specter.t_com$rpl$specter51851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51853){
var self__ = this;
var _51853__$1 = this;
return self__.meta51852;
});

com.rpl.specter.t_com$rpl$specter51851.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51851.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter51851.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter51851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51852","meta51852",-953068025,null)], null);
});

com.rpl.specter.t_com$rpl$specter51851.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51851.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51851";

com.rpl.specter.t_com$rpl$specter51851.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51851");
});

com.rpl.specter.__GT_t_com$rpl$specter51851 = (function com$rpl$specter$__GT_t_com$rpl$specter51851(meta51852){
return (new com.rpl.specter.t_com$rpl$specter51851(meta51852));
});

}

return (new com.rpl.specter.t_com$rpl$specter51851(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51854 = (function (start_fn,end_fn,meta51855){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta51855 = meta51855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51856,meta51855__$1){
var self__ = this;
var _51856__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51854(self__.start_fn,self__.end_fn,meta51855__$1));
});

com.rpl.specter.t_com$rpl$specter51854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51856){
var self__ = this;
var _51856__$1 = this;
return self__.meta51855;
});

com.rpl.specter.t_com$rpl$specter51854.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51854.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter51854.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter51854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta51855","meta51855",5127618,null)], null);
});

com.rpl.specter.t_com$rpl$specter51854.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51854.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51854";

com.rpl.specter.t_com$rpl$specter51854.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51854");
});

com.rpl.specter.__GT_t_com$rpl$specter51854 = (function com$rpl$specter$__GT_t_com$rpl$specter51854(start_fn__$1,end_fn__$1,meta51855){
return (new com.rpl.specter.t_com$rpl$specter51854(start_fn__$1,end_fn__$1,meta51855));
});

}

return (new com.rpl.specter.t_com$rpl$specter51854(start_fn,end_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51857 = (function (start,end,meta51858){
this.start = start;
this.end = end;
this.meta51858 = meta51858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51859,meta51858__$1){
var self__ = this;
var _51859__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51857(self__.start,self__.end,meta51858__$1));
});

com.rpl.specter.t_com$rpl$specter51857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51859){
var self__ = this;
var _51859__$1 = this;
return self__.meta51858;
});

com.rpl.specter.t_com$rpl$specter51857.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51857.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter51857.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter51857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta51858","meta51858",-151830017,null)], null);
});

com.rpl.specter.t_com$rpl$specter51857.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51857.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51857";

com.rpl.specter.t_com$rpl$specter51857.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51857");
});

com.rpl.specter.__GT_t_com$rpl$specter51857 = (function com$rpl$specter$__GT_t_com$rpl$specter51857(start__$1,end__$1,meta51858){
return (new com.rpl.specter.t_com$rpl$specter51857(start__$1,end__$1,meta51858));
});

}

return (new com.rpl.specter.t_com$rpl$specter51857(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__28538__auto__,p__51864){
var vec__51865 = p__51864;
var s = cljs.core.nth.call(null,vec__51865,(0),null);
var e = cljs.core.nth.call(null,vec__51865,(1),null);
var ret__28539__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__28539__auto__ === com.rpl.specter.NONE)){
return curr__28538__auto__;
} else {
return ret__28539__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter51868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51868 = (function (pred,meta51869){
this.pred = pred;
this.meta51869 = meta51869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51870,meta51869__$1){
var self__ = this;
var _51870__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51868(self__.pred,meta51869__$1));
});

com.rpl.specter.t_com$rpl$specter51868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51870){
var self__ = this;
var _51870__$1 = this;
return self__.meta51869;
});

com.rpl.specter.t_com$rpl$specter51868.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51868.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__30215__auto____$1){
return (function (curr__28538__auto__,p__51871){
var vec__51872 = p__51871;
var s = cljs.core.nth.call(null,vec__51872,(0),null);
var e = cljs.core.nth.call(null,vec__51872,(1),null);
var ret__28539__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__28539__auto__ === com.rpl.specter.NONE)){
return curr__28538__auto__;
} else {
return ret__28539__auto__;
}
});})(next_fn,this__30215__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter51868.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter51868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta51869","meta51869",-2042076798,null)], null);
});

com.rpl.specter.t_com$rpl$specter51868.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51868.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51868";

com.rpl.specter.t_com$rpl$specter51868.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51868");
});

com.rpl.specter.__GT_t_com$rpl$specter51868 = (function com$rpl$specter$__GT_t_com$rpl$specter51868(pred__$1,meta51869){
return (new com.rpl.specter.t_com$rpl$specter51868(pred__$1,meta51869));
});

}

return (new com.rpl.specter.t_com$rpl$specter51868(pred,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51875 = (function (meta51876){
this.meta51876 = meta51876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51877,meta51876__$1){
var self__ = this;
var _51877__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51875(meta51876__$1));
});

com.rpl.specter.t_com$rpl$specter51875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51877){
var self__ = this;
var _51877__$1 = this;
return self__.meta51876;
});

com.rpl.specter.t_com$rpl$specter51875.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51875.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter51875.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter51875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51876","meta51876",-1562174119,null)], null);
});

com.rpl.specter.t_com$rpl$specter51875.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51875.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51875";

com.rpl.specter.t_com$rpl$specter51875.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51875");
});

com.rpl.specter.__GT_t_com$rpl$specter51875 = (function com$rpl$specter$__GT_t_com$rpl$specter51875(meta51876){
return (new com.rpl.specter.t_com$rpl$specter51875(meta51876));
});

}

return (new com.rpl.specter.t_com$rpl$specter51875(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51878 = (function (meta51879){
this.meta51879 = meta51879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51880,meta51879__$1){
var self__ = this;
var _51880__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51878(meta51879__$1));
});

com.rpl.specter.t_com$rpl$specter51878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51880){
var self__ = this;
var _51880__$1 = this;
return self__.meta51879;
});

com.rpl.specter.t_com$rpl$specter51878.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51878.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter51878.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter51878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51879","meta51879",-1441087405,null)], null);
});

com.rpl.specter.t_com$rpl$specter51878.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51878.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51878";

com.rpl.specter.t_com$rpl$specter51878.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51878");
});

com.rpl.specter.__GT_t_com$rpl$specter51878 = (function com$rpl$specter$__GT_t_com$rpl$specter51878(meta51879){
return (new com.rpl.specter.t_com$rpl$specter51878(meta51879));
});

}

return (new com.rpl.specter.t_com$rpl$specter51878(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51881 = (function (aset,meta51882){
this.aset = aset;
this.meta51882 = meta51882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51883,meta51882__$1){
var self__ = this;
var _51883__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51881(self__.aset,meta51882__$1));
});

com.rpl.specter.t_com$rpl$specter51881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51883){
var self__ = this;
var _51883__$1 = this;
return self__.meta51882;
});

com.rpl.specter.t_com$rpl$specter51881.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51881.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter51881.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter51881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta51882","meta51882",1334282619,null)], null);
});

com.rpl.specter.t_com$rpl$specter51881.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51881.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51881";

com.rpl.specter.t_com$rpl$specter51881.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51881");
});

com.rpl.specter.__GT_t_com$rpl$specter51881 = (function com$rpl$specter$__GT_t_com$rpl$specter51881(aset__$1,meta51882){
return (new com.rpl.specter.t_com$rpl$specter51881(aset__$1,meta51882));
});

}

return (new com.rpl.specter.t_com$rpl$specter51881(aset,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51884 = (function (m_keys,meta51885){
this.m_keys = m_keys;
this.meta51885 = meta51885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51886,meta51885__$1){
var self__ = this;
var _51886__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51884(self__.m_keys,meta51885__$1));
});

com.rpl.specter.t_com$rpl$specter51884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51886){
var self__ = this;
var _51886__$1 = this;
return self__.meta51885;
});

com.rpl.specter.t_com$rpl$specter51884.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51884.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter51884.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter51884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta51885","meta51885",-811193572,null)], null);
});

com.rpl.specter.t_com$rpl$specter51884.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51884.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51884";

com.rpl.specter.t_com$rpl$specter51884.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51884");
});

com.rpl.specter.__GT_t_com$rpl$specter51884 = (function com$rpl$specter$__GT_t_com$rpl$specter51884(m_keys__$1,meta51885){
return (new com.rpl.specter.t_com$rpl$specter51884(m_keys__$1,meta51885));
});

}

return (new com.rpl.specter.t_com$rpl$specter51884(m_keys,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51887 = (function (afn,meta51888){
this.afn = afn;
this.meta51888 = meta51888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51889,meta51888__$1){
var self__ = this;
var _51889__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51887(self__.afn,meta51888__$1));
});

com.rpl.specter.t_com$rpl$specter51887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51889){
var self__ = this;
var _51889__$1 = this;
return self__.meta51888;
});

com.rpl.specter.t_com$rpl$specter51887.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51887.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter51887.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter51887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51888","meta51888",-1323908153,null)], null);
});

com.rpl.specter.t_com$rpl$specter51887.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51887.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51887";

com.rpl.specter.t_com$rpl$specter51887.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51887");
});

com.rpl.specter.__GT_t_com$rpl$specter51887 = (function com$rpl$specter$__GT_t_com$rpl$specter51887(afn__$1,meta51888){
return (new com.rpl.specter.t_com$rpl$specter51887(afn__$1,meta51888));
});

}

return (new com.rpl.specter.t_com$rpl$specter51887(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51890 = (function (afn,meta51891){
this.afn = afn;
this.meta51891 = meta51891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51892,meta51891__$1){
var self__ = this;
var _51892__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51890(self__.afn,meta51891__$1));
});

com.rpl.specter.t_com$rpl$specter51890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51892){
var self__ = this;
var _51892__$1 = this;
return self__.meta51891;
});

com.rpl.specter.t_com$rpl$specter51890.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51890.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter51890.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter51890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51891","meta51891",1218603,null)], null);
});

com.rpl.specter.t_com$rpl$specter51890.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51890.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51890";

com.rpl.specter.t_com$rpl$specter51890.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51890");
});

com.rpl.specter.__GT_t_com$rpl$specter51890 = (function com$rpl$specter$__GT_t_com$rpl$specter51890(afn__$1,meta51891){
return (new com.rpl.specter.t_com$rpl$specter51890(afn__$1,meta51891));
});

}

return (new com.rpl.specter.t_com$rpl$specter51890(afn,null));
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
var G__51896__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter51893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51893 = (function (path,late,meta51894){
this.path = path;
this.late = late;
this.meta51894 = meta51894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51895,meta51894__$1){
var self__ = this;
var _51895__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51893(self__.path,self__.late,meta51894__$1));
});

com.rpl.specter.t_com$rpl$specter51893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51895){
var self__ = this;
var _51895__$1 = this;
return self__.meta51894;
});

com.rpl.specter.t_com$rpl$specter51893.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51893.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter51893.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__30215__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__30215__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter51893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta51894","meta51894",1441708650,null)], null);
});

com.rpl.specter.t_com$rpl$specter51893.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51893.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51893";

com.rpl.specter.t_com$rpl$specter51893.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51893");
});

com.rpl.specter.__GT_t_com$rpl$specter51893 = (function com$rpl$specter$__GT_t_com$rpl$specter51893(path__$1,late__$1,meta51894){
return (new com.rpl.specter.t_com$rpl$specter51893(path__$1,late__$1,meta51894));
});

}

return (new com.rpl.specter.t_com$rpl$specter51893(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__51896 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51897__i = 0, G__51897__a = new Array(arguments.length -  0);
while (G__51897__i < G__51897__a.length) {G__51897__a[G__51897__i] = arguments[G__51897__i + 0]; ++G__51897__i;}
  path = new cljs.core.IndexedSeq(G__51897__a,0);
} 
return G__51896__delegate.call(this,path);};
G__51896.cljs$lang$maxFixedArity = 0;
G__51896.cljs$lang$applyTo = (function (arglist__51898){
var path = cljs.core.seq(arglist__51898);
return G__51896__delegate(path);
});
G__51896.cljs$core$IFn$_invoke$arity$variadic = G__51896__delegate;
return G__51896;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter51899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51899 = (function (afn,meta51900){
this.afn = afn;
this.meta51900 = meta51900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51901,meta51900__$1){
var self__ = this;
var _51901__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51899(self__.afn,meta51900__$1));
});

com.rpl.specter.t_com$rpl$specter51899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51901){
var self__ = this;
var _51901__$1 = this;
return self__.meta51900;
});

com.rpl.specter.t_com$rpl$specter51899.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51899.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51899.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51900","meta51900",1912425513,null)], null);
});

com.rpl.specter.t_com$rpl$specter51899.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51899.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51899";

com.rpl.specter.t_com$rpl$specter51899.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51899");
});

com.rpl.specter.__GT_t_com$rpl$specter51899 = (function com$rpl$specter$__GT_t_com$rpl$specter51899(afn__$1,meta51900){
return (new com.rpl.specter.t_com$rpl$specter51899(afn__$1,meta51900));
});

}

return (new com.rpl.specter.t_com$rpl$specter51899(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51902 = (function (parse_fn,unparse_fn,meta51903){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta51903 = meta51903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51904,meta51903__$1){
var self__ = this;
var _51904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51902(self__.parse_fn,self__.unparse_fn,meta51903__$1));
});

com.rpl.specter.t_com$rpl$specter51902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51904){
var self__ = this;
var _51904__$1 = this;
return self__.meta51903;
});

com.rpl.specter.t_com$rpl$specter51902.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter51902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta51903","meta51903",-769710102,null)], null);
});

com.rpl.specter.t_com$rpl$specter51902.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51902";

com.rpl.specter.t_com$rpl$specter51902.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51902");
});

com.rpl.specter.__GT_t_com$rpl$specter51902 = (function com$rpl$specter$__GT_t_com$rpl$specter51902(parse_fn__$1,unparse_fn__$1,meta51903){
return (new com.rpl.specter.t_com$rpl$specter51902(parse_fn__$1,unparse_fn__$1,meta51903));
});

}

return (new com.rpl.specter.t_com$rpl$specter51902(parse_fn,unparse_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51905 = (function (meta51906){
this.meta51906 = meta51906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51907,meta51906__$1){
var self__ = this;
var _51907__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51905(meta51906__$1));
});

com.rpl.specter.t_com$rpl$specter51905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51907){
var self__ = this;
var _51907__$1 = this;
return self__.meta51906;
});

com.rpl.specter.t_com$rpl$specter51905.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51905.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51905.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter51905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51906","meta51906",-1978873635,null)], null);
});

com.rpl.specter.t_com$rpl$specter51905.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51905.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51905";

com.rpl.specter.t_com$rpl$specter51905.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51905");
});

com.rpl.specter.__GT_t_com$rpl$specter51905 = (function com$rpl$specter$__GT_t_com$rpl$specter51905(meta51906){
return (new com.rpl.specter.t_com$rpl$specter51905(meta51906));
});

}

return (new com.rpl.specter.t_com$rpl$specter51905(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__51913__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter51910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51910 = (function (path,temp__4655__auto__,late,meta51911){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta51911 = meta51911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_51912,meta51911__$1){
var self__ = this;
var _51912__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51910(self__.path,self__.temp__4655__auto__,self__.late,meta51911__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_51912){
var self__ = this;
var _51912__$1 = this;
return self__.meta51911;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51910.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51910.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__51908_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__51908_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51910.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__51909_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__51909_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51910.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta51911","meta51911",-203950559,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51910.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51910.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51910";

com.rpl.specter.t_com$rpl$specter51910.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51910");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter51910 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter51910(path__$1,temp__4655__auto____$1,late__$1,meta51911){
return (new com.rpl.specter.t_com$rpl$specter51910(path__$1,temp__4655__auto____$1,late__$1,meta51911));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter51910(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
}
};
var G__51913 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51914__i = 0, G__51914__a = new Array(arguments.length -  0);
while (G__51914__i < G__51914__a.length) {G__51914__a[G__51914__i] = arguments[G__51914__i + 0]; ++G__51914__i;}
  path = new cljs.core.IndexedSeq(G__51914__a,0);
} 
return G__51913__delegate.call(this,path);};
G__51913.cljs$lang$maxFixedArity = 0;
G__51913.cljs$lang$applyTo = (function (arglist__51915){
var path = cljs.core.seq(arglist__51915);
return G__51913__delegate(path);
});
G__51913.cljs$core$IFn$_invoke$arity$variadic = G__51913__delegate;
return G__51913;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__51921__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter51918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51918 = (function (path,temp__4655__auto__,late,meta51919){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta51919 = meta51919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_51920,meta51919__$1){
var self__ = this;
var _51920__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51918(self__.path,self__.temp__4655__auto__,self__.late,meta51919__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_51920){
var self__ = this;
var _51920__$1 = this;
return self__.meta51919;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51918.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51918.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__51916_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__51916_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51918.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__51917_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__51917_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51918.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta51919","meta51919",-1633018601,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51918.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51918.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51918";

com.rpl.specter.t_com$rpl$specter51918.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51918");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter51918 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter51918(path__$1,temp__4655__auto____$1,late__$1,meta51919){
return (new com.rpl.specter.t_com$rpl$specter51918(path__$1,temp__4655__auto____$1,late__$1,meta51919));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter51918(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
}
};
var G__51921 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51922__i = 0, G__51922__a = new Array(arguments.length -  0);
while (G__51922__i < G__51922__a.length) {G__51922__a[G__51922__i] = arguments[G__51922__i + 0]; ++G__51922__i;}
  path = new cljs.core.IndexedSeq(G__51922__a,0);
} 
return G__51921__delegate.call(this,path);};
G__51921.cljs$lang$maxFixedArity = 0;
G__51921.cljs$lang$applyTo = (function (arglist__51923){
var path = cljs.core.seq(arglist__51923);
return G__51921__delegate(path);
});
G__51921.cljs$core$IFn$_invoke$arity$variadic = G__51921__delegate;
return G__51921;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__51924__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__51924 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51925__i = 0, G__51925__a = new Array(arguments.length -  0);
while (G__51925__i < G__51925__a.length) {G__51925__a[G__51925__i] = arguments[G__51925__i + 0]; ++G__51925__i;}
  path = new cljs.core.IndexedSeq(G__51925__a,0);
} 
return G__51924__delegate.call(this,path);};
G__51924.cljs$lang$maxFixedArity = 0;
G__51924.cljs$lang$applyTo = (function (arglist__51926){
var path = cljs.core.seq(arglist__51926);
return G__51924__delegate(path);
});
G__51924.cljs$core$IFn$_invoke$arity$variadic = G__51924__delegate;
return G__51924;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter51927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51927 = (function (path,update_fn,late,late_fn,meta51928){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta51928 = meta51928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51929,meta51928__$1){
var self__ = this;
var _51929__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51927(self__.path,self__.update_fn,self__.late,self__.late_fn,meta51928__$1));
});

com.rpl.specter.t_com$rpl$specter51927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51929){
var self__ = this;
var _51929__$1 = this;
return self__.meta51928;
});

com.rpl.specter.t_com$rpl$specter51927.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51927.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter51927.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter51927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta51928","meta51928",1733666078,null)], null);
});

com.rpl.specter.t_com$rpl$specter51927.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51927.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51927";

com.rpl.specter.t_com$rpl$specter51927.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51927");
});

com.rpl.specter.__GT_t_com$rpl$specter51927 = (function com$rpl$specter$__GT_t_com$rpl$specter51927(path__$1,update_fn__$1,late__$1,late_fn__$1,meta51928){
return (new com.rpl.specter.t_com$rpl$specter51927(path__$1,update_fn__$1,late__$1,late_fn__$1,meta51928));
});

}

return (new com.rpl.specter.t_com$rpl$specter51927(path,update_fn,late,late_fn,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter51930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51930 = (function (path,reduce_fn,late,late_fn,meta51931){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta51931 = meta51931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51932,meta51931__$1){
var self__ = this;
var _51932__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51930(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta51931__$1));
});

com.rpl.specter.t_com$rpl$specter51930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51932){
var self__ = this;
var _51932__$1 = this;
return self__.meta51931;
});

com.rpl.specter.t_com$rpl$specter51930.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51930.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter51930.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter51930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta51931","meta51931",-959807153,null)], null);
});

com.rpl.specter.t_com$rpl$specter51930.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51930.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51930";

com.rpl.specter.t_com$rpl$specter51930.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51930");
});

com.rpl.specter.__GT_t_com$rpl$specter51930 = (function com$rpl$specter$__GT_t_com$rpl$specter51930(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta51931){
return (new com.rpl.specter.t_com$rpl$specter51930(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta51931));
});

}

return (new com.rpl.specter.t_com$rpl$specter51930(path,reduce_fn,late,late_fn,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
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
if(typeof com.rpl.specter.t_com$rpl$specter51933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51933 = (function (v,meta51934){
this.v = v;
this.meta51934 = meta51934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51935,meta51934__$1){
var self__ = this;
var _51935__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51933(self__.v,meta51934__$1));
});

com.rpl.specter.t_com$rpl$specter51933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51935){
var self__ = this;
var _51935__$1 = this;
return self__.meta51934;
});

com.rpl.specter.t_com$rpl$specter51933.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51933.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter51933.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter51933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta51934","meta51934",-2116370381,null)], null);
});

com.rpl.specter.t_com$rpl$specter51933.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51933.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51933";

com.rpl.specter.t_com$rpl$specter51933.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51933");
});

com.rpl.specter.__GT_t_com$rpl$specter51933 = (function com$rpl$specter$__GT_t_com$rpl$specter51933(v__$1,meta51934){
return (new com.rpl.specter.t_com$rpl$specter51933(v__$1,meta51934));
});

}

return (new com.rpl.specter.t_com$rpl$specter51933(v,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter51936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51936 = (function (meta51937){
this.meta51937 = meta51937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51938,meta51937__$1){
var self__ = this;
var _51938__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51936(meta51937__$1));
});

com.rpl.specter.t_com$rpl$specter51936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51938){
var self__ = this;
var _51938__$1 = this;
return self__.meta51937;
});

com.rpl.specter.t_com$rpl$specter51936.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51936.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter51936.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter51936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51937","meta51937",-777985063,null)], null);
});

com.rpl.specter.t_com$rpl$specter51936.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51936.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51936";

com.rpl.specter.t_com$rpl$specter51936.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51936");
});

com.rpl.specter.__GT_t_com$rpl$specter51936 = (function com$rpl$specter$__GT_t_com$rpl$specter51936(meta51937){
return (new com.rpl.specter.t_com$rpl$specter51936(meta51937));
});

}

return (new com.rpl.specter.t_com$rpl$specter51936(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__51942__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter51939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51939 = (function (path,late,meta51940){
this.path = path;
this.late = late;
this.meta51940 = meta51940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51941,meta51940__$1){
var self__ = this;
var _51941__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51939(self__.path,self__.late,meta51940__$1));
});

com.rpl.specter.t_com$rpl$specter51939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51941){
var self__ = this;
var _51941__$1 = this;
return self__.meta51940;
});

com.rpl.specter.t_com$rpl$specter51939.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51939.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter51939.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter51939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta51940","meta51940",1511119327,null)], null);
});

com.rpl.specter.t_com$rpl$specter51939.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51939.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51939";

com.rpl.specter.t_com$rpl$specter51939.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51939");
});

com.rpl.specter.__GT_t_com$rpl$specter51939 = (function com$rpl$specter$__GT_t_com$rpl$specter51939(path__$1,late__$1,meta51940){
return (new com.rpl.specter.t_com$rpl$specter51939(path__$1,late__$1,meta51940));
});

}

return (new com.rpl.specter.t_com$rpl$specter51939(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__51942 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51943__i = 0, G__51943__a = new Array(arguments.length -  0);
while (G__51943__i < G__51943__a.length) {G__51943__a[G__51943__i] = arguments[G__51943__i + 0]; ++G__51943__i;}
  path = new cljs.core.IndexedSeq(G__51943__a,0);
} 
return G__51942__delegate.call(this,path);};
G__51942.cljs$lang$maxFixedArity = 0;
G__51942.cljs$lang$applyTo = (function (arglist__51944){
var path = cljs.core.seq(arglist__51944);
return G__51942__delegate(path);
});
G__51942.cljs$core$IFn$_invoke$arity$variadic = G__51942__delegate;
return G__51942;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__51948__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter51945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51945 = (function (path,late,meta51946){
this.path = path;
this.late = late;
this.meta51946 = meta51946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51947,meta51946__$1){
var self__ = this;
var _51947__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51945(self__.path,self__.late,meta51946__$1));
});

com.rpl.specter.t_com$rpl$specter51945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51947){
var self__ = this;
var _51947__$1 = this;
return self__.meta51946;
});

com.rpl.specter.t_com$rpl$specter51945.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51945.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter51945.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter51945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta51946","meta51946",1559244200,null)], null);
});

com.rpl.specter.t_com$rpl$specter51945.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51945.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51945";

com.rpl.specter.t_com$rpl$specter51945.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51945");
});

com.rpl.specter.__GT_t_com$rpl$specter51945 = (function com$rpl$specter$__GT_t_com$rpl$specter51945(path__$1,late__$1,meta51946){
return (new com.rpl.specter.t_com$rpl$specter51945(path__$1,late__$1,meta51946));
});

}

return (new com.rpl.specter.t_com$rpl$specter51945(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__51948 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51949__i = 0, G__51949__a = new Array(arguments.length -  0);
while (G__51949__i < G__51949__a.length) {G__51949__a[G__51949__i] = arguments[G__51949__i + 0]; ++G__51949__i;}
  path = new cljs.core.IndexedSeq(G__51949__a,0);
} 
return G__51948__delegate.call(this,path);};
G__51948.cljs$lang$maxFixedArity = 0;
G__51948.cljs$lang$applyTo = (function (arglist__51950){
var path = cljs.core.seq(arglist__51950);
return G__51948__delegate(path);
});
G__51948.cljs$core$IFn$_invoke$arity$variadic = G__51948__delegate;
return G__51948;
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
if(typeof com.rpl.specter.t_com$rpl$specter51951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51951 = (function (val,meta51952){
this.val = val;
this.meta51952 = meta51952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51953,meta51952__$1){
var self__ = this;
var _51953__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51951(self__.val,meta51952__$1));
});

com.rpl.specter.t_com$rpl$specter51951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51953){
var self__ = this;
var _51953__$1 = this;
return self__.meta51952;
});

com.rpl.specter.t_com$rpl$specter51951.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51951.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter51951.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter51951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta51952","meta51952",-1179181374,null)], null);
});

com.rpl.specter.t_com$rpl$specter51951.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51951.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51951";

com.rpl.specter.t_com$rpl$specter51951.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51951");
});

com.rpl.specter.__GT_t_com$rpl$specter51951 = (function com$rpl$specter$__GT_t_com$rpl$specter51951(val__$1,meta51952){
return (new com.rpl.specter.t_com$rpl$specter51951(val__$1,meta51952));
});

}

return (new com.rpl.specter.t_com$rpl$specter51951(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter51954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51954 = (function (meta51955){
this.meta51955 = meta51955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51956,meta51955__$1){
var self__ = this;
var _51956__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51954(meta51955__$1));
});

com.rpl.specter.t_com$rpl$specter51954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51956){
var self__ = this;
var _51956__$1 = this;
return self__.meta51955;
});

com.rpl.specter.t_com$rpl$specter51954.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51954.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter51954.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter51954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51955","meta51955",-184098658,null)], null);
});

com.rpl.specter.t_com$rpl$specter51954.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51954.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51954";

com.rpl.specter.t_com$rpl$specter51954.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51954");
});

com.rpl.specter.__GT_t_com$rpl$specter51954 = (function com$rpl$specter$__GT_t_com$rpl$specter51954(meta51955){
return (new com.rpl.specter.t_com$rpl$specter51954(meta51955));
});

}

return (new com.rpl.specter.t_com$rpl$specter51954(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__51965 = null;
var G__51965__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__51965__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter51959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51959 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta51960){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta51960 = meta51960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_51961,meta51960__$1){
var self__ = this;
var _51961__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51959(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta51960__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_51961){
var self__ = this;
var _51961__$1 = this;
return self__.meta51960;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51959.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51959.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51959.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51959.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta51960","meta51960",1670823711,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51959.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51959.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51959";

com.rpl.specter.t_com$rpl$specter51959.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51959");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter51959 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter51959(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta51960){
return (new com.rpl.specter.t_com$rpl$specter51959(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta51960));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter51959(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
} else {
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter51962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51962 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta51963){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta51963 = meta51963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_51964,meta51963__$1){
var self__ = this;
var _51964__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51962(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta51963__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_51964){
var self__ = this;
var _51964__$1 = this;
return self__.meta51963;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51962.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51962.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__51957_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__51957_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51962.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__51958_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__51958_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51962.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta51963","meta51963",1068464665,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter51962.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51962.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51962";

com.rpl.specter.t_com$rpl$specter51962.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51962");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter51962 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter51962(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta51963){
return (new com.rpl.specter.t_com$rpl$specter51962(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta51963));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter51962(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
}
});
G__51965 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__51965__2.call(this,cond_p,then_path);
case 3:
return G__51965__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51965.cljs$core$IFn$_invoke$arity$2 = G__51965__2;
G__51965.cljs$core$IFn$_invoke$arity$3 = G__51965__3;
return G__51965;
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
var G__51970__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__51966){
var vec__51967 = p__51966;
var tester = cljs.core.nth.call(null,vec__51967,(0),null);
var apath = cljs.core.nth.call(null,vec__51967,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__51970 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__51971__i = 0, G__51971__a = new Array(arguments.length -  0);
while (G__51971__i < G__51971__a.length) {G__51971__a[G__51971__i] = arguments[G__51971__i + 0]; ++G__51971__i;}
  conds = new cljs.core.IndexedSeq(G__51971__a,0);
} 
return G__51970__delegate.call(this,conds);};
G__51970.cljs$lang$maxFixedArity = 0;
G__51970.cljs$lang$applyTo = (function (arglist__51972){
var conds = cljs.core.seq(arglist__51972);
return G__51970__delegate(conds);
});
G__51970.cljs$core$IFn$_invoke$arity$variadic = G__51970__delegate;
return G__51970;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__51980 = null;
var G__51980__0 = (function (){
return com.rpl.specter.STAY;
});
var G__51980__1 = (function (path){
return path;
});
var G__51980__2 = (function (path1,path2){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter51973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter51973 = (function (path1,path2,late1,late2,meta51974){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta51974 = meta51974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter51973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51975,meta51974__$1){
var self__ = this;
var _51975__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter51973(self__.path1,self__.path2,self__.late1,self__.late2,meta51974__$1));
});

com.rpl.specter.t_com$rpl$specter51973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51975){
var self__ = this;
var _51975__$1 = this;
return self__.meta51974;
});

com.rpl.specter.t_com$rpl$specter51973.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter51973.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter51973.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter51973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta51974","meta51974",944462666,null)], null);
});

com.rpl.specter.t_com$rpl$specter51973.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter51973.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter51973";

com.rpl.specter.t_com$rpl$specter51973.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter51973");
});

com.rpl.specter.__GT_t_com$rpl$specter51973 = (function com$rpl$specter$__GT_t_com$rpl$specter51973(path1__$1,path2__$1,late1__$1,late2__$1,meta51974){
return (new com.rpl.specter.t_com$rpl$specter51973(path1__$1,path2__$1,late1__$1,late2__$1,meta51974));
});

}

return (new com.rpl.specter.t_com$rpl$specter51973(path1,path2,late1,late2,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
});
var G__51980__3 = (function() { 
var G__51981__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__51981 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__51982__i = 0, G__51982__a = new Array(arguments.length -  2);
while (G__51982__i < G__51982__a.length) {G__51982__a[G__51982__i] = arguments[G__51982__i + 2]; ++G__51982__i;}
  paths = new cljs.core.IndexedSeq(G__51982__a,0);
} 
return G__51981__delegate.call(this,path1,path2,paths);};
G__51981.cljs$lang$maxFixedArity = 2;
G__51981.cljs$lang$applyTo = (function (arglist__51983){
var path1 = cljs.core.first(arglist__51983);
arglist__51983 = cljs.core.next(arglist__51983);
var path2 = cljs.core.first(arglist__51983);
var paths = cljs.core.rest(arglist__51983);
return G__51981__delegate(path1,path2,paths);
});
G__51981.cljs$core$IFn$_invoke$arity$variadic = G__51981__delegate;
return G__51981;
})()
;
G__51980 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__51980__0.call(this);
case 1:
return G__51980__1.call(this,path1);
case 2:
return G__51980__2.call(this,path1,path2);
default:
var G__51984 = null;
if (arguments.length > 2) {
var G__51985__i = 0, G__51985__a = new Array(arguments.length -  2);
while (G__51985__i < G__51985__a.length) {G__51985__a[G__51985__i] = arguments[G__51985__i + 2]; ++G__51985__i;}
G__51984 = new cljs.core.IndexedSeq(G__51985__a,0);
}
return G__51980__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__51984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51980.cljs$lang$maxFixedArity = 2;
G__51980.cljs$lang$applyTo = G__51980__3.cljs$lang$applyTo;
G__51980.cljs$core$IFn$_invoke$arity$0 = G__51980__0;
G__51980.cljs$core$IFn$_invoke$arity$1 = G__51980__1;
G__51980.cljs$core$IFn$_invoke$arity$2 = G__51980__2;
G__51980.cljs$core$IFn$_invoke$arity$variadic = G__51980__3.cljs$core$IFn$_invoke$arity$variadic;
return G__51980;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__51986__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__51986 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51987__i = 0, G__51987__a = new Array(arguments.length -  0);
while (G__51987__i < G__51987__a.length) {G__51987__a[G__51987__i] = arguments[G__51987__i + 0]; ++G__51987__i;}
  path = new cljs.core.IndexedSeq(G__51987__a,0);
} 
return G__51986__delegate.call(this,path);};
G__51986.cljs$lang$maxFixedArity = 0;
G__51986.cljs$lang$applyTo = (function (arglist__51988){
var path = cljs.core.seq(arglist__51988);
return G__51986__delegate(path);
});
G__51986.cljs$core$IFn$_invoke$arity$variadic = G__51986__delegate;
return G__51986;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__51989__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__51989 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__51990__i = 0, G__51990__a = new Array(arguments.length -  0);
while (G__51990__i < G__51990__a.length) {G__51990__a[G__51990__i] = arguments[G__51990__i + 0]; ++G__51990__i;}
  path = new cljs.core.IndexedSeq(G__51990__a,0);
} 
return G__51989__delegate.call(this,path);};
G__51989.cljs$lang$maxFixedArity = 0;
G__51989.cljs$lang$applyTo = (function (arglist__51991){
var path = cljs.core.seq(arglist__51991);
return G__51989__delegate(path);
});
G__51989.cljs$core$IFn$_invoke$arity$variadic = G__51989__delegate;
return G__51989;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1484333381889
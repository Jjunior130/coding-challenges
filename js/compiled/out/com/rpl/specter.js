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
var len__26121__auto___28615 = arguments.length;
var i__26122__auto___28616 = (0);
while(true){
if((i__26122__auto___28616 < len__26121__auto___28615)){
args__26128__auto__.push((arguments[i__26122__auto___28616]));

var G__28617 = (i__26122__auto___28616 + (1));
i__26122__auto___28616 = G__28617;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq28614){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28614));
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
var len__26121__auto___28625 = arguments.length;
var i__26122__auto___28626 = (0);
while(true){
if((i__26122__auto___28626 < len__26121__auto___28625)){
args__26128__auto__.push((arguments[i__26122__auto___28626]));

var G__28627 = (i__26122__auto___28626 + (1));
i__26122__auto___28626 = G__28627;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__28622){
var map__28623 = p__28622;
var map__28623__$1 = ((((!((map__28623 == null)))?((((map__28623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28623):map__28623);
var merge_fn = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq28618){
var G__28619 = cljs.core.first.call(null,seq28618);
var seq28618__$1 = cljs.core.next.call(null,seq28618);
var G__28620 = cljs.core.first.call(null,seq28618__$1);
var seq28618__$2 = cljs.core.next.call(null,seq28618__$1);
var G__28621 = cljs.core.first.call(null,seq28618__$2);
var seq28618__$3 = cljs.core.next.call(null,seq28618__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28619,G__28620,G__28621,seq28618__$3);
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
var G__28628__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__28628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28629__i = 0, G__28629__a = new Array(arguments.length -  0);
while (G__28629__i < G__28629__a.length) {G__28629__a[G__28629__i] = arguments[G__28629__i + 0]; ++G__28629__i;}
  args = new cljs.core.IndexedSeq(G__28629__a,0);
} 
return G__28628__delegate.call(this,args);};
G__28628.cljs$lang$maxFixedArity = 0;
G__28628.cljs$lang$applyTo = (function (arglist__28630){
var args = cljs.core.seq(arglist__28630);
return G__28628__delegate(args);
});
G__28628.cljs$core$IFn$_invoke$arity$variadic = G__28628__delegate;
return G__28628;
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
if(typeof com.rpl.specter.t_com$rpl$specter28631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28631 = (function (meta28632){
this.meta28632 = meta28632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28633,meta28632__$1){
var self__ = this;
var _28633__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28631(meta28632__$1));
});

com.rpl.specter.t_com$rpl$specter28631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28633){
var self__ = this;
var _28633__$1 = this;
return self__.meta28632;
});

com.rpl.specter.t_com$rpl$specter28631.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28631.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter28631.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter28631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28632","meta28632",-1440990753,null)], null);
});

com.rpl.specter.t_com$rpl$specter28631.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28631.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28631";

com.rpl.specter.t_com$rpl$specter28631.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28631");
});

com.rpl.specter.__GT_t_com$rpl$specter28631 = (function com$rpl$specter$__GT_t_com$rpl$specter28631(meta28632){
return (new com.rpl.specter.t_com$rpl$specter28631(meta28632));
});

}

return (new com.rpl.specter.t_com$rpl$specter28631(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28634 = (function (afn,meta28635){
this.afn = afn;
this.meta28635 = meta28635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28636,meta28635__$1){
var self__ = this;
var _28636__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28634(self__.afn,meta28635__$1));
});

com.rpl.specter.t_com$rpl$specter28634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28636){
var self__ = this;
var _28636__$1 = this;
return self__.meta28635;
});

com.rpl.specter.t_com$rpl$specter28634.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28634.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter28634.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter28634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta28635","meta28635",1625429673,null)], null);
});

com.rpl.specter.t_com$rpl$specter28634.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28634.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28634";

com.rpl.specter.t_com$rpl$specter28634.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28634");
});

com.rpl.specter.__GT_t_com$rpl$specter28634 = (function com$rpl$specter$__GT_t_com$rpl$specter28634(afn__$1,meta28635){
return (new com.rpl.specter.t_com$rpl$specter28634(afn__$1,meta28635));
});

}

return (new com.rpl.specter.t_com$rpl$specter28634(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28637 = (function (meta28638){
this.meta28638 = meta28638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28639,meta28638__$1){
var self__ = this;
var _28639__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28637(meta28638__$1));
});

com.rpl.specter.t_com$rpl$specter28637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28639){
var self__ = this;
var _28639__$1 = this;
return self__.meta28638;
});

com.rpl.specter.t_com$rpl$specter28637.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28637.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter28637.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter28637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28638","meta28638",-1191293947,null)], null);
});

com.rpl.specter.t_com$rpl$specter28637.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28637.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28637";

com.rpl.specter.t_com$rpl$specter28637.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28637");
});

com.rpl.specter.__GT_t_com$rpl$specter28637 = (function com$rpl$specter$__GT_t_com$rpl$specter28637(meta28638){
return (new com.rpl.specter.t_com$rpl$specter28637(meta28638));
});

}

return (new com.rpl.specter.t_com$rpl$specter28637(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__26273__auto__,v){
var ret__26274__auto__ = next_fn.call(null,v);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter28640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28640 = (function (meta28641){
this.meta28641 = meta28641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28642,meta28641__$1){
var self__ = this;
var _28642__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28640(meta28641__$1));
});

com.rpl.specter.t_com$rpl$specter28640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28642){
var self__ = this;
var _28642__$1 = this;
return self__.meta28641;
});

com.rpl.specter.t_com$rpl$specter28640.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28640.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__27395__auto____$1){
return (function (curr__26273__auto__,v){
var ret__26274__auto__ = next_fn.call(null,v);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
}
});})(next_fn,this__27395__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28640.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter28640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28641","meta28641",654978595,null)], null);
});

com.rpl.specter.t_com$rpl$specter28640.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28640.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28640";

com.rpl.specter.t_com$rpl$specter28640.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28640");
});

com.rpl.specter.__GT_t_com$rpl$specter28640 = (function com$rpl$specter$__GT_t_com$rpl$specter28640(meta28641){
return (new com.rpl.specter.t_com$rpl$specter28640(meta28641));
});

}

return (new com.rpl.specter.t_com$rpl$specter28640(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter28643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28643 = (function (meta28644){
this.meta28644 = meta28644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28645,meta28644__$1){
var self__ = this;
var _28645__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28643(meta28644__$1));
});

com.rpl.specter.t_com$rpl$specter28643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28645){
var self__ = this;
var _28645__$1 = this;
return self__.meta28644;
});

com.rpl.specter.t_com$rpl$specter28643.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28643.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter28643.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter28643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28644","meta28644",-1704160596,null)], null);
});

com.rpl.specter.t_com$rpl$specter28643.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28643.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28643";

com.rpl.specter.t_com$rpl$specter28643.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28643");
});

com.rpl.specter.__GT_t_com$rpl$specter28643 = (function com$rpl$specter$__GT_t_com$rpl$specter28643(meta28644){
return (new com.rpl.specter.t_com$rpl$specter28643(meta28644));
});

}

return (new com.rpl.specter.t_com$rpl$specter28643(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28646 = (function (start_fn,end_fn,meta28647){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta28647 = meta28647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28648,meta28647__$1){
var self__ = this;
var _28648__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28646(self__.start_fn,self__.end_fn,meta28647__$1));
});

com.rpl.specter.t_com$rpl$specter28646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28648){
var self__ = this;
var _28648__$1 = this;
return self__.meta28647;
});

com.rpl.specter.t_com$rpl$specter28646.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28646.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter28646.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter28646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta28647","meta28647",2134837588,null)], null);
});

com.rpl.specter.t_com$rpl$specter28646.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28646.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28646";

com.rpl.specter.t_com$rpl$specter28646.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28646");
});

com.rpl.specter.__GT_t_com$rpl$specter28646 = (function com$rpl$specter$__GT_t_com$rpl$specter28646(start_fn__$1,end_fn__$1,meta28647){
return (new com.rpl.specter.t_com$rpl$specter28646(start_fn__$1,end_fn__$1,meta28647));
});

}

return (new com.rpl.specter.t_com$rpl$specter28646(start_fn,end_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28649 = (function (start,end,meta28650){
this.start = start;
this.end = end;
this.meta28650 = meta28650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28651,meta28650__$1){
var self__ = this;
var _28651__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28649(self__.start,self__.end,meta28650__$1));
});

com.rpl.specter.t_com$rpl$specter28649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28651){
var self__ = this;
var _28651__$1 = this;
return self__.meta28650;
});

com.rpl.specter.t_com$rpl$specter28649.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28649.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter28649.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter28649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta28650","meta28650",2136224240,null)], null);
});

com.rpl.specter.t_com$rpl$specter28649.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28649.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28649";

com.rpl.specter.t_com$rpl$specter28649.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28649");
});

com.rpl.specter.__GT_t_com$rpl$specter28649 = (function com$rpl$specter$__GT_t_com$rpl$specter28649(start__$1,end__$1,meta28650){
return (new com.rpl.specter.t_com$rpl$specter28649(start__$1,end__$1,meta28650));
});

}

return (new com.rpl.specter.t_com$rpl$specter28649(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__26273__auto__,p__28656){
var vec__28657 = p__28656;
var s = cljs.core.nth.call(null,vec__28657,(0),null);
var e = cljs.core.nth.call(null,vec__28657,(1),null);
var ret__26274__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter28660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28660 = (function (pred,meta28661){
this.pred = pred;
this.meta28661 = meta28661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28662,meta28661__$1){
var self__ = this;
var _28662__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28660(self__.pred,meta28661__$1));
});

com.rpl.specter.t_com$rpl$specter28660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28662){
var self__ = this;
var _28662__$1 = this;
return self__.meta28661;
});

com.rpl.specter.t_com$rpl$specter28660.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28660.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__27395__auto____$1){
return (function (curr__26273__auto__,p__28663){
var vec__28664 = p__28663;
var s = cljs.core.nth.call(null,vec__28664,(0),null);
var e = cljs.core.nth.call(null,vec__28664,(1),null);
var ret__26274__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
}
});})(next_fn,this__27395__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter28660.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter28660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta28661","meta28661",-1759008821,null)], null);
});

com.rpl.specter.t_com$rpl$specter28660.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28660.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28660";

com.rpl.specter.t_com$rpl$specter28660.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28660");
});

com.rpl.specter.__GT_t_com$rpl$specter28660 = (function com$rpl$specter$__GT_t_com$rpl$specter28660(pred__$1,meta28661){
return (new com.rpl.specter.t_com$rpl$specter28660(pred__$1,meta28661));
});

}

return (new com.rpl.specter.t_com$rpl$specter28660(pred,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28667 = (function (meta28668){
this.meta28668 = meta28668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28669,meta28668__$1){
var self__ = this;
var _28669__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28667(meta28668__$1));
});

com.rpl.specter.t_com$rpl$specter28667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28669){
var self__ = this;
var _28669__$1 = this;
return self__.meta28668;
});

com.rpl.specter.t_com$rpl$specter28667.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28667.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter28667.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter28667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28668","meta28668",-1275035100,null)], null);
});

com.rpl.specter.t_com$rpl$specter28667.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28667.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28667";

com.rpl.specter.t_com$rpl$specter28667.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28667");
});

com.rpl.specter.__GT_t_com$rpl$specter28667 = (function com$rpl$specter$__GT_t_com$rpl$specter28667(meta28668){
return (new com.rpl.specter.t_com$rpl$specter28667(meta28668));
});

}

return (new com.rpl.specter.t_com$rpl$specter28667(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28670 = (function (meta28671){
this.meta28671 = meta28671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28672,meta28671__$1){
var self__ = this;
var _28672__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28670(meta28671__$1));
});

com.rpl.specter.t_com$rpl$specter28670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28672){
var self__ = this;
var _28672__$1 = this;
return self__.meta28671;
});

com.rpl.specter.t_com$rpl$specter28670.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28670.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter28670.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter28670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28671","meta28671",-1871706037,null)], null);
});

com.rpl.specter.t_com$rpl$specter28670.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28670.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28670";

com.rpl.specter.t_com$rpl$specter28670.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28670");
});

com.rpl.specter.__GT_t_com$rpl$specter28670 = (function com$rpl$specter$__GT_t_com$rpl$specter28670(meta28671){
return (new com.rpl.specter.t_com$rpl$specter28670(meta28671));
});

}

return (new com.rpl.specter.t_com$rpl$specter28670(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28673 = (function (aset,meta28674){
this.aset = aset;
this.meta28674 = meta28674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28675,meta28674__$1){
var self__ = this;
var _28675__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28673(self__.aset,meta28674__$1));
});

com.rpl.specter.t_com$rpl$specter28673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28675){
var self__ = this;
var _28675__$1 = this;
return self__.meta28674;
});

com.rpl.specter.t_com$rpl$specter28673.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28673.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter28673.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter28673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta28674","meta28674",1730890088,null)], null);
});

com.rpl.specter.t_com$rpl$specter28673.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28673.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28673";

com.rpl.specter.t_com$rpl$specter28673.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28673");
});

com.rpl.specter.__GT_t_com$rpl$specter28673 = (function com$rpl$specter$__GT_t_com$rpl$specter28673(aset__$1,meta28674){
return (new com.rpl.specter.t_com$rpl$specter28673(aset__$1,meta28674));
});

}

return (new com.rpl.specter.t_com$rpl$specter28673(aset,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28676 = (function (m_keys,meta28677){
this.m_keys = m_keys;
this.meta28677 = meta28677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28678,meta28677__$1){
var self__ = this;
var _28678__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28676(self__.m_keys,meta28677__$1));
});

com.rpl.specter.t_com$rpl$specter28676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28678){
var self__ = this;
var _28678__$1 = this;
return self__.meta28677;
});

com.rpl.specter.t_com$rpl$specter28676.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28676.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter28676.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter28676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta28677","meta28677",1834703698,null)], null);
});

com.rpl.specter.t_com$rpl$specter28676.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28676.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28676";

com.rpl.specter.t_com$rpl$specter28676.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28676");
});

com.rpl.specter.__GT_t_com$rpl$specter28676 = (function com$rpl$specter$__GT_t_com$rpl$specter28676(m_keys__$1,meta28677){
return (new com.rpl.specter.t_com$rpl$specter28676(m_keys__$1,meta28677));
});

}

return (new com.rpl.specter.t_com$rpl$specter28676(m_keys,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28679 = (function (afn,meta28680){
this.afn = afn;
this.meta28680 = meta28680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28681,meta28680__$1){
var self__ = this;
var _28681__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28679(self__.afn,meta28680__$1));
});

com.rpl.specter.t_com$rpl$specter28679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28681){
var self__ = this;
var _28681__$1 = this;
return self__.meta28680;
});

com.rpl.specter.t_com$rpl$specter28679.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28679.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter28679.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter28679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta28680","meta28680",-1041401870,null)], null);
});

com.rpl.specter.t_com$rpl$specter28679.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28679.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28679";

com.rpl.specter.t_com$rpl$specter28679.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28679");
});

com.rpl.specter.__GT_t_com$rpl$specter28679 = (function com$rpl$specter$__GT_t_com$rpl$specter28679(afn__$1,meta28680){
return (new com.rpl.specter.t_com$rpl$specter28679(afn__$1,meta28680));
});

}

return (new com.rpl.specter.t_com$rpl$specter28679(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28682 = (function (afn,meta28683){
this.afn = afn;
this.meta28683 = meta28683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28684,meta28683__$1){
var self__ = this;
var _28684__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28682(self__.afn,meta28683__$1));
});

com.rpl.specter.t_com$rpl$specter28682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28684){
var self__ = this;
var _28684__$1 = this;
return self__.meta28683;
});

com.rpl.specter.t_com$rpl$specter28682.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28682.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter28682.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter28682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta28683","meta28683",1161572793,null)], null);
});

com.rpl.specter.t_com$rpl$specter28682.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28682.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28682";

com.rpl.specter.t_com$rpl$specter28682.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28682");
});

com.rpl.specter.__GT_t_com$rpl$specter28682 = (function com$rpl$specter$__GT_t_com$rpl$specter28682(afn__$1,meta28683){
return (new com.rpl.specter.t_com$rpl$specter28682(afn__$1,meta28683));
});

}

return (new com.rpl.specter.t_com$rpl$specter28682(afn,null));
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
var G__28688__delegate = function (path){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter28685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28685 = (function (path,late,meta28686){
this.path = path;
this.late = late;
this.meta28686 = meta28686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28687,meta28686__$1){
var self__ = this;
var _28687__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28685(self__.path,self__.late,meta28686__$1));
});

com.rpl.specter.t_com$rpl$specter28685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28687){
var self__ = this;
var _28687__$1 = this;
return self__.meta28686;
});

com.rpl.specter.t_com$rpl$specter28685.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28685.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter28685.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__27395__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__27395__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter28685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta28686","meta28686",240074783,null)], null);
});

com.rpl.specter.t_com$rpl$specter28685.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28685.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28685";

com.rpl.specter.t_com$rpl$specter28685.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28685");
});

com.rpl.specter.__GT_t_com$rpl$specter28685 = (function com$rpl$specter$__GT_t_com$rpl$specter28685(path__$1,late__$1,meta28686){
return (new com.rpl.specter.t_com$rpl$specter28685(path__$1,late__$1,meta28686));
});

}

return (new com.rpl.specter.t_com$rpl$specter28685(path,late,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
};
var G__28688 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28689__i = 0, G__28689__a = new Array(arguments.length -  0);
while (G__28689__i < G__28689__a.length) {G__28689__a[G__28689__i] = arguments[G__28689__i + 0]; ++G__28689__i;}
  path = new cljs.core.IndexedSeq(G__28689__a,0);
} 
return G__28688__delegate.call(this,path);};
G__28688.cljs$lang$maxFixedArity = 0;
G__28688.cljs$lang$applyTo = (function (arglist__28690){
var path = cljs.core.seq(arglist__28690);
return G__28688__delegate(path);
});
G__28688.cljs$core$IFn$_invoke$arity$variadic = G__28688__delegate;
return G__28688;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter28691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28691 = (function (afn,meta28692){
this.afn = afn;
this.meta28692 = meta28692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28693,meta28692__$1){
var self__ = this;
var _28693__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28691(self__.afn,meta28692__$1));
});

com.rpl.specter.t_com$rpl$specter28691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28693){
var self__ = this;
var _28693__$1 = this;
return self__.meta28692;
});

com.rpl.specter.t_com$rpl$specter28691.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28691.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28691.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta28692","meta28692",5854157,null)], null);
});

com.rpl.specter.t_com$rpl$specter28691.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28691.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28691";

com.rpl.specter.t_com$rpl$specter28691.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28691");
});

com.rpl.specter.__GT_t_com$rpl$specter28691 = (function com$rpl$specter$__GT_t_com$rpl$specter28691(afn__$1,meta28692){
return (new com.rpl.specter.t_com$rpl$specter28691(afn__$1,meta28692));
});

}

return (new com.rpl.specter.t_com$rpl$specter28691(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28694 = (function (parse_fn,unparse_fn,meta28695){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta28695 = meta28695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28696,meta28695__$1){
var self__ = this;
var _28696__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28694(self__.parse_fn,self__.unparse_fn,meta28695__$1));
});

com.rpl.specter.t_com$rpl$specter28694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28696){
var self__ = this;
var _28696__$1 = this;
return self__.meta28695;
});

com.rpl.specter.t_com$rpl$specter28694.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28694.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28694.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter28694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta28695","meta28695",796992758,null)], null);
});

com.rpl.specter.t_com$rpl$specter28694.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28694.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28694";

com.rpl.specter.t_com$rpl$specter28694.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28694");
});

com.rpl.specter.__GT_t_com$rpl$specter28694 = (function com$rpl$specter$__GT_t_com$rpl$specter28694(parse_fn__$1,unparse_fn__$1,meta28695){
return (new com.rpl.specter.t_com$rpl$specter28694(parse_fn__$1,unparse_fn__$1,meta28695));
});

}

return (new com.rpl.specter.t_com$rpl$specter28694(parse_fn,unparse_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28697 = (function (meta28698){
this.meta28698 = meta28698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28699,meta28698__$1){
var self__ = this;
var _28699__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28697(meta28698__$1));
});

com.rpl.specter.t_com$rpl$specter28697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28699){
var self__ = this;
var _28699__$1 = this;
return self__.meta28698;
});

com.rpl.specter.t_com$rpl$specter28697.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28697.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28697.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter28697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28698","meta28698",1060244446,null)], null);
});

com.rpl.specter.t_com$rpl$specter28697.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28697.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28697";

com.rpl.specter.t_com$rpl$specter28697.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28697");
});

com.rpl.specter.__GT_t_com$rpl$specter28697 = (function com$rpl$specter$__GT_t_com$rpl$specter28697(meta28698){
return (new com.rpl.specter.t_com$rpl$specter28697(meta28698));
});

}

return (new com.rpl.specter.t_com$rpl$specter28697(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__28705__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter28702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28702 = (function (path,temp__4655__auto__,late,meta28703){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta28703 = meta28703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_28704,meta28703__$1){
var self__ = this;
var _28704__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28702(self__.path,self__.temp__4655__auto__,self__.late,meta28703__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_28704){
var self__ = this;
var _28704__$1 = this;
return self__.meta28703;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28702.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28702.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1,temp__4655__auto__){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__27395__auto____$1,temp__4655__auto__){
return (function (p1__28700_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__28700_SHARP_);
});})(next_fn,this__27395__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28702.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1,temp__4655__auto__){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__27395__auto____$1,temp__4655__auto__){
return (function (p1__28701_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__28701_SHARP_);
});})(next_fn,this__27395__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28702.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta28703","meta28703",58340188,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28702.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28702.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28702";

com.rpl.specter.t_com$rpl$specter28702.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28702");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter28702 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter28702(path__$1,temp__4655__auto____$1,late__$1,meta28703){
return (new com.rpl.specter.t_com$rpl$specter28702(path__$1,temp__4655__auto____$1,late__$1,meta28703));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter28702(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
}
};
var G__28705 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28706__i = 0, G__28706__a = new Array(arguments.length -  0);
while (G__28706__i < G__28706__a.length) {G__28706__a[G__28706__i] = arguments[G__28706__i + 0]; ++G__28706__i;}
  path = new cljs.core.IndexedSeq(G__28706__a,0);
} 
return G__28705__delegate.call(this,path);};
G__28705.cljs$lang$maxFixedArity = 0;
G__28705.cljs$lang$applyTo = (function (arglist__28707){
var path = cljs.core.seq(arglist__28707);
return G__28705__delegate(path);
});
G__28705.cljs$core$IFn$_invoke$arity$variadic = G__28705__delegate;
return G__28705;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__28713__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter28710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28710 = (function (path,temp__4655__auto__,late,meta28711){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta28711 = meta28711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_28712,meta28711__$1){
var self__ = this;
var _28712__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28710(self__.path,self__.temp__4655__auto__,self__.late,meta28711__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_28712){
var self__ = this;
var _28712__$1 = this;
return self__.meta28711;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28710.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28710.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1,temp__4655__auto__){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__27395__auto____$1,temp__4655__auto__){
return (function (p1__28708_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__28708_SHARP_);
});})(next_fn,this__27395__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28710.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1,temp__4655__auto__){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__27395__auto____$1,temp__4655__auto__){
return (function (p1__28709_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__28709_SHARP_);
});})(next_fn,this__27395__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28710.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta28711","meta28711",57193193,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28710.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28710.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28710";

com.rpl.specter.t_com$rpl$specter28710.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28710");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter28710 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter28710(path__$1,temp__4655__auto____$1,late__$1,meta28711){
return (new com.rpl.specter.t_com$rpl$specter28710(path__$1,temp__4655__auto____$1,late__$1,meta28711));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter28710(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
}
};
var G__28713 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28714__i = 0, G__28714__a = new Array(arguments.length -  0);
while (G__28714__i < G__28714__a.length) {G__28714__a[G__28714__i] = arguments[G__28714__i + 0]; ++G__28714__i;}
  path = new cljs.core.IndexedSeq(G__28714__a,0);
} 
return G__28713__delegate.call(this,path);};
G__28713.cljs$lang$maxFixedArity = 0;
G__28713.cljs$lang$applyTo = (function (arglist__28715){
var path = cljs.core.seq(arglist__28715);
return G__28713__delegate(path);
});
G__28713.cljs$core$IFn$_invoke$arity$variadic = G__28713__delegate;
return G__28713;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__28716__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__28716 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28717__i = 0, G__28717__a = new Array(arguments.length -  0);
while (G__28717__i < G__28717__a.length) {G__28717__a[G__28717__i] = arguments[G__28717__i + 0]; ++G__28717__i;}
  path = new cljs.core.IndexedSeq(G__28717__a,0);
} 
return G__28716__delegate.call(this,path);};
G__28716.cljs$lang$maxFixedArity = 0;
G__28716.cljs$lang$applyTo = (function (arglist__28718){
var path = cljs.core.seq(arglist__28718);
return G__28716__delegate(path);
});
G__28716.cljs$core$IFn$_invoke$arity$variadic = G__28716__delegate;
return G__28716;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter28719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28719 = (function (path,update_fn,late,late_fn,meta28720){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta28720 = meta28720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28721,meta28720__$1){
var self__ = this;
var _28721__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28719(self__.path,self__.update_fn,self__.late,self__.late_fn,meta28720__$1));
});

com.rpl.specter.t_com$rpl$specter28719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28721){
var self__ = this;
var _28721__$1 = this;
return self__.meta28720;
});

com.rpl.specter.t_com$rpl$specter28719.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28719.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter28719.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter28719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta28720","meta28720",-902012297,null)], null);
});

com.rpl.specter.t_com$rpl$specter28719.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28719.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28719";

com.rpl.specter.t_com$rpl$specter28719.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28719");
});

com.rpl.specter.__GT_t_com$rpl$specter28719 = (function com$rpl$specter$__GT_t_com$rpl$specter28719(path__$1,update_fn__$1,late__$1,late_fn__$1,meta28720){
return (new com.rpl.specter.t_com$rpl$specter28719(path__$1,update_fn__$1,late__$1,late_fn__$1,meta28720));
});

}

return (new com.rpl.specter.t_com$rpl$specter28719(path,update_fn,late,late_fn,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter28722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28722 = (function (path,reduce_fn,late,late_fn,meta28723){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta28723 = meta28723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28724,meta28723__$1){
var self__ = this;
var _28724__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28722(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta28723__$1));
});

com.rpl.specter.t_com$rpl$specter28722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28724){
var self__ = this;
var _28724__$1 = this;
return self__.meta28723;
});

com.rpl.specter.t_com$rpl$specter28722.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28722.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter28722.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter28722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta28723","meta28723",1017429670,null)], null);
});

com.rpl.specter.t_com$rpl$specter28722.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28722.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28722";

com.rpl.specter.t_com$rpl$specter28722.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28722");
});

com.rpl.specter.__GT_t_com$rpl$specter28722 = (function com$rpl$specter$__GT_t_com$rpl$specter28722(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta28723){
return (new com.rpl.specter.t_com$rpl$specter28722(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta28723));
});

}

return (new com.rpl.specter.t_com$rpl$specter28722(path,reduce_fn,late,late_fn,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
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
if(typeof com.rpl.specter.t_com$rpl$specter28725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28725 = (function (v,meta28726){
this.v = v;
this.meta28726 = meta28726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28727,meta28726__$1){
var self__ = this;
var _28727__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28725(self__.v,meta28726__$1));
});

com.rpl.specter.t_com$rpl$specter28725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28727){
var self__ = this;
var _28727__$1 = this;
return self__.meta28726;
});

com.rpl.specter.t_com$rpl$specter28725.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28725.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter28725.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter28725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta28726","meta28726",-1700889444,null)], null);
});

com.rpl.specter.t_com$rpl$specter28725.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28725.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28725";

com.rpl.specter.t_com$rpl$specter28725.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28725");
});

com.rpl.specter.__GT_t_com$rpl$specter28725 = (function com$rpl$specter$__GT_t_com$rpl$specter28725(v__$1,meta28726){
return (new com.rpl.specter.t_com$rpl$specter28725(v__$1,meta28726));
});

}

return (new com.rpl.specter.t_com$rpl$specter28725(v,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter28728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28728 = (function (meta28729){
this.meta28729 = meta28729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28730,meta28729__$1){
var self__ = this;
var _28730__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28728(meta28729__$1));
});

com.rpl.specter.t_com$rpl$specter28728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28730){
var self__ = this;
var _28730__$1 = this;
return self__.meta28729;
});

com.rpl.specter.t_com$rpl$specter28728.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28728.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter28728.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27395__auto__,vals__27396__auto__,structure,next_fn__27397__auto__){
var self__ = this;
var this__27395__auto____$1 = this;
var next_fn = ((function (this__27395__auto____$1){
return (function (s__27398__auto__){
return next_fn__27397__auto__.call(null,vals__27396__auto__,s__27398__auto__);
});})(this__27395__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter28728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28729","meta28729",-71876822,null)], null);
});

com.rpl.specter.t_com$rpl$specter28728.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28728.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28728";

com.rpl.specter.t_com$rpl$specter28728.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28728");
});

com.rpl.specter.__GT_t_com$rpl$specter28728 = (function com$rpl$specter$__GT_t_com$rpl$specter28728(meta28729){
return (new com.rpl.specter.t_com$rpl$specter28728(meta28729));
});

}

return (new com.rpl.specter.t_com$rpl$specter28728(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__28734__delegate = function (path){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter28731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28731 = (function (path,late,meta28732){
this.path = path;
this.late = late;
this.meta28732 = meta28732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28733,meta28732__$1){
var self__ = this;
var _28733__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28731(self__.path,self__.late,meta28732__$1));
});

com.rpl.specter.t_com$rpl$specter28731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28733){
var self__ = this;
var _28733__$1 = this;
return self__.meta28732;
});

com.rpl.specter.t_com$rpl$specter28731.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28731.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter28731.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter28731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta28732","meta28732",-847618985,null)], null);
});

com.rpl.specter.t_com$rpl$specter28731.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28731.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28731";

com.rpl.specter.t_com$rpl$specter28731.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28731");
});

com.rpl.specter.__GT_t_com$rpl$specter28731 = (function com$rpl$specter$__GT_t_com$rpl$specter28731(path__$1,late__$1,meta28732){
return (new com.rpl.specter.t_com$rpl$specter28731(path__$1,late__$1,meta28732));
});

}

return (new com.rpl.specter.t_com$rpl$specter28731(path,late,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
};
var G__28734 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28735__i = 0, G__28735__a = new Array(arguments.length -  0);
while (G__28735__i < G__28735__a.length) {G__28735__a[G__28735__i] = arguments[G__28735__i + 0]; ++G__28735__i;}
  path = new cljs.core.IndexedSeq(G__28735__a,0);
} 
return G__28734__delegate.call(this,path);};
G__28734.cljs$lang$maxFixedArity = 0;
G__28734.cljs$lang$applyTo = (function (arglist__28736){
var path = cljs.core.seq(arglist__28736);
return G__28734__delegate(path);
});
G__28734.cljs$core$IFn$_invoke$arity$variadic = G__28734__delegate;
return G__28734;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__28740__delegate = function (path){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter28737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28737 = (function (path,late,meta28738){
this.path = path;
this.late = late;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28737(self__.path,self__.late,meta28738__$1));
});

com.rpl.specter.t_com$rpl$specter28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

com.rpl.specter.t_com$rpl$specter28737.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28737.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter28737.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter28737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});

com.rpl.specter.t_com$rpl$specter28737.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28737.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28737";

com.rpl.specter.t_com$rpl$specter28737.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28737");
});

com.rpl.specter.__GT_t_com$rpl$specter28737 = (function com$rpl$specter$__GT_t_com$rpl$specter28737(path__$1,late__$1,meta28738){
return (new com.rpl.specter.t_com$rpl$specter28737(path__$1,late__$1,meta28738));
});

}

return (new com.rpl.specter.t_com$rpl$specter28737(path,late,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
};
var G__28740 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28741__i = 0, G__28741__a = new Array(arguments.length -  0);
while (G__28741__i < G__28741__a.length) {G__28741__a[G__28741__i] = arguments[G__28741__i + 0]; ++G__28741__i;}
  path = new cljs.core.IndexedSeq(G__28741__a,0);
} 
return G__28740__delegate.call(this,path);};
G__28740.cljs$lang$maxFixedArity = 0;
G__28740.cljs$lang$applyTo = (function (arglist__28742){
var path = cljs.core.seq(arglist__28742);
return G__28740__delegate(path);
});
G__28740.cljs$core$IFn$_invoke$arity$variadic = G__28740__delegate;
return G__28740;
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
if(typeof com.rpl.specter.t_com$rpl$specter28743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28743 = (function (val,meta28744){
this.val = val;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28745,meta28744__$1){
var self__ = this;
var _28745__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28743(self__.val,meta28744__$1));
});

com.rpl.specter.t_com$rpl$specter28743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28745){
var self__ = this;
var _28745__$1 = this;
return self__.meta28744;
});

com.rpl.specter.t_com$rpl$specter28743.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28743.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter28743.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28030__auto__,vals__28031__auto__,structure,next_fn__28032__auto__){
var self__ = this;
var this__28030__auto____$1 = this;
return next_fn__28032__auto__.call(null,cljs.core.conj.call(null,vals__28031__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter28743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null)], null);
});

com.rpl.specter.t_com$rpl$specter28743.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28743.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28743";

com.rpl.specter.t_com$rpl$specter28743.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28743");
});

com.rpl.specter.__GT_t_com$rpl$specter28743 = (function com$rpl$specter$__GT_t_com$rpl$specter28743(val__$1,meta28744){
return (new com.rpl.specter.t_com$rpl$specter28743(val__$1,meta28744));
});

}

return (new com.rpl.specter.t_com$rpl$specter28743(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter28746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28746 = (function (meta28747){
this.meta28747 = meta28747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28748,meta28747__$1){
var self__ = this;
var _28748__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28746(meta28747__$1));
});

com.rpl.specter.t_com$rpl$specter28746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28748){
var self__ = this;
var _28748__$1 = this;
return self__.meta28747;
});

com.rpl.specter.t_com$rpl$specter28746.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28746.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter28746.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter28746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28747","meta28747",812716547,null)], null);
});

com.rpl.specter.t_com$rpl$specter28746.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28746.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28746";

com.rpl.specter.t_com$rpl$specter28746.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28746");
});

com.rpl.specter.__GT_t_com$rpl$specter28746 = (function com$rpl$specter$__GT_t_com$rpl$specter28746(meta28747){
return (new com.rpl.specter.t_com$rpl$specter28746(meta28747));
});

}

return (new com.rpl.specter.t_com$rpl$specter28746(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__28757 = null;
var G__28757__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__28757__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter28751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28751 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta28752){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta28752 = meta28752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_28753,meta28752__$1){
var self__ = this;
var _28753__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28751(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta28752__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_28753){
var self__ = this;
var _28753__$1 = this;
return self__.meta28752;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28751.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28751.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28751.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28751.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta28752","meta28752",-83234868,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28751.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28751.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28751";

com.rpl.specter.t_com$rpl$specter28751.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28751");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter28751 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter28751(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta28752){
return (new com.rpl.specter.t_com$rpl$specter28751(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta28752));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter28751(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
} else {
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter28754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28754 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta28755){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta28755 = meta28755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_28756,meta28755__$1){
var self__ = this;
var _28756__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28754(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta28755__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_28756){
var self__ = this;
var _28756__$1 = this;
return self__.meta28755;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28754.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28754.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__28749_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__28749_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28754.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__28750_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__28750_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28754.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta28755","meta28755",1413291984,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter28754.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28754.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28754";

com.rpl.specter.t_com$rpl$specter28754.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28754");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter28754 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter28754(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta28755){
return (new com.rpl.specter.t_com$rpl$specter28754(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta28755));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter28754(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
}
});
G__28757 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__28757__2.call(this,cond_p,then_path);
case 3:
return G__28757__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28757.cljs$core$IFn$_invoke$arity$2 = G__28757__2;
G__28757.cljs$core$IFn$_invoke$arity$3 = G__28757__3;
return G__28757;
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
var G__28762__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__28758){
var vec__28759 = p__28758;
var tester = cljs.core.nth.call(null,vec__28759,(0),null);
var apath = cljs.core.nth.call(null,vec__28759,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__28762 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__28763__i = 0, G__28763__a = new Array(arguments.length -  0);
while (G__28763__i < G__28763__a.length) {G__28763__a[G__28763__i] = arguments[G__28763__i + 0]; ++G__28763__i;}
  conds = new cljs.core.IndexedSeq(G__28763__a,0);
} 
return G__28762__delegate.call(this,conds);};
G__28762.cljs$lang$maxFixedArity = 0;
G__28762.cljs$lang$applyTo = (function (arglist__28764){
var conds = cljs.core.seq(arglist__28764);
return G__28762__delegate(conds);
});
G__28762.cljs$core$IFn$_invoke$arity$variadic = G__28762__delegate;
return G__28762;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__28772 = null;
var G__28772__0 = (function (){
return com.rpl.specter.STAY;
});
var G__28772__1 = (function (path){
return path;
});
var G__28772__2 = (function (path1,path2){
var builder__28033__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter28765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter28765 = (function (path1,path2,late1,late2,meta28766){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter28765(self__.path1,self__.path2,self__.late1,self__.late2,meta28766__$1));
});

com.rpl.specter.t_com$rpl$specter28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});

com.rpl.specter.t_com$rpl$specter28765.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter28765.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter28765.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter28765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null)], null);
});

com.rpl.specter.t_com$rpl$specter28765.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter28765.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter28765";

com.rpl.specter.t_com$rpl$specter28765.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter28765");
});

com.rpl.specter.__GT_t_com$rpl$specter28765 = (function com$rpl$specter$__GT_t_com$rpl$specter28765(path1__$1,path2__$1,late1__$1,late2__$1,meta28766){
return (new com.rpl.specter.t_com$rpl$specter28765(path1__$1,path2__$1,late1__$1,late2__$1,meta28766));
});

}

return (new com.rpl.specter.t_com$rpl$specter28765(path1,path2,late1,late2,null));
}));
var curr_params__28034__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28034__auto__)){
return cljs.core.apply.call(null,builder__28033__auto__,curr_params__28034__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28033__auto__,curr_params__28034__auto__);
}
});
var G__28772__3 = (function() { 
var G__28773__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__28773 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__28774__i = 0, G__28774__a = new Array(arguments.length -  2);
while (G__28774__i < G__28774__a.length) {G__28774__a[G__28774__i] = arguments[G__28774__i + 2]; ++G__28774__i;}
  paths = new cljs.core.IndexedSeq(G__28774__a,0);
} 
return G__28773__delegate.call(this,path1,path2,paths);};
G__28773.cljs$lang$maxFixedArity = 2;
G__28773.cljs$lang$applyTo = (function (arglist__28775){
var path1 = cljs.core.first(arglist__28775);
arglist__28775 = cljs.core.next(arglist__28775);
var path2 = cljs.core.first(arglist__28775);
var paths = cljs.core.rest(arglist__28775);
return G__28773__delegate(path1,path2,paths);
});
G__28773.cljs$core$IFn$_invoke$arity$variadic = G__28773__delegate;
return G__28773;
})()
;
G__28772 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__28772__0.call(this);
case 1:
return G__28772__1.call(this,path1);
case 2:
return G__28772__2.call(this,path1,path2);
default:
var G__28776 = null;
if (arguments.length > 2) {
var G__28777__i = 0, G__28777__a = new Array(arguments.length -  2);
while (G__28777__i < G__28777__a.length) {G__28777__a[G__28777__i] = arguments[G__28777__i + 2]; ++G__28777__i;}
G__28776 = new cljs.core.IndexedSeq(G__28777__a,0);
}
return G__28772__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__28776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28772.cljs$lang$maxFixedArity = 2;
G__28772.cljs$lang$applyTo = G__28772__3.cljs$lang$applyTo;
G__28772.cljs$core$IFn$_invoke$arity$0 = G__28772__0;
G__28772.cljs$core$IFn$_invoke$arity$1 = G__28772__1;
G__28772.cljs$core$IFn$_invoke$arity$2 = G__28772__2;
G__28772.cljs$core$IFn$_invoke$arity$variadic = G__28772__3.cljs$core$IFn$_invoke$arity$variadic;
return G__28772;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__28778__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__28778 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28779__i = 0, G__28779__a = new Array(arguments.length -  0);
while (G__28779__i < G__28779__a.length) {G__28779__a[G__28779__i] = arguments[G__28779__i + 0]; ++G__28779__i;}
  path = new cljs.core.IndexedSeq(G__28779__a,0);
} 
return G__28778__delegate.call(this,path);};
G__28778.cljs$lang$maxFixedArity = 0;
G__28778.cljs$lang$applyTo = (function (arglist__28780){
var path = cljs.core.seq(arglist__28780);
return G__28778__delegate(path);
});
G__28778.cljs$core$IFn$_invoke$arity$variadic = G__28778__delegate;
return G__28778;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__28781__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__28781 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__28782__i = 0, G__28782__a = new Array(arguments.length -  0);
while (G__28782__i < G__28782__a.length) {G__28782__a[G__28782__i] = arguments[G__28782__i + 0]; ++G__28782__i;}
  path = new cljs.core.IndexedSeq(G__28782__a,0);
} 
return G__28781__delegate.call(this,path);};
G__28781.cljs$lang$maxFixedArity = 0;
G__28781.cljs$lang$applyTo = (function (arglist__28783){
var path = cljs.core.seq(arglist__28783);
return G__28781__delegate(path);
});
G__28781.cljs$core$IFn$_invoke$arity$variadic = G__28781__delegate;
return G__28781;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1484702555058
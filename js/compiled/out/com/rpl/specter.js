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
var len__26121__auto___131299 = arguments.length;
var i__26122__auto___131300 = (0);
while(true){
if((i__26122__auto___131300 < len__26121__auto___131299)){
args__26128__auto__.push((arguments[i__26122__auto___131300]));

var G__131301 = (i__26122__auto___131300 + (1));
i__26122__auto___131300 = G__131301;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq131298){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq131298));
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
var len__26121__auto___131309 = arguments.length;
var i__26122__auto___131310 = (0);
while(true){
if((i__26122__auto___131310 < len__26121__auto___131309)){
args__26128__auto__.push((arguments[i__26122__auto___131310]));

var G__131311 = (i__26122__auto___131310 + (1));
i__26122__auto___131310 = G__131311;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__131306){
var map__131307 = p__131306;
var map__131307__$1 = ((((!((map__131307 == null)))?((((map__131307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131307):map__131307);
var merge_fn = cljs.core.get.call(null,map__131307__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq131302){
var G__131303 = cljs.core.first.call(null,seq131302);
var seq131302__$1 = cljs.core.next.call(null,seq131302);
var G__131304 = cljs.core.first.call(null,seq131302__$1);
var seq131302__$2 = cljs.core.next.call(null,seq131302__$1);
var G__131305 = cljs.core.first.call(null,seq131302__$2);
var seq131302__$3 = cljs.core.next.call(null,seq131302__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__131303,G__131304,G__131305,seq131302__$3);
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
var G__131312__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__131312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131313__i = 0, G__131313__a = new Array(arguments.length -  0);
while (G__131313__i < G__131313__a.length) {G__131313__a[G__131313__i] = arguments[G__131313__i + 0]; ++G__131313__i;}
  args = new cljs.core.IndexedSeq(G__131313__a,0);
} 
return G__131312__delegate.call(this,args);};
G__131312.cljs$lang$maxFixedArity = 0;
G__131312.cljs$lang$applyTo = (function (arglist__131314){
var args = cljs.core.seq(arglist__131314);
return G__131312__delegate(args);
});
G__131312.cljs$core$IFn$_invoke$arity$variadic = G__131312__delegate;
return G__131312;
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
if(typeof com.rpl.specter.t_com$rpl$specter131315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131315 = (function (meta131316){
this.meta131316 = meta131316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131317,meta131316__$1){
var self__ = this;
var _131317__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131315(meta131316__$1));
});

com.rpl.specter.t_com$rpl$specter131315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131317){
var self__ = this;
var _131317__$1 = this;
return self__.meta131316;
});

com.rpl.specter.t_com$rpl$specter131315.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131315.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter131315.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter131315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131316","meta131316",446461713,null)], null);
});

com.rpl.specter.t_com$rpl$specter131315.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131315.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131315";

com.rpl.specter.t_com$rpl$specter131315.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131315");
});

com.rpl.specter.__GT_t_com$rpl$specter131315 = (function com$rpl$specter$__GT_t_com$rpl$specter131315(meta131316){
return (new com.rpl.specter.t_com$rpl$specter131315(meta131316));
});

}

return (new com.rpl.specter.t_com$rpl$specter131315(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131318 = (function (afn,meta131319){
this.afn = afn;
this.meta131319 = meta131319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131320,meta131319__$1){
var self__ = this;
var _131320__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131318(self__.afn,meta131319__$1));
});

com.rpl.specter.t_com$rpl$specter131318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131320){
var self__ = this;
var _131320__$1 = this;
return self__.meta131319;
});

com.rpl.specter.t_com$rpl$specter131318.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131318.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter131318.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter131318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta131319","meta131319",-417000589,null)], null);
});

com.rpl.specter.t_com$rpl$specter131318.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131318.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131318";

com.rpl.specter.t_com$rpl$specter131318.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131318");
});

com.rpl.specter.__GT_t_com$rpl$specter131318 = (function com$rpl$specter$__GT_t_com$rpl$specter131318(afn__$1,meta131319){
return (new com.rpl.specter.t_com$rpl$specter131318(afn__$1,meta131319));
});

}

return (new com.rpl.specter.t_com$rpl$specter131318(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131321 = (function (meta131322){
this.meta131322 = meta131322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131323,meta131322__$1){
var self__ = this;
var _131323__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131321(meta131322__$1));
});

com.rpl.specter.t_com$rpl$specter131321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131323){
var self__ = this;
var _131323__$1 = this;
return self__.meta131322;
});

com.rpl.specter.t_com$rpl$specter131321.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131321.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter131321.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter131321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131322","meta131322",-1205645616,null)], null);
});

com.rpl.specter.t_com$rpl$specter131321.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131321.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131321";

com.rpl.specter.t_com$rpl$specter131321.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131321");
});

com.rpl.specter.__GT_t_com$rpl$specter131321 = (function com$rpl$specter$__GT_t_com$rpl$specter131321(meta131322){
return (new com.rpl.specter.t_com$rpl$specter131321(meta131322));
});

}

return (new com.rpl.specter.t_com$rpl$specter131321(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131324 = (function (meta131325){
this.meta131325 = meta131325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131326,meta131325__$1){
var self__ = this;
var _131326__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131324(meta131325__$1));
});

com.rpl.specter.t_com$rpl$specter131324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131326){
var self__ = this;
var _131326__$1 = this;
return self__.meta131325;
});

com.rpl.specter.t_com$rpl$specter131324.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131324.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131324.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter131324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131325","meta131325",338137113,null)], null);
});

com.rpl.specter.t_com$rpl$specter131324.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131324.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131324";

com.rpl.specter.t_com$rpl$specter131324.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131324");
});

com.rpl.specter.__GT_t_com$rpl$specter131324 = (function com$rpl$specter$__GT_t_com$rpl$specter131324(meta131325){
return (new com.rpl.specter.t_com$rpl$specter131324(meta131325));
});

}

return (new com.rpl.specter.t_com$rpl$specter131324(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter131327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131327 = (function (meta131328){
this.meta131328 = meta131328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131329,meta131328__$1){
var self__ = this;
var _131329__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131327(meta131328__$1));
});

com.rpl.specter.t_com$rpl$specter131327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131329){
var self__ = this;
var _131329__$1 = this;
return self__.meta131328;
});

com.rpl.specter.t_com$rpl$specter131327.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131327.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter131327.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter131327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131328","meta131328",941360601,null)], null);
});

com.rpl.specter.t_com$rpl$specter131327.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131327.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131327";

com.rpl.specter.t_com$rpl$specter131327.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131327");
});

com.rpl.specter.__GT_t_com$rpl$specter131327 = (function com$rpl$specter$__GT_t_com$rpl$specter131327(meta131328){
return (new com.rpl.specter.t_com$rpl$specter131327(meta131328));
});

}

return (new com.rpl.specter.t_com$rpl$specter131327(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131330 = (function (start_fn,end_fn,meta131331){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta131331 = meta131331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131332,meta131331__$1){
var self__ = this;
var _131332__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131330(self__.start_fn,self__.end_fn,meta131331__$1));
});

com.rpl.specter.t_com$rpl$specter131330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131332){
var self__ = this;
var _131332__$1 = this;
return self__.meta131331;
});

com.rpl.specter.t_com$rpl$specter131330.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131330.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter131330.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter131330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta131331","meta131331",1030357581,null)], null);
});

com.rpl.specter.t_com$rpl$specter131330.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131330.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131330";

com.rpl.specter.t_com$rpl$specter131330.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131330");
});

com.rpl.specter.__GT_t_com$rpl$specter131330 = (function com$rpl$specter$__GT_t_com$rpl$specter131330(start_fn__$1,end_fn__$1,meta131331){
return (new com.rpl.specter.t_com$rpl$specter131330(start_fn__$1,end_fn__$1,meta131331));
});

}

return (new com.rpl.specter.t_com$rpl$specter131330(start_fn,end_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131333 = (function (start,end,meta131334){
this.start = start;
this.end = end;
this.meta131334 = meta131334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131335,meta131334__$1){
var self__ = this;
var _131335__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131333(self__.start,self__.end,meta131334__$1));
});

com.rpl.specter.t_com$rpl$specter131333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131335){
var self__ = this;
var _131335__$1 = this;
return self__.meta131334;
});

com.rpl.specter.t_com$rpl$specter131333.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131333.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter131333.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter131333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta131334","meta131334",-156105941,null)], null);
});

com.rpl.specter.t_com$rpl$specter131333.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131333.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131333";

com.rpl.specter.t_com$rpl$specter131333.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131333");
});

com.rpl.specter.__GT_t_com$rpl$specter131333 = (function com$rpl$specter$__GT_t_com$rpl$specter131333(start__$1,end__$1,meta131334){
return (new com.rpl.specter.t_com$rpl$specter131333(start__$1,end__$1,meta131334));
});

}

return (new com.rpl.specter.t_com$rpl$specter131333(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__28538__auto__,p__131340){
var vec__131341 = p__131340;
var s = cljs.core.nth.call(null,vec__131341,(0),null);
var e = cljs.core.nth.call(null,vec__131341,(1),null);
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
if(typeof com.rpl.specter.t_com$rpl$specter131344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131344 = (function (pred,meta131345){
this.pred = pred;
this.meta131345 = meta131345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131346,meta131345__$1){
var self__ = this;
var _131346__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131344(self__.pred,meta131345__$1));
});

com.rpl.specter.t_com$rpl$specter131344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131346){
var self__ = this;
var _131346__$1 = this;
return self__.meta131345;
});

com.rpl.specter.t_com$rpl$specter131344.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131344.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__30215__auto____$1){
return (function (curr__28538__auto__,p__131347){
var vec__131348 = p__131347;
var s = cljs.core.nth.call(null,vec__131348,(0),null);
var e = cljs.core.nth.call(null,vec__131348,(1),null);
var ret__28539__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__28539__auto__ === com.rpl.specter.NONE)){
return curr__28538__auto__;
} else {
return ret__28539__auto__;
}
});})(next_fn,this__30215__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter131344.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter131344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta131345","meta131345",-479908328,null)], null);
});

com.rpl.specter.t_com$rpl$specter131344.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131344.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131344";

com.rpl.specter.t_com$rpl$specter131344.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131344");
});

com.rpl.specter.__GT_t_com$rpl$specter131344 = (function com$rpl$specter$__GT_t_com$rpl$specter131344(pred__$1,meta131345){
return (new com.rpl.specter.t_com$rpl$specter131344(pred__$1,meta131345));
});

}

return (new com.rpl.specter.t_com$rpl$specter131344(pred,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131351 = (function (meta131352){
this.meta131352 = meta131352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131353,meta131352__$1){
var self__ = this;
var _131353__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131351(meta131352__$1));
});

com.rpl.specter.t_com$rpl$specter131351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131353){
var self__ = this;
var _131353__$1 = this;
return self__.meta131352;
});

com.rpl.specter.t_com$rpl$specter131351.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131351.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter131351.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131352","meta131352",-252541851,null)], null);
});

com.rpl.specter.t_com$rpl$specter131351.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131351.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131351";

com.rpl.specter.t_com$rpl$specter131351.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131351");
});

com.rpl.specter.__GT_t_com$rpl$specter131351 = (function com$rpl$specter$__GT_t_com$rpl$specter131351(meta131352){
return (new com.rpl.specter.t_com$rpl$specter131351(meta131352));
});

}

return (new com.rpl.specter.t_com$rpl$specter131351(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131354 = (function (meta131355){
this.meta131355 = meta131355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131356,meta131355__$1){
var self__ = this;
var _131356__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131354(meta131355__$1));
});

com.rpl.specter.t_com$rpl$specter131354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131356){
var self__ = this;
var _131356__$1 = this;
return self__.meta131355;
});

com.rpl.specter.t_com$rpl$specter131354.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131354.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter131354.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131355","meta131355",-1324951955,null)], null);
});

com.rpl.specter.t_com$rpl$specter131354.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131354.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131354";

com.rpl.specter.t_com$rpl$specter131354.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131354");
});

com.rpl.specter.__GT_t_com$rpl$specter131354 = (function com$rpl$specter$__GT_t_com$rpl$specter131354(meta131355){
return (new com.rpl.specter.t_com$rpl$specter131354(meta131355));
});

}

return (new com.rpl.specter.t_com$rpl$specter131354(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131357 = (function (aset,meta131358){
this.aset = aset;
this.meta131358 = meta131358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131359,meta131358__$1){
var self__ = this;
var _131359__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131357(self__.aset,meta131358__$1));
});

com.rpl.specter.t_com$rpl$specter131357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131359){
var self__ = this;
var _131359__$1 = this;
return self__.meta131358;
});

com.rpl.specter.t_com$rpl$specter131357.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131357.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter131357.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta131358","meta131358",570281172,null)], null);
});

com.rpl.specter.t_com$rpl$specter131357.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131357.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131357";

com.rpl.specter.t_com$rpl$specter131357.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131357");
});

com.rpl.specter.__GT_t_com$rpl$specter131357 = (function com$rpl$specter$__GT_t_com$rpl$specter131357(aset__$1,meta131358){
return (new com.rpl.specter.t_com$rpl$specter131357(aset__$1,meta131358));
});

}

return (new com.rpl.specter.t_com$rpl$specter131357(aset,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131360 = (function (m_keys,meta131361){
this.m_keys = m_keys;
this.meta131361 = meta131361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131362,meta131361__$1){
var self__ = this;
var _131362__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131360(self__.m_keys,meta131361__$1));
});

com.rpl.specter.t_com$rpl$specter131360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131362){
var self__ = this;
var _131362__$1 = this;
return self__.meta131361;
});

com.rpl.specter.t_com$rpl$specter131360.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131360.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter131360.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta131361","meta131361",-1737288816,null)], null);
});

com.rpl.specter.t_com$rpl$specter131360.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131360.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131360";

com.rpl.specter.t_com$rpl$specter131360.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131360");
});

com.rpl.specter.__GT_t_com$rpl$specter131360 = (function com$rpl$specter$__GT_t_com$rpl$specter131360(m_keys__$1,meta131361){
return (new com.rpl.specter.t_com$rpl$specter131360(m_keys__$1,meta131361));
});

}

return (new com.rpl.specter.t_com$rpl$specter131360(m_keys,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131363 = (function (afn,meta131364){
this.afn = afn;
this.meta131364 = meta131364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131365,meta131364__$1){
var self__ = this;
var _131365__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131363(self__.afn,meta131364__$1));
});

com.rpl.specter.t_com$rpl$specter131363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131365){
var self__ = this;
var _131365__$1 = this;
return self__.meta131364;
});

com.rpl.specter.t_com$rpl$specter131363.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131363.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter131363.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter131363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta131364","meta131364",2060340195,null)], null);
});

com.rpl.specter.t_com$rpl$specter131363.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131363.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131363";

com.rpl.specter.t_com$rpl$specter131363.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131363");
});

com.rpl.specter.__GT_t_com$rpl$specter131363 = (function com$rpl$specter$__GT_t_com$rpl$specter131363(afn__$1,meta131364){
return (new com.rpl.specter.t_com$rpl$specter131363(afn__$1,meta131364));
});

}

return (new com.rpl.specter.t_com$rpl$specter131363(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131366 = (function (afn,meta131367){
this.afn = afn;
this.meta131367 = meta131367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131368,meta131367__$1){
var self__ = this;
var _131368__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131366(self__.afn,meta131367__$1));
});

com.rpl.specter.t_com$rpl$specter131366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131368){
var self__ = this;
var _131368__$1 = this;
return self__.meta131367;
});

com.rpl.specter.t_com$rpl$specter131366.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131366.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter131366.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter131366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta131367","meta131367",2007341179,null)], null);
});

com.rpl.specter.t_com$rpl$specter131366.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131366.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131366";

com.rpl.specter.t_com$rpl$specter131366.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131366");
});

com.rpl.specter.__GT_t_com$rpl$specter131366 = (function com$rpl$specter$__GT_t_com$rpl$specter131366(afn__$1,meta131367){
return (new com.rpl.specter.t_com$rpl$specter131366(afn__$1,meta131367));
});

}

return (new com.rpl.specter.t_com$rpl$specter131366(afn,null));
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
var G__131372__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter131369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131369 = (function (path,late,meta131370){
this.path = path;
this.late = late;
this.meta131370 = meta131370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131371,meta131370__$1){
var self__ = this;
var _131371__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131369(self__.path,self__.late,meta131370__$1));
});

com.rpl.specter.t_com$rpl$specter131369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131371){
var self__ = this;
var _131371__$1 = this;
return self__.meta131370;
});

com.rpl.specter.t_com$rpl$specter131369.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131369.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter131369.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta131370","meta131370",-473095488,null)], null);
});

com.rpl.specter.t_com$rpl$specter131369.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131369.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131369";

com.rpl.specter.t_com$rpl$specter131369.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131369");
});

com.rpl.specter.__GT_t_com$rpl$specter131369 = (function com$rpl$specter$__GT_t_com$rpl$specter131369(path__$1,late__$1,meta131370){
return (new com.rpl.specter.t_com$rpl$specter131369(path__$1,late__$1,meta131370));
});

}

return (new com.rpl.specter.t_com$rpl$specter131369(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__131372 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131373__i = 0, G__131373__a = new Array(arguments.length -  0);
while (G__131373__i < G__131373__a.length) {G__131373__a[G__131373__i] = arguments[G__131373__i + 0]; ++G__131373__i;}
  path = new cljs.core.IndexedSeq(G__131373__a,0);
} 
return G__131372__delegate.call(this,path);};
G__131372.cljs$lang$maxFixedArity = 0;
G__131372.cljs$lang$applyTo = (function (arglist__131374){
var path = cljs.core.seq(arglist__131374);
return G__131372__delegate(path);
});
G__131372.cljs$core$IFn$_invoke$arity$variadic = G__131372__delegate;
return G__131372;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter131375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131375 = (function (afn,meta131376){
this.afn = afn;
this.meta131376 = meta131376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131377,meta131376__$1){
var self__ = this;
var _131377__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131375(self__.afn,meta131376__$1));
});

com.rpl.specter.t_com$rpl$specter131375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131377){
var self__ = this;
var _131377__$1 = this;
return self__.meta131376;
});

com.rpl.specter.t_com$rpl$specter131375.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131375.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter131375.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter131375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta131376","meta131376",958080664,null)], null);
});

com.rpl.specter.t_com$rpl$specter131375.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131375.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131375";

com.rpl.specter.t_com$rpl$specter131375.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131375");
});

com.rpl.specter.__GT_t_com$rpl$specter131375 = (function com$rpl$specter$__GT_t_com$rpl$specter131375(afn__$1,meta131376){
return (new com.rpl.specter.t_com$rpl$specter131375(afn__$1,meta131376));
});

}

return (new com.rpl.specter.t_com$rpl$specter131375(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131378 = (function (parse_fn,unparse_fn,meta131379){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta131379 = meta131379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131380,meta131379__$1){
var self__ = this;
var _131380__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131378(self__.parse_fn,self__.unparse_fn,meta131379__$1));
});

com.rpl.specter.t_com$rpl$specter131378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131380){
var self__ = this;
var _131380__$1 = this;
return self__.meta131379;
});

com.rpl.specter.t_com$rpl$specter131378.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131378.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter131378.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter131378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta131379","meta131379",-1894223709,null)], null);
});

com.rpl.specter.t_com$rpl$specter131378.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131378.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131378";

com.rpl.specter.t_com$rpl$specter131378.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131378");
});

com.rpl.specter.__GT_t_com$rpl$specter131378 = (function com$rpl$specter$__GT_t_com$rpl$specter131378(parse_fn__$1,unparse_fn__$1,meta131379){
return (new com.rpl.specter.t_com$rpl$specter131378(parse_fn__$1,unparse_fn__$1,meta131379));
});

}

return (new com.rpl.specter.t_com$rpl$specter131378(parse_fn,unparse_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131381 = (function (meta131382){
this.meta131382 = meta131382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131383,meta131382__$1){
var self__ = this;
var _131383__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131381(meta131382__$1));
});

com.rpl.specter.t_com$rpl$specter131381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131383){
var self__ = this;
var _131383__$1 = this;
return self__.meta131382;
});

com.rpl.specter.t_com$rpl$specter131381.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131381.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter131381.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
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

com.rpl.specter.t_com$rpl$specter131381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131382","meta131382",-1067661489,null)], null);
});

com.rpl.specter.t_com$rpl$specter131381.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131381.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131381";

com.rpl.specter.t_com$rpl$specter131381.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131381");
});

com.rpl.specter.__GT_t_com$rpl$specter131381 = (function com$rpl$specter$__GT_t_com$rpl$specter131381(meta131382){
return (new com.rpl.specter.t_com$rpl$specter131381(meta131382));
});

}

return (new com.rpl.specter.t_com$rpl$specter131381(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__131389__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter131386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131386 = (function (path,temp__4655__auto__,late,meta131387){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta131387 = meta131387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_131388,meta131387__$1){
var self__ = this;
var _131388__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131386(self__.path,self__.temp__4655__auto__,self__.late,meta131387__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_131388){
var self__ = this;
var _131388__$1 = this;
return self__.meta131387;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131386.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131386.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__131384_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__131384_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131386.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__131385_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__131385_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131386.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta131387","meta131387",25007238,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131386.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131386.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131386";

com.rpl.specter.t_com$rpl$specter131386.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131386");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter131386 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter131386(path__$1,temp__4655__auto____$1,late__$1,meta131387){
return (new com.rpl.specter.t_com$rpl$specter131386(path__$1,temp__4655__auto____$1,late__$1,meta131387));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter131386(path,temp__4655__auto__,late,null));
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
var G__131389 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131390__i = 0, G__131390__a = new Array(arguments.length -  0);
while (G__131390__i < G__131390__a.length) {G__131390__a[G__131390__i] = arguments[G__131390__i + 0]; ++G__131390__i;}
  path = new cljs.core.IndexedSeq(G__131390__a,0);
} 
return G__131389__delegate.call(this,path);};
G__131389.cljs$lang$maxFixedArity = 0;
G__131389.cljs$lang$applyTo = (function (arglist__131391){
var path = cljs.core.seq(arglist__131391);
return G__131389__delegate(path);
});
G__131389.cljs$core$IFn$_invoke$arity$variadic = G__131389__delegate;
return G__131389;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__131397__delegate = function (path){
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
if(typeof com.rpl.specter.t_com$rpl$specter131394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131394 = (function (path,temp__4655__auto__,late,meta131395){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta131395 = meta131395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_131396,meta131395__$1){
var self__ = this;
var _131396__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131394(self__.path,self__.temp__4655__auto__,self__.late,meta131395__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_131396){
var self__ = this;
var _131396__$1 = this;
return self__.meta131395;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131394.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131394.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__131392_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__131392_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131394.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1,temp__4655__auto__){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__30215__auto____$1,temp__4655__auto__){
return (function (p1__131393_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__131393_SHARP_);
});})(next_fn,this__30215__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131394.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta131395","meta131395",-1728394426,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131394.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131394.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131394";

com.rpl.specter.t_com$rpl$specter131394.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131394");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter131394 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter131394(path__$1,temp__4655__auto____$1,late__$1,meta131395){
return (new com.rpl.specter.t_com$rpl$specter131394(path__$1,temp__4655__auto____$1,late__$1,meta131395));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter131394(path,temp__4655__auto__,late,null));
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
var G__131397 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131398__i = 0, G__131398__a = new Array(arguments.length -  0);
while (G__131398__i < G__131398__a.length) {G__131398__a[G__131398__i] = arguments[G__131398__i + 0]; ++G__131398__i;}
  path = new cljs.core.IndexedSeq(G__131398__a,0);
} 
return G__131397__delegate.call(this,path);};
G__131397.cljs$lang$maxFixedArity = 0;
G__131397.cljs$lang$applyTo = (function (arglist__131399){
var path = cljs.core.seq(arglist__131399);
return G__131397__delegate(path);
});
G__131397.cljs$core$IFn$_invoke$arity$variadic = G__131397__delegate;
return G__131397;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__131400__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__131400 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131401__i = 0, G__131401__a = new Array(arguments.length -  0);
while (G__131401__i < G__131401__a.length) {G__131401__a[G__131401__i] = arguments[G__131401__i + 0]; ++G__131401__i;}
  path = new cljs.core.IndexedSeq(G__131401__a,0);
} 
return G__131400__delegate.call(this,path);};
G__131400.cljs$lang$maxFixedArity = 0;
G__131400.cljs$lang$applyTo = (function (arglist__131402){
var path = cljs.core.seq(arglist__131402);
return G__131400__delegate(path);
});
G__131400.cljs$core$IFn$_invoke$arity$variadic = G__131400__delegate;
return G__131400;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter131403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131403 = (function (path,update_fn,late,late_fn,meta131404){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta131404 = meta131404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131405,meta131404__$1){
var self__ = this;
var _131405__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131403(self__.path,self__.update_fn,self__.late,self__.late_fn,meta131404__$1));
});

com.rpl.specter.t_com$rpl$specter131403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131405){
var self__ = this;
var _131405__$1 = this;
return self__.meta131404;
});

com.rpl.specter.t_com$rpl$specter131403.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131403.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter131403.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter131403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta131404","meta131404",456656425,null)], null);
});

com.rpl.specter.t_com$rpl$specter131403.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131403.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131403";

com.rpl.specter.t_com$rpl$specter131403.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131403");
});

com.rpl.specter.__GT_t_com$rpl$specter131403 = (function com$rpl$specter$__GT_t_com$rpl$specter131403(path__$1,update_fn__$1,late__$1,late_fn__$1,meta131404){
return (new com.rpl.specter.t_com$rpl$specter131403(path__$1,update_fn__$1,late__$1,late_fn__$1,meta131404));
});

}

return (new com.rpl.specter.t_com$rpl$specter131403(path,update_fn,late,late_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131406 = (function (path,reduce_fn,late,late_fn,meta131407){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta131407 = meta131407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131408,meta131407__$1){
var self__ = this;
var _131408__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131406(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta131407__$1));
});

com.rpl.specter.t_com$rpl$specter131406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131408){
var self__ = this;
var _131408__$1 = this;
return self__.meta131407;
});

com.rpl.specter.t_com$rpl$specter131406.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131406.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter131406.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter131406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta131407","meta131407",329948510,null)], null);
});

com.rpl.specter.t_com$rpl$specter131406.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131406.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131406";

com.rpl.specter.t_com$rpl$specter131406.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131406");
});

com.rpl.specter.__GT_t_com$rpl$specter131406 = (function com$rpl$specter$__GT_t_com$rpl$specter131406(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta131407){
return (new com.rpl.specter.t_com$rpl$specter131406(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta131407));
});

}

return (new com.rpl.specter.t_com$rpl$specter131406(path,reduce_fn,late,late_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131409 = (function (v,meta131410){
this.v = v;
this.meta131410 = meta131410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131411,meta131410__$1){
var self__ = this;
var _131411__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131409(self__.v,meta131410__$1));
});

com.rpl.specter.t_com$rpl$specter131409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131411){
var self__ = this;
var _131411__$1 = this;
return self__.meta131410;
});

com.rpl.specter.t_com$rpl$specter131409.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131409.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter131409.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter131409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta131410","meta131410",-490282525,null)], null);
});

com.rpl.specter.t_com$rpl$specter131409.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131409.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131409";

com.rpl.specter.t_com$rpl$specter131409.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131409");
});

com.rpl.specter.__GT_t_com$rpl$specter131409 = (function com$rpl$specter$__GT_t_com$rpl$specter131409(v__$1,meta131410){
return (new com.rpl.specter.t_com$rpl$specter131409(v__$1,meta131410));
});

}

return (new com.rpl.specter.t_com$rpl$specter131409(v,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131412 = (function (meta131413){
this.meta131413 = meta131413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131414,meta131413__$1){
var self__ = this;
var _131414__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131412(meta131413__$1));
});

com.rpl.specter.t_com$rpl$specter131412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131414){
var self__ = this;
var _131414__$1 = this;
return self__.meta131413;
});

com.rpl.specter.t_com$rpl$specter131412.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131412.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter131412.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30215__auto__,vals__30216__auto__,structure,next_fn__30217__auto__){
var self__ = this;
var this__30215__auto____$1 = this;
var next_fn = ((function (this__30215__auto____$1){
return (function (s__30218__auto__){
return next_fn__30217__auto__.call(null,vals__30216__auto__,s__30218__auto__);
});})(this__30215__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter131412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131413","meta131413",1725982070,null)], null);
});

com.rpl.specter.t_com$rpl$specter131412.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131412.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131412";

com.rpl.specter.t_com$rpl$specter131412.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131412");
});

com.rpl.specter.__GT_t_com$rpl$specter131412 = (function com$rpl$specter$__GT_t_com$rpl$specter131412(meta131413){
return (new com.rpl.specter.t_com$rpl$specter131412(meta131413));
});

}

return (new com.rpl.specter.t_com$rpl$specter131412(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__131418__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter131415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131415 = (function (path,late,meta131416){
this.path = path;
this.late = late;
this.meta131416 = meta131416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131417,meta131416__$1){
var self__ = this;
var _131417__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131415(self__.path,self__.late,meta131416__$1));
});

com.rpl.specter.t_com$rpl$specter131415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131417){
var self__ = this;
var _131417__$1 = this;
return self__.meta131416;
});

com.rpl.specter.t_com$rpl$specter131415.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131415.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter131415.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter131415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta131416","meta131416",1496822581,null)], null);
});

com.rpl.specter.t_com$rpl$specter131415.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131415.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131415";

com.rpl.specter.t_com$rpl$specter131415.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131415");
});

com.rpl.specter.__GT_t_com$rpl$specter131415 = (function com$rpl$specter$__GT_t_com$rpl$specter131415(path__$1,late__$1,meta131416){
return (new com.rpl.specter.t_com$rpl$specter131415(path__$1,late__$1,meta131416));
});

}

return (new com.rpl.specter.t_com$rpl$specter131415(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__131418 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131419__i = 0, G__131419__a = new Array(arguments.length -  0);
while (G__131419__i < G__131419__a.length) {G__131419__a[G__131419__i] = arguments[G__131419__i + 0]; ++G__131419__i;}
  path = new cljs.core.IndexedSeq(G__131419__a,0);
} 
return G__131418__delegate.call(this,path);};
G__131418.cljs$lang$maxFixedArity = 0;
G__131418.cljs$lang$applyTo = (function (arglist__131420){
var path = cljs.core.seq(arglist__131420);
return G__131418__delegate(path);
});
G__131418.cljs$core$IFn$_invoke$arity$variadic = G__131418__delegate;
return G__131418;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__131424__delegate = function (path){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter131421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131421 = (function (path,late,meta131422){
this.path = path;
this.late = late;
this.meta131422 = meta131422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131423,meta131422__$1){
var self__ = this;
var _131423__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131421(self__.path,self__.late,meta131422__$1));
});

com.rpl.specter.t_com$rpl$specter131421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131423){
var self__ = this;
var _131423__$1 = this;
return self__.meta131422;
});

com.rpl.specter.t_com$rpl$specter131421.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131421.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter131421.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter131421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta131422","meta131422",-2023390474,null)], null);
});

com.rpl.specter.t_com$rpl$specter131421.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131421.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131421";

com.rpl.specter.t_com$rpl$specter131421.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131421");
});

com.rpl.specter.__GT_t_com$rpl$specter131421 = (function com$rpl$specter$__GT_t_com$rpl$specter131421(path__$1,late__$1,meta131422){
return (new com.rpl.specter.t_com$rpl$specter131421(path__$1,late__$1,meta131422));
});

}

return (new com.rpl.specter.t_com$rpl$specter131421(path,late,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
};
var G__131424 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131425__i = 0, G__131425__a = new Array(arguments.length -  0);
while (G__131425__i < G__131425__a.length) {G__131425__a[G__131425__i] = arguments[G__131425__i + 0]; ++G__131425__i;}
  path = new cljs.core.IndexedSeq(G__131425__a,0);
} 
return G__131424__delegate.call(this,path);};
G__131424.cljs$lang$maxFixedArity = 0;
G__131424.cljs$lang$applyTo = (function (arglist__131426){
var path = cljs.core.seq(arglist__131426);
return G__131424__delegate(path);
});
G__131424.cljs$core$IFn$_invoke$arity$variadic = G__131424__delegate;
return G__131424;
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
if(typeof com.rpl.specter.t_com$rpl$specter131427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131427 = (function (val,meta131428){
this.val = val;
this.meta131428 = meta131428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131429,meta131428__$1){
var self__ = this;
var _131429__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131427(self__.val,meta131428__$1));
});

com.rpl.specter.t_com$rpl$specter131427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131429){
var self__ = this;
var _131429__$1 = this;
return self__.meta131428;
});

com.rpl.specter.t_com$rpl$specter131427.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131427.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter131427.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30850__auto__,vals__30851__auto__,structure,next_fn__30852__auto__){
var self__ = this;
var this__30850__auto____$1 = this;
return next_fn__30852__auto__.call(null,cljs.core.conj.call(null,vals__30851__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter131427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta131428","meta131428",1766731064,null)], null);
});

com.rpl.specter.t_com$rpl$specter131427.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131427.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131427";

com.rpl.specter.t_com$rpl$specter131427.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131427");
});

com.rpl.specter.__GT_t_com$rpl$specter131427 = (function com$rpl$specter$__GT_t_com$rpl$specter131427(val__$1,meta131428){
return (new com.rpl.specter.t_com$rpl$specter131427(val__$1,meta131428));
});

}

return (new com.rpl.specter.t_com$rpl$specter131427(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter131430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131430 = (function (meta131431){
this.meta131431 = meta131431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131432,meta131431__$1){
var self__ = this;
var _131432__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131430(meta131431__$1));
});

com.rpl.specter.t_com$rpl$specter131430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131432){
var self__ = this;
var _131432__$1 = this;
return self__.meta131431;
});

com.rpl.specter.t_com$rpl$specter131430.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131430.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter131430.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter131430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta131431","meta131431",77157776,null)], null);
});

com.rpl.specter.t_com$rpl$specter131430.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131430.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131430";

com.rpl.specter.t_com$rpl$specter131430.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131430");
});

com.rpl.specter.__GT_t_com$rpl$specter131430 = (function com$rpl$specter$__GT_t_com$rpl$specter131430(meta131431){
return (new com.rpl.specter.t_com$rpl$specter131430(meta131431));
});

}

return (new com.rpl.specter.t_com$rpl$specter131430(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__131441 = null;
var G__131441__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__131441__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter131435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131435 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta131436){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta131436 = meta131436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_131437,meta131436__$1){
var self__ = this;
var _131437__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131435(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta131436__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_131437){
var self__ = this;
var _131437__$1 = this;
return self__.meta131436;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131435.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131435.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131435.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131435.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta131436","meta131436",745296182,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131435.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131435.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131435";

com.rpl.specter.t_com$rpl$specter131435.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131435");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter131435 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter131435(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta131436){
return (new com.rpl.specter.t_com$rpl$specter131435(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta131436));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter131435(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter131438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131438 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta131439){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta131439 = meta131439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_131440,meta131439__$1){
var self__ = this;
var _131440__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131438(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta131439__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_131440){
var self__ = this;
var _131440__$1 = this;
return self__.meta131439;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131438.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131438.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__131433_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__131433_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131438.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__131434_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__131434_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131438.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta131439","meta131439",1033149043,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter131438.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131438.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131438";

com.rpl.specter.t_com$rpl$specter131438.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131438");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter131438 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter131438(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta131439){
return (new com.rpl.specter.t_com$rpl$specter131438(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta131439));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter131438(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
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
G__131441 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__131441__2.call(this,cond_p,then_path);
case 3:
return G__131441__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__131441.cljs$core$IFn$_invoke$arity$2 = G__131441__2;
G__131441.cljs$core$IFn$_invoke$arity$3 = G__131441__3;
return G__131441;
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
var G__131446__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__131442){
var vec__131443 = p__131442;
var tester = cljs.core.nth.call(null,vec__131443,(0),null);
var apath = cljs.core.nth.call(null,vec__131443,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__131446 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__131447__i = 0, G__131447__a = new Array(arguments.length -  0);
while (G__131447__i < G__131447__a.length) {G__131447__a[G__131447__i] = arguments[G__131447__i + 0]; ++G__131447__i;}
  conds = new cljs.core.IndexedSeq(G__131447__a,0);
} 
return G__131446__delegate.call(this,conds);};
G__131446.cljs$lang$maxFixedArity = 0;
G__131446.cljs$lang$applyTo = (function (arglist__131448){
var conds = cljs.core.seq(arglist__131448);
return G__131446__delegate(conds);
});
G__131446.cljs$core$IFn$_invoke$arity$variadic = G__131446__delegate;
return G__131446;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__131456 = null;
var G__131456__0 = (function (){
return com.rpl.specter.STAY;
});
var G__131456__1 = (function (path){
return path;
});
var G__131456__2 = (function (path1,path2){
var builder__30853__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter131449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter131449 = (function (path1,path2,late1,late2,meta131450){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta131450 = meta131450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter131449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131451,meta131450__$1){
var self__ = this;
var _131451__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter131449(self__.path1,self__.path2,self__.late1,self__.late2,meta131450__$1));
});

com.rpl.specter.t_com$rpl$specter131449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131451){
var self__ = this;
var _131451__$1 = this;
return self__.meta131450;
});

com.rpl.specter.t_com$rpl$specter131449.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter131449.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter131449.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter131449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta131450","meta131450",-821337609,null)], null);
});

com.rpl.specter.t_com$rpl$specter131449.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter131449.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter131449";

com.rpl.specter.t_com$rpl$specter131449.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter131449");
});

com.rpl.specter.__GT_t_com$rpl$specter131449 = (function com$rpl$specter$__GT_t_com$rpl$specter131449(path1__$1,path2__$1,late1__$1,late2__$1,meta131450){
return (new com.rpl.specter.t_com$rpl$specter131449(path1__$1,path2__$1,late1__$1,late2__$1,meta131450));
});

}

return (new com.rpl.specter.t_com$rpl$specter131449(path1,path2,late1,late2,null));
}));
var curr_params__30854__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__30854__auto__)){
return cljs.core.apply.call(null,builder__30853__auto__,curr_params__30854__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__30853__auto__,curr_params__30854__auto__);
}
});
var G__131456__3 = (function() { 
var G__131457__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__131457 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__131458__i = 0, G__131458__a = new Array(arguments.length -  2);
while (G__131458__i < G__131458__a.length) {G__131458__a[G__131458__i] = arguments[G__131458__i + 2]; ++G__131458__i;}
  paths = new cljs.core.IndexedSeq(G__131458__a,0);
} 
return G__131457__delegate.call(this,path1,path2,paths);};
G__131457.cljs$lang$maxFixedArity = 2;
G__131457.cljs$lang$applyTo = (function (arglist__131459){
var path1 = cljs.core.first(arglist__131459);
arglist__131459 = cljs.core.next(arglist__131459);
var path2 = cljs.core.first(arglist__131459);
var paths = cljs.core.rest(arglist__131459);
return G__131457__delegate(path1,path2,paths);
});
G__131457.cljs$core$IFn$_invoke$arity$variadic = G__131457__delegate;
return G__131457;
})()
;
G__131456 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__131456__0.call(this);
case 1:
return G__131456__1.call(this,path1);
case 2:
return G__131456__2.call(this,path1,path2);
default:
var G__131460 = null;
if (arguments.length > 2) {
var G__131461__i = 0, G__131461__a = new Array(arguments.length -  2);
while (G__131461__i < G__131461__a.length) {G__131461__a[G__131461__i] = arguments[G__131461__i + 2]; ++G__131461__i;}
G__131460 = new cljs.core.IndexedSeq(G__131461__a,0);
}
return G__131456__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__131460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__131456.cljs$lang$maxFixedArity = 2;
G__131456.cljs$lang$applyTo = G__131456__3.cljs$lang$applyTo;
G__131456.cljs$core$IFn$_invoke$arity$0 = G__131456__0;
G__131456.cljs$core$IFn$_invoke$arity$1 = G__131456__1;
G__131456.cljs$core$IFn$_invoke$arity$2 = G__131456__2;
G__131456.cljs$core$IFn$_invoke$arity$variadic = G__131456__3.cljs$core$IFn$_invoke$arity$variadic;
return G__131456;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__131462__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__131462 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131463__i = 0, G__131463__a = new Array(arguments.length -  0);
while (G__131463__i < G__131463__a.length) {G__131463__a[G__131463__i] = arguments[G__131463__i + 0]; ++G__131463__i;}
  path = new cljs.core.IndexedSeq(G__131463__a,0);
} 
return G__131462__delegate.call(this,path);};
G__131462.cljs$lang$maxFixedArity = 0;
G__131462.cljs$lang$applyTo = (function (arglist__131464){
var path = cljs.core.seq(arglist__131464);
return G__131462__delegate(path);
});
G__131462.cljs$core$IFn$_invoke$arity$variadic = G__131462__delegate;
return G__131462;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__131465__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__131465 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__131466__i = 0, G__131466__a = new Array(arguments.length -  0);
while (G__131466__i < G__131466__a.length) {G__131466__a[G__131466__i] = arguments[G__131466__i + 0]; ++G__131466__i;}
  path = new cljs.core.IndexedSeq(G__131466__a,0);
} 
return G__131465__delegate.call(this,path);};
G__131465.cljs$lang$maxFixedArity = 0;
G__131465.cljs$lang$applyTo = (function (arglist__131467){
var path = cljs.core.seq(arglist__131467);
return G__131465__delegate(path);
});
G__131465.cljs$core$IFn$_invoke$arity$variadic = G__131465__delegate;
return G__131465;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1484099803898
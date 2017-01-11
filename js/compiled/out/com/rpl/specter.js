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
var len__26121__auto___29274 = arguments.length;
var i__26122__auto___29275 = (0);
while(true){
if((i__26122__auto___29275 < len__26121__auto___29274)){
args__26128__auto__.push((arguments[i__26122__auto___29275]));

var G__29276 = (i__26122__auto___29275 + (1));
i__26122__auto___29275 = G__29276;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq29273){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29273));
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
var len__26121__auto___29284 = arguments.length;
var i__26122__auto___29285 = (0);
while(true){
if((i__26122__auto___29285 < len__26121__auto___29284)){
args__26128__auto__.push((arguments[i__26122__auto___29285]));

var G__29286 = (i__26122__auto___29285 + (1));
i__26122__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__29281){
var map__29282 = p__29281;
var map__29282__$1 = ((((!((map__29282 == null)))?((((map__29282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29282):map__29282);
var merge_fn = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq29277){
var G__29278 = cljs.core.first.call(null,seq29277);
var seq29277__$1 = cljs.core.next.call(null,seq29277);
var G__29279 = cljs.core.first.call(null,seq29277__$1);
var seq29277__$2 = cljs.core.next.call(null,seq29277__$1);
var G__29280 = cljs.core.first.call(null,seq29277__$2);
var seq29277__$3 = cljs.core.next.call(null,seq29277__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29278,G__29279,G__29280,seq29277__$3);
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
var G__29287__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__29287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29288__i = 0, G__29288__a = new Array(arguments.length -  0);
while (G__29288__i < G__29288__a.length) {G__29288__a[G__29288__i] = arguments[G__29288__i + 0]; ++G__29288__i;}
  args = new cljs.core.IndexedSeq(G__29288__a,0);
} 
return G__29287__delegate.call(this,args);};
G__29287.cljs$lang$maxFixedArity = 0;
G__29287.cljs$lang$applyTo = (function (arglist__29289){
var args = cljs.core.seq(arglist__29289);
return G__29287__delegate(args);
});
G__29287.cljs$core$IFn$_invoke$arity$variadic = G__29287__delegate;
return G__29287;
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
if(typeof com.rpl.specter.t_com$rpl$specter29290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29290 = (function (meta29291){
this.meta29291 = meta29291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29292,meta29291__$1){
var self__ = this;
var _29292__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29290(meta29291__$1));
});

com.rpl.specter.t_com$rpl$specter29290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29292){
var self__ = this;
var _29292__$1 = this;
return self__.meta29291;
});

com.rpl.specter.t_com$rpl$specter29290.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29290.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter29290.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter29290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29291","meta29291",-1409481786,null)], null);
});

com.rpl.specter.t_com$rpl$specter29290.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29290.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29290";

com.rpl.specter.t_com$rpl$specter29290.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29290");
});

com.rpl.specter.__GT_t_com$rpl$specter29290 = (function com$rpl$specter$__GT_t_com$rpl$specter29290(meta29291){
return (new com.rpl.specter.t_com$rpl$specter29290(meta29291));
});

}

return (new com.rpl.specter.t_com$rpl$specter29290(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29293 = (function (afn,meta29294){
this.afn = afn;
this.meta29294 = meta29294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29295,meta29294__$1){
var self__ = this;
var _29295__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29293(self__.afn,meta29294__$1));
});

com.rpl.specter.t_com$rpl$specter29293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29295){
var self__ = this;
var _29295__$1 = this;
return self__.meta29294;
});

com.rpl.specter.t_com$rpl$specter29293.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29293.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter29293.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter29293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29294","meta29294",356027945,null)], null);
});

com.rpl.specter.t_com$rpl$specter29293.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29293.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29293";

com.rpl.specter.t_com$rpl$specter29293.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29293");
});

com.rpl.specter.__GT_t_com$rpl$specter29293 = (function com$rpl$specter$__GT_t_com$rpl$specter29293(afn__$1,meta29294){
return (new com.rpl.specter.t_com$rpl$specter29293(afn__$1,meta29294));
});

}

return (new com.rpl.specter.t_com$rpl$specter29293(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29296 = (function (meta29297){
this.meta29297 = meta29297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29298,meta29297__$1){
var self__ = this;
var _29298__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29296(meta29297__$1));
});

com.rpl.specter.t_com$rpl$specter29296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29298){
var self__ = this;
var _29298__$1 = this;
return self__.meta29297;
});

com.rpl.specter.t_com$rpl$specter29296.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29296.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29296.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29297","meta29297",-674787472,null)], null);
});

com.rpl.specter.t_com$rpl$specter29296.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29296.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29296";

com.rpl.specter.t_com$rpl$specter29296.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29296");
});

com.rpl.specter.__GT_t_com$rpl$specter29296 = (function com$rpl$specter$__GT_t_com$rpl$specter29296(meta29297){
return (new com.rpl.specter.t_com$rpl$specter29296(meta29297));
});

}

return (new com.rpl.specter.t_com$rpl$specter29296(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29299 = (function (meta29300){
this.meta29300 = meta29300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29301,meta29300__$1){
var self__ = this;
var _29301__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29299(meta29300__$1));
});

com.rpl.specter.t_com$rpl$specter29299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29301){
var self__ = this;
var _29301__$1 = this;
return self__.meta29300;
});

com.rpl.specter.t_com$rpl$specter29299.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29299.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__28021__auto____$1){
return (function (curr__26273__auto__,v){
var ret__26274__auto__ = next_fn.call(null,v);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
}
});})(next_fn,this__28021__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29299.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29300","meta29300",-213144905,null)], null);
});

com.rpl.specter.t_com$rpl$specter29299.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29299.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29299";

com.rpl.specter.t_com$rpl$specter29299.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29299");
});

com.rpl.specter.__GT_t_com$rpl$specter29299 = (function com$rpl$specter$__GT_t_com$rpl$specter29299(meta29300){
return (new com.rpl.specter.t_com$rpl$specter29299(meta29300));
});

}

return (new com.rpl.specter.t_com$rpl$specter29299(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter29302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29302 = (function (meta29303){
this.meta29303 = meta29303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29304,meta29303__$1){
var self__ = this;
var _29304__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29302(meta29303__$1));
});

com.rpl.specter.t_com$rpl$specter29302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29304){
var self__ = this;
var _29304__$1 = this;
return self__.meta29303;
});

com.rpl.specter.t_com$rpl$specter29302.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29302.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter29302.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter29302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29303","meta29303",-226195873,null)], null);
});

com.rpl.specter.t_com$rpl$specter29302.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29302.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29302";

com.rpl.specter.t_com$rpl$specter29302.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29302");
});

com.rpl.specter.__GT_t_com$rpl$specter29302 = (function com$rpl$specter$__GT_t_com$rpl$specter29302(meta29303){
return (new com.rpl.specter.t_com$rpl$specter29302(meta29303));
});

}

return (new com.rpl.specter.t_com$rpl$specter29302(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29305 = (function (start_fn,end_fn,meta29306){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta29306 = meta29306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29307,meta29306__$1){
var self__ = this;
var _29307__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29305(self__.start_fn,self__.end_fn,meta29306__$1));
});

com.rpl.specter.t_com$rpl$specter29305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29307){
var self__ = this;
var _29307__$1 = this;
return self__.meta29306;
});

com.rpl.specter.t_com$rpl$specter29305.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29305.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter29305.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter29305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta29306","meta29306",-2117264079,null)], null);
});

com.rpl.specter.t_com$rpl$specter29305.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29305.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29305";

com.rpl.specter.t_com$rpl$specter29305.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29305");
});

com.rpl.specter.__GT_t_com$rpl$specter29305 = (function com$rpl$specter$__GT_t_com$rpl$specter29305(start_fn__$1,end_fn__$1,meta29306){
return (new com.rpl.specter.t_com$rpl$specter29305(start_fn__$1,end_fn__$1,meta29306));
});

}

return (new com.rpl.specter.t_com$rpl$specter29305(start_fn,end_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29308 = (function (start,end,meta29309){
this.start = start;
this.end = end;
this.meta29309 = meta29309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29310,meta29309__$1){
var self__ = this;
var _29310__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29308(self__.start,self__.end,meta29309__$1));
});

com.rpl.specter.t_com$rpl$specter29308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29310){
var self__ = this;
var _29310__$1 = this;
return self__.meta29309;
});

com.rpl.specter.t_com$rpl$specter29308.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29308.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter29308.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter29308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta29309","meta29309",1433886825,null)], null);
});

com.rpl.specter.t_com$rpl$specter29308.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29308.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29308";

com.rpl.specter.t_com$rpl$specter29308.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29308");
});

com.rpl.specter.__GT_t_com$rpl$specter29308 = (function com$rpl$specter$__GT_t_com$rpl$specter29308(start__$1,end__$1,meta29309){
return (new com.rpl.specter.t_com$rpl$specter29308(start__$1,end__$1,meta29309));
});

}

return (new com.rpl.specter.t_com$rpl$specter29308(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__26273__auto__,p__29315){
var vec__29316 = p__29315;
var s = cljs.core.nth.call(null,vec__29316,(0),null);
var e = cljs.core.nth.call(null,vec__29316,(1),null);
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
if(typeof com.rpl.specter.t_com$rpl$specter29319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29319 = (function (pred,meta29320){
this.pred = pred;
this.meta29320 = meta29320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29321,meta29320__$1){
var self__ = this;
var _29321__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29319(self__.pred,meta29320__$1));
});

com.rpl.specter.t_com$rpl$specter29319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29321){
var self__ = this;
var _29321__$1 = this;
return self__.meta29320;
});

com.rpl.specter.t_com$rpl$specter29319.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29319.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__28021__auto____$1){
return (function (curr__26273__auto__,p__29322){
var vec__29323 = p__29322;
var s = cljs.core.nth.call(null,vec__29323,(0),null);
var e = cljs.core.nth.call(null,vec__29323,(1),null);
var ret__26274__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__26274__auto__ === com.rpl.specter.NONE)){
return curr__26273__auto__;
} else {
return ret__26274__auto__;
}
});})(next_fn,this__28021__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter29319.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta29320","meta29320",-105175796,null)], null);
});

com.rpl.specter.t_com$rpl$specter29319.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29319.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29319";

com.rpl.specter.t_com$rpl$specter29319.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29319");
});

com.rpl.specter.__GT_t_com$rpl$specter29319 = (function com$rpl$specter$__GT_t_com$rpl$specter29319(pred__$1,meta29320){
return (new com.rpl.specter.t_com$rpl$specter29319(pred__$1,meta29320));
});

}

return (new com.rpl.specter.t_com$rpl$specter29319(pred,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29326 = (function (meta29327){
this.meta29327 = meta29327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29328,meta29327__$1){
var self__ = this;
var _29328__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29326(meta29327__$1));
});

com.rpl.specter.t_com$rpl$specter29326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29328){
var self__ = this;
var _29328__$1 = this;
return self__.meta29327;
});

com.rpl.specter.t_com$rpl$specter29326.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29326.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter29326.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter29326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29327","meta29327",1201493245,null)], null);
});

com.rpl.specter.t_com$rpl$specter29326.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29326.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29326";

com.rpl.specter.t_com$rpl$specter29326.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29326");
});

com.rpl.specter.__GT_t_com$rpl$specter29326 = (function com$rpl$specter$__GT_t_com$rpl$specter29326(meta29327){
return (new com.rpl.specter.t_com$rpl$specter29326(meta29327));
});

}

return (new com.rpl.specter.t_com$rpl$specter29326(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29329 = (function (meta29330){
this.meta29330 = meta29330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29331,meta29330__$1){
var self__ = this;
var _29331__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29329(meta29330__$1));
});

com.rpl.specter.t_com$rpl$specter29329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29331){
var self__ = this;
var _29331__$1 = this;
return self__.meta29330;
});

com.rpl.specter.t_com$rpl$specter29329.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29329.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter29329.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter29329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29330","meta29330",-899765946,null)], null);
});

com.rpl.specter.t_com$rpl$specter29329.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29329.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29329";

com.rpl.specter.t_com$rpl$specter29329.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29329");
});

com.rpl.specter.__GT_t_com$rpl$specter29329 = (function com$rpl$specter$__GT_t_com$rpl$specter29329(meta29330){
return (new com.rpl.specter.t_com$rpl$specter29329(meta29330));
});

}

return (new com.rpl.specter.t_com$rpl$specter29329(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29332 = (function (aset,meta29333){
this.aset = aset;
this.meta29333 = meta29333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29334,meta29333__$1){
var self__ = this;
var _29334__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29332(self__.aset,meta29333__$1));
});

com.rpl.specter.t_com$rpl$specter29332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29334){
var self__ = this;
var _29334__$1 = this;
return self__.meta29333;
});

com.rpl.specter.t_com$rpl$specter29332.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29332.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter29332.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter29332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta29333","meta29333",-154080659,null)], null);
});

com.rpl.specter.t_com$rpl$specter29332.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29332.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29332";

com.rpl.specter.t_com$rpl$specter29332.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29332");
});

com.rpl.specter.__GT_t_com$rpl$specter29332 = (function com$rpl$specter$__GT_t_com$rpl$specter29332(aset__$1,meta29333){
return (new com.rpl.specter.t_com$rpl$specter29332(aset__$1,meta29333));
});

}

return (new com.rpl.specter.t_com$rpl$specter29332(aset,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29335 = (function (m_keys,meta29336){
this.m_keys = m_keys;
this.meta29336 = meta29336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29337,meta29336__$1){
var self__ = this;
var _29337__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29335(self__.m_keys,meta29336__$1));
});

com.rpl.specter.t_com$rpl$specter29335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29337){
var self__ = this;
var _29337__$1 = this;
return self__.meta29336;
});

com.rpl.specter.t_com$rpl$specter29335.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29335.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter29335.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter29335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta29336","meta29336",-699431764,null)], null);
});

com.rpl.specter.t_com$rpl$specter29335.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29335.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29335";

com.rpl.specter.t_com$rpl$specter29335.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29335");
});

com.rpl.specter.__GT_t_com$rpl$specter29335 = (function com$rpl$specter$__GT_t_com$rpl$specter29335(m_keys__$1,meta29336){
return (new com.rpl.specter.t_com$rpl$specter29335(m_keys__$1,meta29336));
});

}

return (new com.rpl.specter.t_com$rpl$specter29335(m_keys,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29338 = (function (afn,meta29339){
this.afn = afn;
this.meta29339 = meta29339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29340,meta29339__$1){
var self__ = this;
var _29340__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29338(self__.afn,meta29339__$1));
});

com.rpl.specter.t_com$rpl$specter29338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29340){
var self__ = this;
var _29340__$1 = this;
return self__.meta29339;
});

com.rpl.specter.t_com$rpl$specter29338.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29338.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter29338.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter29338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29339","meta29339",758431582,null)], null);
});

com.rpl.specter.t_com$rpl$specter29338.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29338.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29338";

com.rpl.specter.t_com$rpl$specter29338.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29338");
});

com.rpl.specter.__GT_t_com$rpl$specter29338 = (function com$rpl$specter$__GT_t_com$rpl$specter29338(afn__$1,meta29339){
return (new com.rpl.specter.t_com$rpl$specter29338(afn__$1,meta29339));
});

}

return (new com.rpl.specter.t_com$rpl$specter29338(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29341 = (function (afn,meta29342){
this.afn = afn;
this.meta29342 = meta29342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29343,meta29342__$1){
var self__ = this;
var _29343__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29341(self__.afn,meta29342__$1));
});

com.rpl.specter.t_com$rpl$specter29341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29343){
var self__ = this;
var _29343__$1 = this;
return self__.meta29342;
});

com.rpl.specter.t_com$rpl$specter29341.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29341.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter29341.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter29341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29342","meta29342",452120508,null)], null);
});

com.rpl.specter.t_com$rpl$specter29341.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29341.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29341";

com.rpl.specter.t_com$rpl$specter29341.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29341");
});

com.rpl.specter.__GT_t_com$rpl$specter29341 = (function com$rpl$specter$__GT_t_com$rpl$specter29341(afn__$1,meta29342){
return (new com.rpl.specter.t_com$rpl$specter29341(afn__$1,meta29342));
});

}

return (new com.rpl.specter.t_com$rpl$specter29341(afn,null));
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
var G__29347__delegate = function (path){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter29344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29344 = (function (path,late,meta29345){
this.path = path;
this.late = late;
this.meta29345 = meta29345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29346,meta29345__$1){
var self__ = this;
var _29346__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29344(self__.path,self__.late,meta29345__$1));
});

com.rpl.specter.t_com$rpl$specter29344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29346){
var self__ = this;
var _29346__$1 = this;
return self__.meta29345;
});

com.rpl.specter.t_com$rpl$specter29344.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29344.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter29344.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__28021__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__28021__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter29344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29345","meta29345",-313065371,null)], null);
});

com.rpl.specter.t_com$rpl$specter29344.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29344.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29344";

com.rpl.specter.t_com$rpl$specter29344.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29344");
});

com.rpl.specter.__GT_t_com$rpl$specter29344 = (function com$rpl$specter$__GT_t_com$rpl$specter29344(path__$1,late__$1,meta29345){
return (new com.rpl.specter.t_com$rpl$specter29344(path__$1,late__$1,meta29345));
});

}

return (new com.rpl.specter.t_com$rpl$specter29344(path,late,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
};
var G__29347 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29348__i = 0, G__29348__a = new Array(arguments.length -  0);
while (G__29348__i < G__29348__a.length) {G__29348__a[G__29348__i] = arguments[G__29348__i + 0]; ++G__29348__i;}
  path = new cljs.core.IndexedSeq(G__29348__a,0);
} 
return G__29347__delegate.call(this,path);};
G__29347.cljs$lang$maxFixedArity = 0;
G__29347.cljs$lang$applyTo = (function (arglist__29349){
var path = cljs.core.seq(arglist__29349);
return G__29347__delegate(path);
});
G__29347.cljs$core$IFn$_invoke$arity$variadic = G__29347__delegate;
return G__29347;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter29350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29350 = (function (afn,meta29351){
this.afn = afn;
this.meta29351 = meta29351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29352,meta29351__$1){
var self__ = this;
var _29352__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29350(self__.afn,meta29351__$1));
});

com.rpl.specter.t_com$rpl$specter29350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29352){
var self__ = this;
var _29352__$1 = this;
return self__.meta29351;
});

com.rpl.specter.t_com$rpl$specter29350.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29350.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29350.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29351","meta29351",-1733765197,null)], null);
});

com.rpl.specter.t_com$rpl$specter29350.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29350.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29350";

com.rpl.specter.t_com$rpl$specter29350.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29350");
});

com.rpl.specter.__GT_t_com$rpl$specter29350 = (function com$rpl$specter$__GT_t_com$rpl$specter29350(afn__$1,meta29351){
return (new com.rpl.specter.t_com$rpl$specter29350(afn__$1,meta29351));
});

}

return (new com.rpl.specter.t_com$rpl$specter29350(afn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29353 = (function (parse_fn,unparse_fn,meta29354){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta29354 = meta29354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29355,meta29354__$1){
var self__ = this;
var _29355__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29353(self__.parse_fn,self__.unparse_fn,meta29354__$1));
});

com.rpl.specter.t_com$rpl$specter29353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29355){
var self__ = this;
var _29355__$1 = this;
return self__.meta29354;
});

com.rpl.specter.t_com$rpl$specter29353.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29353.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29353.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter29353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta29354","meta29354",1937519216,null)], null);
});

com.rpl.specter.t_com$rpl$specter29353.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29353.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29353";

com.rpl.specter.t_com$rpl$specter29353.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29353");
});

com.rpl.specter.__GT_t_com$rpl$specter29353 = (function com$rpl$specter$__GT_t_com$rpl$specter29353(parse_fn__$1,unparse_fn__$1,meta29354){
return (new com.rpl.specter.t_com$rpl$specter29353(parse_fn__$1,unparse_fn__$1,meta29354));
});

}

return (new com.rpl.specter.t_com$rpl$specter29353(parse_fn,unparse_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29356 = (function (meta29357){
this.meta29357 = meta29357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29358,meta29357__$1){
var self__ = this;
var _29358__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29356(meta29357__$1));
});

com.rpl.specter.t_com$rpl$specter29356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29358){
var self__ = this;
var _29358__$1 = this;
return self__.meta29357;
});

com.rpl.specter.t_com$rpl$specter29356.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29356.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29356.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter29356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29357","meta29357",-1712039108,null)], null);
});

com.rpl.specter.t_com$rpl$specter29356.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29356.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29356";

com.rpl.specter.t_com$rpl$specter29356.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29356");
});

com.rpl.specter.__GT_t_com$rpl$specter29356 = (function com$rpl$specter$__GT_t_com$rpl$specter29356(meta29357){
return (new com.rpl.specter.t_com$rpl$specter29356(meta29357));
});

}

return (new com.rpl.specter.t_com$rpl$specter29356(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__29364__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter29361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29361 = (function (path,temp__4655__auto__,late,meta29362){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta29362 = meta29362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_29363,meta29362__$1){
var self__ = this;
var _29363__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29361(self__.path,self__.temp__4655__auto__,self__.late,meta29362__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_29363){
var self__ = this;
var _29363__$1 = this;
return self__.meta29362;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29361.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29361.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1,temp__4655__auto__){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__28021__auto____$1,temp__4655__auto__){
return (function (p1__29359_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__29359_SHARP_);
});})(next_fn,this__28021__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29361.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1,temp__4655__auto__){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__28021__auto____$1,temp__4655__auto__){
return (function (p1__29360_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__29360_SHARP_);
});})(next_fn,this__28021__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29361.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29362","meta29362",979851602,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29361.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29361.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29361";

com.rpl.specter.t_com$rpl$specter29361.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29361");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter29361 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29361(path__$1,temp__4655__auto____$1,late__$1,meta29362){
return (new com.rpl.specter.t_com$rpl$specter29361(path__$1,temp__4655__auto____$1,late__$1,meta29362));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29361(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
}
};
var G__29364 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29365__i = 0, G__29365__a = new Array(arguments.length -  0);
while (G__29365__i < G__29365__a.length) {G__29365__a[G__29365__i] = arguments[G__29365__i + 0]; ++G__29365__i;}
  path = new cljs.core.IndexedSeq(G__29365__a,0);
} 
return G__29364__delegate.call(this,path);};
G__29364.cljs$lang$maxFixedArity = 0;
G__29364.cljs$lang$applyTo = (function (arglist__29366){
var path = cljs.core.seq(arglist__29366);
return G__29364__delegate(path);
});
G__29364.cljs$core$IFn$_invoke$arity$variadic = G__29364__delegate;
return G__29364;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__29372__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter29369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29369 = (function (path,temp__4655__auto__,late,meta29370){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta29370 = meta29370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_29371,meta29370__$1){
var self__ = this;
var _29371__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29369(self__.path,self__.temp__4655__auto__,self__.late,meta29370__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_29371){
var self__ = this;
var _29371__$1 = this;
return self__.meta29370;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1,temp__4655__auto__){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__28021__auto____$1,temp__4655__auto__){
return (function (p1__29367_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__29367_SHARP_);
});})(next_fn,this__28021__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1,temp__4655__auto__){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1,temp__4655__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__28021__auto____$1,temp__4655__auto__){
return (function (p1__29368_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__29368_SHARP_);
});})(next_fn,this__28021__auto____$1,temp__4655__auto__))
,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29369.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29370","meta29370",-94849514,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29369.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29369.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29369";

com.rpl.specter.t_com$rpl$specter29369.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29369");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter29369 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29369(path__$1,temp__4655__auto____$1,late__$1,meta29370){
return (new com.rpl.specter.t_com$rpl$specter29369(path__$1,temp__4655__auto____$1,late__$1,meta29370));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29369(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
}
};
var G__29372 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29373__i = 0, G__29373__a = new Array(arguments.length -  0);
while (G__29373__i < G__29373__a.length) {G__29373__a[G__29373__i] = arguments[G__29373__i + 0]; ++G__29373__i;}
  path = new cljs.core.IndexedSeq(G__29373__a,0);
} 
return G__29372__delegate.call(this,path);};
G__29372.cljs$lang$maxFixedArity = 0;
G__29372.cljs$lang$applyTo = (function (arglist__29374){
var path = cljs.core.seq(arglist__29374);
return G__29372__delegate(path);
});
G__29372.cljs$core$IFn$_invoke$arity$variadic = G__29372__delegate;
return G__29372;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__29375__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__29375 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29376__i = 0, G__29376__a = new Array(arguments.length -  0);
while (G__29376__i < G__29376__a.length) {G__29376__a[G__29376__i] = arguments[G__29376__i + 0]; ++G__29376__i;}
  path = new cljs.core.IndexedSeq(G__29376__a,0);
} 
return G__29375__delegate.call(this,path);};
G__29375.cljs$lang$maxFixedArity = 0;
G__29375.cljs$lang$applyTo = (function (arglist__29377){
var path = cljs.core.seq(arglist__29377);
return G__29375__delegate(path);
});
G__29375.cljs$core$IFn$_invoke$arity$variadic = G__29375__delegate;
return G__29375;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter29378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29378 = (function (path,update_fn,late,late_fn,meta29379){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29379 = meta29379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29380,meta29379__$1){
var self__ = this;
var _29380__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29378(self__.path,self__.update_fn,self__.late,self__.late_fn,meta29379__$1));
});

com.rpl.specter.t_com$rpl$specter29378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29380){
var self__ = this;
var _29380__$1 = this;
return self__.meta29379;
});

com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter29378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null)], null);
});

com.rpl.specter.t_com$rpl$specter29378.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29378.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29378";

com.rpl.specter.t_com$rpl$specter29378.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29378");
});

com.rpl.specter.__GT_t_com$rpl$specter29378 = (function com$rpl$specter$__GT_t_com$rpl$specter29378(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29379){
return (new com.rpl.specter.t_com$rpl$specter29378(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29379));
});

}

return (new com.rpl.specter.t_com$rpl$specter29378(path,update_fn,late,late_fn,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter29381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29381 = (function (path,reduce_fn,late,late_fn,meta29382){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29382 = meta29382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29383,meta29382__$1){
var self__ = this;
var _29383__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29381(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta29382__$1));
});

com.rpl.specter.t_com$rpl$specter29381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29383){
var self__ = this;
var _29383__$1 = this;
return self__.meta29382;
});

com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter29381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29382","meta29382",-1935602491,null)], null);
});

com.rpl.specter.t_com$rpl$specter29381.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29381.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29381";

com.rpl.specter.t_com$rpl$specter29381.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29381");
});

com.rpl.specter.__GT_t_com$rpl$specter29381 = (function com$rpl$specter$__GT_t_com$rpl$specter29381(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29382){
return (new com.rpl.specter.t_com$rpl$specter29381(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29382));
});

}

return (new com.rpl.specter.t_com$rpl$specter29381(path,reduce_fn,late,late_fn,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
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
if(typeof com.rpl.specter.t_com$rpl$specter29384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29384 = (function (v,meta29385){
this.v = v;
this.meta29385 = meta29385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29386,meta29385__$1){
var self__ = this;
var _29386__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29384(self__.v,meta29385__$1));
});

com.rpl.specter.t_com$rpl$specter29384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29386){
var self__ = this;
var _29386__$1 = this;
return self__.meta29385;
});

com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter29384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta29385","meta29385",-1402289563,null)], null);
});

com.rpl.specter.t_com$rpl$specter29384.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29384.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29384";

com.rpl.specter.t_com$rpl$specter29384.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29384");
});

com.rpl.specter.__GT_t_com$rpl$specter29384 = (function com$rpl$specter$__GT_t_com$rpl$specter29384(v__$1,meta29385){
return (new com.rpl.specter.t_com$rpl$specter29384(v__$1,meta29385));
});

}

return (new com.rpl.specter.t_com$rpl$specter29384(v,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29387 = (function (meta29388){
this.meta29388 = meta29388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29389,meta29388__$1){
var self__ = this;
var _29389__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29387(meta29388__$1));
});

com.rpl.specter.t_com$rpl$specter29387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29389){
var self__ = this;
var _29389__$1 = this;
return self__.meta29388;
});

com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28021__auto__,vals__28022__auto__,structure,next_fn__28023__auto__){
var self__ = this;
var this__28021__auto____$1 = this;
var next_fn = ((function (this__28021__auto____$1){
return (function (s__28024__auto__){
return next_fn__28023__auto__.call(null,vals__28022__auto__,s__28024__auto__);
});})(this__28021__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter29387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29388","meta29388",-761031657,null)], null);
});

com.rpl.specter.t_com$rpl$specter29387.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29387.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29387";

com.rpl.specter.t_com$rpl$specter29387.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29387");
});

com.rpl.specter.__GT_t_com$rpl$specter29387 = (function com$rpl$specter$__GT_t_com$rpl$specter29387(meta29388){
return (new com.rpl.specter.t_com$rpl$specter29387(meta29388));
});

}

return (new com.rpl.specter.t_com$rpl$specter29387(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__29393__delegate = function (path){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter29390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29390 = (function (path,late,meta29391){
this.path = path;
this.late = late;
this.meta29391 = meta29391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29392,meta29391__$1){
var self__ = this;
var _29392__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29390(self__.path,self__.late,meta29391__$1));
});

com.rpl.specter.t_com$rpl$specter29390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29392){
var self__ = this;
var _29392__$1 = this;
return self__.meta29391;
});

com.rpl.specter.t_com$rpl$specter29390.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29390.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter29390.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter29390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29391","meta29391",208644016,null)], null);
});

com.rpl.specter.t_com$rpl$specter29390.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29390.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29390";

com.rpl.specter.t_com$rpl$specter29390.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29390");
});

com.rpl.specter.__GT_t_com$rpl$specter29390 = (function com$rpl$specter$__GT_t_com$rpl$specter29390(path__$1,late__$1,meta29391){
return (new com.rpl.specter.t_com$rpl$specter29390(path__$1,late__$1,meta29391));
});

}

return (new com.rpl.specter.t_com$rpl$specter29390(path,late,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
};
var G__29393 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29394__i = 0, G__29394__a = new Array(arguments.length -  0);
while (G__29394__i < G__29394__a.length) {G__29394__a[G__29394__i] = arguments[G__29394__i + 0]; ++G__29394__i;}
  path = new cljs.core.IndexedSeq(G__29394__a,0);
} 
return G__29393__delegate.call(this,path);};
G__29393.cljs$lang$maxFixedArity = 0;
G__29393.cljs$lang$applyTo = (function (arglist__29395){
var path = cljs.core.seq(arglist__29395);
return G__29393__delegate(path);
});
G__29393.cljs$core$IFn$_invoke$arity$variadic = G__29393__delegate;
return G__29393;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__29399__delegate = function (path){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter29396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29396 = (function (path,late,meta29397){
this.path = path;
this.late = late;
this.meta29397 = meta29397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29398,meta29397__$1){
var self__ = this;
var _29398__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29396(self__.path,self__.late,meta29397__$1));
});

com.rpl.specter.t_com$rpl$specter29396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29398){
var self__ = this;
var _29398__$1 = this;
return self__.meta29397;
});

com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter29396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29397","meta29397",-1456031012,null)], null);
});

com.rpl.specter.t_com$rpl$specter29396.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29396.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29396";

com.rpl.specter.t_com$rpl$specter29396.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29396");
});

com.rpl.specter.__GT_t_com$rpl$specter29396 = (function com$rpl$specter$__GT_t_com$rpl$specter29396(path__$1,late__$1,meta29397){
return (new com.rpl.specter.t_com$rpl$specter29396(path__$1,late__$1,meta29397));
});

}

return (new com.rpl.specter.t_com$rpl$specter29396(path,late,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
};
var G__29399 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29400__i = 0, G__29400__a = new Array(arguments.length -  0);
while (G__29400__i < G__29400__a.length) {G__29400__a[G__29400__i] = arguments[G__29400__i + 0]; ++G__29400__i;}
  path = new cljs.core.IndexedSeq(G__29400__a,0);
} 
return G__29399__delegate.call(this,path);};
G__29399.cljs$lang$maxFixedArity = 0;
G__29399.cljs$lang$applyTo = (function (arglist__29401){
var path = cljs.core.seq(arglist__29401);
return G__29399__delegate(path);
});
G__29399.cljs$core$IFn$_invoke$arity$variadic = G__29399__delegate;
return G__29399;
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
if(typeof com.rpl.specter.t_com$rpl$specter29402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29402 = (function (val,meta29403){
this.val = val;
this.meta29403 = meta29403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29404,meta29403__$1){
var self__ = this;
var _29404__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29402(self__.val,meta29403__$1));
});

com.rpl.specter.t_com$rpl$specter29402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29404){
var self__ = this;
var _29404__$1 = this;
return self__.meta29403;
});

com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28656__auto__,vals__28657__auto__,structure,next_fn__28658__auto__){
var self__ = this;
var this__28656__auto____$1 = this;
return next_fn__28658__auto__.call(null,cljs.core.conj.call(null,vals__28657__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter29402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta29403","meta29403",-993618347,null)], null);
});

com.rpl.specter.t_com$rpl$specter29402.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29402.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29402";

com.rpl.specter.t_com$rpl$specter29402.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29402");
});

com.rpl.specter.__GT_t_com$rpl$specter29402 = (function com$rpl$specter$__GT_t_com$rpl$specter29402(val__$1,meta29403){
return (new com.rpl.specter.t_com$rpl$specter29402(val__$1,meta29403));
});

}

return (new com.rpl.specter.t_com$rpl$specter29402(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter29405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29405 = (function (meta29406){
this.meta29406 = meta29406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29407,meta29406__$1){
var self__ = this;
var _29407__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29405(meta29406__$1));
});

com.rpl.specter.t_com$rpl$specter29405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29407){
var self__ = this;
var _29407__$1 = this;
return self__.meta29406;
});

com.rpl.specter.t_com$rpl$specter29405.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29405.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter29405.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter29405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29406","meta29406",109032012,null)], null);
});

com.rpl.specter.t_com$rpl$specter29405.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29405.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29405";

com.rpl.specter.t_com$rpl$specter29405.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29405");
});

com.rpl.specter.__GT_t_com$rpl$specter29405 = (function com$rpl$specter$__GT_t_com$rpl$specter29405(meta29406){
return (new com.rpl.specter.t_com$rpl$specter29405(meta29406));
});

}

return (new com.rpl.specter.t_com$rpl$specter29405(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__29416 = null;
var G__29416__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__29416__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter29410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29410 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta29411){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta29411 = meta29411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_29412,meta29411__$1){
var self__ = this;
var _29412__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29410(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta29411__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_29412){
var self__ = this;
var _29412__$1 = this;
return self__.meta29411;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29410.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29410.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29410.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29410.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29411","meta29411",-2084107805,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29410.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29410.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29410";

com.rpl.specter.t_com$rpl$specter29410.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29410");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter29410 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29410(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29411){
return (new com.rpl.specter.t_com$rpl$specter29410(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29411));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29410(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
} else {
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter29413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29413 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta29414){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta29414 = meta29414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_29415,meta29414__$1){
var self__ = this;
var _29415__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29413(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta29414__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_29415){
var self__ = this;
var _29415__$1 = this;
return self__.meta29414;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29413.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29413.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__29408_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__29408_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29413.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__29409_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__29409_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29413.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29414","meta29414",-1717059025,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter29413.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29413.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29413";

com.rpl.specter.t_com$rpl$specter29413.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29413");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter29413 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29413(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29414){
return (new com.rpl.specter.t_com$rpl$specter29413(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29414));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29413(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
}
});
G__29416 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__29416__2.call(this,cond_p,then_path);
case 3:
return G__29416__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29416.cljs$core$IFn$_invoke$arity$2 = G__29416__2;
G__29416.cljs$core$IFn$_invoke$arity$3 = G__29416__3;
return G__29416;
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
var G__29421__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__29417){
var vec__29418 = p__29417;
var tester = cljs.core.nth.call(null,vec__29418,(0),null);
var apath = cljs.core.nth.call(null,vec__29418,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__29421 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__29422__i = 0, G__29422__a = new Array(arguments.length -  0);
while (G__29422__i < G__29422__a.length) {G__29422__a[G__29422__i] = arguments[G__29422__i + 0]; ++G__29422__i;}
  conds = new cljs.core.IndexedSeq(G__29422__a,0);
} 
return G__29421__delegate.call(this,conds);};
G__29421.cljs$lang$maxFixedArity = 0;
G__29421.cljs$lang$applyTo = (function (arglist__29423){
var conds = cljs.core.seq(arglist__29423);
return G__29421__delegate(conds);
});
G__29421.cljs$core$IFn$_invoke$arity$variadic = G__29421__delegate;
return G__29421;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__29431 = null;
var G__29431__0 = (function (){
return com.rpl.specter.STAY;
});
var G__29431__1 = (function (path){
return path;
});
var G__29431__2 = (function (path1,path2){
var builder__28659__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter29424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29424 = (function (path1,path2,late1,late2,meta29425){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta29425 = meta29425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter29424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29426,meta29425__$1){
var self__ = this;
var _29426__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29424(self__.path1,self__.path2,self__.late1,self__.late2,meta29425__$1));
});

com.rpl.specter.t_com$rpl$specter29424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29426){
var self__ = this;
var _29426__$1 = this;
return self__.meta29425;
});

com.rpl.specter.t_com$rpl$specter29424.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.t_com$rpl$specter29424.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter29424.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter29424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta29425","meta29425",-1411224406,null)], null);
});

com.rpl.specter.t_com$rpl$specter29424.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29424.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29424";

com.rpl.specter.t_com$rpl$specter29424.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter/t_com$rpl$specter29424");
});

com.rpl.specter.__GT_t_com$rpl$specter29424 = (function com$rpl$specter$__GT_t_com$rpl$specter29424(path1__$1,path2__$1,late1__$1,late2__$1,meta29425){
return (new com.rpl.specter.t_com$rpl$specter29424(path1__$1,path2__$1,late1__$1,late2__$1,meta29425));
});

}

return (new com.rpl.specter.t_com$rpl$specter29424(path1,path2,late1,late2,null));
}));
var curr_params__28660__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28660__auto__)){
return cljs.core.apply.call(null,builder__28659__auto__,curr_params__28660__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28659__auto__,curr_params__28660__auto__);
}
});
var G__29431__3 = (function() { 
var G__29432__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__29432 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__29433__i = 0, G__29433__a = new Array(arguments.length -  2);
while (G__29433__i < G__29433__a.length) {G__29433__a[G__29433__i] = arguments[G__29433__i + 2]; ++G__29433__i;}
  paths = new cljs.core.IndexedSeq(G__29433__a,0);
} 
return G__29432__delegate.call(this,path1,path2,paths);};
G__29432.cljs$lang$maxFixedArity = 2;
G__29432.cljs$lang$applyTo = (function (arglist__29434){
var path1 = cljs.core.first(arglist__29434);
arglist__29434 = cljs.core.next(arglist__29434);
var path2 = cljs.core.first(arglist__29434);
var paths = cljs.core.rest(arglist__29434);
return G__29432__delegate(path1,path2,paths);
});
G__29432.cljs$core$IFn$_invoke$arity$variadic = G__29432__delegate;
return G__29432;
})()
;
G__29431 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__29431__0.call(this);
case 1:
return G__29431__1.call(this,path1);
case 2:
return G__29431__2.call(this,path1,path2);
default:
var G__29435 = null;
if (arguments.length > 2) {
var G__29436__i = 0, G__29436__a = new Array(arguments.length -  2);
while (G__29436__i < G__29436__a.length) {G__29436__a[G__29436__i] = arguments[G__29436__i + 2]; ++G__29436__i;}
G__29435 = new cljs.core.IndexedSeq(G__29436__a,0);
}
return G__29431__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__29435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29431.cljs$lang$maxFixedArity = 2;
G__29431.cljs$lang$applyTo = G__29431__3.cljs$lang$applyTo;
G__29431.cljs$core$IFn$_invoke$arity$0 = G__29431__0;
G__29431.cljs$core$IFn$_invoke$arity$1 = G__29431__1;
G__29431.cljs$core$IFn$_invoke$arity$2 = G__29431__2;
G__29431.cljs$core$IFn$_invoke$arity$variadic = G__29431__3.cljs$core$IFn$_invoke$arity$variadic;
return G__29431;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__29437__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__29437 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29438__i = 0, G__29438__a = new Array(arguments.length -  0);
while (G__29438__i < G__29438__a.length) {G__29438__a[G__29438__i] = arguments[G__29438__i + 0]; ++G__29438__i;}
  path = new cljs.core.IndexedSeq(G__29438__a,0);
} 
return G__29437__delegate.call(this,path);};
G__29437.cljs$lang$maxFixedArity = 0;
G__29437.cljs$lang$applyTo = (function (arglist__29439){
var path = cljs.core.seq(arglist__29439);
return G__29437__delegate(path);
});
G__29437.cljs$core$IFn$_invoke$arity$variadic = G__29437__delegate;
return G__29437;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__29440__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__29440 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29441__i = 0, G__29441__a = new Array(arguments.length -  0);
while (G__29441__i < G__29441__a.length) {G__29441__a[G__29441__i] = arguments[G__29441__i + 0]; ++G__29441__i;}
  path = new cljs.core.IndexedSeq(G__29441__a,0);
} 
return G__29440__delegate.call(this,path);};
G__29440.cljs$lang$maxFixedArity = 0;
G__29440.cljs$lang$applyTo = (function (arglist__29442){
var path = cljs.core.seq(arglist__29442);
return G__29440__delegate(path);
});
G__29440.cljs$core$IFn$_invoke$arity$variadic = G__29440__delegate;
return G__29440;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1484162993200
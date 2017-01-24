// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.util');
goog.require('cljs.core');
goog.require('com.rpl.specter');
coding_challenges.util.update_val = (function coding_challenges$util$update_val(p,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,com.rpl.specter.terminal.call(null,f)], null);
});
coding_challenges.util.multi = (function coding_challenges$util$multi(f){
return (function() { 
var coding_challenges$util$multi_$_this__delegate = function (args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
var pairs = cljs.core.partition.call(null,(2),args);
return cljs.core.apply.call(null,com.rpl.specter.multi_path,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,f),pairs));
} else {
var structure = cljs.core.first.call(null,args);
var pairs = cljs.core.rest.call(null,args);
return com.rpl.specter.multi_transform_STAR_.call(null,cljs.core.apply.call(null,coding_challenges$util$multi_$_this,pairs),structure);
}
};
var coding_challenges$util$multi_$_this = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36129__i = 0, G__36129__a = new Array(arguments.length -  0);
while (G__36129__i < G__36129__a.length) {G__36129__a[G__36129__i] = arguments[G__36129__i + 0]; ++G__36129__i;}
  args = new cljs.core.IndexedSeq(G__36129__a,0);
} 
return coding_challenges$util$multi_$_this__delegate.call(this,args);};
coding_challenges$util$multi_$_this.cljs$lang$maxFixedArity = 0;
coding_challenges$util$multi_$_this.cljs$lang$applyTo = (function (arglist__36130){
var args = cljs.core.seq(arglist__36130);
return coding_challenges$util$multi_$_this__delegate(args);
});
coding_challenges$util$multi_$_this.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$util$multi_$_this__delegate;
return coding_challenges$util$multi_$_this;
})()
;
});
/**
 * Applies fn to the navigated value(s).
 * 
 * Even args call:
 *  Must be called inside a com.rpl.specter/multi-transform.
 *  Takes path<=>fn pairs as arguments.
 *  Returns a path.
 * Odd args call:
 *  Takes a structure as first argument and path<=>fn pairs as rest.
 *  Returns the transformation of structure.
 */
coding_challenges.util.u = coding_challenges.util.multi.call(null,coding_challenges.util.update_val);
coding_challenges.util.assoc_val = (function coding_challenges$util$assoc_val(p,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,com.rpl.specter.terminal_val.call(null,v)], null);
});
/**
 * Replace the navigated value(s) with the given value(s).
 * 
 * Even args call:
 *  Must be called inside a com.rpl.specter/multi-transform.
 *  Takes path<=>value pairs as arguments.
 *  Returns a path.
 * Odd args call:
 *  Takes a structure as first argument and path<=>value pairs as rest.
 *  Returns the transformation of structure.
 */
coding_challenges.util.a = coding_challenges.util.multi.call(null,coding_challenges.util.assoc_val);
/**
 * Transform structure based on the given paths.
 */
coding_challenges.util.mt = (function coding_challenges$util$mt(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36133 = arguments.length;
var i__7485__auto___36134 = (0);
while(true){
if((i__7485__auto___36134 < len__7484__auto___36133)){
args__7491__auto__.push((arguments[i__7485__auto___36134]));

var G__36135 = (i__7485__auto___36134 + (1));
i__7485__auto___36134 = G__36135;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,paths){
return com.rpl.specter.multi_transform_STAR_.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,paths),structure);
});

coding_challenges.util.mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.mt.cljs$lang$applyTo = (function (seq36131){
var G__36132 = cljs.core.first.call(null,seq36131);
var seq36131__$1 = cljs.core.next.call(null,seq36131);
return coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic(G__36132,seq36131__$1);
});

/**
 * Transform structure based on the given paths whose condition is truthy.
 * 
 * Acts like cond->>; Doesn't short circuit on first false.
 */
coding_challenges.util.cond__GT_mt = (function coding_challenges$util$cond__GT_mt(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36142 = arguments.length;
var i__7485__auto___36143 = (0);
while(true){
if((i__7485__auto___36143 < len__7484__auto___36142)){
args__7491__auto__.push((arguments[i__7485__auto___36143]));

var G__36144 = (i__7485__auto___36143 + (1));
i__7485__auto___36143 = G__36144;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,pairs){
var pairs__$1 = cljs.core.partition.call(null,(2),pairs);
return cljs.core.reduce.call(null,((function (pairs__$1){
return (function (structure__$1,p__36138){
var vec__36139 = p__36138;
var condition = cljs.core.nth.call(null,vec__36139,(0),null);
var path = cljs.core.nth.call(null,vec__36139,(1),null);
if(cljs.core.truth_(condition)){
return coding_challenges.util.mt.call(null,structure__$1,path);
} else {
return structure__$1;
}
});})(pairs__$1))
,structure,pairs__$1);
});

coding_challenges.util.cond__GT_mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.cond__GT_mt.cljs$lang$applyTo = (function (seq36136){
var G__36137 = cljs.core.first.call(null,seq36136);
var seq36136__$1 = cljs.core.next.call(null,seq36136);
return coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic(G__36137,seq36136__$1);
});

/**
 * Transform structure based on the first given paths whose condition is truthy.
 * 
 * Acts like cond; Short circuit after first true.
 */
coding_challenges.util.cond_mt = (function coding_challenges$util$cond_mt(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36150 = arguments.length;
var i__7485__auto___36151 = (0);
while(true){
if((i__7485__auto___36151 < len__7484__auto___36150)){
args__7491__auto__.push((arguments[i__7485__auto___36151]));

var G__36152 = (i__7485__auto___36151 + (1));
i__7485__auto___36151 = G__36152;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,pairs){
var pairs__$1 = cljs.core.partition.call(null,(2),pairs);
var vec__36147 = cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.comp.call(null,cljs.core.false_QMARK_,cljs.core.boolean$,cljs.core.first),pairs__$1));
var condition = cljs.core.nth.call(null,vec__36147,(0),null);
var path = cljs.core.nth.call(null,vec__36147,(1),null);
if(cljs.core.truth_(condition)){
return coding_challenges.util.mt.call(null,structure,path);
} else {
return null;
}
});

coding_challenges.util.cond_mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.cond_mt.cljs$lang$applyTo = (function (seq36145){
var G__36146 = cljs.core.first.call(null,seq36145);
var seq36145__$1 = cljs.core.next.call(null,seq36145);
return coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic(G__36146,seq36145__$1);
});

coding_challenges.util.PASS = coding_challenges.util.u.call(null,com.rpl.specter.STAY,cljs.core.identity);

//# sourceMappingURL=util.js.map?rel=1485243284326
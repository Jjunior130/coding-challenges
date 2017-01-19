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
var G__61665__i = 0, G__61665__a = new Array(arguments.length -  0);
while (G__61665__i < G__61665__a.length) {G__61665__a[G__61665__i] = arguments[G__61665__i + 0]; ++G__61665__i;}
  args = new cljs.core.IndexedSeq(G__61665__a,0);
} 
return coding_challenges$util$multi_$_this__delegate.call(this,args);};
coding_challenges$util$multi_$_this.cljs$lang$maxFixedArity = 0;
coding_challenges$util$multi_$_this.cljs$lang$applyTo = (function (arglist__61666){
var args = cljs.core.seq(arglist__61666);
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
var args__26128__auto__ = [];
var len__26121__auto___61669 = arguments.length;
var i__26122__auto___61670 = (0);
while(true){
if((i__26122__auto___61670 < len__26121__auto___61669)){
args__26128__auto__.push((arguments[i__26122__auto___61670]));

var G__61671 = (i__26122__auto___61670 + (1));
i__26122__auto___61670 = G__61671;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,paths){
return com.rpl.specter.multi_transform_STAR_.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,paths),structure);
});

coding_challenges.util.mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.mt.cljs$lang$applyTo = (function (seq61667){
var G__61668 = cljs.core.first.call(null,seq61667);
var seq61667__$1 = cljs.core.next.call(null,seq61667);
return coding_challenges.util.mt.cljs$core$IFn$_invoke$arity$variadic(G__61668,seq61667__$1);
});

/**
 * Transform structure based on the given paths whose condition is truthy.
 * 
 * Acts like cond->>; Doesn't short circuit on first false.
 */
coding_challenges.util.cond__GT_mt = (function coding_challenges$util$cond__GT_mt(var_args){
var args__26128__auto__ = [];
var len__26121__auto___61678 = arguments.length;
var i__26122__auto___61679 = (0);
while(true){
if((i__26122__auto___61679 < len__26121__auto___61678)){
args__26128__auto__.push((arguments[i__26122__auto___61679]));

var G__61680 = (i__26122__auto___61679 + (1));
i__26122__auto___61679 = G__61680;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,pairs){
var pairs__$1 = cljs.core.partition.call(null,(2),pairs);
return cljs.core.reduce.call(null,((function (pairs__$1){
return (function (structure__$1,p__61674){
var vec__61675 = p__61674;
var condition = cljs.core.nth.call(null,vec__61675,(0),null);
var path = cljs.core.nth.call(null,vec__61675,(1),null);
if(cljs.core.truth_(condition)){
return coding_challenges.util.mt.call(null,structure__$1,path);
} else {
return structure__$1;
}
});})(pairs__$1))
,structure,pairs__$1);
});

coding_challenges.util.cond__GT_mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.cond__GT_mt.cljs$lang$applyTo = (function (seq61672){
var G__61673 = cljs.core.first.call(null,seq61672);
var seq61672__$1 = cljs.core.next.call(null,seq61672);
return coding_challenges.util.cond__GT_mt.cljs$core$IFn$_invoke$arity$variadic(G__61673,seq61672__$1);
});

/**
 * Transform structure based on the first given paths whose condition is truthy.
 * 
 * Acts like cond; Short circuit after first true.
 */
coding_challenges.util.cond_mt = (function coding_challenges$util$cond_mt(var_args){
var args__26128__auto__ = [];
var len__26121__auto___61686 = arguments.length;
var i__26122__auto___61687 = (0);
while(true){
if((i__26122__auto___61687 < len__26121__auto___61686)){
args__26128__auto__.push((arguments[i__26122__auto___61687]));

var G__61688 = (i__26122__auto___61687 + (1));
i__26122__auto___61687 = G__61688;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic = (function (structure,pairs){
var pairs__$1 = cljs.core.partition.call(null,(2),pairs);
var vec__61683 = cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.comp.call(null,cljs.core.false_QMARK_,cljs.core.boolean$,cljs.core.first),pairs__$1));
var condition = cljs.core.nth.call(null,vec__61683,(0),null);
var path = cljs.core.nth.call(null,vec__61683,(1),null);
if(cljs.core.truth_(condition)){
return coding_challenges.util.mt.call(null,structure,path);
} else {
return structure;
}
});

coding_challenges.util.cond_mt.cljs$lang$maxFixedArity = (1);

coding_challenges.util.cond_mt.cljs$lang$applyTo = (function (seq61681){
var G__61682 = cljs.core.first.call(null,seq61681);
var seq61681__$1 = cljs.core.next.call(null,seq61681);
return coding_challenges.util.cond_mt.cljs$core$IFn$_invoke$arity$variadic(G__61682,seq61681__$1);
});

coding_challenges.util.PASS = coding_challenges.util.u.call(null,com.rpl.specter.STAY,cljs.core.identity);

//# sourceMappingURL=util.js.map?rel=1484807744981
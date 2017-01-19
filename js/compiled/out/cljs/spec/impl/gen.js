// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44930 = arguments.length;
var i__26122__auto___44931 = (0);
while(true){
if((i__26122__auto___44931 < len__26121__auto___44930)){
args__26128__auto__.push((arguments[i__26122__auto___44931]));

var G__44932 = (i__26122__auto___44931 + (1));
i__26122__auto___44931 = G__44932;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq44929){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44929));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44934 = arguments.length;
var i__26122__auto___44935 = (0);
while(true){
if((i__26122__auto___44935 < len__26121__auto___44934)){
args__26128__auto__.push((arguments[i__26122__auto___44935]));

var G__44936 = (i__26122__auto___44935 + (1));
i__26122__auto___44935 = G__44936;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq44933){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44933));
});

var g_QMARK__44937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_44938 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44937){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44937))
,null));
var mkg_44939 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44937,g_44938){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44937,g_44938))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__44937,g_44938,mkg_44939){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44937).call(null,x);
});})(g_QMARK__44937,g_44938,mkg_44939))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__44937,g_44938,mkg_44939){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_44939).call(null,gfn);
});})(g_QMARK__44937,g_44938,mkg_44939))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__44937,g_44938,mkg_44939){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_44938).call(null,generator);
});})(g_QMARK__44937,g_44938,mkg_44939))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__43048__auto___44958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__43048__auto___44958){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44959 = arguments.length;
var i__26122__auto___44960 = (0);
while(true){
if((i__26122__auto___44960 < len__26121__auto___44959)){
args__26128__auto__.push((arguments[i__26122__auto___44960]));

var G__44961 = (i__26122__auto___44960 + (1));
i__26122__auto___44960 = G__44961;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44958))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44958){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44958),args);
});})(g__43048__auto___44958))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__43048__auto___44958){
return (function (seq44940){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44940));
});})(g__43048__auto___44958))
;


var g__43048__auto___44962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__43048__auto___44962){
return (function cljs$spec$impl$gen$list(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44963 = arguments.length;
var i__26122__auto___44964 = (0);
while(true){
if((i__26122__auto___44964 < len__26121__auto___44963)){
args__26128__auto__.push((arguments[i__26122__auto___44964]));

var G__44965 = (i__26122__auto___44964 + (1));
i__26122__auto___44964 = G__44965;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44962))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44962){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44962),args);
});})(g__43048__auto___44962))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__43048__auto___44962){
return (function (seq44941){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44941));
});})(g__43048__auto___44962))
;


var g__43048__auto___44966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__43048__auto___44966){
return (function cljs$spec$impl$gen$map(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44967 = arguments.length;
var i__26122__auto___44968 = (0);
while(true){
if((i__26122__auto___44968 < len__26121__auto___44967)){
args__26128__auto__.push((arguments[i__26122__auto___44968]));

var G__44969 = (i__26122__auto___44968 + (1));
i__26122__auto___44968 = G__44969;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44966))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44966){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44966),args);
});})(g__43048__auto___44966))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__43048__auto___44966){
return (function (seq44942){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44942));
});})(g__43048__auto___44966))
;


var g__43048__auto___44970 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__43048__auto___44970){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44971 = arguments.length;
var i__26122__auto___44972 = (0);
while(true){
if((i__26122__auto___44972 < len__26121__auto___44971)){
args__26128__auto__.push((arguments[i__26122__auto___44972]));

var G__44973 = (i__26122__auto___44972 + (1));
i__26122__auto___44972 = G__44973;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44970))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44970){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44970),args);
});})(g__43048__auto___44970))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__43048__auto___44970){
return (function (seq44943){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44943));
});})(g__43048__auto___44970))
;


var g__43048__auto___44974 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__43048__auto___44974){
return (function cljs$spec$impl$gen$set(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44975 = arguments.length;
var i__26122__auto___44976 = (0);
while(true){
if((i__26122__auto___44976 < len__26121__auto___44975)){
args__26128__auto__.push((arguments[i__26122__auto___44976]));

var G__44977 = (i__26122__auto___44976 + (1));
i__26122__auto___44976 = G__44977;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44974))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44974){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44974),args);
});})(g__43048__auto___44974))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__43048__auto___44974){
return (function (seq44944){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44944));
});})(g__43048__auto___44974))
;


var g__43048__auto___44978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__43048__auto___44978){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44979 = arguments.length;
var i__26122__auto___44980 = (0);
while(true){
if((i__26122__auto___44980 < len__26121__auto___44979)){
args__26128__auto__.push((arguments[i__26122__auto___44980]));

var G__44981 = (i__26122__auto___44980 + (1));
i__26122__auto___44980 = G__44981;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44978))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44978){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44978),args);
});})(g__43048__auto___44978))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__43048__auto___44978){
return (function (seq44945){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44945));
});})(g__43048__auto___44978))
;


var g__43048__auto___44982 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__43048__auto___44982){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44983 = arguments.length;
var i__26122__auto___44984 = (0);
while(true){
if((i__26122__auto___44984 < len__26121__auto___44983)){
args__26128__auto__.push((arguments[i__26122__auto___44984]));

var G__44985 = (i__26122__auto___44984 + (1));
i__26122__auto___44984 = G__44985;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44982))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44982){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44982),args);
});})(g__43048__auto___44982))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__43048__auto___44982){
return (function (seq44946){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44946));
});})(g__43048__auto___44982))
;


var g__43048__auto___44986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__43048__auto___44986){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44987 = arguments.length;
var i__26122__auto___44988 = (0);
while(true){
if((i__26122__auto___44988 < len__26121__auto___44987)){
args__26128__auto__.push((arguments[i__26122__auto___44988]));

var G__44989 = (i__26122__auto___44988 + (1));
i__26122__auto___44988 = G__44989;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44986))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44986){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44986),args);
});})(g__43048__auto___44986))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__43048__auto___44986){
return (function (seq44947){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44947));
});})(g__43048__auto___44986))
;


var g__43048__auto___44990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__43048__auto___44990){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44991 = arguments.length;
var i__26122__auto___44992 = (0);
while(true){
if((i__26122__auto___44992 < len__26121__auto___44991)){
args__26128__auto__.push((arguments[i__26122__auto___44992]));

var G__44993 = (i__26122__auto___44992 + (1));
i__26122__auto___44992 = G__44993;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44990))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44990){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44990),args);
});})(g__43048__auto___44990))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__43048__auto___44990){
return (function (seq44948){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44948));
});})(g__43048__auto___44990))
;


var g__43048__auto___44994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__43048__auto___44994){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44995 = arguments.length;
var i__26122__auto___44996 = (0);
while(true){
if((i__26122__auto___44996 < len__26121__auto___44995)){
args__26128__auto__.push((arguments[i__26122__auto___44996]));

var G__44997 = (i__26122__auto___44996 + (1));
i__26122__auto___44996 = G__44997;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44994))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44994){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44994),args);
});})(g__43048__auto___44994))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__43048__auto___44994){
return (function (seq44949){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44949));
});})(g__43048__auto___44994))
;


var g__43048__auto___44998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__43048__auto___44998){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26128__auto__ = [];
var len__26121__auto___44999 = arguments.length;
var i__26122__auto___45000 = (0);
while(true){
if((i__26122__auto___45000 < len__26121__auto___44999)){
args__26128__auto__.push((arguments[i__26122__auto___45000]));

var G__45001 = (i__26122__auto___45000 + (1));
i__26122__auto___45000 = G__45001;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___44998))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___44998){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___44998),args);
});})(g__43048__auto___44998))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__43048__auto___44998){
return (function (seq44950){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44950));
});})(g__43048__auto___44998))
;


var g__43048__auto___45002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__43048__auto___45002){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45003 = arguments.length;
var i__26122__auto___45004 = (0);
while(true){
if((i__26122__auto___45004 < len__26121__auto___45003)){
args__26128__auto__.push((arguments[i__26122__auto___45004]));

var G__45005 = (i__26122__auto___45004 + (1));
i__26122__auto___45004 = G__45005;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45002))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45002){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45002),args);
});})(g__43048__auto___45002))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__43048__auto___45002){
return (function (seq44951){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44951));
});})(g__43048__auto___45002))
;


var g__43048__auto___45006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__43048__auto___45006){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45007 = arguments.length;
var i__26122__auto___45008 = (0);
while(true){
if((i__26122__auto___45008 < len__26121__auto___45007)){
args__26128__auto__.push((arguments[i__26122__auto___45008]));

var G__45009 = (i__26122__auto___45008 + (1));
i__26122__auto___45008 = G__45009;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45006))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45006){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45006),args);
});})(g__43048__auto___45006))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__43048__auto___45006){
return (function (seq44952){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44952));
});})(g__43048__auto___45006))
;


var g__43048__auto___45010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__43048__auto___45010){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45011 = arguments.length;
var i__26122__auto___45012 = (0);
while(true){
if((i__26122__auto___45012 < len__26121__auto___45011)){
args__26128__auto__.push((arguments[i__26122__auto___45012]));

var G__45013 = (i__26122__auto___45012 + (1));
i__26122__auto___45012 = G__45013;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45010))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45010){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45010),args);
});})(g__43048__auto___45010))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__43048__auto___45010){
return (function (seq44953){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44953));
});})(g__43048__auto___45010))
;


var g__43048__auto___45014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__43048__auto___45014){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45015 = arguments.length;
var i__26122__auto___45016 = (0);
while(true){
if((i__26122__auto___45016 < len__26121__auto___45015)){
args__26128__auto__.push((arguments[i__26122__auto___45016]));

var G__45017 = (i__26122__auto___45016 + (1));
i__26122__auto___45016 = G__45017;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45014))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45014){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45014),args);
});})(g__43048__auto___45014))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__43048__auto___45014){
return (function (seq44954){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44954));
});})(g__43048__auto___45014))
;


var g__43048__auto___45018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__43048__auto___45018){
return (function cljs$spec$impl$gen$return(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45019 = arguments.length;
var i__26122__auto___45020 = (0);
while(true){
if((i__26122__auto___45020 < len__26121__auto___45019)){
args__26128__auto__.push((arguments[i__26122__auto___45020]));

var G__45021 = (i__26122__auto___45020 + (1));
i__26122__auto___45020 = G__45021;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45018))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45018){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45018),args);
});})(g__43048__auto___45018))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__43048__auto___45018){
return (function (seq44955){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44955));
});})(g__43048__auto___45018))
;


var g__43048__auto___45022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__43048__auto___45022){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45023 = arguments.length;
var i__26122__auto___45024 = (0);
while(true){
if((i__26122__auto___45024 < len__26121__auto___45023)){
args__26128__auto__.push((arguments[i__26122__auto___45024]));

var G__45025 = (i__26122__auto___45024 + (1));
i__26122__auto___45024 = G__45025;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45022))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45022){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45022),args);
});})(g__43048__auto___45022))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__43048__auto___45022){
return (function (seq44956){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44956));
});})(g__43048__auto___45022))
;


var g__43048__auto___45026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__43048__auto___45026){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45027 = arguments.length;
var i__26122__auto___45028 = (0);
while(true){
if((i__26122__auto___45028 < len__26121__auto___45027)){
args__26128__auto__.push((arguments[i__26122__auto___45028]));

var G__45029 = (i__26122__auto___45028 + (1));
i__26122__auto___45028 = G__45029;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43048__auto___45026))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43048__auto___45026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43048__auto___45026),args);
});})(g__43048__auto___45026))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__43048__auto___45026){
return (function (seq44957){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44957));
});})(g__43048__auto___45026))
;

var g__43061__auto___45051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__43061__auto___45051){
return (function cljs$spec$impl$gen$any(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45052 = arguments.length;
var i__26122__auto___45053 = (0);
while(true){
if((i__26122__auto___45053 < len__26121__auto___45052)){
args__26128__auto__.push((arguments[i__26122__auto___45053]));

var G__45054 = (i__26122__auto___45053 + (1));
i__26122__auto___45053 = G__45054;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45051))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45051){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45051);
});})(g__43061__auto___45051))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__43061__auto___45051){
return (function (seq45030){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45030));
});})(g__43061__auto___45051))
;


var g__43061__auto___45055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__43061__auto___45055){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45056 = arguments.length;
var i__26122__auto___45057 = (0);
while(true){
if((i__26122__auto___45057 < len__26121__auto___45056)){
args__26128__auto__.push((arguments[i__26122__auto___45057]));

var G__45058 = (i__26122__auto___45057 + (1));
i__26122__auto___45057 = G__45058;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45055))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45055){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45055);
});})(g__43061__auto___45055))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__43061__auto___45055){
return (function (seq45031){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45031));
});})(g__43061__auto___45055))
;


var g__43061__auto___45059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__43061__auto___45059){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45060 = arguments.length;
var i__26122__auto___45061 = (0);
while(true){
if((i__26122__auto___45061 < len__26121__auto___45060)){
args__26128__auto__.push((arguments[i__26122__auto___45061]));

var G__45062 = (i__26122__auto___45061 + (1));
i__26122__auto___45061 = G__45062;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45059))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45059){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45059);
});})(g__43061__auto___45059))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__43061__auto___45059){
return (function (seq45032){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45032));
});})(g__43061__auto___45059))
;


var g__43061__auto___45063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__43061__auto___45063){
return (function cljs$spec$impl$gen$char(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45064 = arguments.length;
var i__26122__auto___45065 = (0);
while(true){
if((i__26122__auto___45065 < len__26121__auto___45064)){
args__26128__auto__.push((arguments[i__26122__auto___45065]));

var G__45066 = (i__26122__auto___45065 + (1));
i__26122__auto___45065 = G__45066;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45063))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45063){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45063);
});})(g__43061__auto___45063))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__43061__auto___45063){
return (function (seq45033){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45033));
});})(g__43061__auto___45063))
;


var g__43061__auto___45067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__43061__auto___45067){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45068 = arguments.length;
var i__26122__auto___45069 = (0);
while(true){
if((i__26122__auto___45069 < len__26121__auto___45068)){
args__26128__auto__.push((arguments[i__26122__auto___45069]));

var G__45070 = (i__26122__auto___45069 + (1));
i__26122__auto___45069 = G__45070;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45067))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45067){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45067);
});})(g__43061__auto___45067))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__43061__auto___45067){
return (function (seq45034){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45034));
});})(g__43061__auto___45067))
;


var g__43061__auto___45071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__43061__auto___45071){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45072 = arguments.length;
var i__26122__auto___45073 = (0);
while(true){
if((i__26122__auto___45073 < len__26121__auto___45072)){
args__26128__auto__.push((arguments[i__26122__auto___45073]));

var G__45074 = (i__26122__auto___45073 + (1));
i__26122__auto___45073 = G__45074;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45071))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45071){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45071);
});})(g__43061__auto___45071))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__43061__auto___45071){
return (function (seq45035){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45035));
});})(g__43061__auto___45071))
;


var g__43061__auto___45075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__43061__auto___45075){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45076 = arguments.length;
var i__26122__auto___45077 = (0);
while(true){
if((i__26122__auto___45077 < len__26121__auto___45076)){
args__26128__auto__.push((arguments[i__26122__auto___45077]));

var G__45078 = (i__26122__auto___45077 + (1));
i__26122__auto___45077 = G__45078;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45075))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45075){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45075);
});})(g__43061__auto___45075))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__43061__auto___45075){
return (function (seq45036){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45036));
});})(g__43061__auto___45075))
;


var g__43061__auto___45079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__43061__auto___45079){
return (function cljs$spec$impl$gen$double(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45080 = arguments.length;
var i__26122__auto___45081 = (0);
while(true){
if((i__26122__auto___45081 < len__26121__auto___45080)){
args__26128__auto__.push((arguments[i__26122__auto___45081]));

var G__45082 = (i__26122__auto___45081 + (1));
i__26122__auto___45081 = G__45082;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45079))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45079){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45079);
});})(g__43061__auto___45079))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__43061__auto___45079){
return (function (seq45037){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45037));
});})(g__43061__auto___45079))
;


var g__43061__auto___45083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__43061__auto___45083){
return (function cljs$spec$impl$gen$int(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45084 = arguments.length;
var i__26122__auto___45085 = (0);
while(true){
if((i__26122__auto___45085 < len__26121__auto___45084)){
args__26128__auto__.push((arguments[i__26122__auto___45085]));

var G__45086 = (i__26122__auto___45085 + (1));
i__26122__auto___45085 = G__45086;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45083))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45083){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45083);
});})(g__43061__auto___45083))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__43061__auto___45083){
return (function (seq45038){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45038));
});})(g__43061__auto___45083))
;


var g__43061__auto___45087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__43061__auto___45087){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45088 = arguments.length;
var i__26122__auto___45089 = (0);
while(true){
if((i__26122__auto___45089 < len__26121__auto___45088)){
args__26128__auto__.push((arguments[i__26122__auto___45089]));

var G__45090 = (i__26122__auto___45089 + (1));
i__26122__auto___45089 = G__45090;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45087))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45087){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45087);
});})(g__43061__auto___45087))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__43061__auto___45087){
return (function (seq45039){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45039));
});})(g__43061__auto___45087))
;


var g__43061__auto___45091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__43061__auto___45091){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45092 = arguments.length;
var i__26122__auto___45093 = (0);
while(true){
if((i__26122__auto___45093 < len__26121__auto___45092)){
args__26128__auto__.push((arguments[i__26122__auto___45093]));

var G__45094 = (i__26122__auto___45093 + (1));
i__26122__auto___45093 = G__45094;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45091))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45091){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45091);
});})(g__43061__auto___45091))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__43061__auto___45091){
return (function (seq45040){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45040));
});})(g__43061__auto___45091))
;


var g__43061__auto___45095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__43061__auto___45095){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45096 = arguments.length;
var i__26122__auto___45097 = (0);
while(true){
if((i__26122__auto___45097 < len__26121__auto___45096)){
args__26128__auto__.push((arguments[i__26122__auto___45097]));

var G__45098 = (i__26122__auto___45097 + (1));
i__26122__auto___45097 = G__45098;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45095))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45095){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45095);
});})(g__43061__auto___45095))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__43061__auto___45095){
return (function (seq45041){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45041));
});})(g__43061__auto___45095))
;


var g__43061__auto___45099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__43061__auto___45099){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45100 = arguments.length;
var i__26122__auto___45101 = (0);
while(true){
if((i__26122__auto___45101 < len__26121__auto___45100)){
args__26128__auto__.push((arguments[i__26122__auto___45101]));

var G__45102 = (i__26122__auto___45101 + (1));
i__26122__auto___45101 = G__45102;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45099))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45099){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45099);
});})(g__43061__auto___45099))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__43061__auto___45099){
return (function (seq45042){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45042));
});})(g__43061__auto___45099))
;


var g__43061__auto___45103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__43061__auto___45103){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45104 = arguments.length;
var i__26122__auto___45105 = (0);
while(true){
if((i__26122__auto___45105 < len__26121__auto___45104)){
args__26128__auto__.push((arguments[i__26122__auto___45105]));

var G__45106 = (i__26122__auto___45105 + (1));
i__26122__auto___45105 = G__45106;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45103))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45103){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45103);
});})(g__43061__auto___45103))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__43061__auto___45103){
return (function (seq45043){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45043));
});})(g__43061__auto___45103))
;


var g__43061__auto___45107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__43061__auto___45107){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45108 = arguments.length;
var i__26122__auto___45109 = (0);
while(true){
if((i__26122__auto___45109 < len__26121__auto___45108)){
args__26128__auto__.push((arguments[i__26122__auto___45109]));

var G__45110 = (i__26122__auto___45109 + (1));
i__26122__auto___45109 = G__45110;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45107))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45107){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45107);
});})(g__43061__auto___45107))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__43061__auto___45107){
return (function (seq45044){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45044));
});})(g__43061__auto___45107))
;


var g__43061__auto___45111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__43061__auto___45111){
return (function cljs$spec$impl$gen$string(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45112 = arguments.length;
var i__26122__auto___45113 = (0);
while(true){
if((i__26122__auto___45113 < len__26121__auto___45112)){
args__26128__auto__.push((arguments[i__26122__auto___45113]));

var G__45114 = (i__26122__auto___45113 + (1));
i__26122__auto___45113 = G__45114;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45111))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45111){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45111);
});})(g__43061__auto___45111))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__43061__auto___45111){
return (function (seq45045){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45045));
});})(g__43061__auto___45111))
;


var g__43061__auto___45115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__43061__auto___45115){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45116 = arguments.length;
var i__26122__auto___45117 = (0);
while(true){
if((i__26122__auto___45117 < len__26121__auto___45116)){
args__26128__auto__.push((arguments[i__26122__auto___45117]));

var G__45118 = (i__26122__auto___45117 + (1));
i__26122__auto___45117 = G__45118;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45115))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45115){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45115);
});})(g__43061__auto___45115))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__43061__auto___45115){
return (function (seq45046){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45046));
});})(g__43061__auto___45115))
;


var g__43061__auto___45119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__43061__auto___45119){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45120 = arguments.length;
var i__26122__auto___45121 = (0);
while(true){
if((i__26122__auto___45121 < len__26121__auto___45120)){
args__26128__auto__.push((arguments[i__26122__auto___45121]));

var G__45122 = (i__26122__auto___45121 + (1));
i__26122__auto___45121 = G__45122;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45119))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45119){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45119);
});})(g__43061__auto___45119))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__43061__auto___45119){
return (function (seq45047){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45047));
});})(g__43061__auto___45119))
;


var g__43061__auto___45123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__43061__auto___45123){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45124 = arguments.length;
var i__26122__auto___45125 = (0);
while(true){
if((i__26122__auto___45125 < len__26121__auto___45124)){
args__26128__auto__.push((arguments[i__26122__auto___45125]));

var G__45126 = (i__26122__auto___45125 + (1));
i__26122__auto___45125 = G__45126;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45123))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45123){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45123);
});})(g__43061__auto___45123))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__43061__auto___45123){
return (function (seq45048){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45048));
});})(g__43061__auto___45123))
;


var g__43061__auto___45127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__43061__auto___45127){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45128 = arguments.length;
var i__26122__auto___45129 = (0);
while(true){
if((i__26122__auto___45129 < len__26121__auto___45128)){
args__26128__auto__.push((arguments[i__26122__auto___45129]));

var G__45130 = (i__26122__auto___45129 + (1));
i__26122__auto___45129 = G__45130;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45127))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45127){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45127);
});})(g__43061__auto___45127))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__43061__auto___45127){
return (function (seq45049){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45049));
});})(g__43061__auto___45127))
;


var g__43061__auto___45131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__43061__auto___45131){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45132 = arguments.length;
var i__26122__auto___45133 = (0);
while(true){
if((i__26122__auto___45133 < len__26121__auto___45132)){
args__26128__auto__.push((arguments[i__26122__auto___45133]));

var G__45134 = (i__26122__auto___45133 + (1));
i__26122__auto___45133 = G__45134;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});})(g__43061__auto___45131))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43061__auto___45131){
return (function (args){
return cljs.core.deref.call(null,g__43061__auto___45131);
});})(g__43061__auto___45131))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__43061__auto___45131){
return (function (seq45050){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45050));
});})(g__43061__auto___45131))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45137 = arguments.length;
var i__26122__auto___45138 = (0);
while(true){
if((i__26122__auto___45138 < len__26121__auto___45137)){
args__26128__auto__.push((arguments[i__26122__auto___45138]));

var G__45139 = (i__26122__auto___45138 + (1));
i__26122__auto___45138 = G__45139;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__45135_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__45135_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq45136){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45136));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__45140_SHARP_){
return (new Date(p1__45140_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1484780666348
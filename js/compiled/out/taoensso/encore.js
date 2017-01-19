// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(84),(2)], null);
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args29328 = [];
var len__7484__auto___29337 = arguments.length;
var i__7485__auto___29338 = (0);
while(true){
if((i__7485__auto___29338 < len__7484__auto___29337)){
args29328.push((arguments[i__7485__auto___29338]));

var G__29339 = (i__7485__auto___29338 + (1));
i__7485__auto___29338 = G__29339;
continue;
} else {
}
break;
}

var G__29330 = args29328.length;
switch (G__29330) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29328.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__29331 = (((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__29331,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__29331,(1),null);
var vec__29334 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__29334,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__29334,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args29341 = [];
var len__7484__auto___29344 = arguments.length;
var i__7485__auto___29345 = (0);
while(true){
if((i__7485__auto___29345 < len__7484__auto___29344)){
args29341.push((arguments[i__7485__auto___29345]));

var G__29346 = (i__7485__auto___29345 + (1));
i__7485__auto___29345 = G__29346;
continue;
} else {
}
break;
}

var G__29343 = args29341.length;
switch (G__29343) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29341.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args29348 = [];
var len__7484__auto___29353 = arguments.length;
var i__7485__auto___29354 = (0);
while(true){
if((i__7485__auto___29354 < len__7484__auto___29353)){
args29348.push((arguments[i__7485__auto___29354]));

var G__29355 = (i__7485__auto___29354 + (1));
i__7485__auto___29354 = G__29355;
continue;
} else {
}
break;
}

var G__29350 = args29348.length;
switch (G__29350) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29348.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_29351 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_29352 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_29352;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29351;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__27852__auto__ = (function (){var or__6409__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__27852__auto__)){
var data_map = b2__27852__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__6397__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6397__auto____$1)){
return true;
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__6397__auto__ = (x instanceof cljs.core.Symbol);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6397__auto____$1)){
return true;
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__6397__auto__ = (x instanceof cljs.core.Keyword);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__6397__auto____$1)){
return true;
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__6397__auto__ = typeof x === 'number';
if(and__6397__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__6397__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__27852__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var ns = b2__27852__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var n = b2__27852__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var n = b2__27852__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var n = b2__27852__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var n = b2__27852__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var n = b2__27852__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__27852__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__27852__auto__)){
var f = b2__27852__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__27852__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__27852__auto__)){
var email = b2__27852__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e29366){if((e29366 instanceof Error)){
var _ = e29366;
return false;
} else {
throw e29366;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args29367 = [];
var len__7484__auto___29370 = arguments.length;
var i__7485__auto___29371 = (0);
while(true){
if((i__7485__auto___29371 < len__7484__auto___29370)){
args29367.push((arguments[i__7485__auto___29371]));

var G__29372 = (i__7485__auto___29371 + (1));
i__7485__auto___29371 = G__29372;
continue;
} else {
}
break;
}

var G__29369 = args29367.length;
switch (G__29369) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29367.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("`as-"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.call(null,x)),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__6409__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args29374 = [];
var len__7484__auto___29377 = arguments.length;
var i__7485__auto___29378 = (0);
while(true){
if((i__7485__auto___29378 < len__7484__auto___29377)){
args29374.push((arguments[i__7485__auto___29378]));

var G__29379 = (i__7485__auto___29378 + (1));
i__7485__auto___29378 = G__29379;
continue;
} else {
}
break;
}

var G__29376 = args29374.length;
switch (G__29376) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29374.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__29387){
var vec__29388 = p__29387;
var k = cljs.core.nth.call(null,vec__29388,(0),null);
var v = cljs.core.nth.call(null,vec__29388,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i){
return (function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),in$);
});})(i))
,init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__29392_SHARP_,p2__29391_SHARP_){
return proc.call(null,p2__29391_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__29395_SHARP_,p2__29393_SHARP_,p3__29394_SHARP_){
return proc.call(null,p2__29393_SHARP_,p3__29394_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__29398_SHARP_,p2__29396_SHARP_,p3__29397_SHARP_){
return proc.call(null,p2__29396_SHARP_,p3__29397_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__29401_SHARP_,p2__29399_SHARP_,p3__29400_SHARP_){
return proc.call(null,p2__29399_SHARP_,p3__29400_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__27852__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__27852__auto__)){
var p = b2__27852__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__27852__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__27852__auto__)){
var p = b2__27852__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.atom.call(null,(-1));
return ((function (idx_){
return (function (){
return cljs.core.swap_BANG_.call(null,idx_,cljs.core.inc);
});
;})(idx_))
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var args29403 = [];
var len__7484__auto___29406 = arguments.length;
var i__7485__auto___29407 = (0);
while(true){
if((i__7485__auto___29407 < len__7484__auto___29406)){
args29403.push((arguments[i__7485__auto___29407]));

var G__29408 = (i__7485__auto___29407 + (1));
i__7485__auto___29407 = G__29408;
continue;
} else {
}
break;
}

var G__29405 = args29403.length;
switch (G__29405) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29403.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args29410 = [];
var len__7484__auto___29414 = arguments.length;
var i__7485__auto___29415 = (0);
while(true){
if((i__7485__auto___29415 < len__7484__auto___29414)){
args29410.push((arguments[i__7485__auto___29415]));

var G__29416 = (i__7485__auto___29415 + (1));
i__7485__auto___29415 = G__29416;
continue;
} else {
}
break;
}

var G__29412 = args29410.length;
switch (G__29412) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29410.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__29413 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29413) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args29419 = [];
var len__7484__auto___29425 = arguments.length;
var i__7485__auto___29426 = (0);
while(true){
if((i__7485__auto___29426 < len__7484__auto___29425)){
args29419.push((arguments[i__7485__auto___29426]));

var G__29427 = (i__7485__auto___29426 + (1));
i__7485__auto___29426 = G__29427;
continue;
} else {
}
break;
}

var G__29421 = args29419.length;
switch (G__29421) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29419.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__29422){
var map__29423 = p__29422;
var map__29423__$1 = ((((!((map__29423 == null)))?((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var min = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args29430 = [];
var len__7484__auto___29436 = arguments.length;
var i__7485__auto___29437 = (0);
while(true){
if((i__7485__auto___29437 < len__7484__auto___29436)){
args29430.push((arguments[i__7485__auto___29437]));

var G__29438 = (i__7485__auto___29437 + (1));
i__7485__auto___29437 = G__29438;
continue;
} else {
}
break;
}

var G__29435 = args29430.length;
switch (G__29435) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29430.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6397__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__6397__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__6397__auto____$1,and__6397__auto__){
return (function (p1__29429_SHARP_){
return cljs.core._EQ_.call(null,p1__29429_SHARP_,x);
});})(and__6397__auto____$1,and__6397__auto__))
,more);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq29431){
var G__29432 = cljs.core.first.call(null,seq29431);
var seq29431__$1 = cljs.core.next.call(null,seq29431);
var G__29433 = cljs.core.first.call(null,seq29431__$1);
var seq29431__$2 = cljs.core.next.call(null,seq29431__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__29432,G__29433,seq29431__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args29440 = [];
var len__7484__auto___29447 = arguments.length;
var i__7485__auto___29448 = (0);
while(true){
if((i__7485__auto___29448 < len__7484__auto___29447)){
args29440.push((arguments[i__7485__auto___29448]));

var G__29449 = (i__7485__auto___29448 + (1));
i__7485__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var G__29446 = args29440.length;
switch (G__29446) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29440.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq29441){
var G__29442 = cljs.core.first.call(null,seq29441);
var seq29441__$1 = cljs.core.next.call(null,seq29441);
var G__29443 = cljs.core.first.call(null,seq29441__$1);
var seq29441__$2 = cljs.core.next.call(null,seq29441__$1);
var G__29444 = cljs.core.first.call(null,seq29441__$2);
var seq29441__$3 = cljs.core.next.call(null,seq29441__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__29442,G__29443,G__29444,seq29441__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__29454 = clojure.string.split.call(null,[cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__29454,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__29454,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__27852__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__27852__auto__)){
var s = b2__27852__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__27852__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__27852__auto__)){
var s = b2__27852__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__29467 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__29467,(0),null);
var yc = cljs.core.nth.call(null,vec__29467,(1),null);
var zc = cljs.core.nth.call(null,vec__29467,(2),null);
var vec__29470 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__29470,(0),null);
var ym = cljs.core.nth.call(null,vec__29470,(1),null);
var zm = cljs.core.nth.call(null,vec__29470,(2),null);
var vec__29473 = cljs.core.mapv.call(null,((function (vec__29467,xc,yc,zc,vec__29470,xm,ym,zm){
return (function (p1__29457_SHARP_){
var or__6409__auto__ = p1__29457_SHARP_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
});})(vec__29467,xc,yc,zc,vec__29470,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__29473,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__29473,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__29473,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args29476 = [];
var len__7484__auto___29479 = arguments.length;
var i__7485__auto___29480 = (0);
while(true){
if((i__7485__auto___29480 < len__7484__auto___29479)){
args29476.push((arguments[i__7485__auto___29480]));

var G__29481 = (i__7485__auto___29480 + (1));
i__7485__auto___29480 = G__29481;
continue;
} else {
}
break;
}

var G__29478 = args29476.length;
switch (G__29478) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29476.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29484 = arguments.length;
var i__7485__auto___29485 = (0);
while(true){
if((i__7485__auto___29485 < len__7484__auto___29484)){
args__7491__auto__.push((arguments[i__7485__auto___29485]));

var G__29486 = (i__7485__auto___29485 + (1));
i__7485__auto___29485 = G__29486;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq29483){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29483));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args29487 = [];
var len__7484__auto___29490 = arguments.length;
var i__7485__auto___29491 = (0);
while(true){
if((i__7485__auto___29491 < len__7484__auto___29490)){
args29487.push((arguments[i__7485__auto___29491]));

var G__29492 = (i__7485__auto___29491 + (1));
i__7485__auto___29491 = G__29492;
continue;
} else {
}
break;
}

var G__29489 = args29487.length;
switch (G__29489) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29487.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_29499 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_29499){
return (function taoensso$encore$oget_in(var_args){
var args29496 = [];
var len__7484__auto___29500 = arguments.length;
var i__7485__auto___29501 = (0);
while(true){
if((i__7485__auto___29501 < len__7484__auto___29500)){
args29496.push((arguments[i__7485__auto___29501]));

var G__29502 = (i__7485__auto___29501 + (1));
i__7485__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var G__29498 = args29496.length;
switch (G__29498) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29496.length)].join('')));

}
});})(sentinel_29499))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_29499){
return (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
});})(sentinel_29499))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_29499){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_29499);
if((o__$2 === sentinel_29499)){
return not_found;
} else {
var G__29504 = o__$2;
var G__29505 = cljs.core.next.call(null,ks__$1);
o__$1 = G__29504;
ks__$1 = G__29505;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_29499))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args29506 = [];
var len__7484__auto___29518 = arguments.length;
var i__7485__auto___29519 = (0);
while(true){
if((i__7485__auto___29519 < len__7484__auto___29518)){
args29506.push((arguments[i__7485__auto___29519]));

var G__29520 = (i__7485__auto___29519 + (1));
i__7485__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var G__29511 = args29506.length;
switch (G__29511) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29506.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq29507){
var G__29508 = cljs.core.first.call(null,seq29507);
var seq29507__$1 = cljs.core.next.call(null,seq29507);
var G__29509 = cljs.core.first.call(null,seq29507__$1);
var seq29507__$2 = cljs.core.next.call(null,seq29507__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__29508,G__29509,seq29507__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var args29512 = [];
var len__7484__auto___29522 = arguments.length;
var i__7485__auto___29523 = (0);
while(true){
if((i__7485__auto___29523 < len__7484__auto___29522)){
args29512.push((arguments[i__7485__auto___29523]));

var G__29524 = (i__7485__auto___29523 + (1));
i__7485__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29517 = args29512.length;
switch (G__29517) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29512.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq29513){
var G__29514 = cljs.core.first.call(null,seq29513);
var seq29513__$1 = cljs.core.next.call(null,seq29513);
var G__29515 = cljs.core.first.call(null,seq29513__$1);
var seq29513__$2 = cljs.core.next.call(null,seq29513__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__29514,G__29515,seq29513__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args29526 = [];
var len__7484__auto___29540 = arguments.length;
var i__7485__auto___29541 = (0);
while(true){
if((i__7485__auto___29541 < len__7484__auto___29540)){
args29526.push((arguments[i__7485__auto___29541]));

var G__29542 = (i__7485__auto___29541 + (1));
i__7485__auto___29541 = G__29542;
continue;
} else {
}
break;
}

var G__29532 = args29526.length;
switch (G__29532) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29526.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq29527){
var G__29528 = cljs.core.first.call(null,seq29527);
var seq29527__$1 = cljs.core.next.call(null,seq29527);
var G__29529 = cljs.core.first.call(null,seq29527__$1);
var seq29527__$2 = cljs.core.next.call(null,seq29527__$1);
var G__29530 = cljs.core.first.call(null,seq29527__$2);
var seq29527__$3 = cljs.core.next.call(null,seq29527__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__29528,G__29529,G__29530,seq29527__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args29533 = [];
var len__7484__auto___29544 = arguments.length;
var i__7485__auto___29545 = (0);
while(true){
if((i__7485__auto___29545 < len__7484__auto___29544)){
args29533.push((arguments[i__7485__auto___29545]));

var G__29546 = (i__7485__auto___29545 + (1));
i__7485__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var G__29539 = args29533.length;
switch (G__29539) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29533.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq29534){
var G__29535 = cljs.core.first.call(null,seq29534);
var seq29534__$1 = cljs.core.next.call(null,seq29534);
var G__29536 = cljs.core.first.call(null,seq29534__$1);
var seq29534__$2 = cljs.core.next.call(null,seq29534__$1);
var G__29537 = cljs.core.first.call(null,seq29534__$2);
var seq29534__$3 = cljs.core.next.call(null,seq29534__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__29535,G__29536,G__29537,seq29534__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var args29548 = [];
var len__7484__auto___29551 = arguments.length;
var i__7485__auto___29552 = (0);
while(true){
if((i__7485__auto___29552 < len__7484__auto___29551)){
args29548.push((arguments[i__7485__auto___29552]));

var G__29553 = (i__7485__auto___29552 + (1));
i__7485__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var G__29550 = args29548.length;
switch (G__29550) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29548.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var args29555 = [];
var len__7484__auto___29558 = arguments.length;
var i__7485__auto___29559 = (0);
while(true){
if((i__7485__auto___29559 < len__7484__auto___29558)){
args29555.push((arguments[i__7485__auto___29559]));

var G__29560 = (i__7485__auto___29559 + (1));
i__7485__auto___29559 = G__29560;
continue;
} else {
}
break;
}

var G__29557 = args29555.length;
switch (G__29557) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29555.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__29565 = v;
var v1 = cljs.core.nth.call(null,vec__29565,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__29571 = xs__$1;
var seq__29572 = cljs.core.seq.call(null,vec__29571);
var first__29573 = cljs.core.first.call(null,seq__29572);
var seq__29572__$1 = cljs.core.next.call(null,seq__29572);
var x1 = first__29573;
var xn = seq__29572__$1;
if(xn){
var G__29574 = cljs.core.conj.call(null,butlast,x1);
var G__29575 = xn;
butlast = G__29574;
xs__$1 = G__29575;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29578 = arguments.length;
var i__7485__auto___29579 = (0);
while(true){
if((i__7485__auto___29579 < len__7484__auto___29578)){
args__7491__auto__.push((arguments[i__7485__auto___29579]));

var G__29580 = (i__7485__auto___29579 + (1));
i__7485__auto___29579 = G__29580;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq29576){
var G__29577 = cljs.core.first.call(null,seq29576);
var seq29576__$1 = cljs.core.next.call(null,seq29576);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__29577,seq29576__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args29581 = [];
var len__7484__auto___29587 = arguments.length;
var i__7485__auto___29588 = (0);
while(true){
if((i__7485__auto___29588 < len__7484__auto___29587)){
args29581.push((arguments[i__7485__auto___29588]));

var G__29589 = (i__7485__auto___29588 + (1));
i__7485__auto___29588 = G__29589;
continue;
} else {
}
break;
}

var G__29586 = args29581.length;
switch (G__29586) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29581.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq29582){
var G__29583 = cljs.core.first.call(null,seq29582);
var seq29582__$1 = cljs.core.next.call(null,seq29582);
var G__29584 = cljs.core.first.call(null,seq29582__$1);
var seq29582__$2 = cljs.core.next.call(null,seq29582__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__29583,G__29584,seq29582__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args29591 = [];
var len__7484__auto___29594 = arguments.length;
var i__7485__auto___29595 = (0);
while(true){
if((i__7485__auto___29595 < len__7484__auto___29594)){
args29591.push((arguments[i__7485__auto___29595]));

var G__29596 = (i__7485__auto___29595 + (1));
i__7485__auto___29595 = G__29596;
continue;
} else {
}
break;
}

var G__29593 = args29591.length;
switch (G__29593) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29591.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args29598 = [];
var len__7484__auto___29601 = arguments.length;
var i__7485__auto___29602 = (0);
while(true){
if((i__7485__auto___29602 < len__7484__auto___29601)){
args29598.push((arguments[i__7485__auto___29602]));

var G__29603 = (i__7485__auto___29602 + (1));
i__7485__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var G__29600 = args29598.length;
switch (G__29600) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29598.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__29605 = null;
var G__29605__0 = (function (){
return rf.call(null);
});
var G__29605__1 = (function (acc){
return rf.call(null,acc);
});
var G__29605__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__29605 = function(acc,input){
switch(arguments.length){
case 0:
return G__29605__0.call(this);
case 1:
return G__29605__1.call(this,acc);
case 2:
return G__29605__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29605.cljs$core$IFn$_invoke$arity$0 = G__29605__0;
G__29605.cljs$core$IFn$_invoke$arity$1 = G__29605__1;
G__29605.cljs$core$IFn$_invoke$arity$2 = G__29605__2;
return G__29605;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__29606_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__29606_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var args29607 = [];
var len__7484__auto___29610 = arguments.length;
var i__7485__auto___29611 = (0);
while(true){
if((i__7485__auto___29611 < len__7484__auto___29610)){
args29607.push((arguments[i__7485__auto___29611]));

var G__29612 = (i__7485__auto___29611 + (1));
i__7485__auto___29611 = G__29612;
continue;
} else {
}
break;
}

var G__29609 = args29607.length;
switch (G__29609) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29607.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__27852__auto__ = cljs.core.seq.call(null,ks);
if(b2__27852__auto__){
var ks_seq = b2__27852__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__27852__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__27852__auto____$1){
var ks__$1 = b2__27852__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var args29614 = [];
var len__7484__auto___29617 = arguments.length;
var i__7485__auto___29618 = (0);
while(true){
if((i__7485__auto___29618 < len__7484__auto___29617)){
args29614.push((arguments[i__7485__auto___29618]));

var G__29619 = (i__7485__auto___29618 + (1));
i__7485__auto___29618 = G__29619;
continue;
} else {
}
break;
}

var G__29616 = args29614.length;
switch (G__29616) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29614.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args29621 = [];
var len__7484__auto___29628 = arguments.length;
var i__7485__auto___29629 = (0);
while(true){
if((i__7485__auto___29629 < len__7484__auto___29628)){
args29621.push((arguments[i__7485__auto___29629]));

var G__29630 = (i__7485__auto___29629 + (1));
i__7485__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var G__29627 = args29621.length;
switch (G__29627) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29621.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq29622){
var G__29623 = cljs.core.first.call(null,seq29622);
var seq29622__$1 = cljs.core.next.call(null,seq29622);
var G__29624 = cljs.core.first.call(null,seq29622__$1);
var seq29622__$2 = cljs.core.next.call(null,seq29622__$1);
var G__29625 = cljs.core.first.call(null,seq29622__$2);
var seq29622__$3 = cljs.core.next.call(null,seq29622__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__29623,G__29624,G__29625,seq29622__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args29632 = [];
var len__7484__auto___29638 = arguments.length;
var i__7485__auto___29639 = (0);
while(true){
if((i__7485__auto___29639 < len__7484__auto___29638)){
args29632.push((arguments[i__7485__auto___29639]));

var G__29640 = (i__7485__auto___29639 + (1));
i__7485__auto___29639 = G__29640;
continue;
} else {
}
break;
}

var G__29637 = args29632.length;
switch (G__29637) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29632.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq29633){
var G__29634 = cljs.core.first.call(null,seq29633);
var seq29633__$1 = cljs.core.next.call(null,seq29633);
var G__29635 = cljs.core.first.call(null,seq29633__$1);
var seq29633__$2 = cljs.core.next.call(null,seq29633__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__29634,G__29635,seq29633__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__29642 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__29643 = cljs.core.next.call(null,s1);
var G__29644 = cljs.core.next.call(null,s2);
v = G__29642;
s1 = G__29643;
s2 = G__29644;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_29647 = {};
taoensso.encore._merge_with = ((function (not_found_29647){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,((function (not_found_29647){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,((function (not_found_29647){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_29647);
if((lv === not_found_29647)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return (cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
});})(not_found_29647))
,(function (){var or__6409__auto__ = acc;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_29647))
,null,maps);
});})(not_found_29647))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29654 = arguments.length;
var i__7485__auto___29655 = (0);
while(true){
if((i__7485__auto___29655 < len__7484__auto___29654)){
args__7491__auto__.push((arguments[i__7485__auto___29655]));

var G__29656 = (i__7485__auto___29655 + (1));
i__7485__auto___29655 = G__29656;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq29648){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29648));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29657 = arguments.length;
var i__7485__auto___29658 = (0);
while(true){
if((i__7485__auto___29658 < len__7484__auto___29657)){
args__7491__auto__.push((arguments[i__7485__auto___29658]));

var G__29659 = (i__7485__auto___29658 + (1));
i__7485__auto___29658 = G__29659;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq29649){
var G__29650 = cljs.core.first.call(null,seq29649);
var seq29649__$1 = cljs.core.next.call(null,seq29649);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__29650,seq29649__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29660 = arguments.length;
var i__7485__auto___29661 = (0);
while(true){
if((i__7485__auto___29661 < len__7484__auto___29660)){
args__7491__auto__.push((arguments[i__7485__auto___29661]));

var G__29662 = (i__7485__auto___29661 + (1));
i__7485__auto___29661 = G__29662;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq29651){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29651));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29663 = arguments.length;
var i__7485__auto___29664 = (0);
while(true){
if((i__7485__auto___29664 < len__7484__auto___29663)){
args__7491__auto__.push((arguments[i__7485__auto___29664]));

var G__29665 = (i__7485__auto___29664 + (1));
i__7485__auto___29664 = G__29665;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq29652){
var G__29653 = cljs.core.first.call(null,seq29652);
var seq29652__$1 = cljs.core.next.call(null,seq29652);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__29653,seq29652__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
})

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
return return$.call(null,v0,v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__27852__auto__ = cljs.core.seq.call(null,ks);
if(b2__27852__auto__){
var ks_seq = b2__27852__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__27852__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__27852__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__27852__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__27852__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__27852__auto__ = cljs.core.seq.call(null,ks);
if(b2__27852__auto__){
var ks_seq = b2__27852__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_29669 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_29669){
return (function taoensso$encore$swap_val_BANG_(var_args){
var args29666 = [];
var len__7484__auto___29670 = arguments.length;
var i__7485__auto___29671 = (0);
while(true){
if((i__7485__auto___29671 < len__7484__auto___29670)){
args29666.push((arguments[i__7485__auto___29671]));

var G__29672 = (i__7485__auto___29671 + (1));
i__7485__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var G__29668 = args29666.length;
switch (G__29668) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29666.length)].join('')));

}
});})(return_29669))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29669){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_29669,atom_,k,null,f);
});})(return_29669))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29669){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_29669,atom_,k,not_found,f);
});})(return_29669))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_29677 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_29677){
return (function taoensso$encore$reset_val_BANG_(var_args){
var args29674 = [];
var len__7484__auto___29678 = arguments.length;
var i__7485__auto___29679 = (0);
while(true){
if((i__7485__auto___29679 < len__7484__auto___29678)){
args29674.push((arguments[i__7485__auto___29679]));

var G__29680 = (i__7485__auto___29679 + (1));
i__7485__auto___29679 = G__29680;
continue;
} else {
}
break;
}

var G__29676 = args29674.length;
switch (G__29676) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29674.length)].join('')));

}
});})(return_29677))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29677){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_29677,atom_,k,null,val);
});})(return_29677))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29677){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_29677,atom_,k,not_found,val);
});})(return_29677))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_29685 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_29685){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var args29682 = [];
var len__7484__auto___29686 = arguments.length;
var i__7485__auto___29687 = (0);
while(true){
if((i__7485__auto___29687 < len__7484__auto___29686)){
args29682.push((arguments[i__7485__auto___29687]));

var G__29688 = (i__7485__auto___29687 + (1));
i__7485__auto___29687 = G__29688;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29682.length)].join('')));

}
});})(return_29685))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29685){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_29685,atom_,k,null,f);
});})(return_29685))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29685){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_29685,atom_,k,not_found,f);
});})(return_29685))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var args29690 = [];
var len__7484__auto___29696 = arguments.length;
var i__7485__auto___29697 = (0);
while(true){
if((i__7485__auto___29697 < len__7484__auto___29696)){
args29690.push((arguments[i__7485__auto___29697]));

var G__29698 = (i__7485__auto___29697 + (1));
i__7485__auto___29697 = G__29698;
continue;
} else {
}
break;
}

var G__29692 = args29690.length;
switch (G__29692) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29690.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__29693 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__29693,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_29702 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_29702){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_29702,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_29702))
;
var return_29706 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_29706){
return (function taoensso$encore$swap_in_BANG_(var_args){
var args29703 = [];
var len__7484__auto___29707 = arguments.length;
var i__7485__auto___29708 = (0);
while(true){
if((i__7485__auto___29708 < len__7484__auto___29707)){
args29703.push((arguments[i__7485__auto___29708]));

var G__29709 = (i__7485__auto___29708 + (1));
i__7485__auto___29708 = G__29709;
continue;
} else {
}
break;
}

var G__29705 = args29703.length;
switch (G__29705) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29703.length)].join('')));

}
});})(return_29706))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_29706){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_29706,atom_,f);
});})(return_29706))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29706){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_29706,atom_,ks,null,f);
});})(return_29706))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29706){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_29706,atom_,ks,not_found,f);
});})(return_29706))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_29714 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_29714){
return (function taoensso$encore$reset_in_BANG_(var_args){
var args29711 = [];
var len__7484__auto___29715 = arguments.length;
var i__7485__auto___29716 = (0);
while(true){
if((i__7485__auto___29716 < len__7484__auto___29715)){
args29711.push((arguments[i__7485__auto___29716]));

var G__29717 = (i__7485__auto___29716 + (1));
i__7485__auto___29716 = G__29717;
continue;
} else {
}
break;
}

var G__29713 = args29711.length;
switch (G__29713) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29711.length)].join('')));

}
});})(return_29714))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_29714){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_29714,atom_,val);
});})(return_29714))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29714){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_29714,atom_,ks,null,val);
});})(return_29714))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29714){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_29714,atom_,ks,not_found,val);
});})(return_29714))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_29722 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_29722){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var args29719 = [];
var len__7484__auto___29723 = arguments.length;
var i__7485__auto___29724 = (0);
while(true){
if((i__7485__auto___29724 < len__7484__auto___29723)){
args29719.push((arguments[i__7485__auto___29724]));

var G__29725 = (i__7485__auto___29724 + (1));
i__7485__auto___29724 = G__29725;
continue;
} else {
}
break;
}

var G__29721 = args29719.length;
switch (G__29721) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29719.length)].join('')));

}
});})(return_29722))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_29722){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_29722,atom_,f);
});})(return_29722))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_29722){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_29722,atom_,ks,null,f);
});})(return_29722))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_29722){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_29722,atom_,ks,not_found,f);
});})(return_29722))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__27852__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__27852__auto__)){
var perf = b2__27852__auto__;
var b2__27852__auto____$1 = (function (){var or__6409__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
var or__6409__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__6409__auto____$3)){
return or__6409__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__27852__auto____$1)){
var f = b2__27852__auto____$1;
return ((function (f,b2__27852__auto____$1,perf,b2__27852__auto__){
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
;})(f,b2__27852__auto____$1,perf,b2__27852__auto__))
} else {
return ((function (b2__27852__auto____$1,perf,b2__27852__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__27852__auto____$1,perf,b2__27852__auto__))
}
} else {
return ((function (b2__27852__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__27852__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__29731__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__29731 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__29732__i = 0, G__29732__a = new Array(arguments.length -  0);
while (G__29732__i < G__29732__a.length) {G__29732__a[G__29732__i] = arguments[G__29732__i + 0]; ++G__29732__i;}
  xs = new cljs.core.IndexedSeq(G__29732__a,0);
} 
return G__29731__delegate.call(this,xs);};
G__29731.cljs$lang$maxFixedArity = 0;
G__29731.cljs$lang$applyTo = (function (arglist__29733){
var xs = cljs.core.seq(arglist__29733);
return G__29731__delegate(xs);
});
G__29731.cljs$core$IFn$_invoke$arity$variadic = G__29731__delegate;
return G__29731;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__29734__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__6409__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__6409__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__6409__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__6409__auto__,cache_))
,null))], true, false);
}
});})(or__6409__auto__,cache_))
),args);
}
})());
};
var G__29734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29735__i = 0, G__29735__a = new Array(arguments.length -  0);
while (G__29735__i < G__29735__a.length) {G__29735__a[G__29735__i] = arguments[G__29735__i + 0]; ++G__29735__i;}
  args = new cljs.core.IndexedSeq(G__29735__a,0);
} 
return G__29734__delegate.call(this,args);};
G__29734.cljs$lang$maxFixedArity = 0;
G__29734.cljs$lang$applyTo = (function (arglist__29736){
var args = cljs.core.seq(arglist__29736);
return G__29734__delegate(args);
});
G__29734.cljs$core$IFn$_invoke$arity$variadic = G__29734__delegate;
return G__29734;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
})

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
})

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args29737 = [];
var len__7484__auto___29742 = arguments.length;
var i__7485__auto___29743 = (0);
while(true){
if((i__7485__auto___29743 < len__7484__auto___29742)){
args29737.push((arguments[i__7485__auto___29743]));

var G__29744 = (i__7485__auto___29743 + (1));
i__7485__auto___29743 = G__29744;
continue;
} else {
}
break;
}

var G__29739 = args29737.length;
switch (G__29739) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29737.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_29746 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29740){if((e29740 instanceof Error)){
var e = e29740;
return e;
} else {
throw e29740;

}
}})();
if((e_29746 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_29746,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__29747__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_29748 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_29748);

return true;
})()
){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_29748,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_29748,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_29748,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$.call(null,(function (){var or__6409__auto__ = m;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_29748,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__6409__auto__ = (_QMARK_e == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__29747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29749__i = 0, G__29749__a = new Array(arguments.length -  0);
while (G__29749__i < G__29749__a.length) {G__29749__a[G__29749__i] = arguments[G__29749__i + 0]; ++G__29749__i;}
  args = new cljs.core.IndexedSeq(G__29749__a,0);
} 
return G__29747__delegate.call(this,args);};
G__29747.cljs$lang$maxFixedArity = 0;
G__29747.cljs$lang$applyTo = (function (arglist__29750){
var args = cljs.core.seq(arglist__29750);
return G__29747__delegate(args);
});
G__29747.cljs$core$IFn$_invoke$arity$variadic = G__29747__delegate;
return G__29747;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__6409__auto__ = (x == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_29751 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29741){if((e29741 instanceof Error)){
var e = e29741;
return e;
} else {
throw e29741;

}
}})();
if((e_29751 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_29751,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__6409__auto__ = ttl_ms;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__29752__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_29753 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_29753);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__6409__auto__ = m;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_29754 = cljs.core.deref.call(null,cache_);
var n_to_gc_29755 = (cljs.core.count.call(null,snapshot_29754) - cache_size__$1);
if((n_to_gc_29755 > (64))){
var ks_to_gc_29756 = taoensso.encore.top.call(null,n_to_gc_29755,((function (snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.call(null,snapshot_29754,k);
return (e.tick_lru + e.tick_lfu);
});})(snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.keys.call(null,snapshot_29754));
cljs.core.swap_BANG_.call(null,cache_,((function (ks_to_gc_29756,snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_29756,snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_29756,snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__6409__auto__ = m;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_29756));
});})(ks_to_gc_29756,snapshot_29754,n_to_gc_29755,latch_29753,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__6409__auto__ = (_QMARK_e == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__29752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29757__i = 0, G__29757__a = new Array(arguments.length -  0);
while (G__29757__i < G__29757__a.length) {G__29757__a[G__29757__i] = arguments[G__29757__i + 0]; ++G__29757__i;}
  args = new cljs.core.IndexedSeq(G__29757__a,0);
} 
return G__29752__delegate.call(this,args);};
G__29752.cljs$lang$maxFixedArity = 0;
G__29752.cljs$lang$applyTo = (function (arglist__29758){
var args = cljs.core.seq(arglist__29758);
return G__29752__delegate(args);
});
G__29752.cljs$core$IFn$_invoke$arity$variadic = G__29752__delegate;
return G__29752;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
})

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
})

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
})

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_29777 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29759){if((e29759 instanceof Error)){
var e = e29759;
return e;
} else {
throw e29759;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29760){if((e29760 instanceof Error)){
var e = e29760;
return e;
} else {
throw e29760;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_29777){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,((function (limit_spec_29777){
return (function (acc,sid,p__29769){
var vec__29770 = p__29769;
var n = cljs.core.nth.call(null,vec__29770,(0),null);
var ms = cljs.core.nth.call(null,vec__29770,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_29777.call(null,n,ms));
});})(limit_spec_29777))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,limit_spec_29777){
return (function (acc,p__29773){
var vec__29774 = p__29773;
var n = cljs.core.nth.call(null,vec__29774,(0),null);
var ms = cljs.core.nth.call(null,vec__29774,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__29774,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__6409__auto__ = _QMARK_id;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._vreset_BANG_.call(null,i,((function (or__6409__auto__,vec__29774,n,ms,_QMARK_id,i,limit_spec_29777){
return (function (i__$1){
return (i__$1 + (1));
});})(or__6409__auto__,vec__29774,n,ms,_QMARK_id,i,limit_spec_29777))
.call(null,cljs.core._deref.call(null,i)));
}
})(),limit_spec_29777.call(null,n,ms));
});})(i,limit_spec_29777))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_29777))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not.call(null,peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_29778 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_29778);

return true;
})()
){
cljs.core.swap_BANG_.call(null,reqs_,((function (latch_29778,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_29778,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,((function (latch_29778,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__27852__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__27852__auto__)){
var s = b2__27852__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
});})(latch_29778,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
});})(latch_29778,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$.call(null,(function (){var or__6409__auto__ = reqs;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_29778,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__27852__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__27852__auto__)){
var s = b2__27852__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.fromArray([sid,tdelta], true, false),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__6409__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__27852__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__27852__auto__)){
var h = b2__27852__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__27852__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__27852__auto__)){
var l = b2__27852__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__27852__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__27852__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__27852__auto____$1)){
var e = b2__27852__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__27852__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1.call(null,req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__29782 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__29782,(0),null);
var f = cljs.core.nth.call(null,vec__29782,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args29785 = [];
var len__7484__auto___29791 = arguments.length;
var i__7485__auto___29792 = (0);
while(true){
if((i__7485__auto___29792 < len__7484__auto___29791)){
args29785.push((arguments[i__7485__auto___29792]));

var G__29793 = (i__7485__auto___29792 + (1));
i__7485__auto___29792 = G__29793;
continue;
} else {
}
break;
}

var G__29790 = args29785.length;
switch (G__29790) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args29785.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq29786){
var G__29787 = cljs.core.first.call(null,seq29786);
var seq29786__$1 = cljs.core.next.call(null,seq29786);
var G__29788 = cljs.core.first.call(null,seq29786__$1);
var seq29786__$2 = cljs.core.next.call(null,seq29786__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__29787,G__29788,seq29786__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args29795 = [];
var len__7484__auto___29798 = arguments.length;
var i__7485__auto___29799 = (0);
while(true){
if((i__7485__auto___29799 < len__7484__auto___29798)){
args29795.push((arguments[i__7485__auto___29799]));

var G__29800 = (i__7485__auto___29799 + (1));
i__7485__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var G__29797 = args29795.length;
switch (G__29797) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29795.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__6397__auto__ = separator;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__6397__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args29802 = [];
var len__7484__auto___29805 = arguments.length;
var i__7485__auto___29806 = (0);
while(true){
if((i__7485__auto___29806 < len__7484__auto___29805)){
args29802.push((arguments[i__7485__auto___29806]));

var G__29807 = (i__7485__auto___29806 + (1));
i__7485__auto___29806 = G__29807;
continue;
} else {
}
break;
}

var G__29804 = args29802.length;
switch (G__29804) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29802.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var args29809 = [];
var len__7484__auto___29812 = arguments.length;
var i__7485__auto___29813 = (0);
while(true){
if((i__7485__auto___29813 < len__7484__auto___29812)){
args29809.push((arguments[i__7485__auto___29813]));

var G__29814 = (i__7485__auto___29813 + (1));
i__7485__auto___29813 = G__29814;
continue;
} else {
}
break;
}

var G__29811 = args29809.length;
switch (G__29811) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29809.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var args29816 = [];
var len__7484__auto___29819 = arguments.length;
var i__7485__auto___29820 = (0);
while(true){
if((i__7485__auto___29820 < len__7484__auto___29819)){
args29816.push((arguments[i__7485__auto___29820]));

var G__29821 = (i__7485__auto___29820 + (1));
i__7485__auto___29820 = G__29821;
continue;
} else {
}
break;
}

var G__29818 = args29816.length;
switch (G__29818) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29816.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__29823__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__29823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29824__i = 0, G__29824__a = new Array(arguments.length -  0);
while (G__29824__i < G__29824__a.length) {G__29824__a[G__29824__i] = arguments[G__29824__i + 0]; ++G__29824__i;}
  args = new cljs.core.IndexedSeq(G__29824__a,0);
} 
return G__29823__delegate.call(this,args);};
G__29823.cljs$lang$maxFixedArity = 0;
G__29823.cljs$lang$applyTo = (function (arglist__29825){
var args = cljs.core.seq(arglist__29825);
return G__29823__delegate(args);
});
G__29823.cljs$core$IFn$_invoke$arity$variadic = G__29823__delegate;
return G__29823;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__6409__auto__ = fmt;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29828 = arguments.length;
var i__7485__auto___29829 = (0);
while(true){
if((i__7485__auto___29829 < len__7484__auto___29828)){
args__7491__auto__.push((arguments[i__7485__auto___29829]));

var G__29830 = (i__7485__auto___29829 + (1));
i__7485__auto___29829 = G__29830;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq29826){
var G__29827 = cljs.core.first.call(null,seq29826);
var seq29826__$1 = cljs.core.next.call(null,seq29826);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__29827,seq29826__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29832 = arguments.length;
var i__7485__auto___29833 = (0);
while(true){
if((i__7485__auto___29833 < len__7484__auto___29832)){
args__7491__auto__.push((arguments[i__7485__auto___29833]));

var G__29834 = (i__7485__auto___29833 + (1));
i__7485__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq29831){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29831));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args29835 = [];
var len__7484__auto___29838 = arguments.length;
var i__7485__auto___29839 = (0);
while(true){
if((i__7485__auto___29839 < len__7484__auto___29838)){
args29835.push((arguments[i__7485__auto___29839]));

var G__29840 = (i__7485__auto___29839 + (1));
i__7485__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var G__29837 = args29835.length;
switch (G__29837) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29835.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29843 = arguments.length;
var i__7485__auto___29844 = (0);
while(true){
if((i__7485__auto___29844 < len__7484__auto___29843)){
args__7491__auto__.push((arguments[i__7485__auto___29844]));

var G__29845 = (i__7485__auto___29844 + (1));
i__7485__auto___29844 = G__29845;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str(in$)].join(''));
}
}),taoensso.encore.str_builder.call(null),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq29842){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29842));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_29854 = {};
var nil__GT_sentinel_29855 = ((function (sentinel_29854){
return (function (x){
if((x == null)){
return sentinel_29854;
} else {
return x;
}
});})(sentinel_29854))
;
var sentinel__GT_nil_29856 = ((function (sentinel_29854,nil__GT_sentinel_29855){
return (function (x){
if((x === sentinel_29854)){
return null;
} else {
return x;
}
});})(sentinel_29854,nil__GT_sentinel_29855))
;
/**
 * Conjoins the top `n` items from `coll` of N items into `to` in
 *  O(N.logn) time. For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.top_into = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function taoensso$encore$top_into(var_args){
var args29848 = [];
var len__7484__auto___29857 = arguments.length;
var i__7485__auto___29858 = (0);
while(true){
if((i__7485__auto___29858 < len__7484__auto___29857)){
args29848.push((arguments[i__7485__auto___29858]));

var G__29859 = (i__7485__auto___29858 + (1));
i__7485__auto___29858 = G__29859;
continue;
} else {
}
break;
}

var G__29850 = args29848.length;
switch (G__29850) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29848.length)].join('')));

}
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (to,n,keyfn,cmp,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__6747__auto__ = coll_size;
var y__6748__auto__ = cljs.core.long$.call(null,n);
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})());
if((n__$1 > (0))){
return cljs.core.into.call(null,to,cljs.core.take.call(null,n__$1),cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return to;
}
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;


/**
 * Returns a sorted vector of the top `n` items from `coll` of N items
 *  in O(N.logn) time. For comparison, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.top = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function taoensso$encore$top(var_args){
var args29851 = [];
var len__7484__auto___29861 = arguments.length;
var i__7485__auto___29862 = (0);
while(true){
if((i__7485__auto___29862 < len__7484__auto___29861)){
args29851.push((arguments[i__7485__auto___29862]));

var G__29863 = (i__7485__auto___29862 + (1));
i__7485__auto___29862 = G__29863;
continue;
} else {
}
break;
}

var G__29853 = args29851.length;
switch (G__29853) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29851.length)].join('')));

}
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856){
return (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});})(sentinel_29854,nil__GT_sentinel_29855,sentinel__GT_nil_29856))
;

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29881 = arguments.length;
var i__7485__auto___29882 = (0);
while(true){
if((i__7485__auto___29882 < len__7484__auto___29881)){
args__7491__auto__.push((arguments[i__7485__auto___29882]));

var G__29883 = (i__7485__auto___29882 + (1));
i__7485__auto___29882 = G__29883;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__29878){
var map__29879 = p__29878;
var map__29879__$1 = ((((!((map__29879 == null)))?((((map__29879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29879):map__29879);
var opts = map__29879__$1;
var years = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
taoensso.truss.impl.revery_QMARK_.call(null,((function (map__29879,map__29879__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__29879,map__29879__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq29877){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29877));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__29894__delegate = function (xs){
var b2__27852__auto__ = console.log;
if(cljs.core.truth_(b2__27852__auto__)){
var f = b2__27852__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__29894 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__29895__i = 0, G__29895__a = new Array(arguments.length -  0);
while (G__29895__i < G__29895__a.length) {G__29895__a[G__29895__i] = arguments[G__29895__i + 0]; ++G__29895__i;}
  xs = new cljs.core.IndexedSeq(G__29895__a,0);
} 
return G__29894__delegate.call(this,xs);};
G__29894.cljs$lang$maxFixedArity = 0;
G__29894.cljs$lang$applyTo = (function (arglist__29896){
var xs = cljs.core.seq(arglist__29896);
return G__29894__delegate(xs);
});
G__29894.cljs$core$IFn$_invoke$arity$variadic = G__29894__delegate;
return G__29894;
})()
:(function() { 
var G__29897__delegate = function (xs){
return null;
};
var G__29897 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__29898__i = 0, G__29898__a = new Array(arguments.length -  0);
while (G__29898__i < G__29898__a.length) {G__29898__a[G__29898__i] = arguments[G__29898__i + 0]; ++G__29898__i;}
  xs = new cljs.core.IndexedSeq(G__29898__a,0);
} 
return G__29897__delegate.call(this,xs);};
G__29897.cljs$lang$maxFixedArity = 0;
G__29897.cljs$lang$applyTo = (function (arglist__29899){
var xs = cljs.core.seq(arglist__29899);
return G__29897__delegate(xs);
});
G__29897.cljs$core$IFn$_invoke$arity$variadic = G__29897__delegate;
return G__29897;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29900 = arguments.length;
var i__7485__auto___29901 = (0);
while(true){
if((i__7485__auto___29901 < len__7484__auto___29900)){
args__7491__auto__.push((arguments[i__7485__auto___29901]));

var G__29902 = (i__7485__auto___29901 + (1));
i__7485__auto___29901 = G__29902;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq29888){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29888));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29903 = arguments.length;
var i__7485__auto___29904 = (0);
while(true){
if((i__7485__auto___29904 < len__7484__auto___29903)){
args__7491__auto__.push((arguments[i__7485__auto___29904]));

var G__29905 = (i__7485__auto___29904 + (1));
i__7485__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq29889){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29889));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29906 = arguments.length;
var i__7485__auto___29907 = (0);
while(true){
if((i__7485__auto___29907 < len__7484__auto___29906)){
args__7491__auto__.push((arguments[i__7485__auto___29907]));

var G__29908 = (i__7485__auto___29907 + (1));
i__7485__auto___29907 = G__29908;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq29890){
var G__29891 = cljs.core.first.call(null,seq29890);
var seq29890__$1 = cljs.core.next.call(null,seq29890);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__29891,seq29890__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___29909 = arguments.length;
var i__7485__auto___29910 = (0);
while(true){
if((i__7485__auto___29910 < len__7484__auto___29909)){
args__7491__auto__.push((arguments[i__7485__auto___29910]));

var G__29911 = (i__7485__auto___29910 + (1));
i__7485__auto___29910 = G__29911;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq29892){
var G__29893 = cljs.core.first.call(null,seq29892);
var seq29892__$1 = cljs.core.next.call(null,seq29892);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__29893,seq29892__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__27852__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__27852__auto__)){
var js_win = b2__27852__auto__;
var b2__27852__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__27852__auto____$1)){
var loc = b2__27852__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_29924 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29912){if((e29912 instanceof Error)){
var e = e29912;
return e;
} else {
throw e29912;

}
}})();
if((e_29924 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? params)",params,e_29924,null);
}

if(cljs.core.truth_((function (){var and__6397__auto__ = typeof FormData !== 'undefined';
if(and__6397__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__6397__auto__;
}
})())){
var form_data = (new FormData());
var seq__29913_29925 = cljs.core.seq.call(null,params);
var chunk__29914_29926 = null;
var count__29915_29927 = (0);
var i__29916_29928 = (0);
while(true){
if((i__29916_29928 < count__29915_29927)){
var vec__29917_29929 = cljs.core._nth.call(null,chunk__29914_29926,i__29916_29928);
var k_29930 = cljs.core.nth.call(null,vec__29917_29929,(0),null);
var v_29931 = cljs.core.nth.call(null,vec__29917_29929,(1),null);
form_data.append(cljs.core.name.call(null,k_29930),v_29931);

var G__29932 = seq__29913_29925;
var G__29933 = chunk__29914_29926;
var G__29934 = count__29915_29927;
var G__29935 = (i__29916_29928 + (1));
seq__29913_29925 = G__29932;
chunk__29914_29926 = G__29933;
count__29915_29927 = G__29934;
i__29916_29928 = G__29935;
continue;
} else {
var temp__4657__auto___29936 = cljs.core.seq.call(null,seq__29913_29925);
if(temp__4657__auto___29936){
var seq__29913_29937__$1 = temp__4657__auto___29936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29913_29937__$1)){
var c__7220__auto___29938 = cljs.core.chunk_first.call(null,seq__29913_29937__$1);
var G__29939 = cljs.core.chunk_rest.call(null,seq__29913_29937__$1);
var G__29940 = c__7220__auto___29938;
var G__29941 = cljs.core.count.call(null,c__7220__auto___29938);
var G__29942 = (0);
seq__29913_29925 = G__29939;
chunk__29914_29926 = G__29940;
count__29915_29927 = G__29941;
i__29916_29928 = G__29942;
continue;
} else {
var vec__29920_29943 = cljs.core.first.call(null,seq__29913_29937__$1);
var k_29944 = cljs.core.nth.call(null,vec__29920_29943,(0),null);
var v_29945 = cljs.core.nth.call(null,vec__29920_29943,(1),null);
form_data.append(cljs.core.name.call(null,k_29944),v_29945);

var G__29946 = cljs.core.next.call(null,seq__29913_29937__$1);
var G__29947 = null;
var G__29948 = (0);
var G__29949 = (0);
seq__29913_29925 = G__29946;
chunk__29914_29926 = G__29947;
count__29915_29927 = G__29948;
i__29916_29928 = G__29949;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__6409__auto__ = (x == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null);
}

var G__29923 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__29923) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__29952,callback_fn){
var map__29971 = p__29952;
var map__29971__$1 = ((((!((map__29971 == null)))?((((map__29971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29971):map__29971);
var opts = map__29971__$1;
var method = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_(((function (map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__6409__auto__ = (x == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__27852__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__27852__auto__)){
var xhr = b2__27852__auto__;
try{var timeout_ms__$1 = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__29977 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__29977) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var vec__29974 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__29974,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__29974,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,((function (timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__29951_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__29951_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var G__29978_29990 = xhr;
goog.events.listenOnce(G__29978_29990,goog.net.EventType.READY,((function (G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);

goog.events.listenOnce(G__29978_29990,goog.net.EventType.COMPLETE,((function (G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__29984 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,[cljs.core.str(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__29988 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__29988) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e29987){if((e29987 instanceof Error)){
var _e = e29987;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e29987;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__29984,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__29984,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__29984,(2),null);
return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
});})(G__29978_29990,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);


var b2__27852__auto___29992__$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__27852__auto___29992__$1)){
var pf_29993 = b2__27852__auto___29992__$1;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_29993,b2__27852__auto___29992__$1,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6397__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__6397__auto__;
}
})())?(loaded / total):null);
return pf_29993.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_29993,b2__27852__auto___29992__$1,timeout_ms__$1,xhr_method,vec__29974,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__27852__auto__,map__29971,map__29971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);
} else {
}

xhr.setTimeoutInterval((function (){var or__6409__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e29973){if((e29973 instanceof Error)){
var e = e29973;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e29973;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30000 = arguments.length;
var i__7485__auto___30001 = (0);
while(true){
if((i__7485__auto___30001 < len__7484__auto___30000)){
args__7491__auto__.push((arguments[i__7485__auto___30001]));

var G__30002 = (i__7485__auto___30001 + (1));
i__7485__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29996){
var vec__29997 = p__29996;
var encoding = cljs.core.nth.call(null,vec__29997,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq29994){
var G__29995 = cljs.core.first.call(null,seq29994);
var seq29994__$1 = cljs.core.next.call(null,seq29994);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__29995,seq29994__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__6409__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__7189__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__30019(s__30020){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__30020__$1 = s__30020;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30020__$1);
if(temp__4657__auto__){
var s__30020__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30020__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__30020__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__30022 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__30021 = (0);
while(true){
if((i__30021 < size__7188__auto__)){
var vec__30029 = cljs.core._nth.call(null,c__7187__auto__,i__30021);
var k = cljs.core.nth.call(null,vec__30029,(0),null);
var v = cljs.core.nth.call(null,vec__30029,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__30022,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6409__auto__ = cljs.core.seq.call(null,v);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__30035 = (i__30021 + (1));
i__30021 = G__30035;
continue;
} else {
var G__30036 = (i__30021 + (1));
i__30021 = G__30036;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30022),taoensso$encore$format_query_string_$_iter__30019.call(null,cljs.core.chunk_rest.call(null,s__30020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30022),null);
}
} else {
var vec__30032 = cljs.core.first.call(null,s__30020__$2);
var k = cljs.core.nth.call(null,vec__30032,(0),null);
var v = cljs.core.nth.call(null,vec__30032,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6409__auto__ = cljs.core.seq.call(null,v);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__30019.call(null,cljs.core.rest.call(null,s__30020__$2)));
} else {
var G__30037 = cljs.core.rest.call(null,s__30020__$2);
s__30020__$1 = G__30037;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__7189__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__27852__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__27852__auto__)){
var cur = b2__27852__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30047 = arguments.length;
var i__7485__auto___30048 = (0);
while(true){
if((i__7485__auto___30048 < len__7484__auto___30047)){
args__7491__auto__.push((arguments[i__7485__auto___30048]));

var G__30049 = (i__7485__auto___30048 + (1));
i__7485__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__30040){
var vec__30041 = p__30040;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__30041,(0),null);
var encoding = cljs.core.nth.call(null,vec__30041,(1),null);
if((clojure.string.blank_QMARK_.call(null,s)) || (!(taoensso.encore.str_contains_QMARK_.call(null,s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,((function (s__$1,vec__30041,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__27852__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__27852__auto__)){
var vec__30044 = b2__27852__auto__;
var k = cljs.core.nth.call(null,vec__30044,(0),null);
var v = cljs.core.nth.call(null,vec__30044,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__30041,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq30038){
var G__30039 = cljs.core.first.call(null,seq30038);
var seq30038__$1 = cljs.core.next.call(null,seq30038);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__30039,seq30038__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__30053 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__30053,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__30053,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__27852__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__27852__auto__)){
var qstr = b2__27852__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__30056__delegate = function (args){
throw cljs.core.ex_info.call(null,"Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__30056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30057__i = 0, G__30057__a = new Array(arguments.length -  0);
while (G__30057__i < G__30057__a.length) {G__30057__a[G__30057__i] = arguments[G__30057__i + 0]; ++G__30057__i;}
  args = new cljs.core.IndexedSeq(G__30057__a,0);
} 
return G__30056__delegate.call(this,args);};
G__30056.cljs$lang$maxFixedArity = 0;
G__30056.cljs$lang$applyTo = (function (arglist__30058){
var args = cljs.core.seq(arglist__30058);
return G__30056__delegate(args);
});
G__30056.cljs$core$IFn$_invoke$arity$variadic = G__30056__delegate;
return G__30056;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1.call(null,x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__30067 = match_fns;
var seq__30068 = cljs.core.seq.call(null,vec__30067);
var first__30069 = cljs.core.first.call(null,seq__30068);
var seq__30068__$1 = cljs.core.next.call(null,seq__30068);
var m1 = first__30069;
var mn = seq__30068__$1;
if(mn){
return ((function (match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome.call(null,((function (match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1){
return (function (p1__30059_SHARP_){
return p1__30059_SHARP_.call(null,ns_str);
});})(match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1){
return (function (ns_str){
return m1.call(null,ns_str);
});
;})(match_fns,vec__30067,seq__30068,first__30069,seq__30068__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__30070 = match_fns;
var seq__30071 = cljs.core.seq.call(null,vec__30070);
var first__30072 = cljs.core.first.call(null,seq__30071);
var seq__30071__$1 = cljs.core.next.call(null,seq__30071);
var m1 = first__30072;
var mn = seq__30071__$1;
if(mn){
return ((function (match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,taoensso.encore.rsome.call(null,((function (match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1){
return (function (p1__30060_SHARP_){
return p1__30060_SHARP_.call(null,ns_str);
});})(match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,m1.call(null,ns_str));
});
;})(match_fns,vec__30070,seq__30071,first__30072,seq__30071__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__6397__auto__ = white;
if(cljs.core.truth_(and__6397__auto__)){
return black;
} else {
return and__6397__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str(_QMARK_ns)].join('');
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(white.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(black.call(null,[cljs.core.str(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_,msecs,f);
} else {
var m__7073__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
})
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = true;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = true;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var args30077 = [];
var len__7484__auto___30080 = arguments.length;
var i__7485__auto___30081 = (0);
while(true){
if((i__7485__auto___30081 < len__7484__auto___30080)){
args30077.push((arguments[i__7485__auto___30081]));

var G__30082 = (i__7485__auto___30081 + (1));
i__7485__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30079 = args30077.length;
switch (G__30079) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30077.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return f.call(null);
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_30084 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_30084,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__30086){
var map__30089 = p__30086;
var map__30089__$1 = ((((!((map__30089 == null)))?((((map__30089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30089):map__30089);
var before = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__30085__auto__","f__30085__auto__",984584019,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__30085__auto__","f__30085__auto__",984584019,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30223 = arguments.length;
var i__7485__auto___30224 = (0);
while(true){
if((i__7485__auto___30224 < len__7484__auto___30223)){
args__7491__auto__.push((arguments[i__7485__auto___30224]));

var G__30225 = (i__7485__auto___30224 + (1));
i__7485__auto___30224 = G__30225;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__30102){
var vec__30103 = p__30102;
var type = cljs.core.nth.call(null,vec__30103,(0),null);
var nplaces = cljs.core.nth.call(null,vec__30103,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__6409__auto__ = type;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq30100){
var G__30101 = cljs.core.first.call(null,seq30100);
var seq30100__$1 = cljs.core.next.call(null,seq30100);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__30101,seq30100__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args30106 = [];
var len__7484__auto___30226 = arguments.length;
var i__7485__auto___30227 = (0);
while(true){
if((i__7485__auto___30227 < len__7484__auto___30226)){
args30106.push((arguments[i__7485__auto___30227]));

var G__30228 = (i__7485__auto___30227 + (1));
i__7485__auto___30227 = G__30228;
continue;
} else {
}
break;
}

var G__30108 = args30106.length;
switch (G__30108) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30106.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30230 = arguments.length;
var i__7485__auto___30231 = (0);
while(true){
if((i__7485__auto___30231 < len__7484__auto___30230)){
args__7491__auto__.push((arguments[i__7485__auto___30231]));

var G__30232 = (i__7485__auto___30231 + (1));
i__7485__auto___30231 = G__30232;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq30109){
var G__30110 = cljs.core.first.call(null,seq30109);
var seq30109__$1 = cljs.core.next.call(null,seq30109);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__30110,seq30109__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__30118){
var vec__30119 = p__30118;
var _ = cljs.core.nth.call(null,vec__30119,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30119,(1),null);
var id = cljs.core.nth.call(null,vec__30119,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__30233__delegate = function (args){
var b2__27852__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__27852__auto__)){
var vec__30122 = b2__27852__auto__;
var worst_sid = cljs.core.nth.call(null,vec__30122,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__30122,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__30233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30234__i = 0, G__30234__a = new Array(arguments.length -  0);
while (G__30234__i < G__30234__a.length) {G__30234__a[G__30234__i] = arguments[G__30234__i + 0]; ++G__30234__i;}
  args = new cljs.core.IndexedSeq(G__30234__a,0);
} 
return G__30233__delegate.call(this,args);};
G__30233.cljs$lang$maxFixedArity = 0;
G__30233.cljs$lang$applyTo = (function (arglist__30235){
var args = cljs.core.seq(arglist__30235);
return G__30233__delegate(args);
});
G__30233.cljs$core$IFn$_invoke$arity$variadic = G__30233__delegate;
return G__30233;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__30236__delegate = function (args){
var b2__27852__auto__ = rl.call(null);
if(cljs.core.truth_(b2__27852__auto__)){
var backoff = b2__27852__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__30236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30237__i = 0, G__30237__a = new Array(arguments.length -  0);
while (G__30237__i < G__30237__a.length) {G__30237__a[G__30237__i] = arguments[G__30237__i + 0]; ++G__30237__i;}
  args = new cljs.core.IndexedSeq(G__30237__a,0);
} 
return G__30236__delegate.call(this,args);};
G__30236.cljs$lang$maxFixedArity = 0;
G__30236.cljs$lang$applyTo = (function (arglist__30238){
var args = cljs.core.seq(arglist__30238);
return G__30236__delegate(args);
});
G__30236.cljs$core$IFn$_invoke$arity$variadic = G__30236__delegate;
return G__30236;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__30239__delegate = function (args){
var b2__27852__auto__ = rl.call(null);
if(cljs.core.truth_(b2__27852__auto__)){
var backoff_ms = b2__27852__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__30239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30240__i = 0, G__30240__a = new Array(arguments.length -  0);
while (G__30240__i < G__30240__a.length) {G__30240__a[G__30240__i] = arguments[G__30240__i + 0]; ++G__30240__i;}
  args = new cljs.core.IndexedSeq(G__30240__a,0);
} 
return G__30239__delegate.call(this,args);};
G__30239.cljs$lang$maxFixedArity = 0;
G__30239.cljs$lang$applyTo = (function (arglist__30241){
var args = cljs.core.seq(arglist__30241);
return G__30239__delegate(args);
});
G__30239.cljs$core$IFn$_invoke$arity$variadic = G__30239__delegate;
return G__30239;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30242 = arguments.length;
var i__7485__auto___30243 = (0);
while(true){
if((i__7485__auto___30243 < len__7484__auto___30242)){
args__7491__auto__.push((arguments[i__7485__auto___30243]));

var G__30244 = (i__7485__auto___30243 + (1));
i__7485__auto___30243 = G__30244;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__30127){
var vec__30128 = p__30127;
var nattempt = cljs.core.nth.call(null,vec__30128,(0),null);
var b2__27852__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__27852__auto__)){
var js_win = b2__27852__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__6409__auto__ = nattempt;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq30125){
var G__30126 = cljs.core.first.call(null,seq30125);
var seq30125__$1 = cljs.core.next.call(null,seq30125);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30126,seq30125__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30245 = arguments.length;
var i__7485__auto___30246 = (0);
while(true){
if((i__7485__auto___30246 < len__7484__auto___30245)){
args__7491__auto__.push((arguments[i__7485__auto___30246]));

var G__30247 = (i__7485__auto___30246 + (1));
i__7485__auto___30246 = G__30247;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq30131){
var G__30132 = cljs.core.first.call(null,seq30131);
var seq30131__$1 = cljs.core.next.call(null,seq30131);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__30132,seq30131__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30248 = arguments.length;
var i__7485__auto___30249 = (0);
while(true){
if((i__7485__auto___30249 < len__7484__auto___30248)){
args__7491__auto__.push((arguments[i__7485__auto___30249]));

var G__30250 = (i__7485__auto___30249 + (1));
i__7485__auto___30249 = G__30250;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first.call(null,seq30133);
var seq30133__$1 = cljs.core.next.call(null,seq30133);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__30134,seq30133__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30251 = arguments.length;
var i__7485__auto___30252 = (0);
while(true){
if((i__7485__auto___30252 < len__7484__auto___30251)){
args__7491__auto__.push((arguments[i__7485__auto___30252]));

var G__30253 = (i__7485__auto___30252 + (1));
i__7485__auto___30252 = G__30253;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq30135){
var G__30136 = cljs.core.first.call(null,seq30135);
var seq30135__$1 = cljs.core.next.call(null,seq30135);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__30136,seq30135__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30254 = arguments.length;
var i__7485__auto___30255 = (0);
while(true){
if((i__7485__auto___30255 < len__7484__auto___30254)){
args__7491__auto__.push((arguments[i__7485__auto___30255]));

var G__30256 = (i__7485__auto___30255 + (1));
i__7485__auto___30255 = G__30256;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq30137){
var G__30138 = cljs.core.first.call(null,seq30137);
var seq30137__$1 = cljs.core.next.call(null,seq30137);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__30138,seq30137__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30257 = arguments.length;
var i__7485__auto___30258 = (0);
while(true){
if((i__7485__auto___30258 < len__7484__auto___30257)){
args__7491__auto__.push((arguments[i__7485__auto___30258]));

var G__30259 = (i__7485__auto___30258 + (1));
i__7485__auto___30258 = G__30259;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq30139){
var G__30140 = cljs.core.first.call(null,seq30139);
var seq30139__$1 = cljs.core.next.call(null,seq30139);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__30140,seq30139__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30260 = arguments.length;
var i__7485__auto___30261 = (0);
while(true){
if((i__7485__auto___30261 < len__7484__auto___30260)){
args__7491__auto__.push((arguments[i__7485__auto___30261]));

var G__30262 = (i__7485__auto___30261 + (1));
i__7485__auto___30261 = G__30262;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq30141){
var G__30142 = cljs.core.first.call(null,seq30141);
var seq30141__$1 = cljs.core.next.call(null,seq30141);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__30142,seq30141__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30263 = arguments.length;
var i__7485__auto___30264 = (0);
while(true){
if((i__7485__auto___30264 < len__7484__auto___30263)){
args__7491__auto__.push((arguments[i__7485__auto___30264]));

var G__30265 = (i__7485__auto___30264 + (1));
i__7485__auto___30264 = G__30265;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq30143){
var G__30144 = cljs.core.first.call(null,seq30143);
var seq30143__$1 = cljs.core.next.call(null,seq30143);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__30144,seq30143__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30266 = arguments.length;
var i__7485__auto___30267 = (0);
while(true){
if((i__7485__auto___30267 < len__7484__auto___30266)){
args__7491__auto__.push((arguments[i__7485__auto___30267]));

var G__30268 = (i__7485__auto___30267 + (1));
i__7485__auto___30267 = G__30268;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__30147){
var vec__30148 = p__30147;
var _QMARK_comparator = cljs.core.nth.call(null,vec__30148,(0),null);
var comparator = (function (){var or__6409__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__30148,_QMARK_comparator){
return (function (p1__30091_SHARP_,p2__30092_SHARP_){
if((comparator.call(null,p1__30091_SHARP_,p2__30092_SHARP_) > (0))){
return p2__30092_SHARP_;
} else {
return p1__30091_SHARP_;
}
});})(comparator,vec__30148,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq30145){
var G__30146 = cljs.core.first.call(null,seq30145);
var seq30145__$1 = cljs.core.next.call(null,seq30145);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__30146,seq30145__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30269 = arguments.length;
var i__7485__auto___30270 = (0);
while(true){
if((i__7485__auto___30270 < len__7484__auto___30269)){
args__7491__auto__.push((arguments[i__7485__auto___30270]));

var G__30271 = (i__7485__auto___30270 + (1));
i__7485__auto___30270 = G__30271;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__30153){
var vec__30154 = p__30153;
var _QMARK_comparator = cljs.core.nth.call(null,vec__30154,(0),null);
var comparator = (function (){var or__6409__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__30154,_QMARK_comparator){
return (function (p1__30093_SHARP_,p2__30094_SHARP_){
if((comparator.call(null,p1__30093_SHARP_,p2__30094_SHARP_) < (0))){
return p2__30094_SHARP_;
} else {
return p1__30093_SHARP_;
}
});})(comparator,vec__30154,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq30151){
var G__30152 = cljs.core.first.call(null,seq30151);
var seq30151__$1 = cljs.core.next.call(null,seq30151);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__30152,seq30151__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6409__auto__ = x;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__30169,seen__$1){
while(true){
var vec__30170 = p__30169;
var v = cljs.core.nth.call(null,vec__30170,(0),null);
var xs__$1 = vec__30170;
var b2__27852__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__27852__auto__){
var s = b2__27852__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__30272 = cljs.core.rest.call(null,s);
var G__30273 = seen__$1;
p__30169 = G__30272;
seen__$1 = G__30273;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args30173 = [];
var len__7484__auto___30274 = arguments.length;
var i__7485__auto___30275 = (0);
while(true){
if((i__7485__auto___30275 < len__7484__auto___30274)){
args30173.push((arguments[i__7485__auto___30275]));

var G__30276 = (i__7485__auto___30275 + (1));
i__7485__auto___30275 = G__30276;
continue;
} else {
}
break;
}

var G__30175 = args30173.length;
switch (G__30175) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30173.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__30176,in$){
var vec__30177 = p__30176;
var v = cljs.core.nth.call(null,vec__30177,(0),null);
var seen = cljs.core.nth.call(null,vec__30177,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30278 = arguments.length;
var i__7485__auto___30279 = (0);
while(true){
if((i__7485__auto___30279 < len__7484__auto___30278)){
args__7491__auto__.push((arguments[i__7485__auto___30279]));

var G__30280 = (i__7485__auto___30279 + (1));
i__7485__auto___30279 = G__30280;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__30182){
var vec__30183 = p__30182;
var kf = cljs.core.nth.call(null,vec__30183,(0),null);
var vf = cljs.core.nth.call(null,vec__30183,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__30183,kf,vf){
return (function (_,v){
return v;
});})(vec__30183,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__30183,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__30183,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__30183,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__30183,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__30183,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__30183,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq30180){
var G__30181 = cljs.core.first.call(null,seq30180);
var seq30180__$1 = cljs.core.next.call(null,seq30180);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__30181,seq30180__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30281 = arguments.length;
var i__7485__auto___30282 = (0);
while(true){
if((i__7485__auto___30282 < len__7484__auto___30281)){
args__7491__auto__.push((arguments[i__7485__auto___30282]));

var G__30283 = (i__7485__auto___30282 + (1));
i__7485__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq30186){
var G__30187 = cljs.core.first.call(null,seq30186);
var seq30186__$1 = cljs.core.next.call(null,seq30186);
var G__30188 = cljs.core.first.call(null,seq30186__$1);
var seq30186__$2 = cljs.core.next.call(null,seq30186__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__30187,G__30188,seq30186__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6747__auto__ = signed_idx;
var y__6748__auto__ = max_idx;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
} else {
var x__6740__auto__ = (0);
var y__6741__auto__ = (signed_idx + max_idx);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30284 = arguments.length;
var i__7485__auto___30285 = (0);
while(true){
if((i__7485__auto___30285 < len__7484__auto___30284)){
args__7491__auto__.push((arguments[i__7485__auto___30285]));

var G__30286 = (i__7485__auto___30285 + (1));
i__7485__auto___30285 = G__30286;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__30192){
var map__30193 = p__30192;
var map__30193__$1 = ((((!((map__30193 == null)))?((((map__30193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30193):map__30193);
var max_len = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__28242__auto__ = (start_idx_STAR_ + max_len);
var n2__28243__auto__ = xlen;
if((n1__28242__auto__ > n2__28243__auto__)){
return n2__28243__auto__;
} else {
return n1__28242__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq30189){
var G__30190 = cljs.core.first.call(null,seq30189);
var seq30189__$1 = cljs.core.next.call(null,seq30189);
var G__30191 = cljs.core.first.call(null,seq30189__$1);
var seq30189__$2 = cljs.core.next.call(null,seq30189__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__30190,G__30191,seq30189__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30287 = arguments.length;
var i__7485__auto___30288 = (0);
while(true){
if((i__7485__auto___30288 < len__7484__auto___30287)){
args__7491__auto__.push((arguments[i__7485__auto___30288]));

var G__30289 = (i__7485__auto___30288 + (1));
i__7485__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__30198){
var vec__30199 = p__30198;
var _QMARK_max_len = cljs.core.nth.call(null,vec__30199,(0),null);
var vec__30202 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__30202,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__30202,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq30195){
var G__30196 = cljs.core.first.call(null,seq30195);
var seq30195__$1 = cljs.core.next.call(null,seq30195);
var G__30197 = cljs.core.first.call(null,seq30195__$1);
var seq30195__$2 = cljs.core.next.call(null,seq30195__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__30196,G__30197,seq30195__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30290 = arguments.length;
var i__7485__auto___30291 = (0);
while(true){
if((i__7485__auto___30291 < len__7484__auto___30290)){
args__7491__auto__.push((arguments[i__7485__auto___30291]));

var G__30292 = (i__7485__auto___30291 + (1));
i__7485__auto___30291 = G__30292;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__30208){
var vec__30209 = p__30208;
var _QMARK_max_len = cljs.core.nth.call(null,vec__30209,(0),null);
var vec__30212 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__30212,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__30212,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq30205){
var G__30206 = cljs.core.first.call(null,seq30205);
var seq30205__$1 = cljs.core.next.call(null,seq30205);
var G__30207 = cljs.core.first.call(null,seq30205__$1);
var seq30205__$2 = cljs.core.next.call(null,seq30205__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30206,G__30207,seq30205__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__30220 = coll;
var c1 = cljs.core.nth.call(null,vec__30220,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__30293 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__30294 = cljs.core.next.call(null,ks__$1);
var G__30295 = cljs.core.next.call(null,vs__$1);
m = G__30293;
ks__$1 = G__30294;
vs__$1 = G__30295;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30296 = arguments.length;
var i__7485__auto___30297 = (0);
while(true){
if((i__7485__auto___30297 < len__7484__auto___30296)){
args__7491__auto__.push((arguments[i__7485__auto___30297]));

var G__30298 = (i__7485__auto___30297 + (1));
i__7485__auto___30297 = G__30298;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__30097 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__30097,(0),null);
var ks = cljs.core.nth.call(null,vec__30097,(1),null);
var valf = cljs.core.nth.call(null,vec__30097,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__30097,type,ks,valf){
return (function (_){
return valf;
});})(vec__30097,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq30095){
var G__30096 = cljs.core.first.call(null,seq30095);
var seq30095__$1 = cljs.core.next.call(null,seq30095);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__30096,seq30095__$1);
});


//# sourceMappingURL=encore.js.map?rel=1484780652490s$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__37936 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__37936,(0),null);
var ks = cljs.core.nth.call(null,vec__37936,(1),null);
var valf = cljs.core.nth.call(null,vec__37936,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__37936,type,ks,valf){
return (function (_){
return valf;
});})(vec__37936,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq37934){
var G__37935 = cljs.core.first.call(null,seq37934);
var seq37934__$1 = cljs.core.next.call(null,seq37934);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__37935,seq37934__$1);
});


//# sourceMappingURL=encore.js.map?rel=1484780648874
// Compiled by ClojureScript 1.9.229 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('clojure.walk');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,"SPY:");

cljs.core.println.call(null,cljs.core.pr_str.call(null,e));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.pr_str.call(null,o);
} else {
return [cljs.core.str(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___9975 = arguments.length;
var i__7485__auto___9976 = (0);
while(true){
if((i__7485__auto___9976 < len__7484__auto___9975)){
args__7491__auto__.push((arguments[i__7485__auto___9976]));

var G__9977 = (i__7485__auto___9976 + (1));
i__7485__auto___9976 = G__9977;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq9974){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9974));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__9978 = null;
var G__9978__0 = (function (){
return v;
});
var G__9978__1 = (function (a1){
return v;
});
var G__9978__2 = (function (a1,a2){
return v;
});
var G__9978__3 = (function (a1,a2,a3){
return v;
});
var G__9978__4 = (function (a1,a2,a3,a4){
return v;
});
var G__9978__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__9978__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__9978__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__9978__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__9978__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__9978__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__9978__11 = (function() { 
var G__9979__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__9979 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__9980__i = 0, G__9980__a = new Array(arguments.length -  10);
while (G__9980__i < G__9980__a.length) {G__9980__a[G__9980__i] = arguments[G__9980__i + 10]; ++G__9980__i;}
  r = new cljs.core.IndexedSeq(G__9980__a,0);
} 
return G__9979__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__9979.cljs$lang$maxFixedArity = 10;
G__9979.cljs$lang$applyTo = (function (arglist__9981){
var a1 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a2 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a3 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a4 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a5 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a6 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a7 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a8 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a9 = cljs.core.first(arglist__9981);
arglist__9981 = cljs.core.next(arglist__9981);
var a10 = cljs.core.first(arglist__9981);
var r = cljs.core.rest(arglist__9981);
return G__9979__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__9979.cljs$core$IFn$_invoke$arity$variadic = G__9979__delegate;
return G__9979;
})()
;
G__9978 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__9978__0.call(this);
case 1:
return G__9978__1.call(this,a1);
case 2:
return G__9978__2.call(this,a1,a2);
case 3:
return G__9978__3.call(this,a1,a2,a3);
case 4:
return G__9978__4.call(this,a1,a2,a3,a4);
case 5:
return G__9978__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__9978__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__9978__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__9978__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__9978__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__9978__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__9982 = null;
if (arguments.length > 10) {
var G__9983__i = 0, G__9983__a = new Array(arguments.length -  10);
while (G__9983__i < G__9983__a.length) {G__9983__a[G__9983__i] = arguments[G__9983__i + 10]; ++G__9983__i;}
G__9982 = new cljs.core.IndexedSeq(G__9983__a,0);
}
return G__9978__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__9982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9978.cljs$lang$maxFixedArity = 10;
G__9978.cljs$lang$applyTo = G__9978__11.cljs$lang$applyTo;
G__9978.cljs$core$IFn$_invoke$arity$0 = G__9978__0;
G__9978.cljs$core$IFn$_invoke$arity$1 = G__9978__1;
G__9978.cljs$core$IFn$_invoke$arity$2 = G__9978__2;
G__9978.cljs$core$IFn$_invoke$arity$3 = G__9978__3;
G__9978.cljs$core$IFn$_invoke$arity$4 = G__9978__4;
G__9978.cljs$core$IFn$_invoke$arity$5 = G__9978__5;
G__9978.cljs$core$IFn$_invoke$arity$6 = G__9978__6;
G__9978.cljs$core$IFn$_invoke$arity$7 = G__9978__7;
G__9978.cljs$core$IFn$_invoke$arity$8 = G__9978__8;
G__9978.cljs$core$IFn$_invoke$arity$9 = G__9978__9;
G__9978.cljs$core$IFn$_invoke$arity$10 = G__9978__10;
G__9978.cljs$core$IFn$_invoke$arity$variadic = G__9978__11.cljs$core$IFn$_invoke$arity$variadic;
return G__9978;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__7491__auto__ = [];
var len__7484__auto___9985 = arguments.length;
var i__7485__auto___9986 = (0);
while(true){
if((i__7485__auto___9986 < len__7484__auto___9985)){
args__7491__auto__.push((arguments[i__7485__auto___9986]));

var G__9987 = (i__7485__auto___9986 + (1));
i__7485__auto___9986 = G__9987;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq9984){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9984));
});

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal.call(null,"not implemented");
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal.call(null,"intern not supported in ClojureScript");
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__7349__auto__ = cljs.core.system_time.call(null);
var ret__7350__auto__ = (function (){var n__7324__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__7324__auto__)){
afn.call(null);

var G__9988 = (_ + (1));
_ = G__9988;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__7349__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__7350__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return com.rpl.specter.protocols.select_STAR_.call(null,this$,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return com.rpl.specter.protocols.transform_STAR_.call(null,this$,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
var x__7072__auto__ = (((paths == null))?null:paths);
var m__7073__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,paths);
} else {
var m__7073__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.do-comp-paths",paths);
}
}
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if(!((n == null))){
if((false) || (n.com$rpl$specter$protocols$RichNavigator$)){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_.call(null,p))){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths.call(null,p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_.call(null,this$))){
return this$;
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$ImplicitNav$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,"Not a navigator: ",this$," ",cljs.core.pr_str.call(null,cljs.core.type.call(null,this$)));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_object.call(null,this$);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
return com.rpl.specter.impl.coerce_object.call(null,this$);
}));
com.rpl.specter.impl.STAY_STAR_ = (function (){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl9993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl9993 = (function (meta9994){
this.meta9994 = meta9994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl9993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9995,meta9994__$1){
var self__ = this;
var _9995__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl9993(meta9994__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl9993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9995){
var self__ = this;
var _9995__$1 = this;
return self__.meta9994;
});

com.rpl.specter.impl.t_com$rpl$specter$impl9993.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl9993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9994","meta9994",1922813070,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9993.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl9993.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl9993";

com.rpl.specter.impl.t_com$rpl$specter$impl9993.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl9993");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl9993 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl9993(meta9994){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl9993(meta9994));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl9993(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl9999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl9999 = (function (combine_two_navs,nav1,nav2,meta10000){
this.combine_two_navs = combine_two_navs;
this.nav1 = nav1;
this.nav2 = nav2;
this.meta10000 = meta10000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl9999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10001,meta10000__$1){
var self__ = this;
var _10001__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl9999(self__.combine_two_navs,self__.nav1,self__.nav2,meta10000__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl9999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10001){
var self__ = this;
var _10001__$1 = this;
return self__.meta10000;
});

com.rpl.specter.impl.t_com$rpl$specter$impl9999.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl9999.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9999.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"combine-two-navs","combine-two-navs",-264439021,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null)], null)))], null)),new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta10000","meta10000",-732636215,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl9999.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl9999.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl9999";

com.rpl.specter.impl.t_com$rpl$specter$impl9999.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl9999");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl9999 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl9999(combine_two_navs__$1,nav1__$1,nav2__$1,meta10000){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl9999(combine_two_navs__$1,nav1__$1,nav2__$1,meta10000));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl9999(com$rpl$specter$impl$combine_two_navs,nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.do_comp_paths["null"] = (function (o){
return com.rpl.specter.impl.coerce_path.call(null,o);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.do_comp_paths["_"] = (function (o){
return com.rpl.specter.impl.coerce_path.call(null,o);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_.call(null,coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,coerced))){
return cljs.core.first.call(null,coerced);
} else {
return cljs.core.reduce.call(null,com.rpl.specter.impl.combine_two_navs,coerced);

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__7072__auto__ = (((cell == null))?null:cell);
var m__7073__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,cell,x);
} else {
var m__7073__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args10002 = [];
var len__7484__auto___10005 = arguments.length;
var i__7485__auto___10006 = (0);
while(true){
if((i__7485__auto___10006 < len__7484__auto___10005)){
args10002.push((arguments[i__7485__auto___10006]));

var G__10007 = (i__7485__auto___10006 + (1));
i__7485__auto___10006 = G__10007;
continue;
} else {
}
break;
}

var G__10004 = args10002.length;
switch (G__10004) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10002.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.exec_select_STAR_.call(null,path,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
if((vals === cljs.core.PersistentVector.EMPTY)){
return result_fn.call(null,structure__$1);
} else {
return result_fn.call(null,cljs.core.conj.call(null,vals,structure__$1));
}
}));
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10014 = (function (do_compiled_traverse,apath,structure,meta10015){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta10015 = meta10015;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10016,meta10015__$1){
var self__ = this;
var _10016__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10014(self__.do_compiled_traverse,self__.apath,self__.structure,meta10015__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10016){
var self__ = this;
var _10016__$1 = this;
return self__.meta10015;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10014.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10014.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.call(null,start);
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,self__.apath,((function (cell,this$__$1){
return (function (elem){
var curr = com.rpl.specter.impl.get_cell.call(null,cell);
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,afn.call(null,curr,elem));
});})(cell,this$__$1))
,self__.structure);

return com.rpl.specter.impl.get_cell.call(null,cell);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta10015","meta10015",-62940728,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10014.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10014.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10014";

com.rpl.specter.impl.t_com$rpl$specter$impl10014.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10014");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10014 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl10014(do_compiled_traverse__$1,apath__$1,structure__$1,meta10015){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10014(do_compiled_traverse__$1,apath__$1,structure__$1,meta10015));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10014(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,cljs.core.conj_BANG_.call(null,curr,structure__$1));
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

return cljs.core.persistent_BANG_.call(null,com.rpl.specter.impl.get_cell.call(null,res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,"More than one element found in structure: ",structure__$1);
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,"More than one element found in structure: ",structure__$1);
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal.call(null,"Found no elements for select-one! on ",structure);
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return null;
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(path,structure){
return com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,cljs.core.identity,structure);
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return cljs.core.not_EQ_.call(null,com.rpl.specter.impl.NONE,com.rpl.specter.impl.compiled_select_any_STAR_.call(null,path,structure));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return afn.call(null,structure);
} else {
return cljs.core.apply.call(null,afn,cljs.core.conj.call(null,vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_.call(null,nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_.call(null,transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10018,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10020 = (((k10018 instanceof cljs.core.Keyword))?k10018.fqn:null);
switch (G__10020) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10018,else__7034__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10017){
var self__ = this;
var G__10017__$1 = this;
return (new cljs.core.RecordIter((0),G__10017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10017){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10021 = cljs.core.keyword_identical_QMARK_;
var expr__10022 = k__7039__auto__;
if(cljs.core.truth_(pred__10021.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10022))){
return (new com.rpl.specter.impl.LocalSym(G__10017,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10021.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__10022))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__10017,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10017),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10017){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__10017,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__10019){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10019),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__10019),null,cljs.core.dissoc.call(null,G__10019,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,var$,sym,__meta,__extmap,__hash){
this.val = val;
this.var$ = var$;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10026,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10028 = (((k10026 instanceof cljs.core.Keyword))?k10026.fqn:null);
switch (G__10028) {
case "val":
return self__.val;

break;
case "var":
return self__.var$;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10026,else__7034__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10025){
var self__ = this;
var G__10025__$1 = this;
return (new cljs.core.RecordIter((0),G__10025__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10025){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10029 = cljs.core.keyword_identical_QMARK_;
var expr__10030 = k__7039__auto__;
if(cljs.core.truth_(pred__10029.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10030))){
return (new com.rpl.specter.impl.VarUse(G__10025,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10029.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__10030))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__10025,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10029.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__10030))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__10025,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10025),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10025){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__10025,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__10027){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10027),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__10027),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__10027),null,cljs.core.dissoc.call(null,G__10027,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10034,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10036 = (((k10034 instanceof cljs.core.Keyword))?k10034.fqn:null);
switch (G__10036) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10034,else__7034__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10033){
var self__ = this;
var G__10033__$1 = this;
return (new cljs.core.RecordIter((0),G__10033__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10033){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10037 = cljs.core.keyword_identical_QMARK_;
var expr__10038 = k__7039__auto__;
if(cljs.core.truth_(pred__10037.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10038))){
return (new com.rpl.specter.impl.SpecialFormUse(G__10033,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10037.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10038))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__10033,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10033),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10033){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__10033,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__10035){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10035),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10035),null,cljs.core.dissoc.call(null,G__10035,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10042,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10044 = (((k10042 instanceof cljs.core.Keyword))?k10042.fqn:null);
switch (G__10044) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10042,else__7034__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10041){
var self__ = this;
var G__10041__$1 = this;
return (new cljs.core.RecordIter((0),G__10041__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10041){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10045 = cljs.core.keyword_identical_QMARK_;
var expr__10046 = k__7039__auto__;
if(cljs.core.truth_(pred__10045.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__10046))){
return (new com.rpl.specter.impl.FnInvocation(G__10041,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10045.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10046))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__10041,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10045.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10046))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__10041,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10041),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10041){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__10041,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__10043){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__10043),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10043),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10043),null,cljs.core.dissoc.call(null,G__10043,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10050,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10052 = (((k10050 instanceof cljs.core.Keyword))?k10050.fqn:null);
switch (G__10052) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10050,else__7034__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10049){
var self__ = this;
var G__10049__$1 = this;
return (new cljs.core.RecordIter((0),G__10049__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10049){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10053 = cljs.core.keyword_identical_QMARK_;
var expr__10054 = k__7039__auto__;
if(cljs.core.truth_(pred__10053.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10054))){
return (new com.rpl.specter.impl.DynamicVal(G__10049,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10049),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10049){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__10049,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__10051){
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10051),null,cljs.core.dissoc.call(null,G__10051,new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10058,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10060 = (((k10058 instanceof cljs.core.Keyword))?k10058.fqn:null);
switch (G__10060) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10058,else__7034__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10057){
var self__ = this;
var G__10057__$1 = this;
return (new cljs.core.RecordIter((0),G__10057__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10057){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10061 = cljs.core.keyword_identical_QMARK_;
var expr__10062 = k__7039__auto__;
if(cljs.core.truth_(pred__10061.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__10062))){
return (new com.rpl.specter.impl.DynamicPath(G__10057,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10057),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10057){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__10057,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__10059){
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__10059),null,cljs.core.dissoc.call(null,G__10059,new cljs.core.Keyword(null,"path","path",-188191168)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10066,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10068 = (((k10066 instanceof cljs.core.Keyword))?k10066.fqn:null);
switch (G__10068) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10066,else__7034__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10065){
var self__ = this;
var G__10065__$1 = this;
return (new cljs.core.RecordIter((0),G__10065__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10065){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10069 = cljs.core.keyword_identical_QMARK_;
var expr__10070 = k__7039__auto__;
if(cljs.core.truth_(pred__10069.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__10070))){
return (new com.rpl.specter.impl.DynamicFunction(G__10065,self__.params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10069.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10070))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__10065,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10065),null));
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10065){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__10065,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params){
return (new com.rpl.specter.impl.DynamicFunction(op,params,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__10067){
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__10067),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10067),null,cljs.core.dissoc.call(null,G__10067,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal], true),cljs.core.type.call(null,o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com$rpl$specter$impl$static_path_QMARK_,path);
} else {
return cljs.core.not.call(null,com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(cljs.core.truth_(com.rpl.specter.impl.static_path_QMARK_.call(null,path))){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath.call(null,path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10074,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10076 = (((k10074 instanceof cljs.core.Keyword))?k10074.fqn:null);
switch (G__10076) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10074,else__7034__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10073){
var self__ = this;
var G__10073__$1 = this;
return (new cljs.core.RecordIter((0),G__10073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10073){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10077 = cljs.core.keyword_identical_QMARK_;
var expr__10078 = k__7039__auto__;
if(cljs.core.truth_(pred__10077.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__10078))){
return (new com.rpl.specter.impl.CachedPathInfo(G__10073,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10077.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__10078))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__10073,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10073),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10073){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__10073,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__10075){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__10075),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__10075),null,cljs.core.dissoc.call(null,G__10075,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)),null));
});

com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10084 = (function (pred_STAR_,afn,meta10085){
this.pred_STAR_ = pred_STAR_;
this.afn = afn;
this.meta10085 = meta10085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10086,meta10085__$1){
var self__ = this;
var _10086__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10084(self__.pred_STAR_,self__.afn,meta10085__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10086){
var self__ = this;
var _10086__$1 = this;
return self__.meta10085;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10084.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10084.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10084.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pred*","pred*",1451695560,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta10085","meta10085",-147887743,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10084.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10084.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10084";

com.rpl.specter.impl.t_com$rpl$specter$impl10084.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10084");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10084 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl10084(pred_STAR___$1,afn__$1,meta10085){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10084(pred_STAR___$1,afn__$1,meta10085));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10084(com$rpl$specter$impl$pred_STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10090 = (function (collected_QMARK__STAR_,afn,meta10091){
this.collected_QMARK__STAR_ = collected_QMARK__STAR_;
this.afn = afn;
this.meta10091 = meta10091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10092,meta10091__$1){
var self__ = this;
var _10092__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10090(self__.collected_QMARK__STAR_,self__.afn,meta10091__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10092){
var self__ = this;
var _10092__$1 = this;
return self__.meta10091;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10090.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10090.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10090.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"collected?*","collected?*",1609398998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta10091","meta10091",1841450876,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10090.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10090.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10090";

com.rpl.specter.impl.t_com$rpl$specter$impl10090.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10090");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10090 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl10090(collected_QMARK__STAR___$1,afn__$1,meta10091){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10090(collected_QMARK__STAR___$1,afn__$1,meta10091));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10090(com$rpl$specter$impl$collected_QMARK__STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10096 = (function (cell_nav,cell,meta10097){
this.cell_nav = cell_nav;
this.cell = cell;
this.meta10097 = meta10097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10098,meta10097__$1){
var self__ = this;
var _10098__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10096(self__.cell_nav,self__.cell,meta10097__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10098){
var self__ = this;
var _10098__$1 = this;
return self__.meta10097;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10096.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10096.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10096.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cell-nav","cell-nav",-1155919053,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null)))], null)),new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta10097","meta10097",2102847806,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10096.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10096.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10096";

com.rpl.specter.impl.t_com$rpl$specter$impl10096.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10096");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10096 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl10096(cell_nav__$1,cell__$1,meta10097){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10096(cell_nav__$1,cell__$1,meta10097));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10096(com$rpl$specter$impl$cell_nav,cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.call(null,null);
return cljs.core.vary_meta.call(null,com.rpl.specter.impl.cell_nav.call(null,cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declared));
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var args10305 = [];
var len__7484__auto___10328 = arguments.length;
var i__7485__auto___10329 = (0);
while(true){
if((i__7485__auto___10329 < len__7484__auto___10328)){
args10305.push((arguments[i__7485__auto___10329]));

var G__10330 = (i__7485__auto___10329 + (1));
i__7485__auto___10329 = G__10330;
continue;
} else {
}
break;
}

var G__10327 = args10305.length;
switch (G__10327) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args10305.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__7503__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__9850__auto__){
return nav1__9850__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__9850__auto__,nav2__9851__auto__){
return com.rpl.specter.impl.combine_two_navs.call(null,nav1__9850__auto__,nav2__9851__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__10118,G__10119,G__10120){
return com.rpl.specter.impl.comp_navs.call(null,G__10118,com.rpl.specter.impl.comp_navs.call(null,G__10119,G__10120));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__10121,G__10122,G__10123,G__10124){
return com.rpl.specter.impl.comp_navs.call(null,G__10121,com.rpl.specter.impl.comp_navs.call(null,G__10122,G__10123,G__10124));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__10125,G__10126,G__10127,G__10128,G__10129){
return com.rpl.specter.impl.comp_navs.call(null,G__10125,com.rpl.specter.impl.comp_navs.call(null,G__10126,G__10127,G__10128,G__10129));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__10130,G__10131,G__10132,G__10133,G__10134,G__10135){
return com.rpl.specter.impl.comp_navs.call(null,G__10130,com.rpl.specter.impl.comp_navs.call(null,G__10131,G__10132,G__10133,G__10134,G__10135));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__10136,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142){
return com.rpl.specter.impl.comp_navs.call(null,G__10136,com.rpl.specter.impl.comp_navs.call(null,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__10143,G__10144,G__10145,G__10146,G__10147,G__10148,G__10149,G__10150){
return com.rpl.specter.impl.comp_navs.call(null,G__10143,com.rpl.specter.impl.comp_navs.call(null,G__10144,G__10145,G__10146,G__10147,G__10148,G__10149,G__10150));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__10151,G__10152,G__10153,G__10154,G__10155,G__10156,G__10157,G__10158,G__10159){
return com.rpl.specter.impl.comp_navs.call(null,G__10151,com.rpl.specter.impl.comp_navs.call(null,G__10152,G__10153,G__10154,G__10155,G__10156,G__10157,G__10158,G__10159));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__10160,G__10161,G__10162,G__10163,G__10164,G__10165,G__10166,G__10167,G__10168,G__10169){
return com.rpl.specter.impl.comp_navs.call(null,G__10160,com.rpl.specter.impl.comp_navs.call(null,G__10161,G__10162,G__10163,G__10164,G__10165,G__10166,G__10167,G__10168,G__10169));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__10170,G__10171,G__10172,G__10173,G__10174,G__10175,G__10176,G__10177,G__10178,G__10179,G__10180){
return com.rpl.specter.impl.comp_navs.call(null,G__10170,com.rpl.specter.impl.comp_navs.call(null,G__10171,G__10172,G__10173,G__10174,G__10175,G__10176,G__10177,G__10178,G__10179,G__10180));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__10181,G__10182,G__10183,G__10184,G__10185,G__10186,G__10187,G__10188,G__10189,G__10190,G__10191,G__10192){
return com.rpl.specter.impl.comp_navs.call(null,G__10181,com.rpl.specter.impl.comp_navs.call(null,G__10182,G__10183,G__10184,G__10185,G__10186,G__10187,G__10188,G__10189,G__10190,G__10191,G__10192));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__10193,G__10194,G__10195,G__10196,G__10197,G__10198,G__10199,G__10200,G__10201,G__10202,G__10203,G__10204,G__10205){
return com.rpl.specter.impl.comp_navs.call(null,G__10193,com.rpl.specter.impl.comp_navs.call(null,G__10194,G__10195,G__10196,G__10197,G__10198,G__10199,G__10200,G__10201,G__10202,G__10203,G__10204,G__10205));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__10206,G__10207,G__10208,G__10209,G__10210,G__10211,G__10212,G__10213,G__10214,G__10215,G__10216,G__10217,G__10218,G__10219){
return com.rpl.specter.impl.comp_navs.call(null,G__10206,com.rpl.specter.impl.comp_navs.call(null,G__10207,G__10208,G__10209,G__10210,G__10211,G__10212,G__10213,G__10214,G__10215,G__10216,G__10217,G__10218,G__10219));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__10220,G__10221,G__10222,G__10223,G__10224,G__10225,G__10226,G__10227,G__10228,G__10229,G__10230,G__10231,G__10232,G__10233,G__10234){
return com.rpl.specter.impl.comp_navs.call(null,G__10220,com.rpl.specter.impl.comp_navs.call(null,G__10221,G__10222,G__10223,G__10224,G__10225,G__10226,G__10227,G__10228,G__10229,G__10230,G__10231,G__10232,G__10233,G__10234));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__10235,G__10236,G__10237,G__10238,G__10239,G__10240,G__10241,G__10242,G__10243,G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250){
return com.rpl.specter.impl.comp_navs.call(null,G__10235,com.rpl.specter.impl.comp_navs.call(null,G__10236,G__10237,G__10238,G__10239,G__10240,G__10241,G__10242,G__10243,G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__10251,G__10252,G__10253,G__10254,G__10255,G__10256,G__10257,G__10258,G__10259,G__10260,G__10261,G__10262,G__10263,G__10264,G__10265,G__10266,G__10267){
return com.rpl.specter.impl.comp_navs.call(null,G__10251,com.rpl.specter.impl.comp_navs.call(null,G__10252,G__10253,G__10254,G__10255,G__10256,G__10257,G__10258,G__10259,G__10260,G__10261,G__10262,G__10263,G__10264,G__10265,G__10266,G__10267));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__10268,G__10269,G__10270,G__10271,G__10272,G__10273,G__10274,G__10275,G__10276,G__10277,G__10278,G__10279,G__10280,G__10281,G__10282,G__10283,G__10284,G__10285){
return com.rpl.specter.impl.comp_navs.call(null,G__10268,com.rpl.specter.impl.comp_navs.call(null,G__10269,G__10270,G__10271,G__10272,G__10273,G__10274,G__10275,G__10276,G__10277,G__10278,G__10279,G__10280,G__10281,G__10282,G__10283,G__10284,G__10285));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__10286,G__10287,G__10288,G__10289,G__10290,G__10291,G__10292,G__10293,G__10294,G__10295,G__10296,G__10297,G__10298,G__10299,G__10300,G__10301,G__10302,G__10303,G__10304){
return com.rpl.specter.impl.comp_navs.call(null,G__10286,com.rpl.specter.impl.comp_navs.call(null,G__10287,G__10288,G__10289,G__10290,G__10291,G__10292,G__10293,G__10294,G__10295,G__10296,G__10297,G__10298,G__10299,G__10300,G__10301,G__10302,G__10303,G__10304));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__10099,G__10100,G__10101,G__10102,G__10103,G__10104,G__10105,G__10106,G__10107,G__10108,G__10109,G__10110,G__10111,G__10112,G__10113,G__10114,G__10115,G__10116,G__10117,rest__9852__auto__){
return com.rpl.specter.impl.comp_navs.call(null,com.rpl.specter.impl.comp_navs.call(null,G__10099,G__10100,G__10101,G__10102,G__10103,G__10104,G__10105,G__10106,G__10107,G__10108,G__10109,G__10110,G__10111,G__10112,G__10113,G__10114,G__10115,G__10116,G__10117),cljs.core.reduce.call(null,com.rpl.specter.impl.comp_navs,rest__9852__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq10306){
var G__10307 = cljs.core.first.call(null,seq10306);
var seq10306__$1 = cljs.core.next.call(null,seq10306);
var G__10308 = cljs.core.first.call(null,seq10306__$1);
var seq10306__$2 = cljs.core.next.call(null,seq10306__$1);
var G__10309 = cljs.core.first.call(null,seq10306__$2);
var seq10306__$3 = cljs.core.next.call(null,seq10306__$2);
var G__10310 = cljs.core.first.call(null,seq10306__$3);
var seq10306__$4 = cljs.core.next.call(null,seq10306__$3);
var G__10311 = cljs.core.first.call(null,seq10306__$4);
var seq10306__$5 = cljs.core.next.call(null,seq10306__$4);
var G__10312 = cljs.core.first.call(null,seq10306__$5);
var seq10306__$6 = cljs.core.next.call(null,seq10306__$5);
var G__10313 = cljs.core.first.call(null,seq10306__$6);
var seq10306__$7 = cljs.core.next.call(null,seq10306__$6);
var G__10314 = cljs.core.first.call(null,seq10306__$7);
var seq10306__$8 = cljs.core.next.call(null,seq10306__$7);
var G__10315 = cljs.core.first.call(null,seq10306__$8);
var seq10306__$9 = cljs.core.next.call(null,seq10306__$8);
var G__10316 = cljs.core.first.call(null,seq10306__$9);
var seq10306__$10 = cljs.core.next.call(null,seq10306__$9);
var G__10317 = cljs.core.first.call(null,seq10306__$10);
var seq10306__$11 = cljs.core.next.call(null,seq10306__$10);
var G__10318 = cljs.core.first.call(null,seq10306__$11);
var seq10306__$12 = cljs.core.next.call(null,seq10306__$11);
var G__10319 = cljs.core.first.call(null,seq10306__$12);
var seq10306__$13 = cljs.core.next.call(null,seq10306__$12);
var G__10320 = cljs.core.first.call(null,seq10306__$13);
var seq10306__$14 = cljs.core.next.call(null,seq10306__$13);
var G__10321 = cljs.core.first.call(null,seq10306__$14);
var seq10306__$15 = cljs.core.next.call(null,seq10306__$14);
var G__10322 = cljs.core.first.call(null,seq10306__$15);
var seq10306__$16 = cljs.core.next.call(null,seq10306__$15);
var G__10323 = cljs.core.first.call(null,seq10306__$16);
var seq10306__$17 = cljs.core.next.call(null,seq10306__$16);
var G__10324 = cljs.core.first.call(null,seq10306__$17);
var seq10306__$18 = cljs.core.next.call(null,seq10306__$17);
var G__10325 = cljs.core.first.call(null,seq10306__$18);
var seq10306__$19 = cljs.core.next.call(null,seq10306__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__10307,G__10308,G__10309,G__10310,G__10311,G__10312,G__10313,G__10314,G__10315,G__10316,G__10317,G__10318,G__10319,G__10320,G__10321,G__10322,G__10323,G__10324,G__10325,seq10306__$19);
});

com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19);

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.call(null,(function (i,e){
if(cljs.core.truth_(p.call(null,e))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__10336,i){
var vec__10337 = p__10336;
var ranges = cljs.core.nth.call(null,vec__10337,(0),null);
var curr_start = cljs.core.nth.call(null,vec__10337,(1),null);
var curr_last = cljs.core.nth.call(null,vec__10337,(2),null);
var curr = vec__10337;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.call(null,i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.call(null,com.rpl.specter.impl.matching_indices.call(null,aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (structure__$1,p__10344){
var vec__10345 = p__10344;
var s = cljs.core.nth.call(null,vec__10345,(0),null);
var e = cljs.core.nth.call(null,vec__10345,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse.call(null,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__6397__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__6397__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__6397__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if(((!((o == null)))?(((false) || (o.com$rpl$specter$protocols$RichNavigator$))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_.call(null,o)){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,o);
} else {
return com.rpl.specter.protocols.implicit_nav.call(null,o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.call(null,o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj.call(null,obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,o));
if(cljs.core.truth_(orig)){
var G__10356 = orig;
o = G__10356;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),params);
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__10357__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_.call(null,args))){
return cljs.core.apply.call(null,afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,afn,args);
}
};
var G__10357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10358__i = 0, G__10358__a = new Array(arguments.length -  0);
while (G__10358__i < G__10358__a.length) {G__10358__a[G__10358__i] = arguments[G__10358__i + 0]; ++G__10358__i;}
  args = new cljs.core.IndexedSeq(G__10358__a,0);
} 
return G__10357__delegate.call(this,args);};
G__10357.cljs$lang$maxFixedArity = 0;
G__10357.cljs$lang$applyTo = (function (arglist__10359){
var args = cljs.core.seq(arglist__10359);
return G__10357__delegate(args);
});
G__10357.cljs$core$IFn$_invoke$arity$variadic = G__10357__delegate;
return G__10357;
})()
;
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_.call(null,o)){
if((cljs.core.list_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o))){
return cljs.core.map.call(null,com$rpl$specter$impl$magic_precompilation_STAR_,o);
} else {
return cljs.core.into.call(null,cljs.core.empty.call(null,o),cljs.core.map.call(null,com$rpl$specter$impl$magic_precompilation_STAR_,o));
}
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
if(cljs.core.truth_(com.rpl.specter.impl.dynamic_var_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o)))){
return com.rpl.specter.impl.__GT_DynamicVal.call(null,com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__6409__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__6409__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o));
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = com$rpl$specter$impl$magic_precompilation_STAR_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o));
var params = cljs.core.doall.call(null,cljs.core.map.call(null,com$rpl$specter$impl$magic_precompilation_STAR_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o)));
if(cljs.core.truth_((function (){var or__6409__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_.call(null,cljs.core.conj.call(null,params,op));
}
})())){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,cljs.core.apply.call(null,op,params));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,op,params);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var args10361 = [];
var len__7484__auto___10364 = arguments.length;
var i__7485__auto___10365 = (0);
while(true){
if((i__7485__auto___10365 < len__7484__auto___10364)){
args10361.push((arguments[i__7485__auto___10365]));

var G__10366 = (i__7485__auto___10365 + (1));
i__7485__auto___10365 = G__10366;
continue;
} else {
}
break;
}

var G__10363 = args10361.length;
switch (G__10363) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10361.length)].join('')));

}
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.call(null,o,true);
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_.call(null,o)){
if(cljs.core.not.call(null,nav_pos_QMARK_)){
com.rpl.specter.impl.throw_illegal.call(null,"Cannot statically combine sequential when not in nav pos");
} else {
}

var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.call(null,cljs.core.map.call(null,com.rpl.specter.impl.static_combine,cljs.core.flatten.call(null,o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_.call(null,s)], null);
}));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,res))){
return cljs.core.first.call(null,res);
} else {
return res;
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,com.rpl.specter.impl.static_combine.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10360_SHARP_){
return com.rpl.specter.impl.static_combine.call(null,p1__10360_SHARP_,false);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o))));
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath.call(null,com.rpl.specter.impl.static_combine.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav.call(null,o);
} else {
return o;
}

}
}
}
}
});

com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,dynamic_params);
} else {
var m__7073__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,dynamic_params);
} else {
throw cljs.core.missing_protocol.call(null,"LateResolve.late-resolve",this$);
}
}
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10369,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10371 = (((k10369 instanceof cljs.core.Keyword))?k10369.fqn:null);
switch (G__10371) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10369,else__7034__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.call(null,dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10368){
var self__ = this;
var G__10368__$1 = this;
return (new cljs.core.RecordIter((0),G__10368__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10368){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10372 = cljs.core.keyword_identical_QMARK_;
var expr__10373 = k__7039__auto__;
if(cljs.core.truth_(pred__10372.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__10373))){
return (new com.rpl.specter.impl.LocalParam(G__10368,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10368),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10368){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__10368,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__10370){
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__10370),null,cljs.core.dissoc.call(null,G__10370,new cljs.core.Keyword(null,"idx","idx",1053688473)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10376,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10378 = (((k10376 instanceof cljs.core.Keyword))?k10376.fqn:null);
switch (G__10378) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10376,else__7034__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10375){
var self__ = this;
var G__10375__$1 = this;
return (new cljs.core.RecordIter((0),G__10375__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10375){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10379 = cljs.core.keyword_identical_QMARK_;
var expr__10380 = k__7039__auto__;
if(cljs.core.truth_(pred__10379.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10380))){
return (new com.rpl.specter.impl.StaticParam(G__10375,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10375),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10375){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__10375,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__10377){
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10377),null,cljs.core.dissoc.call(null,G__10377,new cljs.core.Keyword(null,"val","val",128701612)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10403,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10405 = (((k10403 instanceof cljs.core.Keyword))?k10403.fqn:null);
switch (G__10405) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10403,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10382){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10382).call(null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10402){
var self__ = this;
var G__10402__$1 = this;
return (new cljs.core.RecordIter((0),G__10402__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10402){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10406 = cljs.core.keyword_identical_QMARK_;
var expr__10407 = k__7039__auto__;
if(cljs.core.truth_(pred__10406.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10407))){
return (new com.rpl.specter.impl.LateFn0(G__10402,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10402),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10402){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__10402,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__10404){
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10404),null,cljs.core.dissoc.call(null,G__10404,new cljs.core.Keyword(null,"fn","fn",-1175266204)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10410,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10412 = (((k10410 instanceof cljs.core.Keyword))?k10410.fqn:null);
switch (G__10412) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10410,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10383){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10383).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10383));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10409){
var self__ = this;
var G__10409__$1 = this;
return (new cljs.core.RecordIter((0),G__10409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10409){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10413 = cljs.core.keyword_identical_QMARK_;
var expr__10414 = k__7039__auto__;
if(cljs.core.truth_(pred__10413.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10414))){
return (new com.rpl.specter.impl.LateFn1(G__10409,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10413.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10414))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__10409,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10409),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10409){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__10409,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__10411){
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10411),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10411),null,cljs.core.dissoc.call(null,G__10411,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10417,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10419 = (((k10417 instanceof cljs.core.Keyword))?k10417.fqn:null);
switch (G__10419) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10417,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10384){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10384).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10384),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10384));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10416){
var self__ = this;
var G__10416__$1 = this;
return (new cljs.core.RecordIter((0),G__10416__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10416){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10420 = cljs.core.keyword_identical_QMARK_;
var expr__10421 = k__7039__auto__;
if(cljs.core.truth_(pred__10420.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10421))){
return (new com.rpl.specter.impl.LateFn2(G__10416,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10420.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10421))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__10416,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10420.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10421))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__10416,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10416),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10416){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__10416,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__10418){
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10418),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10418),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10418),null,cljs.core.dissoc.call(null,G__10418,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10424,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10426 = (((k10424 instanceof cljs.core.Keyword))?k10424.fqn:null);
switch (G__10426) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10424,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10385){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10385).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10385),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10385),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10385));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10423){
var self__ = this;
var G__10423__$1 = this;
return (new cljs.core.RecordIter((0),G__10423__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10423){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10427 = cljs.core.keyword_identical_QMARK_;
var expr__10428 = k__7039__auto__;
if(cljs.core.truth_(pred__10427.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10428))){
return (new com.rpl.specter.impl.LateFn3(G__10423,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10427.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10428))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__10423,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10427.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10428))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__10423,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10427.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10428))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__10423,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10423),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10423){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10423,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__10425){
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10425),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10425),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10425),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10425),null,cljs.core.dissoc.call(null,G__10425,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10431,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10433 = (((k10431 instanceof cljs.core.Keyword))?k10431.fqn:null);
switch (G__10433) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10431,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10386){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10386).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10386),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10386),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10386),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10386));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10430){
var self__ = this;
var G__10430__$1 = this;
return (new cljs.core.RecordIter((0),G__10430__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10430){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10434 = cljs.core.keyword_identical_QMARK_;
var expr__10435 = k__7039__auto__;
if(cljs.core.truth_(pred__10434.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10435))){
return (new com.rpl.specter.impl.LateFn4(G__10430,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10434.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10435))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__10430,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10434.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10435))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__10430,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10434.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10435))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__10430,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10434.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10435))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10430,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10430),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10430){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10430,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__10432){
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10432),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10432),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10432),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10432),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10432),null,cljs.core.dissoc.call(null,G__10432,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10438,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10440 = (((k10438 instanceof cljs.core.Keyword))?k10438.fqn:null);
switch (G__10440) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10438,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10387){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10387).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10387),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10387),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10387),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10387),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10387));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10437){
var self__ = this;
var G__10437__$1 = this;
return (new cljs.core.RecordIter((0),G__10437__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10437){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10441 = cljs.core.keyword_identical_QMARK_;
var expr__10442 = k__7039__auto__;
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(G__10437,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__10437,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__10437,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__10437,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10437,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10441.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10442))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10437,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10437),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10437){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10437,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__10439){
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10439),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10439),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10439),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10439),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10439),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10439),null,cljs.core.dissoc.call(null,G__10439,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10445,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10447 = (((k10445 instanceof cljs.core.Keyword))?k10445.fqn:null);
switch (G__10447) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10445,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10388){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10388).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10388),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10388),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10388),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10388),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10388),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10388));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10444){
var self__ = this;
var G__10444__$1 = this;
return (new cljs.core.RecordIter((0),G__10444__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10444){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10448 = cljs.core.keyword_identical_QMARK_;
var expr__10449 = k__7039__auto__;
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(G__10444,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__10444,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__10444,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__10444,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10444,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10444,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10448.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10449))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10444,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10444),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10444){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10444,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__10446){
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10446),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10446),null,cljs.core.dissoc.call(null,G__10446,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10452,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10454 = (((k10452 instanceof cljs.core.Keyword))?k10452.fqn:null);
switch (G__10454) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10452,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10389){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10389).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10389),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10389));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10451){
var self__ = this;
var G__10451__$1 = this;
return (new cljs.core.RecordIter((0),G__10451__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10451){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10455 = cljs.core.keyword_identical_QMARK_;
var expr__10456 = k__7039__auto__;
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(G__10451,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__10451,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__10451,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__10451,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10451,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10451,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10451,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10455.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10456))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10451,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10451),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10451){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10451,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__10453){
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10453),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10453),null,cljs.core.dissoc.call(null,G__10453,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10459,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10461 = (((k10459 instanceof cljs.core.Keyword))?k10459.fqn:null);
switch (G__10461) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10459,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10390){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10390).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10390),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10390));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10458){
var self__ = this;
var G__10458__$1 = this;
return (new cljs.core.RecordIter((0),G__10458__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10458){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10462 = cljs.core.keyword_identical_QMARK_;
var expr__10463 = k__7039__auto__;
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(G__10458,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__10458,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__10458,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__10458,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10458,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10458,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10458,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10458,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10462.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10463))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10458,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10458),null));
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10458){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10458,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__10460){
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10460),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10460),null,cljs.core.dissoc.call(null,G__10460,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10466,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10468 = (((k10466 instanceof cljs.core.Keyword))?k10466.fqn:null);
switch (G__10468) {
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10466,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10391){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10391).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10391),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10391));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10465){
var self__ = this;
var G__10465__$1 = this;
return (new cljs.core.RecordIter((0),G__10465__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10465){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10469 = cljs.core.keyword_identical_QMARK_;
var expr__10470 = k__7039__auto__;
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(G__10465,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__10465,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__10465,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__10465,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10465,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10465,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10465,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10465,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10465,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10469.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10470))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10465,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10465),null));
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10465){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10465,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__10467){
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10467),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10467),null,cljs.core.dissoc.call(null,G__10467,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10473,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10475 = (((k10473 instanceof cljs.core.Keyword))?k10473.fqn:null);
switch (G__10475) {
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10473,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10392){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10392).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10392),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10392));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10472){
var self__ = this;
var G__10472__$1 = this;
return (new cljs.core.RecordIter((0),G__10472__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10472){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10476 = cljs.core.keyword_identical_QMARK_;
var expr__10477 = k__7039__auto__;
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(G__10472,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__10472,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__10472,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__10472,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10472,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10472,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10472,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10472,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10472,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10472,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10476.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10477))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10472,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10472),null));
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10472){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10472,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__10474){
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10474),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10474),null,cljs.core.dissoc.call(null,G__10474,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10480,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10482 = (((k10480 instanceof cljs.core.Keyword))?k10480.fqn:null);
switch (G__10482) {
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10480,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10393){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10393).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10393),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10393));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10479){
var self__ = this;
var G__10479__$1 = this;
return (new cljs.core.RecordIter((0),G__10479__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10479){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10483 = cljs.core.keyword_identical_QMARK_;
var expr__10484 = k__7039__auto__;
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(G__10479,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__10479,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__10479,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__10479,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10479,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10479,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10479,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10479,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10479,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10479,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10479,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10483.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10484))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10479,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10479),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10479){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10479,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__10481){
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10481),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10481),null,cljs.core.dissoc.call(null,G__10481,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10487,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10489 = (((k10487 instanceof cljs.core.Keyword))?k10487.fqn:null);
switch (G__10489) {
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10487,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10394){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10394).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10394));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10486){
var self__ = this;
var G__10486__$1 = this;
return (new cljs.core.RecordIter((0),G__10486__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10486){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10490 = cljs.core.keyword_identical_QMARK_;
var expr__10491 = k__7039__auto__;
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(G__10486,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__10486,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__10486,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__10486,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10486,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10486,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10486,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10486,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10486,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10486,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10486,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10486,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10491))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10486,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10486),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10486){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10486,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__10488){
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10488),null,cljs.core.dissoc.call(null,G__10488,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10494,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10496 = (((k10494 instanceof cljs.core.Keyword))?k10494.fqn:null);
switch (G__10496) {
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10494,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10395){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10395).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10395));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10493){
var self__ = this;
var G__10493__$1 = this;
return (new cljs.core.RecordIter((0),G__10493__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10493){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10497 = cljs.core.keyword_identical_QMARK_;
var expr__10498 = k__7039__auto__;
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(G__10493,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__10493,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__10493,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__10493,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10493,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10493,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10493,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10493,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10493,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10493,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10493,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10493,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10493,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10497.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10498))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10493,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10493),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10493){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10493,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__10495){
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10495),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10495),null,cljs.core.dissoc.call(null,G__10495,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10501,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10503 = (((k10501 instanceof cljs.core.Keyword))?k10501.fqn:null);
switch (G__10503) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10501,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10396){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10396).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10396));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10500){
var self__ = this;
var G__10500__$1 = this;
return (new cljs.core.RecordIter((0),G__10500__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (15 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10500){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10504 = cljs.core.keyword_identical_QMARK_;
var expr__10505 = k__7039__auto__;
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(G__10500,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__10500,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__10500,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__10500,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10500,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10500,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10500,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10500,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10500,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10500,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10500,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10500,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10500,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10500,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10504.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10505))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10500,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10500),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10500){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10500,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__10502){
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10502),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10502),null,cljs.core.dissoc.call(null,G__10502,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10508,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10510 = (((k10508 instanceof cljs.core.Keyword))?k10508.fqn:null);
switch (G__10510) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg14":
return self__.arg14;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10508,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10397){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10397).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10397));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10507){
var self__ = this;
var G__10507__$1 = this;
return (new cljs.core.RecordIter((0),G__10507__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (16 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10507){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10511 = cljs.core.keyword_identical_QMARK_;
var expr__10512 = k__7039__auto__;
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(G__10507,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__10507,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__10507,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__10507,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10507,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10507,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10507,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10507,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10507,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10507,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10507,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10507,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10507,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10507,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10507,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10511.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10512))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10507,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10507),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10507){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10507,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__10509){
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10509),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10509),null,cljs.core.dissoc.call(null,G__10509,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10515,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10517 = (((k10515 instanceof cljs.core.Keyword))?k10515.fqn:null);
switch (G__10517) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg15":
return self__.arg15;

break;
case "arg14":
return self__.arg14;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10515,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10398){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10398).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10398));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10514){
var self__ = this;
var G__10514__$1 = this;
return (new cljs.core.RecordIter((0),G__10514__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (17 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10514){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10518 = cljs.core.keyword_identical_QMARK_;
var expr__10519 = k__7039__auto__;
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(G__10514,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__10514,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__10514,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__10514,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10514,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10514,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10514,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10514,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10514,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10514,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10514,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10514,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10514,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10514,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10514,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10514,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10518.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10519))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10514,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10514),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10514){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10514,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__10516){
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10516),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10516),null,cljs.core.dissoc.call(null,G__10516,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10522,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10524 = (((k10522 instanceof cljs.core.Keyword))?k10522.fqn:null);
switch (G__10524) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg14":
return self__.arg14;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10522,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10399){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10399).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10399));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10521){
var self__ = this;
var G__10521__$1 = this;
return (new cljs.core.RecordIter((0),G__10521__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (18 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10521){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10525 = cljs.core.keyword_identical_QMARK_;
var expr__10526 = k__7039__auto__;
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(G__10521,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__10521,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__10521,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__10521,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10521,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10521,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10521,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10521,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10521,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10521,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10521,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10521,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10521,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10521,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10521,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10521,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10521,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10525.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10526))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10521,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10521),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10521){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10521,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__10523){
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10523),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10523),null,cljs.core.dissoc.call(null,G__10523,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10529,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10531 = (((k10529 instanceof cljs.core.Keyword))?k10529.fqn:null);
switch (G__10531) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg17":
return self__.arg17;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg14":
return self__.arg14;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10529,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10400){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10400).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params10400));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10528){
var self__ = this;
var G__10528__$1 = this;
return (new cljs.core.RecordIter((0),G__10528__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (19 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10528){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10532 = cljs.core.keyword_identical_QMARK_;
var expr__10533 = k__7039__auto__;
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(G__10528,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__10528,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__10528,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__10528,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10528,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10528,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10528,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10528,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10528,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10528,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10528,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10528,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10528,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10528,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10528,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10528,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10528,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10528,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10532.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__10533))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10528,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10528),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10528){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__10528,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__10530){
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10530),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__10530),null,cljs.core.dissoc.call(null,G__10530,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k10536,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__10538 = (((k10536 instanceof cljs.core.Keyword))?k10536.fqn:null);
switch (G__10538) {
case "arg13":
return self__.arg13;

break;
case "arg3":
return self__.arg3;

break;
case "fn":
return self__.fn;

break;
case "arg7":
return self__.arg7;

break;
case "arg2":
return self__.arg2;

break;
case "arg17":
return self__.arg17;

break;
case "arg6":
return self__.arg6;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg0":
return self__.arg0;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg14":
return self__.arg14;

break;
case "arg18":
return self__.arg18;

break;
case "arg5":
return self__.arg5;

break;
case "arg11":
return self__.arg11;

break;
case "arg8":
return self__.arg8;

break;
case "arg4":
return self__.arg4;

break;
case "arg12":
return self__.arg12;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10536,else__7034__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9876__auto__,dynamic_params10401){
var self__ = this;
var this__9876__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10401).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg18,dynamic_params10401));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10535){
var self__ = this;
var G__10535__$1 = this;
return (new cljs.core.RecordIter((0),G__10535__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (20 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__10535){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__10539 = cljs.core.keyword_identical_QMARK_;
var expr__10540 = k__7039__auto__;
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(G__10535,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__10535,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__10535,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__10535,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10535,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10535,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10535,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10535,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10535,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10535,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10535,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10535,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10535,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10535,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10535,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10535,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10535,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10535,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10535,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10539.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__10540))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__10535,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__10535),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__10535){
var self__ = this;
var this__7030__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__10535,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__10537){
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__10537),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__10537),null,cljs.core.dissoc.call(null,G__10537,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn10542,args10543){
var G__10545 = cljs.core.count.call(null,args10543);
switch (G__10545) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0.call(null,afn10542);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)),cljs.core.nth.call(null,args10543,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)),cljs.core.nth.call(null,args10543,(13)),cljs.core.nth.call(null,args10543,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)),cljs.core.nth.call(null,args10543,(13)),cljs.core.nth.call(null,args10543,(14)),cljs.core.nth.call(null,args10543,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)),cljs.core.nth.call(null,args10543,(13)),cljs.core.nth.call(null,args10543,(14)),cljs.core.nth.call(null,args10543,(15)),cljs.core.nth.call(null,args10543,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18.call(null,afn10542,cljs.core.nth.call(null,args10543,(0)),cljs.core.nth.call(null,args10543,(1)),cljs.core.nth.call(null,args10543,(2)),cljs.core.nth.call(null,args10543,(3)),cljs.core.nth.call(null,args10543,(4)),cljs.core.nth.call(null,args10543,(5)),cljs.core.nth.call(null,args10543,(6)),cljs.core.nth.call(null,args10543,(7)),cljs.core.nth.call(null,args10543,(8)),cljs.core.nth.call(null,args10543,(9)),cljs.core.nth.call(null,args10543,(10)),cljs.core.nth.call(null,args10543,(11)),cljs.core.nth.call(null,args10543,(12)),cljs.core.nth.call(null,args10543,(13)),cljs.core.nth.call(null,args10543,(14)),cljs.core.nth.call(null,args10543,(15)),cljs.core.nth.call(null,args10543,(16)),cljs.core.nth.call(null,args10543,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal.call(null,"Cannot have late function with more than 18 args");

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn.call(null,com.rpl.specter.impl.__GT_StaticParam.call(null,afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn.call(null,afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__10572 = cljs.core.keep_indexed.call(null,(function (i,v){
if(cljs.core._EQ_.call(null,v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.call(null,vec__10572,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal.call(null,"Could not find ",code," in possible params ",possible_params);
} else {
}

return com.rpl.specter.impl.maybe_direct_nav.call(null,com.rpl.specter.impl.__GT_LocalParam.call(null,i),com.rpl.specter.impl.direct_nav_QMARK_.call(null,code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav.call(null,com.rpl.specter.impl.__GT_StaticParam.call(null,o),com.rpl.specter.impl.direct_nav_QMARK_.call(null,o));
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = com$rpl$specter$impl$resolve_arg_code.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),possible_params);
var params = cljs.core.map.call(null,((function (op){
return (function (p1__10575_SHARP_){
return com$rpl$specter$impl$resolve_arg_code.call(null,p1__10575_SHARP_,possible_params);
});})(op))
,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o));
return com.rpl.specter.impl.maybe_direct_nav.call(null,com.rpl.specter.impl.dynamic_fn_code.call(null,com.rpl.specter.impl.original_obj.call(null,op),params),com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o),possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params);
} else {
return com.rpl.specter.impl.static_val_code.call(null,o);

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.sequential_QMARK_.call(null,path)){
var resolved = cljs.core.vec.call(null,cljs.core.map.call(null,((function (path){
return (function (p1__10576_SHARP_){
return com$rpl$specter$impl$resolve_nav_code.call(null,p1__10576_SHARP_,possible_params);
});})(path))
,path));
if(cljs.core.empty_QMARK_.call(null,resolved)){
return com.rpl.specter.impl.static_val_code.call(null,com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,resolved))){
return cljs.core.first.call(null,resolved);
} else {
return com.rpl.specter.impl.static_fn_code.call(null,com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return com$rpl$specter$impl$resolve_nav_code.call(null,path,possible_params);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o);
var d = com.rpl.specter.impl.dynamic_val_code.call(null,code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_.call(null,code))){
return d;
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.set_QMARK_.call(null,code);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var and__6397__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,code);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first.call(null,code));
} else {
return and__6397__auto__;
}
}
})())){
return com.rpl.specter.impl.static_fn_code.call(null,com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code.call(null,com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code.call(null,o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_.call(null,res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code.call(null,com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code.call(null,com.rpl.specter.impl.coerce_nav.call(null,o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (used_locals_cell){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_.call(null,used_locals_cell,((function (used_locals_cell){
return (function (p1__10577_SHARP_){
return cljs.core.conj.call(null,p1__10577_SHARP_,e);
});})(used_locals_cell))
);
} else {
return e;
}
});})(used_locals_cell))
,form);

return com.rpl.specter.impl.get_cell.call(null,used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk.call(null,(function (e){
if(cljs.core.fn_QMARK_.call(null,e)){
return cljs.core.re_find.call(null,/ .*/,cljs.core.pr_str.call(null,e));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.call(null,"Possible params:");

cljs.core.println.call(null,possible_params);

cljs.core.println.call(null,"\nProduced dynamic object:");

cljs.pprint.pprint.call(null,com.rpl.specter.impl.mk_fn_name_strs.call(null,resolved_code));

cljs.core.println.call(null);
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve.call(null,resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.call(null,com.rpl.specter.impl.magic_precompilation_STAR_.call(null,path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.call(null,"Inline caching debug information");

cljs.core.println.call(null,"--------------------------------");

cljs.core.println.call(null,"Input path:",path,"\n");

cljs.core.println.call(null,"Processed path:",magic_path,"\n");
} else {
}

if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_.call(null,magic_path))){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.call(null,"Static result:",magic_path);
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo.call(null,false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker.call(null,com.rpl.specter.impl.resolve_nav_code.call(null,com.rpl.specter.impl.__GT_DynamicPath.call(null,magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo.call(null,true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.fast_constantly.call(null,val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10588 = arguments.length;
var i__7485__auto___10589 = (0);
while(true){
if((i__7485__auto___10589 < len__7484__auto___10588)){
args__7491__auto__.push((arguments[i__7485__auto___10589]));

var G__10590 = (i__7485__auto___10589 + (1));
i__7485__auto___10589 = G__10590;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__10582){
var map__10583 = p__10582;
var map__10583__$1 = ((((!((map__10583 == null)))?((((map__10583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10583):map__10583);
var merge_fn = cljs.core.get.call(null,map__10583__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__10583,map__10583__$1,merge_fn){
return (function() { 
var G__10591__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__10585 = res;
var ret = cljs.core.nth.call(null,vec__10585,(0),null);
var user_ret = cljs.core.nth.call(null,vec__10585,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__10591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10592__i = 0, G__10592__a = new Array(arguments.length -  0);
while (G__10592__i < G__10592__a.length) {G__10592__a[G__10592__i] = arguments[G__10592__i + 0]; ++G__10592__i;}
  args = new cljs.core.IndexedSeq(G__10592__a,0);
} 
return G__10591__delegate.call(this,args);};
G__10591.cljs$lang$maxFixedArity = 0;
G__10591.cljs$lang$applyTo = (function (arglist__10593){
var args = cljs.core.seq(arglist__10593);
return G__10591__delegate(args);
});
G__10591.cljs$core$IFn$_invoke$arity$variadic = G__10591__delegate;
return G__10591;
})()
;})(state,map__10583,map__10583__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq10578){
var G__10579 = cljs.core.first.call(null,seq10578);
var seq10578__$1 = cljs.core.next.call(null,seq10578);
var G__10580 = cljs.core.first.call(null,seq10578__$1);
var seq10578__$2 = cljs.core.next.call(null,seq10578__$1);
var G__10581 = cljs.core.first.call(null,seq10578__$2);
var seq10578__$3 = cljs.core.next.call(null,seq10578__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10579,G__10580,G__10581,seq10578__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10595 = arguments.length;
var i__7485__auto___10596 = (0);
while(true){
if((i__7485__auto___10596 < len__7484__auto___10595)){
args__7491__auto__.push((arguments[i__7485__auto___10596]));

var G__10597 = (i__7485__auto___10596 + (1));
i__7485__auto___10596 = G__10597;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.call(null,"All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq10594){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10594));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=impl.js.map?rel=1484115229054
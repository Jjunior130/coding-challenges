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
var args__26128__auto__ = [];
var len__26121__auto___26408 = arguments.length;
var i__26122__auto___26409 = (0);
while(true){
if((i__26122__auto___26409 < len__26121__auto___26408)){
args__26128__auto__.push((arguments[i__26122__auto___26409]));

var G__26410 = (i__26122__auto___26409 + (1));
i__26122__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq26407){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26407));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__26411 = null;
var G__26411__0 = (function (){
return v;
});
var G__26411__1 = (function (a1){
return v;
});
var G__26411__2 = (function (a1,a2){
return v;
});
var G__26411__3 = (function (a1,a2,a3){
return v;
});
var G__26411__4 = (function (a1,a2,a3,a4){
return v;
});
var G__26411__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__26411__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__26411__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__26411__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__26411__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__26411__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__26411__11 = (function() { 
var G__26412__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__26412 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__26413__i = 0, G__26413__a = new Array(arguments.length -  10);
while (G__26413__i < G__26413__a.length) {G__26413__a[G__26413__i] = arguments[G__26413__i + 10]; ++G__26413__i;}
  r = new cljs.core.IndexedSeq(G__26413__a,0);
} 
return G__26412__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__26412.cljs$lang$maxFixedArity = 10;
G__26412.cljs$lang$applyTo = (function (arglist__26414){
var a1 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a2 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a3 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a4 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a5 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a6 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a7 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a8 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a9 = cljs.core.first(arglist__26414);
arglist__26414 = cljs.core.next(arglist__26414);
var a10 = cljs.core.first(arglist__26414);
var r = cljs.core.rest(arglist__26414);
return G__26412__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__26412.cljs$core$IFn$_invoke$arity$variadic = G__26412__delegate;
return G__26412;
})()
;
G__26411 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__26411__0.call(this);
case 1:
return G__26411__1.call(this,a1);
case 2:
return G__26411__2.call(this,a1,a2);
case 3:
return G__26411__3.call(this,a1,a2,a3);
case 4:
return G__26411__4.call(this,a1,a2,a3,a4);
case 5:
return G__26411__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__26411__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__26411__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__26411__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__26411__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__26411__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__26415 = null;
if (arguments.length > 10) {
var G__26416__i = 0, G__26416__a = new Array(arguments.length -  10);
while (G__26416__i < G__26416__a.length) {G__26416__a[G__26416__i] = arguments[G__26416__i + 10]; ++G__26416__i;}
G__26415 = new cljs.core.IndexedSeq(G__26416__a,0);
}
return G__26411__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__26415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26411.cljs$lang$maxFixedArity = 10;
G__26411.cljs$lang$applyTo = G__26411__11.cljs$lang$applyTo;
G__26411.cljs$core$IFn$_invoke$arity$0 = G__26411__0;
G__26411.cljs$core$IFn$_invoke$arity$1 = G__26411__1;
G__26411.cljs$core$IFn$_invoke$arity$2 = G__26411__2;
G__26411.cljs$core$IFn$_invoke$arity$3 = G__26411__3;
G__26411.cljs$core$IFn$_invoke$arity$4 = G__26411__4;
G__26411.cljs$core$IFn$_invoke$arity$5 = G__26411__5;
G__26411.cljs$core$IFn$_invoke$arity$6 = G__26411__6;
G__26411.cljs$core$IFn$_invoke$arity$7 = G__26411__7;
G__26411.cljs$core$IFn$_invoke$arity$8 = G__26411__8;
G__26411.cljs$core$IFn$_invoke$arity$9 = G__26411__9;
G__26411.cljs$core$IFn$_invoke$arity$10 = G__26411__10;
G__26411.cljs$core$IFn$_invoke$arity$variadic = G__26411__11.cljs$core$IFn$_invoke$arity$variadic;
return G__26411;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__26128__auto__ = [];
var len__26121__auto___26418 = arguments.length;
var i__26122__auto___26419 = (0);
while(true){
if((i__26122__auto___26419 < len__26121__auto___26418)){
args__26128__auto__.push((arguments[i__26122__auto___26419]));

var G__26420 = (i__26122__auto___26419 + (1));
i__26122__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq26417){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26417));
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
var start__25986__auto__ = cljs.core.system_time.call(null);
var ret__25987__auto__ = (function (){var n__25961__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__25961__auto__)){
afn.call(null);

var G__26421 = (_ + (1));
_ = G__26421;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__25986__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__25987__auto__;
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
var x__25709__auto__ = (((paths == null))?null:paths);
var m__25710__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,paths);
} else {
var m__25710__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,paths);
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
var x__25709__auto__ = (((this$ == null))?null:this$);
var m__25710__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,this$);
} else {
var m__25710__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,this$);
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26426 = (function (meta26427){
this.meta26427 = meta26427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26428,meta26427__$1){
var self__ = this;
var _26428__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26426(meta26427__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26428){
var self__ = this;
var _26428__$1 = this;
return self__.meta26427;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26426.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26426.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26426.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26427","meta26427",1745250349,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26426.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26426.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26426";

com.rpl.specter.impl.t_com$rpl$specter$impl26426.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26426");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26426 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl26426(meta26427){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26426(meta26427));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26426(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26432 = (function (combine_two_navs,nav1,nav2,meta26433){
this.combine_two_navs = combine_two_navs;
this.nav1 = nav1;
this.nav2 = nav2;
this.meta26433 = meta26433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26434,meta26433__$1){
var self__ = this;
var _26434__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26432(self__.combine_two_navs,self__.nav1,self__.nav2,meta26433__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26434){
var self__ = this;
var _26434__$1 = this;
return self__.meta26433;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26432.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26432.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26432.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"combine-two-navs","combine-two-navs",-264439021,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null)], null)))], null)),new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta26433","meta26433",799021011,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26432.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26432.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26432";

com.rpl.specter.impl.t_com$rpl$specter$impl26432.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26432");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26432 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl26432(combine_two_navs__$1,nav1__$1,nav2__$1,meta26433){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26432(combine_two_navs__$1,nav1__$1,nav2__$1,meta26433));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26432(com$rpl$specter$impl$combine_two_navs,nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
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
var x__25709__auto__ = (((cell == null))?null:cell);
var m__25710__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,cell,x);
} else {
var m__25710__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args26435 = [];
var len__26121__auto___26438 = arguments.length;
var i__26122__auto___26439 = (0);
while(true){
if((i__26122__auto___26439 < len__26121__auto___26438)){
args26435.push((arguments[i__26122__auto___26439]));

var G__26440 = (i__26122__auto___26439 + (1));
i__26122__auto___26439 = G__26440;
continue;
} else {
}
break;
}

var G__26437 = args26435.length;
switch (G__26437) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26435.length)].join('')));

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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26447 = (function (do_compiled_traverse,apath,structure,meta26448){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta26448 = meta26448;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26449,meta26448__$1){
var self__ = this;
var _26449__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26447(self__.do_compiled_traverse,self__.apath,self__.structure,meta26448__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26449){
var self__ = this;
var _26449__$1 = this;
return self__.meta26448;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26447.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26447.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl26447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta26448","meta26448",1785456366,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26447.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26447.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26447";

com.rpl.specter.impl.t_com$rpl$specter$impl26447.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26447");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26447 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl26447(do_compiled_traverse__$1,apath__$1,structure__$1,meta26448){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26447(do_compiled_traverse__$1,apath__$1,structure__$1,meta26448));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26447(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
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
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26451,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26453 = (((k26451 instanceof cljs.core.Keyword))?k26451.fqn:null);
switch (G__26453) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26451,else__25671__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26450){
var self__ = this;
var G__26450__$1 = this;
return (new cljs.core.RecordIter((0),G__26450__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26450){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26454 = cljs.core.keyword_identical_QMARK_;
var expr__26455 = k__25676__auto__;
if(cljs.core.truth_(pred__26454.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26455))){
return (new com.rpl.specter.impl.LocalSym(G__26450,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26454.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__26455))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__26450,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26450),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26450){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__26450,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__26452){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26452),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__26452),null,cljs.core.dissoc.call(null,G__26452,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26459,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26461 = (((k26459 instanceof cljs.core.Keyword))?k26459.fqn:null);
switch (G__26461) {
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
return cljs.core.get.call(null,self__.__extmap,k26459,else__25671__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26458){
var self__ = this;
var G__26458__$1 = this;
return (new cljs.core.RecordIter((0),G__26458__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26458){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26462 = cljs.core.keyword_identical_QMARK_;
var expr__26463 = k__25676__auto__;
if(cljs.core.truth_(pred__26462.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26463))){
return (new com.rpl.specter.impl.VarUse(G__26458,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26462.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__26463))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__26458,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26462.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__26463))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__26458,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26458),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26458){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__26458,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__26460){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26460),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__26460),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__26460),null,cljs.core.dissoc.call(null,G__26460,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26467,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26469 = (((k26467 instanceof cljs.core.Keyword))?k26467.fqn:null);
switch (G__26469) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26467,else__25671__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26466){
var self__ = this;
var G__26466__$1 = this;
return (new cljs.core.RecordIter((0),G__26466__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26466){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26470 = cljs.core.keyword_identical_QMARK_;
var expr__26471 = k__25676__auto__;
if(cljs.core.truth_(pred__26470.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26471))){
return (new com.rpl.specter.impl.SpecialFormUse(G__26466,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26470.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__26471))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__26466,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26466),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26466){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__26466,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__26468){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26468),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__26468),null,cljs.core.dissoc.call(null,G__26468,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26475,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26477 = (((k26475 instanceof cljs.core.Keyword))?k26475.fqn:null);
switch (G__26477) {
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
return cljs.core.get.call(null,self__.__extmap,k26475,else__25671__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26474){
var self__ = this;
var G__26474__$1 = this;
return (new cljs.core.RecordIter((0),G__26474__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26474){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26478 = cljs.core.keyword_identical_QMARK_;
var expr__26479 = k__25676__auto__;
if(cljs.core.truth_(pred__26478.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__26479))){
return (new com.rpl.specter.impl.FnInvocation(G__26474,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26478.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__26479))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__26474,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26478.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__26479))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__26474,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26474),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26474){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__26474,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__26476){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__26476),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__26476),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__26476),null,cljs.core.dissoc.call(null,G__26476,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26483,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26485 = (((k26483 instanceof cljs.core.Keyword))?k26483.fqn:null);
switch (G__26485) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26483,else__25671__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26482){
var self__ = this;
var G__26482__$1 = this;
return (new cljs.core.RecordIter((0),G__26482__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26482){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26486 = cljs.core.keyword_identical_QMARK_;
var expr__26487 = k__25676__auto__;
if(cljs.core.truth_(pred__26486.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__26487))){
return (new com.rpl.specter.impl.DynamicVal(G__26482,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26482),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26482){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__26482,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__26484){
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__26484),null,cljs.core.dissoc.call(null,G__26484,new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26491,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26493 = (((k26491 instanceof cljs.core.Keyword))?k26491.fqn:null);
switch (G__26493) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26491,else__25671__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26490){
var self__ = this;
var G__26490__$1 = this;
return (new cljs.core.RecordIter((0),G__26490__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26490){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26494 = cljs.core.keyword_identical_QMARK_;
var expr__26495 = k__25676__auto__;
if(cljs.core.truth_(pred__26494.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__26495))){
return (new com.rpl.specter.impl.DynamicPath(G__26490,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26490),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26490){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__26490,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__26492){
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26492),null,cljs.core.dissoc.call(null,G__26492,new cljs.core.Keyword(null,"path","path",-188191168)),null));
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
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26499,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26501 = (((k26499 instanceof cljs.core.Keyword))?k26499.fqn:null);
switch (G__26501) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26499,else__25671__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26498){
var self__ = this;
var G__26498__$1 = this;
return (new cljs.core.RecordIter((0),G__26498__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26498){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26502 = cljs.core.keyword_identical_QMARK_;
var expr__26503 = k__25676__auto__;
if(cljs.core.truth_(pred__26502.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__26503))){
return (new com.rpl.specter.impl.DynamicFunction(G__26498,self__.params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26502.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__26503))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__26498,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26498),null));
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26498){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__26498,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params){
return (new com.rpl.specter.impl.DynamicFunction(op,params,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__26500){
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__26500),null,cljs.core.dissoc.call(null,G__26500,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)),null));
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
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26507,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26509 = (((k26507 instanceof cljs.core.Keyword))?k26507.fqn:null);
switch (G__26509) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26507,else__25671__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26506){
var self__ = this;
var G__26506__$1 = this;
return (new cljs.core.RecordIter((0),G__26506__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26506){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26510 = cljs.core.keyword_identical_QMARK_;
var expr__26511 = k__25676__auto__;
if(cljs.core.truth_(pred__26510.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__26511))){
return (new com.rpl.specter.impl.CachedPathInfo(G__26506,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26510.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__26511))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__26506,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26506),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26506){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__26506,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__26508){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__26508),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__26508),null,cljs.core.dissoc.call(null,G__26508,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)),null));
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26517 = (function (pred_STAR_,afn,meta26518){
this.pred_STAR_ = pred_STAR_;
this.afn = afn;
this.meta26518 = meta26518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26519,meta26518__$1){
var self__ = this;
var _26519__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26517(self__.pred_STAR_,self__.afn,meta26518__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26519){
var self__ = this;
var _26519__$1 = this;
return self__.meta26518;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26517.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26517.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl26517.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl26517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pred*","pred*",1451695560,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta26518","meta26518",-497418969,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26517.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26517.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26517";

com.rpl.specter.impl.t_com$rpl$specter$impl26517.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26517");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26517 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl26517(pred_STAR___$1,afn__$1,meta26518){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26517(pred_STAR___$1,afn__$1,meta26518));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26517(com$rpl$specter$impl$pred_STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26523 = (function (collected_QMARK__STAR_,afn,meta26524){
this.collected_QMARK__STAR_ = collected_QMARK__STAR_;
this.afn = afn;
this.meta26524 = meta26524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26525,meta26524__$1){
var self__ = this;
var _26525__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26523(self__.collected_QMARK__STAR_,self__.afn,meta26524__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26525){
var self__ = this;
var _26525__$1 = this;
return self__.meta26524;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26523.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26523.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl26523.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl26523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"collected?*","collected?*",1609398998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta26524","meta26524",591778063,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26523.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26523.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26523";

com.rpl.specter.impl.t_com$rpl$specter$impl26523.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26523");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26523 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl26523(collected_QMARK__STAR___$1,afn__$1,meta26524){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26523(collected_QMARK__STAR___$1,afn__$1,meta26524));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26523(com$rpl$specter$impl$collected_QMARK__STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl26529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl26529 = (function (cell_nav,cell,meta26530){
this.cell_nav = cell_nav;
this.cell = cell;
this.meta26530 = meta26530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl26529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26531,meta26530__$1){
var self__ = this;
var _26531__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26529(self__.cell_nav,self__.cell,meta26530__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl26529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26531){
var self__ = this;
var _26531__$1 = this;
return self__.meta26530;
});

com.rpl.specter.impl.t_com$rpl$specter$impl26529.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cell-nav","cell-nav",-1155919053,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null)))], null)),new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta26530","meta26530",-1687219725,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl26529.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl26529.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl26529";

com.rpl.specter.impl.t_com$rpl$specter$impl26529.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl26529");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl26529 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl26529(cell_nav__$1,cell__$1,meta26530){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl26529(cell_nav__$1,cell__$1,meta26530));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl26529(com$rpl$specter$impl$cell_nav,cell,cljs.core.PersistentArrayMap.EMPTY));
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
var args26738 = [];
var len__26121__auto___26761 = arguments.length;
var i__26122__auto___26762 = (0);
while(true){
if((i__26122__auto___26762 < len__26121__auto___26761)){
args26738.push((arguments[i__26122__auto___26762]));

var G__26763 = (i__26122__auto___26762 + (1));
i__26122__auto___26762 = G__26763;
continue;
} else {
}
break;
}

var G__26760 = args26738.length;
switch (G__26760) {
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
var argseq__26140__auto__ = (new cljs.core.IndexedSeq(args26738.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__26140__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__26283__auto__){
return nav1__26283__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__26283__auto__,nav2__26284__auto__){
return com.rpl.specter.impl.combine_two_navs.call(null,nav1__26283__auto__,nav2__26284__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__26551,G__26552,G__26553){
return com.rpl.specter.impl.comp_navs.call(null,G__26551,com.rpl.specter.impl.comp_navs.call(null,G__26552,G__26553));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__26554,G__26555,G__26556,G__26557){
return com.rpl.specter.impl.comp_navs.call(null,G__26554,com.rpl.specter.impl.comp_navs.call(null,G__26555,G__26556,G__26557));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__26558,G__26559,G__26560,G__26561,G__26562){
return com.rpl.specter.impl.comp_navs.call(null,G__26558,com.rpl.specter.impl.comp_navs.call(null,G__26559,G__26560,G__26561,G__26562));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__26563,G__26564,G__26565,G__26566,G__26567,G__26568){
return com.rpl.specter.impl.comp_navs.call(null,G__26563,com.rpl.specter.impl.comp_navs.call(null,G__26564,G__26565,G__26566,G__26567,G__26568));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__26569,G__26570,G__26571,G__26572,G__26573,G__26574,G__26575){
return com.rpl.specter.impl.comp_navs.call(null,G__26569,com.rpl.specter.impl.comp_navs.call(null,G__26570,G__26571,G__26572,G__26573,G__26574,G__26575));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__26576,G__26577,G__26578,G__26579,G__26580,G__26581,G__26582,G__26583){
return com.rpl.specter.impl.comp_navs.call(null,G__26576,com.rpl.specter.impl.comp_navs.call(null,G__26577,G__26578,G__26579,G__26580,G__26581,G__26582,G__26583));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__26584,G__26585,G__26586,G__26587,G__26588,G__26589,G__26590,G__26591,G__26592){
return com.rpl.specter.impl.comp_navs.call(null,G__26584,com.rpl.specter.impl.comp_navs.call(null,G__26585,G__26586,G__26587,G__26588,G__26589,G__26590,G__26591,G__26592));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__26593,G__26594,G__26595,G__26596,G__26597,G__26598,G__26599,G__26600,G__26601,G__26602){
return com.rpl.specter.impl.comp_navs.call(null,G__26593,com.rpl.specter.impl.comp_navs.call(null,G__26594,G__26595,G__26596,G__26597,G__26598,G__26599,G__26600,G__26601,G__26602));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__26603,G__26604,G__26605,G__26606,G__26607,G__26608,G__26609,G__26610,G__26611,G__26612,G__26613){
return com.rpl.specter.impl.comp_navs.call(null,G__26603,com.rpl.specter.impl.comp_navs.call(null,G__26604,G__26605,G__26606,G__26607,G__26608,G__26609,G__26610,G__26611,G__26612,G__26613));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__26614,G__26615,G__26616,G__26617,G__26618,G__26619,G__26620,G__26621,G__26622,G__26623,G__26624,G__26625){
return com.rpl.specter.impl.comp_navs.call(null,G__26614,com.rpl.specter.impl.comp_navs.call(null,G__26615,G__26616,G__26617,G__26618,G__26619,G__26620,G__26621,G__26622,G__26623,G__26624,G__26625));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__26626,G__26627,G__26628,G__26629,G__26630,G__26631,G__26632,G__26633,G__26634,G__26635,G__26636,G__26637,G__26638){
return com.rpl.specter.impl.comp_navs.call(null,G__26626,com.rpl.specter.impl.comp_navs.call(null,G__26627,G__26628,G__26629,G__26630,G__26631,G__26632,G__26633,G__26634,G__26635,G__26636,G__26637,G__26638));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__26639,G__26640,G__26641,G__26642,G__26643,G__26644,G__26645,G__26646,G__26647,G__26648,G__26649,G__26650,G__26651,G__26652){
return com.rpl.specter.impl.comp_navs.call(null,G__26639,com.rpl.specter.impl.comp_navs.call(null,G__26640,G__26641,G__26642,G__26643,G__26644,G__26645,G__26646,G__26647,G__26648,G__26649,G__26650,G__26651,G__26652));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__26653,G__26654,G__26655,G__26656,G__26657,G__26658,G__26659,G__26660,G__26661,G__26662,G__26663,G__26664,G__26665,G__26666,G__26667){
return com.rpl.specter.impl.comp_navs.call(null,G__26653,com.rpl.specter.impl.comp_navs.call(null,G__26654,G__26655,G__26656,G__26657,G__26658,G__26659,G__26660,G__26661,G__26662,G__26663,G__26664,G__26665,G__26666,G__26667));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__26668,G__26669,G__26670,G__26671,G__26672,G__26673,G__26674,G__26675,G__26676,G__26677,G__26678,G__26679,G__26680,G__26681,G__26682,G__26683){
return com.rpl.specter.impl.comp_navs.call(null,G__26668,com.rpl.specter.impl.comp_navs.call(null,G__26669,G__26670,G__26671,G__26672,G__26673,G__26674,G__26675,G__26676,G__26677,G__26678,G__26679,G__26680,G__26681,G__26682,G__26683));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__26684,G__26685,G__26686,G__26687,G__26688,G__26689,G__26690,G__26691,G__26692,G__26693,G__26694,G__26695,G__26696,G__26697,G__26698,G__26699,G__26700){
return com.rpl.specter.impl.comp_navs.call(null,G__26684,com.rpl.specter.impl.comp_navs.call(null,G__26685,G__26686,G__26687,G__26688,G__26689,G__26690,G__26691,G__26692,G__26693,G__26694,G__26695,G__26696,G__26697,G__26698,G__26699,G__26700));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__26701,G__26702,G__26703,G__26704,G__26705,G__26706,G__26707,G__26708,G__26709,G__26710,G__26711,G__26712,G__26713,G__26714,G__26715,G__26716,G__26717,G__26718){
return com.rpl.specter.impl.comp_navs.call(null,G__26701,com.rpl.specter.impl.comp_navs.call(null,G__26702,G__26703,G__26704,G__26705,G__26706,G__26707,G__26708,G__26709,G__26710,G__26711,G__26712,G__26713,G__26714,G__26715,G__26716,G__26717,G__26718));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__26719,G__26720,G__26721,G__26722,G__26723,G__26724,G__26725,G__26726,G__26727,G__26728,G__26729,G__26730,G__26731,G__26732,G__26733,G__26734,G__26735,G__26736,G__26737){
return com.rpl.specter.impl.comp_navs.call(null,G__26719,com.rpl.specter.impl.comp_navs.call(null,G__26720,G__26721,G__26722,G__26723,G__26724,G__26725,G__26726,G__26727,G__26728,G__26729,G__26730,G__26731,G__26732,G__26733,G__26734,G__26735,G__26736,G__26737));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__26532,G__26533,G__26534,G__26535,G__26536,G__26537,G__26538,G__26539,G__26540,G__26541,G__26542,G__26543,G__26544,G__26545,G__26546,G__26547,G__26548,G__26549,G__26550,rest__26285__auto__){
return com.rpl.specter.impl.comp_navs.call(null,com.rpl.specter.impl.comp_navs.call(null,G__26532,G__26533,G__26534,G__26535,G__26536,G__26537,G__26538,G__26539,G__26540,G__26541,G__26542,G__26543,G__26544,G__26545,G__26546,G__26547,G__26548,G__26549,G__26550),cljs.core.reduce.call(null,com.rpl.specter.impl.comp_navs,rest__26285__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq26739){
var G__26740 = cljs.core.first.call(null,seq26739);
var seq26739__$1 = cljs.core.next.call(null,seq26739);
var G__26741 = cljs.core.first.call(null,seq26739__$1);
var seq26739__$2 = cljs.core.next.call(null,seq26739__$1);
var G__26742 = cljs.core.first.call(null,seq26739__$2);
var seq26739__$3 = cljs.core.next.call(null,seq26739__$2);
var G__26743 = cljs.core.first.call(null,seq26739__$3);
var seq26739__$4 = cljs.core.next.call(null,seq26739__$3);
var G__26744 = cljs.core.first.call(null,seq26739__$4);
var seq26739__$5 = cljs.core.next.call(null,seq26739__$4);
var G__26745 = cljs.core.first.call(null,seq26739__$5);
var seq26739__$6 = cljs.core.next.call(null,seq26739__$5);
var G__26746 = cljs.core.first.call(null,seq26739__$6);
var seq26739__$7 = cljs.core.next.call(null,seq26739__$6);
var G__26747 = cljs.core.first.call(null,seq26739__$7);
var seq26739__$8 = cljs.core.next.call(null,seq26739__$7);
var G__26748 = cljs.core.first.call(null,seq26739__$8);
var seq26739__$9 = cljs.core.next.call(null,seq26739__$8);
var G__26749 = cljs.core.first.call(null,seq26739__$9);
var seq26739__$10 = cljs.core.next.call(null,seq26739__$9);
var G__26750 = cljs.core.first.call(null,seq26739__$10);
var seq26739__$11 = cljs.core.next.call(null,seq26739__$10);
var G__26751 = cljs.core.first.call(null,seq26739__$11);
var seq26739__$12 = cljs.core.next.call(null,seq26739__$11);
var G__26752 = cljs.core.first.call(null,seq26739__$12);
var seq26739__$13 = cljs.core.next.call(null,seq26739__$12);
var G__26753 = cljs.core.first.call(null,seq26739__$13);
var seq26739__$14 = cljs.core.next.call(null,seq26739__$13);
var G__26754 = cljs.core.first.call(null,seq26739__$14);
var seq26739__$15 = cljs.core.next.call(null,seq26739__$14);
var G__26755 = cljs.core.first.call(null,seq26739__$15);
var seq26739__$16 = cljs.core.next.call(null,seq26739__$15);
var G__26756 = cljs.core.first.call(null,seq26739__$16);
var seq26739__$17 = cljs.core.next.call(null,seq26739__$16);
var G__26757 = cljs.core.first.call(null,seq26739__$17);
var seq26739__$18 = cljs.core.next.call(null,seq26739__$17);
var G__26758 = cljs.core.first.call(null,seq26739__$18);
var seq26739__$19 = cljs.core.next.call(null,seq26739__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__26740,G__26741,G__26742,G__26743,G__26744,G__26745,G__26746,G__26747,G__26748,G__26749,G__26750,G__26751,G__26752,G__26753,G__26754,G__26755,G__26756,G__26757,G__26758,seq26739__$19);
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__26769,i){
var vec__26770 = p__26769;
var ranges = cljs.core.nth.call(null,vec__26770,(0),null);
var curr_start = cljs.core.nth.call(null,vec__26770,(1),null);
var curr_last = cljs.core.nth.call(null,vec__26770,(2),null);
var curr = vec__26770;
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
return cljs.core.reduce.call(null,(function (structure__$1,p__26777){
var vec__26778 = p__26777;
var s = cljs.core.nth.call(null,vec__26778,(0),null);
var e = cljs.core.nth.call(null,vec__26778,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse.call(null,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__25034__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__25034__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__25034__auto__;
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
var G__26789 = orig;
o = G__26789;
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
var G__26790__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_.call(null,args))){
return cljs.core.apply.call(null,afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,afn,args);
}
};
var G__26790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26791__i = 0, G__26791__a = new Array(arguments.length -  0);
while (G__26791__i < G__26791__a.length) {G__26791__a[G__26791__i] = arguments[G__26791__i + 0]; ++G__26791__i;}
  args = new cljs.core.IndexedSeq(G__26791__a,0);
} 
return G__26790__delegate.call(this,args);};
G__26790.cljs$lang$maxFixedArity = 0;
G__26790.cljs$lang$applyTo = (function (arglist__26792){
var args = cljs.core.seq(arglist__26792);
return G__26790__delegate(args);
});
G__26790.cljs$core$IFn$_invoke$arity$variadic = G__26790__delegate;
return G__26790;
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
return com.rpl.specter.impl.__GT_DynamicVal.call(null,com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__25046__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__25046__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
var or__25046__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__25046__auto____$1)){
return or__25046__auto____$1;
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
if(cljs.core.truth_((function (){var or__25046__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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
var args26794 = [];
var len__26121__auto___26797 = arguments.length;
var i__26122__auto___26798 = (0);
while(true){
if((i__26122__auto___26798 < len__26121__auto___26797)){
args26794.push((arguments[i__26122__auto___26798]));

var G__26799 = (i__26122__auto___26798 + (1));
i__26122__auto___26798 = G__26799;
continue;
} else {
}
break;
}

var G__26796 = args26794.length;
switch (G__26796) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26794.length)].join('')));

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
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,com.rpl.specter.impl.static_combine.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__26793_SHARP_){
return com.rpl.specter.impl.static_combine.call(null,p1__26793_SHARP_,false);
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
var x__25709__auto__ = (((this$ == null))?null:this$);
var m__25710__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,this$,dynamic_params);
} else {
var m__25710__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,this$,dynamic_params);
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
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26802,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26804 = (((k26802 instanceof cljs.core.Keyword))?k26802.fqn:null);
switch (G__26804) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26802,else__25671__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.call(null,dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26801){
var self__ = this;
var G__26801__$1 = this;
return (new cljs.core.RecordIter((0),G__26801__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26801){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26805 = cljs.core.keyword_identical_QMARK_;
var expr__26806 = k__25676__auto__;
if(cljs.core.truth_(pred__26805.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__26806))){
return (new com.rpl.specter.impl.LocalParam(G__26801,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26801),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26801){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__26801,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__26803){
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__26803),null,cljs.core.dissoc.call(null,G__26803,new cljs.core.Keyword(null,"idx","idx",1053688473)),null));
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
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26809,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26811 = (((k26809 instanceof cljs.core.Keyword))?k26809.fqn:null);
switch (G__26811) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26809,else__25671__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26808){
var self__ = this;
var G__26808__$1 = this;
return (new cljs.core.RecordIter((0),G__26808__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26808){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26812 = cljs.core.keyword_identical_QMARK_;
var expr__26813 = k__25676__auto__;
if(cljs.core.truth_(pred__26812.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26813))){
return (new com.rpl.specter.impl.StaticParam(G__26808,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26808),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26808){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__26808,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__26810){
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26810),null,cljs.core.dissoc.call(null,G__26810,new cljs.core.Keyword(null,"val","val",128701612)),null));
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
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26836,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26838 = (((k26836 instanceof cljs.core.Keyword))?k26836.fqn:null);
switch (G__26838) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26836,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26815){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26815).call(null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26835){
var self__ = this;
var G__26835__$1 = this;
return (new cljs.core.RecordIter((0),G__26835__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26835){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26839 = cljs.core.keyword_identical_QMARK_;
var expr__26840 = k__25676__auto__;
if(cljs.core.truth_(pred__26839.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26840))){
return (new com.rpl.specter.impl.LateFn0(G__26835,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26835),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26835){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__26835,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__26837){
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26837),null,cljs.core.dissoc.call(null,G__26837,new cljs.core.Keyword(null,"fn","fn",-1175266204)),null));
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
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26843,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26845 = (((k26843 instanceof cljs.core.Keyword))?k26843.fqn:null);
switch (G__26845) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26843,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26816){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26816).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26816));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26842){
var self__ = this;
var G__26842__$1 = this;
return (new cljs.core.RecordIter((0),G__26842__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26842){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26846 = cljs.core.keyword_identical_QMARK_;
var expr__26847 = k__25676__auto__;
if(cljs.core.truth_(pred__26846.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26847))){
return (new com.rpl.specter.impl.LateFn1(G__26842,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26846.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26847))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__26842,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26842),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26842){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__26842,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__26844){
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26844),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26844),null,cljs.core.dissoc.call(null,G__26844,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)),null));
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
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26850,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26852 = (((k26850 instanceof cljs.core.Keyword))?k26850.fqn:null);
switch (G__26852) {
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
return cljs.core.get.call(null,self__.__extmap,k26850,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26817){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26817).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26817),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26817));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26849){
var self__ = this;
var G__26849__$1 = this;
return (new cljs.core.RecordIter((0),G__26849__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26849){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26853 = cljs.core.keyword_identical_QMARK_;
var expr__26854 = k__25676__auto__;
if(cljs.core.truth_(pred__26853.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26854))){
return (new com.rpl.specter.impl.LateFn2(G__26849,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26853.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26854))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__26849,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26853.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26854))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__26849,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26849),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26849){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__26849,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__26851){
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26851),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26851),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26851),null,cljs.core.dissoc.call(null,G__26851,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)),null));
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
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26857,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26859 = (((k26857 instanceof cljs.core.Keyword))?k26857.fqn:null);
switch (G__26859) {
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
return cljs.core.get.call(null,self__.__extmap,k26857,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26818){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26818).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26818),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26818),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26818));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26856){
var self__ = this;
var G__26856__$1 = this;
return (new cljs.core.RecordIter((0),G__26856__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26856){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26860 = cljs.core.keyword_identical_QMARK_;
var expr__26861 = k__25676__auto__;
if(cljs.core.truth_(pred__26860.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26861))){
return (new com.rpl.specter.impl.LateFn3(G__26856,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26860.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26861))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__26856,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26860.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26861))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__26856,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26860.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26861))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__26856,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26856),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26856){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26856,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__26858){
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26858),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26858),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26858),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26858),null,cljs.core.dissoc.call(null,G__26858,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)),null));
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
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26864,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26866 = (((k26864 instanceof cljs.core.Keyword))?k26864.fqn:null);
switch (G__26866) {
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
return cljs.core.get.call(null,self__.__extmap,k26864,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26819){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26819).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26819),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26819),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26819),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26819));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26863){
var self__ = this;
var G__26863__$1 = this;
return (new cljs.core.RecordIter((0),G__26863__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26863){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26867 = cljs.core.keyword_identical_QMARK_;
var expr__26868 = k__25676__auto__;
if(cljs.core.truth_(pred__26867.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26868))){
return (new com.rpl.specter.impl.LateFn4(G__26863,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26867.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26868))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__26863,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26867.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26868))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__26863,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26867.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26868))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__26863,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26867.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26868))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26863,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26863),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26863){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26863,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__26865){
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26865),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26865),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26865),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26865),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26865),null,cljs.core.dissoc.call(null,G__26865,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)),null));
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
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26871,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26873 = (((k26871 instanceof cljs.core.Keyword))?k26871.fqn:null);
switch (G__26873) {
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
return cljs.core.get.call(null,self__.__extmap,k26871,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26820){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26820).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26820),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26820),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26820),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26820),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26820));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26870){
var self__ = this;
var G__26870__$1 = this;
return (new cljs.core.RecordIter((0),G__26870__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26870){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26874 = cljs.core.keyword_identical_QMARK_;
var expr__26875 = k__25676__auto__;
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(G__26870,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__26870,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__26870,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__26870,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26870,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26874.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26875))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26870,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26870),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26870){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26870,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__26872){
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26872),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26872),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26872),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26872),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26872),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26872),null,cljs.core.dissoc.call(null,G__26872,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)),null));
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
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26878,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26880 = (((k26878 instanceof cljs.core.Keyword))?k26878.fqn:null);
switch (G__26880) {
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
return cljs.core.get.call(null,self__.__extmap,k26878,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26821){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26821).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26821),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26821),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26821),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26821),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26821),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26821));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26877){
var self__ = this;
var G__26877__$1 = this;
return (new cljs.core.RecordIter((0),G__26877__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26877){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26881 = cljs.core.keyword_identical_QMARK_;
var expr__26882 = k__25676__auto__;
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(G__26877,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__26877,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__26877,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__26877,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26877,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26877,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26881.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26882))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26877,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26877),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26877){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26877,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__26879){
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26879),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26879),null,cljs.core.dissoc.call(null,G__26879,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)),null));
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
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26885,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26887 = (((k26885 instanceof cljs.core.Keyword))?k26885.fqn:null);
switch (G__26887) {
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
return cljs.core.get.call(null,self__.__extmap,k26885,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26822){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26822).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26822),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26822));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26884){
var self__ = this;
var G__26884__$1 = this;
return (new cljs.core.RecordIter((0),G__26884__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26884){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26888 = cljs.core.keyword_identical_QMARK_;
var expr__26889 = k__25676__auto__;
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(G__26884,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__26884,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__26884,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__26884,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26884,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26884,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26884,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26888.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26889))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26884,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26884),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26884){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26884,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__26886){
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26886),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26886),null,cljs.core.dissoc.call(null,G__26886,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)),null));
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
com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26892,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26894 = (((k26892 instanceof cljs.core.Keyword))?k26892.fqn:null);
switch (G__26894) {
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
return cljs.core.get.call(null,self__.__extmap,k26892,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26823){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26823).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26823),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26823));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26891){
var self__ = this;
var G__26891__$1 = this;
return (new cljs.core.RecordIter((0),G__26891__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26891){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26895 = cljs.core.keyword_identical_QMARK_;
var expr__26896 = k__25676__auto__;
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(G__26891,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__26891,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__26891,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__26891,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26891,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26891,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26891,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26891,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26895.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26896))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26891,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26891),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26891){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26891,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__26893){
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26893),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26893),null,cljs.core.dissoc.call(null,G__26893,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)),null));
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
com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26899,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26901 = (((k26899 instanceof cljs.core.Keyword))?k26899.fqn:null);
switch (G__26901) {
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
return cljs.core.get.call(null,self__.__extmap,k26899,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26824){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26824).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26824),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26824));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26898){
var self__ = this;
var G__26898__$1 = this;
return (new cljs.core.RecordIter((0),G__26898__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26898){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26902 = cljs.core.keyword_identical_QMARK_;
var expr__26903 = k__25676__auto__;
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(G__26898,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__26898,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__26898,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__26898,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26898,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26898,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26898,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26898,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26898,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26903))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26898,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26898),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26898){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26898,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__26900){
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26900),null,cljs.core.dissoc.call(null,G__26900,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)),null));
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
com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26906,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26908 = (((k26906 instanceof cljs.core.Keyword))?k26906.fqn:null);
switch (G__26908) {
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
return cljs.core.get.call(null,self__.__extmap,k26906,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26825){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26825).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26825),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26825));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26905){
var self__ = this;
var G__26905__$1 = this;
return (new cljs.core.RecordIter((0),G__26905__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26905){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26909 = cljs.core.keyword_identical_QMARK_;
var expr__26910 = k__25676__auto__;
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(G__26905,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__26905,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__26905,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__26905,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26905,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26905,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26905,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26905,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26905,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26905,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26909.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26910))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26905,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26905),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26905){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26905,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__26907){
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26907),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26907),null,cljs.core.dissoc.call(null,G__26907,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)),null));
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
com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26913,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26915 = (((k26913 instanceof cljs.core.Keyword))?k26913.fqn:null);
switch (G__26915) {
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
return cljs.core.get.call(null,self__.__extmap,k26913,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26826){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26826).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26826),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26826));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26912){
var self__ = this;
var G__26912__$1 = this;
return (new cljs.core.RecordIter((0),G__26912__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26912){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26916 = cljs.core.keyword_identical_QMARK_;
var expr__26917 = k__25676__auto__;
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(G__26912,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__26912,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__26912,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__26912,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26912,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26912,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26912,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26912,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26912,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26912,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26912,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26916.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26917))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26912,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26912),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26912){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26912,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__26914){
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26914),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26914),null,cljs.core.dissoc.call(null,G__26914,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)),null));
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
com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26920,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26922 = (((k26920 instanceof cljs.core.Keyword))?k26920.fqn:null);
switch (G__26922) {
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
return cljs.core.get.call(null,self__.__extmap,k26920,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26827){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26827).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26827),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26827));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26919){
var self__ = this;
var G__26919__$1 = this;
return (new cljs.core.RecordIter((0),G__26919__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26919){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26923 = cljs.core.keyword_identical_QMARK_;
var expr__26924 = k__25676__auto__;
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(G__26919,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__26919,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__26919,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__26919,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26919,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26919,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26919,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26919,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26919,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26919,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26919,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26919,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26924))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26919,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26919),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26919){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26919,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__26921){
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26921),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26921),null,cljs.core.dissoc.call(null,G__26921,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)),null));
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
com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26927,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26929 = (((k26927 instanceof cljs.core.Keyword))?k26927.fqn:null);
switch (G__26929) {
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
return cljs.core.get.call(null,self__.__extmap,k26927,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26828){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26828).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26828),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26828));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26926){
var self__ = this;
var G__26926__$1 = this;
return (new cljs.core.RecordIter((0),G__26926__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26926){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26930 = cljs.core.keyword_identical_QMARK_;
var expr__26931 = k__25676__auto__;
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(G__26926,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__26926,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__26926,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__26926,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26926,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26926,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26926,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26926,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26926,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26926,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26926,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26926,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26926,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26930.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26931))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26926,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26926),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26926){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26926,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__26928){
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26928),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26928),null,cljs.core.dissoc.call(null,G__26928,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)),null));
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
com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26934,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26936 = (((k26934 instanceof cljs.core.Keyword))?k26934.fqn:null);
switch (G__26936) {
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
return cljs.core.get.call(null,self__.__extmap,k26934,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26829){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26829).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26829),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26829));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26933){
var self__ = this;
var G__26933__$1 = this;
return (new cljs.core.RecordIter((0),G__26933__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (15 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26933){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26937 = cljs.core.keyword_identical_QMARK_;
var expr__26938 = k__25676__auto__;
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(G__26933,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__26933,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__26933,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__26933,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26933,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26933,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26933,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26933,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26933,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26933,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26933,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26933,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26933,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26933,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26937.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26938))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26933,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26933),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26933){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26933,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__26935){
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26935),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26935),null,cljs.core.dissoc.call(null,G__26935,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)),null));
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
com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26941,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26943 = (((k26941 instanceof cljs.core.Keyword))?k26941.fqn:null);
switch (G__26943) {
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
return cljs.core.get.call(null,self__.__extmap,k26941,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26830){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26830).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26830),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params26830));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26940){
var self__ = this;
var G__26940__$1 = this;
return (new cljs.core.RecordIter((0),G__26940__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (16 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26940){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26944 = cljs.core.keyword_identical_QMARK_;
var expr__26945 = k__25676__auto__;
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(G__26940,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__26940,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__26940,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__26940,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26940,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26940,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26940,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26940,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26940,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26940,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26940,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26940,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26940,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26940,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26940,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26944.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__26945))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26940,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26940),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26940){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__26940,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__26942){
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26942),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__26942),null,cljs.core.dissoc.call(null,G__26942,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)),null));
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
com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26948,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26950 = (((k26948 instanceof cljs.core.Keyword))?k26948.fqn:null);
switch (G__26950) {
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
return cljs.core.get.call(null,self__.__extmap,k26948,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26831){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26831).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params26831),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params26831));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26947){
var self__ = this;
var G__26947__$1 = this;
return (new cljs.core.RecordIter((0),G__26947__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (17 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26947){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26951 = cljs.core.keyword_identical_QMARK_;
var expr__26952 = k__25676__auto__;
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(G__26947,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__26947,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__26947,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__26947,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26947,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26947,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26947,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26947,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26947,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26947,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26947,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26947,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26947,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26947,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26947,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26947,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__26952))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__26947,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26947),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26947){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__26947,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__26949){
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__26949),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__26949),null,cljs.core.dissoc.call(null,G__26949,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)),null));
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
com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26955,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26957 = (((k26955 instanceof cljs.core.Keyword))?k26955.fqn:null);
switch (G__26957) {
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
return cljs.core.get.call(null,self__.__extmap,k26955,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26832){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26832).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params26832),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params26832));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26954){
var self__ = this;
var G__26954__$1 = this;
return (new cljs.core.RecordIter((0),G__26954__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (18 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26954){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26958 = cljs.core.keyword_identical_QMARK_;
var expr__26959 = k__25676__auto__;
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(G__26954,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__26954,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__26954,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__26954,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26954,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26954,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26954,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26954,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26954,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26954,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26954,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26954,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26954,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26954,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26954,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26954,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__26954,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__26959))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__26954,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26954),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26954){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__26954,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__26956){
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__26956),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__26956),null,cljs.core.dissoc.call(null,G__26956,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)),null));
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
com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26962,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26964 = (((k26962 instanceof cljs.core.Keyword))?k26962.fqn:null);
switch (G__26964) {
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
return cljs.core.get.call(null,self__.__extmap,k26962,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26833){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26833).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params26833),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params26833));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26961){
var self__ = this;
var G__26961__$1 = this;
return (new cljs.core.RecordIter((0),G__26961__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (19 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26961){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26965 = cljs.core.keyword_identical_QMARK_;
var expr__26966 = k__25676__auto__;
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(G__26961,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__26961,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__26961,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__26961,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26961,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26961,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26961,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26961,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26961,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26961,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26961,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26961,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26961,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26961,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26961,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26961,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__26961,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__26961,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__26966))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__26961,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26961),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26961){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__26961,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__26963){
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__26963),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__26963),null,cljs.core.dissoc.call(null,G__26963,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)),null));
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
com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25668__auto__,k__25669__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
return cljs.core._lookup.call(null,this__25668__auto____$1,k__25669__auto__,null);
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k26969,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__26971 = (((k26969 instanceof cljs.core.Keyword))?k26969.fqn:null);
switch (G__26971) {
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
return cljs.core.get.call(null,self__.__extmap,k26969,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__26309__auto__,dynamic_params26834){
var self__ = this;
var this__26309__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params26834).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params26834),com.rpl.specter.impl.late_resolve.call(null,self__.arg18,dynamic_params26834));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25682__auto__,writer__25683__auto__,opts__25684__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var pr_pair__25685__auto__ = ((function (this__25682__auto____$1){
return (function (keyval__25686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,cljs.core.pr_writer,""," ","",opts__25684__auto__,keyval__25686__auto__);
});})(this__25682__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25683__auto__,pr_pair__25685__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__25684__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26968){
var self__ = this;
var G__26968__$1 = this;
return (new cljs.core.RecordIter((0),G__26968__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25666__auto__){
var self__ = this;
var this__25666__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25662__auto__){
var self__ = this;
var this__25662__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25672__auto__){
var self__ = this;
var this__25672__auto____$1 = this;
return (20 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25663__auto__){
var self__ = this;
var this__25663__auto____$1 = this;
var h__25481__auto__ = self__.__hash;
if(!((h__25481__auto__ == null))){
return h__25481__auto__;
} else {
var h__25481__auto____$1 = cljs.core.hash_imap.call(null,this__25663__auto____$1);
self__.__hash = h__25481__auto____$1;

return h__25481__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25664__auto__,other__25665__auto__){
var self__ = this;
var this__25664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25034__auto__ = other__25665__auto__;
if(cljs.core.truth_(and__25034__auto__)){
var and__25034__auto____$1 = (this__25664__auto____$1.constructor === other__25665__auto__.constructor);
if(and__25034__auto____$1){
return cljs.core.equiv_map.call(null,this__25664__auto____$1,other__25665__auto__);
} else {
return and__25034__auto____$1;
}
} else {
return and__25034__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25677__auto__,k__25678__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__25678__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25677__auto____$1),self__.__meta),k__25678__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25678__auto__)),null));
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__26968){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__26972 = cljs.core.keyword_identical_QMARK_;
var expr__26973 = k__25676__auto__;
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(G__26968,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__26968,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__26968,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__26968,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26968,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26968,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26968,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26968,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26968,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__26968,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__26968,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__26968,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__26968,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__26968,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__26968,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__26968,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__26968,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__26968,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__26968,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26972.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__26973))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__26968,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__26968),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__26968){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__26968,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25673__auto__,entry__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25674__auto__)){
return cljs.core._assoc.call(null,this__25673__auto____$1,cljs.core._nth.call(null,entry__25674__auto__,(0)),cljs.core._nth.call(null,entry__25674__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25673__auto____$1,entry__25674__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__25702__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__26970){
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__26970),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__26970),null,cljs.core.dissoc.call(null,G__26970,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn26975,args26976){
var G__26978 = cljs.core.count.call(null,args26976);
switch (G__26978) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0.call(null,afn26975);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)),cljs.core.nth.call(null,args26976,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)),cljs.core.nth.call(null,args26976,(13)),cljs.core.nth.call(null,args26976,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)),cljs.core.nth.call(null,args26976,(13)),cljs.core.nth.call(null,args26976,(14)),cljs.core.nth.call(null,args26976,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)),cljs.core.nth.call(null,args26976,(13)),cljs.core.nth.call(null,args26976,(14)),cljs.core.nth.call(null,args26976,(15)),cljs.core.nth.call(null,args26976,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18.call(null,afn26975,cljs.core.nth.call(null,args26976,(0)),cljs.core.nth.call(null,args26976,(1)),cljs.core.nth.call(null,args26976,(2)),cljs.core.nth.call(null,args26976,(3)),cljs.core.nth.call(null,args26976,(4)),cljs.core.nth.call(null,args26976,(5)),cljs.core.nth.call(null,args26976,(6)),cljs.core.nth.call(null,args26976,(7)),cljs.core.nth.call(null,args26976,(8)),cljs.core.nth.call(null,args26976,(9)),cljs.core.nth.call(null,args26976,(10)),cljs.core.nth.call(null,args26976,(11)),cljs.core.nth.call(null,args26976,(12)),cljs.core.nth.call(null,args26976,(13)),cljs.core.nth.call(null,args26976,(14)),cljs.core.nth.call(null,args26976,(15)),cljs.core.nth.call(null,args26976,(16)),cljs.core.nth.call(null,args26976,(17)));

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
var vec__27005 = cljs.core.keep_indexed.call(null,(function (i,v){
if(cljs.core._EQ_.call(null,v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.call(null,vec__27005,(0),null);
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
return (function (p1__27008_SHARP_){
return com$rpl$specter$impl$resolve_arg_code.call(null,p1__27008_SHARP_,possible_params);
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
return (function (p1__27009_SHARP_){
return com$rpl$specter$impl$resolve_nav_code.call(null,p1__27009_SHARP_,possible_params);
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
if(cljs.core.truth_((function (){var or__25046__auto__ = cljs.core.set_QMARK_.call(null,code);
if(or__25046__auto__){
return or__25046__auto__;
} else {
var and__25034__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,code);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first.call(null,code));
} else {
return and__25034__auto__;
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
return (function (p1__27010_SHARP_){
return cljs.core.conj.call(null,p1__27010_SHARP_,e);
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
var args__26128__auto__ = [];
var len__26121__auto___27021 = arguments.length;
var i__26122__auto___27022 = (0);
while(true){
if((i__26122__auto___27022 < len__26121__auto___27021)){
args__26128__auto__.push((arguments[i__26122__auto___27022]));

var G__27023 = (i__26122__auto___27022 + (1));
i__26122__auto___27022 = G__27023;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__27015){
var map__27016 = p__27015;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var merge_fn = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__27016,map__27016__$1,merge_fn){
return (function() { 
var G__27024__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__27018 = res;
var ret = cljs.core.nth.call(null,vec__27018,(0),null);
var user_ret = cljs.core.nth.call(null,vec__27018,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__27024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27025__i = 0, G__27025__a = new Array(arguments.length -  0);
while (G__27025__i < G__27025__a.length) {G__27025__a[G__27025__i] = arguments[G__27025__i + 0]; ++G__27025__i;}
  args = new cljs.core.IndexedSeq(G__27025__a,0);
} 
return G__27024__delegate.call(this,args);};
G__27024.cljs$lang$maxFixedArity = 0;
G__27024.cljs$lang$applyTo = (function (arglist__27026){
var args = cljs.core.seq(arglist__27026);
return G__27024__delegate(args);
});
G__27024.cljs$core$IFn$_invoke$arity$variadic = G__27024__delegate;
return G__27024;
})()
;})(state,map__27016,map__27016__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq27011){
var G__27012 = cljs.core.first.call(null,seq27011);
var seq27011__$1 = cljs.core.next.call(null,seq27011);
var G__27013 = cljs.core.first.call(null,seq27011__$1);
var seq27011__$2 = cljs.core.next.call(null,seq27011__$1);
var G__27014 = cljs.core.first.call(null,seq27011__$2);
var seq27011__$3 = cljs.core.next.call(null,seq27011__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27012,G__27013,G__27014,seq27011__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___27028 = arguments.length;
var i__26122__auto___27029 = (0);
while(true){
if((i__26122__auto___27029 < len__26121__auto___27028)){
args__26128__auto__.push((arguments[i__26122__auto___27029]));

var G__27030 = (i__26122__auto___27029 + (1));
i__26122__auto___27029 = G__27030;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.call(null,"All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq27027){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27027));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=impl.js.map?rel=1484780630611
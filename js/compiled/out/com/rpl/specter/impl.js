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
var len__26121__auto___51149 = arguments.length;
var i__26122__auto___51150 = (0);
while(true){
if((i__26122__auto___51150 < len__26121__auto___51149)){
args__26128__auto__.push((arguments[i__26122__auto___51150]));

var G__51151 = (i__26122__auto___51150 + (1));
i__26122__auto___51150 = G__51151;
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

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq51148){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51148));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__51152 = null;
var G__51152__0 = (function (){
return v;
});
var G__51152__1 = (function (a1){
return v;
});
var G__51152__2 = (function (a1,a2){
return v;
});
var G__51152__3 = (function (a1,a2,a3){
return v;
});
var G__51152__4 = (function (a1,a2,a3,a4){
return v;
});
var G__51152__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__51152__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__51152__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__51152__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__51152__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__51152__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__51152__11 = (function() { 
var G__51153__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__51153 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__51154__i = 0, G__51154__a = new Array(arguments.length -  10);
while (G__51154__i < G__51154__a.length) {G__51154__a[G__51154__i] = arguments[G__51154__i + 10]; ++G__51154__i;}
  r = new cljs.core.IndexedSeq(G__51154__a,0);
} 
return G__51153__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__51153.cljs$lang$maxFixedArity = 10;
G__51153.cljs$lang$applyTo = (function (arglist__51155){
var a1 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a2 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a3 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a4 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a5 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a6 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a7 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a8 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a9 = cljs.core.first(arglist__51155);
arglist__51155 = cljs.core.next(arglist__51155);
var a10 = cljs.core.first(arglist__51155);
var r = cljs.core.rest(arglist__51155);
return G__51153__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__51153.cljs$core$IFn$_invoke$arity$variadic = G__51153__delegate;
return G__51153;
})()
;
G__51152 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__51152__0.call(this);
case 1:
return G__51152__1.call(this,a1);
case 2:
return G__51152__2.call(this,a1,a2);
case 3:
return G__51152__3.call(this,a1,a2,a3);
case 4:
return G__51152__4.call(this,a1,a2,a3,a4);
case 5:
return G__51152__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__51152__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__51152__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__51152__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__51152__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__51152__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__51156 = null;
if (arguments.length > 10) {
var G__51157__i = 0, G__51157__a = new Array(arguments.length -  10);
while (G__51157__i < G__51157__a.length) {G__51157__a[G__51157__i] = arguments[G__51157__i + 10]; ++G__51157__i;}
G__51156 = new cljs.core.IndexedSeq(G__51157__a,0);
}
return G__51152__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__51156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51152.cljs$lang$maxFixedArity = 10;
G__51152.cljs$lang$applyTo = G__51152__11.cljs$lang$applyTo;
G__51152.cljs$core$IFn$_invoke$arity$0 = G__51152__0;
G__51152.cljs$core$IFn$_invoke$arity$1 = G__51152__1;
G__51152.cljs$core$IFn$_invoke$arity$2 = G__51152__2;
G__51152.cljs$core$IFn$_invoke$arity$3 = G__51152__3;
G__51152.cljs$core$IFn$_invoke$arity$4 = G__51152__4;
G__51152.cljs$core$IFn$_invoke$arity$5 = G__51152__5;
G__51152.cljs$core$IFn$_invoke$arity$6 = G__51152__6;
G__51152.cljs$core$IFn$_invoke$arity$7 = G__51152__7;
G__51152.cljs$core$IFn$_invoke$arity$8 = G__51152__8;
G__51152.cljs$core$IFn$_invoke$arity$9 = G__51152__9;
G__51152.cljs$core$IFn$_invoke$arity$10 = G__51152__10;
G__51152.cljs$core$IFn$_invoke$arity$variadic = G__51152__11.cljs$core$IFn$_invoke$arity$variadic;
return G__51152;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__26128__auto__ = [];
var len__26121__auto___51159 = arguments.length;
var i__26122__auto___51160 = (0);
while(true){
if((i__26122__auto___51160 < len__26121__auto___51159)){
args__26128__auto__.push((arguments[i__26122__auto___51160]));

var G__51161 = (i__26122__auto___51160 + (1));
i__26122__auto___51160 = G__51161;
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

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq51158){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51158));
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

var G__51162 = (_ + (1));
_ = G__51162;
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51167 = (function (meta51168){
this.meta51168 = meta51168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51169,meta51168__$1){
var self__ = this;
var _51169__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51167(meta51168__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51169){
var self__ = this;
var _51169__$1 = this;
return self__.meta51168;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51167.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51167.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51167.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51168","meta51168",-2026168819,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51167.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51167.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51167";

com.rpl.specter.impl.t_com$rpl$specter$impl51167.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51167");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51167 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl51167(meta51168){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51167(meta51168));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51167(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51173 = (function (combine_two_navs,nav1,nav2,meta51174){
this.combine_two_navs = combine_two_navs;
this.nav1 = nav1;
this.nav2 = nav2;
this.meta51174 = meta51174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51175,meta51174__$1){
var self__ = this;
var _51175__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51173(self__.combine_two_navs,self__.nav1,self__.nav2,meta51174__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51175){
var self__ = this;
var _51175__$1 = this;
return self__.meta51174;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51173.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51173.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51173.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"combine-two-navs","combine-two-navs",-264439021,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null)], null)))], null)),new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta51174","meta51174",871073306,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51173.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51173.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51173";

com.rpl.specter.impl.t_com$rpl$specter$impl51173.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51173");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51173 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl51173(combine_two_navs__$1,nav1__$1,nav2__$1,meta51174){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51173(combine_two_navs__$1,nav1__$1,nav2__$1,meta51174));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51173(com$rpl$specter$impl$combine_two_navs,nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
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
var args51176 = [];
var len__26121__auto___51179 = arguments.length;
var i__26122__auto___51180 = (0);
while(true){
if((i__26122__auto___51180 < len__26121__auto___51179)){
args51176.push((arguments[i__26122__auto___51180]));

var G__51181 = (i__26122__auto___51180 + (1));
i__26122__auto___51180 = G__51181;
continue;
} else {
}
break;
}

var G__51178 = args51176.length;
switch (G__51178) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51176.length)].join('')));

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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51188 = (function (do_compiled_traverse,apath,structure,meta51189){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta51189 = meta51189;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51190,meta51189__$1){
var self__ = this;
var _51190__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51188(self__.do_compiled_traverse,self__.apath,self__.structure,meta51189__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51190){
var self__ = this;
var _51190__$1 = this;
return self__.meta51189;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51188.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51188.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl51188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta51189","meta51189",1647401171,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51188.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51188.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51188";

com.rpl.specter.impl.t_com$rpl$specter$impl51188.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51188");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51188 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl51188(do_compiled_traverse__$1,apath__$1,structure__$1,meta51189){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51188(do_compiled_traverse__$1,apath__$1,structure__$1,meta51189));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51188(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51192,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51194 = (((k51192 instanceof cljs.core.Keyword))?k51192.fqn:null);
switch (G__51194) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51192,else__25671__auto__);

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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51191){
var self__ = this;
var G__51191__$1 = this;
return (new cljs.core.RecordIter((0),G__51191__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51191){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51195 = cljs.core.keyword_identical_QMARK_;
var expr__51196 = k__25676__auto__;
if(cljs.core.truth_(pred__51195.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__51196))){
return (new com.rpl.specter.impl.LocalSym(G__51191,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51195.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__51196))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__51191,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51191),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51191){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__51191,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__51193){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__51193),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__51193),null,cljs.core.dissoc.call(null,G__51193,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51200,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51202 = (((k51200 instanceof cljs.core.Keyword))?k51200.fqn:null);
switch (G__51202) {
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
return cljs.core.get.call(null,self__.__extmap,k51200,else__25671__auto__);

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

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51199){
var self__ = this;
var G__51199__$1 = this;
return (new cljs.core.RecordIter((0),G__51199__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51199){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51203 = cljs.core.keyword_identical_QMARK_;
var expr__51204 = k__25676__auto__;
if(cljs.core.truth_(pred__51203.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__51204))){
return (new com.rpl.specter.impl.VarUse(G__51199,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51203.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__51204))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__51199,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51203.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__51204))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__51199,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51199),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51199){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__51199,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__51201){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__51201),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__51201),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__51201),null,cljs.core.dissoc.call(null,G__51201,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51208,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51210 = (((k51208 instanceof cljs.core.Keyword))?k51208.fqn:null);
switch (G__51210) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51208,else__25671__auto__);

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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51207){
var self__ = this;
var G__51207__$1 = this;
return (new cljs.core.RecordIter((0),G__51207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51207){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51211 = cljs.core.keyword_identical_QMARK_;
var expr__51212 = k__25676__auto__;
if(cljs.core.truth_(pred__51211.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__51212))){
return (new com.rpl.specter.impl.SpecialFormUse(G__51207,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51211.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__51212))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__51207,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51207),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51207){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__51207,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__51209){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__51209),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__51209),null,cljs.core.dissoc.call(null,G__51209,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51216,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51218 = (((k51216 instanceof cljs.core.Keyword))?k51216.fqn:null);
switch (G__51218) {
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
return cljs.core.get.call(null,self__.__extmap,k51216,else__25671__auto__);

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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51215){
var self__ = this;
var G__51215__$1 = this;
return (new cljs.core.RecordIter((0),G__51215__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51215){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51219 = cljs.core.keyword_identical_QMARK_;
var expr__51220 = k__25676__auto__;
if(cljs.core.truth_(pred__51219.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__51220))){
return (new com.rpl.specter.impl.FnInvocation(G__51215,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51219.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__51220))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__51215,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51219.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__51220))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__51215,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51215),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51215){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__51215,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__51217){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__51217),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__51217),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__51217),null,cljs.core.dissoc.call(null,G__51217,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51224,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51226 = (((k51224 instanceof cljs.core.Keyword))?k51224.fqn:null);
switch (G__51226) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51224,else__25671__auto__);

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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51223){
var self__ = this;
var G__51223__$1 = this;
return (new cljs.core.RecordIter((0),G__51223__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51223){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51227 = cljs.core.keyword_identical_QMARK_;
var expr__51228 = k__25676__auto__;
if(cljs.core.truth_(pred__51227.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__51228))){
return (new com.rpl.specter.impl.DynamicVal(G__51223,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51223),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51223){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__51223,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__51225){
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__51225),null,cljs.core.dissoc.call(null,G__51225,new cljs.core.Keyword(null,"code","code",1586293142)),null));
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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51232,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51234 = (((k51232 instanceof cljs.core.Keyword))?k51232.fqn:null);
switch (G__51234) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51232,else__25671__auto__);

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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51231){
var self__ = this;
var G__51231__$1 = this;
return (new cljs.core.RecordIter((0),G__51231__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51231){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51235 = cljs.core.keyword_identical_QMARK_;
var expr__51236 = k__25676__auto__;
if(cljs.core.truth_(pred__51235.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__51236))){
return (new com.rpl.specter.impl.DynamicPath(G__51231,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51231),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51231){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__51231,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__51233){
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__51233),null,cljs.core.dissoc.call(null,G__51233,new cljs.core.Keyword(null,"path","path",-188191168)),null));
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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51240,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51242 = (((k51240 instanceof cljs.core.Keyword))?k51240.fqn:null);
switch (G__51242) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51240,else__25671__auto__);

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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51239){
var self__ = this;
var G__51239__$1 = this;
return (new cljs.core.RecordIter((0),G__51239__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51239){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51243 = cljs.core.keyword_identical_QMARK_;
var expr__51244 = k__25676__auto__;
if(cljs.core.truth_(pred__51243.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__51244))){
return (new com.rpl.specter.impl.DynamicFunction(G__51239,self__.params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51243.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__51244))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__51239,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51239),null));
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51239){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__51239,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__51241){
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__51241),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__51241),null,cljs.core.dissoc.call(null,G__51241,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)),null));
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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51248,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51250 = (((k51248 instanceof cljs.core.Keyword))?k51248.fqn:null);
switch (G__51250) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51248,else__25671__auto__);

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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51247){
var self__ = this;
var G__51247__$1 = this;
return (new cljs.core.RecordIter((0),G__51247__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51247){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51251 = cljs.core.keyword_identical_QMARK_;
var expr__51252 = k__25676__auto__;
if(cljs.core.truth_(pred__51251.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__51252))){
return (new com.rpl.specter.impl.CachedPathInfo(G__51247,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51251.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__51252))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__51247,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51247),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51247){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__51247,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__51249){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__51249),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__51249),null,cljs.core.dissoc.call(null,G__51249,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)),null));
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51258 = (function (pred_STAR_,afn,meta51259){
this.pred_STAR_ = pred_STAR_;
this.afn = afn;
this.meta51259 = meta51259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51260,meta51259__$1){
var self__ = this;
var _51260__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51258(self__.pred_STAR_,self__.afn,meta51259__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51260){
var self__ = this;
var _51260__$1 = this;
return self__.meta51259;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51258.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51258.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl51258.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl51258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pred*","pred*",1451695560,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51259","meta51259",-613118524,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51258.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51258.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51258";

com.rpl.specter.impl.t_com$rpl$specter$impl51258.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51258");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51258 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl51258(pred_STAR___$1,afn__$1,meta51259){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51258(pred_STAR___$1,afn__$1,meta51259));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51258(com$rpl$specter$impl$pred_STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51264 = (function (collected_QMARK__STAR_,afn,meta51265){
this.collected_QMARK__STAR_ = collected_QMARK__STAR_;
this.afn = afn;
this.meta51265 = meta51265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51266,meta51265__$1){
var self__ = this;
var _51266__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51264(self__.collected_QMARK__STAR_,self__.afn,meta51265__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51266){
var self__ = this;
var _51266__$1 = this;
return self__.meta51265;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51264.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51264.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl51264.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl51264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"collected?*","collected?*",1609398998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta51265","meta51265",-1087203183,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51264.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51264.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51264";

com.rpl.specter.impl.t_com$rpl$specter$impl51264.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51264");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51264 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl51264(collected_QMARK__STAR___$1,afn__$1,meta51265){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51264(collected_QMARK__STAR___$1,afn__$1,meta51265));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51264(com$rpl$specter$impl$collected_QMARK__STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl51270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl51270 = (function (cell_nav,cell,meta51271){
this.cell_nav = cell_nav;
this.cell = cell;
this.meta51271 = meta51271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl51270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51272,meta51271__$1){
var self__ = this;
var _51272__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51270(self__.cell_nav,self__.cell,meta51271__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl51270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51272){
var self__ = this;
var _51272__$1 = this;
return self__.meta51271;
});

com.rpl.specter.impl.t_com$rpl$specter$impl51270.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51270.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51270.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cell-nav","cell-nav",-1155919053,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null)))], null)),new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta51271","meta51271",-507861921,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl51270.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl51270.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl51270";

com.rpl.specter.impl.t_com$rpl$specter$impl51270.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl51270");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl51270 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl51270(cell_nav__$1,cell__$1,meta51271){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl51270(cell_nav__$1,cell__$1,meta51271));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl51270(com$rpl$specter$impl$cell_nav,cell,cljs.core.PersistentArrayMap.EMPTY));
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
var args51479 = [];
var len__26121__auto___51502 = arguments.length;
var i__26122__auto___51503 = (0);
while(true){
if((i__26122__auto___51503 < len__26121__auto___51502)){
args51479.push((arguments[i__26122__auto___51503]));

var G__51504 = (i__26122__auto___51503 + (1));
i__26122__auto___51503 = G__51504;
continue;
} else {
}
break;
}

var G__51501 = args51479.length;
switch (G__51501) {
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
var argseq__26140__auto__ = (new cljs.core.IndexedSeq(args51479.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__26140__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__28548__auto__){
return nav1__28548__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__28548__auto__,nav2__28549__auto__){
return com.rpl.specter.impl.combine_two_navs.call(null,nav1__28548__auto__,nav2__28549__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__51292,G__51293,G__51294){
return com.rpl.specter.impl.comp_navs.call(null,G__51292,com.rpl.specter.impl.comp_navs.call(null,G__51293,G__51294));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__51295,G__51296,G__51297,G__51298){
return com.rpl.specter.impl.comp_navs.call(null,G__51295,com.rpl.specter.impl.comp_navs.call(null,G__51296,G__51297,G__51298));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__51299,G__51300,G__51301,G__51302,G__51303){
return com.rpl.specter.impl.comp_navs.call(null,G__51299,com.rpl.specter.impl.comp_navs.call(null,G__51300,G__51301,G__51302,G__51303));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__51304,G__51305,G__51306,G__51307,G__51308,G__51309){
return com.rpl.specter.impl.comp_navs.call(null,G__51304,com.rpl.specter.impl.comp_navs.call(null,G__51305,G__51306,G__51307,G__51308,G__51309));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__51310,G__51311,G__51312,G__51313,G__51314,G__51315,G__51316){
return com.rpl.specter.impl.comp_navs.call(null,G__51310,com.rpl.specter.impl.comp_navs.call(null,G__51311,G__51312,G__51313,G__51314,G__51315,G__51316));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__51317,G__51318,G__51319,G__51320,G__51321,G__51322,G__51323,G__51324){
return com.rpl.specter.impl.comp_navs.call(null,G__51317,com.rpl.specter.impl.comp_navs.call(null,G__51318,G__51319,G__51320,G__51321,G__51322,G__51323,G__51324));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__51325,G__51326,G__51327,G__51328,G__51329,G__51330,G__51331,G__51332,G__51333){
return com.rpl.specter.impl.comp_navs.call(null,G__51325,com.rpl.specter.impl.comp_navs.call(null,G__51326,G__51327,G__51328,G__51329,G__51330,G__51331,G__51332,G__51333));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__51334,G__51335,G__51336,G__51337,G__51338,G__51339,G__51340,G__51341,G__51342,G__51343){
return com.rpl.specter.impl.comp_navs.call(null,G__51334,com.rpl.specter.impl.comp_navs.call(null,G__51335,G__51336,G__51337,G__51338,G__51339,G__51340,G__51341,G__51342,G__51343));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__51344,G__51345,G__51346,G__51347,G__51348,G__51349,G__51350,G__51351,G__51352,G__51353,G__51354){
return com.rpl.specter.impl.comp_navs.call(null,G__51344,com.rpl.specter.impl.comp_navs.call(null,G__51345,G__51346,G__51347,G__51348,G__51349,G__51350,G__51351,G__51352,G__51353,G__51354));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__51355,G__51356,G__51357,G__51358,G__51359,G__51360,G__51361,G__51362,G__51363,G__51364,G__51365,G__51366){
return com.rpl.specter.impl.comp_navs.call(null,G__51355,com.rpl.specter.impl.comp_navs.call(null,G__51356,G__51357,G__51358,G__51359,G__51360,G__51361,G__51362,G__51363,G__51364,G__51365,G__51366));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__51367,G__51368,G__51369,G__51370,G__51371,G__51372,G__51373,G__51374,G__51375,G__51376,G__51377,G__51378,G__51379){
return com.rpl.specter.impl.comp_navs.call(null,G__51367,com.rpl.specter.impl.comp_navs.call(null,G__51368,G__51369,G__51370,G__51371,G__51372,G__51373,G__51374,G__51375,G__51376,G__51377,G__51378,G__51379));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__51380,G__51381,G__51382,G__51383,G__51384,G__51385,G__51386,G__51387,G__51388,G__51389,G__51390,G__51391,G__51392,G__51393){
return com.rpl.specter.impl.comp_navs.call(null,G__51380,com.rpl.specter.impl.comp_navs.call(null,G__51381,G__51382,G__51383,G__51384,G__51385,G__51386,G__51387,G__51388,G__51389,G__51390,G__51391,G__51392,G__51393));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__51394,G__51395,G__51396,G__51397,G__51398,G__51399,G__51400,G__51401,G__51402,G__51403,G__51404,G__51405,G__51406,G__51407,G__51408){
return com.rpl.specter.impl.comp_navs.call(null,G__51394,com.rpl.specter.impl.comp_navs.call(null,G__51395,G__51396,G__51397,G__51398,G__51399,G__51400,G__51401,G__51402,G__51403,G__51404,G__51405,G__51406,G__51407,G__51408));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__51409,G__51410,G__51411,G__51412,G__51413,G__51414,G__51415,G__51416,G__51417,G__51418,G__51419,G__51420,G__51421,G__51422,G__51423,G__51424){
return com.rpl.specter.impl.comp_navs.call(null,G__51409,com.rpl.specter.impl.comp_navs.call(null,G__51410,G__51411,G__51412,G__51413,G__51414,G__51415,G__51416,G__51417,G__51418,G__51419,G__51420,G__51421,G__51422,G__51423,G__51424));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__51425,G__51426,G__51427,G__51428,G__51429,G__51430,G__51431,G__51432,G__51433,G__51434,G__51435,G__51436,G__51437,G__51438,G__51439,G__51440,G__51441){
return com.rpl.specter.impl.comp_navs.call(null,G__51425,com.rpl.specter.impl.comp_navs.call(null,G__51426,G__51427,G__51428,G__51429,G__51430,G__51431,G__51432,G__51433,G__51434,G__51435,G__51436,G__51437,G__51438,G__51439,G__51440,G__51441));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__51442,G__51443,G__51444,G__51445,G__51446,G__51447,G__51448,G__51449,G__51450,G__51451,G__51452,G__51453,G__51454,G__51455,G__51456,G__51457,G__51458,G__51459){
return com.rpl.specter.impl.comp_navs.call(null,G__51442,com.rpl.specter.impl.comp_navs.call(null,G__51443,G__51444,G__51445,G__51446,G__51447,G__51448,G__51449,G__51450,G__51451,G__51452,G__51453,G__51454,G__51455,G__51456,G__51457,G__51458,G__51459));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__51460,G__51461,G__51462,G__51463,G__51464,G__51465,G__51466,G__51467,G__51468,G__51469,G__51470,G__51471,G__51472,G__51473,G__51474,G__51475,G__51476,G__51477,G__51478){
return com.rpl.specter.impl.comp_navs.call(null,G__51460,com.rpl.specter.impl.comp_navs.call(null,G__51461,G__51462,G__51463,G__51464,G__51465,G__51466,G__51467,G__51468,G__51469,G__51470,G__51471,G__51472,G__51473,G__51474,G__51475,G__51476,G__51477,G__51478));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__51273,G__51274,G__51275,G__51276,G__51277,G__51278,G__51279,G__51280,G__51281,G__51282,G__51283,G__51284,G__51285,G__51286,G__51287,G__51288,G__51289,G__51290,G__51291,rest__28550__auto__){
return com.rpl.specter.impl.comp_navs.call(null,com.rpl.specter.impl.comp_navs.call(null,G__51273,G__51274,G__51275,G__51276,G__51277,G__51278,G__51279,G__51280,G__51281,G__51282,G__51283,G__51284,G__51285,G__51286,G__51287,G__51288,G__51289,G__51290,G__51291),cljs.core.reduce.call(null,com.rpl.specter.impl.comp_navs,rest__28550__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq51480){
var G__51481 = cljs.core.first.call(null,seq51480);
var seq51480__$1 = cljs.core.next.call(null,seq51480);
var G__51482 = cljs.core.first.call(null,seq51480__$1);
var seq51480__$2 = cljs.core.next.call(null,seq51480__$1);
var G__51483 = cljs.core.first.call(null,seq51480__$2);
var seq51480__$3 = cljs.core.next.call(null,seq51480__$2);
var G__51484 = cljs.core.first.call(null,seq51480__$3);
var seq51480__$4 = cljs.core.next.call(null,seq51480__$3);
var G__51485 = cljs.core.first.call(null,seq51480__$4);
var seq51480__$5 = cljs.core.next.call(null,seq51480__$4);
var G__51486 = cljs.core.first.call(null,seq51480__$5);
var seq51480__$6 = cljs.core.next.call(null,seq51480__$5);
var G__51487 = cljs.core.first.call(null,seq51480__$6);
var seq51480__$7 = cljs.core.next.call(null,seq51480__$6);
var G__51488 = cljs.core.first.call(null,seq51480__$7);
var seq51480__$8 = cljs.core.next.call(null,seq51480__$7);
var G__51489 = cljs.core.first.call(null,seq51480__$8);
var seq51480__$9 = cljs.core.next.call(null,seq51480__$8);
var G__51490 = cljs.core.first.call(null,seq51480__$9);
var seq51480__$10 = cljs.core.next.call(null,seq51480__$9);
var G__51491 = cljs.core.first.call(null,seq51480__$10);
var seq51480__$11 = cljs.core.next.call(null,seq51480__$10);
var G__51492 = cljs.core.first.call(null,seq51480__$11);
var seq51480__$12 = cljs.core.next.call(null,seq51480__$11);
var G__51493 = cljs.core.first.call(null,seq51480__$12);
var seq51480__$13 = cljs.core.next.call(null,seq51480__$12);
var G__51494 = cljs.core.first.call(null,seq51480__$13);
var seq51480__$14 = cljs.core.next.call(null,seq51480__$13);
var G__51495 = cljs.core.first.call(null,seq51480__$14);
var seq51480__$15 = cljs.core.next.call(null,seq51480__$14);
var G__51496 = cljs.core.first.call(null,seq51480__$15);
var seq51480__$16 = cljs.core.next.call(null,seq51480__$15);
var G__51497 = cljs.core.first.call(null,seq51480__$16);
var seq51480__$17 = cljs.core.next.call(null,seq51480__$16);
var G__51498 = cljs.core.first.call(null,seq51480__$17);
var seq51480__$18 = cljs.core.next.call(null,seq51480__$17);
var G__51499 = cljs.core.first.call(null,seq51480__$18);
var seq51480__$19 = cljs.core.next.call(null,seq51480__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__51481,G__51482,G__51483,G__51484,G__51485,G__51486,G__51487,G__51488,G__51489,G__51490,G__51491,G__51492,G__51493,G__51494,G__51495,G__51496,G__51497,G__51498,G__51499,seq51480__$19);
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__51510,i){
var vec__51511 = p__51510;
var ranges = cljs.core.nth.call(null,vec__51511,(0),null);
var curr_start = cljs.core.nth.call(null,vec__51511,(1),null);
var curr_last = cljs.core.nth.call(null,vec__51511,(2),null);
var curr = vec__51511;
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
return cljs.core.reduce.call(null,(function (structure__$1,p__51518){
var vec__51519 = p__51518;
var s = cljs.core.nth.call(null,vec__51519,(0),null);
var e = cljs.core.nth.call(null,vec__51519,(1),null);
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
var G__51530 = orig;
o = G__51530;
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
var G__51531__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_.call(null,args))){
return cljs.core.apply.call(null,afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,afn,args);
}
};
var G__51531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51532__i = 0, G__51532__a = new Array(arguments.length -  0);
while (G__51532__i < G__51532__a.length) {G__51532__a[G__51532__i] = arguments[G__51532__i + 0]; ++G__51532__i;}
  args = new cljs.core.IndexedSeq(G__51532__a,0);
} 
return G__51531__delegate.call(this,args);};
G__51531.cljs$lang$maxFixedArity = 0;
G__51531.cljs$lang$applyTo = (function (arglist__51533){
var args = cljs.core.seq(arglist__51533);
return G__51531__delegate(args);
});
G__51531.cljs$core$IFn$_invoke$arity$variadic = G__51531__delegate;
return G__51531;
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
var args51535 = [];
var len__26121__auto___51538 = arguments.length;
var i__26122__auto___51539 = (0);
while(true){
if((i__26122__auto___51539 < len__26121__auto___51538)){
args51535.push((arguments[i__26122__auto___51539]));

var G__51540 = (i__26122__auto___51539 + (1));
i__26122__auto___51539 = G__51540;
continue;
} else {
}
break;
}

var G__51537 = args51535.length;
switch (G__51537) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51535.length)].join('')));

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
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,com.rpl.specter.impl.static_combine.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__51534_SHARP_){
return com.rpl.specter.impl.static_combine.call(null,p1__51534_SHARP_,false);
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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51543,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51545 = (((k51543 instanceof cljs.core.Keyword))?k51543.fqn:null);
switch (G__51545) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51543,else__25671__auto__);

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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51542){
var self__ = this;
var G__51542__$1 = this;
return (new cljs.core.RecordIter((0),G__51542__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51542){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51546 = cljs.core.keyword_identical_QMARK_;
var expr__51547 = k__25676__auto__;
if(cljs.core.truth_(pred__51546.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__51547))){
return (new com.rpl.specter.impl.LocalParam(G__51542,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51542),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51542){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__51542,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__51544){
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__51544),null,cljs.core.dissoc.call(null,G__51544,new cljs.core.Keyword(null,"idx","idx",1053688473)),null));
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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51550,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51552 = (((k51550 instanceof cljs.core.Keyword))?k51550.fqn:null);
switch (G__51552) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51550,else__25671__auto__);

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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51549){
var self__ = this;
var G__51549__$1 = this;
return (new cljs.core.RecordIter((0),G__51549__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51549){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51553 = cljs.core.keyword_identical_QMARK_;
var expr__51554 = k__25676__auto__;
if(cljs.core.truth_(pred__51553.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__51554))){
return (new com.rpl.specter.impl.StaticParam(G__51549,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51549),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51549){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__51549,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__51551){
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__51551),null,cljs.core.dissoc.call(null,G__51551,new cljs.core.Keyword(null,"val","val",128701612)),null));
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51577,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51579 = (((k51577 instanceof cljs.core.Keyword))?k51577.fqn:null);
switch (G__51579) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51577,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51556){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51556).call(null);
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51576){
var self__ = this;
var G__51576__$1 = this;
return (new cljs.core.RecordIter((0),G__51576__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51576){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51580 = cljs.core.keyword_identical_QMARK_;
var expr__51581 = k__25676__auto__;
if(cljs.core.truth_(pred__51580.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51581))){
return (new com.rpl.specter.impl.LateFn0(G__51576,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51576),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51576){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__51576,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__51578){
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51578),null,cljs.core.dissoc.call(null,G__51578,new cljs.core.Keyword(null,"fn","fn",-1175266204)),null));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51584,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51586 = (((k51584 instanceof cljs.core.Keyword))?k51584.fqn:null);
switch (G__51586) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51584,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51557){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51557).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51557));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51583){
var self__ = this;
var G__51583__$1 = this;
return (new cljs.core.RecordIter((0),G__51583__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51583){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51587 = cljs.core.keyword_identical_QMARK_;
var expr__51588 = k__25676__auto__;
if(cljs.core.truth_(pred__51587.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51588))){
return (new com.rpl.specter.impl.LateFn1(G__51583,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51587.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51588))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__51583,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51583),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51583){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__51583,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__51585){
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51585),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51585),null,cljs.core.dissoc.call(null,G__51585,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)),null));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51591,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51593 = (((k51591 instanceof cljs.core.Keyword))?k51591.fqn:null);
switch (G__51593) {
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
return cljs.core.get.call(null,self__.__extmap,k51591,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51558){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51558).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51558),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51558));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51590){
var self__ = this;
var G__51590__$1 = this;
return (new cljs.core.RecordIter((0),G__51590__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51590){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51594 = cljs.core.keyword_identical_QMARK_;
var expr__51595 = k__25676__auto__;
if(cljs.core.truth_(pred__51594.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51595))){
return (new com.rpl.specter.impl.LateFn2(G__51590,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51594.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51595))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__51590,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51594.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51595))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__51590,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51590),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25680__auto__){
var self__ = this;
var this__25680__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51590){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__51590,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__51592){
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51592),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51592),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51592),null,cljs.core.dissoc.call(null,G__51592,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)),null));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51598,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51600 = (((k51598 instanceof cljs.core.Keyword))?k51598.fqn:null);
switch (G__51600) {
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
return cljs.core.get.call(null,self__.__extmap,k51598,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51559){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51559).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51559),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51559),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51559));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51597){
var self__ = this;
var G__51597__$1 = this;
return (new cljs.core.RecordIter((0),G__51597__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51597){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51601 = cljs.core.keyword_identical_QMARK_;
var expr__51602 = k__25676__auto__;
if(cljs.core.truth_(pred__51601.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51602))){
return (new com.rpl.specter.impl.LateFn3(G__51597,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51601.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51602))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__51597,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51601.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51602))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__51597,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51601.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51602))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__51597,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51597),null));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51597){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51597,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__51599){
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51599),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51599),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51599),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51599),null,cljs.core.dissoc.call(null,G__51599,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)),null));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51605,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51607 = (((k51605 instanceof cljs.core.Keyword))?k51605.fqn:null);
switch (G__51607) {
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
return cljs.core.get.call(null,self__.__extmap,k51605,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51560){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51560).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51560),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51560),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51560),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51560));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51604){
var self__ = this;
var G__51604__$1 = this;
return (new cljs.core.RecordIter((0),G__51604__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51604){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51608 = cljs.core.keyword_identical_QMARK_;
var expr__51609 = k__25676__auto__;
if(cljs.core.truth_(pred__51608.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51609))){
return (new com.rpl.specter.impl.LateFn4(G__51604,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51608.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51609))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__51604,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51608.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51609))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__51604,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51608.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51609))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__51604,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51608.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51609))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51604,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51604),null));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51604){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51604,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__51606){
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51606),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51606),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51606),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51606),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51606),null,cljs.core.dissoc.call(null,G__51606,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)),null));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51612,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51614 = (((k51612 instanceof cljs.core.Keyword))?k51612.fqn:null);
switch (G__51614) {
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
return cljs.core.get.call(null,self__.__extmap,k51612,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51561){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51561).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51561),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51561),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51561),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51561),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51561));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51611){
var self__ = this;
var G__51611__$1 = this;
return (new cljs.core.RecordIter((0),G__51611__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51611){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51615 = cljs.core.keyword_identical_QMARK_;
var expr__51616 = k__25676__auto__;
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(G__51611,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__51611,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__51611,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__51611,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51611,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51615.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51616))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51611,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51611),null));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51611){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51611,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__51613){
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51613),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51613),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51613),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51613),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51613),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51613),null,cljs.core.dissoc.call(null,G__51613,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)),null));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51619,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51621 = (((k51619 instanceof cljs.core.Keyword))?k51619.fqn:null);
switch (G__51621) {
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
return cljs.core.get.call(null,self__.__extmap,k51619,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51562){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51562).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51562),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51562),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51562),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51562),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51562),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51562));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51618){
var self__ = this;
var G__51618__$1 = this;
return (new cljs.core.RecordIter((0),G__51618__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51618){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51622 = cljs.core.keyword_identical_QMARK_;
var expr__51623 = k__25676__auto__;
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(G__51618,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__51618,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__51618,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__51618,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51618,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51618,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51622.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51623))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51618,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51618),null));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51618){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51618,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__51620){
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51620),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51620),null,cljs.core.dissoc.call(null,G__51620,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)),null));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51626,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51628 = (((k51626 instanceof cljs.core.Keyword))?k51626.fqn:null);
switch (G__51628) {
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
return cljs.core.get.call(null,self__.__extmap,k51626,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51563){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51563).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51563),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51563));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51625){
var self__ = this;
var G__51625__$1 = this;
return (new cljs.core.RecordIter((0),G__51625__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51625){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51629 = cljs.core.keyword_identical_QMARK_;
var expr__51630 = k__25676__auto__;
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(G__51625,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__51625,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__51625,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__51625,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51625,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51625,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51625,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51629.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51630))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51625,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51625),null));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51625){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51625,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__51627){
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51627),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51627),null,cljs.core.dissoc.call(null,G__51627,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51633,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51635 = (((k51633 instanceof cljs.core.Keyword))?k51633.fqn:null);
switch (G__51635) {
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
return cljs.core.get.call(null,self__.__extmap,k51633,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51564){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51564).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51564),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51564));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51632){
var self__ = this;
var G__51632__$1 = this;
return (new cljs.core.RecordIter((0),G__51632__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51632){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51636 = cljs.core.keyword_identical_QMARK_;
var expr__51637 = k__25676__auto__;
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(G__51632,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__51632,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__51632,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__51632,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51632,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51632,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51632,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51632,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51636.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51637))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51632,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51632),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51632){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51632,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__51634){
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51634),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51634),null,cljs.core.dissoc.call(null,G__51634,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51640,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51642 = (((k51640 instanceof cljs.core.Keyword))?k51640.fqn:null);
switch (G__51642) {
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
return cljs.core.get.call(null,self__.__extmap,k51640,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51565){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51565).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51565),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51565));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51639){
var self__ = this;
var G__51639__$1 = this;
return (new cljs.core.RecordIter((0),G__51639__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51639){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51643 = cljs.core.keyword_identical_QMARK_;
var expr__51644 = k__25676__auto__;
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(G__51639,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__51639,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__51639,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__51639,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51639,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51639,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51639,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51639,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51639,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51643.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51644))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51639,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51639),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51639){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51639,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__51641){
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51641),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51641),null,cljs.core.dissoc.call(null,G__51641,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51647,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51649 = (((k51647 instanceof cljs.core.Keyword))?k51647.fqn:null);
switch (G__51649) {
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
return cljs.core.get.call(null,self__.__extmap,k51647,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51566){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51566).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51566),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51566));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51646){
var self__ = this;
var G__51646__$1 = this;
return (new cljs.core.RecordIter((0),G__51646__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51646){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51650 = cljs.core.keyword_identical_QMARK_;
var expr__51651 = k__25676__auto__;
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(G__51646,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__51646,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__51646,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__51646,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51646,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51646,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51646,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51646,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51646,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51646,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51650.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51651))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51646,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51646),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51646){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51646,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__51648){
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51648),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51648),null,cljs.core.dissoc.call(null,G__51648,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51654,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51656 = (((k51654 instanceof cljs.core.Keyword))?k51654.fqn:null);
switch (G__51656) {
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
return cljs.core.get.call(null,self__.__extmap,k51654,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51567){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51567).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51567),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51567));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51653){
var self__ = this;
var G__51653__$1 = this;
return (new cljs.core.RecordIter((0),G__51653__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51653){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51657 = cljs.core.keyword_identical_QMARK_;
var expr__51658 = k__25676__auto__;
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(G__51653,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__51653,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__51653,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__51653,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51653,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51653,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51653,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51653,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51653,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51653,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51653,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51657.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51658))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51653,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51653),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51653){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51653,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__51655){
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51655),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51655),null,cljs.core.dissoc.call(null,G__51655,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51661,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51663 = (((k51661 instanceof cljs.core.Keyword))?k51661.fqn:null);
switch (G__51663) {
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
return cljs.core.get.call(null,self__.__extmap,k51661,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51568){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51568).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51568),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51568));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51660){
var self__ = this;
var G__51660__$1 = this;
return (new cljs.core.RecordIter((0),G__51660__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51660){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51664 = cljs.core.keyword_identical_QMARK_;
var expr__51665 = k__25676__auto__;
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(G__51660,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__51660,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__51660,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__51660,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51660,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51660,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51660,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51660,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51660,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51660,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51660,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51660,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51664.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51665))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51660,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51660),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51660){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51660,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__51662){
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51662),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51662),null,cljs.core.dissoc.call(null,G__51662,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51668,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51670 = (((k51668 instanceof cljs.core.Keyword))?k51668.fqn:null);
switch (G__51670) {
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
return cljs.core.get.call(null,self__.__extmap,k51668,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51569){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51569).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51569),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51569));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51667){
var self__ = this;
var G__51667__$1 = this;
return (new cljs.core.RecordIter((0),G__51667__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51667){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51671 = cljs.core.keyword_identical_QMARK_;
var expr__51672 = k__25676__auto__;
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(G__51667,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__51667,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__51667,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__51667,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51667,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51667,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51667,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51667,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51667,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51667,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51667,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51667,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51667,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51672))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51667,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51667),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51667){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51667,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__51669){
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51669),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51669),null,cljs.core.dissoc.call(null,G__51669,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51675,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51677 = (((k51675 instanceof cljs.core.Keyword))?k51675.fqn:null);
switch (G__51677) {
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
return cljs.core.get.call(null,self__.__extmap,k51675,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51570){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51570).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51570),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51570));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51674){
var self__ = this;
var G__51674__$1 = this;
return (new cljs.core.RecordIter((0),G__51674__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51674){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51678 = cljs.core.keyword_identical_QMARK_;
var expr__51679 = k__25676__auto__;
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(G__51674,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__51674,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__51674,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__51674,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51674,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51674,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51674,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51674,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51674,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51674,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51674,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51674,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51674,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51674,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51678.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51679))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51674,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51674),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51674){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51674,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__51676){
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51676),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51676),null,cljs.core.dissoc.call(null,G__51676,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51682,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51684 = (((k51682 instanceof cljs.core.Keyword))?k51682.fqn:null);
switch (G__51684) {
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
return cljs.core.get.call(null,self__.__extmap,k51682,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51571){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51571).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51571),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params51571));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51681){
var self__ = this;
var G__51681__$1 = this;
return (new cljs.core.RecordIter((0),G__51681__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51681){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51685 = cljs.core.keyword_identical_QMARK_;
var expr__51686 = k__25676__auto__;
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(G__51681,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__51681,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__51681,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__51681,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51681,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51681,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51681,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51681,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51681,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51681,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51681,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51681,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51681,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51681,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51681,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51685.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51686))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51681,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51681),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51681){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51681,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__51683){
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51683),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51683),null,cljs.core.dissoc.call(null,G__51683,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51689,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51691 = (((k51689 instanceof cljs.core.Keyword))?k51689.fqn:null);
switch (G__51691) {
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
return cljs.core.get.call(null,self__.__extmap,k51689,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51572){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51572).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params51572),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params51572));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51688){
var self__ = this;
var G__51688__$1 = this;
return (new cljs.core.RecordIter((0),G__51688__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51688){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51692 = cljs.core.keyword_identical_QMARK_;
var expr__51693 = k__25676__auto__;
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(G__51688,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__51688,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__51688,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__51688,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51688,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51688,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51688,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51688,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51688,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51688,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51688,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51688,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51688,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51688,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51688,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51688,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51692.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51693))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51688,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51688),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51688){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51688,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__51690){
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51690),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51690),null,cljs.core.dissoc.call(null,G__51690,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51696,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51698 = (((k51696 instanceof cljs.core.Keyword))?k51696.fqn:null);
switch (G__51698) {
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
return cljs.core.get.call(null,self__.__extmap,k51696,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51573){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51573).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params51573),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params51573));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51695){
var self__ = this;
var G__51695__$1 = this;
return (new cljs.core.RecordIter((0),G__51695__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51695){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51699 = cljs.core.keyword_identical_QMARK_;
var expr__51700 = k__25676__auto__;
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(G__51695,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__51695,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__51695,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__51695,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51695,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51695,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51695,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51695,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51695,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51695,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51695,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51695,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51695,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51695,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51695,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51695,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51695,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51699.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51700))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51695,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51695),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51695){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51695,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__51697){
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51697),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51697),null,cljs.core.dissoc.call(null,G__51697,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51703,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51705 = (((k51703 instanceof cljs.core.Keyword))?k51703.fqn:null);
switch (G__51705) {
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
return cljs.core.get.call(null,self__.__extmap,k51703,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51574){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51574).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params51574),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params51574));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51702){
var self__ = this;
var G__51702__$1 = this;
return (new cljs.core.RecordIter((0),G__51702__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51702){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51706 = cljs.core.keyword_identical_QMARK_;
var expr__51707 = k__25676__auto__;
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(G__51702,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__51702,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__51702,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__51702,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51702,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51702,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51702,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51702,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51702,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51702,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51702,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51702,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51702,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51702,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51702,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51702,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51702,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51702,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51706.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51707))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51702,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51702),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51702){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__51702,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__51704){
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51704),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__51704),null,cljs.core.dissoc.call(null,G__51704,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25670__auto__,k51710,else__25671__auto__){
var self__ = this;
var this__25670__auto____$1 = this;
var G__51712 = (((k51710 instanceof cljs.core.Keyword))?k51710.fqn:null);
switch (G__51712) {
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
return cljs.core.get.call(null,self__.__extmap,k51710,else__25671__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__28574__auto__,dynamic_params51575){
var self__ = this;
var this__28574__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params51575).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params51575),com.rpl.specter.impl.late_resolve.call(null,self__.arg18,dynamic_params51575));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51709){
var self__ = this;
var G__51709__$1 = this;
return (new cljs.core.RecordIter((0),G__51709__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25675__auto__,k__25676__auto__,G__51709){
var self__ = this;
var this__25675__auto____$1 = this;
var pred__51713 = cljs.core.keyword_identical_QMARK_;
var expr__51714 = k__25676__auto__;
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(G__51709,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__51709,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__51709,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__51709,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51709,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51709,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51709,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51709,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51709,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51709,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51709,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51709,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51709,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51709,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51709,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51709,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51709,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51709,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51709,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51713.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__51714))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__51709,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25676__auto__,G__51709),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25667__auto__,G__51709){
var self__ = this;
var this__25667__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__51709,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__51711){
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__51711),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__51711),null,cljs.core.dissoc.call(null,G__51711,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn51716,args51717){
var G__51719 = cljs.core.count.call(null,args51717);
switch (G__51719) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0.call(null,afn51716);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)),cljs.core.nth.call(null,args51717,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)),cljs.core.nth.call(null,args51717,(13)),cljs.core.nth.call(null,args51717,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)),cljs.core.nth.call(null,args51717,(13)),cljs.core.nth.call(null,args51717,(14)),cljs.core.nth.call(null,args51717,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)),cljs.core.nth.call(null,args51717,(13)),cljs.core.nth.call(null,args51717,(14)),cljs.core.nth.call(null,args51717,(15)),cljs.core.nth.call(null,args51717,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18.call(null,afn51716,cljs.core.nth.call(null,args51717,(0)),cljs.core.nth.call(null,args51717,(1)),cljs.core.nth.call(null,args51717,(2)),cljs.core.nth.call(null,args51717,(3)),cljs.core.nth.call(null,args51717,(4)),cljs.core.nth.call(null,args51717,(5)),cljs.core.nth.call(null,args51717,(6)),cljs.core.nth.call(null,args51717,(7)),cljs.core.nth.call(null,args51717,(8)),cljs.core.nth.call(null,args51717,(9)),cljs.core.nth.call(null,args51717,(10)),cljs.core.nth.call(null,args51717,(11)),cljs.core.nth.call(null,args51717,(12)),cljs.core.nth.call(null,args51717,(13)),cljs.core.nth.call(null,args51717,(14)),cljs.core.nth.call(null,args51717,(15)),cljs.core.nth.call(null,args51717,(16)),cljs.core.nth.call(null,args51717,(17)));

break;
default:
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"Cannot have late function with more than 18 args")));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn.call(null,com.rpl.specter.impl.__GT_StaticParam.call(null,afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn.call(null,afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__51746 = cljs.core.keep_indexed.call(null,(function (i,v){
if(cljs.core._EQ_.call(null,v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.call(null,vec__51746,(0),null);
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
return (function (p1__51749_SHARP_){
return com$rpl$specter$impl$resolve_arg_code.call(null,p1__51749_SHARP_,possible_params);
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
return (function (p1__51750_SHARP_){
return com$rpl$specter$impl$resolve_nav_code.call(null,p1__51750_SHARP_,possible_params);
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
return (function (p1__51751_SHARP_){
return cljs.core.conj.call(null,p1__51751_SHARP_,e);
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
var len__26121__auto___51762 = arguments.length;
var i__26122__auto___51763 = (0);
while(true){
if((i__26122__auto___51763 < len__26121__auto___51762)){
args__26128__auto__.push((arguments[i__26122__auto___51763]));

var G__51764 = (i__26122__auto___51763 + (1));
i__26122__auto___51763 = G__51764;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__51756){
var map__51757 = p__51756;
var map__51757__$1 = ((((!((map__51757 == null)))?((((map__51757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51757):map__51757);
var merge_fn = cljs.core.get.call(null,map__51757__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__51757,map__51757__$1,merge_fn){
return (function() { 
var G__51765__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__51759 = res;
var ret = cljs.core.nth.call(null,vec__51759,(0),null);
var user_ret = cljs.core.nth.call(null,vec__51759,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__51765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51766__i = 0, G__51766__a = new Array(arguments.length -  0);
while (G__51766__i < G__51766__a.length) {G__51766__a[G__51766__i] = arguments[G__51766__i + 0]; ++G__51766__i;}
  args = new cljs.core.IndexedSeq(G__51766__a,0);
} 
return G__51765__delegate.call(this,args);};
G__51765.cljs$lang$maxFixedArity = 0;
G__51765.cljs$lang$applyTo = (function (arglist__51767){
var args = cljs.core.seq(arglist__51767);
return G__51765__delegate(args);
});
G__51765.cljs$core$IFn$_invoke$arity$variadic = G__51765__delegate;
return G__51765;
})()
;})(state,map__51757,map__51757__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq51752){
var G__51753 = cljs.core.first.call(null,seq51752);
var seq51752__$1 = cljs.core.next.call(null,seq51752);
var G__51754 = cljs.core.first.call(null,seq51752__$1);
var seq51752__$2 = cljs.core.next.call(null,seq51752__$1);
var G__51755 = cljs.core.first.call(null,seq51752__$2);
var seq51752__$3 = cljs.core.next.call(null,seq51752__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51753,G__51754,G__51755,seq51752__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___51769 = arguments.length;
var i__26122__auto___51770 = (0);
while(true){
if((i__26122__auto___51770 < len__26121__auto___51769)){
args__26128__auto__.push((arguments[i__26122__auto___51770]));

var G__51771 = (i__26122__auto___51770 + (1));
i__26122__auto___51770 = G__51771;
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

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq51768){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51768));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=impl.js.map?rel=1484333380920
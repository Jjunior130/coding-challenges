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
var args__7501__auto__ = [];
var len__7494__auto___9985 = arguments.length;
var i__7495__auto___9986 = (0);
while(true){
if((i__7495__auto___9986 < len__7494__auto___9985)){
args__7501__auto__.push((arguments[i__7495__auto___9986]));

var G__9987 = (i__7495__auto___9986 + (1));
i__7495__auto___9986 = G__9987;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((0) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7502__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq9984){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9984));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__9988 = null;
var G__9988__0 = (function (){
return v;
});
var G__9988__1 = (function (a1){
return v;
});
var G__9988__2 = (function (a1,a2){
return v;
});
var G__9988__3 = (function (a1,a2,a3){
return v;
});
var G__9988__4 = (function (a1,a2,a3,a4){
return v;
});
var G__9988__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__9988__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__9988__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__9988__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__9988__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__9988__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__9988__11 = (function() { 
var G__9989__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__9989 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__9990__i = 0, G__9990__a = new Array(arguments.length -  10);
while (G__9990__i < G__9990__a.length) {G__9990__a[G__9990__i] = arguments[G__9990__i + 10]; ++G__9990__i;}
  r = new cljs.core.IndexedSeq(G__9990__a,0);
} 
return G__9989__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__9989.cljs$lang$maxFixedArity = 10;
G__9989.cljs$lang$applyTo = (function (arglist__9991){
var a1 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a2 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a3 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a4 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a5 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a6 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a7 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a8 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a9 = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var a10 = cljs.core.first(arglist__9991);
var r = cljs.core.rest(arglist__9991);
return G__9989__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__9989.cljs$core$IFn$_invoke$arity$variadic = G__9989__delegate;
return G__9989;
})()
;
G__9988 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__9988__0.call(this);
case 1:
return G__9988__1.call(this,a1);
case 2:
return G__9988__2.call(this,a1,a2);
case 3:
return G__9988__3.call(this,a1,a2,a3);
case 4:
return G__9988__4.call(this,a1,a2,a3,a4);
case 5:
return G__9988__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__9988__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__9988__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__9988__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__9988__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__9988__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__9992 = null;
if (arguments.length > 10) {
var G__9993__i = 0, G__9993__a = new Array(arguments.length -  10);
while (G__9993__i < G__9993__a.length) {G__9993__a[G__9993__i] = arguments[G__9993__i + 10]; ++G__9993__i;}
G__9992 = new cljs.core.IndexedSeq(G__9993__a,0);
}
return G__9988__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__9992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9988.cljs$lang$maxFixedArity = 10;
G__9988.cljs$lang$applyTo = G__9988__11.cljs$lang$applyTo;
G__9988.cljs$core$IFn$_invoke$arity$0 = G__9988__0;
G__9988.cljs$core$IFn$_invoke$arity$1 = G__9988__1;
G__9988.cljs$core$IFn$_invoke$arity$2 = G__9988__2;
G__9988.cljs$core$IFn$_invoke$arity$3 = G__9988__3;
G__9988.cljs$core$IFn$_invoke$arity$4 = G__9988__4;
G__9988.cljs$core$IFn$_invoke$arity$5 = G__9988__5;
G__9988.cljs$core$IFn$_invoke$arity$6 = G__9988__6;
G__9988.cljs$core$IFn$_invoke$arity$7 = G__9988__7;
G__9988.cljs$core$IFn$_invoke$arity$8 = G__9988__8;
G__9988.cljs$core$IFn$_invoke$arity$9 = G__9988__9;
G__9988.cljs$core$IFn$_invoke$arity$10 = G__9988__10;
G__9988.cljs$core$IFn$_invoke$arity$variadic = G__9988__11.cljs$core$IFn$_invoke$arity$variadic;
return G__9988;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__7501__auto__ = [];
var len__7494__auto___9995 = arguments.length;
var i__7495__auto___9996 = (0);
while(true){
if((i__7495__auto___9996 < len__7494__auto___9995)){
args__7501__auto__.push((arguments[i__7495__auto___9996]));

var G__9997 = (i__7495__auto___9996 + (1));
i__7495__auto___9996 = G__9997;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((0) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__7502__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq9994){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9994));
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
var start__7359__auto__ = cljs.core.system_time.call(null);
var ret__7360__auto__ = (function (){var n__7334__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__7334__auto__)){
afn.call(null);

var G__9998 = (_ + (1));
_ = G__9998;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__7359__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__7360__auto__;
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
var x__7082__auto__ = (((paths == null))?null:paths);
var m__7083__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,paths);
} else {
var m__7083__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,paths);
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
var x__7082__auto__ = (((this$ == null))?null:this$);
var m__7083__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,this$);
} else {
var m__7083__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,this$);
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10003 = (function (meta10004){
this.meta10004 = meta10004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10005,meta10004__$1){
var self__ = this;
var _10005__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10003(meta10004__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10005){
var self__ = this;
var _10005__$1 = this;
return self__.meta10004;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10003.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10004","meta10004",546265565,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10003.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10003.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10003";

com.rpl.specter.impl.t_com$rpl$specter$impl10003.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10003");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10003 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl10003(meta10004){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10003(meta10004));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10003(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10009 = (function (combine_two_navs,nav1,nav2,meta10010){
this.combine_two_navs = combine_two_navs;
this.nav1 = nav1;
this.nav2 = nav2;
this.meta10010 = meta10010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10011,meta10010__$1){
var self__ = this;
var _10011__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10009(self__.combine_two_navs,self__.nav1,self__.nav2,meta10010__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10011){
var self__ = this;
var _10011__$1 = this;
return self__.meta10010;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10009.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10009.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10009.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_.call(null,self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"combine-two-navs","combine-two-navs",-264439021,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null)], null)))], null)),new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta10010","meta10010",-1141249837,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10009.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10009.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10009";

com.rpl.specter.impl.t_com$rpl$specter$impl10009.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10009");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10009 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl10009(combine_two_navs__$1,nav1__$1,nav2__$1,meta10010){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10009(combine_two_navs__$1,nav1__$1,nav2__$1,meta10010));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10009(com$rpl$specter$impl$combine_two_navs,nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
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
var x__7082__auto__ = (((cell == null))?null:cell);
var m__7083__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,cell,x);
} else {
var m__7083__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args10012 = [];
var len__7494__auto___10015 = arguments.length;
var i__7495__auto___10016 = (0);
while(true){
if((i__7495__auto___10016 < len__7494__auto___10015)){
args10012.push((arguments[i__7495__auto___10016]));

var G__10017 = (i__7495__auto___10016 + (1));
i__7495__auto___10016 = G__10017;
continue;
} else {
}
break;
}

var G__10014 = args10012.length;
switch (G__10014) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10012.length)].join('')));

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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10024 = (function (do_compiled_traverse,apath,structure,meta10025){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta10025 = meta10025;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10026,meta10025__$1){
var self__ = this;
var _10026__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10024(self__.do_compiled_traverse,self__.apath,self__.structure,meta10025__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10026){
var self__ = this;
var _10026__$1 = this;
return self__.meta10025;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10024.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10024.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl10024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta10025","meta10025",-199742827,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10024.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10024.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10024";

com.rpl.specter.impl.t_com$rpl$specter$impl10024.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10024");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10024 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl10024(do_compiled_traverse__$1,apath__$1,structure__$1,meta10025){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10024(do_compiled_traverse__$1,apath__$1,structure__$1,meta10025));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10024(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
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
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10028,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10030 = (((k10028 instanceof cljs.core.Keyword))?k10028.fqn:null);
switch (G__10030) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10028,else__7044__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10027){
var self__ = this;
var G__10027__$1 = this;
return (new cljs.core.RecordIter((0),G__10027__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10027){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10031 = cljs.core.keyword_identical_QMARK_;
var expr__10032 = k__7049__auto__;
if(cljs.core.truth_(pred__10031.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10032))){
return (new com.rpl.specter.impl.LocalSym(G__10027,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10031.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__10032))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__10027,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10027),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10027){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__10027,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__10029){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10029),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__10029),null,cljs.core.dissoc.call(null,G__10029,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10036,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10038 = (((k10036 instanceof cljs.core.Keyword))?k10036.fqn:null);
switch (G__10038) {
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
return cljs.core.get.call(null,self__.__extmap,k10036,else__7044__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10035){
var self__ = this;
var G__10035__$1 = this;
return (new cljs.core.RecordIter((0),G__10035__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10035){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10039 = cljs.core.keyword_identical_QMARK_;
var expr__10040 = k__7049__auto__;
if(cljs.core.truth_(pred__10039.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10040))){
return (new com.rpl.specter.impl.VarUse(G__10035,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10039.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__10040))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__10035,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10039.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__10040))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__10035,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10035),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10035){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__10035,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__10037){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10037),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__10037),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__10037),null,cljs.core.dissoc.call(null,G__10037,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10044,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10046 = (((k10044 instanceof cljs.core.Keyword))?k10044.fqn:null);
switch (G__10046) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10044,else__7044__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10043){
var self__ = this;
var G__10043__$1 = this;
return (new cljs.core.RecordIter((0),G__10043__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10043){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10047 = cljs.core.keyword_identical_QMARK_;
var expr__10048 = k__7049__auto__;
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10048))){
return (new com.rpl.specter.impl.SpecialFormUse(G__10043,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10048))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__10043,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10043),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10043){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__10043,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__10045){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10045),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10045),null,cljs.core.dissoc.call(null,G__10045,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10052,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10054 = (((k10052 instanceof cljs.core.Keyword))?k10052.fqn:null);
switch (G__10054) {
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
return cljs.core.get.call(null,self__.__extmap,k10052,else__7044__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10051){
var self__ = this;
var G__10051__$1 = this;
return (new cljs.core.RecordIter((0),G__10051__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10051){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10055 = cljs.core.keyword_identical_QMARK_;
var expr__10056 = k__7049__auto__;
if(cljs.core.truth_(pred__10055.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__10056))){
return (new com.rpl.specter.impl.FnInvocation(G__10051,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10055.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10056))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__10051,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10055.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10056))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__10051,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10051),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10051){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__10051,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__10053){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__10053),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10053),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10053),null,cljs.core.dissoc.call(null,G__10053,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10060,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10062 = (((k10060 instanceof cljs.core.Keyword))?k10060.fqn:null);
switch (G__10062) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10060,else__7044__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10059){
var self__ = this;
var G__10059__$1 = this;
return (new cljs.core.RecordIter((0),G__10059__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10059){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10063 = cljs.core.keyword_identical_QMARK_;
var expr__10064 = k__7049__auto__;
if(cljs.core.truth_(pred__10063.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__10064))){
return (new com.rpl.specter.impl.DynamicVal(G__10059,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10059),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10059){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__10059,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__10061){
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__10061),null,cljs.core.dissoc.call(null,G__10061,new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10068,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10070 = (((k10068 instanceof cljs.core.Keyword))?k10068.fqn:null);
switch (G__10070) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10068,else__7044__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10067){
var self__ = this;
var G__10067__$1 = this;
return (new cljs.core.RecordIter((0),G__10067__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10067){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10071 = cljs.core.keyword_identical_QMARK_;
var expr__10072 = k__7049__auto__;
if(cljs.core.truth_(pred__10071.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__10072))){
return (new com.rpl.specter.impl.DynamicPath(G__10067,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10067),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10067){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__10067,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__10069){
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__10069),null,cljs.core.dissoc.call(null,G__10069,new cljs.core.Keyword(null,"path","path",-188191168)),null));
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
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10076,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10078 = (((k10076 instanceof cljs.core.Keyword))?k10076.fqn:null);
switch (G__10078) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10076,else__7044__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10075){
var self__ = this;
var G__10075__$1 = this;
return (new cljs.core.RecordIter((0),G__10075__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10075){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10079 = cljs.core.keyword_identical_QMARK_;
var expr__10080 = k__7049__auto__;
if(cljs.core.truth_(pred__10079.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__10080))){
return (new com.rpl.specter.impl.DynamicFunction(G__10075,self__.params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10079.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10080))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__10075,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10075),null));
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10075){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__10075,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params){
return (new com.rpl.specter.impl.DynamicFunction(op,params,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__10077){
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__10077),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10077),null,cljs.core.dissoc.call(null,G__10077,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235)),null));
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
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10084,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10086 = (((k10084 instanceof cljs.core.Keyword))?k10084.fqn:null);
switch (G__10086) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10084,else__7044__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10083){
var self__ = this;
var G__10083__$1 = this;
return (new cljs.core.RecordIter((0),G__10083__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10083){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10087 = cljs.core.keyword_identical_QMARK_;
var expr__10088 = k__7049__auto__;
if(cljs.core.truth_(pred__10087.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__10088))){
return (new com.rpl.specter.impl.CachedPathInfo(G__10083,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10087.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__10088))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__10083,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10083),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10083){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__10083,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__10085){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__10085),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__10085),null,cljs.core.dissoc.call(null,G__10085,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)),null));
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10094 = (function (pred_STAR_,afn,meta10095){
this.pred_STAR_ = pred_STAR_;
this.afn = afn;
this.meta10095 = meta10095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10096,meta10095__$1){
var self__ = this;
var _10096__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10094(self__.pred_STAR_,self__.afn,meta10095__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10096){
var self__ = this;
var _10096__$1 = this;
return self__.meta10095;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10094.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10094.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10094.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,structure))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pred*","pred*",1451695560,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta10095","meta10095",1859666709,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10094.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10094.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10094";

com.rpl.specter.impl.t_com$rpl$specter$impl10094.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10094");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10094 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl10094(pred_STAR___$1,afn__$1,meta10095){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10094(pred_STAR___$1,afn__$1,meta10095));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10094(com$rpl$specter$impl$pred_STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10100 = (function (collected_QMARK__STAR_,afn,meta10101){
this.collected_QMARK__STAR_ = collected_QMARK__STAR_;
this.afn = afn;
this.meta10101 = meta10101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10102,meta10101__$1){
var self__ = this;
var _10102__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10100(self__.collected_QMARK__STAR_,self__.afn,meta10101__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10102){
var self__ = this;
var _10102__$1 = this;
return self__.meta10101;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10100.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10100.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10100.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.afn.call(null,vals))){
return next_fn.call(null,vals,structure);
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl10100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"collected?*","collected?*",1609398998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)))], null)),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta10101","meta10101",-2143727180,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10100.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10100.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10100";

com.rpl.specter.impl.t_com$rpl$specter$impl10100.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10100");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10100 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl10100(collected_QMARK__STAR___$1,afn__$1,meta10101){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10100(collected_QMARK__STAR___$1,afn__$1,meta10101));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10100(com$rpl$specter$impl$collected_QMARK__STAR_,afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl10106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl10106 = (function (cell_nav,cell,meta10107){
this.cell_nav = cell_nav;
this.cell = cell;
this.meta10107 = meta10107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl10106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10108,meta10107__$1){
var self__ = this;
var _10108__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10106(self__.cell_nav,self__.cell,meta10107__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl10106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10108){
var self__ = this;
var _10108__$1 = this;
return self__.meta10107;
});

com.rpl.specter.impl.t_com$rpl$specter$impl10106.prototype.com$rpl$specter$protocols$RichNavigator$ = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10106.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10106.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_.call(null,com.rpl.specter.impl.get_cell.call(null,self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cell-nav","cell-nav",-1155919053,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null)))], null)),new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta10107","meta10107",659230294,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl10106.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl10106.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl10106";

com.rpl.specter.impl.t_com$rpl$specter$impl10106.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl10106");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl10106 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl10106(cell_nav__$1,cell__$1,meta10107){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl10106(cell_nav__$1,cell__$1,meta10107));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl10106(com$rpl$specter$impl$cell_nav,cell,cljs.core.PersistentArrayMap.EMPTY));
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
var args10315 = [];
var len__7494__auto___10338 = arguments.length;
var i__7495__auto___10339 = (0);
while(true){
if((i__7495__auto___10339 < len__7494__auto___10338)){
args10315.push((arguments[i__7495__auto___10339]));

var G__10340 = (i__7495__auto___10339 + (1));
i__7495__auto___10339 = G__10340;
continue;
} else {
}
break;
}

var G__10337 = args10315.length;
switch (G__10337) {
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
var argseq__7513__auto__ = (new cljs.core.IndexedSeq(args10315.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__7513__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__9860__auto__){
return nav1__9860__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__9860__auto__,nav2__9861__auto__){
return com.rpl.specter.impl.combine_two_navs.call(null,nav1__9860__auto__,nav2__9861__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__10128,G__10129,G__10130){
return com.rpl.specter.impl.comp_navs.call(null,G__10128,com.rpl.specter.impl.comp_navs.call(null,G__10129,G__10130));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__10131,G__10132,G__10133,G__10134){
return com.rpl.specter.impl.comp_navs.call(null,G__10131,com.rpl.specter.impl.comp_navs.call(null,G__10132,G__10133,G__10134));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__10135,G__10136,G__10137,G__10138,G__10139){
return com.rpl.specter.impl.comp_navs.call(null,G__10135,com.rpl.specter.impl.comp_navs.call(null,G__10136,G__10137,G__10138,G__10139));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__10140,G__10141,G__10142,G__10143,G__10144,G__10145){
return com.rpl.specter.impl.comp_navs.call(null,G__10140,com.rpl.specter.impl.comp_navs.call(null,G__10141,G__10142,G__10143,G__10144,G__10145));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__10146,G__10147,G__10148,G__10149,G__10150,G__10151,G__10152){
return com.rpl.specter.impl.comp_navs.call(null,G__10146,com.rpl.specter.impl.comp_navs.call(null,G__10147,G__10148,G__10149,G__10150,G__10151,G__10152));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__10153,G__10154,G__10155,G__10156,G__10157,G__10158,G__10159,G__10160){
return com.rpl.specter.impl.comp_navs.call(null,G__10153,com.rpl.specter.impl.comp_navs.call(null,G__10154,G__10155,G__10156,G__10157,G__10158,G__10159,G__10160));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__10161,G__10162,G__10163,G__10164,G__10165,G__10166,G__10167,G__10168,G__10169){
return com.rpl.specter.impl.comp_navs.call(null,G__10161,com.rpl.specter.impl.comp_navs.call(null,G__10162,G__10163,G__10164,G__10165,G__10166,G__10167,G__10168,G__10169));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__10170,G__10171,G__10172,G__10173,G__10174,G__10175,G__10176,G__10177,G__10178,G__10179){
return com.rpl.specter.impl.comp_navs.call(null,G__10170,com.rpl.specter.impl.comp_navs.call(null,G__10171,G__10172,G__10173,G__10174,G__10175,G__10176,G__10177,G__10178,G__10179));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__10180,G__10181,G__10182,G__10183,G__10184,G__10185,G__10186,G__10187,G__10188,G__10189,G__10190){
return com.rpl.specter.impl.comp_navs.call(null,G__10180,com.rpl.specter.impl.comp_navs.call(null,G__10181,G__10182,G__10183,G__10184,G__10185,G__10186,G__10187,G__10188,G__10189,G__10190));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__10191,G__10192,G__10193,G__10194,G__10195,G__10196,G__10197,G__10198,G__10199,G__10200,G__10201,G__10202){
return com.rpl.specter.impl.comp_navs.call(null,G__10191,com.rpl.specter.impl.comp_navs.call(null,G__10192,G__10193,G__10194,G__10195,G__10196,G__10197,G__10198,G__10199,G__10200,G__10201,G__10202));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__10203,G__10204,G__10205,G__10206,G__10207,G__10208,G__10209,G__10210,G__10211,G__10212,G__10213,G__10214,G__10215){
return com.rpl.specter.impl.comp_navs.call(null,G__10203,com.rpl.specter.impl.comp_navs.call(null,G__10204,G__10205,G__10206,G__10207,G__10208,G__10209,G__10210,G__10211,G__10212,G__10213,G__10214,G__10215));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__10216,G__10217,G__10218,G__10219,G__10220,G__10221,G__10222,G__10223,G__10224,G__10225,G__10226,G__10227,G__10228,G__10229){
return com.rpl.specter.impl.comp_navs.call(null,G__10216,com.rpl.specter.impl.comp_navs.call(null,G__10217,G__10218,G__10219,G__10220,G__10221,G__10222,G__10223,G__10224,G__10225,G__10226,G__10227,G__10228,G__10229));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__10230,G__10231,G__10232,G__10233,G__10234,G__10235,G__10236,G__10237,G__10238,G__10239,G__10240,G__10241,G__10242,G__10243,G__10244){
return com.rpl.specter.impl.comp_navs.call(null,G__10230,com.rpl.specter.impl.comp_navs.call(null,G__10231,G__10232,G__10233,G__10234,G__10235,G__10236,G__10237,G__10238,G__10239,G__10240,G__10241,G__10242,G__10243,G__10244));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__10245,G__10246,G__10247,G__10248,G__10249,G__10250,G__10251,G__10252,G__10253,G__10254,G__10255,G__10256,G__10257,G__10258,G__10259,G__10260){
return com.rpl.specter.impl.comp_navs.call(null,G__10245,com.rpl.specter.impl.comp_navs.call(null,G__10246,G__10247,G__10248,G__10249,G__10250,G__10251,G__10252,G__10253,G__10254,G__10255,G__10256,G__10257,G__10258,G__10259,G__10260));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__10261,G__10262,G__10263,G__10264,G__10265,G__10266,G__10267,G__10268,G__10269,G__10270,G__10271,G__10272,G__10273,G__10274,G__10275,G__10276,G__10277){
return com.rpl.specter.impl.comp_navs.call(null,G__10261,com.rpl.specter.impl.comp_navs.call(null,G__10262,G__10263,G__10264,G__10265,G__10266,G__10267,G__10268,G__10269,G__10270,G__10271,G__10272,G__10273,G__10274,G__10275,G__10276,G__10277));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__10278,G__10279,G__10280,G__10281,G__10282,G__10283,G__10284,G__10285,G__10286,G__10287,G__10288,G__10289,G__10290,G__10291,G__10292,G__10293,G__10294,G__10295){
return com.rpl.specter.impl.comp_navs.call(null,G__10278,com.rpl.specter.impl.comp_navs.call(null,G__10279,G__10280,G__10281,G__10282,G__10283,G__10284,G__10285,G__10286,G__10287,G__10288,G__10289,G__10290,G__10291,G__10292,G__10293,G__10294,G__10295));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__10296,G__10297,G__10298,G__10299,G__10300,G__10301,G__10302,G__10303,G__10304,G__10305,G__10306,G__10307,G__10308,G__10309,G__10310,G__10311,G__10312,G__10313,G__10314){
return com.rpl.specter.impl.comp_navs.call(null,G__10296,com.rpl.specter.impl.comp_navs.call(null,G__10297,G__10298,G__10299,G__10300,G__10301,G__10302,G__10303,G__10304,G__10305,G__10306,G__10307,G__10308,G__10309,G__10310,G__10311,G__10312,G__10313,G__10314));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__10109,G__10110,G__10111,G__10112,G__10113,G__10114,G__10115,G__10116,G__10117,G__10118,G__10119,G__10120,G__10121,G__10122,G__10123,G__10124,G__10125,G__10126,G__10127,rest__9862__auto__){
return com.rpl.specter.impl.comp_navs.call(null,com.rpl.specter.impl.comp_navs.call(null,G__10109,G__10110,G__10111,G__10112,G__10113,G__10114,G__10115,G__10116,G__10117,G__10118,G__10119,G__10120,G__10121,G__10122,G__10123,G__10124,G__10125,G__10126,G__10127),cljs.core.reduce.call(null,com.rpl.specter.impl.comp_navs,rest__9862__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq10316){
var G__10317 = cljs.core.first.call(null,seq10316);
var seq10316__$1 = cljs.core.next.call(null,seq10316);
var G__10318 = cljs.core.first.call(null,seq10316__$1);
var seq10316__$2 = cljs.core.next.call(null,seq10316__$1);
var G__10319 = cljs.core.first.call(null,seq10316__$2);
var seq10316__$3 = cljs.core.next.call(null,seq10316__$2);
var G__10320 = cljs.core.first.call(null,seq10316__$3);
var seq10316__$4 = cljs.core.next.call(null,seq10316__$3);
var G__10321 = cljs.core.first.call(null,seq10316__$4);
var seq10316__$5 = cljs.core.next.call(null,seq10316__$4);
var G__10322 = cljs.core.first.call(null,seq10316__$5);
var seq10316__$6 = cljs.core.next.call(null,seq10316__$5);
var G__10323 = cljs.core.first.call(null,seq10316__$6);
var seq10316__$7 = cljs.core.next.call(null,seq10316__$6);
var G__10324 = cljs.core.first.call(null,seq10316__$7);
var seq10316__$8 = cljs.core.next.call(null,seq10316__$7);
var G__10325 = cljs.core.first.call(null,seq10316__$8);
var seq10316__$9 = cljs.core.next.call(null,seq10316__$8);
var G__10326 = cljs.core.first.call(null,seq10316__$9);
var seq10316__$10 = cljs.core.next.call(null,seq10316__$9);
var G__10327 = cljs.core.first.call(null,seq10316__$10);
var seq10316__$11 = cljs.core.next.call(null,seq10316__$10);
var G__10328 = cljs.core.first.call(null,seq10316__$11);
var seq10316__$12 = cljs.core.next.call(null,seq10316__$11);
var G__10329 = cljs.core.first.call(null,seq10316__$12);
var seq10316__$13 = cljs.core.next.call(null,seq10316__$12);
var G__10330 = cljs.core.first.call(null,seq10316__$13);
var seq10316__$14 = cljs.core.next.call(null,seq10316__$13);
var G__10331 = cljs.core.first.call(null,seq10316__$14);
var seq10316__$15 = cljs.core.next.call(null,seq10316__$14);
var G__10332 = cljs.core.first.call(null,seq10316__$15);
var seq10316__$16 = cljs.core.next.call(null,seq10316__$15);
var G__10333 = cljs.core.first.call(null,seq10316__$16);
var seq10316__$17 = cljs.core.next.call(null,seq10316__$16);
var G__10334 = cljs.core.first.call(null,seq10316__$17);
var seq10316__$18 = cljs.core.next.call(null,seq10316__$17);
var G__10335 = cljs.core.first.call(null,seq10316__$18);
var seq10316__$19 = cljs.core.next.call(null,seq10316__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__10317,G__10318,G__10319,G__10320,G__10321,G__10322,G__10323,G__10324,G__10325,G__10326,G__10327,G__10328,G__10329,G__10330,G__10331,G__10332,G__10333,G__10334,G__10335,seq10316__$19);
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__10346,i){
var vec__10347 = p__10346;
var ranges = cljs.core.nth.call(null,vec__10347,(0),null);
var curr_start = cljs.core.nth.call(null,vec__10347,(1),null);
var curr_last = cljs.core.nth.call(null,vec__10347,(2),null);
var curr = vec__10347;
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
return cljs.core.reduce.call(null,(function (structure__$1,p__10354){
var vec__10355 = p__10354;
var s = cljs.core.nth.call(null,vec__10355,(0),null);
var e = cljs.core.nth.call(null,vec__10355,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse.call(null,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__6407__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__6407__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__6407__auto__;
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
var G__10366 = orig;
o = G__10366;
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
var G__10367__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_.call(null,args))){
return cljs.core.apply.call(null,afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,afn,args);
}
};
var G__10367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10368__i = 0, G__10368__a = new Array(arguments.length -  0);
while (G__10368__i < G__10368__a.length) {G__10368__a[G__10368__i] = arguments[G__10368__i + 0]; ++G__10368__i;}
  args = new cljs.core.IndexedSeq(G__10368__a,0);
} 
return G__10367__delegate.call(this,args);};
G__10367.cljs$lang$maxFixedArity = 0;
G__10367.cljs$lang$applyTo = (function (arglist__10369){
var args = cljs.core.seq(arglist__10369);
return G__10367__delegate(args);
});
G__10367.cljs$core$IFn$_invoke$arity$variadic = G__10367__delegate;
return G__10367;
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
return com.rpl.specter.impl.__GT_DynamicVal.call(null,com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__6419__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__6419__auto__ = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
var or__6419__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__6419__auto____$1)){
return or__6419__auto____$1;
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
if(cljs.core.truth_((function (){var or__6419__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
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
var args10371 = [];
var len__7494__auto___10374 = arguments.length;
var i__7495__auto___10375 = (0);
while(true){
if((i__7495__auto___10375 < len__7494__auto___10374)){
args10371.push((arguments[i__7495__auto___10375]));

var G__10376 = (i__7495__auto___10375 + (1));
i__7495__auto___10375 = G__10376;
continue;
} else {
}
break;
}

var G__10373 = args10371.length;
switch (G__10373) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10371.length)].join('')));

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
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,com.rpl.specter.impl.static_combine.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10370_SHARP_){
return com.rpl.specter.impl.static_combine.call(null,p1__10370_SHARP_,false);
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
var x__7082__auto__ = (((this$ == null))?null:this$);
var m__7083__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,this$,dynamic_params);
} else {
var m__7083__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,this$,dynamic_params);
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
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10379,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10381 = (((k10379 instanceof cljs.core.Keyword))?k10379.fqn:null);
switch (G__10381) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10379,else__7044__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.call(null,dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10378){
var self__ = this;
var G__10378__$1 = this;
return (new cljs.core.RecordIter((0),G__10378__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10378){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10382 = cljs.core.keyword_identical_QMARK_;
var expr__10383 = k__7049__auto__;
if(cljs.core.truth_(pred__10382.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__10383))){
return (new com.rpl.specter.impl.LocalParam(G__10378,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10378),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10378){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__10378,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__10380){
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__10380),null,cljs.core.dissoc.call(null,G__10380,new cljs.core.Keyword(null,"idx","idx",1053688473)),null));
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
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10386,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10388 = (((k10386 instanceof cljs.core.Keyword))?k10386.fqn:null);
switch (G__10388) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10386,else__7044__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10385){
var self__ = this;
var G__10385__$1 = this;
return (new cljs.core.RecordIter((0),G__10385__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10385){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10389 = cljs.core.keyword_identical_QMARK_;
var expr__10390 = k__7049__auto__;
if(cljs.core.truth_(pred__10389.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__10390))){
return (new com.rpl.specter.impl.StaticParam(G__10385,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10385),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10385){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__10385,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__10387){
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__10387),null,cljs.core.dissoc.call(null,G__10387,new cljs.core.Keyword(null,"val","val",128701612)),null));
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
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10413,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10415 = (((k10413 instanceof cljs.core.Keyword))?k10413.fqn:null);
switch (G__10415) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10413,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10392){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10392).call(null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10412){
var self__ = this;
var G__10412__$1 = this;
return (new cljs.core.RecordIter((0),G__10412__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10412){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10416 = cljs.core.keyword_identical_QMARK_;
var expr__10417 = k__7049__auto__;
if(cljs.core.truth_(pred__10416.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10417))){
return (new com.rpl.specter.impl.LateFn0(G__10412,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10412),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10412){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__10412,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__10414){
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10414),null,cljs.core.dissoc.call(null,G__10414,new cljs.core.Keyword(null,"fn","fn",-1175266204)),null));
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
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10420,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10422 = (((k10420 instanceof cljs.core.Keyword))?k10420.fqn:null);
switch (G__10422) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10420,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10393){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10393).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10393));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10419){
var self__ = this;
var G__10419__$1 = this;
return (new cljs.core.RecordIter((0),G__10419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10419){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10423 = cljs.core.keyword_identical_QMARK_;
var expr__10424 = k__7049__auto__;
if(cljs.core.truth_(pred__10423.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10424))){
return (new com.rpl.specter.impl.LateFn1(G__10419,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10423.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10424))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__10419,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10419),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10419){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__10419,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__10421){
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10421),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10421),null,cljs.core.dissoc.call(null,G__10421,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)),null));
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
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10427,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10429 = (((k10427 instanceof cljs.core.Keyword))?k10427.fqn:null);
switch (G__10429) {
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
return cljs.core.get.call(null,self__.__extmap,k10427,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10394){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10394).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10394),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10394));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10426){
var self__ = this;
var G__10426__$1 = this;
return (new cljs.core.RecordIter((0),G__10426__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10426){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10430 = cljs.core.keyword_identical_QMARK_;
var expr__10431 = k__7049__auto__;
if(cljs.core.truth_(pred__10430.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10431))){
return (new com.rpl.specter.impl.LateFn2(G__10426,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10430.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10431))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__10426,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10430.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10431))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__10426,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10426),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10426){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__10426,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__10428){
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10428),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10428),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10428),null,cljs.core.dissoc.call(null,G__10428,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)),null));
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
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10434,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10436 = (((k10434 instanceof cljs.core.Keyword))?k10434.fqn:null);
switch (G__10436) {
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
return cljs.core.get.call(null,self__.__extmap,k10434,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10395){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10395).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10395),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10395));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10433){
var self__ = this;
var G__10433__$1 = this;
return (new cljs.core.RecordIter((0),G__10433__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10433){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10437 = cljs.core.keyword_identical_QMARK_;
var expr__10438 = k__7049__auto__;
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10438))){
return (new com.rpl.specter.impl.LateFn3(G__10433,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10438))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__10433,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10438))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__10433,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10438))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__10433,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10433),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10433){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10433,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__10435){
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10435),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10435),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10435),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10435),null,cljs.core.dissoc.call(null,G__10435,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)),null));
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
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10441,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10443 = (((k10441 instanceof cljs.core.Keyword))?k10441.fqn:null);
switch (G__10443) {
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
return cljs.core.get.call(null,self__.__extmap,k10441,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10396){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10396).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10396),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10396));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10440){
var self__ = this;
var G__10440__$1 = this;
return (new cljs.core.RecordIter((0),G__10440__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10440){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10444 = cljs.core.keyword_identical_QMARK_;
var expr__10445 = k__7049__auto__;
if(cljs.core.truth_(pred__10444.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10445))){
return (new com.rpl.specter.impl.LateFn4(G__10440,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10444.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10445))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__10440,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10444.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10445))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__10440,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10444.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10445))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__10440,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10444.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10445))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10440,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10440),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10440){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10440,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__10442){
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10442),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10442),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10442),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10442),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10442),null,cljs.core.dissoc.call(null,G__10442,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)),null));
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
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10448,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10450 = (((k10448 instanceof cljs.core.Keyword))?k10448.fqn:null);
switch (G__10450) {
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
return cljs.core.get.call(null,self__.__extmap,k10448,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10397){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10397).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10397),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10397));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10447){
var self__ = this;
var G__10447__$1 = this;
return (new cljs.core.RecordIter((0),G__10447__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10447){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10451 = cljs.core.keyword_identical_QMARK_;
var expr__10452 = k__7049__auto__;
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(G__10447,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__10447,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__10447,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__10447,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10447,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10451.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10452))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10447,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10447),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10447){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10447,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__10449){
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10449),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10449),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10449),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10449),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10449),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10449),null,cljs.core.dissoc.call(null,G__10449,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)),null));
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
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10455,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10457 = (((k10455 instanceof cljs.core.Keyword))?k10455.fqn:null);
switch (G__10457) {
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
return cljs.core.get.call(null,self__.__extmap,k10455,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10398){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10398).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10398),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10398));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10454){
var self__ = this;
var G__10454__$1 = this;
return (new cljs.core.RecordIter((0),G__10454__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10454){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10458 = cljs.core.keyword_identical_QMARK_;
var expr__10459 = k__7049__auto__;
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(G__10454,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__10454,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__10454,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__10454,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10454,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10454,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10458.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10459))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10454,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10454),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10454){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10454,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__10456){
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10456),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10456),null,cljs.core.dissoc.call(null,G__10456,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)),null));
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
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10462,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10464 = (((k10462 instanceof cljs.core.Keyword))?k10462.fqn:null);
switch (G__10464) {
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
return cljs.core.get.call(null,self__.__extmap,k10462,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10399){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10399).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10399),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10399));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10461){
var self__ = this;
var G__10461__$1 = this;
return (new cljs.core.RecordIter((0),G__10461__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10461){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10465 = cljs.core.keyword_identical_QMARK_;
var expr__10466 = k__7049__auto__;
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(G__10461,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__10461,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__10461,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__10461,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10461,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10461,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10461,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10465.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10466))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10461,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10461),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10461){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10461,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__10463){
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10463),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10463),null,cljs.core.dissoc.call(null,G__10463,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)),null));
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
com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10469,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10471 = (((k10469 instanceof cljs.core.Keyword))?k10469.fqn:null);
switch (G__10471) {
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
return cljs.core.get.call(null,self__.__extmap,k10469,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10400){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10400).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10400),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10400));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10468){
var self__ = this;
var G__10468__$1 = this;
return (new cljs.core.RecordIter((0),G__10468__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10468){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10472 = cljs.core.keyword_identical_QMARK_;
var expr__10473 = k__7049__auto__;
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(G__10468,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__10468,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__10468,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__10468,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10468,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10468,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10468,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10468,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10472.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10473))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10468,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10468),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10468){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10468,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__10470){
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10470),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10470),null,cljs.core.dissoc.call(null,G__10470,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)),null));
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
com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10476,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10478 = (((k10476 instanceof cljs.core.Keyword))?k10476.fqn:null);
switch (G__10478) {
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
return cljs.core.get.call(null,self__.__extmap,k10476,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10401){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10401).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10401),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10401));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10475){
var self__ = this;
var G__10475__$1 = this;
return (new cljs.core.RecordIter((0),G__10475__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10475){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10479 = cljs.core.keyword_identical_QMARK_;
var expr__10480 = k__7049__auto__;
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(G__10475,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__10475,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__10475,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__10475,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10475,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10475,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10475,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10475,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10475,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10479.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10480))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10475,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10475),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10475){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10475,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__10477){
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10477),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10477),null,cljs.core.dissoc.call(null,G__10477,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)),null));
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
com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10483,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10485 = (((k10483 instanceof cljs.core.Keyword))?k10483.fqn:null);
switch (G__10485) {
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
return cljs.core.get.call(null,self__.__extmap,k10483,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10402){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10402).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10402),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10402));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10482){
var self__ = this;
var G__10482__$1 = this;
return (new cljs.core.RecordIter((0),G__10482__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10482){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10486 = cljs.core.keyword_identical_QMARK_;
var expr__10487 = k__7049__auto__;
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(G__10482,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__10482,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__10482,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__10482,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10482,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10482,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10482,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10482,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10482,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10482,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10486.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10487))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10482,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10482),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10482){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10482,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__10484){
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10484),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10484),null,cljs.core.dissoc.call(null,G__10484,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)),null));
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
com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10490,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10492 = (((k10490 instanceof cljs.core.Keyword))?k10490.fqn:null);
switch (G__10492) {
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
return cljs.core.get.call(null,self__.__extmap,k10490,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10403){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10403).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10403),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10403));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10489){
var self__ = this;
var G__10489__$1 = this;
return (new cljs.core.RecordIter((0),G__10489__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10489){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10493 = cljs.core.keyword_identical_QMARK_;
var expr__10494 = k__7049__auto__;
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(G__10489,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__10489,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__10489,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__10489,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10489,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10489,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10489,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10489,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10489,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10489,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10489,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10493.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10494))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10489,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10489),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10489){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10489,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__10491){
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10491),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10491),null,cljs.core.dissoc.call(null,G__10491,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)),null));
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
com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10497,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10499 = (((k10497 instanceof cljs.core.Keyword))?k10497.fqn:null);
switch (G__10499) {
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
return cljs.core.get.call(null,self__.__extmap,k10497,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10404){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10404).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10404),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10404));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10496){
var self__ = this;
var G__10496__$1 = this;
return (new cljs.core.RecordIter((0),G__10496__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10496){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10500 = cljs.core.keyword_identical_QMARK_;
var expr__10501 = k__7049__auto__;
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(G__10496,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__10496,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__10496,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__10496,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10496,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10496,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10496,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10496,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10496,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10496,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10496,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10496,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10500.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10501))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10496,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10496),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10496){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10496,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__10498){
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10498),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10498),null,cljs.core.dissoc.call(null,G__10498,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)),null));
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
com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10504,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10506 = (((k10504 instanceof cljs.core.Keyword))?k10504.fqn:null);
switch (G__10506) {
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
return cljs.core.get.call(null,self__.__extmap,k10504,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10405){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10405).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10405),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10405));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10503){
var self__ = this;
var G__10503__$1 = this;
return (new cljs.core.RecordIter((0),G__10503__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10503){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10507 = cljs.core.keyword_identical_QMARK_;
var expr__10508 = k__7049__auto__;
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(G__10503,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__10503,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__10503,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__10503,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10503,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10503,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10503,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10503,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10503,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10503,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10503,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10503,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10503,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10507.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10508))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10503,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10503),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10503){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10503,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__10505){
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10505),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10505),null,cljs.core.dissoc.call(null,G__10505,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)),null));
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
com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10511,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10513 = (((k10511 instanceof cljs.core.Keyword))?k10511.fqn:null);
switch (G__10513) {
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
return cljs.core.get.call(null,self__.__extmap,k10511,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10406){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10406).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10406),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10406));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10510){
var self__ = this;
var G__10510__$1 = this;
return (new cljs.core.RecordIter((0),G__10510__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (15 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10510){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10514 = cljs.core.keyword_identical_QMARK_;
var expr__10515 = k__7049__auto__;
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(G__10510,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__10510,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__10510,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__10510,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10510,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10510,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10510,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10510,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10510,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10510,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10510,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10510,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10510,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10510,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10514.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10515))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10510,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10510),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10510){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10510,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__10512){
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10512),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10512),null,cljs.core.dissoc.call(null,G__10512,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)),null));
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
com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10518,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10520 = (((k10518 instanceof cljs.core.Keyword))?k10518.fqn:null);
switch (G__10520) {
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
return cljs.core.get.call(null,self__.__extmap,k10518,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10407){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10407).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10407),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10407));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10517){
var self__ = this;
var G__10517__$1 = this;
return (new cljs.core.RecordIter((0),G__10517__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (16 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10517){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10521 = cljs.core.keyword_identical_QMARK_;
var expr__10522 = k__7049__auto__;
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(G__10517,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__10517,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__10517,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__10517,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10517,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10517,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10517,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10517,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10517,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10517,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10517,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10517,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10517,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10517,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10517,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10521.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10522))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10517,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10517),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10517){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10517,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__10519){
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10519),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10519),null,cljs.core.dissoc.call(null,G__10519,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)),null));
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
com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10525,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10527 = (((k10525 instanceof cljs.core.Keyword))?k10525.fqn:null);
switch (G__10527) {
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
return cljs.core.get.call(null,self__.__extmap,k10525,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10408){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10408).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10408),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10408));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10524){
var self__ = this;
var G__10524__$1 = this;
return (new cljs.core.RecordIter((0),G__10524__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (17 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10524){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10528 = cljs.core.keyword_identical_QMARK_;
var expr__10529 = k__7049__auto__;
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(G__10524,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__10524,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__10524,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__10524,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10524,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10524,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10524,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10524,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10524,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10524,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10524,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10524,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10524,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10524,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10524,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10524,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10528.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10529))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10524,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10524),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10524){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10524,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__10526){
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10526),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10526),null,cljs.core.dissoc.call(null,G__10526,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)),null));
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
com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10532,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10534 = (((k10532 instanceof cljs.core.Keyword))?k10532.fqn:null);
switch (G__10534) {
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
return cljs.core.get.call(null,self__.__extmap,k10532,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10409){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10409).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10409),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10409));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10531){
var self__ = this;
var G__10531__$1 = this;
return (new cljs.core.RecordIter((0),G__10531__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (18 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10531){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10535 = cljs.core.keyword_identical_QMARK_;
var expr__10536 = k__7049__auto__;
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(G__10531,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__10531,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__10531,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__10531,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10531,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10531,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10531,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10531,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10531,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10531,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10531,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10531,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10531,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10531,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10531,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10531,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10531,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10535.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10536))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10531,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10531),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10531){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10531,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__10533){
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10533),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10533),null,cljs.core.dissoc.call(null,G__10533,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)),null));
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
com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10539,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10541 = (((k10539 instanceof cljs.core.Keyword))?k10539.fqn:null);
switch (G__10541) {
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
return cljs.core.get.call(null,self__.__extmap,k10539,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10410){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10410).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10410),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params10410));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10538){
var self__ = this;
var G__10538__$1 = this;
return (new cljs.core.RecordIter((0),G__10538__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (19 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10538){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10542 = cljs.core.keyword_identical_QMARK_;
var expr__10543 = k__7049__auto__;
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(G__10538,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__10538,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__10538,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__10538,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10538,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10538,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10538,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10538,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10538,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10538,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10538,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10538,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10538,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10538,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10538,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10538,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10538,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10538,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10542.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__10543))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10538,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10538),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10538){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__10538,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__10540){
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10540),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__10540),null,cljs.core.dissoc.call(null,G__10540,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)),null));
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
com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7041__auto__,k__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
return cljs.core._lookup.call(null,this__7041__auto____$1,k__7042__auto__,null);
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7043__auto__,k10546,else__7044__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
var G__10548 = (((k10546 instanceof cljs.core.Keyword))?k10546.fqn:null);
switch (G__10548) {
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
return cljs.core.get.call(null,self__.__extmap,k10546,else__7044__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = true;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__9886__auto__,dynamic_params10411){
var self__ = this;
var this__9886__auto____$1 = this;
return com.rpl.specter.impl.late_resolve.call(null,self__.fn,dynamic_params10411).call(null,com.rpl.specter.impl.late_resolve.call(null,self__.arg0,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg1,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg2,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg3,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg4,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg5,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg6,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg7,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg8,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg9,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg10,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg11,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg12,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg13,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg14,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg15,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg16,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg17,dynamic_params10411),com.rpl.specter.impl.late_resolve.call(null,self__.arg18,dynamic_params10411));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7055__auto__,writer__7056__auto__,opts__7057__auto__){
var self__ = this;
var this__7055__auto____$1 = this;
var pr_pair__7058__auto__ = ((function (this__7055__auto____$1){
return (function (keyval__7059__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,cljs.core.pr_writer,""," ","",opts__7057__auto__,keyval__7059__auto__);
});})(this__7055__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7056__auto__,pr_pair__7058__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__7057__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10545){
var self__ = this;
var G__10545__$1 = this;
return (new cljs.core.RecordIter((0),G__10545__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7039__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7045__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
return (20 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7036__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
var h__6854__auto__ = self__.__hash;
if(!((h__6854__auto__ == null))){
return h__6854__auto__;
} else {
var h__6854__auto____$1 = cljs.core.hash_imap.call(null,this__7036__auto____$1);
self__.__hash = h__6854__auto____$1;

return h__6854__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7037__auto__,other__7038__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6407__auto__ = other__7038__auto__;
if(cljs.core.truth_(and__6407__auto__)){
var and__6407__auto____$1 = (this__7037__auto____$1.constructor === other__7038__auto__.constructor);
if(and__6407__auto____$1){
return cljs.core.equiv_map.call(null,this__7037__auto____$1,other__7038__auto__);
} else {
return and__6407__auto____$1;
}
} else {
return and__6407__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7050__auto__,k__7051__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__7051__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7050__auto____$1),self__.__meta),k__7051__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7051__auto__)),null));
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7048__auto__,k__7049__auto__,G__10545){
var self__ = this;
var this__7048__auto____$1 = this;
var pred__10549 = cljs.core.keyword_identical_QMARK_;
var expr__10550 = k__7049__auto__;
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(G__10545,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__10545,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__10545,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__10545,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__10545,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__10545,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__10545,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__10545,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__10545,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__10545,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__10545,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__10545,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__10545,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__10545,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__10545,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__10545,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__10545,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__10545,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__10545,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10549.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__10550))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__10545,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7049__auto__,G__10545),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7053__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7040__auto__,G__10545){
var self__ = this;
var this__7040__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__10545,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7046__auto__,entry__7047__auto__){
var self__ = this;
var this__7046__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7047__auto__)){
return cljs.core._assoc.call(null,this__7046__auto____$1,cljs.core._nth.call(null,entry__7047__auto__,(0)),cljs.core._nth.call(null,entry__7047__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7046__auto____$1,entry__7047__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__7075__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__7075__auto__,writer__7076__auto__){
return cljs.core._write.call(null,writer__7076__auto__,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__10547){
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__10547),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__10547),null,cljs.core.dissoc.call(null,G__10547,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn10552,args10553){
var G__10555 = cljs.core.count.call(null,args10553);
switch (G__10555) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0.call(null,afn10552);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)),cljs.core.nth.call(null,args10553,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)),cljs.core.nth.call(null,args10553,(13)),cljs.core.nth.call(null,args10553,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)),cljs.core.nth.call(null,args10553,(13)),cljs.core.nth.call(null,args10553,(14)),cljs.core.nth.call(null,args10553,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)),cljs.core.nth.call(null,args10553,(13)),cljs.core.nth.call(null,args10553,(14)),cljs.core.nth.call(null,args10553,(15)),cljs.core.nth.call(null,args10553,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18.call(null,afn10552,cljs.core.nth.call(null,args10553,(0)),cljs.core.nth.call(null,args10553,(1)),cljs.core.nth.call(null,args10553,(2)),cljs.core.nth.call(null,args10553,(3)),cljs.core.nth.call(null,args10553,(4)),cljs.core.nth.call(null,args10553,(5)),cljs.core.nth.call(null,args10553,(6)),cljs.core.nth.call(null,args10553,(7)),cljs.core.nth.call(null,args10553,(8)),cljs.core.nth.call(null,args10553,(9)),cljs.core.nth.call(null,args10553,(10)),cljs.core.nth.call(null,args10553,(11)),cljs.core.nth.call(null,args10553,(12)),cljs.core.nth.call(null,args10553,(13)),cljs.core.nth.call(null,args10553,(14)),cljs.core.nth.call(null,args10553,(15)),cljs.core.nth.call(null,args10553,(16)),cljs.core.nth.call(null,args10553,(17)));

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
var vec__10582 = cljs.core.keep_indexed.call(null,(function (i,v){
if(cljs.core._EQ_.call(null,v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.call(null,vec__10582,(0),null);
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
return (function (p1__10585_SHARP_){
return com$rpl$specter$impl$resolve_arg_code.call(null,p1__10585_SHARP_,possible_params);
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
return (function (p1__10586_SHARP_){
return com$rpl$specter$impl$resolve_nav_code.call(null,p1__10586_SHARP_,possible_params);
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
if(cljs.core.truth_((function (){var or__6419__auto__ = cljs.core.set_QMARK_.call(null,code);
if(or__6419__auto__){
return or__6419__auto__;
} else {
var and__6407__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,code);
if(cljs.core.truth_(and__6407__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first.call(null,code));
} else {
return and__6407__auto__;
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
return (function (p1__10587_SHARP_){
return cljs.core.conj.call(null,p1__10587_SHARP_,e);
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
var args__7501__auto__ = [];
var len__7494__auto___10598 = arguments.length;
var i__7495__auto___10599 = (0);
while(true){
if((i__7495__auto___10599 < len__7494__auto___10598)){
args__7501__auto__.push((arguments[i__7495__auto___10599]));

var G__10600 = (i__7495__auto___10599 + (1));
i__7495__auto___10599 = G__10600;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((3) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7502__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__10592){
var map__10593 = p__10592;
var map__10593__$1 = ((((!((map__10593 == null)))?((((map__10593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10593):map__10593);
var merge_fn = cljs.core.get.call(null,map__10593__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__10593,map__10593__$1,merge_fn){
return (function() { 
var G__10601__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__10595 = res;
var ret = cljs.core.nth.call(null,vec__10595,(0),null);
var user_ret = cljs.core.nth.call(null,vec__10595,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__10601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10602__i = 0, G__10602__a = new Array(arguments.length -  0);
while (G__10602__i < G__10602__a.length) {G__10602__a[G__10602__i] = arguments[G__10602__i + 0]; ++G__10602__i;}
  args = new cljs.core.IndexedSeq(G__10602__a,0);
} 
return G__10601__delegate.call(this,args);};
G__10601.cljs$lang$maxFixedArity = 0;
G__10601.cljs$lang$applyTo = (function (arglist__10603){
var args = cljs.core.seq(arglist__10603);
return G__10601__delegate(args);
});
G__10601.cljs$core$IFn$_invoke$arity$variadic = G__10601__delegate;
return G__10601;
})()
;})(state,map__10593,map__10593__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq10588){
var G__10589 = cljs.core.first.call(null,seq10588);
var seq10588__$1 = cljs.core.next.call(null,seq10588);
var G__10590 = cljs.core.first.call(null,seq10588__$1);
var seq10588__$2 = cljs.core.next.call(null,seq10588__$1);
var G__10591 = cljs.core.first.call(null,seq10588__$2);
var seq10588__$3 = cljs.core.next.call(null,seq10588__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10589,G__10590,G__10591,seq10588__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__7501__auto__ = [];
var len__7494__auto___10605 = arguments.length;
var i__7495__auto___10606 = (0);
while(true){
if((i__7495__auto___10606 < len__7494__auto___10605)){
args__7501__auto__.push((arguments[i__7495__auto___10606]));

var G__10607 = (i__7495__auto___10606 + (1));
i__7495__auto___10606 = G__10607;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((0) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7502__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.call(null,"All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq10604){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10604));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=impl.js.map?rel=1484456785309
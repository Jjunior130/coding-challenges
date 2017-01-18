// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30525 = [];
var len__26121__auto___30531 = arguments.length;
var i__26122__auto___30532 = (0);
while(true){
if((i__26122__auto___30532 < len__26121__auto___30531)){
args30525.push((arguments[i__26122__auto___30532]));

var G__30533 = (i__26122__auto___30532 + (1));
i__26122__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var G__30527 = args30525.length;
switch (G__30527) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30525.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30528 = (function (f,blockable,meta30529){
this.f = f;
this.blockable = blockable;
this.meta30529 = meta30529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30530,meta30529__$1){
var self__ = this;
var _30530__$1 = this;
return (new cljs.core.async.t_cljs$core$async30528(self__.f,self__.blockable,meta30529__$1));
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30530){
var self__ = this;
var _30530__$1 = this;
return self__.meta30529;
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30529","meta30529",162746633,null)], null);
});

cljs.core.async.t_cljs$core$async30528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30528";

cljs.core.async.t_cljs$core$async30528.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async30528");
});

cljs.core.async.__GT_t_cljs$core$async30528 = (function cljs$core$async$__GT_t_cljs$core$async30528(f__$1,blockable__$1,meta30529){
return (new cljs.core.async.t_cljs$core$async30528(f__$1,blockable__$1,meta30529));
});

}

return (new cljs.core.async.t_cljs$core$async30528(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30537 = [];
var len__26121__auto___30540 = arguments.length;
var i__26122__auto___30541 = (0);
while(true){
if((i__26122__auto___30541 < len__26121__auto___30540)){
args30537.push((arguments[i__26122__auto___30541]));

var G__30542 = (i__26122__auto___30541 + (1));
i__26122__auto___30541 = G__30542;
continue;
} else {
}
break;
}

var G__30539 = args30537.length;
switch (G__30539) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30537.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30544 = [];
var len__26121__auto___30547 = arguments.length;
var i__26122__auto___30548 = (0);
while(true){
if((i__26122__auto___30548 < len__26121__auto___30547)){
args30544.push((arguments[i__26122__auto___30548]));

var G__30549 = (i__26122__auto___30548 + (1));
i__26122__auto___30548 = G__30549;
continue;
} else {
}
break;
}

var G__30546 = args30544.length;
switch (G__30546) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30544.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30551 = [];
var len__26121__auto___30554 = arguments.length;
var i__26122__auto___30555 = (0);
while(true){
if((i__26122__auto___30555 < len__26121__auto___30554)){
args30551.push((arguments[i__26122__auto___30555]));

var G__30556 = (i__26122__auto___30555 + (1));
i__26122__auto___30555 = G__30556;
continue;
} else {
}
break;
}

var G__30553 = args30551.length;
switch (G__30553) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30551.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30558 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30558);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30558,ret){
return (function (){
return fn1.call(null,val_30558);
});})(val_30558,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30559 = [];
var len__26121__auto___30562 = arguments.length;
var i__26122__auto___30563 = (0);
while(true){
if((i__26122__auto___30563 < len__26121__auto___30562)){
args30559.push((arguments[i__26122__auto___30563]));

var G__30564 = (i__26122__auto___30563 + (1));
i__26122__auto___30563 = G__30564;
continue;
} else {
}
break;
}

var G__30561 = args30559.length;
switch (G__30561) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30559.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25961__auto___30566 = n;
var x_30567 = (0);
while(true){
if((x_30567 < n__25961__auto___30566)){
(a[x_30567] = (0));

var G__30568 = (x_30567 + (1));
x_30567 = G__30568;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30569 = (i + (1));
i = G__30569;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30573 = (function (alt_flag,flag,meta30574){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30574 = meta30574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30575,meta30574__$1){
var self__ = this;
var _30575__$1 = this;
return (new cljs.core.async.t_cljs$core$async30573(self__.alt_flag,self__.flag,meta30574__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30575){
var self__ = this;
var _30575__$1 = this;
return self__.meta30574;
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30574","meta30574",-490668751,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30573";

cljs.core.async.t_cljs$core$async30573.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async30573");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30573 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30573(alt_flag__$1,flag__$1,meta30574){
return (new cljs.core.async.t_cljs$core$async30573(alt_flag__$1,flag__$1,meta30574));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30573(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30579 = (function (alt_handler,flag,cb,meta30580){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30580 = meta30580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30581,meta30580__$1){
var self__ = this;
var _30581__$1 = this;
return (new cljs.core.async.t_cljs$core$async30579(self__.alt_handler,self__.flag,self__.cb,meta30580__$1));
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30581){
var self__ = this;
var _30581__$1 = this;
return self__.meta30580;
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30580","meta30580",688390027,null)], null);
});

cljs.core.async.t_cljs$core$async30579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30579";

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async30579");
});

cljs.core.async.__GT_t_cljs$core$async30579 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30579(alt_handler__$1,flag__$1,cb__$1,meta30580){
return (new cljs.core.async.t_cljs$core$async30579(alt_handler__$1,flag__$1,cb__$1,meta30580));
});

}

return (new cljs.core.async.t_cljs$core$async30579(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30582_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30582_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30583_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30583_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25046__auto__ = wport;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30584 = (i + (1));
i = G__30584;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25046__auto__ = ret;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25034__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25034__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___30590 = arguments.length;
var i__26122__auto___30591 = (0);
while(true){
if((i__26122__auto___30591 < len__26121__auto___30590)){
args__26128__auto__.push((arguments[i__26122__auto___30591]));

var G__30592 = (i__26122__auto___30591 + (1));
i__26122__auto___30591 = G__30592;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30587){
var map__30588 = p__30587;
var map__30588__$1 = ((((!((map__30588 == null)))?((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);
var opts = map__30588__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30585){
var G__30586 = cljs.core.first.call(null,seq30585);
var seq30585__$1 = cljs.core.next.call(null,seq30585);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30586,seq30585__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30593 = [];
var len__26121__auto___30643 = arguments.length;
var i__26122__auto___30644 = (0);
while(true){
if((i__26122__auto___30644 < len__26121__auto___30643)){
args30593.push((arguments[i__26122__auto___30644]));

var G__30645 = (i__26122__auto___30644 + (1));
i__26122__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var G__30595 = args30593.length;
switch (G__30595) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30593.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30480__auto___30647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___30647){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___30647){
return (function (state_30619){
var state_val_30620 = (state_30619[(1)]);
if((state_val_30620 === (7))){
var inst_30615 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
var statearr_30621_30648 = state_30619__$1;
(statearr_30621_30648[(2)] = inst_30615);

(statearr_30621_30648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (1))){
var state_30619__$1 = state_30619;
var statearr_30622_30649 = state_30619__$1;
(statearr_30622_30649[(2)] = null);

(statearr_30622_30649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (4))){
var inst_30598 = (state_30619[(7)]);
var inst_30598__$1 = (state_30619[(2)]);
var inst_30599 = (inst_30598__$1 == null);
var state_30619__$1 = (function (){var statearr_30623 = state_30619;
(statearr_30623[(7)] = inst_30598__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30599)){
var statearr_30624_30650 = state_30619__$1;
(statearr_30624_30650[(1)] = (5));

} else {
var statearr_30625_30651 = state_30619__$1;
(statearr_30625_30651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (13))){
var state_30619__$1 = state_30619;
var statearr_30626_30652 = state_30619__$1;
(statearr_30626_30652[(2)] = null);

(statearr_30626_30652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (6))){
var inst_30598 = (state_30619[(7)]);
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30619__$1,(11),to,inst_30598);
} else {
if((state_val_30620 === (3))){
var inst_30617 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30619__$1,inst_30617);
} else {
if((state_val_30620 === (12))){
var state_30619__$1 = state_30619;
var statearr_30627_30653 = state_30619__$1;
(statearr_30627_30653[(2)] = null);

(statearr_30627_30653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (2))){
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30619__$1,(4),from);
} else {
if((state_val_30620 === (11))){
var inst_30608 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
if(cljs.core.truth_(inst_30608)){
var statearr_30628_30654 = state_30619__$1;
(statearr_30628_30654[(1)] = (12));

} else {
var statearr_30629_30655 = state_30619__$1;
(statearr_30629_30655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (9))){
var state_30619__$1 = state_30619;
var statearr_30630_30656 = state_30619__$1;
(statearr_30630_30656[(2)] = null);

(statearr_30630_30656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (5))){
var state_30619__$1 = state_30619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30631_30657 = state_30619__$1;
(statearr_30631_30657[(1)] = (8));

} else {
var statearr_30632_30658 = state_30619__$1;
(statearr_30632_30658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (14))){
var inst_30613 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
var statearr_30633_30659 = state_30619__$1;
(statearr_30633_30659[(2)] = inst_30613);

(statearr_30633_30659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (10))){
var inst_30605 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
var statearr_30634_30660 = state_30619__$1;
(statearr_30634_30660[(2)] = inst_30605);

(statearr_30634_30660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (8))){
var inst_30602 = cljs.core.async.close_BANG_.call(null,to);
var state_30619__$1 = state_30619;
var statearr_30635_30661 = state_30619__$1;
(statearr_30635_30661[(2)] = inst_30602);

(statearr_30635_30661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___30647))
;
return ((function (switch__30459__auto__,c__30480__auto___30647){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_30639 = [null,null,null,null,null,null,null,null];
(statearr_30639[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_30639[(1)] = (1));

return statearr_30639;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_30619){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_30619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e30640){if((e30640 instanceof Object)){
var ex__30463__auto__ = e30640;
var statearr_30641_30662 = state_30619;
(statearr_30641_30662[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30663 = state_30619;
state_30619 = G__30663;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_30619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_30619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___30647))
})();
var state__30482__auto__ = (function (){var statearr_30642 = f__30481__auto__.call(null);
(statearr_30642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___30647);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___30647))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30851){
var vec__30852 = p__30851;
var v = cljs.core.nth.call(null,vec__30852,(0),null);
var p = cljs.core.nth.call(null,vec__30852,(1),null);
var job = vec__30852;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30480__auto___31038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results){
return (function (state_30859){
var state_val_30860 = (state_30859[(1)]);
if((state_val_30860 === (1))){
var state_30859__$1 = state_30859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30859__$1,(2),res,v);
} else {
if((state_val_30860 === (2))){
var inst_30856 = (state_30859[(2)]);
var inst_30857 = cljs.core.async.close_BANG_.call(null,res);
var state_30859__$1 = (function (){var statearr_30861 = state_30859;
(statearr_30861[(7)] = inst_30856);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30859__$1,inst_30857);
} else {
return null;
}
}
});})(c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results))
;
return ((function (switch__30459__auto__,c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1 = (function (state_30859){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_30859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object)){
var ex__30463__auto__ = e30866;
var statearr_30867_31039 = state_30859;
(statearr_30867_31039[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31040 = state_30859;
state_30859 = G__31040;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = function(state_30859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1.call(this,state_30859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results))
})();
var state__30482__auto__ = (function (){var statearr_30868 = f__30481__auto__.call(null);
(statearr_30868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31038);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___31038,res,vec__30852,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30869){
var vec__30870 = p__30869;
var v = cljs.core.nth.call(null,vec__30870,(0),null);
var p = cljs.core.nth.call(null,vec__30870,(1),null);
var job = vec__30870;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25961__auto___31041 = n;
var __31042 = (0);
while(true){
if((__31042 < n__25961__auto___31041)){
var G__30873_31043 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30873_31043) {
case "compute":
var c__30480__auto___31045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31042,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (__31042,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function (state_30886){
var state_val_30887 = (state_30886[(1)]);
if((state_val_30887 === (1))){
var state_30886__$1 = state_30886;
var statearr_30888_31046 = state_30886__$1;
(statearr_30888_31046[(2)] = null);

(statearr_30888_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (2))){
var state_30886__$1 = state_30886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30886__$1,(4),jobs);
} else {
if((state_val_30887 === (3))){
var inst_30884 = (state_30886[(2)]);
var state_30886__$1 = state_30886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30886__$1,inst_30884);
} else {
if((state_val_30887 === (4))){
var inst_30876 = (state_30886[(2)]);
var inst_30877 = process.call(null,inst_30876);
var state_30886__$1 = state_30886;
if(cljs.core.truth_(inst_30877)){
var statearr_30889_31047 = state_30886__$1;
(statearr_30889_31047[(1)] = (5));

} else {
var statearr_30890_31048 = state_30886__$1;
(statearr_30890_31048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (5))){
var state_30886__$1 = state_30886;
var statearr_30891_31049 = state_30886__$1;
(statearr_30891_31049[(2)] = null);

(statearr_30891_31049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (6))){
var state_30886__$1 = state_30886;
var statearr_30892_31050 = state_30886__$1;
(statearr_30892_31050[(2)] = null);

(statearr_30892_31050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (7))){
var inst_30882 = (state_30886[(2)]);
var state_30886__$1 = state_30886;
var statearr_30893_31051 = state_30886__$1;
(statearr_30893_31051[(2)] = inst_30882);

(statearr_30893_31051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31042,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
;
return ((function (__31042,switch__30459__auto__,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null];
(statearr_30897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1 = (function (state_30886){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_30886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e30898){if((e30898 instanceof Object)){
var ex__30463__auto__ = e30898;
var statearr_30899_31052 = state_30886;
(statearr_30899_31052[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31053 = state_30886;
state_30886 = G__31053;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = function(state_30886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1.call(this,state_30886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__;
})()
;})(__31042,switch__30459__auto__,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
})();
var state__30482__auto__ = (function (){var statearr_30900 = f__30481__auto__.call(null);
(statearr_30900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31045);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(__31042,c__30480__auto___31045,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
);


break;
case "async":
var c__30480__auto___31054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31042,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (__31042,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function (state_30913){
var state_val_30914 = (state_30913[(1)]);
if((state_val_30914 === (1))){
var state_30913__$1 = state_30913;
var statearr_30915_31055 = state_30913__$1;
(statearr_30915_31055[(2)] = null);

(statearr_30915_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (2))){
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30913__$1,(4),jobs);
} else {
if((state_val_30914 === (3))){
var inst_30911 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30913__$1,inst_30911);
} else {
if((state_val_30914 === (4))){
var inst_30903 = (state_30913[(2)]);
var inst_30904 = async.call(null,inst_30903);
var state_30913__$1 = state_30913;
if(cljs.core.truth_(inst_30904)){
var statearr_30916_31056 = state_30913__$1;
(statearr_30916_31056[(1)] = (5));

} else {
var statearr_30917_31057 = state_30913__$1;
(statearr_30917_31057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (5))){
var state_30913__$1 = state_30913;
var statearr_30918_31058 = state_30913__$1;
(statearr_30918_31058[(2)] = null);

(statearr_30918_31058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (6))){
var state_30913__$1 = state_30913;
var statearr_30919_31059 = state_30913__$1;
(statearr_30919_31059[(2)] = null);

(statearr_30919_31059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (7))){
var inst_30909 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30920_31060 = state_30913__$1;
(statearr_30920_31060[(2)] = inst_30909);

(statearr_30920_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31042,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
;
return ((function (__31042,switch__30459__auto__,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_30924 = [null,null,null,null,null,null,null];
(statearr_30924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__);

(statearr_30924[(1)] = (1));

return statearr_30924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1 = (function (state_30913){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_30913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e30925){if((e30925 instanceof Object)){
var ex__30463__auto__ = e30925;
var statearr_30926_31061 = state_30913;
(statearr_30926_31061[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31062 = state_30913;
state_30913 = G__31062;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = function(state_30913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1.call(this,state_30913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__;
})()
;})(__31042,switch__30459__auto__,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
})();
var state__30482__auto__ = (function (){var statearr_30927 = f__30481__auto__.call(null);
(statearr_30927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31054);

return statearr_30927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(__31042,c__30480__auto___31054,G__30873_31043,n__25961__auto___31041,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31063 = (__31042 + (1));
__31042 = G__31063;
continue;
} else {
}
break;
}

var c__30480__auto___31064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___31064,jobs,results,process,async){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___31064,jobs,results,process,async){
return (function (state_30949){
var state_val_30950 = (state_30949[(1)]);
if((state_val_30950 === (1))){
var state_30949__$1 = state_30949;
var statearr_30951_31065 = state_30949__$1;
(statearr_30951_31065[(2)] = null);

(statearr_30951_31065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (2))){
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30949__$1,(4),from);
} else {
if((state_val_30950 === (3))){
var inst_30947 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30949__$1,inst_30947);
} else {
if((state_val_30950 === (4))){
var inst_30930 = (state_30949[(7)]);
var inst_30930__$1 = (state_30949[(2)]);
var inst_30931 = (inst_30930__$1 == null);
var state_30949__$1 = (function (){var statearr_30952 = state_30949;
(statearr_30952[(7)] = inst_30930__$1);

return statearr_30952;
})();
if(cljs.core.truth_(inst_30931)){
var statearr_30953_31066 = state_30949__$1;
(statearr_30953_31066[(1)] = (5));

} else {
var statearr_30954_31067 = state_30949__$1;
(statearr_30954_31067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (5))){
var inst_30933 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30949__$1 = state_30949;
var statearr_30955_31068 = state_30949__$1;
(statearr_30955_31068[(2)] = inst_30933);

(statearr_30955_31068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (6))){
var inst_30930 = (state_30949[(7)]);
var inst_30935 = (state_30949[(8)]);
var inst_30935__$1 = cljs.core.async.chan.call(null,(1));
var inst_30936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30937 = [inst_30930,inst_30935__$1];
var inst_30938 = (new cljs.core.PersistentVector(null,2,(5),inst_30936,inst_30937,null));
var state_30949__$1 = (function (){var statearr_30956 = state_30949;
(statearr_30956[(8)] = inst_30935__$1);

return statearr_30956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30949__$1,(8),jobs,inst_30938);
} else {
if((state_val_30950 === (7))){
var inst_30945 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
var statearr_30957_31069 = state_30949__$1;
(statearr_30957_31069[(2)] = inst_30945);

(statearr_30957_31069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (8))){
var inst_30935 = (state_30949[(8)]);
var inst_30940 = (state_30949[(2)]);
var state_30949__$1 = (function (){var statearr_30958 = state_30949;
(statearr_30958[(9)] = inst_30940);

return statearr_30958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30949__$1,(9),results,inst_30935);
} else {
if((state_val_30950 === (9))){
var inst_30942 = (state_30949[(2)]);
var state_30949__$1 = (function (){var statearr_30959 = state_30949;
(statearr_30959[(10)] = inst_30942);

return statearr_30959;
})();
var statearr_30960_31070 = state_30949__$1;
(statearr_30960_31070[(2)] = null);

(statearr_30960_31070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___31064,jobs,results,process,async))
;
return ((function (switch__30459__auto__,c__30480__auto___31064,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_30964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__);

(statearr_30964[(1)] = (1));

return statearr_30964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1 = (function (state_30949){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_30949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e30965){if((e30965 instanceof Object)){
var ex__30463__auto__ = e30965;
var statearr_30966_31071 = state_30949;
(statearr_30966_31071[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31072 = state_30949;
state_30949 = G__31072;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = function(state_30949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1.call(this,state_30949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___31064,jobs,results,process,async))
})();
var state__30482__auto__ = (function (){var statearr_30967 = f__30481__auto__.call(null);
(statearr_30967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31064);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___31064,jobs,results,process,async))
);


var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__,jobs,results,process,async){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__,jobs,results,process,async){
return (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (7))){
var inst_31001 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31007_31073 = state_31005__$1;
(statearr_31007_31073[(2)] = inst_31001);

(statearr_31007_31073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (20))){
var state_31005__$1 = state_31005;
var statearr_31008_31074 = state_31005__$1;
(statearr_31008_31074[(2)] = null);

(statearr_31008_31074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (1))){
var state_31005__$1 = state_31005;
var statearr_31009_31075 = state_31005__$1;
(statearr_31009_31075[(2)] = null);

(statearr_31009_31075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (4))){
var inst_30970 = (state_31005[(7)]);
var inst_30970__$1 = (state_31005[(2)]);
var inst_30971 = (inst_30970__$1 == null);
var state_31005__$1 = (function (){var statearr_31010 = state_31005;
(statearr_31010[(7)] = inst_30970__$1);

return statearr_31010;
})();
if(cljs.core.truth_(inst_30971)){
var statearr_31011_31076 = state_31005__$1;
(statearr_31011_31076[(1)] = (5));

} else {
var statearr_31012_31077 = state_31005__$1;
(statearr_31012_31077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (15))){
var inst_30983 = (state_31005[(8)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31005__$1,(18),to,inst_30983);
} else {
if((state_val_31006 === (21))){
var inst_30996 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31013_31078 = state_31005__$1;
(statearr_31013_31078[(2)] = inst_30996);

(statearr_31013_31078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (13))){
var inst_30998 = (state_31005[(2)]);
var state_31005__$1 = (function (){var statearr_31014 = state_31005;
(statearr_31014[(9)] = inst_30998);

return statearr_31014;
})();
var statearr_31015_31079 = state_31005__$1;
(statearr_31015_31079[(2)] = null);

(statearr_31015_31079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (6))){
var inst_30970 = (state_31005[(7)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(11),inst_30970);
} else {
if((state_val_31006 === (17))){
var inst_30991 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
if(cljs.core.truth_(inst_30991)){
var statearr_31016_31080 = state_31005__$1;
(statearr_31016_31080[(1)] = (19));

} else {
var statearr_31017_31081 = state_31005__$1;
(statearr_31017_31081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (3))){
var inst_31003 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31005__$1,inst_31003);
} else {
if((state_val_31006 === (12))){
var inst_30980 = (state_31005[(10)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(14),inst_30980);
} else {
if((state_val_31006 === (2))){
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(4),results);
} else {
if((state_val_31006 === (19))){
var state_31005__$1 = state_31005;
var statearr_31018_31082 = state_31005__$1;
(statearr_31018_31082[(2)] = null);

(statearr_31018_31082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (11))){
var inst_30980 = (state_31005[(2)]);
var state_31005__$1 = (function (){var statearr_31019 = state_31005;
(statearr_31019[(10)] = inst_30980);

return statearr_31019;
})();
var statearr_31020_31083 = state_31005__$1;
(statearr_31020_31083[(2)] = null);

(statearr_31020_31083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (9))){
var state_31005__$1 = state_31005;
var statearr_31021_31084 = state_31005__$1;
(statearr_31021_31084[(2)] = null);

(statearr_31021_31084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (5))){
var state_31005__$1 = state_31005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31022_31085 = state_31005__$1;
(statearr_31022_31085[(1)] = (8));

} else {
var statearr_31023_31086 = state_31005__$1;
(statearr_31023_31086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (14))){
var inst_30985 = (state_31005[(11)]);
var inst_30983 = (state_31005[(8)]);
var inst_30983__$1 = (state_31005[(2)]);
var inst_30984 = (inst_30983__$1 == null);
var inst_30985__$1 = cljs.core.not.call(null,inst_30984);
var state_31005__$1 = (function (){var statearr_31024 = state_31005;
(statearr_31024[(11)] = inst_30985__$1);

(statearr_31024[(8)] = inst_30983__$1);

return statearr_31024;
})();
if(inst_30985__$1){
var statearr_31025_31087 = state_31005__$1;
(statearr_31025_31087[(1)] = (15));

} else {
var statearr_31026_31088 = state_31005__$1;
(statearr_31026_31088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (16))){
var inst_30985 = (state_31005[(11)]);
var state_31005__$1 = state_31005;
var statearr_31027_31089 = state_31005__$1;
(statearr_31027_31089[(2)] = inst_30985);

(statearr_31027_31089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (10))){
var inst_30977 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31028_31090 = state_31005__$1;
(statearr_31028_31090[(2)] = inst_30977);

(statearr_31028_31090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (18))){
var inst_30988 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31029_31091 = state_31005__$1;
(statearr_31029_31091[(2)] = inst_30988);

(statearr_31029_31091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (8))){
var inst_30974 = cljs.core.async.close_BANG_.call(null,to);
var state_31005__$1 = state_31005;
var statearr_31030_31092 = state_31005__$1;
(statearr_31030_31092[(2)] = inst_30974);

(statearr_31030_31092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__,jobs,results,process,async))
;
return ((function (switch__30459__auto__,c__30480__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_31034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__);

(statearr_31034[(1)] = (1));

return statearr_31034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1 = (function (state_31005){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_31005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e31035){if((e31035 instanceof Object)){
var ex__30463__auto__ = e31035;
var statearr_31036_31093 = state_31005;
(statearr_31036_31093[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31094 = state_31005;
state_31005 = G__31094;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__,jobs,results,process,async))
})();
var state__30482__auto__ = (function (){var statearr_31037 = f__30481__auto__.call(null);
(statearr_31037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_31037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__,jobs,results,process,async))
);

return c__30480__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31095 = [];
var len__26121__auto___31098 = arguments.length;
var i__26122__auto___31099 = (0);
while(true){
if((i__26122__auto___31099 < len__26121__auto___31098)){
args31095.push((arguments[i__26122__auto___31099]));

var G__31100 = (i__26122__auto___31099 + (1));
i__26122__auto___31099 = G__31100;
continue;
} else {
}
break;
}

var G__31097 = args31095.length;
switch (G__31097) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31095.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31102 = [];
var len__26121__auto___31105 = arguments.length;
var i__26122__auto___31106 = (0);
while(true){
if((i__26122__auto___31106 < len__26121__auto___31105)){
args31102.push((arguments[i__26122__auto___31106]));

var G__31107 = (i__26122__auto___31106 + (1));
i__26122__auto___31106 = G__31107;
continue;
} else {
}
break;
}

var G__31104 = args31102.length;
switch (G__31104) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31102.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31109 = [];
var len__26121__auto___31162 = arguments.length;
var i__26122__auto___31163 = (0);
while(true){
if((i__26122__auto___31163 < len__26121__auto___31162)){
args31109.push((arguments[i__26122__auto___31163]));

var G__31164 = (i__26122__auto___31163 + (1));
i__26122__auto___31163 = G__31164;
continue;
} else {
}
break;
}

var G__31111 = args31109.length;
switch (G__31111) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31109.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30480__auto___31166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___31166,tc,fc){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___31166,tc,fc){
return (function (state_31137){
var state_val_31138 = (state_31137[(1)]);
if((state_val_31138 === (7))){
var inst_31133 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31139_31167 = state_31137__$1;
(statearr_31139_31167[(2)] = inst_31133);

(statearr_31139_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (1))){
var state_31137__$1 = state_31137;
var statearr_31140_31168 = state_31137__$1;
(statearr_31140_31168[(2)] = null);

(statearr_31140_31168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (4))){
var inst_31114 = (state_31137[(7)]);
var inst_31114__$1 = (state_31137[(2)]);
var inst_31115 = (inst_31114__$1 == null);
var state_31137__$1 = (function (){var statearr_31141 = state_31137;
(statearr_31141[(7)] = inst_31114__$1);

return statearr_31141;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31142_31169 = state_31137__$1;
(statearr_31142_31169[(1)] = (5));

} else {
var statearr_31143_31170 = state_31137__$1;
(statearr_31143_31170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (13))){
var state_31137__$1 = state_31137;
var statearr_31144_31171 = state_31137__$1;
(statearr_31144_31171[(2)] = null);

(statearr_31144_31171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (6))){
var inst_31114 = (state_31137[(7)]);
var inst_31120 = p.call(null,inst_31114);
var state_31137__$1 = state_31137;
if(cljs.core.truth_(inst_31120)){
var statearr_31145_31172 = state_31137__$1;
(statearr_31145_31172[(1)] = (9));

} else {
var statearr_31146_31173 = state_31137__$1;
(statearr_31146_31173[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (3))){
var inst_31135 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31137__$1,inst_31135);
} else {
if((state_val_31138 === (12))){
var state_31137__$1 = state_31137;
var statearr_31147_31174 = state_31137__$1;
(statearr_31147_31174[(2)] = null);

(statearr_31147_31174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (2))){
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31137__$1,(4),ch);
} else {
if((state_val_31138 === (11))){
var inst_31114 = (state_31137[(7)]);
var inst_31124 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31137__$1,(8),inst_31124,inst_31114);
} else {
if((state_val_31138 === (9))){
var state_31137__$1 = state_31137;
var statearr_31148_31175 = state_31137__$1;
(statearr_31148_31175[(2)] = tc);

(statearr_31148_31175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (5))){
var inst_31117 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31118 = cljs.core.async.close_BANG_.call(null,fc);
var state_31137__$1 = (function (){var statearr_31149 = state_31137;
(statearr_31149[(8)] = inst_31117);

return statearr_31149;
})();
var statearr_31150_31176 = state_31137__$1;
(statearr_31150_31176[(2)] = inst_31118);

(statearr_31150_31176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (14))){
var inst_31131 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31151_31177 = state_31137__$1;
(statearr_31151_31177[(2)] = inst_31131);

(statearr_31151_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (10))){
var state_31137__$1 = state_31137;
var statearr_31152_31178 = state_31137__$1;
(statearr_31152_31178[(2)] = fc);

(statearr_31152_31178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (8))){
var inst_31126 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
if(cljs.core.truth_(inst_31126)){
var statearr_31153_31179 = state_31137__$1;
(statearr_31153_31179[(1)] = (12));

} else {
var statearr_31154_31180 = state_31137__$1;
(statearr_31154_31180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___31166,tc,fc))
;
return ((function (switch__30459__auto__,c__30480__auto___31166,tc,fc){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_31158 = [null,null,null,null,null,null,null,null,null];
(statearr_31158[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_31158[(1)] = (1));

return statearr_31158;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_31137){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_31137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e31159){if((e31159 instanceof Object)){
var ex__30463__auto__ = e31159;
var statearr_31160_31181 = state_31137;
(statearr_31160_31181[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31182 = state_31137;
state_31137 = G__31182;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_31137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_31137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___31166,tc,fc))
})();
var state__30482__auto__ = (function (){var statearr_31161 = f__30481__auto__.call(null);
(statearr_31161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31166);

return statearr_31161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___31166,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__){
return (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (7))){
var inst_31242 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31248_31269 = state_31246__$1;
(statearr_31248_31269[(2)] = inst_31242);

(statearr_31248_31269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (1))){
var inst_31226 = init;
var state_31246__$1 = (function (){var statearr_31249 = state_31246;
(statearr_31249[(7)] = inst_31226);

return statearr_31249;
})();
var statearr_31250_31270 = state_31246__$1;
(statearr_31250_31270[(2)] = null);

(statearr_31250_31270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (4))){
var inst_31229 = (state_31246[(8)]);
var inst_31229__$1 = (state_31246[(2)]);
var inst_31230 = (inst_31229__$1 == null);
var state_31246__$1 = (function (){var statearr_31251 = state_31246;
(statearr_31251[(8)] = inst_31229__$1);

return statearr_31251;
})();
if(cljs.core.truth_(inst_31230)){
var statearr_31252_31271 = state_31246__$1;
(statearr_31252_31271[(1)] = (5));

} else {
var statearr_31253_31272 = state_31246__$1;
(statearr_31253_31272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (6))){
var inst_31226 = (state_31246[(7)]);
var inst_31229 = (state_31246[(8)]);
var inst_31233 = (state_31246[(9)]);
var inst_31233__$1 = f.call(null,inst_31226,inst_31229);
var inst_31234 = cljs.core.reduced_QMARK_.call(null,inst_31233__$1);
var state_31246__$1 = (function (){var statearr_31254 = state_31246;
(statearr_31254[(9)] = inst_31233__$1);

return statearr_31254;
})();
if(inst_31234){
var statearr_31255_31273 = state_31246__$1;
(statearr_31255_31273[(1)] = (8));

} else {
var statearr_31256_31274 = state_31246__$1;
(statearr_31256_31274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (3))){
var inst_31244 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31246__$1,inst_31244);
} else {
if((state_val_31247 === (2))){
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31246__$1,(4),ch);
} else {
if((state_val_31247 === (9))){
var inst_31233 = (state_31246[(9)]);
var inst_31226 = inst_31233;
var state_31246__$1 = (function (){var statearr_31257 = state_31246;
(statearr_31257[(7)] = inst_31226);

return statearr_31257;
})();
var statearr_31258_31275 = state_31246__$1;
(statearr_31258_31275[(2)] = null);

(statearr_31258_31275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (5))){
var inst_31226 = (state_31246[(7)]);
var state_31246__$1 = state_31246;
var statearr_31259_31276 = state_31246__$1;
(statearr_31259_31276[(2)] = inst_31226);

(statearr_31259_31276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (10))){
var inst_31240 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31260_31277 = state_31246__$1;
(statearr_31260_31277[(2)] = inst_31240);

(statearr_31260_31277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (8))){
var inst_31233 = (state_31246[(9)]);
var inst_31236 = cljs.core.deref.call(null,inst_31233);
var state_31246__$1 = state_31246;
var statearr_31261_31278 = state_31246__$1;
(statearr_31261_31278[(2)] = inst_31236);

(statearr_31261_31278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30460__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30460__auto____0 = (function (){
var statearr_31265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31265[(0)] = cljs$core$async$reduce_$_state_machine__30460__auto__);

(statearr_31265[(1)] = (1));

return statearr_31265;
});
var cljs$core$async$reduce_$_state_machine__30460__auto____1 = (function (state_31246){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_31246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e31266){if((e31266 instanceof Object)){
var ex__30463__auto__ = e31266;
var statearr_31267_31279 = state_31246;
(statearr_31267_31279[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31280 = state_31246;
state_31246 = G__31280;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30460__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30460__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30460__auto____0;
cljs$core$async$reduce_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30460__auto____1;
return cljs$core$async$reduce_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__))
})();
var state__30482__auto__ = (function (){var statearr_31268 = f__30481__auto__.call(null);
(statearr_31268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_31268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__))
);

return c__30480__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31281 = [];
var len__26121__auto___31333 = arguments.length;
var i__26122__auto___31334 = (0);
while(true){
if((i__26122__auto___31334 < len__26121__auto___31333)){
args31281.push((arguments[i__26122__auto___31334]));

var G__31335 = (i__26122__auto___31334 + (1));
i__26122__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var G__31283 = args31281.length;
switch (G__31283) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31281.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__){
return (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (7))){
var inst_31290 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31310_31337 = state_31308__$1;
(statearr_31310_31337[(2)] = inst_31290);

(statearr_31310_31337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (1))){
var inst_31284 = cljs.core.seq.call(null,coll);
var inst_31285 = inst_31284;
var state_31308__$1 = (function (){var statearr_31311 = state_31308;
(statearr_31311[(7)] = inst_31285);

return statearr_31311;
})();
var statearr_31312_31338 = state_31308__$1;
(statearr_31312_31338[(2)] = null);

(statearr_31312_31338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (4))){
var inst_31285 = (state_31308[(7)]);
var inst_31288 = cljs.core.first.call(null,inst_31285);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31308__$1,(7),ch,inst_31288);
} else {
if((state_val_31309 === (13))){
var inst_31302 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31313_31339 = state_31308__$1;
(statearr_31313_31339[(2)] = inst_31302);

(statearr_31313_31339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (6))){
var inst_31293 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31293)){
var statearr_31314_31340 = state_31308__$1;
(statearr_31314_31340[(1)] = (8));

} else {
var statearr_31315_31341 = state_31308__$1;
(statearr_31315_31341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (3))){
var inst_31306 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (12))){
var state_31308__$1 = state_31308;
var statearr_31316_31342 = state_31308__$1;
(statearr_31316_31342[(2)] = null);

(statearr_31316_31342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (2))){
var inst_31285 = (state_31308[(7)]);
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31285)){
var statearr_31317_31343 = state_31308__$1;
(statearr_31317_31343[(1)] = (4));

} else {
var statearr_31318_31344 = state_31308__$1;
(statearr_31318_31344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (11))){
var inst_31299 = cljs.core.async.close_BANG_.call(null,ch);
var state_31308__$1 = state_31308;
var statearr_31319_31345 = state_31308__$1;
(statearr_31319_31345[(2)] = inst_31299);

(statearr_31319_31345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (9))){
var state_31308__$1 = state_31308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31320_31346 = state_31308__$1;
(statearr_31320_31346[(1)] = (11));

} else {
var statearr_31321_31347 = state_31308__$1;
(statearr_31321_31347[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (5))){
var inst_31285 = (state_31308[(7)]);
var state_31308__$1 = state_31308;
var statearr_31322_31348 = state_31308__$1;
(statearr_31322_31348[(2)] = inst_31285);

(statearr_31322_31348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (10))){
var inst_31304 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31323_31349 = state_31308__$1;
(statearr_31323_31349[(2)] = inst_31304);

(statearr_31323_31349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (8))){
var inst_31285 = (state_31308[(7)]);
var inst_31295 = cljs.core.next.call(null,inst_31285);
var inst_31285__$1 = inst_31295;
var state_31308__$1 = (function (){var statearr_31324 = state_31308;
(statearr_31324[(7)] = inst_31285__$1);

return statearr_31324;
})();
var statearr_31325_31350 = state_31308__$1;
(statearr_31325_31350[(2)] = null);

(statearr_31325_31350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_31329 = [null,null,null,null,null,null,null,null];
(statearr_31329[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_31329[(1)] = (1));

return statearr_31329;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_31308){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_31308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e31330){if((e31330 instanceof Object)){
var ex__30463__auto__ = e31330;
var statearr_31331_31351 = state_31308;
(statearr_31331_31351[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31352 = state_31308;
state_31308 = G__31352;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__))
})();
var state__30482__auto__ = (function (){var statearr_31332 = f__30481__auto__.call(null);
(statearr_31332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_31332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__))
);

return c__30480__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25709__auto__ = (((_ == null))?null:_);
var m__25710__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,_);
} else {
var m__25710__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25710__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,ch);
} else {
var m__25710__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m);
} else {
var m__25710__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31578 = (function (mult,ch,cs,meta31579){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31579 = meta31579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31580,meta31579__$1){
var self__ = this;
var _31580__$1 = this;
return (new cljs.core.async.t_cljs$core$async31578(self__.mult,self__.ch,self__.cs,meta31579__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31580){
var self__ = this;
var _31580__$1 = this;
return self__.meta31579;
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31579","meta31579",1370404953,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31578";

cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31578");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31578 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31578(mult__$1,ch__$1,cs__$1,meta31579){
return (new cljs.core.async.t_cljs$core$async31578(mult__$1,ch__$1,cs__$1,meta31579));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31578(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30480__auto___31803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___31803,cs,m,dchan,dctr,done){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___31803,cs,m,dchan,dctr,done){
return (function (state_31715){
var state_val_31716 = (state_31715[(1)]);
if((state_val_31716 === (7))){
var inst_31711 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31717_31804 = state_31715__$1;
(statearr_31717_31804[(2)] = inst_31711);

(statearr_31717_31804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (20))){
var inst_31614 = (state_31715[(7)]);
var inst_31626 = cljs.core.first.call(null,inst_31614);
var inst_31627 = cljs.core.nth.call(null,inst_31626,(0),null);
var inst_31628 = cljs.core.nth.call(null,inst_31626,(1),null);
var state_31715__$1 = (function (){var statearr_31718 = state_31715;
(statearr_31718[(8)] = inst_31627);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31628)){
var statearr_31719_31805 = state_31715__$1;
(statearr_31719_31805[(1)] = (22));

} else {
var statearr_31720_31806 = state_31715__$1;
(statearr_31720_31806[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (27))){
var inst_31656 = (state_31715[(9)]);
var inst_31658 = (state_31715[(10)]);
var inst_31663 = (state_31715[(11)]);
var inst_31583 = (state_31715[(12)]);
var inst_31663__$1 = cljs.core._nth.call(null,inst_31656,inst_31658);
var inst_31664 = cljs.core.async.put_BANG_.call(null,inst_31663__$1,inst_31583,done);
var state_31715__$1 = (function (){var statearr_31721 = state_31715;
(statearr_31721[(11)] = inst_31663__$1);

return statearr_31721;
})();
if(cljs.core.truth_(inst_31664)){
var statearr_31722_31807 = state_31715__$1;
(statearr_31722_31807[(1)] = (30));

} else {
var statearr_31723_31808 = state_31715__$1;
(statearr_31723_31808[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (1))){
var state_31715__$1 = state_31715;
var statearr_31724_31809 = state_31715__$1;
(statearr_31724_31809[(2)] = null);

(statearr_31724_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (24))){
var inst_31614 = (state_31715[(7)]);
var inst_31633 = (state_31715[(2)]);
var inst_31634 = cljs.core.next.call(null,inst_31614);
var inst_31592 = inst_31634;
var inst_31593 = null;
var inst_31594 = (0);
var inst_31595 = (0);
var state_31715__$1 = (function (){var statearr_31725 = state_31715;
(statearr_31725[(13)] = inst_31595);

(statearr_31725[(14)] = inst_31594);

(statearr_31725[(15)] = inst_31593);

(statearr_31725[(16)] = inst_31633);

(statearr_31725[(17)] = inst_31592);

return statearr_31725;
})();
var statearr_31726_31810 = state_31715__$1;
(statearr_31726_31810[(2)] = null);

(statearr_31726_31810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (39))){
var state_31715__$1 = state_31715;
var statearr_31730_31811 = state_31715__$1;
(statearr_31730_31811[(2)] = null);

(statearr_31730_31811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (4))){
var inst_31583 = (state_31715[(12)]);
var inst_31583__$1 = (state_31715[(2)]);
var inst_31584 = (inst_31583__$1 == null);
var state_31715__$1 = (function (){var statearr_31731 = state_31715;
(statearr_31731[(12)] = inst_31583__$1);

return statearr_31731;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31732_31812 = state_31715__$1;
(statearr_31732_31812[(1)] = (5));

} else {
var statearr_31733_31813 = state_31715__$1;
(statearr_31733_31813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (15))){
var inst_31595 = (state_31715[(13)]);
var inst_31594 = (state_31715[(14)]);
var inst_31593 = (state_31715[(15)]);
var inst_31592 = (state_31715[(17)]);
var inst_31610 = (state_31715[(2)]);
var inst_31611 = (inst_31595 + (1));
var tmp31727 = inst_31594;
var tmp31728 = inst_31593;
var tmp31729 = inst_31592;
var inst_31592__$1 = tmp31729;
var inst_31593__$1 = tmp31728;
var inst_31594__$1 = tmp31727;
var inst_31595__$1 = inst_31611;
var state_31715__$1 = (function (){var statearr_31734 = state_31715;
(statearr_31734[(18)] = inst_31610);

(statearr_31734[(13)] = inst_31595__$1);

(statearr_31734[(14)] = inst_31594__$1);

(statearr_31734[(15)] = inst_31593__$1);

(statearr_31734[(17)] = inst_31592__$1);

return statearr_31734;
})();
var statearr_31735_31814 = state_31715__$1;
(statearr_31735_31814[(2)] = null);

(statearr_31735_31814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (21))){
var inst_31637 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31739_31815 = state_31715__$1;
(statearr_31739_31815[(2)] = inst_31637);

(statearr_31739_31815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (31))){
var inst_31663 = (state_31715[(11)]);
var inst_31667 = done.call(null,null);
var inst_31668 = cljs.core.async.untap_STAR_.call(null,m,inst_31663);
var state_31715__$1 = (function (){var statearr_31740 = state_31715;
(statearr_31740[(19)] = inst_31667);

return statearr_31740;
})();
var statearr_31741_31816 = state_31715__$1;
(statearr_31741_31816[(2)] = inst_31668);

(statearr_31741_31816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (32))){
var inst_31657 = (state_31715[(20)]);
var inst_31656 = (state_31715[(9)]);
var inst_31658 = (state_31715[(10)]);
var inst_31655 = (state_31715[(21)]);
var inst_31670 = (state_31715[(2)]);
var inst_31671 = (inst_31658 + (1));
var tmp31736 = inst_31657;
var tmp31737 = inst_31656;
var tmp31738 = inst_31655;
var inst_31655__$1 = tmp31738;
var inst_31656__$1 = tmp31737;
var inst_31657__$1 = tmp31736;
var inst_31658__$1 = inst_31671;
var state_31715__$1 = (function (){var statearr_31742 = state_31715;
(statearr_31742[(20)] = inst_31657__$1);

(statearr_31742[(9)] = inst_31656__$1);

(statearr_31742[(10)] = inst_31658__$1);

(statearr_31742[(22)] = inst_31670);

(statearr_31742[(21)] = inst_31655__$1);

return statearr_31742;
})();
var statearr_31743_31817 = state_31715__$1;
(statearr_31743_31817[(2)] = null);

(statearr_31743_31817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (40))){
var inst_31683 = (state_31715[(23)]);
var inst_31687 = done.call(null,null);
var inst_31688 = cljs.core.async.untap_STAR_.call(null,m,inst_31683);
var state_31715__$1 = (function (){var statearr_31744 = state_31715;
(statearr_31744[(24)] = inst_31687);

return statearr_31744;
})();
var statearr_31745_31818 = state_31715__$1;
(statearr_31745_31818[(2)] = inst_31688);

(statearr_31745_31818[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (33))){
var inst_31674 = (state_31715[(25)]);
var inst_31676 = cljs.core.chunked_seq_QMARK_.call(null,inst_31674);
var state_31715__$1 = state_31715;
if(inst_31676){
var statearr_31746_31819 = state_31715__$1;
(statearr_31746_31819[(1)] = (36));

} else {
var statearr_31747_31820 = state_31715__$1;
(statearr_31747_31820[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (13))){
var inst_31604 = (state_31715[(26)]);
var inst_31607 = cljs.core.async.close_BANG_.call(null,inst_31604);
var state_31715__$1 = state_31715;
var statearr_31748_31821 = state_31715__$1;
(statearr_31748_31821[(2)] = inst_31607);

(statearr_31748_31821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (22))){
var inst_31627 = (state_31715[(8)]);
var inst_31630 = cljs.core.async.close_BANG_.call(null,inst_31627);
var state_31715__$1 = state_31715;
var statearr_31749_31822 = state_31715__$1;
(statearr_31749_31822[(2)] = inst_31630);

(statearr_31749_31822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (36))){
var inst_31674 = (state_31715[(25)]);
var inst_31678 = cljs.core.chunk_first.call(null,inst_31674);
var inst_31679 = cljs.core.chunk_rest.call(null,inst_31674);
var inst_31680 = cljs.core.count.call(null,inst_31678);
var inst_31655 = inst_31679;
var inst_31656 = inst_31678;
var inst_31657 = inst_31680;
var inst_31658 = (0);
var state_31715__$1 = (function (){var statearr_31750 = state_31715;
(statearr_31750[(20)] = inst_31657);

(statearr_31750[(9)] = inst_31656);

(statearr_31750[(10)] = inst_31658);

(statearr_31750[(21)] = inst_31655);

return statearr_31750;
})();
var statearr_31751_31823 = state_31715__$1;
(statearr_31751_31823[(2)] = null);

(statearr_31751_31823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (41))){
var inst_31674 = (state_31715[(25)]);
var inst_31690 = (state_31715[(2)]);
var inst_31691 = cljs.core.next.call(null,inst_31674);
var inst_31655 = inst_31691;
var inst_31656 = null;
var inst_31657 = (0);
var inst_31658 = (0);
var state_31715__$1 = (function (){var statearr_31752 = state_31715;
(statearr_31752[(27)] = inst_31690);

(statearr_31752[(20)] = inst_31657);

(statearr_31752[(9)] = inst_31656);

(statearr_31752[(10)] = inst_31658);

(statearr_31752[(21)] = inst_31655);

return statearr_31752;
})();
var statearr_31753_31824 = state_31715__$1;
(statearr_31753_31824[(2)] = null);

(statearr_31753_31824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (43))){
var state_31715__$1 = state_31715;
var statearr_31754_31825 = state_31715__$1;
(statearr_31754_31825[(2)] = null);

(statearr_31754_31825[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (29))){
var inst_31699 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31755_31826 = state_31715__$1;
(statearr_31755_31826[(2)] = inst_31699);

(statearr_31755_31826[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (44))){
var inst_31708 = (state_31715[(2)]);
var state_31715__$1 = (function (){var statearr_31756 = state_31715;
(statearr_31756[(28)] = inst_31708);

return statearr_31756;
})();
var statearr_31757_31827 = state_31715__$1;
(statearr_31757_31827[(2)] = null);

(statearr_31757_31827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (6))){
var inst_31647 = (state_31715[(29)]);
var inst_31646 = cljs.core.deref.call(null,cs);
var inst_31647__$1 = cljs.core.keys.call(null,inst_31646);
var inst_31648 = cljs.core.count.call(null,inst_31647__$1);
var inst_31649 = cljs.core.reset_BANG_.call(null,dctr,inst_31648);
var inst_31654 = cljs.core.seq.call(null,inst_31647__$1);
var inst_31655 = inst_31654;
var inst_31656 = null;
var inst_31657 = (0);
var inst_31658 = (0);
var state_31715__$1 = (function (){var statearr_31758 = state_31715;
(statearr_31758[(20)] = inst_31657);

(statearr_31758[(30)] = inst_31649);

(statearr_31758[(9)] = inst_31656);

(statearr_31758[(10)] = inst_31658);

(statearr_31758[(21)] = inst_31655);

(statearr_31758[(29)] = inst_31647__$1);

return statearr_31758;
})();
var statearr_31759_31828 = state_31715__$1;
(statearr_31759_31828[(2)] = null);

(statearr_31759_31828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (28))){
var inst_31674 = (state_31715[(25)]);
var inst_31655 = (state_31715[(21)]);
var inst_31674__$1 = cljs.core.seq.call(null,inst_31655);
var state_31715__$1 = (function (){var statearr_31760 = state_31715;
(statearr_31760[(25)] = inst_31674__$1);

return statearr_31760;
})();
if(inst_31674__$1){
var statearr_31761_31829 = state_31715__$1;
(statearr_31761_31829[(1)] = (33));

} else {
var statearr_31762_31830 = state_31715__$1;
(statearr_31762_31830[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (25))){
var inst_31657 = (state_31715[(20)]);
var inst_31658 = (state_31715[(10)]);
var inst_31660 = (inst_31658 < inst_31657);
var inst_31661 = inst_31660;
var state_31715__$1 = state_31715;
if(cljs.core.truth_(inst_31661)){
var statearr_31763_31831 = state_31715__$1;
(statearr_31763_31831[(1)] = (27));

} else {
var statearr_31764_31832 = state_31715__$1;
(statearr_31764_31832[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (34))){
var state_31715__$1 = state_31715;
var statearr_31765_31833 = state_31715__$1;
(statearr_31765_31833[(2)] = null);

(statearr_31765_31833[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (17))){
var state_31715__$1 = state_31715;
var statearr_31766_31834 = state_31715__$1;
(statearr_31766_31834[(2)] = null);

(statearr_31766_31834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (3))){
var inst_31713 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31715__$1,inst_31713);
} else {
if((state_val_31716 === (12))){
var inst_31642 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31767_31835 = state_31715__$1;
(statearr_31767_31835[(2)] = inst_31642);

(statearr_31767_31835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (2))){
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31715__$1,(4),ch);
} else {
if((state_val_31716 === (23))){
var state_31715__$1 = state_31715;
var statearr_31768_31836 = state_31715__$1;
(statearr_31768_31836[(2)] = null);

(statearr_31768_31836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (35))){
var inst_31697 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31769_31837 = state_31715__$1;
(statearr_31769_31837[(2)] = inst_31697);

(statearr_31769_31837[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (19))){
var inst_31614 = (state_31715[(7)]);
var inst_31618 = cljs.core.chunk_first.call(null,inst_31614);
var inst_31619 = cljs.core.chunk_rest.call(null,inst_31614);
var inst_31620 = cljs.core.count.call(null,inst_31618);
var inst_31592 = inst_31619;
var inst_31593 = inst_31618;
var inst_31594 = inst_31620;
var inst_31595 = (0);
var state_31715__$1 = (function (){var statearr_31770 = state_31715;
(statearr_31770[(13)] = inst_31595);

(statearr_31770[(14)] = inst_31594);

(statearr_31770[(15)] = inst_31593);

(statearr_31770[(17)] = inst_31592);

return statearr_31770;
})();
var statearr_31771_31838 = state_31715__$1;
(statearr_31771_31838[(2)] = null);

(statearr_31771_31838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (11))){
var inst_31614 = (state_31715[(7)]);
var inst_31592 = (state_31715[(17)]);
var inst_31614__$1 = cljs.core.seq.call(null,inst_31592);
var state_31715__$1 = (function (){var statearr_31772 = state_31715;
(statearr_31772[(7)] = inst_31614__$1);

return statearr_31772;
})();
if(inst_31614__$1){
var statearr_31773_31839 = state_31715__$1;
(statearr_31773_31839[(1)] = (16));

} else {
var statearr_31774_31840 = state_31715__$1;
(statearr_31774_31840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (9))){
var inst_31644 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31775_31841 = state_31715__$1;
(statearr_31775_31841[(2)] = inst_31644);

(statearr_31775_31841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (5))){
var inst_31590 = cljs.core.deref.call(null,cs);
var inst_31591 = cljs.core.seq.call(null,inst_31590);
var inst_31592 = inst_31591;
var inst_31593 = null;
var inst_31594 = (0);
var inst_31595 = (0);
var state_31715__$1 = (function (){var statearr_31776 = state_31715;
(statearr_31776[(13)] = inst_31595);

(statearr_31776[(14)] = inst_31594);

(statearr_31776[(15)] = inst_31593);

(statearr_31776[(17)] = inst_31592);

return statearr_31776;
})();
var statearr_31777_31842 = state_31715__$1;
(statearr_31777_31842[(2)] = null);

(statearr_31777_31842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (14))){
var state_31715__$1 = state_31715;
var statearr_31778_31843 = state_31715__$1;
(statearr_31778_31843[(2)] = null);

(statearr_31778_31843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (45))){
var inst_31705 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31779_31844 = state_31715__$1;
(statearr_31779_31844[(2)] = inst_31705);

(statearr_31779_31844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (26))){
var inst_31647 = (state_31715[(29)]);
var inst_31701 = (state_31715[(2)]);
var inst_31702 = cljs.core.seq.call(null,inst_31647);
var state_31715__$1 = (function (){var statearr_31780 = state_31715;
(statearr_31780[(31)] = inst_31701);

return statearr_31780;
})();
if(inst_31702){
var statearr_31781_31845 = state_31715__$1;
(statearr_31781_31845[(1)] = (42));

} else {
var statearr_31782_31846 = state_31715__$1;
(statearr_31782_31846[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (16))){
var inst_31614 = (state_31715[(7)]);
var inst_31616 = cljs.core.chunked_seq_QMARK_.call(null,inst_31614);
var state_31715__$1 = state_31715;
if(inst_31616){
var statearr_31783_31847 = state_31715__$1;
(statearr_31783_31847[(1)] = (19));

} else {
var statearr_31784_31848 = state_31715__$1;
(statearr_31784_31848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (38))){
var inst_31694 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31785_31849 = state_31715__$1;
(statearr_31785_31849[(2)] = inst_31694);

(statearr_31785_31849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (30))){
var state_31715__$1 = state_31715;
var statearr_31786_31850 = state_31715__$1;
(statearr_31786_31850[(2)] = null);

(statearr_31786_31850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (10))){
var inst_31595 = (state_31715[(13)]);
var inst_31593 = (state_31715[(15)]);
var inst_31603 = cljs.core._nth.call(null,inst_31593,inst_31595);
var inst_31604 = cljs.core.nth.call(null,inst_31603,(0),null);
var inst_31605 = cljs.core.nth.call(null,inst_31603,(1),null);
var state_31715__$1 = (function (){var statearr_31787 = state_31715;
(statearr_31787[(26)] = inst_31604);

return statearr_31787;
})();
if(cljs.core.truth_(inst_31605)){
var statearr_31788_31851 = state_31715__$1;
(statearr_31788_31851[(1)] = (13));

} else {
var statearr_31789_31852 = state_31715__$1;
(statearr_31789_31852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (18))){
var inst_31640 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31790_31853 = state_31715__$1;
(statearr_31790_31853[(2)] = inst_31640);

(statearr_31790_31853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (42))){
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31715__$1,(45),dchan);
} else {
if((state_val_31716 === (37))){
var inst_31674 = (state_31715[(25)]);
var inst_31683 = (state_31715[(23)]);
var inst_31583 = (state_31715[(12)]);
var inst_31683__$1 = cljs.core.first.call(null,inst_31674);
var inst_31684 = cljs.core.async.put_BANG_.call(null,inst_31683__$1,inst_31583,done);
var state_31715__$1 = (function (){var statearr_31791 = state_31715;
(statearr_31791[(23)] = inst_31683__$1);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31684)){
var statearr_31792_31854 = state_31715__$1;
(statearr_31792_31854[(1)] = (39));

} else {
var statearr_31793_31855 = state_31715__$1;
(statearr_31793_31855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (8))){
var inst_31595 = (state_31715[(13)]);
var inst_31594 = (state_31715[(14)]);
var inst_31597 = (inst_31595 < inst_31594);
var inst_31598 = inst_31597;
var state_31715__$1 = state_31715;
if(cljs.core.truth_(inst_31598)){
var statearr_31794_31856 = state_31715__$1;
(statearr_31794_31856[(1)] = (10));

} else {
var statearr_31795_31857 = state_31715__$1;
(statearr_31795_31857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___31803,cs,m,dchan,dctr,done))
;
return ((function (switch__30459__auto__,c__30480__auto___31803,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30460__auto__ = null;
var cljs$core$async$mult_$_state_machine__30460__auto____0 = (function (){
var statearr_31799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31799[(0)] = cljs$core$async$mult_$_state_machine__30460__auto__);

(statearr_31799[(1)] = (1));

return statearr_31799;
});
var cljs$core$async$mult_$_state_machine__30460__auto____1 = (function (state_31715){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_31715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e31800){if((e31800 instanceof Object)){
var ex__30463__auto__ = e31800;
var statearr_31801_31858 = state_31715;
(statearr_31801_31858[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31859 = state_31715;
state_31715 = G__31859;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30460__auto__ = function(state_31715){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30460__auto____1.call(this,state_31715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30460__auto____0;
cljs$core$async$mult_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30460__auto____1;
return cljs$core$async$mult_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___31803,cs,m,dchan,dctr,done))
})();
var state__30482__auto__ = (function (){var statearr_31802 = f__30481__auto__.call(null);
(statearr_31802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___31803);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___31803,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31860 = [];
var len__26121__auto___31863 = arguments.length;
var i__26122__auto___31864 = (0);
while(true){
if((i__26122__auto___31864 < len__26121__auto___31863)){
args31860.push((arguments[i__26122__auto___31864]));

var G__31865 = (i__26122__auto___31864 + (1));
i__26122__auto___31864 = G__31865;
continue;
} else {
}
break;
}

var G__31862 = args31860.length;
switch (G__31862) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31860.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,ch);
} else {
var m__25710__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,ch);
} else {
var m__25710__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m);
} else {
var m__25710__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,state_map);
} else {
var m__25710__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25709__auto__ = (((m == null))?null:m);
var m__25710__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,m,mode);
} else {
var m__25710__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___31877 = arguments.length;
var i__26122__auto___31878 = (0);
while(true){
if((i__26122__auto___31878 < len__26121__auto___31877)){
args__26128__auto__.push((arguments[i__26122__auto___31878]));

var G__31879 = (i__26122__auto___31878 + (1));
i__26122__auto___31878 = G__31879;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31871){
var map__31872 = p__31871;
var map__31872__$1 = ((((!((map__31872 == null)))?((((map__31872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31872):map__31872);
var opts = map__31872__$1;
var statearr_31874_31880 = state;
(statearr_31874_31880[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31872,map__31872__$1,opts){
return (function (val){
var statearr_31875_31881 = state;
(statearr_31875_31881[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31872,map__31872__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31876_31882 = state;
(statearr_31876_31882[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31867){
var G__31868 = cljs.core.first.call(null,seq31867);
var seq31867__$1 = cljs.core.next.call(null,seq31867);
var G__31869 = cljs.core.first.call(null,seq31867__$1);
var seq31867__$2 = cljs.core.next.call(null,seq31867__$1);
var G__31870 = cljs.core.first.call(null,seq31867__$2);
var seq31867__$3 = cljs.core.next.call(null,seq31867__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31868,G__31869,G__31870,seq31867__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32048 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32049){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32049 = meta32049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32050,meta32049__$1){
var self__ = this;
var _32050__$1 = this;
return (new cljs.core.async.t_cljs$core$async32048(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32049__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32050){
var self__ = this;
var _32050__$1 = this;
return self__.meta32049;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32049","meta32049",1156297648,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32048";

cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32048");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32048 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32048(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32049){
return (new cljs.core.async.t_cljs$core$async32048(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32049));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32048(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30480__auto___32213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32150){
var state_val_32151 = (state_32150[(1)]);
if((state_val_32151 === (7))){
var inst_32066 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32152_32214 = state_32150__$1;
(statearr_32152_32214[(2)] = inst_32066);

(statearr_32152_32214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (20))){
var inst_32078 = (state_32150[(7)]);
var state_32150__$1 = state_32150;
var statearr_32153_32215 = state_32150__$1;
(statearr_32153_32215[(2)] = inst_32078);

(statearr_32153_32215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (27))){
var state_32150__$1 = state_32150;
var statearr_32154_32216 = state_32150__$1;
(statearr_32154_32216[(2)] = null);

(statearr_32154_32216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (1))){
var inst_32054 = (state_32150[(8)]);
var inst_32054__$1 = calc_state.call(null);
var inst_32056 = (inst_32054__$1 == null);
var inst_32057 = cljs.core.not.call(null,inst_32056);
var state_32150__$1 = (function (){var statearr_32155 = state_32150;
(statearr_32155[(8)] = inst_32054__$1);

return statearr_32155;
})();
if(inst_32057){
var statearr_32156_32217 = state_32150__$1;
(statearr_32156_32217[(1)] = (2));

} else {
var statearr_32157_32218 = state_32150__$1;
(statearr_32157_32218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (24))){
var inst_32124 = (state_32150[(9)]);
var inst_32101 = (state_32150[(10)]);
var inst_32110 = (state_32150[(11)]);
var inst_32124__$1 = inst_32101.call(null,inst_32110);
var state_32150__$1 = (function (){var statearr_32158 = state_32150;
(statearr_32158[(9)] = inst_32124__$1);

return statearr_32158;
})();
if(cljs.core.truth_(inst_32124__$1)){
var statearr_32159_32219 = state_32150__$1;
(statearr_32159_32219[(1)] = (29));

} else {
var statearr_32160_32220 = state_32150__$1;
(statearr_32160_32220[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (4))){
var inst_32069 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32069)){
var statearr_32161_32221 = state_32150__$1;
(statearr_32161_32221[(1)] = (8));

} else {
var statearr_32162_32222 = state_32150__$1;
(statearr_32162_32222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (15))){
var inst_32095 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32095)){
var statearr_32163_32223 = state_32150__$1;
(statearr_32163_32223[(1)] = (19));

} else {
var statearr_32164_32224 = state_32150__$1;
(statearr_32164_32224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (21))){
var inst_32100 = (state_32150[(12)]);
var inst_32100__$1 = (state_32150[(2)]);
var inst_32101 = cljs.core.get.call(null,inst_32100__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32102 = cljs.core.get.call(null,inst_32100__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32103 = cljs.core.get.call(null,inst_32100__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32150__$1 = (function (){var statearr_32165 = state_32150;
(statearr_32165[(10)] = inst_32101);

(statearr_32165[(12)] = inst_32100__$1);

(statearr_32165[(13)] = inst_32102);

return statearr_32165;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32150__$1,(22),inst_32103);
} else {
if((state_val_32151 === (31))){
var inst_32132 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32132)){
var statearr_32166_32225 = state_32150__$1;
(statearr_32166_32225[(1)] = (32));

} else {
var statearr_32167_32226 = state_32150__$1;
(statearr_32167_32226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (32))){
var inst_32109 = (state_32150[(14)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32150__$1,(35),out,inst_32109);
} else {
if((state_val_32151 === (33))){
var inst_32100 = (state_32150[(12)]);
var inst_32078 = inst_32100;
var state_32150__$1 = (function (){var statearr_32168 = state_32150;
(statearr_32168[(7)] = inst_32078);

return statearr_32168;
})();
var statearr_32169_32227 = state_32150__$1;
(statearr_32169_32227[(2)] = null);

(statearr_32169_32227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (13))){
var inst_32078 = (state_32150[(7)]);
var inst_32085 = inst_32078.cljs$lang$protocol_mask$partition0$;
var inst_32086 = (inst_32085 & (64));
var inst_32087 = inst_32078.cljs$core$ISeq$;
var inst_32088 = (inst_32086) || (inst_32087);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32088)){
var statearr_32170_32228 = state_32150__$1;
(statearr_32170_32228[(1)] = (16));

} else {
var statearr_32171_32229 = state_32150__$1;
(statearr_32171_32229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (22))){
var inst_32109 = (state_32150[(14)]);
var inst_32110 = (state_32150[(11)]);
var inst_32108 = (state_32150[(2)]);
var inst_32109__$1 = cljs.core.nth.call(null,inst_32108,(0),null);
var inst_32110__$1 = cljs.core.nth.call(null,inst_32108,(1),null);
var inst_32111 = (inst_32109__$1 == null);
var inst_32112 = cljs.core._EQ_.call(null,inst_32110__$1,change);
var inst_32113 = (inst_32111) || (inst_32112);
var state_32150__$1 = (function (){var statearr_32172 = state_32150;
(statearr_32172[(14)] = inst_32109__$1);

(statearr_32172[(11)] = inst_32110__$1);

return statearr_32172;
})();
if(cljs.core.truth_(inst_32113)){
var statearr_32173_32230 = state_32150__$1;
(statearr_32173_32230[(1)] = (23));

} else {
var statearr_32174_32231 = state_32150__$1;
(statearr_32174_32231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (36))){
var inst_32100 = (state_32150[(12)]);
var inst_32078 = inst_32100;
var state_32150__$1 = (function (){var statearr_32175 = state_32150;
(statearr_32175[(7)] = inst_32078);

return statearr_32175;
})();
var statearr_32176_32232 = state_32150__$1;
(statearr_32176_32232[(2)] = null);

(statearr_32176_32232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (29))){
var inst_32124 = (state_32150[(9)]);
var state_32150__$1 = state_32150;
var statearr_32177_32233 = state_32150__$1;
(statearr_32177_32233[(2)] = inst_32124);

(statearr_32177_32233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (6))){
var state_32150__$1 = state_32150;
var statearr_32178_32234 = state_32150__$1;
(statearr_32178_32234[(2)] = false);

(statearr_32178_32234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (28))){
var inst_32120 = (state_32150[(2)]);
var inst_32121 = calc_state.call(null);
var inst_32078 = inst_32121;
var state_32150__$1 = (function (){var statearr_32179 = state_32150;
(statearr_32179[(7)] = inst_32078);

(statearr_32179[(15)] = inst_32120);

return statearr_32179;
})();
var statearr_32180_32235 = state_32150__$1;
(statearr_32180_32235[(2)] = null);

(statearr_32180_32235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (25))){
var inst_32146 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32181_32236 = state_32150__$1;
(statearr_32181_32236[(2)] = inst_32146);

(statearr_32181_32236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (34))){
var inst_32144 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32182_32237 = state_32150__$1;
(statearr_32182_32237[(2)] = inst_32144);

(statearr_32182_32237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (17))){
var state_32150__$1 = state_32150;
var statearr_32183_32238 = state_32150__$1;
(statearr_32183_32238[(2)] = false);

(statearr_32183_32238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (3))){
var state_32150__$1 = state_32150;
var statearr_32184_32239 = state_32150__$1;
(statearr_32184_32239[(2)] = false);

(statearr_32184_32239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (12))){
var inst_32148 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32150__$1,inst_32148);
} else {
if((state_val_32151 === (2))){
var inst_32054 = (state_32150[(8)]);
var inst_32059 = inst_32054.cljs$lang$protocol_mask$partition0$;
var inst_32060 = (inst_32059 & (64));
var inst_32061 = inst_32054.cljs$core$ISeq$;
var inst_32062 = (inst_32060) || (inst_32061);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32062)){
var statearr_32185_32240 = state_32150__$1;
(statearr_32185_32240[(1)] = (5));

} else {
var statearr_32186_32241 = state_32150__$1;
(statearr_32186_32241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (23))){
var inst_32109 = (state_32150[(14)]);
var inst_32115 = (inst_32109 == null);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32115)){
var statearr_32187_32242 = state_32150__$1;
(statearr_32187_32242[(1)] = (26));

} else {
var statearr_32188_32243 = state_32150__$1;
(statearr_32188_32243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (35))){
var inst_32135 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32135)){
var statearr_32189_32244 = state_32150__$1;
(statearr_32189_32244[(1)] = (36));

} else {
var statearr_32190_32245 = state_32150__$1;
(statearr_32190_32245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (19))){
var inst_32078 = (state_32150[(7)]);
var inst_32097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32078);
var state_32150__$1 = state_32150;
var statearr_32191_32246 = state_32150__$1;
(statearr_32191_32246[(2)] = inst_32097);

(statearr_32191_32246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (11))){
var inst_32078 = (state_32150[(7)]);
var inst_32082 = (inst_32078 == null);
var inst_32083 = cljs.core.not.call(null,inst_32082);
var state_32150__$1 = state_32150;
if(inst_32083){
var statearr_32192_32247 = state_32150__$1;
(statearr_32192_32247[(1)] = (13));

} else {
var statearr_32193_32248 = state_32150__$1;
(statearr_32193_32248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (9))){
var inst_32054 = (state_32150[(8)]);
var state_32150__$1 = state_32150;
var statearr_32194_32249 = state_32150__$1;
(statearr_32194_32249[(2)] = inst_32054);

(statearr_32194_32249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (5))){
var state_32150__$1 = state_32150;
var statearr_32195_32250 = state_32150__$1;
(statearr_32195_32250[(2)] = true);

(statearr_32195_32250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (14))){
var state_32150__$1 = state_32150;
var statearr_32196_32251 = state_32150__$1;
(statearr_32196_32251[(2)] = false);

(statearr_32196_32251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (26))){
var inst_32110 = (state_32150[(11)]);
var inst_32117 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32110);
var state_32150__$1 = state_32150;
var statearr_32197_32252 = state_32150__$1;
(statearr_32197_32252[(2)] = inst_32117);

(statearr_32197_32252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (16))){
var state_32150__$1 = state_32150;
var statearr_32198_32253 = state_32150__$1;
(statearr_32198_32253[(2)] = true);

(statearr_32198_32253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (38))){
var inst_32140 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32199_32254 = state_32150__$1;
(statearr_32199_32254[(2)] = inst_32140);

(statearr_32199_32254[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (30))){
var inst_32101 = (state_32150[(10)]);
var inst_32102 = (state_32150[(13)]);
var inst_32110 = (state_32150[(11)]);
var inst_32127 = cljs.core.empty_QMARK_.call(null,inst_32101);
var inst_32128 = inst_32102.call(null,inst_32110);
var inst_32129 = cljs.core.not.call(null,inst_32128);
var inst_32130 = (inst_32127) && (inst_32129);
var state_32150__$1 = state_32150;
var statearr_32200_32255 = state_32150__$1;
(statearr_32200_32255[(2)] = inst_32130);

(statearr_32200_32255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (10))){
var inst_32054 = (state_32150[(8)]);
var inst_32074 = (state_32150[(2)]);
var inst_32075 = cljs.core.get.call(null,inst_32074,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32076 = cljs.core.get.call(null,inst_32074,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32077 = cljs.core.get.call(null,inst_32074,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32078 = inst_32054;
var state_32150__$1 = (function (){var statearr_32201 = state_32150;
(statearr_32201[(7)] = inst_32078);

(statearr_32201[(16)] = inst_32075);

(statearr_32201[(17)] = inst_32076);

(statearr_32201[(18)] = inst_32077);

return statearr_32201;
})();
var statearr_32202_32256 = state_32150__$1;
(statearr_32202_32256[(2)] = null);

(statearr_32202_32256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (18))){
var inst_32092 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32203_32257 = state_32150__$1;
(statearr_32203_32257[(2)] = inst_32092);

(statearr_32203_32257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (37))){
var state_32150__$1 = state_32150;
var statearr_32204_32258 = state_32150__$1;
(statearr_32204_32258[(2)] = null);

(statearr_32204_32258[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (8))){
var inst_32054 = (state_32150[(8)]);
var inst_32071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32054);
var state_32150__$1 = state_32150;
var statearr_32205_32259 = state_32150__$1;
(statearr_32205_32259[(2)] = inst_32071);

(statearr_32205_32259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30459__auto__,c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30460__auto__ = null;
var cljs$core$async$mix_$_state_machine__30460__auto____0 = (function (){
var statearr_32209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32209[(0)] = cljs$core$async$mix_$_state_machine__30460__auto__);

(statearr_32209[(1)] = (1));

return statearr_32209;
});
var cljs$core$async$mix_$_state_machine__30460__auto____1 = (function (state_32150){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32210){if((e32210 instanceof Object)){
var ex__30463__auto__ = e32210;
var statearr_32211_32260 = state_32150;
(statearr_32211_32260[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32261 = state_32150;
state_32150 = G__32261;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30460__auto__ = function(state_32150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30460__auto____1.call(this,state_32150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30460__auto____0;
cljs$core$async$mix_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30460__auto____1;
return cljs$core$async$mix_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30482__auto__ = (function (){var statearr_32212 = f__30481__auto__.call(null);
(statearr_32212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32213);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25709__auto__ = (((p == null))?null:p);
var m__25710__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25710__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25709__auto__ = (((p == null))?null:p);
var m__25710__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,p,v,ch);
} else {
var m__25710__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32262 = [];
var len__26121__auto___32265 = arguments.length;
var i__26122__auto___32266 = (0);
while(true){
if((i__26122__auto___32266 < len__26121__auto___32265)){
args32262.push((arguments[i__26122__auto___32266]));

var G__32267 = (i__26122__auto___32266 + (1));
i__26122__auto___32266 = G__32267;
continue;
} else {
}
break;
}

var G__32264 = args32262.length;
switch (G__32264) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32262.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25709__auto__ = (((p == null))?null:p);
var m__25710__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,p);
} else {
var m__25710__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25709__auto__ = (((p == null))?null:p);
var m__25710__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,p,v);
} else {
var m__25710__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32270 = [];
var len__26121__auto___32395 = arguments.length;
var i__26122__auto___32396 = (0);
while(true){
if((i__26122__auto___32396 < len__26121__auto___32395)){
args32270.push((arguments[i__26122__auto___32396]));

var G__32397 = (i__26122__auto___32396 + (1));
i__26122__auto___32396 = G__32397;
continue;
} else {
}
break;
}

var G__32272 = args32270.length;
switch (G__32272) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32270.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25046__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25046__auto__,mults){
return (function (p1__32269_SHARP_){
if(cljs.core.truth_(p1__32269_SHARP_.call(null,topic))){
return p1__32269_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32269_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32274 = meta32274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32275,meta32274__$1){
var self__ = this;
var _32275__$1 = this;
return (new cljs.core.async.t_cljs$core$async32273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32274__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32275){
var self__ = this;
var _32275__$1 = this;
return self__.meta32274;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32274","meta32274",43471515,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32273";

cljs.core.async.t_cljs$core$async32273.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32273");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32273 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32274){
return (new cljs.core.async.t_cljs$core$async32273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32274));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30480__auto___32399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32399,mults,ensure_mult,p){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32399,mults,ensure_mult,p){
return (function (state_32347){
var state_val_32348 = (state_32347[(1)]);
if((state_val_32348 === (7))){
var inst_32343 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32349_32400 = state_32347__$1;
(statearr_32349_32400[(2)] = inst_32343);

(statearr_32349_32400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (20))){
var state_32347__$1 = state_32347;
var statearr_32350_32401 = state_32347__$1;
(statearr_32350_32401[(2)] = null);

(statearr_32350_32401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (1))){
var state_32347__$1 = state_32347;
var statearr_32351_32402 = state_32347__$1;
(statearr_32351_32402[(2)] = null);

(statearr_32351_32402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (24))){
var inst_32326 = (state_32347[(7)]);
var inst_32335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32326);
var state_32347__$1 = state_32347;
var statearr_32352_32403 = state_32347__$1;
(statearr_32352_32403[(2)] = inst_32335);

(statearr_32352_32403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (4))){
var inst_32278 = (state_32347[(8)]);
var inst_32278__$1 = (state_32347[(2)]);
var inst_32279 = (inst_32278__$1 == null);
var state_32347__$1 = (function (){var statearr_32353 = state_32347;
(statearr_32353[(8)] = inst_32278__$1);

return statearr_32353;
})();
if(cljs.core.truth_(inst_32279)){
var statearr_32354_32404 = state_32347__$1;
(statearr_32354_32404[(1)] = (5));

} else {
var statearr_32355_32405 = state_32347__$1;
(statearr_32355_32405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (15))){
var inst_32320 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32356_32406 = state_32347__$1;
(statearr_32356_32406[(2)] = inst_32320);

(statearr_32356_32406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (21))){
var inst_32340 = (state_32347[(2)]);
var state_32347__$1 = (function (){var statearr_32357 = state_32347;
(statearr_32357[(9)] = inst_32340);

return statearr_32357;
})();
var statearr_32358_32407 = state_32347__$1;
(statearr_32358_32407[(2)] = null);

(statearr_32358_32407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (13))){
var inst_32302 = (state_32347[(10)]);
var inst_32304 = cljs.core.chunked_seq_QMARK_.call(null,inst_32302);
var state_32347__$1 = state_32347;
if(inst_32304){
var statearr_32359_32408 = state_32347__$1;
(statearr_32359_32408[(1)] = (16));

} else {
var statearr_32360_32409 = state_32347__$1;
(statearr_32360_32409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (22))){
var inst_32332 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
if(cljs.core.truth_(inst_32332)){
var statearr_32361_32410 = state_32347__$1;
(statearr_32361_32410[(1)] = (23));

} else {
var statearr_32362_32411 = state_32347__$1;
(statearr_32362_32411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (6))){
var inst_32328 = (state_32347[(11)]);
var inst_32326 = (state_32347[(7)]);
var inst_32278 = (state_32347[(8)]);
var inst_32326__$1 = topic_fn.call(null,inst_32278);
var inst_32327 = cljs.core.deref.call(null,mults);
var inst_32328__$1 = cljs.core.get.call(null,inst_32327,inst_32326__$1);
var state_32347__$1 = (function (){var statearr_32363 = state_32347;
(statearr_32363[(11)] = inst_32328__$1);

(statearr_32363[(7)] = inst_32326__$1);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32328__$1)){
var statearr_32364_32412 = state_32347__$1;
(statearr_32364_32412[(1)] = (19));

} else {
var statearr_32365_32413 = state_32347__$1;
(statearr_32365_32413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (25))){
var inst_32337 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32366_32414 = state_32347__$1;
(statearr_32366_32414[(2)] = inst_32337);

(statearr_32366_32414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (17))){
var inst_32302 = (state_32347[(10)]);
var inst_32311 = cljs.core.first.call(null,inst_32302);
var inst_32312 = cljs.core.async.muxch_STAR_.call(null,inst_32311);
var inst_32313 = cljs.core.async.close_BANG_.call(null,inst_32312);
var inst_32314 = cljs.core.next.call(null,inst_32302);
var inst_32288 = inst_32314;
var inst_32289 = null;
var inst_32290 = (0);
var inst_32291 = (0);
var state_32347__$1 = (function (){var statearr_32367 = state_32347;
(statearr_32367[(12)] = inst_32291);

(statearr_32367[(13)] = inst_32313);

(statearr_32367[(14)] = inst_32289);

(statearr_32367[(15)] = inst_32290);

(statearr_32367[(16)] = inst_32288);

return statearr_32367;
})();
var statearr_32368_32415 = state_32347__$1;
(statearr_32368_32415[(2)] = null);

(statearr_32368_32415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (3))){
var inst_32345 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32347__$1,inst_32345);
} else {
if((state_val_32348 === (12))){
var inst_32322 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32369_32416 = state_32347__$1;
(statearr_32369_32416[(2)] = inst_32322);

(statearr_32369_32416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (2))){
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32347__$1,(4),ch);
} else {
if((state_val_32348 === (23))){
var state_32347__$1 = state_32347;
var statearr_32370_32417 = state_32347__$1;
(statearr_32370_32417[(2)] = null);

(statearr_32370_32417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (19))){
var inst_32328 = (state_32347[(11)]);
var inst_32278 = (state_32347[(8)]);
var inst_32330 = cljs.core.async.muxch_STAR_.call(null,inst_32328);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32347__$1,(22),inst_32330,inst_32278);
} else {
if((state_val_32348 === (11))){
var inst_32302 = (state_32347[(10)]);
var inst_32288 = (state_32347[(16)]);
var inst_32302__$1 = cljs.core.seq.call(null,inst_32288);
var state_32347__$1 = (function (){var statearr_32371 = state_32347;
(statearr_32371[(10)] = inst_32302__$1);

return statearr_32371;
})();
if(inst_32302__$1){
var statearr_32372_32418 = state_32347__$1;
(statearr_32372_32418[(1)] = (13));

} else {
var statearr_32373_32419 = state_32347__$1;
(statearr_32373_32419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (9))){
var inst_32324 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32374_32420 = state_32347__$1;
(statearr_32374_32420[(2)] = inst_32324);

(statearr_32374_32420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (5))){
var inst_32285 = cljs.core.deref.call(null,mults);
var inst_32286 = cljs.core.vals.call(null,inst_32285);
var inst_32287 = cljs.core.seq.call(null,inst_32286);
var inst_32288 = inst_32287;
var inst_32289 = null;
var inst_32290 = (0);
var inst_32291 = (0);
var state_32347__$1 = (function (){var statearr_32375 = state_32347;
(statearr_32375[(12)] = inst_32291);

(statearr_32375[(14)] = inst_32289);

(statearr_32375[(15)] = inst_32290);

(statearr_32375[(16)] = inst_32288);

return statearr_32375;
})();
var statearr_32376_32421 = state_32347__$1;
(statearr_32376_32421[(2)] = null);

(statearr_32376_32421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (14))){
var state_32347__$1 = state_32347;
var statearr_32380_32422 = state_32347__$1;
(statearr_32380_32422[(2)] = null);

(statearr_32380_32422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (16))){
var inst_32302 = (state_32347[(10)]);
var inst_32306 = cljs.core.chunk_first.call(null,inst_32302);
var inst_32307 = cljs.core.chunk_rest.call(null,inst_32302);
var inst_32308 = cljs.core.count.call(null,inst_32306);
var inst_32288 = inst_32307;
var inst_32289 = inst_32306;
var inst_32290 = inst_32308;
var inst_32291 = (0);
var state_32347__$1 = (function (){var statearr_32381 = state_32347;
(statearr_32381[(12)] = inst_32291);

(statearr_32381[(14)] = inst_32289);

(statearr_32381[(15)] = inst_32290);

(statearr_32381[(16)] = inst_32288);

return statearr_32381;
})();
var statearr_32382_32423 = state_32347__$1;
(statearr_32382_32423[(2)] = null);

(statearr_32382_32423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (10))){
var inst_32291 = (state_32347[(12)]);
var inst_32289 = (state_32347[(14)]);
var inst_32290 = (state_32347[(15)]);
var inst_32288 = (state_32347[(16)]);
var inst_32296 = cljs.core._nth.call(null,inst_32289,inst_32291);
var inst_32297 = cljs.core.async.muxch_STAR_.call(null,inst_32296);
var inst_32298 = cljs.core.async.close_BANG_.call(null,inst_32297);
var inst_32299 = (inst_32291 + (1));
var tmp32377 = inst_32289;
var tmp32378 = inst_32290;
var tmp32379 = inst_32288;
var inst_32288__$1 = tmp32379;
var inst_32289__$1 = tmp32377;
var inst_32290__$1 = tmp32378;
var inst_32291__$1 = inst_32299;
var state_32347__$1 = (function (){var statearr_32383 = state_32347;
(statearr_32383[(17)] = inst_32298);

(statearr_32383[(12)] = inst_32291__$1);

(statearr_32383[(14)] = inst_32289__$1);

(statearr_32383[(15)] = inst_32290__$1);

(statearr_32383[(16)] = inst_32288__$1);

return statearr_32383;
})();
var statearr_32384_32424 = state_32347__$1;
(statearr_32384_32424[(2)] = null);

(statearr_32384_32424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (18))){
var inst_32317 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32385_32425 = state_32347__$1;
(statearr_32385_32425[(2)] = inst_32317);

(statearr_32385_32425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (8))){
var inst_32291 = (state_32347[(12)]);
var inst_32290 = (state_32347[(15)]);
var inst_32293 = (inst_32291 < inst_32290);
var inst_32294 = inst_32293;
var state_32347__$1 = state_32347;
if(cljs.core.truth_(inst_32294)){
var statearr_32386_32426 = state_32347__$1;
(statearr_32386_32426[(1)] = (10));

} else {
var statearr_32387_32427 = state_32347__$1;
(statearr_32387_32427[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32399,mults,ensure_mult,p))
;
return ((function (switch__30459__auto__,c__30480__auto___32399,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_32391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32391[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_32391[(1)] = (1));

return statearr_32391;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_32347){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32392){if((e32392 instanceof Object)){
var ex__30463__auto__ = e32392;
var statearr_32393_32428 = state_32347;
(statearr_32393_32428[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32429 = state_32347;
state_32347 = G__32429;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_32347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_32347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32399,mults,ensure_mult,p))
})();
var state__30482__auto__ = (function (){var statearr_32394 = f__30481__auto__.call(null);
(statearr_32394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32399);

return statearr_32394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32399,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32430 = [];
var len__26121__auto___32433 = arguments.length;
var i__26122__auto___32434 = (0);
while(true){
if((i__26122__auto___32434 < len__26121__auto___32433)){
args32430.push((arguments[i__26122__auto___32434]));

var G__32435 = (i__26122__auto___32434 + (1));
i__26122__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32432 = args32430.length;
switch (G__32432) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32430.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32437 = [];
var len__26121__auto___32440 = arguments.length;
var i__26122__auto___32441 = (0);
while(true){
if((i__26122__auto___32441 < len__26121__auto___32440)){
args32437.push((arguments[i__26122__auto___32441]));

var G__32442 = (i__26122__auto___32441 + (1));
i__26122__auto___32441 = G__32442;
continue;
} else {
}
break;
}

var G__32439 = args32437.length;
switch (G__32439) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32437.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32444 = [];
var len__26121__auto___32515 = arguments.length;
var i__26122__auto___32516 = (0);
while(true){
if((i__26122__auto___32516 < len__26121__auto___32515)){
args32444.push((arguments[i__26122__auto___32516]));

var G__32517 = (i__26122__auto___32516 + (1));
i__26122__auto___32516 = G__32517;
continue;
} else {
}
break;
}

var G__32446 = args32444.length;
switch (G__32446) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32444.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30480__auto___32519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32485){
var state_val_32486 = (state_32485[(1)]);
if((state_val_32486 === (7))){
var state_32485__$1 = state_32485;
var statearr_32487_32520 = state_32485__$1;
(statearr_32487_32520[(2)] = null);

(statearr_32487_32520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (1))){
var state_32485__$1 = state_32485;
var statearr_32488_32521 = state_32485__$1;
(statearr_32488_32521[(2)] = null);

(statearr_32488_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (4))){
var inst_32449 = (state_32485[(7)]);
var inst_32451 = (inst_32449 < cnt);
var state_32485__$1 = state_32485;
if(cljs.core.truth_(inst_32451)){
var statearr_32489_32522 = state_32485__$1;
(statearr_32489_32522[(1)] = (6));

} else {
var statearr_32490_32523 = state_32485__$1;
(statearr_32490_32523[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (15))){
var inst_32481 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32491_32524 = state_32485__$1;
(statearr_32491_32524[(2)] = inst_32481);

(statearr_32491_32524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (13))){
var inst_32474 = cljs.core.async.close_BANG_.call(null,out);
var state_32485__$1 = state_32485;
var statearr_32492_32525 = state_32485__$1;
(statearr_32492_32525[(2)] = inst_32474);

(statearr_32492_32525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (6))){
var state_32485__$1 = state_32485;
var statearr_32493_32526 = state_32485__$1;
(statearr_32493_32526[(2)] = null);

(statearr_32493_32526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (3))){
var inst_32483 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32485__$1,inst_32483);
} else {
if((state_val_32486 === (12))){
var inst_32471 = (state_32485[(8)]);
var inst_32471__$1 = (state_32485[(2)]);
var inst_32472 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32471__$1);
var state_32485__$1 = (function (){var statearr_32494 = state_32485;
(statearr_32494[(8)] = inst_32471__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32495_32527 = state_32485__$1;
(statearr_32495_32527[(1)] = (13));

} else {
var statearr_32496_32528 = state_32485__$1;
(statearr_32496_32528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (2))){
var inst_32448 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32449 = (0);
var state_32485__$1 = (function (){var statearr_32497 = state_32485;
(statearr_32497[(9)] = inst_32448);

(statearr_32497[(7)] = inst_32449);

return statearr_32497;
})();
var statearr_32498_32529 = state_32485__$1;
(statearr_32498_32529[(2)] = null);

(statearr_32498_32529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (11))){
var inst_32449 = (state_32485[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32485,(10),Object,null,(9));
var inst_32458 = chs__$1.call(null,inst_32449);
var inst_32459 = done.call(null,inst_32449);
var inst_32460 = cljs.core.async.take_BANG_.call(null,inst_32458,inst_32459);
var state_32485__$1 = state_32485;
var statearr_32499_32530 = state_32485__$1;
(statearr_32499_32530[(2)] = inst_32460);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (9))){
var inst_32449 = (state_32485[(7)]);
var inst_32462 = (state_32485[(2)]);
var inst_32463 = (inst_32449 + (1));
var inst_32449__$1 = inst_32463;
var state_32485__$1 = (function (){var statearr_32500 = state_32485;
(statearr_32500[(10)] = inst_32462);

(statearr_32500[(7)] = inst_32449__$1);

return statearr_32500;
})();
var statearr_32501_32531 = state_32485__$1;
(statearr_32501_32531[(2)] = null);

(statearr_32501_32531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (5))){
var inst_32469 = (state_32485[(2)]);
var state_32485__$1 = (function (){var statearr_32502 = state_32485;
(statearr_32502[(11)] = inst_32469);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(12),dchan);
} else {
if((state_val_32486 === (14))){
var inst_32471 = (state_32485[(8)]);
var inst_32476 = cljs.core.apply.call(null,f,inst_32471);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32485__$1,(16),out,inst_32476);
} else {
if((state_val_32486 === (16))){
var inst_32478 = (state_32485[(2)]);
var state_32485__$1 = (function (){var statearr_32503 = state_32485;
(statearr_32503[(12)] = inst_32478);

return statearr_32503;
})();
var statearr_32504_32532 = state_32485__$1;
(statearr_32504_32532[(2)] = null);

(statearr_32504_32532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (10))){
var inst_32453 = (state_32485[(2)]);
var inst_32454 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32485__$1 = (function (){var statearr_32505 = state_32485;
(statearr_32505[(13)] = inst_32453);

return statearr_32505;
})();
var statearr_32506_32533 = state_32485__$1;
(statearr_32506_32533[(2)] = inst_32454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (8))){
var inst_32467 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32507_32534 = state_32485__$1;
(statearr_32507_32534[(2)] = inst_32467);

(statearr_32507_32534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30459__auto__,c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_32511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32511[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_32511[(1)] = (1));

return statearr_32511;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_32485){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32512){if((e32512 instanceof Object)){
var ex__30463__auto__ = e32512;
var statearr_32513_32535 = state_32485;
(statearr_32513_32535[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32536 = state_32485;
state_32485 = G__32536;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30482__auto__ = (function (){var statearr_32514 = f__30481__auto__.call(null);
(statearr_32514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32519);

return statearr_32514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32519,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32538 = [];
var len__26121__auto___32596 = arguments.length;
var i__26122__auto___32597 = (0);
while(true){
if((i__26122__auto___32597 < len__26121__auto___32596)){
args32538.push((arguments[i__26122__auto___32597]));

var G__32598 = (i__26122__auto___32597 + (1));
i__26122__auto___32597 = G__32598;
continue;
} else {
}
break;
}

var G__32540 = args32538.length;
switch (G__32540) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32538.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___32600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32600,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32600,out){
return (function (state_32572){
var state_val_32573 = (state_32572[(1)]);
if((state_val_32573 === (7))){
var inst_32551 = (state_32572[(7)]);
var inst_32552 = (state_32572[(8)]);
var inst_32551__$1 = (state_32572[(2)]);
var inst_32552__$1 = cljs.core.nth.call(null,inst_32551__$1,(0),null);
var inst_32553 = cljs.core.nth.call(null,inst_32551__$1,(1),null);
var inst_32554 = (inst_32552__$1 == null);
var state_32572__$1 = (function (){var statearr_32574 = state_32572;
(statearr_32574[(7)] = inst_32551__$1);

(statearr_32574[(8)] = inst_32552__$1);

(statearr_32574[(9)] = inst_32553);

return statearr_32574;
})();
if(cljs.core.truth_(inst_32554)){
var statearr_32575_32601 = state_32572__$1;
(statearr_32575_32601[(1)] = (8));

} else {
var statearr_32576_32602 = state_32572__$1;
(statearr_32576_32602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (1))){
var inst_32541 = cljs.core.vec.call(null,chs);
var inst_32542 = inst_32541;
var state_32572__$1 = (function (){var statearr_32577 = state_32572;
(statearr_32577[(10)] = inst_32542);

return statearr_32577;
})();
var statearr_32578_32603 = state_32572__$1;
(statearr_32578_32603[(2)] = null);

(statearr_32578_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (4))){
var inst_32542 = (state_32572[(10)]);
var state_32572__$1 = state_32572;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32572__$1,(7),inst_32542);
} else {
if((state_val_32573 === (6))){
var inst_32568 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32579_32604 = state_32572__$1;
(statearr_32579_32604[(2)] = inst_32568);

(statearr_32579_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (3))){
var inst_32570 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32572__$1,inst_32570);
} else {
if((state_val_32573 === (2))){
var inst_32542 = (state_32572[(10)]);
var inst_32544 = cljs.core.count.call(null,inst_32542);
var inst_32545 = (inst_32544 > (0));
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32545)){
var statearr_32581_32605 = state_32572__$1;
(statearr_32581_32605[(1)] = (4));

} else {
var statearr_32582_32606 = state_32572__$1;
(statearr_32582_32606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (11))){
var inst_32542 = (state_32572[(10)]);
var inst_32561 = (state_32572[(2)]);
var tmp32580 = inst_32542;
var inst_32542__$1 = tmp32580;
var state_32572__$1 = (function (){var statearr_32583 = state_32572;
(statearr_32583[(10)] = inst_32542__$1);

(statearr_32583[(11)] = inst_32561);

return statearr_32583;
})();
var statearr_32584_32607 = state_32572__$1;
(statearr_32584_32607[(2)] = null);

(statearr_32584_32607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (9))){
var inst_32552 = (state_32572[(8)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32572__$1,(11),out,inst_32552);
} else {
if((state_val_32573 === (5))){
var inst_32566 = cljs.core.async.close_BANG_.call(null,out);
var state_32572__$1 = state_32572;
var statearr_32585_32608 = state_32572__$1;
(statearr_32585_32608[(2)] = inst_32566);

(statearr_32585_32608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (10))){
var inst_32564 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32586_32609 = state_32572__$1;
(statearr_32586_32609[(2)] = inst_32564);

(statearr_32586_32609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (8))){
var inst_32551 = (state_32572[(7)]);
var inst_32542 = (state_32572[(10)]);
var inst_32552 = (state_32572[(8)]);
var inst_32553 = (state_32572[(9)]);
var inst_32556 = (function (){var cs = inst_32542;
var vec__32547 = inst_32551;
var v = inst_32552;
var c = inst_32553;
return ((function (cs,vec__32547,v,c,inst_32551,inst_32542,inst_32552,inst_32553,state_val_32573,c__30480__auto___32600,out){
return (function (p1__32537_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32537_SHARP_);
});
;})(cs,vec__32547,v,c,inst_32551,inst_32542,inst_32552,inst_32553,state_val_32573,c__30480__auto___32600,out))
})();
var inst_32557 = cljs.core.filterv.call(null,inst_32556,inst_32542);
var inst_32542__$1 = inst_32557;
var state_32572__$1 = (function (){var statearr_32587 = state_32572;
(statearr_32587[(10)] = inst_32542__$1);

return statearr_32587;
})();
var statearr_32588_32610 = state_32572__$1;
(statearr_32588_32610[(2)] = null);

(statearr_32588_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32600,out))
;
return ((function (switch__30459__auto__,c__30480__auto___32600,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_32572){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32593){if((e32593 instanceof Object)){
var ex__30463__auto__ = e32593;
var statearr_32594_32611 = state_32572;
(statearr_32594_32611[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32612 = state_32572;
state_32572 = G__32612;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_32572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_32572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32600,out))
})();
var state__30482__auto__ = (function (){var statearr_32595 = f__30481__auto__.call(null);
(statearr_32595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32600);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32600,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32613 = [];
var len__26121__auto___32662 = arguments.length;
var i__26122__auto___32663 = (0);
while(true){
if((i__26122__auto___32663 < len__26121__auto___32662)){
args32613.push((arguments[i__26122__auto___32663]));

var G__32664 = (i__26122__auto___32663 + (1));
i__26122__auto___32663 = G__32664;
continue;
} else {
}
break;
}

var G__32615 = args32613.length;
switch (G__32615) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32613.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___32666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32666,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32666,out){
return (function (state_32639){
var state_val_32640 = (state_32639[(1)]);
if((state_val_32640 === (7))){
var inst_32621 = (state_32639[(7)]);
var inst_32621__$1 = (state_32639[(2)]);
var inst_32622 = (inst_32621__$1 == null);
var inst_32623 = cljs.core.not.call(null,inst_32622);
var state_32639__$1 = (function (){var statearr_32641 = state_32639;
(statearr_32641[(7)] = inst_32621__$1);

return statearr_32641;
})();
if(inst_32623){
var statearr_32642_32667 = state_32639__$1;
(statearr_32642_32667[(1)] = (8));

} else {
var statearr_32643_32668 = state_32639__$1;
(statearr_32643_32668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (1))){
var inst_32616 = (0);
var state_32639__$1 = (function (){var statearr_32644 = state_32639;
(statearr_32644[(8)] = inst_32616);

return statearr_32644;
})();
var statearr_32645_32669 = state_32639__$1;
(statearr_32645_32669[(2)] = null);

(statearr_32645_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (4))){
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32639__$1,(7),ch);
} else {
if((state_val_32640 === (6))){
var inst_32634 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32646_32670 = state_32639__$1;
(statearr_32646_32670[(2)] = inst_32634);

(statearr_32646_32670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (3))){
var inst_32636 = (state_32639[(2)]);
var inst_32637 = cljs.core.async.close_BANG_.call(null,out);
var state_32639__$1 = (function (){var statearr_32647 = state_32639;
(statearr_32647[(9)] = inst_32636);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32639__$1,inst_32637);
} else {
if((state_val_32640 === (2))){
var inst_32616 = (state_32639[(8)]);
var inst_32618 = (inst_32616 < n);
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32618)){
var statearr_32648_32671 = state_32639__$1;
(statearr_32648_32671[(1)] = (4));

} else {
var statearr_32649_32672 = state_32639__$1;
(statearr_32649_32672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (11))){
var inst_32616 = (state_32639[(8)]);
var inst_32626 = (state_32639[(2)]);
var inst_32627 = (inst_32616 + (1));
var inst_32616__$1 = inst_32627;
var state_32639__$1 = (function (){var statearr_32650 = state_32639;
(statearr_32650[(8)] = inst_32616__$1);

(statearr_32650[(10)] = inst_32626);

return statearr_32650;
})();
var statearr_32651_32673 = state_32639__$1;
(statearr_32651_32673[(2)] = null);

(statearr_32651_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (9))){
var state_32639__$1 = state_32639;
var statearr_32652_32674 = state_32639__$1;
(statearr_32652_32674[(2)] = null);

(statearr_32652_32674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (5))){
var state_32639__$1 = state_32639;
var statearr_32653_32675 = state_32639__$1;
(statearr_32653_32675[(2)] = null);

(statearr_32653_32675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (10))){
var inst_32631 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32654_32676 = state_32639__$1;
(statearr_32654_32676[(2)] = inst_32631);

(statearr_32654_32676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (8))){
var inst_32621 = (state_32639[(7)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32639__$1,(11),out,inst_32621);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32666,out))
;
return ((function (switch__30459__auto__,c__30480__auto___32666,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_32639){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__30463__auto__ = e32659;
var statearr_32660_32677 = state_32639;
(statearr_32660_32677[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32678 = state_32639;
state_32639 = G__32678;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_32639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_32639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32666,out))
})();
var state__30482__auto__ = (function (){var statearr_32661 = f__30481__auto__.call(null);
(statearr_32661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32666);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32666,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32686 = (function (map_LT_,f,ch,meta32687){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32687 = meta32687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32688,meta32687__$1){
var self__ = this;
var _32688__$1 = this;
return (new cljs.core.async.t_cljs$core$async32686(self__.map_LT_,self__.f,self__.ch,meta32687__$1));
});

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32688){
var self__ = this;
var _32688__$1 = this;
return self__.meta32687;
});

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32689 = (function (map_LT_,f,ch,meta32687,_,fn1,meta32690){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32687 = meta32687;
this._ = _;
this.fn1 = fn1;
this.meta32690 = meta32690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32691,meta32690__$1){
var self__ = this;
var _32691__$1 = this;
return (new cljs.core.async.t_cljs$core$async32689(self__.map_LT_,self__.f,self__.ch,self__.meta32687,self__._,self__.fn1,meta32690__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32691){
var self__ = this;
var _32691__$1 = this;
return self__.meta32690;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32679_SHARP_){
return f1.call(null,(((p1__32679_SHARP_ == null))?null:self__.f.call(null,p1__32679_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32687","meta32687",924513330,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32686","cljs.core.async/t_cljs$core$async32686",1397526732,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32690","meta32690",1678851128,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32689";

cljs.core.async.t_cljs$core$async32689.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32689");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32689 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32689(map_LT___$1,f__$1,ch__$1,meta32687__$1,___$2,fn1__$1,meta32690){
return (new cljs.core.async.t_cljs$core$async32689(map_LT___$1,f__$1,ch__$1,meta32687__$1,___$2,fn1__$1,meta32690));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32689(self__.map_LT_,self__.f,self__.ch,self__.meta32687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25034__auto__ = ret;
if(cljs.core.truth_(and__25034__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25034__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32687","meta32687",924513330,null)], null);
});

cljs.core.async.t_cljs$core$async32686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32686";

cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32686");
});

cljs.core.async.__GT_t_cljs$core$async32686 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32686(map_LT___$1,f__$1,ch__$1,meta32687){
return (new cljs.core.async.t_cljs$core$async32686(map_LT___$1,f__$1,ch__$1,meta32687));
});

}

return (new cljs.core.async.t_cljs$core$async32686(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32695 = (function (map_GT_,f,ch,meta32696){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32696 = meta32696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32697,meta32696__$1){
var self__ = this;
var _32697__$1 = this;
return (new cljs.core.async.t_cljs$core$async32695(self__.map_GT_,self__.f,self__.ch,meta32696__$1));
});

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32697){
var self__ = this;
var _32697__$1 = this;
return self__.meta32696;
});

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32696","meta32696",955850907,null)], null);
});

cljs.core.async.t_cljs$core$async32695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32695";

cljs.core.async.t_cljs$core$async32695.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32695");
});

cljs.core.async.__GT_t_cljs$core$async32695 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32695(map_GT___$1,f__$1,ch__$1,meta32696){
return (new cljs.core.async.t_cljs$core$async32695(map_GT___$1,f__$1,ch__$1,meta32696));
});

}

return (new cljs.core.async.t_cljs$core$async32695(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32701 = (function (filter_GT_,p,ch,meta32702){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32702 = meta32702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32703,meta32702__$1){
var self__ = this;
var _32703__$1 = this;
return (new cljs.core.async.t_cljs$core$async32701(self__.filter_GT_,self__.p,self__.ch,meta32702__$1));
});

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32703){
var self__ = this;
var _32703__$1 = this;
return self__.meta32702;
});

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32702","meta32702",1814963487,null)], null);
});

cljs.core.async.t_cljs$core$async32701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32701";

cljs.core.async.t_cljs$core$async32701.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32701");
});

cljs.core.async.__GT_t_cljs$core$async32701 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32701(filter_GT___$1,p__$1,ch__$1,meta32702){
return (new cljs.core.async.t_cljs$core$async32701(filter_GT___$1,p__$1,ch__$1,meta32702));
});

}

return (new cljs.core.async.t_cljs$core$async32701(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32704 = [];
var len__26121__auto___32748 = arguments.length;
var i__26122__auto___32749 = (0);
while(true){
if((i__26122__auto___32749 < len__26121__auto___32748)){
args32704.push((arguments[i__26122__auto___32749]));

var G__32750 = (i__26122__auto___32749 + (1));
i__26122__auto___32749 = G__32750;
continue;
} else {
}
break;
}

var G__32706 = args32704.length;
switch (G__32706) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32704.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___32752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___32752,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___32752,out){
return (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (7))){
var inst_32723 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32729_32753 = state_32727__$1;
(statearr_32729_32753[(2)] = inst_32723);

(statearr_32729_32753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (1))){
var state_32727__$1 = state_32727;
var statearr_32730_32754 = state_32727__$1;
(statearr_32730_32754[(2)] = null);

(statearr_32730_32754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (4))){
var inst_32709 = (state_32727[(7)]);
var inst_32709__$1 = (state_32727[(2)]);
var inst_32710 = (inst_32709__$1 == null);
var state_32727__$1 = (function (){var statearr_32731 = state_32727;
(statearr_32731[(7)] = inst_32709__$1);

return statearr_32731;
})();
if(cljs.core.truth_(inst_32710)){
var statearr_32732_32755 = state_32727__$1;
(statearr_32732_32755[(1)] = (5));

} else {
var statearr_32733_32756 = state_32727__$1;
(statearr_32733_32756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (6))){
var inst_32709 = (state_32727[(7)]);
var inst_32714 = p.call(null,inst_32709);
var state_32727__$1 = state_32727;
if(cljs.core.truth_(inst_32714)){
var statearr_32734_32757 = state_32727__$1;
(statearr_32734_32757[(1)] = (8));

} else {
var statearr_32735_32758 = state_32727__$1;
(statearr_32735_32758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (3))){
var inst_32725 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32727__$1,inst_32725);
} else {
if((state_val_32728 === (2))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32727__$1,(4),ch);
} else {
if((state_val_32728 === (11))){
var inst_32717 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32736_32759 = state_32727__$1;
(statearr_32736_32759[(2)] = inst_32717);

(statearr_32736_32759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (9))){
var state_32727__$1 = state_32727;
var statearr_32737_32760 = state_32727__$1;
(statearr_32737_32760[(2)] = null);

(statearr_32737_32760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (5))){
var inst_32712 = cljs.core.async.close_BANG_.call(null,out);
var state_32727__$1 = state_32727;
var statearr_32738_32761 = state_32727__$1;
(statearr_32738_32761[(2)] = inst_32712);

(statearr_32738_32761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (10))){
var inst_32720 = (state_32727[(2)]);
var state_32727__$1 = (function (){var statearr_32739 = state_32727;
(statearr_32739[(8)] = inst_32720);

return statearr_32739;
})();
var statearr_32740_32762 = state_32727__$1;
(statearr_32740_32762[(2)] = null);

(statearr_32740_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (8))){
var inst_32709 = (state_32727[(7)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32727__$1,(11),out,inst_32709);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___32752,out))
;
return ((function (switch__30459__auto__,c__30480__auto___32752,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_32727){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32745){if((e32745 instanceof Object)){
var ex__30463__auto__ = e32745;
var statearr_32746_32763 = state_32727;
(statearr_32746_32763[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32764 = state_32727;
state_32727 = G__32764;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___32752,out))
})();
var state__30482__auto__ = (function (){var statearr_32747 = f__30481__auto__.call(null);
(statearr_32747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___32752);

return statearr_32747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___32752,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32765 = [];
var len__26121__auto___32768 = arguments.length;
var i__26122__auto___32769 = (0);
while(true){
if((i__26122__auto___32769 < len__26121__auto___32768)){
args32765.push((arguments[i__26122__auto___32769]));

var G__32770 = (i__26122__auto___32769 + (1));
i__26122__auto___32769 = G__32770;
continue;
} else {
}
break;
}

var G__32767 = args32765.length;
switch (G__32767) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32765.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__){
return (function (state_32937){
var state_val_32938 = (state_32937[(1)]);
if((state_val_32938 === (7))){
var inst_32933 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32939_32980 = state_32937__$1;
(statearr_32939_32980[(2)] = inst_32933);

(statearr_32939_32980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (20))){
var inst_32903 = (state_32937[(7)]);
var inst_32914 = (state_32937[(2)]);
var inst_32915 = cljs.core.next.call(null,inst_32903);
var inst_32889 = inst_32915;
var inst_32890 = null;
var inst_32891 = (0);
var inst_32892 = (0);
var state_32937__$1 = (function (){var statearr_32940 = state_32937;
(statearr_32940[(8)] = inst_32890);

(statearr_32940[(9)] = inst_32892);

(statearr_32940[(10)] = inst_32914);

(statearr_32940[(11)] = inst_32889);

(statearr_32940[(12)] = inst_32891);

return statearr_32940;
})();
var statearr_32941_32981 = state_32937__$1;
(statearr_32941_32981[(2)] = null);

(statearr_32941_32981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (1))){
var state_32937__$1 = state_32937;
var statearr_32942_32982 = state_32937__$1;
(statearr_32942_32982[(2)] = null);

(statearr_32942_32982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (4))){
var inst_32878 = (state_32937[(13)]);
var inst_32878__$1 = (state_32937[(2)]);
var inst_32879 = (inst_32878__$1 == null);
var state_32937__$1 = (function (){var statearr_32943 = state_32937;
(statearr_32943[(13)] = inst_32878__$1);

return statearr_32943;
})();
if(cljs.core.truth_(inst_32879)){
var statearr_32944_32983 = state_32937__$1;
(statearr_32944_32983[(1)] = (5));

} else {
var statearr_32945_32984 = state_32937__$1;
(statearr_32945_32984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (15))){
var state_32937__$1 = state_32937;
var statearr_32949_32985 = state_32937__$1;
(statearr_32949_32985[(2)] = null);

(statearr_32949_32985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (21))){
var state_32937__$1 = state_32937;
var statearr_32950_32986 = state_32937__$1;
(statearr_32950_32986[(2)] = null);

(statearr_32950_32986[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (13))){
var inst_32890 = (state_32937[(8)]);
var inst_32892 = (state_32937[(9)]);
var inst_32889 = (state_32937[(11)]);
var inst_32891 = (state_32937[(12)]);
var inst_32899 = (state_32937[(2)]);
var inst_32900 = (inst_32892 + (1));
var tmp32946 = inst_32890;
var tmp32947 = inst_32889;
var tmp32948 = inst_32891;
var inst_32889__$1 = tmp32947;
var inst_32890__$1 = tmp32946;
var inst_32891__$1 = tmp32948;
var inst_32892__$1 = inst_32900;
var state_32937__$1 = (function (){var statearr_32951 = state_32937;
(statearr_32951[(8)] = inst_32890__$1);

(statearr_32951[(14)] = inst_32899);

(statearr_32951[(9)] = inst_32892__$1);

(statearr_32951[(11)] = inst_32889__$1);

(statearr_32951[(12)] = inst_32891__$1);

return statearr_32951;
})();
var statearr_32952_32987 = state_32937__$1;
(statearr_32952_32987[(2)] = null);

(statearr_32952_32987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (22))){
var state_32937__$1 = state_32937;
var statearr_32953_32988 = state_32937__$1;
(statearr_32953_32988[(2)] = null);

(statearr_32953_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (6))){
var inst_32878 = (state_32937[(13)]);
var inst_32887 = f.call(null,inst_32878);
var inst_32888 = cljs.core.seq.call(null,inst_32887);
var inst_32889 = inst_32888;
var inst_32890 = null;
var inst_32891 = (0);
var inst_32892 = (0);
var state_32937__$1 = (function (){var statearr_32954 = state_32937;
(statearr_32954[(8)] = inst_32890);

(statearr_32954[(9)] = inst_32892);

(statearr_32954[(11)] = inst_32889);

(statearr_32954[(12)] = inst_32891);

return statearr_32954;
})();
var statearr_32955_32989 = state_32937__$1;
(statearr_32955_32989[(2)] = null);

(statearr_32955_32989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (17))){
var inst_32903 = (state_32937[(7)]);
var inst_32907 = cljs.core.chunk_first.call(null,inst_32903);
var inst_32908 = cljs.core.chunk_rest.call(null,inst_32903);
var inst_32909 = cljs.core.count.call(null,inst_32907);
var inst_32889 = inst_32908;
var inst_32890 = inst_32907;
var inst_32891 = inst_32909;
var inst_32892 = (0);
var state_32937__$1 = (function (){var statearr_32956 = state_32937;
(statearr_32956[(8)] = inst_32890);

(statearr_32956[(9)] = inst_32892);

(statearr_32956[(11)] = inst_32889);

(statearr_32956[(12)] = inst_32891);

return statearr_32956;
})();
var statearr_32957_32990 = state_32937__$1;
(statearr_32957_32990[(2)] = null);

(statearr_32957_32990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (3))){
var inst_32935 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32937__$1,inst_32935);
} else {
if((state_val_32938 === (12))){
var inst_32923 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32958_32991 = state_32937__$1;
(statearr_32958_32991[(2)] = inst_32923);

(statearr_32958_32991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (2))){
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32937__$1,(4),in$);
} else {
if((state_val_32938 === (23))){
var inst_32931 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32959_32992 = state_32937__$1;
(statearr_32959_32992[(2)] = inst_32931);

(statearr_32959_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (19))){
var inst_32918 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32960_32993 = state_32937__$1;
(statearr_32960_32993[(2)] = inst_32918);

(statearr_32960_32993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (11))){
var inst_32889 = (state_32937[(11)]);
var inst_32903 = (state_32937[(7)]);
var inst_32903__$1 = cljs.core.seq.call(null,inst_32889);
var state_32937__$1 = (function (){var statearr_32961 = state_32937;
(statearr_32961[(7)] = inst_32903__$1);

return statearr_32961;
})();
if(inst_32903__$1){
var statearr_32962_32994 = state_32937__$1;
(statearr_32962_32994[(1)] = (14));

} else {
var statearr_32963_32995 = state_32937__$1;
(statearr_32963_32995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (9))){
var inst_32925 = (state_32937[(2)]);
var inst_32926 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32937__$1 = (function (){var statearr_32964 = state_32937;
(statearr_32964[(15)] = inst_32925);

return statearr_32964;
})();
if(cljs.core.truth_(inst_32926)){
var statearr_32965_32996 = state_32937__$1;
(statearr_32965_32996[(1)] = (21));

} else {
var statearr_32966_32997 = state_32937__$1;
(statearr_32966_32997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (5))){
var inst_32881 = cljs.core.async.close_BANG_.call(null,out);
var state_32937__$1 = state_32937;
var statearr_32967_32998 = state_32937__$1;
(statearr_32967_32998[(2)] = inst_32881);

(statearr_32967_32998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (14))){
var inst_32903 = (state_32937[(7)]);
var inst_32905 = cljs.core.chunked_seq_QMARK_.call(null,inst_32903);
var state_32937__$1 = state_32937;
if(inst_32905){
var statearr_32968_32999 = state_32937__$1;
(statearr_32968_32999[(1)] = (17));

} else {
var statearr_32969_33000 = state_32937__$1;
(statearr_32969_33000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (16))){
var inst_32921 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32970_33001 = state_32937__$1;
(statearr_32970_33001[(2)] = inst_32921);

(statearr_32970_33001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (10))){
var inst_32890 = (state_32937[(8)]);
var inst_32892 = (state_32937[(9)]);
var inst_32897 = cljs.core._nth.call(null,inst_32890,inst_32892);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(13),out,inst_32897);
} else {
if((state_val_32938 === (18))){
var inst_32903 = (state_32937[(7)]);
var inst_32912 = cljs.core.first.call(null,inst_32903);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(20),out,inst_32912);
} else {
if((state_val_32938 === (8))){
var inst_32892 = (state_32937[(9)]);
var inst_32891 = (state_32937[(12)]);
var inst_32894 = (inst_32892 < inst_32891);
var inst_32895 = inst_32894;
var state_32937__$1 = state_32937;
if(cljs.core.truth_(inst_32895)){
var statearr_32971_33002 = state_32937__$1;
(statearr_32971_33002[(1)] = (10));

} else {
var statearr_32972_33003 = state_32937__$1;
(statearr_32972_33003[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____0 = (function (){
var statearr_32976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__);

(statearr_32976[(1)] = (1));

return statearr_32976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____1 = (function (state_32937){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_32937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e32977){if((e32977 instanceof Object)){
var ex__30463__auto__ = e32977;
var statearr_32978_33004 = state_32937;
(statearr_32978_33004[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33005 = state_32937;
state_32937 = G__33005;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__ = function(state_32937){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____1.call(this,state_32937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30460__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__))
})();
var state__30482__auto__ = (function (){var statearr_32979 = f__30481__auto__.call(null);
(statearr_32979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__))
);

return c__30480__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33006 = [];
var len__26121__auto___33009 = arguments.length;
var i__26122__auto___33010 = (0);
while(true){
if((i__26122__auto___33010 < len__26121__auto___33009)){
args33006.push((arguments[i__26122__auto___33010]));

var G__33011 = (i__26122__auto___33010 + (1));
i__26122__auto___33010 = G__33011;
continue;
} else {
}
break;
}

var G__33008 = args33006.length;
switch (G__33008) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33006.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33013 = [];
var len__26121__auto___33016 = arguments.length;
var i__26122__auto___33017 = (0);
while(true){
if((i__26122__auto___33017 < len__26121__auto___33016)){
args33013.push((arguments[i__26122__auto___33017]));

var G__33018 = (i__26122__auto___33017 + (1));
i__26122__auto___33017 = G__33018;
continue;
} else {
}
break;
}

var G__33015 = args33013.length;
switch (G__33015) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33013.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33020 = [];
var len__26121__auto___33071 = arguments.length;
var i__26122__auto___33072 = (0);
while(true){
if((i__26122__auto___33072 < len__26121__auto___33071)){
args33020.push((arguments[i__26122__auto___33072]));

var G__33073 = (i__26122__auto___33072 + (1));
i__26122__auto___33072 = G__33073;
continue;
} else {
}
break;
}

var G__33022 = args33020.length;
switch (G__33022) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33020.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___33075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___33075,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___33075,out){
return (function (state_33046){
var state_val_33047 = (state_33046[(1)]);
if((state_val_33047 === (7))){
var inst_33041 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33048_33076 = state_33046__$1;
(statearr_33048_33076[(2)] = inst_33041);

(statearr_33048_33076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (1))){
var inst_33023 = null;
var state_33046__$1 = (function (){var statearr_33049 = state_33046;
(statearr_33049[(7)] = inst_33023);

return statearr_33049;
})();
var statearr_33050_33077 = state_33046__$1;
(statearr_33050_33077[(2)] = null);

(statearr_33050_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (4))){
var inst_33026 = (state_33046[(8)]);
var inst_33026__$1 = (state_33046[(2)]);
var inst_33027 = (inst_33026__$1 == null);
var inst_33028 = cljs.core.not.call(null,inst_33027);
var state_33046__$1 = (function (){var statearr_33051 = state_33046;
(statearr_33051[(8)] = inst_33026__$1);

return statearr_33051;
})();
if(inst_33028){
var statearr_33052_33078 = state_33046__$1;
(statearr_33052_33078[(1)] = (5));

} else {
var statearr_33053_33079 = state_33046__$1;
(statearr_33053_33079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (6))){
var state_33046__$1 = state_33046;
var statearr_33054_33080 = state_33046__$1;
(statearr_33054_33080[(2)] = null);

(statearr_33054_33080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (3))){
var inst_33043 = (state_33046[(2)]);
var inst_33044 = cljs.core.async.close_BANG_.call(null,out);
var state_33046__$1 = (function (){var statearr_33055 = state_33046;
(statearr_33055[(9)] = inst_33043);

return statearr_33055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33046__$1,inst_33044);
} else {
if((state_val_33047 === (2))){
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33046__$1,(4),ch);
} else {
if((state_val_33047 === (11))){
var inst_33026 = (state_33046[(8)]);
var inst_33035 = (state_33046[(2)]);
var inst_33023 = inst_33026;
var state_33046__$1 = (function (){var statearr_33056 = state_33046;
(statearr_33056[(10)] = inst_33035);

(statearr_33056[(7)] = inst_33023);

return statearr_33056;
})();
var statearr_33057_33081 = state_33046__$1;
(statearr_33057_33081[(2)] = null);

(statearr_33057_33081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (9))){
var inst_33026 = (state_33046[(8)]);
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33046__$1,(11),out,inst_33026);
} else {
if((state_val_33047 === (5))){
var inst_33026 = (state_33046[(8)]);
var inst_33023 = (state_33046[(7)]);
var inst_33030 = cljs.core._EQ_.call(null,inst_33026,inst_33023);
var state_33046__$1 = state_33046;
if(inst_33030){
var statearr_33059_33082 = state_33046__$1;
(statearr_33059_33082[(1)] = (8));

} else {
var statearr_33060_33083 = state_33046__$1;
(statearr_33060_33083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (10))){
var inst_33038 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33061_33084 = state_33046__$1;
(statearr_33061_33084[(2)] = inst_33038);

(statearr_33061_33084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (8))){
var inst_33023 = (state_33046[(7)]);
var tmp33058 = inst_33023;
var inst_33023__$1 = tmp33058;
var state_33046__$1 = (function (){var statearr_33062 = state_33046;
(statearr_33062[(7)] = inst_33023__$1);

return statearr_33062;
})();
var statearr_33063_33085 = state_33046__$1;
(statearr_33063_33085[(2)] = null);

(statearr_33063_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___33075,out))
;
return ((function (switch__30459__auto__,c__30480__auto___33075,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_33067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33067[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_33067[(1)] = (1));

return statearr_33067;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_33046){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_33046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e33068){if((e33068 instanceof Object)){
var ex__30463__auto__ = e33068;
var statearr_33069_33086 = state_33046;
(statearr_33069_33086[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33087 = state_33046;
state_33046 = G__33087;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_33046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_33046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___33075,out))
})();
var state__30482__auto__ = (function (){var statearr_33070 = f__30481__auto__.call(null);
(statearr_33070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___33075);

return statearr_33070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___33075,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33088 = [];
var len__26121__auto___33158 = arguments.length;
var i__26122__auto___33159 = (0);
while(true){
if((i__26122__auto___33159 < len__26121__auto___33158)){
args33088.push((arguments[i__26122__auto___33159]));

var G__33160 = (i__26122__auto___33159 + (1));
i__26122__auto___33159 = G__33160;
continue;
} else {
}
break;
}

var G__33090 = args33088.length;
switch (G__33090) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33088.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___33162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___33162,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___33162,out){
return (function (state_33128){
var state_val_33129 = (state_33128[(1)]);
if((state_val_33129 === (7))){
var inst_33124 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33130_33163 = state_33128__$1;
(statearr_33130_33163[(2)] = inst_33124);

(statearr_33130_33163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (1))){
var inst_33091 = (new Array(n));
var inst_33092 = inst_33091;
var inst_33093 = (0);
var state_33128__$1 = (function (){var statearr_33131 = state_33128;
(statearr_33131[(7)] = inst_33093);

(statearr_33131[(8)] = inst_33092);

return statearr_33131;
})();
var statearr_33132_33164 = state_33128__$1;
(statearr_33132_33164[(2)] = null);

(statearr_33132_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (4))){
var inst_33096 = (state_33128[(9)]);
var inst_33096__$1 = (state_33128[(2)]);
var inst_33097 = (inst_33096__$1 == null);
var inst_33098 = cljs.core.not.call(null,inst_33097);
var state_33128__$1 = (function (){var statearr_33133 = state_33128;
(statearr_33133[(9)] = inst_33096__$1);

return statearr_33133;
})();
if(inst_33098){
var statearr_33134_33165 = state_33128__$1;
(statearr_33134_33165[(1)] = (5));

} else {
var statearr_33135_33166 = state_33128__$1;
(statearr_33135_33166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (15))){
var inst_33118 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33136_33167 = state_33128__$1;
(statearr_33136_33167[(2)] = inst_33118);

(statearr_33136_33167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (13))){
var state_33128__$1 = state_33128;
var statearr_33137_33168 = state_33128__$1;
(statearr_33137_33168[(2)] = null);

(statearr_33137_33168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (6))){
var inst_33093 = (state_33128[(7)]);
var inst_33114 = (inst_33093 > (0));
var state_33128__$1 = state_33128;
if(cljs.core.truth_(inst_33114)){
var statearr_33138_33169 = state_33128__$1;
(statearr_33138_33169[(1)] = (12));

} else {
var statearr_33139_33170 = state_33128__$1;
(statearr_33139_33170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (3))){
var inst_33126 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33128__$1,inst_33126);
} else {
if((state_val_33129 === (12))){
var inst_33092 = (state_33128[(8)]);
var inst_33116 = cljs.core.vec.call(null,inst_33092);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33128__$1,(15),out,inst_33116);
} else {
if((state_val_33129 === (2))){
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33128__$1,(4),ch);
} else {
if((state_val_33129 === (11))){
var inst_33108 = (state_33128[(2)]);
var inst_33109 = (new Array(n));
var inst_33092 = inst_33109;
var inst_33093 = (0);
var state_33128__$1 = (function (){var statearr_33140 = state_33128;
(statearr_33140[(7)] = inst_33093);

(statearr_33140[(10)] = inst_33108);

(statearr_33140[(8)] = inst_33092);

return statearr_33140;
})();
var statearr_33141_33171 = state_33128__$1;
(statearr_33141_33171[(2)] = null);

(statearr_33141_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (9))){
var inst_33092 = (state_33128[(8)]);
var inst_33106 = cljs.core.vec.call(null,inst_33092);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33128__$1,(11),out,inst_33106);
} else {
if((state_val_33129 === (5))){
var inst_33101 = (state_33128[(11)]);
var inst_33093 = (state_33128[(7)]);
var inst_33096 = (state_33128[(9)]);
var inst_33092 = (state_33128[(8)]);
var inst_33100 = (inst_33092[inst_33093] = inst_33096);
var inst_33101__$1 = (inst_33093 + (1));
var inst_33102 = (inst_33101__$1 < n);
var state_33128__$1 = (function (){var statearr_33142 = state_33128;
(statearr_33142[(11)] = inst_33101__$1);

(statearr_33142[(12)] = inst_33100);

return statearr_33142;
})();
if(cljs.core.truth_(inst_33102)){
var statearr_33143_33172 = state_33128__$1;
(statearr_33143_33172[(1)] = (8));

} else {
var statearr_33144_33173 = state_33128__$1;
(statearr_33144_33173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (14))){
var inst_33121 = (state_33128[(2)]);
var inst_33122 = cljs.core.async.close_BANG_.call(null,out);
var state_33128__$1 = (function (){var statearr_33146 = state_33128;
(statearr_33146[(13)] = inst_33121);

return statearr_33146;
})();
var statearr_33147_33174 = state_33128__$1;
(statearr_33147_33174[(2)] = inst_33122);

(statearr_33147_33174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (10))){
var inst_33112 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33148_33175 = state_33128__$1;
(statearr_33148_33175[(2)] = inst_33112);

(statearr_33148_33175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (8))){
var inst_33101 = (state_33128[(11)]);
var inst_33092 = (state_33128[(8)]);
var tmp33145 = inst_33092;
var inst_33092__$1 = tmp33145;
var inst_33093 = inst_33101;
var state_33128__$1 = (function (){var statearr_33149 = state_33128;
(statearr_33149[(7)] = inst_33093);

(statearr_33149[(8)] = inst_33092__$1);

return statearr_33149;
})();
var statearr_33150_33176 = state_33128__$1;
(statearr_33150_33176[(2)] = null);

(statearr_33150_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___33162,out))
;
return ((function (switch__30459__auto__,c__30480__auto___33162,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_33154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33154[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_33154[(1)] = (1));

return statearr_33154;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_33128){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_33128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e33155){if((e33155 instanceof Object)){
var ex__30463__auto__ = e33155;
var statearr_33156_33177 = state_33128;
(statearr_33156_33177[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_33128;
state_33128 = G__33178;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_33128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_33128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___33162,out))
})();
var state__30482__auto__ = (function (){var statearr_33157 = f__30481__auto__.call(null);
(statearr_33157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___33162);

return statearr_33157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___33162,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33179 = [];
var len__26121__auto___33253 = arguments.length;
var i__26122__auto___33254 = (0);
while(true){
if((i__26122__auto___33254 < len__26121__auto___33253)){
args33179.push((arguments[i__26122__auto___33254]));

var G__33255 = (i__26122__auto___33254 + (1));
i__26122__auto___33254 = G__33255;
continue;
} else {
}
break;
}

var G__33181 = args33179.length;
switch (G__33181) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33179.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30480__auto___33257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___33257,out){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___33257,out){
return (function (state_33223){
var state_val_33224 = (state_33223[(1)]);
if((state_val_33224 === (7))){
var inst_33219 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
var statearr_33225_33258 = state_33223__$1;
(statearr_33225_33258[(2)] = inst_33219);

(statearr_33225_33258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (1))){
var inst_33182 = [];
var inst_33183 = inst_33182;
var inst_33184 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33223__$1 = (function (){var statearr_33226 = state_33223;
(statearr_33226[(7)] = inst_33183);

(statearr_33226[(8)] = inst_33184);

return statearr_33226;
})();
var statearr_33227_33259 = state_33223__$1;
(statearr_33227_33259[(2)] = null);

(statearr_33227_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (4))){
var inst_33187 = (state_33223[(9)]);
var inst_33187__$1 = (state_33223[(2)]);
var inst_33188 = (inst_33187__$1 == null);
var inst_33189 = cljs.core.not.call(null,inst_33188);
var state_33223__$1 = (function (){var statearr_33228 = state_33223;
(statearr_33228[(9)] = inst_33187__$1);

return statearr_33228;
})();
if(inst_33189){
var statearr_33229_33260 = state_33223__$1;
(statearr_33229_33260[(1)] = (5));

} else {
var statearr_33230_33261 = state_33223__$1;
(statearr_33230_33261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (15))){
var inst_33213 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
var statearr_33231_33262 = state_33223__$1;
(statearr_33231_33262[(2)] = inst_33213);

(statearr_33231_33262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (13))){
var state_33223__$1 = state_33223;
var statearr_33232_33263 = state_33223__$1;
(statearr_33232_33263[(2)] = null);

(statearr_33232_33263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (6))){
var inst_33183 = (state_33223[(7)]);
var inst_33208 = inst_33183.length;
var inst_33209 = (inst_33208 > (0));
var state_33223__$1 = state_33223;
if(cljs.core.truth_(inst_33209)){
var statearr_33233_33264 = state_33223__$1;
(statearr_33233_33264[(1)] = (12));

} else {
var statearr_33234_33265 = state_33223__$1;
(statearr_33234_33265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (3))){
var inst_33221 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33223__$1,inst_33221);
} else {
if((state_val_33224 === (12))){
var inst_33183 = (state_33223[(7)]);
var inst_33211 = cljs.core.vec.call(null,inst_33183);
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33223__$1,(15),out,inst_33211);
} else {
if((state_val_33224 === (2))){
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33223__$1,(4),ch);
} else {
if((state_val_33224 === (11))){
var inst_33187 = (state_33223[(9)]);
var inst_33191 = (state_33223[(10)]);
var inst_33201 = (state_33223[(2)]);
var inst_33202 = [];
var inst_33203 = inst_33202.push(inst_33187);
var inst_33183 = inst_33202;
var inst_33184 = inst_33191;
var state_33223__$1 = (function (){var statearr_33235 = state_33223;
(statearr_33235[(7)] = inst_33183);

(statearr_33235[(11)] = inst_33201);

(statearr_33235[(12)] = inst_33203);

(statearr_33235[(8)] = inst_33184);

return statearr_33235;
})();
var statearr_33236_33266 = state_33223__$1;
(statearr_33236_33266[(2)] = null);

(statearr_33236_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (9))){
var inst_33183 = (state_33223[(7)]);
var inst_33199 = cljs.core.vec.call(null,inst_33183);
var state_33223__$1 = state_33223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33223__$1,(11),out,inst_33199);
} else {
if((state_val_33224 === (5))){
var inst_33187 = (state_33223[(9)]);
var inst_33191 = (state_33223[(10)]);
var inst_33184 = (state_33223[(8)]);
var inst_33191__$1 = f.call(null,inst_33187);
var inst_33192 = cljs.core._EQ_.call(null,inst_33191__$1,inst_33184);
var inst_33193 = cljs.core.keyword_identical_QMARK_.call(null,inst_33184,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33194 = (inst_33192) || (inst_33193);
var state_33223__$1 = (function (){var statearr_33237 = state_33223;
(statearr_33237[(10)] = inst_33191__$1);

return statearr_33237;
})();
if(cljs.core.truth_(inst_33194)){
var statearr_33238_33267 = state_33223__$1;
(statearr_33238_33267[(1)] = (8));

} else {
var statearr_33239_33268 = state_33223__$1;
(statearr_33239_33268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (14))){
var inst_33216 = (state_33223[(2)]);
var inst_33217 = cljs.core.async.close_BANG_.call(null,out);
var state_33223__$1 = (function (){var statearr_33241 = state_33223;
(statearr_33241[(13)] = inst_33216);

return statearr_33241;
})();
var statearr_33242_33269 = state_33223__$1;
(statearr_33242_33269[(2)] = inst_33217);

(statearr_33242_33269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (10))){
var inst_33206 = (state_33223[(2)]);
var state_33223__$1 = state_33223;
var statearr_33243_33270 = state_33223__$1;
(statearr_33243_33270[(2)] = inst_33206);

(statearr_33243_33270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33224 === (8))){
var inst_33183 = (state_33223[(7)]);
var inst_33187 = (state_33223[(9)]);
var inst_33191 = (state_33223[(10)]);
var inst_33196 = inst_33183.push(inst_33187);
var tmp33240 = inst_33183;
var inst_33183__$1 = tmp33240;
var inst_33184 = inst_33191;
var state_33223__$1 = (function (){var statearr_33244 = state_33223;
(statearr_33244[(7)] = inst_33183__$1);

(statearr_33244[(14)] = inst_33196);

(statearr_33244[(8)] = inst_33184);

return statearr_33244;
})();
var statearr_33245_33271 = state_33223__$1;
(statearr_33245_33271[(2)] = null);

(statearr_33245_33271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30480__auto___33257,out))
;
return ((function (switch__30459__auto__,c__30480__auto___33257,out){
return (function() {
var cljs$core$async$state_machine__30460__auto__ = null;
var cljs$core$async$state_machine__30460__auto____0 = (function (){
var statearr_33249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33249[(0)] = cljs$core$async$state_machine__30460__auto__);

(statearr_33249[(1)] = (1));

return statearr_33249;
});
var cljs$core$async$state_machine__30460__auto____1 = (function (state_33223){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_33223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e33250){if((e33250 instanceof Object)){
var ex__30463__auto__ = e33250;
var statearr_33251_33272 = state_33223;
(statearr_33251_33272[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33273 = state_33223;
state_33223 = G__33273;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
cljs$core$async$state_machine__30460__auto__ = function(state_33223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30460__auto____1.call(this,state_33223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30460__auto____0;
cljs$core$async$state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30460__auto____1;
return cljs$core$async$state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___33257,out))
})();
var state__30482__auto__ = (function (){var statearr_33252 = f__30481__auto__.call(null);
(statearr_33252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___33257);

return statearr_33252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___33257,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484702563830
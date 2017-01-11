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
var args17429 = [];
var len__7484__auto___17435 = arguments.length;
var i__7485__auto___17436 = (0);
while(true){
if((i__7485__auto___17436 < len__7484__auto___17435)){
args17429.push((arguments[i__7485__auto___17436]));

var G__17437 = (i__7485__auto___17436 + (1));
i__7485__auto___17436 = G__17437;
continue;
} else {
}
break;
}

var G__17431 = args17429.length;
switch (G__17431) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17429.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17432 = (function (f,blockable,meta17433){
this.f = f;
this.blockable = blockable;
this.meta17433 = meta17433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17434,meta17433__$1){
var self__ = this;
var _17434__$1 = this;
return (new cljs.core.async.t_cljs$core$async17432(self__.f,self__.blockable,meta17433__$1));
});

cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17434){
var self__ = this;
var _17434__$1 = this;
return self__.meta17433;
});

cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17433","meta17433",1251472025,null)], null);
});

cljs.core.async.t_cljs$core$async17432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17432";

cljs.core.async.t_cljs$core$async17432.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17432");
});

cljs.core.async.__GT_t_cljs$core$async17432 = (function cljs$core$async$__GT_t_cljs$core$async17432(f__$1,blockable__$1,meta17433){
return (new cljs.core.async.t_cljs$core$async17432(f__$1,blockable__$1,meta17433));
});

}

return (new cljs.core.async.t_cljs$core$async17432(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17441 = [];
var len__7484__auto___17444 = arguments.length;
var i__7485__auto___17445 = (0);
while(true){
if((i__7485__auto___17445 < len__7484__auto___17444)){
args17441.push((arguments[i__7485__auto___17445]));

var G__17446 = (i__7485__auto___17445 + (1));
i__7485__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var G__17443 = args17441.length;
switch (G__17443) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17441.length)].join('')));

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
var args17448 = [];
var len__7484__auto___17451 = arguments.length;
var i__7485__auto___17452 = (0);
while(true){
if((i__7485__auto___17452 < len__7484__auto___17451)){
args17448.push((arguments[i__7485__auto___17452]));

var G__17453 = (i__7485__auto___17452 + (1));
i__7485__auto___17452 = G__17453;
continue;
} else {
}
break;
}

var G__17450 = args17448.length;
switch (G__17450) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17448.length)].join('')));

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
var args17455 = [];
var len__7484__auto___17458 = arguments.length;
var i__7485__auto___17459 = (0);
while(true){
if((i__7485__auto___17459 < len__7484__auto___17458)){
args17455.push((arguments[i__7485__auto___17459]));

var G__17460 = (i__7485__auto___17459 + (1));
i__7485__auto___17459 = G__17460;
continue;
} else {
}
break;
}

var G__17457 = args17455.length;
switch (G__17457) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17455.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17462 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17462);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17462,ret){
return (function (){
return fn1.call(null,val_17462);
});})(val_17462,ret))
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
var args17463 = [];
var len__7484__auto___17466 = arguments.length;
var i__7485__auto___17467 = (0);
while(true){
if((i__7485__auto___17467 < len__7484__auto___17466)){
args17463.push((arguments[i__7485__auto___17467]));

var G__17468 = (i__7485__auto___17467 + (1));
i__7485__auto___17467 = G__17468;
continue;
} else {
}
break;
}

var G__17465 = args17463.length;
switch (G__17465) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17463.length)].join('')));

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
var n__7324__auto___17470 = n;
var x_17471 = (0);
while(true){
if((x_17471 < n__7324__auto___17470)){
(a[x_17471] = (0));

var G__17472 = (x_17471 + (1));
x_17471 = G__17472;
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

var G__17473 = (i + (1));
i = G__17473;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17477 = (function (alt_flag,flag,meta17478){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17478 = meta17478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17479,meta17478__$1){
var self__ = this;
var _17479__$1 = this;
return (new cljs.core.async.t_cljs$core$async17477(self__.alt_flag,self__.flag,meta17478__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17479){
var self__ = this;
var _17479__$1 = this;
return self__.meta17478;
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17478","meta17478",756241644,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17477";

cljs.core.async.t_cljs$core$async17477.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17477");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17477 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17477(alt_flag__$1,flag__$1,meta17478){
return (new cljs.core.async.t_cljs$core$async17477(alt_flag__$1,flag__$1,meta17478));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17477(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17483 = (function (alt_handler,flag,cb,meta17484){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17484 = meta17484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17485,meta17484__$1){
var self__ = this;
var _17485__$1 = this;
return (new cljs.core.async.t_cljs$core$async17483(self__.alt_handler,self__.flag,self__.cb,meta17484__$1));
});

cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17485){
var self__ = this;
var _17485__$1 = this;
return self__.meta17484;
});

cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17484","meta17484",-1104007038,null)], null);
});

cljs.core.async.t_cljs$core$async17483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17483";

cljs.core.async.t_cljs$core$async17483.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17483");
});

cljs.core.async.__GT_t_cljs$core$async17483 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17483(alt_handler__$1,flag__$1,cb__$1,meta17484){
return (new cljs.core.async.t_cljs$core$async17483(alt_handler__$1,flag__$1,cb__$1,meta17484));
});

}

return (new cljs.core.async.t_cljs$core$async17483(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17486_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17487_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17487_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17488 = (i + (1));
i = G__17488;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6409__auto__ = ret;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6397__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___17494 = arguments.length;
var i__7485__auto___17495 = (0);
while(true){
if((i__7485__auto___17495 < len__7484__auto___17494)){
args__7491__auto__.push((arguments[i__7485__auto___17495]));

var G__17496 = (i__7485__auto___17495 + (1));
i__7485__auto___17495 = G__17496;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17491){
var map__17492 = p__17491;
var map__17492__$1 = ((((!((map__17492 == null)))?((((map__17492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17492):map__17492);
var opts = map__17492__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17489){
var G__17490 = cljs.core.first.call(null,seq17489);
var seq17489__$1 = cljs.core.next.call(null,seq17489);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17490,seq17489__$1);
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
var args17497 = [];
var len__7484__auto___17547 = arguments.length;
var i__7485__auto___17548 = (0);
while(true){
if((i__7485__auto___17548 < len__7484__auto___17547)){
args17497.push((arguments[i__7485__auto___17548]));

var G__17549 = (i__7485__auto___17548 + (1));
i__7485__auto___17548 = G__17549;
continue;
} else {
}
break;
}

var G__17499 = args17497.length;
switch (G__17499) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17497.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17384__auto___17551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___17551){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___17551){
return (function (state_17523){
var state_val_17524 = (state_17523[(1)]);
if((state_val_17524 === (7))){
var inst_17519 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17525_17552 = state_17523__$1;
(statearr_17525_17552[(2)] = inst_17519);

(statearr_17525_17552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (1))){
var state_17523__$1 = state_17523;
var statearr_17526_17553 = state_17523__$1;
(statearr_17526_17553[(2)] = null);

(statearr_17526_17553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (4))){
var inst_17502 = (state_17523[(7)]);
var inst_17502__$1 = (state_17523[(2)]);
var inst_17503 = (inst_17502__$1 == null);
var state_17523__$1 = (function (){var statearr_17527 = state_17523;
(statearr_17527[(7)] = inst_17502__$1);

return statearr_17527;
})();
if(cljs.core.truth_(inst_17503)){
var statearr_17528_17554 = state_17523__$1;
(statearr_17528_17554[(1)] = (5));

} else {
var statearr_17529_17555 = state_17523__$1;
(statearr_17529_17555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (13))){
var state_17523__$1 = state_17523;
var statearr_17530_17556 = state_17523__$1;
(statearr_17530_17556[(2)] = null);

(statearr_17530_17556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (6))){
var inst_17502 = (state_17523[(7)]);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17523__$1,(11),to,inst_17502);
} else {
if((state_val_17524 === (3))){
var inst_17521 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17523__$1,inst_17521);
} else {
if((state_val_17524 === (12))){
var state_17523__$1 = state_17523;
var statearr_17531_17557 = state_17523__$1;
(statearr_17531_17557[(2)] = null);

(statearr_17531_17557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (2))){
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17523__$1,(4),from);
} else {
if((state_val_17524 === (11))){
var inst_17512 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
if(cljs.core.truth_(inst_17512)){
var statearr_17532_17558 = state_17523__$1;
(statearr_17532_17558[(1)] = (12));

} else {
var statearr_17533_17559 = state_17523__$1;
(statearr_17533_17559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (9))){
var state_17523__$1 = state_17523;
var statearr_17534_17560 = state_17523__$1;
(statearr_17534_17560[(2)] = null);

(statearr_17534_17560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (5))){
var state_17523__$1 = state_17523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17535_17561 = state_17523__$1;
(statearr_17535_17561[(1)] = (8));

} else {
var statearr_17536_17562 = state_17523__$1;
(statearr_17536_17562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (14))){
var inst_17517 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17537_17563 = state_17523__$1;
(statearr_17537_17563[(2)] = inst_17517);

(statearr_17537_17563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (10))){
var inst_17509 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17538_17564 = state_17523__$1;
(statearr_17538_17564[(2)] = inst_17509);

(statearr_17538_17564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (8))){
var inst_17506 = cljs.core.async.close_BANG_.call(null,to);
var state_17523__$1 = state_17523;
var statearr_17539_17565 = state_17523__$1;
(statearr_17539_17565[(2)] = inst_17506);

(statearr_17539_17565[(1)] = (10));


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
});})(c__17384__auto___17551))
;
return ((function (switch__17272__auto__,c__17384__auto___17551){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_17543 = [null,null,null,null,null,null,null,null];
(statearr_17543[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_17543[(1)] = (1));

return statearr_17543;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_17523){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17544){if((e17544 instanceof Object)){
var ex__17276__auto__ = e17544;
var statearr_17545_17566 = state_17523;
(statearr_17545_17566[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17567 = state_17523;
state_17523 = G__17567;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___17551))
})();
var state__17386__auto__ = (function (){var statearr_17546 = f__17385__auto__.call(null);
(statearr_17546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___17551);

return statearr_17546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___17551))
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
return (function (p__17755){
var vec__17756 = p__17755;
var v = cljs.core.nth.call(null,vec__17756,(0),null);
var p = cljs.core.nth.call(null,vec__17756,(1),null);
var job = vec__17756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17384__auto___17942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results){
return (function (state_17763){
var state_val_17764 = (state_17763[(1)]);
if((state_val_17764 === (1))){
var state_17763__$1 = state_17763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17763__$1,(2),res,v);
} else {
if((state_val_17764 === (2))){
var inst_17760 = (state_17763[(2)]);
var inst_17761 = cljs.core.async.close_BANG_.call(null,res);
var state_17763__$1 = (function (){var statearr_17765 = state_17763;
(statearr_17765[(7)] = inst_17760);

return statearr_17765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17763__$1,inst_17761);
} else {
return null;
}
}
});})(c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results))
;
return ((function (switch__17272__auto__,c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_17769 = [null,null,null,null,null,null,null,null];
(statearr_17769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__);

(statearr_17769[(1)] = (1));

return statearr_17769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1 = (function (state_17763){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17770){if((e17770 instanceof Object)){
var ex__17276__auto__ = e17770;
var statearr_17771_17943 = state_17763;
(statearr_17771_17943[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17944 = state_17763;
state_17763 = G__17944;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = function(state_17763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1.call(this,state_17763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results))
})();
var state__17386__auto__ = (function (){var statearr_17772 = f__17385__auto__.call(null);
(statearr_17772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___17942);

return statearr_17772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___17942,res,vec__17756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17773){
var vec__17774 = p__17773;
var v = cljs.core.nth.call(null,vec__17774,(0),null);
var p = cljs.core.nth.call(null,vec__17774,(1),null);
var job = vec__17774;
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
var n__7324__auto___17945 = n;
var __17946 = (0);
while(true){
if((__17946 < n__7324__auto___17945)){
var G__17777_17947 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17777_17947) {
case "compute":
var c__17384__auto___17949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17946,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (__17946,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function (state_17790){
var state_val_17791 = (state_17790[(1)]);
if((state_val_17791 === (1))){
var state_17790__$1 = state_17790;
var statearr_17792_17950 = state_17790__$1;
(statearr_17792_17950[(2)] = null);

(statearr_17792_17950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (2))){
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17790__$1,(4),jobs);
} else {
if((state_val_17791 === (3))){
var inst_17788 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17790__$1,inst_17788);
} else {
if((state_val_17791 === (4))){
var inst_17780 = (state_17790[(2)]);
var inst_17781 = process.call(null,inst_17780);
var state_17790__$1 = state_17790;
if(cljs.core.truth_(inst_17781)){
var statearr_17793_17951 = state_17790__$1;
(statearr_17793_17951[(1)] = (5));

} else {
var statearr_17794_17952 = state_17790__$1;
(statearr_17794_17952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (5))){
var state_17790__$1 = state_17790;
var statearr_17795_17953 = state_17790__$1;
(statearr_17795_17953[(2)] = null);

(statearr_17795_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (6))){
var state_17790__$1 = state_17790;
var statearr_17796_17954 = state_17790__$1;
(statearr_17796_17954[(2)] = null);

(statearr_17796_17954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (7))){
var inst_17786 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
var statearr_17797_17955 = state_17790__$1;
(statearr_17797_17955[(2)] = inst_17786);

(statearr_17797_17955[(1)] = (3));


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
});})(__17946,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
;
return ((function (__17946,switch__17272__auto__,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_17801 = [null,null,null,null,null,null,null];
(statearr_17801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__);

(statearr_17801[(1)] = (1));

return statearr_17801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1 = (function (state_17790){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17802){if((e17802 instanceof Object)){
var ex__17276__auto__ = e17802;
var statearr_17803_17956 = state_17790;
(statearr_17803_17956[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17957 = state_17790;
state_17790 = G__17957;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = function(state_17790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1.call(this,state_17790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__;
})()
;})(__17946,switch__17272__auto__,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
})();
var state__17386__auto__ = (function (){var statearr_17804 = f__17385__auto__.call(null);
(statearr_17804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___17949);

return statearr_17804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(__17946,c__17384__auto___17949,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
);


break;
case "async":
var c__17384__auto___17958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17946,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (__17946,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function (state_17817){
var state_val_17818 = (state_17817[(1)]);
if((state_val_17818 === (1))){
var state_17817__$1 = state_17817;
var statearr_17819_17959 = state_17817__$1;
(statearr_17819_17959[(2)] = null);

(statearr_17819_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17818 === (2))){
var state_17817__$1 = state_17817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17817__$1,(4),jobs);
} else {
if((state_val_17818 === (3))){
var inst_17815 = (state_17817[(2)]);
var state_17817__$1 = state_17817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17817__$1,inst_17815);
} else {
if((state_val_17818 === (4))){
var inst_17807 = (state_17817[(2)]);
var inst_17808 = async.call(null,inst_17807);
var state_17817__$1 = state_17817;
if(cljs.core.truth_(inst_17808)){
var statearr_17820_17960 = state_17817__$1;
(statearr_17820_17960[(1)] = (5));

} else {
var statearr_17821_17961 = state_17817__$1;
(statearr_17821_17961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17818 === (5))){
var state_17817__$1 = state_17817;
var statearr_17822_17962 = state_17817__$1;
(statearr_17822_17962[(2)] = null);

(statearr_17822_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17818 === (6))){
var state_17817__$1 = state_17817;
var statearr_17823_17963 = state_17817__$1;
(statearr_17823_17963[(2)] = null);

(statearr_17823_17963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17818 === (7))){
var inst_17813 = (state_17817[(2)]);
var state_17817__$1 = state_17817;
var statearr_17824_17964 = state_17817__$1;
(statearr_17824_17964[(2)] = inst_17813);

(statearr_17824_17964[(1)] = (3));


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
});})(__17946,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
;
return ((function (__17946,switch__17272__auto__,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_17828 = [null,null,null,null,null,null,null];
(statearr_17828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__);

(statearr_17828[(1)] = (1));

return statearr_17828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1 = (function (state_17817){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17829){if((e17829 instanceof Object)){
var ex__17276__auto__ = e17829;
var statearr_17830_17965 = state_17817;
(statearr_17830_17965[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17966 = state_17817;
state_17817 = G__17966;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = function(state_17817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1.call(this,state_17817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__;
})()
;})(__17946,switch__17272__auto__,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
})();
var state__17386__auto__ = (function (){var statearr_17831 = f__17385__auto__.call(null);
(statearr_17831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___17958);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(__17946,c__17384__auto___17958,G__17777_17947,n__7324__auto___17945,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17967 = (__17946 + (1));
__17946 = G__17967;
continue;
} else {
}
break;
}

var c__17384__auto___17968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___17968,jobs,results,process,async){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___17968,jobs,results,process,async){
return (function (state_17853){
var state_val_17854 = (state_17853[(1)]);
if((state_val_17854 === (1))){
var state_17853__$1 = state_17853;
var statearr_17855_17969 = state_17853__$1;
(statearr_17855_17969[(2)] = null);

(statearr_17855_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (2))){
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17853__$1,(4),from);
} else {
if((state_val_17854 === (3))){
var inst_17851 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17853__$1,inst_17851);
} else {
if((state_val_17854 === (4))){
var inst_17834 = (state_17853[(7)]);
var inst_17834__$1 = (state_17853[(2)]);
var inst_17835 = (inst_17834__$1 == null);
var state_17853__$1 = (function (){var statearr_17856 = state_17853;
(statearr_17856[(7)] = inst_17834__$1);

return statearr_17856;
})();
if(cljs.core.truth_(inst_17835)){
var statearr_17857_17970 = state_17853__$1;
(statearr_17857_17970[(1)] = (5));

} else {
var statearr_17858_17971 = state_17853__$1;
(statearr_17858_17971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (5))){
var inst_17837 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17853__$1 = state_17853;
var statearr_17859_17972 = state_17853__$1;
(statearr_17859_17972[(2)] = inst_17837);

(statearr_17859_17972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (6))){
var inst_17834 = (state_17853[(7)]);
var inst_17839 = (state_17853[(8)]);
var inst_17839__$1 = cljs.core.async.chan.call(null,(1));
var inst_17840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17841 = [inst_17834,inst_17839__$1];
var inst_17842 = (new cljs.core.PersistentVector(null,2,(5),inst_17840,inst_17841,null));
var state_17853__$1 = (function (){var statearr_17860 = state_17853;
(statearr_17860[(8)] = inst_17839__$1);

return statearr_17860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17853__$1,(8),jobs,inst_17842);
} else {
if((state_val_17854 === (7))){
var inst_17849 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17861_17973 = state_17853__$1;
(statearr_17861_17973[(2)] = inst_17849);

(statearr_17861_17973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (8))){
var inst_17839 = (state_17853[(8)]);
var inst_17844 = (state_17853[(2)]);
var state_17853__$1 = (function (){var statearr_17862 = state_17853;
(statearr_17862[(9)] = inst_17844);

return statearr_17862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17853__$1,(9),results,inst_17839);
} else {
if((state_val_17854 === (9))){
var inst_17846 = (state_17853[(2)]);
var state_17853__$1 = (function (){var statearr_17863 = state_17853;
(statearr_17863[(10)] = inst_17846);

return statearr_17863;
})();
var statearr_17864_17974 = state_17853__$1;
(statearr_17864_17974[(2)] = null);

(statearr_17864_17974[(1)] = (2));


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
});})(c__17384__auto___17968,jobs,results,process,async))
;
return ((function (switch__17272__auto__,c__17384__auto___17968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_17868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__);

(statearr_17868[(1)] = (1));

return statearr_17868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1 = (function (state_17853){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17869){if((e17869 instanceof Object)){
var ex__17276__auto__ = e17869;
var statearr_17870_17975 = state_17853;
(statearr_17870_17975[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17976 = state_17853;
state_17853 = G__17976;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = function(state_17853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1.call(this,state_17853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___17968,jobs,results,process,async))
})();
var state__17386__auto__ = (function (){var statearr_17871 = f__17385__auto__.call(null);
(statearr_17871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___17968);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___17968,jobs,results,process,async))
);


var c__17384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto__,jobs,results,process,async){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto__,jobs,results,process,async){
return (function (state_17909){
var state_val_17910 = (state_17909[(1)]);
if((state_val_17910 === (7))){
var inst_17905 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17911_17977 = state_17909__$1;
(statearr_17911_17977[(2)] = inst_17905);

(statearr_17911_17977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (20))){
var state_17909__$1 = state_17909;
var statearr_17912_17978 = state_17909__$1;
(statearr_17912_17978[(2)] = null);

(statearr_17912_17978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (1))){
var state_17909__$1 = state_17909;
var statearr_17913_17979 = state_17909__$1;
(statearr_17913_17979[(2)] = null);

(statearr_17913_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (4))){
var inst_17874 = (state_17909[(7)]);
var inst_17874__$1 = (state_17909[(2)]);
var inst_17875 = (inst_17874__$1 == null);
var state_17909__$1 = (function (){var statearr_17914 = state_17909;
(statearr_17914[(7)] = inst_17874__$1);

return statearr_17914;
})();
if(cljs.core.truth_(inst_17875)){
var statearr_17915_17980 = state_17909__$1;
(statearr_17915_17980[(1)] = (5));

} else {
var statearr_17916_17981 = state_17909__$1;
(statearr_17916_17981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (15))){
var inst_17887 = (state_17909[(8)]);
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17909__$1,(18),to,inst_17887);
} else {
if((state_val_17910 === (21))){
var inst_17900 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17917_17982 = state_17909__$1;
(statearr_17917_17982[(2)] = inst_17900);

(statearr_17917_17982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (13))){
var inst_17902 = (state_17909[(2)]);
var state_17909__$1 = (function (){var statearr_17918 = state_17909;
(statearr_17918[(9)] = inst_17902);

return statearr_17918;
})();
var statearr_17919_17983 = state_17909__$1;
(statearr_17919_17983[(2)] = null);

(statearr_17919_17983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (6))){
var inst_17874 = (state_17909[(7)]);
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17909__$1,(11),inst_17874);
} else {
if((state_val_17910 === (17))){
var inst_17895 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
if(cljs.core.truth_(inst_17895)){
var statearr_17920_17984 = state_17909__$1;
(statearr_17920_17984[(1)] = (19));

} else {
var statearr_17921_17985 = state_17909__$1;
(statearr_17921_17985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (3))){
var inst_17907 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17909__$1,inst_17907);
} else {
if((state_val_17910 === (12))){
var inst_17884 = (state_17909[(10)]);
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17909__$1,(14),inst_17884);
} else {
if((state_val_17910 === (2))){
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17909__$1,(4),results);
} else {
if((state_val_17910 === (19))){
var state_17909__$1 = state_17909;
var statearr_17922_17986 = state_17909__$1;
(statearr_17922_17986[(2)] = null);

(statearr_17922_17986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (11))){
var inst_17884 = (state_17909[(2)]);
var state_17909__$1 = (function (){var statearr_17923 = state_17909;
(statearr_17923[(10)] = inst_17884);

return statearr_17923;
})();
var statearr_17924_17987 = state_17909__$1;
(statearr_17924_17987[(2)] = null);

(statearr_17924_17987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (9))){
var state_17909__$1 = state_17909;
var statearr_17925_17988 = state_17909__$1;
(statearr_17925_17988[(2)] = null);

(statearr_17925_17988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (5))){
var state_17909__$1 = state_17909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17926_17989 = state_17909__$1;
(statearr_17926_17989[(1)] = (8));

} else {
var statearr_17927_17990 = state_17909__$1;
(statearr_17927_17990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (14))){
var inst_17889 = (state_17909[(11)]);
var inst_17887 = (state_17909[(8)]);
var inst_17887__$1 = (state_17909[(2)]);
var inst_17888 = (inst_17887__$1 == null);
var inst_17889__$1 = cljs.core.not.call(null,inst_17888);
var state_17909__$1 = (function (){var statearr_17928 = state_17909;
(statearr_17928[(11)] = inst_17889__$1);

(statearr_17928[(8)] = inst_17887__$1);

return statearr_17928;
})();
if(inst_17889__$1){
var statearr_17929_17991 = state_17909__$1;
(statearr_17929_17991[(1)] = (15));

} else {
var statearr_17930_17992 = state_17909__$1;
(statearr_17930_17992[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (16))){
var inst_17889 = (state_17909[(11)]);
var state_17909__$1 = state_17909;
var statearr_17931_17993 = state_17909__$1;
(statearr_17931_17993[(2)] = inst_17889);

(statearr_17931_17993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (10))){
var inst_17881 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17932_17994 = state_17909__$1;
(statearr_17932_17994[(2)] = inst_17881);

(statearr_17932_17994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (18))){
var inst_17892 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17933_17995 = state_17909__$1;
(statearr_17933_17995[(2)] = inst_17892);

(statearr_17933_17995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (8))){
var inst_17878 = cljs.core.async.close_BANG_.call(null,to);
var state_17909__$1 = state_17909;
var statearr_17934_17996 = state_17909__$1;
(statearr_17934_17996[(2)] = inst_17878);

(statearr_17934_17996[(1)] = (10));


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
});})(c__17384__auto__,jobs,results,process,async))
;
return ((function (switch__17272__auto__,c__17384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_17938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__);

(statearr_17938[(1)] = (1));

return statearr_17938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1 = (function (state_17909){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_17909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e17939){if((e17939 instanceof Object)){
var ex__17276__auto__ = e17939;
var statearr_17940_17997 = state_17909;
(statearr_17940_17997[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17998 = state_17909;
state_17909 = G__17998;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__ = function(state_17909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1.call(this,state_17909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto__,jobs,results,process,async))
})();
var state__17386__auto__ = (function (){var statearr_17941 = f__17385__auto__.call(null);
(statearr_17941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto__);

return statearr_17941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto__,jobs,results,process,async))
);

return c__17384__auto__;
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
var args17999 = [];
var len__7484__auto___18002 = arguments.length;
var i__7485__auto___18003 = (0);
while(true){
if((i__7485__auto___18003 < len__7484__auto___18002)){
args17999.push((arguments[i__7485__auto___18003]));

var G__18004 = (i__7485__auto___18003 + (1));
i__7485__auto___18003 = G__18004;
continue;
} else {
}
break;
}

var G__18001 = args17999.length;
switch (G__18001) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17999.length)].join('')));

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
var args18006 = [];
var len__7484__auto___18009 = arguments.length;
var i__7485__auto___18010 = (0);
while(true){
if((i__7485__auto___18010 < len__7484__auto___18009)){
args18006.push((arguments[i__7485__auto___18010]));

var G__18011 = (i__7485__auto___18010 + (1));
i__7485__auto___18010 = G__18011;
continue;
} else {
}
break;
}

var G__18008 = args18006.length;
switch (G__18008) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18006.length)].join('')));

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
var args18013 = [];
var len__7484__auto___18066 = arguments.length;
var i__7485__auto___18067 = (0);
while(true){
if((i__7485__auto___18067 < len__7484__auto___18066)){
args18013.push((arguments[i__7485__auto___18067]));

var G__18068 = (i__7485__auto___18067 + (1));
i__7485__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var G__18015 = args18013.length;
switch (G__18015) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18013.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17384__auto___18070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___18070,tc,fc){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___18070,tc,fc){
return (function (state_18041){
var state_val_18042 = (state_18041[(1)]);
if((state_val_18042 === (7))){
var inst_18037 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18043_18071 = state_18041__$1;
(statearr_18043_18071[(2)] = inst_18037);

(statearr_18043_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (1))){
var state_18041__$1 = state_18041;
var statearr_18044_18072 = state_18041__$1;
(statearr_18044_18072[(2)] = null);

(statearr_18044_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (4))){
var inst_18018 = (state_18041[(7)]);
var inst_18018__$1 = (state_18041[(2)]);
var inst_18019 = (inst_18018__$1 == null);
var state_18041__$1 = (function (){var statearr_18045 = state_18041;
(statearr_18045[(7)] = inst_18018__$1);

return statearr_18045;
})();
if(cljs.core.truth_(inst_18019)){
var statearr_18046_18073 = state_18041__$1;
(statearr_18046_18073[(1)] = (5));

} else {
var statearr_18047_18074 = state_18041__$1;
(statearr_18047_18074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (13))){
var state_18041__$1 = state_18041;
var statearr_18048_18075 = state_18041__$1;
(statearr_18048_18075[(2)] = null);

(statearr_18048_18075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (6))){
var inst_18018 = (state_18041[(7)]);
var inst_18024 = p.call(null,inst_18018);
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18024)){
var statearr_18049_18076 = state_18041__$1;
(statearr_18049_18076[(1)] = (9));

} else {
var statearr_18050_18077 = state_18041__$1;
(statearr_18050_18077[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (3))){
var inst_18039 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18041__$1,inst_18039);
} else {
if((state_val_18042 === (12))){
var state_18041__$1 = state_18041;
var statearr_18051_18078 = state_18041__$1;
(statearr_18051_18078[(2)] = null);

(statearr_18051_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (2))){
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18041__$1,(4),ch);
} else {
if((state_val_18042 === (11))){
var inst_18018 = (state_18041[(7)]);
var inst_18028 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18041__$1,(8),inst_18028,inst_18018);
} else {
if((state_val_18042 === (9))){
var state_18041__$1 = state_18041;
var statearr_18052_18079 = state_18041__$1;
(statearr_18052_18079[(2)] = tc);

(statearr_18052_18079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (5))){
var inst_18021 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18022 = cljs.core.async.close_BANG_.call(null,fc);
var state_18041__$1 = (function (){var statearr_18053 = state_18041;
(statearr_18053[(8)] = inst_18021);

return statearr_18053;
})();
var statearr_18054_18080 = state_18041__$1;
(statearr_18054_18080[(2)] = inst_18022);

(statearr_18054_18080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (14))){
var inst_18035 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18055_18081 = state_18041__$1;
(statearr_18055_18081[(2)] = inst_18035);

(statearr_18055_18081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (10))){
var state_18041__$1 = state_18041;
var statearr_18056_18082 = state_18041__$1;
(statearr_18056_18082[(2)] = fc);

(statearr_18056_18082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (8))){
var inst_18030 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18030)){
var statearr_18057_18083 = state_18041__$1;
(statearr_18057_18083[(1)] = (12));

} else {
var statearr_18058_18084 = state_18041__$1;
(statearr_18058_18084[(1)] = (13));

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
});})(c__17384__auto___18070,tc,fc))
;
return ((function (switch__17272__auto__,c__17384__auto___18070,tc,fc){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_18041){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_18041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__17276__auto__ = e18063;
var statearr_18064_18085 = state_18041;
(statearr_18064_18085[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18086 = state_18041;
state_18041 = G__18086;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_18041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_18041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___18070,tc,fc))
})();
var state__17386__auto__ = (function (){var statearr_18065 = f__17385__auto__.call(null);
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___18070);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___18070,tc,fc))
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
var c__17384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto__){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto__){
return (function (state_18150){
var state_val_18151 = (state_18150[(1)]);
if((state_val_18151 === (7))){
var inst_18146 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18152_18173 = state_18150__$1;
(statearr_18152_18173[(2)] = inst_18146);

(statearr_18152_18173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (1))){
var inst_18130 = init;
var state_18150__$1 = (function (){var statearr_18153 = state_18150;
(statearr_18153[(7)] = inst_18130);

return statearr_18153;
})();
var statearr_18154_18174 = state_18150__$1;
(statearr_18154_18174[(2)] = null);

(statearr_18154_18174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (4))){
var inst_18133 = (state_18150[(8)]);
var inst_18133__$1 = (state_18150[(2)]);
var inst_18134 = (inst_18133__$1 == null);
var state_18150__$1 = (function (){var statearr_18155 = state_18150;
(statearr_18155[(8)] = inst_18133__$1);

return statearr_18155;
})();
if(cljs.core.truth_(inst_18134)){
var statearr_18156_18175 = state_18150__$1;
(statearr_18156_18175[(1)] = (5));

} else {
var statearr_18157_18176 = state_18150__$1;
(statearr_18157_18176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (6))){
var inst_18137 = (state_18150[(9)]);
var inst_18133 = (state_18150[(8)]);
var inst_18130 = (state_18150[(7)]);
var inst_18137__$1 = f.call(null,inst_18130,inst_18133);
var inst_18138 = cljs.core.reduced_QMARK_.call(null,inst_18137__$1);
var state_18150__$1 = (function (){var statearr_18158 = state_18150;
(statearr_18158[(9)] = inst_18137__$1);

return statearr_18158;
})();
if(inst_18138){
var statearr_18159_18177 = state_18150__$1;
(statearr_18159_18177[(1)] = (8));

} else {
var statearr_18160_18178 = state_18150__$1;
(statearr_18160_18178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (3))){
var inst_18148 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18150__$1,inst_18148);
} else {
if((state_val_18151 === (2))){
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18150__$1,(4),ch);
} else {
if((state_val_18151 === (9))){
var inst_18137 = (state_18150[(9)]);
var inst_18130 = inst_18137;
var state_18150__$1 = (function (){var statearr_18161 = state_18150;
(statearr_18161[(7)] = inst_18130);

return statearr_18161;
})();
var statearr_18162_18179 = state_18150__$1;
(statearr_18162_18179[(2)] = null);

(statearr_18162_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (5))){
var inst_18130 = (state_18150[(7)]);
var state_18150__$1 = state_18150;
var statearr_18163_18180 = state_18150__$1;
(statearr_18163_18180[(2)] = inst_18130);

(statearr_18163_18180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (10))){
var inst_18144 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18164_18181 = state_18150__$1;
(statearr_18164_18181[(2)] = inst_18144);

(statearr_18164_18181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18151 === (8))){
var inst_18137 = (state_18150[(9)]);
var inst_18140 = cljs.core.deref.call(null,inst_18137);
var state_18150__$1 = state_18150;
var statearr_18165_18182 = state_18150__$1;
(statearr_18165_18182[(2)] = inst_18140);

(statearr_18165_18182[(1)] = (10));


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
});})(c__17384__auto__))
;
return ((function (switch__17272__auto__,c__17384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17273__auto____0 = (function (){
var statearr_18169 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18169[(0)] = cljs$core$async$reduce_$_state_machine__17273__auto__);

(statearr_18169[(1)] = (1));

return statearr_18169;
});
var cljs$core$async$reduce_$_state_machine__17273__auto____1 = (function (state_18150){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_18150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e18170){if((e18170 instanceof Object)){
var ex__17276__auto__ = e18170;
var statearr_18171_18183 = state_18150;
(statearr_18171_18183[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18184 = state_18150;
state_18150 = G__18184;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17273__auto__ = function(state_18150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17273__auto____1.call(this,state_18150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17273__auto____0;
cljs$core$async$reduce_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17273__auto____1;
return cljs$core$async$reduce_$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto__))
})();
var state__17386__auto__ = (function (){var statearr_18172 = f__17385__auto__.call(null);
(statearr_18172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto__);

return statearr_18172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto__))
);

return c__17384__auto__;
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
var args18185 = [];
var len__7484__auto___18237 = arguments.length;
var i__7485__auto___18238 = (0);
while(true){
if((i__7485__auto___18238 < len__7484__auto___18237)){
args18185.push((arguments[i__7485__auto___18238]));

var G__18239 = (i__7485__auto___18238 + (1));
i__7485__auto___18238 = G__18239;
continue;
} else {
}
break;
}

var G__18187 = args18185.length;
switch (G__18187) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18185.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto__){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto__){
return (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (7))){
var inst_18194 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18214_18241 = state_18212__$1;
(statearr_18214_18241[(2)] = inst_18194);

(statearr_18214_18241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (1))){
var inst_18188 = cljs.core.seq.call(null,coll);
var inst_18189 = inst_18188;
var state_18212__$1 = (function (){var statearr_18215 = state_18212;
(statearr_18215[(7)] = inst_18189);

return statearr_18215;
})();
var statearr_18216_18242 = state_18212__$1;
(statearr_18216_18242[(2)] = null);

(statearr_18216_18242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (4))){
var inst_18189 = (state_18212[(7)]);
var inst_18192 = cljs.core.first.call(null,inst_18189);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18212__$1,(7),ch,inst_18192);
} else {
if((state_val_18213 === (13))){
var inst_18206 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18217_18243 = state_18212__$1;
(statearr_18217_18243[(2)] = inst_18206);

(statearr_18217_18243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (6))){
var inst_18197 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18197)){
var statearr_18218_18244 = state_18212__$1;
(statearr_18218_18244[(1)] = (8));

} else {
var statearr_18219_18245 = state_18212__$1;
(statearr_18219_18245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (3))){
var inst_18210 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18212__$1,inst_18210);
} else {
if((state_val_18213 === (12))){
var state_18212__$1 = state_18212;
var statearr_18220_18246 = state_18212__$1;
(statearr_18220_18246[(2)] = null);

(statearr_18220_18246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (2))){
var inst_18189 = (state_18212[(7)]);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18189)){
var statearr_18221_18247 = state_18212__$1;
(statearr_18221_18247[(1)] = (4));

} else {
var statearr_18222_18248 = state_18212__$1;
(statearr_18222_18248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (11))){
var inst_18203 = cljs.core.async.close_BANG_.call(null,ch);
var state_18212__$1 = state_18212;
var statearr_18223_18249 = state_18212__$1;
(statearr_18223_18249[(2)] = inst_18203);

(statearr_18223_18249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (9))){
var state_18212__$1 = state_18212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18224_18250 = state_18212__$1;
(statearr_18224_18250[(1)] = (11));

} else {
var statearr_18225_18251 = state_18212__$1;
(statearr_18225_18251[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (5))){
var inst_18189 = (state_18212[(7)]);
var state_18212__$1 = state_18212;
var statearr_18226_18252 = state_18212__$1;
(statearr_18226_18252[(2)] = inst_18189);

(statearr_18226_18252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (10))){
var inst_18208 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18227_18253 = state_18212__$1;
(statearr_18227_18253[(2)] = inst_18208);

(statearr_18227_18253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (8))){
var inst_18189 = (state_18212[(7)]);
var inst_18199 = cljs.core.next.call(null,inst_18189);
var inst_18189__$1 = inst_18199;
var state_18212__$1 = (function (){var statearr_18228 = state_18212;
(statearr_18228[(7)] = inst_18189__$1);

return statearr_18228;
})();
var statearr_18229_18254 = state_18212__$1;
(statearr_18229_18254[(2)] = null);

(statearr_18229_18254[(1)] = (2));


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
});})(c__17384__auto__))
;
return ((function (switch__17272__auto__,c__17384__auto__){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_18212){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_18212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__17276__auto__ = e18234;
var statearr_18235_18255 = state_18212;
(statearr_18235_18255[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18256 = state_18212;
state_18212 = G__18256;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto__))
})();
var state__17386__auto__ = (function (){var statearr_18236 = f__17385__auto__.call(null);
(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto__);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto__))
);

return c__17384__auto__;
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
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18482 = (function (mult,ch,cs,meta18483){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18483 = meta18483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18484,meta18483__$1){
var self__ = this;
var _18484__$1 = this;
return (new cljs.core.async.t_cljs$core$async18482(self__.mult,self__.ch,self__.cs,meta18483__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18484){
var self__ = this;
var _18484__$1 = this;
return self__.meta18483;
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18483","meta18483",759353832,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18482";

cljs.core.async.t_cljs$core$async18482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18482");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18482 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18482(mult__$1,ch__$1,cs__$1,meta18483){
return (new cljs.core.async.t_cljs$core$async18482(mult__$1,ch__$1,cs__$1,meta18483));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18482(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17384__auto___18707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___18707,cs,m,dchan,dctr,done){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___18707,cs,m,dchan,dctr,done){
return (function (state_18619){
var state_val_18620 = (state_18619[(1)]);
if((state_val_18620 === (7))){
var inst_18615 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18621_18708 = state_18619__$1;
(statearr_18621_18708[(2)] = inst_18615);

(statearr_18621_18708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (20))){
var inst_18518 = (state_18619[(7)]);
var inst_18530 = cljs.core.first.call(null,inst_18518);
var inst_18531 = cljs.core.nth.call(null,inst_18530,(0),null);
var inst_18532 = cljs.core.nth.call(null,inst_18530,(1),null);
var state_18619__$1 = (function (){var statearr_18622 = state_18619;
(statearr_18622[(8)] = inst_18531);

return statearr_18622;
})();
if(cljs.core.truth_(inst_18532)){
var statearr_18623_18709 = state_18619__$1;
(statearr_18623_18709[(1)] = (22));

} else {
var statearr_18624_18710 = state_18619__$1;
(statearr_18624_18710[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (27))){
var inst_18487 = (state_18619[(9)]);
var inst_18567 = (state_18619[(10)]);
var inst_18562 = (state_18619[(11)]);
var inst_18560 = (state_18619[(12)]);
var inst_18567__$1 = cljs.core._nth.call(null,inst_18560,inst_18562);
var inst_18568 = cljs.core.async.put_BANG_.call(null,inst_18567__$1,inst_18487,done);
var state_18619__$1 = (function (){var statearr_18625 = state_18619;
(statearr_18625[(10)] = inst_18567__$1);

return statearr_18625;
})();
if(cljs.core.truth_(inst_18568)){
var statearr_18626_18711 = state_18619__$1;
(statearr_18626_18711[(1)] = (30));

} else {
var statearr_18627_18712 = state_18619__$1;
(statearr_18627_18712[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (1))){
var state_18619__$1 = state_18619;
var statearr_18628_18713 = state_18619__$1;
(statearr_18628_18713[(2)] = null);

(statearr_18628_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (24))){
var inst_18518 = (state_18619[(7)]);
var inst_18537 = (state_18619[(2)]);
var inst_18538 = cljs.core.next.call(null,inst_18518);
var inst_18496 = inst_18538;
var inst_18497 = null;
var inst_18498 = (0);
var inst_18499 = (0);
var state_18619__$1 = (function (){var statearr_18629 = state_18619;
(statearr_18629[(13)] = inst_18537);

(statearr_18629[(14)] = inst_18498);

(statearr_18629[(15)] = inst_18499);

(statearr_18629[(16)] = inst_18497);

(statearr_18629[(17)] = inst_18496);

return statearr_18629;
})();
var statearr_18630_18714 = state_18619__$1;
(statearr_18630_18714[(2)] = null);

(statearr_18630_18714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (39))){
var state_18619__$1 = state_18619;
var statearr_18634_18715 = state_18619__$1;
(statearr_18634_18715[(2)] = null);

(statearr_18634_18715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (4))){
var inst_18487 = (state_18619[(9)]);
var inst_18487__$1 = (state_18619[(2)]);
var inst_18488 = (inst_18487__$1 == null);
var state_18619__$1 = (function (){var statearr_18635 = state_18619;
(statearr_18635[(9)] = inst_18487__$1);

return statearr_18635;
})();
if(cljs.core.truth_(inst_18488)){
var statearr_18636_18716 = state_18619__$1;
(statearr_18636_18716[(1)] = (5));

} else {
var statearr_18637_18717 = state_18619__$1;
(statearr_18637_18717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (15))){
var inst_18498 = (state_18619[(14)]);
var inst_18499 = (state_18619[(15)]);
var inst_18497 = (state_18619[(16)]);
var inst_18496 = (state_18619[(17)]);
var inst_18514 = (state_18619[(2)]);
var inst_18515 = (inst_18499 + (1));
var tmp18631 = inst_18498;
var tmp18632 = inst_18497;
var tmp18633 = inst_18496;
var inst_18496__$1 = tmp18633;
var inst_18497__$1 = tmp18632;
var inst_18498__$1 = tmp18631;
var inst_18499__$1 = inst_18515;
var state_18619__$1 = (function (){var statearr_18638 = state_18619;
(statearr_18638[(18)] = inst_18514);

(statearr_18638[(14)] = inst_18498__$1);

(statearr_18638[(15)] = inst_18499__$1);

(statearr_18638[(16)] = inst_18497__$1);

(statearr_18638[(17)] = inst_18496__$1);

return statearr_18638;
})();
var statearr_18639_18718 = state_18619__$1;
(statearr_18639_18718[(2)] = null);

(statearr_18639_18718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (21))){
var inst_18541 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18643_18719 = state_18619__$1;
(statearr_18643_18719[(2)] = inst_18541);

(statearr_18643_18719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (31))){
var inst_18567 = (state_18619[(10)]);
var inst_18571 = done.call(null,null);
var inst_18572 = cljs.core.async.untap_STAR_.call(null,m,inst_18567);
var state_18619__$1 = (function (){var statearr_18644 = state_18619;
(statearr_18644[(19)] = inst_18571);

return statearr_18644;
})();
var statearr_18645_18720 = state_18619__$1;
(statearr_18645_18720[(2)] = inst_18572);

(statearr_18645_18720[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (32))){
var inst_18559 = (state_18619[(20)]);
var inst_18561 = (state_18619[(21)]);
var inst_18562 = (state_18619[(11)]);
var inst_18560 = (state_18619[(12)]);
var inst_18574 = (state_18619[(2)]);
var inst_18575 = (inst_18562 + (1));
var tmp18640 = inst_18559;
var tmp18641 = inst_18561;
var tmp18642 = inst_18560;
var inst_18559__$1 = tmp18640;
var inst_18560__$1 = tmp18642;
var inst_18561__$1 = tmp18641;
var inst_18562__$1 = inst_18575;
var state_18619__$1 = (function (){var statearr_18646 = state_18619;
(statearr_18646[(20)] = inst_18559__$1);

(statearr_18646[(21)] = inst_18561__$1);

(statearr_18646[(22)] = inst_18574);

(statearr_18646[(11)] = inst_18562__$1);

(statearr_18646[(12)] = inst_18560__$1);

return statearr_18646;
})();
var statearr_18647_18721 = state_18619__$1;
(statearr_18647_18721[(2)] = null);

(statearr_18647_18721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (40))){
var inst_18587 = (state_18619[(23)]);
var inst_18591 = done.call(null,null);
var inst_18592 = cljs.core.async.untap_STAR_.call(null,m,inst_18587);
var state_18619__$1 = (function (){var statearr_18648 = state_18619;
(statearr_18648[(24)] = inst_18591);

return statearr_18648;
})();
var statearr_18649_18722 = state_18619__$1;
(statearr_18649_18722[(2)] = inst_18592);

(statearr_18649_18722[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (33))){
var inst_18578 = (state_18619[(25)]);
var inst_18580 = cljs.core.chunked_seq_QMARK_.call(null,inst_18578);
var state_18619__$1 = state_18619;
if(inst_18580){
var statearr_18650_18723 = state_18619__$1;
(statearr_18650_18723[(1)] = (36));

} else {
var statearr_18651_18724 = state_18619__$1;
(statearr_18651_18724[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (13))){
var inst_18508 = (state_18619[(26)]);
var inst_18511 = cljs.core.async.close_BANG_.call(null,inst_18508);
var state_18619__$1 = state_18619;
var statearr_18652_18725 = state_18619__$1;
(statearr_18652_18725[(2)] = inst_18511);

(statearr_18652_18725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (22))){
var inst_18531 = (state_18619[(8)]);
var inst_18534 = cljs.core.async.close_BANG_.call(null,inst_18531);
var state_18619__$1 = state_18619;
var statearr_18653_18726 = state_18619__$1;
(statearr_18653_18726[(2)] = inst_18534);

(statearr_18653_18726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (36))){
var inst_18578 = (state_18619[(25)]);
var inst_18582 = cljs.core.chunk_first.call(null,inst_18578);
var inst_18583 = cljs.core.chunk_rest.call(null,inst_18578);
var inst_18584 = cljs.core.count.call(null,inst_18582);
var inst_18559 = inst_18583;
var inst_18560 = inst_18582;
var inst_18561 = inst_18584;
var inst_18562 = (0);
var state_18619__$1 = (function (){var statearr_18654 = state_18619;
(statearr_18654[(20)] = inst_18559);

(statearr_18654[(21)] = inst_18561);

(statearr_18654[(11)] = inst_18562);

(statearr_18654[(12)] = inst_18560);

return statearr_18654;
})();
var statearr_18655_18727 = state_18619__$1;
(statearr_18655_18727[(2)] = null);

(statearr_18655_18727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (41))){
var inst_18578 = (state_18619[(25)]);
var inst_18594 = (state_18619[(2)]);
var inst_18595 = cljs.core.next.call(null,inst_18578);
var inst_18559 = inst_18595;
var inst_18560 = null;
var inst_18561 = (0);
var inst_18562 = (0);
var state_18619__$1 = (function (){var statearr_18656 = state_18619;
(statearr_18656[(20)] = inst_18559);

(statearr_18656[(21)] = inst_18561);

(statearr_18656[(11)] = inst_18562);

(statearr_18656[(27)] = inst_18594);

(statearr_18656[(12)] = inst_18560);

return statearr_18656;
})();
var statearr_18657_18728 = state_18619__$1;
(statearr_18657_18728[(2)] = null);

(statearr_18657_18728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (43))){
var state_18619__$1 = state_18619;
var statearr_18658_18729 = state_18619__$1;
(statearr_18658_18729[(2)] = null);

(statearr_18658_18729[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (29))){
var inst_18603 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18659_18730 = state_18619__$1;
(statearr_18659_18730[(2)] = inst_18603);

(statearr_18659_18730[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (44))){
var inst_18612 = (state_18619[(2)]);
var state_18619__$1 = (function (){var statearr_18660 = state_18619;
(statearr_18660[(28)] = inst_18612);

return statearr_18660;
})();
var statearr_18661_18731 = state_18619__$1;
(statearr_18661_18731[(2)] = null);

(statearr_18661_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (6))){
var inst_18551 = (state_18619[(29)]);
var inst_18550 = cljs.core.deref.call(null,cs);
var inst_18551__$1 = cljs.core.keys.call(null,inst_18550);
var inst_18552 = cljs.core.count.call(null,inst_18551__$1);
var inst_18553 = cljs.core.reset_BANG_.call(null,dctr,inst_18552);
var inst_18558 = cljs.core.seq.call(null,inst_18551__$1);
var inst_18559 = inst_18558;
var inst_18560 = null;
var inst_18561 = (0);
var inst_18562 = (0);
var state_18619__$1 = (function (){var statearr_18662 = state_18619;
(statearr_18662[(30)] = inst_18553);

(statearr_18662[(20)] = inst_18559);

(statearr_18662[(29)] = inst_18551__$1);

(statearr_18662[(21)] = inst_18561);

(statearr_18662[(11)] = inst_18562);

(statearr_18662[(12)] = inst_18560);

return statearr_18662;
})();
var statearr_18663_18732 = state_18619__$1;
(statearr_18663_18732[(2)] = null);

(statearr_18663_18732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (28))){
var inst_18559 = (state_18619[(20)]);
var inst_18578 = (state_18619[(25)]);
var inst_18578__$1 = cljs.core.seq.call(null,inst_18559);
var state_18619__$1 = (function (){var statearr_18664 = state_18619;
(statearr_18664[(25)] = inst_18578__$1);

return statearr_18664;
})();
if(inst_18578__$1){
var statearr_18665_18733 = state_18619__$1;
(statearr_18665_18733[(1)] = (33));

} else {
var statearr_18666_18734 = state_18619__$1;
(statearr_18666_18734[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (25))){
var inst_18561 = (state_18619[(21)]);
var inst_18562 = (state_18619[(11)]);
var inst_18564 = (inst_18562 < inst_18561);
var inst_18565 = inst_18564;
var state_18619__$1 = state_18619;
if(cljs.core.truth_(inst_18565)){
var statearr_18667_18735 = state_18619__$1;
(statearr_18667_18735[(1)] = (27));

} else {
var statearr_18668_18736 = state_18619__$1;
(statearr_18668_18736[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (34))){
var state_18619__$1 = state_18619;
var statearr_18669_18737 = state_18619__$1;
(statearr_18669_18737[(2)] = null);

(statearr_18669_18737[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (17))){
var state_18619__$1 = state_18619;
var statearr_18670_18738 = state_18619__$1;
(statearr_18670_18738[(2)] = null);

(statearr_18670_18738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (3))){
var inst_18617 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18619__$1,inst_18617);
} else {
if((state_val_18620 === (12))){
var inst_18546 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18671_18739 = state_18619__$1;
(statearr_18671_18739[(2)] = inst_18546);

(statearr_18671_18739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (2))){
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18619__$1,(4),ch);
} else {
if((state_val_18620 === (23))){
var state_18619__$1 = state_18619;
var statearr_18672_18740 = state_18619__$1;
(statearr_18672_18740[(2)] = null);

(statearr_18672_18740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (35))){
var inst_18601 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18673_18741 = state_18619__$1;
(statearr_18673_18741[(2)] = inst_18601);

(statearr_18673_18741[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (19))){
var inst_18518 = (state_18619[(7)]);
var inst_18522 = cljs.core.chunk_first.call(null,inst_18518);
var inst_18523 = cljs.core.chunk_rest.call(null,inst_18518);
var inst_18524 = cljs.core.count.call(null,inst_18522);
var inst_18496 = inst_18523;
var inst_18497 = inst_18522;
var inst_18498 = inst_18524;
var inst_18499 = (0);
var state_18619__$1 = (function (){var statearr_18674 = state_18619;
(statearr_18674[(14)] = inst_18498);

(statearr_18674[(15)] = inst_18499);

(statearr_18674[(16)] = inst_18497);

(statearr_18674[(17)] = inst_18496);

return statearr_18674;
})();
var statearr_18675_18742 = state_18619__$1;
(statearr_18675_18742[(2)] = null);

(statearr_18675_18742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (11))){
var inst_18496 = (state_18619[(17)]);
var inst_18518 = (state_18619[(7)]);
var inst_18518__$1 = cljs.core.seq.call(null,inst_18496);
var state_18619__$1 = (function (){var statearr_18676 = state_18619;
(statearr_18676[(7)] = inst_18518__$1);

return statearr_18676;
})();
if(inst_18518__$1){
var statearr_18677_18743 = state_18619__$1;
(statearr_18677_18743[(1)] = (16));

} else {
var statearr_18678_18744 = state_18619__$1;
(statearr_18678_18744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (9))){
var inst_18548 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18679_18745 = state_18619__$1;
(statearr_18679_18745[(2)] = inst_18548);

(statearr_18679_18745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (5))){
var inst_18494 = cljs.core.deref.call(null,cs);
var inst_18495 = cljs.core.seq.call(null,inst_18494);
var inst_18496 = inst_18495;
var inst_18497 = null;
var inst_18498 = (0);
var inst_18499 = (0);
var state_18619__$1 = (function (){var statearr_18680 = state_18619;
(statearr_18680[(14)] = inst_18498);

(statearr_18680[(15)] = inst_18499);

(statearr_18680[(16)] = inst_18497);

(statearr_18680[(17)] = inst_18496);

return statearr_18680;
})();
var statearr_18681_18746 = state_18619__$1;
(statearr_18681_18746[(2)] = null);

(statearr_18681_18746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (14))){
var state_18619__$1 = state_18619;
var statearr_18682_18747 = state_18619__$1;
(statearr_18682_18747[(2)] = null);

(statearr_18682_18747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (45))){
var inst_18609 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18683_18748 = state_18619__$1;
(statearr_18683_18748[(2)] = inst_18609);

(statearr_18683_18748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (26))){
var inst_18551 = (state_18619[(29)]);
var inst_18605 = (state_18619[(2)]);
var inst_18606 = cljs.core.seq.call(null,inst_18551);
var state_18619__$1 = (function (){var statearr_18684 = state_18619;
(statearr_18684[(31)] = inst_18605);

return statearr_18684;
})();
if(inst_18606){
var statearr_18685_18749 = state_18619__$1;
(statearr_18685_18749[(1)] = (42));

} else {
var statearr_18686_18750 = state_18619__$1;
(statearr_18686_18750[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (16))){
var inst_18518 = (state_18619[(7)]);
var inst_18520 = cljs.core.chunked_seq_QMARK_.call(null,inst_18518);
var state_18619__$1 = state_18619;
if(inst_18520){
var statearr_18687_18751 = state_18619__$1;
(statearr_18687_18751[(1)] = (19));

} else {
var statearr_18688_18752 = state_18619__$1;
(statearr_18688_18752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (38))){
var inst_18598 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18689_18753 = state_18619__$1;
(statearr_18689_18753[(2)] = inst_18598);

(statearr_18689_18753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (30))){
var state_18619__$1 = state_18619;
var statearr_18690_18754 = state_18619__$1;
(statearr_18690_18754[(2)] = null);

(statearr_18690_18754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (10))){
var inst_18499 = (state_18619[(15)]);
var inst_18497 = (state_18619[(16)]);
var inst_18507 = cljs.core._nth.call(null,inst_18497,inst_18499);
var inst_18508 = cljs.core.nth.call(null,inst_18507,(0),null);
var inst_18509 = cljs.core.nth.call(null,inst_18507,(1),null);
var state_18619__$1 = (function (){var statearr_18691 = state_18619;
(statearr_18691[(26)] = inst_18508);

return statearr_18691;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18692_18755 = state_18619__$1;
(statearr_18692_18755[(1)] = (13));

} else {
var statearr_18693_18756 = state_18619__$1;
(statearr_18693_18756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (18))){
var inst_18544 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18694_18757 = state_18619__$1;
(statearr_18694_18757[(2)] = inst_18544);

(statearr_18694_18757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (42))){
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18619__$1,(45),dchan);
} else {
if((state_val_18620 === (37))){
var inst_18487 = (state_18619[(9)]);
var inst_18587 = (state_18619[(23)]);
var inst_18578 = (state_18619[(25)]);
var inst_18587__$1 = cljs.core.first.call(null,inst_18578);
var inst_18588 = cljs.core.async.put_BANG_.call(null,inst_18587__$1,inst_18487,done);
var state_18619__$1 = (function (){var statearr_18695 = state_18619;
(statearr_18695[(23)] = inst_18587__$1);

return statearr_18695;
})();
if(cljs.core.truth_(inst_18588)){
var statearr_18696_18758 = state_18619__$1;
(statearr_18696_18758[(1)] = (39));

} else {
var statearr_18697_18759 = state_18619__$1;
(statearr_18697_18759[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (8))){
var inst_18498 = (state_18619[(14)]);
var inst_18499 = (state_18619[(15)]);
var inst_18501 = (inst_18499 < inst_18498);
var inst_18502 = inst_18501;
var state_18619__$1 = state_18619;
if(cljs.core.truth_(inst_18502)){
var statearr_18698_18760 = state_18619__$1;
(statearr_18698_18760[(1)] = (10));

} else {
var statearr_18699_18761 = state_18619__$1;
(statearr_18699_18761[(1)] = (11));

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
});})(c__17384__auto___18707,cs,m,dchan,dctr,done))
;
return ((function (switch__17272__auto__,c__17384__auto___18707,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17273__auto__ = null;
var cljs$core$async$mult_$_state_machine__17273__auto____0 = (function (){
var statearr_18703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18703[(0)] = cljs$core$async$mult_$_state_machine__17273__auto__);

(statearr_18703[(1)] = (1));

return statearr_18703;
});
var cljs$core$async$mult_$_state_machine__17273__auto____1 = (function (state_18619){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_18619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e18704){if((e18704 instanceof Object)){
var ex__17276__auto__ = e18704;
var statearr_18705_18762 = state_18619;
(statearr_18705_18762[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18763 = state_18619;
state_18619 = G__18763;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17273__auto__ = function(state_18619){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17273__auto____1.call(this,state_18619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17273__auto____0;
cljs$core$async$mult_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17273__auto____1;
return cljs$core$async$mult_$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___18707,cs,m,dchan,dctr,done))
})();
var state__17386__auto__ = (function (){var statearr_18706 = f__17385__auto__.call(null);
(statearr_18706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___18707);

return statearr_18706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___18707,cs,m,dchan,dctr,done))
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
var args18764 = [];
var len__7484__auto___18767 = arguments.length;
var i__7485__auto___18768 = (0);
while(true){
if((i__7485__auto___18768 < len__7484__auto___18767)){
args18764.push((arguments[i__7485__auto___18768]));

var G__18769 = (i__7485__auto___18768 + (1));
i__7485__auto___18768 = G__18769;
continue;
} else {
}
break;
}

var G__18766 = args18764.length;
switch (G__18766) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18764.length)].join('')));

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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,state_map);
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,state_map);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,mode);
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___18781 = arguments.length;
var i__7485__auto___18782 = (0);
while(true){
if((i__7485__auto___18782 < len__7484__auto___18781)){
args__7491__auto__.push((arguments[i__7485__auto___18782]));

var G__18783 = (i__7485__auto___18782 + (1));
i__7485__auto___18782 = G__18783;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18775){
var map__18776 = p__18775;
var map__18776__$1 = ((((!((map__18776 == null)))?((((map__18776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18776):map__18776);
var opts = map__18776__$1;
var statearr_18778_18784 = state;
(statearr_18778_18784[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18776,map__18776__$1,opts){
return (function (val){
var statearr_18779_18785 = state;
(statearr_18779_18785[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18776,map__18776__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18780_18786 = state;
(statearr_18780_18786[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18771){
var G__18772 = cljs.core.first.call(null,seq18771);
var seq18771__$1 = cljs.core.next.call(null,seq18771);
var G__18773 = cljs.core.first.call(null,seq18771__$1);
var seq18771__$2 = cljs.core.next.call(null,seq18771__$1);
var G__18774 = cljs.core.first.call(null,seq18771__$2);
var seq18771__$3 = cljs.core.next.call(null,seq18771__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18772,G__18773,G__18774,seq18771__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18952 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18953){
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
this.meta18953 = meta18953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18954,meta18953__$1){
var self__ = this;
var _18954__$1 = this;
return (new cljs.core.async.t_cljs$core$async18952(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18953__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18954){
var self__ = this;
var _18954__$1 = this;
return self__.meta18953;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18952.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18953","meta18953",-957923148,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18952";

cljs.core.async.t_cljs$core$async18952.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18952");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18952 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18952(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18953){
return (new cljs.core.async.t_cljs$core$async18952(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18953));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18952(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17384__auto___19117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19054){
var state_val_19055 = (state_19054[(1)]);
if((state_val_19055 === (7))){
var inst_18970 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19056_19118 = state_19054__$1;
(statearr_19056_19118[(2)] = inst_18970);

(statearr_19056_19118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (20))){
var inst_18982 = (state_19054[(7)]);
var state_19054__$1 = state_19054;
var statearr_19057_19119 = state_19054__$1;
(statearr_19057_19119[(2)] = inst_18982);

(statearr_19057_19119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (27))){
var state_19054__$1 = state_19054;
var statearr_19058_19120 = state_19054__$1;
(statearr_19058_19120[(2)] = null);

(statearr_19058_19120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (1))){
var inst_18958 = (state_19054[(8)]);
var inst_18958__$1 = calc_state.call(null);
var inst_18960 = (inst_18958__$1 == null);
var inst_18961 = cljs.core.not.call(null,inst_18960);
var state_19054__$1 = (function (){var statearr_19059 = state_19054;
(statearr_19059[(8)] = inst_18958__$1);

return statearr_19059;
})();
if(inst_18961){
var statearr_19060_19121 = state_19054__$1;
(statearr_19060_19121[(1)] = (2));

} else {
var statearr_19061_19122 = state_19054__$1;
(statearr_19061_19122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (24))){
var inst_19005 = (state_19054[(9)]);
var inst_19028 = (state_19054[(10)]);
var inst_19014 = (state_19054[(11)]);
var inst_19028__$1 = inst_19005.call(null,inst_19014);
var state_19054__$1 = (function (){var statearr_19062 = state_19054;
(statearr_19062[(10)] = inst_19028__$1);

return statearr_19062;
})();
if(cljs.core.truth_(inst_19028__$1)){
var statearr_19063_19123 = state_19054__$1;
(statearr_19063_19123[(1)] = (29));

} else {
var statearr_19064_19124 = state_19054__$1;
(statearr_19064_19124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (4))){
var inst_18973 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_18973)){
var statearr_19065_19125 = state_19054__$1;
(statearr_19065_19125[(1)] = (8));

} else {
var statearr_19066_19126 = state_19054__$1;
(statearr_19066_19126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (15))){
var inst_18999 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_18999)){
var statearr_19067_19127 = state_19054__$1;
(statearr_19067_19127[(1)] = (19));

} else {
var statearr_19068_19128 = state_19054__$1;
(statearr_19068_19128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (21))){
var inst_19004 = (state_19054[(12)]);
var inst_19004__$1 = (state_19054[(2)]);
var inst_19005 = cljs.core.get.call(null,inst_19004__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19006 = cljs.core.get.call(null,inst_19004__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19007 = cljs.core.get.call(null,inst_19004__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19054__$1 = (function (){var statearr_19069 = state_19054;
(statearr_19069[(9)] = inst_19005);

(statearr_19069[(12)] = inst_19004__$1);

(statearr_19069[(13)] = inst_19006);

return statearr_19069;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19054__$1,(22),inst_19007);
} else {
if((state_val_19055 === (31))){
var inst_19036 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_19036)){
var statearr_19070_19129 = state_19054__$1;
(statearr_19070_19129[(1)] = (32));

} else {
var statearr_19071_19130 = state_19054__$1;
(statearr_19071_19130[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (32))){
var inst_19013 = (state_19054[(14)]);
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19054__$1,(35),out,inst_19013);
} else {
if((state_val_19055 === (33))){
var inst_19004 = (state_19054[(12)]);
var inst_18982 = inst_19004;
var state_19054__$1 = (function (){var statearr_19072 = state_19054;
(statearr_19072[(7)] = inst_18982);

return statearr_19072;
})();
var statearr_19073_19131 = state_19054__$1;
(statearr_19073_19131[(2)] = null);

(statearr_19073_19131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (13))){
var inst_18982 = (state_19054[(7)]);
var inst_18989 = inst_18982.cljs$lang$protocol_mask$partition0$;
var inst_18990 = (inst_18989 & (64));
var inst_18991 = inst_18982.cljs$core$ISeq$;
var inst_18992 = (inst_18990) || (inst_18991);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_18992)){
var statearr_19074_19132 = state_19054__$1;
(statearr_19074_19132[(1)] = (16));

} else {
var statearr_19075_19133 = state_19054__$1;
(statearr_19075_19133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (22))){
var inst_19014 = (state_19054[(11)]);
var inst_19013 = (state_19054[(14)]);
var inst_19012 = (state_19054[(2)]);
var inst_19013__$1 = cljs.core.nth.call(null,inst_19012,(0),null);
var inst_19014__$1 = cljs.core.nth.call(null,inst_19012,(1),null);
var inst_19015 = (inst_19013__$1 == null);
var inst_19016 = cljs.core._EQ_.call(null,inst_19014__$1,change);
var inst_19017 = (inst_19015) || (inst_19016);
var state_19054__$1 = (function (){var statearr_19076 = state_19054;
(statearr_19076[(11)] = inst_19014__$1);

(statearr_19076[(14)] = inst_19013__$1);

return statearr_19076;
})();
if(cljs.core.truth_(inst_19017)){
var statearr_19077_19134 = state_19054__$1;
(statearr_19077_19134[(1)] = (23));

} else {
var statearr_19078_19135 = state_19054__$1;
(statearr_19078_19135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (36))){
var inst_19004 = (state_19054[(12)]);
var inst_18982 = inst_19004;
var state_19054__$1 = (function (){var statearr_19079 = state_19054;
(statearr_19079[(7)] = inst_18982);

return statearr_19079;
})();
var statearr_19080_19136 = state_19054__$1;
(statearr_19080_19136[(2)] = null);

(statearr_19080_19136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (29))){
var inst_19028 = (state_19054[(10)]);
var state_19054__$1 = state_19054;
var statearr_19081_19137 = state_19054__$1;
(statearr_19081_19137[(2)] = inst_19028);

(statearr_19081_19137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (6))){
var state_19054__$1 = state_19054;
var statearr_19082_19138 = state_19054__$1;
(statearr_19082_19138[(2)] = false);

(statearr_19082_19138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (28))){
var inst_19024 = (state_19054[(2)]);
var inst_19025 = calc_state.call(null);
var inst_18982 = inst_19025;
var state_19054__$1 = (function (){var statearr_19083 = state_19054;
(statearr_19083[(7)] = inst_18982);

(statearr_19083[(15)] = inst_19024);

return statearr_19083;
})();
var statearr_19084_19139 = state_19054__$1;
(statearr_19084_19139[(2)] = null);

(statearr_19084_19139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (25))){
var inst_19050 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19085_19140 = state_19054__$1;
(statearr_19085_19140[(2)] = inst_19050);

(statearr_19085_19140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (34))){
var inst_19048 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19086_19141 = state_19054__$1;
(statearr_19086_19141[(2)] = inst_19048);

(statearr_19086_19141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (17))){
var state_19054__$1 = state_19054;
var statearr_19087_19142 = state_19054__$1;
(statearr_19087_19142[(2)] = false);

(statearr_19087_19142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (3))){
var state_19054__$1 = state_19054;
var statearr_19088_19143 = state_19054__$1;
(statearr_19088_19143[(2)] = false);

(statearr_19088_19143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (12))){
var inst_19052 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19054__$1,inst_19052);
} else {
if((state_val_19055 === (2))){
var inst_18958 = (state_19054[(8)]);
var inst_18963 = inst_18958.cljs$lang$protocol_mask$partition0$;
var inst_18964 = (inst_18963 & (64));
var inst_18965 = inst_18958.cljs$core$ISeq$;
var inst_18966 = (inst_18964) || (inst_18965);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_18966)){
var statearr_19089_19144 = state_19054__$1;
(statearr_19089_19144[(1)] = (5));

} else {
var statearr_19090_19145 = state_19054__$1;
(statearr_19090_19145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (23))){
var inst_19013 = (state_19054[(14)]);
var inst_19019 = (inst_19013 == null);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_19019)){
var statearr_19091_19146 = state_19054__$1;
(statearr_19091_19146[(1)] = (26));

} else {
var statearr_19092_19147 = state_19054__$1;
(statearr_19092_19147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (35))){
var inst_19039 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
if(cljs.core.truth_(inst_19039)){
var statearr_19093_19148 = state_19054__$1;
(statearr_19093_19148[(1)] = (36));

} else {
var statearr_19094_19149 = state_19054__$1;
(statearr_19094_19149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (19))){
var inst_18982 = (state_19054[(7)]);
var inst_19001 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18982);
var state_19054__$1 = state_19054;
var statearr_19095_19150 = state_19054__$1;
(statearr_19095_19150[(2)] = inst_19001);

(statearr_19095_19150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (11))){
var inst_18982 = (state_19054[(7)]);
var inst_18986 = (inst_18982 == null);
var inst_18987 = cljs.core.not.call(null,inst_18986);
var state_19054__$1 = state_19054;
if(inst_18987){
var statearr_19096_19151 = state_19054__$1;
(statearr_19096_19151[(1)] = (13));

} else {
var statearr_19097_19152 = state_19054__$1;
(statearr_19097_19152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (9))){
var inst_18958 = (state_19054[(8)]);
var state_19054__$1 = state_19054;
var statearr_19098_19153 = state_19054__$1;
(statearr_19098_19153[(2)] = inst_18958);

(statearr_19098_19153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (5))){
var state_19054__$1 = state_19054;
var statearr_19099_19154 = state_19054__$1;
(statearr_19099_19154[(2)] = true);

(statearr_19099_19154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (14))){
var state_19054__$1 = state_19054;
var statearr_19100_19155 = state_19054__$1;
(statearr_19100_19155[(2)] = false);

(statearr_19100_19155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (26))){
var inst_19014 = (state_19054[(11)]);
var inst_19021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19014);
var state_19054__$1 = state_19054;
var statearr_19101_19156 = state_19054__$1;
(statearr_19101_19156[(2)] = inst_19021);

(statearr_19101_19156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (16))){
var state_19054__$1 = state_19054;
var statearr_19102_19157 = state_19054__$1;
(statearr_19102_19157[(2)] = true);

(statearr_19102_19157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (38))){
var inst_19044 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19103_19158 = state_19054__$1;
(statearr_19103_19158[(2)] = inst_19044);

(statearr_19103_19158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (30))){
var inst_19005 = (state_19054[(9)]);
var inst_19014 = (state_19054[(11)]);
var inst_19006 = (state_19054[(13)]);
var inst_19031 = cljs.core.empty_QMARK_.call(null,inst_19005);
var inst_19032 = inst_19006.call(null,inst_19014);
var inst_19033 = cljs.core.not.call(null,inst_19032);
var inst_19034 = (inst_19031) && (inst_19033);
var state_19054__$1 = state_19054;
var statearr_19104_19159 = state_19054__$1;
(statearr_19104_19159[(2)] = inst_19034);

(statearr_19104_19159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (10))){
var inst_18958 = (state_19054[(8)]);
var inst_18978 = (state_19054[(2)]);
var inst_18979 = cljs.core.get.call(null,inst_18978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18980 = cljs.core.get.call(null,inst_18978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18981 = cljs.core.get.call(null,inst_18978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18982 = inst_18958;
var state_19054__$1 = (function (){var statearr_19105 = state_19054;
(statearr_19105[(16)] = inst_18981);

(statearr_19105[(7)] = inst_18982);

(statearr_19105[(17)] = inst_18980);

(statearr_19105[(18)] = inst_18979);

return statearr_19105;
})();
var statearr_19106_19160 = state_19054__$1;
(statearr_19106_19160[(2)] = null);

(statearr_19106_19160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (18))){
var inst_18996 = (state_19054[(2)]);
var state_19054__$1 = state_19054;
var statearr_19107_19161 = state_19054__$1;
(statearr_19107_19161[(2)] = inst_18996);

(statearr_19107_19161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (37))){
var state_19054__$1 = state_19054;
var statearr_19108_19162 = state_19054__$1;
(statearr_19108_19162[(2)] = null);

(statearr_19108_19162[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19055 === (8))){
var inst_18958 = (state_19054[(8)]);
var inst_18975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18958);
var state_19054__$1 = state_19054;
var statearr_19109_19163 = state_19054__$1;
(statearr_19109_19163[(2)] = inst_18975);

(statearr_19109_19163[(1)] = (10));


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
});})(c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17272__auto__,c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17273__auto__ = null;
var cljs$core$async$mix_$_state_machine__17273__auto____0 = (function (){
var statearr_19113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19113[(0)] = cljs$core$async$mix_$_state_machine__17273__auto__);

(statearr_19113[(1)] = (1));

return statearr_19113;
});
var cljs$core$async$mix_$_state_machine__17273__auto____1 = (function (state_19054){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19114){if((e19114 instanceof Object)){
var ex__17276__auto__ = e19114;
var statearr_19115_19164 = state_19054;
(statearr_19115_19164[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19165 = state_19054;
state_19054 = G__19165;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17273__auto__ = function(state_19054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17273__auto____1.call(this,state_19054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17273__auto____0;
cljs$core$async$mix_$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17273__auto____1;
return cljs$core$async$mix_$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17386__auto__ = (function (){var statearr_19116 = f__17385__auto__.call(null);
(statearr_19116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19117);

return statearr_19116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19166 = [];
var len__7484__auto___19169 = arguments.length;
var i__7485__auto___19170 = (0);
while(true){
if((i__7485__auto___19170 < len__7484__auto___19169)){
args19166.push((arguments[i__7485__auto___19170]));

var G__19171 = (i__7485__auto___19170 + (1));
i__7485__auto___19170 = G__19171;
continue;
} else {
}
break;
}

var G__19168 = args19166.length;
switch (G__19168) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19166.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p);
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v);
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
var args19174 = [];
var len__7484__auto___19299 = arguments.length;
var i__7485__auto___19300 = (0);
while(true){
if((i__7485__auto___19300 < len__7484__auto___19299)){
args19174.push((arguments[i__7485__auto___19300]));

var G__19301 = (i__7485__auto___19300 + (1));
i__7485__auto___19300 = G__19301;
continue;
} else {
}
break;
}

var G__19176 = args19174.length;
switch (G__19176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19174.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6409__auto__,mults){
return (function (p1__19173_SHARP_){
if(cljs.core.truth_(p1__19173_SHARP_.call(null,topic))){
return p1__19173_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19173_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19178 = meta19178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19179,meta19178__$1){
var self__ = this;
var _19179__$1 = this;
return (new cljs.core.async.t_cljs$core$async19177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19179){
var self__ = this;
var _19179__$1 = this;
return self__.meta19178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19178","meta19178",261010964,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19177";

cljs.core.async.t_cljs$core$async19177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19177");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19178){
return (new cljs.core.async.t_cljs$core$async19177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17384__auto___19303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19303,mults,ensure_mult,p){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19303,mults,ensure_mult,p){
return (function (state_19251){
var state_val_19252 = (state_19251[(1)]);
if((state_val_19252 === (7))){
var inst_19247 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19253_19304 = state_19251__$1;
(statearr_19253_19304[(2)] = inst_19247);

(statearr_19253_19304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (20))){
var state_19251__$1 = state_19251;
var statearr_19254_19305 = state_19251__$1;
(statearr_19254_19305[(2)] = null);

(statearr_19254_19305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (1))){
var state_19251__$1 = state_19251;
var statearr_19255_19306 = state_19251__$1;
(statearr_19255_19306[(2)] = null);

(statearr_19255_19306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (24))){
var inst_19230 = (state_19251[(7)]);
var inst_19239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19230);
var state_19251__$1 = state_19251;
var statearr_19256_19307 = state_19251__$1;
(statearr_19256_19307[(2)] = inst_19239);

(statearr_19256_19307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (4))){
var inst_19182 = (state_19251[(8)]);
var inst_19182__$1 = (state_19251[(2)]);
var inst_19183 = (inst_19182__$1 == null);
var state_19251__$1 = (function (){var statearr_19257 = state_19251;
(statearr_19257[(8)] = inst_19182__$1);

return statearr_19257;
})();
if(cljs.core.truth_(inst_19183)){
var statearr_19258_19308 = state_19251__$1;
(statearr_19258_19308[(1)] = (5));

} else {
var statearr_19259_19309 = state_19251__$1;
(statearr_19259_19309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (15))){
var inst_19224 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19260_19310 = state_19251__$1;
(statearr_19260_19310[(2)] = inst_19224);

(statearr_19260_19310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (21))){
var inst_19244 = (state_19251[(2)]);
var state_19251__$1 = (function (){var statearr_19261 = state_19251;
(statearr_19261[(9)] = inst_19244);

return statearr_19261;
})();
var statearr_19262_19311 = state_19251__$1;
(statearr_19262_19311[(2)] = null);

(statearr_19262_19311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (13))){
var inst_19206 = (state_19251[(10)]);
var inst_19208 = cljs.core.chunked_seq_QMARK_.call(null,inst_19206);
var state_19251__$1 = state_19251;
if(inst_19208){
var statearr_19263_19312 = state_19251__$1;
(statearr_19263_19312[(1)] = (16));

} else {
var statearr_19264_19313 = state_19251__$1;
(statearr_19264_19313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (22))){
var inst_19236 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19236)){
var statearr_19265_19314 = state_19251__$1;
(statearr_19265_19314[(1)] = (23));

} else {
var statearr_19266_19315 = state_19251__$1;
(statearr_19266_19315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (6))){
var inst_19230 = (state_19251[(7)]);
var inst_19182 = (state_19251[(8)]);
var inst_19232 = (state_19251[(11)]);
var inst_19230__$1 = topic_fn.call(null,inst_19182);
var inst_19231 = cljs.core.deref.call(null,mults);
var inst_19232__$1 = cljs.core.get.call(null,inst_19231,inst_19230__$1);
var state_19251__$1 = (function (){var statearr_19267 = state_19251;
(statearr_19267[(7)] = inst_19230__$1);

(statearr_19267[(11)] = inst_19232__$1);

return statearr_19267;
})();
if(cljs.core.truth_(inst_19232__$1)){
var statearr_19268_19316 = state_19251__$1;
(statearr_19268_19316[(1)] = (19));

} else {
var statearr_19269_19317 = state_19251__$1;
(statearr_19269_19317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (25))){
var inst_19241 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19270_19318 = state_19251__$1;
(statearr_19270_19318[(2)] = inst_19241);

(statearr_19270_19318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (17))){
var inst_19206 = (state_19251[(10)]);
var inst_19215 = cljs.core.first.call(null,inst_19206);
var inst_19216 = cljs.core.async.muxch_STAR_.call(null,inst_19215);
var inst_19217 = cljs.core.async.close_BANG_.call(null,inst_19216);
var inst_19218 = cljs.core.next.call(null,inst_19206);
var inst_19192 = inst_19218;
var inst_19193 = null;
var inst_19194 = (0);
var inst_19195 = (0);
var state_19251__$1 = (function (){var statearr_19271 = state_19251;
(statearr_19271[(12)] = inst_19195);

(statearr_19271[(13)] = inst_19194);

(statearr_19271[(14)] = inst_19193);

(statearr_19271[(15)] = inst_19192);

(statearr_19271[(16)] = inst_19217);

return statearr_19271;
})();
var statearr_19272_19319 = state_19251__$1;
(statearr_19272_19319[(2)] = null);

(statearr_19272_19319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (3))){
var inst_19249 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19251__$1,inst_19249);
} else {
if((state_val_19252 === (12))){
var inst_19226 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19273_19320 = state_19251__$1;
(statearr_19273_19320[(2)] = inst_19226);

(statearr_19273_19320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (2))){
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19251__$1,(4),ch);
} else {
if((state_val_19252 === (23))){
var state_19251__$1 = state_19251;
var statearr_19274_19321 = state_19251__$1;
(statearr_19274_19321[(2)] = null);

(statearr_19274_19321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (19))){
var inst_19182 = (state_19251[(8)]);
var inst_19232 = (state_19251[(11)]);
var inst_19234 = cljs.core.async.muxch_STAR_.call(null,inst_19232);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19251__$1,(22),inst_19234,inst_19182);
} else {
if((state_val_19252 === (11))){
var inst_19206 = (state_19251[(10)]);
var inst_19192 = (state_19251[(15)]);
var inst_19206__$1 = cljs.core.seq.call(null,inst_19192);
var state_19251__$1 = (function (){var statearr_19275 = state_19251;
(statearr_19275[(10)] = inst_19206__$1);

return statearr_19275;
})();
if(inst_19206__$1){
var statearr_19276_19322 = state_19251__$1;
(statearr_19276_19322[(1)] = (13));

} else {
var statearr_19277_19323 = state_19251__$1;
(statearr_19277_19323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (9))){
var inst_19228 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19278_19324 = state_19251__$1;
(statearr_19278_19324[(2)] = inst_19228);

(statearr_19278_19324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (5))){
var inst_19189 = cljs.core.deref.call(null,mults);
var inst_19190 = cljs.core.vals.call(null,inst_19189);
var inst_19191 = cljs.core.seq.call(null,inst_19190);
var inst_19192 = inst_19191;
var inst_19193 = null;
var inst_19194 = (0);
var inst_19195 = (0);
var state_19251__$1 = (function (){var statearr_19279 = state_19251;
(statearr_19279[(12)] = inst_19195);

(statearr_19279[(13)] = inst_19194);

(statearr_19279[(14)] = inst_19193);

(statearr_19279[(15)] = inst_19192);

return statearr_19279;
})();
var statearr_19280_19325 = state_19251__$1;
(statearr_19280_19325[(2)] = null);

(statearr_19280_19325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (14))){
var state_19251__$1 = state_19251;
var statearr_19284_19326 = state_19251__$1;
(statearr_19284_19326[(2)] = null);

(statearr_19284_19326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (16))){
var inst_19206 = (state_19251[(10)]);
var inst_19210 = cljs.core.chunk_first.call(null,inst_19206);
var inst_19211 = cljs.core.chunk_rest.call(null,inst_19206);
var inst_19212 = cljs.core.count.call(null,inst_19210);
var inst_19192 = inst_19211;
var inst_19193 = inst_19210;
var inst_19194 = inst_19212;
var inst_19195 = (0);
var state_19251__$1 = (function (){var statearr_19285 = state_19251;
(statearr_19285[(12)] = inst_19195);

(statearr_19285[(13)] = inst_19194);

(statearr_19285[(14)] = inst_19193);

(statearr_19285[(15)] = inst_19192);

return statearr_19285;
})();
var statearr_19286_19327 = state_19251__$1;
(statearr_19286_19327[(2)] = null);

(statearr_19286_19327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (10))){
var inst_19195 = (state_19251[(12)]);
var inst_19194 = (state_19251[(13)]);
var inst_19193 = (state_19251[(14)]);
var inst_19192 = (state_19251[(15)]);
var inst_19200 = cljs.core._nth.call(null,inst_19193,inst_19195);
var inst_19201 = cljs.core.async.muxch_STAR_.call(null,inst_19200);
var inst_19202 = cljs.core.async.close_BANG_.call(null,inst_19201);
var inst_19203 = (inst_19195 + (1));
var tmp19281 = inst_19194;
var tmp19282 = inst_19193;
var tmp19283 = inst_19192;
var inst_19192__$1 = tmp19283;
var inst_19193__$1 = tmp19282;
var inst_19194__$1 = tmp19281;
var inst_19195__$1 = inst_19203;
var state_19251__$1 = (function (){var statearr_19287 = state_19251;
(statearr_19287[(12)] = inst_19195__$1);

(statearr_19287[(13)] = inst_19194__$1);

(statearr_19287[(14)] = inst_19193__$1);

(statearr_19287[(17)] = inst_19202);

(statearr_19287[(15)] = inst_19192__$1);

return statearr_19287;
})();
var statearr_19288_19328 = state_19251__$1;
(statearr_19288_19328[(2)] = null);

(statearr_19288_19328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (18))){
var inst_19221 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19289_19329 = state_19251__$1;
(statearr_19289_19329[(2)] = inst_19221);

(statearr_19289_19329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (8))){
var inst_19195 = (state_19251[(12)]);
var inst_19194 = (state_19251[(13)]);
var inst_19197 = (inst_19195 < inst_19194);
var inst_19198 = inst_19197;
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19198)){
var statearr_19290_19330 = state_19251__$1;
(statearr_19290_19330[(1)] = (10));

} else {
var statearr_19291_19331 = state_19251__$1;
(statearr_19291_19331[(1)] = (11));

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
});})(c__17384__auto___19303,mults,ensure_mult,p))
;
return ((function (switch__17272__auto__,c__17384__auto___19303,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19295[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19295[(1)] = (1));

return statearr_19295;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19251){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19296){if((e19296 instanceof Object)){
var ex__17276__auto__ = e19296;
var statearr_19297_19332 = state_19251;
(statearr_19297_19332[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19333 = state_19251;
state_19251 = G__19333;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19303,mults,ensure_mult,p))
})();
var state__17386__auto__ = (function (){var statearr_19298 = f__17385__auto__.call(null);
(statearr_19298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19303);

return statearr_19298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19303,mults,ensure_mult,p))
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
var args19334 = [];
var len__7484__auto___19337 = arguments.length;
var i__7485__auto___19338 = (0);
while(true){
if((i__7485__auto___19338 < len__7484__auto___19337)){
args19334.push((arguments[i__7485__auto___19338]));

var G__19339 = (i__7485__auto___19338 + (1));
i__7485__auto___19338 = G__19339;
continue;
} else {
}
break;
}

var G__19336 = args19334.length;
switch (G__19336) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19334.length)].join('')));

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
var args19341 = [];
var len__7484__auto___19344 = arguments.length;
var i__7485__auto___19345 = (0);
while(true){
if((i__7485__auto___19345 < len__7484__auto___19344)){
args19341.push((arguments[i__7485__auto___19345]));

var G__19346 = (i__7485__auto___19345 + (1));
i__7485__auto___19345 = G__19346;
continue;
} else {
}
break;
}

var G__19343 = args19341.length;
switch (G__19343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19341.length)].join('')));

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
var args19348 = [];
var len__7484__auto___19419 = arguments.length;
var i__7485__auto___19420 = (0);
while(true){
if((i__7485__auto___19420 < len__7484__auto___19419)){
args19348.push((arguments[i__7485__auto___19420]));

var G__19421 = (i__7485__auto___19420 + (1));
i__7485__auto___19420 = G__19421;
continue;
} else {
}
break;
}

var G__19350 = args19348.length;
switch (G__19350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19348.length)].join('')));

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
var c__17384__auto___19423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19389){
var state_val_19390 = (state_19389[(1)]);
if((state_val_19390 === (7))){
var state_19389__$1 = state_19389;
var statearr_19391_19424 = state_19389__$1;
(statearr_19391_19424[(2)] = null);

(statearr_19391_19424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (1))){
var state_19389__$1 = state_19389;
var statearr_19392_19425 = state_19389__$1;
(statearr_19392_19425[(2)] = null);

(statearr_19392_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (4))){
var inst_19353 = (state_19389[(7)]);
var inst_19355 = (inst_19353 < cnt);
var state_19389__$1 = state_19389;
if(cljs.core.truth_(inst_19355)){
var statearr_19393_19426 = state_19389__$1;
(statearr_19393_19426[(1)] = (6));

} else {
var statearr_19394_19427 = state_19389__$1;
(statearr_19394_19427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (15))){
var inst_19385 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19395_19428 = state_19389__$1;
(statearr_19395_19428[(2)] = inst_19385);

(statearr_19395_19428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (13))){
var inst_19378 = cljs.core.async.close_BANG_.call(null,out);
var state_19389__$1 = state_19389;
var statearr_19396_19429 = state_19389__$1;
(statearr_19396_19429[(2)] = inst_19378);

(statearr_19396_19429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (6))){
var state_19389__$1 = state_19389;
var statearr_19397_19430 = state_19389__$1;
(statearr_19397_19430[(2)] = null);

(statearr_19397_19430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (3))){
var inst_19387 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19389__$1,inst_19387);
} else {
if((state_val_19390 === (12))){
var inst_19375 = (state_19389[(8)]);
var inst_19375__$1 = (state_19389[(2)]);
var inst_19376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19375__$1);
var state_19389__$1 = (function (){var statearr_19398 = state_19389;
(statearr_19398[(8)] = inst_19375__$1);

return statearr_19398;
})();
if(cljs.core.truth_(inst_19376)){
var statearr_19399_19431 = state_19389__$1;
(statearr_19399_19431[(1)] = (13));

} else {
var statearr_19400_19432 = state_19389__$1;
(statearr_19400_19432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (2))){
var inst_19352 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19353 = (0);
var state_19389__$1 = (function (){var statearr_19401 = state_19389;
(statearr_19401[(7)] = inst_19353);

(statearr_19401[(9)] = inst_19352);

return statearr_19401;
})();
var statearr_19402_19433 = state_19389__$1;
(statearr_19402_19433[(2)] = null);

(statearr_19402_19433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (11))){
var inst_19353 = (state_19389[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19389,(10),Object,null,(9));
var inst_19362 = chs__$1.call(null,inst_19353);
var inst_19363 = done.call(null,inst_19353);
var inst_19364 = cljs.core.async.take_BANG_.call(null,inst_19362,inst_19363);
var state_19389__$1 = state_19389;
var statearr_19403_19434 = state_19389__$1;
(statearr_19403_19434[(2)] = inst_19364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (9))){
var inst_19353 = (state_19389[(7)]);
var inst_19366 = (state_19389[(2)]);
var inst_19367 = (inst_19353 + (1));
var inst_19353__$1 = inst_19367;
var state_19389__$1 = (function (){var statearr_19404 = state_19389;
(statearr_19404[(7)] = inst_19353__$1);

(statearr_19404[(10)] = inst_19366);

return statearr_19404;
})();
var statearr_19405_19435 = state_19389__$1;
(statearr_19405_19435[(2)] = null);

(statearr_19405_19435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (5))){
var inst_19373 = (state_19389[(2)]);
var state_19389__$1 = (function (){var statearr_19406 = state_19389;
(statearr_19406[(11)] = inst_19373);

return statearr_19406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19389__$1,(12),dchan);
} else {
if((state_val_19390 === (14))){
var inst_19375 = (state_19389[(8)]);
var inst_19380 = cljs.core.apply.call(null,f,inst_19375);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19389__$1,(16),out,inst_19380);
} else {
if((state_val_19390 === (16))){
var inst_19382 = (state_19389[(2)]);
var state_19389__$1 = (function (){var statearr_19407 = state_19389;
(statearr_19407[(12)] = inst_19382);

return statearr_19407;
})();
var statearr_19408_19436 = state_19389__$1;
(statearr_19408_19436[(2)] = null);

(statearr_19408_19436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (10))){
var inst_19357 = (state_19389[(2)]);
var inst_19358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19389__$1 = (function (){var statearr_19409 = state_19389;
(statearr_19409[(13)] = inst_19357);

return statearr_19409;
})();
var statearr_19410_19437 = state_19389__$1;
(statearr_19410_19437[(2)] = inst_19358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (8))){
var inst_19371 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19411_19438 = state_19389__$1;
(statearr_19411_19438[(2)] = inst_19371);

(statearr_19411_19438[(1)] = (5));


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
});})(c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17272__auto__,c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19415[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19415[(1)] = (1));

return statearr_19415;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19389){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19416){if((e19416 instanceof Object)){
var ex__17276__auto__ = e19416;
var statearr_19417_19439 = state_19389;
(statearr_19417_19439[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19440 = state_19389;
state_19389 = G__19440;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17386__auto__ = (function (){var statearr_19418 = f__17385__auto__.call(null);
(statearr_19418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19423);

return statearr_19418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19423,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19442 = [];
var len__7484__auto___19500 = arguments.length;
var i__7485__auto___19501 = (0);
while(true){
if((i__7485__auto___19501 < len__7484__auto___19500)){
args19442.push((arguments[i__7485__auto___19501]));

var G__19502 = (i__7485__auto___19501 + (1));
i__7485__auto___19501 = G__19502;
continue;
} else {
}
break;
}

var G__19444 = args19442.length;
switch (G__19444) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19442.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___19504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19504,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19504,out){
return (function (state_19476){
var state_val_19477 = (state_19476[(1)]);
if((state_val_19477 === (7))){
var inst_19456 = (state_19476[(7)]);
var inst_19455 = (state_19476[(8)]);
var inst_19455__$1 = (state_19476[(2)]);
var inst_19456__$1 = cljs.core.nth.call(null,inst_19455__$1,(0),null);
var inst_19457 = cljs.core.nth.call(null,inst_19455__$1,(1),null);
var inst_19458 = (inst_19456__$1 == null);
var state_19476__$1 = (function (){var statearr_19478 = state_19476;
(statearr_19478[(7)] = inst_19456__$1);

(statearr_19478[(9)] = inst_19457);

(statearr_19478[(8)] = inst_19455__$1);

return statearr_19478;
})();
if(cljs.core.truth_(inst_19458)){
var statearr_19479_19505 = state_19476__$1;
(statearr_19479_19505[(1)] = (8));

} else {
var statearr_19480_19506 = state_19476__$1;
(statearr_19480_19506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (1))){
var inst_19445 = cljs.core.vec.call(null,chs);
var inst_19446 = inst_19445;
var state_19476__$1 = (function (){var statearr_19481 = state_19476;
(statearr_19481[(10)] = inst_19446);

return statearr_19481;
})();
var statearr_19482_19507 = state_19476__$1;
(statearr_19482_19507[(2)] = null);

(statearr_19482_19507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (4))){
var inst_19446 = (state_19476[(10)]);
var state_19476__$1 = state_19476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19476__$1,(7),inst_19446);
} else {
if((state_val_19477 === (6))){
var inst_19472 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19483_19508 = state_19476__$1;
(statearr_19483_19508[(2)] = inst_19472);

(statearr_19483_19508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (3))){
var inst_19474 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19476__$1,inst_19474);
} else {
if((state_val_19477 === (2))){
var inst_19446 = (state_19476[(10)]);
var inst_19448 = cljs.core.count.call(null,inst_19446);
var inst_19449 = (inst_19448 > (0));
var state_19476__$1 = state_19476;
if(cljs.core.truth_(inst_19449)){
var statearr_19485_19509 = state_19476__$1;
(statearr_19485_19509[(1)] = (4));

} else {
var statearr_19486_19510 = state_19476__$1;
(statearr_19486_19510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (11))){
var inst_19446 = (state_19476[(10)]);
var inst_19465 = (state_19476[(2)]);
var tmp19484 = inst_19446;
var inst_19446__$1 = tmp19484;
var state_19476__$1 = (function (){var statearr_19487 = state_19476;
(statearr_19487[(11)] = inst_19465);

(statearr_19487[(10)] = inst_19446__$1);

return statearr_19487;
})();
var statearr_19488_19511 = state_19476__$1;
(statearr_19488_19511[(2)] = null);

(statearr_19488_19511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (9))){
var inst_19456 = (state_19476[(7)]);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19476__$1,(11),out,inst_19456);
} else {
if((state_val_19477 === (5))){
var inst_19470 = cljs.core.async.close_BANG_.call(null,out);
var state_19476__$1 = state_19476;
var statearr_19489_19512 = state_19476__$1;
(statearr_19489_19512[(2)] = inst_19470);

(statearr_19489_19512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (10))){
var inst_19468 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19490_19513 = state_19476__$1;
(statearr_19490_19513[(2)] = inst_19468);

(statearr_19490_19513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (8))){
var inst_19446 = (state_19476[(10)]);
var inst_19456 = (state_19476[(7)]);
var inst_19457 = (state_19476[(9)]);
var inst_19455 = (state_19476[(8)]);
var inst_19460 = (function (){var cs = inst_19446;
var vec__19451 = inst_19455;
var v = inst_19456;
var c = inst_19457;
return ((function (cs,vec__19451,v,c,inst_19446,inst_19456,inst_19457,inst_19455,state_val_19477,c__17384__auto___19504,out){
return (function (p1__19441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19441_SHARP_);
});
;})(cs,vec__19451,v,c,inst_19446,inst_19456,inst_19457,inst_19455,state_val_19477,c__17384__auto___19504,out))
})();
var inst_19461 = cljs.core.filterv.call(null,inst_19460,inst_19446);
var inst_19446__$1 = inst_19461;
var state_19476__$1 = (function (){var statearr_19491 = state_19476;
(statearr_19491[(10)] = inst_19446__$1);

return statearr_19491;
})();
var statearr_19492_19514 = state_19476__$1;
(statearr_19492_19514[(2)] = null);

(statearr_19492_19514[(1)] = (2));


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
});})(c__17384__auto___19504,out))
;
return ((function (switch__17272__auto__,c__17384__auto___19504,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19496[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19496[(1)] = (1));

return statearr_19496;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19476){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19497){if((e19497 instanceof Object)){
var ex__17276__auto__ = e19497;
var statearr_19498_19515 = state_19476;
(statearr_19498_19515[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19516 = state_19476;
state_19476 = G__19516;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19504,out))
})();
var state__17386__auto__ = (function (){var statearr_19499 = f__17385__auto__.call(null);
(statearr_19499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19504);

return statearr_19499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19504,out))
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
var args19517 = [];
var len__7484__auto___19566 = arguments.length;
var i__7485__auto___19567 = (0);
while(true){
if((i__7485__auto___19567 < len__7484__auto___19566)){
args19517.push((arguments[i__7485__auto___19567]));

var G__19568 = (i__7485__auto___19567 + (1));
i__7485__auto___19567 = G__19568;
continue;
} else {
}
break;
}

var G__19519 = args19517.length;
switch (G__19519) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19517.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___19570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19570,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19570,out){
return (function (state_19543){
var state_val_19544 = (state_19543[(1)]);
if((state_val_19544 === (7))){
var inst_19525 = (state_19543[(7)]);
var inst_19525__$1 = (state_19543[(2)]);
var inst_19526 = (inst_19525__$1 == null);
var inst_19527 = cljs.core.not.call(null,inst_19526);
var state_19543__$1 = (function (){var statearr_19545 = state_19543;
(statearr_19545[(7)] = inst_19525__$1);

return statearr_19545;
})();
if(inst_19527){
var statearr_19546_19571 = state_19543__$1;
(statearr_19546_19571[(1)] = (8));

} else {
var statearr_19547_19572 = state_19543__$1;
(statearr_19547_19572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (1))){
var inst_19520 = (0);
var state_19543__$1 = (function (){var statearr_19548 = state_19543;
(statearr_19548[(8)] = inst_19520);

return statearr_19548;
})();
var statearr_19549_19573 = state_19543__$1;
(statearr_19549_19573[(2)] = null);

(statearr_19549_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (4))){
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19543__$1,(7),ch);
} else {
if((state_val_19544 === (6))){
var inst_19538 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19550_19574 = state_19543__$1;
(statearr_19550_19574[(2)] = inst_19538);

(statearr_19550_19574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (3))){
var inst_19540 = (state_19543[(2)]);
var inst_19541 = cljs.core.async.close_BANG_.call(null,out);
var state_19543__$1 = (function (){var statearr_19551 = state_19543;
(statearr_19551[(9)] = inst_19540);

return statearr_19551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19543__$1,inst_19541);
} else {
if((state_val_19544 === (2))){
var inst_19520 = (state_19543[(8)]);
var inst_19522 = (inst_19520 < n);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19522)){
var statearr_19552_19575 = state_19543__$1;
(statearr_19552_19575[(1)] = (4));

} else {
var statearr_19553_19576 = state_19543__$1;
(statearr_19553_19576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (11))){
var inst_19520 = (state_19543[(8)]);
var inst_19530 = (state_19543[(2)]);
var inst_19531 = (inst_19520 + (1));
var inst_19520__$1 = inst_19531;
var state_19543__$1 = (function (){var statearr_19554 = state_19543;
(statearr_19554[(8)] = inst_19520__$1);

(statearr_19554[(10)] = inst_19530);

return statearr_19554;
})();
var statearr_19555_19577 = state_19543__$1;
(statearr_19555_19577[(2)] = null);

(statearr_19555_19577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (9))){
var state_19543__$1 = state_19543;
var statearr_19556_19578 = state_19543__$1;
(statearr_19556_19578[(2)] = null);

(statearr_19556_19578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (5))){
var state_19543__$1 = state_19543;
var statearr_19557_19579 = state_19543__$1;
(statearr_19557_19579[(2)] = null);

(statearr_19557_19579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (10))){
var inst_19535 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19558_19580 = state_19543__$1;
(statearr_19558_19580[(2)] = inst_19535);

(statearr_19558_19580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (8))){
var inst_19525 = (state_19543[(7)]);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19543__$1,(11),out,inst_19525);
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
});})(c__17384__auto___19570,out))
;
return ((function (switch__17272__auto__,c__17384__auto___19570,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19562[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19562[(1)] = (1));

return statearr_19562;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19543){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object)){
var ex__17276__auto__ = e19563;
var statearr_19564_19581 = state_19543;
(statearr_19564_19581[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19582 = state_19543;
state_19543 = G__19582;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19570,out))
})();
var state__17386__auto__ = (function (){var statearr_19565 = f__17385__auto__.call(null);
(statearr_19565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19570);

return statearr_19565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19570,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19590 = (function (map_LT_,f,ch,meta19591){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19591 = meta19591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19592,meta19591__$1){
var self__ = this;
var _19592__$1 = this;
return (new cljs.core.async.t_cljs$core$async19590(self__.map_LT_,self__.f,self__.ch,meta19591__$1));
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19592){
var self__ = this;
var _19592__$1 = this;
return self__.meta19591;
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19593 = (function (map_LT_,f,ch,meta19591,_,fn1,meta19594){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19591 = meta19591;
this._ = _;
this.fn1 = fn1;
this.meta19594 = meta19594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19595,meta19594__$1){
var self__ = this;
var _19595__$1 = this;
return (new cljs.core.async.t_cljs$core$async19593(self__.map_LT_,self__.f,self__.ch,self__.meta19591,self__._,self__.fn1,meta19594__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19595){
var self__ = this;
var _19595__$1 = this;
return self__.meta19594;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19583_SHARP_){
return f1.call(null,(((p1__19583_SHARP_ == null))?null:self__.f.call(null,p1__19583_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19591","meta19591",1580726994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19590","cljs.core.async/t_cljs$core$async19590",-750217372,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19594","meta19594",-689092459,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19593";

cljs.core.async.t_cljs$core$async19593.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19593");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19593 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19593(map_LT___$1,f__$1,ch__$1,meta19591__$1,___$2,fn1__$1,meta19594){
return (new cljs.core.async.t_cljs$core$async19593(map_LT___$1,f__$1,ch__$1,meta19591__$1,___$2,fn1__$1,meta19594));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19593(self__.map_LT_,self__.f,self__.ch,self__.meta19591,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19591","meta19591",1580726994,null)], null);
});

cljs.core.async.t_cljs$core$async19590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19590";

cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19590");
});

cljs.core.async.__GT_t_cljs$core$async19590 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19590(map_LT___$1,f__$1,ch__$1,meta19591){
return (new cljs.core.async.t_cljs$core$async19590(map_LT___$1,f__$1,ch__$1,meta19591));
});

}

return (new cljs.core.async.t_cljs$core$async19590(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19599 = (function (map_GT_,f,ch,meta19600){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19600 = meta19600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19601,meta19600__$1){
var self__ = this;
var _19601__$1 = this;
return (new cljs.core.async.t_cljs$core$async19599(self__.map_GT_,self__.f,self__.ch,meta19600__$1));
});

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19601){
var self__ = this;
var _19601__$1 = this;
return self__.meta19600;
});

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19600","meta19600",-1306095605,null)], null);
});

cljs.core.async.t_cljs$core$async19599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19599";

cljs.core.async.t_cljs$core$async19599.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19599");
});

cljs.core.async.__GT_t_cljs$core$async19599 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19599(map_GT___$1,f__$1,ch__$1,meta19600){
return (new cljs.core.async.t_cljs$core$async19599(map_GT___$1,f__$1,ch__$1,meta19600));
});

}

return (new cljs.core.async.t_cljs$core$async19599(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19605 = (function (filter_GT_,p,ch,meta19606){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19606 = meta19606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19607,meta19606__$1){
var self__ = this;
var _19607__$1 = this;
return (new cljs.core.async.t_cljs$core$async19605(self__.filter_GT_,self__.p,self__.ch,meta19606__$1));
});

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19607){
var self__ = this;
var _19607__$1 = this;
return self__.meta19606;
});

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19606","meta19606",735977909,null)], null);
});

cljs.core.async.t_cljs$core$async19605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19605";

cljs.core.async.t_cljs$core$async19605.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19605");
});

cljs.core.async.__GT_t_cljs$core$async19605 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19605(filter_GT___$1,p__$1,ch__$1,meta19606){
return (new cljs.core.async.t_cljs$core$async19605(filter_GT___$1,p__$1,ch__$1,meta19606));
});

}

return (new cljs.core.async.t_cljs$core$async19605(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19608 = [];
var len__7484__auto___19652 = arguments.length;
var i__7485__auto___19653 = (0);
while(true){
if((i__7485__auto___19653 < len__7484__auto___19652)){
args19608.push((arguments[i__7485__auto___19653]));

var G__19654 = (i__7485__auto___19653 + (1));
i__7485__auto___19653 = G__19654;
continue;
} else {
}
break;
}

var G__19610 = args19608.length;
switch (G__19610) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19608.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___19656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19656,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19656,out){
return (function (state_19631){
var state_val_19632 = (state_19631[(1)]);
if((state_val_19632 === (7))){
var inst_19627 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19633_19657 = state_19631__$1;
(statearr_19633_19657[(2)] = inst_19627);

(statearr_19633_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (1))){
var state_19631__$1 = state_19631;
var statearr_19634_19658 = state_19631__$1;
(statearr_19634_19658[(2)] = null);

(statearr_19634_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (4))){
var inst_19613 = (state_19631[(7)]);
var inst_19613__$1 = (state_19631[(2)]);
var inst_19614 = (inst_19613__$1 == null);
var state_19631__$1 = (function (){var statearr_19635 = state_19631;
(statearr_19635[(7)] = inst_19613__$1);

return statearr_19635;
})();
if(cljs.core.truth_(inst_19614)){
var statearr_19636_19659 = state_19631__$1;
(statearr_19636_19659[(1)] = (5));

} else {
var statearr_19637_19660 = state_19631__$1;
(statearr_19637_19660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (6))){
var inst_19613 = (state_19631[(7)]);
var inst_19618 = p.call(null,inst_19613);
var state_19631__$1 = state_19631;
if(cljs.core.truth_(inst_19618)){
var statearr_19638_19661 = state_19631__$1;
(statearr_19638_19661[(1)] = (8));

} else {
var statearr_19639_19662 = state_19631__$1;
(statearr_19639_19662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (3))){
var inst_19629 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19631__$1,inst_19629);
} else {
if((state_val_19632 === (2))){
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19631__$1,(4),ch);
} else {
if((state_val_19632 === (11))){
var inst_19621 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19640_19663 = state_19631__$1;
(statearr_19640_19663[(2)] = inst_19621);

(statearr_19640_19663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (9))){
var state_19631__$1 = state_19631;
var statearr_19641_19664 = state_19631__$1;
(statearr_19641_19664[(2)] = null);

(statearr_19641_19664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (5))){
var inst_19616 = cljs.core.async.close_BANG_.call(null,out);
var state_19631__$1 = state_19631;
var statearr_19642_19665 = state_19631__$1;
(statearr_19642_19665[(2)] = inst_19616);

(statearr_19642_19665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (10))){
var inst_19624 = (state_19631[(2)]);
var state_19631__$1 = (function (){var statearr_19643 = state_19631;
(statearr_19643[(8)] = inst_19624);

return statearr_19643;
})();
var statearr_19644_19666 = state_19631__$1;
(statearr_19644_19666[(2)] = null);

(statearr_19644_19666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (8))){
var inst_19613 = (state_19631[(7)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19631__$1,(11),out,inst_19613);
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
});})(c__17384__auto___19656,out))
;
return ((function (switch__17272__auto__,c__17384__auto___19656,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19648 = [null,null,null,null,null,null,null,null,null];
(statearr_19648[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19648[(1)] = (1));

return statearr_19648;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19631){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19649){if((e19649 instanceof Object)){
var ex__17276__auto__ = e19649;
var statearr_19650_19667 = state_19631;
(statearr_19650_19667[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19668 = state_19631;
state_19631 = G__19668;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19656,out))
})();
var state__17386__auto__ = (function (){var statearr_19651 = f__17385__auto__.call(null);
(statearr_19651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19656);

return statearr_19651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19656,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19669 = [];
var len__7484__auto___19672 = arguments.length;
var i__7485__auto___19673 = (0);
while(true){
if((i__7485__auto___19673 < len__7484__auto___19672)){
args19669.push((arguments[i__7485__auto___19673]));

var G__19674 = (i__7485__auto___19673 + (1));
i__7485__auto___19673 = G__19674;
continue;
} else {
}
break;
}

var G__19671 = args19669.length;
switch (G__19671) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19669.length)].join('')));

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
var c__17384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto__){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto__){
return (function (state_19841){
var state_val_19842 = (state_19841[(1)]);
if((state_val_19842 === (7))){
var inst_19837 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19843_19884 = state_19841__$1;
(statearr_19843_19884[(2)] = inst_19837);

(statearr_19843_19884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (20))){
var inst_19807 = (state_19841[(7)]);
var inst_19818 = (state_19841[(2)]);
var inst_19819 = cljs.core.next.call(null,inst_19807);
var inst_19793 = inst_19819;
var inst_19794 = null;
var inst_19795 = (0);
var inst_19796 = (0);
var state_19841__$1 = (function (){var statearr_19844 = state_19841;
(statearr_19844[(8)] = inst_19818);

(statearr_19844[(9)] = inst_19793);

(statearr_19844[(10)] = inst_19796);

(statearr_19844[(11)] = inst_19794);

(statearr_19844[(12)] = inst_19795);

return statearr_19844;
})();
var statearr_19845_19885 = state_19841__$1;
(statearr_19845_19885[(2)] = null);

(statearr_19845_19885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (1))){
var state_19841__$1 = state_19841;
var statearr_19846_19886 = state_19841__$1;
(statearr_19846_19886[(2)] = null);

(statearr_19846_19886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (4))){
var inst_19782 = (state_19841[(13)]);
var inst_19782__$1 = (state_19841[(2)]);
var inst_19783 = (inst_19782__$1 == null);
var state_19841__$1 = (function (){var statearr_19847 = state_19841;
(statearr_19847[(13)] = inst_19782__$1);

return statearr_19847;
})();
if(cljs.core.truth_(inst_19783)){
var statearr_19848_19887 = state_19841__$1;
(statearr_19848_19887[(1)] = (5));

} else {
var statearr_19849_19888 = state_19841__$1;
(statearr_19849_19888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (15))){
var state_19841__$1 = state_19841;
var statearr_19853_19889 = state_19841__$1;
(statearr_19853_19889[(2)] = null);

(statearr_19853_19889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (21))){
var state_19841__$1 = state_19841;
var statearr_19854_19890 = state_19841__$1;
(statearr_19854_19890[(2)] = null);

(statearr_19854_19890[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (13))){
var inst_19793 = (state_19841[(9)]);
var inst_19796 = (state_19841[(10)]);
var inst_19794 = (state_19841[(11)]);
var inst_19795 = (state_19841[(12)]);
var inst_19803 = (state_19841[(2)]);
var inst_19804 = (inst_19796 + (1));
var tmp19850 = inst_19793;
var tmp19851 = inst_19794;
var tmp19852 = inst_19795;
var inst_19793__$1 = tmp19850;
var inst_19794__$1 = tmp19851;
var inst_19795__$1 = tmp19852;
var inst_19796__$1 = inst_19804;
var state_19841__$1 = (function (){var statearr_19855 = state_19841;
(statearr_19855[(9)] = inst_19793__$1);

(statearr_19855[(10)] = inst_19796__$1);

(statearr_19855[(11)] = inst_19794__$1);

(statearr_19855[(12)] = inst_19795__$1);

(statearr_19855[(14)] = inst_19803);

return statearr_19855;
})();
var statearr_19856_19891 = state_19841__$1;
(statearr_19856_19891[(2)] = null);

(statearr_19856_19891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (22))){
var state_19841__$1 = state_19841;
var statearr_19857_19892 = state_19841__$1;
(statearr_19857_19892[(2)] = null);

(statearr_19857_19892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (6))){
var inst_19782 = (state_19841[(13)]);
var inst_19791 = f.call(null,inst_19782);
var inst_19792 = cljs.core.seq.call(null,inst_19791);
var inst_19793 = inst_19792;
var inst_19794 = null;
var inst_19795 = (0);
var inst_19796 = (0);
var state_19841__$1 = (function (){var statearr_19858 = state_19841;
(statearr_19858[(9)] = inst_19793);

(statearr_19858[(10)] = inst_19796);

(statearr_19858[(11)] = inst_19794);

(statearr_19858[(12)] = inst_19795);

return statearr_19858;
})();
var statearr_19859_19893 = state_19841__$1;
(statearr_19859_19893[(2)] = null);

(statearr_19859_19893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (17))){
var inst_19807 = (state_19841[(7)]);
var inst_19811 = cljs.core.chunk_first.call(null,inst_19807);
var inst_19812 = cljs.core.chunk_rest.call(null,inst_19807);
var inst_19813 = cljs.core.count.call(null,inst_19811);
var inst_19793 = inst_19812;
var inst_19794 = inst_19811;
var inst_19795 = inst_19813;
var inst_19796 = (0);
var state_19841__$1 = (function (){var statearr_19860 = state_19841;
(statearr_19860[(9)] = inst_19793);

(statearr_19860[(10)] = inst_19796);

(statearr_19860[(11)] = inst_19794);

(statearr_19860[(12)] = inst_19795);

return statearr_19860;
})();
var statearr_19861_19894 = state_19841__$1;
(statearr_19861_19894[(2)] = null);

(statearr_19861_19894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (3))){
var inst_19839 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19841__$1,inst_19839);
} else {
if((state_val_19842 === (12))){
var inst_19827 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19862_19895 = state_19841__$1;
(statearr_19862_19895[(2)] = inst_19827);

(statearr_19862_19895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (2))){
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19841__$1,(4),in$);
} else {
if((state_val_19842 === (23))){
var inst_19835 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19863_19896 = state_19841__$1;
(statearr_19863_19896[(2)] = inst_19835);

(statearr_19863_19896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (19))){
var inst_19822 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19864_19897 = state_19841__$1;
(statearr_19864_19897[(2)] = inst_19822);

(statearr_19864_19897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (11))){
var inst_19793 = (state_19841[(9)]);
var inst_19807 = (state_19841[(7)]);
var inst_19807__$1 = cljs.core.seq.call(null,inst_19793);
var state_19841__$1 = (function (){var statearr_19865 = state_19841;
(statearr_19865[(7)] = inst_19807__$1);

return statearr_19865;
})();
if(inst_19807__$1){
var statearr_19866_19898 = state_19841__$1;
(statearr_19866_19898[(1)] = (14));

} else {
var statearr_19867_19899 = state_19841__$1;
(statearr_19867_19899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (9))){
var inst_19829 = (state_19841[(2)]);
var inst_19830 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19841__$1 = (function (){var statearr_19868 = state_19841;
(statearr_19868[(15)] = inst_19829);

return statearr_19868;
})();
if(cljs.core.truth_(inst_19830)){
var statearr_19869_19900 = state_19841__$1;
(statearr_19869_19900[(1)] = (21));

} else {
var statearr_19870_19901 = state_19841__$1;
(statearr_19870_19901[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (5))){
var inst_19785 = cljs.core.async.close_BANG_.call(null,out);
var state_19841__$1 = state_19841;
var statearr_19871_19902 = state_19841__$1;
(statearr_19871_19902[(2)] = inst_19785);

(statearr_19871_19902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (14))){
var inst_19807 = (state_19841[(7)]);
var inst_19809 = cljs.core.chunked_seq_QMARK_.call(null,inst_19807);
var state_19841__$1 = state_19841;
if(inst_19809){
var statearr_19872_19903 = state_19841__$1;
(statearr_19872_19903[(1)] = (17));

} else {
var statearr_19873_19904 = state_19841__$1;
(statearr_19873_19904[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (16))){
var inst_19825 = (state_19841[(2)]);
var state_19841__$1 = state_19841;
var statearr_19874_19905 = state_19841__$1;
(statearr_19874_19905[(2)] = inst_19825);

(statearr_19874_19905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19842 === (10))){
var inst_19796 = (state_19841[(10)]);
var inst_19794 = (state_19841[(11)]);
var inst_19801 = cljs.core._nth.call(null,inst_19794,inst_19796);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19841__$1,(13),out,inst_19801);
} else {
if((state_val_19842 === (18))){
var inst_19807 = (state_19841[(7)]);
var inst_19816 = cljs.core.first.call(null,inst_19807);
var state_19841__$1 = state_19841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19841__$1,(20),out,inst_19816);
} else {
if((state_val_19842 === (8))){
var inst_19796 = (state_19841[(10)]);
var inst_19795 = (state_19841[(12)]);
var inst_19798 = (inst_19796 < inst_19795);
var inst_19799 = inst_19798;
var state_19841__$1 = state_19841;
if(cljs.core.truth_(inst_19799)){
var statearr_19875_19906 = state_19841__$1;
(statearr_19875_19906[(1)] = (10));

} else {
var statearr_19876_19907 = state_19841__$1;
(statearr_19876_19907[(1)] = (11));

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
});})(c__17384__auto__))
;
return ((function (switch__17272__auto__,c__17384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____0 = (function (){
var statearr_19880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19880[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__);

(statearr_19880[(1)] = (1));

return statearr_19880;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____1 = (function (state_19841){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19881){if((e19881 instanceof Object)){
var ex__17276__auto__ = e19881;
var statearr_19882_19908 = state_19841;
(statearr_19882_19908[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19909 = state_19841;
state_19841 = G__19909;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__ = function(state_19841){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____1.call(this,state_19841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto__))
})();
var state__17386__auto__ = (function (){var statearr_19883 = f__17385__auto__.call(null);
(statearr_19883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto__);

return statearr_19883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto__))
);

return c__17384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19910 = [];
var len__7484__auto___19913 = arguments.length;
var i__7485__auto___19914 = (0);
while(true){
if((i__7485__auto___19914 < len__7484__auto___19913)){
args19910.push((arguments[i__7485__auto___19914]));

var G__19915 = (i__7485__auto___19914 + (1));
i__7485__auto___19914 = G__19915;
continue;
} else {
}
break;
}

var G__19912 = args19910.length;
switch (G__19912) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19910.length)].join('')));

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
var args19917 = [];
var len__7484__auto___19920 = arguments.length;
var i__7485__auto___19921 = (0);
while(true){
if((i__7485__auto___19921 < len__7484__auto___19920)){
args19917.push((arguments[i__7485__auto___19921]));

var G__19922 = (i__7485__auto___19921 + (1));
i__7485__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var G__19919 = args19917.length;
switch (G__19919) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19917.length)].join('')));

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
var args19924 = [];
var len__7484__auto___19975 = arguments.length;
var i__7485__auto___19976 = (0);
while(true){
if((i__7485__auto___19976 < len__7484__auto___19975)){
args19924.push((arguments[i__7485__auto___19976]));

var G__19977 = (i__7485__auto___19976 + (1));
i__7485__auto___19976 = G__19977;
continue;
} else {
}
break;
}

var G__19926 = args19924.length;
switch (G__19926) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19924.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___19979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___19979,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___19979,out){
return (function (state_19950){
var state_val_19951 = (state_19950[(1)]);
if((state_val_19951 === (7))){
var inst_19945 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19952_19980 = state_19950__$1;
(statearr_19952_19980[(2)] = inst_19945);

(statearr_19952_19980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (1))){
var inst_19927 = null;
var state_19950__$1 = (function (){var statearr_19953 = state_19950;
(statearr_19953[(7)] = inst_19927);

return statearr_19953;
})();
var statearr_19954_19981 = state_19950__$1;
(statearr_19954_19981[(2)] = null);

(statearr_19954_19981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (4))){
var inst_19930 = (state_19950[(8)]);
var inst_19930__$1 = (state_19950[(2)]);
var inst_19931 = (inst_19930__$1 == null);
var inst_19932 = cljs.core.not.call(null,inst_19931);
var state_19950__$1 = (function (){var statearr_19955 = state_19950;
(statearr_19955[(8)] = inst_19930__$1);

return statearr_19955;
})();
if(inst_19932){
var statearr_19956_19982 = state_19950__$1;
(statearr_19956_19982[(1)] = (5));

} else {
var statearr_19957_19983 = state_19950__$1;
(statearr_19957_19983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (6))){
var state_19950__$1 = state_19950;
var statearr_19958_19984 = state_19950__$1;
(statearr_19958_19984[(2)] = null);

(statearr_19958_19984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (3))){
var inst_19947 = (state_19950[(2)]);
var inst_19948 = cljs.core.async.close_BANG_.call(null,out);
var state_19950__$1 = (function (){var statearr_19959 = state_19950;
(statearr_19959[(9)] = inst_19947);

return statearr_19959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19950__$1,inst_19948);
} else {
if((state_val_19951 === (2))){
var state_19950__$1 = state_19950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19950__$1,(4),ch);
} else {
if((state_val_19951 === (11))){
var inst_19930 = (state_19950[(8)]);
var inst_19939 = (state_19950[(2)]);
var inst_19927 = inst_19930;
var state_19950__$1 = (function (){var statearr_19960 = state_19950;
(statearr_19960[(7)] = inst_19927);

(statearr_19960[(10)] = inst_19939);

return statearr_19960;
})();
var statearr_19961_19985 = state_19950__$1;
(statearr_19961_19985[(2)] = null);

(statearr_19961_19985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (9))){
var inst_19930 = (state_19950[(8)]);
var state_19950__$1 = state_19950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19950__$1,(11),out,inst_19930);
} else {
if((state_val_19951 === (5))){
var inst_19927 = (state_19950[(7)]);
var inst_19930 = (state_19950[(8)]);
var inst_19934 = cljs.core._EQ_.call(null,inst_19930,inst_19927);
var state_19950__$1 = state_19950;
if(inst_19934){
var statearr_19963_19986 = state_19950__$1;
(statearr_19963_19986[(1)] = (8));

} else {
var statearr_19964_19987 = state_19950__$1;
(statearr_19964_19987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (10))){
var inst_19942 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19965_19988 = state_19950__$1;
(statearr_19965_19988[(2)] = inst_19942);

(statearr_19965_19988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (8))){
var inst_19927 = (state_19950[(7)]);
var tmp19962 = inst_19927;
var inst_19927__$1 = tmp19962;
var state_19950__$1 = (function (){var statearr_19966 = state_19950;
(statearr_19966[(7)] = inst_19927__$1);

return statearr_19966;
})();
var statearr_19967_19989 = state_19950__$1;
(statearr_19967_19989[(2)] = null);

(statearr_19967_19989[(1)] = (2));


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
});})(c__17384__auto___19979,out))
;
return ((function (switch__17272__auto__,c__17384__auto___19979,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_19971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19971[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_19971[(1)] = (1));

return statearr_19971;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_19950){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_19950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e19972){if((e19972 instanceof Object)){
var ex__17276__auto__ = e19972;
var statearr_19973_19990 = state_19950;
(statearr_19973_19990[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19991 = state_19950;
state_19950 = G__19991;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_19950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_19950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___19979,out))
})();
var state__17386__auto__ = (function (){var statearr_19974 = f__17385__auto__.call(null);
(statearr_19974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___19979);

return statearr_19974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___19979,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19992 = [];
var len__7484__auto___20062 = arguments.length;
var i__7485__auto___20063 = (0);
while(true){
if((i__7485__auto___20063 < len__7484__auto___20062)){
args19992.push((arguments[i__7485__auto___20063]));

var G__20064 = (i__7485__auto___20063 + (1));
i__7485__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var G__19994 = args19992.length;
switch (G__19994) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19992.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___20066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___20066,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___20066,out){
return (function (state_20032){
var state_val_20033 = (state_20032[(1)]);
if((state_val_20033 === (7))){
var inst_20028 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20034_20067 = state_20032__$1;
(statearr_20034_20067[(2)] = inst_20028);

(statearr_20034_20067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (1))){
var inst_19995 = (new Array(n));
var inst_19996 = inst_19995;
var inst_19997 = (0);
var state_20032__$1 = (function (){var statearr_20035 = state_20032;
(statearr_20035[(7)] = inst_19996);

(statearr_20035[(8)] = inst_19997);

return statearr_20035;
})();
var statearr_20036_20068 = state_20032__$1;
(statearr_20036_20068[(2)] = null);

(statearr_20036_20068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (4))){
var inst_20000 = (state_20032[(9)]);
var inst_20000__$1 = (state_20032[(2)]);
var inst_20001 = (inst_20000__$1 == null);
var inst_20002 = cljs.core.not.call(null,inst_20001);
var state_20032__$1 = (function (){var statearr_20037 = state_20032;
(statearr_20037[(9)] = inst_20000__$1);

return statearr_20037;
})();
if(inst_20002){
var statearr_20038_20069 = state_20032__$1;
(statearr_20038_20069[(1)] = (5));

} else {
var statearr_20039_20070 = state_20032__$1;
(statearr_20039_20070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (15))){
var inst_20022 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20040_20071 = state_20032__$1;
(statearr_20040_20071[(2)] = inst_20022);

(statearr_20040_20071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (13))){
var state_20032__$1 = state_20032;
var statearr_20041_20072 = state_20032__$1;
(statearr_20041_20072[(2)] = null);

(statearr_20041_20072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (6))){
var inst_19997 = (state_20032[(8)]);
var inst_20018 = (inst_19997 > (0));
var state_20032__$1 = state_20032;
if(cljs.core.truth_(inst_20018)){
var statearr_20042_20073 = state_20032__$1;
(statearr_20042_20073[(1)] = (12));

} else {
var statearr_20043_20074 = state_20032__$1;
(statearr_20043_20074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (3))){
var inst_20030 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20032__$1,inst_20030);
} else {
if((state_val_20033 === (12))){
var inst_19996 = (state_20032[(7)]);
var inst_20020 = cljs.core.vec.call(null,inst_19996);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20032__$1,(15),out,inst_20020);
} else {
if((state_val_20033 === (2))){
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20032__$1,(4),ch);
} else {
if((state_val_20033 === (11))){
var inst_20012 = (state_20032[(2)]);
var inst_20013 = (new Array(n));
var inst_19996 = inst_20013;
var inst_19997 = (0);
var state_20032__$1 = (function (){var statearr_20044 = state_20032;
(statearr_20044[(7)] = inst_19996);

(statearr_20044[(8)] = inst_19997);

(statearr_20044[(10)] = inst_20012);

return statearr_20044;
})();
var statearr_20045_20075 = state_20032__$1;
(statearr_20045_20075[(2)] = null);

(statearr_20045_20075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (9))){
var inst_19996 = (state_20032[(7)]);
var inst_20010 = cljs.core.vec.call(null,inst_19996);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20032__$1,(11),out,inst_20010);
} else {
if((state_val_20033 === (5))){
var inst_19996 = (state_20032[(7)]);
var inst_20000 = (state_20032[(9)]);
var inst_19997 = (state_20032[(8)]);
var inst_20005 = (state_20032[(11)]);
var inst_20004 = (inst_19996[inst_19997] = inst_20000);
var inst_20005__$1 = (inst_19997 + (1));
var inst_20006 = (inst_20005__$1 < n);
var state_20032__$1 = (function (){var statearr_20046 = state_20032;
(statearr_20046[(12)] = inst_20004);

(statearr_20046[(11)] = inst_20005__$1);

return statearr_20046;
})();
if(cljs.core.truth_(inst_20006)){
var statearr_20047_20076 = state_20032__$1;
(statearr_20047_20076[(1)] = (8));

} else {
var statearr_20048_20077 = state_20032__$1;
(statearr_20048_20077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (14))){
var inst_20025 = (state_20032[(2)]);
var inst_20026 = cljs.core.async.close_BANG_.call(null,out);
var state_20032__$1 = (function (){var statearr_20050 = state_20032;
(statearr_20050[(13)] = inst_20025);

return statearr_20050;
})();
var statearr_20051_20078 = state_20032__$1;
(statearr_20051_20078[(2)] = inst_20026);

(statearr_20051_20078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (10))){
var inst_20016 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20052_20079 = state_20032__$1;
(statearr_20052_20079[(2)] = inst_20016);

(statearr_20052_20079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (8))){
var inst_19996 = (state_20032[(7)]);
var inst_20005 = (state_20032[(11)]);
var tmp20049 = inst_19996;
var inst_19996__$1 = tmp20049;
var inst_19997 = inst_20005;
var state_20032__$1 = (function (){var statearr_20053 = state_20032;
(statearr_20053[(7)] = inst_19996__$1);

(statearr_20053[(8)] = inst_19997);

return statearr_20053;
})();
var statearr_20054_20080 = state_20032__$1;
(statearr_20054_20080[(2)] = null);

(statearr_20054_20080[(1)] = (2));


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
});})(c__17384__auto___20066,out))
;
return ((function (switch__17272__auto__,c__17384__auto___20066,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_20058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20058[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_20058[(1)] = (1));

return statearr_20058;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_20032){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_20032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e20059){if((e20059 instanceof Object)){
var ex__17276__auto__ = e20059;
var statearr_20060_20081 = state_20032;
(statearr_20060_20081[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20082 = state_20032;
state_20032 = G__20082;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_20032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_20032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___20066,out))
})();
var state__17386__auto__ = (function (){var statearr_20061 = f__17385__auto__.call(null);
(statearr_20061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___20066);

return statearr_20061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___20066,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20083 = [];
var len__7484__auto___20157 = arguments.length;
var i__7485__auto___20158 = (0);
while(true){
if((i__7485__auto___20158 < len__7484__auto___20157)){
args20083.push((arguments[i__7485__auto___20158]));

var G__20159 = (i__7485__auto___20158 + (1));
i__7485__auto___20158 = G__20159;
continue;
} else {
}
break;
}

var G__20085 = args20083.length;
switch (G__20085) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20083.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17384__auto___20161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17384__auto___20161,out){
return (function (){
var f__17385__auto__ = (function (){var switch__17272__auto__ = ((function (c__17384__auto___20161,out){
return (function (state_20127){
var state_val_20128 = (state_20127[(1)]);
if((state_val_20128 === (7))){
var inst_20123 = (state_20127[(2)]);
var state_20127__$1 = state_20127;
var statearr_20129_20162 = state_20127__$1;
(statearr_20129_20162[(2)] = inst_20123);

(statearr_20129_20162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (1))){
var inst_20086 = [];
var inst_20087 = inst_20086;
var inst_20088 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20127__$1 = (function (){var statearr_20130 = state_20127;
(statearr_20130[(7)] = inst_20088);

(statearr_20130[(8)] = inst_20087);

return statearr_20130;
})();
var statearr_20131_20163 = state_20127__$1;
(statearr_20131_20163[(2)] = null);

(statearr_20131_20163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (4))){
var inst_20091 = (state_20127[(9)]);
var inst_20091__$1 = (state_20127[(2)]);
var inst_20092 = (inst_20091__$1 == null);
var inst_20093 = cljs.core.not.call(null,inst_20092);
var state_20127__$1 = (function (){var statearr_20132 = state_20127;
(statearr_20132[(9)] = inst_20091__$1);

return statearr_20132;
})();
if(inst_20093){
var statearr_20133_20164 = state_20127__$1;
(statearr_20133_20164[(1)] = (5));

} else {
var statearr_20134_20165 = state_20127__$1;
(statearr_20134_20165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (15))){
var inst_20117 = (state_20127[(2)]);
var state_20127__$1 = state_20127;
var statearr_20135_20166 = state_20127__$1;
(statearr_20135_20166[(2)] = inst_20117);

(statearr_20135_20166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (13))){
var state_20127__$1 = state_20127;
var statearr_20136_20167 = state_20127__$1;
(statearr_20136_20167[(2)] = null);

(statearr_20136_20167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (6))){
var inst_20087 = (state_20127[(8)]);
var inst_20112 = inst_20087.length;
var inst_20113 = (inst_20112 > (0));
var state_20127__$1 = state_20127;
if(cljs.core.truth_(inst_20113)){
var statearr_20137_20168 = state_20127__$1;
(statearr_20137_20168[(1)] = (12));

} else {
var statearr_20138_20169 = state_20127__$1;
(statearr_20138_20169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (3))){
var inst_20125 = (state_20127[(2)]);
var state_20127__$1 = state_20127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20127__$1,inst_20125);
} else {
if((state_val_20128 === (12))){
var inst_20087 = (state_20127[(8)]);
var inst_20115 = cljs.core.vec.call(null,inst_20087);
var state_20127__$1 = state_20127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20127__$1,(15),out,inst_20115);
} else {
if((state_val_20128 === (2))){
var state_20127__$1 = state_20127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20127__$1,(4),ch);
} else {
if((state_val_20128 === (11))){
var inst_20091 = (state_20127[(9)]);
var inst_20095 = (state_20127[(10)]);
var inst_20105 = (state_20127[(2)]);
var inst_20106 = [];
var inst_20107 = inst_20106.push(inst_20091);
var inst_20087 = inst_20106;
var inst_20088 = inst_20095;
var state_20127__$1 = (function (){var statearr_20139 = state_20127;
(statearr_20139[(7)] = inst_20088);

(statearr_20139[(11)] = inst_20107);

(statearr_20139[(8)] = inst_20087);

(statearr_20139[(12)] = inst_20105);

return statearr_20139;
})();
var statearr_20140_20170 = state_20127__$1;
(statearr_20140_20170[(2)] = null);

(statearr_20140_20170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (9))){
var inst_20087 = (state_20127[(8)]);
var inst_20103 = cljs.core.vec.call(null,inst_20087);
var state_20127__$1 = state_20127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20127__$1,(11),out,inst_20103);
} else {
if((state_val_20128 === (5))){
var inst_20088 = (state_20127[(7)]);
var inst_20091 = (state_20127[(9)]);
var inst_20095 = (state_20127[(10)]);
var inst_20095__$1 = f.call(null,inst_20091);
var inst_20096 = cljs.core._EQ_.call(null,inst_20095__$1,inst_20088);
var inst_20097 = cljs.core.keyword_identical_QMARK_.call(null,inst_20088,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20098 = (inst_20096) || (inst_20097);
var state_20127__$1 = (function (){var statearr_20141 = state_20127;
(statearr_20141[(10)] = inst_20095__$1);

return statearr_20141;
})();
if(cljs.core.truth_(inst_20098)){
var statearr_20142_20171 = state_20127__$1;
(statearr_20142_20171[(1)] = (8));

} else {
var statearr_20143_20172 = state_20127__$1;
(statearr_20143_20172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (14))){
var inst_20120 = (state_20127[(2)]);
var inst_20121 = cljs.core.async.close_BANG_.call(null,out);
var state_20127__$1 = (function (){var statearr_20145 = state_20127;
(statearr_20145[(13)] = inst_20120);

return statearr_20145;
})();
var statearr_20146_20173 = state_20127__$1;
(statearr_20146_20173[(2)] = inst_20121);

(statearr_20146_20173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (10))){
var inst_20110 = (state_20127[(2)]);
var state_20127__$1 = state_20127;
var statearr_20147_20174 = state_20127__$1;
(statearr_20147_20174[(2)] = inst_20110);

(statearr_20147_20174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20128 === (8))){
var inst_20091 = (state_20127[(9)]);
var inst_20087 = (state_20127[(8)]);
var inst_20095 = (state_20127[(10)]);
var inst_20100 = inst_20087.push(inst_20091);
var tmp20144 = inst_20087;
var inst_20087__$1 = tmp20144;
var inst_20088 = inst_20095;
var state_20127__$1 = (function (){var statearr_20148 = state_20127;
(statearr_20148[(7)] = inst_20088);

(statearr_20148[(8)] = inst_20087__$1);

(statearr_20148[(14)] = inst_20100);

return statearr_20148;
})();
var statearr_20149_20175 = state_20127__$1;
(statearr_20149_20175[(2)] = null);

(statearr_20149_20175[(1)] = (2));


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
});})(c__17384__auto___20161,out))
;
return ((function (switch__17272__auto__,c__17384__auto___20161,out){
return (function() {
var cljs$core$async$state_machine__17273__auto__ = null;
var cljs$core$async$state_machine__17273__auto____0 = (function (){
var statearr_20153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20153[(0)] = cljs$core$async$state_machine__17273__auto__);

(statearr_20153[(1)] = (1));

return statearr_20153;
});
var cljs$core$async$state_machine__17273__auto____1 = (function (state_20127){
while(true){
var ret_value__17274__auto__ = (function (){try{while(true){
var result__17275__auto__ = switch__17272__auto__.call(null,state_20127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17275__auto__;
}
break;
}
}catch (e20154){if((e20154 instanceof Object)){
var ex__17276__auto__ = e20154;
var statearr_20155_20176 = state_20127;
(statearr_20155_20176[(5)] = ex__17276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20177 = state_20127;
state_20127 = G__20177;
continue;
} else {
return ret_value__17274__auto__;
}
break;
}
});
cljs$core$async$state_machine__17273__auto__ = function(state_20127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17273__auto____1.call(this,state_20127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17273__auto____0;
cljs$core$async$state_machine__17273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17273__auto____1;
return cljs$core$async$state_machine__17273__auto__;
})()
;})(switch__17272__auto__,c__17384__auto___20161,out))
})();
var state__17386__auto__ = (function (){var statearr_20156 = f__17385__auto__.call(null);
(statearr_20156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17384__auto___20161);

return statearr_20156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17386__auto__);
});})(c__17384__auto___20161,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484115239404
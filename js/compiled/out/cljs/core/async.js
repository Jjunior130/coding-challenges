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
var args17436 = [];
var len__7484__auto___17442 = arguments.length;
var i__7485__auto___17443 = (0);
while(true){
if((i__7485__auto___17443 < len__7484__auto___17442)){
args17436.push((arguments[i__7485__auto___17443]));

var G__17444 = (i__7485__auto___17443 + (1));
i__7485__auto___17443 = G__17444;
continue;
} else {
}
break;
}

var G__17438 = args17436.length;
switch (G__17438) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17436.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17439 = (function (f,blockable,meta17440){
this.f = f;
this.blockable = blockable;
this.meta17440 = meta17440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17441,meta17440__$1){
var self__ = this;
var _17441__$1 = this;
return (new cljs.core.async.t_cljs$core$async17439(self__.f,self__.blockable,meta17440__$1));
});

cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17441){
var self__ = this;
var _17441__$1 = this;
return self__.meta17440;
});

cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17440","meta17440",-12729599,null)], null);
});

cljs.core.async.t_cljs$core$async17439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17439";

cljs.core.async.t_cljs$core$async17439.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17439");
});

cljs.core.async.__GT_t_cljs$core$async17439 = (function cljs$core$async$__GT_t_cljs$core$async17439(f__$1,blockable__$1,meta17440){
return (new cljs.core.async.t_cljs$core$async17439(f__$1,blockable__$1,meta17440));
});

}

return (new cljs.core.async.t_cljs$core$async17439(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17448.length)].join('')));

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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17455.length)].join('')));

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
var args17462 = [];
var len__7484__auto___17465 = arguments.length;
var i__7485__auto___17466 = (0);
while(true){
if((i__7485__auto___17466 < len__7484__auto___17465)){
args17462.push((arguments[i__7485__auto___17466]));

var G__17467 = (i__7485__auto___17466 + (1));
i__7485__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var G__17464 = args17462.length;
switch (G__17464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17462.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17469 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17469);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17469,ret){
return (function (){
return fn1.call(null,val_17469);
});})(val_17469,ret))
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
var args17470 = [];
var len__7484__auto___17473 = arguments.length;
var i__7485__auto___17474 = (0);
while(true){
if((i__7485__auto___17474 < len__7484__auto___17473)){
args17470.push((arguments[i__7485__auto___17474]));

var G__17475 = (i__7485__auto___17474 + (1));
i__7485__auto___17474 = G__17475;
continue;
} else {
}
break;
}

var G__17472 = args17470.length;
switch (G__17472) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17470.length)].join('')));

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
var n__7324__auto___17477 = n;
var x_17478 = (0);
while(true){
if((x_17478 < n__7324__auto___17477)){
(a[x_17478] = (0));

var G__17479 = (x_17478 + (1));
x_17478 = G__17479;
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

var G__17480 = (i + (1));
i = G__17480;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17484 = (function (alt_flag,flag,meta17485){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17485 = meta17485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17486,meta17485__$1){
var self__ = this;
var _17486__$1 = this;
return (new cljs.core.async.t_cljs$core$async17484(self__.alt_flag,self__.flag,meta17485__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17486){
var self__ = this;
var _17486__$1 = this;
return self__.meta17485;
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17485","meta17485",346842429,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17484";

cljs.core.async.t_cljs$core$async17484.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17484");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17484 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17484(alt_flag__$1,flag__$1,meta17485){
return (new cljs.core.async.t_cljs$core$async17484(alt_flag__$1,flag__$1,meta17485));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17484(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17490 = (function (alt_handler,flag,cb,meta17491){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17491 = meta17491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17492,meta17491__$1){
var self__ = this;
var _17492__$1 = this;
return (new cljs.core.async.t_cljs$core$async17490(self__.alt_handler,self__.flag,self__.cb,meta17491__$1));
});

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17492){
var self__ = this;
var _17492__$1 = this;
return self__.meta17491;
});

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17491","meta17491",1420550045,null)], null);
});

cljs.core.async.t_cljs$core$async17490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17490";

cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17490");
});

cljs.core.async.__GT_t_cljs$core$async17490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17490(alt_handler__$1,flag__$1,cb__$1,meta17491){
return (new cljs.core.async.t_cljs$core$async17490(alt_handler__$1,flag__$1,cb__$1,meta17491));
});

}

return (new cljs.core.async.t_cljs$core$async17490(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17493_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17493_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17494_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17494_SHARP_,port], null));
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
var G__17495 = (i + (1));
i = G__17495;
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
var len__7484__auto___17501 = arguments.length;
var i__7485__auto___17502 = (0);
while(true){
if((i__7485__auto___17502 < len__7484__auto___17501)){
args__7491__auto__.push((arguments[i__7485__auto___17502]));

var G__17503 = (i__7485__auto___17502 + (1));
i__7485__auto___17502 = G__17503;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17498){
var map__17499 = p__17498;
var map__17499__$1 = ((((!((map__17499 == null)))?((((map__17499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17499):map__17499);
var opts = map__17499__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17496){
var G__17497 = cljs.core.first.call(null,seq17496);
var seq17496__$1 = cljs.core.next.call(null,seq17496);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17497,seq17496__$1);
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
var args17504 = [];
var len__7484__auto___17554 = arguments.length;
var i__7485__auto___17555 = (0);
while(true){
if((i__7485__auto___17555 < len__7484__auto___17554)){
args17504.push((arguments[i__7485__auto___17555]));

var G__17556 = (i__7485__auto___17555 + (1));
i__7485__auto___17555 = G__17556;
continue;
} else {
}
break;
}

var G__17506 = args17504.length;
switch (G__17506) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17504.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17391__auto___17558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___17558){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___17558){
return (function (state_17530){
var state_val_17531 = (state_17530[(1)]);
if((state_val_17531 === (7))){
var inst_17526 = (state_17530[(2)]);
var state_17530__$1 = state_17530;
var statearr_17532_17559 = state_17530__$1;
(statearr_17532_17559[(2)] = inst_17526);

(statearr_17532_17559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (1))){
var state_17530__$1 = state_17530;
var statearr_17533_17560 = state_17530__$1;
(statearr_17533_17560[(2)] = null);

(statearr_17533_17560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (4))){
var inst_17509 = (state_17530[(7)]);
var inst_17509__$1 = (state_17530[(2)]);
var inst_17510 = (inst_17509__$1 == null);
var state_17530__$1 = (function (){var statearr_17534 = state_17530;
(statearr_17534[(7)] = inst_17509__$1);

return statearr_17534;
})();
if(cljs.core.truth_(inst_17510)){
var statearr_17535_17561 = state_17530__$1;
(statearr_17535_17561[(1)] = (5));

} else {
var statearr_17536_17562 = state_17530__$1;
(statearr_17536_17562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (13))){
var state_17530__$1 = state_17530;
var statearr_17537_17563 = state_17530__$1;
(statearr_17537_17563[(2)] = null);

(statearr_17537_17563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (6))){
var inst_17509 = (state_17530[(7)]);
var state_17530__$1 = state_17530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17530__$1,(11),to,inst_17509);
} else {
if((state_val_17531 === (3))){
var inst_17528 = (state_17530[(2)]);
var state_17530__$1 = state_17530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17530__$1,inst_17528);
} else {
if((state_val_17531 === (12))){
var state_17530__$1 = state_17530;
var statearr_17538_17564 = state_17530__$1;
(statearr_17538_17564[(2)] = null);

(statearr_17538_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (2))){
var state_17530__$1 = state_17530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17530__$1,(4),from);
} else {
if((state_val_17531 === (11))){
var inst_17519 = (state_17530[(2)]);
var state_17530__$1 = state_17530;
if(cljs.core.truth_(inst_17519)){
var statearr_17539_17565 = state_17530__$1;
(statearr_17539_17565[(1)] = (12));

} else {
var statearr_17540_17566 = state_17530__$1;
(statearr_17540_17566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (9))){
var state_17530__$1 = state_17530;
var statearr_17541_17567 = state_17530__$1;
(statearr_17541_17567[(2)] = null);

(statearr_17541_17567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (5))){
var state_17530__$1 = state_17530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17542_17568 = state_17530__$1;
(statearr_17542_17568[(1)] = (8));

} else {
var statearr_17543_17569 = state_17530__$1;
(statearr_17543_17569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (14))){
var inst_17524 = (state_17530[(2)]);
var state_17530__$1 = state_17530;
var statearr_17544_17570 = state_17530__$1;
(statearr_17544_17570[(2)] = inst_17524);

(statearr_17544_17570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (10))){
var inst_17516 = (state_17530[(2)]);
var state_17530__$1 = state_17530;
var statearr_17545_17571 = state_17530__$1;
(statearr_17545_17571[(2)] = inst_17516);

(statearr_17545_17571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17531 === (8))){
var inst_17513 = cljs.core.async.close_BANG_.call(null,to);
var state_17530__$1 = state_17530;
var statearr_17546_17572 = state_17530__$1;
(statearr_17546_17572[(2)] = inst_17513);

(statearr_17546_17572[(1)] = (10));


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
});})(c__17391__auto___17558))
;
return ((function (switch__17279__auto__,c__17391__auto___17558){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_17550 = [null,null,null,null,null,null,null,null];
(statearr_17550[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_17550[(1)] = (1));

return statearr_17550;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_17530){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17551){if((e17551 instanceof Object)){
var ex__17283__auto__ = e17551;
var statearr_17552_17573 = state_17530;
(statearr_17552_17573[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17574 = state_17530;
state_17530 = G__17574;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_17530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_17530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___17558))
})();
var state__17393__auto__ = (function (){var statearr_17553 = f__17392__auto__.call(null);
(statearr_17553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___17558);

return statearr_17553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___17558))
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
return (function (p__17762){
var vec__17763 = p__17762;
var v = cljs.core.nth.call(null,vec__17763,(0),null);
var p = cljs.core.nth.call(null,vec__17763,(1),null);
var job = vec__17763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17391__auto___17949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results){
return (function (state_17770){
var state_val_17771 = (state_17770[(1)]);
if((state_val_17771 === (1))){
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17770__$1,(2),res,v);
} else {
if((state_val_17771 === (2))){
var inst_17767 = (state_17770[(2)]);
var inst_17768 = cljs.core.async.close_BANG_.call(null,res);
var state_17770__$1 = (function (){var statearr_17772 = state_17770;
(statearr_17772[(7)] = inst_17767);

return statearr_17772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17770__$1,inst_17768);
} else {
return null;
}
}
});})(c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results))
;
return ((function (switch__17279__auto__,c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17776 = [null,null,null,null,null,null,null,null];
(statearr_17776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17776[(1)] = (1));

return statearr_17776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17770){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17777){if((e17777 instanceof Object)){
var ex__17283__auto__ = e17777;
var statearr_17778_17950 = state_17770;
(statearr_17778_17950[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17951 = state_17770;
state_17770 = G__17951;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results))
})();
var state__17393__auto__ = (function (){var statearr_17779 = f__17392__auto__.call(null);
(statearr_17779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___17949);

return statearr_17779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___17949,res,vec__17763,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17780){
var vec__17781 = p__17780;
var v = cljs.core.nth.call(null,vec__17781,(0),null);
var p = cljs.core.nth.call(null,vec__17781,(1),null);
var job = vec__17781;
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
var n__7324__auto___17952 = n;
var __17953 = (0);
while(true){
if((__17953 < n__7324__auto___17952)){
var G__17784_17954 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17784_17954) {
case "compute":
var c__17391__auto___17956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17953,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (__17953,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (1))){
var state_17797__$1 = state_17797;
var statearr_17799_17957 = state_17797__$1;
(statearr_17799_17957[(2)] = null);

(statearr_17799_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (2))){
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,(4),jobs);
} else {
if((state_val_17798 === (3))){
var inst_17795 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17797__$1,inst_17795);
} else {
if((state_val_17798 === (4))){
var inst_17787 = (state_17797[(2)]);
var inst_17788 = process.call(null,inst_17787);
var state_17797__$1 = state_17797;
if(cljs.core.truth_(inst_17788)){
var statearr_17800_17958 = state_17797__$1;
(statearr_17800_17958[(1)] = (5));

} else {
var statearr_17801_17959 = state_17797__$1;
(statearr_17801_17959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (5))){
var state_17797__$1 = state_17797;
var statearr_17802_17960 = state_17797__$1;
(statearr_17802_17960[(2)] = null);

(statearr_17802_17960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (6))){
var state_17797__$1 = state_17797;
var statearr_17803_17961 = state_17797__$1;
(statearr_17803_17961[(2)] = null);

(statearr_17803_17961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (7))){
var inst_17793 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17804_17962 = state_17797__$1;
(statearr_17804_17962[(2)] = inst_17793);

(statearr_17804_17962[(1)] = (3));


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
});})(__17953,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
;
return ((function (__17953,switch__17279__auto__,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17808 = [null,null,null,null,null,null,null];
(statearr_17808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17808[(1)] = (1));

return statearr_17808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17797){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17809){if((e17809 instanceof Object)){
var ex__17283__auto__ = e17809;
var statearr_17810_17963 = state_17797;
(statearr_17810_17963[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17964 = state_17797;
state_17797 = G__17964;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__17953,switch__17279__auto__,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
})();
var state__17393__auto__ = (function (){var statearr_17811 = f__17392__auto__.call(null);
(statearr_17811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___17956);

return statearr_17811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(__17953,c__17391__auto___17956,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
);


break;
case "async":
var c__17391__auto___17965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17953,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (__17953,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function (state_17824){
var state_val_17825 = (state_17824[(1)]);
if((state_val_17825 === (1))){
var state_17824__$1 = state_17824;
var statearr_17826_17966 = state_17824__$1;
(statearr_17826_17966[(2)] = null);

(statearr_17826_17966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (2))){
var state_17824__$1 = state_17824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17824__$1,(4),jobs);
} else {
if((state_val_17825 === (3))){
var inst_17822 = (state_17824[(2)]);
var state_17824__$1 = state_17824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17824__$1,inst_17822);
} else {
if((state_val_17825 === (4))){
var inst_17814 = (state_17824[(2)]);
var inst_17815 = async.call(null,inst_17814);
var state_17824__$1 = state_17824;
if(cljs.core.truth_(inst_17815)){
var statearr_17827_17967 = state_17824__$1;
(statearr_17827_17967[(1)] = (5));

} else {
var statearr_17828_17968 = state_17824__$1;
(statearr_17828_17968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (5))){
var state_17824__$1 = state_17824;
var statearr_17829_17969 = state_17824__$1;
(statearr_17829_17969[(2)] = null);

(statearr_17829_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (6))){
var state_17824__$1 = state_17824;
var statearr_17830_17970 = state_17824__$1;
(statearr_17830_17970[(2)] = null);

(statearr_17830_17970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (7))){
var inst_17820 = (state_17824[(2)]);
var state_17824__$1 = state_17824;
var statearr_17831_17971 = state_17824__$1;
(statearr_17831_17971[(2)] = inst_17820);

(statearr_17831_17971[(1)] = (3));


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
});})(__17953,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
;
return ((function (__17953,switch__17279__auto__,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17835 = [null,null,null,null,null,null,null];
(statearr_17835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17835[(1)] = (1));

return statearr_17835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17824){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17836){if((e17836 instanceof Object)){
var ex__17283__auto__ = e17836;
var statearr_17837_17972 = state_17824;
(statearr_17837_17972[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17973 = state_17824;
state_17824 = G__17973;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__17953,switch__17279__auto__,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
})();
var state__17393__auto__ = (function (){var statearr_17838 = f__17392__auto__.call(null);
(statearr_17838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___17965);

return statearr_17838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(__17953,c__17391__auto___17965,G__17784_17954,n__7324__auto___17952,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17974 = (__17953 + (1));
__17953 = G__17974;
continue;
} else {
}
break;
}

var c__17391__auto___17975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___17975,jobs,results,process,async){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___17975,jobs,results,process,async){
return (function (state_17860){
var state_val_17861 = (state_17860[(1)]);
if((state_val_17861 === (1))){
var state_17860__$1 = state_17860;
var statearr_17862_17976 = state_17860__$1;
(statearr_17862_17976[(2)] = null);

(statearr_17862_17976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (2))){
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17860__$1,(4),from);
} else {
if((state_val_17861 === (3))){
var inst_17858 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17860__$1,inst_17858);
} else {
if((state_val_17861 === (4))){
var inst_17841 = (state_17860[(7)]);
var inst_17841__$1 = (state_17860[(2)]);
var inst_17842 = (inst_17841__$1 == null);
var state_17860__$1 = (function (){var statearr_17863 = state_17860;
(statearr_17863[(7)] = inst_17841__$1);

return statearr_17863;
})();
if(cljs.core.truth_(inst_17842)){
var statearr_17864_17977 = state_17860__$1;
(statearr_17864_17977[(1)] = (5));

} else {
var statearr_17865_17978 = state_17860__$1;
(statearr_17865_17978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (5))){
var inst_17844 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17860__$1 = state_17860;
var statearr_17866_17979 = state_17860__$1;
(statearr_17866_17979[(2)] = inst_17844);

(statearr_17866_17979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (6))){
var inst_17846 = (state_17860[(8)]);
var inst_17841 = (state_17860[(7)]);
var inst_17846__$1 = cljs.core.async.chan.call(null,(1));
var inst_17847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17848 = [inst_17841,inst_17846__$1];
var inst_17849 = (new cljs.core.PersistentVector(null,2,(5),inst_17847,inst_17848,null));
var state_17860__$1 = (function (){var statearr_17867 = state_17860;
(statearr_17867[(8)] = inst_17846__$1);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17860__$1,(8),jobs,inst_17849);
} else {
if((state_val_17861 === (7))){
var inst_17856 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17868_17980 = state_17860__$1;
(statearr_17868_17980[(2)] = inst_17856);

(statearr_17868_17980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (8))){
var inst_17846 = (state_17860[(8)]);
var inst_17851 = (state_17860[(2)]);
var state_17860__$1 = (function (){var statearr_17869 = state_17860;
(statearr_17869[(9)] = inst_17851);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17860__$1,(9),results,inst_17846);
} else {
if((state_val_17861 === (9))){
var inst_17853 = (state_17860[(2)]);
var state_17860__$1 = (function (){var statearr_17870 = state_17860;
(statearr_17870[(10)] = inst_17853);

return statearr_17870;
})();
var statearr_17871_17981 = state_17860__$1;
(statearr_17871_17981[(2)] = null);

(statearr_17871_17981[(1)] = (2));


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
});})(c__17391__auto___17975,jobs,results,process,async))
;
return ((function (switch__17279__auto__,c__17391__auto___17975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17875[(1)] = (1));

return statearr_17875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17860){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17876){if((e17876 instanceof Object)){
var ex__17283__auto__ = e17876;
var statearr_17877_17982 = state_17860;
(statearr_17877_17982[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17983 = state_17860;
state_17860 = G__17983;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___17975,jobs,results,process,async))
})();
var state__17393__auto__ = (function (){var statearr_17878 = f__17392__auto__.call(null);
(statearr_17878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___17975);

return statearr_17878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___17975,jobs,results,process,async))
);


var c__17391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto__,jobs,results,process,async){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto__,jobs,results,process,async){
return (function (state_17916){
var state_val_17917 = (state_17916[(1)]);
if((state_val_17917 === (7))){
var inst_17912 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17918_17984 = state_17916__$1;
(statearr_17918_17984[(2)] = inst_17912);

(statearr_17918_17984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (20))){
var state_17916__$1 = state_17916;
var statearr_17919_17985 = state_17916__$1;
(statearr_17919_17985[(2)] = null);

(statearr_17919_17985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (1))){
var state_17916__$1 = state_17916;
var statearr_17920_17986 = state_17916__$1;
(statearr_17920_17986[(2)] = null);

(statearr_17920_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (4))){
var inst_17881 = (state_17916[(7)]);
var inst_17881__$1 = (state_17916[(2)]);
var inst_17882 = (inst_17881__$1 == null);
var state_17916__$1 = (function (){var statearr_17921 = state_17916;
(statearr_17921[(7)] = inst_17881__$1);

return statearr_17921;
})();
if(cljs.core.truth_(inst_17882)){
var statearr_17922_17987 = state_17916__$1;
(statearr_17922_17987[(1)] = (5));

} else {
var statearr_17923_17988 = state_17916__$1;
(statearr_17923_17988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (15))){
var inst_17894 = (state_17916[(8)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17916__$1,(18),to,inst_17894);
} else {
if((state_val_17917 === (21))){
var inst_17907 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17924_17989 = state_17916__$1;
(statearr_17924_17989[(2)] = inst_17907);

(statearr_17924_17989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (13))){
var inst_17909 = (state_17916[(2)]);
var state_17916__$1 = (function (){var statearr_17925 = state_17916;
(statearr_17925[(9)] = inst_17909);

return statearr_17925;
})();
var statearr_17926_17990 = state_17916__$1;
(statearr_17926_17990[(2)] = null);

(statearr_17926_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (6))){
var inst_17881 = (state_17916[(7)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17916__$1,(11),inst_17881);
} else {
if((state_val_17917 === (17))){
var inst_17902 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
if(cljs.core.truth_(inst_17902)){
var statearr_17927_17991 = state_17916__$1;
(statearr_17927_17991[(1)] = (19));

} else {
var statearr_17928_17992 = state_17916__$1;
(statearr_17928_17992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (3))){
var inst_17914 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17916__$1,inst_17914);
} else {
if((state_val_17917 === (12))){
var inst_17891 = (state_17916[(10)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17916__$1,(14),inst_17891);
} else {
if((state_val_17917 === (2))){
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17916__$1,(4),results);
} else {
if((state_val_17917 === (19))){
var state_17916__$1 = state_17916;
var statearr_17929_17993 = state_17916__$1;
(statearr_17929_17993[(2)] = null);

(statearr_17929_17993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (11))){
var inst_17891 = (state_17916[(2)]);
var state_17916__$1 = (function (){var statearr_17930 = state_17916;
(statearr_17930[(10)] = inst_17891);

return statearr_17930;
})();
var statearr_17931_17994 = state_17916__$1;
(statearr_17931_17994[(2)] = null);

(statearr_17931_17994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (9))){
var state_17916__$1 = state_17916;
var statearr_17932_17995 = state_17916__$1;
(statearr_17932_17995[(2)] = null);

(statearr_17932_17995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (5))){
var state_17916__$1 = state_17916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17933_17996 = state_17916__$1;
(statearr_17933_17996[(1)] = (8));

} else {
var statearr_17934_17997 = state_17916__$1;
(statearr_17934_17997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (14))){
var inst_17894 = (state_17916[(8)]);
var inst_17896 = (state_17916[(11)]);
var inst_17894__$1 = (state_17916[(2)]);
var inst_17895 = (inst_17894__$1 == null);
var inst_17896__$1 = cljs.core.not.call(null,inst_17895);
var state_17916__$1 = (function (){var statearr_17935 = state_17916;
(statearr_17935[(8)] = inst_17894__$1);

(statearr_17935[(11)] = inst_17896__$1);

return statearr_17935;
})();
if(inst_17896__$1){
var statearr_17936_17998 = state_17916__$1;
(statearr_17936_17998[(1)] = (15));

} else {
var statearr_17937_17999 = state_17916__$1;
(statearr_17937_17999[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (16))){
var inst_17896 = (state_17916[(11)]);
var state_17916__$1 = state_17916;
var statearr_17938_18000 = state_17916__$1;
(statearr_17938_18000[(2)] = inst_17896);

(statearr_17938_18000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (10))){
var inst_17888 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17939_18001 = state_17916__$1;
(statearr_17939_18001[(2)] = inst_17888);

(statearr_17939_18001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (18))){
var inst_17899 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17940_18002 = state_17916__$1;
(statearr_17940_18002[(2)] = inst_17899);

(statearr_17940_18002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (8))){
var inst_17885 = cljs.core.async.close_BANG_.call(null,to);
var state_17916__$1 = state_17916;
var statearr_17941_18003 = state_17916__$1;
(statearr_17941_18003[(2)] = inst_17885);

(statearr_17941_18003[(1)] = (10));


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
});})(c__17391__auto__,jobs,results,process,async))
;
return ((function (switch__17279__auto__,c__17391__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17945[(1)] = (1));

return statearr_17945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17916){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_17916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17946){if((e17946 instanceof Object)){
var ex__17283__auto__ = e17946;
var statearr_17947_18004 = state_17916;
(statearr_17947_18004[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18005 = state_17916;
state_17916 = G__18005;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto__,jobs,results,process,async))
})();
var state__17393__auto__ = (function (){var statearr_17948 = f__17392__auto__.call(null);
(statearr_17948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto__);

return statearr_17948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto__,jobs,results,process,async))
);

return c__17391__auto__;
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18006.length)].join('')));

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
var args18013 = [];
var len__7484__auto___18016 = arguments.length;
var i__7485__auto___18017 = (0);
while(true){
if((i__7485__auto___18017 < len__7484__auto___18016)){
args18013.push((arguments[i__7485__auto___18017]));

var G__18018 = (i__7485__auto___18017 + (1));
i__7485__auto___18017 = G__18018;
continue;
} else {
}
break;
}

var G__18015 = args18013.length;
switch (G__18015) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18013.length)].join('')));

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
var args18020 = [];
var len__7484__auto___18073 = arguments.length;
var i__7485__auto___18074 = (0);
while(true){
if((i__7485__auto___18074 < len__7484__auto___18073)){
args18020.push((arguments[i__7485__auto___18074]));

var G__18075 = (i__7485__auto___18074 + (1));
i__7485__auto___18074 = G__18075;
continue;
} else {
}
break;
}

var G__18022 = args18020.length;
switch (G__18022) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18020.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17391__auto___18077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___18077,tc,fc){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___18077,tc,fc){
return (function (state_18048){
var state_val_18049 = (state_18048[(1)]);
if((state_val_18049 === (7))){
var inst_18044 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18050_18078 = state_18048__$1;
(statearr_18050_18078[(2)] = inst_18044);

(statearr_18050_18078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (1))){
var state_18048__$1 = state_18048;
var statearr_18051_18079 = state_18048__$1;
(statearr_18051_18079[(2)] = null);

(statearr_18051_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (4))){
var inst_18025 = (state_18048[(7)]);
var inst_18025__$1 = (state_18048[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var state_18048__$1 = (function (){var statearr_18052 = state_18048;
(statearr_18052[(7)] = inst_18025__$1);

return statearr_18052;
})();
if(cljs.core.truth_(inst_18026)){
var statearr_18053_18080 = state_18048__$1;
(statearr_18053_18080[(1)] = (5));

} else {
var statearr_18054_18081 = state_18048__$1;
(statearr_18054_18081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (13))){
var state_18048__$1 = state_18048;
var statearr_18055_18082 = state_18048__$1;
(statearr_18055_18082[(2)] = null);

(statearr_18055_18082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (6))){
var inst_18025 = (state_18048[(7)]);
var inst_18031 = p.call(null,inst_18025);
var state_18048__$1 = state_18048;
if(cljs.core.truth_(inst_18031)){
var statearr_18056_18083 = state_18048__$1;
(statearr_18056_18083[(1)] = (9));

} else {
var statearr_18057_18084 = state_18048__$1;
(statearr_18057_18084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (3))){
var inst_18046 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18048__$1,inst_18046);
} else {
if((state_val_18049 === (12))){
var state_18048__$1 = state_18048;
var statearr_18058_18085 = state_18048__$1;
(statearr_18058_18085[(2)] = null);

(statearr_18058_18085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (2))){
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18048__$1,(4),ch);
} else {
if((state_val_18049 === (11))){
var inst_18025 = (state_18048[(7)]);
var inst_18035 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18048__$1,(8),inst_18035,inst_18025);
} else {
if((state_val_18049 === (9))){
var state_18048__$1 = state_18048;
var statearr_18059_18086 = state_18048__$1;
(statearr_18059_18086[(2)] = tc);

(statearr_18059_18086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (5))){
var inst_18028 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18029 = cljs.core.async.close_BANG_.call(null,fc);
var state_18048__$1 = (function (){var statearr_18060 = state_18048;
(statearr_18060[(8)] = inst_18028);

return statearr_18060;
})();
var statearr_18061_18087 = state_18048__$1;
(statearr_18061_18087[(2)] = inst_18029);

(statearr_18061_18087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (14))){
var inst_18042 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18062_18088 = state_18048__$1;
(statearr_18062_18088[(2)] = inst_18042);

(statearr_18062_18088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (10))){
var state_18048__$1 = state_18048;
var statearr_18063_18089 = state_18048__$1;
(statearr_18063_18089[(2)] = fc);

(statearr_18063_18089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18049 === (8))){
var inst_18037 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
if(cljs.core.truth_(inst_18037)){
var statearr_18064_18090 = state_18048__$1;
(statearr_18064_18090[(1)] = (12));

} else {
var statearr_18065_18091 = state_18048__$1;
(statearr_18065_18091[(1)] = (13));

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
});})(c__17391__auto___18077,tc,fc))
;
return ((function (switch__17279__auto__,c__17391__auto___18077,tc,fc){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18069 = [null,null,null,null,null,null,null,null,null];
(statearr_18069[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18069[(1)] = (1));

return statearr_18069;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18048){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_18048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18070){if((e18070 instanceof Object)){
var ex__17283__auto__ = e18070;
var statearr_18071_18092 = state_18048;
(statearr_18071_18092[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18093 = state_18048;
state_18048 = G__18093;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___18077,tc,fc))
})();
var state__17393__auto__ = (function (){var statearr_18072 = f__17392__auto__.call(null);
(statearr_18072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___18077);

return statearr_18072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___18077,tc,fc))
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
var c__17391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto__){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto__){
return (function (state_18157){
var state_val_18158 = (state_18157[(1)]);
if((state_val_18158 === (7))){
var inst_18153 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18159_18180 = state_18157__$1;
(statearr_18159_18180[(2)] = inst_18153);

(statearr_18159_18180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (1))){
var inst_18137 = init;
var state_18157__$1 = (function (){var statearr_18160 = state_18157;
(statearr_18160[(7)] = inst_18137);

return statearr_18160;
})();
var statearr_18161_18181 = state_18157__$1;
(statearr_18161_18181[(2)] = null);

(statearr_18161_18181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (4))){
var inst_18140 = (state_18157[(8)]);
var inst_18140__$1 = (state_18157[(2)]);
var inst_18141 = (inst_18140__$1 == null);
var state_18157__$1 = (function (){var statearr_18162 = state_18157;
(statearr_18162[(8)] = inst_18140__$1);

return statearr_18162;
})();
if(cljs.core.truth_(inst_18141)){
var statearr_18163_18182 = state_18157__$1;
(statearr_18163_18182[(1)] = (5));

} else {
var statearr_18164_18183 = state_18157__$1;
(statearr_18164_18183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (6))){
var inst_18137 = (state_18157[(7)]);
var inst_18144 = (state_18157[(9)]);
var inst_18140 = (state_18157[(8)]);
var inst_18144__$1 = f.call(null,inst_18137,inst_18140);
var inst_18145 = cljs.core.reduced_QMARK_.call(null,inst_18144__$1);
var state_18157__$1 = (function (){var statearr_18165 = state_18157;
(statearr_18165[(9)] = inst_18144__$1);

return statearr_18165;
})();
if(inst_18145){
var statearr_18166_18184 = state_18157__$1;
(statearr_18166_18184[(1)] = (8));

} else {
var statearr_18167_18185 = state_18157__$1;
(statearr_18167_18185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (3))){
var inst_18155 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18157__$1,inst_18155);
} else {
if((state_val_18158 === (2))){
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18157__$1,(4),ch);
} else {
if((state_val_18158 === (9))){
var inst_18144 = (state_18157[(9)]);
var inst_18137 = inst_18144;
var state_18157__$1 = (function (){var statearr_18168 = state_18157;
(statearr_18168[(7)] = inst_18137);

return statearr_18168;
})();
var statearr_18169_18186 = state_18157__$1;
(statearr_18169_18186[(2)] = null);

(statearr_18169_18186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (5))){
var inst_18137 = (state_18157[(7)]);
var state_18157__$1 = state_18157;
var statearr_18170_18187 = state_18157__$1;
(statearr_18170_18187[(2)] = inst_18137);

(statearr_18170_18187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (10))){
var inst_18151 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18171_18188 = state_18157__$1;
(statearr_18171_18188[(2)] = inst_18151);

(statearr_18171_18188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (8))){
var inst_18144 = (state_18157[(9)]);
var inst_18147 = cljs.core.deref.call(null,inst_18144);
var state_18157__$1 = state_18157;
var statearr_18172_18189 = state_18157__$1;
(statearr_18172_18189[(2)] = inst_18147);

(statearr_18172_18189[(1)] = (10));


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
});})(c__17391__auto__))
;
return ((function (switch__17279__auto__,c__17391__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17280__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17280__auto____0 = (function (){
var statearr_18176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18176[(0)] = cljs$core$async$reduce_$_state_machine__17280__auto__);

(statearr_18176[(1)] = (1));

return statearr_18176;
});
var cljs$core$async$reduce_$_state_machine__17280__auto____1 = (function (state_18157){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_18157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18177){if((e18177 instanceof Object)){
var ex__17283__auto__ = e18177;
var statearr_18178_18190 = state_18157;
(statearr_18178_18190[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18191 = state_18157;
state_18157 = G__18191;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17280__auto__ = function(state_18157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17280__auto____1.call(this,state_18157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17280__auto____0;
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17280__auto____1;
return cljs$core$async$reduce_$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto__))
})();
var state__17393__auto__ = (function (){var statearr_18179 = f__17392__auto__.call(null);
(statearr_18179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto__);

return statearr_18179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto__))
);

return c__17391__auto__;
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
var args18192 = [];
var len__7484__auto___18244 = arguments.length;
var i__7485__auto___18245 = (0);
while(true){
if((i__7485__auto___18245 < len__7484__auto___18244)){
args18192.push((arguments[i__7485__auto___18245]));

var G__18246 = (i__7485__auto___18245 + (1));
i__7485__auto___18245 = G__18246;
continue;
} else {
}
break;
}

var G__18194 = args18192.length;
switch (G__18194) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18192.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto__){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto__){
return (function (state_18219){
var state_val_18220 = (state_18219[(1)]);
if((state_val_18220 === (7))){
var inst_18201 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
var statearr_18221_18248 = state_18219__$1;
(statearr_18221_18248[(2)] = inst_18201);

(statearr_18221_18248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (1))){
var inst_18195 = cljs.core.seq.call(null,coll);
var inst_18196 = inst_18195;
var state_18219__$1 = (function (){var statearr_18222 = state_18219;
(statearr_18222[(7)] = inst_18196);

return statearr_18222;
})();
var statearr_18223_18249 = state_18219__$1;
(statearr_18223_18249[(2)] = null);

(statearr_18223_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (4))){
var inst_18196 = (state_18219[(7)]);
var inst_18199 = cljs.core.first.call(null,inst_18196);
var state_18219__$1 = state_18219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18219__$1,(7),ch,inst_18199);
} else {
if((state_val_18220 === (13))){
var inst_18213 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
var statearr_18224_18250 = state_18219__$1;
(statearr_18224_18250[(2)] = inst_18213);

(statearr_18224_18250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (6))){
var inst_18204 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
if(cljs.core.truth_(inst_18204)){
var statearr_18225_18251 = state_18219__$1;
(statearr_18225_18251[(1)] = (8));

} else {
var statearr_18226_18252 = state_18219__$1;
(statearr_18226_18252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (3))){
var inst_18217 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18219__$1,inst_18217);
} else {
if((state_val_18220 === (12))){
var state_18219__$1 = state_18219;
var statearr_18227_18253 = state_18219__$1;
(statearr_18227_18253[(2)] = null);

(statearr_18227_18253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (2))){
var inst_18196 = (state_18219[(7)]);
var state_18219__$1 = state_18219;
if(cljs.core.truth_(inst_18196)){
var statearr_18228_18254 = state_18219__$1;
(statearr_18228_18254[(1)] = (4));

} else {
var statearr_18229_18255 = state_18219__$1;
(statearr_18229_18255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (11))){
var inst_18210 = cljs.core.async.close_BANG_.call(null,ch);
var state_18219__$1 = state_18219;
var statearr_18230_18256 = state_18219__$1;
(statearr_18230_18256[(2)] = inst_18210);

(statearr_18230_18256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (9))){
var state_18219__$1 = state_18219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18231_18257 = state_18219__$1;
(statearr_18231_18257[(1)] = (11));

} else {
var statearr_18232_18258 = state_18219__$1;
(statearr_18232_18258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (5))){
var inst_18196 = (state_18219[(7)]);
var state_18219__$1 = state_18219;
var statearr_18233_18259 = state_18219__$1;
(statearr_18233_18259[(2)] = inst_18196);

(statearr_18233_18259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (10))){
var inst_18215 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
var statearr_18234_18260 = state_18219__$1;
(statearr_18234_18260[(2)] = inst_18215);

(statearr_18234_18260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (8))){
var inst_18196 = (state_18219[(7)]);
var inst_18206 = cljs.core.next.call(null,inst_18196);
var inst_18196__$1 = inst_18206;
var state_18219__$1 = (function (){var statearr_18235 = state_18219;
(statearr_18235[(7)] = inst_18196__$1);

return statearr_18235;
})();
var statearr_18236_18261 = state_18219__$1;
(statearr_18236_18261[(2)] = null);

(statearr_18236_18261[(1)] = (2));


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
});})(c__17391__auto__))
;
return ((function (switch__17279__auto__,c__17391__auto__){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18240 = [null,null,null,null,null,null,null,null];
(statearr_18240[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18240[(1)] = (1));

return statearr_18240;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18219){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_18219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18241){if((e18241 instanceof Object)){
var ex__17283__auto__ = e18241;
var statearr_18242_18262 = state_18219;
(statearr_18242_18262[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18263 = state_18219;
state_18219 = G__18263;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto__))
})();
var state__17393__auto__ = (function (){var statearr_18243 = f__17392__auto__.call(null);
(statearr_18243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto__);

return statearr_18243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto__))
);

return c__17391__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18489 = (function (mult,ch,cs,meta18490){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18490 = meta18490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18491,meta18490__$1){
var self__ = this;
var _18491__$1 = this;
return (new cljs.core.async.t_cljs$core$async18489(self__.mult,self__.ch,self__.cs,meta18490__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18491){
var self__ = this;
var _18491__$1 = this;
return self__.meta18490;
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18490","meta18490",395476802,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18489";

cljs.core.async.t_cljs$core$async18489.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18489");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18489 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18489(mult__$1,ch__$1,cs__$1,meta18490){
return (new cljs.core.async.t_cljs$core$async18489(mult__$1,ch__$1,cs__$1,meta18490));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18489(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17391__auto___18714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___18714,cs,m,dchan,dctr,done){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___18714,cs,m,dchan,dctr,done){
return (function (state_18626){
var state_val_18627 = (state_18626[(1)]);
if((state_val_18627 === (7))){
var inst_18622 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18628_18715 = state_18626__$1;
(statearr_18628_18715[(2)] = inst_18622);

(statearr_18628_18715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (20))){
var inst_18525 = (state_18626[(7)]);
var inst_18537 = cljs.core.first.call(null,inst_18525);
var inst_18538 = cljs.core.nth.call(null,inst_18537,(0),null);
var inst_18539 = cljs.core.nth.call(null,inst_18537,(1),null);
var state_18626__$1 = (function (){var statearr_18629 = state_18626;
(statearr_18629[(8)] = inst_18538);

return statearr_18629;
})();
if(cljs.core.truth_(inst_18539)){
var statearr_18630_18716 = state_18626__$1;
(statearr_18630_18716[(1)] = (22));

} else {
var statearr_18631_18717 = state_18626__$1;
(statearr_18631_18717[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (27))){
var inst_18494 = (state_18626[(9)]);
var inst_18567 = (state_18626[(10)]);
var inst_18574 = (state_18626[(11)]);
var inst_18569 = (state_18626[(12)]);
var inst_18574__$1 = cljs.core._nth.call(null,inst_18567,inst_18569);
var inst_18575 = cljs.core.async.put_BANG_.call(null,inst_18574__$1,inst_18494,done);
var state_18626__$1 = (function (){var statearr_18632 = state_18626;
(statearr_18632[(11)] = inst_18574__$1);

return statearr_18632;
})();
if(cljs.core.truth_(inst_18575)){
var statearr_18633_18718 = state_18626__$1;
(statearr_18633_18718[(1)] = (30));

} else {
var statearr_18634_18719 = state_18626__$1;
(statearr_18634_18719[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (1))){
var state_18626__$1 = state_18626;
var statearr_18635_18720 = state_18626__$1;
(statearr_18635_18720[(2)] = null);

(statearr_18635_18720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (24))){
var inst_18525 = (state_18626[(7)]);
var inst_18544 = (state_18626[(2)]);
var inst_18545 = cljs.core.next.call(null,inst_18525);
var inst_18503 = inst_18545;
var inst_18504 = null;
var inst_18505 = (0);
var inst_18506 = (0);
var state_18626__$1 = (function (){var statearr_18636 = state_18626;
(statearr_18636[(13)] = inst_18506);

(statearr_18636[(14)] = inst_18505);

(statearr_18636[(15)] = inst_18503);

(statearr_18636[(16)] = inst_18544);

(statearr_18636[(17)] = inst_18504);

return statearr_18636;
})();
var statearr_18637_18721 = state_18626__$1;
(statearr_18637_18721[(2)] = null);

(statearr_18637_18721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (39))){
var state_18626__$1 = state_18626;
var statearr_18641_18722 = state_18626__$1;
(statearr_18641_18722[(2)] = null);

(statearr_18641_18722[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (4))){
var inst_18494 = (state_18626[(9)]);
var inst_18494__$1 = (state_18626[(2)]);
var inst_18495 = (inst_18494__$1 == null);
var state_18626__$1 = (function (){var statearr_18642 = state_18626;
(statearr_18642[(9)] = inst_18494__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18495)){
var statearr_18643_18723 = state_18626__$1;
(statearr_18643_18723[(1)] = (5));

} else {
var statearr_18644_18724 = state_18626__$1;
(statearr_18644_18724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (15))){
var inst_18506 = (state_18626[(13)]);
var inst_18505 = (state_18626[(14)]);
var inst_18503 = (state_18626[(15)]);
var inst_18504 = (state_18626[(17)]);
var inst_18521 = (state_18626[(2)]);
var inst_18522 = (inst_18506 + (1));
var tmp18638 = inst_18505;
var tmp18639 = inst_18503;
var tmp18640 = inst_18504;
var inst_18503__$1 = tmp18639;
var inst_18504__$1 = tmp18640;
var inst_18505__$1 = tmp18638;
var inst_18506__$1 = inst_18522;
var state_18626__$1 = (function (){var statearr_18645 = state_18626;
(statearr_18645[(18)] = inst_18521);

(statearr_18645[(13)] = inst_18506__$1);

(statearr_18645[(14)] = inst_18505__$1);

(statearr_18645[(15)] = inst_18503__$1);

(statearr_18645[(17)] = inst_18504__$1);

return statearr_18645;
})();
var statearr_18646_18725 = state_18626__$1;
(statearr_18646_18725[(2)] = null);

(statearr_18646_18725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (21))){
var inst_18548 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18650_18726 = state_18626__$1;
(statearr_18650_18726[(2)] = inst_18548);

(statearr_18650_18726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (31))){
var inst_18574 = (state_18626[(11)]);
var inst_18578 = done.call(null,null);
var inst_18579 = cljs.core.async.untap_STAR_.call(null,m,inst_18574);
var state_18626__$1 = (function (){var statearr_18651 = state_18626;
(statearr_18651[(19)] = inst_18578);

return statearr_18651;
})();
var statearr_18652_18727 = state_18626__$1;
(statearr_18652_18727[(2)] = inst_18579);

(statearr_18652_18727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (32))){
var inst_18566 = (state_18626[(20)]);
var inst_18567 = (state_18626[(10)]);
var inst_18568 = (state_18626[(21)]);
var inst_18569 = (state_18626[(12)]);
var inst_18581 = (state_18626[(2)]);
var inst_18582 = (inst_18569 + (1));
var tmp18647 = inst_18566;
var tmp18648 = inst_18567;
var tmp18649 = inst_18568;
var inst_18566__$1 = tmp18647;
var inst_18567__$1 = tmp18648;
var inst_18568__$1 = tmp18649;
var inst_18569__$1 = inst_18582;
var state_18626__$1 = (function (){var statearr_18653 = state_18626;
(statearr_18653[(22)] = inst_18581);

(statearr_18653[(20)] = inst_18566__$1);

(statearr_18653[(10)] = inst_18567__$1);

(statearr_18653[(21)] = inst_18568__$1);

(statearr_18653[(12)] = inst_18569__$1);

return statearr_18653;
})();
var statearr_18654_18728 = state_18626__$1;
(statearr_18654_18728[(2)] = null);

(statearr_18654_18728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (40))){
var inst_18594 = (state_18626[(23)]);
var inst_18598 = done.call(null,null);
var inst_18599 = cljs.core.async.untap_STAR_.call(null,m,inst_18594);
var state_18626__$1 = (function (){var statearr_18655 = state_18626;
(statearr_18655[(24)] = inst_18598);

return statearr_18655;
})();
var statearr_18656_18729 = state_18626__$1;
(statearr_18656_18729[(2)] = inst_18599);

(statearr_18656_18729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (33))){
var inst_18585 = (state_18626[(25)]);
var inst_18587 = cljs.core.chunked_seq_QMARK_.call(null,inst_18585);
var state_18626__$1 = state_18626;
if(inst_18587){
var statearr_18657_18730 = state_18626__$1;
(statearr_18657_18730[(1)] = (36));

} else {
var statearr_18658_18731 = state_18626__$1;
(statearr_18658_18731[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (13))){
var inst_18515 = (state_18626[(26)]);
var inst_18518 = cljs.core.async.close_BANG_.call(null,inst_18515);
var state_18626__$1 = state_18626;
var statearr_18659_18732 = state_18626__$1;
(statearr_18659_18732[(2)] = inst_18518);

(statearr_18659_18732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (22))){
var inst_18538 = (state_18626[(8)]);
var inst_18541 = cljs.core.async.close_BANG_.call(null,inst_18538);
var state_18626__$1 = state_18626;
var statearr_18660_18733 = state_18626__$1;
(statearr_18660_18733[(2)] = inst_18541);

(statearr_18660_18733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (36))){
var inst_18585 = (state_18626[(25)]);
var inst_18589 = cljs.core.chunk_first.call(null,inst_18585);
var inst_18590 = cljs.core.chunk_rest.call(null,inst_18585);
var inst_18591 = cljs.core.count.call(null,inst_18589);
var inst_18566 = inst_18590;
var inst_18567 = inst_18589;
var inst_18568 = inst_18591;
var inst_18569 = (0);
var state_18626__$1 = (function (){var statearr_18661 = state_18626;
(statearr_18661[(20)] = inst_18566);

(statearr_18661[(10)] = inst_18567);

(statearr_18661[(21)] = inst_18568);

(statearr_18661[(12)] = inst_18569);

return statearr_18661;
})();
var statearr_18662_18734 = state_18626__$1;
(statearr_18662_18734[(2)] = null);

(statearr_18662_18734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (41))){
var inst_18585 = (state_18626[(25)]);
var inst_18601 = (state_18626[(2)]);
var inst_18602 = cljs.core.next.call(null,inst_18585);
var inst_18566 = inst_18602;
var inst_18567 = null;
var inst_18568 = (0);
var inst_18569 = (0);
var state_18626__$1 = (function (){var statearr_18663 = state_18626;
(statearr_18663[(20)] = inst_18566);

(statearr_18663[(10)] = inst_18567);

(statearr_18663[(27)] = inst_18601);

(statearr_18663[(21)] = inst_18568);

(statearr_18663[(12)] = inst_18569);

return statearr_18663;
})();
var statearr_18664_18735 = state_18626__$1;
(statearr_18664_18735[(2)] = null);

(statearr_18664_18735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (43))){
var state_18626__$1 = state_18626;
var statearr_18665_18736 = state_18626__$1;
(statearr_18665_18736[(2)] = null);

(statearr_18665_18736[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (29))){
var inst_18610 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18666_18737 = state_18626__$1;
(statearr_18666_18737[(2)] = inst_18610);

(statearr_18666_18737[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (44))){
var inst_18619 = (state_18626[(2)]);
var state_18626__$1 = (function (){var statearr_18667 = state_18626;
(statearr_18667[(28)] = inst_18619);

return statearr_18667;
})();
var statearr_18668_18738 = state_18626__$1;
(statearr_18668_18738[(2)] = null);

(statearr_18668_18738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (6))){
var inst_18558 = (state_18626[(29)]);
var inst_18557 = cljs.core.deref.call(null,cs);
var inst_18558__$1 = cljs.core.keys.call(null,inst_18557);
var inst_18559 = cljs.core.count.call(null,inst_18558__$1);
var inst_18560 = cljs.core.reset_BANG_.call(null,dctr,inst_18559);
var inst_18565 = cljs.core.seq.call(null,inst_18558__$1);
var inst_18566 = inst_18565;
var inst_18567 = null;
var inst_18568 = (0);
var inst_18569 = (0);
var state_18626__$1 = (function (){var statearr_18669 = state_18626;
(statearr_18669[(20)] = inst_18566);

(statearr_18669[(10)] = inst_18567);

(statearr_18669[(29)] = inst_18558__$1);

(statearr_18669[(30)] = inst_18560);

(statearr_18669[(21)] = inst_18568);

(statearr_18669[(12)] = inst_18569);

return statearr_18669;
})();
var statearr_18670_18739 = state_18626__$1;
(statearr_18670_18739[(2)] = null);

(statearr_18670_18739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (28))){
var inst_18566 = (state_18626[(20)]);
var inst_18585 = (state_18626[(25)]);
var inst_18585__$1 = cljs.core.seq.call(null,inst_18566);
var state_18626__$1 = (function (){var statearr_18671 = state_18626;
(statearr_18671[(25)] = inst_18585__$1);

return statearr_18671;
})();
if(inst_18585__$1){
var statearr_18672_18740 = state_18626__$1;
(statearr_18672_18740[(1)] = (33));

} else {
var statearr_18673_18741 = state_18626__$1;
(statearr_18673_18741[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (25))){
var inst_18568 = (state_18626[(21)]);
var inst_18569 = (state_18626[(12)]);
var inst_18571 = (inst_18569 < inst_18568);
var inst_18572 = inst_18571;
var state_18626__$1 = state_18626;
if(cljs.core.truth_(inst_18572)){
var statearr_18674_18742 = state_18626__$1;
(statearr_18674_18742[(1)] = (27));

} else {
var statearr_18675_18743 = state_18626__$1;
(statearr_18675_18743[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (34))){
var state_18626__$1 = state_18626;
var statearr_18676_18744 = state_18626__$1;
(statearr_18676_18744[(2)] = null);

(statearr_18676_18744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (17))){
var state_18626__$1 = state_18626;
var statearr_18677_18745 = state_18626__$1;
(statearr_18677_18745[(2)] = null);

(statearr_18677_18745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (3))){
var inst_18624 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18626__$1,inst_18624);
} else {
if((state_val_18627 === (12))){
var inst_18553 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18678_18746 = state_18626__$1;
(statearr_18678_18746[(2)] = inst_18553);

(statearr_18678_18746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (2))){
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18626__$1,(4),ch);
} else {
if((state_val_18627 === (23))){
var state_18626__$1 = state_18626;
var statearr_18679_18747 = state_18626__$1;
(statearr_18679_18747[(2)] = null);

(statearr_18679_18747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (35))){
var inst_18608 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18680_18748 = state_18626__$1;
(statearr_18680_18748[(2)] = inst_18608);

(statearr_18680_18748[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (19))){
var inst_18525 = (state_18626[(7)]);
var inst_18529 = cljs.core.chunk_first.call(null,inst_18525);
var inst_18530 = cljs.core.chunk_rest.call(null,inst_18525);
var inst_18531 = cljs.core.count.call(null,inst_18529);
var inst_18503 = inst_18530;
var inst_18504 = inst_18529;
var inst_18505 = inst_18531;
var inst_18506 = (0);
var state_18626__$1 = (function (){var statearr_18681 = state_18626;
(statearr_18681[(13)] = inst_18506);

(statearr_18681[(14)] = inst_18505);

(statearr_18681[(15)] = inst_18503);

(statearr_18681[(17)] = inst_18504);

return statearr_18681;
})();
var statearr_18682_18749 = state_18626__$1;
(statearr_18682_18749[(2)] = null);

(statearr_18682_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (11))){
var inst_18525 = (state_18626[(7)]);
var inst_18503 = (state_18626[(15)]);
var inst_18525__$1 = cljs.core.seq.call(null,inst_18503);
var state_18626__$1 = (function (){var statearr_18683 = state_18626;
(statearr_18683[(7)] = inst_18525__$1);

return statearr_18683;
})();
if(inst_18525__$1){
var statearr_18684_18750 = state_18626__$1;
(statearr_18684_18750[(1)] = (16));

} else {
var statearr_18685_18751 = state_18626__$1;
(statearr_18685_18751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (9))){
var inst_18555 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18686_18752 = state_18626__$1;
(statearr_18686_18752[(2)] = inst_18555);

(statearr_18686_18752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (5))){
var inst_18501 = cljs.core.deref.call(null,cs);
var inst_18502 = cljs.core.seq.call(null,inst_18501);
var inst_18503 = inst_18502;
var inst_18504 = null;
var inst_18505 = (0);
var inst_18506 = (0);
var state_18626__$1 = (function (){var statearr_18687 = state_18626;
(statearr_18687[(13)] = inst_18506);

(statearr_18687[(14)] = inst_18505);

(statearr_18687[(15)] = inst_18503);

(statearr_18687[(17)] = inst_18504);

return statearr_18687;
})();
var statearr_18688_18753 = state_18626__$1;
(statearr_18688_18753[(2)] = null);

(statearr_18688_18753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (14))){
var state_18626__$1 = state_18626;
var statearr_18689_18754 = state_18626__$1;
(statearr_18689_18754[(2)] = null);

(statearr_18689_18754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (45))){
var inst_18616 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18690_18755 = state_18626__$1;
(statearr_18690_18755[(2)] = inst_18616);

(statearr_18690_18755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (26))){
var inst_18558 = (state_18626[(29)]);
var inst_18612 = (state_18626[(2)]);
var inst_18613 = cljs.core.seq.call(null,inst_18558);
var state_18626__$1 = (function (){var statearr_18691 = state_18626;
(statearr_18691[(31)] = inst_18612);

return statearr_18691;
})();
if(inst_18613){
var statearr_18692_18756 = state_18626__$1;
(statearr_18692_18756[(1)] = (42));

} else {
var statearr_18693_18757 = state_18626__$1;
(statearr_18693_18757[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (16))){
var inst_18525 = (state_18626[(7)]);
var inst_18527 = cljs.core.chunked_seq_QMARK_.call(null,inst_18525);
var state_18626__$1 = state_18626;
if(inst_18527){
var statearr_18694_18758 = state_18626__$1;
(statearr_18694_18758[(1)] = (19));

} else {
var statearr_18695_18759 = state_18626__$1;
(statearr_18695_18759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (38))){
var inst_18605 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18696_18760 = state_18626__$1;
(statearr_18696_18760[(2)] = inst_18605);

(statearr_18696_18760[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (30))){
var state_18626__$1 = state_18626;
var statearr_18697_18761 = state_18626__$1;
(statearr_18697_18761[(2)] = null);

(statearr_18697_18761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (10))){
var inst_18506 = (state_18626[(13)]);
var inst_18504 = (state_18626[(17)]);
var inst_18514 = cljs.core._nth.call(null,inst_18504,inst_18506);
var inst_18515 = cljs.core.nth.call(null,inst_18514,(0),null);
var inst_18516 = cljs.core.nth.call(null,inst_18514,(1),null);
var state_18626__$1 = (function (){var statearr_18698 = state_18626;
(statearr_18698[(26)] = inst_18515);

return statearr_18698;
})();
if(cljs.core.truth_(inst_18516)){
var statearr_18699_18762 = state_18626__$1;
(statearr_18699_18762[(1)] = (13));

} else {
var statearr_18700_18763 = state_18626__$1;
(statearr_18700_18763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (18))){
var inst_18551 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18701_18764 = state_18626__$1;
(statearr_18701_18764[(2)] = inst_18551);

(statearr_18701_18764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (42))){
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18626__$1,(45),dchan);
} else {
if((state_val_18627 === (37))){
var inst_18494 = (state_18626[(9)]);
var inst_18585 = (state_18626[(25)]);
var inst_18594 = (state_18626[(23)]);
var inst_18594__$1 = cljs.core.first.call(null,inst_18585);
var inst_18595 = cljs.core.async.put_BANG_.call(null,inst_18594__$1,inst_18494,done);
var state_18626__$1 = (function (){var statearr_18702 = state_18626;
(statearr_18702[(23)] = inst_18594__$1);

return statearr_18702;
})();
if(cljs.core.truth_(inst_18595)){
var statearr_18703_18765 = state_18626__$1;
(statearr_18703_18765[(1)] = (39));

} else {
var statearr_18704_18766 = state_18626__$1;
(statearr_18704_18766[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (8))){
var inst_18506 = (state_18626[(13)]);
var inst_18505 = (state_18626[(14)]);
var inst_18508 = (inst_18506 < inst_18505);
var inst_18509 = inst_18508;
var state_18626__$1 = state_18626;
if(cljs.core.truth_(inst_18509)){
var statearr_18705_18767 = state_18626__$1;
(statearr_18705_18767[(1)] = (10));

} else {
var statearr_18706_18768 = state_18626__$1;
(statearr_18706_18768[(1)] = (11));

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
});})(c__17391__auto___18714,cs,m,dchan,dctr,done))
;
return ((function (switch__17279__auto__,c__17391__auto___18714,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17280__auto__ = null;
var cljs$core$async$mult_$_state_machine__17280__auto____0 = (function (){
var statearr_18710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18710[(0)] = cljs$core$async$mult_$_state_machine__17280__auto__);

(statearr_18710[(1)] = (1));

return statearr_18710;
});
var cljs$core$async$mult_$_state_machine__17280__auto____1 = (function (state_18626){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_18626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18711){if((e18711 instanceof Object)){
var ex__17283__auto__ = e18711;
var statearr_18712_18769 = state_18626;
(statearr_18712_18769[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18770 = state_18626;
state_18626 = G__18770;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17280__auto__ = function(state_18626){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17280__auto____1.call(this,state_18626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17280__auto____0;
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17280__auto____1;
return cljs$core$async$mult_$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___18714,cs,m,dchan,dctr,done))
})();
var state__17393__auto__ = (function (){var statearr_18713 = f__17392__auto__.call(null);
(statearr_18713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___18714);

return statearr_18713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___18714,cs,m,dchan,dctr,done))
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
var args18771 = [];
var len__7484__auto___18774 = arguments.length;
var i__7485__auto___18775 = (0);
while(true){
if((i__7485__auto___18775 < len__7484__auto___18774)){
args18771.push((arguments[i__7485__auto___18775]));

var G__18776 = (i__7485__auto___18775 + (1));
i__7485__auto___18775 = G__18776;
continue;
} else {
}
break;
}

var G__18773 = args18771.length;
switch (G__18773) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18771.length)].join('')));

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
var len__7484__auto___18788 = arguments.length;
var i__7485__auto___18789 = (0);
while(true){
if((i__7485__auto___18789 < len__7484__auto___18788)){
args__7491__auto__.push((arguments[i__7485__auto___18789]));

var G__18790 = (i__7485__auto___18789 + (1));
i__7485__auto___18789 = G__18790;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18782){
var map__18783 = p__18782;
var map__18783__$1 = ((((!((map__18783 == null)))?((((map__18783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18783):map__18783);
var opts = map__18783__$1;
var statearr_18785_18791 = state;
(statearr_18785_18791[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18783,map__18783__$1,opts){
return (function (val){
var statearr_18786_18792 = state;
(statearr_18786_18792[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18783,map__18783__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18787_18793 = state;
(statearr_18787_18793[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18778){
var G__18779 = cljs.core.first.call(null,seq18778);
var seq18778__$1 = cljs.core.next.call(null,seq18778);
var G__18780 = cljs.core.first.call(null,seq18778__$1);
var seq18778__$2 = cljs.core.next.call(null,seq18778__$1);
var G__18781 = cljs.core.first.call(null,seq18778__$2);
var seq18778__$3 = cljs.core.next.call(null,seq18778__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18779,G__18780,G__18781,seq18778__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18959 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18960){
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
this.meta18960 = meta18960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18961,meta18960__$1){
var self__ = this;
var _18961__$1 = this;
return (new cljs.core.async.t_cljs$core$async18959(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18960__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18961){
var self__ = this;
var _18961__$1 = this;
return self__.meta18960;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18959.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18960","meta18960",-803867352,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18959";

cljs.core.async.t_cljs$core$async18959.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18959");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18959 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18959(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18960){
return (new cljs.core.async.t_cljs$core$async18959(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18960));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18959(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17391__auto___19124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19061){
var state_val_19062 = (state_19061[(1)]);
if((state_val_19062 === (7))){
var inst_18977 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
var statearr_19063_19125 = state_19061__$1;
(statearr_19063_19125[(2)] = inst_18977);

(statearr_19063_19125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (20))){
var inst_18989 = (state_19061[(7)]);
var state_19061__$1 = state_19061;
var statearr_19064_19126 = state_19061__$1;
(statearr_19064_19126[(2)] = inst_18989);

(statearr_19064_19126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (27))){
var state_19061__$1 = state_19061;
var statearr_19065_19127 = state_19061__$1;
(statearr_19065_19127[(2)] = null);

(statearr_19065_19127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (1))){
var inst_18965 = (state_19061[(8)]);
var inst_18965__$1 = calc_state.call(null);
var inst_18967 = (inst_18965__$1 == null);
var inst_18968 = cljs.core.not.call(null,inst_18967);
var state_19061__$1 = (function (){var statearr_19066 = state_19061;
(statearr_19066[(8)] = inst_18965__$1);

return statearr_19066;
})();
if(inst_18968){
var statearr_19067_19128 = state_19061__$1;
(statearr_19067_19128[(1)] = (2));

} else {
var statearr_19068_19129 = state_19061__$1;
(statearr_19068_19129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (24))){
var inst_19012 = (state_19061[(9)]);
var inst_19021 = (state_19061[(10)]);
var inst_19035 = (state_19061[(11)]);
var inst_19035__$1 = inst_19012.call(null,inst_19021);
var state_19061__$1 = (function (){var statearr_19069 = state_19061;
(statearr_19069[(11)] = inst_19035__$1);

return statearr_19069;
})();
if(cljs.core.truth_(inst_19035__$1)){
var statearr_19070_19130 = state_19061__$1;
(statearr_19070_19130[(1)] = (29));

} else {
var statearr_19071_19131 = state_19061__$1;
(statearr_19071_19131[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (4))){
var inst_18980 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_18980)){
var statearr_19072_19132 = state_19061__$1;
(statearr_19072_19132[(1)] = (8));

} else {
var statearr_19073_19133 = state_19061__$1;
(statearr_19073_19133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (15))){
var inst_19006 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_19006)){
var statearr_19074_19134 = state_19061__$1;
(statearr_19074_19134[(1)] = (19));

} else {
var statearr_19075_19135 = state_19061__$1;
(statearr_19075_19135[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (21))){
var inst_19011 = (state_19061[(12)]);
var inst_19011__$1 = (state_19061[(2)]);
var inst_19012 = cljs.core.get.call(null,inst_19011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19013 = cljs.core.get.call(null,inst_19011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19014 = cljs.core.get.call(null,inst_19011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19061__$1 = (function (){var statearr_19076 = state_19061;
(statearr_19076[(9)] = inst_19012);

(statearr_19076[(12)] = inst_19011__$1);

(statearr_19076[(13)] = inst_19013);

return statearr_19076;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19061__$1,(22),inst_19014);
} else {
if((state_val_19062 === (31))){
var inst_19043 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_19043)){
var statearr_19077_19136 = state_19061__$1;
(statearr_19077_19136[(1)] = (32));

} else {
var statearr_19078_19137 = state_19061__$1;
(statearr_19078_19137[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (32))){
var inst_19020 = (state_19061[(14)]);
var state_19061__$1 = state_19061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19061__$1,(35),out,inst_19020);
} else {
if((state_val_19062 === (33))){
var inst_19011 = (state_19061[(12)]);
var inst_18989 = inst_19011;
var state_19061__$1 = (function (){var statearr_19079 = state_19061;
(statearr_19079[(7)] = inst_18989);

return statearr_19079;
})();
var statearr_19080_19138 = state_19061__$1;
(statearr_19080_19138[(2)] = null);

(statearr_19080_19138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (13))){
var inst_18989 = (state_19061[(7)]);
var inst_18996 = inst_18989.cljs$lang$protocol_mask$partition0$;
var inst_18997 = (inst_18996 & (64));
var inst_18998 = inst_18989.cljs$core$ISeq$;
var inst_18999 = (inst_18997) || (inst_18998);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_18999)){
var statearr_19081_19139 = state_19061__$1;
(statearr_19081_19139[(1)] = (16));

} else {
var statearr_19082_19140 = state_19061__$1;
(statearr_19082_19140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (22))){
var inst_19021 = (state_19061[(10)]);
var inst_19020 = (state_19061[(14)]);
var inst_19019 = (state_19061[(2)]);
var inst_19020__$1 = cljs.core.nth.call(null,inst_19019,(0),null);
var inst_19021__$1 = cljs.core.nth.call(null,inst_19019,(1),null);
var inst_19022 = (inst_19020__$1 == null);
var inst_19023 = cljs.core._EQ_.call(null,inst_19021__$1,change);
var inst_19024 = (inst_19022) || (inst_19023);
var state_19061__$1 = (function (){var statearr_19083 = state_19061;
(statearr_19083[(10)] = inst_19021__$1);

(statearr_19083[(14)] = inst_19020__$1);

return statearr_19083;
})();
if(cljs.core.truth_(inst_19024)){
var statearr_19084_19141 = state_19061__$1;
(statearr_19084_19141[(1)] = (23));

} else {
var statearr_19085_19142 = state_19061__$1;
(statearr_19085_19142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (36))){
var inst_19011 = (state_19061[(12)]);
var inst_18989 = inst_19011;
var state_19061__$1 = (function (){var statearr_19086 = state_19061;
(statearr_19086[(7)] = inst_18989);

return statearr_19086;
})();
var statearr_19087_19143 = state_19061__$1;
(statearr_19087_19143[(2)] = null);

(statearr_19087_19143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (29))){
var inst_19035 = (state_19061[(11)]);
var state_19061__$1 = state_19061;
var statearr_19088_19144 = state_19061__$1;
(statearr_19088_19144[(2)] = inst_19035);

(statearr_19088_19144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (6))){
var state_19061__$1 = state_19061;
var statearr_19089_19145 = state_19061__$1;
(statearr_19089_19145[(2)] = false);

(statearr_19089_19145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (28))){
var inst_19031 = (state_19061[(2)]);
var inst_19032 = calc_state.call(null);
var inst_18989 = inst_19032;
var state_19061__$1 = (function (){var statearr_19090 = state_19061;
(statearr_19090[(7)] = inst_18989);

(statearr_19090[(15)] = inst_19031);

return statearr_19090;
})();
var statearr_19091_19146 = state_19061__$1;
(statearr_19091_19146[(2)] = null);

(statearr_19091_19146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (25))){
var inst_19057 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
var statearr_19092_19147 = state_19061__$1;
(statearr_19092_19147[(2)] = inst_19057);

(statearr_19092_19147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (34))){
var inst_19055 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
var statearr_19093_19148 = state_19061__$1;
(statearr_19093_19148[(2)] = inst_19055);

(statearr_19093_19148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (17))){
var state_19061__$1 = state_19061;
var statearr_19094_19149 = state_19061__$1;
(statearr_19094_19149[(2)] = false);

(statearr_19094_19149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (3))){
var state_19061__$1 = state_19061;
var statearr_19095_19150 = state_19061__$1;
(statearr_19095_19150[(2)] = false);

(statearr_19095_19150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (12))){
var inst_19059 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19061__$1,inst_19059);
} else {
if((state_val_19062 === (2))){
var inst_18965 = (state_19061[(8)]);
var inst_18970 = inst_18965.cljs$lang$protocol_mask$partition0$;
var inst_18971 = (inst_18970 & (64));
var inst_18972 = inst_18965.cljs$core$ISeq$;
var inst_18973 = (inst_18971) || (inst_18972);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_18973)){
var statearr_19096_19151 = state_19061__$1;
(statearr_19096_19151[(1)] = (5));

} else {
var statearr_19097_19152 = state_19061__$1;
(statearr_19097_19152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (23))){
var inst_19020 = (state_19061[(14)]);
var inst_19026 = (inst_19020 == null);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_19026)){
var statearr_19098_19153 = state_19061__$1;
(statearr_19098_19153[(1)] = (26));

} else {
var statearr_19099_19154 = state_19061__$1;
(statearr_19099_19154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (35))){
var inst_19046 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
if(cljs.core.truth_(inst_19046)){
var statearr_19100_19155 = state_19061__$1;
(statearr_19100_19155[(1)] = (36));

} else {
var statearr_19101_19156 = state_19061__$1;
(statearr_19101_19156[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (19))){
var inst_18989 = (state_19061[(7)]);
var inst_19008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18989);
var state_19061__$1 = state_19061;
var statearr_19102_19157 = state_19061__$1;
(statearr_19102_19157[(2)] = inst_19008);

(statearr_19102_19157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (11))){
var inst_18989 = (state_19061[(7)]);
var inst_18993 = (inst_18989 == null);
var inst_18994 = cljs.core.not.call(null,inst_18993);
var state_19061__$1 = state_19061;
if(inst_18994){
var statearr_19103_19158 = state_19061__$1;
(statearr_19103_19158[(1)] = (13));

} else {
var statearr_19104_19159 = state_19061__$1;
(statearr_19104_19159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (9))){
var inst_18965 = (state_19061[(8)]);
var state_19061__$1 = state_19061;
var statearr_19105_19160 = state_19061__$1;
(statearr_19105_19160[(2)] = inst_18965);

(statearr_19105_19160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (5))){
var state_19061__$1 = state_19061;
var statearr_19106_19161 = state_19061__$1;
(statearr_19106_19161[(2)] = true);

(statearr_19106_19161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (14))){
var state_19061__$1 = state_19061;
var statearr_19107_19162 = state_19061__$1;
(statearr_19107_19162[(2)] = false);

(statearr_19107_19162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (26))){
var inst_19021 = (state_19061[(10)]);
var inst_19028 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19021);
var state_19061__$1 = state_19061;
var statearr_19108_19163 = state_19061__$1;
(statearr_19108_19163[(2)] = inst_19028);

(statearr_19108_19163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (16))){
var state_19061__$1 = state_19061;
var statearr_19109_19164 = state_19061__$1;
(statearr_19109_19164[(2)] = true);

(statearr_19109_19164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (38))){
var inst_19051 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
var statearr_19110_19165 = state_19061__$1;
(statearr_19110_19165[(2)] = inst_19051);

(statearr_19110_19165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (30))){
var inst_19012 = (state_19061[(9)]);
var inst_19021 = (state_19061[(10)]);
var inst_19013 = (state_19061[(13)]);
var inst_19038 = cljs.core.empty_QMARK_.call(null,inst_19012);
var inst_19039 = inst_19013.call(null,inst_19021);
var inst_19040 = cljs.core.not.call(null,inst_19039);
var inst_19041 = (inst_19038) && (inst_19040);
var state_19061__$1 = state_19061;
var statearr_19111_19166 = state_19061__$1;
(statearr_19111_19166[(2)] = inst_19041);

(statearr_19111_19166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (10))){
var inst_18965 = (state_19061[(8)]);
var inst_18985 = (state_19061[(2)]);
var inst_18986 = cljs.core.get.call(null,inst_18985,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18987 = cljs.core.get.call(null,inst_18985,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18988 = cljs.core.get.call(null,inst_18985,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18989 = inst_18965;
var state_19061__$1 = (function (){var statearr_19112 = state_19061;
(statearr_19112[(16)] = inst_18987);

(statearr_19112[(7)] = inst_18989);

(statearr_19112[(17)] = inst_18988);

(statearr_19112[(18)] = inst_18986);

return statearr_19112;
})();
var statearr_19113_19167 = state_19061__$1;
(statearr_19113_19167[(2)] = null);

(statearr_19113_19167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (18))){
var inst_19003 = (state_19061[(2)]);
var state_19061__$1 = state_19061;
var statearr_19114_19168 = state_19061__$1;
(statearr_19114_19168[(2)] = inst_19003);

(statearr_19114_19168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (37))){
var state_19061__$1 = state_19061;
var statearr_19115_19169 = state_19061__$1;
(statearr_19115_19169[(2)] = null);

(statearr_19115_19169[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19062 === (8))){
var inst_18965 = (state_19061[(8)]);
var inst_18982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18965);
var state_19061__$1 = state_19061;
var statearr_19116_19170 = state_19061__$1;
(statearr_19116_19170[(2)] = inst_18982);

(statearr_19116_19170[(1)] = (10));


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
});})(c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17279__auto__,c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17280__auto__ = null;
var cljs$core$async$mix_$_state_machine__17280__auto____0 = (function (){
var statearr_19120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19120[(0)] = cljs$core$async$mix_$_state_machine__17280__auto__);

(statearr_19120[(1)] = (1));

return statearr_19120;
});
var cljs$core$async$mix_$_state_machine__17280__auto____1 = (function (state_19061){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19121){if((e19121 instanceof Object)){
var ex__17283__auto__ = e19121;
var statearr_19122_19171 = state_19061;
(statearr_19122_19171[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19172 = state_19061;
state_19061 = G__19172;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17280__auto__ = function(state_19061){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17280__auto____1.call(this,state_19061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17280__auto____0;
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17280__auto____1;
return cljs$core$async$mix_$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17393__auto__ = (function (){var statearr_19123 = f__17392__auto__.call(null);
(statearr_19123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19124);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19173 = [];
var len__7484__auto___19176 = arguments.length;
var i__7485__auto___19177 = (0);
while(true){
if((i__7485__auto___19177 < len__7484__auto___19176)){
args19173.push((arguments[i__7485__auto___19177]));

var G__19178 = (i__7485__auto___19177 + (1));
i__7485__auto___19177 = G__19178;
continue;
} else {
}
break;
}

var G__19175 = args19173.length;
switch (G__19175) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19173.length)].join('')));

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
var args19181 = [];
var len__7484__auto___19306 = arguments.length;
var i__7485__auto___19307 = (0);
while(true){
if((i__7485__auto___19307 < len__7484__auto___19306)){
args19181.push((arguments[i__7485__auto___19307]));

var G__19308 = (i__7485__auto___19307 + (1));
i__7485__auto___19307 = G__19308;
continue;
} else {
}
break;
}

var G__19183 = args19181.length;
switch (G__19183) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19181.length)].join('')));

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
return (function (p1__19180_SHARP_){
if(cljs.core.truth_(p1__19180_SHARP_.call(null,topic))){
return p1__19180_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19180_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19184 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19185){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19185 = meta19185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19186,meta19185__$1){
var self__ = this;
var _19186__$1 = this;
return (new cljs.core.async.t_cljs$core$async19184(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19185__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19186){
var self__ = this;
var _19186__$1 = this;
return self__.meta19185;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19185","meta19185",1243774724,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19184";

cljs.core.async.t_cljs$core$async19184.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19184");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19184 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19185){
return (new cljs.core.async.t_cljs$core$async19184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19185));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19184(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17391__auto___19310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19310,mults,ensure_mult,p){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19310,mults,ensure_mult,p){
return (function (state_19258){
var state_val_19259 = (state_19258[(1)]);
if((state_val_19259 === (7))){
var inst_19254 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19260_19311 = state_19258__$1;
(statearr_19260_19311[(2)] = inst_19254);

(statearr_19260_19311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (20))){
var state_19258__$1 = state_19258;
var statearr_19261_19312 = state_19258__$1;
(statearr_19261_19312[(2)] = null);

(statearr_19261_19312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (1))){
var state_19258__$1 = state_19258;
var statearr_19262_19313 = state_19258__$1;
(statearr_19262_19313[(2)] = null);

(statearr_19262_19313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (24))){
var inst_19237 = (state_19258[(7)]);
var inst_19246 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19237);
var state_19258__$1 = state_19258;
var statearr_19263_19314 = state_19258__$1;
(statearr_19263_19314[(2)] = inst_19246);

(statearr_19263_19314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (4))){
var inst_19189 = (state_19258[(8)]);
var inst_19189__$1 = (state_19258[(2)]);
var inst_19190 = (inst_19189__$1 == null);
var state_19258__$1 = (function (){var statearr_19264 = state_19258;
(statearr_19264[(8)] = inst_19189__$1);

return statearr_19264;
})();
if(cljs.core.truth_(inst_19190)){
var statearr_19265_19315 = state_19258__$1;
(statearr_19265_19315[(1)] = (5));

} else {
var statearr_19266_19316 = state_19258__$1;
(statearr_19266_19316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (15))){
var inst_19231 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19267_19317 = state_19258__$1;
(statearr_19267_19317[(2)] = inst_19231);

(statearr_19267_19317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (21))){
var inst_19251 = (state_19258[(2)]);
var state_19258__$1 = (function (){var statearr_19268 = state_19258;
(statearr_19268[(9)] = inst_19251);

return statearr_19268;
})();
var statearr_19269_19318 = state_19258__$1;
(statearr_19269_19318[(2)] = null);

(statearr_19269_19318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (13))){
var inst_19213 = (state_19258[(10)]);
var inst_19215 = cljs.core.chunked_seq_QMARK_.call(null,inst_19213);
var state_19258__$1 = state_19258;
if(inst_19215){
var statearr_19270_19319 = state_19258__$1;
(statearr_19270_19319[(1)] = (16));

} else {
var statearr_19271_19320 = state_19258__$1;
(statearr_19271_19320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (22))){
var inst_19243 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19243)){
var statearr_19272_19321 = state_19258__$1;
(statearr_19272_19321[(1)] = (23));

} else {
var statearr_19273_19322 = state_19258__$1;
(statearr_19273_19322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (6))){
var inst_19237 = (state_19258[(7)]);
var inst_19189 = (state_19258[(8)]);
var inst_19239 = (state_19258[(11)]);
var inst_19237__$1 = topic_fn.call(null,inst_19189);
var inst_19238 = cljs.core.deref.call(null,mults);
var inst_19239__$1 = cljs.core.get.call(null,inst_19238,inst_19237__$1);
var state_19258__$1 = (function (){var statearr_19274 = state_19258;
(statearr_19274[(7)] = inst_19237__$1);

(statearr_19274[(11)] = inst_19239__$1);

return statearr_19274;
})();
if(cljs.core.truth_(inst_19239__$1)){
var statearr_19275_19323 = state_19258__$1;
(statearr_19275_19323[(1)] = (19));

} else {
var statearr_19276_19324 = state_19258__$1;
(statearr_19276_19324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (25))){
var inst_19248 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19277_19325 = state_19258__$1;
(statearr_19277_19325[(2)] = inst_19248);

(statearr_19277_19325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (17))){
var inst_19213 = (state_19258[(10)]);
var inst_19222 = cljs.core.first.call(null,inst_19213);
var inst_19223 = cljs.core.async.muxch_STAR_.call(null,inst_19222);
var inst_19224 = cljs.core.async.close_BANG_.call(null,inst_19223);
var inst_19225 = cljs.core.next.call(null,inst_19213);
var inst_19199 = inst_19225;
var inst_19200 = null;
var inst_19201 = (0);
var inst_19202 = (0);
var state_19258__$1 = (function (){var statearr_19278 = state_19258;
(statearr_19278[(12)] = inst_19201);

(statearr_19278[(13)] = inst_19199);

(statearr_19278[(14)] = inst_19224);

(statearr_19278[(15)] = inst_19202);

(statearr_19278[(16)] = inst_19200);

return statearr_19278;
})();
var statearr_19279_19326 = state_19258__$1;
(statearr_19279_19326[(2)] = null);

(statearr_19279_19326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19258__$1,inst_19256);
} else {
if((state_val_19259 === (12))){
var inst_19233 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19280_19327 = state_19258__$1;
(statearr_19280_19327[(2)] = inst_19233);

(statearr_19280_19327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (2))){
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19258__$1,(4),ch);
} else {
if((state_val_19259 === (23))){
var state_19258__$1 = state_19258;
var statearr_19281_19328 = state_19258__$1;
(statearr_19281_19328[(2)] = null);

(statearr_19281_19328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (19))){
var inst_19189 = (state_19258[(8)]);
var inst_19239 = (state_19258[(11)]);
var inst_19241 = cljs.core.async.muxch_STAR_.call(null,inst_19239);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19258__$1,(22),inst_19241,inst_19189);
} else {
if((state_val_19259 === (11))){
var inst_19213 = (state_19258[(10)]);
var inst_19199 = (state_19258[(13)]);
var inst_19213__$1 = cljs.core.seq.call(null,inst_19199);
var state_19258__$1 = (function (){var statearr_19282 = state_19258;
(statearr_19282[(10)] = inst_19213__$1);

return statearr_19282;
})();
if(inst_19213__$1){
var statearr_19283_19329 = state_19258__$1;
(statearr_19283_19329[(1)] = (13));

} else {
var statearr_19284_19330 = state_19258__$1;
(statearr_19284_19330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (9))){
var inst_19235 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19285_19331 = state_19258__$1;
(statearr_19285_19331[(2)] = inst_19235);

(statearr_19285_19331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (5))){
var inst_19196 = cljs.core.deref.call(null,mults);
var inst_19197 = cljs.core.vals.call(null,inst_19196);
var inst_19198 = cljs.core.seq.call(null,inst_19197);
var inst_19199 = inst_19198;
var inst_19200 = null;
var inst_19201 = (0);
var inst_19202 = (0);
var state_19258__$1 = (function (){var statearr_19286 = state_19258;
(statearr_19286[(12)] = inst_19201);

(statearr_19286[(13)] = inst_19199);

(statearr_19286[(15)] = inst_19202);

(statearr_19286[(16)] = inst_19200);

return statearr_19286;
})();
var statearr_19287_19332 = state_19258__$1;
(statearr_19287_19332[(2)] = null);

(statearr_19287_19332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (14))){
var state_19258__$1 = state_19258;
var statearr_19291_19333 = state_19258__$1;
(statearr_19291_19333[(2)] = null);

(statearr_19291_19333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (16))){
var inst_19213 = (state_19258[(10)]);
var inst_19217 = cljs.core.chunk_first.call(null,inst_19213);
var inst_19218 = cljs.core.chunk_rest.call(null,inst_19213);
var inst_19219 = cljs.core.count.call(null,inst_19217);
var inst_19199 = inst_19218;
var inst_19200 = inst_19217;
var inst_19201 = inst_19219;
var inst_19202 = (0);
var state_19258__$1 = (function (){var statearr_19292 = state_19258;
(statearr_19292[(12)] = inst_19201);

(statearr_19292[(13)] = inst_19199);

(statearr_19292[(15)] = inst_19202);

(statearr_19292[(16)] = inst_19200);

return statearr_19292;
})();
var statearr_19293_19334 = state_19258__$1;
(statearr_19293_19334[(2)] = null);

(statearr_19293_19334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (10))){
var inst_19201 = (state_19258[(12)]);
var inst_19199 = (state_19258[(13)]);
var inst_19202 = (state_19258[(15)]);
var inst_19200 = (state_19258[(16)]);
var inst_19207 = cljs.core._nth.call(null,inst_19200,inst_19202);
var inst_19208 = cljs.core.async.muxch_STAR_.call(null,inst_19207);
var inst_19209 = cljs.core.async.close_BANG_.call(null,inst_19208);
var inst_19210 = (inst_19202 + (1));
var tmp19288 = inst_19201;
var tmp19289 = inst_19199;
var tmp19290 = inst_19200;
var inst_19199__$1 = tmp19289;
var inst_19200__$1 = tmp19290;
var inst_19201__$1 = tmp19288;
var inst_19202__$1 = inst_19210;
var state_19258__$1 = (function (){var statearr_19294 = state_19258;
(statearr_19294[(12)] = inst_19201__$1);

(statearr_19294[(13)] = inst_19199__$1);

(statearr_19294[(15)] = inst_19202__$1);

(statearr_19294[(16)] = inst_19200__$1);

(statearr_19294[(17)] = inst_19209);

return statearr_19294;
})();
var statearr_19295_19335 = state_19258__$1;
(statearr_19295_19335[(2)] = null);

(statearr_19295_19335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (18))){
var inst_19228 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19296_19336 = state_19258__$1;
(statearr_19296_19336[(2)] = inst_19228);

(statearr_19296_19336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (8))){
var inst_19201 = (state_19258[(12)]);
var inst_19202 = (state_19258[(15)]);
var inst_19204 = (inst_19202 < inst_19201);
var inst_19205 = inst_19204;
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19205)){
var statearr_19297_19337 = state_19258__$1;
(statearr_19297_19337[(1)] = (10));

} else {
var statearr_19298_19338 = state_19258__$1;
(statearr_19298_19338[(1)] = (11));

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
});})(c__17391__auto___19310,mults,ensure_mult,p))
;
return ((function (switch__17279__auto__,c__17391__auto___19310,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19302[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19302[(1)] = (1));

return statearr_19302;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19258){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19303){if((e19303 instanceof Object)){
var ex__17283__auto__ = e19303;
var statearr_19304_19339 = state_19258;
(statearr_19304_19339[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19340 = state_19258;
state_19258 = G__19340;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19310,mults,ensure_mult,p))
})();
var state__17393__auto__ = (function (){var statearr_19305 = f__17392__auto__.call(null);
(statearr_19305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19310);

return statearr_19305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19310,mults,ensure_mult,p))
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
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19341.length)].join('')));

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
var args19348 = [];
var len__7484__auto___19351 = arguments.length;
var i__7485__auto___19352 = (0);
while(true){
if((i__7485__auto___19352 < len__7484__auto___19351)){
args19348.push((arguments[i__7485__auto___19352]));

var G__19353 = (i__7485__auto___19352 + (1));
i__7485__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var G__19350 = args19348.length;
switch (G__19350) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19348.length)].join('')));

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
var args19355 = [];
var len__7484__auto___19426 = arguments.length;
var i__7485__auto___19427 = (0);
while(true){
if((i__7485__auto___19427 < len__7484__auto___19426)){
args19355.push((arguments[i__7485__auto___19427]));

var G__19428 = (i__7485__auto___19427 + (1));
i__7485__auto___19427 = G__19428;
continue;
} else {
}
break;
}

var G__19357 = args19355.length;
switch (G__19357) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19355.length)].join('')));

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
var c__17391__auto___19430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19396){
var state_val_19397 = (state_19396[(1)]);
if((state_val_19397 === (7))){
var state_19396__$1 = state_19396;
var statearr_19398_19431 = state_19396__$1;
(statearr_19398_19431[(2)] = null);

(statearr_19398_19431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (1))){
var state_19396__$1 = state_19396;
var statearr_19399_19432 = state_19396__$1;
(statearr_19399_19432[(2)] = null);

(statearr_19399_19432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (4))){
var inst_19360 = (state_19396[(7)]);
var inst_19362 = (inst_19360 < cnt);
var state_19396__$1 = state_19396;
if(cljs.core.truth_(inst_19362)){
var statearr_19400_19433 = state_19396__$1;
(statearr_19400_19433[(1)] = (6));

} else {
var statearr_19401_19434 = state_19396__$1;
(statearr_19401_19434[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (15))){
var inst_19392 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19402_19435 = state_19396__$1;
(statearr_19402_19435[(2)] = inst_19392);

(statearr_19402_19435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (13))){
var inst_19385 = cljs.core.async.close_BANG_.call(null,out);
var state_19396__$1 = state_19396;
var statearr_19403_19436 = state_19396__$1;
(statearr_19403_19436[(2)] = inst_19385);

(statearr_19403_19436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (6))){
var state_19396__$1 = state_19396;
var statearr_19404_19437 = state_19396__$1;
(statearr_19404_19437[(2)] = null);

(statearr_19404_19437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (3))){
var inst_19394 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19396__$1,inst_19394);
} else {
if((state_val_19397 === (12))){
var inst_19382 = (state_19396[(8)]);
var inst_19382__$1 = (state_19396[(2)]);
var inst_19383 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19382__$1);
var state_19396__$1 = (function (){var statearr_19405 = state_19396;
(statearr_19405[(8)] = inst_19382__$1);

return statearr_19405;
})();
if(cljs.core.truth_(inst_19383)){
var statearr_19406_19438 = state_19396__$1;
(statearr_19406_19438[(1)] = (13));

} else {
var statearr_19407_19439 = state_19396__$1;
(statearr_19407_19439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (2))){
var inst_19359 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19360 = (0);
var state_19396__$1 = (function (){var statearr_19408 = state_19396;
(statearr_19408[(9)] = inst_19359);

(statearr_19408[(7)] = inst_19360);

return statearr_19408;
})();
var statearr_19409_19440 = state_19396__$1;
(statearr_19409_19440[(2)] = null);

(statearr_19409_19440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (11))){
var inst_19360 = (state_19396[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19396,(10),Object,null,(9));
var inst_19369 = chs__$1.call(null,inst_19360);
var inst_19370 = done.call(null,inst_19360);
var inst_19371 = cljs.core.async.take_BANG_.call(null,inst_19369,inst_19370);
var state_19396__$1 = state_19396;
var statearr_19410_19441 = state_19396__$1;
(statearr_19410_19441[(2)] = inst_19371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (9))){
var inst_19360 = (state_19396[(7)]);
var inst_19373 = (state_19396[(2)]);
var inst_19374 = (inst_19360 + (1));
var inst_19360__$1 = inst_19374;
var state_19396__$1 = (function (){var statearr_19411 = state_19396;
(statearr_19411[(10)] = inst_19373);

(statearr_19411[(7)] = inst_19360__$1);

return statearr_19411;
})();
var statearr_19412_19442 = state_19396__$1;
(statearr_19412_19442[(2)] = null);

(statearr_19412_19442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (5))){
var inst_19380 = (state_19396[(2)]);
var state_19396__$1 = (function (){var statearr_19413 = state_19396;
(statearr_19413[(11)] = inst_19380);

return statearr_19413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19396__$1,(12),dchan);
} else {
if((state_val_19397 === (14))){
var inst_19382 = (state_19396[(8)]);
var inst_19387 = cljs.core.apply.call(null,f,inst_19382);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19396__$1,(16),out,inst_19387);
} else {
if((state_val_19397 === (16))){
var inst_19389 = (state_19396[(2)]);
var state_19396__$1 = (function (){var statearr_19414 = state_19396;
(statearr_19414[(12)] = inst_19389);

return statearr_19414;
})();
var statearr_19415_19443 = state_19396__$1;
(statearr_19415_19443[(2)] = null);

(statearr_19415_19443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (10))){
var inst_19364 = (state_19396[(2)]);
var inst_19365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19396__$1 = (function (){var statearr_19416 = state_19396;
(statearr_19416[(13)] = inst_19364);

return statearr_19416;
})();
var statearr_19417_19444 = state_19396__$1;
(statearr_19417_19444[(2)] = inst_19365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (8))){
var inst_19378 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19418_19445 = state_19396__$1;
(statearr_19418_19445[(2)] = inst_19378);

(statearr_19418_19445[(1)] = (5));


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
});})(c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17279__auto__,c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19422[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19422[(1)] = (1));

return statearr_19422;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19396){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19423){if((e19423 instanceof Object)){
var ex__17283__auto__ = e19423;
var statearr_19424_19446 = state_19396;
(statearr_19424_19446[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19447 = state_19396;
state_19396 = G__19447;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17393__auto__ = (function (){var statearr_19425 = f__17392__auto__.call(null);
(statearr_19425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19430);

return statearr_19425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19430,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19449 = [];
var len__7484__auto___19507 = arguments.length;
var i__7485__auto___19508 = (0);
while(true){
if((i__7485__auto___19508 < len__7484__auto___19507)){
args19449.push((arguments[i__7485__auto___19508]));

var G__19509 = (i__7485__auto___19508 + (1));
i__7485__auto___19508 = G__19509;
continue;
} else {
}
break;
}

var G__19451 = args19449.length;
switch (G__19451) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19449.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___19511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19511,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19511,out){
return (function (state_19483){
var state_val_19484 = (state_19483[(1)]);
if((state_val_19484 === (7))){
var inst_19463 = (state_19483[(7)]);
var inst_19462 = (state_19483[(8)]);
var inst_19462__$1 = (state_19483[(2)]);
var inst_19463__$1 = cljs.core.nth.call(null,inst_19462__$1,(0),null);
var inst_19464 = cljs.core.nth.call(null,inst_19462__$1,(1),null);
var inst_19465 = (inst_19463__$1 == null);
var state_19483__$1 = (function (){var statearr_19485 = state_19483;
(statearr_19485[(7)] = inst_19463__$1);

(statearr_19485[(9)] = inst_19464);

(statearr_19485[(8)] = inst_19462__$1);

return statearr_19485;
})();
if(cljs.core.truth_(inst_19465)){
var statearr_19486_19512 = state_19483__$1;
(statearr_19486_19512[(1)] = (8));

} else {
var statearr_19487_19513 = state_19483__$1;
(statearr_19487_19513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (1))){
var inst_19452 = cljs.core.vec.call(null,chs);
var inst_19453 = inst_19452;
var state_19483__$1 = (function (){var statearr_19488 = state_19483;
(statearr_19488[(10)] = inst_19453);

return statearr_19488;
})();
var statearr_19489_19514 = state_19483__$1;
(statearr_19489_19514[(2)] = null);

(statearr_19489_19514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (4))){
var inst_19453 = (state_19483[(10)]);
var state_19483__$1 = state_19483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19483__$1,(7),inst_19453);
} else {
if((state_val_19484 === (6))){
var inst_19479 = (state_19483[(2)]);
var state_19483__$1 = state_19483;
var statearr_19490_19515 = state_19483__$1;
(statearr_19490_19515[(2)] = inst_19479);

(statearr_19490_19515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (3))){
var inst_19481 = (state_19483[(2)]);
var state_19483__$1 = state_19483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19483__$1,inst_19481);
} else {
if((state_val_19484 === (2))){
var inst_19453 = (state_19483[(10)]);
var inst_19455 = cljs.core.count.call(null,inst_19453);
var inst_19456 = (inst_19455 > (0));
var state_19483__$1 = state_19483;
if(cljs.core.truth_(inst_19456)){
var statearr_19492_19516 = state_19483__$1;
(statearr_19492_19516[(1)] = (4));

} else {
var statearr_19493_19517 = state_19483__$1;
(statearr_19493_19517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (11))){
var inst_19453 = (state_19483[(10)]);
var inst_19472 = (state_19483[(2)]);
var tmp19491 = inst_19453;
var inst_19453__$1 = tmp19491;
var state_19483__$1 = (function (){var statearr_19494 = state_19483;
(statearr_19494[(10)] = inst_19453__$1);

(statearr_19494[(11)] = inst_19472);

return statearr_19494;
})();
var statearr_19495_19518 = state_19483__$1;
(statearr_19495_19518[(2)] = null);

(statearr_19495_19518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (9))){
var inst_19463 = (state_19483[(7)]);
var state_19483__$1 = state_19483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19483__$1,(11),out,inst_19463);
} else {
if((state_val_19484 === (5))){
var inst_19477 = cljs.core.async.close_BANG_.call(null,out);
var state_19483__$1 = state_19483;
var statearr_19496_19519 = state_19483__$1;
(statearr_19496_19519[(2)] = inst_19477);

(statearr_19496_19519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (10))){
var inst_19475 = (state_19483[(2)]);
var state_19483__$1 = state_19483;
var statearr_19497_19520 = state_19483__$1;
(statearr_19497_19520[(2)] = inst_19475);

(statearr_19497_19520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19484 === (8))){
var inst_19453 = (state_19483[(10)]);
var inst_19463 = (state_19483[(7)]);
var inst_19464 = (state_19483[(9)]);
var inst_19462 = (state_19483[(8)]);
var inst_19467 = (function (){var cs = inst_19453;
var vec__19458 = inst_19462;
var v = inst_19463;
var c = inst_19464;
return ((function (cs,vec__19458,v,c,inst_19453,inst_19463,inst_19464,inst_19462,state_val_19484,c__17391__auto___19511,out){
return (function (p1__19448_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19448_SHARP_);
});
;})(cs,vec__19458,v,c,inst_19453,inst_19463,inst_19464,inst_19462,state_val_19484,c__17391__auto___19511,out))
})();
var inst_19468 = cljs.core.filterv.call(null,inst_19467,inst_19453);
var inst_19453__$1 = inst_19468;
var state_19483__$1 = (function (){var statearr_19498 = state_19483;
(statearr_19498[(10)] = inst_19453__$1);

return statearr_19498;
})();
var statearr_19499_19521 = state_19483__$1;
(statearr_19499_19521[(2)] = null);

(statearr_19499_19521[(1)] = (2));


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
});})(c__17391__auto___19511,out))
;
return ((function (switch__17279__auto__,c__17391__auto___19511,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19503[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19503[(1)] = (1));

return statearr_19503;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19483){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19504){if((e19504 instanceof Object)){
var ex__17283__auto__ = e19504;
var statearr_19505_19522 = state_19483;
(statearr_19505_19522[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19523 = state_19483;
state_19483 = G__19523;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19511,out))
})();
var state__17393__auto__ = (function (){var statearr_19506 = f__17392__auto__.call(null);
(statearr_19506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19511);

return statearr_19506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19511,out))
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
var args19524 = [];
var len__7484__auto___19573 = arguments.length;
var i__7485__auto___19574 = (0);
while(true){
if((i__7485__auto___19574 < len__7484__auto___19573)){
args19524.push((arguments[i__7485__auto___19574]));

var G__19575 = (i__7485__auto___19574 + (1));
i__7485__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var G__19526 = args19524.length;
switch (G__19526) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19524.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___19577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19577,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19577,out){
return (function (state_19550){
var state_val_19551 = (state_19550[(1)]);
if((state_val_19551 === (7))){
var inst_19532 = (state_19550[(7)]);
var inst_19532__$1 = (state_19550[(2)]);
var inst_19533 = (inst_19532__$1 == null);
var inst_19534 = cljs.core.not.call(null,inst_19533);
var state_19550__$1 = (function (){var statearr_19552 = state_19550;
(statearr_19552[(7)] = inst_19532__$1);

return statearr_19552;
})();
if(inst_19534){
var statearr_19553_19578 = state_19550__$1;
(statearr_19553_19578[(1)] = (8));

} else {
var statearr_19554_19579 = state_19550__$1;
(statearr_19554_19579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (1))){
var inst_19527 = (0);
var state_19550__$1 = (function (){var statearr_19555 = state_19550;
(statearr_19555[(8)] = inst_19527);

return statearr_19555;
})();
var statearr_19556_19580 = state_19550__$1;
(statearr_19556_19580[(2)] = null);

(statearr_19556_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (4))){
var state_19550__$1 = state_19550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19550__$1,(7),ch);
} else {
if((state_val_19551 === (6))){
var inst_19545 = (state_19550[(2)]);
var state_19550__$1 = state_19550;
var statearr_19557_19581 = state_19550__$1;
(statearr_19557_19581[(2)] = inst_19545);

(statearr_19557_19581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (3))){
var inst_19547 = (state_19550[(2)]);
var inst_19548 = cljs.core.async.close_BANG_.call(null,out);
var state_19550__$1 = (function (){var statearr_19558 = state_19550;
(statearr_19558[(9)] = inst_19547);

return statearr_19558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19550__$1,inst_19548);
} else {
if((state_val_19551 === (2))){
var inst_19527 = (state_19550[(8)]);
var inst_19529 = (inst_19527 < n);
var state_19550__$1 = state_19550;
if(cljs.core.truth_(inst_19529)){
var statearr_19559_19582 = state_19550__$1;
(statearr_19559_19582[(1)] = (4));

} else {
var statearr_19560_19583 = state_19550__$1;
(statearr_19560_19583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (11))){
var inst_19527 = (state_19550[(8)]);
var inst_19537 = (state_19550[(2)]);
var inst_19538 = (inst_19527 + (1));
var inst_19527__$1 = inst_19538;
var state_19550__$1 = (function (){var statearr_19561 = state_19550;
(statearr_19561[(10)] = inst_19537);

(statearr_19561[(8)] = inst_19527__$1);

return statearr_19561;
})();
var statearr_19562_19584 = state_19550__$1;
(statearr_19562_19584[(2)] = null);

(statearr_19562_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (9))){
var state_19550__$1 = state_19550;
var statearr_19563_19585 = state_19550__$1;
(statearr_19563_19585[(2)] = null);

(statearr_19563_19585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (5))){
var state_19550__$1 = state_19550;
var statearr_19564_19586 = state_19550__$1;
(statearr_19564_19586[(2)] = null);

(statearr_19564_19586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (10))){
var inst_19542 = (state_19550[(2)]);
var state_19550__$1 = state_19550;
var statearr_19565_19587 = state_19550__$1;
(statearr_19565_19587[(2)] = inst_19542);

(statearr_19565_19587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19551 === (8))){
var inst_19532 = (state_19550[(7)]);
var state_19550__$1 = state_19550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19550__$1,(11),out,inst_19532);
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
});})(c__17391__auto___19577,out))
;
return ((function (switch__17279__auto__,c__17391__auto___19577,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19569[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19569[(1)] = (1));

return statearr_19569;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19550){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19570){if((e19570 instanceof Object)){
var ex__17283__auto__ = e19570;
var statearr_19571_19588 = state_19550;
(statearr_19571_19588[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19589 = state_19550;
state_19550 = G__19589;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19577,out))
})();
var state__17393__auto__ = (function (){var statearr_19572 = f__17392__auto__.call(null);
(statearr_19572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19577);

return statearr_19572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19577,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19597 = (function (map_LT_,f,ch,meta19598){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19598 = meta19598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19599,meta19598__$1){
var self__ = this;
var _19599__$1 = this;
return (new cljs.core.async.t_cljs$core$async19597(self__.map_LT_,self__.f,self__.ch,meta19598__$1));
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19599){
var self__ = this;
var _19599__$1 = this;
return self__.meta19598;
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19600 = (function (map_LT_,f,ch,meta19598,_,fn1,meta19601){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19598 = meta19598;
this._ = _;
this.fn1 = fn1;
this.meta19601 = meta19601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19602,meta19601__$1){
var self__ = this;
var _19602__$1 = this;
return (new cljs.core.async.t_cljs$core$async19600(self__.map_LT_,self__.f,self__.ch,self__.meta19598,self__._,self__.fn1,meta19601__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19602){
var self__ = this;
var _19602__$1 = this;
return self__.meta19601;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19590_SHARP_){
return f1.call(null,(((p1__19590_SHARP_ == null))?null:self__.f.call(null,p1__19590_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19598","meta19598",-838312967,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19597","cljs.core.async/t_cljs$core$async19597",1915030981,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19601","meta19601",-1257652227,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19600";

cljs.core.async.t_cljs$core$async19600.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19600");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19600 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19600(map_LT___$1,f__$1,ch__$1,meta19598__$1,___$2,fn1__$1,meta19601){
return (new cljs.core.async.t_cljs$core$async19600(map_LT___$1,f__$1,ch__$1,meta19598__$1,___$2,fn1__$1,meta19601));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19600(self__.map_LT_,self__.f,self__.ch,self__.meta19598,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19598","meta19598",-838312967,null)], null);
});

cljs.core.async.t_cljs$core$async19597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19597";

cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19597");
});

cljs.core.async.__GT_t_cljs$core$async19597 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19597(map_LT___$1,f__$1,ch__$1,meta19598){
return (new cljs.core.async.t_cljs$core$async19597(map_LT___$1,f__$1,ch__$1,meta19598));
});

}

return (new cljs.core.async.t_cljs$core$async19597(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19606 = (function (map_GT_,f,ch,meta19607){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19607 = meta19607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19608,meta19607__$1){
var self__ = this;
var _19608__$1 = this;
return (new cljs.core.async.t_cljs$core$async19606(self__.map_GT_,self__.f,self__.ch,meta19607__$1));
});

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19608){
var self__ = this;
var _19608__$1 = this;
return self__.meta19607;
});

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19607","meta19607",1032811651,null)], null);
});

cljs.core.async.t_cljs$core$async19606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19606";

cljs.core.async.t_cljs$core$async19606.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19606");
});

cljs.core.async.__GT_t_cljs$core$async19606 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19606(map_GT___$1,f__$1,ch__$1,meta19607){
return (new cljs.core.async.t_cljs$core$async19606(map_GT___$1,f__$1,ch__$1,meta19607));
});

}

return (new cljs.core.async.t_cljs$core$async19606(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19612 = (function (filter_GT_,p,ch,meta19613){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19613 = meta19613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19614,meta19613__$1){
var self__ = this;
var _19614__$1 = this;
return (new cljs.core.async.t_cljs$core$async19612(self__.filter_GT_,self__.p,self__.ch,meta19613__$1));
});

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19614){
var self__ = this;
var _19614__$1 = this;
return self__.meta19613;
});

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19613","meta19613",-575727640,null)], null);
});

cljs.core.async.t_cljs$core$async19612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19612";

cljs.core.async.t_cljs$core$async19612.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19612");
});

cljs.core.async.__GT_t_cljs$core$async19612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19612(filter_GT___$1,p__$1,ch__$1,meta19613){
return (new cljs.core.async.t_cljs$core$async19612(filter_GT___$1,p__$1,ch__$1,meta19613));
});

}

return (new cljs.core.async.t_cljs$core$async19612(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19615 = [];
var len__7484__auto___19659 = arguments.length;
var i__7485__auto___19660 = (0);
while(true){
if((i__7485__auto___19660 < len__7484__auto___19659)){
args19615.push((arguments[i__7485__auto___19660]));

var G__19661 = (i__7485__auto___19660 + (1));
i__7485__auto___19660 = G__19661;
continue;
} else {
}
break;
}

var G__19617 = args19615.length;
switch (G__19617) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19615.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___19663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19663,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19663,out){
return (function (state_19638){
var state_val_19639 = (state_19638[(1)]);
if((state_val_19639 === (7))){
var inst_19634 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19640_19664 = state_19638__$1;
(statearr_19640_19664[(2)] = inst_19634);

(statearr_19640_19664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (1))){
var state_19638__$1 = state_19638;
var statearr_19641_19665 = state_19638__$1;
(statearr_19641_19665[(2)] = null);

(statearr_19641_19665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (4))){
var inst_19620 = (state_19638[(7)]);
var inst_19620__$1 = (state_19638[(2)]);
var inst_19621 = (inst_19620__$1 == null);
var state_19638__$1 = (function (){var statearr_19642 = state_19638;
(statearr_19642[(7)] = inst_19620__$1);

return statearr_19642;
})();
if(cljs.core.truth_(inst_19621)){
var statearr_19643_19666 = state_19638__$1;
(statearr_19643_19666[(1)] = (5));

} else {
var statearr_19644_19667 = state_19638__$1;
(statearr_19644_19667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (6))){
var inst_19620 = (state_19638[(7)]);
var inst_19625 = p.call(null,inst_19620);
var state_19638__$1 = state_19638;
if(cljs.core.truth_(inst_19625)){
var statearr_19645_19668 = state_19638__$1;
(statearr_19645_19668[(1)] = (8));

} else {
var statearr_19646_19669 = state_19638__$1;
(statearr_19646_19669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (3))){
var inst_19636 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19638__$1,inst_19636);
} else {
if((state_val_19639 === (2))){
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19638__$1,(4),ch);
} else {
if((state_val_19639 === (11))){
var inst_19628 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19647_19670 = state_19638__$1;
(statearr_19647_19670[(2)] = inst_19628);

(statearr_19647_19670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (9))){
var state_19638__$1 = state_19638;
var statearr_19648_19671 = state_19638__$1;
(statearr_19648_19671[(2)] = null);

(statearr_19648_19671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (5))){
var inst_19623 = cljs.core.async.close_BANG_.call(null,out);
var state_19638__$1 = state_19638;
var statearr_19649_19672 = state_19638__$1;
(statearr_19649_19672[(2)] = inst_19623);

(statearr_19649_19672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (10))){
var inst_19631 = (state_19638[(2)]);
var state_19638__$1 = (function (){var statearr_19650 = state_19638;
(statearr_19650[(8)] = inst_19631);

return statearr_19650;
})();
var statearr_19651_19673 = state_19638__$1;
(statearr_19651_19673[(2)] = null);

(statearr_19651_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (8))){
var inst_19620 = (state_19638[(7)]);
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19638__$1,(11),out,inst_19620);
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
});})(c__17391__auto___19663,out))
;
return ((function (switch__17279__auto__,c__17391__auto___19663,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19655 = [null,null,null,null,null,null,null,null,null];
(statearr_19655[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19655[(1)] = (1));

return statearr_19655;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19638){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19656){if((e19656 instanceof Object)){
var ex__17283__auto__ = e19656;
var statearr_19657_19674 = state_19638;
(statearr_19657_19674[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19675 = state_19638;
state_19638 = G__19675;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19663,out))
})();
var state__17393__auto__ = (function (){var statearr_19658 = f__17392__auto__.call(null);
(statearr_19658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19663);

return statearr_19658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19663,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19676 = [];
var len__7484__auto___19679 = arguments.length;
var i__7485__auto___19680 = (0);
while(true){
if((i__7485__auto___19680 < len__7484__auto___19679)){
args19676.push((arguments[i__7485__auto___19680]));

var G__19681 = (i__7485__auto___19680 + (1));
i__7485__auto___19680 = G__19681;
continue;
} else {
}
break;
}

var G__19678 = args19676.length;
switch (G__19678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19676.length)].join('')));

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
var c__17391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto__){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto__){
return (function (state_19848){
var state_val_19849 = (state_19848[(1)]);
if((state_val_19849 === (7))){
var inst_19844 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19850_19891 = state_19848__$1;
(statearr_19850_19891[(2)] = inst_19844);

(statearr_19850_19891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (20))){
var inst_19814 = (state_19848[(7)]);
var inst_19825 = (state_19848[(2)]);
var inst_19826 = cljs.core.next.call(null,inst_19814);
var inst_19800 = inst_19826;
var inst_19801 = null;
var inst_19802 = (0);
var inst_19803 = (0);
var state_19848__$1 = (function (){var statearr_19851 = state_19848;
(statearr_19851[(8)] = inst_19802);

(statearr_19851[(9)] = inst_19825);

(statearr_19851[(10)] = inst_19800);

(statearr_19851[(11)] = inst_19803);

(statearr_19851[(12)] = inst_19801);

return statearr_19851;
})();
var statearr_19852_19892 = state_19848__$1;
(statearr_19852_19892[(2)] = null);

(statearr_19852_19892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (1))){
var state_19848__$1 = state_19848;
var statearr_19853_19893 = state_19848__$1;
(statearr_19853_19893[(2)] = null);

(statearr_19853_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (4))){
var inst_19789 = (state_19848[(13)]);
var inst_19789__$1 = (state_19848[(2)]);
var inst_19790 = (inst_19789__$1 == null);
var state_19848__$1 = (function (){var statearr_19854 = state_19848;
(statearr_19854[(13)] = inst_19789__$1);

return statearr_19854;
})();
if(cljs.core.truth_(inst_19790)){
var statearr_19855_19894 = state_19848__$1;
(statearr_19855_19894[(1)] = (5));

} else {
var statearr_19856_19895 = state_19848__$1;
(statearr_19856_19895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (15))){
var state_19848__$1 = state_19848;
var statearr_19860_19896 = state_19848__$1;
(statearr_19860_19896[(2)] = null);

(statearr_19860_19896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (21))){
var state_19848__$1 = state_19848;
var statearr_19861_19897 = state_19848__$1;
(statearr_19861_19897[(2)] = null);

(statearr_19861_19897[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (13))){
var inst_19802 = (state_19848[(8)]);
var inst_19800 = (state_19848[(10)]);
var inst_19803 = (state_19848[(11)]);
var inst_19801 = (state_19848[(12)]);
var inst_19810 = (state_19848[(2)]);
var inst_19811 = (inst_19803 + (1));
var tmp19857 = inst_19802;
var tmp19858 = inst_19800;
var tmp19859 = inst_19801;
var inst_19800__$1 = tmp19858;
var inst_19801__$1 = tmp19859;
var inst_19802__$1 = tmp19857;
var inst_19803__$1 = inst_19811;
var state_19848__$1 = (function (){var statearr_19862 = state_19848;
(statearr_19862[(8)] = inst_19802__$1);

(statearr_19862[(10)] = inst_19800__$1);

(statearr_19862[(14)] = inst_19810);

(statearr_19862[(11)] = inst_19803__$1);

(statearr_19862[(12)] = inst_19801__$1);

return statearr_19862;
})();
var statearr_19863_19898 = state_19848__$1;
(statearr_19863_19898[(2)] = null);

(statearr_19863_19898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (22))){
var state_19848__$1 = state_19848;
var statearr_19864_19899 = state_19848__$1;
(statearr_19864_19899[(2)] = null);

(statearr_19864_19899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (6))){
var inst_19789 = (state_19848[(13)]);
var inst_19798 = f.call(null,inst_19789);
var inst_19799 = cljs.core.seq.call(null,inst_19798);
var inst_19800 = inst_19799;
var inst_19801 = null;
var inst_19802 = (0);
var inst_19803 = (0);
var state_19848__$1 = (function (){var statearr_19865 = state_19848;
(statearr_19865[(8)] = inst_19802);

(statearr_19865[(10)] = inst_19800);

(statearr_19865[(11)] = inst_19803);

(statearr_19865[(12)] = inst_19801);

return statearr_19865;
})();
var statearr_19866_19900 = state_19848__$1;
(statearr_19866_19900[(2)] = null);

(statearr_19866_19900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (17))){
var inst_19814 = (state_19848[(7)]);
var inst_19818 = cljs.core.chunk_first.call(null,inst_19814);
var inst_19819 = cljs.core.chunk_rest.call(null,inst_19814);
var inst_19820 = cljs.core.count.call(null,inst_19818);
var inst_19800 = inst_19819;
var inst_19801 = inst_19818;
var inst_19802 = inst_19820;
var inst_19803 = (0);
var state_19848__$1 = (function (){var statearr_19867 = state_19848;
(statearr_19867[(8)] = inst_19802);

(statearr_19867[(10)] = inst_19800);

(statearr_19867[(11)] = inst_19803);

(statearr_19867[(12)] = inst_19801);

return statearr_19867;
})();
var statearr_19868_19901 = state_19848__$1;
(statearr_19868_19901[(2)] = null);

(statearr_19868_19901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (3))){
var inst_19846 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19848__$1,inst_19846);
} else {
if((state_val_19849 === (12))){
var inst_19834 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19869_19902 = state_19848__$1;
(statearr_19869_19902[(2)] = inst_19834);

(statearr_19869_19902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (2))){
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19848__$1,(4),in$);
} else {
if((state_val_19849 === (23))){
var inst_19842 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19870_19903 = state_19848__$1;
(statearr_19870_19903[(2)] = inst_19842);

(statearr_19870_19903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (19))){
var inst_19829 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19871_19904 = state_19848__$1;
(statearr_19871_19904[(2)] = inst_19829);

(statearr_19871_19904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (11))){
var inst_19800 = (state_19848[(10)]);
var inst_19814 = (state_19848[(7)]);
var inst_19814__$1 = cljs.core.seq.call(null,inst_19800);
var state_19848__$1 = (function (){var statearr_19872 = state_19848;
(statearr_19872[(7)] = inst_19814__$1);

return statearr_19872;
})();
if(inst_19814__$1){
var statearr_19873_19905 = state_19848__$1;
(statearr_19873_19905[(1)] = (14));

} else {
var statearr_19874_19906 = state_19848__$1;
(statearr_19874_19906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (9))){
var inst_19836 = (state_19848[(2)]);
var inst_19837 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19848__$1 = (function (){var statearr_19875 = state_19848;
(statearr_19875[(15)] = inst_19836);

return statearr_19875;
})();
if(cljs.core.truth_(inst_19837)){
var statearr_19876_19907 = state_19848__$1;
(statearr_19876_19907[(1)] = (21));

} else {
var statearr_19877_19908 = state_19848__$1;
(statearr_19877_19908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (5))){
var inst_19792 = cljs.core.async.close_BANG_.call(null,out);
var state_19848__$1 = state_19848;
var statearr_19878_19909 = state_19848__$1;
(statearr_19878_19909[(2)] = inst_19792);

(statearr_19878_19909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (14))){
var inst_19814 = (state_19848[(7)]);
var inst_19816 = cljs.core.chunked_seq_QMARK_.call(null,inst_19814);
var state_19848__$1 = state_19848;
if(inst_19816){
var statearr_19879_19910 = state_19848__$1;
(statearr_19879_19910[(1)] = (17));

} else {
var statearr_19880_19911 = state_19848__$1;
(statearr_19880_19911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (16))){
var inst_19832 = (state_19848[(2)]);
var state_19848__$1 = state_19848;
var statearr_19881_19912 = state_19848__$1;
(statearr_19881_19912[(2)] = inst_19832);

(statearr_19881_19912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19849 === (10))){
var inst_19803 = (state_19848[(11)]);
var inst_19801 = (state_19848[(12)]);
var inst_19808 = cljs.core._nth.call(null,inst_19801,inst_19803);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19848__$1,(13),out,inst_19808);
} else {
if((state_val_19849 === (18))){
var inst_19814 = (state_19848[(7)]);
var inst_19823 = cljs.core.first.call(null,inst_19814);
var state_19848__$1 = state_19848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19848__$1,(20),out,inst_19823);
} else {
if((state_val_19849 === (8))){
var inst_19802 = (state_19848[(8)]);
var inst_19803 = (state_19848[(11)]);
var inst_19805 = (inst_19803 < inst_19802);
var inst_19806 = inst_19805;
var state_19848__$1 = state_19848;
if(cljs.core.truth_(inst_19806)){
var statearr_19882_19913 = state_19848__$1;
(statearr_19882_19913[(1)] = (10));

} else {
var statearr_19883_19914 = state_19848__$1;
(statearr_19883_19914[(1)] = (11));

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
});})(c__17391__auto__))
;
return ((function (switch__17279__auto__,c__17391__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_19887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19887[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__);

(statearr_19887[(1)] = (1));

return statearr_19887;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1 = (function (state_19848){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19888){if((e19888 instanceof Object)){
var ex__17283__auto__ = e19888;
var statearr_19889_19915 = state_19848;
(statearr_19889_19915[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19916 = state_19848;
state_19848 = G__19916;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = function(state_19848){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1.call(this,state_19848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto__))
})();
var state__17393__auto__ = (function (){var statearr_19890 = f__17392__auto__.call(null);
(statearr_19890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto__);

return statearr_19890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto__))
);

return c__17391__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19917.length)].join('')));

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
var args19924 = [];
var len__7484__auto___19927 = arguments.length;
var i__7485__auto___19928 = (0);
while(true){
if((i__7485__auto___19928 < len__7484__auto___19927)){
args19924.push((arguments[i__7485__auto___19928]));

var G__19929 = (i__7485__auto___19928 + (1));
i__7485__auto___19928 = G__19929;
continue;
} else {
}
break;
}

var G__19926 = args19924.length;
switch (G__19926) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19924.length)].join('')));

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
var args19931 = [];
var len__7484__auto___19982 = arguments.length;
var i__7485__auto___19983 = (0);
while(true){
if((i__7485__auto___19983 < len__7484__auto___19982)){
args19931.push((arguments[i__7485__auto___19983]));

var G__19984 = (i__7485__auto___19983 + (1));
i__7485__auto___19983 = G__19984;
continue;
} else {
}
break;
}

var G__19933 = args19931.length;
switch (G__19933) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19931.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___19986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___19986,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___19986,out){
return (function (state_19957){
var state_val_19958 = (state_19957[(1)]);
if((state_val_19958 === (7))){
var inst_19952 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19959_19987 = state_19957__$1;
(statearr_19959_19987[(2)] = inst_19952);

(statearr_19959_19987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (1))){
var inst_19934 = null;
var state_19957__$1 = (function (){var statearr_19960 = state_19957;
(statearr_19960[(7)] = inst_19934);

return statearr_19960;
})();
var statearr_19961_19988 = state_19957__$1;
(statearr_19961_19988[(2)] = null);

(statearr_19961_19988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (4))){
var inst_19937 = (state_19957[(8)]);
var inst_19937__$1 = (state_19957[(2)]);
var inst_19938 = (inst_19937__$1 == null);
var inst_19939 = cljs.core.not.call(null,inst_19938);
var state_19957__$1 = (function (){var statearr_19962 = state_19957;
(statearr_19962[(8)] = inst_19937__$1);

return statearr_19962;
})();
if(inst_19939){
var statearr_19963_19989 = state_19957__$1;
(statearr_19963_19989[(1)] = (5));

} else {
var statearr_19964_19990 = state_19957__$1;
(statearr_19964_19990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (6))){
var state_19957__$1 = state_19957;
var statearr_19965_19991 = state_19957__$1;
(statearr_19965_19991[(2)] = null);

(statearr_19965_19991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (3))){
var inst_19954 = (state_19957[(2)]);
var inst_19955 = cljs.core.async.close_BANG_.call(null,out);
var state_19957__$1 = (function (){var statearr_19966 = state_19957;
(statearr_19966[(9)] = inst_19954);

return statearr_19966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19957__$1,inst_19955);
} else {
if((state_val_19958 === (2))){
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19957__$1,(4),ch);
} else {
if((state_val_19958 === (11))){
var inst_19937 = (state_19957[(8)]);
var inst_19946 = (state_19957[(2)]);
var inst_19934 = inst_19937;
var state_19957__$1 = (function (){var statearr_19967 = state_19957;
(statearr_19967[(10)] = inst_19946);

(statearr_19967[(7)] = inst_19934);

return statearr_19967;
})();
var statearr_19968_19992 = state_19957__$1;
(statearr_19968_19992[(2)] = null);

(statearr_19968_19992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (9))){
var inst_19937 = (state_19957[(8)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19957__$1,(11),out,inst_19937);
} else {
if((state_val_19958 === (5))){
var inst_19937 = (state_19957[(8)]);
var inst_19934 = (state_19957[(7)]);
var inst_19941 = cljs.core._EQ_.call(null,inst_19937,inst_19934);
var state_19957__$1 = state_19957;
if(inst_19941){
var statearr_19970_19993 = state_19957__$1;
(statearr_19970_19993[(1)] = (8));

} else {
var statearr_19971_19994 = state_19957__$1;
(statearr_19971_19994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (10))){
var inst_19949 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19972_19995 = state_19957__$1;
(statearr_19972_19995[(2)] = inst_19949);

(statearr_19972_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19958 === (8))){
var inst_19934 = (state_19957[(7)]);
var tmp19969 = inst_19934;
var inst_19934__$1 = tmp19969;
var state_19957__$1 = (function (){var statearr_19973 = state_19957;
(statearr_19973[(7)] = inst_19934__$1);

return statearr_19973;
})();
var statearr_19974_19996 = state_19957__$1;
(statearr_19974_19996[(2)] = null);

(statearr_19974_19996[(1)] = (2));


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
});})(c__17391__auto___19986,out))
;
return ((function (switch__17279__auto__,c__17391__auto___19986,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19978[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19978[(1)] = (1));

return statearr_19978;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19957){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_19957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19979){if((e19979 instanceof Object)){
var ex__17283__auto__ = e19979;
var statearr_19980_19997 = state_19957;
(statearr_19980_19997[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19998 = state_19957;
state_19957 = G__19998;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___19986,out))
})();
var state__17393__auto__ = (function (){var statearr_19981 = f__17392__auto__.call(null);
(statearr_19981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___19986);

return statearr_19981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___19986,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19999 = [];
var len__7484__auto___20069 = arguments.length;
var i__7485__auto___20070 = (0);
while(true){
if((i__7485__auto___20070 < len__7484__auto___20069)){
args19999.push((arguments[i__7485__auto___20070]));

var G__20071 = (i__7485__auto___20070 + (1));
i__7485__auto___20070 = G__20071;
continue;
} else {
}
break;
}

var G__20001 = args19999.length;
switch (G__20001) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19999.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___20073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___20073,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___20073,out){
return (function (state_20039){
var state_val_20040 = (state_20039[(1)]);
if((state_val_20040 === (7))){
var inst_20035 = (state_20039[(2)]);
var state_20039__$1 = state_20039;
var statearr_20041_20074 = state_20039__$1;
(statearr_20041_20074[(2)] = inst_20035);

(statearr_20041_20074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (1))){
var inst_20002 = (new Array(n));
var inst_20003 = inst_20002;
var inst_20004 = (0);
var state_20039__$1 = (function (){var statearr_20042 = state_20039;
(statearr_20042[(7)] = inst_20003);

(statearr_20042[(8)] = inst_20004);

return statearr_20042;
})();
var statearr_20043_20075 = state_20039__$1;
(statearr_20043_20075[(2)] = null);

(statearr_20043_20075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (4))){
var inst_20007 = (state_20039[(9)]);
var inst_20007__$1 = (state_20039[(2)]);
var inst_20008 = (inst_20007__$1 == null);
var inst_20009 = cljs.core.not.call(null,inst_20008);
var state_20039__$1 = (function (){var statearr_20044 = state_20039;
(statearr_20044[(9)] = inst_20007__$1);

return statearr_20044;
})();
if(inst_20009){
var statearr_20045_20076 = state_20039__$1;
(statearr_20045_20076[(1)] = (5));

} else {
var statearr_20046_20077 = state_20039__$1;
(statearr_20046_20077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (15))){
var inst_20029 = (state_20039[(2)]);
var state_20039__$1 = state_20039;
var statearr_20047_20078 = state_20039__$1;
(statearr_20047_20078[(2)] = inst_20029);

(statearr_20047_20078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (13))){
var state_20039__$1 = state_20039;
var statearr_20048_20079 = state_20039__$1;
(statearr_20048_20079[(2)] = null);

(statearr_20048_20079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (6))){
var inst_20004 = (state_20039[(8)]);
var inst_20025 = (inst_20004 > (0));
var state_20039__$1 = state_20039;
if(cljs.core.truth_(inst_20025)){
var statearr_20049_20080 = state_20039__$1;
(statearr_20049_20080[(1)] = (12));

} else {
var statearr_20050_20081 = state_20039__$1;
(statearr_20050_20081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (3))){
var inst_20037 = (state_20039[(2)]);
var state_20039__$1 = state_20039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20039__$1,inst_20037);
} else {
if((state_val_20040 === (12))){
var inst_20003 = (state_20039[(7)]);
var inst_20027 = cljs.core.vec.call(null,inst_20003);
var state_20039__$1 = state_20039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20039__$1,(15),out,inst_20027);
} else {
if((state_val_20040 === (2))){
var state_20039__$1 = state_20039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20039__$1,(4),ch);
} else {
if((state_val_20040 === (11))){
var inst_20019 = (state_20039[(2)]);
var inst_20020 = (new Array(n));
var inst_20003 = inst_20020;
var inst_20004 = (0);
var state_20039__$1 = (function (){var statearr_20051 = state_20039;
(statearr_20051[(7)] = inst_20003);

(statearr_20051[(8)] = inst_20004);

(statearr_20051[(10)] = inst_20019);

return statearr_20051;
})();
var statearr_20052_20082 = state_20039__$1;
(statearr_20052_20082[(2)] = null);

(statearr_20052_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (9))){
var inst_20003 = (state_20039[(7)]);
var inst_20017 = cljs.core.vec.call(null,inst_20003);
var state_20039__$1 = state_20039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20039__$1,(11),out,inst_20017);
} else {
if((state_val_20040 === (5))){
var inst_20007 = (state_20039[(9)]);
var inst_20003 = (state_20039[(7)]);
var inst_20004 = (state_20039[(8)]);
var inst_20012 = (state_20039[(11)]);
var inst_20011 = (inst_20003[inst_20004] = inst_20007);
var inst_20012__$1 = (inst_20004 + (1));
var inst_20013 = (inst_20012__$1 < n);
var state_20039__$1 = (function (){var statearr_20053 = state_20039;
(statearr_20053[(12)] = inst_20011);

(statearr_20053[(11)] = inst_20012__$1);

return statearr_20053;
})();
if(cljs.core.truth_(inst_20013)){
var statearr_20054_20083 = state_20039__$1;
(statearr_20054_20083[(1)] = (8));

} else {
var statearr_20055_20084 = state_20039__$1;
(statearr_20055_20084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (14))){
var inst_20032 = (state_20039[(2)]);
var inst_20033 = cljs.core.async.close_BANG_.call(null,out);
var state_20039__$1 = (function (){var statearr_20057 = state_20039;
(statearr_20057[(13)] = inst_20032);

return statearr_20057;
})();
var statearr_20058_20085 = state_20039__$1;
(statearr_20058_20085[(2)] = inst_20033);

(statearr_20058_20085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (10))){
var inst_20023 = (state_20039[(2)]);
var state_20039__$1 = state_20039;
var statearr_20059_20086 = state_20039__$1;
(statearr_20059_20086[(2)] = inst_20023);

(statearr_20059_20086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20040 === (8))){
var inst_20003 = (state_20039[(7)]);
var inst_20012 = (state_20039[(11)]);
var tmp20056 = inst_20003;
var inst_20003__$1 = tmp20056;
var inst_20004 = inst_20012;
var state_20039__$1 = (function (){var statearr_20060 = state_20039;
(statearr_20060[(7)] = inst_20003__$1);

(statearr_20060[(8)] = inst_20004);

return statearr_20060;
})();
var statearr_20061_20087 = state_20039__$1;
(statearr_20061_20087[(2)] = null);

(statearr_20061_20087[(1)] = (2));


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
});})(c__17391__auto___20073,out))
;
return ((function (switch__17279__auto__,c__17391__auto___20073,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_20065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20065[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_20065[(1)] = (1));

return statearr_20065;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_20039){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_20039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e20066){if((e20066 instanceof Object)){
var ex__17283__auto__ = e20066;
var statearr_20067_20088 = state_20039;
(statearr_20067_20088[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20089 = state_20039;
state_20039 = G__20089;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_20039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_20039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___20073,out))
})();
var state__17393__auto__ = (function (){var statearr_20068 = f__17392__auto__.call(null);
(statearr_20068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___20073);

return statearr_20068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___20073,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20090 = [];
var len__7484__auto___20164 = arguments.length;
var i__7485__auto___20165 = (0);
while(true){
if((i__7485__auto___20165 < len__7484__auto___20164)){
args20090.push((arguments[i__7485__auto___20165]));

var G__20166 = (i__7485__auto___20165 + (1));
i__7485__auto___20165 = G__20166;
continue;
} else {
}
break;
}

var G__20092 = args20090.length;
switch (G__20092) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20090.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17391__auto___20168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17391__auto___20168,out){
return (function (){
var f__17392__auto__ = (function (){var switch__17279__auto__ = ((function (c__17391__auto___20168,out){
return (function (state_20134){
var state_val_20135 = (state_20134[(1)]);
if((state_val_20135 === (7))){
var inst_20130 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20136_20169 = state_20134__$1;
(statearr_20136_20169[(2)] = inst_20130);

(statearr_20136_20169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (1))){
var inst_20093 = [];
var inst_20094 = inst_20093;
var inst_20095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20134__$1 = (function (){var statearr_20137 = state_20134;
(statearr_20137[(7)] = inst_20094);

(statearr_20137[(8)] = inst_20095);

return statearr_20137;
})();
var statearr_20138_20170 = state_20134__$1;
(statearr_20138_20170[(2)] = null);

(statearr_20138_20170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (4))){
var inst_20098 = (state_20134[(9)]);
var inst_20098__$1 = (state_20134[(2)]);
var inst_20099 = (inst_20098__$1 == null);
var inst_20100 = cljs.core.not.call(null,inst_20099);
var state_20134__$1 = (function (){var statearr_20139 = state_20134;
(statearr_20139[(9)] = inst_20098__$1);

return statearr_20139;
})();
if(inst_20100){
var statearr_20140_20171 = state_20134__$1;
(statearr_20140_20171[(1)] = (5));

} else {
var statearr_20141_20172 = state_20134__$1;
(statearr_20141_20172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (15))){
var inst_20124 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20142_20173 = state_20134__$1;
(statearr_20142_20173[(2)] = inst_20124);

(statearr_20142_20173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (13))){
var state_20134__$1 = state_20134;
var statearr_20143_20174 = state_20134__$1;
(statearr_20143_20174[(2)] = null);

(statearr_20143_20174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (6))){
var inst_20094 = (state_20134[(7)]);
var inst_20119 = inst_20094.length;
var inst_20120 = (inst_20119 > (0));
var state_20134__$1 = state_20134;
if(cljs.core.truth_(inst_20120)){
var statearr_20144_20175 = state_20134__$1;
(statearr_20144_20175[(1)] = (12));

} else {
var statearr_20145_20176 = state_20134__$1;
(statearr_20145_20176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (3))){
var inst_20132 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20134__$1,inst_20132);
} else {
if((state_val_20135 === (12))){
var inst_20094 = (state_20134[(7)]);
var inst_20122 = cljs.core.vec.call(null,inst_20094);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20134__$1,(15),out,inst_20122);
} else {
if((state_val_20135 === (2))){
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20134__$1,(4),ch);
} else {
if((state_val_20135 === (11))){
var inst_20102 = (state_20134[(10)]);
var inst_20098 = (state_20134[(9)]);
var inst_20112 = (state_20134[(2)]);
var inst_20113 = [];
var inst_20114 = inst_20113.push(inst_20098);
var inst_20094 = inst_20113;
var inst_20095 = inst_20102;
var state_20134__$1 = (function (){var statearr_20146 = state_20134;
(statearr_20146[(11)] = inst_20112);

(statearr_20146[(12)] = inst_20114);

(statearr_20146[(7)] = inst_20094);

(statearr_20146[(8)] = inst_20095);

return statearr_20146;
})();
var statearr_20147_20177 = state_20134__$1;
(statearr_20147_20177[(2)] = null);

(statearr_20147_20177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (9))){
var inst_20094 = (state_20134[(7)]);
var inst_20110 = cljs.core.vec.call(null,inst_20094);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20134__$1,(11),out,inst_20110);
} else {
if((state_val_20135 === (5))){
var inst_20102 = (state_20134[(10)]);
var inst_20098 = (state_20134[(9)]);
var inst_20095 = (state_20134[(8)]);
var inst_20102__$1 = f.call(null,inst_20098);
var inst_20103 = cljs.core._EQ_.call(null,inst_20102__$1,inst_20095);
var inst_20104 = cljs.core.keyword_identical_QMARK_.call(null,inst_20095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20105 = (inst_20103) || (inst_20104);
var state_20134__$1 = (function (){var statearr_20148 = state_20134;
(statearr_20148[(10)] = inst_20102__$1);

return statearr_20148;
})();
if(cljs.core.truth_(inst_20105)){
var statearr_20149_20178 = state_20134__$1;
(statearr_20149_20178[(1)] = (8));

} else {
var statearr_20150_20179 = state_20134__$1;
(statearr_20150_20179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (14))){
var inst_20127 = (state_20134[(2)]);
var inst_20128 = cljs.core.async.close_BANG_.call(null,out);
var state_20134__$1 = (function (){var statearr_20152 = state_20134;
(statearr_20152[(13)] = inst_20127);

return statearr_20152;
})();
var statearr_20153_20180 = state_20134__$1;
(statearr_20153_20180[(2)] = inst_20128);

(statearr_20153_20180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (10))){
var inst_20117 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20154_20181 = state_20134__$1;
(statearr_20154_20181[(2)] = inst_20117);

(statearr_20154_20181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (8))){
var inst_20102 = (state_20134[(10)]);
var inst_20098 = (state_20134[(9)]);
var inst_20094 = (state_20134[(7)]);
var inst_20107 = inst_20094.push(inst_20098);
var tmp20151 = inst_20094;
var inst_20094__$1 = tmp20151;
var inst_20095 = inst_20102;
var state_20134__$1 = (function (){var statearr_20155 = state_20134;
(statearr_20155[(14)] = inst_20107);

(statearr_20155[(7)] = inst_20094__$1);

(statearr_20155[(8)] = inst_20095);

return statearr_20155;
})();
var statearr_20156_20182 = state_20134__$1;
(statearr_20156_20182[(2)] = null);

(statearr_20156_20182[(1)] = (2));


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
});})(c__17391__auto___20168,out))
;
return ((function (switch__17279__auto__,c__17391__auto___20168,out){
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_20160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20160[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_20160[(1)] = (1));

return statearr_20160;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_20134){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__.call(null,state_20134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e20161){if((e20161 instanceof Object)){
var ex__17283__auto__ = e20161;
var statearr_20162_20183 = state_20134;
(statearr_20162_20183[(5)] = ex__17283__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_20134;
state_20134 = G__20184;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_20134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_20134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
;})(switch__17279__auto__,c__17391__auto___20168,out))
})();
var state__17393__auto__ = (function (){var statearr_20163 = f__17392__auto__.call(null);
(statearr_20163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17391__auto___20168);

return statearr_20163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17393__auto__);
});})(c__17391__auto___20168,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484441658367
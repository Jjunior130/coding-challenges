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
var args17446 = [];
var len__7494__auto___17452 = arguments.length;
var i__7495__auto___17453 = (0);
while(true){
if((i__7495__auto___17453 < len__7494__auto___17452)){
args17446.push((arguments[i__7495__auto___17453]));

var G__17454 = (i__7495__auto___17453 + (1));
i__7495__auto___17453 = G__17454;
continue;
} else {
}
break;
}

var G__17448 = args17446.length;
switch (G__17448) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17446.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17449 = (function (f,blockable,meta17450){
this.f = f;
this.blockable = blockable;
this.meta17450 = meta17450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17451,meta17450__$1){
var self__ = this;
var _17451__$1 = this;
return (new cljs.core.async.t_cljs$core$async17449(self__.f,self__.blockable,meta17450__$1));
});

cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17451){
var self__ = this;
var _17451__$1 = this;
return self__.meta17450;
});

cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17450","meta17450",1118014411,null)], null);
});

cljs.core.async.t_cljs$core$async17449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17449";

cljs.core.async.t_cljs$core$async17449.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async17449");
});

cljs.core.async.__GT_t_cljs$core$async17449 = (function cljs$core$async$__GT_t_cljs$core$async17449(f__$1,blockable__$1,meta17450){
return (new cljs.core.async.t_cljs$core$async17449(f__$1,blockable__$1,meta17450));
});

}

return (new cljs.core.async.t_cljs$core$async17449(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17458 = [];
var len__7494__auto___17461 = arguments.length;
var i__7495__auto___17462 = (0);
while(true){
if((i__7495__auto___17462 < len__7494__auto___17461)){
args17458.push((arguments[i__7495__auto___17462]));

var G__17463 = (i__7495__auto___17462 + (1));
i__7495__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var G__17460 = args17458.length;
switch (G__17460) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17458.length)].join('')));

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
var args17465 = [];
var len__7494__auto___17468 = arguments.length;
var i__7495__auto___17469 = (0);
while(true){
if((i__7495__auto___17469 < len__7494__auto___17468)){
args17465.push((arguments[i__7495__auto___17469]));

var G__17470 = (i__7495__auto___17469 + (1));
i__7495__auto___17469 = G__17470;
continue;
} else {
}
break;
}

var G__17467 = args17465.length;
switch (G__17467) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17465.length)].join('')));

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
var args17472 = [];
var len__7494__auto___17475 = arguments.length;
var i__7495__auto___17476 = (0);
while(true){
if((i__7495__auto___17476 < len__7494__auto___17475)){
args17472.push((arguments[i__7495__auto___17476]));

var G__17477 = (i__7495__auto___17476 + (1));
i__7495__auto___17476 = G__17477;
continue;
} else {
}
break;
}

var G__17474 = args17472.length;
switch (G__17474) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17472.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17479 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17479);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17479,ret){
return (function (){
return fn1.call(null,val_17479);
});})(val_17479,ret))
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
var args17480 = [];
var len__7494__auto___17483 = arguments.length;
var i__7495__auto___17484 = (0);
while(true){
if((i__7495__auto___17484 < len__7494__auto___17483)){
args17480.push((arguments[i__7495__auto___17484]));

var G__17485 = (i__7495__auto___17484 + (1));
i__7495__auto___17484 = G__17485;
continue;
} else {
}
break;
}

var G__17482 = args17480.length;
switch (G__17482) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17480.length)].join('')));

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
var n__7334__auto___17487 = n;
var x_17488 = (0);
while(true){
if((x_17488 < n__7334__auto___17487)){
(a[x_17488] = (0));

var G__17489 = (x_17488 + (1));
x_17488 = G__17489;
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

var G__17490 = (i + (1));
i = G__17490;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17494 = (function (alt_flag,flag,meta17495){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17495 = meta17495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17496,meta17495__$1){
var self__ = this;
var _17496__$1 = this;
return (new cljs.core.async.t_cljs$core$async17494(self__.alt_flag,self__.flag,meta17495__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17496){
var self__ = this;
var _17496__$1 = this;
return self__.meta17495;
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17495","meta17495",1907903016,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17494";

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async17494");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17494 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17494(alt_flag__$1,flag__$1,meta17495){
return (new cljs.core.async.t_cljs$core$async17494(alt_flag__$1,flag__$1,meta17495));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17494(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17500 = (function (alt_handler,flag,cb,meta17501){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17501 = meta17501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17502,meta17501__$1){
var self__ = this;
var _17502__$1 = this;
return (new cljs.core.async.t_cljs$core$async17500(self__.alt_handler,self__.flag,self__.cb,meta17501__$1));
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17502){
var self__ = this;
var _17502__$1 = this;
return self__.meta17501;
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17501","meta17501",-1609133597,null)], null);
});

cljs.core.async.t_cljs$core$async17500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17500";

cljs.core.async.t_cljs$core$async17500.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async17500");
});

cljs.core.async.__GT_t_cljs$core$async17500 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17500(alt_handler__$1,flag__$1,cb__$1,meta17501){
return (new cljs.core.async.t_cljs$core$async17500(alt_handler__$1,flag__$1,cb__$1,meta17501));
});

}

return (new cljs.core.async.t_cljs$core$async17500(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17503_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17503_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17504_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17504_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6419__auto__ = wport;
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17505 = (i + (1));
i = G__17505;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6419__auto__ = ret;
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6407__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6407__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6407__auto__;
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
var args__7501__auto__ = [];
var len__7494__auto___17511 = arguments.length;
var i__7495__auto___17512 = (0);
while(true){
if((i__7495__auto___17512 < len__7494__auto___17511)){
args__7501__auto__.push((arguments[i__7495__auto___17512]));

var G__17513 = (i__7495__auto___17512 + (1));
i__7495__auto___17512 = G__17513;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((1) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7502__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17508){
var map__17509 = p__17508;
var map__17509__$1 = ((((!((map__17509 == null)))?((((map__17509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17509):map__17509);
var opts = map__17509__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17506){
var G__17507 = cljs.core.first.call(null,seq17506);
var seq17506__$1 = cljs.core.next.call(null,seq17506);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17507,seq17506__$1);
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
var args17514 = [];
var len__7494__auto___17564 = arguments.length;
var i__7495__auto___17565 = (0);
while(true){
if((i__7495__auto___17565 < len__7494__auto___17564)){
args17514.push((arguments[i__7495__auto___17565]));

var G__17566 = (i__7495__auto___17565 + (1));
i__7495__auto___17565 = G__17566;
continue;
} else {
}
break;
}

var G__17516 = args17514.length;
switch (G__17516) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17514.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17401__auto___17568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___17568){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___17568){
return (function (state_17540){
var state_val_17541 = (state_17540[(1)]);
if((state_val_17541 === (7))){
var inst_17536 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17542_17569 = state_17540__$1;
(statearr_17542_17569[(2)] = inst_17536);

(statearr_17542_17569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (1))){
var state_17540__$1 = state_17540;
var statearr_17543_17570 = state_17540__$1;
(statearr_17543_17570[(2)] = null);

(statearr_17543_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (4))){
var inst_17519 = (state_17540[(7)]);
var inst_17519__$1 = (state_17540[(2)]);
var inst_17520 = (inst_17519__$1 == null);
var state_17540__$1 = (function (){var statearr_17544 = state_17540;
(statearr_17544[(7)] = inst_17519__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17520)){
var statearr_17545_17571 = state_17540__$1;
(statearr_17545_17571[(1)] = (5));

} else {
var statearr_17546_17572 = state_17540__$1;
(statearr_17546_17572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (13))){
var state_17540__$1 = state_17540;
var statearr_17547_17573 = state_17540__$1;
(statearr_17547_17573[(2)] = null);

(statearr_17547_17573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (6))){
var inst_17519 = (state_17540[(7)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17540__$1,(11),to,inst_17519);
} else {
if((state_val_17541 === (3))){
var inst_17538 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17540__$1,inst_17538);
} else {
if((state_val_17541 === (12))){
var state_17540__$1 = state_17540;
var statearr_17548_17574 = state_17540__$1;
(statearr_17548_17574[(2)] = null);

(statearr_17548_17574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (2))){
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17540__$1,(4),from);
} else {
if((state_val_17541 === (11))){
var inst_17529 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
if(cljs.core.truth_(inst_17529)){
var statearr_17549_17575 = state_17540__$1;
(statearr_17549_17575[(1)] = (12));

} else {
var statearr_17550_17576 = state_17540__$1;
(statearr_17550_17576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (9))){
var state_17540__$1 = state_17540;
var statearr_17551_17577 = state_17540__$1;
(statearr_17551_17577[(2)] = null);

(statearr_17551_17577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (5))){
var state_17540__$1 = state_17540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17552_17578 = state_17540__$1;
(statearr_17552_17578[(1)] = (8));

} else {
var statearr_17553_17579 = state_17540__$1;
(statearr_17553_17579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (14))){
var inst_17534 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17554_17580 = state_17540__$1;
(statearr_17554_17580[(2)] = inst_17534);

(statearr_17554_17580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (10))){
var inst_17526 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17555_17581 = state_17540__$1;
(statearr_17555_17581[(2)] = inst_17526);

(statearr_17555_17581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (8))){
var inst_17523 = cljs.core.async.close_BANG_.call(null,to);
var state_17540__$1 = state_17540;
var statearr_17556_17582 = state_17540__$1;
(statearr_17556_17582[(2)] = inst_17523);

(statearr_17556_17582[(1)] = (10));


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
});})(c__17401__auto___17568))
;
return ((function (switch__17289__auto__,c__17401__auto___17568){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_17560 = [null,null,null,null,null,null,null,null];
(statearr_17560[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_17560[(1)] = (1));

return statearr_17560;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_17540){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17561){if((e17561 instanceof Object)){
var ex__17293__auto__ = e17561;
var statearr_17562_17583 = state_17540;
(statearr_17562_17583[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17584 = state_17540;
state_17540 = G__17584;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_17540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_17540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___17568))
})();
var state__17403__auto__ = (function (){var statearr_17563 = f__17402__auto__.call(null);
(statearr_17563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___17568);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___17568))
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
return (function (p__17772){
var vec__17773 = p__17772;
var v = cljs.core.nth.call(null,vec__17773,(0),null);
var p = cljs.core.nth.call(null,vec__17773,(1),null);
var job = vec__17773;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17401__auto___17959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results){
return (function (state_17780){
var state_val_17781 = (state_17780[(1)]);
if((state_val_17781 === (1))){
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17780__$1,(2),res,v);
} else {
if((state_val_17781 === (2))){
var inst_17777 = (state_17780[(2)]);
var inst_17778 = cljs.core.async.close_BANG_.call(null,res);
var state_17780__$1 = (function (){var statearr_17782 = state_17780;
(statearr_17782[(7)] = inst_17777);

return statearr_17782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17780__$1,inst_17778);
} else {
return null;
}
}
});})(c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results))
;
return ((function (switch__17289__auto__,c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1 = (function (state_17780){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17787){if((e17787 instanceof Object)){
var ex__17293__auto__ = e17787;
var statearr_17788_17960 = state_17780;
(statearr_17788_17960[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17961 = state_17780;
state_17780 = G__17961;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = function(state_17780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1.call(this,state_17780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results))
})();
var state__17403__auto__ = (function (){var statearr_17789 = f__17402__auto__.call(null);
(statearr_17789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___17959);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___17959,res,vec__17773,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17790){
var vec__17791 = p__17790;
var v = cljs.core.nth.call(null,vec__17791,(0),null);
var p = cljs.core.nth.call(null,vec__17791,(1),null);
var job = vec__17791;
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
var n__7334__auto___17962 = n;
var __17963 = (0);
while(true){
if((__17963 < n__7334__auto___17962)){
var G__17794_17964 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17794_17964) {
case "compute":
var c__17401__auto___17966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17963,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (__17963,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function (state_17807){
var state_val_17808 = (state_17807[(1)]);
if((state_val_17808 === (1))){
var state_17807__$1 = state_17807;
var statearr_17809_17967 = state_17807__$1;
(statearr_17809_17967[(2)] = null);

(statearr_17809_17967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (2))){
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(4),jobs);
} else {
if((state_val_17808 === (3))){
var inst_17805 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else {
if((state_val_17808 === (4))){
var inst_17797 = (state_17807[(2)]);
var inst_17798 = process.call(null,inst_17797);
var state_17807__$1 = state_17807;
if(cljs.core.truth_(inst_17798)){
var statearr_17810_17968 = state_17807__$1;
(statearr_17810_17968[(1)] = (5));

} else {
var statearr_17811_17969 = state_17807__$1;
(statearr_17811_17969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (5))){
var state_17807__$1 = state_17807;
var statearr_17812_17970 = state_17807__$1;
(statearr_17812_17970[(2)] = null);

(statearr_17812_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (6))){
var state_17807__$1 = state_17807;
var statearr_17813_17971 = state_17807__$1;
(statearr_17813_17971[(2)] = null);

(statearr_17813_17971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (7))){
var inst_17803 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
var statearr_17814_17972 = state_17807__$1;
(statearr_17814_17972[(2)] = inst_17803);

(statearr_17814_17972[(1)] = (3));


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
});})(__17963,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
;
return ((function (__17963,switch__17289__auto__,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_17818 = [null,null,null,null,null,null,null];
(statearr_17818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__);

(statearr_17818[(1)] = (1));

return statearr_17818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1 = (function (state_17807){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17819){if((e17819 instanceof Object)){
var ex__17293__auto__ = e17819;
var statearr_17820_17973 = state_17807;
(statearr_17820_17973[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17974 = state_17807;
state_17807 = G__17974;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__;
})()
;})(__17963,switch__17289__auto__,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
})();
var state__17403__auto__ = (function (){var statearr_17821 = f__17402__auto__.call(null);
(statearr_17821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___17966);

return statearr_17821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(__17963,c__17401__auto___17966,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
);


break;
case "async":
var c__17401__auto___17975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17963,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (__17963,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function (state_17834){
var state_val_17835 = (state_17834[(1)]);
if((state_val_17835 === (1))){
var state_17834__$1 = state_17834;
var statearr_17836_17976 = state_17834__$1;
(statearr_17836_17976[(2)] = null);

(statearr_17836_17976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (2))){
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17834__$1,(4),jobs);
} else {
if((state_val_17835 === (3))){
var inst_17832 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17834__$1,inst_17832);
} else {
if((state_val_17835 === (4))){
var inst_17824 = (state_17834[(2)]);
var inst_17825 = async.call(null,inst_17824);
var state_17834__$1 = state_17834;
if(cljs.core.truth_(inst_17825)){
var statearr_17837_17977 = state_17834__$1;
(statearr_17837_17977[(1)] = (5));

} else {
var statearr_17838_17978 = state_17834__$1;
(statearr_17838_17978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (5))){
var state_17834__$1 = state_17834;
var statearr_17839_17979 = state_17834__$1;
(statearr_17839_17979[(2)] = null);

(statearr_17839_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (6))){
var state_17834__$1 = state_17834;
var statearr_17840_17980 = state_17834__$1;
(statearr_17840_17980[(2)] = null);

(statearr_17840_17980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (7))){
var inst_17830 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17841_17981 = state_17834__$1;
(statearr_17841_17981[(2)] = inst_17830);

(statearr_17841_17981[(1)] = (3));


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
});})(__17963,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
;
return ((function (__17963,switch__17289__auto__,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_17845 = [null,null,null,null,null,null,null];
(statearr_17845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__);

(statearr_17845[(1)] = (1));

return statearr_17845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1 = (function (state_17834){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17846){if((e17846 instanceof Object)){
var ex__17293__auto__ = e17846;
var statearr_17847_17982 = state_17834;
(statearr_17847_17982[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17983 = state_17834;
state_17834 = G__17983;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = function(state_17834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1.call(this,state_17834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__;
})()
;})(__17963,switch__17289__auto__,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
})();
var state__17403__auto__ = (function (){var statearr_17848 = f__17402__auto__.call(null);
(statearr_17848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___17975);

return statearr_17848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(__17963,c__17401__auto___17975,G__17794_17964,n__7334__auto___17962,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17984 = (__17963 + (1));
__17963 = G__17984;
continue;
} else {
}
break;
}

var c__17401__auto___17985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___17985,jobs,results,process,async){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___17985,jobs,results,process,async){
return (function (state_17870){
var state_val_17871 = (state_17870[(1)]);
if((state_val_17871 === (1))){
var state_17870__$1 = state_17870;
var statearr_17872_17986 = state_17870__$1;
(statearr_17872_17986[(2)] = null);

(statearr_17872_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (2))){
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(4),from);
} else {
if((state_val_17871 === (3))){
var inst_17868 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17870__$1,inst_17868);
} else {
if((state_val_17871 === (4))){
var inst_17851 = (state_17870[(7)]);
var inst_17851__$1 = (state_17870[(2)]);
var inst_17852 = (inst_17851__$1 == null);
var state_17870__$1 = (function (){var statearr_17873 = state_17870;
(statearr_17873[(7)] = inst_17851__$1);

return statearr_17873;
})();
if(cljs.core.truth_(inst_17852)){
var statearr_17874_17987 = state_17870__$1;
(statearr_17874_17987[(1)] = (5));

} else {
var statearr_17875_17988 = state_17870__$1;
(statearr_17875_17988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (5))){
var inst_17854 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17870__$1 = state_17870;
var statearr_17876_17989 = state_17870__$1;
(statearr_17876_17989[(2)] = inst_17854);

(statearr_17876_17989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (6))){
var inst_17856 = (state_17870[(8)]);
var inst_17851 = (state_17870[(7)]);
var inst_17856__$1 = cljs.core.async.chan.call(null,(1));
var inst_17857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17858 = [inst_17851,inst_17856__$1];
var inst_17859 = (new cljs.core.PersistentVector(null,2,(5),inst_17857,inst_17858,null));
var state_17870__$1 = (function (){var statearr_17877 = state_17870;
(statearr_17877[(8)] = inst_17856__$1);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17870__$1,(8),jobs,inst_17859);
} else {
if((state_val_17871 === (7))){
var inst_17866 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17878_17990 = state_17870__$1;
(statearr_17878_17990[(2)] = inst_17866);

(statearr_17878_17990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (8))){
var inst_17856 = (state_17870[(8)]);
var inst_17861 = (state_17870[(2)]);
var state_17870__$1 = (function (){var statearr_17879 = state_17870;
(statearr_17879[(9)] = inst_17861);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17870__$1,(9),results,inst_17856);
} else {
if((state_val_17871 === (9))){
var inst_17863 = (state_17870[(2)]);
var state_17870__$1 = (function (){var statearr_17880 = state_17870;
(statearr_17880[(10)] = inst_17863);

return statearr_17880;
})();
var statearr_17881_17991 = state_17870__$1;
(statearr_17881_17991[(2)] = null);

(statearr_17881_17991[(1)] = (2));


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
});})(c__17401__auto___17985,jobs,results,process,async))
;
return ((function (switch__17289__auto__,c__17401__auto___17985,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1 = (function (state_17870){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__17293__auto__ = e17886;
var statearr_17887_17992 = state_17870;
(statearr_17887_17992[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17993 = state_17870;
state_17870 = G__17993;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = function(state_17870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1.call(this,state_17870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___17985,jobs,results,process,async))
})();
var state__17403__auto__ = (function (){var statearr_17888 = f__17402__auto__.call(null);
(statearr_17888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___17985);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___17985,jobs,results,process,async))
);


var c__17401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto__,jobs,results,process,async){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto__,jobs,results,process,async){
return (function (state_17926){
var state_val_17927 = (state_17926[(1)]);
if((state_val_17927 === (7))){
var inst_17922 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17928_17994 = state_17926__$1;
(statearr_17928_17994[(2)] = inst_17922);

(statearr_17928_17994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (20))){
var state_17926__$1 = state_17926;
var statearr_17929_17995 = state_17926__$1;
(statearr_17929_17995[(2)] = null);

(statearr_17929_17995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (1))){
var state_17926__$1 = state_17926;
var statearr_17930_17996 = state_17926__$1;
(statearr_17930_17996[(2)] = null);

(statearr_17930_17996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (4))){
var inst_17891 = (state_17926[(7)]);
var inst_17891__$1 = (state_17926[(2)]);
var inst_17892 = (inst_17891__$1 == null);
var state_17926__$1 = (function (){var statearr_17931 = state_17926;
(statearr_17931[(7)] = inst_17891__$1);

return statearr_17931;
})();
if(cljs.core.truth_(inst_17892)){
var statearr_17932_17997 = state_17926__$1;
(statearr_17932_17997[(1)] = (5));

} else {
var statearr_17933_17998 = state_17926__$1;
(statearr_17933_17998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (15))){
var inst_17904 = (state_17926[(8)]);
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17926__$1,(18),to,inst_17904);
} else {
if((state_val_17927 === (21))){
var inst_17917 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17934_17999 = state_17926__$1;
(statearr_17934_17999[(2)] = inst_17917);

(statearr_17934_17999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (13))){
var inst_17919 = (state_17926[(2)]);
var state_17926__$1 = (function (){var statearr_17935 = state_17926;
(statearr_17935[(9)] = inst_17919);

return statearr_17935;
})();
var statearr_17936_18000 = state_17926__$1;
(statearr_17936_18000[(2)] = null);

(statearr_17936_18000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (6))){
var inst_17891 = (state_17926[(7)]);
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17926__$1,(11),inst_17891);
} else {
if((state_val_17927 === (17))){
var inst_17912 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
if(cljs.core.truth_(inst_17912)){
var statearr_17937_18001 = state_17926__$1;
(statearr_17937_18001[(1)] = (19));

} else {
var statearr_17938_18002 = state_17926__$1;
(statearr_17938_18002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (3))){
var inst_17924 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17926__$1,inst_17924);
} else {
if((state_val_17927 === (12))){
var inst_17901 = (state_17926[(10)]);
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17926__$1,(14),inst_17901);
} else {
if((state_val_17927 === (2))){
var state_17926__$1 = state_17926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17926__$1,(4),results);
} else {
if((state_val_17927 === (19))){
var state_17926__$1 = state_17926;
var statearr_17939_18003 = state_17926__$1;
(statearr_17939_18003[(2)] = null);

(statearr_17939_18003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (11))){
var inst_17901 = (state_17926[(2)]);
var state_17926__$1 = (function (){var statearr_17940 = state_17926;
(statearr_17940[(10)] = inst_17901);

return statearr_17940;
})();
var statearr_17941_18004 = state_17926__$1;
(statearr_17941_18004[(2)] = null);

(statearr_17941_18004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (9))){
var state_17926__$1 = state_17926;
var statearr_17942_18005 = state_17926__$1;
(statearr_17942_18005[(2)] = null);

(statearr_17942_18005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (5))){
var state_17926__$1 = state_17926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17943_18006 = state_17926__$1;
(statearr_17943_18006[(1)] = (8));

} else {
var statearr_17944_18007 = state_17926__$1;
(statearr_17944_18007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (14))){
var inst_17906 = (state_17926[(11)]);
var inst_17904 = (state_17926[(8)]);
var inst_17904__$1 = (state_17926[(2)]);
var inst_17905 = (inst_17904__$1 == null);
var inst_17906__$1 = cljs.core.not.call(null,inst_17905);
var state_17926__$1 = (function (){var statearr_17945 = state_17926;
(statearr_17945[(11)] = inst_17906__$1);

(statearr_17945[(8)] = inst_17904__$1);

return statearr_17945;
})();
if(inst_17906__$1){
var statearr_17946_18008 = state_17926__$1;
(statearr_17946_18008[(1)] = (15));

} else {
var statearr_17947_18009 = state_17926__$1;
(statearr_17947_18009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (16))){
var inst_17906 = (state_17926[(11)]);
var state_17926__$1 = state_17926;
var statearr_17948_18010 = state_17926__$1;
(statearr_17948_18010[(2)] = inst_17906);

(statearr_17948_18010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (10))){
var inst_17898 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17949_18011 = state_17926__$1;
(statearr_17949_18011[(2)] = inst_17898);

(statearr_17949_18011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (18))){
var inst_17909 = (state_17926[(2)]);
var state_17926__$1 = state_17926;
var statearr_17950_18012 = state_17926__$1;
(statearr_17950_18012[(2)] = inst_17909);

(statearr_17950_18012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17927 === (8))){
var inst_17895 = cljs.core.async.close_BANG_.call(null,to);
var state_17926__$1 = state_17926;
var statearr_17951_18013 = state_17926__$1;
(statearr_17951_18013[(2)] = inst_17895);

(statearr_17951_18013[(1)] = (10));


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
});})(c__17401__auto__,jobs,results,process,async))
;
return ((function (switch__17289__auto__,c__17401__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_17955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__);

(statearr_17955[(1)] = (1));

return statearr_17955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1 = (function (state_17926){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_17926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e17956){if((e17956 instanceof Object)){
var ex__17293__auto__ = e17956;
var statearr_17957_18014 = state_17926;
(statearr_17957_18014[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18015 = state_17926;
state_17926 = G__18015;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__ = function(state_17926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1.call(this,state_17926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto__,jobs,results,process,async))
})();
var state__17403__auto__ = (function (){var statearr_17958 = f__17402__auto__.call(null);
(statearr_17958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto__);

return statearr_17958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto__,jobs,results,process,async))
);

return c__17401__auto__;
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
var args18016 = [];
var len__7494__auto___18019 = arguments.length;
var i__7495__auto___18020 = (0);
while(true){
if((i__7495__auto___18020 < len__7494__auto___18019)){
args18016.push((arguments[i__7495__auto___18020]));

var G__18021 = (i__7495__auto___18020 + (1));
i__7495__auto___18020 = G__18021;
continue;
} else {
}
break;
}

var G__18018 = args18016.length;
switch (G__18018) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18016.length)].join('')));

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
var args18023 = [];
var len__7494__auto___18026 = arguments.length;
var i__7495__auto___18027 = (0);
while(true){
if((i__7495__auto___18027 < len__7494__auto___18026)){
args18023.push((arguments[i__7495__auto___18027]));

var G__18028 = (i__7495__auto___18027 + (1));
i__7495__auto___18027 = G__18028;
continue;
} else {
}
break;
}

var G__18025 = args18023.length;
switch (G__18025) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18023.length)].join('')));

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
var args18030 = [];
var len__7494__auto___18083 = arguments.length;
var i__7495__auto___18084 = (0);
while(true){
if((i__7495__auto___18084 < len__7494__auto___18083)){
args18030.push((arguments[i__7495__auto___18084]));

var G__18085 = (i__7495__auto___18084 + (1));
i__7495__auto___18084 = G__18085;
continue;
} else {
}
break;
}

var G__18032 = args18030.length;
switch (G__18032) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18030.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17401__auto___18087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___18087,tc,fc){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___18087,tc,fc){
return (function (state_18058){
var state_val_18059 = (state_18058[(1)]);
if((state_val_18059 === (7))){
var inst_18054 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18060_18088 = state_18058__$1;
(statearr_18060_18088[(2)] = inst_18054);

(statearr_18060_18088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (1))){
var state_18058__$1 = state_18058;
var statearr_18061_18089 = state_18058__$1;
(statearr_18061_18089[(2)] = null);

(statearr_18061_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (4))){
var inst_18035 = (state_18058[(7)]);
var inst_18035__$1 = (state_18058[(2)]);
var inst_18036 = (inst_18035__$1 == null);
var state_18058__$1 = (function (){var statearr_18062 = state_18058;
(statearr_18062[(7)] = inst_18035__$1);

return statearr_18062;
})();
if(cljs.core.truth_(inst_18036)){
var statearr_18063_18090 = state_18058__$1;
(statearr_18063_18090[(1)] = (5));

} else {
var statearr_18064_18091 = state_18058__$1;
(statearr_18064_18091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (13))){
var state_18058__$1 = state_18058;
var statearr_18065_18092 = state_18058__$1;
(statearr_18065_18092[(2)] = null);

(statearr_18065_18092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (6))){
var inst_18035 = (state_18058[(7)]);
var inst_18041 = p.call(null,inst_18035);
var state_18058__$1 = state_18058;
if(cljs.core.truth_(inst_18041)){
var statearr_18066_18093 = state_18058__$1;
(statearr_18066_18093[(1)] = (9));

} else {
var statearr_18067_18094 = state_18058__$1;
(statearr_18067_18094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (3))){
var inst_18056 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18058__$1,inst_18056);
} else {
if((state_val_18059 === (12))){
var state_18058__$1 = state_18058;
var statearr_18068_18095 = state_18058__$1;
(statearr_18068_18095[(2)] = null);

(statearr_18068_18095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (2))){
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18058__$1,(4),ch);
} else {
if((state_val_18059 === (11))){
var inst_18035 = (state_18058[(7)]);
var inst_18045 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18058__$1,(8),inst_18045,inst_18035);
} else {
if((state_val_18059 === (9))){
var state_18058__$1 = state_18058;
var statearr_18069_18096 = state_18058__$1;
(statearr_18069_18096[(2)] = tc);

(statearr_18069_18096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (5))){
var inst_18038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18039 = cljs.core.async.close_BANG_.call(null,fc);
var state_18058__$1 = (function (){var statearr_18070 = state_18058;
(statearr_18070[(8)] = inst_18038);

return statearr_18070;
})();
var statearr_18071_18097 = state_18058__$1;
(statearr_18071_18097[(2)] = inst_18039);

(statearr_18071_18097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (14))){
var inst_18052 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18072_18098 = state_18058__$1;
(statearr_18072_18098[(2)] = inst_18052);

(statearr_18072_18098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (10))){
var state_18058__$1 = state_18058;
var statearr_18073_18099 = state_18058__$1;
(statearr_18073_18099[(2)] = fc);

(statearr_18073_18099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (8))){
var inst_18047 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
if(cljs.core.truth_(inst_18047)){
var statearr_18074_18100 = state_18058__$1;
(statearr_18074_18100[(1)] = (12));

} else {
var statearr_18075_18101 = state_18058__$1;
(statearr_18075_18101[(1)] = (13));

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
});})(c__17401__auto___18087,tc,fc))
;
return ((function (switch__17289__auto__,c__17401__auto___18087,tc,fc){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_18079 = [null,null,null,null,null,null,null,null,null];
(statearr_18079[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_18079[(1)] = (1));

return statearr_18079;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_18058){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_18058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e18080){if((e18080 instanceof Object)){
var ex__17293__auto__ = e18080;
var statearr_18081_18102 = state_18058;
(statearr_18081_18102[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18103 = state_18058;
state_18058 = G__18103;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_18058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_18058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___18087,tc,fc))
})();
var state__17403__auto__ = (function (){var statearr_18082 = f__17402__auto__.call(null);
(statearr_18082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___18087);

return statearr_18082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___18087,tc,fc))
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
var c__17401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto__){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto__){
return (function (state_18167){
var state_val_18168 = (state_18167[(1)]);
if((state_val_18168 === (7))){
var inst_18163 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18169_18190 = state_18167__$1;
(statearr_18169_18190[(2)] = inst_18163);

(statearr_18169_18190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (1))){
var inst_18147 = init;
var state_18167__$1 = (function (){var statearr_18170 = state_18167;
(statearr_18170[(7)] = inst_18147);

return statearr_18170;
})();
var statearr_18171_18191 = state_18167__$1;
(statearr_18171_18191[(2)] = null);

(statearr_18171_18191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (4))){
var inst_18150 = (state_18167[(8)]);
var inst_18150__$1 = (state_18167[(2)]);
var inst_18151 = (inst_18150__$1 == null);
var state_18167__$1 = (function (){var statearr_18172 = state_18167;
(statearr_18172[(8)] = inst_18150__$1);

return statearr_18172;
})();
if(cljs.core.truth_(inst_18151)){
var statearr_18173_18192 = state_18167__$1;
(statearr_18173_18192[(1)] = (5));

} else {
var statearr_18174_18193 = state_18167__$1;
(statearr_18174_18193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (6))){
var inst_18150 = (state_18167[(8)]);
var inst_18147 = (state_18167[(7)]);
var inst_18154 = (state_18167[(9)]);
var inst_18154__$1 = f.call(null,inst_18147,inst_18150);
var inst_18155 = cljs.core.reduced_QMARK_.call(null,inst_18154__$1);
var state_18167__$1 = (function (){var statearr_18175 = state_18167;
(statearr_18175[(9)] = inst_18154__$1);

return statearr_18175;
})();
if(inst_18155){
var statearr_18176_18194 = state_18167__$1;
(statearr_18176_18194[(1)] = (8));

} else {
var statearr_18177_18195 = state_18167__$1;
(statearr_18177_18195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (3))){
var inst_18165 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18167__$1,inst_18165);
} else {
if((state_val_18168 === (2))){
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18167__$1,(4),ch);
} else {
if((state_val_18168 === (9))){
var inst_18154 = (state_18167[(9)]);
var inst_18147 = inst_18154;
var state_18167__$1 = (function (){var statearr_18178 = state_18167;
(statearr_18178[(7)] = inst_18147);

return statearr_18178;
})();
var statearr_18179_18196 = state_18167__$1;
(statearr_18179_18196[(2)] = null);

(statearr_18179_18196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (5))){
var inst_18147 = (state_18167[(7)]);
var state_18167__$1 = state_18167;
var statearr_18180_18197 = state_18167__$1;
(statearr_18180_18197[(2)] = inst_18147);

(statearr_18180_18197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (10))){
var inst_18161 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18181_18198 = state_18167__$1;
(statearr_18181_18198[(2)] = inst_18161);

(statearr_18181_18198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (8))){
var inst_18154 = (state_18167[(9)]);
var inst_18157 = cljs.core.deref.call(null,inst_18154);
var state_18167__$1 = state_18167;
var statearr_18182_18199 = state_18167__$1;
(statearr_18182_18199[(2)] = inst_18157);

(statearr_18182_18199[(1)] = (10));


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
});})(c__17401__auto__))
;
return ((function (switch__17289__auto__,c__17401__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17290__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17290__auto____0 = (function (){
var statearr_18186 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18186[(0)] = cljs$core$async$reduce_$_state_machine__17290__auto__);

(statearr_18186[(1)] = (1));

return statearr_18186;
});
var cljs$core$async$reduce_$_state_machine__17290__auto____1 = (function (state_18167){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_18167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e18187){if((e18187 instanceof Object)){
var ex__17293__auto__ = e18187;
var statearr_18188_18200 = state_18167;
(statearr_18188_18200[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_18167;
state_18167 = G__18201;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17290__auto__ = function(state_18167){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17290__auto____1.call(this,state_18167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17290__auto____0;
cljs$core$async$reduce_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17290__auto____1;
return cljs$core$async$reduce_$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto__))
})();
var state__17403__auto__ = (function (){var statearr_18189 = f__17402__auto__.call(null);
(statearr_18189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto__);

return statearr_18189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto__))
);

return c__17401__auto__;
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
var args18202 = [];
var len__7494__auto___18254 = arguments.length;
var i__7495__auto___18255 = (0);
while(true){
if((i__7495__auto___18255 < len__7494__auto___18254)){
args18202.push((arguments[i__7495__auto___18255]));

var G__18256 = (i__7495__auto___18255 + (1));
i__7495__auto___18255 = G__18256;
continue;
} else {
}
break;
}

var G__18204 = args18202.length;
switch (G__18204) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18202.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto__){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto__){
return (function (state_18229){
var state_val_18230 = (state_18229[(1)]);
if((state_val_18230 === (7))){
var inst_18211 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18231_18258 = state_18229__$1;
(statearr_18231_18258[(2)] = inst_18211);

(statearr_18231_18258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (1))){
var inst_18205 = cljs.core.seq.call(null,coll);
var inst_18206 = inst_18205;
var state_18229__$1 = (function (){var statearr_18232 = state_18229;
(statearr_18232[(7)] = inst_18206);

return statearr_18232;
})();
var statearr_18233_18259 = state_18229__$1;
(statearr_18233_18259[(2)] = null);

(statearr_18233_18259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (4))){
var inst_18206 = (state_18229[(7)]);
var inst_18209 = cljs.core.first.call(null,inst_18206);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18229__$1,(7),ch,inst_18209);
} else {
if((state_val_18230 === (13))){
var inst_18223 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18234_18260 = state_18229__$1;
(statearr_18234_18260[(2)] = inst_18223);

(statearr_18234_18260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (6))){
var inst_18214 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
if(cljs.core.truth_(inst_18214)){
var statearr_18235_18261 = state_18229__$1;
(statearr_18235_18261[(1)] = (8));

} else {
var statearr_18236_18262 = state_18229__$1;
(statearr_18236_18262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (3))){
var inst_18227 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18229__$1,inst_18227);
} else {
if((state_val_18230 === (12))){
var state_18229__$1 = state_18229;
var statearr_18237_18263 = state_18229__$1;
(statearr_18237_18263[(2)] = null);

(statearr_18237_18263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (2))){
var inst_18206 = (state_18229[(7)]);
var state_18229__$1 = state_18229;
if(cljs.core.truth_(inst_18206)){
var statearr_18238_18264 = state_18229__$1;
(statearr_18238_18264[(1)] = (4));

} else {
var statearr_18239_18265 = state_18229__$1;
(statearr_18239_18265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (11))){
var inst_18220 = cljs.core.async.close_BANG_.call(null,ch);
var state_18229__$1 = state_18229;
var statearr_18240_18266 = state_18229__$1;
(statearr_18240_18266[(2)] = inst_18220);

(statearr_18240_18266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (9))){
var state_18229__$1 = state_18229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18241_18267 = state_18229__$1;
(statearr_18241_18267[(1)] = (11));

} else {
var statearr_18242_18268 = state_18229__$1;
(statearr_18242_18268[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (5))){
var inst_18206 = (state_18229[(7)]);
var state_18229__$1 = state_18229;
var statearr_18243_18269 = state_18229__$1;
(statearr_18243_18269[(2)] = inst_18206);

(statearr_18243_18269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (10))){
var inst_18225 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18244_18270 = state_18229__$1;
(statearr_18244_18270[(2)] = inst_18225);

(statearr_18244_18270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (8))){
var inst_18206 = (state_18229[(7)]);
var inst_18216 = cljs.core.next.call(null,inst_18206);
var inst_18206__$1 = inst_18216;
var state_18229__$1 = (function (){var statearr_18245 = state_18229;
(statearr_18245[(7)] = inst_18206__$1);

return statearr_18245;
})();
var statearr_18246_18271 = state_18229__$1;
(statearr_18246_18271[(2)] = null);

(statearr_18246_18271[(1)] = (2));


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
});})(c__17401__auto__))
;
return ((function (switch__17289__auto__,c__17401__auto__){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_18250 = [null,null,null,null,null,null,null,null];
(statearr_18250[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_18250[(1)] = (1));

return statearr_18250;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_18229){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_18229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e18251){if((e18251 instanceof Object)){
var ex__17293__auto__ = e18251;
var statearr_18252_18272 = state_18229;
(statearr_18252_18272[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18273 = state_18229;
state_18229 = G__18273;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_18229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_18229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto__))
})();
var state__17403__auto__ = (function (){var statearr_18253 = f__17402__auto__.call(null);
(statearr_18253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto__);

return statearr_18253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto__))
);

return c__17401__auto__;
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
var x__7082__auto__ = (((_ == null))?null:_);
var m__7083__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,_);
} else {
var m__7083__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,_);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7083__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,ch);
} else {
var m__7083__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,ch);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m);
} else {
var m__7083__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18499 = (function (mult,ch,cs,meta18500){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18500 = meta18500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18501,meta18500__$1){
var self__ = this;
var _18501__$1 = this;
return (new cljs.core.async.t_cljs$core$async18499(self__.mult,self__.ch,self__.cs,meta18500__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18501){
var self__ = this;
var _18501__$1 = this;
return self__.meta18500;
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18500","meta18500",-226116703,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18499";

cljs.core.async.t_cljs$core$async18499.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async18499");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18499 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18499(mult__$1,ch__$1,cs__$1,meta18500){
return (new cljs.core.async.t_cljs$core$async18499(mult__$1,ch__$1,cs__$1,meta18500));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18499(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17401__auto___18724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___18724,cs,m,dchan,dctr,done){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___18724,cs,m,dchan,dctr,done){
return (function (state_18636){
var state_val_18637 = (state_18636[(1)]);
if((state_val_18637 === (7))){
var inst_18632 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18638_18725 = state_18636__$1;
(statearr_18638_18725[(2)] = inst_18632);

(statearr_18638_18725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (20))){
var inst_18535 = (state_18636[(7)]);
var inst_18547 = cljs.core.first.call(null,inst_18535);
var inst_18548 = cljs.core.nth.call(null,inst_18547,(0),null);
var inst_18549 = cljs.core.nth.call(null,inst_18547,(1),null);
var state_18636__$1 = (function (){var statearr_18639 = state_18636;
(statearr_18639[(8)] = inst_18548);

return statearr_18639;
})();
if(cljs.core.truth_(inst_18549)){
var statearr_18640_18726 = state_18636__$1;
(statearr_18640_18726[(1)] = (22));

} else {
var statearr_18641_18727 = state_18636__$1;
(statearr_18641_18727[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (27))){
var inst_18584 = (state_18636[(9)]);
var inst_18577 = (state_18636[(10)]);
var inst_18579 = (state_18636[(11)]);
var inst_18504 = (state_18636[(12)]);
var inst_18584__$1 = cljs.core._nth.call(null,inst_18577,inst_18579);
var inst_18585 = cljs.core.async.put_BANG_.call(null,inst_18584__$1,inst_18504,done);
var state_18636__$1 = (function (){var statearr_18642 = state_18636;
(statearr_18642[(9)] = inst_18584__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18585)){
var statearr_18643_18728 = state_18636__$1;
(statearr_18643_18728[(1)] = (30));

} else {
var statearr_18644_18729 = state_18636__$1;
(statearr_18644_18729[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (1))){
var state_18636__$1 = state_18636;
var statearr_18645_18730 = state_18636__$1;
(statearr_18645_18730[(2)] = null);

(statearr_18645_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (24))){
var inst_18535 = (state_18636[(7)]);
var inst_18554 = (state_18636[(2)]);
var inst_18555 = cljs.core.next.call(null,inst_18535);
var inst_18513 = inst_18555;
var inst_18514 = null;
var inst_18515 = (0);
var inst_18516 = (0);
var state_18636__$1 = (function (){var statearr_18646 = state_18636;
(statearr_18646[(13)] = inst_18514);

(statearr_18646[(14)] = inst_18554);

(statearr_18646[(15)] = inst_18516);

(statearr_18646[(16)] = inst_18513);

(statearr_18646[(17)] = inst_18515);

return statearr_18646;
})();
var statearr_18647_18731 = state_18636__$1;
(statearr_18647_18731[(2)] = null);

(statearr_18647_18731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (39))){
var state_18636__$1 = state_18636;
var statearr_18651_18732 = state_18636__$1;
(statearr_18651_18732[(2)] = null);

(statearr_18651_18732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (4))){
var inst_18504 = (state_18636[(12)]);
var inst_18504__$1 = (state_18636[(2)]);
var inst_18505 = (inst_18504__$1 == null);
var state_18636__$1 = (function (){var statearr_18652 = state_18636;
(statearr_18652[(12)] = inst_18504__$1);

return statearr_18652;
})();
if(cljs.core.truth_(inst_18505)){
var statearr_18653_18733 = state_18636__$1;
(statearr_18653_18733[(1)] = (5));

} else {
var statearr_18654_18734 = state_18636__$1;
(statearr_18654_18734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (15))){
var inst_18514 = (state_18636[(13)]);
var inst_18516 = (state_18636[(15)]);
var inst_18513 = (state_18636[(16)]);
var inst_18515 = (state_18636[(17)]);
var inst_18531 = (state_18636[(2)]);
var inst_18532 = (inst_18516 + (1));
var tmp18648 = inst_18514;
var tmp18649 = inst_18513;
var tmp18650 = inst_18515;
var inst_18513__$1 = tmp18649;
var inst_18514__$1 = tmp18648;
var inst_18515__$1 = tmp18650;
var inst_18516__$1 = inst_18532;
var state_18636__$1 = (function (){var statearr_18655 = state_18636;
(statearr_18655[(13)] = inst_18514__$1);

(statearr_18655[(18)] = inst_18531);

(statearr_18655[(15)] = inst_18516__$1);

(statearr_18655[(16)] = inst_18513__$1);

(statearr_18655[(17)] = inst_18515__$1);

return statearr_18655;
})();
var statearr_18656_18735 = state_18636__$1;
(statearr_18656_18735[(2)] = null);

(statearr_18656_18735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (21))){
var inst_18558 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18660_18736 = state_18636__$1;
(statearr_18660_18736[(2)] = inst_18558);

(statearr_18660_18736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (31))){
var inst_18584 = (state_18636[(9)]);
var inst_18588 = done.call(null,null);
var inst_18589 = cljs.core.async.untap_STAR_.call(null,m,inst_18584);
var state_18636__$1 = (function (){var statearr_18661 = state_18636;
(statearr_18661[(19)] = inst_18588);

return statearr_18661;
})();
var statearr_18662_18737 = state_18636__$1;
(statearr_18662_18737[(2)] = inst_18589);

(statearr_18662_18737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (32))){
var inst_18577 = (state_18636[(10)]);
var inst_18579 = (state_18636[(11)]);
var inst_18578 = (state_18636[(20)]);
var inst_18576 = (state_18636[(21)]);
var inst_18591 = (state_18636[(2)]);
var inst_18592 = (inst_18579 + (1));
var tmp18657 = inst_18577;
var tmp18658 = inst_18578;
var tmp18659 = inst_18576;
var inst_18576__$1 = tmp18659;
var inst_18577__$1 = tmp18657;
var inst_18578__$1 = tmp18658;
var inst_18579__$1 = inst_18592;
var state_18636__$1 = (function (){var statearr_18663 = state_18636;
(statearr_18663[(10)] = inst_18577__$1);

(statearr_18663[(22)] = inst_18591);

(statearr_18663[(11)] = inst_18579__$1);

(statearr_18663[(20)] = inst_18578__$1);

(statearr_18663[(21)] = inst_18576__$1);

return statearr_18663;
})();
var statearr_18664_18738 = state_18636__$1;
(statearr_18664_18738[(2)] = null);

(statearr_18664_18738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (40))){
var inst_18604 = (state_18636[(23)]);
var inst_18608 = done.call(null,null);
var inst_18609 = cljs.core.async.untap_STAR_.call(null,m,inst_18604);
var state_18636__$1 = (function (){var statearr_18665 = state_18636;
(statearr_18665[(24)] = inst_18608);

return statearr_18665;
})();
var statearr_18666_18739 = state_18636__$1;
(statearr_18666_18739[(2)] = inst_18609);

(statearr_18666_18739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (33))){
var inst_18595 = (state_18636[(25)]);
var inst_18597 = cljs.core.chunked_seq_QMARK_.call(null,inst_18595);
var state_18636__$1 = state_18636;
if(inst_18597){
var statearr_18667_18740 = state_18636__$1;
(statearr_18667_18740[(1)] = (36));

} else {
var statearr_18668_18741 = state_18636__$1;
(statearr_18668_18741[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (13))){
var inst_18525 = (state_18636[(26)]);
var inst_18528 = cljs.core.async.close_BANG_.call(null,inst_18525);
var state_18636__$1 = state_18636;
var statearr_18669_18742 = state_18636__$1;
(statearr_18669_18742[(2)] = inst_18528);

(statearr_18669_18742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (22))){
var inst_18548 = (state_18636[(8)]);
var inst_18551 = cljs.core.async.close_BANG_.call(null,inst_18548);
var state_18636__$1 = state_18636;
var statearr_18670_18743 = state_18636__$1;
(statearr_18670_18743[(2)] = inst_18551);

(statearr_18670_18743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (36))){
var inst_18595 = (state_18636[(25)]);
var inst_18599 = cljs.core.chunk_first.call(null,inst_18595);
var inst_18600 = cljs.core.chunk_rest.call(null,inst_18595);
var inst_18601 = cljs.core.count.call(null,inst_18599);
var inst_18576 = inst_18600;
var inst_18577 = inst_18599;
var inst_18578 = inst_18601;
var inst_18579 = (0);
var state_18636__$1 = (function (){var statearr_18671 = state_18636;
(statearr_18671[(10)] = inst_18577);

(statearr_18671[(11)] = inst_18579);

(statearr_18671[(20)] = inst_18578);

(statearr_18671[(21)] = inst_18576);

return statearr_18671;
})();
var statearr_18672_18744 = state_18636__$1;
(statearr_18672_18744[(2)] = null);

(statearr_18672_18744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (41))){
var inst_18595 = (state_18636[(25)]);
var inst_18611 = (state_18636[(2)]);
var inst_18612 = cljs.core.next.call(null,inst_18595);
var inst_18576 = inst_18612;
var inst_18577 = null;
var inst_18578 = (0);
var inst_18579 = (0);
var state_18636__$1 = (function (){var statearr_18673 = state_18636;
(statearr_18673[(10)] = inst_18577);

(statearr_18673[(11)] = inst_18579);

(statearr_18673[(27)] = inst_18611);

(statearr_18673[(20)] = inst_18578);

(statearr_18673[(21)] = inst_18576);

return statearr_18673;
})();
var statearr_18674_18745 = state_18636__$1;
(statearr_18674_18745[(2)] = null);

(statearr_18674_18745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (43))){
var state_18636__$1 = state_18636;
var statearr_18675_18746 = state_18636__$1;
(statearr_18675_18746[(2)] = null);

(statearr_18675_18746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (29))){
var inst_18620 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18676_18747 = state_18636__$1;
(statearr_18676_18747[(2)] = inst_18620);

(statearr_18676_18747[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (44))){
var inst_18629 = (state_18636[(2)]);
var state_18636__$1 = (function (){var statearr_18677 = state_18636;
(statearr_18677[(28)] = inst_18629);

return statearr_18677;
})();
var statearr_18678_18748 = state_18636__$1;
(statearr_18678_18748[(2)] = null);

(statearr_18678_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (6))){
var inst_18568 = (state_18636[(29)]);
var inst_18567 = cljs.core.deref.call(null,cs);
var inst_18568__$1 = cljs.core.keys.call(null,inst_18567);
var inst_18569 = cljs.core.count.call(null,inst_18568__$1);
var inst_18570 = cljs.core.reset_BANG_.call(null,dctr,inst_18569);
var inst_18575 = cljs.core.seq.call(null,inst_18568__$1);
var inst_18576 = inst_18575;
var inst_18577 = null;
var inst_18578 = (0);
var inst_18579 = (0);
var state_18636__$1 = (function (){var statearr_18679 = state_18636;
(statearr_18679[(10)] = inst_18577);

(statearr_18679[(11)] = inst_18579);

(statearr_18679[(30)] = inst_18570);

(statearr_18679[(20)] = inst_18578);

(statearr_18679[(21)] = inst_18576);

(statearr_18679[(29)] = inst_18568__$1);

return statearr_18679;
})();
var statearr_18680_18749 = state_18636__$1;
(statearr_18680_18749[(2)] = null);

(statearr_18680_18749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (28))){
var inst_18595 = (state_18636[(25)]);
var inst_18576 = (state_18636[(21)]);
var inst_18595__$1 = cljs.core.seq.call(null,inst_18576);
var state_18636__$1 = (function (){var statearr_18681 = state_18636;
(statearr_18681[(25)] = inst_18595__$1);

return statearr_18681;
})();
if(inst_18595__$1){
var statearr_18682_18750 = state_18636__$1;
(statearr_18682_18750[(1)] = (33));

} else {
var statearr_18683_18751 = state_18636__$1;
(statearr_18683_18751[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (25))){
var inst_18579 = (state_18636[(11)]);
var inst_18578 = (state_18636[(20)]);
var inst_18581 = (inst_18579 < inst_18578);
var inst_18582 = inst_18581;
var state_18636__$1 = state_18636;
if(cljs.core.truth_(inst_18582)){
var statearr_18684_18752 = state_18636__$1;
(statearr_18684_18752[(1)] = (27));

} else {
var statearr_18685_18753 = state_18636__$1;
(statearr_18685_18753[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (34))){
var state_18636__$1 = state_18636;
var statearr_18686_18754 = state_18636__$1;
(statearr_18686_18754[(2)] = null);

(statearr_18686_18754[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (17))){
var state_18636__$1 = state_18636;
var statearr_18687_18755 = state_18636__$1;
(statearr_18687_18755[(2)] = null);

(statearr_18687_18755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (3))){
var inst_18634 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18636__$1,inst_18634);
} else {
if((state_val_18637 === (12))){
var inst_18563 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18688_18756 = state_18636__$1;
(statearr_18688_18756[(2)] = inst_18563);

(statearr_18688_18756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (2))){
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18636__$1,(4),ch);
} else {
if((state_val_18637 === (23))){
var state_18636__$1 = state_18636;
var statearr_18689_18757 = state_18636__$1;
(statearr_18689_18757[(2)] = null);

(statearr_18689_18757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (35))){
var inst_18618 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18690_18758 = state_18636__$1;
(statearr_18690_18758[(2)] = inst_18618);

(statearr_18690_18758[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (19))){
var inst_18535 = (state_18636[(7)]);
var inst_18539 = cljs.core.chunk_first.call(null,inst_18535);
var inst_18540 = cljs.core.chunk_rest.call(null,inst_18535);
var inst_18541 = cljs.core.count.call(null,inst_18539);
var inst_18513 = inst_18540;
var inst_18514 = inst_18539;
var inst_18515 = inst_18541;
var inst_18516 = (0);
var state_18636__$1 = (function (){var statearr_18691 = state_18636;
(statearr_18691[(13)] = inst_18514);

(statearr_18691[(15)] = inst_18516);

(statearr_18691[(16)] = inst_18513);

(statearr_18691[(17)] = inst_18515);

return statearr_18691;
})();
var statearr_18692_18759 = state_18636__$1;
(statearr_18692_18759[(2)] = null);

(statearr_18692_18759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (11))){
var inst_18513 = (state_18636[(16)]);
var inst_18535 = (state_18636[(7)]);
var inst_18535__$1 = cljs.core.seq.call(null,inst_18513);
var state_18636__$1 = (function (){var statearr_18693 = state_18636;
(statearr_18693[(7)] = inst_18535__$1);

return statearr_18693;
})();
if(inst_18535__$1){
var statearr_18694_18760 = state_18636__$1;
(statearr_18694_18760[(1)] = (16));

} else {
var statearr_18695_18761 = state_18636__$1;
(statearr_18695_18761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (9))){
var inst_18565 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18696_18762 = state_18636__$1;
(statearr_18696_18762[(2)] = inst_18565);

(statearr_18696_18762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (5))){
var inst_18511 = cljs.core.deref.call(null,cs);
var inst_18512 = cljs.core.seq.call(null,inst_18511);
var inst_18513 = inst_18512;
var inst_18514 = null;
var inst_18515 = (0);
var inst_18516 = (0);
var state_18636__$1 = (function (){var statearr_18697 = state_18636;
(statearr_18697[(13)] = inst_18514);

(statearr_18697[(15)] = inst_18516);

(statearr_18697[(16)] = inst_18513);

(statearr_18697[(17)] = inst_18515);

return statearr_18697;
})();
var statearr_18698_18763 = state_18636__$1;
(statearr_18698_18763[(2)] = null);

(statearr_18698_18763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (14))){
var state_18636__$1 = state_18636;
var statearr_18699_18764 = state_18636__$1;
(statearr_18699_18764[(2)] = null);

(statearr_18699_18764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (45))){
var inst_18626 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18700_18765 = state_18636__$1;
(statearr_18700_18765[(2)] = inst_18626);

(statearr_18700_18765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (26))){
var inst_18568 = (state_18636[(29)]);
var inst_18622 = (state_18636[(2)]);
var inst_18623 = cljs.core.seq.call(null,inst_18568);
var state_18636__$1 = (function (){var statearr_18701 = state_18636;
(statearr_18701[(31)] = inst_18622);

return statearr_18701;
})();
if(inst_18623){
var statearr_18702_18766 = state_18636__$1;
(statearr_18702_18766[(1)] = (42));

} else {
var statearr_18703_18767 = state_18636__$1;
(statearr_18703_18767[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (16))){
var inst_18535 = (state_18636[(7)]);
var inst_18537 = cljs.core.chunked_seq_QMARK_.call(null,inst_18535);
var state_18636__$1 = state_18636;
if(inst_18537){
var statearr_18704_18768 = state_18636__$1;
(statearr_18704_18768[(1)] = (19));

} else {
var statearr_18705_18769 = state_18636__$1;
(statearr_18705_18769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (38))){
var inst_18615 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18706_18770 = state_18636__$1;
(statearr_18706_18770[(2)] = inst_18615);

(statearr_18706_18770[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (30))){
var state_18636__$1 = state_18636;
var statearr_18707_18771 = state_18636__$1;
(statearr_18707_18771[(2)] = null);

(statearr_18707_18771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (10))){
var inst_18514 = (state_18636[(13)]);
var inst_18516 = (state_18636[(15)]);
var inst_18524 = cljs.core._nth.call(null,inst_18514,inst_18516);
var inst_18525 = cljs.core.nth.call(null,inst_18524,(0),null);
var inst_18526 = cljs.core.nth.call(null,inst_18524,(1),null);
var state_18636__$1 = (function (){var statearr_18708 = state_18636;
(statearr_18708[(26)] = inst_18525);

return statearr_18708;
})();
if(cljs.core.truth_(inst_18526)){
var statearr_18709_18772 = state_18636__$1;
(statearr_18709_18772[(1)] = (13));

} else {
var statearr_18710_18773 = state_18636__$1;
(statearr_18710_18773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (18))){
var inst_18561 = (state_18636[(2)]);
var state_18636__$1 = state_18636;
var statearr_18711_18774 = state_18636__$1;
(statearr_18711_18774[(2)] = inst_18561);

(statearr_18711_18774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (42))){
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18636__$1,(45),dchan);
} else {
if((state_val_18637 === (37))){
var inst_18595 = (state_18636[(25)]);
var inst_18604 = (state_18636[(23)]);
var inst_18504 = (state_18636[(12)]);
var inst_18604__$1 = cljs.core.first.call(null,inst_18595);
var inst_18605 = cljs.core.async.put_BANG_.call(null,inst_18604__$1,inst_18504,done);
var state_18636__$1 = (function (){var statearr_18712 = state_18636;
(statearr_18712[(23)] = inst_18604__$1);

return statearr_18712;
})();
if(cljs.core.truth_(inst_18605)){
var statearr_18713_18775 = state_18636__$1;
(statearr_18713_18775[(1)] = (39));

} else {
var statearr_18714_18776 = state_18636__$1;
(statearr_18714_18776[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (8))){
var inst_18516 = (state_18636[(15)]);
var inst_18515 = (state_18636[(17)]);
var inst_18518 = (inst_18516 < inst_18515);
var inst_18519 = inst_18518;
var state_18636__$1 = state_18636;
if(cljs.core.truth_(inst_18519)){
var statearr_18715_18777 = state_18636__$1;
(statearr_18715_18777[(1)] = (10));

} else {
var statearr_18716_18778 = state_18636__$1;
(statearr_18716_18778[(1)] = (11));

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
});})(c__17401__auto___18724,cs,m,dchan,dctr,done))
;
return ((function (switch__17289__auto__,c__17401__auto___18724,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17290__auto__ = null;
var cljs$core$async$mult_$_state_machine__17290__auto____0 = (function (){
var statearr_18720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18720[(0)] = cljs$core$async$mult_$_state_machine__17290__auto__);

(statearr_18720[(1)] = (1));

return statearr_18720;
});
var cljs$core$async$mult_$_state_machine__17290__auto____1 = (function (state_18636){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_18636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e18721){if((e18721 instanceof Object)){
var ex__17293__auto__ = e18721;
var statearr_18722_18779 = state_18636;
(statearr_18722_18779[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18780 = state_18636;
state_18636 = G__18780;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17290__auto__ = function(state_18636){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17290__auto____1.call(this,state_18636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17290__auto____0;
cljs$core$async$mult_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17290__auto____1;
return cljs$core$async$mult_$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___18724,cs,m,dchan,dctr,done))
})();
var state__17403__auto__ = (function (){var statearr_18723 = f__17402__auto__.call(null);
(statearr_18723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___18724);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___18724,cs,m,dchan,dctr,done))
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
var args18781 = [];
var len__7494__auto___18784 = arguments.length;
var i__7495__auto___18785 = (0);
while(true){
if((i__7495__auto___18785 < len__7494__auto___18784)){
args18781.push((arguments[i__7495__auto___18785]));

var G__18786 = (i__7495__auto___18785 + (1));
i__7495__auto___18785 = G__18786;
continue;
} else {
}
break;
}

var G__18783 = args18781.length;
switch (G__18783) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18781.length)].join('')));

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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,ch);
} else {
var m__7083__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,ch);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,ch);
} else {
var m__7083__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,ch);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m);
} else {
var m__7083__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,state_map);
} else {
var m__7083__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,state_map);
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
var x__7082__auto__ = (((m == null))?null:m);
var m__7083__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,m,mode);
} else {
var m__7083__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7501__auto__ = [];
var len__7494__auto___18798 = arguments.length;
var i__7495__auto___18799 = (0);
while(true){
if((i__7495__auto___18799 < len__7494__auto___18798)){
args__7501__auto__.push((arguments[i__7495__auto___18799]));

var G__18800 = (i__7495__auto___18799 + (1));
i__7495__auto___18799 = G__18800;
continue;
} else {
}
break;
}

var argseq__7502__auto__ = ((((3) < args__7501__auto__.length))?(new cljs.core.IndexedSeq(args__7501__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7502__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18792){
var map__18793 = p__18792;
var map__18793__$1 = ((((!((map__18793 == null)))?((((map__18793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18793):map__18793);
var opts = map__18793__$1;
var statearr_18795_18801 = state;
(statearr_18795_18801[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18793,map__18793__$1,opts){
return (function (val){
var statearr_18796_18802 = state;
(statearr_18796_18802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18793,map__18793__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18797_18803 = state;
(statearr_18797_18803[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18788){
var G__18789 = cljs.core.first.call(null,seq18788);
var seq18788__$1 = cljs.core.next.call(null,seq18788);
var G__18790 = cljs.core.first.call(null,seq18788__$1);
var seq18788__$2 = cljs.core.next.call(null,seq18788__$1);
var G__18791 = cljs.core.first.call(null,seq18788__$2);
var seq18788__$3 = cljs.core.next.call(null,seq18788__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18789,G__18790,G__18791,seq18788__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18969 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18970){
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
this.meta18970 = meta18970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18971,meta18970__$1){
var self__ = this;
var _18971__$1 = this;
return (new cljs.core.async.t_cljs$core$async18969(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18970__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18971){
var self__ = this;
var _18971__$1 = this;
return self__.meta18970;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18969.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18970","meta18970",-1725589164,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18969";

cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async18969");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18969 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18969(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18970){
return (new cljs.core.async.t_cljs$core$async18969(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18970));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18969(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17401__auto___19134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19071){
var state_val_19072 = (state_19071[(1)]);
if((state_val_19072 === (7))){
var inst_18987 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
var statearr_19073_19135 = state_19071__$1;
(statearr_19073_19135[(2)] = inst_18987);

(statearr_19073_19135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (20))){
var inst_18999 = (state_19071[(7)]);
var state_19071__$1 = state_19071;
var statearr_19074_19136 = state_19071__$1;
(statearr_19074_19136[(2)] = inst_18999);

(statearr_19074_19136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (27))){
var state_19071__$1 = state_19071;
var statearr_19075_19137 = state_19071__$1;
(statearr_19075_19137[(2)] = null);

(statearr_19075_19137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (1))){
var inst_18975 = (state_19071[(8)]);
var inst_18975__$1 = calc_state.call(null);
var inst_18977 = (inst_18975__$1 == null);
var inst_18978 = cljs.core.not.call(null,inst_18977);
var state_19071__$1 = (function (){var statearr_19076 = state_19071;
(statearr_19076[(8)] = inst_18975__$1);

return statearr_19076;
})();
if(inst_18978){
var statearr_19077_19138 = state_19071__$1;
(statearr_19077_19138[(1)] = (2));

} else {
var statearr_19078_19139 = state_19071__$1;
(statearr_19078_19139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (24))){
var inst_19045 = (state_19071[(9)]);
var inst_19031 = (state_19071[(10)]);
var inst_19022 = (state_19071[(11)]);
var inst_19045__$1 = inst_19022.call(null,inst_19031);
var state_19071__$1 = (function (){var statearr_19079 = state_19071;
(statearr_19079[(9)] = inst_19045__$1);

return statearr_19079;
})();
if(cljs.core.truth_(inst_19045__$1)){
var statearr_19080_19140 = state_19071__$1;
(statearr_19080_19140[(1)] = (29));

} else {
var statearr_19081_19141 = state_19071__$1;
(statearr_19081_19141[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (4))){
var inst_18990 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_18990)){
var statearr_19082_19142 = state_19071__$1;
(statearr_19082_19142[(1)] = (8));

} else {
var statearr_19083_19143 = state_19071__$1;
(statearr_19083_19143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (15))){
var inst_19016 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_19016)){
var statearr_19084_19144 = state_19071__$1;
(statearr_19084_19144[(1)] = (19));

} else {
var statearr_19085_19145 = state_19071__$1;
(statearr_19085_19145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (21))){
var inst_19021 = (state_19071[(12)]);
var inst_19021__$1 = (state_19071[(2)]);
var inst_19022 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19023 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19024 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19071__$1 = (function (){var statearr_19086 = state_19071;
(statearr_19086[(12)] = inst_19021__$1);

(statearr_19086[(11)] = inst_19022);

(statearr_19086[(13)] = inst_19023);

return statearr_19086;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19071__$1,(22),inst_19024);
} else {
if((state_val_19072 === (31))){
var inst_19053 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_19053)){
var statearr_19087_19146 = state_19071__$1;
(statearr_19087_19146[(1)] = (32));

} else {
var statearr_19088_19147 = state_19071__$1;
(statearr_19088_19147[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (32))){
var inst_19030 = (state_19071[(14)]);
var state_19071__$1 = state_19071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19071__$1,(35),out,inst_19030);
} else {
if((state_val_19072 === (33))){
var inst_19021 = (state_19071[(12)]);
var inst_18999 = inst_19021;
var state_19071__$1 = (function (){var statearr_19089 = state_19071;
(statearr_19089[(7)] = inst_18999);

return statearr_19089;
})();
var statearr_19090_19148 = state_19071__$1;
(statearr_19090_19148[(2)] = null);

(statearr_19090_19148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (13))){
var inst_18999 = (state_19071[(7)]);
var inst_19006 = inst_18999.cljs$lang$protocol_mask$partition0$;
var inst_19007 = (inst_19006 & (64));
var inst_19008 = inst_18999.cljs$core$ISeq$;
var inst_19009 = (inst_19007) || (inst_19008);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_19009)){
var statearr_19091_19149 = state_19071__$1;
(statearr_19091_19149[(1)] = (16));

} else {
var statearr_19092_19150 = state_19071__$1;
(statearr_19092_19150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (22))){
var inst_19031 = (state_19071[(10)]);
var inst_19030 = (state_19071[(14)]);
var inst_19029 = (state_19071[(2)]);
var inst_19030__$1 = cljs.core.nth.call(null,inst_19029,(0),null);
var inst_19031__$1 = cljs.core.nth.call(null,inst_19029,(1),null);
var inst_19032 = (inst_19030__$1 == null);
var inst_19033 = cljs.core._EQ_.call(null,inst_19031__$1,change);
var inst_19034 = (inst_19032) || (inst_19033);
var state_19071__$1 = (function (){var statearr_19093 = state_19071;
(statearr_19093[(10)] = inst_19031__$1);

(statearr_19093[(14)] = inst_19030__$1);

return statearr_19093;
})();
if(cljs.core.truth_(inst_19034)){
var statearr_19094_19151 = state_19071__$1;
(statearr_19094_19151[(1)] = (23));

} else {
var statearr_19095_19152 = state_19071__$1;
(statearr_19095_19152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (36))){
var inst_19021 = (state_19071[(12)]);
var inst_18999 = inst_19021;
var state_19071__$1 = (function (){var statearr_19096 = state_19071;
(statearr_19096[(7)] = inst_18999);

return statearr_19096;
})();
var statearr_19097_19153 = state_19071__$1;
(statearr_19097_19153[(2)] = null);

(statearr_19097_19153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (29))){
var inst_19045 = (state_19071[(9)]);
var state_19071__$1 = state_19071;
var statearr_19098_19154 = state_19071__$1;
(statearr_19098_19154[(2)] = inst_19045);

(statearr_19098_19154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (6))){
var state_19071__$1 = state_19071;
var statearr_19099_19155 = state_19071__$1;
(statearr_19099_19155[(2)] = false);

(statearr_19099_19155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (28))){
var inst_19041 = (state_19071[(2)]);
var inst_19042 = calc_state.call(null);
var inst_18999 = inst_19042;
var state_19071__$1 = (function (){var statearr_19100 = state_19071;
(statearr_19100[(7)] = inst_18999);

(statearr_19100[(15)] = inst_19041);

return statearr_19100;
})();
var statearr_19101_19156 = state_19071__$1;
(statearr_19101_19156[(2)] = null);

(statearr_19101_19156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (25))){
var inst_19067 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
var statearr_19102_19157 = state_19071__$1;
(statearr_19102_19157[(2)] = inst_19067);

(statearr_19102_19157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (34))){
var inst_19065 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
var statearr_19103_19158 = state_19071__$1;
(statearr_19103_19158[(2)] = inst_19065);

(statearr_19103_19158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (17))){
var state_19071__$1 = state_19071;
var statearr_19104_19159 = state_19071__$1;
(statearr_19104_19159[(2)] = false);

(statearr_19104_19159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (3))){
var state_19071__$1 = state_19071;
var statearr_19105_19160 = state_19071__$1;
(statearr_19105_19160[(2)] = false);

(statearr_19105_19160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (12))){
var inst_19069 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19071__$1,inst_19069);
} else {
if((state_val_19072 === (2))){
var inst_18975 = (state_19071[(8)]);
var inst_18980 = inst_18975.cljs$lang$protocol_mask$partition0$;
var inst_18981 = (inst_18980 & (64));
var inst_18982 = inst_18975.cljs$core$ISeq$;
var inst_18983 = (inst_18981) || (inst_18982);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_18983)){
var statearr_19106_19161 = state_19071__$1;
(statearr_19106_19161[(1)] = (5));

} else {
var statearr_19107_19162 = state_19071__$1;
(statearr_19107_19162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (23))){
var inst_19030 = (state_19071[(14)]);
var inst_19036 = (inst_19030 == null);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_19036)){
var statearr_19108_19163 = state_19071__$1;
(statearr_19108_19163[(1)] = (26));

} else {
var statearr_19109_19164 = state_19071__$1;
(statearr_19109_19164[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (35))){
var inst_19056 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
if(cljs.core.truth_(inst_19056)){
var statearr_19110_19165 = state_19071__$1;
(statearr_19110_19165[(1)] = (36));

} else {
var statearr_19111_19166 = state_19071__$1;
(statearr_19111_19166[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (19))){
var inst_18999 = (state_19071[(7)]);
var inst_19018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18999);
var state_19071__$1 = state_19071;
var statearr_19112_19167 = state_19071__$1;
(statearr_19112_19167[(2)] = inst_19018);

(statearr_19112_19167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (11))){
var inst_18999 = (state_19071[(7)]);
var inst_19003 = (inst_18999 == null);
var inst_19004 = cljs.core.not.call(null,inst_19003);
var state_19071__$1 = state_19071;
if(inst_19004){
var statearr_19113_19168 = state_19071__$1;
(statearr_19113_19168[(1)] = (13));

} else {
var statearr_19114_19169 = state_19071__$1;
(statearr_19114_19169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (9))){
var inst_18975 = (state_19071[(8)]);
var state_19071__$1 = state_19071;
var statearr_19115_19170 = state_19071__$1;
(statearr_19115_19170[(2)] = inst_18975);

(statearr_19115_19170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (5))){
var state_19071__$1 = state_19071;
var statearr_19116_19171 = state_19071__$1;
(statearr_19116_19171[(2)] = true);

(statearr_19116_19171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (14))){
var state_19071__$1 = state_19071;
var statearr_19117_19172 = state_19071__$1;
(statearr_19117_19172[(2)] = false);

(statearr_19117_19172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (26))){
var inst_19031 = (state_19071[(10)]);
var inst_19038 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19031);
var state_19071__$1 = state_19071;
var statearr_19118_19173 = state_19071__$1;
(statearr_19118_19173[(2)] = inst_19038);

(statearr_19118_19173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (16))){
var state_19071__$1 = state_19071;
var statearr_19119_19174 = state_19071__$1;
(statearr_19119_19174[(2)] = true);

(statearr_19119_19174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (38))){
var inst_19061 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
var statearr_19120_19175 = state_19071__$1;
(statearr_19120_19175[(2)] = inst_19061);

(statearr_19120_19175[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (30))){
var inst_19031 = (state_19071[(10)]);
var inst_19022 = (state_19071[(11)]);
var inst_19023 = (state_19071[(13)]);
var inst_19048 = cljs.core.empty_QMARK_.call(null,inst_19022);
var inst_19049 = inst_19023.call(null,inst_19031);
var inst_19050 = cljs.core.not.call(null,inst_19049);
var inst_19051 = (inst_19048) && (inst_19050);
var state_19071__$1 = state_19071;
var statearr_19121_19176 = state_19071__$1;
(statearr_19121_19176[(2)] = inst_19051);

(statearr_19121_19176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (10))){
var inst_18975 = (state_19071[(8)]);
var inst_18995 = (state_19071[(2)]);
var inst_18996 = cljs.core.get.call(null,inst_18995,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18997 = cljs.core.get.call(null,inst_18995,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18998 = cljs.core.get.call(null,inst_18995,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18999 = inst_18975;
var state_19071__$1 = (function (){var statearr_19122 = state_19071;
(statearr_19122[(7)] = inst_18999);

(statearr_19122[(16)] = inst_18996);

(statearr_19122[(17)] = inst_18997);

(statearr_19122[(18)] = inst_18998);

return statearr_19122;
})();
var statearr_19123_19177 = state_19071__$1;
(statearr_19123_19177[(2)] = null);

(statearr_19123_19177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (18))){
var inst_19013 = (state_19071[(2)]);
var state_19071__$1 = state_19071;
var statearr_19124_19178 = state_19071__$1;
(statearr_19124_19178[(2)] = inst_19013);

(statearr_19124_19178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (37))){
var state_19071__$1 = state_19071;
var statearr_19125_19179 = state_19071__$1;
(statearr_19125_19179[(2)] = null);

(statearr_19125_19179[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19072 === (8))){
var inst_18975 = (state_19071[(8)]);
var inst_18992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18975);
var state_19071__$1 = state_19071;
var statearr_19126_19180 = state_19071__$1;
(statearr_19126_19180[(2)] = inst_18992);

(statearr_19126_19180[(1)] = (10));


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
});})(c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17289__auto__,c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17290__auto__ = null;
var cljs$core$async$mix_$_state_machine__17290__auto____0 = (function (){
var statearr_19130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19130[(0)] = cljs$core$async$mix_$_state_machine__17290__auto__);

(statearr_19130[(1)] = (1));

return statearr_19130;
});
var cljs$core$async$mix_$_state_machine__17290__auto____1 = (function (state_19071){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19131){if((e19131 instanceof Object)){
var ex__17293__auto__ = e19131;
var statearr_19132_19181 = state_19071;
(statearr_19132_19181[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19182 = state_19071;
state_19071 = G__19182;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17290__auto__ = function(state_19071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17290__auto____1.call(this,state_19071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17290__auto____0;
cljs$core$async$mix_$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17290__auto____1;
return cljs$core$async$mix_$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17403__auto__ = (function (){var statearr_19133 = f__17402__auto__.call(null);
(statearr_19133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19134);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7082__auto__ = (((p == null))?null:p);
var m__7083__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7083__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7082__auto__ = (((p == null))?null:p);
var m__7083__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,p,v,ch);
} else {
var m__7083__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19183 = [];
var len__7494__auto___19186 = arguments.length;
var i__7495__auto___19187 = (0);
while(true){
if((i__7495__auto___19187 < len__7494__auto___19186)){
args19183.push((arguments[i__7495__auto___19187]));

var G__19188 = (i__7495__auto___19187 + (1));
i__7495__auto___19187 = G__19188;
continue;
} else {
}
break;
}

var G__19185 = args19183.length;
switch (G__19185) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19183.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7082__auto__ = (((p == null))?null:p);
var m__7083__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,p);
} else {
var m__7083__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,p);
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
var x__7082__auto__ = (((p == null))?null:p);
var m__7083__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7082__auto__)]);
if(!((m__7083__auto__ == null))){
return m__7083__auto__.call(null,p,v);
} else {
var m__7083__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7083__auto____$1 == null))){
return m__7083__auto____$1.call(null,p,v);
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
var args19191 = [];
var len__7494__auto___19316 = arguments.length;
var i__7495__auto___19317 = (0);
while(true){
if((i__7495__auto___19317 < len__7494__auto___19316)){
args19191.push((arguments[i__7495__auto___19317]));

var G__19318 = (i__7495__auto___19317 + (1));
i__7495__auto___19317 = G__19318;
continue;
} else {
}
break;
}

var G__19193 = args19191.length;
switch (G__19193) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19191.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6419__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6419__auto__,mults){
return (function (p1__19190_SHARP_){
if(cljs.core.truth_(p1__19190_SHARP_.call(null,topic))){
return p1__19190_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19190_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6419__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19194 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19195){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19195 = meta19195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19196,meta19195__$1){
var self__ = this;
var _19196__$1 = this;
return (new cljs.core.async.t_cljs$core$async19194(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19195__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19196){
var self__ = this;
var _19196__$1 = this;
return self__.meta19195;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19195","meta19195",-1150000848,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19194";

cljs.core.async.t_cljs$core$async19194.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async19194");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19194 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19195){
return (new cljs.core.async.t_cljs$core$async19194(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19195));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19194(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17401__auto___19320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19320,mults,ensure_mult,p){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19320,mults,ensure_mult,p){
return (function (state_19268){
var state_val_19269 = (state_19268[(1)]);
if((state_val_19269 === (7))){
var inst_19264 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19270_19321 = state_19268__$1;
(statearr_19270_19321[(2)] = inst_19264);

(statearr_19270_19321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (20))){
var state_19268__$1 = state_19268;
var statearr_19271_19322 = state_19268__$1;
(statearr_19271_19322[(2)] = null);

(statearr_19271_19322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (1))){
var state_19268__$1 = state_19268;
var statearr_19272_19323 = state_19268__$1;
(statearr_19272_19323[(2)] = null);

(statearr_19272_19323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (24))){
var inst_19247 = (state_19268[(7)]);
var inst_19256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19247);
var state_19268__$1 = state_19268;
var statearr_19273_19324 = state_19268__$1;
(statearr_19273_19324[(2)] = inst_19256);

(statearr_19273_19324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (4))){
var inst_19199 = (state_19268[(8)]);
var inst_19199__$1 = (state_19268[(2)]);
var inst_19200 = (inst_19199__$1 == null);
var state_19268__$1 = (function (){var statearr_19274 = state_19268;
(statearr_19274[(8)] = inst_19199__$1);

return statearr_19274;
})();
if(cljs.core.truth_(inst_19200)){
var statearr_19275_19325 = state_19268__$1;
(statearr_19275_19325[(1)] = (5));

} else {
var statearr_19276_19326 = state_19268__$1;
(statearr_19276_19326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (15))){
var inst_19241 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19277_19327 = state_19268__$1;
(statearr_19277_19327[(2)] = inst_19241);

(statearr_19277_19327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (21))){
var inst_19261 = (state_19268[(2)]);
var state_19268__$1 = (function (){var statearr_19278 = state_19268;
(statearr_19278[(9)] = inst_19261);

return statearr_19278;
})();
var statearr_19279_19328 = state_19268__$1;
(statearr_19279_19328[(2)] = null);

(statearr_19279_19328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (13))){
var inst_19223 = (state_19268[(10)]);
var inst_19225 = cljs.core.chunked_seq_QMARK_.call(null,inst_19223);
var state_19268__$1 = state_19268;
if(inst_19225){
var statearr_19280_19329 = state_19268__$1;
(statearr_19280_19329[(1)] = (16));

} else {
var statearr_19281_19330 = state_19268__$1;
(statearr_19281_19330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (22))){
var inst_19253 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
if(cljs.core.truth_(inst_19253)){
var statearr_19282_19331 = state_19268__$1;
(statearr_19282_19331[(1)] = (23));

} else {
var statearr_19283_19332 = state_19268__$1;
(statearr_19283_19332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (6))){
var inst_19249 = (state_19268[(11)]);
var inst_19199 = (state_19268[(8)]);
var inst_19247 = (state_19268[(7)]);
var inst_19247__$1 = topic_fn.call(null,inst_19199);
var inst_19248 = cljs.core.deref.call(null,mults);
var inst_19249__$1 = cljs.core.get.call(null,inst_19248,inst_19247__$1);
var state_19268__$1 = (function (){var statearr_19284 = state_19268;
(statearr_19284[(11)] = inst_19249__$1);

(statearr_19284[(7)] = inst_19247__$1);

return statearr_19284;
})();
if(cljs.core.truth_(inst_19249__$1)){
var statearr_19285_19333 = state_19268__$1;
(statearr_19285_19333[(1)] = (19));

} else {
var statearr_19286_19334 = state_19268__$1;
(statearr_19286_19334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (25))){
var inst_19258 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19287_19335 = state_19268__$1;
(statearr_19287_19335[(2)] = inst_19258);

(statearr_19287_19335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (17))){
var inst_19223 = (state_19268[(10)]);
var inst_19232 = cljs.core.first.call(null,inst_19223);
var inst_19233 = cljs.core.async.muxch_STAR_.call(null,inst_19232);
var inst_19234 = cljs.core.async.close_BANG_.call(null,inst_19233);
var inst_19235 = cljs.core.next.call(null,inst_19223);
var inst_19209 = inst_19235;
var inst_19210 = null;
var inst_19211 = (0);
var inst_19212 = (0);
var state_19268__$1 = (function (){var statearr_19288 = state_19268;
(statearr_19288[(12)] = inst_19211);

(statearr_19288[(13)] = inst_19210);

(statearr_19288[(14)] = inst_19234);

(statearr_19288[(15)] = inst_19212);

(statearr_19288[(16)] = inst_19209);

return statearr_19288;
})();
var statearr_19289_19336 = state_19268__$1;
(statearr_19289_19336[(2)] = null);

(statearr_19289_19336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (3))){
var inst_19266 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19268__$1,inst_19266);
} else {
if((state_val_19269 === (12))){
var inst_19243 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19290_19337 = state_19268__$1;
(statearr_19290_19337[(2)] = inst_19243);

(statearr_19290_19337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (2))){
var state_19268__$1 = state_19268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19268__$1,(4),ch);
} else {
if((state_val_19269 === (23))){
var state_19268__$1 = state_19268;
var statearr_19291_19338 = state_19268__$1;
(statearr_19291_19338[(2)] = null);

(statearr_19291_19338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (19))){
var inst_19249 = (state_19268[(11)]);
var inst_19199 = (state_19268[(8)]);
var inst_19251 = cljs.core.async.muxch_STAR_.call(null,inst_19249);
var state_19268__$1 = state_19268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19268__$1,(22),inst_19251,inst_19199);
} else {
if((state_val_19269 === (11))){
var inst_19223 = (state_19268[(10)]);
var inst_19209 = (state_19268[(16)]);
var inst_19223__$1 = cljs.core.seq.call(null,inst_19209);
var state_19268__$1 = (function (){var statearr_19292 = state_19268;
(statearr_19292[(10)] = inst_19223__$1);

return statearr_19292;
})();
if(inst_19223__$1){
var statearr_19293_19339 = state_19268__$1;
(statearr_19293_19339[(1)] = (13));

} else {
var statearr_19294_19340 = state_19268__$1;
(statearr_19294_19340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (9))){
var inst_19245 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19295_19341 = state_19268__$1;
(statearr_19295_19341[(2)] = inst_19245);

(statearr_19295_19341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (5))){
var inst_19206 = cljs.core.deref.call(null,mults);
var inst_19207 = cljs.core.vals.call(null,inst_19206);
var inst_19208 = cljs.core.seq.call(null,inst_19207);
var inst_19209 = inst_19208;
var inst_19210 = null;
var inst_19211 = (0);
var inst_19212 = (0);
var state_19268__$1 = (function (){var statearr_19296 = state_19268;
(statearr_19296[(12)] = inst_19211);

(statearr_19296[(13)] = inst_19210);

(statearr_19296[(15)] = inst_19212);

(statearr_19296[(16)] = inst_19209);

return statearr_19296;
})();
var statearr_19297_19342 = state_19268__$1;
(statearr_19297_19342[(2)] = null);

(statearr_19297_19342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (14))){
var state_19268__$1 = state_19268;
var statearr_19301_19343 = state_19268__$1;
(statearr_19301_19343[(2)] = null);

(statearr_19301_19343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (16))){
var inst_19223 = (state_19268[(10)]);
var inst_19227 = cljs.core.chunk_first.call(null,inst_19223);
var inst_19228 = cljs.core.chunk_rest.call(null,inst_19223);
var inst_19229 = cljs.core.count.call(null,inst_19227);
var inst_19209 = inst_19228;
var inst_19210 = inst_19227;
var inst_19211 = inst_19229;
var inst_19212 = (0);
var state_19268__$1 = (function (){var statearr_19302 = state_19268;
(statearr_19302[(12)] = inst_19211);

(statearr_19302[(13)] = inst_19210);

(statearr_19302[(15)] = inst_19212);

(statearr_19302[(16)] = inst_19209);

return statearr_19302;
})();
var statearr_19303_19344 = state_19268__$1;
(statearr_19303_19344[(2)] = null);

(statearr_19303_19344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (10))){
var inst_19211 = (state_19268[(12)]);
var inst_19210 = (state_19268[(13)]);
var inst_19212 = (state_19268[(15)]);
var inst_19209 = (state_19268[(16)]);
var inst_19217 = cljs.core._nth.call(null,inst_19210,inst_19212);
var inst_19218 = cljs.core.async.muxch_STAR_.call(null,inst_19217);
var inst_19219 = cljs.core.async.close_BANG_.call(null,inst_19218);
var inst_19220 = (inst_19212 + (1));
var tmp19298 = inst_19211;
var tmp19299 = inst_19210;
var tmp19300 = inst_19209;
var inst_19209__$1 = tmp19300;
var inst_19210__$1 = tmp19299;
var inst_19211__$1 = tmp19298;
var inst_19212__$1 = inst_19220;
var state_19268__$1 = (function (){var statearr_19304 = state_19268;
(statearr_19304[(17)] = inst_19219);

(statearr_19304[(12)] = inst_19211__$1);

(statearr_19304[(13)] = inst_19210__$1);

(statearr_19304[(15)] = inst_19212__$1);

(statearr_19304[(16)] = inst_19209__$1);

return statearr_19304;
})();
var statearr_19305_19345 = state_19268__$1;
(statearr_19305_19345[(2)] = null);

(statearr_19305_19345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (18))){
var inst_19238 = (state_19268[(2)]);
var state_19268__$1 = state_19268;
var statearr_19306_19346 = state_19268__$1;
(statearr_19306_19346[(2)] = inst_19238);

(statearr_19306_19346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19269 === (8))){
var inst_19211 = (state_19268[(12)]);
var inst_19212 = (state_19268[(15)]);
var inst_19214 = (inst_19212 < inst_19211);
var inst_19215 = inst_19214;
var state_19268__$1 = state_19268;
if(cljs.core.truth_(inst_19215)){
var statearr_19307_19347 = state_19268__$1;
(statearr_19307_19347[(1)] = (10));

} else {
var statearr_19308_19348 = state_19268__$1;
(statearr_19308_19348[(1)] = (11));

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
});})(c__17401__auto___19320,mults,ensure_mult,p))
;
return ((function (switch__17289__auto__,c__17401__auto___19320,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19312[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19312[(1)] = (1));

return statearr_19312;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19268){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19313){if((e19313 instanceof Object)){
var ex__17293__auto__ = e19313;
var statearr_19314_19349 = state_19268;
(statearr_19314_19349[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19350 = state_19268;
state_19268 = G__19350;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19320,mults,ensure_mult,p))
})();
var state__17403__auto__ = (function (){var statearr_19315 = f__17402__auto__.call(null);
(statearr_19315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19320);

return statearr_19315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19320,mults,ensure_mult,p))
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
var args19351 = [];
var len__7494__auto___19354 = arguments.length;
var i__7495__auto___19355 = (0);
while(true){
if((i__7495__auto___19355 < len__7494__auto___19354)){
args19351.push((arguments[i__7495__auto___19355]));

var G__19356 = (i__7495__auto___19355 + (1));
i__7495__auto___19355 = G__19356;
continue;
} else {
}
break;
}

var G__19353 = args19351.length;
switch (G__19353) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19351.length)].join('')));

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
var args19358 = [];
var len__7494__auto___19361 = arguments.length;
var i__7495__auto___19362 = (0);
while(true){
if((i__7495__auto___19362 < len__7494__auto___19361)){
args19358.push((arguments[i__7495__auto___19362]));

var G__19363 = (i__7495__auto___19362 + (1));
i__7495__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var G__19360 = args19358.length;
switch (G__19360) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19358.length)].join('')));

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
var args19365 = [];
var len__7494__auto___19436 = arguments.length;
var i__7495__auto___19437 = (0);
while(true){
if((i__7495__auto___19437 < len__7494__auto___19436)){
args19365.push((arguments[i__7495__auto___19437]));

var G__19438 = (i__7495__auto___19437 + (1));
i__7495__auto___19437 = G__19438;
continue;
} else {
}
break;
}

var G__19367 = args19365.length;
switch (G__19367) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19365.length)].join('')));

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
var c__17401__auto___19440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19406){
var state_val_19407 = (state_19406[(1)]);
if((state_val_19407 === (7))){
var state_19406__$1 = state_19406;
var statearr_19408_19441 = state_19406__$1;
(statearr_19408_19441[(2)] = null);

(statearr_19408_19441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (1))){
var state_19406__$1 = state_19406;
var statearr_19409_19442 = state_19406__$1;
(statearr_19409_19442[(2)] = null);

(statearr_19409_19442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (4))){
var inst_19370 = (state_19406[(7)]);
var inst_19372 = (inst_19370 < cnt);
var state_19406__$1 = state_19406;
if(cljs.core.truth_(inst_19372)){
var statearr_19410_19443 = state_19406__$1;
(statearr_19410_19443[(1)] = (6));

} else {
var statearr_19411_19444 = state_19406__$1;
(statearr_19411_19444[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (15))){
var inst_19402 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19412_19445 = state_19406__$1;
(statearr_19412_19445[(2)] = inst_19402);

(statearr_19412_19445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (13))){
var inst_19395 = cljs.core.async.close_BANG_.call(null,out);
var state_19406__$1 = state_19406;
var statearr_19413_19446 = state_19406__$1;
(statearr_19413_19446[(2)] = inst_19395);

(statearr_19413_19446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (6))){
var state_19406__$1 = state_19406;
var statearr_19414_19447 = state_19406__$1;
(statearr_19414_19447[(2)] = null);

(statearr_19414_19447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (3))){
var inst_19404 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19406__$1,inst_19404);
} else {
if((state_val_19407 === (12))){
var inst_19392 = (state_19406[(8)]);
var inst_19392__$1 = (state_19406[(2)]);
var inst_19393 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19392__$1);
var state_19406__$1 = (function (){var statearr_19415 = state_19406;
(statearr_19415[(8)] = inst_19392__$1);

return statearr_19415;
})();
if(cljs.core.truth_(inst_19393)){
var statearr_19416_19448 = state_19406__$1;
(statearr_19416_19448[(1)] = (13));

} else {
var statearr_19417_19449 = state_19406__$1;
(statearr_19417_19449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (2))){
var inst_19369 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19370 = (0);
var state_19406__$1 = (function (){var statearr_19418 = state_19406;
(statearr_19418[(7)] = inst_19370);

(statearr_19418[(9)] = inst_19369);

return statearr_19418;
})();
var statearr_19419_19450 = state_19406__$1;
(statearr_19419_19450[(2)] = null);

(statearr_19419_19450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (11))){
var inst_19370 = (state_19406[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19406,(10),Object,null,(9));
var inst_19379 = chs__$1.call(null,inst_19370);
var inst_19380 = done.call(null,inst_19370);
var inst_19381 = cljs.core.async.take_BANG_.call(null,inst_19379,inst_19380);
var state_19406__$1 = state_19406;
var statearr_19420_19451 = state_19406__$1;
(statearr_19420_19451[(2)] = inst_19381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19406__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (9))){
var inst_19370 = (state_19406[(7)]);
var inst_19383 = (state_19406[(2)]);
var inst_19384 = (inst_19370 + (1));
var inst_19370__$1 = inst_19384;
var state_19406__$1 = (function (){var statearr_19421 = state_19406;
(statearr_19421[(7)] = inst_19370__$1);

(statearr_19421[(10)] = inst_19383);

return statearr_19421;
})();
var statearr_19422_19452 = state_19406__$1;
(statearr_19422_19452[(2)] = null);

(statearr_19422_19452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (5))){
var inst_19390 = (state_19406[(2)]);
var state_19406__$1 = (function (){var statearr_19423 = state_19406;
(statearr_19423[(11)] = inst_19390);

return statearr_19423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19406__$1,(12),dchan);
} else {
if((state_val_19407 === (14))){
var inst_19392 = (state_19406[(8)]);
var inst_19397 = cljs.core.apply.call(null,f,inst_19392);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19406__$1,(16),out,inst_19397);
} else {
if((state_val_19407 === (16))){
var inst_19399 = (state_19406[(2)]);
var state_19406__$1 = (function (){var statearr_19424 = state_19406;
(statearr_19424[(12)] = inst_19399);

return statearr_19424;
})();
var statearr_19425_19453 = state_19406__$1;
(statearr_19425_19453[(2)] = null);

(statearr_19425_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (10))){
var inst_19374 = (state_19406[(2)]);
var inst_19375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19406__$1 = (function (){var statearr_19426 = state_19406;
(statearr_19426[(13)] = inst_19374);

return statearr_19426;
})();
var statearr_19427_19454 = state_19406__$1;
(statearr_19427_19454[(2)] = inst_19375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19406__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (8))){
var inst_19388 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19428_19455 = state_19406__$1;
(statearr_19428_19455[(2)] = inst_19388);

(statearr_19428_19455[(1)] = (5));


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
});})(c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17289__auto__,c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19432[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19432[(1)] = (1));

return statearr_19432;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19406){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19433){if((e19433 instanceof Object)){
var ex__17293__auto__ = e19433;
var statearr_19434_19456 = state_19406;
(statearr_19434_19456[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_19406;
state_19406 = G__19457;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17403__auto__ = (function (){var statearr_19435 = f__17402__auto__.call(null);
(statearr_19435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19440);

return statearr_19435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19440,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19459 = [];
var len__7494__auto___19517 = arguments.length;
var i__7495__auto___19518 = (0);
while(true){
if((i__7495__auto___19518 < len__7494__auto___19517)){
args19459.push((arguments[i__7495__auto___19518]));

var G__19519 = (i__7495__auto___19518 + (1));
i__7495__auto___19518 = G__19519;
continue;
} else {
}
break;
}

var G__19461 = args19459.length;
switch (G__19461) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19459.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___19521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19521,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19521,out){
return (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19473 = (state_19493[(7)]);
var inst_19472 = (state_19493[(8)]);
var inst_19472__$1 = (state_19493[(2)]);
var inst_19473__$1 = cljs.core.nth.call(null,inst_19472__$1,(0),null);
var inst_19474 = cljs.core.nth.call(null,inst_19472__$1,(1),null);
var inst_19475 = (inst_19473__$1 == null);
var state_19493__$1 = (function (){var statearr_19495 = state_19493;
(statearr_19495[(7)] = inst_19473__$1);

(statearr_19495[(9)] = inst_19474);

(statearr_19495[(8)] = inst_19472__$1);

return statearr_19495;
})();
if(cljs.core.truth_(inst_19475)){
var statearr_19496_19522 = state_19493__$1;
(statearr_19496_19522[(1)] = (8));

} else {
var statearr_19497_19523 = state_19493__$1;
(statearr_19497_19523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (1))){
var inst_19462 = cljs.core.vec.call(null,chs);
var inst_19463 = inst_19462;
var state_19493__$1 = (function (){var statearr_19498 = state_19493;
(statearr_19498[(10)] = inst_19463);

return statearr_19498;
})();
var statearr_19499_19524 = state_19493__$1;
(statearr_19499_19524[(2)] = null);

(statearr_19499_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (4))){
var inst_19463 = (state_19493[(10)]);
var state_19493__$1 = state_19493;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19493__$1,(7),inst_19463);
} else {
if((state_val_19494 === (6))){
var inst_19489 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19500_19525 = state_19493__$1;
(statearr_19500_19525[(2)] = inst_19489);

(statearr_19500_19525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (3))){
var inst_19491 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (2))){
var inst_19463 = (state_19493[(10)]);
var inst_19465 = cljs.core.count.call(null,inst_19463);
var inst_19466 = (inst_19465 > (0));
var state_19493__$1 = state_19493;
if(cljs.core.truth_(inst_19466)){
var statearr_19502_19526 = state_19493__$1;
(statearr_19502_19526[(1)] = (4));

} else {
var statearr_19503_19527 = state_19493__$1;
(statearr_19503_19527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (11))){
var inst_19463 = (state_19493[(10)]);
var inst_19482 = (state_19493[(2)]);
var tmp19501 = inst_19463;
var inst_19463__$1 = tmp19501;
var state_19493__$1 = (function (){var statearr_19504 = state_19493;
(statearr_19504[(10)] = inst_19463__$1);

(statearr_19504[(11)] = inst_19482);

return statearr_19504;
})();
var statearr_19505_19528 = state_19493__$1;
(statearr_19505_19528[(2)] = null);

(statearr_19505_19528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (9))){
var inst_19473 = (state_19493[(7)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19493__$1,(11),out,inst_19473);
} else {
if((state_val_19494 === (5))){
var inst_19487 = cljs.core.async.close_BANG_.call(null,out);
var state_19493__$1 = state_19493;
var statearr_19506_19529 = state_19493__$1;
(statearr_19506_19529[(2)] = inst_19487);

(statearr_19506_19529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (10))){
var inst_19485 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19507_19530 = state_19493__$1;
(statearr_19507_19530[(2)] = inst_19485);

(statearr_19507_19530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (8))){
var inst_19473 = (state_19493[(7)]);
var inst_19474 = (state_19493[(9)]);
var inst_19463 = (state_19493[(10)]);
var inst_19472 = (state_19493[(8)]);
var inst_19477 = (function (){var cs = inst_19463;
var vec__19468 = inst_19472;
var v = inst_19473;
var c = inst_19474;
return ((function (cs,vec__19468,v,c,inst_19473,inst_19474,inst_19463,inst_19472,state_val_19494,c__17401__auto___19521,out){
return (function (p1__19458_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19458_SHARP_);
});
;})(cs,vec__19468,v,c,inst_19473,inst_19474,inst_19463,inst_19472,state_val_19494,c__17401__auto___19521,out))
})();
var inst_19478 = cljs.core.filterv.call(null,inst_19477,inst_19463);
var inst_19463__$1 = inst_19478;
var state_19493__$1 = (function (){var statearr_19508 = state_19493;
(statearr_19508[(10)] = inst_19463__$1);

return statearr_19508;
})();
var statearr_19509_19531 = state_19493__$1;
(statearr_19509_19531[(2)] = null);

(statearr_19509_19531[(1)] = (2));


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
});})(c__17401__auto___19521,out))
;
return ((function (switch__17289__auto__,c__17401__auto___19521,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19513[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19513[(1)] = (1));

return statearr_19513;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19493){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19514){if((e19514 instanceof Object)){
var ex__17293__auto__ = e19514;
var statearr_19515_19532 = state_19493;
(statearr_19515_19532[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19533 = state_19493;
state_19493 = G__19533;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19521,out))
})();
var state__17403__auto__ = (function (){var statearr_19516 = f__17402__auto__.call(null);
(statearr_19516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19521);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19521,out))
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
var args19534 = [];
var len__7494__auto___19583 = arguments.length;
var i__7495__auto___19584 = (0);
while(true){
if((i__7495__auto___19584 < len__7494__auto___19583)){
args19534.push((arguments[i__7495__auto___19584]));

var G__19585 = (i__7495__auto___19584 + (1));
i__7495__auto___19584 = G__19585;
continue;
} else {
}
break;
}

var G__19536 = args19534.length;
switch (G__19536) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19534.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___19587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19587,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19587,out){
return (function (state_19560){
var state_val_19561 = (state_19560[(1)]);
if((state_val_19561 === (7))){
var inst_19542 = (state_19560[(7)]);
var inst_19542__$1 = (state_19560[(2)]);
var inst_19543 = (inst_19542__$1 == null);
var inst_19544 = cljs.core.not.call(null,inst_19543);
var state_19560__$1 = (function (){var statearr_19562 = state_19560;
(statearr_19562[(7)] = inst_19542__$1);

return statearr_19562;
})();
if(inst_19544){
var statearr_19563_19588 = state_19560__$1;
(statearr_19563_19588[(1)] = (8));

} else {
var statearr_19564_19589 = state_19560__$1;
(statearr_19564_19589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (1))){
var inst_19537 = (0);
var state_19560__$1 = (function (){var statearr_19565 = state_19560;
(statearr_19565[(8)] = inst_19537);

return statearr_19565;
})();
var statearr_19566_19590 = state_19560__$1;
(statearr_19566_19590[(2)] = null);

(statearr_19566_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (4))){
var state_19560__$1 = state_19560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19560__$1,(7),ch);
} else {
if((state_val_19561 === (6))){
var inst_19555 = (state_19560[(2)]);
var state_19560__$1 = state_19560;
var statearr_19567_19591 = state_19560__$1;
(statearr_19567_19591[(2)] = inst_19555);

(statearr_19567_19591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (3))){
var inst_19557 = (state_19560[(2)]);
var inst_19558 = cljs.core.async.close_BANG_.call(null,out);
var state_19560__$1 = (function (){var statearr_19568 = state_19560;
(statearr_19568[(9)] = inst_19557);

return statearr_19568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19560__$1,inst_19558);
} else {
if((state_val_19561 === (2))){
var inst_19537 = (state_19560[(8)]);
var inst_19539 = (inst_19537 < n);
var state_19560__$1 = state_19560;
if(cljs.core.truth_(inst_19539)){
var statearr_19569_19592 = state_19560__$1;
(statearr_19569_19592[(1)] = (4));

} else {
var statearr_19570_19593 = state_19560__$1;
(statearr_19570_19593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (11))){
var inst_19537 = (state_19560[(8)]);
var inst_19547 = (state_19560[(2)]);
var inst_19548 = (inst_19537 + (1));
var inst_19537__$1 = inst_19548;
var state_19560__$1 = (function (){var statearr_19571 = state_19560;
(statearr_19571[(8)] = inst_19537__$1);

(statearr_19571[(10)] = inst_19547);

return statearr_19571;
})();
var statearr_19572_19594 = state_19560__$1;
(statearr_19572_19594[(2)] = null);

(statearr_19572_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (9))){
var state_19560__$1 = state_19560;
var statearr_19573_19595 = state_19560__$1;
(statearr_19573_19595[(2)] = null);

(statearr_19573_19595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (5))){
var state_19560__$1 = state_19560;
var statearr_19574_19596 = state_19560__$1;
(statearr_19574_19596[(2)] = null);

(statearr_19574_19596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (10))){
var inst_19552 = (state_19560[(2)]);
var state_19560__$1 = state_19560;
var statearr_19575_19597 = state_19560__$1;
(statearr_19575_19597[(2)] = inst_19552);

(statearr_19575_19597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (8))){
var inst_19542 = (state_19560[(7)]);
var state_19560__$1 = state_19560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19560__$1,(11),out,inst_19542);
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
});})(c__17401__auto___19587,out))
;
return ((function (switch__17289__auto__,c__17401__auto___19587,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19579[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19579[(1)] = (1));

return statearr_19579;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19560){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19580){if((e19580 instanceof Object)){
var ex__17293__auto__ = e19580;
var statearr_19581_19598 = state_19560;
(statearr_19581_19598[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19599 = state_19560;
state_19560 = G__19599;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19587,out))
})();
var state__17403__auto__ = (function (){var statearr_19582 = f__17402__auto__.call(null);
(statearr_19582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19587);

return statearr_19582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19587,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19607 = (function (map_LT_,f,ch,meta19608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19608 = meta19608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19609,meta19608__$1){
var self__ = this;
var _19609__$1 = this;
return (new cljs.core.async.t_cljs$core$async19607(self__.map_LT_,self__.f,self__.ch,meta19608__$1));
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19609){
var self__ = this;
var _19609__$1 = this;
return self__.meta19608;
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19610 = (function (map_LT_,f,ch,meta19608,_,fn1,meta19611){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19608 = meta19608;
this._ = _;
this.fn1 = fn1;
this.meta19611 = meta19611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19612,meta19611__$1){
var self__ = this;
var _19612__$1 = this;
return (new cljs.core.async.t_cljs$core$async19610(self__.map_LT_,self__.f,self__.ch,self__.meta19608,self__._,self__.fn1,meta19611__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19612){
var self__ = this;
var _19612__$1 = this;
return self__.meta19611;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19600_SHARP_){
return f1.call(null,(((p1__19600_SHARP_ == null))?null:self__.f.call(null,p1__19600_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19608","meta19608",-337717575,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19607","cljs.core.async/t_cljs$core$async19607",1670788776,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19611","meta19611",-1648152014,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19610";

cljs.core.async.t_cljs$core$async19610.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async19610");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19610 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19610(map_LT___$1,f__$1,ch__$1,meta19608__$1,___$2,fn1__$1,meta19611){
return (new cljs.core.async.t_cljs$core$async19610(map_LT___$1,f__$1,ch__$1,meta19608__$1,___$2,fn1__$1,meta19611));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19610(self__.map_LT_,self__.f,self__.ch,self__.meta19608,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6407__auto__ = ret;
if(cljs.core.truth_(and__6407__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6407__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19608","meta19608",-337717575,null)], null);
});

cljs.core.async.t_cljs$core$async19607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19607";

cljs.core.async.t_cljs$core$async19607.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async19607");
});

cljs.core.async.__GT_t_cljs$core$async19607 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19607(map_LT___$1,f__$1,ch__$1,meta19608){
return (new cljs.core.async.t_cljs$core$async19607(map_LT___$1,f__$1,ch__$1,meta19608));
});

}

return (new cljs.core.async.t_cljs$core$async19607(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19616 = (function (map_GT_,f,ch,meta19617){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19617 = meta19617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19618,meta19617__$1){
var self__ = this;
var _19618__$1 = this;
return (new cljs.core.async.t_cljs$core$async19616(self__.map_GT_,self__.f,self__.ch,meta19617__$1));
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19618){
var self__ = this;
var _19618__$1 = this;
return self__.meta19617;
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19617","meta19617",-1226695533,null)], null);
});

cljs.core.async.t_cljs$core$async19616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19616";

cljs.core.async.t_cljs$core$async19616.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async19616");
});

cljs.core.async.__GT_t_cljs$core$async19616 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19616(map_GT___$1,f__$1,ch__$1,meta19617){
return (new cljs.core.async.t_cljs$core$async19616(map_GT___$1,f__$1,ch__$1,meta19617));
});

}

return (new cljs.core.async.t_cljs$core$async19616(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19622 = (function (filter_GT_,p,ch,meta19623){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19623 = meta19623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19624,meta19623__$1){
var self__ = this;
var _19624__$1 = this;
return (new cljs.core.async.t_cljs$core$async19622(self__.filter_GT_,self__.p,self__.ch,meta19623__$1));
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19624){
var self__ = this;
var _19624__$1 = this;
return self__.meta19623;
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19623","meta19623",-697415032,null)], null);
});

cljs.core.async.t_cljs$core$async19622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19622";

cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cljs.core.async/t_cljs$core$async19622");
});

cljs.core.async.__GT_t_cljs$core$async19622 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19622(filter_GT___$1,p__$1,ch__$1,meta19623){
return (new cljs.core.async.t_cljs$core$async19622(filter_GT___$1,p__$1,ch__$1,meta19623));
});

}

return (new cljs.core.async.t_cljs$core$async19622(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19625 = [];
var len__7494__auto___19669 = arguments.length;
var i__7495__auto___19670 = (0);
while(true){
if((i__7495__auto___19670 < len__7494__auto___19669)){
args19625.push((arguments[i__7495__auto___19670]));

var G__19671 = (i__7495__auto___19670 + (1));
i__7495__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19627 = args19625.length;
switch (G__19627) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19625.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___19673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19673,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19673,out){
return (function (state_19648){
var state_val_19649 = (state_19648[(1)]);
if((state_val_19649 === (7))){
var inst_19644 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
var statearr_19650_19674 = state_19648__$1;
(statearr_19650_19674[(2)] = inst_19644);

(statearr_19650_19674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (1))){
var state_19648__$1 = state_19648;
var statearr_19651_19675 = state_19648__$1;
(statearr_19651_19675[(2)] = null);

(statearr_19651_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (4))){
var inst_19630 = (state_19648[(7)]);
var inst_19630__$1 = (state_19648[(2)]);
var inst_19631 = (inst_19630__$1 == null);
var state_19648__$1 = (function (){var statearr_19652 = state_19648;
(statearr_19652[(7)] = inst_19630__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19631)){
var statearr_19653_19676 = state_19648__$1;
(statearr_19653_19676[(1)] = (5));

} else {
var statearr_19654_19677 = state_19648__$1;
(statearr_19654_19677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (6))){
var inst_19630 = (state_19648[(7)]);
var inst_19635 = p.call(null,inst_19630);
var state_19648__$1 = state_19648;
if(cljs.core.truth_(inst_19635)){
var statearr_19655_19678 = state_19648__$1;
(statearr_19655_19678[(1)] = (8));

} else {
var statearr_19656_19679 = state_19648__$1;
(statearr_19656_19679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (3))){
var inst_19646 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19648__$1,inst_19646);
} else {
if((state_val_19649 === (2))){
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19648__$1,(4),ch);
} else {
if((state_val_19649 === (11))){
var inst_19638 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
var statearr_19657_19680 = state_19648__$1;
(statearr_19657_19680[(2)] = inst_19638);

(statearr_19657_19680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (9))){
var state_19648__$1 = state_19648;
var statearr_19658_19681 = state_19648__$1;
(statearr_19658_19681[(2)] = null);

(statearr_19658_19681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (5))){
var inst_19633 = cljs.core.async.close_BANG_.call(null,out);
var state_19648__$1 = state_19648;
var statearr_19659_19682 = state_19648__$1;
(statearr_19659_19682[(2)] = inst_19633);

(statearr_19659_19682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (10))){
var inst_19641 = (state_19648[(2)]);
var state_19648__$1 = (function (){var statearr_19660 = state_19648;
(statearr_19660[(8)] = inst_19641);

return statearr_19660;
})();
var statearr_19661_19683 = state_19648__$1;
(statearr_19661_19683[(2)] = null);

(statearr_19661_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (8))){
var inst_19630 = (state_19648[(7)]);
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19648__$1,(11),out,inst_19630);
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
});})(c__17401__auto___19673,out))
;
return ((function (switch__17289__auto__,c__17401__auto___19673,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19665 = [null,null,null,null,null,null,null,null,null];
(statearr_19665[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19665[(1)] = (1));

return statearr_19665;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19648){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19666){if((e19666 instanceof Object)){
var ex__17293__auto__ = e19666;
var statearr_19667_19684 = state_19648;
(statearr_19667_19684[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19685 = state_19648;
state_19648 = G__19685;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19673,out))
})();
var state__17403__auto__ = (function (){var statearr_19668 = f__17402__auto__.call(null);
(statearr_19668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19673);

return statearr_19668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19673,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19686 = [];
var len__7494__auto___19689 = arguments.length;
var i__7495__auto___19690 = (0);
while(true){
if((i__7495__auto___19690 < len__7494__auto___19689)){
args19686.push((arguments[i__7495__auto___19690]));

var G__19691 = (i__7495__auto___19690 + (1));
i__7495__auto___19690 = G__19691;
continue;
} else {
}
break;
}

var G__19688 = args19686.length;
switch (G__19688) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19686.length)].join('')));

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
var c__17401__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto__){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto__){
return (function (state_19858){
var state_val_19859 = (state_19858[(1)]);
if((state_val_19859 === (7))){
var inst_19854 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19860_19901 = state_19858__$1;
(statearr_19860_19901[(2)] = inst_19854);

(statearr_19860_19901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (20))){
var inst_19824 = (state_19858[(7)]);
var inst_19835 = (state_19858[(2)]);
var inst_19836 = cljs.core.next.call(null,inst_19824);
var inst_19810 = inst_19836;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19861 = state_19858;
(statearr_19861[(8)] = inst_19835);

(statearr_19861[(9)] = inst_19810);

(statearr_19861[(10)] = inst_19812);

(statearr_19861[(11)] = inst_19813);

(statearr_19861[(12)] = inst_19811);

return statearr_19861;
})();
var statearr_19862_19902 = state_19858__$1;
(statearr_19862_19902[(2)] = null);

(statearr_19862_19902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (1))){
var state_19858__$1 = state_19858;
var statearr_19863_19903 = state_19858__$1;
(statearr_19863_19903[(2)] = null);

(statearr_19863_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (4))){
var inst_19799 = (state_19858[(13)]);
var inst_19799__$1 = (state_19858[(2)]);
var inst_19800 = (inst_19799__$1 == null);
var state_19858__$1 = (function (){var statearr_19864 = state_19858;
(statearr_19864[(13)] = inst_19799__$1);

return statearr_19864;
})();
if(cljs.core.truth_(inst_19800)){
var statearr_19865_19904 = state_19858__$1;
(statearr_19865_19904[(1)] = (5));

} else {
var statearr_19866_19905 = state_19858__$1;
(statearr_19866_19905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (15))){
var state_19858__$1 = state_19858;
var statearr_19870_19906 = state_19858__$1;
(statearr_19870_19906[(2)] = null);

(statearr_19870_19906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (21))){
var state_19858__$1 = state_19858;
var statearr_19871_19907 = state_19858__$1;
(statearr_19871_19907[(2)] = null);

(statearr_19871_19907[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (13))){
var inst_19810 = (state_19858[(9)]);
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19820 = (state_19858[(2)]);
var inst_19821 = (inst_19813 + (1));
var tmp19867 = inst_19810;
var tmp19868 = inst_19812;
var tmp19869 = inst_19811;
var inst_19810__$1 = tmp19867;
var inst_19811__$1 = tmp19869;
var inst_19812__$1 = tmp19868;
var inst_19813__$1 = inst_19821;
var state_19858__$1 = (function (){var statearr_19872 = state_19858;
(statearr_19872[(14)] = inst_19820);

(statearr_19872[(9)] = inst_19810__$1);

(statearr_19872[(10)] = inst_19812__$1);

(statearr_19872[(11)] = inst_19813__$1);

(statearr_19872[(12)] = inst_19811__$1);

return statearr_19872;
})();
var statearr_19873_19908 = state_19858__$1;
(statearr_19873_19908[(2)] = null);

(statearr_19873_19908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (22))){
var state_19858__$1 = state_19858;
var statearr_19874_19909 = state_19858__$1;
(statearr_19874_19909[(2)] = null);

(statearr_19874_19909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (6))){
var inst_19799 = (state_19858[(13)]);
var inst_19808 = f.call(null,inst_19799);
var inst_19809 = cljs.core.seq.call(null,inst_19808);
var inst_19810 = inst_19809;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19875 = state_19858;
(statearr_19875[(9)] = inst_19810);

(statearr_19875[(10)] = inst_19812);

(statearr_19875[(11)] = inst_19813);

(statearr_19875[(12)] = inst_19811);

return statearr_19875;
})();
var statearr_19876_19910 = state_19858__$1;
(statearr_19876_19910[(2)] = null);

(statearr_19876_19910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (17))){
var inst_19824 = (state_19858[(7)]);
var inst_19828 = cljs.core.chunk_first.call(null,inst_19824);
var inst_19829 = cljs.core.chunk_rest.call(null,inst_19824);
var inst_19830 = cljs.core.count.call(null,inst_19828);
var inst_19810 = inst_19829;
var inst_19811 = inst_19828;
var inst_19812 = inst_19830;
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19877 = state_19858;
(statearr_19877[(9)] = inst_19810);

(statearr_19877[(10)] = inst_19812);

(statearr_19877[(11)] = inst_19813);

(statearr_19877[(12)] = inst_19811);

return statearr_19877;
})();
var statearr_19878_19911 = state_19858__$1;
(statearr_19878_19911[(2)] = null);

(statearr_19878_19911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (3))){
var inst_19856 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19858__$1,inst_19856);
} else {
if((state_val_19859 === (12))){
var inst_19844 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19879_19912 = state_19858__$1;
(statearr_19879_19912[(2)] = inst_19844);

(statearr_19879_19912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (2))){
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19858__$1,(4),in$);
} else {
if((state_val_19859 === (23))){
var inst_19852 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19880_19913 = state_19858__$1;
(statearr_19880_19913[(2)] = inst_19852);

(statearr_19880_19913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (19))){
var inst_19839 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19881_19914 = state_19858__$1;
(statearr_19881_19914[(2)] = inst_19839);

(statearr_19881_19914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (11))){
var inst_19810 = (state_19858[(9)]);
var inst_19824 = (state_19858[(7)]);
var inst_19824__$1 = cljs.core.seq.call(null,inst_19810);
var state_19858__$1 = (function (){var statearr_19882 = state_19858;
(statearr_19882[(7)] = inst_19824__$1);

return statearr_19882;
})();
if(inst_19824__$1){
var statearr_19883_19915 = state_19858__$1;
(statearr_19883_19915[(1)] = (14));

} else {
var statearr_19884_19916 = state_19858__$1;
(statearr_19884_19916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (9))){
var inst_19846 = (state_19858[(2)]);
var inst_19847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19858__$1 = (function (){var statearr_19885 = state_19858;
(statearr_19885[(15)] = inst_19846);

return statearr_19885;
})();
if(cljs.core.truth_(inst_19847)){
var statearr_19886_19917 = state_19858__$1;
(statearr_19886_19917[(1)] = (21));

} else {
var statearr_19887_19918 = state_19858__$1;
(statearr_19887_19918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (5))){
var inst_19802 = cljs.core.async.close_BANG_.call(null,out);
var state_19858__$1 = state_19858;
var statearr_19888_19919 = state_19858__$1;
(statearr_19888_19919[(2)] = inst_19802);

(statearr_19888_19919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (14))){
var inst_19824 = (state_19858[(7)]);
var inst_19826 = cljs.core.chunked_seq_QMARK_.call(null,inst_19824);
var state_19858__$1 = state_19858;
if(inst_19826){
var statearr_19889_19920 = state_19858__$1;
(statearr_19889_19920[(1)] = (17));

} else {
var statearr_19890_19921 = state_19858__$1;
(statearr_19890_19921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (16))){
var inst_19842 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19891_19922 = state_19858__$1;
(statearr_19891_19922[(2)] = inst_19842);

(statearr_19891_19922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (10))){
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19818 = cljs.core._nth.call(null,inst_19811,inst_19813);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19858__$1,(13),out,inst_19818);
} else {
if((state_val_19859 === (18))){
var inst_19824 = (state_19858[(7)]);
var inst_19833 = cljs.core.first.call(null,inst_19824);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19858__$1,(20),out,inst_19833);
} else {
if((state_val_19859 === (8))){
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19815 = (inst_19813 < inst_19812);
var inst_19816 = inst_19815;
var state_19858__$1 = state_19858;
if(cljs.core.truth_(inst_19816)){
var statearr_19892_19923 = state_19858__$1;
(statearr_19892_19923[(1)] = (10));

} else {
var statearr_19893_19924 = state_19858__$1;
(statearr_19893_19924[(1)] = (11));

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
});})(c__17401__auto__))
;
return ((function (switch__17289__auto__,c__17401__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____0 = (function (){
var statearr_19897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19897[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__);

(statearr_19897[(1)] = (1));

return statearr_19897;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____1 = (function (state_19858){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19898){if((e19898 instanceof Object)){
var ex__17293__auto__ = e19898;
var statearr_19899_19925 = state_19858;
(statearr_19899_19925[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19926 = state_19858;
state_19858 = G__19926;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__ = function(state_19858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____1.call(this,state_19858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17290__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto__))
})();
var state__17403__auto__ = (function (){var statearr_19900 = f__17402__auto__.call(null);
(statearr_19900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto__);

return statearr_19900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto__))
);

return c__17401__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19927 = [];
var len__7494__auto___19930 = arguments.length;
var i__7495__auto___19931 = (0);
while(true){
if((i__7495__auto___19931 < len__7494__auto___19930)){
args19927.push((arguments[i__7495__auto___19931]));

var G__19932 = (i__7495__auto___19931 + (1));
i__7495__auto___19931 = G__19932;
continue;
} else {
}
break;
}

var G__19929 = args19927.length;
switch (G__19929) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19927.length)].join('')));

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
var args19934 = [];
var len__7494__auto___19937 = arguments.length;
var i__7495__auto___19938 = (0);
while(true){
if((i__7495__auto___19938 < len__7494__auto___19937)){
args19934.push((arguments[i__7495__auto___19938]));

var G__19939 = (i__7495__auto___19938 + (1));
i__7495__auto___19938 = G__19939;
continue;
} else {
}
break;
}

var G__19936 = args19934.length;
switch (G__19936) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19934.length)].join('')));

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
var args19941 = [];
var len__7494__auto___19992 = arguments.length;
var i__7495__auto___19993 = (0);
while(true){
if((i__7495__auto___19993 < len__7494__auto___19992)){
args19941.push((arguments[i__7495__auto___19993]));

var G__19994 = (i__7495__auto___19993 + (1));
i__7495__auto___19993 = G__19994;
continue;
} else {
}
break;
}

var G__19943 = args19941.length;
switch (G__19943) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19941.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___19996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___19996,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___19996,out){
return (function (state_19967){
var state_val_19968 = (state_19967[(1)]);
if((state_val_19968 === (7))){
var inst_19962 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19969_19997 = state_19967__$1;
(statearr_19969_19997[(2)] = inst_19962);

(statearr_19969_19997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (1))){
var inst_19944 = null;
var state_19967__$1 = (function (){var statearr_19970 = state_19967;
(statearr_19970[(7)] = inst_19944);

return statearr_19970;
})();
var statearr_19971_19998 = state_19967__$1;
(statearr_19971_19998[(2)] = null);

(statearr_19971_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (4))){
var inst_19947 = (state_19967[(8)]);
var inst_19947__$1 = (state_19967[(2)]);
var inst_19948 = (inst_19947__$1 == null);
var inst_19949 = cljs.core.not.call(null,inst_19948);
var state_19967__$1 = (function (){var statearr_19972 = state_19967;
(statearr_19972[(8)] = inst_19947__$1);

return statearr_19972;
})();
if(inst_19949){
var statearr_19973_19999 = state_19967__$1;
(statearr_19973_19999[(1)] = (5));

} else {
var statearr_19974_20000 = state_19967__$1;
(statearr_19974_20000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (6))){
var state_19967__$1 = state_19967;
var statearr_19975_20001 = state_19967__$1;
(statearr_19975_20001[(2)] = null);

(statearr_19975_20001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (3))){
var inst_19964 = (state_19967[(2)]);
var inst_19965 = cljs.core.async.close_BANG_.call(null,out);
var state_19967__$1 = (function (){var statearr_19976 = state_19967;
(statearr_19976[(9)] = inst_19964);

return statearr_19976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19967__$1,inst_19965);
} else {
if((state_val_19968 === (2))){
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19967__$1,(4),ch);
} else {
if((state_val_19968 === (11))){
var inst_19947 = (state_19967[(8)]);
var inst_19956 = (state_19967[(2)]);
var inst_19944 = inst_19947;
var state_19967__$1 = (function (){var statearr_19977 = state_19967;
(statearr_19977[(10)] = inst_19956);

(statearr_19977[(7)] = inst_19944);

return statearr_19977;
})();
var statearr_19978_20002 = state_19967__$1;
(statearr_19978_20002[(2)] = null);

(statearr_19978_20002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (9))){
var inst_19947 = (state_19967[(8)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19967__$1,(11),out,inst_19947);
} else {
if((state_val_19968 === (5))){
var inst_19947 = (state_19967[(8)]);
var inst_19944 = (state_19967[(7)]);
var inst_19951 = cljs.core._EQ_.call(null,inst_19947,inst_19944);
var state_19967__$1 = state_19967;
if(inst_19951){
var statearr_19980_20003 = state_19967__$1;
(statearr_19980_20003[(1)] = (8));

} else {
var statearr_19981_20004 = state_19967__$1;
(statearr_19981_20004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (10))){
var inst_19959 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19982_20005 = state_19967__$1;
(statearr_19982_20005[(2)] = inst_19959);

(statearr_19982_20005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (8))){
var inst_19944 = (state_19967[(7)]);
var tmp19979 = inst_19944;
var inst_19944__$1 = tmp19979;
var state_19967__$1 = (function (){var statearr_19983 = state_19967;
(statearr_19983[(7)] = inst_19944__$1);

return statearr_19983;
})();
var statearr_19984_20006 = state_19967__$1;
(statearr_19984_20006[(2)] = null);

(statearr_19984_20006[(1)] = (2));


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
});})(c__17401__auto___19996,out))
;
return ((function (switch__17289__auto__,c__17401__auto___19996,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_19988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19988[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_19988[(1)] = (1));

return statearr_19988;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_19967){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_19967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e19989){if((e19989 instanceof Object)){
var ex__17293__auto__ = e19989;
var statearr_19990_20007 = state_19967;
(statearr_19990_20007[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20008 = state_19967;
state_19967 = G__20008;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_19967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_19967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___19996,out))
})();
var state__17403__auto__ = (function (){var statearr_19991 = f__17402__auto__.call(null);
(statearr_19991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___19996);

return statearr_19991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___19996,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20009 = [];
var len__7494__auto___20079 = arguments.length;
var i__7495__auto___20080 = (0);
while(true){
if((i__7495__auto___20080 < len__7494__auto___20079)){
args20009.push((arguments[i__7495__auto___20080]));

var G__20081 = (i__7495__auto___20080 + (1));
i__7495__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__20011 = args20009.length;
switch (G__20011) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20009.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___20083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___20083,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___20083,out){
return (function (state_20049){
var state_val_20050 = (state_20049[(1)]);
if((state_val_20050 === (7))){
var inst_20045 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20051_20084 = state_20049__$1;
(statearr_20051_20084[(2)] = inst_20045);

(statearr_20051_20084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (1))){
var inst_20012 = (new Array(n));
var inst_20013 = inst_20012;
var inst_20014 = (0);
var state_20049__$1 = (function (){var statearr_20052 = state_20049;
(statearr_20052[(7)] = inst_20013);

(statearr_20052[(8)] = inst_20014);

return statearr_20052;
})();
var statearr_20053_20085 = state_20049__$1;
(statearr_20053_20085[(2)] = null);

(statearr_20053_20085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (4))){
var inst_20017 = (state_20049[(9)]);
var inst_20017__$1 = (state_20049[(2)]);
var inst_20018 = (inst_20017__$1 == null);
var inst_20019 = cljs.core.not.call(null,inst_20018);
var state_20049__$1 = (function (){var statearr_20054 = state_20049;
(statearr_20054[(9)] = inst_20017__$1);

return statearr_20054;
})();
if(inst_20019){
var statearr_20055_20086 = state_20049__$1;
(statearr_20055_20086[(1)] = (5));

} else {
var statearr_20056_20087 = state_20049__$1;
(statearr_20056_20087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (15))){
var inst_20039 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20057_20088 = state_20049__$1;
(statearr_20057_20088[(2)] = inst_20039);

(statearr_20057_20088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (13))){
var state_20049__$1 = state_20049;
var statearr_20058_20089 = state_20049__$1;
(statearr_20058_20089[(2)] = null);

(statearr_20058_20089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (6))){
var inst_20014 = (state_20049[(8)]);
var inst_20035 = (inst_20014 > (0));
var state_20049__$1 = state_20049;
if(cljs.core.truth_(inst_20035)){
var statearr_20059_20090 = state_20049__$1;
(statearr_20059_20090[(1)] = (12));

} else {
var statearr_20060_20091 = state_20049__$1;
(statearr_20060_20091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (3))){
var inst_20047 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20049__$1,inst_20047);
} else {
if((state_val_20050 === (12))){
var inst_20013 = (state_20049[(7)]);
var inst_20037 = cljs.core.vec.call(null,inst_20013);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20049__$1,(15),out,inst_20037);
} else {
if((state_val_20050 === (2))){
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20049__$1,(4),ch);
} else {
if((state_val_20050 === (11))){
var inst_20029 = (state_20049[(2)]);
var inst_20030 = (new Array(n));
var inst_20013 = inst_20030;
var inst_20014 = (0);
var state_20049__$1 = (function (){var statearr_20061 = state_20049;
(statearr_20061[(7)] = inst_20013);

(statearr_20061[(10)] = inst_20029);

(statearr_20061[(8)] = inst_20014);

return statearr_20061;
})();
var statearr_20062_20092 = state_20049__$1;
(statearr_20062_20092[(2)] = null);

(statearr_20062_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (9))){
var inst_20013 = (state_20049[(7)]);
var inst_20027 = cljs.core.vec.call(null,inst_20013);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20049__$1,(11),out,inst_20027);
} else {
if((state_val_20050 === (5))){
var inst_20017 = (state_20049[(9)]);
var inst_20013 = (state_20049[(7)]);
var inst_20022 = (state_20049[(11)]);
var inst_20014 = (state_20049[(8)]);
var inst_20021 = (inst_20013[inst_20014] = inst_20017);
var inst_20022__$1 = (inst_20014 + (1));
var inst_20023 = (inst_20022__$1 < n);
var state_20049__$1 = (function (){var statearr_20063 = state_20049;
(statearr_20063[(12)] = inst_20021);

(statearr_20063[(11)] = inst_20022__$1);

return statearr_20063;
})();
if(cljs.core.truth_(inst_20023)){
var statearr_20064_20093 = state_20049__$1;
(statearr_20064_20093[(1)] = (8));

} else {
var statearr_20065_20094 = state_20049__$1;
(statearr_20065_20094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (14))){
var inst_20042 = (state_20049[(2)]);
var inst_20043 = cljs.core.async.close_BANG_.call(null,out);
var state_20049__$1 = (function (){var statearr_20067 = state_20049;
(statearr_20067[(13)] = inst_20042);

return statearr_20067;
})();
var statearr_20068_20095 = state_20049__$1;
(statearr_20068_20095[(2)] = inst_20043);

(statearr_20068_20095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (10))){
var inst_20033 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20069_20096 = state_20049__$1;
(statearr_20069_20096[(2)] = inst_20033);

(statearr_20069_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (8))){
var inst_20013 = (state_20049[(7)]);
var inst_20022 = (state_20049[(11)]);
var tmp20066 = inst_20013;
var inst_20013__$1 = tmp20066;
var inst_20014 = inst_20022;
var state_20049__$1 = (function (){var statearr_20070 = state_20049;
(statearr_20070[(7)] = inst_20013__$1);

(statearr_20070[(8)] = inst_20014);

return statearr_20070;
})();
var statearr_20071_20097 = state_20049__$1;
(statearr_20071_20097[(2)] = null);

(statearr_20071_20097[(1)] = (2));


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
});})(c__17401__auto___20083,out))
;
return ((function (switch__17289__auto__,c__17401__auto___20083,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_20075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20075[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_20075[(1)] = (1));

return statearr_20075;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_20049){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_20049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e20076){if((e20076 instanceof Object)){
var ex__17293__auto__ = e20076;
var statearr_20077_20098 = state_20049;
(statearr_20077_20098[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20099 = state_20049;
state_20049 = G__20099;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_20049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_20049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___20083,out))
})();
var state__17403__auto__ = (function (){var statearr_20078 = f__17402__auto__.call(null);
(statearr_20078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___20083);

return statearr_20078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___20083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20100 = [];
var len__7494__auto___20174 = arguments.length;
var i__7495__auto___20175 = (0);
while(true){
if((i__7495__auto___20175 < len__7494__auto___20174)){
args20100.push((arguments[i__7495__auto___20175]));

var G__20176 = (i__7495__auto___20175 + (1));
i__7495__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var G__20102 = args20100.length;
switch (G__20102) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20100.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17401__auto___20178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17401__auto___20178,out){
return (function (){
var f__17402__auto__ = (function (){var switch__17289__auto__ = ((function (c__17401__auto___20178,out){
return (function (state_20144){
var state_val_20145 = (state_20144[(1)]);
if((state_val_20145 === (7))){
var inst_20140 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20146_20179 = state_20144__$1;
(statearr_20146_20179[(2)] = inst_20140);

(statearr_20146_20179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (1))){
var inst_20103 = [];
var inst_20104 = inst_20103;
var inst_20105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20144__$1 = (function (){var statearr_20147 = state_20144;
(statearr_20147[(7)] = inst_20104);

(statearr_20147[(8)] = inst_20105);

return statearr_20147;
})();
var statearr_20148_20180 = state_20144__$1;
(statearr_20148_20180[(2)] = null);

(statearr_20148_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (4))){
var inst_20108 = (state_20144[(9)]);
var inst_20108__$1 = (state_20144[(2)]);
var inst_20109 = (inst_20108__$1 == null);
var inst_20110 = cljs.core.not.call(null,inst_20109);
var state_20144__$1 = (function (){var statearr_20149 = state_20144;
(statearr_20149[(9)] = inst_20108__$1);

return statearr_20149;
})();
if(inst_20110){
var statearr_20150_20181 = state_20144__$1;
(statearr_20150_20181[(1)] = (5));

} else {
var statearr_20151_20182 = state_20144__$1;
(statearr_20151_20182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (15))){
var inst_20134 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20152_20183 = state_20144__$1;
(statearr_20152_20183[(2)] = inst_20134);

(statearr_20152_20183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (13))){
var state_20144__$1 = state_20144;
var statearr_20153_20184 = state_20144__$1;
(statearr_20153_20184[(2)] = null);

(statearr_20153_20184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (6))){
var inst_20104 = (state_20144[(7)]);
var inst_20129 = inst_20104.length;
var inst_20130 = (inst_20129 > (0));
var state_20144__$1 = state_20144;
if(cljs.core.truth_(inst_20130)){
var statearr_20154_20185 = state_20144__$1;
(statearr_20154_20185[(1)] = (12));

} else {
var statearr_20155_20186 = state_20144__$1;
(statearr_20155_20186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (3))){
var inst_20142 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20144__$1,inst_20142);
} else {
if((state_val_20145 === (12))){
var inst_20104 = (state_20144[(7)]);
var inst_20132 = cljs.core.vec.call(null,inst_20104);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20144__$1,(15),out,inst_20132);
} else {
if((state_val_20145 === (2))){
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20144__$1,(4),ch);
} else {
if((state_val_20145 === (11))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20122 = (state_20144[(2)]);
var inst_20123 = [];
var inst_20124 = inst_20123.push(inst_20108);
var inst_20104 = inst_20123;
var inst_20105 = inst_20112;
var state_20144__$1 = (function (){var statearr_20156 = state_20144;
(statearr_20156[(11)] = inst_20122);

(statearr_20156[(7)] = inst_20104);

(statearr_20156[(12)] = inst_20124);

(statearr_20156[(8)] = inst_20105);

return statearr_20156;
})();
var statearr_20157_20187 = state_20144__$1;
(statearr_20157_20187[(2)] = null);

(statearr_20157_20187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (9))){
var inst_20104 = (state_20144[(7)]);
var inst_20120 = cljs.core.vec.call(null,inst_20104);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20144__$1,(11),out,inst_20120);
} else {
if((state_val_20145 === (5))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20105 = (state_20144[(8)]);
var inst_20112__$1 = f.call(null,inst_20108);
var inst_20113 = cljs.core._EQ_.call(null,inst_20112__$1,inst_20105);
var inst_20114 = cljs.core.keyword_identical_QMARK_.call(null,inst_20105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20115 = (inst_20113) || (inst_20114);
var state_20144__$1 = (function (){var statearr_20158 = state_20144;
(statearr_20158[(10)] = inst_20112__$1);

return statearr_20158;
})();
if(cljs.core.truth_(inst_20115)){
var statearr_20159_20188 = state_20144__$1;
(statearr_20159_20188[(1)] = (8));

} else {
var statearr_20160_20189 = state_20144__$1;
(statearr_20160_20189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (14))){
var inst_20137 = (state_20144[(2)]);
var inst_20138 = cljs.core.async.close_BANG_.call(null,out);
var state_20144__$1 = (function (){var statearr_20162 = state_20144;
(statearr_20162[(13)] = inst_20137);

return statearr_20162;
})();
var statearr_20163_20190 = state_20144__$1;
(statearr_20163_20190[(2)] = inst_20138);

(statearr_20163_20190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (10))){
var inst_20127 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20164_20191 = state_20144__$1;
(statearr_20164_20191[(2)] = inst_20127);

(statearr_20164_20191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (8))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20104 = (state_20144[(7)]);
var inst_20117 = inst_20104.push(inst_20108);
var tmp20161 = inst_20104;
var inst_20104__$1 = tmp20161;
var inst_20105 = inst_20112;
var state_20144__$1 = (function (){var statearr_20165 = state_20144;
(statearr_20165[(7)] = inst_20104__$1);

(statearr_20165[(8)] = inst_20105);

(statearr_20165[(14)] = inst_20117);

return statearr_20165;
})();
var statearr_20166_20192 = state_20144__$1;
(statearr_20166_20192[(2)] = null);

(statearr_20166_20192[(1)] = (2));


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
});})(c__17401__auto___20178,out))
;
return ((function (switch__17289__auto__,c__17401__auto___20178,out){
return (function() {
var cljs$core$async$state_machine__17290__auto__ = null;
var cljs$core$async$state_machine__17290__auto____0 = (function (){
var statearr_20170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20170[(0)] = cljs$core$async$state_machine__17290__auto__);

(statearr_20170[(1)] = (1));

return statearr_20170;
});
var cljs$core$async$state_machine__17290__auto____1 = (function (state_20144){
while(true){
var ret_value__17291__auto__ = (function (){try{while(true){
var result__17292__auto__ = switch__17289__auto__.call(null,state_20144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17292__auto__;
}
break;
}
}catch (e20171){if((e20171 instanceof Object)){
var ex__17293__auto__ = e20171;
var statearr_20172_20193 = state_20144;
(statearr_20172_20193[(5)] = ex__17293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20194 = state_20144;
state_20144 = G__20194;
continue;
} else {
return ret_value__17291__auto__;
}
break;
}
});
cljs$core$async$state_machine__17290__auto__ = function(state_20144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17290__auto____1.call(this,state_20144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17290__auto____0;
cljs$core$async$state_machine__17290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17290__auto____1;
return cljs$core$async$state_machine__17290__auto__;
})()
;})(switch__17289__auto__,c__17401__auto___20178,out))
})();
var state__17403__auto__ = (function (){var statearr_20173 = f__17402__auto__.call(null);
(statearr_20173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17401__auto___20178);

return statearr_20173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17403__auto__);
});})(c__17401__auto___20178,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484456815559
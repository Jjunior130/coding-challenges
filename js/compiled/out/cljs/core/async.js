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
var args17409 = [];
var len__7484__auto___17415 = arguments.length;
var i__7485__auto___17416 = (0);
while(true){
if((i__7485__auto___17416 < len__7484__auto___17415)){
args17409.push((arguments[i__7485__auto___17416]));

var G__17417 = (i__7485__auto___17416 + (1));
i__7485__auto___17416 = G__17417;
continue;
} else {
}
break;
}

var G__17411 = args17409.length;
switch (G__17411) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17409.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17412 = (function (f,blockable,meta17413){
this.f = f;
this.blockable = blockable;
this.meta17413 = meta17413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17414,meta17413__$1){
var self__ = this;
var _17414__$1 = this;
return (new cljs.core.async.t_cljs$core$async17412(self__.f,self__.blockable,meta17413__$1));
});

cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17414){
var self__ = this;
var _17414__$1 = this;
return self__.meta17413;
});

cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17413","meta17413",-1802502905,null)], null);
});

cljs.core.async.t_cljs$core$async17412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17412";

cljs.core.async.t_cljs$core$async17412.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17412");
});

cljs.core.async.__GT_t_cljs$core$async17412 = (function cljs$core$async$__GT_t_cljs$core$async17412(f__$1,blockable__$1,meta17413){
return (new cljs.core.async.t_cljs$core$async17412(f__$1,blockable__$1,meta17413));
});

}

return (new cljs.core.async.t_cljs$core$async17412(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args17421 = [];
var len__7484__auto___17424 = arguments.length;
var i__7485__auto___17425 = (0);
while(true){
if((i__7485__auto___17425 < len__7484__auto___17424)){
args17421.push((arguments[i__7485__auto___17425]));

var G__17426 = (i__7485__auto___17425 + (1));
i__7485__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var G__17423 = args17421.length;
switch (G__17423) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17421.length)].join('')));

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
var args17428 = [];
var len__7484__auto___17431 = arguments.length;
var i__7485__auto___17432 = (0);
while(true){
if((i__7485__auto___17432 < len__7484__auto___17431)){
args17428.push((arguments[i__7485__auto___17432]));

var G__17433 = (i__7485__auto___17432 + (1));
i__7485__auto___17432 = G__17433;
continue;
} else {
}
break;
}

var G__17430 = args17428.length;
switch (G__17430) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17428.length)].join('')));

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
var args17435 = [];
var len__7484__auto___17438 = arguments.length;
var i__7485__auto___17439 = (0);
while(true){
if((i__7485__auto___17439 < len__7484__auto___17438)){
args17435.push((arguments[i__7485__auto___17439]));

var G__17440 = (i__7485__auto___17439 + (1));
i__7485__auto___17439 = G__17440;
continue;
} else {
}
break;
}

var G__17437 = args17435.length;
switch (G__17437) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17435.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17442,ret){
return (function (){
return fn1.call(null,val_17442);
});})(val_17442,ret))
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
var args17443 = [];
var len__7484__auto___17446 = arguments.length;
var i__7485__auto___17447 = (0);
while(true){
if((i__7485__auto___17447 < len__7484__auto___17446)){
args17443.push((arguments[i__7485__auto___17447]));

var G__17448 = (i__7485__auto___17447 + (1));
i__7485__auto___17447 = G__17448;
continue;
} else {
}
break;
}

var G__17445 = args17443.length;
switch (G__17445) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17443.length)].join('')));

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
var n__7324__auto___17450 = n;
var x_17451 = (0);
while(true){
if((x_17451 < n__7324__auto___17450)){
(a[x_17451] = (0));

var G__17452 = (x_17451 + (1));
x_17451 = G__17452;
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

var G__17453 = (i + (1));
i = G__17453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17457 = (function (alt_flag,flag,meta17458){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17458 = meta17458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17459,meta17458__$1){
var self__ = this;
var _17459__$1 = this;
return (new cljs.core.async.t_cljs$core$async17457(self__.alt_flag,self__.flag,meta17458__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17459){
var self__ = this;
var _17459__$1 = this;
return self__.meta17458;
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17458","meta17458",1894265949,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17457";

cljs.core.async.t_cljs$core$async17457.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17457");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17457 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17457(alt_flag__$1,flag__$1,meta17458){
return (new cljs.core.async.t_cljs$core$async17457(alt_flag__$1,flag__$1,meta17458));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17457(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17463 = (function (alt_handler,flag,cb,meta17464){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17464 = meta17464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17465,meta17464__$1){
var self__ = this;
var _17465__$1 = this;
return (new cljs.core.async.t_cljs$core$async17463(self__.alt_handler,self__.flag,self__.cb,meta17464__$1));
});

cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17465){
var self__ = this;
var _17465__$1 = this;
return self__.meta17464;
});

cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17464","meta17464",-915797260,null)], null);
});

cljs.core.async.t_cljs$core$async17463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17463";

cljs.core.async.t_cljs$core$async17463.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async17463");
});

cljs.core.async.__GT_t_cljs$core$async17463 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17463(alt_handler__$1,flag__$1,cb__$1,meta17464){
return (new cljs.core.async.t_cljs$core$async17463(alt_handler__$1,flag__$1,cb__$1,meta17464));
});

}

return (new cljs.core.async.t_cljs$core$async17463(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17466_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17466_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17467_SHARP_,port], null));
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
var G__17468 = (i + (1));
i = G__17468;
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
var len__7484__auto___17474 = arguments.length;
var i__7485__auto___17475 = (0);
while(true){
if((i__7485__auto___17475 < len__7484__auto___17474)){
args__7491__auto__.push((arguments[i__7485__auto___17475]));

var G__17476 = (i__7485__auto___17475 + (1));
i__7485__auto___17475 = G__17476;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17471){
var map__17472 = p__17471;
var map__17472__$1 = ((((!((map__17472 == null)))?((((map__17472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17472):map__17472);
var opts = map__17472__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17469){
var G__17470 = cljs.core.first.call(null,seq17469);
var seq17469__$1 = cljs.core.next.call(null,seq17469);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17470,seq17469__$1);
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
var args17477 = [];
var len__7484__auto___17527 = arguments.length;
var i__7485__auto___17528 = (0);
while(true){
if((i__7485__auto___17528 < len__7484__auto___17527)){
args17477.push((arguments[i__7485__auto___17528]));

var G__17529 = (i__7485__auto___17528 + (1));
i__7485__auto___17528 = G__17529;
continue;
} else {
}
break;
}

var G__17479 = args17477.length;
switch (G__17479) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17477.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17364__auto___17531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___17531){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___17531){
return (function (state_17503){
var state_val_17504 = (state_17503[(1)]);
if((state_val_17504 === (7))){
var inst_17499 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17505_17532 = state_17503__$1;
(statearr_17505_17532[(2)] = inst_17499);

(statearr_17505_17532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (1))){
var state_17503__$1 = state_17503;
var statearr_17506_17533 = state_17503__$1;
(statearr_17506_17533[(2)] = null);

(statearr_17506_17533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (4))){
var inst_17482 = (state_17503[(7)]);
var inst_17482__$1 = (state_17503[(2)]);
var inst_17483 = (inst_17482__$1 == null);
var state_17503__$1 = (function (){var statearr_17507 = state_17503;
(statearr_17507[(7)] = inst_17482__$1);

return statearr_17507;
})();
if(cljs.core.truth_(inst_17483)){
var statearr_17508_17534 = state_17503__$1;
(statearr_17508_17534[(1)] = (5));

} else {
var statearr_17509_17535 = state_17503__$1;
(statearr_17509_17535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (13))){
var state_17503__$1 = state_17503;
var statearr_17510_17536 = state_17503__$1;
(statearr_17510_17536[(2)] = null);

(statearr_17510_17536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (6))){
var inst_17482 = (state_17503[(7)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17503__$1,(11),to,inst_17482);
} else {
if((state_val_17504 === (3))){
var inst_17501 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17503__$1,inst_17501);
} else {
if((state_val_17504 === (12))){
var state_17503__$1 = state_17503;
var statearr_17511_17537 = state_17503__$1;
(statearr_17511_17537[(2)] = null);

(statearr_17511_17537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (2))){
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17503__$1,(4),from);
} else {
if((state_val_17504 === (11))){
var inst_17492 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
if(cljs.core.truth_(inst_17492)){
var statearr_17512_17538 = state_17503__$1;
(statearr_17512_17538[(1)] = (12));

} else {
var statearr_17513_17539 = state_17503__$1;
(statearr_17513_17539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (9))){
var state_17503__$1 = state_17503;
var statearr_17514_17540 = state_17503__$1;
(statearr_17514_17540[(2)] = null);

(statearr_17514_17540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (5))){
var state_17503__$1 = state_17503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17515_17541 = state_17503__$1;
(statearr_17515_17541[(1)] = (8));

} else {
var statearr_17516_17542 = state_17503__$1;
(statearr_17516_17542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (14))){
var inst_17497 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17517_17543 = state_17503__$1;
(statearr_17517_17543[(2)] = inst_17497);

(statearr_17517_17543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (10))){
var inst_17489 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17518_17544 = state_17503__$1;
(statearr_17518_17544[(2)] = inst_17489);

(statearr_17518_17544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (8))){
var inst_17486 = cljs.core.async.close_BANG_.call(null,to);
var state_17503__$1 = state_17503;
var statearr_17519_17545 = state_17503__$1;
(statearr_17519_17545[(2)] = inst_17486);

(statearr_17519_17545[(1)] = (10));


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
});})(c__17364__auto___17531))
;
return ((function (switch__17252__auto__,c__17364__auto___17531){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_17523 = [null,null,null,null,null,null,null,null];
(statearr_17523[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_17523[(1)] = (1));

return statearr_17523;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_17503){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17524){if((e17524 instanceof Object)){
var ex__17256__auto__ = e17524;
var statearr_17525_17546 = state_17503;
(statearr_17525_17546[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17547 = state_17503;
state_17503 = G__17547;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_17503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_17503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___17531))
})();
var state__17366__auto__ = (function (){var statearr_17526 = f__17365__auto__.call(null);
(statearr_17526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___17531);

return statearr_17526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___17531))
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
return (function (p__17735){
var vec__17736 = p__17735;
var v = cljs.core.nth.call(null,vec__17736,(0),null);
var p = cljs.core.nth.call(null,vec__17736,(1),null);
var job = vec__17736;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17364__auto___17922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results){
return (function (state_17743){
var state_val_17744 = (state_17743[(1)]);
if((state_val_17744 === (1))){
var state_17743__$1 = state_17743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17743__$1,(2),res,v);
} else {
if((state_val_17744 === (2))){
var inst_17740 = (state_17743[(2)]);
var inst_17741 = cljs.core.async.close_BANG_.call(null,res);
var state_17743__$1 = (function (){var statearr_17745 = state_17743;
(statearr_17745[(7)] = inst_17740);

return statearr_17745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17743__$1,inst_17741);
} else {
return null;
}
}
});})(c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results))
;
return ((function (switch__17252__auto__,c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_17749 = [null,null,null,null,null,null,null,null];
(statearr_17749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__);

(statearr_17749[(1)] = (1));

return statearr_17749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1 = (function (state_17743){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17750){if((e17750 instanceof Object)){
var ex__17256__auto__ = e17750;
var statearr_17751_17923 = state_17743;
(statearr_17751_17923[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17924 = state_17743;
state_17743 = G__17924;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = function(state_17743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1.call(this,state_17743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results))
})();
var state__17366__auto__ = (function (){var statearr_17752 = f__17365__auto__.call(null);
(statearr_17752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___17922);

return statearr_17752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___17922,res,vec__17736,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17753){
var vec__17754 = p__17753;
var v = cljs.core.nth.call(null,vec__17754,(0),null);
var p = cljs.core.nth.call(null,vec__17754,(1),null);
var job = vec__17754;
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
var n__7324__auto___17925 = n;
var __17926 = (0);
while(true){
if((__17926 < n__7324__auto___17925)){
var G__17757_17927 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17757_17927) {
case "compute":
var c__17364__auto___17929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17926,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (__17926,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function (state_17770){
var state_val_17771 = (state_17770[(1)]);
if((state_val_17771 === (1))){
var state_17770__$1 = state_17770;
var statearr_17772_17930 = state_17770__$1;
(statearr_17772_17930[(2)] = null);

(statearr_17772_17930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (2))){
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17770__$1,(4),jobs);
} else {
if((state_val_17771 === (3))){
var inst_17768 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17770__$1,inst_17768);
} else {
if((state_val_17771 === (4))){
var inst_17760 = (state_17770[(2)]);
var inst_17761 = process.call(null,inst_17760);
var state_17770__$1 = state_17770;
if(cljs.core.truth_(inst_17761)){
var statearr_17773_17931 = state_17770__$1;
(statearr_17773_17931[(1)] = (5));

} else {
var statearr_17774_17932 = state_17770__$1;
(statearr_17774_17932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (5))){
var state_17770__$1 = state_17770;
var statearr_17775_17933 = state_17770__$1;
(statearr_17775_17933[(2)] = null);

(statearr_17775_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (6))){
var state_17770__$1 = state_17770;
var statearr_17776_17934 = state_17770__$1;
(statearr_17776_17934[(2)] = null);

(statearr_17776_17934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (7))){
var inst_17766 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17777_17935 = state_17770__$1;
(statearr_17777_17935[(2)] = inst_17766);

(statearr_17777_17935[(1)] = (3));


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
});})(__17926,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
;
return ((function (__17926,switch__17252__auto__,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_17781 = [null,null,null,null,null,null,null];
(statearr_17781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__);

(statearr_17781[(1)] = (1));

return statearr_17781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1 = (function (state_17770){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17782){if((e17782 instanceof Object)){
var ex__17256__auto__ = e17782;
var statearr_17783_17936 = state_17770;
(statearr_17783_17936[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17937 = state_17770;
state_17770 = G__17937;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = function(state_17770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1.call(this,state_17770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__;
})()
;})(__17926,switch__17252__auto__,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
})();
var state__17366__auto__ = (function (){var statearr_17784 = f__17365__auto__.call(null);
(statearr_17784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___17929);

return statearr_17784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(__17926,c__17364__auto___17929,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
);


break;
case "async":
var c__17364__auto___17938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17926,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (__17926,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (1))){
var state_17797__$1 = state_17797;
var statearr_17799_17939 = state_17797__$1;
(statearr_17799_17939[(2)] = null);

(statearr_17799_17939[(1)] = (2));


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
var inst_17788 = async.call(null,inst_17787);
var state_17797__$1 = state_17797;
if(cljs.core.truth_(inst_17788)){
var statearr_17800_17940 = state_17797__$1;
(statearr_17800_17940[(1)] = (5));

} else {
var statearr_17801_17941 = state_17797__$1;
(statearr_17801_17941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (5))){
var state_17797__$1 = state_17797;
var statearr_17802_17942 = state_17797__$1;
(statearr_17802_17942[(2)] = null);

(statearr_17802_17942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (6))){
var state_17797__$1 = state_17797;
var statearr_17803_17943 = state_17797__$1;
(statearr_17803_17943[(2)] = null);

(statearr_17803_17943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (7))){
var inst_17793 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17804_17944 = state_17797__$1;
(statearr_17804_17944[(2)] = inst_17793);

(statearr_17804_17944[(1)] = (3));


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
});})(__17926,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
;
return ((function (__17926,switch__17252__auto__,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_17808 = [null,null,null,null,null,null,null];
(statearr_17808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__);

(statearr_17808[(1)] = (1));

return statearr_17808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1 = (function (state_17797){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17809){if((e17809 instanceof Object)){
var ex__17256__auto__ = e17809;
var statearr_17810_17945 = state_17797;
(statearr_17810_17945[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17946 = state_17797;
state_17797 = G__17946;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__;
})()
;})(__17926,switch__17252__auto__,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
})();
var state__17366__auto__ = (function (){var statearr_17811 = f__17365__auto__.call(null);
(statearr_17811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___17938);

return statearr_17811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(__17926,c__17364__auto___17938,G__17757_17927,n__7324__auto___17925,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17947 = (__17926 + (1));
__17926 = G__17947;
continue;
} else {
}
break;
}

var c__17364__auto___17948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___17948,jobs,results,process,async){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___17948,jobs,results,process,async){
return (function (state_17833){
var state_val_17834 = (state_17833[(1)]);
if((state_val_17834 === (1))){
var state_17833__$1 = state_17833;
var statearr_17835_17949 = state_17833__$1;
(statearr_17835_17949[(2)] = null);

(statearr_17835_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (2))){
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17833__$1,(4),from);
} else {
if((state_val_17834 === (3))){
var inst_17831 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17833__$1,inst_17831);
} else {
if((state_val_17834 === (4))){
var inst_17814 = (state_17833[(7)]);
var inst_17814__$1 = (state_17833[(2)]);
var inst_17815 = (inst_17814__$1 == null);
var state_17833__$1 = (function (){var statearr_17836 = state_17833;
(statearr_17836[(7)] = inst_17814__$1);

return statearr_17836;
})();
if(cljs.core.truth_(inst_17815)){
var statearr_17837_17950 = state_17833__$1;
(statearr_17837_17950[(1)] = (5));

} else {
var statearr_17838_17951 = state_17833__$1;
(statearr_17838_17951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (5))){
var inst_17817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17833__$1 = state_17833;
var statearr_17839_17952 = state_17833__$1;
(statearr_17839_17952[(2)] = inst_17817);

(statearr_17839_17952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (6))){
var inst_17819 = (state_17833[(8)]);
var inst_17814 = (state_17833[(7)]);
var inst_17819__$1 = cljs.core.async.chan.call(null,(1));
var inst_17820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17821 = [inst_17814,inst_17819__$1];
var inst_17822 = (new cljs.core.PersistentVector(null,2,(5),inst_17820,inst_17821,null));
var state_17833__$1 = (function (){var statearr_17840 = state_17833;
(statearr_17840[(8)] = inst_17819__$1);

return statearr_17840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17833__$1,(8),jobs,inst_17822);
} else {
if((state_val_17834 === (7))){
var inst_17829 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17841_17953 = state_17833__$1;
(statearr_17841_17953[(2)] = inst_17829);

(statearr_17841_17953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (8))){
var inst_17819 = (state_17833[(8)]);
var inst_17824 = (state_17833[(2)]);
var state_17833__$1 = (function (){var statearr_17842 = state_17833;
(statearr_17842[(9)] = inst_17824);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17833__$1,(9),results,inst_17819);
} else {
if((state_val_17834 === (9))){
var inst_17826 = (state_17833[(2)]);
var state_17833__$1 = (function (){var statearr_17843 = state_17833;
(statearr_17843[(10)] = inst_17826);

return statearr_17843;
})();
var statearr_17844_17954 = state_17833__$1;
(statearr_17844_17954[(2)] = null);

(statearr_17844_17954[(1)] = (2));


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
});})(c__17364__auto___17948,jobs,results,process,async))
;
return ((function (switch__17252__auto__,c__17364__auto___17948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_17848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__);

(statearr_17848[(1)] = (1));

return statearr_17848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1 = (function (state_17833){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17849){if((e17849 instanceof Object)){
var ex__17256__auto__ = e17849;
var statearr_17850_17955 = state_17833;
(statearr_17850_17955[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17956 = state_17833;
state_17833 = G__17956;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = function(state_17833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1.call(this,state_17833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___17948,jobs,results,process,async))
})();
var state__17366__auto__ = (function (){var statearr_17851 = f__17365__auto__.call(null);
(statearr_17851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___17948);

return statearr_17851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___17948,jobs,results,process,async))
);


var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__,jobs,results,process,async){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__,jobs,results,process,async){
return (function (state_17889){
var state_val_17890 = (state_17889[(1)]);
if((state_val_17890 === (7))){
var inst_17885 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17891_17957 = state_17889__$1;
(statearr_17891_17957[(2)] = inst_17885);

(statearr_17891_17957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (20))){
var state_17889__$1 = state_17889;
var statearr_17892_17958 = state_17889__$1;
(statearr_17892_17958[(2)] = null);

(statearr_17892_17958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (1))){
var state_17889__$1 = state_17889;
var statearr_17893_17959 = state_17889__$1;
(statearr_17893_17959[(2)] = null);

(statearr_17893_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (4))){
var inst_17854 = (state_17889[(7)]);
var inst_17854__$1 = (state_17889[(2)]);
var inst_17855 = (inst_17854__$1 == null);
var state_17889__$1 = (function (){var statearr_17894 = state_17889;
(statearr_17894[(7)] = inst_17854__$1);

return statearr_17894;
})();
if(cljs.core.truth_(inst_17855)){
var statearr_17895_17960 = state_17889__$1;
(statearr_17895_17960[(1)] = (5));

} else {
var statearr_17896_17961 = state_17889__$1;
(statearr_17896_17961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (15))){
var inst_17867 = (state_17889[(8)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17889__$1,(18),to,inst_17867);
} else {
if((state_val_17890 === (21))){
var inst_17880 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17897_17962 = state_17889__$1;
(statearr_17897_17962[(2)] = inst_17880);

(statearr_17897_17962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (13))){
var inst_17882 = (state_17889[(2)]);
var state_17889__$1 = (function (){var statearr_17898 = state_17889;
(statearr_17898[(9)] = inst_17882);

return statearr_17898;
})();
var statearr_17899_17963 = state_17889__$1;
(statearr_17899_17963[(2)] = null);

(statearr_17899_17963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (6))){
var inst_17854 = (state_17889[(7)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17889__$1,(11),inst_17854);
} else {
if((state_val_17890 === (17))){
var inst_17875 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
if(cljs.core.truth_(inst_17875)){
var statearr_17900_17964 = state_17889__$1;
(statearr_17900_17964[(1)] = (19));

} else {
var statearr_17901_17965 = state_17889__$1;
(statearr_17901_17965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (3))){
var inst_17887 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17889__$1,inst_17887);
} else {
if((state_val_17890 === (12))){
var inst_17864 = (state_17889[(10)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17889__$1,(14),inst_17864);
} else {
if((state_val_17890 === (2))){
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17889__$1,(4),results);
} else {
if((state_val_17890 === (19))){
var state_17889__$1 = state_17889;
var statearr_17902_17966 = state_17889__$1;
(statearr_17902_17966[(2)] = null);

(statearr_17902_17966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (11))){
var inst_17864 = (state_17889[(2)]);
var state_17889__$1 = (function (){var statearr_17903 = state_17889;
(statearr_17903[(10)] = inst_17864);

return statearr_17903;
})();
var statearr_17904_17967 = state_17889__$1;
(statearr_17904_17967[(2)] = null);

(statearr_17904_17967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (9))){
var state_17889__$1 = state_17889;
var statearr_17905_17968 = state_17889__$1;
(statearr_17905_17968[(2)] = null);

(statearr_17905_17968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (5))){
var state_17889__$1 = state_17889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17906_17969 = state_17889__$1;
(statearr_17906_17969[(1)] = (8));

} else {
var statearr_17907_17970 = state_17889__$1;
(statearr_17907_17970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (14))){
var inst_17869 = (state_17889[(11)]);
var inst_17867 = (state_17889[(8)]);
var inst_17867__$1 = (state_17889[(2)]);
var inst_17868 = (inst_17867__$1 == null);
var inst_17869__$1 = cljs.core.not.call(null,inst_17868);
var state_17889__$1 = (function (){var statearr_17908 = state_17889;
(statearr_17908[(11)] = inst_17869__$1);

(statearr_17908[(8)] = inst_17867__$1);

return statearr_17908;
})();
if(inst_17869__$1){
var statearr_17909_17971 = state_17889__$1;
(statearr_17909_17971[(1)] = (15));

} else {
var statearr_17910_17972 = state_17889__$1;
(statearr_17910_17972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (16))){
var inst_17869 = (state_17889[(11)]);
var state_17889__$1 = state_17889;
var statearr_17911_17973 = state_17889__$1;
(statearr_17911_17973[(2)] = inst_17869);

(statearr_17911_17973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (10))){
var inst_17861 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17912_17974 = state_17889__$1;
(statearr_17912_17974[(2)] = inst_17861);

(statearr_17912_17974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (18))){
var inst_17872 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17913_17975 = state_17889__$1;
(statearr_17913_17975[(2)] = inst_17872);

(statearr_17913_17975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (8))){
var inst_17858 = cljs.core.async.close_BANG_.call(null,to);
var state_17889__$1 = state_17889;
var statearr_17914_17976 = state_17889__$1;
(statearr_17914_17976[(2)] = inst_17858);

(statearr_17914_17976[(1)] = (10));


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
});})(c__17364__auto__,jobs,results,process,async))
;
return ((function (switch__17252__auto__,c__17364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_17918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__);

(statearr_17918[(1)] = (1));

return statearr_17918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1 = (function (state_17889){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_17889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e17919){if((e17919 instanceof Object)){
var ex__17256__auto__ = e17919;
var statearr_17920_17977 = state_17889;
(statearr_17920_17977[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_17889;
state_17889 = G__17978;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__ = function(state_17889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1.call(this,state_17889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__,jobs,results,process,async))
})();
var state__17366__auto__ = (function (){var statearr_17921 = f__17365__auto__.call(null);
(statearr_17921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_17921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__,jobs,results,process,async))
);

return c__17364__auto__;
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
var args17979 = [];
var len__7484__auto___17982 = arguments.length;
var i__7485__auto___17983 = (0);
while(true){
if((i__7485__auto___17983 < len__7484__auto___17982)){
args17979.push((arguments[i__7485__auto___17983]));

var G__17984 = (i__7485__auto___17983 + (1));
i__7485__auto___17983 = G__17984;
continue;
} else {
}
break;
}

var G__17981 = args17979.length;
switch (G__17981) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17979.length)].join('')));

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
var args17986 = [];
var len__7484__auto___17989 = arguments.length;
var i__7485__auto___17990 = (0);
while(true){
if((i__7485__auto___17990 < len__7484__auto___17989)){
args17986.push((arguments[i__7485__auto___17990]));

var G__17991 = (i__7485__auto___17990 + (1));
i__7485__auto___17990 = G__17991;
continue;
} else {
}
break;
}

var G__17988 = args17986.length;
switch (G__17988) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17986.length)].join('')));

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
var args17993 = [];
var len__7484__auto___18046 = arguments.length;
var i__7485__auto___18047 = (0);
while(true){
if((i__7485__auto___18047 < len__7484__auto___18046)){
args17993.push((arguments[i__7485__auto___18047]));

var G__18048 = (i__7485__auto___18047 + (1));
i__7485__auto___18047 = G__18048;
continue;
} else {
}
break;
}

var G__17995 = args17993.length;
switch (G__17995) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17993.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17364__auto___18050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___18050,tc,fc){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___18050,tc,fc){
return (function (state_18021){
var state_val_18022 = (state_18021[(1)]);
if((state_val_18022 === (7))){
var inst_18017 = (state_18021[(2)]);
var state_18021__$1 = state_18021;
var statearr_18023_18051 = state_18021__$1;
(statearr_18023_18051[(2)] = inst_18017);

(statearr_18023_18051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (1))){
var state_18021__$1 = state_18021;
var statearr_18024_18052 = state_18021__$1;
(statearr_18024_18052[(2)] = null);

(statearr_18024_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (4))){
var inst_17998 = (state_18021[(7)]);
var inst_17998__$1 = (state_18021[(2)]);
var inst_17999 = (inst_17998__$1 == null);
var state_18021__$1 = (function (){var statearr_18025 = state_18021;
(statearr_18025[(7)] = inst_17998__$1);

return statearr_18025;
})();
if(cljs.core.truth_(inst_17999)){
var statearr_18026_18053 = state_18021__$1;
(statearr_18026_18053[(1)] = (5));

} else {
var statearr_18027_18054 = state_18021__$1;
(statearr_18027_18054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (13))){
var state_18021__$1 = state_18021;
var statearr_18028_18055 = state_18021__$1;
(statearr_18028_18055[(2)] = null);

(statearr_18028_18055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (6))){
var inst_17998 = (state_18021[(7)]);
var inst_18004 = p.call(null,inst_17998);
var state_18021__$1 = state_18021;
if(cljs.core.truth_(inst_18004)){
var statearr_18029_18056 = state_18021__$1;
(statearr_18029_18056[(1)] = (9));

} else {
var statearr_18030_18057 = state_18021__$1;
(statearr_18030_18057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (3))){
var inst_18019 = (state_18021[(2)]);
var state_18021__$1 = state_18021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18021__$1,inst_18019);
} else {
if((state_val_18022 === (12))){
var state_18021__$1 = state_18021;
var statearr_18031_18058 = state_18021__$1;
(statearr_18031_18058[(2)] = null);

(statearr_18031_18058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (2))){
var state_18021__$1 = state_18021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18021__$1,(4),ch);
} else {
if((state_val_18022 === (11))){
var inst_17998 = (state_18021[(7)]);
var inst_18008 = (state_18021[(2)]);
var state_18021__$1 = state_18021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18021__$1,(8),inst_18008,inst_17998);
} else {
if((state_val_18022 === (9))){
var state_18021__$1 = state_18021;
var statearr_18032_18059 = state_18021__$1;
(statearr_18032_18059[(2)] = tc);

(statearr_18032_18059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (5))){
var inst_18001 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18002 = cljs.core.async.close_BANG_.call(null,fc);
var state_18021__$1 = (function (){var statearr_18033 = state_18021;
(statearr_18033[(8)] = inst_18001);

return statearr_18033;
})();
var statearr_18034_18060 = state_18021__$1;
(statearr_18034_18060[(2)] = inst_18002);

(statearr_18034_18060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (14))){
var inst_18015 = (state_18021[(2)]);
var state_18021__$1 = state_18021;
var statearr_18035_18061 = state_18021__$1;
(statearr_18035_18061[(2)] = inst_18015);

(statearr_18035_18061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (10))){
var state_18021__$1 = state_18021;
var statearr_18036_18062 = state_18021__$1;
(statearr_18036_18062[(2)] = fc);

(statearr_18036_18062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18022 === (8))){
var inst_18010 = (state_18021[(2)]);
var state_18021__$1 = state_18021;
if(cljs.core.truth_(inst_18010)){
var statearr_18037_18063 = state_18021__$1;
(statearr_18037_18063[(1)] = (12));

} else {
var statearr_18038_18064 = state_18021__$1;
(statearr_18038_18064[(1)] = (13));

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
});})(c__17364__auto___18050,tc,fc))
;
return ((function (switch__17252__auto__,c__17364__auto___18050,tc,fc){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_18042 = [null,null,null,null,null,null,null,null,null];
(statearr_18042[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_18042[(1)] = (1));

return statearr_18042;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_18021){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_18021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e18043){if((e18043 instanceof Object)){
var ex__17256__auto__ = e18043;
var statearr_18044_18065 = state_18021;
(statearr_18044_18065[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18066 = state_18021;
state_18021 = G__18066;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_18021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_18021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___18050,tc,fc))
})();
var state__17366__auto__ = (function (){var statearr_18045 = f__17365__auto__.call(null);
(statearr_18045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___18050);

return statearr_18045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___18050,tc,fc))
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
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__){
return (function (state_18130){
var state_val_18131 = (state_18130[(1)]);
if((state_val_18131 === (7))){
var inst_18126 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
var statearr_18132_18153 = state_18130__$1;
(statearr_18132_18153[(2)] = inst_18126);

(statearr_18132_18153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (1))){
var inst_18110 = init;
var state_18130__$1 = (function (){var statearr_18133 = state_18130;
(statearr_18133[(7)] = inst_18110);

return statearr_18133;
})();
var statearr_18134_18154 = state_18130__$1;
(statearr_18134_18154[(2)] = null);

(statearr_18134_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (4))){
var inst_18113 = (state_18130[(8)]);
var inst_18113__$1 = (state_18130[(2)]);
var inst_18114 = (inst_18113__$1 == null);
var state_18130__$1 = (function (){var statearr_18135 = state_18130;
(statearr_18135[(8)] = inst_18113__$1);

return statearr_18135;
})();
if(cljs.core.truth_(inst_18114)){
var statearr_18136_18155 = state_18130__$1;
(statearr_18136_18155[(1)] = (5));

} else {
var statearr_18137_18156 = state_18130__$1;
(statearr_18137_18156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (6))){
var inst_18110 = (state_18130[(7)]);
var inst_18117 = (state_18130[(9)]);
var inst_18113 = (state_18130[(8)]);
var inst_18117__$1 = f.call(null,inst_18110,inst_18113);
var inst_18118 = cljs.core.reduced_QMARK_.call(null,inst_18117__$1);
var state_18130__$1 = (function (){var statearr_18138 = state_18130;
(statearr_18138[(9)] = inst_18117__$1);

return statearr_18138;
})();
if(inst_18118){
var statearr_18139_18157 = state_18130__$1;
(statearr_18139_18157[(1)] = (8));

} else {
var statearr_18140_18158 = state_18130__$1;
(statearr_18140_18158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (3))){
var inst_18128 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18130__$1,inst_18128);
} else {
if((state_val_18131 === (2))){
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18130__$1,(4),ch);
} else {
if((state_val_18131 === (9))){
var inst_18117 = (state_18130[(9)]);
var inst_18110 = inst_18117;
var state_18130__$1 = (function (){var statearr_18141 = state_18130;
(statearr_18141[(7)] = inst_18110);

return statearr_18141;
})();
var statearr_18142_18159 = state_18130__$1;
(statearr_18142_18159[(2)] = null);

(statearr_18142_18159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (5))){
var inst_18110 = (state_18130[(7)]);
var state_18130__$1 = state_18130;
var statearr_18143_18160 = state_18130__$1;
(statearr_18143_18160[(2)] = inst_18110);

(statearr_18143_18160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (10))){
var inst_18124 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
var statearr_18144_18161 = state_18130__$1;
(statearr_18144_18161[(2)] = inst_18124);

(statearr_18144_18161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18131 === (8))){
var inst_18117 = (state_18130[(9)]);
var inst_18120 = cljs.core.deref.call(null,inst_18117);
var state_18130__$1 = state_18130;
var statearr_18145_18162 = state_18130__$1;
(statearr_18145_18162[(2)] = inst_18120);

(statearr_18145_18162[(1)] = (10));


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
});})(c__17364__auto__))
;
return ((function (switch__17252__auto__,c__17364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17253__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = cljs$core$async$reduce_$_state_machine__17253__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var cljs$core$async$reduce_$_state_machine__17253__auto____1 = (function (state_18130){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_18130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__17256__auto__ = e18150;
var statearr_18151_18163 = state_18130;
(statearr_18151_18163[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18164 = state_18130;
state_18130 = G__18164;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17253__auto__ = function(state_18130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17253__auto____1.call(this,state_18130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17253__auto____0;
cljs$core$async$reduce_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17253__auto____1;
return cljs$core$async$reduce_$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__))
})();
var state__17366__auto__ = (function (){var statearr_18152 = f__17365__auto__.call(null);
(statearr_18152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__))
);

return c__17364__auto__;
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
var args18165 = [];
var len__7484__auto___18217 = arguments.length;
var i__7485__auto___18218 = (0);
while(true){
if((i__7485__auto___18218 < len__7484__auto___18217)){
args18165.push((arguments[i__7485__auto___18218]));

var G__18219 = (i__7485__auto___18218 + (1));
i__7485__auto___18218 = G__18219;
continue;
} else {
}
break;
}

var G__18167 = args18165.length;
switch (G__18167) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18165.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__){
return (function (state_18192){
var state_val_18193 = (state_18192[(1)]);
if((state_val_18193 === (7))){
var inst_18174 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
var statearr_18194_18221 = state_18192__$1;
(statearr_18194_18221[(2)] = inst_18174);

(statearr_18194_18221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (1))){
var inst_18168 = cljs.core.seq.call(null,coll);
var inst_18169 = inst_18168;
var state_18192__$1 = (function (){var statearr_18195 = state_18192;
(statearr_18195[(7)] = inst_18169);

return statearr_18195;
})();
var statearr_18196_18222 = state_18192__$1;
(statearr_18196_18222[(2)] = null);

(statearr_18196_18222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (4))){
var inst_18169 = (state_18192[(7)]);
var inst_18172 = cljs.core.first.call(null,inst_18169);
var state_18192__$1 = state_18192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18192__$1,(7),ch,inst_18172);
} else {
if((state_val_18193 === (13))){
var inst_18186 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
var statearr_18197_18223 = state_18192__$1;
(statearr_18197_18223[(2)] = inst_18186);

(statearr_18197_18223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (6))){
var inst_18177 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
if(cljs.core.truth_(inst_18177)){
var statearr_18198_18224 = state_18192__$1;
(statearr_18198_18224[(1)] = (8));

} else {
var statearr_18199_18225 = state_18192__$1;
(statearr_18199_18225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (3))){
var inst_18190 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18192__$1,inst_18190);
} else {
if((state_val_18193 === (12))){
var state_18192__$1 = state_18192;
var statearr_18200_18226 = state_18192__$1;
(statearr_18200_18226[(2)] = null);

(statearr_18200_18226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (2))){
var inst_18169 = (state_18192[(7)]);
var state_18192__$1 = state_18192;
if(cljs.core.truth_(inst_18169)){
var statearr_18201_18227 = state_18192__$1;
(statearr_18201_18227[(1)] = (4));

} else {
var statearr_18202_18228 = state_18192__$1;
(statearr_18202_18228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (11))){
var inst_18183 = cljs.core.async.close_BANG_.call(null,ch);
var state_18192__$1 = state_18192;
var statearr_18203_18229 = state_18192__$1;
(statearr_18203_18229[(2)] = inst_18183);

(statearr_18203_18229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (9))){
var state_18192__$1 = state_18192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18204_18230 = state_18192__$1;
(statearr_18204_18230[(1)] = (11));

} else {
var statearr_18205_18231 = state_18192__$1;
(statearr_18205_18231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (5))){
var inst_18169 = (state_18192[(7)]);
var state_18192__$1 = state_18192;
var statearr_18206_18232 = state_18192__$1;
(statearr_18206_18232[(2)] = inst_18169);

(statearr_18206_18232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (10))){
var inst_18188 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
var statearr_18207_18233 = state_18192__$1;
(statearr_18207_18233[(2)] = inst_18188);

(statearr_18207_18233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18193 === (8))){
var inst_18169 = (state_18192[(7)]);
var inst_18179 = cljs.core.next.call(null,inst_18169);
var inst_18169__$1 = inst_18179;
var state_18192__$1 = (function (){var statearr_18208 = state_18192;
(statearr_18208[(7)] = inst_18169__$1);

return statearr_18208;
})();
var statearr_18209_18234 = state_18192__$1;
(statearr_18209_18234[(2)] = null);

(statearr_18209_18234[(1)] = (2));


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
});})(c__17364__auto__))
;
return ((function (switch__17252__auto__,c__17364__auto__){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_18213 = [null,null,null,null,null,null,null,null];
(statearr_18213[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_18213[(1)] = (1));

return statearr_18213;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_18192){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_18192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e18214){if((e18214 instanceof Object)){
var ex__17256__auto__ = e18214;
var statearr_18215_18235 = state_18192;
(statearr_18215_18235[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18236 = state_18192;
state_18192 = G__18236;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_18192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_18192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__))
})();
var state__17366__auto__ = (function (){var statearr_18216 = f__17365__auto__.call(null);
(statearr_18216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_18216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__))
);

return c__17364__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18462 = (function (mult,ch,cs,meta18463){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18463 = meta18463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18464,meta18463__$1){
var self__ = this;
var _18464__$1 = this;
return (new cljs.core.async.t_cljs$core$async18462(self__.mult,self__.ch,self__.cs,meta18463__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18464){
var self__ = this;
var _18464__$1 = this;
return self__.meta18463;
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18463","meta18463",383670304,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18462";

cljs.core.async.t_cljs$core$async18462.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18462");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18462 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18462(mult__$1,ch__$1,cs__$1,meta18463){
return (new cljs.core.async.t_cljs$core$async18462(mult__$1,ch__$1,cs__$1,meta18463));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18462(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17364__auto___18687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___18687,cs,m,dchan,dctr,done){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___18687,cs,m,dchan,dctr,done){
return (function (state_18599){
var state_val_18600 = (state_18599[(1)]);
if((state_val_18600 === (7))){
var inst_18595 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18601_18688 = state_18599__$1;
(statearr_18601_18688[(2)] = inst_18595);

(statearr_18601_18688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (20))){
var inst_18498 = (state_18599[(7)]);
var inst_18510 = cljs.core.first.call(null,inst_18498);
var inst_18511 = cljs.core.nth.call(null,inst_18510,(0),null);
var inst_18512 = cljs.core.nth.call(null,inst_18510,(1),null);
var state_18599__$1 = (function (){var statearr_18602 = state_18599;
(statearr_18602[(8)] = inst_18511);

return statearr_18602;
})();
if(cljs.core.truth_(inst_18512)){
var statearr_18603_18689 = state_18599__$1;
(statearr_18603_18689[(1)] = (22));

} else {
var statearr_18604_18690 = state_18599__$1;
(statearr_18604_18690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (27))){
var inst_18547 = (state_18599[(9)]);
var inst_18540 = (state_18599[(10)]);
var inst_18467 = (state_18599[(11)]);
var inst_18542 = (state_18599[(12)]);
var inst_18547__$1 = cljs.core._nth.call(null,inst_18540,inst_18542);
var inst_18548 = cljs.core.async.put_BANG_.call(null,inst_18547__$1,inst_18467,done);
var state_18599__$1 = (function (){var statearr_18605 = state_18599;
(statearr_18605[(9)] = inst_18547__$1);

return statearr_18605;
})();
if(cljs.core.truth_(inst_18548)){
var statearr_18606_18691 = state_18599__$1;
(statearr_18606_18691[(1)] = (30));

} else {
var statearr_18607_18692 = state_18599__$1;
(statearr_18607_18692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (1))){
var state_18599__$1 = state_18599;
var statearr_18608_18693 = state_18599__$1;
(statearr_18608_18693[(2)] = null);

(statearr_18608_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (24))){
var inst_18498 = (state_18599[(7)]);
var inst_18517 = (state_18599[(2)]);
var inst_18518 = cljs.core.next.call(null,inst_18498);
var inst_18476 = inst_18518;
var inst_18477 = null;
var inst_18478 = (0);
var inst_18479 = (0);
var state_18599__$1 = (function (){var statearr_18609 = state_18599;
(statearr_18609[(13)] = inst_18477);

(statearr_18609[(14)] = inst_18476);

(statearr_18609[(15)] = inst_18478);

(statearr_18609[(16)] = inst_18479);

(statearr_18609[(17)] = inst_18517);

return statearr_18609;
})();
var statearr_18610_18694 = state_18599__$1;
(statearr_18610_18694[(2)] = null);

(statearr_18610_18694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (39))){
var state_18599__$1 = state_18599;
var statearr_18614_18695 = state_18599__$1;
(statearr_18614_18695[(2)] = null);

(statearr_18614_18695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (4))){
var inst_18467 = (state_18599[(11)]);
var inst_18467__$1 = (state_18599[(2)]);
var inst_18468 = (inst_18467__$1 == null);
var state_18599__$1 = (function (){var statearr_18615 = state_18599;
(statearr_18615[(11)] = inst_18467__$1);

return statearr_18615;
})();
if(cljs.core.truth_(inst_18468)){
var statearr_18616_18696 = state_18599__$1;
(statearr_18616_18696[(1)] = (5));

} else {
var statearr_18617_18697 = state_18599__$1;
(statearr_18617_18697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (15))){
var inst_18477 = (state_18599[(13)]);
var inst_18476 = (state_18599[(14)]);
var inst_18478 = (state_18599[(15)]);
var inst_18479 = (state_18599[(16)]);
var inst_18494 = (state_18599[(2)]);
var inst_18495 = (inst_18479 + (1));
var tmp18611 = inst_18477;
var tmp18612 = inst_18476;
var tmp18613 = inst_18478;
var inst_18476__$1 = tmp18612;
var inst_18477__$1 = tmp18611;
var inst_18478__$1 = tmp18613;
var inst_18479__$1 = inst_18495;
var state_18599__$1 = (function (){var statearr_18618 = state_18599;
(statearr_18618[(18)] = inst_18494);

(statearr_18618[(13)] = inst_18477__$1);

(statearr_18618[(14)] = inst_18476__$1);

(statearr_18618[(15)] = inst_18478__$1);

(statearr_18618[(16)] = inst_18479__$1);

return statearr_18618;
})();
var statearr_18619_18698 = state_18599__$1;
(statearr_18619_18698[(2)] = null);

(statearr_18619_18698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (21))){
var inst_18521 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18623_18699 = state_18599__$1;
(statearr_18623_18699[(2)] = inst_18521);

(statearr_18623_18699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (31))){
var inst_18547 = (state_18599[(9)]);
var inst_18551 = done.call(null,null);
var inst_18552 = cljs.core.async.untap_STAR_.call(null,m,inst_18547);
var state_18599__$1 = (function (){var statearr_18624 = state_18599;
(statearr_18624[(19)] = inst_18551);

return statearr_18624;
})();
var statearr_18625_18700 = state_18599__$1;
(statearr_18625_18700[(2)] = inst_18552);

(statearr_18625_18700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (32))){
var inst_18540 = (state_18599[(10)]);
var inst_18539 = (state_18599[(20)]);
var inst_18541 = (state_18599[(21)]);
var inst_18542 = (state_18599[(12)]);
var inst_18554 = (state_18599[(2)]);
var inst_18555 = (inst_18542 + (1));
var tmp18620 = inst_18540;
var tmp18621 = inst_18539;
var tmp18622 = inst_18541;
var inst_18539__$1 = tmp18621;
var inst_18540__$1 = tmp18620;
var inst_18541__$1 = tmp18622;
var inst_18542__$1 = inst_18555;
var state_18599__$1 = (function (){var statearr_18626 = state_18599;
(statearr_18626[(10)] = inst_18540__$1);

(statearr_18626[(20)] = inst_18539__$1);

(statearr_18626[(22)] = inst_18554);

(statearr_18626[(21)] = inst_18541__$1);

(statearr_18626[(12)] = inst_18542__$1);

return statearr_18626;
})();
var statearr_18627_18701 = state_18599__$1;
(statearr_18627_18701[(2)] = null);

(statearr_18627_18701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (40))){
var inst_18567 = (state_18599[(23)]);
var inst_18571 = done.call(null,null);
var inst_18572 = cljs.core.async.untap_STAR_.call(null,m,inst_18567);
var state_18599__$1 = (function (){var statearr_18628 = state_18599;
(statearr_18628[(24)] = inst_18571);

return statearr_18628;
})();
var statearr_18629_18702 = state_18599__$1;
(statearr_18629_18702[(2)] = inst_18572);

(statearr_18629_18702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (33))){
var inst_18558 = (state_18599[(25)]);
var inst_18560 = cljs.core.chunked_seq_QMARK_.call(null,inst_18558);
var state_18599__$1 = state_18599;
if(inst_18560){
var statearr_18630_18703 = state_18599__$1;
(statearr_18630_18703[(1)] = (36));

} else {
var statearr_18631_18704 = state_18599__$1;
(statearr_18631_18704[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (13))){
var inst_18488 = (state_18599[(26)]);
var inst_18491 = cljs.core.async.close_BANG_.call(null,inst_18488);
var state_18599__$1 = state_18599;
var statearr_18632_18705 = state_18599__$1;
(statearr_18632_18705[(2)] = inst_18491);

(statearr_18632_18705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (22))){
var inst_18511 = (state_18599[(8)]);
var inst_18514 = cljs.core.async.close_BANG_.call(null,inst_18511);
var state_18599__$1 = state_18599;
var statearr_18633_18706 = state_18599__$1;
(statearr_18633_18706[(2)] = inst_18514);

(statearr_18633_18706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (36))){
var inst_18558 = (state_18599[(25)]);
var inst_18562 = cljs.core.chunk_first.call(null,inst_18558);
var inst_18563 = cljs.core.chunk_rest.call(null,inst_18558);
var inst_18564 = cljs.core.count.call(null,inst_18562);
var inst_18539 = inst_18563;
var inst_18540 = inst_18562;
var inst_18541 = inst_18564;
var inst_18542 = (0);
var state_18599__$1 = (function (){var statearr_18634 = state_18599;
(statearr_18634[(10)] = inst_18540);

(statearr_18634[(20)] = inst_18539);

(statearr_18634[(21)] = inst_18541);

(statearr_18634[(12)] = inst_18542);

return statearr_18634;
})();
var statearr_18635_18707 = state_18599__$1;
(statearr_18635_18707[(2)] = null);

(statearr_18635_18707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (41))){
var inst_18558 = (state_18599[(25)]);
var inst_18574 = (state_18599[(2)]);
var inst_18575 = cljs.core.next.call(null,inst_18558);
var inst_18539 = inst_18575;
var inst_18540 = null;
var inst_18541 = (0);
var inst_18542 = (0);
var state_18599__$1 = (function (){var statearr_18636 = state_18599;
(statearr_18636[(10)] = inst_18540);

(statearr_18636[(20)] = inst_18539);

(statearr_18636[(27)] = inst_18574);

(statearr_18636[(21)] = inst_18541);

(statearr_18636[(12)] = inst_18542);

return statearr_18636;
})();
var statearr_18637_18708 = state_18599__$1;
(statearr_18637_18708[(2)] = null);

(statearr_18637_18708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (43))){
var state_18599__$1 = state_18599;
var statearr_18638_18709 = state_18599__$1;
(statearr_18638_18709[(2)] = null);

(statearr_18638_18709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (29))){
var inst_18583 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18639_18710 = state_18599__$1;
(statearr_18639_18710[(2)] = inst_18583);

(statearr_18639_18710[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (44))){
var inst_18592 = (state_18599[(2)]);
var state_18599__$1 = (function (){var statearr_18640 = state_18599;
(statearr_18640[(28)] = inst_18592);

return statearr_18640;
})();
var statearr_18641_18711 = state_18599__$1;
(statearr_18641_18711[(2)] = null);

(statearr_18641_18711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (6))){
var inst_18531 = (state_18599[(29)]);
var inst_18530 = cljs.core.deref.call(null,cs);
var inst_18531__$1 = cljs.core.keys.call(null,inst_18530);
var inst_18532 = cljs.core.count.call(null,inst_18531__$1);
var inst_18533 = cljs.core.reset_BANG_.call(null,dctr,inst_18532);
var inst_18538 = cljs.core.seq.call(null,inst_18531__$1);
var inst_18539 = inst_18538;
var inst_18540 = null;
var inst_18541 = (0);
var inst_18542 = (0);
var state_18599__$1 = (function (){var statearr_18642 = state_18599;
(statearr_18642[(10)] = inst_18540);

(statearr_18642[(29)] = inst_18531__$1);

(statearr_18642[(20)] = inst_18539);

(statearr_18642[(21)] = inst_18541);

(statearr_18642[(30)] = inst_18533);

(statearr_18642[(12)] = inst_18542);

return statearr_18642;
})();
var statearr_18643_18712 = state_18599__$1;
(statearr_18643_18712[(2)] = null);

(statearr_18643_18712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (28))){
var inst_18539 = (state_18599[(20)]);
var inst_18558 = (state_18599[(25)]);
var inst_18558__$1 = cljs.core.seq.call(null,inst_18539);
var state_18599__$1 = (function (){var statearr_18644 = state_18599;
(statearr_18644[(25)] = inst_18558__$1);

return statearr_18644;
})();
if(inst_18558__$1){
var statearr_18645_18713 = state_18599__$1;
(statearr_18645_18713[(1)] = (33));

} else {
var statearr_18646_18714 = state_18599__$1;
(statearr_18646_18714[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (25))){
var inst_18541 = (state_18599[(21)]);
var inst_18542 = (state_18599[(12)]);
var inst_18544 = (inst_18542 < inst_18541);
var inst_18545 = inst_18544;
var state_18599__$1 = state_18599;
if(cljs.core.truth_(inst_18545)){
var statearr_18647_18715 = state_18599__$1;
(statearr_18647_18715[(1)] = (27));

} else {
var statearr_18648_18716 = state_18599__$1;
(statearr_18648_18716[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (34))){
var state_18599__$1 = state_18599;
var statearr_18649_18717 = state_18599__$1;
(statearr_18649_18717[(2)] = null);

(statearr_18649_18717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (17))){
var state_18599__$1 = state_18599;
var statearr_18650_18718 = state_18599__$1;
(statearr_18650_18718[(2)] = null);

(statearr_18650_18718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (3))){
var inst_18597 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18599__$1,inst_18597);
} else {
if((state_val_18600 === (12))){
var inst_18526 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18651_18719 = state_18599__$1;
(statearr_18651_18719[(2)] = inst_18526);

(statearr_18651_18719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (2))){
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18599__$1,(4),ch);
} else {
if((state_val_18600 === (23))){
var state_18599__$1 = state_18599;
var statearr_18652_18720 = state_18599__$1;
(statearr_18652_18720[(2)] = null);

(statearr_18652_18720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (35))){
var inst_18581 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18653_18721 = state_18599__$1;
(statearr_18653_18721[(2)] = inst_18581);

(statearr_18653_18721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (19))){
var inst_18498 = (state_18599[(7)]);
var inst_18502 = cljs.core.chunk_first.call(null,inst_18498);
var inst_18503 = cljs.core.chunk_rest.call(null,inst_18498);
var inst_18504 = cljs.core.count.call(null,inst_18502);
var inst_18476 = inst_18503;
var inst_18477 = inst_18502;
var inst_18478 = inst_18504;
var inst_18479 = (0);
var state_18599__$1 = (function (){var statearr_18654 = state_18599;
(statearr_18654[(13)] = inst_18477);

(statearr_18654[(14)] = inst_18476);

(statearr_18654[(15)] = inst_18478);

(statearr_18654[(16)] = inst_18479);

return statearr_18654;
})();
var statearr_18655_18722 = state_18599__$1;
(statearr_18655_18722[(2)] = null);

(statearr_18655_18722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (11))){
var inst_18498 = (state_18599[(7)]);
var inst_18476 = (state_18599[(14)]);
var inst_18498__$1 = cljs.core.seq.call(null,inst_18476);
var state_18599__$1 = (function (){var statearr_18656 = state_18599;
(statearr_18656[(7)] = inst_18498__$1);

return statearr_18656;
})();
if(inst_18498__$1){
var statearr_18657_18723 = state_18599__$1;
(statearr_18657_18723[(1)] = (16));

} else {
var statearr_18658_18724 = state_18599__$1;
(statearr_18658_18724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (9))){
var inst_18528 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18659_18725 = state_18599__$1;
(statearr_18659_18725[(2)] = inst_18528);

(statearr_18659_18725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (5))){
var inst_18474 = cljs.core.deref.call(null,cs);
var inst_18475 = cljs.core.seq.call(null,inst_18474);
var inst_18476 = inst_18475;
var inst_18477 = null;
var inst_18478 = (0);
var inst_18479 = (0);
var state_18599__$1 = (function (){var statearr_18660 = state_18599;
(statearr_18660[(13)] = inst_18477);

(statearr_18660[(14)] = inst_18476);

(statearr_18660[(15)] = inst_18478);

(statearr_18660[(16)] = inst_18479);

return statearr_18660;
})();
var statearr_18661_18726 = state_18599__$1;
(statearr_18661_18726[(2)] = null);

(statearr_18661_18726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (14))){
var state_18599__$1 = state_18599;
var statearr_18662_18727 = state_18599__$1;
(statearr_18662_18727[(2)] = null);

(statearr_18662_18727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (45))){
var inst_18589 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18663_18728 = state_18599__$1;
(statearr_18663_18728[(2)] = inst_18589);

(statearr_18663_18728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (26))){
var inst_18531 = (state_18599[(29)]);
var inst_18585 = (state_18599[(2)]);
var inst_18586 = cljs.core.seq.call(null,inst_18531);
var state_18599__$1 = (function (){var statearr_18664 = state_18599;
(statearr_18664[(31)] = inst_18585);

return statearr_18664;
})();
if(inst_18586){
var statearr_18665_18729 = state_18599__$1;
(statearr_18665_18729[(1)] = (42));

} else {
var statearr_18666_18730 = state_18599__$1;
(statearr_18666_18730[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (16))){
var inst_18498 = (state_18599[(7)]);
var inst_18500 = cljs.core.chunked_seq_QMARK_.call(null,inst_18498);
var state_18599__$1 = state_18599;
if(inst_18500){
var statearr_18667_18731 = state_18599__$1;
(statearr_18667_18731[(1)] = (19));

} else {
var statearr_18668_18732 = state_18599__$1;
(statearr_18668_18732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (38))){
var inst_18578 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18669_18733 = state_18599__$1;
(statearr_18669_18733[(2)] = inst_18578);

(statearr_18669_18733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (30))){
var state_18599__$1 = state_18599;
var statearr_18670_18734 = state_18599__$1;
(statearr_18670_18734[(2)] = null);

(statearr_18670_18734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (10))){
var inst_18477 = (state_18599[(13)]);
var inst_18479 = (state_18599[(16)]);
var inst_18487 = cljs.core._nth.call(null,inst_18477,inst_18479);
var inst_18488 = cljs.core.nth.call(null,inst_18487,(0),null);
var inst_18489 = cljs.core.nth.call(null,inst_18487,(1),null);
var state_18599__$1 = (function (){var statearr_18671 = state_18599;
(statearr_18671[(26)] = inst_18488);

return statearr_18671;
})();
if(cljs.core.truth_(inst_18489)){
var statearr_18672_18735 = state_18599__$1;
(statearr_18672_18735[(1)] = (13));

} else {
var statearr_18673_18736 = state_18599__$1;
(statearr_18673_18736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (18))){
var inst_18524 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18674_18737 = state_18599__$1;
(statearr_18674_18737[(2)] = inst_18524);

(statearr_18674_18737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (42))){
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18599__$1,(45),dchan);
} else {
if((state_val_18600 === (37))){
var inst_18567 = (state_18599[(23)]);
var inst_18467 = (state_18599[(11)]);
var inst_18558 = (state_18599[(25)]);
var inst_18567__$1 = cljs.core.first.call(null,inst_18558);
var inst_18568 = cljs.core.async.put_BANG_.call(null,inst_18567__$1,inst_18467,done);
var state_18599__$1 = (function (){var statearr_18675 = state_18599;
(statearr_18675[(23)] = inst_18567__$1);

return statearr_18675;
})();
if(cljs.core.truth_(inst_18568)){
var statearr_18676_18738 = state_18599__$1;
(statearr_18676_18738[(1)] = (39));

} else {
var statearr_18677_18739 = state_18599__$1;
(statearr_18677_18739[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (8))){
var inst_18478 = (state_18599[(15)]);
var inst_18479 = (state_18599[(16)]);
var inst_18481 = (inst_18479 < inst_18478);
var inst_18482 = inst_18481;
var state_18599__$1 = state_18599;
if(cljs.core.truth_(inst_18482)){
var statearr_18678_18740 = state_18599__$1;
(statearr_18678_18740[(1)] = (10));

} else {
var statearr_18679_18741 = state_18599__$1;
(statearr_18679_18741[(1)] = (11));

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
});})(c__17364__auto___18687,cs,m,dchan,dctr,done))
;
return ((function (switch__17252__auto__,c__17364__auto___18687,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17253__auto__ = null;
var cljs$core$async$mult_$_state_machine__17253__auto____0 = (function (){
var statearr_18683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18683[(0)] = cljs$core$async$mult_$_state_machine__17253__auto__);

(statearr_18683[(1)] = (1));

return statearr_18683;
});
var cljs$core$async$mult_$_state_machine__17253__auto____1 = (function (state_18599){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_18599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e18684){if((e18684 instanceof Object)){
var ex__17256__auto__ = e18684;
var statearr_18685_18742 = state_18599;
(statearr_18685_18742[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18743 = state_18599;
state_18599 = G__18743;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17253__auto__ = function(state_18599){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17253__auto____1.call(this,state_18599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17253__auto____0;
cljs$core$async$mult_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17253__auto____1;
return cljs$core$async$mult_$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___18687,cs,m,dchan,dctr,done))
})();
var state__17366__auto__ = (function (){var statearr_18686 = f__17365__auto__.call(null);
(statearr_18686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___18687);

return statearr_18686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___18687,cs,m,dchan,dctr,done))
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
var args18744 = [];
var len__7484__auto___18747 = arguments.length;
var i__7485__auto___18748 = (0);
while(true){
if((i__7485__auto___18748 < len__7484__auto___18747)){
args18744.push((arguments[i__7485__auto___18748]));

var G__18749 = (i__7485__auto___18748 + (1));
i__7485__auto___18748 = G__18749;
continue;
} else {
}
break;
}

var G__18746 = args18744.length;
switch (G__18746) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18744.length)].join('')));

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
var len__7484__auto___18761 = arguments.length;
var i__7485__auto___18762 = (0);
while(true){
if((i__7485__auto___18762 < len__7484__auto___18761)){
args__7491__auto__.push((arguments[i__7485__auto___18762]));

var G__18763 = (i__7485__auto___18762 + (1));
i__7485__auto___18762 = G__18763;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18755){
var map__18756 = p__18755;
var map__18756__$1 = ((((!((map__18756 == null)))?((((map__18756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18756):map__18756);
var opts = map__18756__$1;
var statearr_18758_18764 = state;
(statearr_18758_18764[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18756,map__18756__$1,opts){
return (function (val){
var statearr_18759_18765 = state;
(statearr_18759_18765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18756,map__18756__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18760_18766 = state;
(statearr_18760_18766[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18751){
var G__18752 = cljs.core.first.call(null,seq18751);
var seq18751__$1 = cljs.core.next.call(null,seq18751);
var G__18753 = cljs.core.first.call(null,seq18751__$1);
var seq18751__$2 = cljs.core.next.call(null,seq18751__$1);
var G__18754 = cljs.core.first.call(null,seq18751__$2);
var seq18751__$3 = cljs.core.next.call(null,seq18751__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18752,G__18753,G__18754,seq18751__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18932 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18933){
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
this.meta18933 = meta18933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18934,meta18933__$1){
var self__ = this;
var _18934__$1 = this;
return (new cljs.core.async.t_cljs$core$async18932(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18933__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18934){
var self__ = this;
var _18934__$1 = this;
return self__.meta18933;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18932.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18933","meta18933",2053333684,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18932";

cljs.core.async.t_cljs$core$async18932.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async18932");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18932 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18932(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18933){
return (new cljs.core.async.t_cljs$core$async18932(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18933));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18932(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17364__auto___19097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_18950 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19036_19098 = state_19034__$1;
(statearr_19036_19098[(2)] = inst_18950);

(statearr_19036_19098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (20))){
var inst_18962 = (state_19034[(7)]);
var state_19034__$1 = state_19034;
var statearr_19037_19099 = state_19034__$1;
(statearr_19037_19099[(2)] = inst_18962);

(statearr_19037_19099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (27))){
var state_19034__$1 = state_19034;
var statearr_19038_19100 = state_19034__$1;
(statearr_19038_19100[(2)] = null);

(statearr_19038_19100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (1))){
var inst_18938 = (state_19034[(8)]);
var inst_18938__$1 = calc_state.call(null);
var inst_18940 = (inst_18938__$1 == null);
var inst_18941 = cljs.core.not.call(null,inst_18940);
var state_19034__$1 = (function (){var statearr_19039 = state_19034;
(statearr_19039[(8)] = inst_18938__$1);

return statearr_19039;
})();
if(inst_18941){
var statearr_19040_19101 = state_19034__$1;
(statearr_19040_19101[(1)] = (2));

} else {
var statearr_19041_19102 = state_19034__$1;
(statearr_19041_19102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (24))){
var inst_18985 = (state_19034[(9)]);
var inst_19008 = (state_19034[(10)]);
var inst_18994 = (state_19034[(11)]);
var inst_19008__$1 = inst_18985.call(null,inst_18994);
var state_19034__$1 = (function (){var statearr_19042 = state_19034;
(statearr_19042[(10)] = inst_19008__$1);

return statearr_19042;
})();
if(cljs.core.truth_(inst_19008__$1)){
var statearr_19043_19103 = state_19034__$1;
(statearr_19043_19103[(1)] = (29));

} else {
var statearr_19044_19104 = state_19034__$1;
(statearr_19044_19104[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (4))){
var inst_18953 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18953)){
var statearr_19045_19105 = state_19034__$1;
(statearr_19045_19105[(1)] = (8));

} else {
var statearr_19046_19106 = state_19034__$1;
(statearr_19046_19106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (15))){
var inst_18979 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18979)){
var statearr_19047_19107 = state_19034__$1;
(statearr_19047_19107[(1)] = (19));

} else {
var statearr_19048_19108 = state_19034__$1;
(statearr_19048_19108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (21))){
var inst_18984 = (state_19034[(12)]);
var inst_18984__$1 = (state_19034[(2)]);
var inst_18985 = cljs.core.get.call(null,inst_18984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18986 = cljs.core.get.call(null,inst_18984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18987 = cljs.core.get.call(null,inst_18984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19034__$1 = (function (){var statearr_19049 = state_19034;
(statearr_19049[(12)] = inst_18984__$1);

(statearr_19049[(9)] = inst_18985);

(statearr_19049[(13)] = inst_18986);

return statearr_19049;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19034__$1,(22),inst_18987);
} else {
if((state_val_19035 === (31))){
var inst_19016 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19016)){
var statearr_19050_19109 = state_19034__$1;
(statearr_19050_19109[(1)] = (32));

} else {
var statearr_19051_19110 = state_19034__$1;
(statearr_19051_19110[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (32))){
var inst_18993 = (state_19034[(14)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19034__$1,(35),out,inst_18993);
} else {
if((state_val_19035 === (33))){
var inst_18984 = (state_19034[(12)]);
var inst_18962 = inst_18984;
var state_19034__$1 = (function (){var statearr_19052 = state_19034;
(statearr_19052[(7)] = inst_18962);

return statearr_19052;
})();
var statearr_19053_19111 = state_19034__$1;
(statearr_19053_19111[(2)] = null);

(statearr_19053_19111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (13))){
var inst_18962 = (state_19034[(7)]);
var inst_18969 = inst_18962.cljs$lang$protocol_mask$partition0$;
var inst_18970 = (inst_18969 & (64));
var inst_18971 = inst_18962.cljs$core$ISeq$;
var inst_18972 = (inst_18970) || (inst_18971);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18972)){
var statearr_19054_19112 = state_19034__$1;
(statearr_19054_19112[(1)] = (16));

} else {
var statearr_19055_19113 = state_19034__$1;
(statearr_19055_19113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (22))){
var inst_18993 = (state_19034[(14)]);
var inst_18994 = (state_19034[(11)]);
var inst_18992 = (state_19034[(2)]);
var inst_18993__$1 = cljs.core.nth.call(null,inst_18992,(0),null);
var inst_18994__$1 = cljs.core.nth.call(null,inst_18992,(1),null);
var inst_18995 = (inst_18993__$1 == null);
var inst_18996 = cljs.core._EQ_.call(null,inst_18994__$1,change);
var inst_18997 = (inst_18995) || (inst_18996);
var state_19034__$1 = (function (){var statearr_19056 = state_19034;
(statearr_19056[(14)] = inst_18993__$1);

(statearr_19056[(11)] = inst_18994__$1);

return statearr_19056;
})();
if(cljs.core.truth_(inst_18997)){
var statearr_19057_19114 = state_19034__$1;
(statearr_19057_19114[(1)] = (23));

} else {
var statearr_19058_19115 = state_19034__$1;
(statearr_19058_19115[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (36))){
var inst_18984 = (state_19034[(12)]);
var inst_18962 = inst_18984;
var state_19034__$1 = (function (){var statearr_19059 = state_19034;
(statearr_19059[(7)] = inst_18962);

return statearr_19059;
})();
var statearr_19060_19116 = state_19034__$1;
(statearr_19060_19116[(2)] = null);

(statearr_19060_19116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (29))){
var inst_19008 = (state_19034[(10)]);
var state_19034__$1 = state_19034;
var statearr_19061_19117 = state_19034__$1;
(statearr_19061_19117[(2)] = inst_19008);

(statearr_19061_19117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (6))){
var state_19034__$1 = state_19034;
var statearr_19062_19118 = state_19034__$1;
(statearr_19062_19118[(2)] = false);

(statearr_19062_19118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (28))){
var inst_19004 = (state_19034[(2)]);
var inst_19005 = calc_state.call(null);
var inst_18962 = inst_19005;
var state_19034__$1 = (function (){var statearr_19063 = state_19034;
(statearr_19063[(15)] = inst_19004);

(statearr_19063[(7)] = inst_18962);

return statearr_19063;
})();
var statearr_19064_19119 = state_19034__$1;
(statearr_19064_19119[(2)] = null);

(statearr_19064_19119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (25))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19065_19120 = state_19034__$1;
(statearr_19065_19120[(2)] = inst_19030);

(statearr_19065_19120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (34))){
var inst_19028 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19066_19121 = state_19034__$1;
(statearr_19066_19121[(2)] = inst_19028);

(statearr_19066_19121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (17))){
var state_19034__$1 = state_19034;
var statearr_19067_19122 = state_19034__$1;
(statearr_19067_19122[(2)] = false);

(statearr_19067_19122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (3))){
var state_19034__$1 = state_19034;
var statearr_19068_19123 = state_19034__$1;
(statearr_19068_19123[(2)] = false);

(statearr_19068_19123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (12))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (2))){
var inst_18938 = (state_19034[(8)]);
var inst_18943 = inst_18938.cljs$lang$protocol_mask$partition0$;
var inst_18944 = (inst_18943 & (64));
var inst_18945 = inst_18938.cljs$core$ISeq$;
var inst_18946 = (inst_18944) || (inst_18945);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18946)){
var statearr_19069_19124 = state_19034__$1;
(statearr_19069_19124[(1)] = (5));

} else {
var statearr_19070_19125 = state_19034__$1;
(statearr_19070_19125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (23))){
var inst_18993 = (state_19034[(14)]);
var inst_18999 = (inst_18993 == null);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18999)){
var statearr_19071_19126 = state_19034__$1;
(statearr_19071_19126[(1)] = (26));

} else {
var statearr_19072_19127 = state_19034__$1;
(statearr_19072_19127[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (35))){
var inst_19019 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19019)){
var statearr_19073_19128 = state_19034__$1;
(statearr_19073_19128[(1)] = (36));

} else {
var statearr_19074_19129 = state_19034__$1;
(statearr_19074_19129[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (19))){
var inst_18962 = (state_19034[(7)]);
var inst_18981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18962);
var state_19034__$1 = state_19034;
var statearr_19075_19130 = state_19034__$1;
(statearr_19075_19130[(2)] = inst_18981);

(statearr_19075_19130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (11))){
var inst_18962 = (state_19034[(7)]);
var inst_18966 = (inst_18962 == null);
var inst_18967 = cljs.core.not.call(null,inst_18966);
var state_19034__$1 = state_19034;
if(inst_18967){
var statearr_19076_19131 = state_19034__$1;
(statearr_19076_19131[(1)] = (13));

} else {
var statearr_19077_19132 = state_19034__$1;
(statearr_19077_19132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (9))){
var inst_18938 = (state_19034[(8)]);
var state_19034__$1 = state_19034;
var statearr_19078_19133 = state_19034__$1;
(statearr_19078_19133[(2)] = inst_18938);

(statearr_19078_19133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (5))){
var state_19034__$1 = state_19034;
var statearr_19079_19134 = state_19034__$1;
(statearr_19079_19134[(2)] = true);

(statearr_19079_19134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (14))){
var state_19034__$1 = state_19034;
var statearr_19080_19135 = state_19034__$1;
(statearr_19080_19135[(2)] = false);

(statearr_19080_19135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (26))){
var inst_18994 = (state_19034[(11)]);
var inst_19001 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18994);
var state_19034__$1 = state_19034;
var statearr_19081_19136 = state_19034__$1;
(statearr_19081_19136[(2)] = inst_19001);

(statearr_19081_19136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (16))){
var state_19034__$1 = state_19034;
var statearr_19082_19137 = state_19034__$1;
(statearr_19082_19137[(2)] = true);

(statearr_19082_19137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (38))){
var inst_19024 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19083_19138 = state_19034__$1;
(statearr_19083_19138[(2)] = inst_19024);

(statearr_19083_19138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (30))){
var inst_18985 = (state_19034[(9)]);
var inst_18986 = (state_19034[(13)]);
var inst_18994 = (state_19034[(11)]);
var inst_19011 = cljs.core.empty_QMARK_.call(null,inst_18985);
var inst_19012 = inst_18986.call(null,inst_18994);
var inst_19013 = cljs.core.not.call(null,inst_19012);
var inst_19014 = (inst_19011) && (inst_19013);
var state_19034__$1 = state_19034;
var statearr_19084_19139 = state_19034__$1;
(statearr_19084_19139[(2)] = inst_19014);

(statearr_19084_19139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (10))){
var inst_18938 = (state_19034[(8)]);
var inst_18958 = (state_19034[(2)]);
var inst_18959 = cljs.core.get.call(null,inst_18958,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18960 = cljs.core.get.call(null,inst_18958,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18961 = cljs.core.get.call(null,inst_18958,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18962 = inst_18938;
var state_19034__$1 = (function (){var statearr_19085 = state_19034;
(statearr_19085[(16)] = inst_18959);

(statearr_19085[(17)] = inst_18960);

(statearr_19085[(18)] = inst_18961);

(statearr_19085[(7)] = inst_18962);

return statearr_19085;
})();
var statearr_19086_19140 = state_19034__$1;
(statearr_19086_19140[(2)] = null);

(statearr_19086_19140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (18))){
var inst_18976 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19087_19141 = state_19034__$1;
(statearr_19087_19141[(2)] = inst_18976);

(statearr_19087_19141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (37))){
var state_19034__$1 = state_19034;
var statearr_19088_19142 = state_19034__$1;
(statearr_19088_19142[(2)] = null);

(statearr_19088_19142[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (8))){
var inst_18938 = (state_19034[(8)]);
var inst_18955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18938);
var state_19034__$1 = state_19034;
var statearr_19089_19143 = state_19034__$1;
(statearr_19089_19143[(2)] = inst_18955);

(statearr_19089_19143[(1)] = (10));


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
});})(c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17252__auto__,c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17253__auto__ = null;
var cljs$core$async$mix_$_state_machine__17253__auto____0 = (function (){
var statearr_19093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19093[(0)] = cljs$core$async$mix_$_state_machine__17253__auto__);

(statearr_19093[(1)] = (1));

return statearr_19093;
});
var cljs$core$async$mix_$_state_machine__17253__auto____1 = (function (state_19034){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19094){if((e19094 instanceof Object)){
var ex__17256__auto__ = e19094;
var statearr_19095_19144 = state_19034;
(statearr_19095_19144[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19145 = state_19034;
state_19034 = G__19145;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17253__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17253__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17253__auto____0;
cljs$core$async$mix_$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17253__auto____1;
return cljs$core$async$mix_$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17366__auto__ = (function (){var statearr_19096 = f__17365__auto__.call(null);
(statearr_19096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19097);

return statearr_19096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19146 = [];
var len__7484__auto___19149 = arguments.length;
var i__7485__auto___19150 = (0);
while(true){
if((i__7485__auto___19150 < len__7484__auto___19149)){
args19146.push((arguments[i__7485__auto___19150]));

var G__19151 = (i__7485__auto___19150 + (1));
i__7485__auto___19150 = G__19151;
continue;
} else {
}
break;
}

var G__19148 = args19146.length;
switch (G__19148) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19146.length)].join('')));

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
var args19154 = [];
var len__7484__auto___19279 = arguments.length;
var i__7485__auto___19280 = (0);
while(true){
if((i__7485__auto___19280 < len__7484__auto___19279)){
args19154.push((arguments[i__7485__auto___19280]));

var G__19281 = (i__7485__auto___19280 + (1));
i__7485__auto___19280 = G__19281;
continue;
} else {
}
break;
}

var G__19156 = args19154.length;
switch (G__19156) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19154.length)].join('')));

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
return (function (p1__19153_SHARP_){
if(cljs.core.truth_(p1__19153_SHARP_.call(null,topic))){
return p1__19153_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19153_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19157 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19158){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19158 = meta19158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19159,meta19158__$1){
var self__ = this;
var _19159__$1 = this;
return (new cljs.core.async.t_cljs$core$async19157(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19158__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19159){
var self__ = this;
var _19159__$1 = this;
return self__.meta19158;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19158","meta19158",1736749898,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19157";

cljs.core.async.t_cljs$core$async19157.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19157");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19157 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19158){
return (new cljs.core.async.t_cljs$core$async19157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19158));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19157(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17364__auto___19283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19283,mults,ensure_mult,p){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19283,mults,ensure_mult,p){
return (function (state_19231){
var state_val_19232 = (state_19231[(1)]);
if((state_val_19232 === (7))){
var inst_19227 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19233_19284 = state_19231__$1;
(statearr_19233_19284[(2)] = inst_19227);

(statearr_19233_19284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (20))){
var state_19231__$1 = state_19231;
var statearr_19234_19285 = state_19231__$1;
(statearr_19234_19285[(2)] = null);

(statearr_19234_19285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (1))){
var state_19231__$1 = state_19231;
var statearr_19235_19286 = state_19231__$1;
(statearr_19235_19286[(2)] = null);

(statearr_19235_19286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (24))){
var inst_19210 = (state_19231[(7)]);
var inst_19219 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19210);
var state_19231__$1 = state_19231;
var statearr_19236_19287 = state_19231__$1;
(statearr_19236_19287[(2)] = inst_19219);

(statearr_19236_19287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (4))){
var inst_19162 = (state_19231[(8)]);
var inst_19162__$1 = (state_19231[(2)]);
var inst_19163 = (inst_19162__$1 == null);
var state_19231__$1 = (function (){var statearr_19237 = state_19231;
(statearr_19237[(8)] = inst_19162__$1);

return statearr_19237;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19238_19288 = state_19231__$1;
(statearr_19238_19288[(1)] = (5));

} else {
var statearr_19239_19289 = state_19231__$1;
(statearr_19239_19289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (15))){
var inst_19204 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19240_19290 = state_19231__$1;
(statearr_19240_19290[(2)] = inst_19204);

(statearr_19240_19290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (21))){
var inst_19224 = (state_19231[(2)]);
var state_19231__$1 = (function (){var statearr_19241 = state_19231;
(statearr_19241[(9)] = inst_19224);

return statearr_19241;
})();
var statearr_19242_19291 = state_19231__$1;
(statearr_19242_19291[(2)] = null);

(statearr_19242_19291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (13))){
var inst_19186 = (state_19231[(10)]);
var inst_19188 = cljs.core.chunked_seq_QMARK_.call(null,inst_19186);
var state_19231__$1 = state_19231;
if(inst_19188){
var statearr_19243_19292 = state_19231__$1;
(statearr_19243_19292[(1)] = (16));

} else {
var statearr_19244_19293 = state_19231__$1;
(statearr_19244_19293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (22))){
var inst_19216 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19216)){
var statearr_19245_19294 = state_19231__$1;
(statearr_19245_19294[(1)] = (23));

} else {
var statearr_19246_19295 = state_19231__$1;
(statearr_19246_19295[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (6))){
var inst_19162 = (state_19231[(8)]);
var inst_19210 = (state_19231[(7)]);
var inst_19212 = (state_19231[(11)]);
var inst_19210__$1 = topic_fn.call(null,inst_19162);
var inst_19211 = cljs.core.deref.call(null,mults);
var inst_19212__$1 = cljs.core.get.call(null,inst_19211,inst_19210__$1);
var state_19231__$1 = (function (){var statearr_19247 = state_19231;
(statearr_19247[(7)] = inst_19210__$1);

(statearr_19247[(11)] = inst_19212__$1);

return statearr_19247;
})();
if(cljs.core.truth_(inst_19212__$1)){
var statearr_19248_19296 = state_19231__$1;
(statearr_19248_19296[(1)] = (19));

} else {
var statearr_19249_19297 = state_19231__$1;
(statearr_19249_19297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (25))){
var inst_19221 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19250_19298 = state_19231__$1;
(statearr_19250_19298[(2)] = inst_19221);

(statearr_19250_19298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (17))){
var inst_19186 = (state_19231[(10)]);
var inst_19195 = cljs.core.first.call(null,inst_19186);
var inst_19196 = cljs.core.async.muxch_STAR_.call(null,inst_19195);
var inst_19197 = cljs.core.async.close_BANG_.call(null,inst_19196);
var inst_19198 = cljs.core.next.call(null,inst_19186);
var inst_19172 = inst_19198;
var inst_19173 = null;
var inst_19174 = (0);
var inst_19175 = (0);
var state_19231__$1 = (function (){var statearr_19251 = state_19231;
(statearr_19251[(12)] = inst_19197);

(statearr_19251[(13)] = inst_19175);

(statearr_19251[(14)] = inst_19173);

(statearr_19251[(15)] = inst_19174);

(statearr_19251[(16)] = inst_19172);

return statearr_19251;
})();
var statearr_19252_19299 = state_19231__$1;
(statearr_19252_19299[(2)] = null);

(statearr_19252_19299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (3))){
var inst_19229 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19231__$1,inst_19229);
} else {
if((state_val_19232 === (12))){
var inst_19206 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19253_19300 = state_19231__$1;
(statearr_19253_19300[(2)] = inst_19206);

(statearr_19253_19300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (2))){
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(4),ch);
} else {
if((state_val_19232 === (23))){
var state_19231__$1 = state_19231;
var statearr_19254_19301 = state_19231__$1;
(statearr_19254_19301[(2)] = null);

(statearr_19254_19301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (19))){
var inst_19162 = (state_19231[(8)]);
var inst_19212 = (state_19231[(11)]);
var inst_19214 = cljs.core.async.muxch_STAR_.call(null,inst_19212);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19231__$1,(22),inst_19214,inst_19162);
} else {
if((state_val_19232 === (11))){
var inst_19186 = (state_19231[(10)]);
var inst_19172 = (state_19231[(16)]);
var inst_19186__$1 = cljs.core.seq.call(null,inst_19172);
var state_19231__$1 = (function (){var statearr_19255 = state_19231;
(statearr_19255[(10)] = inst_19186__$1);

return statearr_19255;
})();
if(inst_19186__$1){
var statearr_19256_19302 = state_19231__$1;
(statearr_19256_19302[(1)] = (13));

} else {
var statearr_19257_19303 = state_19231__$1;
(statearr_19257_19303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (9))){
var inst_19208 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19258_19304 = state_19231__$1;
(statearr_19258_19304[(2)] = inst_19208);

(statearr_19258_19304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (5))){
var inst_19169 = cljs.core.deref.call(null,mults);
var inst_19170 = cljs.core.vals.call(null,inst_19169);
var inst_19171 = cljs.core.seq.call(null,inst_19170);
var inst_19172 = inst_19171;
var inst_19173 = null;
var inst_19174 = (0);
var inst_19175 = (0);
var state_19231__$1 = (function (){var statearr_19259 = state_19231;
(statearr_19259[(13)] = inst_19175);

(statearr_19259[(14)] = inst_19173);

(statearr_19259[(15)] = inst_19174);

(statearr_19259[(16)] = inst_19172);

return statearr_19259;
})();
var statearr_19260_19305 = state_19231__$1;
(statearr_19260_19305[(2)] = null);

(statearr_19260_19305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (14))){
var state_19231__$1 = state_19231;
var statearr_19264_19306 = state_19231__$1;
(statearr_19264_19306[(2)] = null);

(statearr_19264_19306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (16))){
var inst_19186 = (state_19231[(10)]);
var inst_19190 = cljs.core.chunk_first.call(null,inst_19186);
var inst_19191 = cljs.core.chunk_rest.call(null,inst_19186);
var inst_19192 = cljs.core.count.call(null,inst_19190);
var inst_19172 = inst_19191;
var inst_19173 = inst_19190;
var inst_19174 = inst_19192;
var inst_19175 = (0);
var state_19231__$1 = (function (){var statearr_19265 = state_19231;
(statearr_19265[(13)] = inst_19175);

(statearr_19265[(14)] = inst_19173);

(statearr_19265[(15)] = inst_19174);

(statearr_19265[(16)] = inst_19172);

return statearr_19265;
})();
var statearr_19266_19307 = state_19231__$1;
(statearr_19266_19307[(2)] = null);

(statearr_19266_19307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (10))){
var inst_19175 = (state_19231[(13)]);
var inst_19173 = (state_19231[(14)]);
var inst_19174 = (state_19231[(15)]);
var inst_19172 = (state_19231[(16)]);
var inst_19180 = cljs.core._nth.call(null,inst_19173,inst_19175);
var inst_19181 = cljs.core.async.muxch_STAR_.call(null,inst_19180);
var inst_19182 = cljs.core.async.close_BANG_.call(null,inst_19181);
var inst_19183 = (inst_19175 + (1));
var tmp19261 = inst_19173;
var tmp19262 = inst_19174;
var tmp19263 = inst_19172;
var inst_19172__$1 = tmp19263;
var inst_19173__$1 = tmp19261;
var inst_19174__$1 = tmp19262;
var inst_19175__$1 = inst_19183;
var state_19231__$1 = (function (){var statearr_19267 = state_19231;
(statearr_19267[(13)] = inst_19175__$1);

(statearr_19267[(17)] = inst_19182);

(statearr_19267[(14)] = inst_19173__$1);

(statearr_19267[(15)] = inst_19174__$1);

(statearr_19267[(16)] = inst_19172__$1);

return statearr_19267;
})();
var statearr_19268_19308 = state_19231__$1;
(statearr_19268_19308[(2)] = null);

(statearr_19268_19308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (18))){
var inst_19201 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19269_19309 = state_19231__$1;
(statearr_19269_19309[(2)] = inst_19201);

(statearr_19269_19309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (8))){
var inst_19175 = (state_19231[(13)]);
var inst_19174 = (state_19231[(15)]);
var inst_19177 = (inst_19175 < inst_19174);
var inst_19178 = inst_19177;
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19178)){
var statearr_19270_19310 = state_19231__$1;
(statearr_19270_19310[(1)] = (10));

} else {
var statearr_19271_19311 = state_19231__$1;
(statearr_19271_19311[(1)] = (11));

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
});})(c__17364__auto___19283,mults,ensure_mult,p))
;
return ((function (switch__17252__auto__,c__17364__auto___19283,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19275[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19275[(1)] = (1));

return statearr_19275;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19231){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19276){if((e19276 instanceof Object)){
var ex__17256__auto__ = e19276;
var statearr_19277_19312 = state_19231;
(statearr_19277_19312[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19313 = state_19231;
state_19231 = G__19313;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19283,mults,ensure_mult,p))
})();
var state__17366__auto__ = (function (){var statearr_19278 = f__17365__auto__.call(null);
(statearr_19278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19283);

return statearr_19278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19283,mults,ensure_mult,p))
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
var args19314 = [];
var len__7484__auto___19317 = arguments.length;
var i__7485__auto___19318 = (0);
while(true){
if((i__7485__auto___19318 < len__7484__auto___19317)){
args19314.push((arguments[i__7485__auto___19318]));

var G__19319 = (i__7485__auto___19318 + (1));
i__7485__auto___19318 = G__19319;
continue;
} else {
}
break;
}

var G__19316 = args19314.length;
switch (G__19316) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19314.length)].join('')));

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
var args19321 = [];
var len__7484__auto___19324 = arguments.length;
var i__7485__auto___19325 = (0);
while(true){
if((i__7485__auto___19325 < len__7484__auto___19324)){
args19321.push((arguments[i__7485__auto___19325]));

var G__19326 = (i__7485__auto___19325 + (1));
i__7485__auto___19325 = G__19326;
continue;
} else {
}
break;
}

var G__19323 = args19321.length;
switch (G__19323) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19321.length)].join('')));

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
var args19328 = [];
var len__7484__auto___19399 = arguments.length;
var i__7485__auto___19400 = (0);
while(true){
if((i__7485__auto___19400 < len__7484__auto___19399)){
args19328.push((arguments[i__7485__auto___19400]));

var G__19401 = (i__7485__auto___19400 + (1));
i__7485__auto___19400 = G__19401;
continue;
} else {
}
break;
}

var G__19330 = args19328.length;
switch (G__19330) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19328.length)].join('')));

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
var c__17364__auto___19403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19369){
var state_val_19370 = (state_19369[(1)]);
if((state_val_19370 === (7))){
var state_19369__$1 = state_19369;
var statearr_19371_19404 = state_19369__$1;
(statearr_19371_19404[(2)] = null);

(statearr_19371_19404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (1))){
var state_19369__$1 = state_19369;
var statearr_19372_19405 = state_19369__$1;
(statearr_19372_19405[(2)] = null);

(statearr_19372_19405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (4))){
var inst_19333 = (state_19369[(7)]);
var inst_19335 = (inst_19333 < cnt);
var state_19369__$1 = state_19369;
if(cljs.core.truth_(inst_19335)){
var statearr_19373_19406 = state_19369__$1;
(statearr_19373_19406[(1)] = (6));

} else {
var statearr_19374_19407 = state_19369__$1;
(statearr_19374_19407[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (15))){
var inst_19365 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19375_19408 = state_19369__$1;
(statearr_19375_19408[(2)] = inst_19365);

(statearr_19375_19408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (13))){
var inst_19358 = cljs.core.async.close_BANG_.call(null,out);
var state_19369__$1 = state_19369;
var statearr_19376_19409 = state_19369__$1;
(statearr_19376_19409[(2)] = inst_19358);

(statearr_19376_19409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (6))){
var state_19369__$1 = state_19369;
var statearr_19377_19410 = state_19369__$1;
(statearr_19377_19410[(2)] = null);

(statearr_19377_19410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (3))){
var inst_19367 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19369__$1,inst_19367);
} else {
if((state_val_19370 === (12))){
var inst_19355 = (state_19369[(8)]);
var inst_19355__$1 = (state_19369[(2)]);
var inst_19356 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19355__$1);
var state_19369__$1 = (function (){var statearr_19378 = state_19369;
(statearr_19378[(8)] = inst_19355__$1);

return statearr_19378;
})();
if(cljs.core.truth_(inst_19356)){
var statearr_19379_19411 = state_19369__$1;
(statearr_19379_19411[(1)] = (13));

} else {
var statearr_19380_19412 = state_19369__$1;
(statearr_19380_19412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (2))){
var inst_19332 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19333 = (0);
var state_19369__$1 = (function (){var statearr_19381 = state_19369;
(statearr_19381[(7)] = inst_19333);

(statearr_19381[(9)] = inst_19332);

return statearr_19381;
})();
var statearr_19382_19413 = state_19369__$1;
(statearr_19382_19413[(2)] = null);

(statearr_19382_19413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (11))){
var inst_19333 = (state_19369[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19369,(10),Object,null,(9));
var inst_19342 = chs__$1.call(null,inst_19333);
var inst_19343 = done.call(null,inst_19333);
var inst_19344 = cljs.core.async.take_BANG_.call(null,inst_19342,inst_19343);
var state_19369__$1 = state_19369;
var statearr_19383_19414 = state_19369__$1;
(statearr_19383_19414[(2)] = inst_19344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (9))){
var inst_19333 = (state_19369[(7)]);
var inst_19346 = (state_19369[(2)]);
var inst_19347 = (inst_19333 + (1));
var inst_19333__$1 = inst_19347;
var state_19369__$1 = (function (){var statearr_19384 = state_19369;
(statearr_19384[(7)] = inst_19333__$1);

(statearr_19384[(10)] = inst_19346);

return statearr_19384;
})();
var statearr_19385_19415 = state_19369__$1;
(statearr_19385_19415[(2)] = null);

(statearr_19385_19415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (5))){
var inst_19353 = (state_19369[(2)]);
var state_19369__$1 = (function (){var statearr_19386 = state_19369;
(statearr_19386[(11)] = inst_19353);

return statearr_19386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19369__$1,(12),dchan);
} else {
if((state_val_19370 === (14))){
var inst_19355 = (state_19369[(8)]);
var inst_19360 = cljs.core.apply.call(null,f,inst_19355);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19369__$1,(16),out,inst_19360);
} else {
if((state_val_19370 === (16))){
var inst_19362 = (state_19369[(2)]);
var state_19369__$1 = (function (){var statearr_19387 = state_19369;
(statearr_19387[(12)] = inst_19362);

return statearr_19387;
})();
var statearr_19388_19416 = state_19369__$1;
(statearr_19388_19416[(2)] = null);

(statearr_19388_19416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (10))){
var inst_19337 = (state_19369[(2)]);
var inst_19338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19369__$1 = (function (){var statearr_19389 = state_19369;
(statearr_19389[(13)] = inst_19337);

return statearr_19389;
})();
var statearr_19390_19417 = state_19369__$1;
(statearr_19390_19417[(2)] = inst_19338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (8))){
var inst_19351 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19391_19418 = state_19369__$1;
(statearr_19391_19418[(2)] = inst_19351);

(statearr_19391_19418[(1)] = (5));


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
});})(c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17252__auto__,c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19395[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19369){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19396){if((e19396 instanceof Object)){
var ex__17256__auto__ = e19396;
var statearr_19397_19419 = state_19369;
(statearr_19397_19419[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19420 = state_19369;
state_19369 = G__19420;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17366__auto__ = (function (){var statearr_19398 = f__17365__auto__.call(null);
(statearr_19398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19403);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19403,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19422 = [];
var len__7484__auto___19480 = arguments.length;
var i__7485__auto___19481 = (0);
while(true){
if((i__7485__auto___19481 < len__7484__auto___19480)){
args19422.push((arguments[i__7485__auto___19481]));

var G__19482 = (i__7485__auto___19481 + (1));
i__7485__auto___19481 = G__19482;
continue;
} else {
}
break;
}

var G__19424 = args19422.length;
switch (G__19424) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19422.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___19484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19484,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19484,out){
return (function (state_19456){
var state_val_19457 = (state_19456[(1)]);
if((state_val_19457 === (7))){
var inst_19436 = (state_19456[(7)]);
var inst_19435 = (state_19456[(8)]);
var inst_19435__$1 = (state_19456[(2)]);
var inst_19436__$1 = cljs.core.nth.call(null,inst_19435__$1,(0),null);
var inst_19437 = cljs.core.nth.call(null,inst_19435__$1,(1),null);
var inst_19438 = (inst_19436__$1 == null);
var state_19456__$1 = (function (){var statearr_19458 = state_19456;
(statearr_19458[(7)] = inst_19436__$1);

(statearr_19458[(9)] = inst_19437);

(statearr_19458[(8)] = inst_19435__$1);

return statearr_19458;
})();
if(cljs.core.truth_(inst_19438)){
var statearr_19459_19485 = state_19456__$1;
(statearr_19459_19485[(1)] = (8));

} else {
var statearr_19460_19486 = state_19456__$1;
(statearr_19460_19486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (1))){
var inst_19425 = cljs.core.vec.call(null,chs);
var inst_19426 = inst_19425;
var state_19456__$1 = (function (){var statearr_19461 = state_19456;
(statearr_19461[(10)] = inst_19426);

return statearr_19461;
})();
var statearr_19462_19487 = state_19456__$1;
(statearr_19462_19487[(2)] = null);

(statearr_19462_19487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (4))){
var inst_19426 = (state_19456[(10)]);
var state_19456__$1 = state_19456;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19456__$1,(7),inst_19426);
} else {
if((state_val_19457 === (6))){
var inst_19452 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19463_19488 = state_19456__$1;
(statearr_19463_19488[(2)] = inst_19452);

(statearr_19463_19488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (3))){
var inst_19454 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19456__$1,inst_19454);
} else {
if((state_val_19457 === (2))){
var inst_19426 = (state_19456[(10)]);
var inst_19428 = cljs.core.count.call(null,inst_19426);
var inst_19429 = (inst_19428 > (0));
var state_19456__$1 = state_19456;
if(cljs.core.truth_(inst_19429)){
var statearr_19465_19489 = state_19456__$1;
(statearr_19465_19489[(1)] = (4));

} else {
var statearr_19466_19490 = state_19456__$1;
(statearr_19466_19490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (11))){
var inst_19426 = (state_19456[(10)]);
var inst_19445 = (state_19456[(2)]);
var tmp19464 = inst_19426;
var inst_19426__$1 = tmp19464;
var state_19456__$1 = (function (){var statearr_19467 = state_19456;
(statearr_19467[(10)] = inst_19426__$1);

(statearr_19467[(11)] = inst_19445);

return statearr_19467;
})();
var statearr_19468_19491 = state_19456__$1;
(statearr_19468_19491[(2)] = null);

(statearr_19468_19491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (9))){
var inst_19436 = (state_19456[(7)]);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19456__$1,(11),out,inst_19436);
} else {
if((state_val_19457 === (5))){
var inst_19450 = cljs.core.async.close_BANG_.call(null,out);
var state_19456__$1 = state_19456;
var statearr_19469_19492 = state_19456__$1;
(statearr_19469_19492[(2)] = inst_19450);

(statearr_19469_19492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (10))){
var inst_19448 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19470_19493 = state_19456__$1;
(statearr_19470_19493[(2)] = inst_19448);

(statearr_19470_19493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (8))){
var inst_19436 = (state_19456[(7)]);
var inst_19426 = (state_19456[(10)]);
var inst_19437 = (state_19456[(9)]);
var inst_19435 = (state_19456[(8)]);
var inst_19440 = (function (){var cs = inst_19426;
var vec__19431 = inst_19435;
var v = inst_19436;
var c = inst_19437;
return ((function (cs,vec__19431,v,c,inst_19436,inst_19426,inst_19437,inst_19435,state_val_19457,c__17364__auto___19484,out){
return (function (p1__19421_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19421_SHARP_);
});
;})(cs,vec__19431,v,c,inst_19436,inst_19426,inst_19437,inst_19435,state_val_19457,c__17364__auto___19484,out))
})();
var inst_19441 = cljs.core.filterv.call(null,inst_19440,inst_19426);
var inst_19426__$1 = inst_19441;
var state_19456__$1 = (function (){var statearr_19471 = state_19456;
(statearr_19471[(10)] = inst_19426__$1);

return statearr_19471;
})();
var statearr_19472_19494 = state_19456__$1;
(statearr_19472_19494[(2)] = null);

(statearr_19472_19494[(1)] = (2));


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
});})(c__17364__auto___19484,out))
;
return ((function (switch__17252__auto__,c__17364__auto___19484,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19476[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19476[(1)] = (1));

return statearr_19476;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19456){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19477){if((e19477 instanceof Object)){
var ex__17256__auto__ = e19477;
var statearr_19478_19495 = state_19456;
(statearr_19478_19495[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19496 = state_19456;
state_19456 = G__19496;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19484,out))
})();
var state__17366__auto__ = (function (){var statearr_19479 = f__17365__auto__.call(null);
(statearr_19479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19484);

return statearr_19479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19484,out))
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
var args19497 = [];
var len__7484__auto___19546 = arguments.length;
var i__7485__auto___19547 = (0);
while(true){
if((i__7485__auto___19547 < len__7484__auto___19546)){
args19497.push((arguments[i__7485__auto___19547]));

var G__19548 = (i__7485__auto___19547 + (1));
i__7485__auto___19547 = G__19548;
continue;
} else {
}
break;
}

var G__19499 = args19497.length;
switch (G__19499) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19497.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___19550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19550,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19550,out){
return (function (state_19523){
var state_val_19524 = (state_19523[(1)]);
if((state_val_19524 === (7))){
var inst_19505 = (state_19523[(7)]);
var inst_19505__$1 = (state_19523[(2)]);
var inst_19506 = (inst_19505__$1 == null);
var inst_19507 = cljs.core.not.call(null,inst_19506);
var state_19523__$1 = (function (){var statearr_19525 = state_19523;
(statearr_19525[(7)] = inst_19505__$1);

return statearr_19525;
})();
if(inst_19507){
var statearr_19526_19551 = state_19523__$1;
(statearr_19526_19551[(1)] = (8));

} else {
var statearr_19527_19552 = state_19523__$1;
(statearr_19527_19552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (1))){
var inst_19500 = (0);
var state_19523__$1 = (function (){var statearr_19528 = state_19523;
(statearr_19528[(8)] = inst_19500);

return statearr_19528;
})();
var statearr_19529_19553 = state_19523__$1;
(statearr_19529_19553[(2)] = null);

(statearr_19529_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (4))){
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19523__$1,(7),ch);
} else {
if((state_val_19524 === (6))){
var inst_19518 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19530_19554 = state_19523__$1;
(statearr_19530_19554[(2)] = inst_19518);

(statearr_19530_19554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (3))){
var inst_19520 = (state_19523[(2)]);
var inst_19521 = cljs.core.async.close_BANG_.call(null,out);
var state_19523__$1 = (function (){var statearr_19531 = state_19523;
(statearr_19531[(9)] = inst_19520);

return statearr_19531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19523__$1,inst_19521);
} else {
if((state_val_19524 === (2))){
var inst_19500 = (state_19523[(8)]);
var inst_19502 = (inst_19500 < n);
var state_19523__$1 = state_19523;
if(cljs.core.truth_(inst_19502)){
var statearr_19532_19555 = state_19523__$1;
(statearr_19532_19555[(1)] = (4));

} else {
var statearr_19533_19556 = state_19523__$1;
(statearr_19533_19556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (11))){
var inst_19500 = (state_19523[(8)]);
var inst_19510 = (state_19523[(2)]);
var inst_19511 = (inst_19500 + (1));
var inst_19500__$1 = inst_19511;
var state_19523__$1 = (function (){var statearr_19534 = state_19523;
(statearr_19534[(10)] = inst_19510);

(statearr_19534[(8)] = inst_19500__$1);

return statearr_19534;
})();
var statearr_19535_19557 = state_19523__$1;
(statearr_19535_19557[(2)] = null);

(statearr_19535_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (9))){
var state_19523__$1 = state_19523;
var statearr_19536_19558 = state_19523__$1;
(statearr_19536_19558[(2)] = null);

(statearr_19536_19558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (5))){
var state_19523__$1 = state_19523;
var statearr_19537_19559 = state_19523__$1;
(statearr_19537_19559[(2)] = null);

(statearr_19537_19559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (10))){
var inst_19515 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19538_19560 = state_19523__$1;
(statearr_19538_19560[(2)] = inst_19515);

(statearr_19538_19560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (8))){
var inst_19505 = (state_19523[(7)]);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19523__$1,(11),out,inst_19505);
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
});})(c__17364__auto___19550,out))
;
return ((function (switch__17252__auto__,c__17364__auto___19550,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19542[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19542[(1)] = (1));

return statearr_19542;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19523){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19543){if((e19543 instanceof Object)){
var ex__17256__auto__ = e19543;
var statearr_19544_19561 = state_19523;
(statearr_19544_19561[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_19523;
state_19523 = G__19562;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19550,out))
})();
var state__17366__auto__ = (function (){var statearr_19545 = f__17365__auto__.call(null);
(statearr_19545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19550);

return statearr_19545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19550,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19570 = (function (map_LT_,f,ch,meta19571){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19571 = meta19571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19572,meta19571__$1){
var self__ = this;
var _19572__$1 = this;
return (new cljs.core.async.t_cljs$core$async19570(self__.map_LT_,self__.f,self__.ch,meta19571__$1));
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19572){
var self__ = this;
var _19572__$1 = this;
return self__.meta19571;
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19573 = (function (map_LT_,f,ch,meta19571,_,fn1,meta19574){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19571 = meta19571;
this._ = _;
this.fn1 = fn1;
this.meta19574 = meta19574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19575,meta19574__$1){
var self__ = this;
var _19575__$1 = this;
return (new cljs.core.async.t_cljs$core$async19573(self__.map_LT_,self__.f,self__.ch,self__.meta19571,self__._,self__.fn1,meta19574__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19575){
var self__ = this;
var _19575__$1 = this;
return self__.meta19574;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19563_SHARP_){
return f1.call(null,(((p1__19563_SHARP_ == null))?null:self__.f.call(null,p1__19563_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19571","meta19571",-433260983,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19570","cljs.core.async/t_cljs$core$async19570",-960140835,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19574","meta19574",-1006406726,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19573";

cljs.core.async.t_cljs$core$async19573.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19573");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19573 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19573(map_LT___$1,f__$1,ch__$1,meta19571__$1,___$2,fn1__$1,meta19574){
return (new cljs.core.async.t_cljs$core$async19573(map_LT___$1,f__$1,ch__$1,meta19571__$1,___$2,fn1__$1,meta19574));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19573(self__.map_LT_,self__.f,self__.ch,self__.meta19571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19571","meta19571",-433260983,null)], null);
});

cljs.core.async.t_cljs$core$async19570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19570";

cljs.core.async.t_cljs$core$async19570.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19570");
});

cljs.core.async.__GT_t_cljs$core$async19570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19570(map_LT___$1,f__$1,ch__$1,meta19571){
return (new cljs.core.async.t_cljs$core$async19570(map_LT___$1,f__$1,ch__$1,meta19571));
});

}

return (new cljs.core.async.t_cljs$core$async19570(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19579 = (function (map_GT_,f,ch,meta19580){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19580 = meta19580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19581,meta19580__$1){
var self__ = this;
var _19581__$1 = this;
return (new cljs.core.async.t_cljs$core$async19579(self__.map_GT_,self__.f,self__.ch,meta19580__$1));
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19581){
var self__ = this;
var _19581__$1 = this;
return self__.meta19580;
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19580","meta19580",-1297102113,null)], null);
});

cljs.core.async.t_cljs$core$async19579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19579";

cljs.core.async.t_cljs$core$async19579.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19579");
});

cljs.core.async.__GT_t_cljs$core$async19579 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19579(map_GT___$1,f__$1,ch__$1,meta19580){
return (new cljs.core.async.t_cljs$core$async19579(map_GT___$1,f__$1,ch__$1,meta19580));
});

}

return (new cljs.core.async.t_cljs$core$async19579(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19585 = (function (filter_GT_,p,ch,meta19586){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19586 = meta19586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19587,meta19586__$1){
var self__ = this;
var _19587__$1 = this;
return (new cljs.core.async.t_cljs$core$async19585(self__.filter_GT_,self__.p,self__.ch,meta19586__$1));
});

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19587){
var self__ = this;
var _19587__$1 = this;
return self__.meta19586;
});

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19586","meta19586",2083870598,null)], null);
});

cljs.core.async.t_cljs$core$async19585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19585";

cljs.core.async.t_cljs$core$async19585.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async19585");
});

cljs.core.async.__GT_t_cljs$core$async19585 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19585(filter_GT___$1,p__$1,ch__$1,meta19586){
return (new cljs.core.async.t_cljs$core$async19585(filter_GT___$1,p__$1,ch__$1,meta19586));
});

}

return (new cljs.core.async.t_cljs$core$async19585(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19588 = [];
var len__7484__auto___19632 = arguments.length;
var i__7485__auto___19633 = (0);
while(true){
if((i__7485__auto___19633 < len__7484__auto___19632)){
args19588.push((arguments[i__7485__auto___19633]));

var G__19634 = (i__7485__auto___19633 + (1));
i__7485__auto___19633 = G__19634;
continue;
} else {
}
break;
}

var G__19590 = args19588.length;
switch (G__19590) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19588.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___19636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19636,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19636,out){
return (function (state_19611){
var state_val_19612 = (state_19611[(1)]);
if((state_val_19612 === (7))){
var inst_19607 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
var statearr_19613_19637 = state_19611__$1;
(statearr_19613_19637[(2)] = inst_19607);

(statearr_19613_19637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (1))){
var state_19611__$1 = state_19611;
var statearr_19614_19638 = state_19611__$1;
(statearr_19614_19638[(2)] = null);

(statearr_19614_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (4))){
var inst_19593 = (state_19611[(7)]);
var inst_19593__$1 = (state_19611[(2)]);
var inst_19594 = (inst_19593__$1 == null);
var state_19611__$1 = (function (){var statearr_19615 = state_19611;
(statearr_19615[(7)] = inst_19593__$1);

return statearr_19615;
})();
if(cljs.core.truth_(inst_19594)){
var statearr_19616_19639 = state_19611__$1;
(statearr_19616_19639[(1)] = (5));

} else {
var statearr_19617_19640 = state_19611__$1;
(statearr_19617_19640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (6))){
var inst_19593 = (state_19611[(7)]);
var inst_19598 = p.call(null,inst_19593);
var state_19611__$1 = state_19611;
if(cljs.core.truth_(inst_19598)){
var statearr_19618_19641 = state_19611__$1;
(statearr_19618_19641[(1)] = (8));

} else {
var statearr_19619_19642 = state_19611__$1;
(statearr_19619_19642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (3))){
var inst_19609 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19611__$1,inst_19609);
} else {
if((state_val_19612 === (2))){
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19611__$1,(4),ch);
} else {
if((state_val_19612 === (11))){
var inst_19601 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
var statearr_19620_19643 = state_19611__$1;
(statearr_19620_19643[(2)] = inst_19601);

(statearr_19620_19643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (9))){
var state_19611__$1 = state_19611;
var statearr_19621_19644 = state_19611__$1;
(statearr_19621_19644[(2)] = null);

(statearr_19621_19644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (5))){
var inst_19596 = cljs.core.async.close_BANG_.call(null,out);
var state_19611__$1 = state_19611;
var statearr_19622_19645 = state_19611__$1;
(statearr_19622_19645[(2)] = inst_19596);

(statearr_19622_19645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (10))){
var inst_19604 = (state_19611[(2)]);
var state_19611__$1 = (function (){var statearr_19623 = state_19611;
(statearr_19623[(8)] = inst_19604);

return statearr_19623;
})();
var statearr_19624_19646 = state_19611__$1;
(statearr_19624_19646[(2)] = null);

(statearr_19624_19646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (8))){
var inst_19593 = (state_19611[(7)]);
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19611__$1,(11),out,inst_19593);
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
});})(c__17364__auto___19636,out))
;
return ((function (switch__17252__auto__,c__17364__auto___19636,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19628 = [null,null,null,null,null,null,null,null,null];
(statearr_19628[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19628[(1)] = (1));

return statearr_19628;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19611){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19629){if((e19629 instanceof Object)){
var ex__17256__auto__ = e19629;
var statearr_19630_19647 = state_19611;
(statearr_19630_19647[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19648 = state_19611;
state_19611 = G__19648;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19636,out))
})();
var state__17366__auto__ = (function (){var statearr_19631 = f__17365__auto__.call(null);
(statearr_19631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19636);

return statearr_19631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19636,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19649 = [];
var len__7484__auto___19652 = arguments.length;
var i__7485__auto___19653 = (0);
while(true){
if((i__7485__auto___19653 < len__7484__auto___19652)){
args19649.push((arguments[i__7485__auto___19653]));

var G__19654 = (i__7485__auto___19653 + (1));
i__7485__auto___19653 = G__19654;
continue;
} else {
}
break;
}

var G__19651 = args19649.length;
switch (G__19651) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19649.length)].join('')));

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
var c__17364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto__){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto__){
return (function (state_19821){
var state_val_19822 = (state_19821[(1)]);
if((state_val_19822 === (7))){
var inst_19817 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
var statearr_19823_19864 = state_19821__$1;
(statearr_19823_19864[(2)] = inst_19817);

(statearr_19823_19864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (20))){
var inst_19787 = (state_19821[(7)]);
var inst_19798 = (state_19821[(2)]);
var inst_19799 = cljs.core.next.call(null,inst_19787);
var inst_19773 = inst_19799;
var inst_19774 = null;
var inst_19775 = (0);
var inst_19776 = (0);
var state_19821__$1 = (function (){var statearr_19824 = state_19821;
(statearr_19824[(8)] = inst_19776);

(statearr_19824[(9)] = inst_19773);

(statearr_19824[(10)] = inst_19775);

(statearr_19824[(11)] = inst_19774);

(statearr_19824[(12)] = inst_19798);

return statearr_19824;
})();
var statearr_19825_19865 = state_19821__$1;
(statearr_19825_19865[(2)] = null);

(statearr_19825_19865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (1))){
var state_19821__$1 = state_19821;
var statearr_19826_19866 = state_19821__$1;
(statearr_19826_19866[(2)] = null);

(statearr_19826_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (4))){
var inst_19762 = (state_19821[(13)]);
var inst_19762__$1 = (state_19821[(2)]);
var inst_19763 = (inst_19762__$1 == null);
var state_19821__$1 = (function (){var statearr_19827 = state_19821;
(statearr_19827[(13)] = inst_19762__$1);

return statearr_19827;
})();
if(cljs.core.truth_(inst_19763)){
var statearr_19828_19867 = state_19821__$1;
(statearr_19828_19867[(1)] = (5));

} else {
var statearr_19829_19868 = state_19821__$1;
(statearr_19829_19868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (15))){
var state_19821__$1 = state_19821;
var statearr_19833_19869 = state_19821__$1;
(statearr_19833_19869[(2)] = null);

(statearr_19833_19869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (21))){
var state_19821__$1 = state_19821;
var statearr_19834_19870 = state_19821__$1;
(statearr_19834_19870[(2)] = null);

(statearr_19834_19870[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (13))){
var inst_19776 = (state_19821[(8)]);
var inst_19773 = (state_19821[(9)]);
var inst_19775 = (state_19821[(10)]);
var inst_19774 = (state_19821[(11)]);
var inst_19783 = (state_19821[(2)]);
var inst_19784 = (inst_19776 + (1));
var tmp19830 = inst_19773;
var tmp19831 = inst_19775;
var tmp19832 = inst_19774;
var inst_19773__$1 = tmp19830;
var inst_19774__$1 = tmp19832;
var inst_19775__$1 = tmp19831;
var inst_19776__$1 = inst_19784;
var state_19821__$1 = (function (){var statearr_19835 = state_19821;
(statearr_19835[(8)] = inst_19776__$1);

(statearr_19835[(14)] = inst_19783);

(statearr_19835[(9)] = inst_19773__$1);

(statearr_19835[(10)] = inst_19775__$1);

(statearr_19835[(11)] = inst_19774__$1);

return statearr_19835;
})();
var statearr_19836_19871 = state_19821__$1;
(statearr_19836_19871[(2)] = null);

(statearr_19836_19871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (22))){
var state_19821__$1 = state_19821;
var statearr_19837_19872 = state_19821__$1;
(statearr_19837_19872[(2)] = null);

(statearr_19837_19872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (6))){
var inst_19762 = (state_19821[(13)]);
var inst_19771 = f.call(null,inst_19762);
var inst_19772 = cljs.core.seq.call(null,inst_19771);
var inst_19773 = inst_19772;
var inst_19774 = null;
var inst_19775 = (0);
var inst_19776 = (0);
var state_19821__$1 = (function (){var statearr_19838 = state_19821;
(statearr_19838[(8)] = inst_19776);

(statearr_19838[(9)] = inst_19773);

(statearr_19838[(10)] = inst_19775);

(statearr_19838[(11)] = inst_19774);

return statearr_19838;
})();
var statearr_19839_19873 = state_19821__$1;
(statearr_19839_19873[(2)] = null);

(statearr_19839_19873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (17))){
var inst_19787 = (state_19821[(7)]);
var inst_19791 = cljs.core.chunk_first.call(null,inst_19787);
var inst_19792 = cljs.core.chunk_rest.call(null,inst_19787);
var inst_19793 = cljs.core.count.call(null,inst_19791);
var inst_19773 = inst_19792;
var inst_19774 = inst_19791;
var inst_19775 = inst_19793;
var inst_19776 = (0);
var state_19821__$1 = (function (){var statearr_19840 = state_19821;
(statearr_19840[(8)] = inst_19776);

(statearr_19840[(9)] = inst_19773);

(statearr_19840[(10)] = inst_19775);

(statearr_19840[(11)] = inst_19774);

return statearr_19840;
})();
var statearr_19841_19874 = state_19821__$1;
(statearr_19841_19874[(2)] = null);

(statearr_19841_19874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (3))){
var inst_19819 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19821__$1,inst_19819);
} else {
if((state_val_19822 === (12))){
var inst_19807 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
var statearr_19842_19875 = state_19821__$1;
(statearr_19842_19875[(2)] = inst_19807);

(statearr_19842_19875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (2))){
var state_19821__$1 = state_19821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19821__$1,(4),in$);
} else {
if((state_val_19822 === (23))){
var inst_19815 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
var statearr_19843_19876 = state_19821__$1;
(statearr_19843_19876[(2)] = inst_19815);

(statearr_19843_19876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (19))){
var inst_19802 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
var statearr_19844_19877 = state_19821__$1;
(statearr_19844_19877[(2)] = inst_19802);

(statearr_19844_19877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (11))){
var inst_19787 = (state_19821[(7)]);
var inst_19773 = (state_19821[(9)]);
var inst_19787__$1 = cljs.core.seq.call(null,inst_19773);
var state_19821__$1 = (function (){var statearr_19845 = state_19821;
(statearr_19845[(7)] = inst_19787__$1);

return statearr_19845;
})();
if(inst_19787__$1){
var statearr_19846_19878 = state_19821__$1;
(statearr_19846_19878[(1)] = (14));

} else {
var statearr_19847_19879 = state_19821__$1;
(statearr_19847_19879[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (9))){
var inst_19809 = (state_19821[(2)]);
var inst_19810 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19821__$1 = (function (){var statearr_19848 = state_19821;
(statearr_19848[(15)] = inst_19809);

return statearr_19848;
})();
if(cljs.core.truth_(inst_19810)){
var statearr_19849_19880 = state_19821__$1;
(statearr_19849_19880[(1)] = (21));

} else {
var statearr_19850_19881 = state_19821__$1;
(statearr_19850_19881[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (5))){
var inst_19765 = cljs.core.async.close_BANG_.call(null,out);
var state_19821__$1 = state_19821;
var statearr_19851_19882 = state_19821__$1;
(statearr_19851_19882[(2)] = inst_19765);

(statearr_19851_19882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (14))){
var inst_19787 = (state_19821[(7)]);
var inst_19789 = cljs.core.chunked_seq_QMARK_.call(null,inst_19787);
var state_19821__$1 = state_19821;
if(inst_19789){
var statearr_19852_19883 = state_19821__$1;
(statearr_19852_19883[(1)] = (17));

} else {
var statearr_19853_19884 = state_19821__$1;
(statearr_19853_19884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (16))){
var inst_19805 = (state_19821[(2)]);
var state_19821__$1 = state_19821;
var statearr_19854_19885 = state_19821__$1;
(statearr_19854_19885[(2)] = inst_19805);

(statearr_19854_19885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19822 === (10))){
var inst_19776 = (state_19821[(8)]);
var inst_19774 = (state_19821[(11)]);
var inst_19781 = cljs.core._nth.call(null,inst_19774,inst_19776);
var state_19821__$1 = state_19821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19821__$1,(13),out,inst_19781);
} else {
if((state_val_19822 === (18))){
var inst_19787 = (state_19821[(7)]);
var inst_19796 = cljs.core.first.call(null,inst_19787);
var state_19821__$1 = state_19821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19821__$1,(20),out,inst_19796);
} else {
if((state_val_19822 === (8))){
var inst_19776 = (state_19821[(8)]);
var inst_19775 = (state_19821[(10)]);
var inst_19778 = (inst_19776 < inst_19775);
var inst_19779 = inst_19778;
var state_19821__$1 = state_19821;
if(cljs.core.truth_(inst_19779)){
var statearr_19855_19886 = state_19821__$1;
(statearr_19855_19886[(1)] = (10));

} else {
var statearr_19856_19887 = state_19821__$1;
(statearr_19856_19887[(1)] = (11));

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
});})(c__17364__auto__))
;
return ((function (switch__17252__auto__,c__17364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____0 = (function (){
var statearr_19860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19860[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__);

(statearr_19860[(1)] = (1));

return statearr_19860;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____1 = (function (state_19821){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19861){if((e19861 instanceof Object)){
var ex__17256__auto__ = e19861;
var statearr_19862_19888 = state_19821;
(statearr_19862_19888[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19889 = state_19821;
state_19821 = G__19889;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__ = function(state_19821){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____1.call(this,state_19821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto__))
})();
var state__17366__auto__ = (function (){var statearr_19863 = f__17365__auto__.call(null);
(statearr_19863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto__);

return statearr_19863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto__))
);

return c__17364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19890 = [];
var len__7484__auto___19893 = arguments.length;
var i__7485__auto___19894 = (0);
while(true){
if((i__7485__auto___19894 < len__7484__auto___19893)){
args19890.push((arguments[i__7485__auto___19894]));

var G__19895 = (i__7485__auto___19894 + (1));
i__7485__auto___19894 = G__19895;
continue;
} else {
}
break;
}

var G__19892 = args19890.length;
switch (G__19892) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19890.length)].join('')));

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
var args19897 = [];
var len__7484__auto___19900 = arguments.length;
var i__7485__auto___19901 = (0);
while(true){
if((i__7485__auto___19901 < len__7484__auto___19900)){
args19897.push((arguments[i__7485__auto___19901]));

var G__19902 = (i__7485__auto___19901 + (1));
i__7485__auto___19901 = G__19902;
continue;
} else {
}
break;
}

var G__19899 = args19897.length;
switch (G__19899) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19897.length)].join('')));

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
var args19904 = [];
var len__7484__auto___19955 = arguments.length;
var i__7485__auto___19956 = (0);
while(true){
if((i__7485__auto___19956 < len__7484__auto___19955)){
args19904.push((arguments[i__7485__auto___19956]));

var G__19957 = (i__7485__auto___19956 + (1));
i__7485__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var G__19906 = args19904.length;
switch (G__19906) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19904.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___19959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___19959,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___19959,out){
return (function (state_19930){
var state_val_19931 = (state_19930[(1)]);
if((state_val_19931 === (7))){
var inst_19925 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19932_19960 = state_19930__$1;
(statearr_19932_19960[(2)] = inst_19925);

(statearr_19932_19960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (1))){
var inst_19907 = null;
var state_19930__$1 = (function (){var statearr_19933 = state_19930;
(statearr_19933[(7)] = inst_19907);

return statearr_19933;
})();
var statearr_19934_19961 = state_19930__$1;
(statearr_19934_19961[(2)] = null);

(statearr_19934_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (4))){
var inst_19910 = (state_19930[(8)]);
var inst_19910__$1 = (state_19930[(2)]);
var inst_19911 = (inst_19910__$1 == null);
var inst_19912 = cljs.core.not.call(null,inst_19911);
var state_19930__$1 = (function (){var statearr_19935 = state_19930;
(statearr_19935[(8)] = inst_19910__$1);

return statearr_19935;
})();
if(inst_19912){
var statearr_19936_19962 = state_19930__$1;
(statearr_19936_19962[(1)] = (5));

} else {
var statearr_19937_19963 = state_19930__$1;
(statearr_19937_19963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (6))){
var state_19930__$1 = state_19930;
var statearr_19938_19964 = state_19930__$1;
(statearr_19938_19964[(2)] = null);

(statearr_19938_19964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (3))){
var inst_19927 = (state_19930[(2)]);
var inst_19928 = cljs.core.async.close_BANG_.call(null,out);
var state_19930__$1 = (function (){var statearr_19939 = state_19930;
(statearr_19939[(9)] = inst_19927);

return statearr_19939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19930__$1,inst_19928);
} else {
if((state_val_19931 === (2))){
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19930__$1,(4),ch);
} else {
if((state_val_19931 === (11))){
var inst_19910 = (state_19930[(8)]);
var inst_19919 = (state_19930[(2)]);
var inst_19907 = inst_19910;
var state_19930__$1 = (function (){var statearr_19940 = state_19930;
(statearr_19940[(10)] = inst_19919);

(statearr_19940[(7)] = inst_19907);

return statearr_19940;
})();
var statearr_19941_19965 = state_19930__$1;
(statearr_19941_19965[(2)] = null);

(statearr_19941_19965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (9))){
var inst_19910 = (state_19930[(8)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19930__$1,(11),out,inst_19910);
} else {
if((state_val_19931 === (5))){
var inst_19907 = (state_19930[(7)]);
var inst_19910 = (state_19930[(8)]);
var inst_19914 = cljs.core._EQ_.call(null,inst_19910,inst_19907);
var state_19930__$1 = state_19930;
if(inst_19914){
var statearr_19943_19966 = state_19930__$1;
(statearr_19943_19966[(1)] = (8));

} else {
var statearr_19944_19967 = state_19930__$1;
(statearr_19944_19967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (10))){
var inst_19922 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19945_19968 = state_19930__$1;
(statearr_19945_19968[(2)] = inst_19922);

(statearr_19945_19968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (8))){
var inst_19907 = (state_19930[(7)]);
var tmp19942 = inst_19907;
var inst_19907__$1 = tmp19942;
var state_19930__$1 = (function (){var statearr_19946 = state_19930;
(statearr_19946[(7)] = inst_19907__$1);

return statearr_19946;
})();
var statearr_19947_19969 = state_19930__$1;
(statearr_19947_19969[(2)] = null);

(statearr_19947_19969[(1)] = (2));


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
});})(c__17364__auto___19959,out))
;
return ((function (switch__17252__auto__,c__17364__auto___19959,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_19951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19951[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_19951[(1)] = (1));

return statearr_19951;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_19930){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_19930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e19952){if((e19952 instanceof Object)){
var ex__17256__auto__ = e19952;
var statearr_19953_19970 = state_19930;
(statearr_19953_19970[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19971 = state_19930;
state_19930 = G__19971;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_19930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_19930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___19959,out))
})();
var state__17366__auto__ = (function (){var statearr_19954 = f__17365__auto__.call(null);
(statearr_19954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___19959);

return statearr_19954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___19959,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19972 = [];
var len__7484__auto___20042 = arguments.length;
var i__7485__auto___20043 = (0);
while(true){
if((i__7485__auto___20043 < len__7484__auto___20042)){
args19972.push((arguments[i__7485__auto___20043]));

var G__20044 = (i__7485__auto___20043 + (1));
i__7485__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var G__19974 = args19972.length;
switch (G__19974) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19972.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___20046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___20046,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___20046,out){
return (function (state_20012){
var state_val_20013 = (state_20012[(1)]);
if((state_val_20013 === (7))){
var inst_20008 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20014_20047 = state_20012__$1;
(statearr_20014_20047[(2)] = inst_20008);

(statearr_20014_20047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (1))){
var inst_19975 = (new Array(n));
var inst_19976 = inst_19975;
var inst_19977 = (0);
var state_20012__$1 = (function (){var statearr_20015 = state_20012;
(statearr_20015[(7)] = inst_19976);

(statearr_20015[(8)] = inst_19977);

return statearr_20015;
})();
var statearr_20016_20048 = state_20012__$1;
(statearr_20016_20048[(2)] = null);

(statearr_20016_20048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (4))){
var inst_19980 = (state_20012[(9)]);
var inst_19980__$1 = (state_20012[(2)]);
var inst_19981 = (inst_19980__$1 == null);
var inst_19982 = cljs.core.not.call(null,inst_19981);
var state_20012__$1 = (function (){var statearr_20017 = state_20012;
(statearr_20017[(9)] = inst_19980__$1);

return statearr_20017;
})();
if(inst_19982){
var statearr_20018_20049 = state_20012__$1;
(statearr_20018_20049[(1)] = (5));

} else {
var statearr_20019_20050 = state_20012__$1;
(statearr_20019_20050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (15))){
var inst_20002 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20020_20051 = state_20012__$1;
(statearr_20020_20051[(2)] = inst_20002);

(statearr_20020_20051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (13))){
var state_20012__$1 = state_20012;
var statearr_20021_20052 = state_20012__$1;
(statearr_20021_20052[(2)] = null);

(statearr_20021_20052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (6))){
var inst_19977 = (state_20012[(8)]);
var inst_19998 = (inst_19977 > (0));
var state_20012__$1 = state_20012;
if(cljs.core.truth_(inst_19998)){
var statearr_20022_20053 = state_20012__$1;
(statearr_20022_20053[(1)] = (12));

} else {
var statearr_20023_20054 = state_20012__$1;
(statearr_20023_20054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (3))){
var inst_20010 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20012__$1,inst_20010);
} else {
if((state_val_20013 === (12))){
var inst_19976 = (state_20012[(7)]);
var inst_20000 = cljs.core.vec.call(null,inst_19976);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20012__$1,(15),out,inst_20000);
} else {
if((state_val_20013 === (2))){
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20012__$1,(4),ch);
} else {
if((state_val_20013 === (11))){
var inst_19992 = (state_20012[(2)]);
var inst_19993 = (new Array(n));
var inst_19976 = inst_19993;
var inst_19977 = (0);
var state_20012__$1 = (function (){var statearr_20024 = state_20012;
(statearr_20024[(10)] = inst_19992);

(statearr_20024[(7)] = inst_19976);

(statearr_20024[(8)] = inst_19977);

return statearr_20024;
})();
var statearr_20025_20055 = state_20012__$1;
(statearr_20025_20055[(2)] = null);

(statearr_20025_20055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (9))){
var inst_19976 = (state_20012[(7)]);
var inst_19990 = cljs.core.vec.call(null,inst_19976);
var state_20012__$1 = state_20012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20012__$1,(11),out,inst_19990);
} else {
if((state_val_20013 === (5))){
var inst_19985 = (state_20012[(11)]);
var inst_19980 = (state_20012[(9)]);
var inst_19976 = (state_20012[(7)]);
var inst_19977 = (state_20012[(8)]);
var inst_19984 = (inst_19976[inst_19977] = inst_19980);
var inst_19985__$1 = (inst_19977 + (1));
var inst_19986 = (inst_19985__$1 < n);
var state_20012__$1 = (function (){var statearr_20026 = state_20012;
(statearr_20026[(11)] = inst_19985__$1);

(statearr_20026[(12)] = inst_19984);

return statearr_20026;
})();
if(cljs.core.truth_(inst_19986)){
var statearr_20027_20056 = state_20012__$1;
(statearr_20027_20056[(1)] = (8));

} else {
var statearr_20028_20057 = state_20012__$1;
(statearr_20028_20057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (14))){
var inst_20005 = (state_20012[(2)]);
var inst_20006 = cljs.core.async.close_BANG_.call(null,out);
var state_20012__$1 = (function (){var statearr_20030 = state_20012;
(statearr_20030[(13)] = inst_20005);

return statearr_20030;
})();
var statearr_20031_20058 = state_20012__$1;
(statearr_20031_20058[(2)] = inst_20006);

(statearr_20031_20058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (10))){
var inst_19996 = (state_20012[(2)]);
var state_20012__$1 = state_20012;
var statearr_20032_20059 = state_20012__$1;
(statearr_20032_20059[(2)] = inst_19996);

(statearr_20032_20059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20013 === (8))){
var inst_19985 = (state_20012[(11)]);
var inst_19976 = (state_20012[(7)]);
var tmp20029 = inst_19976;
var inst_19976__$1 = tmp20029;
var inst_19977 = inst_19985;
var state_20012__$1 = (function (){var statearr_20033 = state_20012;
(statearr_20033[(7)] = inst_19976__$1);

(statearr_20033[(8)] = inst_19977);

return statearr_20033;
})();
var statearr_20034_20060 = state_20012__$1;
(statearr_20034_20060[(2)] = null);

(statearr_20034_20060[(1)] = (2));


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
});})(c__17364__auto___20046,out))
;
return ((function (switch__17252__auto__,c__17364__auto___20046,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_20038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20038[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_20038[(1)] = (1));

return statearr_20038;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_20012){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_20012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e20039){if((e20039 instanceof Object)){
var ex__17256__auto__ = e20039;
var statearr_20040_20061 = state_20012;
(statearr_20040_20061[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20062 = state_20012;
state_20012 = G__20062;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_20012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_20012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___20046,out))
})();
var state__17366__auto__ = (function (){var statearr_20041 = f__17365__auto__.call(null);
(statearr_20041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___20046);

return statearr_20041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___20046,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20063 = [];
var len__7484__auto___20137 = arguments.length;
var i__7485__auto___20138 = (0);
while(true){
if((i__7485__auto___20138 < len__7484__auto___20137)){
args20063.push((arguments[i__7485__auto___20138]));

var G__20139 = (i__7485__auto___20138 + (1));
i__7485__auto___20138 = G__20139;
continue;
} else {
}
break;
}

var G__20065 = args20063.length;
switch (G__20065) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20063.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17364__auto___20141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17364__auto___20141,out){
return (function (){
var f__17365__auto__ = (function (){var switch__17252__auto__ = ((function (c__17364__auto___20141,out){
return (function (state_20107){
var state_val_20108 = (state_20107[(1)]);
if((state_val_20108 === (7))){
var inst_20103 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20109_20142 = state_20107__$1;
(statearr_20109_20142[(2)] = inst_20103);

(statearr_20109_20142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (1))){
var inst_20066 = [];
var inst_20067 = inst_20066;
var inst_20068 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20107__$1 = (function (){var statearr_20110 = state_20107;
(statearr_20110[(7)] = inst_20067);

(statearr_20110[(8)] = inst_20068);

return statearr_20110;
})();
var statearr_20111_20143 = state_20107__$1;
(statearr_20111_20143[(2)] = null);

(statearr_20111_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (4))){
var inst_20071 = (state_20107[(9)]);
var inst_20071__$1 = (state_20107[(2)]);
var inst_20072 = (inst_20071__$1 == null);
var inst_20073 = cljs.core.not.call(null,inst_20072);
var state_20107__$1 = (function (){var statearr_20112 = state_20107;
(statearr_20112[(9)] = inst_20071__$1);

return statearr_20112;
})();
if(inst_20073){
var statearr_20113_20144 = state_20107__$1;
(statearr_20113_20144[(1)] = (5));

} else {
var statearr_20114_20145 = state_20107__$1;
(statearr_20114_20145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (15))){
var inst_20097 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20115_20146 = state_20107__$1;
(statearr_20115_20146[(2)] = inst_20097);

(statearr_20115_20146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (13))){
var state_20107__$1 = state_20107;
var statearr_20116_20147 = state_20107__$1;
(statearr_20116_20147[(2)] = null);

(statearr_20116_20147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (6))){
var inst_20067 = (state_20107[(7)]);
var inst_20092 = inst_20067.length;
var inst_20093 = (inst_20092 > (0));
var state_20107__$1 = state_20107;
if(cljs.core.truth_(inst_20093)){
var statearr_20117_20148 = state_20107__$1;
(statearr_20117_20148[(1)] = (12));

} else {
var statearr_20118_20149 = state_20107__$1;
(statearr_20118_20149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (3))){
var inst_20105 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20107__$1,inst_20105);
} else {
if((state_val_20108 === (12))){
var inst_20067 = (state_20107[(7)]);
var inst_20095 = cljs.core.vec.call(null,inst_20067);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20107__$1,(15),out,inst_20095);
} else {
if((state_val_20108 === (2))){
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20107__$1,(4),ch);
} else {
if((state_val_20108 === (11))){
var inst_20071 = (state_20107[(9)]);
var inst_20075 = (state_20107[(10)]);
var inst_20085 = (state_20107[(2)]);
var inst_20086 = [];
var inst_20087 = inst_20086.push(inst_20071);
var inst_20067 = inst_20086;
var inst_20068 = inst_20075;
var state_20107__$1 = (function (){var statearr_20119 = state_20107;
(statearr_20119[(7)] = inst_20067);

(statearr_20119[(8)] = inst_20068);

(statearr_20119[(11)] = inst_20087);

(statearr_20119[(12)] = inst_20085);

return statearr_20119;
})();
var statearr_20120_20150 = state_20107__$1;
(statearr_20120_20150[(2)] = null);

(statearr_20120_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (9))){
var inst_20067 = (state_20107[(7)]);
var inst_20083 = cljs.core.vec.call(null,inst_20067);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20107__$1,(11),out,inst_20083);
} else {
if((state_val_20108 === (5))){
var inst_20071 = (state_20107[(9)]);
var inst_20068 = (state_20107[(8)]);
var inst_20075 = (state_20107[(10)]);
var inst_20075__$1 = f.call(null,inst_20071);
var inst_20076 = cljs.core._EQ_.call(null,inst_20075__$1,inst_20068);
var inst_20077 = cljs.core.keyword_identical_QMARK_.call(null,inst_20068,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20078 = (inst_20076) || (inst_20077);
var state_20107__$1 = (function (){var statearr_20121 = state_20107;
(statearr_20121[(10)] = inst_20075__$1);

return statearr_20121;
})();
if(cljs.core.truth_(inst_20078)){
var statearr_20122_20151 = state_20107__$1;
(statearr_20122_20151[(1)] = (8));

} else {
var statearr_20123_20152 = state_20107__$1;
(statearr_20123_20152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (14))){
var inst_20100 = (state_20107[(2)]);
var inst_20101 = cljs.core.async.close_BANG_.call(null,out);
var state_20107__$1 = (function (){var statearr_20125 = state_20107;
(statearr_20125[(13)] = inst_20100);

return statearr_20125;
})();
var statearr_20126_20153 = state_20107__$1;
(statearr_20126_20153[(2)] = inst_20101);

(statearr_20126_20153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (10))){
var inst_20090 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20127_20154 = state_20107__$1;
(statearr_20127_20154[(2)] = inst_20090);

(statearr_20127_20154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (8))){
var inst_20067 = (state_20107[(7)]);
var inst_20071 = (state_20107[(9)]);
var inst_20075 = (state_20107[(10)]);
var inst_20080 = inst_20067.push(inst_20071);
var tmp20124 = inst_20067;
var inst_20067__$1 = tmp20124;
var inst_20068 = inst_20075;
var state_20107__$1 = (function (){var statearr_20128 = state_20107;
(statearr_20128[(7)] = inst_20067__$1);

(statearr_20128[(8)] = inst_20068);

(statearr_20128[(14)] = inst_20080);

return statearr_20128;
})();
var statearr_20129_20155 = state_20107__$1;
(statearr_20129_20155[(2)] = null);

(statearr_20129_20155[(1)] = (2));


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
});})(c__17364__auto___20141,out))
;
return ((function (switch__17252__auto__,c__17364__auto___20141,out){
return (function() {
var cljs$core$async$state_machine__17253__auto__ = null;
var cljs$core$async$state_machine__17253__auto____0 = (function (){
var statearr_20133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20133[(0)] = cljs$core$async$state_machine__17253__auto__);

(statearr_20133[(1)] = (1));

return statearr_20133;
});
var cljs$core$async$state_machine__17253__auto____1 = (function (state_20107){
while(true){
var ret_value__17254__auto__ = (function (){try{while(true){
var result__17255__auto__ = switch__17252__auto__.call(null,state_20107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17255__auto__;
}
break;
}
}catch (e20134){if((e20134 instanceof Object)){
var ex__17256__auto__ = e20134;
var statearr_20135_20156 = state_20107;
(statearr_20135_20156[(5)] = ex__17256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20157 = state_20107;
state_20107 = G__20157;
continue;
} else {
return ret_value__17254__auto__;
}
break;
}
});
cljs$core$async$state_machine__17253__auto__ = function(state_20107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17253__auto____1.call(this,state_20107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17253__auto____0;
cljs$core$async$state_machine__17253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17253__auto____1;
return cljs$core$async$state_machine__17253__auto__;
})()
;})(switch__17252__auto__,c__17364__auto___20141,out))
})();
var state__17366__auto__ = (function (){var statearr_20136 = f__17365__auto__.call(null);
(statearr_20136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17364__auto___20141);

return statearr_20136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17366__auto__);
});})(c__17364__auto___20141,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485243263624
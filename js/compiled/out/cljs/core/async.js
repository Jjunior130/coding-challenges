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
var args133727 = [];
var len__26121__auto___133733 = arguments.length;
var i__26122__auto___133734 = (0);
while(true){
if((i__26122__auto___133734 < len__26121__auto___133733)){
args133727.push((arguments[i__26122__auto___133734]));

var G__133735 = (i__26122__auto___133734 + (1));
i__26122__auto___133734 = G__133735;
continue;
} else {
}
break;
}

var G__133729 = args133727.length;
switch (G__133729) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133727.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async133730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async133730 = (function (f,blockable,meta133731){
this.f = f;
this.blockable = blockable;
this.meta133731 = meta133731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133732,meta133731__$1){
var self__ = this;
var _133732__$1 = this;
return (new cljs.core.async.t_cljs$core$async133730(self__.f,self__.blockable,meta133731__$1));
});

cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133732){
var self__ = this;
var _133732__$1 = this;
return self__.meta133731;
});

cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async133730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async133730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta133731","meta133731",448003984,null)], null);
});

cljs.core.async.t_cljs$core$async133730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async133730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async133730";

cljs.core.async.t_cljs$core$async133730.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async133730");
});

cljs.core.async.__GT_t_cljs$core$async133730 = (function cljs$core$async$__GT_t_cljs$core$async133730(f__$1,blockable__$1,meta133731){
return (new cljs.core.async.t_cljs$core$async133730(f__$1,blockable__$1,meta133731));
});

}

return (new cljs.core.async.t_cljs$core$async133730(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args133739 = [];
var len__26121__auto___133742 = arguments.length;
var i__26122__auto___133743 = (0);
while(true){
if((i__26122__auto___133743 < len__26121__auto___133742)){
args133739.push((arguments[i__26122__auto___133743]));

var G__133744 = (i__26122__auto___133743 + (1));
i__26122__auto___133743 = G__133744;
continue;
} else {
}
break;
}

var G__133741 = args133739.length;
switch (G__133741) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133739.length)].join('')));

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
var args133746 = [];
var len__26121__auto___133749 = arguments.length;
var i__26122__auto___133750 = (0);
while(true){
if((i__26122__auto___133750 < len__26121__auto___133749)){
args133746.push((arguments[i__26122__auto___133750]));

var G__133751 = (i__26122__auto___133750 + (1));
i__26122__auto___133750 = G__133751;
continue;
} else {
}
break;
}

var G__133748 = args133746.length;
switch (G__133748) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133746.length)].join('')));

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
var args133753 = [];
var len__26121__auto___133756 = arguments.length;
var i__26122__auto___133757 = (0);
while(true){
if((i__26122__auto___133757 < len__26121__auto___133756)){
args133753.push((arguments[i__26122__auto___133757]));

var G__133758 = (i__26122__auto___133757 + (1));
i__26122__auto___133757 = G__133758;
continue;
} else {
}
break;
}

var G__133755 = args133753.length;
switch (G__133755) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133753.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_133760 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_133760);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_133760,ret){
return (function (){
return fn1.call(null,val_133760);
});})(val_133760,ret))
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
var args133761 = [];
var len__26121__auto___133764 = arguments.length;
var i__26122__auto___133765 = (0);
while(true){
if((i__26122__auto___133765 < len__26121__auto___133764)){
args133761.push((arguments[i__26122__auto___133765]));

var G__133766 = (i__26122__auto___133765 + (1));
i__26122__auto___133765 = G__133766;
continue;
} else {
}
break;
}

var G__133763 = args133761.length;
switch (G__133763) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133761.length)].join('')));

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
var n__25961__auto___133768 = n;
var x_133769 = (0);
while(true){
if((x_133769 < n__25961__auto___133768)){
(a[x_133769] = (0));

var G__133770 = (x_133769 + (1));
x_133769 = G__133770;
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

var G__133771 = (i + (1));
i = G__133771;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async133775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async133775 = (function (alt_flag,flag,meta133776){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta133776 = meta133776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_133777,meta133776__$1){
var self__ = this;
var _133777__$1 = this;
return (new cljs.core.async.t_cljs$core$async133775(self__.alt_flag,self__.flag,meta133776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_133777){
var self__ = this;
var _133777__$1 = this;
return self__.meta133776;
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta133776","meta133776",-104996458,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async133775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async133775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async133775";

cljs.core.async.t_cljs$core$async133775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async133775");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async133775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async133775(alt_flag__$1,flag__$1,meta133776){
return (new cljs.core.async.t_cljs$core$async133775(alt_flag__$1,flag__$1,meta133776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async133775(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async133781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async133781 = (function (alt_handler,flag,cb,meta133782){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta133782 = meta133782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133783,meta133782__$1){
var self__ = this;
var _133783__$1 = this;
return (new cljs.core.async.t_cljs$core$async133781(self__.alt_handler,self__.flag,self__.cb,meta133782__$1));
});

cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133783){
var self__ = this;
var _133783__$1 = this;
return self__.meta133782;
});

cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async133781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async133781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta133782","meta133782",-1083957872,null)], null);
});

cljs.core.async.t_cljs$core$async133781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async133781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async133781";

cljs.core.async.t_cljs$core$async133781.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async133781");
});

cljs.core.async.__GT_t_cljs$core$async133781 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async133781(alt_handler__$1,flag__$1,cb__$1,meta133782){
return (new cljs.core.async.t_cljs$core$async133781(alt_handler__$1,flag__$1,cb__$1,meta133782));
});

}

return (new cljs.core.async.t_cljs$core$async133781(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__133784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133784_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__133785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133785_SHARP_,port], null));
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
var G__133786 = (i + (1));
i = G__133786;
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
var len__26121__auto___133792 = arguments.length;
var i__26122__auto___133793 = (0);
while(true){
if((i__26122__auto___133793 < len__26121__auto___133792)){
args__26128__auto__.push((arguments[i__26122__auto___133793]));

var G__133794 = (i__26122__auto___133793 + (1));
i__26122__auto___133793 = G__133794;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__133789){
var map__133790 = p__133789;
var map__133790__$1 = ((((!((map__133790 == null)))?((((map__133790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133790):map__133790);
var opts = map__133790__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq133787){
var G__133788 = cljs.core.first.call(null,seq133787);
var seq133787__$1 = cljs.core.next.call(null,seq133787);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__133788,seq133787__$1);
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
var args133795 = [];
var len__26121__auto___133845 = arguments.length;
var i__26122__auto___133846 = (0);
while(true){
if((i__26122__auto___133846 < len__26121__auto___133845)){
args133795.push((arguments[i__26122__auto___133846]));

var G__133847 = (i__26122__auto___133846 + (1));
i__26122__auto___133846 = G__133847;
continue;
} else {
}
break;
}

var G__133797 = args133795.length;
switch (G__133797) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133795.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33352__auto___133849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___133849){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___133849){
return (function (state_133821){
var state_val_133822 = (state_133821[(1)]);
if((state_val_133822 === (7))){
var inst_133817 = (state_133821[(2)]);
var state_133821__$1 = state_133821;
var statearr_133823_133850 = state_133821__$1;
(statearr_133823_133850[(2)] = inst_133817);

(statearr_133823_133850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (1))){
var state_133821__$1 = state_133821;
var statearr_133824_133851 = state_133821__$1;
(statearr_133824_133851[(2)] = null);

(statearr_133824_133851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (4))){
var inst_133800 = (state_133821[(7)]);
var inst_133800__$1 = (state_133821[(2)]);
var inst_133801 = (inst_133800__$1 == null);
var state_133821__$1 = (function (){var statearr_133825 = state_133821;
(statearr_133825[(7)] = inst_133800__$1);

return statearr_133825;
})();
if(cljs.core.truth_(inst_133801)){
var statearr_133826_133852 = state_133821__$1;
(statearr_133826_133852[(1)] = (5));

} else {
var statearr_133827_133853 = state_133821__$1;
(statearr_133827_133853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (13))){
var state_133821__$1 = state_133821;
var statearr_133828_133854 = state_133821__$1;
(statearr_133828_133854[(2)] = null);

(statearr_133828_133854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (6))){
var inst_133800 = (state_133821[(7)]);
var state_133821__$1 = state_133821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133821__$1,(11),to,inst_133800);
} else {
if((state_val_133822 === (3))){
var inst_133819 = (state_133821[(2)]);
var state_133821__$1 = state_133821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133821__$1,inst_133819);
} else {
if((state_val_133822 === (12))){
var state_133821__$1 = state_133821;
var statearr_133829_133855 = state_133821__$1;
(statearr_133829_133855[(2)] = null);

(statearr_133829_133855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (2))){
var state_133821__$1 = state_133821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133821__$1,(4),from);
} else {
if((state_val_133822 === (11))){
var inst_133810 = (state_133821[(2)]);
var state_133821__$1 = state_133821;
if(cljs.core.truth_(inst_133810)){
var statearr_133830_133856 = state_133821__$1;
(statearr_133830_133856[(1)] = (12));

} else {
var statearr_133831_133857 = state_133821__$1;
(statearr_133831_133857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (9))){
var state_133821__$1 = state_133821;
var statearr_133832_133858 = state_133821__$1;
(statearr_133832_133858[(2)] = null);

(statearr_133832_133858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (5))){
var state_133821__$1 = state_133821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_133833_133859 = state_133821__$1;
(statearr_133833_133859[(1)] = (8));

} else {
var statearr_133834_133860 = state_133821__$1;
(statearr_133834_133860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (14))){
var inst_133815 = (state_133821[(2)]);
var state_133821__$1 = state_133821;
var statearr_133835_133861 = state_133821__$1;
(statearr_133835_133861[(2)] = inst_133815);

(statearr_133835_133861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (10))){
var inst_133807 = (state_133821[(2)]);
var state_133821__$1 = state_133821;
var statearr_133836_133862 = state_133821__$1;
(statearr_133836_133862[(2)] = inst_133807);

(statearr_133836_133862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133822 === (8))){
var inst_133804 = cljs.core.async.close_BANG_.call(null,to);
var state_133821__$1 = state_133821;
var statearr_133837_133863 = state_133821__$1;
(statearr_133837_133863[(2)] = inst_133804);

(statearr_133837_133863[(1)] = (10));


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
});})(c__33352__auto___133849))
;
return ((function (switch__33287__auto__,c__33352__auto___133849){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_133841 = [null,null,null,null,null,null,null,null];
(statearr_133841[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_133841[(1)] = (1));

return statearr_133841;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_133821){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_133821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e133842){if((e133842 instanceof Object)){
var ex__33291__auto__ = e133842;
var statearr_133843_133864 = state_133821;
(statearr_133843_133864[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133865 = state_133821;
state_133821 = G__133865;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_133821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_133821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___133849))
})();
var state__33354__auto__ = (function (){var statearr_133844 = f__33353__auto__.call(null);
(statearr_133844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___133849);

return statearr_133844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___133849))
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
return (function (p__134053){
var vec__134054 = p__134053;
var v = cljs.core.nth.call(null,vec__134054,(0),null);
var p = cljs.core.nth.call(null,vec__134054,(1),null);
var job = vec__134054;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33352__auto___134240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results){
return (function (state_134061){
var state_val_134062 = (state_134061[(1)]);
if((state_val_134062 === (1))){
var state_134061__$1 = state_134061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134061__$1,(2),res,v);
} else {
if((state_val_134062 === (2))){
var inst_134058 = (state_134061[(2)]);
var inst_134059 = cljs.core.async.close_BANG_.call(null,res);
var state_134061__$1 = (function (){var statearr_134063 = state_134061;
(statearr_134063[(7)] = inst_134058);

return statearr_134063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134061__$1,inst_134059);
} else {
return null;
}
}
});})(c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results))
;
return ((function (switch__33287__auto__,c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_134067 = [null,null,null,null,null,null,null,null];
(statearr_134067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_134067[(1)] = (1));

return statearr_134067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_134061){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134068){if((e134068 instanceof Object)){
var ex__33291__auto__ = e134068;
var statearr_134069_134241 = state_134061;
(statearr_134069_134241[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134242 = state_134061;
state_134061 = G__134242;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_134061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_134061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results))
})();
var state__33354__auto__ = (function (){var statearr_134070 = f__33353__auto__.call(null);
(statearr_134070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___134240);

return statearr_134070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___134240,res,vec__134054,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__134071){
var vec__134072 = p__134071;
var v = cljs.core.nth.call(null,vec__134072,(0),null);
var p = cljs.core.nth.call(null,vec__134072,(1),null);
var job = vec__134072;
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
var n__25961__auto___134243 = n;
var __134244 = (0);
while(true){
if((__134244 < n__25961__auto___134243)){
var G__134075_134245 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__134075_134245) {
case "compute":
var c__33352__auto___134247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__134244,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (__134244,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function (state_134088){
var state_val_134089 = (state_134088[(1)]);
if((state_val_134089 === (1))){
var state_134088__$1 = state_134088;
var statearr_134090_134248 = state_134088__$1;
(statearr_134090_134248[(2)] = null);

(statearr_134090_134248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134089 === (2))){
var state_134088__$1 = state_134088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134088__$1,(4),jobs);
} else {
if((state_val_134089 === (3))){
var inst_134086 = (state_134088[(2)]);
var state_134088__$1 = state_134088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134088__$1,inst_134086);
} else {
if((state_val_134089 === (4))){
var inst_134078 = (state_134088[(2)]);
var inst_134079 = process.call(null,inst_134078);
var state_134088__$1 = state_134088;
if(cljs.core.truth_(inst_134079)){
var statearr_134091_134249 = state_134088__$1;
(statearr_134091_134249[(1)] = (5));

} else {
var statearr_134092_134250 = state_134088__$1;
(statearr_134092_134250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134089 === (5))){
var state_134088__$1 = state_134088;
var statearr_134093_134251 = state_134088__$1;
(statearr_134093_134251[(2)] = null);

(statearr_134093_134251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134089 === (6))){
var state_134088__$1 = state_134088;
var statearr_134094_134252 = state_134088__$1;
(statearr_134094_134252[(2)] = null);

(statearr_134094_134252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134089 === (7))){
var inst_134084 = (state_134088[(2)]);
var state_134088__$1 = state_134088;
var statearr_134095_134253 = state_134088__$1;
(statearr_134095_134253[(2)] = inst_134084);

(statearr_134095_134253[(1)] = (3));


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
});})(__134244,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
;
return ((function (__134244,switch__33287__auto__,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_134099 = [null,null,null,null,null,null,null];
(statearr_134099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_134099[(1)] = (1));

return statearr_134099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_134088){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134100){if((e134100 instanceof Object)){
var ex__33291__auto__ = e134100;
var statearr_134101_134254 = state_134088;
(statearr_134101_134254[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134255 = state_134088;
state_134088 = G__134255;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_134088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_134088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(__134244,switch__33287__auto__,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_134102 = f__33353__auto__.call(null);
(statearr_134102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___134247);

return statearr_134102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(__134244,c__33352__auto___134247,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
);


break;
case "async":
var c__33352__auto___134256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__134244,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (__134244,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function (state_134115){
var state_val_134116 = (state_134115[(1)]);
if((state_val_134116 === (1))){
var state_134115__$1 = state_134115;
var statearr_134117_134257 = state_134115__$1;
(statearr_134117_134257[(2)] = null);

(statearr_134117_134257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134116 === (2))){
var state_134115__$1 = state_134115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134115__$1,(4),jobs);
} else {
if((state_val_134116 === (3))){
var inst_134113 = (state_134115[(2)]);
var state_134115__$1 = state_134115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134115__$1,inst_134113);
} else {
if((state_val_134116 === (4))){
var inst_134105 = (state_134115[(2)]);
var inst_134106 = async.call(null,inst_134105);
var state_134115__$1 = state_134115;
if(cljs.core.truth_(inst_134106)){
var statearr_134118_134258 = state_134115__$1;
(statearr_134118_134258[(1)] = (5));

} else {
var statearr_134119_134259 = state_134115__$1;
(statearr_134119_134259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134116 === (5))){
var state_134115__$1 = state_134115;
var statearr_134120_134260 = state_134115__$1;
(statearr_134120_134260[(2)] = null);

(statearr_134120_134260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134116 === (6))){
var state_134115__$1 = state_134115;
var statearr_134121_134261 = state_134115__$1;
(statearr_134121_134261[(2)] = null);

(statearr_134121_134261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134116 === (7))){
var inst_134111 = (state_134115[(2)]);
var state_134115__$1 = state_134115;
var statearr_134122_134262 = state_134115__$1;
(statearr_134122_134262[(2)] = inst_134111);

(statearr_134122_134262[(1)] = (3));


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
});})(__134244,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
;
return ((function (__134244,switch__33287__auto__,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_134126 = [null,null,null,null,null,null,null];
(statearr_134126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_134126[(1)] = (1));

return statearr_134126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_134115){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134127){if((e134127 instanceof Object)){
var ex__33291__auto__ = e134127;
var statearr_134128_134263 = state_134115;
(statearr_134128_134263[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134264 = state_134115;
state_134115 = G__134264;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_134115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_134115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(__134244,switch__33287__auto__,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_134129 = f__33353__auto__.call(null);
(statearr_134129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___134256);

return statearr_134129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(__134244,c__33352__auto___134256,G__134075_134245,n__25961__auto___134243,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__134265 = (__134244 + (1));
__134244 = G__134265;
continue;
} else {
}
break;
}

var c__33352__auto___134266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___134266,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___134266,jobs,results,process,async){
return (function (state_134151){
var state_val_134152 = (state_134151[(1)]);
if((state_val_134152 === (1))){
var state_134151__$1 = state_134151;
var statearr_134153_134267 = state_134151__$1;
(statearr_134153_134267[(2)] = null);

(statearr_134153_134267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134152 === (2))){
var state_134151__$1 = state_134151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134151__$1,(4),from);
} else {
if((state_val_134152 === (3))){
var inst_134149 = (state_134151[(2)]);
var state_134151__$1 = state_134151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134151__$1,inst_134149);
} else {
if((state_val_134152 === (4))){
var inst_134132 = (state_134151[(7)]);
var inst_134132__$1 = (state_134151[(2)]);
var inst_134133 = (inst_134132__$1 == null);
var state_134151__$1 = (function (){var statearr_134154 = state_134151;
(statearr_134154[(7)] = inst_134132__$1);

return statearr_134154;
})();
if(cljs.core.truth_(inst_134133)){
var statearr_134155_134268 = state_134151__$1;
(statearr_134155_134268[(1)] = (5));

} else {
var statearr_134156_134269 = state_134151__$1;
(statearr_134156_134269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134152 === (5))){
var inst_134135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_134151__$1 = state_134151;
var statearr_134157_134270 = state_134151__$1;
(statearr_134157_134270[(2)] = inst_134135);

(statearr_134157_134270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134152 === (6))){
var inst_134132 = (state_134151[(7)]);
var inst_134137 = (state_134151[(8)]);
var inst_134137__$1 = cljs.core.async.chan.call(null,(1));
var inst_134138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_134139 = [inst_134132,inst_134137__$1];
var inst_134140 = (new cljs.core.PersistentVector(null,2,(5),inst_134138,inst_134139,null));
var state_134151__$1 = (function (){var statearr_134158 = state_134151;
(statearr_134158[(8)] = inst_134137__$1);

return statearr_134158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134151__$1,(8),jobs,inst_134140);
} else {
if((state_val_134152 === (7))){
var inst_134147 = (state_134151[(2)]);
var state_134151__$1 = state_134151;
var statearr_134159_134271 = state_134151__$1;
(statearr_134159_134271[(2)] = inst_134147);

(statearr_134159_134271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134152 === (8))){
var inst_134137 = (state_134151[(8)]);
var inst_134142 = (state_134151[(2)]);
var state_134151__$1 = (function (){var statearr_134160 = state_134151;
(statearr_134160[(9)] = inst_134142);

return statearr_134160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134151__$1,(9),results,inst_134137);
} else {
if((state_val_134152 === (9))){
var inst_134144 = (state_134151[(2)]);
var state_134151__$1 = (function (){var statearr_134161 = state_134151;
(statearr_134161[(10)] = inst_134144);

return statearr_134161;
})();
var statearr_134162_134272 = state_134151__$1;
(statearr_134162_134272[(2)] = null);

(statearr_134162_134272[(1)] = (2));


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
});})(c__33352__auto___134266,jobs,results,process,async))
;
return ((function (switch__33287__auto__,c__33352__auto___134266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_134166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_134166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_134166[(1)] = (1));

return statearr_134166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_134151){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134167){if((e134167 instanceof Object)){
var ex__33291__auto__ = e134167;
var statearr_134168_134273 = state_134151;
(statearr_134168_134273[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134274 = state_134151;
state_134151 = G__134274;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_134151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_134151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___134266,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_134169 = f__33353__auto__.call(null);
(statearr_134169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___134266);

return statearr_134169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___134266,jobs,results,process,async))
);


var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,jobs,results,process,async){
return (function (state_134207){
var state_val_134208 = (state_134207[(1)]);
if((state_val_134208 === (7))){
var inst_134203 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
var statearr_134209_134275 = state_134207__$1;
(statearr_134209_134275[(2)] = inst_134203);

(statearr_134209_134275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (20))){
var state_134207__$1 = state_134207;
var statearr_134210_134276 = state_134207__$1;
(statearr_134210_134276[(2)] = null);

(statearr_134210_134276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (1))){
var state_134207__$1 = state_134207;
var statearr_134211_134277 = state_134207__$1;
(statearr_134211_134277[(2)] = null);

(statearr_134211_134277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (4))){
var inst_134172 = (state_134207[(7)]);
var inst_134172__$1 = (state_134207[(2)]);
var inst_134173 = (inst_134172__$1 == null);
var state_134207__$1 = (function (){var statearr_134212 = state_134207;
(statearr_134212[(7)] = inst_134172__$1);

return statearr_134212;
})();
if(cljs.core.truth_(inst_134173)){
var statearr_134213_134278 = state_134207__$1;
(statearr_134213_134278[(1)] = (5));

} else {
var statearr_134214_134279 = state_134207__$1;
(statearr_134214_134279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (15))){
var inst_134185 = (state_134207[(8)]);
var state_134207__$1 = state_134207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134207__$1,(18),to,inst_134185);
} else {
if((state_val_134208 === (21))){
var inst_134198 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
var statearr_134215_134280 = state_134207__$1;
(statearr_134215_134280[(2)] = inst_134198);

(statearr_134215_134280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (13))){
var inst_134200 = (state_134207[(2)]);
var state_134207__$1 = (function (){var statearr_134216 = state_134207;
(statearr_134216[(9)] = inst_134200);

return statearr_134216;
})();
var statearr_134217_134281 = state_134207__$1;
(statearr_134217_134281[(2)] = null);

(statearr_134217_134281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (6))){
var inst_134172 = (state_134207[(7)]);
var state_134207__$1 = state_134207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134207__$1,(11),inst_134172);
} else {
if((state_val_134208 === (17))){
var inst_134193 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
if(cljs.core.truth_(inst_134193)){
var statearr_134218_134282 = state_134207__$1;
(statearr_134218_134282[(1)] = (19));

} else {
var statearr_134219_134283 = state_134207__$1;
(statearr_134219_134283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (3))){
var inst_134205 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134207__$1,inst_134205);
} else {
if((state_val_134208 === (12))){
var inst_134182 = (state_134207[(10)]);
var state_134207__$1 = state_134207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134207__$1,(14),inst_134182);
} else {
if((state_val_134208 === (2))){
var state_134207__$1 = state_134207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134207__$1,(4),results);
} else {
if((state_val_134208 === (19))){
var state_134207__$1 = state_134207;
var statearr_134220_134284 = state_134207__$1;
(statearr_134220_134284[(2)] = null);

(statearr_134220_134284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (11))){
var inst_134182 = (state_134207[(2)]);
var state_134207__$1 = (function (){var statearr_134221 = state_134207;
(statearr_134221[(10)] = inst_134182);

return statearr_134221;
})();
var statearr_134222_134285 = state_134207__$1;
(statearr_134222_134285[(2)] = null);

(statearr_134222_134285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (9))){
var state_134207__$1 = state_134207;
var statearr_134223_134286 = state_134207__$1;
(statearr_134223_134286[(2)] = null);

(statearr_134223_134286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (5))){
var state_134207__$1 = state_134207;
if(cljs.core.truth_(close_QMARK_)){
var statearr_134224_134287 = state_134207__$1;
(statearr_134224_134287[(1)] = (8));

} else {
var statearr_134225_134288 = state_134207__$1;
(statearr_134225_134288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (14))){
var inst_134185 = (state_134207[(8)]);
var inst_134187 = (state_134207[(11)]);
var inst_134185__$1 = (state_134207[(2)]);
var inst_134186 = (inst_134185__$1 == null);
var inst_134187__$1 = cljs.core.not.call(null,inst_134186);
var state_134207__$1 = (function (){var statearr_134226 = state_134207;
(statearr_134226[(8)] = inst_134185__$1);

(statearr_134226[(11)] = inst_134187__$1);

return statearr_134226;
})();
if(inst_134187__$1){
var statearr_134227_134289 = state_134207__$1;
(statearr_134227_134289[(1)] = (15));

} else {
var statearr_134228_134290 = state_134207__$1;
(statearr_134228_134290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (16))){
var inst_134187 = (state_134207[(11)]);
var state_134207__$1 = state_134207;
var statearr_134229_134291 = state_134207__$1;
(statearr_134229_134291[(2)] = inst_134187);

(statearr_134229_134291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (10))){
var inst_134179 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
var statearr_134230_134292 = state_134207__$1;
(statearr_134230_134292[(2)] = inst_134179);

(statearr_134230_134292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (18))){
var inst_134190 = (state_134207[(2)]);
var state_134207__$1 = state_134207;
var statearr_134231_134293 = state_134207__$1;
(statearr_134231_134293[(2)] = inst_134190);

(statearr_134231_134293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134208 === (8))){
var inst_134176 = cljs.core.async.close_BANG_.call(null,to);
var state_134207__$1 = state_134207;
var statearr_134232_134294 = state_134207__$1;
(statearr_134232_134294[(2)] = inst_134176);

(statearr_134232_134294[(1)] = (10));


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
});})(c__33352__auto__,jobs,results,process,async))
;
return ((function (switch__33287__auto__,c__33352__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_134236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_134236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_134236[(1)] = (1));

return statearr_134236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_134207){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134237){if((e134237 instanceof Object)){
var ex__33291__auto__ = e134237;
var statearr_134238_134295 = state_134207;
(statearr_134238_134295[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134296 = state_134207;
state_134207 = G__134296;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_134207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_134207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_134239 = f__33353__auto__.call(null);
(statearr_134239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_134239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,jobs,results,process,async))
);

return c__33352__auto__;
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
var args134297 = [];
var len__26121__auto___134300 = arguments.length;
var i__26122__auto___134301 = (0);
while(true){
if((i__26122__auto___134301 < len__26121__auto___134300)){
args134297.push((arguments[i__26122__auto___134301]));

var G__134302 = (i__26122__auto___134301 + (1));
i__26122__auto___134301 = G__134302;
continue;
} else {
}
break;
}

var G__134299 = args134297.length;
switch (G__134299) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args134297.length)].join('')));

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
var args134304 = [];
var len__26121__auto___134307 = arguments.length;
var i__26122__auto___134308 = (0);
while(true){
if((i__26122__auto___134308 < len__26121__auto___134307)){
args134304.push((arguments[i__26122__auto___134308]));

var G__134309 = (i__26122__auto___134308 + (1));
i__26122__auto___134308 = G__134309;
continue;
} else {
}
break;
}

var G__134306 = args134304.length;
switch (G__134306) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args134304.length)].join('')));

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
var args134311 = [];
var len__26121__auto___134364 = arguments.length;
var i__26122__auto___134365 = (0);
while(true){
if((i__26122__auto___134365 < len__26121__auto___134364)){
args134311.push((arguments[i__26122__auto___134365]));

var G__134366 = (i__26122__auto___134365 + (1));
i__26122__auto___134365 = G__134366;
continue;
} else {
}
break;
}

var G__134313 = args134311.length;
switch (G__134313) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args134311.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33352__auto___134368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___134368,tc,fc){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___134368,tc,fc){
return (function (state_134339){
var state_val_134340 = (state_134339[(1)]);
if((state_val_134340 === (7))){
var inst_134335 = (state_134339[(2)]);
var state_134339__$1 = state_134339;
var statearr_134341_134369 = state_134339__$1;
(statearr_134341_134369[(2)] = inst_134335);

(statearr_134341_134369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (1))){
var state_134339__$1 = state_134339;
var statearr_134342_134370 = state_134339__$1;
(statearr_134342_134370[(2)] = null);

(statearr_134342_134370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (4))){
var inst_134316 = (state_134339[(7)]);
var inst_134316__$1 = (state_134339[(2)]);
var inst_134317 = (inst_134316__$1 == null);
var state_134339__$1 = (function (){var statearr_134343 = state_134339;
(statearr_134343[(7)] = inst_134316__$1);

return statearr_134343;
})();
if(cljs.core.truth_(inst_134317)){
var statearr_134344_134371 = state_134339__$1;
(statearr_134344_134371[(1)] = (5));

} else {
var statearr_134345_134372 = state_134339__$1;
(statearr_134345_134372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (13))){
var state_134339__$1 = state_134339;
var statearr_134346_134373 = state_134339__$1;
(statearr_134346_134373[(2)] = null);

(statearr_134346_134373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (6))){
var inst_134316 = (state_134339[(7)]);
var inst_134322 = p.call(null,inst_134316);
var state_134339__$1 = state_134339;
if(cljs.core.truth_(inst_134322)){
var statearr_134347_134374 = state_134339__$1;
(statearr_134347_134374[(1)] = (9));

} else {
var statearr_134348_134375 = state_134339__$1;
(statearr_134348_134375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (3))){
var inst_134337 = (state_134339[(2)]);
var state_134339__$1 = state_134339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134339__$1,inst_134337);
} else {
if((state_val_134340 === (12))){
var state_134339__$1 = state_134339;
var statearr_134349_134376 = state_134339__$1;
(statearr_134349_134376[(2)] = null);

(statearr_134349_134376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (2))){
var state_134339__$1 = state_134339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134339__$1,(4),ch);
} else {
if((state_val_134340 === (11))){
var inst_134316 = (state_134339[(7)]);
var inst_134326 = (state_134339[(2)]);
var state_134339__$1 = state_134339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134339__$1,(8),inst_134326,inst_134316);
} else {
if((state_val_134340 === (9))){
var state_134339__$1 = state_134339;
var statearr_134350_134377 = state_134339__$1;
(statearr_134350_134377[(2)] = tc);

(statearr_134350_134377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (5))){
var inst_134319 = cljs.core.async.close_BANG_.call(null,tc);
var inst_134320 = cljs.core.async.close_BANG_.call(null,fc);
var state_134339__$1 = (function (){var statearr_134351 = state_134339;
(statearr_134351[(8)] = inst_134319);

return statearr_134351;
})();
var statearr_134352_134378 = state_134339__$1;
(statearr_134352_134378[(2)] = inst_134320);

(statearr_134352_134378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (14))){
var inst_134333 = (state_134339[(2)]);
var state_134339__$1 = state_134339;
var statearr_134353_134379 = state_134339__$1;
(statearr_134353_134379[(2)] = inst_134333);

(statearr_134353_134379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (10))){
var state_134339__$1 = state_134339;
var statearr_134354_134380 = state_134339__$1;
(statearr_134354_134380[(2)] = fc);

(statearr_134354_134380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134340 === (8))){
var inst_134328 = (state_134339[(2)]);
var state_134339__$1 = state_134339;
if(cljs.core.truth_(inst_134328)){
var statearr_134355_134381 = state_134339__$1;
(statearr_134355_134381[(1)] = (12));

} else {
var statearr_134356_134382 = state_134339__$1;
(statearr_134356_134382[(1)] = (13));

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
});})(c__33352__auto___134368,tc,fc))
;
return ((function (switch__33287__auto__,c__33352__auto___134368,tc,fc){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_134360 = [null,null,null,null,null,null,null,null,null];
(statearr_134360[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_134360[(1)] = (1));

return statearr_134360;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_134339){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134361){if((e134361 instanceof Object)){
var ex__33291__auto__ = e134361;
var statearr_134362_134383 = state_134339;
(statearr_134362_134383[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134384 = state_134339;
state_134339 = G__134384;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_134339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_134339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___134368,tc,fc))
})();
var state__33354__auto__ = (function (){var statearr_134363 = f__33353__auto__.call(null);
(statearr_134363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___134368);

return statearr_134363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___134368,tc,fc))
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_134448){
var state_val_134449 = (state_134448[(1)]);
if((state_val_134449 === (7))){
var inst_134444 = (state_134448[(2)]);
var state_134448__$1 = state_134448;
var statearr_134450_134471 = state_134448__$1;
(statearr_134450_134471[(2)] = inst_134444);

(statearr_134450_134471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (1))){
var inst_134428 = init;
var state_134448__$1 = (function (){var statearr_134451 = state_134448;
(statearr_134451[(7)] = inst_134428);

return statearr_134451;
})();
var statearr_134452_134472 = state_134448__$1;
(statearr_134452_134472[(2)] = null);

(statearr_134452_134472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (4))){
var inst_134431 = (state_134448[(8)]);
var inst_134431__$1 = (state_134448[(2)]);
var inst_134432 = (inst_134431__$1 == null);
var state_134448__$1 = (function (){var statearr_134453 = state_134448;
(statearr_134453[(8)] = inst_134431__$1);

return statearr_134453;
})();
if(cljs.core.truth_(inst_134432)){
var statearr_134454_134473 = state_134448__$1;
(statearr_134454_134473[(1)] = (5));

} else {
var statearr_134455_134474 = state_134448__$1;
(statearr_134455_134474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (6))){
var inst_134431 = (state_134448[(8)]);
var inst_134428 = (state_134448[(7)]);
var inst_134435 = (state_134448[(9)]);
var inst_134435__$1 = f.call(null,inst_134428,inst_134431);
var inst_134436 = cljs.core.reduced_QMARK_.call(null,inst_134435__$1);
var state_134448__$1 = (function (){var statearr_134456 = state_134448;
(statearr_134456[(9)] = inst_134435__$1);

return statearr_134456;
})();
if(inst_134436){
var statearr_134457_134475 = state_134448__$1;
(statearr_134457_134475[(1)] = (8));

} else {
var statearr_134458_134476 = state_134448__$1;
(statearr_134458_134476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (3))){
var inst_134446 = (state_134448[(2)]);
var state_134448__$1 = state_134448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134448__$1,inst_134446);
} else {
if((state_val_134449 === (2))){
var state_134448__$1 = state_134448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134448__$1,(4),ch);
} else {
if((state_val_134449 === (9))){
var inst_134435 = (state_134448[(9)]);
var inst_134428 = inst_134435;
var state_134448__$1 = (function (){var statearr_134459 = state_134448;
(statearr_134459[(7)] = inst_134428);

return statearr_134459;
})();
var statearr_134460_134477 = state_134448__$1;
(statearr_134460_134477[(2)] = null);

(statearr_134460_134477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (5))){
var inst_134428 = (state_134448[(7)]);
var state_134448__$1 = state_134448;
var statearr_134461_134478 = state_134448__$1;
(statearr_134461_134478[(2)] = inst_134428);

(statearr_134461_134478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (10))){
var inst_134442 = (state_134448[(2)]);
var state_134448__$1 = state_134448;
var statearr_134462_134479 = state_134448__$1;
(statearr_134462_134479[(2)] = inst_134442);

(statearr_134462_134479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134449 === (8))){
var inst_134435 = (state_134448[(9)]);
var inst_134438 = cljs.core.deref.call(null,inst_134435);
var state_134448__$1 = state_134448;
var statearr_134463_134480 = state_134448__$1;
(statearr_134463_134480[(2)] = inst_134438);

(statearr_134463_134480[(1)] = (10));


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
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33288__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33288__auto____0 = (function (){
var statearr_134467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_134467[(0)] = cljs$core$async$reduce_$_state_machine__33288__auto__);

(statearr_134467[(1)] = (1));

return statearr_134467;
});
var cljs$core$async$reduce_$_state_machine__33288__auto____1 = (function (state_134448){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134468){if((e134468 instanceof Object)){
var ex__33291__auto__ = e134468;
var statearr_134469_134481 = state_134448;
(statearr_134469_134481[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134482 = state_134448;
state_134448 = G__134482;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33288__auto__ = function(state_134448){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33288__auto____1.call(this,state_134448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33288__auto____0;
cljs$core$async$reduce_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33288__auto____1;
return cljs$core$async$reduce_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_134470 = f__33353__auto__.call(null);
(statearr_134470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_134470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
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
var args134483 = [];
var len__26121__auto___134535 = arguments.length;
var i__26122__auto___134536 = (0);
while(true){
if((i__26122__auto___134536 < len__26121__auto___134535)){
args134483.push((arguments[i__26122__auto___134536]));

var G__134537 = (i__26122__auto___134536 + (1));
i__26122__auto___134536 = G__134537;
continue;
} else {
}
break;
}

var G__134485 = args134483.length;
switch (G__134485) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args134483.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_134510){
var state_val_134511 = (state_134510[(1)]);
if((state_val_134511 === (7))){
var inst_134492 = (state_134510[(2)]);
var state_134510__$1 = state_134510;
var statearr_134512_134539 = state_134510__$1;
(statearr_134512_134539[(2)] = inst_134492);

(statearr_134512_134539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (1))){
var inst_134486 = cljs.core.seq.call(null,coll);
var inst_134487 = inst_134486;
var state_134510__$1 = (function (){var statearr_134513 = state_134510;
(statearr_134513[(7)] = inst_134487);

return statearr_134513;
})();
var statearr_134514_134540 = state_134510__$1;
(statearr_134514_134540[(2)] = null);

(statearr_134514_134540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (4))){
var inst_134487 = (state_134510[(7)]);
var inst_134490 = cljs.core.first.call(null,inst_134487);
var state_134510__$1 = state_134510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134510__$1,(7),ch,inst_134490);
} else {
if((state_val_134511 === (13))){
var inst_134504 = (state_134510[(2)]);
var state_134510__$1 = state_134510;
var statearr_134515_134541 = state_134510__$1;
(statearr_134515_134541[(2)] = inst_134504);

(statearr_134515_134541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (6))){
var inst_134495 = (state_134510[(2)]);
var state_134510__$1 = state_134510;
if(cljs.core.truth_(inst_134495)){
var statearr_134516_134542 = state_134510__$1;
(statearr_134516_134542[(1)] = (8));

} else {
var statearr_134517_134543 = state_134510__$1;
(statearr_134517_134543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (3))){
var inst_134508 = (state_134510[(2)]);
var state_134510__$1 = state_134510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134510__$1,inst_134508);
} else {
if((state_val_134511 === (12))){
var state_134510__$1 = state_134510;
var statearr_134518_134544 = state_134510__$1;
(statearr_134518_134544[(2)] = null);

(statearr_134518_134544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (2))){
var inst_134487 = (state_134510[(7)]);
var state_134510__$1 = state_134510;
if(cljs.core.truth_(inst_134487)){
var statearr_134519_134545 = state_134510__$1;
(statearr_134519_134545[(1)] = (4));

} else {
var statearr_134520_134546 = state_134510__$1;
(statearr_134520_134546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (11))){
var inst_134501 = cljs.core.async.close_BANG_.call(null,ch);
var state_134510__$1 = state_134510;
var statearr_134521_134547 = state_134510__$1;
(statearr_134521_134547[(2)] = inst_134501);

(statearr_134521_134547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (9))){
var state_134510__$1 = state_134510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_134522_134548 = state_134510__$1;
(statearr_134522_134548[(1)] = (11));

} else {
var statearr_134523_134549 = state_134510__$1;
(statearr_134523_134549[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (5))){
var inst_134487 = (state_134510[(7)]);
var state_134510__$1 = state_134510;
var statearr_134524_134550 = state_134510__$1;
(statearr_134524_134550[(2)] = inst_134487);

(statearr_134524_134550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (10))){
var inst_134506 = (state_134510[(2)]);
var state_134510__$1 = state_134510;
var statearr_134525_134551 = state_134510__$1;
(statearr_134525_134551[(2)] = inst_134506);

(statearr_134525_134551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134511 === (8))){
var inst_134487 = (state_134510[(7)]);
var inst_134497 = cljs.core.next.call(null,inst_134487);
var inst_134487__$1 = inst_134497;
var state_134510__$1 = (function (){var statearr_134526 = state_134510;
(statearr_134526[(7)] = inst_134487__$1);

return statearr_134526;
})();
var statearr_134527_134552 = state_134510__$1;
(statearr_134527_134552[(2)] = null);

(statearr_134527_134552[(1)] = (2));


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
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_134531 = [null,null,null,null,null,null,null,null];
(statearr_134531[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_134531[(1)] = (1));

return statearr_134531;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_134510){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e134532){if((e134532 instanceof Object)){
var ex__33291__auto__ = e134532;
var statearr_134533_134553 = state_134510;
(statearr_134533_134553[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134554 = state_134510;
state_134510 = G__134554;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_134510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_134510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_134534 = f__33353__auto__.call(null);
(statearr_134534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_134534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async134780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async134780 = (function (mult,ch,cs,meta134781){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta134781 = meta134781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_134782,meta134781__$1){
var self__ = this;
var _134782__$1 = this;
return (new cljs.core.async.t_cljs$core$async134780(self__.mult,self__.ch,self__.cs,meta134781__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_134782){
var self__ = this;
var _134782__$1 = this;
return self__.meta134781;
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta134781","meta134781",31747262,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async134780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async134780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async134780";

cljs.core.async.t_cljs$core$async134780.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async134780");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async134780 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async134780(mult__$1,ch__$1,cs__$1,meta134781){
return (new cljs.core.async.t_cljs$core$async134780(mult__$1,ch__$1,cs__$1,meta134781));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async134780(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33352__auto___135005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135005,cs,m,dchan,dctr,done){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135005,cs,m,dchan,dctr,done){
return (function (state_134917){
var state_val_134918 = (state_134917[(1)]);
if((state_val_134918 === (7))){
var inst_134913 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134919_135006 = state_134917__$1;
(statearr_134919_135006[(2)] = inst_134913);

(statearr_134919_135006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (20))){
var inst_134816 = (state_134917[(7)]);
var inst_134828 = cljs.core.first.call(null,inst_134816);
var inst_134829 = cljs.core.nth.call(null,inst_134828,(0),null);
var inst_134830 = cljs.core.nth.call(null,inst_134828,(1),null);
var state_134917__$1 = (function (){var statearr_134920 = state_134917;
(statearr_134920[(8)] = inst_134829);

return statearr_134920;
})();
if(cljs.core.truth_(inst_134830)){
var statearr_134921_135007 = state_134917__$1;
(statearr_134921_135007[(1)] = (22));

} else {
var statearr_134922_135008 = state_134917__$1;
(statearr_134922_135008[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (27))){
var inst_134860 = (state_134917[(9)]);
var inst_134785 = (state_134917[(10)]);
var inst_134858 = (state_134917[(11)]);
var inst_134865 = (state_134917[(12)]);
var inst_134865__$1 = cljs.core._nth.call(null,inst_134858,inst_134860);
var inst_134866 = cljs.core.async.put_BANG_.call(null,inst_134865__$1,inst_134785,done);
var state_134917__$1 = (function (){var statearr_134923 = state_134917;
(statearr_134923[(12)] = inst_134865__$1);

return statearr_134923;
})();
if(cljs.core.truth_(inst_134866)){
var statearr_134924_135009 = state_134917__$1;
(statearr_134924_135009[(1)] = (30));

} else {
var statearr_134925_135010 = state_134917__$1;
(statearr_134925_135010[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (1))){
var state_134917__$1 = state_134917;
var statearr_134926_135011 = state_134917__$1;
(statearr_134926_135011[(2)] = null);

(statearr_134926_135011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (24))){
var inst_134816 = (state_134917[(7)]);
var inst_134835 = (state_134917[(2)]);
var inst_134836 = cljs.core.next.call(null,inst_134816);
var inst_134794 = inst_134836;
var inst_134795 = null;
var inst_134796 = (0);
var inst_134797 = (0);
var state_134917__$1 = (function (){var statearr_134927 = state_134917;
(statearr_134927[(13)] = inst_134835);

(statearr_134927[(14)] = inst_134795);

(statearr_134927[(15)] = inst_134797);

(statearr_134927[(16)] = inst_134796);

(statearr_134927[(17)] = inst_134794);

return statearr_134927;
})();
var statearr_134928_135012 = state_134917__$1;
(statearr_134928_135012[(2)] = null);

(statearr_134928_135012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (39))){
var state_134917__$1 = state_134917;
var statearr_134932_135013 = state_134917__$1;
(statearr_134932_135013[(2)] = null);

(statearr_134932_135013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (4))){
var inst_134785 = (state_134917[(10)]);
var inst_134785__$1 = (state_134917[(2)]);
var inst_134786 = (inst_134785__$1 == null);
var state_134917__$1 = (function (){var statearr_134933 = state_134917;
(statearr_134933[(10)] = inst_134785__$1);

return statearr_134933;
})();
if(cljs.core.truth_(inst_134786)){
var statearr_134934_135014 = state_134917__$1;
(statearr_134934_135014[(1)] = (5));

} else {
var statearr_134935_135015 = state_134917__$1;
(statearr_134935_135015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (15))){
var inst_134795 = (state_134917[(14)]);
var inst_134797 = (state_134917[(15)]);
var inst_134796 = (state_134917[(16)]);
var inst_134794 = (state_134917[(17)]);
var inst_134812 = (state_134917[(2)]);
var inst_134813 = (inst_134797 + (1));
var tmp134929 = inst_134795;
var tmp134930 = inst_134796;
var tmp134931 = inst_134794;
var inst_134794__$1 = tmp134931;
var inst_134795__$1 = tmp134929;
var inst_134796__$1 = tmp134930;
var inst_134797__$1 = inst_134813;
var state_134917__$1 = (function (){var statearr_134936 = state_134917;
(statearr_134936[(14)] = inst_134795__$1);

(statearr_134936[(15)] = inst_134797__$1);

(statearr_134936[(18)] = inst_134812);

(statearr_134936[(16)] = inst_134796__$1);

(statearr_134936[(17)] = inst_134794__$1);

return statearr_134936;
})();
var statearr_134937_135016 = state_134917__$1;
(statearr_134937_135016[(2)] = null);

(statearr_134937_135016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (21))){
var inst_134839 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134941_135017 = state_134917__$1;
(statearr_134941_135017[(2)] = inst_134839);

(statearr_134941_135017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (31))){
var inst_134865 = (state_134917[(12)]);
var inst_134869 = done.call(null,null);
var inst_134870 = cljs.core.async.untap_STAR_.call(null,m,inst_134865);
var state_134917__$1 = (function (){var statearr_134942 = state_134917;
(statearr_134942[(19)] = inst_134869);

return statearr_134942;
})();
var statearr_134943_135018 = state_134917__$1;
(statearr_134943_135018[(2)] = inst_134870);

(statearr_134943_135018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (32))){
var inst_134860 = (state_134917[(9)]);
var inst_134857 = (state_134917[(20)]);
var inst_134858 = (state_134917[(11)]);
var inst_134859 = (state_134917[(21)]);
var inst_134872 = (state_134917[(2)]);
var inst_134873 = (inst_134860 + (1));
var tmp134938 = inst_134857;
var tmp134939 = inst_134858;
var tmp134940 = inst_134859;
var inst_134857__$1 = tmp134938;
var inst_134858__$1 = tmp134939;
var inst_134859__$1 = tmp134940;
var inst_134860__$1 = inst_134873;
var state_134917__$1 = (function (){var statearr_134944 = state_134917;
(statearr_134944[(9)] = inst_134860__$1);

(statearr_134944[(20)] = inst_134857__$1);

(statearr_134944[(22)] = inst_134872);

(statearr_134944[(11)] = inst_134858__$1);

(statearr_134944[(21)] = inst_134859__$1);

return statearr_134944;
})();
var statearr_134945_135019 = state_134917__$1;
(statearr_134945_135019[(2)] = null);

(statearr_134945_135019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (40))){
var inst_134885 = (state_134917[(23)]);
var inst_134889 = done.call(null,null);
var inst_134890 = cljs.core.async.untap_STAR_.call(null,m,inst_134885);
var state_134917__$1 = (function (){var statearr_134946 = state_134917;
(statearr_134946[(24)] = inst_134889);

return statearr_134946;
})();
var statearr_134947_135020 = state_134917__$1;
(statearr_134947_135020[(2)] = inst_134890);

(statearr_134947_135020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (33))){
var inst_134876 = (state_134917[(25)]);
var inst_134878 = cljs.core.chunked_seq_QMARK_.call(null,inst_134876);
var state_134917__$1 = state_134917;
if(inst_134878){
var statearr_134948_135021 = state_134917__$1;
(statearr_134948_135021[(1)] = (36));

} else {
var statearr_134949_135022 = state_134917__$1;
(statearr_134949_135022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (13))){
var inst_134806 = (state_134917[(26)]);
var inst_134809 = cljs.core.async.close_BANG_.call(null,inst_134806);
var state_134917__$1 = state_134917;
var statearr_134950_135023 = state_134917__$1;
(statearr_134950_135023[(2)] = inst_134809);

(statearr_134950_135023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (22))){
var inst_134829 = (state_134917[(8)]);
var inst_134832 = cljs.core.async.close_BANG_.call(null,inst_134829);
var state_134917__$1 = state_134917;
var statearr_134951_135024 = state_134917__$1;
(statearr_134951_135024[(2)] = inst_134832);

(statearr_134951_135024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (36))){
var inst_134876 = (state_134917[(25)]);
var inst_134880 = cljs.core.chunk_first.call(null,inst_134876);
var inst_134881 = cljs.core.chunk_rest.call(null,inst_134876);
var inst_134882 = cljs.core.count.call(null,inst_134880);
var inst_134857 = inst_134881;
var inst_134858 = inst_134880;
var inst_134859 = inst_134882;
var inst_134860 = (0);
var state_134917__$1 = (function (){var statearr_134952 = state_134917;
(statearr_134952[(9)] = inst_134860);

(statearr_134952[(20)] = inst_134857);

(statearr_134952[(11)] = inst_134858);

(statearr_134952[(21)] = inst_134859);

return statearr_134952;
})();
var statearr_134953_135025 = state_134917__$1;
(statearr_134953_135025[(2)] = null);

(statearr_134953_135025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (41))){
var inst_134876 = (state_134917[(25)]);
var inst_134892 = (state_134917[(2)]);
var inst_134893 = cljs.core.next.call(null,inst_134876);
var inst_134857 = inst_134893;
var inst_134858 = null;
var inst_134859 = (0);
var inst_134860 = (0);
var state_134917__$1 = (function (){var statearr_134954 = state_134917;
(statearr_134954[(9)] = inst_134860);

(statearr_134954[(20)] = inst_134857);

(statearr_134954[(11)] = inst_134858);

(statearr_134954[(27)] = inst_134892);

(statearr_134954[(21)] = inst_134859);

return statearr_134954;
})();
var statearr_134955_135026 = state_134917__$1;
(statearr_134955_135026[(2)] = null);

(statearr_134955_135026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (43))){
var state_134917__$1 = state_134917;
var statearr_134956_135027 = state_134917__$1;
(statearr_134956_135027[(2)] = null);

(statearr_134956_135027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (29))){
var inst_134901 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134957_135028 = state_134917__$1;
(statearr_134957_135028[(2)] = inst_134901);

(statearr_134957_135028[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (44))){
var inst_134910 = (state_134917[(2)]);
var state_134917__$1 = (function (){var statearr_134958 = state_134917;
(statearr_134958[(28)] = inst_134910);

return statearr_134958;
})();
var statearr_134959_135029 = state_134917__$1;
(statearr_134959_135029[(2)] = null);

(statearr_134959_135029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (6))){
var inst_134849 = (state_134917[(29)]);
var inst_134848 = cljs.core.deref.call(null,cs);
var inst_134849__$1 = cljs.core.keys.call(null,inst_134848);
var inst_134850 = cljs.core.count.call(null,inst_134849__$1);
var inst_134851 = cljs.core.reset_BANG_.call(null,dctr,inst_134850);
var inst_134856 = cljs.core.seq.call(null,inst_134849__$1);
var inst_134857 = inst_134856;
var inst_134858 = null;
var inst_134859 = (0);
var inst_134860 = (0);
var state_134917__$1 = (function (){var statearr_134960 = state_134917;
(statearr_134960[(9)] = inst_134860);

(statearr_134960[(20)] = inst_134857);

(statearr_134960[(30)] = inst_134851);

(statearr_134960[(11)] = inst_134858);

(statearr_134960[(29)] = inst_134849__$1);

(statearr_134960[(21)] = inst_134859);

return statearr_134960;
})();
var statearr_134961_135030 = state_134917__$1;
(statearr_134961_135030[(2)] = null);

(statearr_134961_135030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (28))){
var inst_134857 = (state_134917[(20)]);
var inst_134876 = (state_134917[(25)]);
var inst_134876__$1 = cljs.core.seq.call(null,inst_134857);
var state_134917__$1 = (function (){var statearr_134962 = state_134917;
(statearr_134962[(25)] = inst_134876__$1);

return statearr_134962;
})();
if(inst_134876__$1){
var statearr_134963_135031 = state_134917__$1;
(statearr_134963_135031[(1)] = (33));

} else {
var statearr_134964_135032 = state_134917__$1;
(statearr_134964_135032[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (25))){
var inst_134860 = (state_134917[(9)]);
var inst_134859 = (state_134917[(21)]);
var inst_134862 = (inst_134860 < inst_134859);
var inst_134863 = inst_134862;
var state_134917__$1 = state_134917;
if(cljs.core.truth_(inst_134863)){
var statearr_134965_135033 = state_134917__$1;
(statearr_134965_135033[(1)] = (27));

} else {
var statearr_134966_135034 = state_134917__$1;
(statearr_134966_135034[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (34))){
var state_134917__$1 = state_134917;
var statearr_134967_135035 = state_134917__$1;
(statearr_134967_135035[(2)] = null);

(statearr_134967_135035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (17))){
var state_134917__$1 = state_134917;
var statearr_134968_135036 = state_134917__$1;
(statearr_134968_135036[(2)] = null);

(statearr_134968_135036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (3))){
var inst_134915 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134917__$1,inst_134915);
} else {
if((state_val_134918 === (12))){
var inst_134844 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134969_135037 = state_134917__$1;
(statearr_134969_135037[(2)] = inst_134844);

(statearr_134969_135037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (2))){
var state_134917__$1 = state_134917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134917__$1,(4),ch);
} else {
if((state_val_134918 === (23))){
var state_134917__$1 = state_134917;
var statearr_134970_135038 = state_134917__$1;
(statearr_134970_135038[(2)] = null);

(statearr_134970_135038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (35))){
var inst_134899 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134971_135039 = state_134917__$1;
(statearr_134971_135039[(2)] = inst_134899);

(statearr_134971_135039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (19))){
var inst_134816 = (state_134917[(7)]);
var inst_134820 = cljs.core.chunk_first.call(null,inst_134816);
var inst_134821 = cljs.core.chunk_rest.call(null,inst_134816);
var inst_134822 = cljs.core.count.call(null,inst_134820);
var inst_134794 = inst_134821;
var inst_134795 = inst_134820;
var inst_134796 = inst_134822;
var inst_134797 = (0);
var state_134917__$1 = (function (){var statearr_134972 = state_134917;
(statearr_134972[(14)] = inst_134795);

(statearr_134972[(15)] = inst_134797);

(statearr_134972[(16)] = inst_134796);

(statearr_134972[(17)] = inst_134794);

return statearr_134972;
})();
var statearr_134973_135040 = state_134917__$1;
(statearr_134973_135040[(2)] = null);

(statearr_134973_135040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (11))){
var inst_134816 = (state_134917[(7)]);
var inst_134794 = (state_134917[(17)]);
var inst_134816__$1 = cljs.core.seq.call(null,inst_134794);
var state_134917__$1 = (function (){var statearr_134974 = state_134917;
(statearr_134974[(7)] = inst_134816__$1);

return statearr_134974;
})();
if(inst_134816__$1){
var statearr_134975_135041 = state_134917__$1;
(statearr_134975_135041[(1)] = (16));

} else {
var statearr_134976_135042 = state_134917__$1;
(statearr_134976_135042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (9))){
var inst_134846 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134977_135043 = state_134917__$1;
(statearr_134977_135043[(2)] = inst_134846);

(statearr_134977_135043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (5))){
var inst_134792 = cljs.core.deref.call(null,cs);
var inst_134793 = cljs.core.seq.call(null,inst_134792);
var inst_134794 = inst_134793;
var inst_134795 = null;
var inst_134796 = (0);
var inst_134797 = (0);
var state_134917__$1 = (function (){var statearr_134978 = state_134917;
(statearr_134978[(14)] = inst_134795);

(statearr_134978[(15)] = inst_134797);

(statearr_134978[(16)] = inst_134796);

(statearr_134978[(17)] = inst_134794);

return statearr_134978;
})();
var statearr_134979_135044 = state_134917__$1;
(statearr_134979_135044[(2)] = null);

(statearr_134979_135044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (14))){
var state_134917__$1 = state_134917;
var statearr_134980_135045 = state_134917__$1;
(statearr_134980_135045[(2)] = null);

(statearr_134980_135045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (45))){
var inst_134907 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134981_135046 = state_134917__$1;
(statearr_134981_135046[(2)] = inst_134907);

(statearr_134981_135046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (26))){
var inst_134849 = (state_134917[(29)]);
var inst_134903 = (state_134917[(2)]);
var inst_134904 = cljs.core.seq.call(null,inst_134849);
var state_134917__$1 = (function (){var statearr_134982 = state_134917;
(statearr_134982[(31)] = inst_134903);

return statearr_134982;
})();
if(inst_134904){
var statearr_134983_135047 = state_134917__$1;
(statearr_134983_135047[(1)] = (42));

} else {
var statearr_134984_135048 = state_134917__$1;
(statearr_134984_135048[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (16))){
var inst_134816 = (state_134917[(7)]);
var inst_134818 = cljs.core.chunked_seq_QMARK_.call(null,inst_134816);
var state_134917__$1 = state_134917;
if(inst_134818){
var statearr_134985_135049 = state_134917__$1;
(statearr_134985_135049[(1)] = (19));

} else {
var statearr_134986_135050 = state_134917__$1;
(statearr_134986_135050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (38))){
var inst_134896 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134987_135051 = state_134917__$1;
(statearr_134987_135051[(2)] = inst_134896);

(statearr_134987_135051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (30))){
var state_134917__$1 = state_134917;
var statearr_134988_135052 = state_134917__$1;
(statearr_134988_135052[(2)] = null);

(statearr_134988_135052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (10))){
var inst_134795 = (state_134917[(14)]);
var inst_134797 = (state_134917[(15)]);
var inst_134805 = cljs.core._nth.call(null,inst_134795,inst_134797);
var inst_134806 = cljs.core.nth.call(null,inst_134805,(0),null);
var inst_134807 = cljs.core.nth.call(null,inst_134805,(1),null);
var state_134917__$1 = (function (){var statearr_134989 = state_134917;
(statearr_134989[(26)] = inst_134806);

return statearr_134989;
})();
if(cljs.core.truth_(inst_134807)){
var statearr_134990_135053 = state_134917__$1;
(statearr_134990_135053[(1)] = (13));

} else {
var statearr_134991_135054 = state_134917__$1;
(statearr_134991_135054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (18))){
var inst_134842 = (state_134917[(2)]);
var state_134917__$1 = state_134917;
var statearr_134992_135055 = state_134917__$1;
(statearr_134992_135055[(2)] = inst_134842);

(statearr_134992_135055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (42))){
var state_134917__$1 = state_134917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134917__$1,(45),dchan);
} else {
if((state_val_134918 === (37))){
var inst_134785 = (state_134917[(10)]);
var inst_134885 = (state_134917[(23)]);
var inst_134876 = (state_134917[(25)]);
var inst_134885__$1 = cljs.core.first.call(null,inst_134876);
var inst_134886 = cljs.core.async.put_BANG_.call(null,inst_134885__$1,inst_134785,done);
var state_134917__$1 = (function (){var statearr_134993 = state_134917;
(statearr_134993[(23)] = inst_134885__$1);

return statearr_134993;
})();
if(cljs.core.truth_(inst_134886)){
var statearr_134994_135056 = state_134917__$1;
(statearr_134994_135056[(1)] = (39));

} else {
var statearr_134995_135057 = state_134917__$1;
(statearr_134995_135057[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134918 === (8))){
var inst_134797 = (state_134917[(15)]);
var inst_134796 = (state_134917[(16)]);
var inst_134799 = (inst_134797 < inst_134796);
var inst_134800 = inst_134799;
var state_134917__$1 = state_134917;
if(cljs.core.truth_(inst_134800)){
var statearr_134996_135058 = state_134917__$1;
(statearr_134996_135058[(1)] = (10));

} else {
var statearr_134997_135059 = state_134917__$1;
(statearr_134997_135059[(1)] = (11));

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
});})(c__33352__auto___135005,cs,m,dchan,dctr,done))
;
return ((function (switch__33287__auto__,c__33352__auto___135005,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33288__auto__ = null;
var cljs$core$async$mult_$_state_machine__33288__auto____0 = (function (){
var statearr_135001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135001[(0)] = cljs$core$async$mult_$_state_machine__33288__auto__);

(statearr_135001[(1)] = (1));

return statearr_135001;
});
var cljs$core$async$mult_$_state_machine__33288__auto____1 = (function (state_134917){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_134917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135002){if((e135002 instanceof Object)){
var ex__33291__auto__ = e135002;
var statearr_135003_135060 = state_134917;
(statearr_135003_135060[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135061 = state_134917;
state_134917 = G__135061;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33288__auto__ = function(state_134917){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33288__auto____1.call(this,state_134917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33288__auto____0;
cljs$core$async$mult_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33288__auto____1;
return cljs$core$async$mult_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135005,cs,m,dchan,dctr,done))
})();
var state__33354__auto__ = (function (){var statearr_135004 = f__33353__auto__.call(null);
(statearr_135004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135005);

return statearr_135004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135005,cs,m,dchan,dctr,done))
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
var args135062 = [];
var len__26121__auto___135065 = arguments.length;
var i__26122__auto___135066 = (0);
while(true){
if((i__26122__auto___135066 < len__26121__auto___135065)){
args135062.push((arguments[i__26122__auto___135066]));

var G__135067 = (i__26122__auto___135066 + (1));
i__26122__auto___135066 = G__135067;
continue;
} else {
}
break;
}

var G__135064 = args135062.length;
switch (G__135064) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135062.length)].join('')));

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
var len__26121__auto___135079 = arguments.length;
var i__26122__auto___135080 = (0);
while(true){
if((i__26122__auto___135080 < len__26121__auto___135079)){
args__26128__auto__.push((arguments[i__26122__auto___135080]));

var G__135081 = (i__26122__auto___135080 + (1));
i__26122__auto___135080 = G__135081;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__135073){
var map__135074 = p__135073;
var map__135074__$1 = ((((!((map__135074 == null)))?((((map__135074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__135074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__135074):map__135074);
var opts = map__135074__$1;
var statearr_135076_135082 = state;
(statearr_135076_135082[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__135074,map__135074__$1,opts){
return (function (val){
var statearr_135077_135083 = state;
(statearr_135077_135083[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__135074,map__135074__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_135078_135084 = state;
(statearr_135078_135084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq135069){
var G__135070 = cljs.core.first.call(null,seq135069);
var seq135069__$1 = cljs.core.next.call(null,seq135069);
var G__135071 = cljs.core.first.call(null,seq135069__$1);
var seq135069__$2 = cljs.core.next.call(null,seq135069__$1);
var G__135072 = cljs.core.first.call(null,seq135069__$2);
var seq135069__$3 = cljs.core.next.call(null,seq135069__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__135070,G__135071,G__135072,seq135069__$3);
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
if(typeof cljs.core.async.t_cljs$core$async135250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135250 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta135251){
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
this.meta135251 = meta135251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_135252,meta135251__$1){
var self__ = this;
var _135252__$1 = this;
return (new cljs.core.async.t_cljs$core$async135250(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta135251__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_135252){
var self__ = this;
var _135252__$1 = this;
return self__.meta135251;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async135250.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta135251","meta135251",-2047618762,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async135250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135250";

cljs.core.async.t_cljs$core$async135250.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135250");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async135250 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async135250(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta135251){
return (new cljs.core.async.t_cljs$core$async135250(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta135251));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async135250(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33352__auto___135415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_135352){
var state_val_135353 = (state_135352[(1)]);
if((state_val_135353 === (7))){
var inst_135268 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
var statearr_135354_135416 = state_135352__$1;
(statearr_135354_135416[(2)] = inst_135268);

(statearr_135354_135416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (20))){
var inst_135280 = (state_135352[(7)]);
var state_135352__$1 = state_135352;
var statearr_135355_135417 = state_135352__$1;
(statearr_135355_135417[(2)] = inst_135280);

(statearr_135355_135417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (27))){
var state_135352__$1 = state_135352;
var statearr_135356_135418 = state_135352__$1;
(statearr_135356_135418[(2)] = null);

(statearr_135356_135418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (1))){
var inst_135256 = (state_135352[(8)]);
var inst_135256__$1 = calc_state.call(null);
var inst_135258 = (inst_135256__$1 == null);
var inst_135259 = cljs.core.not.call(null,inst_135258);
var state_135352__$1 = (function (){var statearr_135357 = state_135352;
(statearr_135357[(8)] = inst_135256__$1);

return statearr_135357;
})();
if(inst_135259){
var statearr_135358_135419 = state_135352__$1;
(statearr_135358_135419[(1)] = (2));

} else {
var statearr_135359_135420 = state_135352__$1;
(statearr_135359_135420[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (24))){
var inst_135326 = (state_135352[(9)]);
var inst_135303 = (state_135352[(10)]);
var inst_135312 = (state_135352[(11)]);
var inst_135326__$1 = inst_135303.call(null,inst_135312);
var state_135352__$1 = (function (){var statearr_135360 = state_135352;
(statearr_135360[(9)] = inst_135326__$1);

return statearr_135360;
})();
if(cljs.core.truth_(inst_135326__$1)){
var statearr_135361_135421 = state_135352__$1;
(statearr_135361_135421[(1)] = (29));

} else {
var statearr_135362_135422 = state_135352__$1;
(statearr_135362_135422[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (4))){
var inst_135271 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135271)){
var statearr_135363_135423 = state_135352__$1;
(statearr_135363_135423[(1)] = (8));

} else {
var statearr_135364_135424 = state_135352__$1;
(statearr_135364_135424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (15))){
var inst_135297 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135297)){
var statearr_135365_135425 = state_135352__$1;
(statearr_135365_135425[(1)] = (19));

} else {
var statearr_135366_135426 = state_135352__$1;
(statearr_135366_135426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (21))){
var inst_135302 = (state_135352[(12)]);
var inst_135302__$1 = (state_135352[(2)]);
var inst_135303 = cljs.core.get.call(null,inst_135302__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_135304 = cljs.core.get.call(null,inst_135302__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_135305 = cljs.core.get.call(null,inst_135302__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_135352__$1 = (function (){var statearr_135367 = state_135352;
(statearr_135367[(12)] = inst_135302__$1);

(statearr_135367[(10)] = inst_135303);

(statearr_135367[(13)] = inst_135304);

return statearr_135367;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_135352__$1,(22),inst_135305);
} else {
if((state_val_135353 === (31))){
var inst_135334 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135334)){
var statearr_135368_135427 = state_135352__$1;
(statearr_135368_135427[(1)] = (32));

} else {
var statearr_135369_135428 = state_135352__$1;
(statearr_135369_135428[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (32))){
var inst_135311 = (state_135352[(14)]);
var state_135352__$1 = state_135352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135352__$1,(35),out,inst_135311);
} else {
if((state_val_135353 === (33))){
var inst_135302 = (state_135352[(12)]);
var inst_135280 = inst_135302;
var state_135352__$1 = (function (){var statearr_135370 = state_135352;
(statearr_135370[(7)] = inst_135280);

return statearr_135370;
})();
var statearr_135371_135429 = state_135352__$1;
(statearr_135371_135429[(2)] = null);

(statearr_135371_135429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (13))){
var inst_135280 = (state_135352[(7)]);
var inst_135287 = inst_135280.cljs$lang$protocol_mask$partition0$;
var inst_135288 = (inst_135287 & (64));
var inst_135289 = inst_135280.cljs$core$ISeq$;
var inst_135290 = (inst_135288) || (inst_135289);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135290)){
var statearr_135372_135430 = state_135352__$1;
(statearr_135372_135430[(1)] = (16));

} else {
var statearr_135373_135431 = state_135352__$1;
(statearr_135373_135431[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (22))){
var inst_135312 = (state_135352[(11)]);
var inst_135311 = (state_135352[(14)]);
var inst_135310 = (state_135352[(2)]);
var inst_135311__$1 = cljs.core.nth.call(null,inst_135310,(0),null);
var inst_135312__$1 = cljs.core.nth.call(null,inst_135310,(1),null);
var inst_135313 = (inst_135311__$1 == null);
var inst_135314 = cljs.core._EQ_.call(null,inst_135312__$1,change);
var inst_135315 = (inst_135313) || (inst_135314);
var state_135352__$1 = (function (){var statearr_135374 = state_135352;
(statearr_135374[(11)] = inst_135312__$1);

(statearr_135374[(14)] = inst_135311__$1);

return statearr_135374;
})();
if(cljs.core.truth_(inst_135315)){
var statearr_135375_135432 = state_135352__$1;
(statearr_135375_135432[(1)] = (23));

} else {
var statearr_135376_135433 = state_135352__$1;
(statearr_135376_135433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (36))){
var inst_135302 = (state_135352[(12)]);
var inst_135280 = inst_135302;
var state_135352__$1 = (function (){var statearr_135377 = state_135352;
(statearr_135377[(7)] = inst_135280);

return statearr_135377;
})();
var statearr_135378_135434 = state_135352__$1;
(statearr_135378_135434[(2)] = null);

(statearr_135378_135434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (29))){
var inst_135326 = (state_135352[(9)]);
var state_135352__$1 = state_135352;
var statearr_135379_135435 = state_135352__$1;
(statearr_135379_135435[(2)] = inst_135326);

(statearr_135379_135435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (6))){
var state_135352__$1 = state_135352;
var statearr_135380_135436 = state_135352__$1;
(statearr_135380_135436[(2)] = false);

(statearr_135380_135436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (28))){
var inst_135322 = (state_135352[(2)]);
var inst_135323 = calc_state.call(null);
var inst_135280 = inst_135323;
var state_135352__$1 = (function (){var statearr_135381 = state_135352;
(statearr_135381[(7)] = inst_135280);

(statearr_135381[(15)] = inst_135322);

return statearr_135381;
})();
var statearr_135382_135437 = state_135352__$1;
(statearr_135382_135437[(2)] = null);

(statearr_135382_135437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (25))){
var inst_135348 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
var statearr_135383_135438 = state_135352__$1;
(statearr_135383_135438[(2)] = inst_135348);

(statearr_135383_135438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (34))){
var inst_135346 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
var statearr_135384_135439 = state_135352__$1;
(statearr_135384_135439[(2)] = inst_135346);

(statearr_135384_135439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (17))){
var state_135352__$1 = state_135352;
var statearr_135385_135440 = state_135352__$1;
(statearr_135385_135440[(2)] = false);

(statearr_135385_135440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (3))){
var state_135352__$1 = state_135352;
var statearr_135386_135441 = state_135352__$1;
(statearr_135386_135441[(2)] = false);

(statearr_135386_135441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (12))){
var inst_135350 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135352__$1,inst_135350);
} else {
if((state_val_135353 === (2))){
var inst_135256 = (state_135352[(8)]);
var inst_135261 = inst_135256.cljs$lang$protocol_mask$partition0$;
var inst_135262 = (inst_135261 & (64));
var inst_135263 = inst_135256.cljs$core$ISeq$;
var inst_135264 = (inst_135262) || (inst_135263);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135264)){
var statearr_135387_135442 = state_135352__$1;
(statearr_135387_135442[(1)] = (5));

} else {
var statearr_135388_135443 = state_135352__$1;
(statearr_135388_135443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (23))){
var inst_135311 = (state_135352[(14)]);
var inst_135317 = (inst_135311 == null);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135317)){
var statearr_135389_135444 = state_135352__$1;
(statearr_135389_135444[(1)] = (26));

} else {
var statearr_135390_135445 = state_135352__$1;
(statearr_135390_135445[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (35))){
var inst_135337 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
if(cljs.core.truth_(inst_135337)){
var statearr_135391_135446 = state_135352__$1;
(statearr_135391_135446[(1)] = (36));

} else {
var statearr_135392_135447 = state_135352__$1;
(statearr_135392_135447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (19))){
var inst_135280 = (state_135352[(7)]);
var inst_135299 = cljs.core.apply.call(null,cljs.core.hash_map,inst_135280);
var state_135352__$1 = state_135352;
var statearr_135393_135448 = state_135352__$1;
(statearr_135393_135448[(2)] = inst_135299);

(statearr_135393_135448[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (11))){
var inst_135280 = (state_135352[(7)]);
var inst_135284 = (inst_135280 == null);
var inst_135285 = cljs.core.not.call(null,inst_135284);
var state_135352__$1 = state_135352;
if(inst_135285){
var statearr_135394_135449 = state_135352__$1;
(statearr_135394_135449[(1)] = (13));

} else {
var statearr_135395_135450 = state_135352__$1;
(statearr_135395_135450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (9))){
var inst_135256 = (state_135352[(8)]);
var state_135352__$1 = state_135352;
var statearr_135396_135451 = state_135352__$1;
(statearr_135396_135451[(2)] = inst_135256);

(statearr_135396_135451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (5))){
var state_135352__$1 = state_135352;
var statearr_135397_135452 = state_135352__$1;
(statearr_135397_135452[(2)] = true);

(statearr_135397_135452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (14))){
var state_135352__$1 = state_135352;
var statearr_135398_135453 = state_135352__$1;
(statearr_135398_135453[(2)] = false);

(statearr_135398_135453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (26))){
var inst_135312 = (state_135352[(11)]);
var inst_135319 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_135312);
var state_135352__$1 = state_135352;
var statearr_135399_135454 = state_135352__$1;
(statearr_135399_135454[(2)] = inst_135319);

(statearr_135399_135454[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (16))){
var state_135352__$1 = state_135352;
var statearr_135400_135455 = state_135352__$1;
(statearr_135400_135455[(2)] = true);

(statearr_135400_135455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (38))){
var inst_135342 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
var statearr_135401_135456 = state_135352__$1;
(statearr_135401_135456[(2)] = inst_135342);

(statearr_135401_135456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (30))){
var inst_135303 = (state_135352[(10)]);
var inst_135312 = (state_135352[(11)]);
var inst_135304 = (state_135352[(13)]);
var inst_135329 = cljs.core.empty_QMARK_.call(null,inst_135303);
var inst_135330 = inst_135304.call(null,inst_135312);
var inst_135331 = cljs.core.not.call(null,inst_135330);
var inst_135332 = (inst_135329) && (inst_135331);
var state_135352__$1 = state_135352;
var statearr_135402_135457 = state_135352__$1;
(statearr_135402_135457[(2)] = inst_135332);

(statearr_135402_135457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (10))){
var inst_135256 = (state_135352[(8)]);
var inst_135276 = (state_135352[(2)]);
var inst_135277 = cljs.core.get.call(null,inst_135276,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_135278 = cljs.core.get.call(null,inst_135276,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_135279 = cljs.core.get.call(null,inst_135276,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_135280 = inst_135256;
var state_135352__$1 = (function (){var statearr_135403 = state_135352;
(statearr_135403[(7)] = inst_135280);

(statearr_135403[(16)] = inst_135279);

(statearr_135403[(17)] = inst_135277);

(statearr_135403[(18)] = inst_135278);

return statearr_135403;
})();
var statearr_135404_135458 = state_135352__$1;
(statearr_135404_135458[(2)] = null);

(statearr_135404_135458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (18))){
var inst_135294 = (state_135352[(2)]);
var state_135352__$1 = state_135352;
var statearr_135405_135459 = state_135352__$1;
(statearr_135405_135459[(2)] = inst_135294);

(statearr_135405_135459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (37))){
var state_135352__$1 = state_135352;
var statearr_135406_135460 = state_135352__$1;
(statearr_135406_135460[(2)] = null);

(statearr_135406_135460[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135353 === (8))){
var inst_135256 = (state_135352[(8)]);
var inst_135273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_135256);
var state_135352__$1 = state_135352;
var statearr_135407_135461 = state_135352__$1;
(statearr_135407_135461[(2)] = inst_135273);

(statearr_135407_135461[(1)] = (10));


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
});})(c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33287__auto__,c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33288__auto__ = null;
var cljs$core$async$mix_$_state_machine__33288__auto____0 = (function (){
var statearr_135411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135411[(0)] = cljs$core$async$mix_$_state_machine__33288__auto__);

(statearr_135411[(1)] = (1));

return statearr_135411;
});
var cljs$core$async$mix_$_state_machine__33288__auto____1 = (function (state_135352){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135412){if((e135412 instanceof Object)){
var ex__33291__auto__ = e135412;
var statearr_135413_135462 = state_135352;
(statearr_135413_135462[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135463 = state_135352;
state_135352 = G__135463;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33288__auto__ = function(state_135352){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33288__auto____1.call(this,state_135352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33288__auto____0;
cljs$core$async$mix_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33288__auto____1;
return cljs$core$async$mix_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33354__auto__ = (function (){var statearr_135414 = f__33353__auto__.call(null);
(statearr_135414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135415);

return statearr_135414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args135464 = [];
var len__26121__auto___135467 = arguments.length;
var i__26122__auto___135468 = (0);
while(true){
if((i__26122__auto___135468 < len__26121__auto___135467)){
args135464.push((arguments[i__26122__auto___135468]));

var G__135469 = (i__26122__auto___135468 + (1));
i__26122__auto___135468 = G__135469;
continue;
} else {
}
break;
}

var G__135466 = args135464.length;
switch (G__135466) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135464.length)].join('')));

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
var args135472 = [];
var len__26121__auto___135597 = arguments.length;
var i__26122__auto___135598 = (0);
while(true){
if((i__26122__auto___135598 < len__26121__auto___135597)){
args135472.push((arguments[i__26122__auto___135598]));

var G__135599 = (i__26122__auto___135598 + (1));
i__26122__auto___135598 = G__135599;
continue;
} else {
}
break;
}

var G__135474 = args135472.length;
switch (G__135474) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135472.length)].join('')));

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
return (function (p1__135471_SHARP_){
if(cljs.core.truth_(p1__135471_SHARP_.call(null,topic))){
return p1__135471_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__135471_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async135475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135475 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta135476){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta135476 = meta135476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_135477,meta135476__$1){
var self__ = this;
var _135477__$1 = this;
return (new cljs.core.async.t_cljs$core$async135475(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta135476__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_135477){
var self__ = this;
var _135477__$1 = this;
return self__.meta135476;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta135476","meta135476",-437745251,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async135475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135475";

cljs.core.async.t_cljs$core$async135475.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135475");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async135475 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async135475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta135476){
return (new cljs.core.async.t_cljs$core$async135475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta135476));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async135475(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33352__auto___135601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135601,mults,ensure_mult,p){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135601,mults,ensure_mult,p){
return (function (state_135549){
var state_val_135550 = (state_135549[(1)]);
if((state_val_135550 === (7))){
var inst_135545 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135551_135602 = state_135549__$1;
(statearr_135551_135602[(2)] = inst_135545);

(statearr_135551_135602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (20))){
var state_135549__$1 = state_135549;
var statearr_135552_135603 = state_135549__$1;
(statearr_135552_135603[(2)] = null);

(statearr_135552_135603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (1))){
var state_135549__$1 = state_135549;
var statearr_135553_135604 = state_135549__$1;
(statearr_135553_135604[(2)] = null);

(statearr_135553_135604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (24))){
var inst_135528 = (state_135549[(7)]);
var inst_135537 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_135528);
var state_135549__$1 = state_135549;
var statearr_135554_135605 = state_135549__$1;
(statearr_135554_135605[(2)] = inst_135537);

(statearr_135554_135605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (4))){
var inst_135480 = (state_135549[(8)]);
var inst_135480__$1 = (state_135549[(2)]);
var inst_135481 = (inst_135480__$1 == null);
var state_135549__$1 = (function (){var statearr_135555 = state_135549;
(statearr_135555[(8)] = inst_135480__$1);

return statearr_135555;
})();
if(cljs.core.truth_(inst_135481)){
var statearr_135556_135606 = state_135549__$1;
(statearr_135556_135606[(1)] = (5));

} else {
var statearr_135557_135607 = state_135549__$1;
(statearr_135557_135607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (15))){
var inst_135522 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135558_135608 = state_135549__$1;
(statearr_135558_135608[(2)] = inst_135522);

(statearr_135558_135608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (21))){
var inst_135542 = (state_135549[(2)]);
var state_135549__$1 = (function (){var statearr_135559 = state_135549;
(statearr_135559[(9)] = inst_135542);

return statearr_135559;
})();
var statearr_135560_135609 = state_135549__$1;
(statearr_135560_135609[(2)] = null);

(statearr_135560_135609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (13))){
var inst_135504 = (state_135549[(10)]);
var inst_135506 = cljs.core.chunked_seq_QMARK_.call(null,inst_135504);
var state_135549__$1 = state_135549;
if(inst_135506){
var statearr_135561_135610 = state_135549__$1;
(statearr_135561_135610[(1)] = (16));

} else {
var statearr_135562_135611 = state_135549__$1;
(statearr_135562_135611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (22))){
var inst_135534 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
if(cljs.core.truth_(inst_135534)){
var statearr_135563_135612 = state_135549__$1;
(statearr_135563_135612[(1)] = (23));

} else {
var statearr_135564_135613 = state_135549__$1;
(statearr_135564_135613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (6))){
var inst_135530 = (state_135549[(11)]);
var inst_135528 = (state_135549[(7)]);
var inst_135480 = (state_135549[(8)]);
var inst_135528__$1 = topic_fn.call(null,inst_135480);
var inst_135529 = cljs.core.deref.call(null,mults);
var inst_135530__$1 = cljs.core.get.call(null,inst_135529,inst_135528__$1);
var state_135549__$1 = (function (){var statearr_135565 = state_135549;
(statearr_135565[(11)] = inst_135530__$1);

(statearr_135565[(7)] = inst_135528__$1);

return statearr_135565;
})();
if(cljs.core.truth_(inst_135530__$1)){
var statearr_135566_135614 = state_135549__$1;
(statearr_135566_135614[(1)] = (19));

} else {
var statearr_135567_135615 = state_135549__$1;
(statearr_135567_135615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (25))){
var inst_135539 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135568_135616 = state_135549__$1;
(statearr_135568_135616[(2)] = inst_135539);

(statearr_135568_135616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (17))){
var inst_135504 = (state_135549[(10)]);
var inst_135513 = cljs.core.first.call(null,inst_135504);
var inst_135514 = cljs.core.async.muxch_STAR_.call(null,inst_135513);
var inst_135515 = cljs.core.async.close_BANG_.call(null,inst_135514);
var inst_135516 = cljs.core.next.call(null,inst_135504);
var inst_135490 = inst_135516;
var inst_135491 = null;
var inst_135492 = (0);
var inst_135493 = (0);
var state_135549__$1 = (function (){var statearr_135569 = state_135549;
(statearr_135569[(12)] = inst_135492);

(statearr_135569[(13)] = inst_135490);

(statearr_135569[(14)] = inst_135493);

(statearr_135569[(15)] = inst_135515);

(statearr_135569[(16)] = inst_135491);

return statearr_135569;
})();
var statearr_135570_135617 = state_135549__$1;
(statearr_135570_135617[(2)] = null);

(statearr_135570_135617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (3))){
var inst_135547 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135549__$1,inst_135547);
} else {
if((state_val_135550 === (12))){
var inst_135524 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135571_135618 = state_135549__$1;
(statearr_135571_135618[(2)] = inst_135524);

(statearr_135571_135618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (2))){
var state_135549__$1 = state_135549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135549__$1,(4),ch);
} else {
if((state_val_135550 === (23))){
var state_135549__$1 = state_135549;
var statearr_135572_135619 = state_135549__$1;
(statearr_135572_135619[(2)] = null);

(statearr_135572_135619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (19))){
var inst_135530 = (state_135549[(11)]);
var inst_135480 = (state_135549[(8)]);
var inst_135532 = cljs.core.async.muxch_STAR_.call(null,inst_135530);
var state_135549__$1 = state_135549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135549__$1,(22),inst_135532,inst_135480);
} else {
if((state_val_135550 === (11))){
var inst_135504 = (state_135549[(10)]);
var inst_135490 = (state_135549[(13)]);
var inst_135504__$1 = cljs.core.seq.call(null,inst_135490);
var state_135549__$1 = (function (){var statearr_135573 = state_135549;
(statearr_135573[(10)] = inst_135504__$1);

return statearr_135573;
})();
if(inst_135504__$1){
var statearr_135574_135620 = state_135549__$1;
(statearr_135574_135620[(1)] = (13));

} else {
var statearr_135575_135621 = state_135549__$1;
(statearr_135575_135621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (9))){
var inst_135526 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135576_135622 = state_135549__$1;
(statearr_135576_135622[(2)] = inst_135526);

(statearr_135576_135622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (5))){
var inst_135487 = cljs.core.deref.call(null,mults);
var inst_135488 = cljs.core.vals.call(null,inst_135487);
var inst_135489 = cljs.core.seq.call(null,inst_135488);
var inst_135490 = inst_135489;
var inst_135491 = null;
var inst_135492 = (0);
var inst_135493 = (0);
var state_135549__$1 = (function (){var statearr_135577 = state_135549;
(statearr_135577[(12)] = inst_135492);

(statearr_135577[(13)] = inst_135490);

(statearr_135577[(14)] = inst_135493);

(statearr_135577[(16)] = inst_135491);

return statearr_135577;
})();
var statearr_135578_135623 = state_135549__$1;
(statearr_135578_135623[(2)] = null);

(statearr_135578_135623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (14))){
var state_135549__$1 = state_135549;
var statearr_135582_135624 = state_135549__$1;
(statearr_135582_135624[(2)] = null);

(statearr_135582_135624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (16))){
var inst_135504 = (state_135549[(10)]);
var inst_135508 = cljs.core.chunk_first.call(null,inst_135504);
var inst_135509 = cljs.core.chunk_rest.call(null,inst_135504);
var inst_135510 = cljs.core.count.call(null,inst_135508);
var inst_135490 = inst_135509;
var inst_135491 = inst_135508;
var inst_135492 = inst_135510;
var inst_135493 = (0);
var state_135549__$1 = (function (){var statearr_135583 = state_135549;
(statearr_135583[(12)] = inst_135492);

(statearr_135583[(13)] = inst_135490);

(statearr_135583[(14)] = inst_135493);

(statearr_135583[(16)] = inst_135491);

return statearr_135583;
})();
var statearr_135584_135625 = state_135549__$1;
(statearr_135584_135625[(2)] = null);

(statearr_135584_135625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (10))){
var inst_135492 = (state_135549[(12)]);
var inst_135490 = (state_135549[(13)]);
var inst_135493 = (state_135549[(14)]);
var inst_135491 = (state_135549[(16)]);
var inst_135498 = cljs.core._nth.call(null,inst_135491,inst_135493);
var inst_135499 = cljs.core.async.muxch_STAR_.call(null,inst_135498);
var inst_135500 = cljs.core.async.close_BANG_.call(null,inst_135499);
var inst_135501 = (inst_135493 + (1));
var tmp135579 = inst_135492;
var tmp135580 = inst_135490;
var tmp135581 = inst_135491;
var inst_135490__$1 = tmp135580;
var inst_135491__$1 = tmp135581;
var inst_135492__$1 = tmp135579;
var inst_135493__$1 = inst_135501;
var state_135549__$1 = (function (){var statearr_135585 = state_135549;
(statearr_135585[(17)] = inst_135500);

(statearr_135585[(12)] = inst_135492__$1);

(statearr_135585[(13)] = inst_135490__$1);

(statearr_135585[(14)] = inst_135493__$1);

(statearr_135585[(16)] = inst_135491__$1);

return statearr_135585;
})();
var statearr_135586_135626 = state_135549__$1;
(statearr_135586_135626[(2)] = null);

(statearr_135586_135626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (18))){
var inst_135519 = (state_135549[(2)]);
var state_135549__$1 = state_135549;
var statearr_135587_135627 = state_135549__$1;
(statearr_135587_135627[(2)] = inst_135519);

(statearr_135587_135627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135550 === (8))){
var inst_135492 = (state_135549[(12)]);
var inst_135493 = (state_135549[(14)]);
var inst_135495 = (inst_135493 < inst_135492);
var inst_135496 = inst_135495;
var state_135549__$1 = state_135549;
if(cljs.core.truth_(inst_135496)){
var statearr_135588_135628 = state_135549__$1;
(statearr_135588_135628[(1)] = (10));

} else {
var statearr_135589_135629 = state_135549__$1;
(statearr_135589_135629[(1)] = (11));

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
});})(c__33352__auto___135601,mults,ensure_mult,p))
;
return ((function (switch__33287__auto__,c__33352__auto___135601,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_135593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135593[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_135593[(1)] = (1));

return statearr_135593;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_135549){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135594){if((e135594 instanceof Object)){
var ex__33291__auto__ = e135594;
var statearr_135595_135630 = state_135549;
(statearr_135595_135630[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135631 = state_135549;
state_135549 = G__135631;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_135549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_135549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135601,mults,ensure_mult,p))
})();
var state__33354__auto__ = (function (){var statearr_135596 = f__33353__auto__.call(null);
(statearr_135596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135601);

return statearr_135596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135601,mults,ensure_mult,p))
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
var args135632 = [];
var len__26121__auto___135635 = arguments.length;
var i__26122__auto___135636 = (0);
while(true){
if((i__26122__auto___135636 < len__26121__auto___135635)){
args135632.push((arguments[i__26122__auto___135636]));

var G__135637 = (i__26122__auto___135636 + (1));
i__26122__auto___135636 = G__135637;
continue;
} else {
}
break;
}

var G__135634 = args135632.length;
switch (G__135634) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135632.length)].join('')));

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
var args135639 = [];
var len__26121__auto___135642 = arguments.length;
var i__26122__auto___135643 = (0);
while(true){
if((i__26122__auto___135643 < len__26121__auto___135642)){
args135639.push((arguments[i__26122__auto___135643]));

var G__135644 = (i__26122__auto___135643 + (1));
i__26122__auto___135643 = G__135644;
continue;
} else {
}
break;
}

var G__135641 = args135639.length;
switch (G__135641) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135639.length)].join('')));

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
var args135646 = [];
var len__26121__auto___135717 = arguments.length;
var i__26122__auto___135718 = (0);
while(true){
if((i__26122__auto___135718 < len__26121__auto___135717)){
args135646.push((arguments[i__26122__auto___135718]));

var G__135719 = (i__26122__auto___135718 + (1));
i__26122__auto___135718 = G__135719;
continue;
} else {
}
break;
}

var G__135648 = args135646.length;
switch (G__135648) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135646.length)].join('')));

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
var c__33352__auto___135721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_135687){
var state_val_135688 = (state_135687[(1)]);
if((state_val_135688 === (7))){
var state_135687__$1 = state_135687;
var statearr_135689_135722 = state_135687__$1;
(statearr_135689_135722[(2)] = null);

(statearr_135689_135722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (1))){
var state_135687__$1 = state_135687;
var statearr_135690_135723 = state_135687__$1;
(statearr_135690_135723[(2)] = null);

(statearr_135690_135723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (4))){
var inst_135651 = (state_135687[(7)]);
var inst_135653 = (inst_135651 < cnt);
var state_135687__$1 = state_135687;
if(cljs.core.truth_(inst_135653)){
var statearr_135691_135724 = state_135687__$1;
(statearr_135691_135724[(1)] = (6));

} else {
var statearr_135692_135725 = state_135687__$1;
(statearr_135692_135725[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (15))){
var inst_135683 = (state_135687[(2)]);
var state_135687__$1 = state_135687;
var statearr_135693_135726 = state_135687__$1;
(statearr_135693_135726[(2)] = inst_135683);

(statearr_135693_135726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (13))){
var inst_135676 = cljs.core.async.close_BANG_.call(null,out);
var state_135687__$1 = state_135687;
var statearr_135694_135727 = state_135687__$1;
(statearr_135694_135727[(2)] = inst_135676);

(statearr_135694_135727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (6))){
var state_135687__$1 = state_135687;
var statearr_135695_135728 = state_135687__$1;
(statearr_135695_135728[(2)] = null);

(statearr_135695_135728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (3))){
var inst_135685 = (state_135687[(2)]);
var state_135687__$1 = state_135687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135687__$1,inst_135685);
} else {
if((state_val_135688 === (12))){
var inst_135673 = (state_135687[(8)]);
var inst_135673__$1 = (state_135687[(2)]);
var inst_135674 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_135673__$1);
var state_135687__$1 = (function (){var statearr_135696 = state_135687;
(statearr_135696[(8)] = inst_135673__$1);

return statearr_135696;
})();
if(cljs.core.truth_(inst_135674)){
var statearr_135697_135729 = state_135687__$1;
(statearr_135697_135729[(1)] = (13));

} else {
var statearr_135698_135730 = state_135687__$1;
(statearr_135698_135730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (2))){
var inst_135650 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_135651 = (0);
var state_135687__$1 = (function (){var statearr_135699 = state_135687;
(statearr_135699[(7)] = inst_135651);

(statearr_135699[(9)] = inst_135650);

return statearr_135699;
})();
var statearr_135700_135731 = state_135687__$1;
(statearr_135700_135731[(2)] = null);

(statearr_135700_135731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (11))){
var inst_135651 = (state_135687[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_135687,(10),Object,null,(9));
var inst_135660 = chs__$1.call(null,inst_135651);
var inst_135661 = done.call(null,inst_135651);
var inst_135662 = cljs.core.async.take_BANG_.call(null,inst_135660,inst_135661);
var state_135687__$1 = state_135687;
var statearr_135701_135732 = state_135687__$1;
(statearr_135701_135732[(2)] = inst_135662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (9))){
var inst_135651 = (state_135687[(7)]);
var inst_135664 = (state_135687[(2)]);
var inst_135665 = (inst_135651 + (1));
var inst_135651__$1 = inst_135665;
var state_135687__$1 = (function (){var statearr_135702 = state_135687;
(statearr_135702[(10)] = inst_135664);

(statearr_135702[(7)] = inst_135651__$1);

return statearr_135702;
})();
var statearr_135703_135733 = state_135687__$1;
(statearr_135703_135733[(2)] = null);

(statearr_135703_135733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (5))){
var inst_135671 = (state_135687[(2)]);
var state_135687__$1 = (function (){var statearr_135704 = state_135687;
(statearr_135704[(11)] = inst_135671);

return statearr_135704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135687__$1,(12),dchan);
} else {
if((state_val_135688 === (14))){
var inst_135673 = (state_135687[(8)]);
var inst_135678 = cljs.core.apply.call(null,f,inst_135673);
var state_135687__$1 = state_135687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135687__$1,(16),out,inst_135678);
} else {
if((state_val_135688 === (16))){
var inst_135680 = (state_135687[(2)]);
var state_135687__$1 = (function (){var statearr_135705 = state_135687;
(statearr_135705[(12)] = inst_135680);

return statearr_135705;
})();
var statearr_135706_135734 = state_135687__$1;
(statearr_135706_135734[(2)] = null);

(statearr_135706_135734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (10))){
var inst_135655 = (state_135687[(2)]);
var inst_135656 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_135687__$1 = (function (){var statearr_135707 = state_135687;
(statearr_135707[(13)] = inst_135655);

return statearr_135707;
})();
var statearr_135708_135735 = state_135687__$1;
(statearr_135708_135735[(2)] = inst_135656);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135688 === (8))){
var inst_135669 = (state_135687[(2)]);
var state_135687__$1 = state_135687;
var statearr_135709_135736 = state_135687__$1;
(statearr_135709_135736[(2)] = inst_135669);

(statearr_135709_135736[(1)] = (5));


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
});})(c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33287__auto__,c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_135713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135713[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_135713[(1)] = (1));

return statearr_135713;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_135687){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135714){if((e135714 instanceof Object)){
var ex__33291__auto__ = e135714;
var statearr_135715_135737 = state_135687;
(statearr_135715_135737[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135738 = state_135687;
state_135687 = G__135738;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_135687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_135687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33354__auto__ = (function (){var statearr_135716 = f__33353__auto__.call(null);
(statearr_135716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135721);

return statearr_135716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135721,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args135740 = [];
var len__26121__auto___135798 = arguments.length;
var i__26122__auto___135799 = (0);
while(true){
if((i__26122__auto___135799 < len__26121__auto___135798)){
args135740.push((arguments[i__26122__auto___135799]));

var G__135800 = (i__26122__auto___135799 + (1));
i__26122__auto___135799 = G__135800;
continue;
} else {
}
break;
}

var G__135742 = args135740.length;
switch (G__135742) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135740.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___135802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135802,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135802,out){
return (function (state_135774){
var state_val_135775 = (state_135774[(1)]);
if((state_val_135775 === (7))){
var inst_135754 = (state_135774[(7)]);
var inst_135753 = (state_135774[(8)]);
var inst_135753__$1 = (state_135774[(2)]);
var inst_135754__$1 = cljs.core.nth.call(null,inst_135753__$1,(0),null);
var inst_135755 = cljs.core.nth.call(null,inst_135753__$1,(1),null);
var inst_135756 = (inst_135754__$1 == null);
var state_135774__$1 = (function (){var statearr_135776 = state_135774;
(statearr_135776[(7)] = inst_135754__$1);

(statearr_135776[(9)] = inst_135755);

(statearr_135776[(8)] = inst_135753__$1);

return statearr_135776;
})();
if(cljs.core.truth_(inst_135756)){
var statearr_135777_135803 = state_135774__$1;
(statearr_135777_135803[(1)] = (8));

} else {
var statearr_135778_135804 = state_135774__$1;
(statearr_135778_135804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (1))){
var inst_135743 = cljs.core.vec.call(null,chs);
var inst_135744 = inst_135743;
var state_135774__$1 = (function (){var statearr_135779 = state_135774;
(statearr_135779[(10)] = inst_135744);

return statearr_135779;
})();
var statearr_135780_135805 = state_135774__$1;
(statearr_135780_135805[(2)] = null);

(statearr_135780_135805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (4))){
var inst_135744 = (state_135774[(10)]);
var state_135774__$1 = state_135774;
return cljs.core.async.ioc_alts_BANG_.call(null,state_135774__$1,(7),inst_135744);
} else {
if((state_val_135775 === (6))){
var inst_135770 = (state_135774[(2)]);
var state_135774__$1 = state_135774;
var statearr_135781_135806 = state_135774__$1;
(statearr_135781_135806[(2)] = inst_135770);

(statearr_135781_135806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (3))){
var inst_135772 = (state_135774[(2)]);
var state_135774__$1 = state_135774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135774__$1,inst_135772);
} else {
if((state_val_135775 === (2))){
var inst_135744 = (state_135774[(10)]);
var inst_135746 = cljs.core.count.call(null,inst_135744);
var inst_135747 = (inst_135746 > (0));
var state_135774__$1 = state_135774;
if(cljs.core.truth_(inst_135747)){
var statearr_135783_135807 = state_135774__$1;
(statearr_135783_135807[(1)] = (4));

} else {
var statearr_135784_135808 = state_135774__$1;
(statearr_135784_135808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (11))){
var inst_135744 = (state_135774[(10)]);
var inst_135763 = (state_135774[(2)]);
var tmp135782 = inst_135744;
var inst_135744__$1 = tmp135782;
var state_135774__$1 = (function (){var statearr_135785 = state_135774;
(statearr_135785[(10)] = inst_135744__$1);

(statearr_135785[(11)] = inst_135763);

return statearr_135785;
})();
var statearr_135786_135809 = state_135774__$1;
(statearr_135786_135809[(2)] = null);

(statearr_135786_135809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (9))){
var inst_135754 = (state_135774[(7)]);
var state_135774__$1 = state_135774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135774__$1,(11),out,inst_135754);
} else {
if((state_val_135775 === (5))){
var inst_135768 = cljs.core.async.close_BANG_.call(null,out);
var state_135774__$1 = state_135774;
var statearr_135787_135810 = state_135774__$1;
(statearr_135787_135810[(2)] = inst_135768);

(statearr_135787_135810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (10))){
var inst_135766 = (state_135774[(2)]);
var state_135774__$1 = state_135774;
var statearr_135788_135811 = state_135774__$1;
(statearr_135788_135811[(2)] = inst_135766);

(statearr_135788_135811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135775 === (8))){
var inst_135744 = (state_135774[(10)]);
var inst_135754 = (state_135774[(7)]);
var inst_135755 = (state_135774[(9)]);
var inst_135753 = (state_135774[(8)]);
var inst_135758 = (function (){var cs = inst_135744;
var vec__135749 = inst_135753;
var v = inst_135754;
var c = inst_135755;
return ((function (cs,vec__135749,v,c,inst_135744,inst_135754,inst_135755,inst_135753,state_val_135775,c__33352__auto___135802,out){
return (function (p1__135739_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__135739_SHARP_);
});
;})(cs,vec__135749,v,c,inst_135744,inst_135754,inst_135755,inst_135753,state_val_135775,c__33352__auto___135802,out))
})();
var inst_135759 = cljs.core.filterv.call(null,inst_135758,inst_135744);
var inst_135744__$1 = inst_135759;
var state_135774__$1 = (function (){var statearr_135789 = state_135774;
(statearr_135789[(10)] = inst_135744__$1);

return statearr_135789;
})();
var statearr_135790_135812 = state_135774__$1;
(statearr_135790_135812[(2)] = null);

(statearr_135790_135812[(1)] = (2));


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
});})(c__33352__auto___135802,out))
;
return ((function (switch__33287__auto__,c__33352__auto___135802,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_135794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_135794[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_135794[(1)] = (1));

return statearr_135794;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_135774){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135795){if((e135795 instanceof Object)){
var ex__33291__auto__ = e135795;
var statearr_135796_135813 = state_135774;
(statearr_135796_135813[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135814 = state_135774;
state_135774 = G__135814;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_135774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_135774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135802,out))
})();
var state__33354__auto__ = (function (){var statearr_135797 = f__33353__auto__.call(null);
(statearr_135797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135802);

return statearr_135797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135802,out))
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
var args135815 = [];
var len__26121__auto___135864 = arguments.length;
var i__26122__auto___135865 = (0);
while(true){
if((i__26122__auto___135865 < len__26121__auto___135864)){
args135815.push((arguments[i__26122__auto___135865]));

var G__135866 = (i__26122__auto___135865 + (1));
i__26122__auto___135865 = G__135866;
continue;
} else {
}
break;
}

var G__135817 = args135815.length;
switch (G__135817) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135815.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___135868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135868,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135868,out){
return (function (state_135841){
var state_val_135842 = (state_135841[(1)]);
if((state_val_135842 === (7))){
var inst_135823 = (state_135841[(7)]);
var inst_135823__$1 = (state_135841[(2)]);
var inst_135824 = (inst_135823__$1 == null);
var inst_135825 = cljs.core.not.call(null,inst_135824);
var state_135841__$1 = (function (){var statearr_135843 = state_135841;
(statearr_135843[(7)] = inst_135823__$1);

return statearr_135843;
})();
if(inst_135825){
var statearr_135844_135869 = state_135841__$1;
(statearr_135844_135869[(1)] = (8));

} else {
var statearr_135845_135870 = state_135841__$1;
(statearr_135845_135870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (1))){
var inst_135818 = (0);
var state_135841__$1 = (function (){var statearr_135846 = state_135841;
(statearr_135846[(8)] = inst_135818);

return statearr_135846;
})();
var statearr_135847_135871 = state_135841__$1;
(statearr_135847_135871[(2)] = null);

(statearr_135847_135871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (4))){
var state_135841__$1 = state_135841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135841__$1,(7),ch);
} else {
if((state_val_135842 === (6))){
var inst_135836 = (state_135841[(2)]);
var state_135841__$1 = state_135841;
var statearr_135848_135872 = state_135841__$1;
(statearr_135848_135872[(2)] = inst_135836);

(statearr_135848_135872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (3))){
var inst_135838 = (state_135841[(2)]);
var inst_135839 = cljs.core.async.close_BANG_.call(null,out);
var state_135841__$1 = (function (){var statearr_135849 = state_135841;
(statearr_135849[(9)] = inst_135838);

return statearr_135849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135841__$1,inst_135839);
} else {
if((state_val_135842 === (2))){
var inst_135818 = (state_135841[(8)]);
var inst_135820 = (inst_135818 < n);
var state_135841__$1 = state_135841;
if(cljs.core.truth_(inst_135820)){
var statearr_135850_135873 = state_135841__$1;
(statearr_135850_135873[(1)] = (4));

} else {
var statearr_135851_135874 = state_135841__$1;
(statearr_135851_135874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (11))){
var inst_135818 = (state_135841[(8)]);
var inst_135828 = (state_135841[(2)]);
var inst_135829 = (inst_135818 + (1));
var inst_135818__$1 = inst_135829;
var state_135841__$1 = (function (){var statearr_135852 = state_135841;
(statearr_135852[(8)] = inst_135818__$1);

(statearr_135852[(10)] = inst_135828);

return statearr_135852;
})();
var statearr_135853_135875 = state_135841__$1;
(statearr_135853_135875[(2)] = null);

(statearr_135853_135875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (9))){
var state_135841__$1 = state_135841;
var statearr_135854_135876 = state_135841__$1;
(statearr_135854_135876[(2)] = null);

(statearr_135854_135876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (5))){
var state_135841__$1 = state_135841;
var statearr_135855_135877 = state_135841__$1;
(statearr_135855_135877[(2)] = null);

(statearr_135855_135877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (10))){
var inst_135833 = (state_135841[(2)]);
var state_135841__$1 = state_135841;
var statearr_135856_135878 = state_135841__$1;
(statearr_135856_135878[(2)] = inst_135833);

(statearr_135856_135878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135842 === (8))){
var inst_135823 = (state_135841[(7)]);
var state_135841__$1 = state_135841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135841__$1,(11),out,inst_135823);
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
});})(c__33352__auto___135868,out))
;
return ((function (switch__33287__auto__,c__33352__auto___135868,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_135860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_135860[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_135860[(1)] = (1));

return statearr_135860;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_135841){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135861){if((e135861 instanceof Object)){
var ex__33291__auto__ = e135861;
var statearr_135862_135879 = state_135841;
(statearr_135862_135879[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135880 = state_135841;
state_135841 = G__135880;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_135841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_135841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135868,out))
})();
var state__33354__auto__ = (function (){var statearr_135863 = f__33353__auto__.call(null);
(statearr_135863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135868);

return statearr_135863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135868,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async135888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135888 = (function (map_LT_,f,ch,meta135889){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta135889 = meta135889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135890,meta135889__$1){
var self__ = this;
var _135890__$1 = this;
return (new cljs.core.async.t_cljs$core$async135888(self__.map_LT_,self__.f,self__.ch,meta135889__$1));
});

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135890){
var self__ = this;
var _135890__$1 = this;
return self__.meta135889;
});

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async135891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135891 = (function (map_LT_,f,ch,meta135889,_,fn1,meta135892){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta135889 = meta135889;
this._ = _;
this.fn1 = fn1;
this.meta135892 = meta135892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_135893,meta135892__$1){
var self__ = this;
var _135893__$1 = this;
return (new cljs.core.async.t_cljs$core$async135891(self__.map_LT_,self__.f,self__.ch,self__.meta135889,self__._,self__.fn1,meta135892__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_135893){
var self__ = this;
var _135893__$1 = this;
return self__.meta135892;
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__135881_SHARP_){
return f1.call(null,(((p1__135881_SHARP_ == null))?null:self__.f.call(null,p1__135881_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta135889","meta135889",303945686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async135888","cljs.core.async/t_cljs$core$async135888",1622906711,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta135892","meta135892",1198727644,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async135891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135891";

cljs.core.async.t_cljs$core$async135891.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135891");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async135891 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async135891(map_LT___$1,f__$1,ch__$1,meta135889__$1,___$2,fn1__$1,meta135892){
return (new cljs.core.async.t_cljs$core$async135891(map_LT___$1,f__$1,ch__$1,meta135889__$1,___$2,fn1__$1,meta135892));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async135891(self__.map_LT_,self__.f,self__.ch,self__.meta135889,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async135888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async135888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta135889","meta135889",303945686,null)], null);
});

cljs.core.async.t_cljs$core$async135888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135888";

cljs.core.async.t_cljs$core$async135888.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135888");
});

cljs.core.async.__GT_t_cljs$core$async135888 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async135888(map_LT___$1,f__$1,ch__$1,meta135889){
return (new cljs.core.async.t_cljs$core$async135888(map_LT___$1,f__$1,ch__$1,meta135889));
});

}

return (new cljs.core.async.t_cljs$core$async135888(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async135897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135897 = (function (map_GT_,f,ch,meta135898){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta135898 = meta135898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135899,meta135898__$1){
var self__ = this;
var _135899__$1 = this;
return (new cljs.core.async.t_cljs$core$async135897(self__.map_GT_,self__.f,self__.ch,meta135898__$1));
});

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135899){
var self__ = this;
var _135899__$1 = this;
return self__.meta135898;
});

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async135897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async135897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta135898","meta135898",-1164605781,null)], null);
});

cljs.core.async.t_cljs$core$async135897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135897";

cljs.core.async.t_cljs$core$async135897.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135897");
});

cljs.core.async.__GT_t_cljs$core$async135897 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async135897(map_GT___$1,f__$1,ch__$1,meta135898){
return (new cljs.core.async.t_cljs$core$async135897(map_GT___$1,f__$1,ch__$1,meta135898));
});

}

return (new cljs.core.async.t_cljs$core$async135897(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async135903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async135903 = (function (filter_GT_,p,ch,meta135904){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta135904 = meta135904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135905,meta135904__$1){
var self__ = this;
var _135905__$1 = this;
return (new cljs.core.async.t_cljs$core$async135903(self__.filter_GT_,self__.p,self__.ch,meta135904__$1));
});

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135905){
var self__ = this;
var _135905__$1 = this;
return self__.meta135904;
});

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async135903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async135903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta135904","meta135904",1968168851,null)], null);
});

cljs.core.async.t_cljs$core$async135903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async135903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async135903";

cljs.core.async.t_cljs$core$async135903.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async135903");
});

cljs.core.async.__GT_t_cljs$core$async135903 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async135903(filter_GT___$1,p__$1,ch__$1,meta135904){
return (new cljs.core.async.t_cljs$core$async135903(filter_GT___$1,p__$1,ch__$1,meta135904));
});

}

return (new cljs.core.async.t_cljs$core$async135903(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args135906 = [];
var len__26121__auto___135950 = arguments.length;
var i__26122__auto___135951 = (0);
while(true){
if((i__26122__auto___135951 < len__26121__auto___135950)){
args135906.push((arguments[i__26122__auto___135951]));

var G__135952 = (i__26122__auto___135951 + (1));
i__26122__auto___135951 = G__135952;
continue;
} else {
}
break;
}

var G__135908 = args135906.length;
switch (G__135908) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135906.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___135954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___135954,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___135954,out){
return (function (state_135929){
var state_val_135930 = (state_135929[(1)]);
if((state_val_135930 === (7))){
var inst_135925 = (state_135929[(2)]);
var state_135929__$1 = state_135929;
var statearr_135931_135955 = state_135929__$1;
(statearr_135931_135955[(2)] = inst_135925);

(statearr_135931_135955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (1))){
var state_135929__$1 = state_135929;
var statearr_135932_135956 = state_135929__$1;
(statearr_135932_135956[(2)] = null);

(statearr_135932_135956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (4))){
var inst_135911 = (state_135929[(7)]);
var inst_135911__$1 = (state_135929[(2)]);
var inst_135912 = (inst_135911__$1 == null);
var state_135929__$1 = (function (){var statearr_135933 = state_135929;
(statearr_135933[(7)] = inst_135911__$1);

return statearr_135933;
})();
if(cljs.core.truth_(inst_135912)){
var statearr_135934_135957 = state_135929__$1;
(statearr_135934_135957[(1)] = (5));

} else {
var statearr_135935_135958 = state_135929__$1;
(statearr_135935_135958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (6))){
var inst_135911 = (state_135929[(7)]);
var inst_135916 = p.call(null,inst_135911);
var state_135929__$1 = state_135929;
if(cljs.core.truth_(inst_135916)){
var statearr_135936_135959 = state_135929__$1;
(statearr_135936_135959[(1)] = (8));

} else {
var statearr_135937_135960 = state_135929__$1;
(statearr_135937_135960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (3))){
var inst_135927 = (state_135929[(2)]);
var state_135929__$1 = state_135929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135929__$1,inst_135927);
} else {
if((state_val_135930 === (2))){
var state_135929__$1 = state_135929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135929__$1,(4),ch);
} else {
if((state_val_135930 === (11))){
var inst_135919 = (state_135929[(2)]);
var state_135929__$1 = state_135929;
var statearr_135938_135961 = state_135929__$1;
(statearr_135938_135961[(2)] = inst_135919);

(statearr_135938_135961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (9))){
var state_135929__$1 = state_135929;
var statearr_135939_135962 = state_135929__$1;
(statearr_135939_135962[(2)] = null);

(statearr_135939_135962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (5))){
var inst_135914 = cljs.core.async.close_BANG_.call(null,out);
var state_135929__$1 = state_135929;
var statearr_135940_135963 = state_135929__$1;
(statearr_135940_135963[(2)] = inst_135914);

(statearr_135940_135963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (10))){
var inst_135922 = (state_135929[(2)]);
var state_135929__$1 = (function (){var statearr_135941 = state_135929;
(statearr_135941[(8)] = inst_135922);

return statearr_135941;
})();
var statearr_135942_135964 = state_135929__$1;
(statearr_135942_135964[(2)] = null);

(statearr_135942_135964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_135930 === (8))){
var inst_135911 = (state_135929[(7)]);
var state_135929__$1 = state_135929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135929__$1,(11),out,inst_135911);
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
});})(c__33352__auto___135954,out))
;
return ((function (switch__33287__auto__,c__33352__auto___135954,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_135946 = [null,null,null,null,null,null,null,null,null];
(statearr_135946[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_135946[(1)] = (1));

return statearr_135946;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_135929){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_135929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e135947){if((e135947 instanceof Object)){
var ex__33291__auto__ = e135947;
var statearr_135948_135965 = state_135929;
(statearr_135948_135965[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e135947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__135966 = state_135929;
state_135929 = G__135966;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_135929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_135929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___135954,out))
})();
var state__33354__auto__ = (function (){var statearr_135949 = f__33353__auto__.call(null);
(statearr_135949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___135954);

return statearr_135949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___135954,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args135967 = [];
var len__26121__auto___135970 = arguments.length;
var i__26122__auto___135971 = (0);
while(true){
if((i__26122__auto___135971 < len__26121__auto___135970)){
args135967.push((arguments[i__26122__auto___135971]));

var G__135972 = (i__26122__auto___135971 + (1));
i__26122__auto___135971 = G__135972;
continue;
} else {
}
break;
}

var G__135969 = args135967.length;
switch (G__135969) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args135967.length)].join('')));

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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_136139){
var state_val_136140 = (state_136139[(1)]);
if((state_val_136140 === (7))){
var inst_136135 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
var statearr_136141_136182 = state_136139__$1;
(statearr_136141_136182[(2)] = inst_136135);

(statearr_136141_136182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (20))){
var inst_136105 = (state_136139[(7)]);
var inst_136116 = (state_136139[(2)]);
var inst_136117 = cljs.core.next.call(null,inst_136105);
var inst_136091 = inst_136117;
var inst_136092 = null;
var inst_136093 = (0);
var inst_136094 = (0);
var state_136139__$1 = (function (){var statearr_136142 = state_136139;
(statearr_136142[(8)] = inst_136091);

(statearr_136142[(9)] = inst_136093);

(statearr_136142[(10)] = inst_136092);

(statearr_136142[(11)] = inst_136116);

(statearr_136142[(12)] = inst_136094);

return statearr_136142;
})();
var statearr_136143_136183 = state_136139__$1;
(statearr_136143_136183[(2)] = null);

(statearr_136143_136183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (1))){
var state_136139__$1 = state_136139;
var statearr_136144_136184 = state_136139__$1;
(statearr_136144_136184[(2)] = null);

(statearr_136144_136184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (4))){
var inst_136080 = (state_136139[(13)]);
var inst_136080__$1 = (state_136139[(2)]);
var inst_136081 = (inst_136080__$1 == null);
var state_136139__$1 = (function (){var statearr_136145 = state_136139;
(statearr_136145[(13)] = inst_136080__$1);

return statearr_136145;
})();
if(cljs.core.truth_(inst_136081)){
var statearr_136146_136185 = state_136139__$1;
(statearr_136146_136185[(1)] = (5));

} else {
var statearr_136147_136186 = state_136139__$1;
(statearr_136147_136186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (15))){
var state_136139__$1 = state_136139;
var statearr_136151_136187 = state_136139__$1;
(statearr_136151_136187[(2)] = null);

(statearr_136151_136187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (21))){
var state_136139__$1 = state_136139;
var statearr_136152_136188 = state_136139__$1;
(statearr_136152_136188[(2)] = null);

(statearr_136152_136188[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (13))){
var inst_136091 = (state_136139[(8)]);
var inst_136093 = (state_136139[(9)]);
var inst_136092 = (state_136139[(10)]);
var inst_136094 = (state_136139[(12)]);
var inst_136101 = (state_136139[(2)]);
var inst_136102 = (inst_136094 + (1));
var tmp136148 = inst_136091;
var tmp136149 = inst_136093;
var tmp136150 = inst_136092;
var inst_136091__$1 = tmp136148;
var inst_136092__$1 = tmp136150;
var inst_136093__$1 = tmp136149;
var inst_136094__$1 = inst_136102;
var state_136139__$1 = (function (){var statearr_136153 = state_136139;
(statearr_136153[(14)] = inst_136101);

(statearr_136153[(8)] = inst_136091__$1);

(statearr_136153[(9)] = inst_136093__$1);

(statearr_136153[(10)] = inst_136092__$1);

(statearr_136153[(12)] = inst_136094__$1);

return statearr_136153;
})();
var statearr_136154_136189 = state_136139__$1;
(statearr_136154_136189[(2)] = null);

(statearr_136154_136189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (22))){
var state_136139__$1 = state_136139;
var statearr_136155_136190 = state_136139__$1;
(statearr_136155_136190[(2)] = null);

(statearr_136155_136190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (6))){
var inst_136080 = (state_136139[(13)]);
var inst_136089 = f.call(null,inst_136080);
var inst_136090 = cljs.core.seq.call(null,inst_136089);
var inst_136091 = inst_136090;
var inst_136092 = null;
var inst_136093 = (0);
var inst_136094 = (0);
var state_136139__$1 = (function (){var statearr_136156 = state_136139;
(statearr_136156[(8)] = inst_136091);

(statearr_136156[(9)] = inst_136093);

(statearr_136156[(10)] = inst_136092);

(statearr_136156[(12)] = inst_136094);

return statearr_136156;
})();
var statearr_136157_136191 = state_136139__$1;
(statearr_136157_136191[(2)] = null);

(statearr_136157_136191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (17))){
var inst_136105 = (state_136139[(7)]);
var inst_136109 = cljs.core.chunk_first.call(null,inst_136105);
var inst_136110 = cljs.core.chunk_rest.call(null,inst_136105);
var inst_136111 = cljs.core.count.call(null,inst_136109);
var inst_136091 = inst_136110;
var inst_136092 = inst_136109;
var inst_136093 = inst_136111;
var inst_136094 = (0);
var state_136139__$1 = (function (){var statearr_136158 = state_136139;
(statearr_136158[(8)] = inst_136091);

(statearr_136158[(9)] = inst_136093);

(statearr_136158[(10)] = inst_136092);

(statearr_136158[(12)] = inst_136094);

return statearr_136158;
})();
var statearr_136159_136192 = state_136139__$1;
(statearr_136159_136192[(2)] = null);

(statearr_136159_136192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (3))){
var inst_136137 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136139__$1,inst_136137);
} else {
if((state_val_136140 === (12))){
var inst_136125 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
var statearr_136160_136193 = state_136139__$1;
(statearr_136160_136193[(2)] = inst_136125);

(statearr_136160_136193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (2))){
var state_136139__$1 = state_136139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136139__$1,(4),in$);
} else {
if((state_val_136140 === (23))){
var inst_136133 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
var statearr_136161_136194 = state_136139__$1;
(statearr_136161_136194[(2)] = inst_136133);

(statearr_136161_136194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (19))){
var inst_136120 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
var statearr_136162_136195 = state_136139__$1;
(statearr_136162_136195[(2)] = inst_136120);

(statearr_136162_136195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (11))){
var inst_136105 = (state_136139[(7)]);
var inst_136091 = (state_136139[(8)]);
var inst_136105__$1 = cljs.core.seq.call(null,inst_136091);
var state_136139__$1 = (function (){var statearr_136163 = state_136139;
(statearr_136163[(7)] = inst_136105__$1);

return statearr_136163;
})();
if(inst_136105__$1){
var statearr_136164_136196 = state_136139__$1;
(statearr_136164_136196[(1)] = (14));

} else {
var statearr_136165_136197 = state_136139__$1;
(statearr_136165_136197[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (9))){
var inst_136127 = (state_136139[(2)]);
var inst_136128 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_136139__$1 = (function (){var statearr_136166 = state_136139;
(statearr_136166[(15)] = inst_136127);

return statearr_136166;
})();
if(cljs.core.truth_(inst_136128)){
var statearr_136167_136198 = state_136139__$1;
(statearr_136167_136198[(1)] = (21));

} else {
var statearr_136168_136199 = state_136139__$1;
(statearr_136168_136199[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (5))){
var inst_136083 = cljs.core.async.close_BANG_.call(null,out);
var state_136139__$1 = state_136139;
var statearr_136169_136200 = state_136139__$1;
(statearr_136169_136200[(2)] = inst_136083);

(statearr_136169_136200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (14))){
var inst_136105 = (state_136139[(7)]);
var inst_136107 = cljs.core.chunked_seq_QMARK_.call(null,inst_136105);
var state_136139__$1 = state_136139;
if(inst_136107){
var statearr_136170_136201 = state_136139__$1;
(statearr_136170_136201[(1)] = (17));

} else {
var statearr_136171_136202 = state_136139__$1;
(statearr_136171_136202[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (16))){
var inst_136123 = (state_136139[(2)]);
var state_136139__$1 = state_136139;
var statearr_136172_136203 = state_136139__$1;
(statearr_136172_136203[(2)] = inst_136123);

(statearr_136172_136203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136140 === (10))){
var inst_136092 = (state_136139[(10)]);
var inst_136094 = (state_136139[(12)]);
var inst_136099 = cljs.core._nth.call(null,inst_136092,inst_136094);
var state_136139__$1 = state_136139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136139__$1,(13),out,inst_136099);
} else {
if((state_val_136140 === (18))){
var inst_136105 = (state_136139[(7)]);
var inst_136114 = cljs.core.first.call(null,inst_136105);
var state_136139__$1 = state_136139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136139__$1,(20),out,inst_136114);
} else {
if((state_val_136140 === (8))){
var inst_136093 = (state_136139[(9)]);
var inst_136094 = (state_136139[(12)]);
var inst_136096 = (inst_136094 < inst_136093);
var inst_136097 = inst_136096;
var state_136139__$1 = state_136139;
if(cljs.core.truth_(inst_136097)){
var statearr_136173_136204 = state_136139__$1;
(statearr_136173_136204[(1)] = (10));

} else {
var statearr_136174_136205 = state_136139__$1;
(statearr_136174_136205[(1)] = (11));

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
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_136178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_136178[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__);

(statearr_136178[(1)] = (1));

return statearr_136178;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1 = (function (state_136139){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_136139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e136179){if((e136179 instanceof Object)){
var ex__33291__auto__ = e136179;
var statearr_136180_136206 = state_136139;
(statearr_136180_136206[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136207 = state_136139;
state_136139 = G__136207;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__ = function(state_136139){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1.call(this,state_136139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_136181 = f__33353__auto__.call(null);
(statearr_136181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_136181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args136208 = [];
var len__26121__auto___136211 = arguments.length;
var i__26122__auto___136212 = (0);
while(true){
if((i__26122__auto___136212 < len__26121__auto___136211)){
args136208.push((arguments[i__26122__auto___136212]));

var G__136213 = (i__26122__auto___136212 + (1));
i__26122__auto___136212 = G__136213;
continue;
} else {
}
break;
}

var G__136210 = args136208.length;
switch (G__136210) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args136208.length)].join('')));

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
var args136215 = [];
var len__26121__auto___136218 = arguments.length;
var i__26122__auto___136219 = (0);
while(true){
if((i__26122__auto___136219 < len__26121__auto___136218)){
args136215.push((arguments[i__26122__auto___136219]));

var G__136220 = (i__26122__auto___136219 + (1));
i__26122__auto___136219 = G__136220;
continue;
} else {
}
break;
}

var G__136217 = args136215.length;
switch (G__136217) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args136215.length)].join('')));

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
var args136222 = [];
var len__26121__auto___136273 = arguments.length;
var i__26122__auto___136274 = (0);
while(true){
if((i__26122__auto___136274 < len__26121__auto___136273)){
args136222.push((arguments[i__26122__auto___136274]));

var G__136275 = (i__26122__auto___136274 + (1));
i__26122__auto___136274 = G__136275;
continue;
} else {
}
break;
}

var G__136224 = args136222.length;
switch (G__136224) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args136222.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___136277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___136277,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___136277,out){
return (function (state_136248){
var state_val_136249 = (state_136248[(1)]);
if((state_val_136249 === (7))){
var inst_136243 = (state_136248[(2)]);
var state_136248__$1 = state_136248;
var statearr_136250_136278 = state_136248__$1;
(statearr_136250_136278[(2)] = inst_136243);

(statearr_136250_136278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (1))){
var inst_136225 = null;
var state_136248__$1 = (function (){var statearr_136251 = state_136248;
(statearr_136251[(7)] = inst_136225);

return statearr_136251;
})();
var statearr_136252_136279 = state_136248__$1;
(statearr_136252_136279[(2)] = null);

(statearr_136252_136279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (4))){
var inst_136228 = (state_136248[(8)]);
var inst_136228__$1 = (state_136248[(2)]);
var inst_136229 = (inst_136228__$1 == null);
var inst_136230 = cljs.core.not.call(null,inst_136229);
var state_136248__$1 = (function (){var statearr_136253 = state_136248;
(statearr_136253[(8)] = inst_136228__$1);

return statearr_136253;
})();
if(inst_136230){
var statearr_136254_136280 = state_136248__$1;
(statearr_136254_136280[(1)] = (5));

} else {
var statearr_136255_136281 = state_136248__$1;
(statearr_136255_136281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (6))){
var state_136248__$1 = state_136248;
var statearr_136256_136282 = state_136248__$1;
(statearr_136256_136282[(2)] = null);

(statearr_136256_136282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (3))){
var inst_136245 = (state_136248[(2)]);
var inst_136246 = cljs.core.async.close_BANG_.call(null,out);
var state_136248__$1 = (function (){var statearr_136257 = state_136248;
(statearr_136257[(9)] = inst_136245);

return statearr_136257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136248__$1,inst_136246);
} else {
if((state_val_136249 === (2))){
var state_136248__$1 = state_136248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136248__$1,(4),ch);
} else {
if((state_val_136249 === (11))){
var inst_136228 = (state_136248[(8)]);
var inst_136237 = (state_136248[(2)]);
var inst_136225 = inst_136228;
var state_136248__$1 = (function (){var statearr_136258 = state_136248;
(statearr_136258[(7)] = inst_136225);

(statearr_136258[(10)] = inst_136237);

return statearr_136258;
})();
var statearr_136259_136283 = state_136248__$1;
(statearr_136259_136283[(2)] = null);

(statearr_136259_136283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (9))){
var inst_136228 = (state_136248[(8)]);
var state_136248__$1 = state_136248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136248__$1,(11),out,inst_136228);
} else {
if((state_val_136249 === (5))){
var inst_136225 = (state_136248[(7)]);
var inst_136228 = (state_136248[(8)]);
var inst_136232 = cljs.core._EQ_.call(null,inst_136228,inst_136225);
var state_136248__$1 = state_136248;
if(inst_136232){
var statearr_136261_136284 = state_136248__$1;
(statearr_136261_136284[(1)] = (8));

} else {
var statearr_136262_136285 = state_136248__$1;
(statearr_136262_136285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (10))){
var inst_136240 = (state_136248[(2)]);
var state_136248__$1 = state_136248;
var statearr_136263_136286 = state_136248__$1;
(statearr_136263_136286[(2)] = inst_136240);

(statearr_136263_136286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136249 === (8))){
var inst_136225 = (state_136248[(7)]);
var tmp136260 = inst_136225;
var inst_136225__$1 = tmp136260;
var state_136248__$1 = (function (){var statearr_136264 = state_136248;
(statearr_136264[(7)] = inst_136225__$1);

return statearr_136264;
})();
var statearr_136265_136287 = state_136248__$1;
(statearr_136265_136287[(2)] = null);

(statearr_136265_136287[(1)] = (2));


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
});})(c__33352__auto___136277,out))
;
return ((function (switch__33287__auto__,c__33352__auto___136277,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_136269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_136269[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_136269[(1)] = (1));

return statearr_136269;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_136248){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_136248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e136270){if((e136270 instanceof Object)){
var ex__33291__auto__ = e136270;
var statearr_136271_136288 = state_136248;
(statearr_136271_136288[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136289 = state_136248;
state_136248 = G__136289;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_136248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_136248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___136277,out))
})();
var state__33354__auto__ = (function (){var statearr_136272 = f__33353__auto__.call(null);
(statearr_136272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___136277);

return statearr_136272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___136277,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args136290 = [];
var len__26121__auto___136360 = arguments.length;
var i__26122__auto___136361 = (0);
while(true){
if((i__26122__auto___136361 < len__26121__auto___136360)){
args136290.push((arguments[i__26122__auto___136361]));

var G__136362 = (i__26122__auto___136361 + (1));
i__26122__auto___136361 = G__136362;
continue;
} else {
}
break;
}

var G__136292 = args136290.length;
switch (G__136292) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args136290.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___136364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___136364,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___136364,out){
return (function (state_136330){
var state_val_136331 = (state_136330[(1)]);
if((state_val_136331 === (7))){
var inst_136326 = (state_136330[(2)]);
var state_136330__$1 = state_136330;
var statearr_136332_136365 = state_136330__$1;
(statearr_136332_136365[(2)] = inst_136326);

(statearr_136332_136365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (1))){
var inst_136293 = (new Array(n));
var inst_136294 = inst_136293;
var inst_136295 = (0);
var state_136330__$1 = (function (){var statearr_136333 = state_136330;
(statearr_136333[(7)] = inst_136295);

(statearr_136333[(8)] = inst_136294);

return statearr_136333;
})();
var statearr_136334_136366 = state_136330__$1;
(statearr_136334_136366[(2)] = null);

(statearr_136334_136366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (4))){
var inst_136298 = (state_136330[(9)]);
var inst_136298__$1 = (state_136330[(2)]);
var inst_136299 = (inst_136298__$1 == null);
var inst_136300 = cljs.core.not.call(null,inst_136299);
var state_136330__$1 = (function (){var statearr_136335 = state_136330;
(statearr_136335[(9)] = inst_136298__$1);

return statearr_136335;
})();
if(inst_136300){
var statearr_136336_136367 = state_136330__$1;
(statearr_136336_136367[(1)] = (5));

} else {
var statearr_136337_136368 = state_136330__$1;
(statearr_136337_136368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (15))){
var inst_136320 = (state_136330[(2)]);
var state_136330__$1 = state_136330;
var statearr_136338_136369 = state_136330__$1;
(statearr_136338_136369[(2)] = inst_136320);

(statearr_136338_136369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (13))){
var state_136330__$1 = state_136330;
var statearr_136339_136370 = state_136330__$1;
(statearr_136339_136370[(2)] = null);

(statearr_136339_136370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (6))){
var inst_136295 = (state_136330[(7)]);
var inst_136316 = (inst_136295 > (0));
var state_136330__$1 = state_136330;
if(cljs.core.truth_(inst_136316)){
var statearr_136340_136371 = state_136330__$1;
(statearr_136340_136371[(1)] = (12));

} else {
var statearr_136341_136372 = state_136330__$1;
(statearr_136341_136372[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (3))){
var inst_136328 = (state_136330[(2)]);
var state_136330__$1 = state_136330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136330__$1,inst_136328);
} else {
if((state_val_136331 === (12))){
var inst_136294 = (state_136330[(8)]);
var inst_136318 = cljs.core.vec.call(null,inst_136294);
var state_136330__$1 = state_136330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136330__$1,(15),out,inst_136318);
} else {
if((state_val_136331 === (2))){
var state_136330__$1 = state_136330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136330__$1,(4),ch);
} else {
if((state_val_136331 === (11))){
var inst_136310 = (state_136330[(2)]);
var inst_136311 = (new Array(n));
var inst_136294 = inst_136311;
var inst_136295 = (0);
var state_136330__$1 = (function (){var statearr_136342 = state_136330;
(statearr_136342[(10)] = inst_136310);

(statearr_136342[(7)] = inst_136295);

(statearr_136342[(8)] = inst_136294);

return statearr_136342;
})();
var statearr_136343_136373 = state_136330__$1;
(statearr_136343_136373[(2)] = null);

(statearr_136343_136373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (9))){
var inst_136294 = (state_136330[(8)]);
var inst_136308 = cljs.core.vec.call(null,inst_136294);
var state_136330__$1 = state_136330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136330__$1,(11),out,inst_136308);
} else {
if((state_val_136331 === (5))){
var inst_136303 = (state_136330[(11)]);
var inst_136295 = (state_136330[(7)]);
var inst_136298 = (state_136330[(9)]);
var inst_136294 = (state_136330[(8)]);
var inst_136302 = (inst_136294[inst_136295] = inst_136298);
var inst_136303__$1 = (inst_136295 + (1));
var inst_136304 = (inst_136303__$1 < n);
var state_136330__$1 = (function (){var statearr_136344 = state_136330;
(statearr_136344[(12)] = inst_136302);

(statearr_136344[(11)] = inst_136303__$1);

return statearr_136344;
})();
if(cljs.core.truth_(inst_136304)){
var statearr_136345_136374 = state_136330__$1;
(statearr_136345_136374[(1)] = (8));

} else {
var statearr_136346_136375 = state_136330__$1;
(statearr_136346_136375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (14))){
var inst_136323 = (state_136330[(2)]);
var inst_136324 = cljs.core.async.close_BANG_.call(null,out);
var state_136330__$1 = (function (){var statearr_136348 = state_136330;
(statearr_136348[(13)] = inst_136323);

return statearr_136348;
})();
var statearr_136349_136376 = state_136330__$1;
(statearr_136349_136376[(2)] = inst_136324);

(statearr_136349_136376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (10))){
var inst_136314 = (state_136330[(2)]);
var state_136330__$1 = state_136330;
var statearr_136350_136377 = state_136330__$1;
(statearr_136350_136377[(2)] = inst_136314);

(statearr_136350_136377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136331 === (8))){
var inst_136303 = (state_136330[(11)]);
var inst_136294 = (state_136330[(8)]);
var tmp136347 = inst_136294;
var inst_136294__$1 = tmp136347;
var inst_136295 = inst_136303;
var state_136330__$1 = (function (){var statearr_136351 = state_136330;
(statearr_136351[(7)] = inst_136295);

(statearr_136351[(8)] = inst_136294__$1);

return statearr_136351;
})();
var statearr_136352_136378 = state_136330__$1;
(statearr_136352_136378[(2)] = null);

(statearr_136352_136378[(1)] = (2));


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
});})(c__33352__auto___136364,out))
;
return ((function (switch__33287__auto__,c__33352__auto___136364,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_136356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_136356[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_136356[(1)] = (1));

return statearr_136356;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_136330){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_136330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e136357){if((e136357 instanceof Object)){
var ex__33291__auto__ = e136357;
var statearr_136358_136379 = state_136330;
(statearr_136358_136379[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136380 = state_136330;
state_136330 = G__136380;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_136330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_136330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___136364,out))
})();
var state__33354__auto__ = (function (){var statearr_136359 = f__33353__auto__.call(null);
(statearr_136359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___136364);

return statearr_136359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___136364,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args136381 = [];
var len__26121__auto___136455 = arguments.length;
var i__26122__auto___136456 = (0);
while(true){
if((i__26122__auto___136456 < len__26121__auto___136455)){
args136381.push((arguments[i__26122__auto___136456]));

var G__136457 = (i__26122__auto___136456 + (1));
i__26122__auto___136456 = G__136457;
continue;
} else {
}
break;
}

var G__136383 = args136381.length;
switch (G__136383) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args136381.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___136459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___136459,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___136459,out){
return (function (state_136425){
var state_val_136426 = (state_136425[(1)]);
if((state_val_136426 === (7))){
var inst_136421 = (state_136425[(2)]);
var state_136425__$1 = state_136425;
var statearr_136427_136460 = state_136425__$1;
(statearr_136427_136460[(2)] = inst_136421);

(statearr_136427_136460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (1))){
var inst_136384 = [];
var inst_136385 = inst_136384;
var inst_136386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_136425__$1 = (function (){var statearr_136428 = state_136425;
(statearr_136428[(7)] = inst_136386);

(statearr_136428[(8)] = inst_136385);

return statearr_136428;
})();
var statearr_136429_136461 = state_136425__$1;
(statearr_136429_136461[(2)] = null);

(statearr_136429_136461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (4))){
var inst_136389 = (state_136425[(9)]);
var inst_136389__$1 = (state_136425[(2)]);
var inst_136390 = (inst_136389__$1 == null);
var inst_136391 = cljs.core.not.call(null,inst_136390);
var state_136425__$1 = (function (){var statearr_136430 = state_136425;
(statearr_136430[(9)] = inst_136389__$1);

return statearr_136430;
})();
if(inst_136391){
var statearr_136431_136462 = state_136425__$1;
(statearr_136431_136462[(1)] = (5));

} else {
var statearr_136432_136463 = state_136425__$1;
(statearr_136432_136463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (15))){
var inst_136415 = (state_136425[(2)]);
var state_136425__$1 = state_136425;
var statearr_136433_136464 = state_136425__$1;
(statearr_136433_136464[(2)] = inst_136415);

(statearr_136433_136464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (13))){
var state_136425__$1 = state_136425;
var statearr_136434_136465 = state_136425__$1;
(statearr_136434_136465[(2)] = null);

(statearr_136434_136465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (6))){
var inst_136385 = (state_136425[(8)]);
var inst_136410 = inst_136385.length;
var inst_136411 = (inst_136410 > (0));
var state_136425__$1 = state_136425;
if(cljs.core.truth_(inst_136411)){
var statearr_136435_136466 = state_136425__$1;
(statearr_136435_136466[(1)] = (12));

} else {
var statearr_136436_136467 = state_136425__$1;
(statearr_136436_136467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (3))){
var inst_136423 = (state_136425[(2)]);
var state_136425__$1 = state_136425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136425__$1,inst_136423);
} else {
if((state_val_136426 === (12))){
var inst_136385 = (state_136425[(8)]);
var inst_136413 = cljs.core.vec.call(null,inst_136385);
var state_136425__$1 = state_136425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136425__$1,(15),out,inst_136413);
} else {
if((state_val_136426 === (2))){
var state_136425__$1 = state_136425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136425__$1,(4),ch);
} else {
if((state_val_136426 === (11))){
var inst_136389 = (state_136425[(9)]);
var inst_136393 = (state_136425[(10)]);
var inst_136403 = (state_136425[(2)]);
var inst_136404 = [];
var inst_136405 = inst_136404.push(inst_136389);
var inst_136385 = inst_136404;
var inst_136386 = inst_136393;
var state_136425__$1 = (function (){var statearr_136437 = state_136425;
(statearr_136437[(7)] = inst_136386);

(statearr_136437[(8)] = inst_136385);

(statearr_136437[(11)] = inst_136403);

(statearr_136437[(12)] = inst_136405);

return statearr_136437;
})();
var statearr_136438_136468 = state_136425__$1;
(statearr_136438_136468[(2)] = null);

(statearr_136438_136468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (9))){
var inst_136385 = (state_136425[(8)]);
var inst_136401 = cljs.core.vec.call(null,inst_136385);
var state_136425__$1 = state_136425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136425__$1,(11),out,inst_136401);
} else {
if((state_val_136426 === (5))){
var inst_136389 = (state_136425[(9)]);
var inst_136386 = (state_136425[(7)]);
var inst_136393 = (state_136425[(10)]);
var inst_136393__$1 = f.call(null,inst_136389);
var inst_136394 = cljs.core._EQ_.call(null,inst_136393__$1,inst_136386);
var inst_136395 = cljs.core.keyword_identical_QMARK_.call(null,inst_136386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_136396 = (inst_136394) || (inst_136395);
var state_136425__$1 = (function (){var statearr_136439 = state_136425;
(statearr_136439[(10)] = inst_136393__$1);

return statearr_136439;
})();
if(cljs.core.truth_(inst_136396)){
var statearr_136440_136469 = state_136425__$1;
(statearr_136440_136469[(1)] = (8));

} else {
var statearr_136441_136470 = state_136425__$1;
(statearr_136441_136470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (14))){
var inst_136418 = (state_136425[(2)]);
var inst_136419 = cljs.core.async.close_BANG_.call(null,out);
var state_136425__$1 = (function (){var statearr_136443 = state_136425;
(statearr_136443[(13)] = inst_136418);

return statearr_136443;
})();
var statearr_136444_136471 = state_136425__$1;
(statearr_136444_136471[(2)] = inst_136419);

(statearr_136444_136471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (10))){
var inst_136408 = (state_136425[(2)]);
var state_136425__$1 = state_136425;
var statearr_136445_136472 = state_136425__$1;
(statearr_136445_136472[(2)] = inst_136408);

(statearr_136445_136472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_136426 === (8))){
var inst_136389 = (state_136425[(9)]);
var inst_136385 = (state_136425[(8)]);
var inst_136393 = (state_136425[(10)]);
var inst_136398 = inst_136385.push(inst_136389);
var tmp136442 = inst_136385;
var inst_136385__$1 = tmp136442;
var inst_136386 = inst_136393;
var state_136425__$1 = (function (){var statearr_136446 = state_136425;
(statearr_136446[(7)] = inst_136386);

(statearr_136446[(14)] = inst_136398);

(statearr_136446[(8)] = inst_136385__$1);

return statearr_136446;
})();
var statearr_136447_136473 = state_136425__$1;
(statearr_136447_136473[(2)] = null);

(statearr_136447_136473[(1)] = (2));


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
});})(c__33352__auto___136459,out))
;
return ((function (switch__33287__auto__,c__33352__auto___136459,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_136451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_136451[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_136451[(1)] = (1));

return statearr_136451;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_136425){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_136425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e136452){if((e136452 instanceof Object)){
var ex__33291__auto__ = e136452;
var statearr_136453_136474 = state_136425;
(statearr_136453_136474[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e136452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__136475 = state_136425;
state_136425 = G__136475;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_136425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_136425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___136459,out))
})();
var state__33354__auto__ = (function (){var statearr_136454 = f__33353__auto__.call(null);
(statearr_136454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___136459);

return statearr_136454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___136459,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484099810646